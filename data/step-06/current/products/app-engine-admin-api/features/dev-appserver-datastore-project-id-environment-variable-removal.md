---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:38:45.364Z"
product_name: "App Engine Admin API"
product_slug: "app-engine-admin-api"
feature_name: "dev_appserver DATASTORE_PROJECT_ID environment variable removal"
feature_slug: "dev-appserver-datastore-project-id-environment-variable-removal"
latest_feature_date: "2018-06-28"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/admin-api/release-notes"
keywords:
  - "Datastore emulator compatibility"
  - "datastore env var"
  - "DATASTORE_PROJECT_ID removal"
  - "Cloud Datastore Emulator"
  - "Datastore Emulator support"
  - "environment variable removed"
  - "project ID variable"
  - "DATASTORE_PROJECT_ID"
---

# dev_appserver DATASTORE_PROJECT_ID environment variable removal

Product: App Engine Admin API
Coverage: HIGH

## Step 02 Summary

App Engine dev_appserver removed DATASTORE_PROJECT_ID from its environment, allowing it to run alongside the Cloud Datastore Emulator.

## Extended Definition

In App Engine’s local development server (dev_appserver), the `DATASTORE_PROJECT_ID` environment variable was removed from the process. The release notes describe this June 28, 2018 change as a fix for crashes when the variable was present in the shell and the dev server communicated with a running Cloud Datastore Emulator, indicating it was done to restore emulator compatibility.

## Evidence Summary

The release notes provide direct evidence that App Engine Admin API’s June 2018 update purged `DATASTORE_PROJECT_ID` from dev_appserver and that this change addressed crashes triggered by the variable during Cloud Datastore Emulator use.

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
- Previously, the crush happened when the environment variable "DATASTORE PROJECT ID" existed in the shell that ran dev appserver.
- Fixed Fix a crush that happened when dev appserver speaked to a running Cloud Datastore Emulator.

