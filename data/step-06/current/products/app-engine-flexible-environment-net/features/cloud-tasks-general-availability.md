---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:14:55.677Z"
product_name: "App Engine flexible environment .NET"
product_slug: "app-engine-flexible-environment-net"
feature_name: "Cloud Tasks general availability"
feature_slug: "cloud-tasks-general-availability"
latest_feature_date: "2019-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://cloud.google.com/appengine/docs/flexible/create-appengine-tasks"
  - "https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks"
  - "https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled"
keywords:
  - "tasks"
  - "availability"
  - "now"
  - "generally"
  - "available"
  - "scheduling"
  - "asynchronous"
  - "background"
---

# Cloud Tasks general availability

Product: App Engine flexible environment .NET
Coverage: MEDIUM

## Step 02 Summary

Cloud Tasks is now generally available for scheduling asynchronous background work outside user requests.

## Extended Definition

Cloud Tasks is now generally available for scheduling asynchronous background work outside user requests.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://cloud.google.com/appengine/docs/flexible/create-appengine-tasks](https://cloud.google.com/appengine/docs/flexible/create-appengine-tasks)
- [https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks](https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks)
- [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled)

## Supporting Pages

### "Run asynchronous tasks \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks](https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks)
- Source ID: `site-docs-reference`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Run asynchronous tasks Stay organized with collections Save and categorize content based on your preferences.
- To run asynchronous tasks, you can: Create Cloud Tasks queues, see Create Cloud Tasks queues .
- Create App Engine tasks in the form of an HTTP request and then place them in Cloud Tasks queues, see Create App Engine tasks .
- For a more detailed overview, see Understand Cloud Tasks in the Cloud Tasks documentation.

### "Run asynchronous tasks \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://cloud.google.com/appengine/docs/flexible/create-appengine-tasks](https://cloud.google.com/appengine/docs/flexible/create-appengine-tasks)
- Source ID: `site-docs-root`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Run asynchronous tasks Stay organized with collections Save and categorize content based on your preferences.
- To run asynchronous tasks, you can: Create Cloud Tasks queues, see Create Cloud Tasks queues .
- Create App Engine tasks in the form of an HTTP request and then place them in Cloud Tasks queues, see Create App Engine tasks .
- For a more detailed overview, see Understand Cloud Tasks in the Cloud Tasks documentation.

### "How requests are handled \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled)
- Source ID: `site-docs-reference`
- Final score: 75
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Avoid performing background work in your app, and review your code to make sure all asynchronous operations finish before you deliver your response.
- Handling asynchronous background work Background work is any work that your app performs for a request after you have delivered your HTTP response.
- With Cloud Tasks, HTTP requests are long-lived and return a response only after any asynchronous work ends.
- Warning: Performing asynchronous background work can result in higher billing.

