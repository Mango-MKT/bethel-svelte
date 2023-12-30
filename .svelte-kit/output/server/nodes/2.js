import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.Y98gH3fL.js","_app/immutable/chunks/scheduler.S4wXxuDW.js","_app/immutable/chunks/index.1d9GiLul.js","_app/immutable/chunks/index.vW5buh2y.js"];
export const stylesheets = ["_app/immutable/assets/2.QZaFlqNh.css"];
export const fonts = [];
