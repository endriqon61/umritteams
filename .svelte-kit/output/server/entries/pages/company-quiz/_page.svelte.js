import { n as noop, c as create_ssr_component, b as compute_rest_props, v as validate_component, a as add_attribute, k as assign, l as identity, d as subscribe, e as spread, g as escape_object, f as escape_attribute_value, i as escape, j as each, o as createEventDispatcher } from "../../../chunks/ssr.js";
import { w as writable } from "../../../chunks/index2.js";
import { B as Button } from "../../../chunks/Button.js";
import { twMerge, twJoin } from "tailwind-merge";
import { F as Frame } from "../../../chunks/Frame.js";
import { c as cubicOut } from "../../../chunks/index3.js";
import { L as Label, I as Input } from "../../../chunks/Input.js";
import { C as Checkbox } from "../../../chunks/Checkbox.js";
const is_client = typeof window !== "undefined";
let now = is_client ? () => window.performance.now() : () => Date.now();
let raf = is_client ? (cb) => requestAnimationFrame(cb) : noop;
const tasks = /* @__PURE__ */ new Set();
function run_tasks(now2) {
  tasks.forEach((task) => {
    if (!task.c(now2)) {
      tasks.delete(task);
      task.f();
    }
  });
  if (tasks.size !== 0) raf(run_tasks);
}
function loop(callback) {
  let task;
  if (tasks.size === 0) raf(run_tasks);
  return {
    promise: new Promise((fulfill) => {
      tasks.add(task = { c: callback, f: fulfill });
    }),
    abort() {
      tasks.delete(task);
    }
  };
}
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href", "horizontal", "reverse", "img", "padding", "size", "imgClass"]);
  let { href = void 0 } = $$props;
  let { horizontal = false } = $$props;
  let { reverse = false } = $$props;
  let { img = void 0 } = $$props;
  let { padding = "lg" } = $$props;
  let { size = "sm" } = $$props;
  let { imgClass = "" } = $$props;
  const paddings = {
    none: "",
    xs: "p-2",
    sm: "p-4",
    md: "p-4 sm:p-5",
    lg: "p-4 sm:p-6",
    xl: "p-4 sm:p-8"
  };
  const sizes = {
    none: "",
    xs: "max-w-xs",
    sm: "max-w-sm",
    md: "max-w-xl",
    lg: "max-w-2xl",
    xl: "max-w-screen-xl"
  };
  let innerPadding;
  let cardClass;
  let imgCls;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  if ($$props.horizontal === void 0 && $$bindings.horizontal && horizontal !== void 0) $$bindings.horizontal(horizontal);
  if ($$props.reverse === void 0 && $$bindings.reverse && reverse !== void 0) $$bindings.reverse(reverse);
  if ($$props.img === void 0 && $$bindings.img && img !== void 0) $$bindings.img(img);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0) $$bindings.padding(padding);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.imgClass === void 0 && $$bindings.imgClass && imgClass !== void 0) $$bindings.imgClass(imgClass);
  innerPadding = paddings[padding];
  cardClass = twMerge("flex w-full", sizes[size], reverse ? "flex-col-reverse" : "flex-col", horizontal && (reverse ? "md:flex-row-reverse" : "md:flex-row"), href && "hover:bg-gray-100 dark:hover:bg-gray-700", !img && innerPadding, $$props.class);
  imgCls = twMerge(reverse ? "rounded-b-lg" : "rounded-t-lg", horizontal && "object-cover w-full h-96 md:h-auto md:w-48 md:rounded-none", horizontal && (reverse ? "md:rounded-e-lg" : "md:rounded-s-lg"), imgClass);
  return `${validate_component(Frame, "Frame").$$render($$result, Object.assign({}, { tag: href ? "a" : "div" }, { rounded: true }, { shadow: true }, { border: true }, { href }, $$restProps, { class: cardClass }), {}, {
    default: () => {
      return `${img ? `<img${add_attribute("class", imgCls, 0)}${add_attribute("src", img, 0)} alt=""> <div${add_attribute("class", innerPadding, 0)}>${slots.default ? slots.default({}) : ``}</div>` : `${slots.default ? slots.default({}) : ``}`}`;
    }
  })} `;
});
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function get_interpolator(a, b) {
  if (a === b || a !== a) return () => a;
  const type = typeof a;
  if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    throw new Error("Cannot interpolate values of different type");
  }
  if (Array.isArray(a)) {
    const arr = b.map((bi, i) => {
      return get_interpolator(a[i], bi);
    });
    return (t) => arr.map((fn) => fn(t));
  }
  if (type === "object") {
    if (!a || !b) throw new Error("Object cannot be null");
    if (is_date(a) && is_date(b)) {
      a = a.getTime();
      b = b.getTime();
      const delta = b - a;
      return (t) => new Date(a + t * delta);
    }
    const keys = Object.keys(b);
    const interpolators = {};
    keys.forEach((key) => {
      interpolators[key] = get_interpolator(a[key], b[key]);
    });
    return (t) => {
      const result = {};
      keys.forEach((key) => {
        result[key] = interpolators[key](t);
      });
      return result;
    };
  }
  if (type === "number") {
    const delta = b - a;
    return (t) => a + t * delta;
  }
  throw new Error(`Cannot interpolate ${type} values`);
}
function tweened(value, defaults = {}) {
  const store = writable(value);
  let task;
  let target_value = value;
  function set(new_value, opts) {
    if (value == null) {
      store.set(value = new_value);
      return Promise.resolve();
    }
    target_value = new_value;
    let previous_task = task;
    let started = false;
    let {
      delay = 0,
      duration = 400,
      easing = identity,
      interpolate = get_interpolator
    } = assign(assign({}, defaults), opts);
    if (duration === 0) {
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      store.set(value = target_value);
      return Promise.resolve();
    }
    const start = now() + delay;
    let fn;
    task = loop((now2) => {
      if (now2 < start) return true;
      if (!started) {
        fn = interpolate(value, new_value);
        if (typeof duration === "function") duration = duration(value, new_value);
        started = true;
      }
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      const elapsed = now2 - start;
      if (elapsed > /** @type {number} */
      duration) {
        store.set(value = new_value);
        return false;
      }
      store.set(value = fn(easing(elapsed / duration)));
      return true;
    });
    return task.promise;
  }
  return {
    set,
    update: (fn, opts) => set(fn(target_value, value), opts),
    subscribe: store.subscribe
  };
}
const Progressbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "progress",
    "precision",
    "tweenDuration",
    "animate",
    "size",
    "labelInside",
    "labelOutside",
    "easing",
    "color",
    "labelInsideClass",
    "divClass"
  ]);
  let $_progress, $$unsubscribe__progress;
  let { progress = "45" } = $$props;
  let { precision = 0 } = $$props;
  let { tweenDuration = 400 } = $$props;
  let { animate = false } = $$props;
  let { size = "h-2.5" } = $$props;
  let { labelInside = false } = $$props;
  let { labelOutside = "" } = $$props;
  let { easing = cubicOut } = $$props;
  let { color = "primary" } = $$props;
  let { labelInsideClass = "text-primary-100 text-xs font-medium text-center p-0.5 leading-none rounded-full" } = $$props;
  let { divClass = "w-full bg-gray-200 rounded-full dark:bg-gray-700" } = $$props;
  const _progress = tweened(0, {
    duration: animate ? tweenDuration : 0,
    easing
  });
  $$unsubscribe__progress = subscribe(_progress, (value) => $_progress = value);
  const barColors = {
    primary: "bg-primary-600",
    blue: "bg-blue-600",
    gray: "bg-gray-600 dark:bg-gray-300",
    red: "bg-red-600 dark:bg-red-500",
    green: "bg-green-600 dark:bg-green-500",
    yellow: "bg-yellow-400",
    purple: "bg-purple-600 dark:bg-purple-500",
    indigo: "bg-indigo-600 dark:bg-indigo-500"
  };
  if ($$props.progress === void 0 && $$bindings.progress && progress !== void 0) $$bindings.progress(progress);
  if ($$props.precision === void 0 && $$bindings.precision && precision !== void 0) $$bindings.precision(precision);
  if ($$props.tweenDuration === void 0 && $$bindings.tweenDuration && tweenDuration !== void 0) $$bindings.tweenDuration(tweenDuration);
  if ($$props.animate === void 0 && $$bindings.animate && animate !== void 0) $$bindings.animate(animate);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.labelInside === void 0 && $$bindings.labelInside && labelInside !== void 0) $$bindings.labelInside(labelInside);
  if ($$props.labelOutside === void 0 && $$bindings.labelOutside && labelOutside !== void 0) $$bindings.labelOutside(labelOutside);
  if ($$props.easing === void 0 && $$bindings.easing && easing !== void 0) $$bindings.easing(easing);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.labelInsideClass === void 0 && $$bindings.labelInsideClass && labelInsideClass !== void 0) $$bindings.labelInsideClass(labelInsideClass);
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0) $$bindings.divClass(divClass);
  {
    _progress.set(Number(progress));
  }
  $$unsubscribe__progress();
  return `${labelOutside ? `<div${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("flex justify-between mb-1", $$props.classLabelOutside))
      }
    ],
    {}
  )}><span class="text-base font-medium text-blue-700 dark:text-white">${escape(labelOutside)}</span> <span class="text-sm font-medium text-blue-700 dark:text-white">${escape(progress)}%</span></div>` : ``} <div${add_attribute("class", twMerge(divClass, size, $$props.class), 0)}>${labelInside ? `<div${add_attribute("class", twJoin(labelInsideClass, barColors[color]), 0)} style="${"width: " + escape($_progress, true) + "%"}">${escape($_progress.toFixed(precision))}%</div>` : `<div${add_attribute("class", twJoin(barColors[color], size, "rounded-full"), 0)} style="${"width: " + escape($_progress, true) + "%"}"></div>`}</div> `;
});
const initialState = {
  name: "",
  companyName: "",
  phoneNumber: "",
  email: "",
  openPositions: 0,
  companySize: ""
};
const quizStore = writable(initialState);
const currentStep = writable(0);
const questions = [
  {
    label: "Name",
    field: "Name",
    question: "What is your name?",
    type: "text",
    required: true
  },
  {
    label: "Company Name",
    field: "CompanyName",
    question: "What is your company name?",
    type: "text",
    required: true
  },
  {
    label: "Phone Number",
    field: "phoneNumber",
    question: "What is your contact number?",
    type: "text",
    placeholder: "Enter your contact number",
    required: true
  },
  {
    label: "Email",
    field: "email",
    question: "What is your business email?",
    type: "text",
    required: true
  },
  {
    label: "Open Positions",
    field: "openPositions",
    question: "What positions are you hiring for?",
    type: "positions",
    placeholder: "Separate multiple positions with semicolons",
    required: true
  },
  {
    label: "Type of Position",
    field: "typePosition",
    question: "What type of workers do you need?",
    type: "radio",
    options: [
      { name: "full-time", value: "full-time", label: "Full-time employees" },
      { name: "part-time", value: "part-time", label: "Part-time employees" },
      { name: "contractors", value: "contractors", label: "Contractors" },
      { name: "mixed", value: "mixed", label: "Mixed workforce" }
    ],
    required: true
  },
  {
    label: "Company Size",
    field: "companySize",
    question: "How many employees does your company have?",
    type: "radio",
    options: [
      { name: "1-10", value: "1-10", label: "1-10 employees" },
      { name: "11-50", value: "11-50", label: "11-50 employees" },
      { name: "51-200", value: "51-200", label: "51-200 employees" },
      { name: "201+", value: "201+", label: "201+ employees" }
    ],
    required: true
  }
];
const QuizComplete = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `<div class="text-center space-y-6"><h2 class="text-2xl font-bold text-gray-900" data-svelte-h="svelte-1nro7pg">Quiz Complete!</h2> <p class="text-gray-600" data-svelte-h="svelte-17l38ve">Thank you for completing the company questionnaire.</p> <div class="bg-gray-50 p-4 rounded-lg text-left"><h3 class="font-semibold mb-2" data-svelte-h="svelte-1vn714t">Your Responses:</h3> ${each(Object.entries(data), ([key, value]) => {
    return `<div class="mb-2"><span class="font-medium">${escape(key)}:</span> ${escape(value)} </div>`;
  })}</div> <div class="flex justify-center gap-4">${validate_component(Button, "Button").$$render($$result, { color: "light" }, {}, {
    default: () => {
      return `Start Over`;
    }
  })} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `Submit`;
    }
  })}</div></div>`;
});
const CustomRadioGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { options } = $$props;
  if (!options) {
    options = [];
  }
  let { groupName } = $$props;
  let { selectedValue } = $$props;
  let { label } = $$props;
  if ($$props.options === void 0 && $$bindings.options && options !== void 0) $$bindings.options(options);
  if ($$props.groupName === void 0 && $$bindings.groupName && groupName !== void 0) $$bindings.groupName(groupName);
  if ($$props.selectedValue === void 0 && $$bindings.selectedValue && selectedValue !== void 0) $$bindings.selectedValue(selectedValue);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  return `<div class="space-y-2">${validate_component(Label, "Label").$$render($$result, {}, {}, {
    default: () => {
      return `${escape(label)}`;
    }
  })} <div class="grid grid-cols-2 gap-4">${each(options, (option) => {
    return `<label class="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50"><input type="radio"${add_attribute("name", groupName, 0)}${add_attribute("value", option.value, 0)} class="mr-2"${option.value === selectedValue ? add_attribute("checked", true, 1) : ""}> <span class="text-sm text-gray-700">${escape(option.label)}</span> </label>`;
  })}</div></div>`;
});
const CustomCheckBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { checkedCondition = false } = $$props;
  let { text = "" } = $$props;
  if ($$props.checkedCondition === void 0 && $$bindings.checkedCondition && checkedCondition !== void 0) $$bindings.checkedCondition(checkedCondition);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0) $$bindings.text(text);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="mr-2 shadow-sm p-2 border rounded-md">${validate_component(Checkbox, "Checkbox").$$render(
      $$result,
      { checked: checkedCondition },
      {
        checked: ($$value) => {
          checkedCondition = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${escape(text)}`;
        }
      }
    )}</div>`;
  } while (!$$settled);
  return $$rendered;
});
const PositionSelector = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { categories } = $$props;
  let { selectedPositions = [] } = $$props;
  let { label } = $$props;
  if ($$props.categories === void 0 && $$bindings.categories && categories !== void 0) $$bindings.categories(categories);
  if ($$props.selectedPositions === void 0 && $$bindings.selectedPositions && selectedPositions !== void 0) $$bindings.selectedPositions(selectedPositions);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  return `<div class="space-y-6"><h3 class="text-lg font-medium text-gray-900" data-svelte-h="svelte-1i6defw">Select Positions</h3> ${each(categories, (category) => {
    return `<div class="space-y-3"><h4 class="text-md font-medium text-gray-700">${escape(category.nameEN)}</h4> <div class="grid grid-cols-2 gap-4">${each(category.positions, (position) => {
      return `${validate_component(CustomCheckBox, "CustomCheckBox").$$render(
        $$result,
        {
          text: position.nameEN,
          checkedCondition: selectedPositions.includes(position.id)
        },
        {},
        {}
      )}`;
    })}</div> </div>`;
  })}</div>`;
});
const QuizQuestion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const dispatch = createEventDispatcher();
  let { question } = $$props;
  let { value } = $$props;
  let { categories = [] } = $$props;
  const handleValueChange = (newValue) => {
    dispatch("answer", newValue);
  };
  if ($$props.question === void 0 && $$bindings.question && question !== void 0) $$bindings.question(question);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.categories === void 0 && $$bindings.categories && categories !== void 0) $$bindings.categories(categories);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    value && handleValueChange(value);
    $$rendered = `<div class="space-y-4" role="group" aria-labelledby="question-label"><h3 id="question-label" class="sr-only">${escape(question.label)}</h3> ${question.type === "positions" ? `${validate_component(PositionSelector, "PositionSelector").$$render(
      $$result,
      {
        categories,
        label: question.label,
        selectedPositions: value
      },
      {
        selectedPositions: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${question.type === "radio" ? `${validate_component(CustomRadioGroup, "CustomRadioGroup").$$render(
      $$result,
      {
        options: question.options,
        groupName: question.field,
        label: question.label,
        selectedValue: value
      },
      {
        selectedValue: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${question.type === "text" ? `<div class="space-y-2">${validate_component(Label, "Label").$$render($$result, {}, {}, {
      default: () => {
        return `${escape(question.label)}`;
      }
    })} ${validate_component(Input, "Input").$$render(
      $$result,
      { value },
      {
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>` : ``}`}`}</div>`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let progress;
  let isLastStep;
  let quizData;
  let step;
  let { data } = $$props;
  quizStore.subscribe((value) => {
    quizData = value;
  });
  currentStep.subscribe((value) => {
    step = value;
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  progress = (step + 1) / questions.length * 100;
  isLastStep = step === questions.length - 1;
  return `<div class="min-h-screen flex items-center justify-center p-4">${validate_component(Card, "Card").$$render($$result, { class: "w-full max-w-2xl" }, {}, {
    default: () => {
      return `${step < questions.length ? `<div class="mb-6">${validate_component(Progressbar, "Progressbar").$$render($$result, { progress, size: "h-2" }, {}, {})} <p class="text-sm text-gray-500 mt-2">Step ${escape(step + 1)} of ${escape(questions.length)}</p></div> ${validate_component(QuizQuestion, "QuizQuestion").$$render(
        $$result,
        {
          question: questions[step],
          value: quizData[questions[step].field],
          categories: data.categories
        },
        {},
        {}
      )} <div class="flex justify-between mt-8">${validate_component(Button, "Button").$$render($$result, { color: "light", disabled: step === 0 }, {}, {
        default: () => {
          return `Previous`;
        }
      })} ${validate_component(Button, "Button").$$render(
        $$result,
        {
          disabled: !quizData[questions[step].field]
        },
        {},
        {
          default: () => {
            return `${escape(isLastStep ? "Complete" : "Next")}`;
          }
        }
      )}</div>` : `${validate_component(QuizComplete, "QuizComplete").$$render($$result, { data: quizData }, {}, {})}`}`;
    }
  })}</div>`;
});
export {
  Page as default
};
