---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:16:06.778Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "Cloud Tasks"
feature_slug: "cloud-tasks"
latest_feature_date: "2019-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://cloud.google.com/appengine/docs/standard/how-requests-are-handled"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled"
  - "https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks"
keywords:
  - "asynchronous"
  - "runs"
  - "scope"
  - "user"
  - "outside"
  - "tasks"
  - "requests"
---

# Cloud Tasks

Product: App Engine standard environment Python
Coverage: MEDIUM

## Step 02 Summary

Cloud Tasks runs asynchronous tasks outside the scope of user requests.

## Extended Definition

Cloud Tasks runs asynchronous tasks outside the scope of user requests.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- [https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks](https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks)

## Supporting Pages

### "How requests are handled \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- Source ID: `site-docs-reference`
- Final score: 167
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- With Cloud Tasks, HTTP requests are long-lived and return a response only after any asynchronous work ends.
- Any request can be routed to any instance, so consecutive requests from the same user are not necessarily sent to the same instance.
- App Engine runs multiple instances of your application, and each instance has its own web server for handling requests.
- You should also consider serving latency sensitive requests from Cloud Tasks with a dedicated major version or service.

### "How requests are handled \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- Source ID: `site-docs-reference-3`
- Final score: 167
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- With Cloud Tasks, HTTP requests are long-lived and return a response only after any asynchronous work ends.
- Any request can be routed to any instance, so consecutive requests from the same user are not necessarily sent to the same instance.
- App Engine runs multiple instances of your application, and each instance has its own web server for handling requests.
- You should also consider serving latency sensitive requests from Cloud Tasks with a dedicated major version or service.

### "Run asynchronous tasks \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks](https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks)
- Source ID: `site-docs-reference`
- Final score: 123
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Run asynchronous tasks Stay organized with collections Save and categorize content based on your preferences.
- To run asynchronous tasks, you can: Create Cloud Tasks queues, see Create Cloud Tasks queues .
- Create App Engine tasks in the form of an HTTP request and then place them in Cloud Tasks queues, see Create App Engine tasks .
- For a more detailed overview, see Understand Cloud Tasks in the Cloud Tasks documentation.

