---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:27.575Z"
product_name: "App Engine standard environment PHP"
product_slug: "app-engine-standard-environment-php"
feature_name: "Task Queue queue depth calculation for inactive queues"
feature_slug: "task-queue-queue-depth-calculation-for-inactive-queues"
latest_feature_date: "2015-11-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/taskqueue"
  - "https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml"
keywords:
  - "calculation"
  - "inactive"
  - "depth"
  - "queues"
  - "queue"
  - "task"
  - "no"
  - "for"
---

# Task Queue queue depth calculation for inactive queues

Product: App Engine standard environment PHP
Coverage: LOW

## Step 02 Summary

Task Queue no longer calculates or stores queue depth for non-existent queues, queues marked for deletion, or during queue table outages.

## Extended Definition

Task Queue no longer calculates or stores queue depth for non-existent queues, queues marked for deletion, or during queue table outages.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/taskqueue](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/taskqueue)
- [https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks](https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)

## Supporting Pages

### "Package google.golang.org/appengine/v2/taskqueue (v2.0.6) \_|\_ App Engine\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/taskqueue](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/taskqueue)
- Source ID: `site-docs-reference`
- Final score: 154
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Time // zero if there are no pending tasks Executed1Minute int // tasks executed in the last minute InFlight int // tasks executing now EnforcedRate float64 // requests per second } QueueStatistics represents statistics about a single task queue. func QueueStats func QueueStats ( c context .
- See https://cloud.google.com/appengine/docs/standard/go/taskqueue/push/creating-handlers#reading request headers for a description of the fields. func ParseRequestHeaders func ParseRequestHeaders ( h http .
- Task type Task struct { // Path is the worker URL for the task. // If unset, it will default to / ah/queue/ A Task represents a task to be executed. func Add func Add ( c context .
- If a given task is badly formed or could not be added, an appengine.MultiError is returned. func Lease func Lease ( c context .

### "Run asynchronous tasks \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks](https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks)
- Source ID: `site-docs-root`
- Final score: 122
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create App Engine tasks in the form of an HTTP request and then place them in Cloud Tasks queues, see Create App Engine tasks .
- To run asynchronous tasks, you can: Create Cloud Tasks queues, see Create Cloud Tasks queues .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Run asynchronous tasks Stay organized with collections Save and categorize content based on your preferences.

### "appengine-web.xml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- Source ID: `site-docs-reference`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- It's possible to reduce request latency by configuring your application to asynchronously write HTTP session data to the Datastore: <async-session-persistence enabled="true" /> With async session persistence turned on, App Engine will submit a Task Queue task to write session data to the Datastore before writing the data to memcache.
- If your application interacts with Datastore or Task Queues operations, set up monitoring to monitor performance and behavior impacts after enabling this feature. <system-properties> <property name="appengine.use.httpconnector" value="true"/> </system-properties> Optional.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- Example <appengine-web-app xmlns="http://appengine.google.com/ns/1.0"> <application>simple-app</application> <module>default</module> <version>uno</version> <instance-class>B8</instance-class> <manual-scaling> <instances>5</instances> </manual-scaling> </appengine-web-app> Staging elements Much of the work done during a deployment occurs locally in a preparation step called staging , where JAR files are assembled, JSPs are compiled, and so forth.

