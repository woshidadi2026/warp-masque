// Opera MASQUE Worker + experimental Proton SRP login
// token permanent until password change; Windscribe self-register
// Secrets: PROTON_USER, PROTON_PASS


// ===== bcryptjs =====
globalThis.__bcryptHashSync = (() => {
  // UMD needs a global object; in ESM Workers `this` is undefined.
  const module = { exports: {} };
  const require = function () { throw new Error("no-cjs"); };
  // Prefer assigning via module.exports (CJS branch of UMD)
  (function(u,r){"function"===typeof define&&define.amd?define([],r):"function"===typeof require&&"object"===typeof module&&module&&module.exports?module.exports=r():(u.dcodeIO=u.dcodeIO||{}).bcrypt=r()})(globalThis,function(){function u(e){if("undefined"!==typeof module&&module&&module.exports)try{return require("crypto").randomBytes(e)}catch(d){}try{var c;(self.crypto||self.msCrypto).getRandomValues(c=new Uint32Array(e));return Array.prototype.slice.call(c)}catch(b){}if(!w)throw Error("Neither WebCryptoAPI nor a crypto module is available. Use bcrypt.setRandomFallback to set an alternative");
return w(e)}function r(e,d){for(var c=0,b=0,a=0,f=e.length;a<f;++a)e.charCodeAt(a)===d.charCodeAt(a)?++c:++b;return 0>c?!1:0===b}function H(e){var d=[],c=0;I.encodeUTF16toUTF8(function(){return c>=e.length?null:e.charCodeAt(c++)},function(b){d.push(b)});return d}function x(e,d){var c=0,b=[],a,f;if(0>=d||d>e.length)throw Error("Illegal len: "+d);for(;c<d;){a=e[c++]&255;b.push(s[a>>2&63]);a=(a&3)<<4;if(c>=d){b.push(s[a&63]);break}f=e[c++]&255;a|=f>>4&15;b.push(s[a&63]);a=(f&15)<<2;if(c>=d){b.push(s[a&
63]);break}f=e[c++]&255;a|=f>>6&3;b.push(s[a&63]);b.push(s[f&63])}return b.join("")}function B(e,d){var c=0,b=e.length,a=0,f=[],g,m,h;if(0>=d)throw Error("Illegal len: "+d);for(;c<b-1&&a<d;){h=e.charCodeAt(c++);g=h<q.length?q[h]:-1;h=e.charCodeAt(c++);m=h<q.length?q[h]:-1;if(-1==g||-1==m)break;h=g<<2>>>0;h|=(m&48)>>4;f.push(z(h));if(++a>=d||c>=b)break;h=e.charCodeAt(c++);g=h<q.length?q[h]:-1;if(-1==g)break;h=(m&15)<<4>>>0;h|=(g&60)>>2;f.push(z(h));if(++a>=d||c>=b)break;h=e.charCodeAt(c++);m=h<q.length?
q[h]:-1;h=(g&3)<<6>>>0;h|=m;f.push(z(h));++a}b=[];for(c=0;c<a;c++)b.push(f[c].charCodeAt(0));return b}function v(e,d,c,b){var a,f=e[d],g=e[d+1],f=f^c[0];a=b[f>>>24];a+=b[256|f>>16&255];a^=b[512|f>>8&255];a+=b[768|f&255];g=g^a^c[1];a=b[g>>>24];a+=b[256|g>>16&255];a^=b[512|g>>8&255];a+=b[768|g&255];f=f^a^c[2];a=b[f>>>24];a+=b[256|f>>16&255];a^=b[512|f>>8&255];a+=b[768|f&255];g=g^a^c[3];a=b[g>>>24];a+=b[256|g>>16&255];a^=b[512|g>>8&255];a+=b[768|g&255];f=f^a^c[4];a=b[f>>>24];a+=b[256|f>>16&255];a^=b[512|
f>>8&255];a+=b[768|f&255];g=g^a^c[5];a=b[g>>>24];a+=b[256|g>>16&255];a^=b[512|g>>8&255];a+=b[768|g&255];f=f^a^c[6];a=b[f>>>24];a+=b[256|f>>16&255];a^=b[512|f>>8&255];a+=b[768|f&255];g=g^a^c[7];a=b[g>>>24];a+=b[256|g>>16&255];a^=b[512|g>>8&255];a+=b[768|g&255];f=f^a^c[8];a=b[f>>>24];a+=b[256|f>>16&255];a^=b[512|f>>8&255];a+=b[768|f&255];g=g^a^c[9];a=b[g>>>24];a+=b[256|g>>16&255];a^=b[512|g>>8&255];a+=b[768|g&255];f=f^a^c[10];a=b[f>>>24];a+=b[256|f>>16&255];a^=b[512|f>>8&255];a+=b[768|f&255];g=g^a^
c[11];a=b[g>>>24];a+=b[256|g>>16&255];a^=b[512|g>>8&255];a+=b[768|g&255];f=f^a^c[12];a=b[f>>>24];a+=b[256|f>>16&255];a^=b[512|f>>8&255];a+=b[768|f&255];g=g^a^c[13];a=b[g>>>24];a+=b[256|g>>16&255];a^=b[512|g>>8&255];a+=b[768|g&255];f=f^a^c[14];a=b[f>>>24];a+=b[256|f>>16&255];a^=b[512|f>>8&255];a+=b[768|f&255];g=g^a^c[15];a=b[g>>>24];a+=b[256|g>>16&255];a^=b[512|g>>8&255];a+=b[768|g&255];f=f^a^c[16];e[d]=g^c[17];e[d+1]=f;return e}function t(e,d){for(var c=0,b=0;4>c;++c)b=b<<8|e[d]&255,d=(d+1)%e.length;
return{key:b,offp:d}}function C(e,d,c){for(var b=0,a=[0,0],f=d.length,g=c.length,m,h=0;h<f;h++)m=t(e,b),b=m.offp,d[h]^=m.key;for(h=0;h<f;h+=2)a=v(a,0,d,c),d[h]=a[0],d[h+1]=a[1];for(h=0;h<g;h+=2)a=v(a,0,d,c),c[h]=a[0],c[h+1]=a[1]}function J(e,d,c,b){for(var a=0,f=[0,0],g=c.length,m=b.length,h,l=0;l<g;l++)h=t(d,a),a=h.offp,c[l]^=h.key;for(l=a=0;l<g;l+=2)h=t(e,a),a=h.offp,f[0]^=h.key,h=t(e,a),a=h.offp,f[1]^=h.key,f=v(f,0,c,b),c[l]=f[0],c[l+1]=f[1];for(l=0;l<m;l+=2)h=t(e,a),a=h.offp,f[0]^=h.key,h=t(e,
a),a=h.offp,f[1]^=h.key,f=v(f,0,c,b),b[l]=f[0],b[l+1]=f[1]}function D(e,d,c,b,a){function f(){a&&a(n/c);if(n<c)for(var h=Date.now();n<c&&!(n+=1,C(e,l,k),C(d,l,k),100<Date.now()-h););else{for(n=0;64>n;n++)for(y=0;y<m>>1;y++)v(g,y<<1,l,k);h=[];for(n=0;n<m;n++)h.push((g[n]>>24&255)>>>0),h.push((g[n]>>16&255)>>>0),h.push((g[n]>>8&255)>>>0),h.push((g[n]&255)>>>0);if(b){b(null,h);return}return h}b&&p(f)}var g=E.slice(),m=g.length,h;if(4>c||31<c){h=Error("Illegal number of rounds (4-31): "+c);if(b){p(b.bind(this,
h));return}throw h;}if(16!==d.length){h=Error("Illegal salt length: "+d.length+" != 16");if(b){p(b.bind(this,h));return}throw h;}c=1<<c>>>0;var l,k,n=0,y;Int32Array?(l=new Int32Array(F),k=new Int32Array(G)):(l=F.slice(),k=G.slice());J(d,e,l,k);if("undefined"!==typeof b)f();else for(;;)if("undefined"!==typeof(h=f()))return h||[]}function A(e,d,c,b){function a(a){var b=[];b.push("$2");"a"<=f&&b.push(f);b.push("$");10>l&&b.push("0");b.push(l.toString());b.push("$");b.push(x(k,k.length));b.push(x(a,4*
E.length-1));return b.join("")}if("string"!==typeof e||"string"!==typeof d){b=Error("Invalid string / salt: Not a string");if(c){p(c.bind(this,b));return}throw b;}var f,g;if("$"!==d.charAt(0)||"2"!==d.charAt(1)){b=Error("Invalid salt version: "+d.substring(0,2));if(c){p(c.bind(this,b));return}throw b;}if("$"===d.charAt(2))f=String.fromCharCode(0),g=3;else{f=d.charAt(2);if("a"!==f&&"b"!==f&&"y"!==f||"$"!==d.charAt(3)){b=Error("Invalid salt revision: "+d.substring(2,4));if(c){p(c.bind(this,b));return}throw b;
}g=4}if("$"<d.charAt(g+2)){b=Error("Missing salt rounds");if(c){p(c.bind(this,b));return}throw b;}var m=10*parseInt(d.substring(g,g+1),10),h=parseInt(d.substring(g+1,g+2),10),l=m+h;d=d.substring(g+3,g+25);e=H(e+("a"<=f?"\x00":""));var k=B(d,16);if("undefined"==typeof c)return a(D(e,k,l));D(e,k,l,function(b,d){b?c(b,null):c(null,a(d))},b)}var k={},w=null;try{u(1)}catch(K){}w=null;k.setRandomFallback=function(e){w=e};k.genSaltSync=function(e,d){e=e||10;if("number"!==typeof e)throw Error("Illegal arguments: "+
typeof e+", "+typeof d);4>e?e=4:31<e&&(e=31);var c=[];c.push("$2a$");10>e&&c.push("0");c.push(e.toString());c.push("$");c.push(x(u(16),16));return c.join("")};k.genSalt=function(e,d,c){function b(a){p(function(){try{a(null,k.genSaltSync(e))}catch(b){a(b)}})}"function"===typeof d&&(c=d,d=void 0);"function"===typeof e&&(c=e,e=void 0);if("undefined"===typeof e)e=10;else if("number"!==typeof e)throw Error("illegal arguments: "+typeof e);if(c){if("function"!==typeof c)throw Error("Illegal callback: "+
typeof c);b(c)}else return new Promise(function(a,c){b(function(b,d){b?c(b):a(d)})})};k.hashSync=function(e,d){"undefined"===typeof d&&(d=10);"number"===typeof d&&(d=k.genSaltSync(d));if("string"!==typeof e||"string"!==typeof d)throw Error("Illegal arguments: "+typeof e+", "+typeof d);return A(e,d)};k.hash=function(e,d,c,b){function a(a){"string"===typeof e&&"number"===typeof d?k.genSalt(d,function(c,d){A(e,d,a,b)}):"string"===typeof e&&"string"===typeof d?A(e,d,a,b):p(a.bind(this,Error("Illegal arguments: "+
typeof e+", "+typeof d)))}if(c){if("function"!==typeof c)throw Error("Illegal callback: "+typeof c);a(c)}else return new Promise(function(b,c){a(function(a,d){a?c(a):b(d)})})};k.compareSync=function(e,d){if("string"!==typeof e||"string"!==typeof d)throw Error("Illegal arguments: "+typeof e+", "+typeof d);return 60!==d.length?!1:r(k.hashSync(e,d.substr(0,d.length-31)),d)};k.compare=function(e,d,c,b){function a(a){"string"!==typeof e||"string"!==typeof d?p(a.bind(this,Error("Illegal arguments: "+typeof e+
", "+typeof d))):60!==d.length?p(a.bind(this,null,!1)):k.hash(e,d.substr(0,29),function(b,c){b?a(b):a(null,r(c,d))},b)}if(c){if("function"!==typeof c)throw Error("Illegal callback: "+typeof c);a(c)}else return new Promise(function(b,c){a(function(a,d){a?c(a):b(d)})})};k.getRounds=function(e){if("string"!==typeof e)throw Error("Illegal arguments: "+typeof e);return parseInt(e.split("$")[2],10)};k.getSalt=function(e){if("string"!==typeof e)throw Error("Illegal arguments: "+typeof e);if(60!==e.length)throw Error("Illegal hash length: "+
e.length+" != 60");return e.substring(0,29)};var p="undefined"!==typeof process&&process&&"function"===typeof process.nextTick?"function"===typeof setImmediate?setImmediate:process.nextTick:setTimeout,s="./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),q=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,54,55,56,57,58,59,60,61,62,63,-1,-1,-1,-1,-1,-1,-1,2,3,4,5,6,7,8,9,10,11,12,
13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,-1,-1,-1,-1,-1,-1,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,-1,-1,-1,-1,-1],z=String.fromCharCode,I=function(){var e={MAX_CODEPOINT:1114111,encodeUTF8:function(d,c){var b=null;"number"===typeof d&&(b=d,d=function(){return null});for(;null!==b||null!==(b=d());)128>b?c(b&127):(2048>b?c(b>>6&31|192):(65536>b?c(b>>12&15|224):(c(b>>18&7|240),c(b>>12&63|128)),c(b>>6&63|128)),c(b&63|128)),b=null},decodeUTF8:function(d,c){for(var b,
a,f,e,k=function(a){a=a.slice(0,a.indexOf(null));var b=Error(a.toString());b.name="TruncatedError";b.bytes=a;throw b;};null!==(b=d());)if(0===(b&128))c(b);else if(192===(b&224))null===(a=d())&&k([b,a]),c((b&31)<<6|a&63);else if(224===(b&240))null!==(a=d())&&null!==(f=d())||k([b,a,f]),c((b&15)<<12|(a&63)<<6|f&63);else if(240===(b&248))null!==(a=d())&&null!==(f=d())&&null!==(e=d())||k([b,a,f,e]),c((b&7)<<18|(a&63)<<12|(f&63)<<6|e&63);else throw RangeError("Illegal starting byte: "+b);},UTF16toUTF8:function(d,
c){for(var b,a=null;null!==(b=null!==a?a:d());)55296<=b&&57343>=b&&null!==(a=d())&&56320<=a&&57343>=a?(c(1024*(b-55296)+a-56320+65536),a=null):c(b);null!==a&&c(a)},UTF8toUTF16:function(d,c){var b=null;"number"===typeof d&&(b=d,d=function(){return null});for(;null!==b||null!==(b=d());)65535>=b?c(b):(b-=65536,c((b>>10)+55296),c(b%1024+56320)),b=null},encodeUTF16toUTF8:function(d,c){e.UTF16toUTF8(d,function(b){e.encodeUTF8(b,c)})},decodeUTF8toUTF16:function(d,c){e.decodeUTF8(d,function(b){e.UTF8toUTF16(b,
c)})},calculateCodePoint:function(d){return 128>d?1:2048>d?2:65536>d?3:4},calculateUTF8:function(d){for(var c,b=0;null!==(c=d());)b+=e.calculateCodePoint(c);return b},calculateUTF16asUTF8:function(d){var c=0,b=0;e.UTF16toUTF8(d,function(a){++c;b+=e.calculateCodePoint(a)});return[c,b]}};return e}();Date.now=Date.now||function(){return+new Date};var F=[608135816,2242054355,320440878,57701188,2752067618,698298832,137296536,3964562569,1160258022,953160567,3193202383,887688300,3232508343,3380367581,1065670069,
3041331479,2450970073,2306472731],G=[3509652390,2564797868,805139163,3491422135,3101798381,1780907670,3128725573,4046225305,614570311,3012652279,134345442,2240740374,1667834072,1901547113,2757295779,4103290238,227898511,1921955416,1904987480,2182433518,2069144605,3260701109,2620446009,720527379,3318853667,677414384,3393288472,3101374703,2390351024,1614419982,1822297739,2954791486,3608508353,3174124327,2024746970,1432378464,3864339955,2857741204,1464375394,1676153920,1439316330,715854006,3033291828,
289532110,2706671279,2087905683,3018724369,1668267050,732546397,1947742710,3462151702,2609353502,2950085171,1814351708,2050118529,680887927,999245976,1800124847,3300911131,1713906067,1641548236,4213287313,1216130144,1575780402,4018429277,3917837745,3693486850,3949271944,596196993,3549867205,258830323,2213823033,772490370,2760122372,1774776394,2652871518,566650946,4142492826,1728879713,2882767088,1783734482,3629395816,2517608232,2874225571,1861159788,326777828,3124490320,2130389656,2716951837,967770486,
1724537150,2185432712,2364442137,1164943284,2105845187,998989502,3765401048,2244026483,1075463327,1455516326,1322494562,910128902,469688178,1117454909,936433444,3490320968,3675253459,1240580251,122909385,2157517691,634681816,4142456567,3825094682,3061402683,2540495037,79693498,3249098678,1084186820,1583128258,426386531,1761308591,1047286709,322548459,995290223,1845252383,2603652396,3431023940,2942221577,3202600964,3727903485,1712269319,422464435,3234572375,1170764815,3523960633,3117677531,1434042557,
442511882,3600875718,1076654713,1738483198,4213154764,2393238008,3677496056,1014306527,4251020053,793779912,2902807211,842905082,4246964064,1395751752,1040244610,2656851899,3396308128,445077038,3742853595,3577915638,679411651,2892444358,2354009459,1767581616,3150600392,3791627101,3102740896,284835224,4246832056,1258075500,768725851,2589189241,3069724005,3532540348,1274779536,3789419226,2764799539,1660621633,3471099624,4011903706,913787905,3497959166,737222580,2514213453,2928710040,3937242737,1804850592,
3499020752,2949064160,2386320175,2390070455,2415321851,4061277028,2290661394,2416832540,1336762016,1754252060,3520065937,3014181293,791618072,3188594551,3933548030,2332172193,3852520463,3043980520,413987798,3465142937,3030929376,4245938359,2093235073,3534596313,375366246,2157278981,2479649556,555357303,3870105701,2008414854,3344188149,4221384143,3956125452,2067696032,3594591187,2921233993,2428461,544322398,577241275,1471733935,610547355,4027169054,1432588573,1507829418,2025931657,3646575487,545086370,
48609733,2200306550,1653985193,298326376,1316178497,3007786442,2064951626,458293330,2589141269,3591329599,3164325604,727753846,2179363840,146436021,1461446943,4069977195,705550613,3059967265,3887724982,4281599278,3313849956,1404054877,2845806497,146425753,1854211946,1266315497,3048417604,3681880366,3289982499,290971E4,1235738493,2632868024,2414719590,3970600049,1771706367,1449415276,3266420449,422970021,1963543593,2690192192,3826793022,1062508698,1531092325,1804592342,2583117782,2714934279,4024971509,
1294809318,4028980673,1289560198,2221992742,1669523910,35572830,157838143,1052438473,1016535060,1802137761,1753167236,1386275462,3080475397,2857371447,1040679964,2145300060,2390574316,1461121720,2956646967,4031777805,4028374788,33600511,2920084762,1018524850,629373528,3691585981,3515945977,2091462646,2486323059,586499841,988145025,935516892,3367335476,2599673255,2839830854,265290510,3972581182,2759138881,3795373465,1005194799,847297441,406762289,1314163512,1332590856,1866599683,4127851711,750260880,
613907577,1450815602,3165620655,3734664991,3650291728,3012275730,3704569646,1427272223,778793252,1343938022,2676280711,2052605720,1946737175,3164576444,3914038668,3967478842,3682934266,1661551462,3294938066,4011595847,840292616,3712170807,616741398,312560963,711312465,1351876610,322626781,1910503582,271666773,2175563734,1594956187,70604529,3617834859,1007753275,1495573769,4069517037,2549218298,2663038764,504708206,2263041392,3941167025,2249088522,1514023603,1998579484,1312622330,694541497,2582060303,
2151582166,1382467621,776784248,2618340202,3323268794,2497899128,2784771155,503983604,4076293799,907881277,423175695,432175456,1378068232,4145222326,3954048622,3938656102,3820766613,2793130115,2977904593,26017576,3274890735,3194772133,1700274565,1756076034,4006520079,3677328699,720338349,1533947780,354530856,688349552,3973924725,1637815568,332179504,3949051286,53804574,2852348879,3044236432,1282449977,3583942155,3416972820,4006381244,1617046695,2628476075,3002303598,1686838959,431878346,2686675385,
1700445008,1080580658,1009431731,832498133,3223435511,2605976345,2271191193,2516031870,1648197032,4164389018,2548247927,300782431,375919233,238389289,3353747414,2531188641,2019080857,1475708069,455242339,2609103871,448939670,3451063019,1395535956,2413381860,1841049896,1491858159,885456874,4264095073,4001119347,1565136089,3898914787,1108368660,540939232,1173283510,2745871338,3681308437,4207628240,3343053890,4016749493,1699691293,1103962373,3625875870,2256883143,3830138730,1031889488,3479347698,1535977030,
4236805024,3251091107,2132092099,1774941330,1199868427,1452454533,157007616,2904115357,342012276,595725824,1480756522,206960106,497939518,591360097,863170706,2375253569,3596610801,1814182875,2094937945,3421402208,1082520231,3463918190,2785509508,435703966,3908032597,1641649973,2842273706,3305899714,1510255612,2148256476,2655287854,3276092548,4258621189,236887753,3681803219,274041037,1734335097,3815195456,3317970021,1899903192,1026095262,4050517792,356393447,2410691914,3873677099,3682840055,3913112168,
2491498743,4132185628,2489919796,1091903735,1979897079,3170134830,3567386728,3557303409,857797738,1136121015,1342202287,507115054,2535736646,337727348,3213592640,1301675037,2528481711,1895095763,1721773893,3216771564,62756741,2142006736,835421444,2531993523,1442658625,3659876326,2882144922,676362277,1392781812,170690266,3921047035,1759253602,3611846912,1745797284,664899054,1329594018,3901205900,3045908486,2062866102,2865634940,3543621612,3464012697,1080764994,553557557,3656615353,3996768171,991055499,
499776247,1265440854,648242737,3940784050,980351604,3713745714,1749149687,3396870395,4211799374,3640570775,1161844396,3125318951,1431517754,545492359,4268468663,3499529547,1437099964,2702547544,3433638243,2581715763,2787789398,1060185593,1593081372,2418618748,4260947970,69676912,2159744348,86519011,2512459080,3838209314,1220612927,3339683548,133810670,1090789135,1078426020,1569222167,845107691,3583754449,4072456591,1091646820,628848692,1613405280,3757631651,526609435,236106946,48312990,2942717905,
3402727701,1797494240,859738849,992217954,4005476642,2243076622,3870952857,3732016268,765654824,3490871365,2511836413,1685915746,3888969200,1414112111,2273134842,3281911079,4080962846,172450625,2569994100,980381355,4109958455,2819808352,2716589560,2568741196,3681446669,3329971472,1835478071,660984891,3704678404,4045999559,3422617507,3040415634,1762651403,1719377915,3470491036,2693910283,3642056355,3138596744,1364962596,2073328063,1983633131,926494387,3423689081,2150032023,4096667949,1749200295,3328846651,
309677260,2016342300,1779581495,3079819751,111262694,1274766160,443224088,298511866,1025883608,3806446537,1145181785,168956806,3641502830,3584813610,1689216846,3666258015,3200248200,1692713982,2646376535,4042768518,1618508792,1610833997,3523052358,4130873264,2001055236,3610705100,2202168115,4028541809,2961195399,1006657119,2006996926,3186142756,1430667929,3210227297,1314452623,4074634658,4101304120,2273951170,1399257539,3367210612,3027628629,1190975929,2062231137,2333990788,2221543033,2438960610,
1181637006,548689776,2362791313,3372408396,3104550113,3145860560,296247880,1970579870,3078560182,3769228297,1714227617,3291629107,3898220290,166772364,1251581989,493813264,448347421,195405023,2709975567,677966185,3703036547,1463355134,2715995803,1338867538,1343315457,2802222074,2684532164,233230375,2599980071,2000651841,3277868038,1638401717,4028070440,3237316320,6314154,819756386,300326615,590932579,1405279636,3267499572,3150704214,2428286686,3959192993,3461946742,1862657033,1266418056,963775037,
2089974820,2263052895,1917689273,448879540,3550394620,3981727096,150775221,3627908307,1303187396,508620638,2975983352,2726630617,1817252668,1876281319,1457606340,908771278,3720792119,3617206836,2455994898,1729034894,1080033504,976866871,3556439503,2881648439,1522871579,1555064734,1336096578,3548522304,2579274686,3574697629,3205460757,3593280638,3338716283,3079412587,564236357,2993598910,1781952180,1464380207,3163844217,3332601554,1699332808,1393555694,1183702653,3581086237,1288719814,691649499,2847557200,
2895455976,3193889540,2717570544,1781354906,1676643554,2592534050,3230253752,1126444790,2770207658,2633158820,2210423226,2615765581,2414155088,3127139286,673620729,2805611233,1269405062,4015350505,3341807571,4149409754,1057255273,2012875353,2162469141,2276492801,2601117357,993977747,3918593370,2654263191,753973209,36408145,2530585658,25011837,3520020182,2088578344,530523599,2918365339,1524020338,1518925132,3760827505,3759777254,1202760957,3985898139,3906192525,674977740,4174734889,2031300136,2019492241,
3983892565,4153806404,3822280332,352677332,2297720250,60907813,90501309,3286998549,1016092578,2535922412,2839152426,457141659,509813237,4120667899,652014361,1966332200,2975202805,55981186,2327461051,676427537,3255491064,2882294119,3433927263,1307055953,942726286,933058658,2468411793,3933900994,4215176142,1361170020,2001714738,2830558078,3274259782,1222529897,1679025792,2729314320,3714953764,1770335741,151462246,3013232138,1682292957,1483529935,471910574,1539241949,458788160,3436315007,1807016891,
3718408830,978976581,1043663428,3165965781,1927990952,4200891579,2372276910,3208408903,3533431907,1412390302,2931980059,4132332400,1947078029,3881505623,4168226417,2941484381,1077988104,1320477388,886195818,18198404,3786409E3,2509781533,112762804,3463356488,1866414978,891333506,18488651,661792760,1628790961,3885187036,3141171499,876946877,2693282273,1372485963,791857591,2686433993,3759982718,3167212022,3472953795,2716379847,445679433,3561995674,3504004811,3574258232,54117162,3331405415,2381918588,
3769707343,4154350007,1140177722,4074052095,668550556,3214352940,367459370,261225585,2610173221,4209349473,3468074219,3265815641,314222801,3066103646,3808782860,282218597,3406013506,3773591054,379116347,1285071038,846784868,2669647154,3771962079,3550491691,2305946142,453669953,1268987020,3317592352,3279303384,3744833421,2610507566,3859509063,266596637,3847019092,517658769,3462560207,3443424879,370717030,4247526661,2224018117,4143653529,4112773975,2788324899,2477274417,1456262402,2901442914,1517677493,
1846949527,2295493580,3734397586,2176403920,1280348187,1908823572,3871786941,846861322,1172426758,3287448474,3383383037,1655181056,3139813346,901632758,1897031941,2986607138,3066810236,3447102507,1393639104,373351379,950779232,625454576,3124240540,4148612726,2007998917,544563296,2244738638,2330496472,2058025392,1291430526,424198748,50039436,29584100,3605783033,2429876329,2791104160,1057563949,3255363231,3075367218,3463963227,1469046755,985887462],E=[1332899944,1700884034,1701343084,1684370003,1668446532,
1869963892];k.encodeBase64=x;k.decodeBase64=B;return k});
  const bcrypt = (module.exports && typeof module.exports.hashSync === "function")
    ? module.exports
    : (globalThis.dcodeIO && globalThis.dcodeIO.bcrypt);
  if (!bcrypt || typeof bcrypt.hashSync !== "function") {
    throw new Error("bcryptjs failed to initialize in Worker");
  }
  return function bcryptHashSync(password, salt) {
    return bcrypt.hashSync(password, salt);
  };
})();

// ===== md5.js =====
// Digest 认证要 MD5，WebCrypto 不提供，只能自己实现。
// 标准 RFC 1321，约 50 行。
function md5Hex(str) {
  const msg = new TextEncoder().encode(str);
  const S = [7,12,17,22,7,12,17,22,7,12,17,22,7,12,17,22,
             5,9,14,20,5,9,14,20,5,9,14,20,5,9,14,20,
             4,11,16,23,4,11,16,23,4,11,16,23,4,11,16,23,
             6,10,15,21,6,10,15,21,6,10,15,21,6,10,15,21];
  const K = new Uint32Array(64);
  for (let i = 0; i < 64; i++) K[i] = Math.floor(Math.abs(Math.sin(i + 1)) * 4294967296);

  const len = msg.length;
  const withOne = len + 1;
  const padLen = ((withOne + 8 + 63) & ~63);
  const buf = new Uint8Array(padLen);
  buf.set(msg);
  buf[len] = 0x80;
  const dv = new DataView(buf.buffer);
  dv.setUint32(padLen - 8, (len << 3) >>> 0, true);
  dv.setUint32(padLen - 4, Math.floor(len / 536870912), true);

  let a0 = 0x67452301, b0 = 0xefcdab89, c0 = 0x98badcfe, d0 = 0x10325476;
  const rol = (x, c) => (x << c) | (x >>> (32 - c));

  for (let off = 0; off < padLen; off += 64) {
    const M = new Uint32Array(16);
    for (let i = 0; i < 16; i++) M[i] = dv.getUint32(off + i * 4, true);
    let A = a0, B = b0, C = c0, D = d0;
    for (let i = 0; i < 64; i++) {
      let F, g;
      if (i < 16)      { F = (B & C) | (~B & D);          g = i; }
      else if (i < 32) { F = (D & B) | (~D & C);          g = (5 * i + 1) % 16; }
      else if (i < 48) { F = B ^ C ^ D;                   g = (3 * i + 5) % 16; }
      else             { F = C ^ (B | ~D);                g = (7 * i) % 16; }
      F = (F + A + K[i] + M[g]) >>> 0;
      A = D; D = C; C = B;
      B = (B + rol(F, S[i])) >>> 0;
    }
    a0 = (a0 + A) >>> 0; b0 = (b0 + B) >>> 0;
    c0 = (c0 + C) >>> 0; d0 = (d0 + D) >>> 0;
  }

  const out = new Uint8Array(16);
  const odv = new DataView(out.buffer);
  odv.setUint32(0, a0, true); odv.setUint32(4, b0, true);
  odv.setUint32(8, c0, true); odv.setUint32(12, d0, true);
  return [...out].map((b) => b.toString(16).padStart(2, "0")).join("");
}


// ===== auth.js =====
// 鉴权。密码存 KV，不走环境变量。
//
// 几个必须做到的点:
//   - 密码只存 PBKDF2 哈希 + 随机盐，KV 里看不到明文
//   - 会话 token 用哈希当密钥签名，所以改密码会自动让旧 token 全部失效
//   - token 永久有效（不过期），只有改密码才会失效
//   - 常数时间比较，别让内容从响应时间里漏出去
//   - 登录失败限速，否则弱密码几分钟就被爆出来
const auth_enc = new TextEncoder();

const auth_ITER = 10000;   // PBKDF2 轮数，Workers 上约几十毫秒，可接受

// Cookie / 订阅 token 在浏览器侧的 Max-Age（约 10 年）。真正校验不看过期时间，
// 只看密码哈希是否仍匹配；改密码后旧 token 立刻全部失效。
const SESSION_MAX_AGE = 10 * 365 * 24 * 3600;

const auth_b64 = (buf) => btoa(String.fromCharCode(...new Uint8Array(buf)));

/** 常数时间字符串比较。长度差异也异或进去，不提前 return。 */
function safeEqual(a, b) {
  const x = auth_enc.encode(a || "");
  const y = auth_enc.encode(b || "");
  const n = Math.max(x.length, y.length);
  let diff = x.length ^ y.length;
  for (let i = 0; i < n; i++) diff |= (x[i] || 0) ^ (y[i] || 0);
  return diff === 0;
}

async function auth_pbkdf2(password, saltB64, iter = auth_ITER) {
  const salt = Uint8Array.from(atob(saltB64), (c) => c.charCodeAt(0));
  const key = await crypto.subtle.importKey(
    "raw", auth_enc.encode(password), "PBKDF2", false, ["deriveBits"]);
  const bits = await crypto.subtle.deriveBits(
    { name: "PBKDF2", salt, iterations: iter, hash: "SHA-256" }, key, 256);
  return auth_b64(bits);
}

/** 生成密码记录，存进 KV 的就是这个对象。 */
async function makeCred(password) {
  const s = new Uint8Array(16);
  crypto.getRandomValues(s);
  const salt = auth_b64(s);
  return {
    salt,
    iter: auth_ITER,
    hash: await auth_pbkdf2(password, salt, auth_ITER),
    updatedAt: new Date().toISOString(),
  };
}

async function checkPassword(cred, password) {
  if (!cred || !cred.hash) return false;
  const h = await auth_pbkdf2(password, cred.salt, cred.iter || auth_ITER);
  return safeEqual(h, cred.hash);
}

async function auth_hmac(secret, msg) {
  const key = await crypto.subtle.importKey(
    "raw", auth_enc.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sig = await crypto.subtle.sign("HMAC", key, auth_enc.encode(msg));
  return auth_b64(sig).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

/** 永久 token：payload 固定为 "perm"，用密码哈希签名。
 *  改密码 -> 哈希变 -> 所有旧 token 自动失效。没有时间过期。 */
async function signToken(cred) {
  return `perm.${await auth_hmac(cred.hash, "perm")}`;
}

async function verifyToken(cred, token) {
  if (!cred || !cred.hash || !token || !token.includes(".")) return false;
  const i = token.lastIndexOf(".");
  const payload = token.slice(0, i);
  const sig = token.slice(i + 1);
  // 新格式：永久 token
  if (payload === "perm") {
    return safeEqual(sig, await auth_hmac(cred.hash, "perm"));
  }
  // 兼容旧版带过期时间的 token（仍校验签名；已过期的拒绝）
  if (/^\d+$/.test(payload)) {
    if (Number(payload) < Date.now()) return false;
    return safeEqual(sig, await auth_hmac(cred.hash, payload));
  }
  return false;
}

function readCookie(req, name) {
  const raw = req.headers.get("cookie") || "";
  for (const part of raw.split(";")) {
    const [k, ...v] = part.trim().split("=");
    if (k === name) return v.join("=");
  }
  return null;
}

/** 登录限速：同一 IP 15 分钟内失败 8 次就锁 15 分钟。 */
async function rateLimit(env, ip) {
  const key = `rl:${ip}`;
  const n = Number((await env.KV.get(key)) || 0);
  if (n >= 8) return false;
  await env.KV.put(key, String(n + 1), { expirationTtl: 900 });
  return true;
}

async function clearRateLimit(env, ip) {
  await env.KV.delete(`rl:${ip}`);
}

/** 订阅路径只允许字母数字和横杠下划线，避免路由被搞乱。 */

function randomSubPath(len = 12) {
  const cs = "abcdefghijklmnopqrstuvwxyz0123456789";
  const a = new Uint8Array(len);
  crypto.getRandomValues(a);
  return Array.from(a, (b) => cs[b % cs.length]).join("");
}

function normalizePath(p) {
  const clean = String(p || "").trim().replace(/^\/+|\/+$/g, "");
  if (!clean) return null;
  if (!/^[A-Za-z0-9_-]{1,64}$/.test(clean)) return null;
  const reserved = ["login", "logout", "api", "setup"];
  if (reserved.includes(clean.toLowerCase())) return null;
  return clean;
}


// ===== warp.js =====
// Cloudflare WARP 注册 + MASQUE 公钥 enroll。
// 全程 fetch + WebCrypto，Workers 原生能跑。
const warp_API = "https://api.cloudflareclient.com/v0a4471";
const warp_H = {
  "User-Agent": "WARP for Android",
  "CF-Client-Version": "a-6.35-4471",
  "Content-Type": "application/json; charset=UTF-8",
};

const warp_b64 = (buf) => btoa(String.fromCharCode(...new Uint8Array(buf)));

function warp_randB64(n) {
  const a = new Uint8Array(n);
  crypto.getRandomValues(a);
  return btoa(String.fromCharCode(...a));
}

function warp_randHex(n) {
  const a = new Uint8Array(n);
  crypto.getRandomValues(a);
  return [...a].map((b) => b.toString(16).padStart(2, "0")).join("");
}

// CF 要 "2006-01-02T15:04:05.000-07:00" 这个格式
function warp_cfTime() {
  return new Date().toISOString().replace("Z", "+00:00");
}

/** 注册一台新 WARP 设备并把 MASQUE 公钥挂上去。 */
async function registerWarp(deviceName = "cf-worker") {
  const reg = await fetch(`${warp_API}/reg`, {
    method: "POST",
    headers: warp_H,
    body: JSON.stringify({
      key: warp_randB64(32),
      install_id: "",
      fcm_token: "",
      tos: warp_cfTime(),
      model: "PC",
      serial_number: warp_randHex(8),
      os_version: "",
      key_type: "curve25519",
      tunnel_type: "wireguard",
      locale: "en-US",
    }),
  });
  if (!reg.ok) {
    throw new Error(`WARP 注册失败 ${reg.status}: ${(await reg.text()).slice(0, 200)}`);
  }
  const acc = await reg.json();

  // MASQUE 用 P-256，和 WireGuard 那套密钥不通用
  const kp = await crypto.subtle.generateKey(
    { name: "ECDSA", namedCurve: "P-256" }, true, ["sign", "verify"]);
  const spki = warp_b64(await crypto.subtle.exportKey("spki", kp.publicKey));
  const pkcs8 = warp_b64(await crypto.subtle.exportKey("pkcs8", kp.privateKey));
  // mihomo 要 SEC1，WebCrypto 只给 PKCS8，得转一道
  const sec1 = pkcs8ToSec1(pkcs8);

  const patch = await fetch(`${warp_API}/reg/${acc.id}`, {
    method: "PATCH",
    headers: { ...warp_H, Authorization: `Bearer ${acc.token}` },
    body: JSON.stringify({
      key: spki,
      key_type: "secp256r1",
      tunnel_type: "masque",
      name: deviceName,
    }),
  });
  if (!patch.ok) {
    throw new Error(`MASQUE enroll 失败 ${patch.status}: ${(await patch.text()).slice(0, 200)}`);
  }
  const up = await patch.json();

  // peer 公钥回来是 PEM，mihomo 要剥掉头尾的裸 base64
  const pem = up.config?.peers?.[0]?.public_key || "";
  const peerPub = pem.includes("-----")
    ? pem.split("\n").filter((l) => l && !l.startsWith("-----")).join("")
    : pem;

  return {
    deviceId: acc.id,
    token: acc.token,
    privateKey: sec1,
    peerPublicKey: peerPub,
    ipv4: up.config?.interface?.addresses?.v4 || acc.config?.interface?.addresses?.v4,
    ipv6: up.config?.interface?.addresses?.v6 || acc.config?.interface?.addresses?.v6,
    registeredAt: new Date().toISOString(),
  };
}

/** PKCS8 -> SEC1(RFC 5915)，带 P-256 曲线参数。
 *
 * WebCrypto 只能导出 PKCS8，mihomo 要 SEC1，直接喂会报
 * "use ParsePKCS8PrivateKey instead"。
 *
 * 但只把 PKCS8 里那段 OCTET STRING 抠出来还不够：WebCrypto 生成的
 * 内层 SEC1 省略了曲线参数（放在 PKCS8 外层的 AlgorithmIdentifier 里），
 * mihomo 会报 "unknown elliptic curve"。所以要重新编码一份带
 * [0] namedCurve 的完整 SEC1。
 *
 * SEC1 结构:
 *   SEQUENCE {
 *     INTEGER 1
 *     OCTET STRING  privateKey (32 字节)
 *     [0] { OID 1.2.840.10045.3.1.7 }   -- prime256v1
 *     [1] { BIT STRING publicKey }
 *   }
 */
function pkcs8ToSec1(b64pkcs8) {
  const der = Uint8Array.from(atob(b64pkcs8), (c) => c.charCodeAt(0));

  // 读一个 DER TLV: [tag, 值起始, 值长度, 下一个 TLV 起始]
  const warp_tlv = (pos) => {
    const tag = der[pos];
    let len = der[pos + 1];
    let p = pos + 2;
    if (len & 0x80) {
      const n = len & 0x7f;
      len = 0;
      for (let k = 0; k < n; k++) len = (len << 8) | der[p + k];
      p += n;
    }
    return [tag, p, len, p + len];
  };

  let i = warp_tlv(0)[1];            // 进最外层 SEQUENCE
  i = warp_tlv(i)[3];                // 跳过 version
  i = warp_tlv(i)[3];                // 跳过 AlgorithmIdentifier
  const [tag, start, len] = warp_tlv(i);
  if (tag !== 0x04) throw new Error("PKCS8 结构不符合预期");

  // 内层 SEC1，可能已带也可能不带曲线参数
  const inner = der.subarray(start, start + len);
  let j = warp_tlv2(inner, 0)[1];
  j = warp_tlv2(inner, j)[3];                       // 跳过 version
  const [ptag, pstart, plen] = warp_tlv2(inner, j); // privateKey OCTET STRING
  if (ptag !== 0x04) throw new Error("SEC1 结构不符合预期");
  const rawKey = inner.subarray(pstart, pstart + plen);

  // prime256v1 = 1.2.840.10045.3.1.7
  const oid = [0x06, 0x08, 0x2a, 0x86, 0x48, 0xce, 0x3d, 0x03, 0x01, 0x07];
  const body = [
    0x02, 0x01, 0x01,                          // version = 1
    0x04, rawKey.length, ...rawKey,            // privateKey
    0xa0, oid.length, ...oid,                  // [0] namedCurve
  ];
  const out = [0x30, ...warp_derLen(body.length), ...body];
  return btoa(String.fromCharCode(...out));
}

function warp_tlv2(buf, pos) {
  const tag = buf[pos];
  let len = buf[pos + 1];
  let p = pos + 2;
  if (len & 0x80) {
    const n = len & 0x7f;
    len = 0;
    for (let k = 0; k < n; k++) len = (len << 8) | buf[p + k];
    p += n;
  }
  return [tag, p, len, p + len];
}

function warp_derLen(n) {
  if (n < 0x80) return [n];
  if (n < 0x100) return [0x81, n];
  return [0x82, n >> 8, n & 0xff];
}


// ===== opera.js =====
// Opera VPN (SurfEasy) 匿名注册与落地发现。
// 坑一: API 用 Digest 认证不是 Basic，要先吃一个 401 拿 nonce。
// 坑二: 服务端声明 algorithm="SHA-256"，不是 Digest 默认的 MD5。
//       按服务端声明的算法走，同时保留 MD5 兜底。
// 坑三: Workers 的 fetch 不自动管 cookie，会话得手工维持。
const opera_EP = "https://api2.sec-tunnel.com/v4";
const opera_API_USER = "se0316";
const opera_API_PASS = "SILrMEPBmJuhomxWkfm3JalqHX2Eheg1YhlEZiMh8II";
const opera_CLIENT_TYPE = "se0316";
const opera_H = {
  "SE-Client-Version": "Stable 114.0.5282.21",
  "SE-Operating-System": "Windows",
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 " +
    "(KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 OPR/114.0.0.0",
  "Content-Type": "application/x-www-form-urlencoded",
  "Accept": "application/json",
};

const REGIONS = { AS: "亚洲", EU: "欧洲", AM: "美洲" };

/** Digest 的 opera_H()。服务端目前用 SHA-256，老实现是 MD5，两个都支持。 */
async function opera_digestHash(algo, s) {
  if (/^md5$/i.test(algo)) return md5Hex(s);
  const name = /512/.test(algo) ? "SHA-512" : "SHA-256";
  const d = await crypto.subtle.digest(name, new TextEncoder().encode(s));
  return [...new Uint8Array(d)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

async function opera_sha1Upper(s) {
  const d = await crypto.subtle.digest("SHA-1", new TextEncoder().encode(s));
  return [...new Uint8Array(d)]
    .map((b) => b.toString(16).padStart(2, "0")).join("").toUpperCase();
}

function opera_randHex(n) {
  const a = new Uint8Array(n);
  crypto.getRandomValues(a);
  return [...a].map((b) => b.toString(16).padStart(2, "0")).join("");
}

class opera_Session {
  constructor() { this.jar = ""; }

  _absorb(r) {
    const sc = r.headers.getSetCookie?.() || [];
    if (sc.length) this.jar = sc.map((c) => c.split(";")[0]).join("; ");
  }

  async rpc(path, params) {
    const url = `${opera_EP}/${path}`;
    const body = new URLSearchParams(params).toString();
    const base = () => ({ ...opera_H, ...(this.jar ? { Cookie: this.jar } : {}) });

    let r = await fetch(url, { method: "POST", headers: base(), body });
    if (r.status === 401) {
      const wa = r.headers.get("www-authenticate") || "";
      const g = (k) => (wa.match(new RegExp(`${k}="([^"]*)"`)) || [])[1] || "";
      const realm = g("realm"), nonce = g("nonce"), qop = g("qop"), opaque = g("opaque");
      // algorithm 可能不带引号，两种写法都认
      const algo = g("algorithm") ||
        (wa.match(/algorithm=([\w-]+)/) || [])[1] || "MD5";
      const uri = new URL(url).pathname;
      const cnonce = opera_randHex(8), nc = "00000001";
      const H1 = await opera_digestHash(algo, `${opera_API_USER}:${realm}:${opera_API_PASS}`);
      const H2 = await opera_digestHash(algo, `POST:${uri}`);
      const q = qop ? qop.split(",")[0].trim() : "";
      const resp = q
        ? await opera_digestHash(algo, `${H1}:${nonce}:${nc}:${cnonce}:${q}:${H2}`)
        : await opera_digestHash(algo, `${H1}:${nonce}:${H2}`);
      let a = `Digest username="${opera_API_USER}", realm="${realm}", nonce="${nonce}", ` +
              `uri="${uri}", response="${resp}", algorithm=${algo}`;
      if (q) a += `, qop=${q}, nc=${nc}, cnonce="${cnonce}"`;
      if (opaque) a += `, opaque="${opaque}"`;
      this._absorb(r);
      r = await fetch(url, {
        method: "POST",
        headers: { ...base(), Authorization: a },
        body,
      });
    }
    this._absorb(r);
    if (!r.ok) throw new Error(`${path} HTTP ${r.status}`);
    const j = await r.json();
    if (j.status && j.status.code !== 0) {
      throw new Error(`${path} code=${j.status.code} ${j.status.message || ""}`);
    }
    return j;
  }
}

/** 匿名注册一个 Opera 账号，返回全部大区的落地清单和代理凭据。 */
async function fetchOpera() {
  const s = new opera_Session();

  // 邮箱随机，密码就是邮箱的 SHA-1 大写
  const email = `${opera_randHex(10)}@${opera_CLIENT_TYPE}.best.vpn`;
  await s.rpc("register_subscriber", { email, password: await opera_sha1Upper(email) });

  const dev = await s.rpc("register_device", {
    client_type: opera_CLIENT_TYPE,
    device_hash: opera_randHex(20).toUpperCase(),
    device_name: "Opera-Browser-Client",
  });
  const deviceId = dev.data.device_id;
  const idHash = await opera_sha1Upper(deviceId);

  const gp = await s.rpc("device_generate_password", { device_id: deviceId });
  const password = gp.data.device_password;

  const landings = [];
  for (const [code, loc] of Object.entries(REGIONS)) {
    let disc;
    try {
      disc = await s.rpc("discover", { serial_no: idHash, requested_geo: code });
    } catch {
      continue;   // 某个区拿不到就跳过，不影响其他区
    }
    let seq = 0;
    for (const x of disc.data.ips || []) {
      seq += 1;
      landings.push({
        tag: `${loc}${seq}`,
        loc,
        ip: x.ip,
        port: (x.port && x.port[0]) || 443,
        host: `${code.toLowerCase()}${seq - 1}.sec-tunnel.com`,
      });
    }
  }

  return { username: idHash, password, landings, fetchedAt: new Date().toISOString() };
}


// ===== proton.js =====
// Proton 凭据：解析 blob + Worker 内 SRP 登录（实验性，尽量模拟官方 Linux 客户端）
//
// 指纹对齐 gen_proton.py / 官方库：
//   x-pm-appversion: linux-vpn@4.8.2
//   User-Agent: ProtonVPN/4.8.2 (Linux; Ubuntu/24.04)
//
// 说明：共享 CF 出口 IP 仍可能被风控；失败时请改用粘贴 blob。

const pr_API = "https://account.proton.me/api";
// 部分环境也用 mail-api；VPN 客户端常用 account + vpn 路径
const pr_API_ALT = "https://api.protonvpn.ch";

const pr_APPVERSION = "linux-vpn@4.8.2";
const pr_UA = "ProtonVPN/4.8.2 (Linux; Ubuntu/24.04)";

const pr_WANT = {
  JP: "日本", SG: "新加坡", US: "美国", NL: "荷兰",
  CH: "瑞士", CA: "加拿大", PL: "波兰", RO: "罗马尼亚",
  NO: "挪威", MX: "墨西哥",
};

function pr_baseHeaders(extra = {}) {
  return {
    "Content-Type": "application/json",
    Accept: "application/vnd.protonmail.v1+json",
    "x-pm-appversion": pr_APPVERSION,
    "x-pm-apiversion": "3",
    "User-Agent": pr_UA,
    ...extra,
  };
}

function pr_b64enc(u8) {
  let s = "";
  for (let i = 0; i < u8.length; i++) s += String.fromCharCode(u8[i]);
  return btoa(s);
}
function pr_b64dec(s) {
  const bin = atob(s);
  const u8 = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i);
  return u8;
}

/** 从 PGP clearsigned 消息中取出 modulus 明文（不验签，降低 Worker 复杂度） */
function extractModulus(signed) {
  const m = String(signed).match(
    /-----BEGIN PGP SIGNED MESSAGE-----\r?\n(?:Hash:[^\n]*\r?\n)*\r?\n([\s\S]*?)\r?\n-----BEGIN PGP SIGNATURE-----/
  );
  if (!m) throw new Error("无法解析 SRP Modulus（PGP 格式异常）");
  const b64 = m[1].replace(/\s+/g, "");
  return pr_b64dec(b64);
}

async function pr_sha512(data) {
  const buf = data instanceof Uint8Array ? data : new TextEncoder().encode(data);
  return new Uint8Array(await crypto.subtle.digest("SHA-512", buf));
}

/** Proton expandHash: SHA512(data||0)||...||SHA512(data||3) */
async function expandHash(data) {
  const out = new Uint8Array(256);
  for (let i = 0; i < 4; i++) {
    const part = new Uint8Array(data.length + 1);
    part.set(data);
    part[data.length] = i;
    out.set(await pr_sha512(part), i * 64);
  }
  return out;
}

// ----- minimal bcrypt (compatible with $2y$/$2a$, cost 10) -----
// Adapted subset sufficient for Proton SRP password hashing.
const B64 =
  "./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function bcryptEncode(u8, len) {
  let off = 0, rs = "";
  while (off < len) {
    let c1 = u8[off++];
    rs += B64[c1 >> 2];
    c1 = ((c1 & 3) << 4);
    if (off >= len) { rs += B64[c1]; break; }
    const c2 = u8[off++];
    c1 |= c2 >> 4;
    rs += B64[c1];
    c1 = ((c2 & 15) << 2);
    if (off >= len) { rs += B64[c1]; break; }
    const c3 = u8[off++];
    c1 |= c3 >> 6;
    rs += B64[c1] + B64[c3 & 63];
  }
  return rs;
}

// Use bcryptjs via dynamic evaluation from embedded source would bloat;
// Proton needs bcrypt with fixed salt string. We implement via WebAssembly-free
// pure JS from a compact port: use SubtleCrypto Pbkdf2 is NOT bcrypt.
// Embed bcryptjs as string and eval once.

let _bcryptHashSync = null;
async function ensureBcrypt() {
  if (_bcryptHashSync) return _bcryptHashSync;
  // Inline minimal: call external pure implementation
  // Workers: importScripts not available in module workers.
  // We ship a tiny bcrypt hash for cost=10 only.
  const { bcryptHashSync } = await importBcrypt();
  _bcryptHashSync = bcryptHashSync;
  return _bcryptHashSync;
}

// Placeholder filled by build step - actual bcrypt from bcryptjs
async function importBcrypt() {
  if (typeof globalThis.__bcryptHashSync === "function") {
    return { bcryptHashSync: globalThis.__bcryptHashSync };
  }
  throw new Error("bcrypt 未加载：请使用打包后的 _worker.js");
}

function protonB64Salt(salt) {
  // bcrypt custom alphabet encode of (salt || "proton")
  const src = new Uint8Array(salt.length + 6);
  src.set(salt);
  src.set(new TextEncoder().encode("proton"), salt.length);
  return bcryptEncode(src, src.length);
}

async function hashPasswordV4(password, salt, modulus) {
  const bcrypt = await ensureBcrypt();
  const encodedSalt = protonB64Salt(salt);
  // bcrypt expects full salt string $2y$10$ + 22 char salt
  const saltStr = "$2y$10$" + encodedSalt.slice(0, 22);
  const crypted = bcrypt(password, saltStr); // returns $2y$10$... full hash string
  const cryptedBytes = new TextEncoder().encode(crypted);
  const combined = new Uint8Array(cryptedBytes.length + modulus.length);
  combined.set(cryptedBytes);
  combined.set(modulus, cryptedBytes.length);
  return expandHash(combined);
}

function reverseInPlace(b) {
  for (let i = 0, j = b.length - 1; i < j; i++, j--) {
    const t = b[i]; b[i] = b[j]; b[j] = t;
  }
}

function itoa(bi, bitLen) {
  const byteLen = bitLen / 8;
  let hex = bi.toString(16);
  if (hex.length % 2) hex = "0" + hex;
  const arr = new Uint8Array(byteLen);
  const fromHex = new Uint8Array(hex.length / 2);
  for (let i = 0; i < fromHex.length; i++) {
    fromHex[i] = parseInt(hex.slice(i * 2, i * 2 + 2), 16);
  }
  arr.set(fromHex, byteLen - fromHex.length);
  reverseInPlace(arr);
  return arr;
}

function atoi(bytes) {
  const b = bytes.slice();
  reverseInPlace(b);
  let hex = "";
  for (let i = 0; i < b.length; i++) hex += b[i].toString(16).padStart(2, "0");
  return BigInt("0x" + hex || "0");
}

function modPow(base, exp, mod) {
  let r = 1n;
  base %= mod;
  while (exp > 0n) {
    if (exp & 1n) r = (r * base) % mod;
    base = (base * base) % mod;
    exp >>= 1n;
  }
  return r;
}

async function generateProofs(modulusBytes, hashedBytes, serverEphemeralBytes) {
  const L = 2048;
  const generator = 2n;
  const modulus = atoi(modulusBytes);
  const hashed = atoi(hashedBytes);
  const serverEphemeral = atoi(serverEphemeralBytes);
  const modulusMinusOne = modulus - 1n;

  if (modulus.toString(2).length !== L) {
    // BitLen approximate
    const bl = modulus.toString(2).length;
    if (bl < L - 8 || bl > L) throw new Error(`SRP modulus size ${bl} != ${L}`);
  }

  const multBytes = await expandHash(
    (() => {
      const g = itoa(generator, L);
      const o = new Uint8Array(g.length + modulusBytes.length);
      o.set(g); o.set(modulusBytes, g.length);
      return o;
    })()
  );
  let multiplier = atoi(multBytes) % modulus;
  if (multiplier <= 1n || multiplier >= modulusMinusOne) {
    throw new Error("SRP multiplier out of bounds");
  }
  if (serverEphemeral <= 1n || serverEphemeral >= modulusMinusOne) {
    throw new Error("SRP server ephemeral out of bounds");
  }

  let clientSecret, clientEphemeral, scramblingParam;
  for (let attempt = 0; attempt < 32; attempt++) {
    const rnd = new Uint8Array(256);
    crypto.getRandomValues(rnd);
    clientSecret = atoi(rnd) % modulusMinusOne;
    if (clientSecret <= BigInt(L * 2)) continue;
    clientEphemeral = modPow(generator, clientSecret, modulus);
    const ce = itoa(clientEphemeral, L);
    const se = itoa(serverEphemeral, L);
    const scrambleIn = new Uint8Array(ce.length + se.length);
    scrambleIn.set(ce); scrambleIn.set(se, ce.length);
    scramblingParam = atoi(await expandHash(scrambleIn));
    if (scramblingParam === 0n) continue;
    break;
  }

  let subtracted =
    serverEphemeral -
    ((modPow(generator, hashed, modulus) * multiplier) % modulus);
  if (subtracted < 0n) subtracted += modulus;
  const exponent =
    (scramblingParam * hashed + clientSecret) % modulusMinusOne;
  const sharedSession = modPow(subtracted, exponent, modulus);

  const ceB = itoa(clientEphemeral, L);
  const seB = itoa(serverEphemeral, L);
  const ssB = itoa(sharedSession, L);

  const proofIn = new Uint8Array(ceB.length + seB.length + ssB.length);
  proofIn.set(ceB); proofIn.set(seB, ceB.length); proofIn.set(ssB, ceB.length + seB.length);
  const clientProof = await expandHash(proofIn);

  const spIn = new Uint8Array(ceB.length + clientProof.length + ssB.length);
  spIn.set(ceB); spIn.set(clientProof, ceB.length); spIn.set(ssB, ceB.length + clientProof.length);
  const expectedServerProof = await expandHash(spIn);

  return { clientEphemeral: ceB, clientProof, expectedServerProof };
}

async function apiFetch(url, { method = "GET", headers = {}, body, uid, token } = {}) {
  const h = pr_baseHeaders({
    ...headers,
    ...(uid ? { "x-pm-uid": uid } : {}),
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  });
  const r = await fetch(url, {
    method,
    headers: h,
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await r.text();
  let j;
  try { j = JSON.parse(text); } catch {
    throw new Error(`Proton pr_API 非 JSON HTTP ${r.status}: ${text.slice(0, 160)}`);
  }
  if (!r.ok || (j.Code && j.Code !== 1000 && j.Code !== 1001)) {
    const code = j.Code || r.status;
    const msg = j.Error || j.ErrorDescription || text.slice(0, 160);
    if (code === 9001) throw new Error("需要人机验证 (CAPTCHA)，Worker 无法完成");
    if (code === 9002) throw new Error("需要设备验证，Worker 无法完成");
    if (code === 8002) throw new Error("账号或密码错误");
    throw new Error(`Proton pr_API ${code}: ${msg}`);
  }
  return j;
}

/**
 * 使用 PROTON_USER / PROTON_PASS 登录并产出与 blob 同结构的凭据对象。
 * 需要全局 __bcryptHashSync（由 _worker.js 注入）。
 */
async function loginAndFetch(username, password) {
  if (!username || !password) throw new Error("缺少 PROTON_USER 或 PROTON_PASS");

  // 1) auth/info
  const info = await apiFetch(`${pr_API}/core/v4/auth/info`, {
    method: "POST",
    body: { Username: username, Intent: "Proton" },
  });

  const version = info.Version || 4;
  if (version < 3) throw new Error(`不支持的 SRP 版本 ${version}`);

  const modulus = extractModulus(info.Modulus);
  const salt = pr_b64dec(info.Salt);
  const serverEphemeral = pr_b64dec(info.ServerEphemeral);

  const hashed = await hashPasswordV4(password, salt, modulus);
  const proofs = await generateProofs(modulus, hashed, serverEphemeral);

  // 2) auth
  const auth = await apiFetch(`${pr_API}/core/v4/auth`, {
    method: "POST",
    body: {
      Username: username,
      ClientEphemeral: pr_b64enc(proofs.clientEphemeral),
      ClientProof: pr_b64enc(proofs.clientProof),
      SRPSession: info.SRPSession,
    },
  });

  if (auth.ServerProof) {
    const sp = pr_b64dec(auth.ServerProof);
    if (sp.length !== proofs.expectedServerProof.length) {
      throw new Error("ServerProof 长度不匹配");
    }
    let diff = 0;
    for (let i = 0; i < sp.length; i++) diff |= sp[i] ^ proofs.expectedServerProof[i];
    if (diff) throw new Error("ServerProof 校验失败");
  }

  if (auth["2FA"] && (auth["2FA"].Enabled || auth["2FA"].TOTP)) {
    throw new Error("账号启用了 2FA，Worker 暂不支持，请关闭 2FA 或改用粘贴 blob");
  }

  const uid = auth.UID || auth.Uid;
  const token = auth.AccessToken;
  if (!uid || !token) throw new Error("登录响应缺少 UID/AccessToken");

  // 3) 生成 Ed25519 密钥并申请证书
  // Workers 较新版本支持 Ed25519
  let rawSk, pem;
  try {
    const kp = await crypto.subtle.generateKey({ name: "Ed25519" }, true, ["sign", "verify"]);
    const pkcs8 = new Uint8Array(await crypto.subtle.exportKey("pkcs8", kp.privateKey));
    // PKCS8 Ed25519 private key: last 32 bytes are seed
    rawSk = pkcs8.slice(pkcs8.length - 32);
    const spki = new Uint8Array(await crypto.subtle.exportKey("spki", kp.publicKey));
    // SPKI for Ed25519: last 32 bytes public key
    const pubRaw = spki.slice(spki.length - 32);
    // Build PEM SubjectPublicKeyInfo - re-export SPKI as PEM
    const b64 = pr_b64enc(spki);
    const lines = b64.match(/.{1,64}/g).join("\n");
    pem = `-----BEGIN PUBLIC KEY-----\n${lines}\n-----END PUBLIC KEY-----`;
  } catch (e) {
    throw new Error("当前 Worker 运行时不支持 Ed25519: " + e.message);
  }

  const cert = await apiFetch(`${pr_API}/vpn/v1/certificate`, {
    method: "POST",
    uid, token,
    body: {
      ClientPublicKey: pem,
      Mode: "session",
      Duration: "10080 min",
      DeviceName: "cf-worker",
    },
  });
  // 有的部署走 vpn host
  // 若 404 可重试 pr_API_ALT —— 先用 account 路径

  const exp = cert.ExpirationTime;
  if (!exp) throw new Error("证书响应缺少 ExpirationTime");

  // Ed25519 seed -> WireGuard X25519 private key (Proton 算法)
  const h = new Uint8Array(await pr_sha512(rawSk)).slice(0, 32);
  h[0] &= 248;
  h[31] &= 127;
  h[31] |= 64;
  const privateKey = pr_b64enc(h);

  // 4) logicals
  let lg;
  try {
    lg = await apiFetch(`${pr_API}/vpn/logicals`, { uid, token });
  } catch {
    lg = await apiFetch(`${pr_API_ALT}/vpn/logicals`, { uid, token });
  }

  const free = (lg.LogicalServers || []).filter((x) => x.Tier === 0);
  const picked = [], byCc = {};
  for (const srv of free.sort((a, b) => (a.Score || 99) - (b.Score || 99))) {
    const cc = srv.ExitCountry;
    // 不再限制每国台数，白名单内全部收录
    if (!pr_WANT[cc]) continue;
    const phys = (srv.Servers || [{}])[0];
    const pub = phys.X25519PublicKey;
    const ip = phys.EntryIP;
    if (!pub || !ip) continue;
    byCc[cc] = (byCc[cc] || 0) + 1;
    picked.push({
      name: `${pr_WANT[cc]}${byCc[cc]}`,
      cc, ip, port: 51820, pub,
    });
  }
  if (!picked.length) throw new Error("未找到可用的免费 Proton 节点");

  return {
    v: 1,
    privateKey,
    expiresAt: exp,
    generatedAt: Math.floor(Date.now() / 1000),
    servers: picked,
  };
}

function parseBlob(text) {
  const raw = String(text || "").trim().replace(/\s+/g, "");
  if (!raw) throw new Error("内容为空");
  let obj;
  try {
    obj = JSON.parse(atob(raw));
  } catch {
    throw new Error("解析失败，确认复制完整了（应该是一长串字母数字，没有换行）");
  }
  if (obj.v !== 1) throw new Error(`不认识的版本 v${obj.v}`);
  if (!obj.privateKey || !Array.isArray(obj.servers) || !obj.servers.length) {
    throw new Error("内容不完整");
  }
  if (obj.expiresAt && obj.expiresAt * 1000 < Date.now()) {
    throw new Error("这份凭据已经过期了");
  }
  return obj;
}

function protonNodes(proton, dialerProxy) {
  return proton.servers.map((s) => {
    const dp = dialerProxy ? `\n    dialer-proxy: ${dialerProxy}` : "";
    return `  - name: "${s.name}"
    type: wireguard
    server: ${s.ip}
    port: ${s.port}
    ip: 10.2.0.2
    private-key: ${proton.privateKey}
    public-key: ${s.pub}
    udp: true
    mtu: 1280
    remote-dns-resolve: true
    dns: [10.2.0.1]${dp}`;
  });
}

const protonNames = (proton) => proton.servers.map((s) => s.name);


// ===== windscribe.js =====
// Windscribe 免费落地。
//
// 和 Proton 不同，这家的认证只有一行 md5(secret + 时间戳)，没有 SRP、
// 没有 PGP 验签，所以整套流程能直接在 Worker 里跑完。
//
// 注册不要邮箱：POST /Users 给个用户名密码就返回 session_auth_hash。
// 免费额度 2GB/月（官网说的 10GB 要验证邮箱，这里拿不到）。
//
// 坑：开户和出口 IP 强相关。同一个 IP 开过号之后再开，会拿到
// status=2 的降额账号（traffic_max=1MB），而且那种号连 /ServerCredentials
// 都取不到（400 errorCode 1700），等于完全不可用。
//
// Cloudflare Worker 的出口 IP 是全平台共享的，早被人用过，所以
// **Worker 里开不出可用的号**。registerWindscribe 只在 GitHub Actions
// 的 runner 上跑（scripts/gen_wind.py），Worker 这边只消费账号。

const ws_CLIENT_AUTH_SECRET = "952b4412f002315aa50751032fcaab03";
const ws_API = "https://api.windscribe.com";
const ws_ASSETS = "https://assets.windscribe.com/serverlist";
const ws_PROXY_PORT = 443;

const ws_H = {
  "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 " +
    "(KHTML, like Gecko) Chrome/103.0.5060.53 Safari/537.36",
  "Origin": "chrome-extension://hnmpcagpplmpfojmgmnngilcnanddlhb",
  "Accept": "application/json",
};

// 免费能用的地区 -> 中文名。serverlist 里 premium_only=0 的就这些。
const ws_CC = {
  "US-C": "美国中部", "US": "美国东部", "US-W": "美国西部",
  "CA": "加拿大东部", "CA-W": "加拿大西部",
  "FR": "法国", "DE": "德国", "NL": "荷兰", "NO": "挪威",
  "RO": "罗马尼亚", "CH": "瑞士", "GB": "英国", "HK": "香港",
};

/** client_auth_hash = md5(固定 secret + 当前秒数)。 */
function ws_authHash() {
  const t = Math.floor(Date.now() / 1000);
  return { hash: md5Hex(ws_CLIENT_AUTH_SECRET + String(t)), time: t };
}

function ws_randName(n) {
  const a = new Uint8Array(n);
  crypto.getRandomValues(a);
  const cs = "abcdefghijklmnopqrstuvwxyz0123456789";
  return [...a].map((b) => cs[b % cs.length]).join("");
}

function ws_randPass() {
  const a = new Uint8Array(16);
  crypto.getRandomValues(a);
  const cs = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  return [...a].map((b) => cs[b % cs.length]).join("") + "!aA9";
}

async function ws_call(url, init) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 8000);
  let r, text;
  try {
    r = await fetch(url, {
      ...init,
      signal: ctrl.signal,
      headers: { ...ws_H, ...(init?.headers || {}) },
    });
    text = await r.text();
  } catch (e) {
    clearTimeout(timer);
    if (e && e.name === "AbortError") throw new Error("请求超时（8s）");
    throw new Error("无法连接: " + ((e && e.message) || e));
  }
  clearTimeout(timer);
  let j;
  try { j = JSON.parse(text); } catch {
    throw new Error(`HTTP ${r.status} 非 JSON: ${text.slice(0, 120)}`);
  }
  if (!j.data) {
    const msg = (j.errorMessage || j.errorCode || j.message || text).toString().slice(0, 200);
    throw new Error(`API ${r.status}: ${msg}`);
  }
  return j.data;
}

/** 匿名开户。返回的 session_auth_hash 是后续所有调用的凭证。 */
async function registerWindscribe() {
  const { hash, time } = ws_authHash();
  const username = "u" + ws_randName(9);
  const password = ws_randPass();
  const d = await ws_call(`${ws_API}/Users`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_auth_hash: hash,
      time: String(time),
      session_type_id: "2",
      username,
      password,
    }).toString(),
  });
  if (d.status !== 1) {
    throw new Error(
      `账号异常 status=${d.status} traffic_max=${d.traffic_max || "?"}。` +
      `Cloudflare Worker 共享出口 IP 已被 Windscribe 标记，通常无法在此开出可用号。`
    );
  }
  return {
    username,
    password,
    userId: d.user_id,
    sessionAuthHash: d.session_auth_hash,
    locHash: d.loc_hash,
    trafficMax: d.traffic_max,
    registeredAt: new Date().toISOString(),
  };
}

/** 代理用户名/密码。接口返回的是 base64 包过一层的。 */
async function fetchCredentials(acc) {
  const { hash, time } = ws_authHash();
  const q = new URLSearchParams({
    client_auth_hash: hash,
    session_auth_hash: acc.sessionAuthHash,
    time: String(time),
  });
  const d = await ws_call(`${ws_API}/ServerCredentials?${q}`);
  return { username: atob(d.username), password: atob(d.password) };
}

/** 账号还剩多少流量。管理页显示用，也用来判断要不要换号。 */
async function fetchSession(acc) {
  const { hash, time } = ws_authHash();
  const q = new URLSearchParams({
    client_auth_hash: hash,
    session_auth_hash: acc.sessionAuthHash,
    time: String(time),
    session_type_id: "2",
  });
  const d = await ws_call(`${ws_API}/Session?${q}`);
  return {
    used: d.traffic_used,
    max: d.traffic_max,
    status: d.status,
    locHash: d.loc_hash,
  };
}

/** 服务器列表。这个接口不要鉴权头，路径里带 loc_hash。 */
async function fetchServers(acc) {
  const r = await fetch(`${ws_ASSETS}/chrome/0/${acc.locHash}`, { headers: ws_H });
  if (!r.ok) throw new Error(`serverlist HTTP ${r.status}`);
  const j = await r.json();
  const out = [];
  for (const c of j.data || []) {
    if (c.premium_only) continue;
    const loc = ws_CC[c.short_name];
    if (!loc) continue;          // 名单外的免费地区不认，避免出现没中文名的节点
    let seq = 0;
    for (const g of c.groups || []) {
      for (const h of g.hosts || []) {
        if (!h.hostname) continue;
        seq += 1;
        out.push({ tag: `${loc}${seq}`, loc, host: h.hostname, port: ws_PROXY_PORT });
      }
    }
  }
  return out;
}

/** 一次拿齐：账号必须由外部给（流水线推来的），这里只取凭据和服务器列表。
 *
 * 不在这里开户 —— Worker 的出口 IP 是 Cloudflare 共享的，
 * Windscribe 只会发 status=2 的降额号，那种号取不到代理凭据。
 * 开户在 scripts/gen_wind.py 里做，跑在 GitHub runner 上。
 */
async function fetchWindscribe(account) {
  if (!account || !account.sessionAuthHash) {
    throw new Error("没有 Windscribe 账号，跑一次流水线推一个过来");
  }
  const [cred, servers] = await Promise.all([
    fetchCredentials(account), fetchServers(account),
  ]);
  return { account, ...cred, servers };
}


// ===== config.js =====
// 生成 mihomo 配置：MASQUE 接入点 x Opera 落地 全组合。
// 接入点清单是真机握手实测筛过的，别往回加 162.159.194/196/197/204
// 和 v6 的 102/105 段 —— 它们回 QUIC 包但 login 失败。
//
// 端口 4443 和 8095 是后来补测出来的，4 个 v4 地址 x 这两个端口 8/8 全通。
const V4 = ["162.159.198.1", "162.159.198.2", "162.159.199.1", "162.159.199.2"];
const V6 = ["2606:4700:103::1", "2606:4700:103::2",
            "2606:4700:104::1", "2606:4700:104::2"];
const PORTS = [443, 500, 1701, 4500, 4443, 8443, 8095];

// CF 没有 A 记录指向 MASQUE 段，官方域名只能用在 SNI 上
const OFFICIAL_SNI = "zt-masque.cloudflareclient.com";
const SNI_NODE = ["162.159.198.1", 443];

const RS = "https://raw.githubusercontent.com";
const RULESETS = [
  ["🎯 全球直连", RS + "/cmliu/ACL4SSR/refs/heads/main/Clash/CFnat.list"],
  ["🎯 全球直连", RS + "/ACL4SSR/ACL4SSR/master/Clash/LocalAreaNetwork.list"],
  ["🎯 全球直连", RS + "/ACL4SSR/ACL4SSR/master/Clash/UnBan.list"],
  ["🛑 全球拦截", RS + "/ACL4SSR/ACL4SSR/master/Clash/BanAD.list"],
  ["🍃 应用净化", RS + "/ACL4SSR/ACL4SSR/master/Clash/BanProgramAD.list"],
  ["🍃 应用净化", RS + "/cmliu/ACL4SSR/main/Clash/adobe.list"],
  ["🍃 应用净化", RS + "/cmliu/ACL4SSR/main/Clash/IDM.list"],
  ["📢 谷歌FCM", RS + "/ACL4SSR/ACL4SSR/master/Clash/Ruleset/GoogleFCM.list"],
  ["🎯 全球直连", RS + "/ACL4SSR/ACL4SSR/master/Clash/GoogleCN.list"],
  ["🎯 全球直连", RS + "/ACL4SSR/ACL4SSR/master/Clash/Ruleset/SteamCN.list"],
  ["Ⓜ️ 微软服务", RS + "/ACL4SSR/ACL4SSR/master/Clash/Microsoft.list"],
  ["🍎 苹果服务", RS + "/ACL4SSR/ACL4SSR/master/Clash/Apple.list"],
  ["📲 电报信息", RS + "/ACL4SSR/ACL4SSR/master/Clash/Telegram.list"],
  ["🤖 AI服务", RS + "/ACL4SSR/ACL4SSR/master/Clash/Ruleset/OpenAi.list"],
  ["🤖 AI服务", RS + "/juewuy/ShellClash/master/rules/ai.list"],
  ["🤖 AI服务", RS + "/cmliu/ACL4SSR/main/Clash/Copilot.list"],
  ["🤖 AI服务", RS + "/cmliu/ACL4SSR/main/Clash/GithubCopilot.list"],
  ["🤖 AI服务", RS + "/cmliu/ACL4SSR/main/Clash/Claude.list"],
  ["🤖 AI服务", RS + "/cmliu/ACL4SSR/main/Clash/Gemini.list"],
  ["📹 油管视频", RS + "/ACL4SSR/ACL4SSR/master/Clash/Ruleset/YouTube.list"],
  ["🎥 奈飞视频", RS + "/ACL4SSR/ACL4SSR/master/Clash/Ruleset/Netflix.list"],
  ["🌍 国外媒体", RS + "/ACL4SSR/ACL4SSR/master/Clash/ProxyMedia.list"],
  ["🌍 国外媒体", RS + "/cmliu/ACL4SSR/main/Clash/Emby.list"],
  ["🚀 节点选择", RS + "/ACL4SSR/ACL4SSR/master/Clash/ProxyLite.list"],
  ["🚀 节点选择", RS + "/cmliu/ACL4SSR/main/Clash/CMBlog.list"],
  ["🎯 全球直连", RS + "/ACL4SSR/ACL4SSR/master/Clash/ChinaDomain.list"],
  ["🎯 全球直连", RS + "/ACL4SSR/ACL4SSR/master/Clash/ChinaCompanyIp.list"]
];

function entryName(ip, port) {
  if (ip.includes(":")) {
    const parts = ip.split(":");
    return `v6-${parts[2]}-${parts[parts.length - 1]}-${port}`;
  }
  return `${ip.split(".").slice(2).join(".")}-${port}`;
}

function masqueNode(name, ip, port, priv, pub, v4, v6, sni) {
  // 裸 IPv6 含冒号，YAML 里必须加引号否则被当成映射
  const srv = ip.includes(":") ? `"${ip}"` : ip;
  const extra = sni ? `\n    sni: ${sni}` : "";
  return `  - name: ${name}
    type: masque
    server: ${srv}
    port: ${port}${extra}
    private-key: ${priv}
    public-key: ${pub}
    ip: ${v4}
    ipv6: ${v6}
    mtu: 1280
    udp: true
    remote-dns-resolve: true
    dns: [1.1.1.1, 2606:4700:4700::1111]`;
}

/** 生成全部 MASQUE 接入点。两种配置都用这批。 */
function buildEntries(warp) {
  const { privateKey: priv, peerPublicKey: pub, ipv4: v4, ipv6: v6 } = warp;
  const entries = [], proxies = [];
  // v4Entries 单独留一份：做 dialer-proxy 目标时只能用 IPv4，
  // 否则纯 IPv4 的机器上会直接 "network is unreachable"。
  const v4Entries = [];
  for (const ip of [...V4, ...V6]) {
    for (const port of PORTS) {
      const n = entryName(ip, port);
      entries.push(n);
      if (!ip.includes(":")) v4Entries.push(n);
      proxies.push(masqueNode(n, ip, port, priv, pub, v4, v6));
    }
  }
  entries.push("官方域名");
  v4Entries.push("官方域名");   // 官方域名节点本身连的是 IPv4
  proxies.push(masqueNode("官方域名", SNI_NODE[0], SNI_NODE[1],
                          priv, pub, v4, v6, OFFICIAL_SNI));
  return { entries, proxies, v4Entries };
}

// 规则集只盖到 OpenAI / Claude / Gemini / Copilot，其他家没人维护。
// 这批是自己补的，走 DOMAIN-SUFFIX 精确匹配。
//
// 注意别往里加 googleapis.com、cloudflare.com、stripe.com 这类共用域名 ——
// 上游的 ai.list 就干了这事（它把整个 googleapis.com 和 bing.com 都算 AI），
// 会把大量无关流量拽进 AI 分组。这里只放各家自己的域名。
const AI_DOMAINS = [
  // OpenAI（规则集已有 openai.com/chatgpt.com/sora.com，这几个是补的）
  "openai.fm", "operator.chatgpt.com", "chat.com",
  // Anthropic
  "anthropic.com", "claude.ai", "claudeusercontent.com",
  // Google
  "gemini.google.com", "aistudio.google.com", "generativelanguage.googleapis.com",
  "notebooklm.google.com", "notebooklm.google", "labs.google", "deepmind.com",
  // xAI
  "x.ai", "grok.com",
  // Meta
  "meta.ai",
  // Perplexity
  "perplexity.ai", "pplx.ai", "perplexity.com",
  // Mistral
  "mistral.ai", "chat.mistral.ai",
  // Cohere / AI21 / Together / Fireworks / Groq
  "cohere.com", "cohere.ai", "ai21.com", "together.ai", "together.xyz",
  "fireworks.ai", "groq.com",
  // 开源社区与推理平台
  "huggingface.co", "hf.co", "huggingface.js.org",
  "replicate.com", "replicate.delivery", "runpod.io", "modal.com",
  "openrouter.ai", "poe.com", "quora.com",
  // 编程助手
  "cursor.com", "cursor.sh", "codeium.com", "windsurf.com",
  "tabnine.com", "sourcegraph.com", "phind.com", "v0.dev", "v0.app",
  "bolt.new", "lovable.dev", "devin.ai", "cognition.ai",
  // 图像与视频
  "midjourney.com", "stability.ai", "stablediffusionweb.com",
  "leonardo.ai", "runwayml.com", "pika.art", "lumalabs.ai",
  "ideogram.ai", "recraft.ai", "krea.ai", "civitai.com",
  // 语音
  "elevenlabs.io", "eleven-labs.com", "play.ht", "suno.com", "suno.ai",
  "udio.com", "assemblyai.com", "deepgram.com",
  // 搜索与写作
  "you.com", "kagi.com", "exa.ai", "tavily.com",
  "jasper.ai", "copy.ai", "writesonic.com", "notion.so",
  // 观测与工具链
  "langchain.com", "langsmith.com", "wandb.ai", "weightsandbiases.com",
  "pinecone.io", "weaviate.io", "qdrant.tech", "chromadb.com",
  // 国产（默认也走代理，很多在国内反而连不上或要境外号）
  "deepseek.com", "moonshot.cn", "moonshotai.com", "kimi.com",
  "bigmodel.cn", "zhipuai.cn", "z.ai",
  "minimaxi.com", "minimax.io", "hailuoai.com",
  "siliconflow.cn", "dashscope.aliyuncs.com",
];

const q = (a, n = 6) => a.map((x) => " ".repeat(n) + `- "${x}"`).join("\n");
const p = (a, n = 6) => a.map((x) => " ".repeat(n) + `- ${x}`).join("\n");

/** rule-providers 和 rules，两种配置共用。 */
function buildRules() {
  const prov = [], rules = [];
  RULESETS.forEach(([group, url], i) => {
    const pn = `rule${String(i).padStart(2, "0")}`;
    prov.push(`  ${pn}:
    type: http
    behavior: classical
    format: text
    interval: 86400
    url: ${url}
    path: ./ruleset/${pn}.list`);
    rules.push(`  - RULE-SET,${pn},${group}`);
  });
  // 内联的 AI 域名放在 RULE-SET 前面，别被上游规则集里更宽的条目抢先命中
  const ai = AI_DOMAINS.map((d) => `  - DOMAIN-SUFFIX,${d},🤖 AI服务`);
  return { prov: prov.join("\n"), rules: [...ai, ...rules].join("\n") };
}

/** 公共头部：端口、DNS、sniffer 那一堆。 */
function head(ipv6) {
  return `mixed-port: 7890
allow-lan: false
mode: rule
log-level: info
ipv6: ${ipv6}
unified-delay: true
tcp-concurrent: true
find-process-mode: 'off'
external-controller: 127.0.0.1:9090

profile:
  store-selected: true
  store-fake-ip: true

sniffer:
  enable: true
  sniff:
    HTTP:
      ports: [80, 8080-8880]
      override-destination: true
    TLS:
      ports: [443, 8443]
    QUIC:
      ports: [443, 8443]
  skip-domain:
    - '+.push.apple.com'
    - '+.apple.com'

dns:
  enable: true
  listen: 0.0.0.0:1053
  ipv6: ${ipv6}
  enhanced-mode: fake-ip
  fake-ip-range: 198.18.0.1/16
  fake-ip-filter:
    - '+.lan'
    - '+.local'
    - '*.msftconnecttest.com'
    - '*.msftncsi.com'
  default-nameserver:
    - 223.5.5.5
    - 119.29.29.29
  nameserver:
    - https://223.5.5.5/dns-query
    - https://1.12.12.12/dns-query
  proxy-server-nameserver:
    - https://223.5.5.5/dns-query
  nameserver-policy:
    'geosite:cn,private':
      - https://223.5.5.5/dns-query
      - https://1.12.12.12/dns-query
    'geosite:geolocation-!cn':
      - https://1.1.1.1/dns-query
      - https://8.8.8.8/dns-query`;
}

/** 下游分组（油管/奈飞/OpenAI 那些），两种配置共用。
 *  picks 是给「节点选择」之外的组用的候选列表。 */
function tailGroups(picks) {
  return `  - name: 📹 油管视频
    type: select
    proxies:
      - 🚀 节点选择
      - ♻️ 自动选择
      - 🔄 故障转移
${p(picks)}

  - name: 🎥 奈飞视频
    type: select
    proxies:
      - 🚀 节点选择
      - ♻️ 自动选择
      - 🔄 故障转移
${p(picks)}

  - name: 🌍 国外媒体
    type: select
    proxies:
      - 🚀 节点选择
      - ♻️ 自动选择
      - 🔄 故障转移
      - 🎯 全球直连

  - name: 📲 电报信息
    type: select
    proxies:
      - 🚀 节点选择
      - ♻️ 自动选择
      - 🎯 全球直连

  - name: 🤖 AI服务
    type: select
    proxies:
      - 🚀 节点选择
      - ♻️ 自动选择
      - 🔄 故障转移
${p(picks)}

  - name: Ⓜ️ 微软服务
    type: select
    proxies:
      - 🎯 全球直连
      - 🚀 节点选择
      - ♻️ 自动选择

  - name: 🍎 苹果服务
    type: select
    proxies:
      - 🎯 全球直连
      - 🚀 节点选择
      - ♻️ 自动选择

  - name: 📢 谷歌FCM
    type: select
    proxies:
      - 🚀 节点选择
      - 🎯 全球直连
      - ♻️ 自动选择

  - name: 🎯 全球直连
    type: select
    proxies:
      - DIRECT
      - 🚀 节点选择
      - ♻️ 自动选择

  - name: 🛑 全球拦截
    type: select
    proxies:
      - REJECT
      - DIRECT

  - name: 🍃 应用净化
    type: select
    proxies:
      - REJECT
      - DIRECT

  - name: 🐟 漏网之鱼
    type: select
    proxies:
      - 🚀 节点选择
      - 🎯 全球直连
      - ♻️ 自动选择`;
}

function buildConfig(warp, opera, proton, wind) {
  const { entries, proxies, v4Entries } = buildEntries(warp);

  // 笛卡尔积：任一接入点或任一落地失效，其他组合仍可用
  const byLoc = {};
  for (const land of opera.landings) {
    for (const ent of entries) {
      const name = `${land.tag}@${ent}`;
      (byLoc[land.loc] ||= []).push(name);
      proxies.push(
        `  - {name: "${name}", type: http, server: ${land.ip}, port: ${land.port}, ` +
        `username: ${opera.username}, password: ${opera.password}, tls: true, ` +
        `sni: ${land.host}, skip-cert-verify: false, dialer-proxy: ${ent}}`);
    }
  }
  const combos = Object.values(byLoc).reduce((a, b) => a + b.length, 0);

  // Proton 落地。28 台 x 41 接入点会爆到上千节点，没必要，
  // 每台轮着分一个接入点即可，接入点挂了还有其他 Proton 节点顶。
  //
  // 只从 v4Entries 里选：WireGuard 的 UDP 要经这个接入点发出去，
  // 分到 IPv6 接入点的话，没有 IPv6 的机器上会全部 network is unreachable。
  let protonNames = [];
  const protonByCC = {};   // 国家 -> 该国节点名，用来按国家分组
  if (proton && proton.servers && proton.servers.length) {
    proton.servers.forEach((srv, i) => {
      const ent = v4Entries[i % v4Entries.length];
      protonNames.push(srv.name);
      // 节点名形如「日本1」，去掉尾号就是国家名
      const cc = srv.name.replace(/\d+$/, "");
      (protonByCC[cc] = protonByCC[cc] || []).push(srv.name);
      proxies.push(`  - name: "${srv.name}"
    type: wireguard
    server: ${srv.ip}
    port: ${srv.port}
    ip: 10.2.0.2
    private-key: ${proton.privateKey}
    public-key: ${srv.pub}
    udp: true
    mtu: 1280
    dialer-proxy: ${ent}`);
    });
  }

  // Windscribe 落地。和 Opera 同构（HTTPS 代理 + Basic），
  // 但免费额度只有 2GB/月，做笛卡尔积没意义 —— 每台轮一个接入点就够。
  // 只从 v4Entries 选，理由同 Proton：纯 IPv4 的机器上 v6 接入点不可达。
  const windNames = [];
  const windByLoc = {};
  if (wind && wind.servers && wind.servers.length) {
    wind.servers.forEach((srv, i) => {
      const ent = v4Entries[i % v4Entries.length];
      const name = `WS-${srv.tag}`;
      windNames.push(name);
      (windByLoc[srv.loc] = windByLoc[srv.loc] || []).push(name);
      proxies.push(
        `  - {name: "${name}", type: http, server: ${srv.host}, port: ${srv.port}, ` +
        `username: ${wind.username}, password: ${wind.password}, tls: true, ` +
        `sni: ${srv.host}, skip-cert-verify: false, dialer-proxy: ${ent}}`);
    });
  }
  const windLocNames = Object.keys(windByLoc).map((l) => `WS-${l}`);
  const windLocDefs = Object.entries(windByLoc).map(([loc, names]) =>
    `  - name: WS-${loc}
    type: url-test
    url: http://www.gstatic.com/generate_204
    interval: 300
    tolerance: 100
    lazy: true
    proxies:
${q(names)}`).join("\n\n");

  // 组合太多没法平铺选，按地区收成 url-test
  const locNames = Object.keys(byLoc).map((l) => `${l}线路`);
  // 接入点本来就在 proxies 里（做 dialer-proxy 的目标），
  // 顺手暴露成一个直连组：套娃慢或落地挂了就切这个，一份订阅够用
  // Proton 按国家分组：外层能选国家，组内 url-test 自动挑最快的那台
  const protonCCNames = Object.keys(protonByCC).map((c) => `Proton-${c}`);
  const protonCCDefs = Object.entries(protonByCC).map(([cc, names]) =>
    `  - name: Proton-${cc}
    type: url-test
    url: http://www.gstatic.com/generate_204
    interval: 300
    tolerance: 100
    lazy: true
    proxies:
${q(names)}`).join("\n\n");

  const picks = [...locNames, "WARP直连"];
  if (protonNames.length) picks.push("Proton线路", ...protonCCNames);
  
  const locDefs = Object.entries(byLoc).map(([loc, tags]) => `  - name: ${loc}线路
    type: url-test
    url: http://www.gstatic.com/generate_204
    interval: 300
    tolerance: 80
    lazy: true
    proxies:
${q(tags)}`).join("\n\n");

  const { prov, rules } = buildRules();

  const yaml = `# Opera VPN over Cloudflare WARP (MASQUE)
# 由 Cloudflare Worker 生成于 ${new Date().toISOString()}
#
# 聚合版：套娃线路和 WARP 直连都在这一份里。
#
#   亚洲/欧洲/美洲线路  本机 -> MASQUE -> Opera 落地 -> 目标（能换出口国家）
#   WARP直连            本机 -> MASQUE -> 目标（出口是 CF 自己的 IP，快）
#
# 节点名 "欧洲1@198.1-443" = 欧洲第 1 个落地，经 162.159.198.1:443 接入。
#
# 接入点 ${entries.length} 个 x 落地 ${opera.landings.length} 个 = 组合 ${combos} 个，
# 外加 ${entries.length} 个直连接入点${protonNames.length ? ` 和 ${protonNames.length} 个 Proton 落地` : ""}${windNames.length ? ` 和 ${windNames.length} 个 Windscribe 落地` : ""}。
# 任一环失效都有替代路径。
#
# 需要 mihomo Alpha 分支：稳定版没有 masque outbound，也不认 dialer-proxy。
# private-key 等同 WARP 账号凭据，别外传。

${head(true)}

proxies:
${proxies.join("\n")}

proxy-groups:
  - name: 🚀 节点选择
    type: select
    proxies:
      - ♻️ 自动选择
${p(picks)}
      - 🔄 故障转移

  - name: ♻️ 自动选择
    type: url-test
    url: http://www.gstatic.com/generate_204
    interval: 300
    tolerance: 50
    lazy: true
    proxies:
${p(picks)}

  - name: 🔄 故障转移
    type: fallback
    url: http://www.gstatic.com/generate_204
    interval: 180
    lazy: true
    proxies:
${p(picks)}

${locDefs}

  - name: WARP直连
    type: url-test
    url: http://www.gstatic.com/generate_204
    interval: 300
    tolerance: 50
    lazy: true
    proxies:
${q(entries)}
${protonNames.length ? `
  - name: Proton线路
    type: select
    proxies:
      - Proton-自动
${p(protonCCNames)}

  - name: Proton-自动
    type: url-test
    url: http://www.gstatic.com/generate_204
    interval: 300
    tolerance: 80
    lazy: true
    proxies:
${q(protonNames)}

${protonCCDefs}
` : ""}${windNames.length ? `
    type: select
    proxies:
      - WS-自动
${p(windLocNames)}

  - name: WS-自动
    type: url-test
    url: http://www.gstatic.com/generate_204
    interval: 300
    tolerance: 80
    lazy: true
    proxies:
${q(windNames)}

${windLocDefs}
` : ""}
${tailGroups(picks)}

rule-providers:
${prov}

rules:
${rules}
  - GEOIP,LAN,🎯 全球直连,no-resolve
  - GEOIP,CN,🎯 全球直连
  - MATCH,🐟 漏网之鱼
`;

  return { yaml, entries: entries.length, landings: opera.landings.length,
           combos, proton: protonNames.length, wind: windNames.length };
}


// ===== ui.js =====
// 界面沿用 cfnew 的赛博朋克终端风：青/品红霓虹、等宽字体、扫描线。
const CSS = `
:root{
  --bg:#05030e; --bg2:#0a0820;
  --cyan:#00f0ff; --pink:#ff2bd6; --purple:#a347ff;
  --yellow:#fff200; --mint:#00ff9d; --red:#ff3860;
  --text:#e6f5ff; --dim:#7aa9c4;
  --border:rgba(0,240,255,.55); --grid:rgba(255,43,214,.16);
}
*{margin:0;padding:0;box-sizing:border-box}
html{overflow-x:hidden}
html,body{min-height:100%}
body{
  font-family:"JetBrains Mono","Fira Code","Courier New",
    "PingFang SC","Microsoft YaHei","Noto Sans SC",monospace;
  background:radial-gradient(ellipse at 20% 10%,#2a0040 0%,var(--bg) 55%,#000 100%);
  color:var(--text);
  padding:32px 16px 56px;
  display:flex;justify-content:center;
  position:relative;overflow-x:hidden;
}
body::before{
  content:"";position:fixed;inset:0;pointer-events:none;z-index:0;
  background:
    linear-gradient(var(--grid) 1px,transparent 1px) 0 0/44px 44px,
    linear-gradient(90deg,var(--grid) 1px,transparent 1px) 0 0/44px 44px;
  opacity:.5;
}
body::after{
  content:"";position:fixed;inset:0;pointer-events:none;z-index:1;
  background:repeating-linear-gradient(180deg,rgba(0,240,255,.05) 0 1px,transparent 1px 4px);
}
.term{
  min-width:0;overflow:hidden;
  border:1px solid var(--border);
  background:rgba(8,4,28,.86);
  box-shadow:0 0 24px rgba(0,240,255,.14),inset 0 0 60px rgba(163,71,255,.07);
}
.head{
  display:flex;align-items:center;gap:12px;
  padding:12px 16px;border-bottom:1px solid var(--border);
  background:linear-gradient(90deg,rgba(255,43,214,.16),rgba(0,240,255,.16));
}
.dots{display:flex;gap:8px}
.dot{width:11px;height:11px;transform:rotate(45deg);background:var(--pink);box-shadow:0 0 8px var(--pink)}
.dot:nth-child(2){background:var(--yellow);box-shadow:0 0 8px var(--yellow)}
.dot:nth-child(3){background:var(--mint);box-shadow:0 0 8px var(--mint)}
.title{
  color:var(--cyan);font-size:13px;font-weight:700;
  letter-spacing:.25em;text-transform:uppercase;text-shadow:0 0 6px var(--cyan);
}
.title::before{content:"// ";color:var(--pink)}
.body{padding:22px 20px;min-width:0}
input{
  background:rgba(0,0,0,.45);
  border:1px solid var(--border);color:var(--cyan);
  font-family:inherit;font-size:12px;padding:11px 12px;outline:none;
  text-shadow:0 0 4px var(--cyan);
}
input:focus{border-color:var(--pink);box-shadow:0 0 12px rgba(255,43,214,.4)}
button{
  font-family:inherit;font-size:12px;letter-spacing:.12em;text-transform:uppercase;
  padding:11px 18px;cursor:pointer;
  background:transparent;border:1px solid var(--pink);color:var(--pink);
  text-shadow:0 0 6px var(--pink);transition:.15s;white-space:nowrap;
}
button:hover{background:var(--pink);color:#05030e;text-shadow:none;box-shadow:0 0 16px var(--pink)}
button.gh{border-color:var(--cyan);color:var(--cyan);text-shadow:0 0 6px var(--cyan)}
button.gh:hover{background:var(--cyan);color:#05030e;box-shadow:0 0 16px var(--cyan)}
button:disabled{opacity:.4;cursor:not-allowed}
#msg{margin-top:10px;font-size:12px;min-height:18px}
`;

/** KV 没绑时的指引页。报错要能自己解决，别只丢个栈。 */
function renderNoKV() {
  return `<!DOCTYPE html>
<html lang="zh-CN"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>OPERA // MASQUE</title>
<style>${CSS}
.wrap{width:100%;max-width:520px;position:relative;z-index:2;min-width:0;align-self:center}
.step{font-size:12px;color:var(--dim);line-height:2;margin-top:6px}
.step b{color:var(--cyan);font-weight:400}
.step code{color:var(--yellow)}
</style></head>
<body><div class="wrap"><div class="term">
  <div class="head">
    <div class="dots"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>
    <div class="title">KV Not Bound</div>
  </div>
  <div class="body">
    <div class="step">
      还没绑 KV，配置和密码都没地方存。<br><br>
      <b>1.</b> Cloudflare 后台 → 存储和数据库 → KV → 创建实例<br>
      <b>2.</b> 回到这个 Worker → 设置 → 绑定 → 添加 → KV 命名空间<br>
      <b>3.</b> 变量名填 <code>KV</code>（两个字母，大写），命名空间选刚建的<br>
      <b>4.</b> 部署，刷新本页
    </div>
  </div>
</div></div></body></html>`;
}

/** 首次访问的初始化页，设管理密码。 */
function renderSetup() {
  return `<!DOCTYPE html>
<html lang="zh-CN"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>OPERA // MASQUE</title>
<style>${CSS}
.wrap{width:100%;max-width:430px;position:relative;z-index:2;min-width:0;align-self:center}
.f{display:flex;flex-direction:column;gap:10px}
.hint{font-size:11px;color:var(--dim);line-height:1.9;margin-top:14px}
.hint b{color:var(--yellow);font-weight:400}
.lead{font-size:12px;color:var(--cyan);line-height:1.8;margin-bottom:16px}
</style></head>
<body><div class="wrap"><div class="term">
  <div class="head">
    <div class="dots"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>
    <div class="title">First Run</div>
  </div>
  <div class="body">
    <div class="lead">第一次打开，先设一个管理密码。<br>之后订阅路径、改密码都在界面里做。</div>
    <form class="f" onsubmit="return go(event)">
      <input type="password" id="p" placeholder="PASSWORD (>= 8)" autofocus autocomplete="new-password">
      <input type="password" id="c" placeholder="CONFIRM" autocomplete="new-password">
      <button type="submit">设置</button>
    </form>
    <div id="msg"></div>
    <div class="hint">
      密码只存哈希（PBKDF2 + 随机盐），KV 里看不到明文。<br>
      <b>忘了只能删掉 KV 里的 auth:cred 重来</b>，没有找回。
    </div>
  </div>
</div></div>
<script>
async function go(e){
  e.preventDefault();
  const b=document.querySelector('button'), m=document.getElementById('msg');
  b.disabled=true; m.textContent='> 设置中…'; m.style.color='var(--yellow)';
  try{
    const r=await fetch('/api/setup',{method:'POST',headers:{'content-type':'application/json'},
      body:JSON.stringify({password:document.getElementById('p').value,
                           confirm:document.getElementById('c').value})});
    const j=await r.json();
    if(j.ok){m.textContent='> 完成';m.style.color='var(--mint)';location.reload();}
    else{m.textContent='> '+j.error;m.style.color='var(--red)';b.disabled=false;}
  }catch(err){m.textContent='> '+err.message;m.style.color='var(--red)';b.disabled=false;}
  return false;
}
</script>
</body></html>`;
}

/** 登录页。密码错时不提示"用户名错误"这类可枚举信息。 */
function renderLogin(err) {
  return `<!DOCTYPE html>
<html lang="zh-CN"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>OPERA // MASQUE</title>
<style>${CSS}
.wrap{width:100%;max-width:400px;position:relative;z-index:2;min-width:0;align-self:center}
.f{display:flex;flex-direction:column;gap:12px}
.hint{font-size:11px;color:var(--dim);line-height:1.8;margin-top:14px}
</style></head>
<body><div class="wrap"><div class="term">
  <div class="head">
    <div class="dots"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>
    <div class="title">Auth Required</div>
  </div>
  <div class="body">
    <form class="f" onsubmit="return go(event)">
      <input type="password" id="p" placeholder="PASSWORD" autofocus autocomplete="current-password">
      <button type="submit">进入</button>
    </form>
    <div id="msg"></div>
    <div class="hint">连续失败 8 次会锁定 15 分钟。</div>
  </div>
</div></div>
<script>
async function go(e){
  e.preventDefault();
  const b=document.querySelector('button'), m=document.getElementById('msg');
  b.disabled=true; m.textContent='> 验证中…'; m.style.color='var(--yellow)';
  try{
    const r=await fetch('/login',{method:'POST',headers:{'content-type':'application/json'},
      body:JSON.stringify({password:document.getElementById('p').value})});
    const j=await r.json();
    if(j.ok){m.textContent='> 通过';m.style.color='var(--mint)';location.reload();}
    else{m.textContent='> '+j.error;m.style.color='var(--red)';b.disabled=false;}
  }catch(err){m.textContent='> '+err.message;m.style.color='var(--red)';b.disabled=false;}
  return false;
}
</script>
</body></html>`;
}

function renderUI(state, host, sp, token, extra = {}) {
  const protonCred = extra.protonCred || null;
  const windUsage = extra.windUsage || null;
  const protonSecrets = extra.protonSecrets || (state && state.protonSecrets) || false;
  const s = state || {};
  const warp = s.warp || {};
  const stat = s.stats || {};
  const updated = s.updatedAt ? new Date(s.updatedAt) : null;
  const ago = updated ? Math.floor((Date.now() - updated.getTime()) / 60000) : null;
  const exp = s.expiresAt ? new Date(s.expiresAt) : null;
  const left = exp ? Math.floor((exp.getTime() - Date.now()) / 60000) : null;
  const leftTxt = left === null ? "—"
    : left <= 0 ? "已过期，下次访问订阅时自动重建"
    : `${Math.floor(left / 60)} 小时 ${left % 60} 分后过期`;
  const fmt = (d) => d ? d.toISOString().replace("T", " ").slice(0, 19) + " UTC" : "—";
  const sub = `https://${host}${sp}?token=${token}`;
  const pExp = protonCred && protonCred.expiresAt
    ? new Date(protonCred.expiresAt * 1000) : null;
  const windInfo = s.wind || null;
  const windPct = windUsage && windUsage.max
    ? Math.round((windUsage.used / windUsage.max) * 100) : 0;
  const gb = (n) => (n / 1073741824).toFixed(2) + " GB";
  const windUsageTxt = windUsage && windUsage.max
    ? `${gb(windUsage.used)} / ${gb(windUsage.max)}（${windPct}%）` : null;
  const pLeft = pExp ? Math.floor((pExp.getTime() - Date.now()) / 86400000) : null;

  const row = (k, v, cls = "") =>
    `<div class="row"><span class="k">${k}</span><span class="v ${cls}">${v}</span></div>`;

  return `<!DOCTYPE html>
<html lang="zh-CN"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>OPERA // MASQUE</title>
<style>${CSS}
.wrap{width:100%;max-width:880px;position:relative;z-index:2;min-width:0}
.sec{margin-bottom:26px;min-width:0}
.sec:last-child{margin-bottom:0}
.sec-t{
  color:var(--pink);font-size:11px;letter-spacing:.22em;text-transform:uppercase;
  margin-bottom:12px;text-shadow:0 0 6px var(--pink);
}
.sec-t::before{content:"▍";color:var(--cyan);margin-right:6px}
.row{
  display:flex;justify-content:space-between;align-items:baseline;gap:16px;
  padding:7px 0;border-bottom:1px dashed rgba(0,240,255,.14);font-size:13px;
}
.row:last-child{border-bottom:none}
.k{color:var(--dim);letter-spacing:.06em;white-space:nowrap}
.v{color:var(--cyan);text-align:right;word-break:break-all}
.v.ok{color:var(--mint);text-shadow:0 0 6px var(--mint)}
.v.warn{color:var(--yellow);text-shadow:0 0 6px var(--yellow)}
.v.err{color:var(--red);text-shadow:0 0 6px var(--red)}
.grid{display:grid;min-width:0;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px}
.cell{
  border:1px solid rgba(0,240,255,.3);padding:12px 14px;
  background:rgba(0,240,255,.04);min-width:0;
}
.cell .n{font-size:26px;font-weight:700;color:var(--cyan);text-shadow:0 0 10px var(--cyan);line-height:1.1}
.cell .l{font-size:10px;color:var(--dim);letter-spacing:.14em;text-transform:uppercase;margin-top:6px;
  overflow-wrap:anywhere}
.sub{display:flex;gap:8px;align-items:stretch;margin-top:4px;flex-wrap:wrap}
.sub input{flex:1;min-width:0}
.pw{display:grid;grid-template-columns:1fr 1fr 1fr auto;gap:8px;margin-top:4px}
.pw input{min-width:0}
@media(max-width:700px){.pw{grid-template-columns:1fr}}
.note{font-size:11px;color:var(--dim);line-height:1.85;margin-top:12px;
  overflow-wrap:anywhere;word-break:break-word}
.note b{color:var(--yellow);font-weight:400}
.foot{
  margin-top:18px;text-align:center;font-size:10px;color:var(--dim);
  letter-spacing:.2em;text-transform:uppercase;
}
.foot a{color:var(--purple);text-decoration:none}
.foot a:hover{color:var(--pink)}
.head{position:relative}
.out{
  margin-left:auto;font-size:10px;letter-spacing:.16em;text-transform:uppercase;
  color:var(--dim);text-decoration:none;border:1px solid rgba(122,169,196,.4);
  padding:4px 10px;transition:.15s;
}
.out:hover{color:var(--red);border-color:var(--red);text-shadow:0 0 6px var(--red)}
@media(max-width:560px){
  body{padding:18px 10px 40px}
  .row{flex-direction:column;gap:2px;font-size:12px}
  .v{text-align:left}
  .sub{flex-direction:column}
  button{width:100%}
  .grid{grid-template-columns:1fr 1fr;gap:8px}
  .body{padding:16px 12px}
  .note{letter-spacing:0;font-size:11px}
  .title{font-size:10px;letter-spacing:.12em}
  .k,.v{letter-spacing:0}
  .cell .n{font-size:22px}
  .cell .l{letter-spacing:.08em;font-size:9px}
  .sec-t{letter-spacing:.14em}
}
@media(max-width:360px){
  .grid{grid-template-columns:1fr}
}
</style></head>
<body><div class="wrap"><div class="term">
  <div class="head">
    <div class="dots"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>
    <div class="title">Opera over MASQUE</div>
    <a class="out" href="/logout">退出</a>
  </div>
  <div class="body">

    <div class="sec">
      <div class="sec-t">订阅</div>
      <div class="sub">
        <input id="u" value="${sub}" readonly>
        <button onclick="cp('u')">复制</button>
        <button class="gh" onclick="location.href=document.getElementById('u').value">下载</button>
      </div>
      <div class="note">
        一份聚合，导进去有两类线路可切：<br>
        <b>亚洲/欧洲/美洲线路</b> — 走 MASQUE 再落 Opera，能换出口国家，但多一跳会慢些。<br>
        <b>WARP直连</b> — 只走 MASQUE，出口是 Cloudflare 自己的 IP，快但选不了国家。<br>
        <b>Proton线路</b> — MASQUE 打底 + Proton WireGuard 落地，10 个国家（配置后出现）。<br>
        套娃线路超时或落地挂了，切 WARP直连顶上。
      </div>
      <div id="msg"></div>
    </div>

    <div class="sec">
      <div class="sec-t">节点</div>
      <div class="grid">
        <div class="cell"><div class="n">${stat.combos ?? "—"}</div><div class="l">组合节点</div></div>
        <div class="cell"><div class="n">${stat.entries ?? "—"}</div><div class="l">MASQUE 接入点</div></div>
        <div class="cell"><div class="n">${stat.landings ?? "—"}</div><div class="l">Opera 落地</div></div>
        <div class="cell"><div class="n">${stat.entries ?? "—"}</div><div class="l">WARP 直连</div></div>
        <div class="cell"><div class="n">${stat.proton || "—"}</div><div class="l">Proton 落地</div></div>
      </div>
      <div class="note">
        每个落地和每个接入点都组合一遍，任一环失效都还有别的路走。<br>
        节点名 <b>欧洲1@198.1-443</b> = 欧洲第 1 个落地，经 162.159.198.1:443 接入。
      </div>
    </div>

    <div class="sec">
      <div class="sec-t">状态</div>
      ${row("上次更新", updated ? `${fmt(updated)}（${ago} 分钟前）` : "尚未生成",
             updated ? (ago > 250 ? "warn" : "ok") : "err")}
      ${row("凭据剩余", leftTxt, left === null ? "" : left <= 0 ? "warn" : "ok")}
      ${row("到期时间", fmt(exp))}
      ${row("密码更新于", extra.credUpdatedAt ? fmt(new Date(extra.credUpdatedAt)) : "—")}
      ${row("WARP 设备", warp.deviceId ? warp.deviceId.slice(0, 8) + "…" : "—")}
      ${row("WARP 注册于", warp.registeredAt ? fmt(new Date(warp.registeredAt)) : "—")}
      ${row("内网地址", warp.ipv4 || "—")}
    </div>

    <div class="sec">
      <div class="sec-t">操作</div>
      <div class="sub">
        <button onclick="go('/api/refresh')">刷新 Opera 凭据</button>
        <button class="gh" onclick="go('/api/reset-warp')">重注册 WARP 设备</button>
      </div>
      <div class="note">
        Opera 凭据 4 小时到期。<b>不用定时任务</b>——订阅被访问时才检查，
        没过期直接给缓存，过期了才重新注册。<br>
        想提前换一份就点刷新。<br>
        WARP 设备信息存在 KV 里复用，<b>一般不用重注册</b>，除非 MASQUE 整体连不上。
      </div>
    </div>

    <div class="sec">
      <div class="sec-t">Proton 落地</div>
      ${row("环境变量", protonSecrets
        ? '<span class="v ok">已配置 PROTON_USER / PROTON_PASS</span>'
        : '<span class="v warn">未配置（Dashboard → Secrets）</span>')}
      ${protonCred && protonCred.expiresAt
        ? row("证书状态",
            `<span id="proton-exp" data-exp="${protonCred.expiresAt}">计算中…</span>`,
            "ok")
        : protonCred
          ? row("证书状态", "已缓存", "ok")
          : row("证书状态", s.protonErr || "尚未登录", s.protonErr ? "err" : "warn")}
      <div class="note" style="margin-top:8px">
        在 Cloudflare → Worker → 设置 → <b>变量和机密</b> 配置
        <code>PROTON_USER</code> / <code>PROTON_PASS</code>，点下方登录。
        证书约 7 天有效。建议 Triggers 添加 Cron
        <code>0 4 * * *</code>（每天 UTC 4:00 检查：已过期或 24 小时内将过期则自动重登）。
        访问订阅时若证书已过期也会自动重登（兜底）。白名单国家内不限制每国节点数。
      </div>
      <div class="sub" style="margin-top:10px;gap:8px;flex-wrap:wrap">
        <button class="gh" onclick="go('/api/proton/login')">用环境变量登录</button>
        ${protonCred ? '<button onclick="go(\'/api/proton/clear\')" style="border-color:var(--red);color:var(--red)">清除</button>' : ""}
      </div>

      <div class="sec">
      <div class="sec-t">订阅路径</div>
      <div class="sub">
        <input id="sp" value="${sp.replace(/^\//, "")}" spellcheck="false"
               placeholder="字母数字和 - _">
        <button onclick="setPath('sp')">保存</button>
      </div>
      <div class="note">
        改成难猜的字符串，等于在密码之外多一层。改完上面的订阅链接要重新复制。
      </div>
    </div>

    <div class="sec">
      <div class="sec-t">修改密码</div>
      <div class="pw">
        <input type="password" id="c0" placeholder="当前密码" autocomplete="current-password">
        <input type="password" id="c1" placeholder="新密码（>= 8）" autocomplete="new-password">
        <input type="password" id="c2" placeholder="确认新密码" autocomplete="new-password">
        <button onclick="setPw()">修改</button>
      </div>
      <div class="note">
        改完后所有旧订阅链接立刻失效（token 用密码哈希签名，无时间过期）。
        链接泄露了就靠这个补救。
      </div>
    </div>

    <div class="sec">
      <div class="sec-t">须知</div>
      <div class="note">
        必须用 <b>mihomo Alpha</b> 内核，masque 出站和 dialer-proxy 稳定版都不支持。<br>
        可用客户端：Clash Verge Rev（内核切 Alpha）、ClashMi、FlClash。<br>
        Shadowrocket、Stash 不认 dialer-proxy，导进去只有 WARP直连 那组能用。<br>
        订阅链接里的 token <b>永久有效</b>（不过期），改管理密码后全部失效；别外传。<br>
        配置里的 private-key 等同 WARP 账号凭据。<br>
        免费代理的流量对提供方可见，别走支付和敏感数据。
      </div>
    </div>

  </div></div>
  
</div>
<script>
function cp(id){
  const el=document.getElementById(id||'u');
  navigator.clipboard.writeText(el.value).then(
    ()=>say('已复制到剪贴板','var(--mint)'),
    ()=>{el.select();document.execCommand('copy');say('已复制','var(--mint)')});
}
function say(t,c){
  const m=document.getElementById('msg');
  m.textContent='> '+t; m.style.color=c;
  setTimeout(()=>{m.textContent=''},4000);
}
async function post(url,body,okmsg){
  const bs=document.querySelectorAll('button');
  bs.forEach(b=>b.disabled=true);
  say('执行中…','var(--yellow)');
  try{
    const r=await fetch(url,{method:'POST',headers:{'content-type':'application/json'},
                            body:JSON.stringify(body)});
    const j=await r.json();
    if(j.ok){say((j.msg||okmsg)+'，即将刷新','var(--mint)');setTimeout(()=>location.reload(),1400);}
    else{say('失败: '+j.error,'var(--red)');bs.forEach(b=>b.disabled=false);}
  }catch(e){say('失败: '+e.message,'var(--red)');bs.forEach(b=>b.disabled=false);}
}
function setPath(id){
  const v=document.getElementById(id||'sp').value.trim();
  if(!v){say('路径不能为空','var(--red)');return;}
  post('/api/sub-path',{path:v},'已保存');
}
function setPw(){
  const c0=document.getElementById('c0').value;
  const c1=document.getElementById('c1').value;
  const c2=document.getElementById('c2').value;
  if(!c0||!c1){say('把三个框都填了','var(--red)');return;}
  if(c1!==c2){say('两次输入不一致','var(--red)');return;}
  if(c1.length<8){say('新密码至少 8 位','var(--red)');return;}
  post('/api/password',{current:c0,password:c1,confirm:c2},'已修改');
}
async function go(p){
  const bs=document.querySelectorAll('button');
  bs.forEach(b=>b.disabled=true);
  say('执行中…','var(--yellow)');
  const ctrl=new AbortController();
  const timer=setTimeout(()=>ctrl.abort(),10000);
  try{
    const r=await fetch(p,{method:'POST',signal:ctrl.signal});
    clearTimeout(timer);
    const text=await r.text();
    let j; try{j=JSON.parse(text);}catch(_){
      say('失败 HTTP '+r.status+': '+text.slice(0,180),'var(--red)');
      bs.forEach(b=>b.disabled=false);return;
    }
    if(j.ok){say(j.msg+'，即将刷新','var(--mint)');setTimeout(()=>location.reload(),1200);}
    else{say('失败: '+(j.error||JSON.stringify(j)),'var(--red)');bs.forEach(b=>b.disabled=false);}
  }catch(e){
    clearTimeout(timer);
    const m=e.name==='AbortError'?'请求超时（10秒），请重试':e.message;
    say('失败: '+m,'var(--red)');
    bs.forEach(b=>b.disabled=false);
  }
}


function fmtRemain(sec){
  if(sec<=0) return '已过期';
  const d=Math.floor(sec/86400), h=Math.floor((sec%86400)/3600), m=Math.floor((sec%3600)/60);
  const parts=[];
  if(d) parts.push(d+'天');
  if(h||d) parts.push(h+'小时');
  parts.push(m+'分钟');
  return '剩余 '+parts.join(' ');
}
function tickProtonExp(){
  const el=document.getElementById('proton-exp');
  if(!el) return;
  const exp=parseInt(el.getAttribute('data-exp')||'0',10);
  if(!exp){ el.textContent='—'; return; }
  const sec=exp-Math.floor(Date.now()/1000);
  el.textContent=fmtRemain(sec);
  el.style.color=sec<=0?'var(--red)':(sec<86400?'var(--yellow)':'var(--mint)');
}
tickProtonExp();
setInterval(tickProtonExp, 60000);
</script>
</body></html>`;
}


// ===== index.js =====
// Opera VPN over Cloudflare WARP (MASQUE) —— Worker 版（改版）
//
// 改动要点:
//   1. 订阅/会话 token 永久有效，仅改管理密码后失效
//   2. 去掉 Actions 推送 (/push、推送令牌)
//   3. Proton：优先读环境变量 PROTON_USER / PROTON_PASS；也可管理页粘贴 blob
//   4. Windscribe：Worker 内尝试自开户（共享 IP 可能失败）
//
// 部署只需要绑一个 KV；Proton 账号在 Dashboard → Secrets 配置。
const K_WARP = "warp:device";
const K_CFG = "config:yaml";
const K_STATE = "state:meta";
const K_CRED = "auth:cred";
const K_SET = "settings";
const K_CLAIM = "auth:claim";
const K_PROTON = "proton:cred";
const K_WIND = "wind:account";
const K_LOCK = "rebuild:lock";
const COOKIE = "om_session";
const DEFAULT_SUB = "sub";

const TTL_MS = 4 * 3600 * 1000;
const SKEW_MS = 10 * 60 * 1000;

const cookieHdr = (token) =>
  `${COOKIE}=${token}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${SESSION_MAX_AGE}`;

const json = (o, s = 200) =>
  new Response(JSON.stringify(o), {
    status: s,
    headers: { "content-type": "application/json; charset=utf-8" },
  });

const html = (body, s = 200) =>
  new Response(body, {
    status: s,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store",
    },
  });

const notFound = () => new Response("Not Found", { status: 404 });

async function getSettings(env) {
  const s = (await env.KV.get(K_SET, "json")) || {};
  return { subPath: s.subPath || DEFAULT_SUB };
}

async function getWarp(env, force = false) {
  if (!force) {
    const cached = await env.KV.get(K_WARP, "json");
    if (cached && cached.privateKey) return cached;
  }
  const w = await registerWarp("cf-worker");
  await env.KV.put(K_WARP, JSON.stringify(w));
  return w;
}

/** Proton：KV 中未过期凭据优先；已过期/强制登录则用 Secrets 重新 loginAndFetch。 */
async function getProton(env, { forceLogin = false } = {}) {
  if (!forceLogin) {
    const pc = await env.KV.get(K_PROTON, "json");
    if (pc && (!pc.expiresAt || pc.expiresAt * 1000 > Date.now())) return pc;
  }
  if (env.PROTON_USER && env.PROTON_PASS) {
    const cred = await loginAndFetch(env.PROTON_USER, env.PROTON_PASS);
    await env.KV.put(K_PROTON, JSON.stringify(cred));
    await env.KV.put(K_PROTON_LAST, String(Date.now()));
    return cred;
  }
  return null;
}

function hasProtonSecrets(env) {
  return !!(env.PROTON_USER && env.PROTON_PASS);
}

/** Windscribe：KV 有账号则取凭据；没有则尝试 Worker 自开户。 */
async function getWind(env, _opts) {
  return null; // Windscribe 已移除
}

async function rebuild(env, { forceWarp = false } = {}) {
  const warp = await getWarp(env, forceWarp);
  const opera = await fetchOpera();

  let proton = null, protonErr = null;
  try {
    proton = await getProton(env);
  } catch (e) {
    protonErr = e.message;
  }

  let wind = null, windErr = null;
  try {
    wind = await getWind(env);
  } catch (e) {
    windErr = e.message;
  }

  const { yaml, entries, landings, combos, proton: pn, wind: wn } =
    buildConfig(warp, opera, proton, wind);

  const now = Date.now();
  const state = {
    updatedAt: new Date(now).toISOString(),
    expiresAt: new Date(now + TTL_MS).toISOString(),
    stats: { entries, landings, combos, proton: pn || 0, wind: wn || 0 },
    protonExpiresAt: proton ? proton.expiresAt : null,
    protonErr,
    protonSecrets: hasProtonSecrets(env),
    wind: wind ? { userId: wind.account.userId, servers: wn || 0 } : null,
    windErr,
    warp: {
      deviceId: warp.deviceId,
      ipv4: warp.ipv4,
      ipv6: warp.ipv6,
      registeredAt: warp.registeredAt,
    },
  };

  await env.KV.put(K_CFG, yaml);
  await env.KV.put(K_STATE, JSON.stringify(state));
  return state;
}

function isFresh(state) {
  if (!state || !state.expiresAt) return false;
  return Date.parse(state.expiresAt) - SKEW_MS > Date.now();
}

/** 证书已过期（无 expiresAt 视为无效） */
function isProtonExpired(pc) {
  if (!pc) return true;
  if (!pc.expiresAt) return false; // 无过期字段则视为仍可用
  return pc.expiresAt * 1000 <= Date.now();
}

async function ensureConfig(env) {
  const state = await env.KV.get(K_STATE, "json");
  const yaml = await env.KV.get(K_CFG);

  // 订阅访问兜底：Proton 已过期且配置了 Secrets → 即使整份配置未过期也 rebuild（内部会重登）
  let forceForProton = false;
  if (hasProtonSecrets(env)) {
    const pc = await env.KV.get(K_PROTON, "json");
    if (isProtonExpired(pc)) forceForProton = true;
  }

  if (yaml && isFresh(state) && !forceForProton) return yaml;

  const lock = await env.KV.get(K_LOCK);
  if (lock && Date.now() - Number(lock) < 90000) {
    if (yaml && !forceForProton) return yaml;
    // forceForProton 且有锁：尽量等不到就先返回旧配置，避免订阅长时间挂起
    if (yaml) return yaml;
  } else {
    await env.KV.put(K_LOCK, String(Date.now()), { expirationTtl: 120 });
    try {
      await rebuild(env);
    } finally {
      await env.KV.delete(K_LOCK);
    }
  }
  return (await env.KV.get(K_CFG)) || yaml;
}


const K_PROTON_LAST = "proton:lastRefresh";
/** 证书剩余少于此时间则在定时任务中提前续期 */
const PROTON_RENEW_BEFORE_MS = 24 * 3600 * 1000; // 24 小时

/**
 * 每天 Cron 调用：无凭据 / 已过期 / 24h 内将过期 → 用 Secrets 重新登录。
 * 建议 Triggers Cron：0 4 * * *（每天 UTC 4:00）
 */
async function refreshProtonScheduled(env) {
  if (!env.PROTON_USER || !env.PROTON_PASS) {
    console.log("scheduled: 未配置 PROTON_USER/PASS，跳过");
    return;
  }
  const now = Date.now();
  const pc = await env.KV.get(K_PROTON, "json");
  const expMs = pc && pc.expiresAt ? pc.expiresAt * 1000 : 0;
  const need =
    !pc ||
    !expMs ||
    expMs <= now ||
    expMs - now < PROTON_RENEW_BEFORE_MS;
  if (!need) {
    console.log("scheduled: 证书仍有效（未进入 24h 窗口），跳过");
    return;
  }
  try {
    const cred = await loginAndFetch(env.PROTON_USER, env.PROTON_PASS);
    await env.KV.put(K_PROTON, JSON.stringify(cred));
    await env.KV.put(K_PROTON_LAST, String(now));
    try { await rebuild(env); } catch (e) {
      console.log("scheduled: 凭据已更新，rebuild 失败: " + e.message);
    }
    console.log("scheduled: Proton 刷新成功, servers=" + (cred.servers && cred.servers.length));
  } catch (e) {
    console.log("scheduled: Proton 刷新失败: " + (e.message || e));
  }
}

export default {
  /** 定时检查 Proton 证书：已过期或 24h 内将过期则重登。请添加 Cron：0 4 * * * */
  async scheduled(event, env, ctx) {
    ctx.waitUntil(refreshProtonScheduled(env));
  },
  async fetch(req, env) {
    try {
    const url = new URL(req.url);
    const path = url.pathname.replace(/\/+$/, "") || "/";
    const ip = req.headers.get("cf-connecting-ip") || "unknown";

    if (!env || !env.KV) return html(renderNoKV(), 500);

    const cred = await env.KV.get(K_CRED, "json");
    const authed = cred && (await verifyToken(cred, readCookie(req, COOKIE)));

    if (!cred) {
      if (path === "/api/setup" && req.method === "POST") {
        const body = await req.json().catch(() => ({}));
        const pw = String(body.password || "");
        if (pw.length < 8) return json({ ok: false, error: "密码至少 8 位" }, 400);
        if (pw !== body.confirm) return json({ ok: false, error: "两次输入不一致" }, 400);

        const claim = crypto.randomUUID();
        if (await env.KV.get(K_CRED)) {
          return json({ ok: false, error: "密码已被设置，请刷新页面" }, 409);
        }
        await env.KV.put(K_CLAIM, claim, { expirationTtl: 60 });
        if ((await env.KV.get(K_CLAIM)) !== claim) {
          return json({ ok: false, error: "密码已被设置，请刷新页面" }, 409);
        }

        const c = await makeCred(pw);
        if (await env.KV.get(K_CRED)) {
          return json({ ok: false, error: "密码已被设置，请刷新页面" }, 409);
        }
        await env.KV.put(K_CRED, JSON.stringify(c));
        await env.KV.put(K_SET, JSON.stringify({ subPath: randomSubPath(12) }));
        await env.KV.delete(K_CLAIM);
        const token = await signToken(c);
        return new Response(JSON.stringify({ ok: true }), {
          headers: {
            "content-type": "application/json; charset=utf-8",
            "set-cookie": cookieHdr(token),
          },
        });
      }
      if (path === "/") return html(renderSetup());
      return notFound();
    }

    const settings = await getSettings(env);
    const subPath = "/" + settings.subPath;

    if (path === subPath) {
      const t = url.searchParams.get("token") || "";
      if (!(await verifyToken(cred, t)) && !authed) return notFound();

      const yaml = await ensureConfig(env);
      if (!yaml) {
        return new Response("配置生成失败，稍后重试或到管理页手动刷新", {
          status: 503,
          headers: { "content-type": "text/plain; charset=utf-8" },
        });
      }
      return new Response(yaml, {
        headers: {
          "content-type": "text/yaml; charset=utf-8",
          "content-disposition": "attachment; filename=opera-masque.yaml",
          "profile-update-interval": "4",
          "cache-control": "no-store",
        },
      });
    }

    if (path === "/login" && req.method === "POST") {
      if (!(await rateLimit(env, ip))) {
        return json({ ok: false, error: "尝试过多，15 分钟后再试" }, 429);
      }
      const body = await req.json().catch(() => ({}));
      if (!(await checkPassword(cred, String(body.password || "")))) {
        return json({ ok: false, error: "密码错误" }, 401);
      }
      await clearRateLimit(env, ip);
      const token = await signToken(cred);
      return new Response(JSON.stringify({ ok: true }), {
        headers: {
          "content-type": "application/json; charset=utf-8",
          "set-cookie": cookieHdr(token),
        },
      });
    }

    if (path === "/logout") {
      return new Response(null, {
        status: 302,
        headers: {
          location: "/",
          "set-cookie": `${COOKIE}=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`,
        },
      });
    }

    if (path === "/") {
      if (!authed) return html(renderLogin());
      const state = await env.KV.get(K_STATE, "json");
      const token = await signToken(cred);
      const protonCred = await env.KV.get(K_PROTON, "json");
      return html(renderUI(state, url.host, subPath, token, {
        protonCred,
        protonSecrets: hasProtonSecrets(env),
        credUpdatedAt: cred && cred.updatedAt,
      }));
    }

    if (!authed) return notFound();

    if (path === "/api/state") {
      return json((await env.KV.get(K_STATE, "json")) || {});
    }

    // 粘贴 Proton blob（替代原来的 Actions 推送）
    if (path === "/api/proton/paste" && req.method === "POST") {
      const body = await req.json().catch(() => ({}));
      let parsed;
      try {
        parsed = parseBlob(body.blob || body.text || "");
      } catch (e) {
        return json({ ok: false, error: e.message }, 400);
      }
      await env.KV.put(K_PROTON, JSON.stringify(parsed));
      try {
        const st = await rebuild(env);
        return json({
          ok: true,
          msg: `已写入 ${parsed.servers.length} 台 Proton 落地`,
          proton: st.stats.proton,
        });
      } catch (e) {
        return json({ ok: true, msg: "凭据已写入，但重建配置失败：" + e.message });
      }
    }

    
    if (path === "/api/proton/login" && req.method === "POST") {
      if (!env.PROTON_USER || !env.PROTON_PASS) {
        return json({ ok: false, error: "未配置 Secret：PROTON_USER / PROTON_PASS" }, 400);
      }
      try {
        const cred = await getProton(env, { forceLogin: true });
        await env.KV.put(K_PROTON_LAST, String(Date.now()));
        const st = await rebuild(env);
        return json({
          ok: true,
          msg: `登录成功，${cred.servers.length} 台落地，证书至 ${new Date(cred.expiresAt * 1000).toISOString()}`,
          proton: st.stats.proton,
        });
      } catch (e) {
        return json({ ok: false, error: e.message }, 500);
      }
    }

    if (path === "/api/proton/clear" && req.method === "POST") {
      await env.KV.delete(K_PROTON);
      try { await rebuild(env); } catch { /* ignore */ }
      return json({ ok: true, msg: "Proton 凭据已清除" });
    }

    if (path === "/api/sub-path" && req.method === "POST") {
      const body = await req.json().catch(() => ({}));
      const p = normalizePath(body.path);
      if (!p) {
        return json({
          ok: false,
          error: "只能用字母数字和 - _，1-64 位，且不能是 login/logout/api/setup",
        }, 400);
      }
      await env.KV.put(K_SET, JSON.stringify({ ...settings, subPath: p }));
      return json({ ok: true, msg: `订阅路径已改为 /${p}` });
    }

    if (path === "/api/password" && req.method === "POST") {
      const body = await req.json().catch(() => ({}));
      if (!(await checkPassword(cred, String(body.current || "")))) {
        return json({ ok: false, error: "当前密码不对" }, 401);
      }
      const pw = String(body.password || "");
      if (pw.length < 8) return json({ ok: false, error: "新密码至少 8 位" }, 400);
      if (pw !== body.confirm) return json({ ok: false, error: "两次输入不一致" }, 400);

      const c = await makeCred(pw);
      await env.KV.put(K_CRED, JSON.stringify(c));
      const newSub = randomSubPath(12);
      await env.KV.put(K_SET, JSON.stringify({ ...settings, subPath: newSub }));
      const token = await signToken(c);
      return new Response(
        JSON.stringify({ ok: true, msg: "密码已改，订阅路径已重置，旧链接全部失效" }), {
          headers: {
            "content-type": "application/json; charset=utf-8",
            "set-cookie": cookieHdr(token),
          },
        });
    }

    if (path === "/api/refresh" && req.method === "POST") {
      try {
        const s = await rebuild(env);
        return json({ ok: true, msg: `已刷新，${s.stats.combos} 个组合` });
      } catch (e) {
        return json({ ok: false, error: e.message }, 500);
      }
    }

    if (path === "/api/reset-warp" && req.method === "POST") {
      try {
        const s = await rebuild(env, { forceWarp: true });
        return json({ ok: true, msg: `WARP 已重注册，${s.stats.combos} 个组合` });
      } catch (e) {
        return json({ ok: false, error: e.message }, 500);
      }
    }



    return notFound();
    } catch (e) {
      const msg = (e && e.stack) ? e.stack : String(e);
      console.error(msg);
      return new Response(
        "<!DOCTYPE html><html><body style=\"font-family:monospace;padding:24px;background:#111;color:#f66\">" +
        "<h2>Worker Error (caught)</h2><pre style=\"white-space:pre-wrap;color:#fcc\">" +
        String(msg).replace(/</g, "&lt;") +
        "</pre><p style=\"color:#888\">This replaces Error 1101 so you can see the real exception.</p>" +
        "</body></html>",
        { status: 500, headers: { "content-type": "text/html; charset=utf-8" } }
      );
    }
  },
};
