---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.349Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Folder-level default settings for CMEK and storage location"
feature_slug: "folder-level-default-settings-for-cmek-and-storage-location"
latest_feature_date: "2023-06-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Settings"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.ContextHandler.ContextPriority"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler.LogTarget"
keywords:
  - "folder"
  - "level"
  - "default"
  - "settings"
  - "cmek"
  - "storage"
  - "location"
  - "logging"
---

# Folder-level default settings for CMEK and storage location

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Cloud Logging supports configuring CMEK and a default storage location for individual folders.

## Extended Definition

Cloud Logging supports configuring CMEK and a default storage location for individual folders.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Settings](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Settings)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.ContextHandler.ContextPriority](https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.ContextHandler.ContextPriority)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler.LogTarget](https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler.LogTarget)

## Supporting Pages

### Settings \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Settings](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Settings)
- Source ID: `site-docs-reference`
- Final score: 44
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "name" : string , "kmsKeyName" : string , "kmsServiceAccountId" : string , "storageLocation" : string , "disableDefaultSink" : boolean , "defaultSinkConfig" : { object ( DefaultSinkConfig ) } , "loggingServiceAccountId" : string } Fields name string Output only.
- The storage location for the Default and Required log buckets of newly created projects and folders, unless the storage location is explicitly provided.
- See Configure CMEK for Cloud Logging for more information. storageLocation string Optional.
- JSON representation DefaultSinkConfig JSON representation FilterWriteMode Describes the settings associated with a project, folder, organization, or billing account.

### "Enum ContextHandler.ContextPriority (3.29.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.ContextHandler.ContextPriority](https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.ContextHandler.ContextPriority)
- Source ID: `site-java-reference`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "Enum LoggingHandler.LogTarget (3.29.0) \_|\_ Java client libraries \_|\_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler.LogTarget](https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler.LogTarget)
- Source ID: `site-java-reference`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Inherited Members Enum.<T>valueOf(Class<T>,String) Enum.clone() Enum.compareTo(E) Enum.equals(Object) Enum.finalize() Enum.getDeclaringClass() Enum.hashCode() Enum.name() Enum.ordinal() Enum.toString() Object.getClass() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Static Fields Name Description CLOUD LOGGING Sends logs to the Cloud Logging API.
- Home Documentation Developer tools Java Client libraries Send feedback Enum LoggingHandler.LogTarget (3.29.0) Stay organized with collections Save and categorize content based on your preferences.
- 3.29.0 (latest) 3.28.0 3.26.0 3.24.0 3.23.10 3.22.6 3.21.4 3.20.7 3.19.0 3.18.0 3.17.2 3.16.2 3.15.17 3.14.9 3.13.7 3.12.1 3.11.10 3.10.7 3.9.0 3.8.0 3.7.6 3.6.4 3.5.3 public enum LoggingHandler .
- STDERR Sends JSON-formatted logs to stderr, for use with the Google Cloud logging agent.

