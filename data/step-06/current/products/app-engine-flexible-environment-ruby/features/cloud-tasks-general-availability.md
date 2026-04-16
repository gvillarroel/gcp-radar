---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:50:31.502Z"
product_name: "App Engine flexible environment Ruby"
product_slug: "app-engine-flexible-environment-ruby"
feature_name: "Cloud Tasks general availability"
feature_slug: "cloud-tasks-general-availability"
latest_feature_date: "2019-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks"
  - "https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled"
  - "https://docs.cloud.google.com/appengine/docs/flexible/quotas"
keywords:
  - "tasks"
  - "availability"
  - "became"
  - "generally"
  - "available"
  - "scheduling"
  - "asynchronous"
  - "background"
---

# Cloud Tasks general availability

Product: App Engine flexible environment Ruby
Coverage: MEDIUM

## Step 02 Summary

Cloud Tasks became generally available for scheduling asynchronous background work outside user request/response cycles.

## Extended Definition

Cloud Tasks became generally available for scheduling asynchronous background work outside user request/response cycles.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks](https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks)
- [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled)
- [https://docs.cloud.google.com/appengine/docs/flexible/quotas](https://docs.cloud.google.com/appengine/docs/flexible/quotas)

## Supporting Pages

### "Run asynchronous tasks \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks](https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks)
- Source ID: `site-docs-reference`
- Final score: 93
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Run asynchronous tasks Stay organized with collections Save and categorize content based on your preferences.
- To run asynchronous tasks, you can: Create Cloud Tasks queues, see Create Cloud Tasks queues .
- Create App Engine tasks in the form of an HTTP request and then place them in Cloud Tasks queues, see Create App Engine tasks .
- For a more detailed overview, see Understand Cloud Tasks in the Cloud Tasks documentation.

### "How requests are handled \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled)
- Source ID: `site-docs-reference`
- Final score: 87
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Avoid performing background work in your app, and review your code to make sure all asynchronous operations finish before you deliver your response.
- Handling asynchronous background work Background work is any work that your app performs for a request after you have delivered your HTTP response.
- With Cloud Tasks, HTTP requests are long-lived and return a response only after any asynchronous work ends.
- Warning: Performing asynchronous background work can result in higher billing.

### "Quotas and limits \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/quotas](https://docs.cloud.google.com/appengine/docs/flexible/quotas)
- Source ID: `site-docs-reference-2`
- Final score: 65
- Re-rank relevance: N/A

Evidence snippets:
- The following limits apply to task queues according to their type: Push Queue Limits Maximum task size 100KB Queue execution rate 500 task invocations per second per queue Maximum countdown/ETA for a task 30 days from the current date and time Maximum number of tasks that can be added in a batch 100 tasks Maximum number of tasks that can be added in a transaction 5 tasks Default maximum number of task queues 100 queues.
- Resource or API call Description System Limit Shared Centi Memcache Compute Units Per Region Per Minute For each project per region and minute, the available centi-MCUs, which are 1/100ths of an Memcache Compute Unit .
- When a resource is depleted When an application consumes all of an allocated resource, the resource becomes unavailable until the quota is replenished.
- In the Go API, the appengine.IsOverQuota function reports whether an error represents an API call failure due to insufficient available quota.

