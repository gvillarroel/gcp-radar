# Ops Agent startup health checks

Product: Cloud Logging
Feature slug: `ops-agent-startup-health-checks`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Ops Agent performs startup health checks to detect conditions that prevent correct operation.

## Lifecycle

- Latest feature date: 2023-02-16
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- key (evidence: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation](https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation), [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies), [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs))
- logging (evidence: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation](https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation), [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies), [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs))
- policy (evidence: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation](https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation), [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies), [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs))
- security (evidence: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation](https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation), [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies), [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs))
- threat (evidence: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation](https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation), [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies), [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs))

## Official Evidence

- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation](https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation)
- [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs)
