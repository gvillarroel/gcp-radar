# Ops Agent automatic installation during VM creation

Product: Cloud Monitoring
Feature slug: `ops-agent-automatic-installation-during-vm-creation`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The Google Cloud console can automatically install and reinstall the Ops Agent when a VM instance is created.

## Lifecycle

- Latest feature date: 2023-07-06
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- logging (evidence: [https://docs.cloud.google.com/monitoring/agent/ops-agent/install-agent-vm-creation](https://docs.cloud.google.com/monitoring/agent/ops-agent/install-agent-vm-creation), [https://docs.cloud.google.com/monitoring/agent/ops-agent/installation](https://docs.cloud.google.com/monitoring/agent/ops-agent/installation), [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies))
- policy (evidence: [https://docs.cloud.google.com/monitoring/agent/ops-agent/install-agent-vm-creation](https://docs.cloud.google.com/monitoring/agent/ops-agent/install-agent-vm-creation), [https://docs.cloud.google.com/monitoring/agent/ops-agent/installation](https://docs.cloud.google.com/monitoring/agent/ops-agent/installation), [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies))
- role (evidence: [https://docs.cloud.google.com/monitoring/agent/ops-agent/install-agent-vm-creation](https://docs.cloud.google.com/monitoring/agent/ops-agent/install-agent-vm-creation), [https://docs.cloud.google.com/monitoring/agent/ops-agent/installation](https://docs.cloud.google.com/monitoring/agent/ops-agent/installation), [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies))

## Official Evidence

- [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/install-agent-vm-creation](https://docs.cloud.google.com/monitoring/agent/ops-agent/install-agent-vm-creation)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/installation](https://docs.cloud.google.com/monitoring/agent/ops-agent/installation)
