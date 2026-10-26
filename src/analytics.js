// PostHog loads as its own chunk so it never blocks the first render.
const ready = import("posthog-js")
  .then(({ default: posthog }) => {
    // The project token is a public ingestion key, safe to ship in client code.
    posthog.init("phc_CFGczMoabIaQE9pdRMQcmqcNmvMHhPKusn50gORJykW", {
      api_host: "https://eu.i.posthog.com",
      ui_host: "https://eu.posthog.com",
      defaults: "2026-08-30",

      // Keep state in memory only: no cookies or localStorage, so no consent
      // banner. The trade-off is that a returning visitor counts as a new one.
      persistence: "memory",
      person_profiles: "identified_only",
      respect_dnt: true,

      // The contact form sits on this page, so never record sessions.
      disable_session_recording: true,
      disable_surveys: true,
      capture_pageleave: true,
    });
    return posthog;
  })
  .catch(() => null);

export const track = (event, properties) => {
  ready.then((posthog) => posthog && posthog.capture(event, properties));
};
