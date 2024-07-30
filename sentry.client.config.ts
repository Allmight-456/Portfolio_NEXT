import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://7b29ba187d5062ec52cf9b95caa580b4@o4507690735763456.ingest.us.sentry.io/4507690765385728",
  integrations: [
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "system",
    }),
  ],
});