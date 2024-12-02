import { c as create_ssr_component, b as compute_rest_props, h as getContext, e as spread, f as escape_attribute_value, g as escape_object, a as add_attribute, i as escape, d as subscribe, v as validate_component, j as each, m as missing_component } from "../../../chunks/ssr.js";
import { B as Button } from "../../../chunks/Button.js";
import { A as ArrowRightOutline, U as UsersGroupSolid } from "../../../chunks/UsersGroupSolid.js";
import { twMerge } from "tailwind-merge";
import { t } from "../../../chunks/store.js";
const ChartMixedOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "color", "withEvents", "title", "strokeWidth", "desc", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { color = ctx.color || "currentColor" } = $$props;
  let { withEvents = ctx.withEvents || false } = $$props;
  let { title = {} } = $$props;
  let { strokeWidth = ctx.strokeWidth || "2" } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "chart mixed outline" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0) $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0) $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0) $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
      hasDescription = true;
    } else {
      hasDescription = false;
    }
  }
  return `${withEvents ? `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      { color: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size ?? "md"], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="M3 15v4m6-6v6m6-4v4m6-6v6M3 11l6-5 6 5 5.5-5.5"></path></svg>` : `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      { color: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size ?? "md"], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="M3 15v4m6-6v6m6-4v4m6-6v6M3 11l6-5 6 5 5.5-5.5"></path></svg>`} `;
});
const ClockSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "color", "withEvents", "title", "desc", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { color = ctx.color || "currentColor" } = $$props;
  let { withEvents = ctx.withEvents || false } = $$props;
  let { title = {} } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "clock solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0) $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0) $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0) $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
      hasDescription = true;
    } else {
      hasDescription = false;
    }
  }
  return `${withEvents ? `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size ?? "md"], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clip-rule="evenodd"></path></svg>` : `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size ?? "md"], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clip-rule="evenodd"></path></svg>`} `;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  const benefits = [
    {
      title: "employer.benefits.candidates.title",
      description: "employer.benefits.candidates.description",
      icon: UsersGroupSolid
    },
    {
      title: "employer.benefits.timeSaving.title",
      description: "employer.benefits.timeSaving.description",
      icon: ClockSolid
    },
    {
      title: "employer.benefits.matching.title",
      description: "employer.benefits.matching.description",
      icon: ChartMixedOutline
    }
  ];
  const stats = [
    {
      number: $t("employer.stats.number.500plus"),
      label: "employer.stats.placements"
    },
    {
      number: $t("employer.stats.number.95percent"),
      label: "employer.stats.retentionRate"
    },
    {
      number: $t("employer.stats.number.24h"),
      label: "employer.stats.responseTime"
    }
  ];
  const processSteps = [
    "employer.process.step1",
    "employer.process.step2",
    "employer.process.step3",
    "employer.process.step4"
  ];
  $$unsubscribe_t();
  return `<div class="bg-white"> <header class="relative bg-gradient-to-r from-primary-500 to-primary-800 text-white py-24"><div class="max-w-7xl flex justify-between items-center mx-auto px-4 sm:px-6 lg:px-8"><div class="max-w-3xl"><h1 class="text-5xl font-bold mb-6">${escape($t("employer.hero.title"))}</h1> <p class="text-xl mb-8">${escape($t("employer.hero.subtitle"))}</p> ${validate_component(Button, "Button").$$render(
    $$result,
    {
      size: "xl",
      href: "/company-quiz",
      class: "bg-white text-primary-800 hover:bg-gray-100"
    },
    {},
    {
      default: () => {
        return `${escape($t("employer.hero.button"))} ${validate_component(ArrowRightOutline, "ArrowRightOutline").$$render($$result, { class: "ml-2 w-6 h-6" }, {}, {})}`;
      }
    }
  )}</div> <img src="/images/imageHiring.svg" alt="Hiring" class="w-96 h-96 hidden lg:block"></div></header>  <div class="py-16 bg-gray-50"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="grid grid-cols-1 md:grid-cols-3 gap-8">${each(stats, (stat) => {
    return `<div class="text-center"><div class="text-4xl font-bold text-secondary-500">${escape(stat.number)}</div> <div class="text-gray-600">${escape($t(stat.label))}</div> </div>`;
  })}</div></div></div>  <div class="py-16"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><h2 class="text-3xl font-bold text-center mb-12">${escape($t("employer.benefits.title"))}</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-8">${each(benefits, (benefit) => {
    return `<div class="text-center p-6 rounded-lg shadow-lg bg-white">${validate_component(benefit.icon || missing_component, "svelte:component").$$render(
      $$result,
      {
        class: "w-12 h-12 text-primary-500 mx-auto mb-4"
      },
      {},
      {}
    )} <h3 class="text-xl font-semibold mb-3">${escape($t(benefit.title))}</h3> <p class="text-gray-600">${escape($t(benefit.description))}</p> </div>`;
  })}</div></div></div>  <div class="py-16 bg-gray-50"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><h2 class="text-3xl font-bold text-center mb-12">${escape($t("employer.process.title"))}</h2> <div class="grid grid-cols-1 md:grid-cols-4 gap-8">${each(processSteps, (step, i) => {
    return `<div class="relative"><div class="flex flex-col items-center"><div class="w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold text-xl mb-4">${escape(i + 1)}</div> <h3 class="text-md font-semibold">${escape($t(step))}</h3></div> ${i < 3 ? `<div class="hidden md:block absolute top-6 left-full w-full h-0.5 bg-secondary-600 -z-10"></div>` : ``} </div>`;
  })}</div></div></div>  <div class="py-16"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="bg-primary-500 rounded-2xl text-white p-12 text-center"><h2 class="text-3xl font-bold mb-6">${escape($t("employer.cta.title"))}</h2> <p class="text-xl mb-8">${escape($t("employer.cta.description"))}</p> ${validate_component(Button, "Button").$$render(
    $$result,
    {
      size: "xl",
      href: "/company-quiz",
      class: "bg-white text-primary-800 hover:bg-gray-100"
    },
    {},
    {
      default: () => {
        return `${escape($t("employer.cta.button"))} ${validate_component(ArrowRightOutline, "ArrowRightOutline").$$render($$result, { class: "ml-2 w-6 h-6" }, {}, {})}`;
      }
    }
  )}</div></div></div>  <div class="py-16 bg-gray-50"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><h2 class="text-3xl font-bold text-center mb-12">${escape($t("employer.testimonials.title"))}</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-8">${each(Array(3), (_, i) => {
    return `<div class="bg-white p-6 rounded-lg shadow-lg"><div class="text-secondary-600 mb-4" data-svelte-h="svelte-lfk35">★★★★★</div> <p class="text-gray-600 mb-4">${escape($t("employer.testimonials.text"))}</p> <div class="font-semibold">${escape($t("employer.testimonials.name"))}</div> </div>`;
  })}</div></div></div>  <div class="py-16"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h2 class="text-3xl font-bold mb-6">${escape($t("employer.finalCta.title"))}</h2> ${validate_component(Button, "Button").$$render(
    $$result,
    {
      size: "xl",
      href: "/company-quiz",
      class: "bg-secondary-500 text-white hover:bg-secondary-700"
    },
    {},
    {
      default: () => {
        return `${escape($t("employer.finalCta.button"))} ${validate_component(ArrowRightOutline, "ArrowRightOutline").$$render($$result, { class: "ml-2 w-6 h-6" }, {}, {})}`;
      }
    }
  )}</div></div></div>`;
});
export {
  Page as default
};
