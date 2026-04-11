---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:38:45.363Z"
product_name: "App Engine Admin API"
product_slug: "app-engine-admin-api"
feature_name: "App Engine local development server app-process PID logging"
feature_slug: "app-engine-local-development-server-app-process-pid-logging"
latest_feature_date: "2018-06-28"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/admin-api/release-notes"
keywords:
  - "app-process PID"
  - "app-process pid"
  - "local development server"
  - "startup output"
  - "application process ID"
  - "app-process logging"
  - "dev_appserver startup"
  - "app PID"
---

# App Engine local development server app-process PID logging

Product: App Engine Admin API
Coverage: HIGH

## Step 02 Summary

The local development server now prints the app process ID at startup.

## Extended Definition

The feature is that App Engine’s local development server (dev_appserver) prints the process ID of the running app process in its startup output. This behavior was introduced as a documented feature change for the local development server startup flow in the App Engine Admin API release notes.

## Evidence Summary

The App Engine Admin API release notes explicitly record a July 12, 2018 entry stating that the local development server now prints the process ID on startup.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/admin-api/release-notes](https://docs.cloud.google.com/appengine/docs/admin-api/release-notes)

## Supporting Pages

### App Engine Admin API release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/release-notes](https://docs.cloud.google.com/appengine/docs/admin-api/release-notes)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- September 05, 2018 Change Started rolling out Cloud Datastore Emulator as the default local datastore emulation when using the dev appserver local development server.
- June 28, 2018 Feature Purged the DATASTORE PROJECT ID environment variable from the local development server ( dev appserver ) process.
- January 23, 2018 Fixed Fixes the ipaddr library import issue when starting PHP app with the local development server.
- July 12, 2018 Feature The local development server now prints the process ID of the running process on startup.

