---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:48:27.806Z"
product_name: "App Engine flexible environment Ruby"
product_slug: "app-engine-flexible-environment-ruby"
feature_name: "Task Queue migration guidance to Cloud Tasks for App Engine flexible environment"
feature_slug: "task-queue-migration-guidance-to-cloud-tasks-for-app-engine-flexible-environment"
latest_feature_date: "2017-04-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks"
keywords:
  - "verify Task Queue requests"
  - "migrate task queues"
  - "Task Queue API migration"
  - "Task Queue to Cloud Tasks"
  - "task queue migration"
  - "Task Queue API"
  - "Cloud Tasks migration"
  - "Cloud Tasks"
---

# Task Queue migration guidance to Cloud Tasks for App Engine flexible environment

Product: App Engine flexible environment Ruby
Coverage: MEDIUM

## Step 02 Summary

Documentation was added to help migrate from the App Engine Task Queue API in compat runtimes to Cloud Tasks and to verify Task Queue API requests in the flexible environment.

## Extended Definition

In App Engine flexible environment, the documented guidance defines asynchronous task execution by creating tasks as HTTP requests and enqueueing them in Cloud Tasks queues, then running those tasks in App Engine (including via the Cloud Tasks client library). The documentation points to Cloud Tasks queue creation and overview references as the supporting pattern for implementing these background task workflows.

## Evidence Summary

The cited page provides guidance on running async tasks in App Engine flexible environment using Cloud Tasks (HTTP task creation, queueing, and client library execution), but does not itself provide detailed migration or request-verification instructions.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks](https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks)

## Supporting Pages

### "Run asynchronous tasks \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks](https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks)
- Source ID: `site-docs-root`
- Final score: 38
- Re-rank relevance: MODERATE
- Re-rank rationale: The page describes running asynchronous tasks in App Engine flexible via Cloud Tasks and setting up queues/tasks, which is directly related but does not explicitly document migration steps from the legacy Task Queue API.

Evidence snippets:
- Create App Engine tasks in the form of an HTTP request and then place them in Cloud Tasks queues, see Create App Engine tasks .
- To run asynchronous tasks, you can: Create Cloud Tasks queues, see Create Cloud Tasks queues .
- For a more detailed overview, see Understand Cloud Tasks in the Cloud Tasks documentation.
- You can use the Cloud Tasks client library to run tasks in App Engine.

