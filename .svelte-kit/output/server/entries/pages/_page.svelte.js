import { c as create_ssr_component, b as compute_rest_props, h as getContext, e as spread, f as escape_attribute_value, g as escape_object, a as add_attribute, i as escape, d as subscribe, v as validate_component, j as each, m as missing_component } from "../../chunks/ssr.js";
import { B as Button } from "../../chunks/Button.js";
import { A as ArrowRightOutline, U as UsersGroupSolid } from "../../chunks/UsersGroupSolid.js";
import { B as BriefcaseSolid } from "../../chunks/BriefcaseSolid.js";
import { twMerge } from "tailwind-merge";
import { t } from "../../chunks/store.js";
const RocketSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  let { ariaLabel = "rocket solid" } = $$props;
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M20.337 3.664c.213.212.354.486.404.782.294 1.711.657 5.195-.906 6.76-1.77 1.768-8.485 5.517-10.611 6.683a.987.987 0 0 1-1.176-.173l-.882-.88-.877-.884a.988.988 0 0 1-.173-1.177c1.165-2.126 4.913-8.841 6.682-10.611 1.562-1.563 5.046-1.198 6.757-.904.296.05.57.191.782.404ZM5.407 7.576l4-.341-2.69 4.48-2.857-.334a.996.996 0 0 1-.565-1.694l2.112-2.111Zm11.357 7.02-.34 4-2.111 2.113a.996.996 0 0 1-1.69-.565l-.422-2.807 4.563-2.74Zm.84-6.21a1.99 1.99 0 1 1-3.98 0 1.99 1.99 0 0 1 3.98 0Z" clip-rule="evenodd"></path></svg>` : `<svg${spread(
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M20.337 3.664c.213.212.354.486.404.782.294 1.711.657 5.195-.906 6.76-1.77 1.768-8.485 5.517-10.611 6.683a.987.987 0 0 1-1.176-.173l-.882-.88-.877-.884a.988.988 0 0 1-.173-1.177c1.165-2.126 4.913-8.841 6.682-10.611 1.562-1.563 5.046-1.198 6.757-.904.296.05.57.191.782.404ZM5.407 7.576l4-.341-2.69 4.48-2.857-.334a.996.996 0 0 1-.565-1.694l2.112-2.111Zm11.357 7.02-.34 4-2.111 2.113a.996.996 0 0 1-1.69-.565l-.422-2.807 4.563-2.74Zm.84-6.21a1.99 1.99 0 1 1-3.98 0 1.99 1.99 0 0 1 3.98 0Z" clip-rule="evenodd"></path></svg>`} `;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  const benefits = [
    {
      title: `benefits.fastTrack.title`,
      description: `benefits.fastTrack.description`,
      icon: RocketSolid
    },
    {
      title: `benefits.quality.title`,
      description: `benefits.quality.description`,
      icon: BriefcaseSolid
    },
    {
      title: `benefits.matching.title`,
      description: `benefits.matching.description`,
      icon: UsersGroupSolid
    }
  ];
  const stats = [
    {
      number: "1000+",
      label: "stats.activeJobs"
    },
    {
      number: "89%",
      label: "stats.successRate"
    },
    {
      number: "14 Tage",
      label: "stats.averageHiringTime"
    }
  ];
  $$unsubscribe_t();
  return `<div class="bg-white"> <header class="relative bg-gradient-to-r from-primary-600 to-primary-300 text-white py-24"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex items-center justify-between"><div class="max-w-2xl"><h1 class="text-6xl font-bold mb-6">${escape($t("hero.title"))}</h1> <p class="text-xl mb-8">${escape($t("hero.subtitle"))}</p> ${validate_component(Button, "Button").$$render(
    $$result,
    {
      size: "xl",
      href: "/jobSearch",
      class: "bg-white text-primary-700 hover:bg-gray-100"
    },
    {},
    {
      default: () => {
        return `${escape($t("hero.browseJobs"))} ${validate_component(ArrowRightOutline, "ArrowRightOutline").$$render($$result, { class: "ml-2 w-6 h-6" }, {}, {})}`;
      }
    }
  )}</div> <img src="/images/imageOne.svg" alt="job offers" class="w-96 h-96 hidden lg:block"></div></div></header>  <div class="py-16 bg-gray-50"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="grid grid-cols-1 md:grid-cols-3 gap-8">${each(stats, (stat) => {
    return `<div class="text-center"><div class="text-4xl font-bold text-secondary-500">${escape(stat.number)}</div> <div class="text-gray-600">${escape(stat.label)}</div> </div>`;
  })}</div></div></div>  <div class="py-16"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><h2 class="text-3xl font-bold text-center mb-12">${escape($t("benefits.title"))}</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-8">${each(benefits, (benefit) => {
    return `<div class="text-center p-6 rounded-lg shadow-lg bg-white">${validate_component(benefit.icon || missing_component, "svelte:component").$$render(
      $$result,
      {
        class: "w-12 h-12 text-secondary-500 mx-auto mb-4"
      },
      {},
      {}
    )} <h3 class="text-xl font-semibold mb-3">${escape($t(benefit.title))}</h3> <p class="text-gray-600">${escape($t(benefit.description))}</p> </div>`;
  })}</div></div></div> <div class="py-16"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="bg-primary-500 rounded-2xl text-white p-12 text-center"><h2 class="text-3xl font-bold mb-6">${escape($t("cta.title"))}</h2>  ${validate_component(Button, "Button").$$render(
    $$result,
    {
      size: "xl",
      href: "/jobSearch",
      class: "bg-white text-primary-800 hover:bg-gray-100"
    },
    {},
    {
      default: () => {
        return `${escape($t("cta.button"))} ${validate_component(ArrowRightOutline, "ArrowRightOutline").$$render($$result, { class: "ml-2 w-6 h-6" }, {}, {})}`;
      }
    }
  )}</div></div></div>  <div class="py-16 bg-gray-50"> <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"><h2 class="text-3xl font-bold text-center mb-12">${escape($t("process.title"))}</h2> <div class="relative"> <div class="absolute left-1/2 h-[calc(100%-3rem)] top-6 border-l-4 border-dotted border-primary-500 -translate-x-1/2"></div> <div class="space-y-24">${each(
    [
      {
        step: 1,
        title: "step1.title",
        desc: "step1.description",
        align: "right"
      },
      {
        step: 2,
        title: "step2.title",
        desc: "step2.description",
        align: "left"
      },
      {
        step: 3,
        title: "step3.title",
        desc: "step3.description",
        align: "right"
      }
    ],
    ({ step, title, desc, align }) => {
      return `<div class="flex items-center justify-center relative"> <div class="w-12 h-12 rounded-full bg-white border-4 border-dotted border-primary-500 text-secondary-600 flex m-8 items-center justify-center font-bold text-xl z-10">${escape(step)}</div>  <div class="${"absolute " + escape(
        align === "right" ? "left-[calc(50%+2rem)]" : "right-[calc(50%+2rem)]",
        true
      ) + " w-[calc(50%-3rem)] mx-2"}"><h3 class="text-lg font-semibold mb-2">${escape($t(title))}</h3> <p class="text-gray-600">${escape($t(desc))}</p></div>  <img src="${"images/step-" + escape(step, true) + ".svg"}" alt="${"Step " + escape(step, true) + " image"}" class="${"absolute w-32 h-32 " + escape(
        align === "left" ? "left-[calc(50%+4rem)]" : "right-[calc(50%+4rem)]",
        true
      )}"> </div>`;
    }
  )}</div></div></div></div></div>`;
});
export {
  Page as default
};
