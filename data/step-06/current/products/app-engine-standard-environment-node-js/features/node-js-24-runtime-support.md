---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:56:05.568Z"
product_name: "App Engine standard environment Node.js"
product_slug: "app-engine-standard-environment-node-js"
feature_name: "Node.js 24 runtime support"
feature_slug: "node-js-24-runtime-support"
latest_feature_date: "2025-11-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/nodejs/runtime"
  - "https://docs.cloud.google.com/appengine/docs/standard/nodejs/configuring-your-app-with-app-yaml"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled"
keywords:
  - "node"
  - "js"
  - "24"
  - "runtime"
  - "now"
  - "generally"
  - "available"
  - "app"
---

# Node.js 24 runtime support

Product: App Engine standard environment Node.js
Coverage: MEDIUM

## Step 02 Summary

The Node.js 24 runtime is now generally available in App Engine standard environment.

## Extended Definition

The Node.js 24 runtime is now generally available in App Engine standard environment.

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
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- NODE ENV (Only available in the Node.js runtime) Set to production when your service is deployed.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Node.js Runtime Environment Stay organized with collections Save and categorize content based on your preferences.
- To support Node.js packages that require native extensions, the runtime includes system packages enabling you to use tools such as ImageMagick , FFmpeg , and Chrome headless .
- The Node.js runtime for App Engine in the standard environment is declared in the app.yaml file: runtime : nodejs VERSION Where VERSION is the Node.js MAJOR version number.

### "Defining runtime settings \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/nodejs/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/nodejs/configuring-your-app-with-app-yaml)
- Source ID: `site-docs-reference-3`
- Final score: 75
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Generally, your app.yaml file requires only the runtime element for a simple Node.js app in the standard environment, for example: runtime : nodejs24 App Engine provides default values for all other settings, including the F1 instance class , which determines the memory and CPU resources that are available to your app, and automatic scaling , which controls how and when new instances of your app are created.
- About app.yaml files You can specify the runtime configuration for your Node.js app, including versions and URLs, in the app.yaml file.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Defining runtime settings Stay organized with collections Save and categorize content based on your preferences.
- An App Engine app is configured using an app.yaml file, that contains the runtime, handlers, scaling, and other general settings including environment variables.

### "How requests are handled \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- Source ID: `site-docs-reference`
- Final score: 59
- Re-rank relevance: N/A

Evidence snippets:
- This limitation doesn't apply to responses that serve data from Cloud Storage or the legacy Blobstore API if it is available in your runtime.
- The following limits apply specifically to the use of request handlers: Limit Amount Request size 32 megabytes Response size 32 megabytes Request timeout Depends on the type of scaling your app uses Maximum total number of files (app files and static files) 10,000 total 1,000 per directory Maximum size of an application file 32 megabytes Maximum size of a static file 32 megabytes Maximum total size of all application and static files First 1 gigabyte is free $ 0.026 per gigabyte per month after first 1 gigabyte Pending request timeout 10 seconds Maximum size of a single request header field 8 kilobytes for second-generation runtimes in the standard environment.
- App Engine pending queue prioritization During periods of heavy traffic, App Engine might place requests in a pending queue while waiting for an available instance with the following prioritization: App Engine prioritizes other queued requests over pending queued requests from Task queue .
- After a file is transmitted with a given expiration time, there is generally no way to clear it out of web-proxy caches, even if the user clears their own browser cache.

