---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:50:31.502Z"
product_name: "App Engine flexible environment Ruby"
product_slug: "app-engine-flexible-environment-ruby"
feature_name: "App Engine region-ID request URLs"
feature_slug: "app-engine-region-id-request-urls"
latest_feature_date: "2020-02-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled"
  - "https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed"
  - "https://docs.cloud.google.com/appengine/docs/flexible/ruby/how-requests-are-routed"
keywords:
  - "app"
  - "engine"
  - "region"
  - "id"
  - "request"
  - "urls"
  - "introduced"
  - "based"
---

# App Engine region-ID request URLs

Product: App Engine flexible environment Ruby
Coverage: MEDIUM

## Step 02 Summary

App Engine introduced region-ID based app URLs (for example, PROJECT_ID.REGION_ID.r.appspot.com) to improve request routing efficiency and reliability.

## Extended Definition

App Engine introduced region-ID based app URLs (for example, PROJECT_ID.REGION_ID.r.appspot.com) to improve request routing efficiency and reliability.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled)
- [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed)
- [https://docs.cloud.google.com/appengine/docs/flexible/ruby/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/flexible/ruby/how-requests-are-routed)

## Supporting Pages

### "How requests are handled \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-handled)
- Source ID: `site-docs-reference`
- Final score: 93
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback How requests are handled Stay organized with collections Save and categorize content based on your preferences.
- For apps created after February 2020, REGION ID .r is included in App Engine URLs.
- However, this is bound by the following restrictions: App Engine reserves automatic scaling capacity for applications with low latency, where the application responds to requests in less than one second.
- OK Go Java Node.js PHP Python Ruby .NET Custom This document describes how your App Engine application receives requests and sends responses.

### "How requests are routed \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/flexible/how-requests-are-routed)
- Source ID: `site-docs-reference`
- Final score: 93
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback How requests are routed Stay organized with collections Save and categorize content based on your preferences.
- Understand the Region ID in URLs The REGION ID is an abbreviated code that Google assigns based on the region you select when you create your app.
- Routing with URLs Once your app is running in App Engine, you can use the following URL to send HTTP requests to the app: https:// PROJECT ID .
- For apps created after February 2020, REGION ID .r is included in App Engine URLs.

### "How requests are routed \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/ruby/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/flexible/ruby/how-requests-are-routed)
- Source ID: `site-docs-reference-2`
- Final score: 93
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback How requests are routed Stay organized with collections Save and categorize content based on your preferences.
- Understand the Region ID in URLs The REGION ID is an abbreviated code that Google assigns based on the region you select when you create your app.
- Routing with URLs Once your app is running in App Engine, you can use the following URL to send HTTP requests to the app: https:// PROJECT ID .
- For apps created after February 2020, REGION ID .r is included in App Engine URLs.

