# App Hub labels in log entries

Product: Cloud Logging
Feature slug: `app-hub-labels-in-log-entries`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

App Hub application labels are attached to log entries and exposed as application, service, and workload facets in Logs Explorer.

## Lifecycle

- Latest feature date: 2025-03-13
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration), [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration), [https://docs.cloud.google.com/python/docs/reference/logging/latest/entries](https://docs.cloud.google.com/python/docs/reference/logging/latest/entries))
- allow (evidence: [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration), [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration), [https://docs.cloud.google.com/python/docs/reference/logging/latest/entries](https://docs.cloud.google.com/python/docs/reference/logging/latest/entries))
- audit (evidence: [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration), [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration), [https://docs.cloud.google.com/python/docs/reference/logging/latest/entries](https://docs.cloud.google.com/python/docs/reference/logging/latest/entries))
- auth (evidence: [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration), [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration), [https://docs.cloud.google.com/python/docs/reference/logging/latest/entries](https://docs.cloud.google.com/python/docs/reference/logging/latest/entries))
- certificate (evidence: [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration), [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration), [https://docs.cloud.google.com/python/docs/reference/logging/latest/entries](https://docs.cloud.google.com/python/docs/reference/logging/latest/entries))
- key (evidence: [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration), [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration), [https://docs.cloud.google.com/python/docs/reference/logging/latest/entries](https://docs.cloud.google.com/python/docs/reference/logging/latest/entries))
- logging (evidence: [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration), [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration), [https://docs.cloud.google.com/python/docs/reference/logging/latest/entries](https://docs.cloud.google.com/python/docs/reference/logging/latest/entries))
- security (evidence: [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration), [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration), [https://docs.cloud.google.com/python/docs/reference/logging/latest/entries](https://docs.cloud.google.com/python/docs/reference/logging/latest/entries))

## Official Evidence

- [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration)
- [https://docs.cloud.google.com/python/docs/reference/logging/latest/entries](https://docs.cloud.google.com/python/docs/reference/logging/latest/entries)
