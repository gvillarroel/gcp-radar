---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:15:56.137Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "App Engine regional availability: asia-northeast2"
feature_slug: "app-engine-regional-availability-asia-northeast2"
latest_feature_date: "2019-04-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/building-app"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/building-app"
keywords:
  - "northeast2"
  - "availability"
  - "regional"
  - "asia"
  - "added"
  - "engine"
  - "for"
  - "app"
---

# App Engine regional availability: asia-northeast2

Product: App Engine standard environment Python
Coverage: LOW

## Step 02 Summary

App Engine added support for the asia-northeast2 (Osaka, Japan) region.

## Extended Definition

App Engine added support for the asia-northeast2 (Osaka, Japan) region.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api)
- [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/building-app](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/building-app)

## Supporting Pages

### "Package com.google.appengine.api (5.0.0) \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api)
- Source ID: `site-docs-reference`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- The Task Queue com.google.appengine.api.taskqueue.Queue#add methods will forward the NamespaceManager settings into the task being added causing the added task to be executed with the same current namespace as the task creator.
- Classes LifecycleManager NamespaceManager Provides functions for manipulating the current namespace used for App Engine APIs.
- When a namespace aware class (e.g., com.google.appengine.api.datastore.Key , com.google.appengine.api.datastore.Query and com.google.appengine.api.memcache.MemcacheService ) is constructed, it determines which namespace will be used by calling NamespaceManager#get() if it is otherwise unspecified.
- Home Documentation Application hosting App Engine Standard environment Reference Send feedback Package com.google.appengine.api (5.0.0) Stay organized with collections Save and categorize content based on your preferences.

### "Build a Go app on App Engine \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Create a new folder called go-app for your Go service: mkdir go-app In your go-app/ folder, create a file called app.yaml , and add the following contents: runtime : go126 # or another supported version This is the simplest configuration for an App Engine app.
- When your app is running on App Engine, the PORT environment variable is set for you, but when testing your app locally, you can set PORT to any preferred value.
- Write a basic web service for App Engine Learn how to write a web service and declare runtime settings.
- For apps created after February 2020, REGION ID .r is included in App Engine URLs.

### "Build a Java app on App Engine \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/building-app](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/building-app)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Build a Java app on App Engine Stay organized with collections Save and categorize content based on your preferences.
- Getting started Learn how to build a simple web app and deploy it on App Engine: Create a Google Cloud project Learn how to create a Google Cloud project to hold your App Engine app's resources.
- Deploy your service on App Engine Learn how to deploy your Java code on App Engine and view your live web service.
- The tasks on this page walk you through the basics of App Engine, guiding you through the development process.

