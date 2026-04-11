---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:15:56.169Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "Task Queue queue depth calculation scope"
feature_slug: "task-queue-queue-depth-calculation-scope"
latest_feature_date: "2015-11-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/taskqueue"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml"
keywords:
  - "calculation"
  - "depth"
  - "stops"
  - "scope"
  - "queue"
  - "task"
  - "engine"
  - "app"
---

# Task Queue queue depth calculation scope

Product: App Engine standard environment Python
Coverage: LOW

## Step 02 Summary

App Engine stops calculating and storing queue depth for non-existent queues, queues marked for deletion, and during queue table outages.

## Extended Definition

App Engine stops calculating and storing queue depth for non-existent queues, queues marked for deletion, and during queue table outages.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/taskqueue](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/taskqueue)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)

## Supporting Pages

### "Package google.golang.org/appengine/v2/taskqueue (v2.0.6) \_|\_ App Engine\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/taskqueue](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/taskqueue)
- Source ID: `site-docs-reference`
- Final score: 210
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Reference Send feedback Package google.golang.org/appengine/v2/taskqueue (v2.0.6) Stay organized with collections Save and categorize content based on your preferences.
- See https://cloud.google.com/appengine/docs/standard/go/taskqueue/push/creating-handlers#reading request headers for a description of the fields. func ParseRequestHeaders func ParseRequestHeaders ( h http .
- Package taskqueue provides a client for App Engine's taskqueue service.
- If a given task is badly formed or could not be added, an appengine.MultiError is returned. func Lease func Lease ( c context .

### "Package com.google.appengine.api (5.0.0) \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api)
- Source ID: `site-docs-reference`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- The Task Queue com.google.appengine.api.taskqueue.Queue#add methods will forward the NamespaceManager settings into the task being added causing the added task to be executed with the same current namespace as the task creator.
- When a namespace aware class (e.g., com.google.appengine.api.datastore.Key , com.google.appengine.api.datastore.Query and com.google.appengine.api.memcache.MemcacheService ) is constructed, it determines which namespace will be used by calling NamespaceManager#get() if it is otherwise unspecified.
- Home Documentation Application hosting App Engine Standard environment Reference Send feedback Package com.google.appengine.api (5.0.0) Stay organized with collections Save and categorize content based on your preferences.
- The "current namespace" is the string that is returned by #get() and used by a number of APIs including Datatore, Memcache and Task Queue.

### "appengine-web.xml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- Source ID: `site-docs-reference`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- It's possible to reduce request latency by configuring your application to asynchronously write HTTP session data to the Datastore: <async-session-persistence enabled="true" /> With async session persistence turned on, App Engine will submit a Task Queue task to write session data to the Datastore before writing the data to memcache.
- If your application interacts with Datastore or Task Queues operations, set up monitoring to monitor performance and behavior impacts after enabling this feature. <system-properties> <property name="appengine.use.httpconnector" value="true"/> </system-properties> Optional.
- You will need to test your application and expected traffic volume to determine the ideal number of instances to keep in reserve. <min-pending-latency> The minimum amount of time in seconds that App Engine should allow a request to wait in the pending queue before starting a new instance to handle it.
- However, you won't be charged for more instances than the maximum number you've specified. <max-pending-latency> The maximum amount of time that App Engine should allow a request to wait in the pending queue before starting additional instances to handle requests so that pending latency is reduced.

