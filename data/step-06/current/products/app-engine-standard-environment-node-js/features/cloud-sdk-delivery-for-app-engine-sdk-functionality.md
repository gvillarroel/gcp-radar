---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:34:18.683Z"
product_name: "App Engine standard environment Node.js"
product_slug: "app-engine-standard-environment-node-js"
feature_name: "Cloud SDK delivery for App Engine SDK functionality"
feature_slug: "cloud-sdk-delivery-for-app-engine-sdk-functionality"
latest_feature_date: "2019-07-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/apis"
  - "https://docs.cloud.google.com/appengine/docs/standard/authenticating-users"
  - "https://docs.cloud.google.com/appengine/docs/standard/configuring-warmup-requests"
keywords:
  - "sdk"
  - "delivery"
  - "app"
  - "engine"
  - "functionality"
  - "provides"
  - "tooling"
  - "exclusively"
---

# Cloud SDK delivery for App Engine SDK functionality

Product: App Engine standard environment Node.js
Coverage: MEDIUM

## Step 02 Summary

Cloud SDK delivery for App Engine SDK functionality provides App Engine tooling exclusively through Cloud SDK.

## Extended Definition

Cloud SDK delivery for App Engine SDK functionality provides App Engine tooling exclusively through Cloud SDK.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/apis](https://docs.cloud.google.com/appengine/docs/standard/apis)
- [https://docs.cloud.google.com/appengine/docs/standard/authenticating-users](https://docs.cloud.google.com/appengine/docs/standard/authenticating-users)
- [https://docs.cloud.google.com/appengine/docs/standard/configuring-warmup-requests](https://docs.cloud.google.com/appengine/docs/standard/configuring-warmup-requests)

## Supporting Pages

### "APIs & Reference \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/apis](https://docs.cloud.google.com/appengine/docs/standard/apis)
- Source ID: `site-docs-reference`
- Final score: 35
- Re-rank relevance: N/A

Evidence snippets:
- Configuration Files app.yaml Details about the configuration file that is used to configure App Engine deployed versions. cron.yaml Details about the configuration file that is used to configure regularly scheduled tasks on App Engine. dispatch.yaml Details about the configuration file that is used to route incoming requests to a specific service based on the path or hostname in the URL. index.yaml Details about the configuration file used to define the Datastore indexes of the data in your app.
- App Engine legacy bundled services APIs App Engine legacy bundled services APIs for Go Use the legacy bundled services APIs to ease the transition of moving your app from first-generation runtimes to newer runtimes.
- Home Documentation Application hosting App Engine Standard environment Reference Send feedback APIs & Reference Stay organized with collections Save and categorize content based on your preferences.
- Cloud Client Libraries Cloud Client Libraries for Go A client library that embraces idioms of Go and provides high-level API abstractions so that you can easily access Google Cloud services.

### "Authenticating users \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/authenticating-users](https://docs.cloud.google.com/appengine/docs/standard/authenticating-users)
- Source ID: `site-docs-reference`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- Identity-Aware Proxy (IAP) Provides authentication by adding an Identity and Access Management (IAM) verification layer above your App Engine app.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Authenticating users Stay organized with collections Save and categorize content based on your preferences.
- Firebase Authentication Firebase Authentication provides a drop-in, customizable identity and authentication service for user sign-up and sign-in.
- The Users API allows an App Engine app to perform the following tasks: Detect whether the current user is signed in using a Google Account.

### "Configuring warmup requests to improve performance \_|\_ App Engine standard\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/configuring-warmup-requests](https://docs.cloud.google.com/appengine/docs/standard/configuring-warmup-requests)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Configuring warmup requests to improve performance Stay organized with collections Save and categorize content based on your preferences.
- If warmup requests are enabled for your application, App Engine attempts to detect when your application needs a new instance and initiates a warmup request to initialize a new instance.
- Enabling warmup requests Warmup requests are used by the App Engine scheduler, which controls the auto scaling of instances based on user-supplied configuration.
- When deploying to Google App Engine, a webserver process such as Gunicorn will serve the app.

