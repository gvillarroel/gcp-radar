---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:57:08.292Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "Elastic provisioning based on load metrics"
feature_slug: "elastic-provisioning-based-on-load-metrics"
latest_feature_date: "2015-08-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed"
  - "https://docs.cloud.google.com/appengine/docs/an-overview-of-app-engine"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled"
keywords:
  - "elastic"
  - "provisioning"
  - "based"
  - "load"
  - "metrics"
  - "applications"
  - "can"
  - "provisioned"
---

# Elastic provisioning based on load metrics

Product: App Engine standard environment Python
Coverage: MEDIUM

## Step 02 Summary

Applications can be provisioned for current load and elastic provisioning can be configured from VM and application metrics.

## Extended Definition

Applications can be provisioned for current load and elastic provisioning can be configured from VM and application metrics.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- [https://docs.cloud.google.com/appengine/docs/an-overview-of-app-engine](https://docs.cloud.google.com/appengine/docs/an-overview-of-app-engine)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)

## Supporting Pages

### "How instances are managed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- Source ID: `site-docs-reference-required-2`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- Automatic scaling Automatic scaling creates instances based on request rate, response latencies, and other application metrics.
- Setting an appropriate number of idle instances for your application based on request volume allows your application to serve every request with little latency, unless you are experiencing abnormally high request volume.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback How instances are managed Stay organized with collections Save and categorize content based on your preferences.
- Scaling dynamic instances App Engine applications that use basic or automatic scaling are powered by any number of dynamic instances at a given time, depending on the volume of incoming requests.

### An overview of App Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/an-overview-of-app-engine](https://docs.cloud.google.com/appengine/docs/an-overview-of-app-engine)
- Source ID: `site-docs-reference`
- Final score: 67
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can choose from several popular languages to develop your apps, and then let App Engine take care of provisioning servers and scaling your app instances based on demand.
- Home Documentation Application hosting App Engine Guides Send feedback An overview of App Engine Stay organized with collections Save and categorize content based on your preferences.
- Region ID The REGION ID is an abbreviated code that Google assigns based on the region you select when you create your app.
- OK App Engine is one of the fully managed, serverless platforms for developing and hosting web applications at scale.

### "How requests are handled \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- Source ID: `site-docs-reference-required-2`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- Vary : To enable the cache to return different responses for a URL based on headers that are sent in the request, set one or more of the following values in the Vary response header: Accept , Accept-Encoding , Origin , or X-Origin Due to the potential for high cardinality, data won't be cached for other Vary values.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback How requests are handled Stay organized with collections Save and categorize content based on your preferences.
- However, this is bound by the following restrictions: App Engine reserves automatic scaling capacity for applications with low latency, where the application responds to requests in less than one second.
- Applications that are heavily CPU-bound may also incur some additional latency in order to efficiently share resources with other applications on the same servers.

