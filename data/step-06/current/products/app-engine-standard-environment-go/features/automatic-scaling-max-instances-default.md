---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:49:48.285Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "Automatic scaling max_instances default"
feature_slug: "automatic-scaling-max-instances-default"
latest_feature_date: "2025-03-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/go/config/appref"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/building-app"
keywords:
  - "instances"
  - "automatic"
  - "scaling"
  - "default"
---

# Automatic scaling max_instances default

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

New App Engine standard environment projects default automatic scaling max_instances to 20 for deployments unless overridden in app.yaml.

## Extended Definition

New App Engine standard environment projects default automatic scaling max_instances to 20 for deployments unless overridden in app.yaml.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/go/config/appref](https://docs.cloud.google.com/appengine/docs/standard/go/config/appref)
- [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app)

## Supporting Pages

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/config/appref](https://docs.cloud.google.com/appengine/docs/standard/go/config/appref)
- Source ID: `site-docs-reference-4`
- Final score: 299
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You must first create the app.yaml file for the default service before you can create and deploy app.yaml files for additional services within your app.
- Example The following is an example of an app.yaml file: runtime : python314 instance class : F2 env variables : BUCKET NAME : "example-gcs-bucket" handlers : Matches requests to /images/... to files in static/images/... - url : /images static dir : static/images - url : /. secure : always redirect http response code : 301 script : auto The following table provides YAML examples of available fields in an app.yaml file: Runtime and app elements Element Description app engine apis Optional.
- Home Documentation Application hosting App Engine Standard environment Reference Send feedback App Engine app.yaml reference Stay organized with collections Save and categorize content based on your preferences.
- You can enable the service for an app by including an inbound services section in the app.yaml file. warmup Enables warmup requests.

### "Build a Go app on App Engine \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app)
- Source ID: `site-docs-reference`
- Final score: 189
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can specify the name of your service in the app.yaml file, but if the name is omitted, it is treated as default .
- The app.yaml file can specify other Go versions, network settings, scaling settings, and more.
- Create a new folder called go-app for your Go service: mkdir go-app In your go-app/ folder, create a file called app.yaml , and add the following contents: runtime : go126 # or another supported version This is the simplest configuration for an App Engine app.
- Deploy your web service on App Engine In your go-app directory where your app.yaml file is located, deploy your web service to App Engine using the following command: gcloud app deploy To launch your browser and view your web service at https:// PROJECT ID .

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

