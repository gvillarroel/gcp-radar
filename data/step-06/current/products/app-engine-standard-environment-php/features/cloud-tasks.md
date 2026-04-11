---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:27.547Z"
product_name: "App Engine standard environment PHP"
product_slug: "app-engine-standard-environment-php"
feature_name: "Cloud Tasks"
feature_slug: "cloud-tasks"
latest_feature_date: "2019-04-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled"
  - "https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/taskqueue"
keywords:
  - "asynchronous task execution"
  - "execute tasks outside request"
  - "App Engine Cloud Tasks integration"
  - "Cloud Tasks general availability"
  - "task queues"
  - "Cloud Tasks API"
  - "task queue"
  - "Cloud Tasks"
---

# Cloud Tasks

Product: App Engine standard environment PHP
Coverage: LOW

## Step 02 Summary

Cloud Tasks reached general availability, enabling asynchronous task execution outside user requests.

## Extended Definition

Cloud Tasks reached general availability, enabling asynchronous task execution outside user requests.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- [https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks](https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks)
- [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/taskqueue](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/taskqueue)

## Supporting Pages

### "How requests are handled \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- Source ID: `site-docs-root`
- Final score: 34
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When a service receives standard HTTP traffic at high volume while also serving Task queue or Cloud Tasks traffic at much lower volume, there is a disproportionate impact on the latency of the Task queue or the Cloud Tasks traffic.
- App Engine pending queue prioritization During periods of heavy traffic, App Engine might place requests in a pending queue while waiting for an available instance with the following prioritization: App Engine prioritizes other queued requests over pending queued requests from Task queue .
- You should also consider serving latency sensitive requests from Cloud Tasks with a dedicated major version or service.
- Requests from App Engine Cloud Tasks also share this pending queue priority behavior for compatibility reasons.

### "Run asynchronous tasks \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks](https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks)
- Source ID: `site-docs-root`
- Final score: 25
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create App Engine tasks in the form of an HTTP request and then place them in Cloud Tasks queues, see Create App Engine tasks .
- To run asynchronous tasks, you can: Create Cloud Tasks queues, see Create Cloud Tasks queues .
- For a more detailed overview, see Understand Cloud Tasks in the Cloud Tasks documentation.
- You can use the Cloud Tasks client library to run tasks in App Engine.

### "Package google.golang.org/appengine/v2/taskqueue (v2.0.6) \_|\_ App Engine\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/taskqueue](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/taskqueue)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Time // zero if there are no pending tasks Executed1Minute int // tasks executed in the last minute InFlight int // tasks executing now EnforcedRate float64 // requests per second } QueueStatistics represents statistics about a single task queue. func QueueStats func QueueStats ( c context .
- Context , task Task , queueName string ) error Delete deletes a task from a named queue. func DeleteMulti func DeleteMulti ( c context .
- Context , tasks [] Task , queueName string ) ([] Task , error ) AddMulti adds multiple tasks to a named queue.
- Context , tasks [] Task , queueName string ) error DeleteMulti deletes multiple tasks from a named queue.

