# Logging agent partial success ingestion

Product: Cloud Logging
Feature slug: `logging-agent-partial-success-ingestion`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The Logging agent supports partial success so valid log entries are ingested even when some entries in a batch are invalid.

## Lifecycle

- Latest feature date: 2018-02-01
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- iam
- identity
- logging
- permission
- policy
- role

## Official Evidence

- [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-policies)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies)
