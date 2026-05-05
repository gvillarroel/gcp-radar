# Ops Agent disk buffer usage limits

Product: Cloud Logging
Feature slug: `ops-agent-disk-buffer-usage-limits`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Ops Agent limits disk space used for buffering unsent logging data during outages.

## Lifecycle

- Latest feature date: 2023-03-10
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration), [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration), [https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting](https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting))
- audit (evidence: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration), [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration), [https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting](https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting))
- auth (evidence: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration), [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration), [https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting](https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting))
- certificate (evidence: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration), [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration), [https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting](https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting))
- credential (evidence: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration), [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration), [https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting](https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting))
- iam (evidence: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration), [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration), [https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting](https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting))
- identity (evidence: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration), [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration), [https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting](https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting))
- key (evidence: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration), [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration), [https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting](https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting))
- logging (evidence: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration), [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration), [https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting](https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting))
- permission (evidence: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration), [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration), [https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting](https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting))
- private (evidence: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration), [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration), [https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting](https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting))
- token (evidence: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration), [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration), [https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting](https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting))

## Official Evidence

- [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration)
- [https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting](https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration)
