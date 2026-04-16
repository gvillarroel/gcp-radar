---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:56:05.599Z"
product_name: "App Engine standard environment Node.js"
product_slug: "app-engine-standard-environment-node-js"
feature_name: "App Engine Node.js runtime version 1.9.29"
feature_slug: "app-engine-node-js-runtime-version-1-9-29"
latest_feature_date: "2015-11-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/nodejs/runtime"
  - "https://docs.cloud.google.com/appengine/docs/standard/nodejs/configuring-your-app-with-app-yaml"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled"
keywords:
  - "app"
  - "engine"
  - "node"
  - "js"
  - "runtime"
  - "version"
  - "29"
  - "standard"
---

# App Engine Node.js runtime version 1.9.29

Product: App Engine standard environment Node.js
Coverage: MEDIUM

## Step 02 Summary

The App Engine Standard Node.js runtime was updated to version 1.9.29.

## Extended Definition

The App Engine Standard Node.js runtime was updated to version 1.9.29.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/nodejs/runtime](https://docs.cloud.google.com/appengine/docs/standard/nodejs/runtime)
- [https://docs.cloud.google.com/appengine/docs/standard/nodejs/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/nodejs/configuring-your-app-with-app-yaml)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)

## Supporting Pages

### "Node.js Runtime Environment \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/nodejs/runtime](https://docs.cloud.google.com/appengine/docs/standard/nodejs/runtime)
- Source ID: `site-docs-root`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- The Node.js runtime for App Engine in the standard environment is declared in the app.yaml file: runtime : nodejs VERSION Where VERSION is the Node.js MAJOR version number.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Node.js Runtime Environment Stay organized with collections Save and categorize content based on your preferences.
- Because minor and patch versions are automatically updated, if present, the engines.node property in your package.json file can only specify the major version and be compatible with the Node.js version specified in your app.yaml file.
- NPM build script By default, when you deploy the app in App Engine, the Node.js runtime executes npm run build if a build script is detected in package.json .

### "Defining runtime settings \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/nodejs/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/nodejs/configuring-your-app-with-app-yaml)
- Source ID: `site-docs-reference-3`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- Generally, your app.yaml file requires only the runtime element for a simple Node.js app in the standard environment, for example: runtime : nodejs24 App Engine provides default values for all other settings, including the F1 instance class , which determines the memory and CPU resources that are available to your app, and automatic scaling , which controls how and when new instances of your app are created.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Defining runtime settings Stay organized with collections Save and categorize content based on your preferences.
- About app.yaml files You can specify the runtime configuration for your Node.js app, including versions and URLs, in the app.yaml file.
- An App Engine app is configured using an app.yaml file, that contains the runtime, handlers, scaling, and other general settings including environment variables.

### "How requests are handled \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- Source ID: `site-docs-reference`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- The following limits apply specifically to the use of request handlers: Limit Amount Request size 32 megabytes Response size 32 megabytes Request timeout Depends on the type of scaling your app uses Maximum total number of files (app files and static files) 10,000 total 1,000 per directory Maximum size of an application file 32 megabytes Maximum size of a static file 32 megabytes Maximum total size of all application and static files First 1 gigabyte is free $ 0.026 per gigabyte per month after first 1 gigabyte Pending request timeout 10 seconds Maximum size of a single request header field 8 kilobytes for second-generation runtimes in the standard environment.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback How requests are handled Stay organized with collections Save and categorize content based on your preferences.
- Responses App Engine calls the handler script with a Request and waits for the script to return; all data written to the standard output stream is sent as the HTTP response.
- App Engine returns an uncompressed response and Google Frontend caches the uncompressed version of the response data.

