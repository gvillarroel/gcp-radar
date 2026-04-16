---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.354Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Cloud Logging API regional support in me-central1"
feature_slug: "cloud-logging-api-regional-support-in-me-central1"
latest_feature_date: "2023-03-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/regionalized-logs"
  - "https://docs.cloud.google.com/logging/docs/reference"
  - "https://docs.cloud.google.com/logging/docs/reference/api-overview"
keywords:
  - "logging"
  - "regional"
  - "me"
  - "central1"
  - "supports"
  - "doha"
  - "region"
---

# Cloud Logging API regional support in me-central1

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

The Cloud Logging API supports the Doha region me-central1.

## Extended Definition

The Cloud Logging API supports the Doha region me-central1.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/regionalized-logs](https://docs.cloud.google.com/logging/docs/regionalized-logs)
- [https://docs.cloud.google.com/logging/docs/reference](https://docs.cloud.google.com/logging/docs/reference)
- [https://docs.cloud.google.com/logging/docs/reference/api-overview](https://docs.cloud.google.com/logging/docs/reference/api-overview)

## Supporting Pages

### Regionalize your logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/regionalized-logs](https://docs.cloud.google.com/logging/docs/regionalized-logs)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- Logging supports querying logs from multiple regions together, in which case queries are processed in the same locations as the buckets being queried and then aggregated in the region the query was received from to return the results.
- Create a log entry to test your sink To verify that you updated the sink properly, complete the following steps: Send a test log message to your regionalized bucket by using the gcloud logging write command.
- Home Documentation Observability Cloud Logging Guides Send feedback Regionalize your logs Stay organized with collections Save and categorize content based on your preferences.
- Overview In Logging, log buckets are regional resources: the infrastructure that stores, indexes, and searches your logs is located in a specific geographical location.

### Cloud Logging API overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/reference/api-overview](https://docs.cloud.google.com/logging/docs/reference/api-overview)
- Source ID: `site-docs-reference`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can use a global or regional service endpoint to make requests to Logging: Global endpoint : Global endpoints don't specify a region and have the following format: logging.googleapis.com .
- For a list of available and multi-regional endpoints for Logging, see Regional service endpoints .
- Regional endpoints have the following format: logging.
- Logging has both global and regional endpoints.

### Cloud Logging API overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/reference](https://docs.cloud.google.com/logging/docs/reference)
- Source ID: `site-docs-root`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can use a global or regional service endpoint to make requests to Logging: Global endpoint : Global endpoints don't specify a region and have the following format: logging.googleapis.com .
- For a list of available and multi-regional endpoints for Logging, see Regional service endpoints .
- Regional endpoints have the following format: logging.
- Logging has both global and regional endpoints.

