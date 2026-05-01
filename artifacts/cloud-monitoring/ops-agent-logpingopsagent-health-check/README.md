# Ops Agent LogPingOpsAgent health check

Product: Cloud Monitoring
Feature slug: `ops-agent-logpingopsagent-health-check`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

This health check writes an informational payload to the ops-agent-health log every 10 minutes to verify log delivery.

## Lifecycle

- Latest feature date: 2024-01-19
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- key
- logging
- policy

## Official Evidence

- [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/install-agent-vm-creation](https://docs.cloud.google.com/monitoring/agent/ops-agent/install-agent-vm-creation)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/installation](https://docs.cloud.google.com/monitoring/agent/ops-agent/installation)
