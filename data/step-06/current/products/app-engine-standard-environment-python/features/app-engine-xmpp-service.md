---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:15:56.157Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "App Engine XMPP service"
feature_slug: "app-engine-xmpp-service"
latest_feature_date: "2016-10-27"
deprecation_date: "October 31, 2017"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/go/building-app"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/building-app"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api"
keywords:
  - "xmpp"
  - "deprecated"
  - "engine"
  - "was"
  - "and"
  - "is"
  - "the"
  - "app"
---

# App Engine XMPP service

Product: App Engine standard environment Python
Coverage: LOW

## Step 02 Summary

The App Engine XMPP service was deprecated and is scheduled for shutdown; deprecated on October 31, 2017.

## Extended Definition

The App Engine XMPP service was deprecated and is scheduled for shutdown; deprecated on October 31, 2017.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/building-app](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/building-app)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api)

## Supporting Pages

### "Build a Go app on App Engine \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app)
- Source ID: `site-docs-root`
- Final score: 234
- Re-rank relevance: N/A

Evidence snippets:
- Create a new folder called go-app for your Go service: mkdir go-app In your go-app/ folder, create a file called app.yaml , and add the following contents: runtime : go126 # or another supported version This is the simplest configuration for an App Engine app.
- Deploy your web service on App Engine In your go-app directory where your app.yaml file is located, deploy your web service to App Engine using the following command: gcloud app deploy To launch your browser and view your web service at https:// PROJECT ID .
- To confirm service creation and version deployment: View your App Engine services in the Google Cloud console: View services You should see one service listed, named default .
- When your app is running on App Engine, the PORT environment variable is set for you, but when testing your app locally, you can set PORT to any preferred value.

### "Build a Java app on App Engine \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/building-app](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/building-app)
- Source ID: `site-docs-root`
- Final score: 234
- Re-rank relevance: N/A

Evidence snippets:
- The tasks on this page walk you through the basics of App Engine, guiding you through the development process.
- This guide helps you get started with App Engine and become familiar with deploying and managing an app.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Build a Java app on App Engine Stay organized with collections Save and categorize content based on your preferences.

### "Package com.google.appengine.api (5.0.0) \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api)
- Source ID: `site-docs-reference`
- Final score: 230
- Re-rank relevance: N/A

Evidence snippets:
- When a namespace aware class (e.g., com.google.appengine.api.datastore.Key , com.google.appengine.api.datastore.Query and com.google.appengine.api.memcache.MemcacheService ) is constructed, it determines which namespace will be used by calling NamespaceManager#get() if it is otherwise unspecified.
- Classes LifecycleManager NamespaceManager Provides functions for manipulating the current namespace used for App Engine APIs.
- See Also: Multitenancy and the Namespaces Java API in the Google App Engine Developer's Guide .
- Example: NamespaceManager . #set ("a-namespace"); MemcacheService memcache = MemcacheServiceFactory.getMemcacheService(); // Store record in namespace "a-namespace" memcache.put("key1", "value1"); NamespaceManager . #set ("other-namespace"); // Store record in namespace "other-namespace" memcache.put("key2", "value2"); MemcacheService boundMemcache = MemcacheServiceFactory.getMemcacheService("specific-namespace"); NamespaceManager . #set ("whatever-namespace"); // The record is still stored in namespace "specific-namespace". boundMemcache.put("key3", "value3"); MemcacheService memcache (in the above example) uses the current namespace and key1 will be stored in namespace "a-namespace" , while key2 is stored in namespace "other-namespace" .

