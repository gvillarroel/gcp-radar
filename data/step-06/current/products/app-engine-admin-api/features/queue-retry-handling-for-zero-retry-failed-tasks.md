---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:36:38.574Z"
product_name: "App Engine Admin API"
product_slug: "app-engine-admin-api"
feature_name: "Queue retry handling for zero-retry failed tasks"
feature_slug: "queue-retry-handling-for-zero-retry-failed-tasks"
latest_feature_date: "2015-08-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks"
  - "https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1"
  - "https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates"
keywords:
  - "queue"
  - "retry"
  - "handling"
  - "zero"
  - "failed"
  - "tasks"
  - "changed"
  - "task"
---

# Queue retry handling for zero-retry failed tasks

Product: App Engine Admin API
Coverage: MEDIUM

## Step 02 Summary

Changed task queue behavior so failed tasks with retry_limit set to zero are no longer retried.

## Extended Definition

Changed task queue behavior so failed tasks with retry_limit set to zero are no longer retried.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks](https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks)
- [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1)
- [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates)

## Supporting Pages

### "Run asynchronous tasks \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks](https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks)
- Source ID: `site-docs-reference`
- Final score: 123
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create App Engine tasks in the form of an HTTP request and then place them in Cloud Tasks queues, see Create App Engine tasks .
- To run asynchronous tasks, you can: Create Cloud Tasks queues, see Create Cloud Tasks queues .
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Run asynchronous tasks Stay organized with collections Save and categorize content based on your preferences.
- For a more detailed overview, see Understand Cloud Tasks in the Cloud Tasks documentation.

### "Package google.appengine.v1 \_|\_ App Engine Admin API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1)
- Source ID: `site-docs-reference-4`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- For example, an application that handles customer requests might include separate services to handle tasks such as backend data analysis or API requests from mobile devices.
- FAILED RETRYING CAA FORBIDDEN Most recent renewal failed due to an explicit CAA record that does not include one of the in-use CAs (Google CA and Let's Encrypt).
- FAILED RETRYING NOT VISIBLE Most recent renewal failed due to an invalid DNS setup and will be retried.
- FAILED RETRYING CAA CHECKING Most recent renewal failed due to a CAA retrieval failure.

### "REST Resource: apps.authorizedCertificates \_|\_ App Engine Admin API \_\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.authorizedCertificates)
- Source ID: `site-api-reference`
- Final score: 53
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- FAILED RETRYING CAA FORBIDDEN Most recent renewal failed due to an explicit CAA record that does not include one of the in-use CAs (Google CA and Let's Encrypt).
- FAILED RETRYING NOT VISIBLE Most recent renewal failed due to an invalid DNS setup and will be retried.
- FAILED RETRYING CAA CHECKING Most recent renewal failed due to a CAA retrieval failure.
- Renewals will continue to fail until the DNS provider is changed or a CAA record is added for the given domain.

