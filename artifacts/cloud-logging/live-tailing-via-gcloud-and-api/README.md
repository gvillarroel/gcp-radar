# Live Tailing via gcloud and API

Product: Cloud Logging
Feature slug: `live-tailing-via-gcloud-and-api`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Logging supports live tailing of log entries through a gcloud command and API.

## Lifecycle

- Latest feature date: 2020-11-06
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- logging (evidence: [https://docs.cloud.google.com/logging/docs/apis](https://docs.cloud.google.com/logging/docs/apis), [https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler.LogTarget](https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler.LogTarget), [https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.handlers.structured_log.StructuredLogHandler](https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.handlers.structured_log.StructuredLogHandler))

## Official Evidence

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler.LogTarget](https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler.LogTarget)
- [https://docs.cloud.google.com/logging/docs/apis](https://docs.cloud.google.com/logging/docs/apis)
- [https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.handlers.structured_log.StructuredLogHandler](https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.handlers.structured_log.StructuredLogHandler)
