---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.386Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "and southamerica-west1"
feature_slug: "and-southamerica-west1"
latest_feature_date: "2022-04-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/regionalized-logs"
  - "https://docs.cloud.google.com/logging/docs/api"
  - "https://docs.cloud.google.com/logging/docs/api/enable-api"
keywords:
  - "southamerica"
  - "west1"
  - "logging"
  - "supports"
  - "regions"
  - "europe"
  - "southwest1"
  - "west6"
---

# and southamerica-west1

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

### Regionalize your logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/regionalized-logs](https://docs.cloud.google.com/logging/docs/regionalized-logs)
- Source ID: `site-docs-root`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- Logging supports querying logs from multiple regions together, in which case queries are processed in the same locations as the buckets being queried and then aggregated in the region the query was received from to return the results.
- Note: Log buckets in the global region or in multi-regions don't offer added resiliency compared to log buckets created in single regions like us-west1 .
- Example command: gcloud logging sinks update Default \ logging.googleapis.com/projects/ PROJECT ID /locations/ LOCATION /buckets/ BUCKET ID \ --log-filter='NOT LOG ID("cloudaudit.googleapis.com/activity") AND NOT LOG ID("externalaudit.googleapis.com/activity") AND NOT LOG ID("cloudaudit.googleapis.com/system event") AND NOT LOG ID("externalaudit.googleapis.com/system event") AND NOT LOG ID("cloudaudit.googleapis.com/access transparency") AND NOT LOG ID("externalaudit.googleapis.com/access transparency")' \ --description="Updated the Default sink to route logs to the LOCATION region" Note: When you create a project, the filter for the Default sink is as shown in the previous command.
- Search logs in the Google Cloud console To view the log entries in your log bucket, go to the Google Cloud console and complete the following steps: In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .

