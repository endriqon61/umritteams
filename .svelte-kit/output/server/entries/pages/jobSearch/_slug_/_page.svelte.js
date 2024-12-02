import { c as create_ssr_component, d as subscribe, v as validate_component, i as escape, a as add_attribute, j as each } from "../../../../chunks/ssr.js";
import { B as Button } from "../../../../chunks/Button.js";
import { M as Modal, T as Textarea, a as MapPinOutline, A as ArrowUpRightFromSquareOutline } from "../../../../chunks/MapPinOutline.js";
import { L as Label, I as Input } from "../../../../chunks/Input.js";
import { t, l as language } from "../../../../chunks/store.js";
const ApplyModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  let { open } = $$props;
  let { currentJob } = $$props;
  let application = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    city: "",
    postCode: "",
    street: "",
    availableStartWorkDate: "",
    portfolioUrl: "",
    canWorkEU: true,
    userAgreesToSaveData: false,
    jobOpeningId: currentJob?.id,
    resume: void 0,
    documents: void 0,
    documentsExtra: void 0
  };
  let uploadedDocumentNames = [];
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  if ($$props.currentJob === void 0 && $$bindings.currentJob && currentJob !== void 0) $$bindings.currentJob(currentJob);
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
          return `<form class="space-y-8"><div class="border-b border-gray-200 pb-4"><h2 class="text-2xl font-bold text-gray-900">${escape($t("application.title"))}</h2></div>  <div class="space-y-6"><div class="flex items-center gap-2"><div class="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center" data-svelte-h="svelte-1w6nbcx"><span class="text-sm font-semibold">1</span></div> <h3 class="text-lg font-semibold text-gray-900">${escape($t("application.personal.title"))}</h3></div> <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pl-10">${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
            default: () => {
              return `<span class="text-sm font-medium text-gray-700">${escape($t("application.firstName"))} *</span> ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "text",
                  required: true,
                  placeholder: $t("application.firstName"),
                  class: "focus:ring-primary-500",
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
              return `<span class="text-sm font-medium text-gray-700">${escape($t("application.lastName"))} *</span> ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "text",
                  required: true,
                  placeholder: $t("application.lastName"),
                  class: "focus:ring-primary-500",
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
          })} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
            default: () => {
              return `<span class="text-sm font-medium text-gray-700">${escape($t("application.email"))} *</span> ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "email",
                  required: true,
                  placeholder: "your.email@example.com",
                  class: "focus:ring-primary-500",
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
              return `<span class="text-sm font-medium text-gray-700">${escape($t("application.phone"))} *</span> ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "tel",
                  required: true,
                  placeholder: "+43 123 456 789",
                  class: "focus:ring-primary-500",
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
          })}</div></div>  <div class="space-y-6"><div class="flex items-center gap-2"><div class="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center" data-svelte-h="svelte-1xa5toq"><span class="text-sm font-semibold">2</span></div> <h3 class="text-lg font-semibold text-gray-900">${escape($t("application.address.title"))}</h3></div> <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pl-10">${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
            default: () => {
              return `<span class="text-sm font-medium text-gray-700">${escape($t("application.city"))} *</span> ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "text",
                  required: true,
                  placeholder: $t("application.city"),
                  class: "focus:ring-primary-500",
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
              return `<span class="text-sm font-medium text-gray-700">${escape($t("application.postCode"))} *</span> ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "text",
                  required: true,
                  placeholder: $t("application.postCode"),
                  class: "focus:ring-primary-500",
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
          })} ${validate_component(Label, "Label").$$render($$result, { class: "col-span-2 space-y-2" }, {}, {
            default: () => {
              return `<span class="text-sm font-medium text-gray-700">${escape($t("application.street"))} *</span> ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "text",
                  required: true,
                  placeholder: $t("application.street"),
                  class: "focus:ring-primary-500",
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
          })}</div></div>  <div class="flex items-center gap-2 bg-gray-50 p-3 rounded-lg"><input type="checkbox" id="userAgreesToSaveData" class="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"${add_attribute("checked", application.userAgreesToSaveData, 1)}> <label for="userAgreesToSaveData" class="text-sm text-gray-700">${escape($t("application.agreement"))}</label></div>  <div class="space-y-6"><div class="flex items-center gap-2"><div class="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center" data-svelte-h="svelte-1bjdc27"><span class="text-sm font-semibold">3</span></div> <h3 class="text-lg font-semibold text-gray-900">${escape($t("application.professional.title"))}</h3></div> <div class="space-y-6 pl-10">${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
            default: () => {
              return `<span class="text-sm font-medium text-gray-700">${escape($t("application.portfolio"))} *</span> ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "url",
                  placeholder: "https://your-portfolio.com",
                  class: "focus:ring-primary-500",
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
              return `<span class="text-sm font-medium text-gray-700">${escape($t("application.coverLetter"))} *</span> ${validate_component(Textarea, "Textarea").$$render(
                $$result,
                {
                  placeholder: $t("application.coverLetter"),
                  rows: "4",
                  class: "focus:ring-primary-500",
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
          })} <div class="flex items-center gap-2 bg-gray-50 p-3 rounded-lg"><input type="checkbox" id="canWork" class="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"${add_attribute("checked", application.canWorkEU, 1)}> <label for="canWork" class="text-sm text-gray-700">${escape($t("application.canWorkEU"))}</label></div> ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
            default: () => {
              return `<span class="text-sm font-medium text-gray-700">${escape($t("application.startDate"))} *</span> ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "date",
                  required: true,
                  class: "focus:ring-primary-500",
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
          })} <div class="space-y-2"><span class="text-sm font-medium text-gray-700">${escape($t("application.resume.upload"))}</span> <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-primary-500 transition-colors"><div class="space-y-1 text-center">${`<svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true"><path d="M28 8H12a4 4 0 00-4 4v20m32-12"></path></svg>`} <div class="flex text-sm text-gray-600"><label for="resume-upload" class="relative cursor-pointer rounded-md bg-white font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"><span>${escape("Upload Resume")}</span> <input id="resume-upload" name="resume-upload" type="file" class="sr-only" required accept=".pdf,.doc,.docx"></label> ${`<p class="pl-1">${escape($t("application.documents.dragDrop"))}</p>`}</div> <p class="text-xs text-gray-500">${escape("Maximum 10Mb")}</p></div></div></div> <div class="space-y-2 mt-4"><span class="text-sm font-medium text-gray-700">${escape($t("application.documents.upload"))}</span> <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-primary-500 transition-colors"><div class="space-y-1 text-center">${uploadedDocumentNames.length > 0 ? `<div class="flex flex-col items-center justify-center space-y-2">${each(uploadedDocumentNames, (name) => {
            return `<div class="flex items-center space-x-2"><svg class="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> <span class="text-sm text-gray-600">${escape(name)}</span> </div>`;
          })}</div>` : ``} <div class="flex text-sm text-gray-600"><label for="documents-upload" class="relative cursor-pointer rounded-md bg-white font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"><span>${escape(uploadedDocumentNames.length > 0 ? "Change Documents" : "Upload Documents")}</span> <input id="documents-upload" name="documents-upload" type="file" class="sr-only" multiple accept=".pdf,.doc,.docx"></label> ${uploadedDocumentNames.length === 0 ? `<p class="pl-1">${escape($t("application.documents.dragDrop"))}</p>` : ``}</div> <p class="text-xs text-gray-500">${escape($t("application.documents.multiple"))}</p></div></div></div></div></div> ${validate_component(Button, "Button").$$render($$result, { type: "submit", class: "w-full" }, {}, {
            default: () => {
              return `${escape($t("application.submit"))}`;
            }
          })}</form>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_t();
  return $$rendered;
});
const companyDescriptionEN = "Join our team and be part of an innovative company that values creativity and growth.";
const companyDescriptionDE = "Treten Sie unserer innovativen Firma bei und seien Sie Teil einer unternehmerischen Unternehmensgruppe, die Kreativität und Wachstum wertet.";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let open = false;
  const companyInfo = {
    logo: "/images/umr-logo-08.png",
    name: "UMR",
    email: "umr@umr.at",
    address: "Diefenbachgasse 53/1, 1150 Wien",
    location: "Vienna",
    type: "Full-time"
  };
  let currentLang = "en";
  language.subscribe((lang) => {
    currentLang = lang;
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<header class="bg-gradient-to-r from-primary-600 to-primary-800 py-16"><div class="max-w-5xl mx-auto px-4"><div class="bg-white rounded-xl shadow-lg p-6"><div class="flex flex-col md:flex-row gap-6 items-start md:items-center"><div class="w-16 h-16 rounded-lg bg-gray-700 px-2 flex items-center justify-center"><img${add_attribute("src", companyInfo.logo, 0)}${add_attribute("alt", companyInfo.name, 0)} class="max-w-full max-h-full object-contain"></div> <div class="flex-grow"><h1 class="text-3xl font-bold text-gray-800 mb-2">${escape(data.job.positionNameEN)}</h1> <div class="flex flex-wrap gap-4 text-gray-600"><div class="flex items-center">${validate_component(MapPinOutline, "MapPinOutline").$$render($$result, { class: "w-5 h-5 mr-1 text-secondary-500" }, {}, {})} <span>${escape(companyInfo.location)}</span></div> <div class="flex items-center"><span class="font-medium text-emerald-600">${escape(data.job.minSalary)}€</span> <span class="text-gray-500" data-svelte-h="svelte-16ts5un">/month</span></div> <div class="px-3 py-1 rounded-full bg-secondary-100 text-secondary-500 text-sm">${escape(companyInfo.type)}</div></div></div></div></div></div></header> <main class="max-w-5xl mx-auto px-4 py-8 mb-20"><div class="grid md:grid-cols-3 gap-6"><div class="md:col-span-2 space-y-6"><section class="bg-white rounded-xl shadow-lg p-6 border border-gray-200"><h2 class="text-xl font-bold text-gray-800 mb-4">${escape(currentLang === "en" ? "About the Role" : "Über die Rolle")}</h2> <div class="prose max-w-none text-gray-600"><!-- HTML_TAG_START -->${currentLang === "en" ? data.job.descriptionEN : data.job.descriptionDE || ""}<!-- HTML_TAG_END --></div></section> <section class="bg-white rounded-xl shadow-lg p-6 border border-gray-200"><h2 class="text-xl font-bold text-gray-800 mb-4">${escape(currentLang === "en" ? "Required Skills" : "Benötigte Fähigkeiten")}</h2> <div class="flex flex-wrap gap-2" data-svelte-h="svelte-1bjf0yp"></div></section></div> <div class="md:col-span-1"><div class="bg-white rounded-xl shadow-lg p-6 border border-gray-200 sticky top-4"><div class="w-16 mb-3 h-16 rounded-lg bg-gray-700 px-2 flex items-center justify-center"><img${add_attribute("src", companyInfo.logo, 0)}${add_attribute("alt", companyInfo.name, 0)} class="max-w-full max-h-full object-contain"></div> <h2 class="text-xl font-bold text-gray-800 mb-4">${escape(currentLang === "en" ? "About" : "Über")} ${escape(companyInfo.name)}</h2> <div class="text-gray-600 mb-6"><p>${escape(currentLang === "en" ? companyDescriptionEN : companyDescriptionDE)}</p></div> <div class="m-3"><div class="px-3 py-1 text-slate-600 text-sm">${escape(companyInfo.address)}</div> <div class="px-3 py-1 text-slate-600 text-sm">${escape(companyInfo.email)}</div></div> <div class="flex gap-4 mt-4">${validate_component(Button, "Button").$$render(
      $$result,
      {
        class: "w-full justify-center py-3 text-lg font-medium"
      },
      {},
      {
        default: () => {
          return `${escape(currentLang === "en" ? "Apply Now" : "Jetzt bewerben")} ${validate_component(ArrowUpRightFromSquareOutline, "ArrowUpRightFromSquareOutline").$$render($$result, { class: "ml-2" }, {}, {})}`;
        }
      }
    )}</div> <div class="md:col-span-1"><div class="flex gap-4 mt-4">${validate_component(Button, "Button").$$render(
      $$result,
      {
        href: "/privacy",
        color: "light",
        class: "w-full justify-center py-3 text-lg font-medium"
      },
      {},
      {
        default: () => {
          return `${escape(currentLang === "en" ? "Privacy Policy" : "Datenschutz")} ${validate_component(ArrowUpRightFromSquareOutline, "ArrowUpRightFromSquareOutline").$$render($$result, { class: "ml-2 color-black" }, {}, {})}`;
        }
      }
    )}</div></div></div></div></div></main> ${validate_component(ApplyModal, "ApplyModal").$$render(
      $$result,
      { currentJob: data.job, open },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
