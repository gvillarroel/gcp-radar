---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:38:45.362Z"
product_name: "App Engine Admin API"
product_slug: "app-engine-admin-api"
feature_name: "Local development server startup process ID logging"
feature_slug: "local-development-server-startup-process-id-logging"
latest_feature_date: "2018-07-12"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/admin-api/release-notes"
keywords:
  - "PID output"
  - "dev_appserver PID"
  - "PID logging"
  - "local development server"
  - "debug startup"
  - "startup PID"
  - "dev_appserver startup"
  - "startup logging"
---

# Local development server startup process ID logging

Product: App Engine Admin API
Coverage: HIGH

## Step 02 Summary

The local development server now prints its process ID at startup for debugging support.

## Extended Definition

App Engine’s local development server (dev_appserver) now logs its process ID (PID) at startup. This startup-time PID output provides a visible identifier for the running local server process to support debugging and operational tracking.

## Evidence Summary

The cited release notes explicitly state that on July 12, 2018, the local development server began printing its running process ID at startup.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/admin-api/release-notes](https://docs.cloud.google.com/appengine/docs/admin-api/release-notes)

## Supporting Pages

### App Engine Admin API release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/release-notes](https://docs.cloud.google.com/appengine/docs/admin-api/release-notes)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- September 05, 2018 Change Started rolling out Cloud Datastore Emulator as the default local datastore emulation when using the dev appserver local development server.
- June 28, 2018 Feature Purged the DATASTORE PROJECT ID environment variable from the local development server ( dev appserver ) process.
- January 23, 2018 Fixed Fixes the ipaddr library import issue when starting PHP app with the local development server.
- July 12, 2018 Feature The local development server now prints the process ID of the running process on startup.

