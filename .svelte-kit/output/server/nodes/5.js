import * as universal from '../entries/pages/jobSearch/_page.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/jobSearch/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/jobSearch/+page.ts";
export const imports = ["_app/immutable/nodes/5.CIYK3Zcw.js","_app/immutable/chunks/jobService.pyJUNCr3.js","_app/immutable/chunks/scheduler.SGfngiwG.js","_app/immutable/chunks/index.-Ek98hHn.js","_app/immutable/chunks/Button.DRPm7u4S.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/applicationService.Bt2LdTfa.js","_app/immutable/chunks/Frame.DaETnrGn.js","_app/immutable/chunks/BriefcaseSolid.DQTG8nTl.js","_app/immutable/chunks/Checkbox.D9ValPWn.js","_app/immutable/chunks/index.Dtn43j_J.js","_app/immutable/chunks/entry.BLJjAm5k.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/store._GBhKUCL.js"];
export const stylesheets = [];
export const fonts = [];
