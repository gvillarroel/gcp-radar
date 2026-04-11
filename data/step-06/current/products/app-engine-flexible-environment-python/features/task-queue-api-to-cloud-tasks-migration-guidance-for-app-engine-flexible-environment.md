---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:45:54.305Z"
product_name: "App Engine flexible environment Python"
product_slug: "app-engine-flexible-environment-python"
feature_name: "Task Queue API to Cloud Tasks migration guidance for App Engine flexible environment"
feature_slug: "task-queue-api-to-cloud-tasks-migration-guidance-for-app-engine-flexible-environment"
latest_feature_date: "2017-04-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/create-appengine-tasks"
keywords:
  - "migrate from Task Queue API"
  - "Task Queue deprecation path"
  - "Task Queue to Cloud Tasks"
  - "queue migration guidance"
  - "compat runtimes"
  - "Task Queue migration"
  - "Cloud Tasks migration"
  - "Cloud Tasks"
---

# Task Queue API to Cloud Tasks migration guidance for App Engine flexible environment

Product: App Engine flexible environment Python
Coverage: LOW

## Step 02 Summary

Guidance was added for upgrading from the App Engine Task Queue API in compat runtimes to Cloud Tasks in the flexible environment.

## Extended Definition

For App Engine flexible environments, this feature describes running asynchronous work by creating tasks as HTTP requests and placing them into Cloud Tasks queues. It also notes that Cloud Tasks client libraries can be used to run tasks in App Engine. The provided excerpt supports the runtime/tasking pattern but does not explicitly document the legacy Task Queue API deprecation-to-migration path.

## Evidence Summary

The cited documentation confirms Cloud Tasks-based async-task execution guidance (HTTP task creation, queue usage, client library support) in App Engine flexible, but only indirectly indicates migration intent.

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

