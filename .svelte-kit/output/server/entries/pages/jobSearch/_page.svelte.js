import { c as create_ssr_component, b as compute_rest_props, h as getContext, e as spread, f as escape_attribute_value, g as escape_object, a as add_attribute, i as escape, o as createEventDispatcher, v as validate_component, j as each, d as subscribe } from "../../../chunks/ssr.js";
import { B as Button } from "../../../chunks/Button.js";
import { M as Modal, T as Textarea, a as MapPinOutline, A as ArrowUpRightFromSquareOutline } from "../../../chunks/MapPinOutline.js";
import { B as BriefcaseSolid } from "../../../chunks/BriefcaseSolid.js";
import { twMerge } from "tailwind-merge";
import { C as Checkbox } from "../../../chunks/Checkbox.js";
import { L as Label, I as Input } from "../../../chunks/Input.js";
import "../../../chunks/client.js";
import { l as language, t } from "../../../chunks/store.js";
const DollarOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  let { ariaLabel = "dollar outline" } = $$props;
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="M8 17.345a4.76 4.76 0 0 0 2.558 1.618c2.274.589 4.512-.446 4.999-2.31.487-1.866-1.273-3.9-3.546-4.49-2.273-.59-4.034-2.623-3.547-4.488.486-1.865 2.724-2.899 4.998-2.31.982.236 1.87.793 2.538 1.592m-3.879 12.171V21m0-18v2.2"></path></svg>` : `<svg${spread(
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="M8 17.345a4.76 4.76 0 0 0 2.558 1.618c2.274.589 4.512-.446 4.999-2.31.487-1.866-1.273-3.9-3.546-4.49-2.273-.59-4.034-2.623-3.547-4.488.486-1.865 2.724-2.899 4.998-2.31.982.236 1.87.793 2.538 1.592m-3.879 12.171V21m0-18v2.2"></path></svg>`} `;
});
const GeneralApplicationModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open } = $$props;
  let { categories = [] } = $$props;
  createEventDispatcher();
  let selectedPositions = [];
  let application = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    city: "",
    postCode: "",
    street: "",
    canWorkEU: false,
    availableStartWorkDate: "",
    coverLetter: "",
    portfolioUrl: "",
    userAgreesToSaveData: false,
    resume: void 0,
    documentsExtra: void 0,
    positions: []
  };
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  if ($$props.categories === void 0 && $$bindings.categories && categories !== void 0) $$bindings.categories(categories);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        size: "lg",
        autoclose: false,
        class: "w-full",
        open
      },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<form class="space-y-6"><h2 class="text-2xl font-bold text-gray-900 mb-6" data-svelte-h="svelte-re69lj">General Application</h2>  <div class="space-y-4"><h3 class="text-lg font-semibold text-gray-700" data-svelte-h="svelte-jj847g">Select Positions</h3> ${each(categories, (category) => {
            return `<div class="mb-4"><h4 class="text-md font-medium text-gray-600 mb-2">${escape(category.nameEN)}</h4> <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">${category.positions ? `${each(category.positions, (position) => {
              return `${validate_component(Label, "Label").$$render($$result, { class: "flex items-center space-x-2" }, {}, {
                default: () => {
                  return `${validate_component(Checkbox, "Checkbox").$$render(
                    $$result,
                    {
                      value: position.id,
                      checked: selectedPositions.includes(position.id)
                    },
                    {},
                    {}
                  )} <span>${escape(position.nameEN)}</span> `;
                }
              })}`;
            })}` : ``}</div> </div>`;
          })}</div> <div class="space-y-4"><h3 class="text-lg font-semibold text-gray-700" data-svelte-h="svelte-128bmnu">Personal Information</h3> <div class="grid grid-cols-1 md:grid-cols-2 gap-4">${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
            default: () => {
              return `<span data-svelte-h="svelte-rhylzt">First Name *</span> ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "text",
                  required: true,
                  placeholder: "Enter your first name",
                  value: application.firstName
                },
                {
                  value: ($$value) => {
                    application.firstName = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
            default: () => {
              return `<span data-svelte-h="svelte-wfcp5h">Last Name *</span> ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "text",
                  required: true,
                  placeholder: "Enter your last name",
                  value: application.lastName
                },
                {
                  value: ($$value) => {
                    application.lastName = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })}</div> ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
            default: () => {
              return `<span data-svelte-h="svelte-oipdrk">Email Address *</span> ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "email",
                  required: true,
                  placeholder: "your.email@example.com",
                  value: application.email
                },
                {
                  value: ($$value) => {
                    application.email = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
            default: () => {
              return `<span data-svelte-h="svelte-1xbhoox">Phone Number *</span> ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "tel",
                  required: true,
                  placeholder: "+43 123 456 789",
                  value: application.phoneNumber
                },
                {
                  value: ($$value) => {
                    application.phoneNumber = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })}</div>  <div class="space-y-4"><h3 class="text-lg font-semibold text-gray-700" data-svelte-h="svelte-1q4m4uw">Address Information</h3> <div class="grid grid-cols-1 md:grid-cols-2 gap-4">${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
            default: () => {
              return `<span data-svelte-h="svelte-14tq1tf">City *</span> ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "text",
                  required: true,
                  placeholder: "Enter your city",
                  value: application.city
                },
                {
                  value: ($$value) => {
                    application.city = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
            default: () => {
              return `<span data-svelte-h="svelte-10kr5bl">Post Code *</span> ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "text",
                  required: true,
                  placeholder: "Enter post code",
                  value: application.postCode
                },
                {
                  value: ($$value) => {
                    application.postCode = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })}</div> ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
            default: () => {
              return `<span data-svelte-h="svelte-12usclf">Street Address *</span> ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "text",
                  required: true,
                  placeholder: "Enter your street address",
                  value: application.street
                },
                {
                  value: ($$value) => {
                    application.street = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })}</div>  <div class="space-y-4"><h3 class="text-lg font-semibold text-gray-700" data-svelte-h="svelte-1swnv9p">Professional Information</h3> ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
            default: () => {
              return `<span data-svelte-h="svelte-1gl5li2">Portfolio URL (optional)</span> ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  label: "Portfolio URL",
                  value: application.portfolioUrl
                },
                {
                  value: ($$value) => {
                    application.portfolioUrl = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
            default: () => {
              return `<span data-svelte-h="svelte-1ph1sp2">Cover Letter (optional)</span> ${validate_component(Textarea, "Textarea").$$render(
                $$result,
                {
                  label: "Cover Letter",
                  value: application.coverLetter
                },
                {
                  value: ($$value) => {
                    application.coverLetter = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })} <div class="flex items-center gap-2"><input type="checkbox" id="canWork"${add_attribute("checked", application.canWorkEU, 1)}> <label for="canWork" data-svelte-h="svelte-19csfof">Can work in EU</label></div> ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
            default: () => {
              return `<span data-svelte-h="svelte-zuc81j">When are you available to start working?</span> ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "date",
                  label: "Available Start Date",
                  required: true,
                  value: application.availableStartWorkDate
                },
                {
                  value: ($$value) => {
                    application.availableStartWorkDate = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
            default: () => {
              return `<span data-svelte-h="svelte-bajrd9">Upload your CV *</span> ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "file",
                  class: "p-0",
                  accept: ".pdf,.doc,.docx",
                  required: true
                },
                {},
                {}
              )}`;
            }
          })}</div> ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
            default: () => {
              return `<span data-svelte-h="svelte-1s89kf4">Additional Documents (optional)</span> ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "file",
                  class: "p-0",
                  accept: ".pdf,.doc,.docx",
                  multiple: true
                },
                {},
                {}
              )}`;
            }
          })} <div class="flex justify-end gap-4">${validate_component(Button, "Button").$$render($$result, { color: "alternative" }, {}, {
            default: () => {
              return `Cancel`;
            }
          })} ${validate_component(Button, "Button").$$render(
            $$result,
            {
              type: "submit",
              disabled: selectedPositions.length === 0
            },
            {},
            {
              default: () => {
                return `Submit Application`;
              }
            }
          )}</div></form>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filteredJobs;
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  let { data } = $$props;
  let showGeneralApplicationModal = false;
  let selectedCategory = "all";
  console.log(data.categories, data.jobs);
  let langCurrent = "en";
  language.subscribe((lang) => {
    console.log(lang);
    langCurrent = lang;
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    filteredJobs = data.jobs;
    $$rendered = `<div class="max-w-7xl mx-auto px-4 py-16"> <div class="mb-8"><h1 class="text-4xl font-bold text-gray-900 mb-4">${escape($t("jobSearch.title"))}</h1> <p class="text-xl text-gray-600">${escape($t("jobSearch.subtitle"))}</p></div>  <div class="flex gap-4 mb-8 overflow-x-auto pb-2"><button class="${"px-4 py-2 rounded-full whitespace-nowrap " + escape(
      "bg-secondary-500 text-white",
      true
    )}">All Categories</button> ${each(data.categories, (category) => {
      return `<button class="${"px-4 py-2 rounded-full whitespace-nowrap " + escape(
        selectedCategory === category.id ? "bg-secondary-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200",
        true
      )}">${escape(langCurrent === "en" ? category.nameEN : category.nameDE || "")} </button>`;
    })}</div>  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">${each(filteredJobs, (job) => {
      return `<div class="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden border border-gray-100"><div class="h-3 bg-gradient-to-r from-primary-500 to-primary-700"></div> <div class="p-6"><div class="flex items-center gap-2 mb-4"><div class="w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center">${validate_component(BriefcaseSolid, "BriefcaseSolid").$$render($$result, { class: "w-6 h-6 text-primary-600" }, {}, {})}</div> <div><h3 class="text-lg font-semibold text-gray-900">${escape(langCurrent === "en" ? capitalize(job.positionNameEN) : capitalize(job.positionNameDE || ""))}</h3> <p class="text-sm text-gray-500">${escape(job.location)}</p> </div></div> <div class="space-y-3"><div class="flex items-center gap-2 text-gray-600">${validate_component(MapPinOutline, "MapPinOutline").$$render($$result, { class: "w-5 h-5" }, {}, {})} <span>${escape(job.location)}</span></div> <div class="flex items-center gap-2 text-gray-600">${validate_component(DollarOutline, "DollarOutline").$$render($$result, { class: "w-5 h-5" }, {}, {})} <span>From ${escape(job.minSalary)}€/month</span> </div></div> ${validate_component(Button, "Button").$$render(
        $$result,
        {
          class: "w-full mt-6 bg-white text-primary-600 border-2 border-primary-600 hover:bg-primary-50 group-hover:bg-primary-600 group-hover:text-white transition-all duration-200"
        },
        {},
        {
          default: () => {
            return `${escape($t("jobSearch.viewPosition"))} ${validate_component(ArrowUpRightFromSquareOutline, "ArrowUpRightFromSquareOutline").$$render($$result, { class: "ml-2" }, {}, {})} `;
          }
        }
      )}</div> </div>`;
    })}</div>  <div class="mt-12 bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl p-8 text-white text-center"><h2 class="text-2xl font-bold mb-4">${escape($t("jobSearch.generalApplicationCTA.title"))}</h2> <p class="mb-6 text-primary-100">${escape($t("jobSearch.generalApplicationCTA.text"))}</p> ${validate_component(Button, "Button").$$render(
      $$result,
      {
        size: "xl",
        class: "bg-white text-primary-700 hover:bg-primary-50"
      },
      {},
      {
        default: () => {
          return `${escape($t("jobSearch.generalApplicationCTA.button"))}`;
        }
      }
    )}</div></div>  ${validate_component(GeneralApplicationModal, "GeneralApplicationModal").$$render(
      $$result,
      {
        categories: data.categories,
        open: showGeneralApplicationModal
      },
      {
        open: ($$value) => {
          showGeneralApplicationModal = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  $$unsubscribe_t();
  return $$rendered;
});
export {
  Page as default
};
