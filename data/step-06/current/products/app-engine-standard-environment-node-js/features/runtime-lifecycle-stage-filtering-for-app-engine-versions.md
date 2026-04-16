---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:56:05.571Z"
product_name: "App Engine standard environment Node.js"
product_slug: "app-engine-standard-environment-node-js"
feature_name: "Runtime lifecycle stage filtering for App Engine versions"
feature_slug: "runtime-lifecycle-stage-filtering-for-app-engine-versions"
latest_feature_date: "2024-07-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/nodejs/runtime"
  - "https://docs.cloud.google.com/appengine/docs/standard/nodejs/configuring-your-app-with-app-yaml"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed"
keywords:
  - "runtime"
  - "lifecycle"
  - "stage"
  - "filtering"
  - "app"
  - "engine"
  - "versions"
  - "list"
---

# Runtime lifecycle stage filtering for App Engine versions

Product: App Engine standard environment Node.js
Coverage: MEDIUM

## Step 02 Summary

The App Engine versions list in Google Cloud console now supports filtering by runtime lifecycle stage and shows warning icons for deprecated or unsupported runtimes.

## Extended Definition

The App Engine versions list in Google Cloud console now supports filtering by runtime lifecycle stage and shows warning icons for deprecated or unsupported runtimes.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/nodejs/runtime](https://docs.cloud.google.com/appengine/docs/standard/nodejs/runtime)
- [https://docs.cloud.google.com/appengine/docs/standard/nodejs/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/nodejs/configuring-your-app-with-app-yaml)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)

## Supporting Pages

### "Node.js Runtime Environment \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/nodejs/runtime](https://docs.cloud.google.com/appengine/docs/standard/nodejs/runtime)
- Source ID: `site-docs-root`
- Final score: 111
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Because minor and patch versions are automatically updated, if present, the engines.node property in your package.json file can only specify the major version and be compatible with the Node.js version specified in your app.yaml file.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Node.js Runtime Environment Stay organized with collections Save and categorize content based on your preferences.
- The Node.js runtime for App Engine in the standard environment is declared in the app.yaml file: runtime : nodejs VERSION Where VERSION is the Node.js MAJOR version number.
- Environment variables The following environment variables are set by the runtime: Environment variable Description GAE APPLICATION The ID of your App Engine application.

### "Defining runtime settings \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/nodejs/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/nodejs/configuring-your-app-with-app-yaml)
- Source ID: `site-docs-reference-3`
- Final score: 77
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Generally, your app.yaml file requires only the runtime element for a simple Node.js app in the standard environment, for example: runtime : nodejs24 App Engine provides default values for all other settings, including the F1 instance class , which determines the memory and CPU resources that are available to your app, and automatic scaling , which controls how and when new instances of your app are created.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Defining runtime settings Stay organized with collections Save and categorize content based on your preferences.
- An App Engine app is configured using an app.yaml file, that contains the runtime, handlers, scaling, and other general settings including environment variables.
- About app.yaml files You can specify the runtime configuration for your Node.js app, including versions and URLs, in the app.yaml file.

### "How requests are routed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)
- Source ID: `site-docs-reference`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- To retrieve the IDs of your app's services and versions, you can use any of the following tools: Console In the Google Cloud console, you can view the corresponding Instances , Services , and Versions pages. gcloud Run the gcloud app instances list command to list the resource IDs within a specific Google Cloud project.
- To view the URL for a service that is already deployed: Enter the gcloud app versions list command to list the versions of a specific service.
- For example, to list the versions of the default service, enter gcloud app versions list --service=default .
- For example, to describe version 20191023t101741 for the default service, enter gcloud app versions describe 20191023t101741 --service=default Domain name is included in the request data The domain name used for the request is included in the request data that is passed to your app.

