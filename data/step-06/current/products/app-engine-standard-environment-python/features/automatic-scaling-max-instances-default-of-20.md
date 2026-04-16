---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:16:06.768Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "Automatic scaling max_instances default of 20"
feature_slug: "automatic-scaling-max-instances-default-of-20"
latest_feature_date: "2025-03-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/python3/config/appref"
  - "https://docs.cloud.google.com/appengine/docs/standard/python3/configuring-your-app-with-app-yaml"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed"
keywords:
  - "instances"
  - "automatic"
  - "scaling"
  - "default"
---

# Automatic scaling max_instances default of 20

Product: App Engine standard environment Python
Coverage: MEDIUM

## Step 02 Summary

New App Engine standard environment projects default automatic scaling max_instances to 20 unless overridden in app.yaml.

## Extended Definition

New App Engine standard environment projects default automatic scaling max_instances to 20 unless overridden in app.yaml.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/python3/config/appref](https://docs.cloud.google.com/appengine/docs/standard/python3/config/appref)
- [https://docs.cloud.google.com/appengine/docs/standard/python3/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/python3/configuring-your-app-with-app-yaml)
- [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)

## Supporting Pages

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/python3/config/appref](https://docs.cloud.google.com/appengine/docs/standard/python3/config/appref)
- Source ID: `site-docs-reference-4`
- Final score: 299
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You must first create the app.yaml file for the default service before you can create and deploy app.yaml files for additional services within your app.
- Example The following is an example of an app.yaml file: runtime : python314 instance class : F2 env variables : BUCKET NAME : "example-gcs-bucket" handlers : Matches requests to /images/... to files in static/images/... - url : /images static dir : static/images - url : /. secure : always redirect http response code : 301 script : auto The following table provides YAML examples of available fields in an app.yaml file: Runtime and app elements Element Description app engine apis Optional.
- Home Documentation Application hosting App Engine Standard environment Reference Send feedback App Engine app.yaml reference Stay organized with collections Save and categorize content based on your preferences.
- You can enable the service for an app by including an inbound services section in the app.yaml file. warmup Enables warmup requests.

### "Defining runtime settings \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/python3/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/python3/configuring-your-app-with-app-yaml)
- Source ID: `site-docs-reference-2`
- Final score: 208
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Generally, your app.yaml file requires only the runtime element for a simple Python 3 app in the standard environment, for example: runtime: python314 App Engine provides default values for all other settings, including the F1 instance class , which determines the memory and CPU resources that are available to your app, and automatic scaling , which controls how and when new instances of your app are created.
- An App Engine app is configured using an app.yaml file, that contains the runtime, handlers, scaling, and other general settings including environment variables.
- You must first create the app.yaml file for the default service of your app before you can create and deploy app.yaml files for additional services.
- If you need to override the default settings, create an app.yaml file and specify the settings you need.

### "How instances are managed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- Source ID: `site-docs-reference`
- Final score: 189
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Scaling types App Engine supports the following scaling types , which controls how and when instances are created: Automatic (default) Basic Manual You specify the scaling type in your app's app.yaml .
- To override the default, specify a new max instances value in your app.yaml file, and deploy a new version or redeploy over an existing version.
- The scaling settings are applied at the App Engine version level as part of the app.yaml file.
- Note: For new projects you create after March 2025, App Engine sets the automatic scaling maximum instances default for standard environment deployments to 20.

