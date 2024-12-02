import { c as create_ssr_component, a as add_attribute, b as compute_rest_props, d as subscribe, s as setContext, v as validate_component, e as spread, f as escape_attribute_value, g as escape_object, h as getContext, i as escape } from "../../chunks/ssr.js";
import { i as is_void, B as Button } from "../../chunks/Button.js";
import { F as Frame } from "../../chunks/Frame.js";
import { twMerge } from "tailwind-merge";
import { w as writable } from "../../chunks/index2.js";
import { s as sineIn } from "../../chunks/index3.js";
import { l as language, t } from "../../chunks/store.js";
const NavContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { fluid = false } = $$props;
  if ($$props.fluid === void 0 && $$bindings.fluid && fluid !== void 0) $$bindings.fluid(fluid);
  return `<div${add_attribute("class", twMerge("mx-auto flex flex-wrap justify-between items-center ", fluid ? "w-full" : "container", $$props.class), 0)}>${slots.default ? slots.default({}) : ``}</div> `;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["fluid"]);
  let $hidden, $$unsubscribe_hidden;
  let { fluid = false } = $$props;
  let hidden = writable(true);
  $$unsubscribe_hidden = subscribe(hidden, (value) => $hidden = value);
  setContext("navHidden", hidden);
  let toggle = () => hidden.update((hidden2) => !hidden2);
  if ($$props.fluid === void 0 && $$bindings.fluid && fluid !== void 0) $$bindings.fluid(fluid);
  {
    {
      $$restProps.color = $$restProps.color ?? "navbar";
    }
  }
  $$unsubscribe_hidden();
  return `${validate_component(Frame, "Frame").$$render(
    $$result,
    Object.assign({}, { tag: "nav" }, $$restProps, {
      class: twMerge("px-2 sm:px-4 py-2.5 w-full", $$props.class)
    }),
    {},
    {
      default: () => {
        return `${validate_component(NavContainer, "NavContainer").$$render($$result, { fluid }, {}, {
          default: () => {
            return `${slots.default ? slots.default({ hidden: $hidden, toggle, NavContainer }) : ``}`;
          }
        })}`;
      }
    }
  )} `;
});
const NavBrand = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href"]);
  let { href = "" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  return `<a${spread(
    [
      { href: escape_attribute_value(href) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("flex items-center", $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</a> `;
});
const NavLi = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let active;
  let liClass;
  let $$restProps = compute_rest_props($$props, ["href", "activeClass", "nonActiveClass"]);
  let { href = "" } = $$props;
  let { activeClass = void 0 } = $$props;
  let { nonActiveClass = void 0 } = $$props;
  const context = getContext("navbarContext") ?? {};
  const activeUrlStore = getContext("activeUrl");
  let navUrl = "";
  activeUrlStore.subscribe((value) => {
    navUrl = value;
  });
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0) $$bindings.activeClass(activeClass);
  if ($$props.nonActiveClass === void 0 && $$bindings.nonActiveClass && nonActiveClass !== void 0) $$bindings.nonActiveClass(nonActiveClass);
  active = navUrl ? href === navUrl : false;
  liClass = twMerge(
    "block py-2 pe-4 ps-3 md:p-0 rounded md:border-0",
    active ? activeClass ?? context.activeClass : nonActiveClass ?? context.nonActiveClass,
    $$props.class
  );
  return `<li>${((tag) => {
    return tag ? `<${href ? "a" : "div"}${spread(
      [
        {
          role: escape_attribute_value(href ? void 0 : "link")
        },
        { href: escape_attribute_value(href) },
        escape_object($$restProps),
        { class: escape_attribute_value(liClass) }
      ],
      {}
    )}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(href ? "a" : "div")}</li> `;
});
const NavUl = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "activeUrl",
    "divClass",
    "ulClass",
    "hidden",
    "slideParams",
    "activeClass",
    "nonActiveClass"
  ]);
  let $hiddenStore, $$unsubscribe_hiddenStore;
  const activeUrlStore = writable("");
  let { activeUrl = "" } = $$props;
  let { divClass = "w-full md:block md:w-auto" } = $$props;
  let { ulClass = "flex flex-col p-4 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:text-sm md:font-medium" } = $$props;
  let { hidden = void 0 } = $$props;
  let { slideParams = {
    delay: 250,
    duration: 500,
    easing: sineIn
  } } = $$props;
  let { activeClass = "text-white bg-primary-700 md:bg-transparent md:text-primary-700 md:dark:text-white dark:bg-primary-600 md:dark:bg-transparent" } = $$props;
  let { nonActiveClass = "text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" } = $$props;
  setContext("navbarContext", { activeClass, nonActiveClass });
  setContext("activeUrl", activeUrlStore);
  let hiddenStore = getContext("navHidden");
  $$unsubscribe_hiddenStore = subscribe(hiddenStore, (value) => $hiddenStore = value);
  let _hidden;
  let _divClass;
  let _ulClass;
  if ($$props.activeUrl === void 0 && $$bindings.activeUrl && activeUrl !== void 0) $$bindings.activeUrl(activeUrl);
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0) $$bindings.divClass(divClass);
  if ($$props.ulClass === void 0 && $$bindings.ulClass && ulClass !== void 0) $$bindings.ulClass(ulClass);
  if ($$props.hidden === void 0 && $$bindings.hidden && hidden !== void 0) $$bindings.hidden(hidden);
  if ($$props.slideParams === void 0 && $$bindings.slideParams && slideParams !== void 0) $$bindings.slideParams(slideParams);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0) $$bindings.activeClass(activeClass);
  if ($$props.nonActiveClass === void 0 && $$bindings.nonActiveClass && nonActiveClass !== void 0) $$bindings.nonActiveClass(nonActiveClass);
  {
    {
      activeUrlStore.set(activeUrl);
    }
  }
  _hidden = hidden ?? $hiddenStore ?? true;
  _divClass = twMerge(divClass, $$props.class);
  _ulClass = twMerge(
    ulClass,
    // 'divide-y md:divide-y-0 divide-gray-100 dark:divide-gray-700',
    $$props.classUl
  );
  $$unsubscribe_hiddenStore();
  return `${!_hidden ? `<div${spread(
    [
      escape_object($$restProps),
      { class: escape_attribute_value(_divClass) },
      { role: "button" },
      { tabindex: "0" }
    ],
    {}
  )}>${validate_component(Frame, "Frame").$$render(
    $$result,
    {
      tag: "ul",
      border: true,
      rounded: true,
      color: "navbarUl",
      class: _ulClass
    },
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}</div>` : `<div${spread(
    [
      escape_object($$restProps),
      { class: escape_attribute_value(_divClass) },
      { hidden: _hidden || null }
    ],
    {}
  )}><ul${add_attribute("class", _ulClass, 0)}>${slots.default ? slots.default({}) : ``}</ul></div>`} `;
});
const LanguageSwitcher = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $language, $$unsubscribe_language;
  $$unsubscribe_language = subscribe(language, (value) => $language = value);
  $$unsubscribe_language();
  return `<button class="px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 text-sm font-medium">${escape($language.toUpperCase())}</button>`;
});
const Navbar_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  let isScrolled = false;
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      isScrolled = window.scrollY > 20;
    });
  }
  $$unsubscribe_t();
  return `${validate_component(Navbar, "Navbar").$$render(
    $$result,
    {
      class: "fixed w-full z-50 transition-all duration-200 " + (isScrolled ? "bg-white shadow-md" : "bg-transparent")
    },
    {},
    {
      default: () => {
        return `${validate_component(NavBrand, "NavBrand").$$render(
          $$result,
          {
            href: "/",
            class: "flex items-center space-x-2"
          },
          {},
          {
            default: () => {
              return `<div class="${escape(isScrolled ? "bg-primary-600 " : " ", true) + "w-[75px] h-[75px] p-2 rounded-lg"}"><img alt="UMR Logo" src="/images/umr-logo-08.png"></div>`;
            }
          }
        )} <div class="flex items-center gap-8">${validate_component(NavUl, "NavUl").$$render($$result, { class: "flex gap-6" }, {}, {
          default: () => {
            return `${validate_component(NavLi, "NavLi").$$render(
              $$result,
              {
                href: "/",
                class: (isScrolled ? "text-gray-700" : "text-white") + " hover:text-primary-600 transition-colors"
              },
              {},
              {
                default: () => {
                  return `${escape($t("nav.home"))}`;
                }
              }
            )} ${validate_component(NavLi, "NavLi").$$render(
              $$result,
              {
                href: "/jobSearch",
                class: " " + (isScrolled ? "text-gray-700" : "text-white") + "  hover:text-primary-600  transition-colors"
              },
              {},
              {
                default: () => {
                  return `${escape($t("nav.jobs"))}`;
                }
              }
            )} ${validate_component(NavLi, "NavLi").$$render(
              $$result,
              {
                href: "/employers",
                class: (isScrolled ? "text-gray-700" : "text-white") + "  hover:text-primary-600 transition-colors"
              },
              {},
              {
                default: () => {
                  return `${escape($t("nav.employers"))}`;
                }
              }
            )}`;
          }
        })} ${validate_component(Button, "Button").$$render(
          $$result,
          {
            href: "/jobSearch",
            class: "bg-secondary-500 hover:bg-secondary-700"
          },
          {},
          {
            default: () => {
              return `Jobs`;
            }
          }
        )} ${validate_component(LanguageSwitcher, "LanguageSwitcher").$$render($$result, {}, {}, {})}</div>`;
      }
    }
  )}`;
});
const SEO = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "UMR it Teams" } = $$props;
  let { description = "Find your dream job or ideal candidate with UMR it Teams" } = $$props;
  let { keywords = "jobs, recruitment, hiring, careers, employment" } = $$props;
  let { ogImage = "/images/og-image.jpg" } = $$props;
  let { canonicalUrl = "https://umritteams.com" } = $$props;
  let { titleDe = "UMR it Teams" } = $$props;
  let { descriptionDe = "Finden Sie Ihren Traumjob oder den idealen Kandidaten mit UMR it Teams" } = $$props;
  let { keywordsDe = "Jobs, Rekrutierung, Einstellung, Karrieren, Beschäftigung" } = $$props;
  let { ogImageDe = "/images/og-image-de.jpg" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0) $$bindings.description(description);
  if ($$props.keywords === void 0 && $$bindings.keywords && keywords !== void 0) $$bindings.keywords(keywords);
  if ($$props.ogImage === void 0 && $$bindings.ogImage && ogImage !== void 0) $$bindings.ogImage(ogImage);
  if ($$props.canonicalUrl === void 0 && $$bindings.canonicalUrl && canonicalUrl !== void 0) $$bindings.canonicalUrl(canonicalUrl);
  if ($$props.titleDe === void 0 && $$bindings.titleDe && titleDe !== void 0) $$bindings.titleDe(titleDe);
  if ($$props.descriptionDe === void 0 && $$bindings.descriptionDe && descriptionDe !== void 0) $$bindings.descriptionDe(descriptionDe);
  if ($$props.keywordsDe === void 0 && $$bindings.keywordsDe && keywordsDe !== void 0) $$bindings.keywordsDe(keywordsDe);
  if ($$props.ogImageDe === void 0 && $$bindings.ogImageDe && ogImageDe !== void 0) $$bindings.ogImageDe(ogImageDe);
  return `${$$result.head += `<!-- HEAD_svelte-24zksa_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<meta name="description"${add_attribute("content", description, 0)}><meta name="keywords"${add_attribute("content", keywords, 0)}><meta name="keywords:de"${add_attribute("content", keywordsDe, 0)}><meta property="og:type" content="website"><meta property="og:url"${add_attribute("content", canonicalUrl, 0)}><meta property="og:title"${add_attribute("content", title, 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", ogImage, 0)}><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${add_attribute("content", canonicalUrl, 0)}><meta property="twitter:title"${add_attribute("content", title, 0)}><meta property="twitter:description"${add_attribute("content", description, 0)}><meta property="twitter:image"${add_attribute("content", ogImage, 0)}><meta property="og:locale" content="de_DE"><meta property="og:locale:alternate" content="en_US"><meta property="og:title"${add_attribute("content", titleDe, 0)}><meta property="og:description"${add_attribute("content", descriptionDe, 0)}><meta property="og:image"${add_attribute("content", ogImageDe, 0)}><link rel="canonical"${add_attribute("href", canonicalUrl, 0)}><!-- HEAD_svelte-24zksa_END -->`, ""}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(SEO, "SEO").$$render($$result, {}, {}, {})} ${validate_component(Navbar_1, "Navbar").$$render($$result, {}, {}, {})} <div class="min-h-screen bg-gradient-to-b from-primary-300 to-primary-100">${slots.default ? slots.default({}) : ` `}</div>`;
});
export {
  Layout as default
};
