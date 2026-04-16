---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:34:18.715Z"
product_name: "App Engine standard environment Node.js"
product_slug: "app-engine-standard-environment-node-js"
feature_name: "Show in context for Managed VM application logs"
feature_slug: "show-in-context-for-managed-vm-application-logs"
latest_feature_date: "2015-08-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed"
  - "https://docs.cloud.google.com/appengine/docs/an-overview-of-app-engine"
  - "https://docs.cloud.google.com/appengine/docs/standard/an-overview-of-app-engine"
keywords:
  - "show"
  - "context"
  - "managed"
  - "vm"
  - "application"
  - "logs"
  - "now"
  - "menu"
---

# Show in context for Managed VM application logs

Product: App Engine standard environment Node.js
Coverage: MEDIUM

## Step 02 Summary

Managed VM application logs now support a show in context menu using thread_id or request_id for log sorting.

## Extended Definition

Managed VM application logs now support a show in context menu using thread_id or request_id for log sorting.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- [https://docs.cloud.google.com/appengine/docs/an-overview-of-app-engine](https://docs.cloud.google.com/appengine/docs/an-overview-of-app-engine)
- [https://docs.cloud.google.com/appengine/docs/standard/an-overview-of-app-engine](https://docs.cloud.google.com/appengine/docs/standard/an-overview-of-app-engine)

## Supporting Pages

### "How instances are managed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- Source ID: `site-docs-reference`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback How instances are managed Stay organized with collections Save and categorize content based on your preferences.
- Setting an appropriate number of idle instances for your application based on request volume allows your application to serve every request with little latency, unless you are experiencing abnormally high request volume.
- Scaling dynamic instances App Engine applications that use basic or automatic scaling are powered by any number of dynamic instances at a given time, depending on the volume of incoming requests.
- Loading requests When App Engine creates a new instance for your application, the instance must first load any libraries and resources required to handle the request.

### An overview of App Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/an-overview-of-app-engine](https://docs.cloud.google.com/appengine/docs/an-overview-of-app-engine)
- Source ID: `site-docs-reference`
- Final score: 74
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- OK App Engine is one of the fully managed, serverless platforms for developing and hosting web applications at scale.
- For details about your app's logs, see " Writing Application Logs " ( standard flexible ) .
- Home Documentation Application hosting App Engine Guides Send feedback An overview of App Engine Stay organized with collections Save and categorize content based on your preferences.
- Each App Engine application includes at least one service, the default service, which can hold many versions, depending on your app's billing status.

### An overview of App Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/standard/an-overview-of-app-engine](https://docs.cloud.google.com/appengine/docs/standard/an-overview-of-app-engine)
- Source ID: `site-docs-reference-required-5`
- Final score: 74
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- OK App Engine is one of the fully managed, serverless platforms for developing and hosting web applications at scale.
- For details about your app's logs, see " Writing Application Logs " ( standard flexible ) .
- Home Documentation Application hosting App Engine Guides Send feedback An overview of App Engine Stay organized with collections Save and categorize content based on your preferences.
- Each App Engine application includes at least one service, the default service, which can hold many versions, depending on your app's billing status.

