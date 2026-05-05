# Folder-level default settings for CMEK and storage location

Product: Cloud Logging
Feature slug: `folder-level-default-settings-for-cmek-and-storage-location`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Logging supports configuring CMEK and a default storage location for individual folders.

## Lifecycle

- Latest feature date: 2023-06-05
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- key (evidence: [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Settings](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Settings), [https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.ContextHandler.ContextPriority](https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.ContextHandler.ContextPriority), [https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler.LogTarget](https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler.LogTarget))
- kms (evidence: [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Settings](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Settings), [https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.ContextHandler.ContextPriority](https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.ContextHandler.ContextPriority), [https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler.LogTarget](https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler.LogTarget))
- logging (evidence: [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Settings](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Settings), [https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.ContextHandler.ContextPriority](https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.ContextHandler.ContextPriority), [https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler.LogTarget](https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler.LogTarget))

## Official Evidence

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.ContextHandler.ContextPriority](https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.ContextHandler.ContextPriority)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler.LogTarget](https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler.LogTarget)
- [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Settings](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Settings)
