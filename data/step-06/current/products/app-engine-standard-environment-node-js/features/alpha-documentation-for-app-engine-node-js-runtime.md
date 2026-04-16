---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:56:05.586Z"
product_name: "App Engine standard environment Node.js"
product_slug: "app-engine-standard-environment-node-js"
feature_name: "Alpha documentation for App Engine Node.js runtime"
feature_slug: "alpha-documentation-for-app-engine-node-js-runtime"
latest_feature_date: "2018-04-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/nodejs/runtime"
  - "https://docs.cloud.google.com/appengine/docs/language-landing"
  - "https://docs.cloud.google.com/appengine/docs/standard/nodejs/configuring-your-app-with-app-yaml"
keywords:
  - "alpha"
  - "documentation"
  - "app"
  - "engine"
  - "node"
  - "js"
  - "runtime"
  - "published"
---

# Alpha documentation for App Engine Node.js runtime

Product: App Engine standard environment Node.js
Coverage: MEDIUM

## Step 02 Summary

Published alpha documentation for the App Engine standard environment Node.js runtime.

## Extended Definition

Published alpha documentation for the App Engine standard environment Node.js runtime.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/nodejs/runtime](https://docs.cloud.google.com/appengine/docs/standard/nodejs/runtime)
- [https://docs.cloud.google.com/appengine/docs/language-landing](https://docs.cloud.google.com/appengine/docs/language-landing)
- [https://docs.cloud.google.com/appengine/docs/standard/nodejs/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/nodejs/configuring-your-app-with-app-yaml)

## Supporting Pages

### "Node.js Runtime Environment \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/nodejs/runtime](https://docs.cloud.google.com/appengine/docs/standard/nodejs/runtime)
- Source ID: `site-docs-root`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Node.js Runtime Environment Stay organized with collections Save and categorize content based on your preferences.
- The Node.js runtime for App Engine in the standard environment is declared in the app.yaml file: runtime : nodejs VERSION Where VERSION is the Node.js MAJOR version number.
- NPM build script By default, when you deploy the app in App Engine, the Node.js runtime executes npm run build if a build script is detected in package.json .
- Because minor and patch versions are automatically updated, if present, the engines.node property in your package.json file can only specify the major version and be compatible with the Node.js version specified in your app.yaml file.

### App Engine documentation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/language-landing](https://docs.cloud.google.com/appengine/docs/language-landing)
- Source ID: `site-docs-reference`
- Final score: 77
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Go Read docs PHP Read docs Java Read docs Python Read docs Node.js Read docs Ruby Read docs .NET Read docs More languages View custom runtime docs Try it for yourself If you're new to Google Cloud, create an account to evaluate how App Engine performs in real-world scenarios.
- Home Documentation Application hosting App Engine Guides Send feedback App Engine documentation Stay organized with collections Save and categorize content based on your preferences.
- Try App Engine free Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- You can choose from several popular languages, libraries, and frameworks to develop your apps, and then let App Engine take care of provisioning servers and scaling your app instances based on demand.

### "Defining runtime settings \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/nodejs/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/nodejs/configuring-your-app-with-app-yaml)
- Source ID: `site-docs-reference-3`
- Final score: 75
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Generally, your app.yaml file requires only the runtime element for a simple Node.js app in the standard environment, for example: runtime : nodejs24 App Engine provides default values for all other settings, including the F1 instance class , which determines the memory and CPU resources that are available to your app, and automatic scaling , which controls how and when new instances of your app are created.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Defining runtime settings Stay organized with collections Save and categorize content based on your preferences.
- An App Engine app is configured using an app.yaml file, that contains the runtime, handlers, scaling, and other general settings including environment variables.
- About app.yaml files You can specify the runtime configuration for your Node.js app, including versions and URLs, in the app.yaml file.

