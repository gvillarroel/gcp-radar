# Cloud Logging data regionality in US and EU

Product: Cloud Logging
Feature slug: `cloud-logging-data-regionality-in-us-and-eu`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Logging supports data regionality in the US and EU.

## Lifecycle

- Latest feature date: 2022-12-19
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth
- logging

## Official Evidence

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler](https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler)
- [https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.handlers.app_engine.AppEngineHandler](https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.handlers.app_engine.AppEngineHandler)
- [https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.handlers.container_engine.ContainerEngineHandler](https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.handlers.container_engine.ContainerEngineHandler)

## Validation Findings

- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
