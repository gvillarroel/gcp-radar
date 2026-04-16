---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:56:05.570Z"
product_name: "App Engine standard environment Node.js"
product_slug: "app-engine-standard-environment-node-js"
feature_name: "Node.js 24 runtime preview"
feature_slug: "node-js-24-runtime-preview"
latest_feature_date: "2025-07-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/nodejs/runtime"
  - "https://docs.cloud.google.com/appengine/docs/standard/nodejs/configuring-your-app-with-app-yaml"
  - "https://docs.cloud.google.com/appengine/docs/standard"
keywords:
  - "node"
  - "js"
  - "24"
  - "runtime"
  - "preview"
  - "now"
  - "available"
  - "app"
---

# Node.js 24 runtime preview

Product: App Engine standard environment Node.js
Coverage: MEDIUM

## Step 02 Summary

The Node.js 24 runtime is now available in preview for App Engine standard environment.

## Extended Definition

The Node.js 24 runtime is now available in preview for App Engine standard environment.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/nodejs/runtime](https://docs.cloud.google.com/appengine/docs/standard/nodejs/runtime)
- [https://docs.cloud.google.com/appengine/docs/standard/nodejs/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/nodejs/configuring-your-app-with-app-yaml)
- [https://docs.cloud.google.com/appengine/docs/standard](https://docs.cloud.google.com/appengine/docs/standard)

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
- Final score: 59
- Re-rank relevance: N/A

Evidence snippets:
- Generally, your app.yaml file requires only the runtime element for a simple Node.js app in the standard environment, for example: runtime : nodejs24 App Engine provides default values for all other settings, including the F1 instance class , which determines the memory and CPU resources that are available to your app, and automatic scaling , which controls how and when new instances of your app are created.
- About app.yaml files You can specify the runtime configuration for your Node.js app, including versions and URLs, in the app.yaml file.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Defining runtime settings Stay organized with collections Save and categorize content based on your preferences.
- An App Engine app is configured using an app.yaml file, that contains the runtime, handlers, scaling, and other general settings including environment variables.

### App Engine standard environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/standard](https://docs.cloud.google.com/appengine/docs/standard)
- Source ID: `site-docs-reference`
- Final score: 59
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Standard environment languages and runtimes The standard environment supports the following languages: Go Java Node.js PHP Python Ruby Instance classes The instance class determines the amount of memory and CPU available to each instance, the amount of free quota , and the cost per hour after your app exceeds the free quota.
- Containers are preconfigured with one of several available runtimes.
- For all runtime generations, the memory limit includes the memory your app uses along with the memory that the runtime itself needs to run your app.
- This is different from the instance's enforced memory limit, which is the maximum memory available to the instance's isolated sandbox environment.

