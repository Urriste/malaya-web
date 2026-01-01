/* empty css                                 */
import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, k as renderScript, r as renderTemplate, s as spreadAttributes, u as unescapeHTML, l as renderHead, n as renderComponent, o as renderSlot } from '../chunks/astro/server_BMjgO3qf.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$9 = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Hero;
  const {
    badgeText = "Respuesta a presupuestos en 24h",
    titleBefore = "Sitios web entregados",
    titleAccent = "r\xE1pido",
    titleAfter = ", con precios predecibles.",
    subtitle = "Paquetes claros, sin sorpresas y con tiempos de entrega garantizados. Ideal para peque\xF1as empresas que valoran su tiempo y su presupuesto.",
    primary = { label: "Solicitar Presupuesto", href: "#contacto" },
    secondary = { label: "Ver Precios", href: "#precios" },
    decorate = false
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="mw-hero" class="mw-hero relative flex flex-col items-center justify-center text-center min-h-[calc(100vh-5rem)]"> <div class="container max-w-7xl mx-auto px-6 flex flex-col items-center text-center"> <!-- Badge --> <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-light border border-border-subtle mb-8"> <span class="relative flex h-2 w-2"> <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span> <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span> </span> <span class="text-xs font-medium text-text-muted uppercase tracking-wide">${badgeText}</span> </div> <!-- Title --> <h1 class="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6 text-white max-w-4xl"> ${titleBefore} <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-400">${titleAccent}</span>${titleAfter} </h1> <!-- Subtitle --> <p class="text-lg md:text-xl text-text-muted max-w-2xl mb-10 leading-relaxed"> ${subtitle} </p> <!-- CTAs --> <div class="flex flex-wrap justify-center gap-4 w-full"> <a${addAttribute(primary.href, "href")} class="mw-hero__btn inline-flex items-center justify-center h-14 px-8 bg-primary hover:bg-red-700 text-white font-bold text-lg transition-all transform hover:-translate-y-1"> ${primary.label} </a> <a${addAttribute(secondary.href, "href")} class="mw-hero__btn inline-flex items-center justify-center h-14 px-8 border border-border-subtle bg-surface-light hover:bg-surface-dark text-white font-bold text-lg transition-colors"> ${secondary.label} </a> </div> </div> <!-- Cursor glow layer --> <div id="mw-hero-cursor" class="mw-hero__cursor"></div> ${decorate && renderTemplate`<div class="mw-hero__decor -z-10"> <div class="mw-hero__blob mw-hero__blob--primary" style="top:20%; left:20%; width:500px; height:500px;"></div> </div>`} </section> ${renderScript($$result, "C:/Users/Lukeu/OneDrive/Escritorio/Malaya Web/Dev/malaya-web/src/components/Hero.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Lukeu/OneDrive/Escritorio/Malaya Web/Dev/malaya-web/src/components/Hero.astro", void 0);

const $$Astro$8 = createAstro();
const $$CharacteristicsBanner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$CharacteristicsBanner;
  const defaultItems = [
    { icon: "paid", title: "Paquetes fijos", description: "Sin costos sorpresa al final." },
    { icon: "fact_check", title: "Alcance claro", description: "Definimos todo por escrito." },
    { icon: "rocket_launch", title: "Entrega r\xE1pida", description: "Plazos desde 72 horas." },
    { icon: "visibility_off", title: "Sin letra chica", description: "Lo que ves es lo que hay." }
  ];
  const { items = defaultItems, id = "caracteristicas" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mw-characteristics py-12 border-y border-border-subtle bg-surface-dark"${addAttribute(id, "id")}${addAttribute(`${id}-title`, "aria-labelledby")}> <h2${addAttribute(`${id}-title`, "id")} class="visually-hidden">Características del servicio</h2> <div class="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4" role="list"> ${items.map((item) => renderTemplate`<article class="mw-characteristics__item" role="listitem"> <span class="material-symbols-outlined mw-characteristics__icon" aria-hidden="true"> ${item.icon} </span> <div class="mw-characteristics__text"> <h3 class="mw-characteristics__title">${item.title}</h3> <p class="mw-characteristics__desc">${item.description}</p> </div> </article>`)} </div> </section>`;
}, "C:/Users/Lukeu/OneDrive/Escritorio/Malaya Web/Dev/malaya-web/src/components/CharacteristicsBanner.astro", void 0);

const $$Astro$7 = createAstro();
const $$Plans = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Plans;
  const defaultPlans = [
    {
      title: "Sitio Empresarial",
      priceLabel: "$500.000",
      unit: "/ pago \xFAnico",
      delivery: "Entrega en 7 d\xEDas h\xE1biles",
      features: [
        "Hasta 5 p\xE1ginas internas",
        "Optimizaci\xF3n de velocidad",
        "SEO T\xE9cnico Avanzado",
        "Soporte personalizado",
        "Configuraci\xF3n de Analytics",
        "Edici\xF3n de contenido opcional"
      ],
      ctaText: "Solicitar Presupuesto",
      ctaHref: "#contacto",
      fromLabel: "desde"
    },
    {
      title: "Landing Express",
      priceLabel: "$100.000",
      unit: "/ pago \xFAnico",
      delivery: "Entrega en 72 horas",
      features: [
        "Dise\xF1o Responsive (M\xF3vil/Desktop)",
        "SEO B\xE1sico incluido",
        "Formulario de Contacto"
      ],
      ctaText: "Elegir Landing",
      ctaHref: "#contacto",
      highlighted: true,
      badge: "M\xE1s Popular"
    },
    {
      title: "MVP Personalizado",
      priceLabel: "Consultar",
      delivery: "Entrega en 14-21 d\xEDas",
      features: [
        "Dise\xF1o totalmente a medida",
        "Funcionalidades custom (JS/API)",
        "Integraciones complejas",
        "Soporte prioritario post-lanzamiento"
      ],
      ctaText: "Cotizar MVP",
      ctaHref: "#contacto"
    }
  ];
  const { plans = defaultPlans, id = "precios" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mw-plans-section py-24 px-6 max-w-7xl mx-auto"${addAttribute(id, "id")}${addAttribute(`${id}-title`, "aria-labelledby")}> <div class="text-center mb-16"> <h2${addAttribute(`${id}-title`, "id")} class="mw-plans__title">Planes Simples y Transparentes</h2> <p class="mw-plans__subtitle">Los plazos comienzan una vez que el contenido y el alcance están confirmados.</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8" role="list"> ${plans.map((p) => renderTemplate`<article${addAttribute(`mw-plan ${p.highlighted ? "mw-plan--highlight" : "mw-plan--default"}`, "class")} role="listitem"> ${p.highlighted && p.badge && renderTemplate`<div class="mw-plan__badge">${p.badge}</div>`} <h3 class="mw-plan__name">${p.title}</h3> <div class="mw-plan__price"> ${p.fromLabel && p.priceLabel.toLowerCase() !== "consultar" && renderTemplate`<span class="mw-plan__price-from">${p.fromLabel}</span>`} <span class="mw-plan__price-value">${p.priceLabel}</span> ${p.unit && renderTemplate`<span class="mw-plan__price-unit">${p.unit}</span>`} </div> <div class="mw-plan__delivery"> <span class="material-symbols-outlined mw-plan__delivery-icon">timer</span> <span>${p.delivery}</span> </div> <ul class="mw-plan__features"> ${p.features.map((f) => renderTemplate`<li class="mw-plan__feature"> <span class="material-symbols-outlined mw-plan__check">check</span> <span>${f}</span> </li>`)} </ul> <a${addAttribute(p.ctaHref, "href")}${addAttribute(`mw-plan__cta ${p.highlighted ? "mw-plan__cta--primary" : "mw-plan__cta--ghost"}`, "class")}> ${p.ctaText} </a> </article>`)} </div> </section>`;
}, "C:/Users/Lukeu/OneDrive/Escritorio/Malaya Web/Dev/malaya-web/src/components/Plans.astro", void 0);

const $$Astro$6 = createAstro();
const $$Process = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Process;
  const defaultSteps = [
    {
      title: "Inicio",
      description: "Recibimos tu brief y contenido. Confirmamos alcance y fecha de entrega.",
      variant: "solid"
    },
    {
      title: "Primer Borrador",
      description: "Desarrollamos la estructura y dise\xF1o base para tu aprobaci\xF3n.",
      variant: "outline"
    },
    {
      title: "Revisiones",
      description: "Afinamos detalles. Incluimos hasta 2 rondas de ajustes r\xE1pidos.",
      variant: "outline"
    },
    {
      title: "Lanzamiento",
      description: "Publicamos tu sitio, configuramos dominio y te entregamos las llaves.",
      variant: "solid"
    }
  ];
  const { steps = defaultSteps, id = "proceso" } = Astro2.props;
  const arrowIndices = Array.from({ length: steps.length - 1 }, (_, i) => i);
  return renderTemplate`${maybeRenderHead()}<section class="mw-process bg-surface-dark border-y border-border-subtle py-20"${addAttribute(id, "id")}${addAttribute(`${id}-title`, "aria-labelledby")}> <div class="max-w-7xl mx-auto px-6"> <div class="text-center mb-12"> <h2${addAttribute(`${id}-title`, "id")} class="mw-process__title">Proceso Ágil</h2> <p class="mw-process__subtitle max-w-2xl mx-auto">Eliminamos la burocracia innecesaria. <br> Nuestro flujo de trabajo está diseñado para ir del punto A al B en tiempo récord.</p> </div> <div class="mw-process__track"> <div class="mw-process__arrows" aria-hidden="true"> ${arrowIndices.map((i) => renderTemplate`<span class="material-symbols-outlined mw-process__arrow"${addAttribute(`--mw-arrow-pos:${(i + 1) / steps.length};`, "style")}>
arrow_forward
</span>`)} </div> <div class="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10" role="list"> ${steps.map((s) => renderTemplate`<article class="mw-process__step" role="listitem"> <div${addAttribute(`mw-process__dot ${s.variant === "solid" ? "mw-process__dot--solid" : "mw-process__dot--outline"}`, "class")}></div> <h3 class="mw-process__step-title">${s.title}</h3> <p class="mw-process__step-desc">${s.description}</p> </article>`)} </div> </div> </div> </section>`;
}, "C:/Users/Lukeu/OneDrive/Escritorio/Malaya Web/Dev/malaya-web/src/components/Process.astro", void 0);

function createSvgComponent({ meta, attributes, children }) {
  const Component = createComponent((_, props) => {
    const normalizedProps = normalizeProps(attributes, props);
    return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
  });
  Object.defineProperty(Component, "toJSON", {
    value: () => meta,
    enumerable: false
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const logoSVG = createSvgComponent({"meta":{"src":"/_astro/logo.2_DdvXDT.svg","width":456,"height":304,"format":"svg"},"attributes":{"width":"456","height":"304","viewBox":"0 0 456 304"},"children":"<path fill=\"#ED5444\" transform=\"scale(0.365385 0.365385)\" d=\"M346.534 123.407L359.496 123.196C377.963 158.047 392.818 198.745 408.365 235.153C426.476 277.569 444.796 319.81 462.8 362.279L544.318 553.688C564.521 600.507 586.343 648.923 605.071 696.163C592.662 696.047 579.48 696.129 567.14 695.607C561.787 687.577 559.3 679.691 555.536 670.963C550.02 658.107 545.172 644.848 539.394 632.12C500.008 545.355 464.584 456.807 426.04 369.654C420.704 357.589 416.778 344.754 410.193 333.19C402.115 354.188 391.37 376.394 382.534 397.285C357.651 456.133 332.369 514.812 306.692 573.317L271.189 654.759C268.577 660.831 255.948 695.487 251.141 695.776C246.675 696.045 218.469 696.721 215.878 695.013C215.187 689.763 244.372 625.596 248.609 615.948L287.183 527.127C313.253 467.71 337.109 407.126 364.264 348.131C373.722 327.585 383.307 306.763 391.703 285.785C385.642 274.162 380.184 259.421 374.287 246.894C367.666 264.095 358.215 283.155 350.815 300.372L294.775 429.87C283.952 456.233 270.988 484.475 259.323 510.625L222.305 594.564C207.57 627.637 193.479 663.185 177.774 695.495C165.535 695.909 151.351 695.573 138.958 695.586C144.247 680.064 155.076 657.411 161.753 642.04L207.438 538.004L310.458 302.554C324.932 269.565 340.769 236.224 354.802 203.305C350.528 191.742 342.615 173.731 337.274 162.577C300.818 249.224 262.919 335.257 223.593 420.639L168.188 546.065L129.264 633.825C120.544 653.234 109.393 676.48 101.956 696.027C88.8101 695.738 73.3624 696.35 60.8348 695.718C64.9111 689.398 71.8982 673.635 74.9653 666.708L97.2158 615.515L171.922 447.505L259.757 249.364L299.87 160.107C305.386 147.513 310.737 136.596 315.722 123.676C326.049 123.731 336.212 123.855 346.534 123.407Z\" /><path fill=\"#ED5444\" transform=\"scale(0.365385 0.365385)\" d=\"M396.929 123.393C410.212 123.626 422.419 123.236 435.605 123.221C439.427 128.424 448.863 152.489 451.879 159.704C460.14 179.518 468.539 199.274 477.073 218.972L604.304 515.574L641.725 602.281C646.028 612.368 654.977 636.218 659.957 644.444C663.856 642.711 670.816 623.929 673.042 618.995C682.04 599.292 690.69 579.432 698.988 559.423L750.515 439.972C754.755 430.167 763.256 408.437 768.073 400.26C781.324 435.201 798.491 473.059 813.253 507.838L842.987 576.315C852.447 598.184 862.961 623.249 873.433 644.643C880.285 628.943 886.517 611.39 892.961 595.361L925.203 516.572L1042.38 230.885C1057.03 195.966 1071.89 157.147 1087.72 123.176C1100.56 123.547 1112.12 123.728 1125.03 123.726C1124.43 126.195 1123.43 128.817 1122.58 131.232C1069.73 257.275 1017.79 383.703 966.782 510.505L924.308 614.366C914.295 639.14 901.424 672.551 889.91 696.171C878.812 695.954 867.193 696.414 856.187 695.846C854.06 692.478 847.607 676.898 845.444 672.043C836.965 653.289 828.662 634.456 820.536 615.547L787.024 538.574C780.566 523.744 772.827 506.983 767.34 492.038C761.487 504.524 756.235 518.368 750.751 531.137L719.865 601.767L691.838 665.437C687.637 675.145 682.56 686.233 678.916 696.035C666.765 696.274 654.614 696.441 642.462 696.537C633.635 676.866 625.205 655.991 616.537 636.064L504.197 373.571L441.624 226.979C427.177 193.81 409.644 156.732 396.929 123.393Z\" /><path fill=\"#ED5444\" transform=\"scale(0.365385 0.365385)\" d=\"M472.521 123.145C485.619 123.509 498.11 123.842 511.213 123.489C548.068 210.667 585.478 297.608 623.441 384.307L648.934 443.032C652.91 452.118 657.61 463.648 662.169 472.279L735.071 305.118C742.724 287.569 749.43 269.744 757.223 252.262C760.26 245.448 763.203 237.679 766.77 231.227C769.782 236.074 773.196 244.3 775.661 249.794C781.287 262.371 786.803 274.997 792.207 287.672L823.966 358.416C832.716 378.194 841.048 399.852 850.535 419.126C857.713 433.709 865.802 455.383 873.494 468.775C876.102 464.413 882.514 447.513 884.83 441.828L909.02 382.258L976.631 217.513C988.967 187.27 1001.86 153.226 1015.2 123.72L1054.05 123.725L1028.21 187.886C1015.54 217.15 1004.62 248.392 992.466 277.608L874.92 560.327C870.337 553.506 863.967 537.595 860.324 529.266L838.031 478.824L791.622 376.044C783.568 358.111 774.672 338.988 767.351 320.825L689.893 498.329C684.586 510.264 679.425 522.262 674.409 534.323C670.867 542.938 666.367 554.912 662.07 562.824C657.9 555.67 652.419 542.202 648.897 534.161L629.489 490.12L563.22 336.405C539.774 283.621 516.944 230.565 494.737 177.248C488.07 161.14 476.681 138.921 472.521 123.145Z\" /><path fill=\"#ED5444\" transform=\"scale(0.365385 0.365385)\" d=\"M1159.06 123.021C1172.84 124.347 1185.65 122.594 1199.22 123.652C1183.98 153.886 1171.64 188.68 1158.65 220.106L1080.49 409.434L1002.91 598.309L975.879 663.793C971.946 673.561 966.493 686.038 963.492 695.839C951.82 696.57 935.376 696.144 923.364 696.244C928.798 681.504 935.374 666.763 941.308 652.171L986.785 541.355L1159.06 123.021Z\" />"});

const $$Astro$5 = createAstro();
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Navbar;
  const {
    brand = { name: "Malaya Web", icon: "code_blocks" },
    links = [
      { label: "Servicios", href: "#servicios" },
      { label: "Precios", href: "#precios" },
      { label: "Proceso", href: "#proceso" },
      { label: "FAQ", href: "#faq" },
      { label: "Contacto", href: "#contacto" }
    ],
    cta = { label: "Solicitar Presupuesto", href: "#contacto" }
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav class="mw-navbar mw-navbar--border w-full bg-background-dark/80" aria-label="Primary"> <div class="max-w-7xl container mx-auto px-6 mw-navbar__inner flex items-center justify-between"> <!-- Brand --> <a href="#mw-hero" class="flex items-center gap-3"${addAttribute(brand.name, "aria-label")}> <img${addAttribute(logoSVG.src, "src")} width="64" height="64" alt="Logo" class="select-none" loading="eager" decoding="async" fetchpriority="high"> <span class="text-xl font-bold tracking-tight text-white">${brand.name}</span> </a> <!-- Desktop nav --> <div class="mw-desktop-nav hidden md:flex items-center gap-8"> ${links.map((l) => renderTemplate`<a${addAttribute(l.href, "href")} class="text-sm font-medium text-text-muted hover:text-white transition-colors">${l.label}</a>`)} </div> <!-- Desktop CTA --> <div class="hidden md:block"> <a${addAttribute(cta.href, "href")} class="inline-flex items-center justify-center h-10 px-6 rounded bg-primary hover:bg-red-700 text-white text-sm font-bold transition-colors">${cta.label}</a> </div> <!-- Mobile toggle --> <button id="mw-nav-toggle" class="md:hidden text-white inline-flex items-center justify-center rounded p-2 focus:outline-none focus:ring-2 focus:ring-primary" aria-controls="mw-nav-sheet" aria-expanded="false"> <span class="material-symbols-outlined" aria-hidden="true">menu</span> <span class="visually-hidden">Abrir menú</span> </button> </div> <!-- Mobile overlay + sheet --> <div id="mw-nav-overlay" class="mw-overlay md:hidden" aria-hidden="true"> <div id="mw-nav-sheet" class="mw-sheet md:hidden"> <!-- Sheet header with close button --> <div class="flex items-center justify-between px-6 py-3 border-b border-border-subtle"> <span class="text-sm font-bold text-white">${brand.name}</span> <button id="mw-nav-close" class="mw-close inline-flex items-center justify-center rounded p-2 focus:outline-none focus:ring-2 focus:ring-primary" aria-label="Cerrar menú"> <span class="material-symbols-outlined" aria-hidden="true">close</span> </button> </div> <div class="container max-w-7xl mx-auto px-6 py-4 space-y-2"> ${links.map((l) => renderTemplate`<a${addAttribute(l.href, "href")} class="block px-2 py-2 rounded text-sm text-text-muted hover:text-white hover:bg-surface-dark transition-colors">${l.label}</a>`)} <a${addAttribute(cta.href, "href")} class="mt-2 w-full h-10 px-6 rounded bg-primary hover:bg-red-700 text-white text-sm font-bold transition-colors flex items-center justify-center md:justify-start">${cta.label}</a> </div> </div> </div> </nav> ${renderScript($$result, "C:/Users/Lukeu/OneDrive/Escritorio/Malaya Web/Dev/malaya-web/src/components/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Lukeu/OneDrive/Escritorio/Malaya Web/Dev/malaya-web/src/components/Navbar.astro", void 0);

const $$Astro$4 = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Footer;
  const {
    brandName = "Malaya Web",
    year = (/* @__PURE__ */ new Date()).getFullYear()
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer class="mw-footer" role="contentinfo"> <div class="mw-footer__inner container max-w-7xl mx-auto px-6"> <div class="mw-footer__left"> <img${addAttribute(logoSVG.src, "src")} alt="logo" width="24" height="24" class="mw-footer__logo" loading="lazy" decoding="async" fetchpriority="low"> <span class="mw-footer__brand">${brandName}</span> </div> <div class="mw-footer__right"> <span class="mw-footer__copy">© ${year} ${brandName}. Todos los derechos reservados.</span> </div> </div> </footer>`;
}, "C:/Users/Lukeu/OneDrive/Escritorio/Malaya Web/Dev/malaya-web/src/components/Footer.astro", void 0);

const $$Astro$3 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="es" class="dark"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml"${addAttribute(logoSVG.src, "href")}><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Malaya Web</title>${renderHead()}</head> <body class="bg-background-dark text-white"> ${renderComponent($$result, "Navbar", $$Navbar, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/Lukeu/OneDrive/Escritorio/Malaya Web/Dev/malaya-web/src/layouts/Layout.astro", void 0);

const $$Astro$2 = createAstro();
const $$Services = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Services;
  const defaultItems = [
    { icon: "web", title: "Landing Pages", description: "P\xE1ginas de aterrizaje de alta conversi\xF3n dise\xF1adas para campa\xF1as espec\xEDficas." },
    { icon: "domain", title: "Sitios Corporativos", description: "Presencia digital completa para tu empresa con m\xFAltiples secciones informativas." },
    { icon: "brush", title: "UI Refresh / Redise\xF1o", description: "Modernizamos tu sitio actual sin tener que reconstruirlo desde cero." },
    { icon: "speed", title: "Optimizaci\xF3n Web", description: "Mejoramos la velocidad de carga (Core Web Vitals) para no perder visitas." },
    { icon: "build", title: "Mantenimiento", description: "Planes mensuales para que no te preocupes por actualizaciones o seguridad." },
    { icon: "search", title: "SEO B\xE1sico", description: "Configuraci\xF3n inicial para que Google indexe tu sitio correctamente." }
  ];
  const {
    id = "servicios",
    heading = "M\xE1s all\xE1 del c\xF3digo",
    subtitle = "Servicios complementarios pensados para que tu negocio crezca sin complicaciones t\xE9cnicas.",
    items = defaultItems
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mw-services py-24 px-6 max-w-7xl mx-auto"${addAttribute(id, "id")}${addAttribute(`${id}-title`, "aria-labelledby")}> <div class="mw-services__header"> <h2${addAttribute(`${id}-title`, "id")} class="mw-services__title">${heading}</h2> <p class="mw-services__subtitle">${subtitle}</p> </div> <div class="mw-services__grid" role="list"> ${items.map((s) => renderTemplate`<article class="mw-service" role="listitem"> <span class="material-symbols-outlined mw-service__icon" aria-hidden="true">${s.icon}</span> <h3 class="mw-service__name">${s.title}</h3> <p class="mw-service__desc">${s.description}</p> </article>`)} </div> </section>`;
}, "C:/Users/Lukeu/OneDrive/Escritorio/Malaya Web/Dev/malaya-web/src/components/Services.astro", void 0);

const $$Astro$1 = createAstro();
const $$FrequentQuestions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FrequentQuestions;
  const defaultItems = [
    {
      question: "\xBFQu\xE9 puede retrasar la entrega?",
      content: `
      <p>Trabajamos con plazos cortos, pero hay factores que dependen del ida y vuelta. El plazo empieza a correr cuando tenemos lo necesario para avanzar (contenido base y un OK inicial).</p>
      <p>Lo que m\xE1s suele retrasar:</p>
      <ol>
        <li>
          <p><strong>1) Contenido pendiente</strong></p>
          <p>Si faltan textos, logo, im\xE1genes, precios, servicios o datos clave, podemos avanzar con contenido provisorio, pero la entrega final se mueve hasta recibir el material definitivo.</p>
        </li>
        <li>
          <p><strong>2) Feedback lento o en tandas</strong></p>
          <p>Si el feedback tarda varios d\xEDas o llega \u201Cde a poco\u201D, se estira el proyecto. Lo ideal es responder cada ronda de cambios en 24\u201348 hs.</p>
        </li>
        <li>
          <p><strong>3) Cambios grandes o pedidos fuera del plan</strong></p>
          <p>Por ejemplo: agregar p\xE1ginas nuevas, rehacer la estructura, sumar funcionalidades, integraciones complejas, e-commerce, turnos, login, etc. En esos casos se re-cotiza y se ajusta el plazo antes de avanzar.</p>
        </li>
        <li>
          <p><strong>4) Dependencias externas (dominio/hosting/cuentas)</strong></p>
          <p>La publicaci\xF3n y algunas integraciones dependen de accesos a hosting, dominio o cuentas (Google/Meta). Si esos accesos no est\xE1n a tiempo, el sitio puede quedar listo pero no publicado o sin medici\xF3n configurada.</p>
        </li>
      </ol>
    `
    },
    {
      question: "\xBFOfrecen precios realmente fijos?",
      content: `
      <p><strong>S\xED</strong>, el desarrollo del sitio se cotiza como pago \xFAnico y precio fijo, porque cada plan tiene un alcance claro (p\xE1ginas/secciones y funcionalidades incluidas).</p>
      <p><strong>Desarrollo (pago \xFAnico fijo)</strong> incluye lo que figura en el plan. Si el alcance se mantiene, el precio no cambia.</p>
      <h4>Opcionales post-entrega (a elecci\xF3n del cliente)</h4>
      <p>Adem\xE1s del desarrollo, pod\xE9s sumar cualquiera de estas modalidades seg\xFAn lo que necesites:</p>
      <ol>
        <li>
          <p><strong>1) Mantenimiento mensual (opcional)</strong></p>
          <p>Ideal si quer\xE9s que el sitio est\xE9 siempre actualizado y con alguien \u201Ca cargo\u201D. Puede incluir: actualizaciones menores, chequeos, peque\xF1os cambios de contenido y soporte.</p>
        </li>
        <li>
          <p><strong>2) Cambios por intervenci\xF3n / por revisi\xF3n (sin mensualidad)</strong></p>
          <p>Si prefer\xEDs no pagar todos los meses, se puede pedir \u201Ccambios puntuales\u201D cuando los necesites (por hora o por tarea).</p>
        </li>
        <li>
          <p><strong>3) Hosting + dominio / URL personalizada (opcional)</strong></p>
          <p>Podemos ayudarte a dejar el sitio online con tu propia URL y administrar el hosting, con un costo mensual/anual seg\xFAn el proveedor.</p>
        </li>
      </ol>
      <h4>Importante sobre dominio y hosting</h4>
      <p>El dominio personalizado (ej: tusitio.com) y el costo del hosting no est\xE1n incluidos en el precio del desarrollo.</p>
      <p>Si ya ten\xE9s dominio/hosting, lo usamos sin problema. Si no ten\xE9s, te recomendamos opciones y lo gestionamos si lo ped\xEDs.</p>
      <h4>\xBFQu\xE9 pasa si aparece algo fuera de alcance durante el desarrollo?</h4>
      <p>Cualquier extra (p\xE1ginas adicionales, integraciones avanzadas, e-commerce, panel/CMS, automatizaciones, etc.) se cotiza aparte antes de hacerlo, as\xED no hay sorpresas.</p>
    `
    },
    {
      question: "\xBFCu\xE1ntas revisiones se incluyen?",
      content: `
      <p>Incluimos revisiones para que el sitio quede prolijo, sin que el proyecto se vuelva infinito.</p>
      <ul>
        <li><strong>Landing Express:</strong> 1 ronda de cambios</li>
        <li><strong>Sitio Empresarial:</strong> 2 rondas de cambios</li>
        <li><strong>MVP Personalizado:</strong> revisiones por sprints (se define seg\xFAn alcance)</li>
      </ul>
      <h4>\xBFQu\xE9 cuenta como revisi\xF3n?</h4>
      <p>Ajustes dentro de lo ya armado: textos, im\xE1genes, reordenar contenido, detalles visuales (espaciados, tama\xF1os, colores), y peque\xF1os retoques.</p>
      <h4>\xBFQu\xE9 no entra como revisi\xF3n incluida (o puede cambiar precio/plazo)?</h4>
      <p>Redise\xF1o completo, cambios estructurales grandes, p\xE1ginas nuevas completas o funcionalidades nuevas.</p>
    `
    },
    {
      question: "\xBFQu\xE9 necesitan de m\xED para empezar?",
      content: `
      <p>Para arrancar r\xE1pido y cumplir los plazos necesitamos lo b\xE1sico (no tiene que estar perfecto).</p>
      <h4>1) Contenido m\xEDnimo</h4>
      <ul>
        <li>Logo (si ten\xE9s) y nombre de marca</li>
        <li>Textos (aunque sea borrador): qu\xE9 hac\xE9s, para qui\xE9n, servicios, llamada a la acci\xF3n</li>
        <li>Im\xE1genes/fotos (o definimos si usamos stock)</li>
        <li>Contacto: WhatsApp, mail y links a redes</li>
      </ul>
      <h4>2) Referencias + objetivo</h4>
      <ul>
        <li>2\u20133 sitios que te gusten (para entender estilo)</li>
        <li>Objetivo del sitio: vender, recibir consultas, mostrar servicios/portfolio, etc.</li>
      </ul>
      <h4>3) Publicaci\xF3n</h4>
      <ul>
        <li>Si ya ten\xE9s dominio/hosting: accesos o invitaci\xF3n como colaborador</li>
        <li>Si no ten\xE9s: te guiamos para comprar dominio/hosting, o lo gestionamos como servicio opcional</li>
      </ul>
      <h4>4) Medici\xF3n (si se incluye en el plan)</h4>
      <ul>
        <li>Acceso a Google (o te ayudamos a crear GA4)</li>
        <li>Instalaci\xF3n y verificaci\xF3n de que est\xE1 midiendo</li>
      </ul>
    `
    }
  ];
  const { id = "faq", heading = "Preguntas Frecuentes", items = defaultItems } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mw-faq py-20 bg-surface-dark border-y border-border-subtle"${addAttribute(id, "id")}${addAttribute(`${id}-title`, "aria-labelledby")}> <div class="mw-faq__container"> <div class="mw-faq__header"> <h2${addAttribute(`${id}-title`, "id")} class="mw-faq__title">${heading}</h2> </div> <div class="mw-faq__list"> ${items.map((item) => renderTemplate`<details class="mw-faq__item"> <summary class="mw-faq__summary"> <span class="mw-faq__question">${item.question}</span> <span class="material-symbols-outlined mw-faq__chevron" aria-hidden="true">expand_more</span> </summary> <div class="mw-faq__content">${unescapeHTML(item.content)}</div> </details>`)} </div> </div> </section>`;
}, "C:/Users/Lukeu/OneDrive/Escritorio/Malaya Web/Dev/malaya-web/src/components/FrequentQuestions.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  const defaultOptions = [
    "Solo consulta / No sé qué necesito",
    "Landing Express (1 página)",
    "Sitio empresarial (hasta 5 páginas)",
    "MVP / Web a medida",
    "Rediseño de sitio existente",
    "Optimización de velocidad (sitio existente)",
    "Integración puntual (WhatsApp / Analytics / Formularios)",
    "Mantenimiento / actualizaciones de contenido"
  ];
  const {
    id = "contacto",
    heading = "Empezá tu proyecto hoy",
    description = "Completá el formulario y recibí un presupuesto preliminar en menos de 24 horas hábiles. Sin compromiso.",
    email = "hola@malayaweb.com",
    projectOptions = defaultOptions,
    endpoint = "/api/contact"
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", "<section", ' class="mw-contact py-24 px-6 max-w-7xl mx-auto"', ' data-component="mw-contact"> <div class="mw-contact__grid"> <div class="mw-contact__intro"> <h2', ' class="mw-contact__title">', '</h2> <p class="mw-contact__subtitle">', '</p> <div class="mw-contact__info"> <div class="mw-contact__info-item"> <div class="mw-contact__info-icon" aria-hidden="true"> <span class="material-symbols-outlined">mail</span> </div> <div class="mw-contact__info-text"> <p class="mw-contact__info-label">Email</p> <a', ' class="mw-contact__info-value">', '</a> </div> </div>  </div> </div> <div class="mw-contact__form-card"> <form', ' class="mw-contact__form"', ' method="POST" novalidate', '> <input type="text" name="website" class="visually-hidden" tabindex="-1" autocomplete="off" aria-hidden="true"> <div class="mw-contact__field"> <label', ' class="mw-contact__label">Nombre</label> <input', ' name="name" type="text" class="mw-contact__input" placeholder="Tu nombre" autocomplete="name"> <p class="mw-contact__error" data-error="name"></p> </div> <div class="mw-contact__field"> <label', ' class="mw-contact__label">Correo Electrónico</label> <input', ' name="email" type="email" class="mw-contact__input" placeholder="tu@empresa.com" autocomplete="email"> <p class="mw-contact__error" data-error="email"></p> </div> <div class="mw-contact__field"> <label', ' class="mw-contact__label">Tipo de Proyecto</label> <div class="mw-contact__select-wrap"> <select', ' name="project" class="mw-contact__select"> ', ' </select> <span class="material-symbols-outlined mw-contact__select-icon" aria-hidden="true">expand_more</span> </div> <p class="mw-contact__error" data-error="project"></p> </div> <div class="mw-contact__field"> <label', ' class="mw-contact__label">Notas adicionales</label> <textarea', ' name="message" class="mw-contact__textarea" placeholder="Contanos brevemente sobre tu negocio..."></textarea> </div> <button type="submit" class="mw-contact__submit">Enviar Consulta</button> <p', ` class="mw-contact__note">Respondemos en 24 horas hábiles.</p> <p class="mw-contact__success" aria-live="polite"></p> </form> </div> </div> </section> <script type="module">
  const section = document.querySelector('section[data-component="mw-contact"]');
  const form = section?.querySelector('form');
  const submitBtn = form.querySelector('.mw-contact__submit');
  const successEl = form.querySelector('.mw-contact__success');
  const fields = {
    name: form.querySelector('input[name="name"]'),
    email: form.querySelector('input[name="email"]'),
    project: form.querySelector('select[name="project"]'),
    website: form.querySelector('input[name="website"]'),
  };

  function setError(field, message) {
    const input = fields[field];
    const err = form.querySelector(\`.mw-contact__error[data-error="\${field}"]\`);
    if (message) {
      input.setAttribute('aria-invalid', 'true');
      err.textContent = message;
      err.dataset.visible = 'true';
    } else {
      input.removeAttribute('aria-invalid');
      err.textContent = '';
      err.dataset.visible = 'false';
    }
  }

  function validate() {
    let ok = true;
    setError('name');
    setError('email');
    setError('project');
    if (!fields.name.value.trim()) { setError('name', 'Ingresá tu nombre.'); ok = false; }
    const email = fields.email.value.trim();
    if (!email || !/^\\S+@\\S+\\.\\S+$/.test(email)) { setError('email', 'Ingresá un correo válido.'); ok = false; }
    if (!fields.project.value.trim()) { setError('project', 'Seleccioná un tipo de proyecto.'); ok = false; }
    return ok;
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    successEl.dataset.visible = 'false';
    if (!validate()) return;
    submitBtn.disabled = true;
    const fd = new FormData(form);
    try {
      if (form.action) {
        const res = await fetch(form.action, { method: 'POST', body: fd, headers: { 'Accept': 'application/json' } });
        const data = await res.json().catch(() => ({ ok: res.ok }));
        if (!res.ok || data?.error) throw new Error(data?.error || 'Request failed');
      } else {
        await new Promise(r => setTimeout(r, 300));
      }
      successEl.textContent = '¡Gracias! Recibimos tu consulta.';
      successEl.dataset.visible = 'true';
      form.reset();
    } catch (err) {
      successEl.textContent = 'Ocurrió un error. Probá de nuevo más tarde.';
      successEl.dataset.visible = 'true';
    } finally {
      submitBtn.disabled = false;
    }
  });
</script>`], ["", "<section", ' class="mw-contact py-24 px-6 max-w-7xl mx-auto"', ' data-component="mw-contact"> <div class="mw-contact__grid"> <div class="mw-contact__intro"> <h2', ' class="mw-contact__title">', '</h2> <p class="mw-contact__subtitle">', '</p> <div class="mw-contact__info"> <div class="mw-contact__info-item"> <div class="mw-contact__info-icon" aria-hidden="true"> <span class="material-symbols-outlined">mail</span> </div> <div class="mw-contact__info-text"> <p class="mw-contact__info-label">Email</p> <a', ' class="mw-contact__info-value">', '</a> </div> </div>  </div> </div> <div class="mw-contact__form-card"> <form', ' class="mw-contact__form"', ' method="POST" novalidate', '> <input type="text" name="website" class="visually-hidden" tabindex="-1" autocomplete="off" aria-hidden="true"> <div class="mw-contact__field"> <label', ' class="mw-contact__label">Nombre</label> <input', ' name="name" type="text" class="mw-contact__input" placeholder="Tu nombre" autocomplete="name"> <p class="mw-contact__error" data-error="name"></p> </div> <div class="mw-contact__field"> <label', ' class="mw-contact__label">Correo Electrónico</label> <input', ' name="email" type="email" class="mw-contact__input" placeholder="tu@empresa.com" autocomplete="email"> <p class="mw-contact__error" data-error="email"></p> </div> <div class="mw-contact__field"> <label', ' class="mw-contact__label">Tipo de Proyecto</label> <div class="mw-contact__select-wrap"> <select', ' name="project" class="mw-contact__select"> ', ' </select> <span class="material-symbols-outlined mw-contact__select-icon" aria-hidden="true">expand_more</span> </div> <p class="mw-contact__error" data-error="project"></p> </div> <div class="mw-contact__field"> <label', ' class="mw-contact__label">Notas adicionales</label> <textarea', ' name="message" class="mw-contact__textarea" placeholder="Contanos brevemente sobre tu negocio..."></textarea> </div> <button type="submit" class="mw-contact__submit">Enviar Consulta</button> <p', ` class="mw-contact__note">Respondemos en 24 horas hábiles.</p> <p class="mw-contact__success" aria-live="polite"></p> </form> </div> </div> </section> <script type="module">
  const section = document.querySelector('section[data-component="mw-contact"]');
  const form = section?.querySelector('form');
  const submitBtn = form.querySelector('.mw-contact__submit');
  const successEl = form.querySelector('.mw-contact__success');
  const fields = {
    name: form.querySelector('input[name="name"]'),
    email: form.querySelector('input[name="email"]'),
    project: form.querySelector('select[name="project"]'),
    website: form.querySelector('input[name="website"]'),
  };

  function setError(field, message) {
    const input = fields[field];
    const err = form.querySelector(\\\`.mw-contact__error[data-error="\\\${field}"]\\\`);
    if (message) {
      input.setAttribute('aria-invalid', 'true');
      err.textContent = message;
      err.dataset.visible = 'true';
    } else {
      input.removeAttribute('aria-invalid');
      err.textContent = '';
      err.dataset.visible = 'false';
    }
  }

  function validate() {
    let ok = true;
    setError('name');
    setError('email');
    setError('project');
    if (!fields.name.value.trim()) { setError('name', 'Ingresá tu nombre.'); ok = false; }
    const email = fields.email.value.trim();
    if (!email || !/^\\\\S+@\\\\S+\\\\.\\\\S+$/.test(email)) { setError('email', 'Ingresá un correo válido.'); ok = false; }
    if (!fields.project.value.trim()) { setError('project', 'Seleccioná un tipo de proyecto.'); ok = false; }
    return ok;
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    successEl.dataset.visible = 'false';
    if (!validate()) return;
    submitBtn.disabled = true;
    const fd = new FormData(form);
    try {
      if (form.action) {
        const res = await fetch(form.action, { method: 'POST', body: fd, headers: { 'Accept': 'application/json' } });
        const data = await res.json().catch(() => ({ ok: res.ok }));
        if (!res.ok || data?.error) throw new Error(data?.error || 'Request failed');
      } else {
        await new Promise(r => setTimeout(r, 300));
      }
      successEl.textContent = '¡Gracias! Recibimos tu consulta.';
      successEl.dataset.visible = 'true';
      form.reset();
    } catch (err) {
      successEl.textContent = 'Ocurrió un error. Probá de nuevo más tarde.';
      successEl.dataset.visible = 'true';
    } finally {
      submitBtn.disabled = false;
    }
  });
</script>`])), maybeRenderHead(), addAttribute(id, "id"), addAttribute(`${id}-title`, "aria-labelledby"), addAttribute(`${id}-title`, "id"), heading, description, addAttribute(`mailto:${email}`, "href"), email, addAttribute(`${id}-form`, "id"), addAttribute(endpoint, "action"), addAttribute(`${id}-note`, "aria-describedby"), addAttribute(`${id}-name`, "for"), addAttribute(`${id}-name`, "id"), addAttribute(`${id}-email`, "for"), addAttribute(`${id}-email`, "id"), addAttribute(`${id}-project`, "for"), addAttribute(`${id}-project`, "id"), projectOptions.map((opt) => renderTemplate`<option${addAttribute(opt, "value")}>${opt}</option>`), addAttribute(`${id}-message`, "for"), addAttribute(`${id}-message`, "id"), addAttribute(`${id}-note`, "id"));
}, "C:/Users/Lukeu/OneDrive/Escritorio/Malaya Web/Dev/malaya-web/src/components/Contact.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "CharacteristicsBanner", $$CharacteristicsBanner, {})} ${renderComponent($$result2, "Plans", $$Plans, {})} ${renderComponent($$result2, "Process", $$Process, {})} ${renderComponent($$result2, "Services", $$Services, { "id": "servicios" })} ${renderComponent($$result2, "FrequentQuestions", $$FrequentQuestions, { "id": "faq" })} ${renderComponent($$result2, "Contact", $$Contact, { "id": "contacto" })} ` })}`;
}, "C:/Users/Lukeu/OneDrive/Escritorio/Malaya Web/Dev/malaya-web/src/pages/index.astro", void 0);

const $$file = "C:/Users/Lukeu/OneDrive/Escritorio/Malaya Web/Dev/malaya-web/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
