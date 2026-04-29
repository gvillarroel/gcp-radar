# europe-west6

Product: Cloud Logging
Feature slug: `europe-west6`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The Cloud Logging API supports the regions europe-southwest1, europe-west6, europe-west8, europe-west9, and southamerica-west1.

## Lifecycle

- Latest feature date: 2022-04-25
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- credential
- logging

## Official Evidence

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler](https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler)
- [https://docs.cloud.google.com/logging/docs/api](https://docs.cloud.google.com/logging/docs/api)
- [https://docs.cloud.google.com/logging/docs/api/enable-api](https://docs.cloud.google.com/logging/docs/api/enable-api)

## Validation Findings

- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
