---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:28:01.042Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "LOCK_SCANNED_RANGES statement hint"
feature_slug: "lock-scanned-ranges-statement-hint"
latest_feature_date: "2020-12-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerClient"
  - "https://docs.cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1"
keywords:
  - "lock"
  - "scanned"
  - "ranges"
  - "statement"
  - "hint"
  - "spanner"
  - "added"
  - "for"
---

# LOCK_SCANNED_RANGES statement hint

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Cloud Spanner added support for the LOCK_SCANNED_RANGES statement hint, which lets a transaction request an exclusive lock on scanned key ranges.

## Extended Definition

Cloud Spanner added support for the LOCK_SCANNED_RANGES statement hint, which lets a transaction request an exclusive lock on scanned key ranges.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerClient)
- [https://docs.cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1](https://docs.cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1)

## Supporting Pages

### Class SpannerAsyncClient (3.63.0) | Python client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerAsyncClient)
- Source ID: `site-python-reference`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Class SpannerAsyncClient (3.63.0) Python client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner v1.services.spanner.SpannerAsyncClient The Cloud Spanner API can be used to manage sessions and execute transactions on data stored in Cloud Spanner databases.

### Class SpannerClient (3.62.0) | Python client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.services.spanner.SpannerClient)
- Source ID: `site-python-reference`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Class SpannerClient (3.62.0) Python client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner v1.services.spanner.SpannerClient The Cloud Spanner API can be used to manage sessions and execute transactions on data stored in Cloud Spanner databases.

### Package google.spanner.v1 | Spanner | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1](https://docs.cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1)
- Source ID: `site-docs-root`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- Package google.spanner.v1 Spanner Google Cloud Documentation Source URL: https://docs.cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1 The Cloud Spanner API can be used to manage sessions and execute transactions on data stored in Cloud Spanner databases.

