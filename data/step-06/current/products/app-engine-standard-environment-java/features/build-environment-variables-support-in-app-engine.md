---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T21:44:03.342Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Build environment variables support in App Engine"
feature_slug: "build-environment-variables-support-in-app-engine"
latest_feature_date: "2022-11-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java/config/appref"
  - "https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref"
keywords:
  - "build-time env vars"
  - "app.yaml build settings"
  - "build env var"
  - "build_env_variables"
  - "build-time environment variables"
  - "environment variables at build"
  - "App Engine build process"
  - "build environment variables"
---

# Build environment variables support in App Engine

Product: App Engine standard environment Java
Coverage: LOW

## Step 02 Summary

Build-time environment variables are now generally available in App Engine standard environment Java.

## Extended Definition

Build-time environment variables are now generally available in App Engine standard environment Java.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java/config/appref)
- [https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref)

## Supporting Pages

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java/config/appref)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Example The following is an example of an app.yaml file: runtime : java25 instance class : F2 env variables : BUCKET NAME : "example-gcs-bucket" handlers : - url : /stylesheets static dir : stylesheets - url : /. secure : always redirect http response code : 301 script : auto The following table provides YAML examples of available fields in an app.yaml file: Runtime and app elements Element Description build env variables Optional.
- If you are using a runtime that supports buildpacks , you can define build environment variables in your app.yaml file.
- To learn more, see Using build environment variables . default expiration Optional.

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you want to use the App Engine legacy bundled services for second-generation runtimes , set this field to true . build env variables Optional.
- If you are using a runtime that supports buildpacks , you can define build environment variables in your app.yaml file.
- To learn more, see Using build environment variables . default expiration Optional.

