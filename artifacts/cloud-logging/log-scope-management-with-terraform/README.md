# Log scope management with Terraform

Product: Cloud Logging
Feature slug: `log-scope-management-with-terraform`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Terraform can create or update a log scope.

## Lifecycle

- Latest feature date: 2024-10-02
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies))
- auth (evidence: [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies))
- certificate (evidence: [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies))
- credential (evidence: [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies))
- firewall (evidence: [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies))
- iam (evidence: [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies))
- key (evidence: [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies))
- kms (evidence: [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies))
- logging (evidence: [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies))
- permission (evidence: [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies))
- policy (evidence: [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies))
- private (evidence: [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies))
- role (evidence: [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies))
- security (evidence: [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies))

## Official Evidence

- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies)
- [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list)
- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
