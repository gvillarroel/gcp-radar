---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:48:27.791Z"
product_name: "App Engine flexible environment Ruby"
product_slug: "app-engine-flexible-environment-ruby"
feature_name: "Cloud Tasks general availability"
feature_slug: "cloud-tasks-general-availability"
latest_feature_date: "2019-04-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled"
  - "https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks"
keywords:
  - "asynchronous task execution"
  - "deferred request processing"
  - "task queue service"
  - "background work"
  - "task queues"
  - "Cloud Tasks GA"
  - "Cloud Tasks API"
  - "Cloud Tasks"
---

# Cloud Tasks general availability

Product: App Engine flexible environment Ruby
Coverage: LOW

## Step 02 Summary

Cloud Tasks became generally available for scheduling asynchronous background work outside user request/response cycles.

## Extended Definition

Cloud Tasks became generally available for scheduling asynchronous background work outside user request/response cycles.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled)
- [https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks](https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks)

## Supporting Pages

### "How requests are handled \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Avoid performing background work in your app, and review your code to make sure all asynchronous operations finish before you deliver your response.
- Handling asynchronous background work Background work is any work that your app performs for a request after you have delivered your HTTP response.
- With Cloud Tasks, HTTP requests are long-lived and return a response only after any asynchronous work ends.
- Warning: Performing asynchronous background work can result in higher billing.

### "Run asynchronous tasks \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks](https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: WEAK
- Re-rank rationale: It references Cloud Tasks usage in App Engine flexible and links to overview material, but it provides operational guidance rather than GA announcements or lifecycle status details.

Evidence snippets:
- Create App Engine tasks in the form of an HTTP request and then place them in Cloud Tasks queues, see Create App Engine tasks .
- To run asynchronous tasks, you can: Create Cloud Tasks queues, see Create Cloud Tasks queues .
- For a more detailed overview, see Understand Cloud Tasks in the Cloud Tasks documentation.
- You can use the Cloud Tasks client library to run tasks in App Engine.

