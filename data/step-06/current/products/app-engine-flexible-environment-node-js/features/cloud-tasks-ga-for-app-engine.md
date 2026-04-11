---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T21:05:36.395Z"
product_name: "App Engine flexible environment Node.js"
product_slug: "app-engine-flexible-environment-node-js"
feature_name: "Cloud Tasks GA for App Engine"
feature_slug: "cloud-tasks-ga-for-app-engine"
latest_feature_date: "2019-04-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/quotas"
  - "https://docs.cloud.google.com/appengine/docs/flexible/nodejs/release-notes"
keywords:
  - "asynchronous background tasks"
  - "background task execution"
  - "Cloud Tasks integration"
  - "App Engine task queue"
  - "task queue"
  - "GA Cloud Tasks"
  - "Cloud Tasks on App Engine"
  - "App Engine Cloud Tasks"
---

# Cloud Tasks GA for App Engine

Product: App Engine flexible environment Node.js
Coverage: LOW

## Step 02 Summary

Cloud Tasks is generally available on App Engine, enabling asynchronous background task execution.

## Extended Definition

Cloud Tasks is generally available on App Engine, enabling asynchronous background task execution.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/quotas](https://docs.cloud.google.com/appengine/docs/flexible/quotas)
- [https://docs.cloud.google.com/appengine/docs/flexible/nodejs/release-notes](https://docs.cloud.google.com/appengine/docs/flexible/nodejs/release-notes)

## Supporting Pages

### "Quotas and limits \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/quotas](https://docs.cloud.google.com/appengine/docs/flexible/quotas)
- Source ID: `site-docs-reference-2`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- The following limits apply to task queues according to their type: Push Queue Limits Maximum task size 100KB Queue execution rate 500 task invocations per second per queue Maximum countdown/ETA for a task 30 days from the current date and time Maximum number of tasks that can be added in a batch 100 tasks Maximum number of tasks that can be added in a transaction 5 tasks Default maximum number of task queues 100 queues.
- Task Queue When a task executes, its associated requests count toward the application request quotas These limits apply to all task queues: Resource Daily limit Maximum rate Task Queue management calls (using the Google Cloud console) 10,000 n/a Resource Default limit Maximum number of queues (includes both push and pull queues but not the default queue) 100 queues.

### "App Engine flexible environment for Node.js release notes \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/nodejs/release-notes](https://docs.cloud.google.com/appengine/docs/flexible/nodejs/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 26
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- April 11, 2017 Feature Added information about upgrading from the App Engine Task Queue API in the compat runtimes to using Cloud Tasks in the flexible environment and added information for how to verify requests from the Task Queue API.
- For other Cloud Scheduler jobs and Cloud Tasks queues (including App Engine Task Queues), requests sent to the App Engine flexible environment now only come from 0.1.0.2 .

