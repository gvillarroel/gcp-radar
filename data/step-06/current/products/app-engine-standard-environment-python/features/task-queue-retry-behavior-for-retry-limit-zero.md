---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:15:56.177Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "Task queue retry behavior for retry_limit zero"
feature_slug: "task-queue-retry-behavior-for-retry-limit-zero"
latest_feature_date: "2015-08-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/taskqueue"
  - "https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled"
keywords:
  - "retry"
  - "zero"
  - "behavior"
  - "queue"
  - "limit"
  - "tasks"
  - "task"
  - "for"
---

# Task queue retry behavior for retry_limit zero

Product: App Engine standard environment Python
Coverage: LOW

## Step 02 Summary

Queue tasks configured with a retry_limit of zero are no longer retried when they fail.

## Extended Definition

Queue tasks configured with a retry_limit of zero are no longer retried when they fail.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/taskqueue](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/taskqueue)
- [https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks](https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)

## Supporting Pages

### "Package google.golang.org/appengine/v2/taskqueue (v2.0.6) \_|\_ App Engine\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/taskqueue](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/taskqueue)
- Source ID: `site-docs-reference`
- Final score: 190
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Time // zero if there are no pending tasks Executed1Minute int // tasks executed in the last minute InFlight int // tasks executing now EnforcedRate float64 // requests per second } QueueStatistics represents statistics about a single task queue. func QueueStats func QueueStats ( c context .
- RetryLimit int32 // Maximum time allowed since the task's first try before the task fails permanently and is deleted (only for push tasks). // If RetryLimit is also set, both limits must be exceeded for the task to fail permanently.
- RetryOptions type RetryOptions struct { // Number of tries/leases after which the task fails permanently and is deleted. // If AgeLimit is also set, both limits must be exceeded for the task to fail permanently.
- See https://cloud.google.com/appengine/docs/standard/go/taskqueue/push/creating-handlers#reading request headers for a description of the fields. func ParseRequestHeaders func ParseRequestHeaders ( h http .

### "Run asynchronous tasks \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks](https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create App Engine tasks in the form of an HTTP request and then place them in Cloud Tasks queues, see Create App Engine tasks .
- To run asynchronous tasks, you can: Create Cloud Tasks queues, see Create Cloud Tasks queues .
- For a more detailed overview, see Understand Cloud Tasks in the Cloud Tasks documentation.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Run asynchronous tasks Stay organized with collections Save and categorize content based on your preferences.

### "How requests are handled \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- Source ID: `site-docs-root`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- Requests from App Engine Cloud Tasks also share this pending queue priority behavior for compatibility reasons.
- App Engine pending queue prioritization During periods of heavy traffic, App Engine might place requests in a pending queue while waiting for an available instance with the following prioritization: App Engine prioritizes other queued requests over pending queued requests from Task queue .
- When a service receives standard HTTP traffic at high volume while also serving Task queue or Cloud Tasks traffic at much lower volume, there is a disproportionate impact on the latency of the Task queue or the Cloud Tasks traffic.
- Within the pending queue, App Engine treats requests from HTTP target Cloud Tasks as regular HTTP traffic.

