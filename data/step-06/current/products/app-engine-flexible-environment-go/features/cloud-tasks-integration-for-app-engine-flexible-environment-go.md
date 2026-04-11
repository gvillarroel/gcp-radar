---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:40:06.739Z"
product_name: "App Engine flexible environment Go"
product_slug: "app-engine-flexible-environment-go"
feature_name: "Cloud Tasks integration for App Engine flexible environment Go"
feature_slug: "cloud-tasks-integration-for-app-engine-flexible-environment-go"
latest_feature_date: "2019-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks"
keywords:
  - "asynchronous work outside request"
  - "background task processing"
  - "App Engine Flex Go + Cloud Tasks"
  - "Go app background tasks"
  - "App Engine flexible and Cloud Tasks"
  - "Cloud Tasks API"
  - "Cloud Tasks"
---

# Cloud Tasks integration for App Engine flexible environment Go

Product: App Engine flexible environment Go
Coverage: MEDIUM

## Step 02 Summary

Cloud Tasks is generally available, enabling Go applications on App Engine flexible environment to run asynchronous background work outside user requests.

## Extended Definition

In App Engine flexible environment, Cloud Tasks integration allows asynchronous work by creating work as HTTP request tasks and placing those tasks into Cloud Tasks queues so they can be executed outside the scope of a user request. The App Engine documentation also states that you can use the Cloud Tasks client library to run tasks in App Engine, and points to the Cloud Tasks overview for operational details.

## Evidence Summary

This page explains the App Engine flexible async-task flow (HTTP-based task creation and queueing in Cloud Tasks) and the supported mechanism for invoking tasks via the Cloud Tasks client library.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks](https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks)

## Supporting Pages

### "Run asynchronous tasks \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks](https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Create App Engine tasks in the form of an HTTP request and then place them in Cloud Tasks queues, see Create App Engine tasks .
- To run asynchronous tasks, you can: Create Cloud Tasks queues, see Create Cloud Tasks queues .
- For a more detailed overview, see Understand Cloud Tasks in the Cloud Tasks documentation.
- You can use the Cloud Tasks client library to run tasks in App Engine.

