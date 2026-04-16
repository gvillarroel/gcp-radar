---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:57:08.291Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "Task Queue queue depth calculation scope"
feature_slug: "task-queue-queue-depth-calculation-scope"
latest_feature_date: "2015-11-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled"
keywords:
  - "task"
  - "queue"
  - "depth"
  - "calculation"
  - "scope"
  - "app"
  - "engine"
  - "stops"
---

# Task Queue queue depth calculation scope

Product: App Engine standard environment Python
Coverage: MEDIUM

## Step 02 Summary

App Engine stops calculating and storing queue depth for non-existent queues, queues marked for deletion, and during queue table outages.

## Extended Definition

App Engine stops calculating and storing queue depth for non-existent queues, queues marked for deletion, and during queue table outages.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks](https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks)
- [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)

## Supporting Pages

### "Run asynchronous tasks \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks](https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks)
- Source ID: `site-docs-reference-required-2`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create App Engine tasks in the form of an HTTP request and then place them in Cloud Tasks queues, see Create App Engine tasks .
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Run asynchronous tasks Stay organized with collections Save and categorize content based on your preferences.
- To run asynchronous tasks, you can: Create Cloud Tasks queues, see Create Cloud Tasks queues .
- You can use the Cloud Tasks client library to run tasks in App Engine.

### "How instances are managed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- Source ID: `site-docs-reference-required-2`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- This table compares the performance features of the three scaling types: Feature Automatic scaling Basic scaling Manual scaling Request timeout 10 minutes for HTTP requests and task queue tasks.
- Scaling and batches of requests If you are sending batches of requests to your services, for example, to a task queue for processing, a large number of instances will be created quickly.
- Before the queues become long enough to have a noticeable effect on your app's latency, App Engine automatically creates one or more new instances to handle the increasing load.
- 24 hours for HTTP requests and task queue tasks.

### "How requests are handled \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- Source ID: `site-docs-reference-required-2`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- App Engine pending queue prioritization During periods of heavy traffic, App Engine might place requests in a pending queue while waiting for an available instance with the following prioritization: App Engine prioritizes other queued requests over pending queued requests from Task queue .
- Requests from App Engine Cloud Tasks also share this pending queue priority behavior for compatibility reasons.
- Within the pending queue, App Engine treats requests from HTTP target Cloud Tasks as regular HTTP traffic.
- When a service receives standard HTTP traffic at high volume while also serving Task queue or Cloud Tasks traffic at much lower volume, there is a disproportionate impact on the latency of the Task queue or the Cloud Tasks traffic.

