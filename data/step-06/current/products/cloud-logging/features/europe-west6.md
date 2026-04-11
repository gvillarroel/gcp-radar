---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.546Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "europe-west6"
feature_slug: "europe-west6"
latest_feature_date: "2022-04-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/release-notes"
  - "https://docs.cloud.google.com/logging/docs/api/enable-api"
  - "https://docs.cloud.google.com/logging/docs/api"
keywords:
  - "europe"
  - "west6"
  - "the"
  - "logging"
  - "api"
  - "supports"
  - "regions"
  - "southwest1"
---

# europe-west6

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

The Cloud Logging API supports the regions europe-southwest1, europe-west6, europe-west8, europe-west9, and southamerica-west1.

## Extended Definition

The Cloud Logging API supports the regions europe-southwest1, europe-west6, europe-west8, europe-west9, and southamerica-west1.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)
- [https://docs.cloud.google.com/logging/docs/api/enable-api](https://docs.cloud.google.com/logging/docs/api/enable-api)
- [https://docs.cloud.google.com/logging/docs/api](https://docs.cloud.google.com/logging/docs/api)

## Supporting Pages

### Logging release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- April 25, 2022 Feature The Cloud Logging API now supports the following regions: Europe: europe-southwest1 europe-west6 europe-west8 europe-west9 South America: southamerica-west1 For more information, see Data Regionality for Cloud Logging .
- March 27, 2023 Feature The Cloud Logging API now supports the following region: Doha: me-central1 March 22, 2023 Change Log buckets in the following regions can now be upgraded to use Log Analytics: asia-northeast1 australia-southeast1 europe-west1 europe-west2 northamerica-northeast1 us-east1 us-west2 For more information, see Supported regions .
- August 07, 2023 Change Cloud Logging now supports the following regions: europe-west10 europe-west12 me-central2 For more information, see Supported regions .
- July 29, 2021 Change Cloud Logging now supports the asia-east2 and europe-central2 regions.

### Enable the Logging API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/api/enable-api](https://docs.cloud.google.com/logging/docs/api/enable-api)
- Source ID: `site-docs-reference`
- Final score: 138
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To see if the Logging API is enabled, run the following command on your workstation, after replacing PROJECT ID with the ID of the project for which you want to enable the API: gcloud services list --project= PROJECT ID If logging.googleapis.com appears in the output, the API is enabled.
- If the API isn't enabled, then run the following command to enable it: gcloud services enable logging --project= PROJECT ID For more information about listing, enabling, and disabling APIs, see gcloud services .
- Home Documentation Observability Cloud Logging Reference Send feedback Enable the Logging API Stay organized with collections Save and categorize content based on your preferences.
- Authorize use of the API Before you can use the Cloud Logging API, you must authorize users to access it.

### Using the APIs Explorer \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/api](https://docs.cloud.google.com/logging/docs/api)
- Source ID: `site-docs-reference`
- Final score: 124
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following screenshot shows the panel as it appears for a method with only one parameter, name : The APIs Explorer is an excellent way to try out methods in the Cloud Logging API without having to write any code.
- Home Documentation Observability Cloud Logging Reference Send feedback Using the APIs Explorer Stay organized with collections Save and categorize content based on your preferences.
- This guide describes how to use the APIs Explorer to try out Cloud Logging API methods.
- For example, if you are listing log entries and only want to see activity logs, then you can filter by the logName , which must be URL-encoded. { "resourceNames": [...], "filter": "logName=\"projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Factivity\"" } Too much data is returned To limit the number of results returned, in the pageSize parameter, enter a value, such as 2 .

