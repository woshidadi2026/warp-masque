# warp-masque

基于 [byJoey/warp-masque-actions](https://github.com/byJoey/warp-masque-actions) 修改。  
在 Cloudflare Worker 上生成 Clash 订阅（WARP / Opera / Proton）。

## 相对原项目的改动

* **纯 Worker 部署**：一份 `\_worker.js` 即可，去掉 Actions 推送到 Worker
* **Proton 用 Secrets 登录**：面板配置账号密码，Worker 内获取证书与节点
* **会话 Token 永久有效**，改管理密码后失效；设密/改密时随机生成订阅路径
* **Proton 自动续期**：每天 Cron 检查；证书过期或 24h 内将过期则重登；拉订阅时若已过期也会重登
* **不限制** Proton 每国节点数量；**移除** Windscribe（Worker IP 易被降额）

## 部署

1. Cloudflare → **Workers** → 创建 → 粘贴 `_worker.js` → 部署
2. **设置 → 绑定**：KV 命名空间，变量名必须为 `KV`
3. **设置 → 变量和机密**（Secret）：

|名称|说明|
|-|-|
|`PROTON\_USER`|Proton 邮箱|
|`PROTON\_PASS`|Proton 密码|

4. **触发器 → Cron**（建议）：

```text
   0 4 * * *
   ```

   每天 UTC 4:00 检查证书是否需要续期。

5. 打开 Worker 网址 → 设置管理密码 → 点 **用环境变量登录** → 复制订阅链接到客户端

## 说明

* 配置缓存约 **4 小时**，过期后访问订阅会重建（Opera 会换新账号）
* Proton 证书约 **7 天**；建议关闭 2FA
* 忘记管理密码：在 KV 中删除 `auth:cred` 后重新设置
* 请遵守各服务条款；仅供学习研究

## 致谢

[byJoey/warp-masque-actions](https://github.com/byJoey/warp-masque-actions)

