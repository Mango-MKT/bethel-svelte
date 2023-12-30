export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "bethel-svelte/_app",
	assets: new Set([".nojekyll","favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.KgA5iO3E.js","app":"_app/immutable/entry/app.Pzh-oSr6.js","imports":["_app/immutable/entry/start.KgA5iO3E.js","_app/immutable/chunks/scheduler.S4wXxuDW.js","_app/immutable/chunks/singletons.A3JGGbAr.js","_app/immutable/chunks/index.vW5buh2y.js","_app/immutable/entry/app.Pzh-oSr6.js","_app/immutable/chunks/scheduler.S4wXxuDW.js","_app/immutable/chunks/index.1d9GiLul.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
