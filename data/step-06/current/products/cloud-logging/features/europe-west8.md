---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.390Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "europe-west8"
feature_slug: "europe-west8"
latest_feature_date: "2022-04-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/api"
  - "https://docs.cloud.google.com/logging/docs/api/enable-api"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler.LogTarget"
keywords:
  - "europe"
  - "west8"
  - "logging"
  - "supports"
  - "regions"
  - "southwest1"
  - "west6"
  - "west9"
---

# europe-west8

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

The Cloud Logging API supports the regions europe-southwest1, europe-west6, europe-west8, europe-west9, and southamerica-west1.

## Extended Definition

The Cloud Logging API supports the regions europe-southwest1, europe-west6, europe-west8, europe-west9, and southamerica-west1.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/api](https://docs.cloud.google.com/logging/docs/api)
- [https://docs.cloud.google.com/logging/docs/api/enable-api](https://docs.cloud.google.com/logging/docs/api/enable-api)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler.LogTarget](https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler.LogTarget)

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

### "Enum LoggingHandler.LogTarget (3.29.0) \_|\_ Java client libraries \_|\_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler.LogTarget](https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler.LogTarget)
- Source ID: `site-java-reference`
- Final score: 46
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Inherited Members Enum.<T>valueOf(Class<T>,String) Enum.clone() Enum.compareTo(E) Enum.equals(Object) Enum.finalize() Enum.getDeclaringClass() Enum.hashCode() Enum.name() Enum.ordinal() Enum.toString() Object.getClass() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Static Fields Name Description CLOUD LOGGING Sends logs to the Cloud Logging API.
- Home Documentation Developer tools Java Client libraries Send feedback Enum LoggingHandler.LogTarget (3.29.0) Stay organized with collections Save and categorize content based on your preferences.
- 3.29.0 (latest) 3.28.0 3.26.0 3.24.0 3.23.10 3.22.6 3.21.4 3.20.7 3.19.0 3.18.0 3.17.2 3.16.2 3.15.17 3.14.9 3.13.7 3.12.1 3.11.10 3.10.7 3.9.0 3.8.0 3.7.6 3.6.4 3.5.3 public enum LoggingHandler .
- STDERR Sends JSON-formatted logs to stderr, for use with the Google Cloud logging agent.

