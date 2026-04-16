---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:09:07.333Z"
product_name: "App Engine standard environment PHP"
product_slug: "app-engine-standard-environment-php"
feature_name: "Task Queue empty-payload push request content-length header"
feature_slug: "task-queue-empty-payload-push-request-content-length-header"
latest_feature_date: "2015-11-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed"
  - "https://docs.cloud.google.com/appengine/docs/quotas"
keywords:
  - "task"
  - "queue"
  - "empty"
  - "payload"
  - "push"
  - "request"
  - "content"
  - "length"
---

# Task Queue empty-payload push request content-length header

Product: App Engine standard environment PHP
Coverage: MEDIUM

## Step 02 Summary

Push requests for Task Queue tasks with no payload now include a Content-Length header set to 0.

## Extended Definition

Push requests for Task Queue tasks with no payload now include a Content-Length header set to 0.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)

## Supporting Pages

### "How requests are handled \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- Source ID: `site-docs-reference`
- Final score: 144
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- App Engine pending queue prioritization During periods of heavy traffic, App Engine might place requests in a pending queue while waiting for an available instance with the following prioritization: App Engine prioritizes other queued requests over pending queued requests from Task queue .
- Requests from App Engine Cloud Tasks also share this pending queue priority behavior for compatibility reasons.
- Within the pending queue, App Engine treats requests from HTTP target Cloud Tasks as regular HTTP traffic.
- When a service receives standard HTTP traffic at high volume while also serving Task queue or Cloud Tasks traffic at much lower volume, there is a disproportionate impact on the latency of the Task queue or the Cloud Tasks traffic.

### "How instances are managed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This table compares the performance features of the three scaling types: Feature Automatic scaling Basic scaling Manual scaling Request timeout 10 minutes for HTTP requests and task queue tasks.
- Scaling and batches of requests If you are sending batches of requests to your services, for example, to a task queue for processing, a large number of instances will be created quickly.
- 24 hours for HTTP requests and task queue tasks.
- You can: Use the Versions page in the Google Cloud console Use gcloud app versions start and gcloud app versions stop commands Startup Each service instance is created in response to a start request, which is an empty HTTP GET request to / ah/start .

### "Quotas and limits \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- Source ID: `site-docs-reference-4`
- Final score: 108
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Task Queue When a task executes, its associated requests count toward the application request quotas These limits apply to all task queues: Resource Daily limit Maximum rate Task Queue management calls (using the Google Cloud console) 10,000 n/a Resource Default limit Maximum number of queues (includes both push and pull queues but not the default queue) 100 queues.
- The following limits apply to task queues according to their type: Push Queue Limits Maximum task size 100KB Queue execution rate 500 task invocations per second per queue Maximum countdown/ETA for a task 30 days from the current date and time Maximum number of tasks that can be added in a batch 100 tasks Maximum number of tasks that can be added in a transaction 5 tasks Default maximum number of task queues 100 queues.
- The Cloud Quotas system does the following: Monitors your consumption of Google Cloud products and services Restricts your consumption of those resources Provides a way to request changes to the quota value and automate quota adjustments In most cases, when you attempt to consume more of a resource than its quota allows, the system blocks access to the resource, and the task that you're trying to perform fails.
- Resource Daily limit Maximum rate UrlFetch API calls 860,000,000 calls 660,000 calls/minute UrlFetch data sent 4.5 TB 3,600 MB/minute UrlFetch data received 4.5 TB 3,600 MB/minute Networking limits The following networking limits apply to App Engine: Outbound connections per second per instance: 500 (cannot be increased) Outbound DNS resolutions per second per instance: 100 (cannot be increased) Maximum packets per second per instance: 80,000 Maximum bits per second per instance: 100,000,000 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

