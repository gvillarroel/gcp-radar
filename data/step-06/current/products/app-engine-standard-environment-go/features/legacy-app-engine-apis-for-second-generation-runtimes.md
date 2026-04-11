---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:52:30.767Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "Legacy App Engine APIs for second-generation runtimes"
feature_slug: "legacy-app-engine-apis-for-second-generation-runtimes"
latest_feature_date: "2021-09-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/bundled-services-overview"
keywords:
  - "standard billing for legacy APIs"
  - "2nd-generation runtimes"
  - "language-idiomatic libraries"
  - "second-generation runtimes"
  - "legacy App Engine APIs"
  - "legacy APIs"
  - "legacy API support"
  - "Go 1.12+"
---

# Legacy App Engine APIs for second-generation runtimes

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

Legacy App Engine APIs became available for select second-generation runtimes in preview for Go 1.12+, via language-idiomatic libraries and standard billing.

## Extended Definition

In the App Engine standard environment, Google Cloud documents a set of **legacy bundled services and their APIs** that are available on selected second‑generation runtimes, including **Go 1.12+**, and these legacy APIs are called through **language-idiomatic libraries**. The page describes this support as a way to reduce runtime migration complexity.

## Evidence Summary

The cited page confirms availability of legacy bundled-service APIs on selected second-generation runtimes (including Go 1.12+) and access via language-idiomatic libraries, but does not provide the broader details in the feature summary (for example preview status or billing terms).

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/bundled-services-overview](https://docs.cloud.google.com/appengine/docs/standard/bundled-services-overview)

## Supporting Pages

### "Overview of legacy bundled services \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/bundled-services-overview](https://docs.cloud.google.com/appengine/docs/standard/bundled-services-overview)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To reduce runtime migration complexity, Google Cloud now supports a set of App Engine legacy bundled services and their associated APIs on second-generation runtimes, which include Python 3 , Java 11+ , Go 1.12+ , and PHP 7+ .
- Your app can call legacy bundled services APIs for second-generation runtimes through language-idiomatic libraries.

