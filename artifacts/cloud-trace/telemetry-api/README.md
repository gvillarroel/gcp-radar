# Telemetry API

Product: Cloud Trace
Feature slug: `telemetry-api`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The Telemetry API provides an OpenTelemetry OTLP-compatible endpoint for sending trace data and supports VPC Service Controls.

## Lifecycle

- Latest feature date: 2025-03-25
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth (evidence: [https://docs.cloud.google.com/trace/docs/migrate-to-otlp-endpoints](https://docs.cloud.google.com/trace/docs/migrate-to-otlp-endpoints), [https://docs.cloud.google.com/trace/docs/otlp](https://docs.cloud.google.com/trace/docs/otlp), [https://docs.cloud.google.com/trace/docs/quotas](https://docs.cloud.google.com/trace/docs/quotas), [https://docs.cloud.google.com/trace/docs/setup/sample-overview](https://docs.cloud.google.com/trace/docs/setup/sample-overview))
- credential (evidence: [https://docs.cloud.google.com/trace/docs/migrate-to-otlp-endpoints](https://docs.cloud.google.com/trace/docs/migrate-to-otlp-endpoints), [https://docs.cloud.google.com/trace/docs/otlp](https://docs.cloud.google.com/trace/docs/otlp), [https://docs.cloud.google.com/trace/docs/quotas](https://docs.cloud.google.com/trace/docs/quotas), [https://docs.cloud.google.com/trace/docs/setup/sample-overview](https://docs.cloud.google.com/trace/docs/setup/sample-overview))
- iam (evidence: [https://docs.cloud.google.com/trace/docs/migrate-to-otlp-endpoints](https://docs.cloud.google.com/trace/docs/migrate-to-otlp-endpoints), [https://docs.cloud.google.com/trace/docs/otlp](https://docs.cloud.google.com/trace/docs/otlp), [https://docs.cloud.google.com/trace/docs/quotas](https://docs.cloud.google.com/trace/docs/quotas), [https://docs.cloud.google.com/trace/docs/setup/sample-overview](https://docs.cloud.google.com/trace/docs/setup/sample-overview))
- key (evidence: [https://docs.cloud.google.com/trace/docs/migrate-to-otlp-endpoints](https://docs.cloud.google.com/trace/docs/migrate-to-otlp-endpoints), [https://docs.cloud.google.com/trace/docs/otlp](https://docs.cloud.google.com/trace/docs/otlp), [https://docs.cloud.google.com/trace/docs/quotas](https://docs.cloud.google.com/trace/docs/quotas), [https://docs.cloud.google.com/trace/docs/setup/sample-overview](https://docs.cloud.google.com/trace/docs/setup/sample-overview))
- logging (evidence: [https://docs.cloud.google.com/trace/docs/migrate-to-otlp-endpoints](https://docs.cloud.google.com/trace/docs/migrate-to-otlp-endpoints), [https://docs.cloud.google.com/trace/docs/otlp](https://docs.cloud.google.com/trace/docs/otlp), [https://docs.cloud.google.com/trace/docs/quotas](https://docs.cloud.google.com/trace/docs/quotas), [https://docs.cloud.google.com/trace/docs/setup/sample-overview](https://docs.cloud.google.com/trace/docs/setup/sample-overview))
- permission (evidence: [https://docs.cloud.google.com/trace/docs/migrate-to-otlp-endpoints](https://docs.cloud.google.com/trace/docs/migrate-to-otlp-endpoints), [https://docs.cloud.google.com/trace/docs/otlp](https://docs.cloud.google.com/trace/docs/otlp), [https://docs.cloud.google.com/trace/docs/quotas](https://docs.cloud.google.com/trace/docs/quotas), [https://docs.cloud.google.com/trace/docs/setup/sample-overview](https://docs.cloud.google.com/trace/docs/setup/sample-overview))
- role (evidence: [https://docs.cloud.google.com/trace/docs/migrate-to-otlp-endpoints](https://docs.cloud.google.com/trace/docs/migrate-to-otlp-endpoints), [https://docs.cloud.google.com/trace/docs/otlp](https://docs.cloud.google.com/trace/docs/otlp), [https://docs.cloud.google.com/trace/docs/quotas](https://docs.cloud.google.com/trace/docs/quotas), [https://docs.cloud.google.com/trace/docs/setup/sample-overview](https://docs.cloud.google.com/trace/docs/setup/sample-overview))

## Official Evidence

- [https://docs.cloud.google.com/trace/docs/migrate-to-otlp-endpoints](https://docs.cloud.google.com/trace/docs/migrate-to-otlp-endpoints)
- [https://docs.cloud.google.com/trace/docs/otlp](https://docs.cloud.google.com/trace/docs/otlp)
- [https://docs.cloud.google.com/trace/docs/quotas](https://docs.cloud.google.com/trace/docs/quotas)
- [https://docs.cloud.google.com/trace/docs/setup/sample-overview](https://docs.cloud.google.com/trace/docs/setup/sample-overview)
