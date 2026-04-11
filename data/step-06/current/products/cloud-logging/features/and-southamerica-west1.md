---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.546Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "and southamerica-west1"
feature_slug: "and-southamerica-west1"
latest_feature_date: "2022-04-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/release-notes"
  - "https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.handlers.handlers.CloudLoggingHandler"
  - "https://docs.cloud.google.com/logging/docs/api/enable-api"
keywords:
  - "and"
  - "southamerica"
  - "west1"
  - "the"
  - "logging"
  - "api"
  - "supports"
  - "regions"
---

# and southamerica-west1

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
- [https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.handlers.handlers.CloudLoggingHandler](https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.handlers.handlers.CloudLoggingHandler)
- [https://docs.cloud.google.com/logging/docs/api/enable-api](https://docs.cloud.google.com/logging/docs/api/enable-api)

## Supporting Pages

### Logging release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- April 25, 2022 Feature The Cloud Logging API now supports the following regions: Europe: europe-southwest1 europe-west6 europe-west8 europe-west9 South America: southamerica-west1 For more information, see Data Regionality for Cloud Logging .
- March 27, 2023 Feature The Cloud Logging API now supports the following region: Doha: me-central1 March 22, 2023 Change Log buckets in the following regions can now be upgraded to use Log Analytics: asia-northeast1 australia-southeast1 europe-west1 europe-west2 northamerica-northeast1 us-east1 us-west2 For more information, see Supported regions .
- August 07, 2023 Change Cloud Logging now supports the following regions: europe-west10 europe-west12 me-central2 For more information, see Supported regions .
- October 11, 2021 Change Cloud Logging now supports the asia-south2, asia-southeast2, australia-southeast2, northamerica-northeast2, and us-west4 regions.

### "Class CloudLoggingHandler (3.15.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.handlers.handlers.CloudLoggingHandler](https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.handlers.handlers.CloudLoggingHandler)
- Source ID: `site-python-reference`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This is a Python standard logging handler using that can be used to route Python standard logging messages directly to the Stackdriver Logging API.
- Client () handler = CloudLoggingHandler(client) cloud logger = logging.getLogger('cloudLogger') cloud logger.setLevel(logging.INFO) cloud logger.addHandler(handler) cloud logger.error('bad news') # API call Methods CloudLoggingHandler CloudLoggingHandler ( client , , name : str = "python" , transport : typing .
- If not given, will be inferred from the environment. labels Optional[dict] Additional labels to attach to logs. stream Optional[IO] Stream to be used by the handler. close close () Closes the log handler and cleans up all Transport objects used. emit emit ( record ) Actually log the specified logging record.
- See https://docs.python.org/2/library/logging.html#handler-objects Parameter Name Description record logging.LogRecord The record to be logged. flush flush () Forces the Transport object to submit any pending log records.

### Enable the Logging API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/api/enable-api](https://docs.cloud.google.com/logging/docs/api/enable-api)
- Source ID: `site-docs-reference`
- Final score: 158
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To see if the Logging API is enabled, run the following command on your workstation, after replacing PROJECT ID with the ID of the project for which you want to enable the API: gcloud services list --project= PROJECT ID If logging.googleapis.com appears in the output, the API is enabled.
- If the API isn't enabled, then run the following command to enable it: gcloud services enable logging --project= PROJECT ID For more information about listing, enabling, and disabling APIs, see gcloud services .
- Home Documentation Observability Cloud Logging Reference Send feedback Enable the Logging API Stay organized with collections Save and categorize content based on your preferences.
- This page describes how to enable and authorize use of the Logging API v2.

