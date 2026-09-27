# warp-masque
基于 Cloudflare Workers 的 Opera VPN over Cloudflare WARP (MASQUE) 订阅生成服务。  
在 Worker 内完成配置重建，并支持使用环境变量在 Worker 中登录 Proton VPN 获取 WireGuard 落地凭据。
> **本项目基于 [byJoey/warp-masque-actions](https://github.com/byJoey/warp-masque-actions) 修改而来。**  
> 感谢原作者的开源工作。本仓库在部署方式、Proton 凭据获取与运维体验上做了面向「纯 Worker 部署」的改动。
---
功能概览
线路	说明
WARP 直连	Cloudflare WARP / MASQUE 接入
Opera 套娃	MASQUE 打底 + Opera 落地，可换出口地区
Proton 线路	MASQUE 打底 + Proton WireGuard 落地（白名单国家，不限制每国节点数）
管理页可设置密码、查看节点状态、复制订阅链接、手动触发 Proton 登录 / 清除凭据。
---
相对原项目的主要改进
原项目设计是：GitHub Actions 负责登录 Proton / 开户，再把结果推送到 Worker；Worker 主要负责生成 Clash 订阅。
本项目改为 以 Cloudflare Worker 为中心，主要变化如下：
1. 部署与架构
单文件部署：提供一份可直接粘贴的 `_worker.js`，无需再跑 Actions 推送流水线。
去掉 Actions → Worker 的 `/push` 推送接口，避免自定义域名上的 Cloudflare 人机验证导致推送失败。
管理密码 + 永久会话 Token：Token 不按 7 天过期；修改管理密码后旧订阅链接全部失效。
首次设密 / 修改密码时自动生成 随机订阅路径（12 位字母数字），降低路径被猜中的风险。
2. Proton 凭据
在 Cloudflare Dashboard 配置 Secrets：`PROTON_USER`、`PROTON_PASS`。
Worker 内实现 Proton SRP 登录（尽量对齐官方 Linux 客户端请求头，如 `linux-vpn@4.8.2`），申请证书并拉取服务器列表。
取消「每国最多 3 台」限制，白名单国家内符合条件的免费节点全部收录。
定时续期（推荐）：Cron 每天检查；证书 已过期 或 24 小时内将过期 时自动用环境变量重新登录。
订阅兜底：访问订阅链接时，若证书 已经过期 且已配置 Secrets，会触发重建并重登（不依赖是否配置了 Cron）。
管理页展示证书剩余时间（精确到分钟，前端每分钟刷新）。
3. 精简与运维
移除 Windscribe：Cloudflare 共享出口 IP 易被降额（`status=2`），Worker 内开户基本不可用，故从界面与生成逻辑中删除。
配置整包缓存约 4 小时（与原项目类似）：过期后访问订阅会 `rebuild`（其中 Opera 会重新注册账号）。
全局错误捕获，便于排查 1101 等异常。
4. 仍需注意的限制
Proton 在 Worker 登录仍可能触发风控（验证码、设备验证等）；若失败可稍后重试或换时段。
启用 2FA 的账号当前不支持在 Worker 内登录。
本实现为实验性 SRP / API 对接，不保证与官方客户端长期完全一致。
请遵守各服务商服务条款；免费流量对提供方可见，勿用于敏感业务。
---
与原项目如何选择
场景	更合适的方案
希望只维护一个 Worker、用面板填账号	本项目
Actions 推送被挑战页拦截	本项目
接受 Actions 登录 + 推送、要官方 Python 库	原项目
必须稳定使用 Windscribe	原项目（在 Runner 上开户）
---
部署教程
准备
拥有 Cloudflare 账号。
准备 Proton 账号（建议关闭 2FA，或确保可在无 2FA 下登录）。
本仓库中的 `_worker.js`。
步骤一：创建 Worker
打开 Cloudflare Dashboard → Workers 和 Pages → 创建 → 创建 Worker。
进入该 Worker → 编辑代码。
删除默认代码，将本仓库的 `_worker.js` 全文粘贴 进去 → 部署。
步骤二：绑定 KV
Worker → 设置 → 绑定 → 添加 KV 命名空间。
变量名必须为：`KV`（区分大小写）。
选择已有命名空间或新建一个 → 保存。
步骤三：配置 Proton Secrets
Worker → 设置 → 变量和机密 → 添加。
类型选 机密（Secret），添加：
名称	值
`PROTON_USER`	Proton 登录邮箱
`PROTON_PASS`	Proton 密码
保存后如提示需要重新部署，再部署一次。
> 使用 **Secret** 时，明文不会出现在代码编辑界面；仅拥有该账号相应权限的人可在面板中轮换/查看机密配置权限。
步骤四：配置定时触发器（强烈建议）
Worker → 触发器（Triggers） → Cron 触发器。
添加：
```text
0 4 * * *
```
表示每天 UTC 04:00 执行一次检查：仅当证书已过期或 24 小时内将过期时才重新登录。
步骤五：初始化管理密码
浏览器打开 Worker 地址（`*.workers.dev` 或你绑定的自定义域）。
首次进入会要求 设置管理密码（至少 8 位）。
设置成功后自动生成随机 订阅路径，并进入管理页。
步骤六：登录 Proton 并获取订阅
在管理页确认「环境变量」显示已配置 `PROTON_USER` / `PROTON_PASS`。
点击 「用环境变量登录」，等待成功提示（可能需数十秒）。
复制管理页中的 订阅链接（含 token），导入 Clash Verge / 其他兼容客户端。
步骤七：（可选）自定义域名
Worker → 设置 → 域和路由 → 添加自定义域。
按提示完成 DNS。
使用新域名访问管理页与订阅 URL。
---
日常使用说明
操作	说明
更新订阅	客户端「更新配置」会请求订阅 URL；若整包配置在约 4 小时缓存内，可能仍返回旧 yaml（Opera 账号不变属预期）。
Proton 续期	依赖 Cron + 过期兜底；也可在管理页再次点「用环境变量登录」。
修改管理密码	旧 Token 全部失效，订阅路径会重新随机，需更新客户端中的订阅 URL。
清除 Proton	删除 KV 中的证书缓存；若仍配置 Secrets，重建时可能再次自动登录。
忘记管理密码	到对应 KV 中删除键 `auth:cred`（及可选 `auth:claim`），重新打开站点设置密码。
常用 KV 键（排错用）
键	含义
`auth:cred`	管理密码哈希
`settings`	含 `subPath`
`proton:cred`	Proton 证书与节点
`proton:lastRefresh`	上次刷新时间戳
`config:yaml` / `state:meta`	缓存的订阅与元数据
`warp:device`	WARP 设备缓存
---
客户端提示
订阅响应头含 `profile-update-interval: 4`（约 4 小时），部分客户端会据此控制自动更新频率。
若「更新配置」后 Opera 未变、切换配置后又变，多半是 4 小时配置缓存 未过期，并非未访问订阅链接。
Proton 节点依赖证书有效；过期后应等待自动续期或手动登录，再更新订阅。
---
文件说明
文件	说明
`_worker.js`	唯一需要部署到 Cloudflare Workers 的脚本
---
致谢
原项目：byJoey/warp-masque-actions
Cloudflare Workers / WARP、Opera VPN、Proton VPN 等相关生态
---
免责声明
本项目仅供学习与研究。使用第三方网络服务请遵守当地法律法规及服务商条款。作者不对滥用、封号、服务中断或数据安全承担任何责任。
