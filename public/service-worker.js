if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let r={};const t=e=>a(e,c),o={module:{uri:c},exports:r,require:t};s[c]=Promise.all(n.map((e=>o[e]||t(e)))).then((e=>(i(...e),r)))}}define(["./workbox-f1770938"],(function(e){"use strict";importScripts("/fallback-ce627215c0e4a9af.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/GuiadeOrientaciónSaber.pdf",revision:"f5fdd7bd7f3395c1a985a647bfbb487d"},{url:"/ImgDonaciones.png",revision:"1204c1bfdf8d50278bba2d4a366959f7"},{url:"/ImgHome.png",revision:"5d940a8ca2045f89a29d649e4a07c6cd"},{url:"/ImgIngles.png",revision:"130adc424a4c5a09491a4736eed2693d"},{url:"/ImgLengua.png",revision:"b0f2bb840a164bb6e049d5b24074124d"},{url:"/ImgLogin.png",revision:"9cb9700e3342e290fb184f7c51357f90"},{url:"/ImgLogoFooter.png",revision:"49f7767d878c7376b8aaf93499d2dc54"},{url:"/ImgLogoNav.png",revision:"0c81fd214453db849fa12d700c3a961d"},{url:"/ImgLogoPestaña.png",revision:"12145540791d2d1cc01c57b21c97d8ba"},{url:"/ImgMatemática.png",revision:"80117f35f47083c07beb5554dd604eaf"},{url:"/ImgNaturales.png",revision:"f295e2240ff74659b3d5c590ba8f46e0"},{url:"/ImgPreguntas.png",revision:"33a26045820bd4d0bf28c80a02164592"},{url:"/ImgSociales.png",revision:"aac19a355e44d1e1bd6014358fe27372"},{url:"/Infografias.zip",revision:"8a7f3eff9605fafb051a589855208df1"},{url:"/NivelesdeDesempeño.zip",revision:"2580d219abcc0429b4101b5a168d9350"},{url:"/_next/static/chunks/250-8c3fbfe065dca9fe.js",revision:"hcFc5mE7H0PjxA3iJr2-V"},{url:"/_next/static/chunks/468-b258b292ba656b58.js",revision:"hcFc5mE7H0PjxA3iJr2-V"},{url:"/_next/static/chunks/749-221319fda96e1de3.js",revision:"hcFc5mE7H0PjxA3iJr2-V"},{url:"/_next/static/chunks/8b991889.ed9661f687541987.js",revision:"ed9661f687541987"},{url:"/_next/static/chunks/922-4987da3fdd033036.js",revision:"hcFc5mE7H0PjxA3iJr2-V"},{url:"/_next/static/chunks/app/_not-found-1a47b4e9a9226d0c.js",revision:"hcFc5mE7H0PjxA3iJr2-V"},{url:"/_next/static/chunks/app/ingles/layout-c44ebf91027a41e8.js",revision:"hcFc5mE7H0PjxA3iJr2-V"},{url:"/_next/static/chunks/app/ingles/page-9b255dd2c8a43b24.js",revision:"hcFc5mE7H0PjxA3iJr2-V"},{url:"/_next/static/chunks/app/ingresar/page-466d328413dd2b43.js",revision:"hcFc5mE7H0PjxA3iJr2-V"},{url:"/_next/static/chunks/app/layout-7a9406a01bec82b0.js",revision:"hcFc5mE7H0PjxA3iJr2-V"},{url:"/_next/static/chunks/app/lecturacritica/layout-f250296b737eacfc.js",revision:"hcFc5mE7H0PjxA3iJr2-V"},{url:"/_next/static/chunks/app/lecturacritica/niveluno/page-67eae44bacfb59b7.js",revision:"hcFc5mE7H0PjxA3iJr2-V"},{url:"/_next/static/chunks/app/lecturacritica/page-dca64f667fc2eb59.js",revision:"hcFc5mE7H0PjxA3iJr2-V"},{url:"/_next/static/chunks/app/page-b6fd7150064c76d3.js",revision:"hcFc5mE7H0PjxA3iJr2-V"},{url:"/_next/static/chunks/app/progress/layout-48dccf2d85ea6d1a.js",revision:"hcFc5mE7H0PjxA3iJr2-V"},{url:"/_next/static/chunks/app/progress/loading-ff2e391ca6bf7ad6.js",revision:"hcFc5mE7H0PjxA3iJr2-V"},{url:"/_next/static/chunks/app/progress/page-fd467a3eee0aa31d.js",revision:"hcFc5mE7H0PjxA3iJr2-V"},{url:"/_next/static/chunks/app/razonamientologico/layout-71538ed0dc629c0a.js",revision:"hcFc5mE7H0PjxA3iJr2-V"},{url:"/_next/static/chunks/app/razonamientologico/niveldos/page-b75c9f8b3dd38f45.js",revision:"hcFc5mE7H0PjxA3iJr2-V"},{url:"/_next/static/chunks/app/razonamientologico/niveluno/page-7f12145d8ef32d76.js",revision:"hcFc5mE7H0PjxA3iJr2-V"},{url:"/_next/static/chunks/app/razonamientologico/page-2322229414b8a797.js",revision:"hcFc5mE7H0PjxA3iJr2-V"},{url:"/_next/static/chunks/app/~offline/page-c636795cb8e1c561.js",revision:"hcFc5mE7H0PjxA3iJr2-V"},{url:"/_next/static/chunks/fd9d1056-d8ffdb58223e73f8.js",revision:"hcFc5mE7H0PjxA3iJr2-V"},{url:"/_next/static/chunks/framework-aec844d2ccbe7592.js",revision:"hcFc5mE7H0PjxA3iJr2-V"},{url:"/_next/static/chunks/main-02db2252162d18a6.js",revision:"hcFc5mE7H0PjxA3iJr2-V"},{url:"/_next/static/chunks/main-app-fabc4546af0a98be.js",revision:"hcFc5mE7H0PjxA3iJr2-V"},{url:"/_next/static/chunks/pages/_app-75f6107b0260711c.js",revision:"hcFc5mE7H0PjxA3iJr2-V"},{url:"/_next/static/chunks/pages/_error-9a890acb1e81c3fc.js",revision:"hcFc5mE7H0PjxA3iJr2-V"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-d69c41f4ffaadc2d.js",revision:"hcFc5mE7H0PjxA3iJr2-V"},{url:"/_next/static/css/255d5947c2380a2a.css",revision:"255d5947c2380a2a"},{url:"/_next/static/css/d3df112486f97f47.css",revision:"d3df112486f97f47"},{url:"/_next/static/hcFc5mE7H0PjxA3iJr2-V/_buildManifest.js",revision:"e0a21c7d7f93d89dce16df0231dc76f2"},{url:"/_next/static/hcFc5mE7H0PjxA3iJr2-V/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/css/bootstrap-grid.css",revision:"29a16726680195da6a8c78f234880607"},{url:"/css/bootstrap-grid.css.map",revision:"252fc8f161d23326e1566ea62e33dc9e"},{url:"/css/bootstrap-grid.min.css",revision:"6ba2de34dbaa851bb52c96c7bd33352e"},{url:"/css/bootstrap-grid.min.css.map",revision:"88911562570a2e8cb4ce34b789867a00"},{url:"/css/bootstrap-reboot.css",revision:"7dc6d49bddb587f471ed62358e743727"},{url:"/css/bootstrap-reboot.css.map",revision:"6898152aff34417258bb5668dba0dad4"},{url:"/css/bootstrap-reboot.min.css",revision:"4e559333725069a33a9d0f3387652ea5"},{url:"/css/bootstrap-reboot.min.css.map",revision:"0d44c2c533fce5db24e69e81fbb9bbe9"},{url:"/css/bootstrap.css",revision:"d59729439a203fc474f5677b8d18d8bb"},{url:"/css/bootstrap.css.map",revision:"baebc743a8e92e5bd637ba3b72a773da"},{url:"/css/bootstrap.min.css",revision:"450fc463b8b1a349df717056fbb3e078"},{url:"/css/bootstrap.min.css.map",revision:"d35c9e55233cb71e6f83ffc19680ad13"},{url:"/fallback-ce627215c0e4a9af.js",revision:"9ce9e8fe1a0baf80515b990b51ddc4df"},{url:"/global.css",revision:"697921d351712368cdad8e10f0184dcc"},{url:"/icon-192x192.png",revision:"5a2736d060d4904c7528c40329e92185"},{url:"/icon-256x256.png",revision:"b0be2d20f4835c499bfe1efcc142475d"},{url:"/icon-384x384.png",revision:"28deac5f31f18f4b632afd18b6be38af"},{url:"/icon-512x512.png",revision:"b47ed96b56564900d31310762d7844da"},{url:"/icons/0-circle.svg",revision:"c076427cead927f82065a3a4fd51c0ca"},{url:"/icons/wifi-off.svg",revision:"eddd86bcecfac568bb9b4a1e94ae670b"},{url:"/js/bootstrap.bundle.js",revision:"6866f102282d95443edf73ca112b117b"},{url:"/js/bootstrap.bundle.js.map",revision:"61b82bbc09dd548f0aca2d715b5c8b77"},{url:"/js/bootstrap.bundle.min.js",revision:"98d2c1da1c0a495f8fc8ad144ea1d3d2"},{url:"/js/bootstrap.bundle.min.js.map",revision:"91b4eb2e34d30ccbb2af1d817da4a055"},{url:"/js/bootstrap.js",revision:"d810a38ca2781735a27cba0625a027db"},{url:"/js/bootstrap.js.map",revision:"a9071a2bbefe3736bb4043ecdda91c23"},{url:"/js/bootstrap.min.js",revision:"14d449eb8876fa55e1ef3c2cc52b0c17"},{url:"/js/bootstrap.min.js.map",revision:"331c9bac5363b904ceb0955e418ee135"},{url:"/locked.png",revision:"0f1309179c0b1eda29af0e65fc110fa2"},{url:"/manifest.json",revision:"8e2300f960e8b766eadde48ed450ee82"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/unlocked.webp",revision:"9fa6350f984dc24ad264120879149cd8"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"},{url:"/~offline",revision:"hcFc5mE7H0PjxA3iJr2-V"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e},{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET")}));
