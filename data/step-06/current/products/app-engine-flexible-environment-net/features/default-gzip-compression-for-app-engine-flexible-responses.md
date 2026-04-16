---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:14:55.680Z"
product_name: "App Engine flexible environment .NET"
product_slug: "app-engine-flexible-environment-net"
feature_name: "Default gzip compression for App Engine flexible responses"
feature_slug: "default-gzip-compression-for-app-engine-flexible-responses"
latest_feature_date: "2017-10-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/quotas"
  - "https://cloud.google.com/appengine/docs/flexible/how-requests-are-handled"
  - "https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled"
keywords:
  - "default"
  - "gzip"
  - "compression"
  - "app"
  - "engine"
  - "flexible"
  - "responses"
  - "environment"
---

# Default gzip compression for App Engine flexible responses

Product: App Engine flexible environment .NET
Coverage: MEDIUM

## Step 02 Summary

App Engine flexible environment now serves responses with gzip compression by default after redeploying an app.

## Extended Definition

App Engine flexible environment now serves responses with gzip compression by default after redeploying an app.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/quotas](https://docs.cloud.google.com/appengine/docs/flexible/quotas)
- [https://cloud.google.com/appengine/docs/flexible/how-requests-are-handled](https://cloud.google.com/appengine/docs/flexible/how-requests-are-handled)
- [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled)

## Supporting Pages

### "Quotas and limits \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/quotas](https://docs.cloud.google.com/appengine/docs/flexible/quotas)
- Source ID: `site-docs-reference-2`
- Final score: 51
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Resources Send feedback Quotas and limits Stay organized with collections Save and categorize content based on your preferences.
- Quotas for the App Engine flexible environment When you deploy an application to the App Engine flexible environment, some Google Cloud resources are consumed.
- For resources that are required to initiate a request, when the resource is depleted, App Engine by default returns an HTTP 403 or 503 error code for the request instead of calling a request handler.
- Both the standard environment and the flexible environment share the same limits for services and versions.

### "How requests are handled \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled)
- Source ID: `site-docs-reference`
- Final score: 47
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback How requests are handled Stay organized with collections Save and categorize content based on your preferences.
- Unsupported HTTP requests The following features are not supported by App Engine flexible environment: HTTP/2 traffic to the backend service.
- Disabling buffering By default, all responses from App Engine are buffered in 64k-blocks.
- OK Go Java Node.js PHP Python Ruby .NET Custom This document describes how your App Engine application receives requests and sends responses.

### "How requests are handled \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://cloud.google.com/appengine/docs/flexible/how-requests-are-handled](https://cloud.google.com/appengine/docs/flexible/how-requests-are-handled)
- Source ID: `site-docs-root`
- Final score: 47
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback How requests are handled Stay organized with collections Save and categorize content based on your preferences.
- Unsupported HTTP requests The following features are not supported by App Engine flexible environment: HTTP/2 traffic to the backend service.
- Disabling buffering By default, all responses from App Engine are buffered in 64k-blocks.
- OK Go Java Node.js PHP Python Ruby .NET Custom This document describes how your App Engine application receives requests and sends responses.

