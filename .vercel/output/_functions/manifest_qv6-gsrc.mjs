import 'piccolore';
import { p as decodeKey } from './chunks/astro/server_BMjgO3qf.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BHdhdQwZ.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Lukeu/OneDrive/Escritorio/Malaya%20Web/Dev/malaya-web/","cacheDir":"file:///C:/Users/Lukeu/OneDrive/Escritorio/Malaya%20Web/Dev/malaya-web/node_modules/.astro/","outDir":"file:///C:/Users/Lukeu/OneDrive/Escritorio/Malaya%20Web/Dev/malaya-web/dist/","srcDir":"file:///C:/Users/Lukeu/OneDrive/Escritorio/Malaya%20Web/Dev/malaya-web/src/","publicDir":"file:///C:/Users/Lukeu/OneDrive/Escritorio/Malaya%20Web/Dev/malaya-web/public/","buildClientDir":"file:///C:/Users/Lukeu/OneDrive/Escritorio/Malaya%20Web/Dev/malaya-web/dist/client/","buildServerDir":"file:///C:/Users/Lukeu/OneDrive/Escritorio/Malaya%20Web/Dev/malaya-web/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/contact","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/contact\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/contact.ts","pathname":"/api/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.D06AmLz6.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Lukeu/OneDrive/Escritorio/Malaya Web/Dev/malaya-web/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/api/contact@_@ts":"pages/api/contact.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_qv6-gsrc.mjs","C:/Users/Lukeu/OneDrive/Escritorio/Malaya Web/Dev/malaya-web/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_Ctsnjz5S.mjs","C:/Users/Lukeu/OneDrive/Escritorio/Malaya Web/Dev/malaya-web/src/components/Hero.astro?astro&type=script&index=0&lang.ts":"_astro/Hero.astro_astro_type_script_index_0_lang.CVpH5yuc.js","C:/Users/Lukeu/OneDrive/Escritorio/Malaya Web/Dev/malaya-web/src/components/Navbar.astro?astro&type=script&index=0&lang.ts":"_astro/Navbar.astro_astro_type_script_index_0_lang.D4kgNm0X.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/Lukeu/OneDrive/Escritorio/Malaya Web/Dev/malaya-web/src/components/Hero.astro?astro&type=script&index=0&lang.ts","const d=window.matchMedia(\"(hover: hover)\").matches,t=document.getElementById(\"mw-hero\"),n=document.getElementById(\"mw-hero-cursor\");if(d&&t&&n){let o=0;const r=e=>{t.setAttribute(\"data-hover\",e?\"true\":\"false\")},a=e=>{const s=t.getBoundingClientRect(),c=e.clientX-s.left,i=e.clientY-s.top;n.style.setProperty(\"--x\",c+\"px\"),n.style.setProperty(\"--y\",i+\"px\")};t.addEventListener(\"pointerenter\",()=>r(!0)),t.addEventListener(\"pointerleave\",()=>r(!1)),t.addEventListener(\"pointermove\",e=>{cancelAnimationFrame(o),o=requestAnimationFrame(()=>a(e))})}"],["C:/Users/Lukeu/OneDrive/Escritorio/Malaya Web/Dev/malaya-web/src/components/Navbar.astro?astro&type=script&index=0&lang.ts","const c=document.querySelector(\"nav.mw-navbar\"),n=document.getElementById(\"mw-nav-toggle\"),m=document.getElementById(\"mw-nav-overlay\"),h=document.getElementById(\"mw-nav-sheet\"),w=document.getElementById(\"mw-nav-close\"),v=n?.querySelector(\".material-symbols-outlined\"),i=t=>{!c||!n||(n.setAttribute(\"aria-expanded\",t?\"true\":\"false\"),c.setAttribute(\"data-open\",t?\"true\":\"false\"),v&&(v.textContent=t?\"close\":\"menu\"),document.body.classList.toggle(\"mw-lock-scroll\",t))};if(c&&n){n.addEventListener(\"click\",()=>{const e=n.getAttribute(\"aria-expanded\")===\"true\";i(!e)}),m?.addEventListener(\"click\",e=>{e.target===m&&i(!1)}),window.addEventListener(\"keydown\",e=>{e.key===\"Escape\"&&i(!1)}),h?.querySelectorAll(\"a\").forEach(e=>e.addEventListener(\"click\",()=>i(!1))),w?.addEventListener(\"click\",()=>i(!1));const t=()=>{const e=window.scrollY>0;c.classList.toggle(\"shadow-primary-soft\",e)};t(),window.addEventListener(\"scroll\",t,{passive:!0});const a=Array.from(c.querySelectorAll('a[href^=\"#\"]')),u=()=>{const e=window.location.hash||\"\";a.forEach(s=>{const l=e&&s.getAttribute(\"href\")===e;s.classList.toggle(\"mw-link--active\",!!l),s.setAttribute(\"aria-current\",l?\"true\":\"false\")})};u(),window.addEventListener(\"hashchange\",u);const f=a.map(e=>document.querySelector(e.getAttribute(\"href\")||\"\")).filter(e=>!!e);if(f.length){const e=new IntersectionObserver(s=>{const d=s.filter(o=>o.isIntersecting).sort((o,r)=>r.intersectionRatio-o.intersectionRatio)[0]?.target;if(d&&d.id){const o=`#${d.id}`;a.forEach(r=>{const g=r.getAttribute(\"href\")===o;r.classList.toggle(\"mw-link--active\",!!g),r.setAttribute(\"aria-current\",g?\"true\":\"false\")})}},{rootMargin:\"-40% 0px -50% 0px\",threshold:[.25,.6]});f.forEach(s=>e.observe(s))}}"]],"assets":["/_astro/logo.2_DdvXDT.svg","/_astro/material-symbols-outlined-latin-400-normal.B06vSbKE.woff2","/_astro/material-symbols-outlined-latin-400-normal.DH2dR9hv.woff","/_astro/index.D06AmLz6.css","/favicon.svg"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"IkIOOxJQ6hvUTSfsmVQFh4VQuzoWoFo+qI8RK2OarqQ="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
