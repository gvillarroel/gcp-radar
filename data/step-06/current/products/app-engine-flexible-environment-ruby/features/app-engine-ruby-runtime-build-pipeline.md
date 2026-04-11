---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:48:27.802Z"
product_name: "App Engine flexible environment Ruby"
product_slug: "app-engine-flexible-environment-ruby"
feature_name: "App Engine Ruby runtime build pipeline"
feature_slug: "app-engine-ruby-runtime-build-pipeline"
latest_feature_date: "2017-08-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/reference/app-yaml"
keywords:
  - "Rails asset precompilation"
  - "Cloud SQL during build"
  - "asset precompile"
  - "Ruby runtime build pipeline"
  - "build-time tasks"
  - "Ruby build pipeline"
  - "environment variables"
  - "build tasks"
---

# App Engine Ruby runtime build pipeline

Product: App Engine flexible environment Ruby
Coverage: LOW

## Step 02 Summary

The Ruby runtime build pipeline was upgraded to provide improvements such as environment-variable and Cloud SQL access for build tasks like Rails asset precompilation.

## Extended Definition

In the App Engine flexible environment, build-time configuration for supported runtimes is done through `app.yaml` by defining `env` entries, including dedicated build environment variables when using buildpacks. The documented behavior is that these variables are made available during build-related tasks via configuration in `app.yaml`, with the page giving examples of environment variable declaration.

## Evidence Summary

This page explains how to declare environment variables in `app.yaml`, and states that build environment variables can be configured there when using runtime buildpacks.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/reference/app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/reference/app-yaml)

## Supporting Pages

### "app.yaml Configuration File \_|\_ App Engine flexible environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/reference/app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/reference/app-yaml)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: MODERATE
- Re-rank rationale: It documents build environment variables and buildpack-related runtime settings in app.yaml, which supports understanding build behavior, though it does not specifically describe the Ruby build pipeline upgrade.

Evidence snippets:
- Defining environment variables You can define environment variables in app.yaml to make them available to your app, for example: env variables : MY VAR : "my value" where MY VAR and my value are the name and value of the environment variable that you want to define and each environment variable entry is indented two spaces under the env variables element.
- If you are using a runtime that supports buildpacks , you can define build environment variables in your app.yaml file.
- Using your environment variables To retrieve and your environment variable for the Python runtime, use os.environ .
- For example, all the environment variables that are prefixed with GAE are reserved for system use.

