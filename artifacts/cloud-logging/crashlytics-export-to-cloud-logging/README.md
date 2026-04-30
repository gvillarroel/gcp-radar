# Crashlytics export to Cloud Logging

Product: Cloud Logging
Feature slug: `crashlytics-export-to-cloud-logging`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Crashlytics data and optional Firebase sessions data can be exported to Cloud Logging for use across observability workflows.

## Lifecycle

- Latest feature date: 2026-01-29
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth
- certificate
- credential
- firewall
- iam
- key
- kms
- logging
- permission
- policy
- private
- role

## Official Evidence

- [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list)
- [https://docs.cloud.google.com/logging/docs/write-query-log-entries-python](https://docs.cloud.google.com/logging/docs/write-query-log-entries-python)
- [https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.client.Client](https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.client.Client)
