---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:44:58.722Z"
product_name: "App Engine flexible environment PHP"
product_slug: "app-engine-flexible-environment-php"
feature_name: "Cloud Tasks generally available"
feature_slug: "cloud-tasks-generally-available"
latest_feature_date: "2019-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks"
keywords:
  - "asynchronous background tasks"
  - "Task Queues"
  - "Cloud Tasks queue"
  - "Cloud Task API"
  - "Cloud Tasks API"
  - "CreateTask"
  - "Cloud Tasks"
---

# Cloud Tasks generally available

Product: App Engine flexible environment PHP
Coverage: MEDIUM

## Step 02 Summary

Cloud Tasks became generally available for running asynchronous background work outside user requests.

## Extended Definition

In the App Engine flexible environment, asynchronous background work can be implemented by creating App Engine tasks as HTTP requests and placing those tasks in Cloud Tasks queues. The same documentation also states that the Cloud Tasks client library can be used to run tasks from App Engine.

## Evidence Summary

The cited App Engine flexible documentation page confirms task queueing patterns for asynchronous work using Cloud Tasks and notes client-library support, but it does not explicitly state a GA announcement or date.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks](https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks)

## Supporting Pages

### "Run asynchronous tasks \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks](https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks)
- Source ID: `site-docs-root`
- Final score: 39
- Re-rank relevance: N/A

Evidence snippets:
- Create App Engine tasks in the form of an HTTP request and then place them in Cloud Tasks queues, see Create App Engine tasks .
- To run asynchronous tasks, you can: Create Cloud Tasks queues, see Create Cloud Tasks queues .
- For a more detailed overview, see Understand Cloud Tasks in the Cloud Tasks documentation.
- You can use the Cloud Tasks client library to run tasks in App Engine.

