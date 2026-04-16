---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.387Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Cloud Logging API regional support in europe-southwest1"
feature_slug: "cloud-logging-api-regional-support-in-europe-southwest1"
latest_feature_date: "2022-04-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/regionalized-logs"
  - "https://docs.cloud.google.com/logging/docs/api"
  - "https://docs.cloud.google.com/logging/docs/api/enable-api"
keywords:
  - "logging"
  - "regional"
  - "europe"
  - "southwest1"
  - "supports"
  - "regions"
  - "west6"
  - "west8"
---

# Cloud Logging API regional support in europe-southwest1

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

The Cloud Logging API supports the regions europe-southwest1, europe-west6, europe-west8, europe-west9, and southamerica-west1.

## Extended Definition

The Cloud Logging API supports the regions europe-southwest1, europe-west6, europe-west8, europe-west9, and southamerica-west1.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/regionalized-logs](https://docs.cloud.google.com/logging/docs/regionalized-logs)
- [https://docs.cloud.google.com/logging/docs/api](https://docs.cloud.google.com/logging/docs/api)
- [https://docs.cloud.google.com/logging/docs/api/enable-api](https://docs.cloud.google.com/logging/docs/api/enable-api)

## Supporting Pages

### Regionalize your logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/regionalized-logs](https://docs.cloud.google.com/logging/docs/regionalized-logs)
- Source ID: `site-docs-root`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- Logging supports querying logs from multiple regions together, in which case queries are processed in the same locations as the buckets being queried and then aggregated in the region the query was received from to return the results.
- Create a log entry to test your sink To verify that you updated the sink properly, complete the following steps: Send a test log message to your regionalized bucket by using the gcloud logging write command.
- Home Documentation Observability Cloud Logging Guides Send feedback Regionalize your logs Stay organized with collections Save and categorize content based on your preferences.
- Overview In Logging, log buckets are regional resources: the infrastructure that stores, indexes, and searches your logs is located in a specific geographical location.

### Enable the Logging API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/api/enable-api](https://docs.cloud.google.com/logging/docs/api/enable-api)
- Source ID: `site-docs-reference`
- Final score: 56
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To see if the Logging API is enabled, run the following command on your workstation, after replacing PROJECT ID with the ID of the project for which you want to enable the API: gcloud services list --project= PROJECT ID If logging.googleapis.com appears in the output, the API is enabled.
- If the API isn't enabled, then run the following command to enable it: gcloud services enable logging --project= PROJECT ID For more information about listing, enabling, and disabling APIs, see gcloud services .
- Home Documentation Observability Cloud Logging Reference Send feedback Enable the Logging API Stay organized with collections Save and categorize content based on your preferences.
- The recommended Logging client libraries use Application Default Credentials to automatically find credentials.

### Using the APIs Explorer \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/api](https://docs.cloud.google.com/logging/docs/api)
- Source ID: `site-docs-reference`
- Final score: 56
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following screenshot shows the panel as it appears for a method with only one parameter, name : The APIs Explorer is an excellent way to try out methods in the Cloud Logging API without having to write any code.
- Home Documentation Observability Cloud Logging Reference Send feedback Using the APIs Explorer Stay organized with collections Save and categorize content based on your preferences.
- This guide describes how to use the APIs Explorer to try out Cloud Logging API methods.
- For more information, see Cloud Logging query language .

