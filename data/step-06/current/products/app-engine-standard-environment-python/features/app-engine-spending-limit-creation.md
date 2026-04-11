---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:15:56.134Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "App Engine spending limit creation"
feature_slug: "app-engine-spending-limit-creation"
latest_feature_date: "2020-02-06"
deprecation_date: "2020-02-06"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/go/building-app"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/taskqueue"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml"
keywords:
  - "spending"
  - "limits"
  - "creation"
  - "creating"
  - "limit"
  - "new"
  - "engine"
  - "app"
---

# App Engine spending limit creation

Product: App Engine standard environment Python
Coverage: LOW

## Step 02 Summary

Creating new spending limits for App Engine projects was deprecated, while existing limits continue to apply; deprecated on 2020-02-06.

## Extended Definition

Creating new spending limits for App Engine projects was deprecated, while existing limits continue to apply; deprecated on 2020-02-06.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app)
- [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/taskqueue](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/taskqueue)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)

## Supporting Pages

### "Build a Go app on App Engine \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Create a new folder called go-app for your Go service: mkdir go-app In your go-app/ folder, create a file called app.yaml , and add the following contents: runtime : go126 # or another supported version This is the simplest configuration for an App Engine app.
- To confirm service creation and version deployment: View your App Engine services in the Google Cloud console: View services You should see one service listed, named default .
- Deploy your web service on App Engine In your go-app directory where your app.yaml file is located, deploy your web service to App Engine using the following command: gcloud app deploy To launch your browser and view your web service at https:// PROJECT ID .
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Build a Go app on App Engine Stay organized with collections Save and categorize content based on your preferences.

### "Package google.golang.org/appengine/v2/taskqueue (v2.0.6) \_|\_ App Engine\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/taskqueue](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/taskqueue)
- Source ID: `site-docs-reference`
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- See https://cloud.google.com/appengine/docs/standard/go/taskqueue/push/creating-handlers#reading request headers for a description of the fields. func ParseRequestHeaders func ParseRequestHeaders ( h http .
- Home Documentation Application hosting App Engine Standard environment Reference Send feedback Package google.golang.org/appengine/v2/taskqueue (v2.0.6) Stay organized with collections Save and categorize content based on your preferences.
- RetryLimit int32 // Maximum time allowed since the task's first try before the task fails permanently and is deleted (only for push tasks). // If RetryLimit is also set, both limits must be exceeded for the task to fail permanently.
- RetryOptions type RetryOptions struct { // Number of tries/leases after which the task fails permanently and is deleted. // If AgeLimit is also set, both limits must be exceeded for the task to fail permanently.

### "appengine-web.xml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- Source ID: `site-docs-reference`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- You will need to test your application and expected traffic volume to determine the ideal number of instances to keep in reserve. <min-pending-latency> The minimum amount of time in seconds that App Engine should allow a request to wait in the pending queue before starting a new instance to handle it.
- A low maximum means App Engine will start new instances sooner for pending requests, improving performance but raising running costs.
- By default, the generated entrypoint for a F4 instance class (memory settings are calculated from the instance class) is equivalent to the following configuration: <appengine-web-app xmlns="http://appengine.google.com/ns/1.0"> <entrypoint> java -showversion -Xms32M -Xmx819M -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:+PrintCommandLineFlags --add-opens java.base/java.lang=ALL-UNNAMED --add-opens java.base/java.nio.charset=ALL-UNNAMED --add-opens java.logging/java.util.logging=ALL-UNNAMED --add-opens java.base/java.util.concurrent=ALL-UNNAMED -Dclasspath.runtimebase=/base/java runtime -Djava.class.path=/base/java runtime/runtime-main.jar -Djava.library.path=/base/java runtime: com/google/apphosting/runtime/JavaRuntimeMainWithDefaults --fixed application path=/workspace /base/java runtime </entrypoint> </appengine-web-app> You can modify the configuration to add extra JVM process flags or define your own process to boot.
- The following example demonstrates how to designate all png files as static files (except those in the data/ directory and all of its subdirectories): < static - files > < include path = "/ .png" / > < exclude path = "/data/ .png" / > < / static - files > You can also set HTTP headers to use when responding to requests to these static resources. < static - files > < include path = "/my static-files" > < http - header name = "Access-Control-Allow-Origin" value = "http://example.org" / > < / include > < / static - files > Note: If the path string doesn't start with a slash, then the HTTP headers, if any, work on App Engine but do not work on the Development Server.

