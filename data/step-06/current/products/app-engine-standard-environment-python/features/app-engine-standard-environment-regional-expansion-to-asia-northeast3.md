---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:15:56.132Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "App Engine standard environment regional expansion to asia-northeast3"
feature_slug: "app-engine-standard-environment-regional-expansion-to-asia-northeast3"
latest_feature_date: "2020-03-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/go/building-app"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api"
keywords:
  - "expansion"
  - "regional"
  - "environment"
  - "asia"
  - "standard"
  - "engine"
  - "app"
  - "to"
---

# App Engine standard environment regional expansion to asia-northeast3

Product: App Engine standard environment Python
Coverage: LOW

## Step 02 Summary

App Engine standard environment became available in the asia-northeast3 (Seoul) region.

## Extended Definition

App Engine standard environment became available in the asia-northeast3 (Seoul) region.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api)

## Supporting Pages

### "Build a Go app on App Engine \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app)
- Source ID: `site-docs-root`
- Final score: 232
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Build a Go app on App Engine Stay organized with collections Save and categorize content based on your preferences.
- When your app is running on App Engine, the PORT environment variable is set for you, but when testing your app locally, you can set PORT to any preferred value.
- For a deeper dive into how App Engine works, see the Go Runtime Environment .
- Deploy your web service on App Engine In your go-app directory where your app.yaml file is located, deploy your web service to App Engine using the following command: gcloud app deploy To launch your browser and view your web service at https:// PROJECT ID .

### "appengine-web.xml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- Source ID: `site-docs-reference`
- Final score: 230
- Re-rank relevance: N/A

Evidence snippets:
- The appengine-web.xml file can define environment variables that are set when the application is running. <env-variables> <env-var name="DEFAULT ENCODING" value="UTF-8" /> </env-variables> To avoid conflicts with your local environment, the development server does not set environment variables based on this file, and requires that the local environment have these variables already set to matching values. export DEFAULT ENCODING = "UTF-8" dev appserver war When deployed to App Engine, the environment is created with these variables already set.
- If you want to disallow the use of HTTPS for the application, put the following in the appengine-web.xml file: <ssl-enabled>false</ssl-enabled> There is no way to disallow HTTPS for some URL paths and not others in the Java runtime environment. <static-error-handlers> Optional.
- Home Documentation Application hosting App Engine Standard environment Reference Send feedback appengine-web.xml reference Stay organized with collections Save and categorize content based on your preferences.
- App Engine uses a "precompilation" process with the Java bytecode of an app to enhance the performance of the app in the Java runtime environment.

### "Package com.google.appengine.api (5.0.0) \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api)
- Source ID: `site-docs-reference`
- Final score: 220
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Reference Send feedback Package com.google.appengine.api (5.0.0) Stay organized with collections Save and categorize content based on your preferences.
- When a namespace aware class (e.g., com.google.appengine.api.datastore.Key , com.google.appengine.api.datastore.Query and com.google.appengine.api.memcache.MemcacheService ) is constructed, it determines which namespace will be used by calling NamespaceManager#get() if it is otherwise unspecified.
- The Task Queue com.google.appengine.api.taskqueue.Queue#add methods will forward the NamespaceManager settings into the task being added causing the added task to be executed with the same current namespace as the task creator.
- ThreadManager ThreadManager exposes a ThreadFactory that allows App Engine applications to spawn new threads.

