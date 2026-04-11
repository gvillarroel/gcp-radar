---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:15:56.132Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "App Engine standard environment regional expansion to us-west4"
feature_slug: "app-engine-standard-environment-regional-expansion-to-us-west4"
latest_feature_date: "2020-04-20"
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
  - "us"
  - "standard"
  - "engine"
  - "app"
  - "to"
---

# App Engine standard environment regional expansion to us-west4

Product: App Engine standard environment Python
Coverage: LOW

## Step 02 Summary

App Engine standard environment became available in the us-west4 (Las Vegas, NV) region.

## Extended Definition

App Engine standard environment became available in the us-west4 (Las Vegas, NV) region.

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
- Final score: 252
- Re-rank relevance: N/A

Evidence snippets:
- Deploy your web service on App Engine In your go-app directory where your app.yaml file is located, deploy your web service to App Engine using the following command: gcloud app deploy To launch your browser and view your web service at https:// PROJECT ID .
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Build a Go app on App Engine Stay organized with collections Save and categorize content based on your preferences.
- When your app is running on App Engine, the PORT environment variable is set for you, but when testing your app locally, you can set PORT to any preferred value.
- For a deeper dive into how App Engine works, see the Go Runtime Environment .

### "appengine-web.xml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- Source ID: `site-docs-reference`
- Final score: 250
- Re-rank relevance: N/A

Evidence snippets:
- If you want to disallow the use of HTTPS for the application, put the following in the appengine-web.xml file: <ssl-enabled>false</ssl-enabled> There is no way to disallow HTTPS for some URL paths and not others in the Java runtime environment. <static-error-handlers> Optional.
- App Engine uses a "precompilation" process with the Java bytecode of an app to enhance the performance of the app in the Java runtime environment.
- By default, the generated entrypoint for a F4 instance class (memory settings are calculated from the instance class) is equivalent to the following configuration: <appengine-web-app xmlns="http://appengine.google.com/ns/1.0"> <entrypoint> java -showversion -Xms32M -Xmx819M -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:+PrintCommandLineFlags --add-opens java.base/java.lang=ALL-UNNAMED --add-opens java.base/java.nio.charset=ALL-UNNAMED --add-opens java.logging/java.util.logging=ALL-UNNAMED --add-opens java.base/java.util.concurrent=ALL-UNNAMED -Dclasspath.runtimebase=/base/java runtime -Djava.class.path=/base/java runtime/runtime-main.jar -Djava.library.path=/base/java runtime: com/google/apphosting/runtime/JavaRuntimeMainWithDefaults --fixed application path=/workspace /base/java runtime </entrypoint> </appengine-web-app> You can modify the configuration to add extra JVM process flags or define your own process to boot.
- The following example demonstrates how to designate all png files as static files (except those in the data/ directory and all of its subdirectories): < static - files > < include path = "/ .png" / > < exclude path = "/data/ .png" / > < / static - files > You can also set HTTP headers to use when responding to requests to these static resources. < static - files > < include path = "/my static-files" > < http - header name = "Access-Control-Allow-Origin" value = "http://example.org" / > < / include > < / static - files > Note: If the path string doesn't start with a slash, then the HTTP headers, if any, work on App Engine but do not work on the Development Server.

### "Package com.google.appengine.api (5.0.0) \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api)
- Source ID: `site-docs-reference`
- Final score: 236
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When a namespace aware class (e.g., com.google.appengine.api.datastore.Key , com.google.appengine.api.datastore.Query and com.google.appengine.api.memcache.MemcacheService ) is constructed, it determines which namespace will be used by calling NamespaceManager#get() if it is otherwise unspecified.
- The Task Queue com.google.appengine.api.taskqueue.Queue#add methods will forward the NamespaceManager settings into the task being added causing the added task to be executed with the same current namespace as the task creator.
- Home Documentation Application hosting App Engine Standard environment Reference Send feedback Package com.google.appengine.api (5.0.0) Stay organized with collections Save and categorize content based on your preferences.
- Classes LifecycleManager NamespaceManager Provides functions for manipulating the current namespace used for App Engine APIs.

