# Telemetry API regional metric ingestion quota

Product: Cloud Monitoring
Feature slug: `telemetry-api-regional-metric-ingestion-quota`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The Telemetry API uses a regional quota of up to 60,000 metric-ingestion requests per minute per region instead of a global quota.

## Lifecycle

- Latest feature date: 2026-03-24
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- iam
- key
- logging
- permission
- role

## Official Evidence

- [https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp](https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp)
- [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
