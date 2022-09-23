import { BrowserTracing } from "@sentry/tracing";
import * as Sentry from "@sentry/vue";
import { createApp } from "vue";

import "@/assets/main.pcss";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

Sentry.init({
	app,
	dsn: "https://c7adf1a6d0774c39b07738f0729d70db@o1422908.ingest.sentry.io/6770046",
	logErrors: true,
	// eslint-disable-next-line no-undef
	release: __SENTRY_RELEASE__,
	integrations: [
		new BrowserTracing({
			routingInstrumentation: Sentry.vueRouterInstrumentation(router),
			tracingOrigins: ["localhost", "my-site-url.com", /^\//],
		}),
	],
	// Set tracesSampleRate to 1.0 to capture 100%
	// of transactions for performance monitoring.
	// We recommend adjusting this value in production
	tracesSampleRate: 1.0,
});

app.use(router).mount("#app");
