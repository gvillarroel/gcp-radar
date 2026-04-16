---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:52:24.719Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "Build environment variables support for App Engine standard"
feature_slug: "build-environment-variables-support-for-app-engine-standard"
latest_feature_date: "2021-04-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/go/config/appref"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/building-app"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/mail/sendgrid"
keywords:
  - "build"
  - "environment"
  - "variables"
  - "app"
  - "engine"
  - "standard"
  - "variable"
  - "introduced"
---

# Build environment variables support for App Engine standard

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

Build environment variable support is introduced for App Engine standard environments in preview.

## Extended Definition

Build environment variable support is introduced for App Engine standard environments in preview.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/go/config/appref](https://docs.cloud.google.com/appengine/docs/standard/go/config/appref)
- [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app)
- [https://docs.cloud.google.com/appengine/docs/standard/go/mail/sendgrid](https://docs.cloud.google.com/appengine/docs/standard/go/mail/sendgrid)

## Supporting Pages

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/config/appref](https://docs.cloud.google.com/appengine/docs/standard/go/config/appref)
- Source ID: `site-docs-reference-2`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- If you want to use the App Engine legacy bundled services for second-generation runtimes , set this field to true . build env variables Optional.
- If you are using a runtime that supports buildpacks , you can define build environment variables in your app.yaml file.
- To learn more, see Using build environment variables . default expiration Optional.
- Example The following is an example of an app.yaml file: runtime : python314 instance class : F2 env variables : BUCKET NAME : "example-gcs-bucket" handlers : Matches requests to /images/... to files in static/images/... - url : /images static dir : static/images - url : /. secure : always redirect http response code : 301 script : auto The following table provides YAML examples of available fields in an app.yaml file: Runtime and app elements Element Description app engine apis Optional.

### "Build a Go app on App Engine \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app)
- Source ID: `site-docs-reference`
- Final score: 88
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Build a Go app on App Engine Stay organized with collections Save and categorize content based on your preferences.
- When your app is running on App Engine, the PORT environment variable is set for you, but when testing your app locally, you can set PORT to any preferred value.
- Create the app.yaml file Every App Engine project has an app.yaml configuration file which specifies your service's runtime environment settings.
- For a deeper dive into how App Engine works, see the Go Runtime Environment .

### "Sending messages with third-party services \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/mail/sendgrid](https://docs.cloud.google.com/appengine/docs/standard/go/mail/sendgrid)
- Source ID: `site-docs-reference-2`
- Final score: 74
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: env variables: EMAIL API KEY: key-from-third-party OR encrypted-key If you are using the Node.js runtime, add the key to the configuration variables in your app's environment variables section in your app's app.standard.yaml file.
- To learn about the advantages of each approach, see Choosing a secret management solution To store the key, or encrypted key value in an environment variable: Add the key or encrypted key value to the environment variables section in your app's app.yaml file.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Sending messages with third-party services Stay organized with collections Save and categorize content based on your preferences.
- In your app's code, retrieve the key or encrypted key from your environment variables.

