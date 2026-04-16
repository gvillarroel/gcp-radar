---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:16:06.769Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "Search API for Python 3 second-generation runtimes"
feature_slug: "search-api-for-python-3-second-generation-runtimes"
latest_feature_date: "2023-04-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/bundled-services-overview"
  - "https://cloud.google.com/appengine/docs/standard/how-requests-are-handled"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled"
keywords:
  - "generation"
  - "runtimes"
  - "second"
  - "search"
  - "available"
---

# Search API for Python 3 second-generation runtimes

Product: App Engine standard environment Python
Coverage: MEDIUM

## Step 02 Summary

The Search API is available in App Engine legacy bundled services for Python 3 second-generation runtimes through the App Engine services SDK.

## Extended Definition

The Search API is available in App Engine legacy bundled services for Python 3 second-generation runtimes through the App Engine services SDK.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/bundled-services-overview](https://docs.cloud.google.com/appengine/docs/standard/bundled-services-overview)
- [https://cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)

## Supporting Pages

### "How requests are handled \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- Source ID: `site-docs-reference`
- Final score: 93
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following limits apply specifically to the use of request handlers: Limit Amount Request size 32 megabytes Response size 32 megabytes Request timeout Depends on the type of scaling your app uses Maximum total number of files (app files and static files) 10,000 total 1,000 per directory Maximum size of an application file 32 megabytes Maximum size of a static file 32 megabytes Maximum total size of all application and static files First 1 gigabyte is free $ 0.026 per gigabyte per month after first 1 gigabyte Pending request timeout 10 seconds Maximum size of a single request header field 8 kilobytes for second-generation runtimes in the standard environment.
- The response header limit is 8 KB for second-generation runtimes .
- App Engine pending queue prioritization During periods of heavy traffic, App Engine might place requests in a pending queue while waiting for an available instance with the following prioritization: App Engine prioritizes other queued requests over pending queued requests from Task queue .
- However, this is bound by the following restrictions: App Engine reserves automatic scaling capacity for applications with low latency, where the application responds to requests in less than one second.

### "How requests are handled \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- Source ID: `site-docs-reference-3`
- Final score: 93
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following limits apply specifically to the use of request handlers: Limit Amount Request size 32 megabytes Response size 32 megabytes Request timeout Depends on the type of scaling your app uses Maximum total number of files (app files and static files) 10,000 total 1,000 per directory Maximum size of an application file 32 megabytes Maximum size of a static file 32 megabytes Maximum total size of all application and static files First 1 gigabyte is free $ 0.026 per gigabyte per month after first 1 gigabyte Pending request timeout 10 seconds Maximum size of a single request header field 8 kilobytes for second-generation runtimes in the standard environment.
- The response header limit is 8 KB for second-generation runtimes .
- App Engine pending queue prioritization During periods of heavy traffic, App Engine might place requests in a pending queue while waiting for an available instance with the following prioritization: App Engine prioritizes other queued requests over pending queued requests from Task queue .
- However, this is bound by the following restrictions: App Engine reserves automatic scaling capacity for applications with low latency, where the application responds to requests in less than one second.

### "Overview of legacy bundled services \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/bundled-services-overview](https://docs.cloud.google.com/appengine/docs/standard/bundled-services-overview)
- Source ID: `site-docs-reference`
- Final score: 92
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For the legacy bundled services that are not available as separate products in Google Cloud, such as image processing, search, and messaging, you can use third-party providers or other workarounds as suggested in the Runtimes guide.
- To reduce runtime migration complexity, Google Cloud now supports a set of App Engine legacy bundled services and their associated APIs on second-generation runtimes, which include Python 3 , Java 11+ , Go 1.12+ , and PHP 7+ .
- Your app can call legacy bundled services APIs for second-generation runtimes through language-idiomatic libraries.
- These services were bundled with first-generation runtimes (also called App Engine legacy runtimes ), which include Python 2, Java 8, Go 1.11, and PHP 5.5.

