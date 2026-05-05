# TPU Monitoring tab

Product: Cloud TPU
Feature slug: `tpu-monitoring-tab`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The TPU Monitoring tab provides in-context metrics visibility and quick access to TPU logs.

## Lifecycle

- Latest feature date: 2020-09-11
- Deprecation date: none recorded
- Status: feature_observed

## IAM

Explicit IAM evidence was found in the supporting documentation.

Roles:

- `roles/accessapproval.admin`
- `roles/accessapproval.approver`
- `roles/accessapproval.configEditor`

Permissions:

- `resourcemanager.projects.get`
- `resourcemanager.projects.list`

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/tpu/docs/quick-starts](https://docs.cloud.google.com/tpu/docs/quick-starts), [https://docs.cloud.google.com/tpu/docs/troubleshooting/troubleshooting](https://docs.cloud.google.com/tpu/docs/troubleshooting/troubleshooting), [https://docs.cloud.google.com/iam/docs/roles-permissions/tpu](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu))
- audit (evidence: [https://docs.cloud.google.com/tpu/docs/quick-starts](https://docs.cloud.google.com/tpu/docs/quick-starts), [https://docs.cloud.google.com/tpu/docs/troubleshooting/troubleshooting](https://docs.cloud.google.com/tpu/docs/troubleshooting/troubleshooting), [https://docs.cloud.google.com/iam/docs/roles-permissions/tpu](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu))
- auth (evidence: [https://docs.cloud.google.com/tpu/docs/quick-starts](https://docs.cloud.google.com/tpu/docs/quick-starts), [https://docs.cloud.google.com/tpu/docs/troubleshooting/troubleshooting](https://docs.cloud.google.com/tpu/docs/troubleshooting/troubleshooting), [https://docs.cloud.google.com/iam/docs/roles-permissions/tpu](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu))
- authorization (evidence: [https://docs.cloud.google.com/tpu/docs/quick-starts](https://docs.cloud.google.com/tpu/docs/quick-starts), [https://docs.cloud.google.com/tpu/docs/troubleshooting/troubleshooting](https://docs.cloud.google.com/tpu/docs/troubleshooting/troubleshooting), [https://docs.cloud.google.com/iam/docs/roles-permissions/tpu](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu))
- certificate (evidence: [https://docs.cloud.google.com/tpu/docs/quick-starts](https://docs.cloud.google.com/tpu/docs/quick-starts), [https://docs.cloud.google.com/tpu/docs/troubleshooting/troubleshooting](https://docs.cloud.google.com/tpu/docs/troubleshooting/troubleshooting), [https://docs.cloud.google.com/iam/docs/roles-permissions/tpu](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu))
- encrypt (evidence: [https://docs.cloud.google.com/tpu/docs/quick-starts](https://docs.cloud.google.com/tpu/docs/quick-starts), [https://docs.cloud.google.com/tpu/docs/troubleshooting/troubleshooting](https://docs.cloud.google.com/tpu/docs/troubleshooting/troubleshooting), [https://docs.cloud.google.com/iam/docs/roles-permissions/tpu](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu))
- firewall (evidence: [https://docs.cloud.google.com/tpu/docs/quick-starts](https://docs.cloud.google.com/tpu/docs/quick-starts), [https://docs.cloud.google.com/tpu/docs/troubleshooting/troubleshooting](https://docs.cloud.google.com/tpu/docs/troubleshooting/troubleshooting), [https://docs.cloud.google.com/iam/docs/roles-permissions/tpu](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu))
- iam (evidence: [https://docs.cloud.google.com/tpu/docs/quick-starts](https://docs.cloud.google.com/tpu/docs/quick-starts), [https://docs.cloud.google.com/tpu/docs/troubleshooting/troubleshooting](https://docs.cloud.google.com/tpu/docs/troubleshooting/troubleshooting), [https://docs.cloud.google.com/iam/docs/roles-permissions/tpu](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu))
- identity (evidence: [https://docs.cloud.google.com/tpu/docs/quick-starts](https://docs.cloud.google.com/tpu/docs/quick-starts), [https://docs.cloud.google.com/tpu/docs/troubleshooting/troubleshooting](https://docs.cloud.google.com/tpu/docs/troubleshooting/troubleshooting), [https://docs.cloud.google.com/iam/docs/roles-permissions/tpu](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu))
- key (evidence: [https://docs.cloud.google.com/tpu/docs/quick-starts](https://docs.cloud.google.com/tpu/docs/quick-starts), [https://docs.cloud.google.com/tpu/docs/troubleshooting/troubleshooting](https://docs.cloud.google.com/tpu/docs/troubleshooting/troubleshooting), [https://docs.cloud.google.com/iam/docs/roles-permissions/tpu](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu))
- kms (evidence: [https://docs.cloud.google.com/tpu/docs/quick-starts](https://docs.cloud.google.com/tpu/docs/quick-starts), [https://docs.cloud.google.com/tpu/docs/troubleshooting/troubleshooting](https://docs.cloud.google.com/tpu/docs/troubleshooting/troubleshooting), [https://docs.cloud.google.com/iam/docs/roles-permissions/tpu](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu))
- logging (evidence: [https://docs.cloud.google.com/tpu/docs/quick-starts](https://docs.cloud.google.com/tpu/docs/quick-starts), [https://docs.cloud.google.com/tpu/docs/troubleshooting/troubleshooting](https://docs.cloud.google.com/tpu/docs/troubleshooting/troubleshooting), [https://docs.cloud.google.com/iam/docs/roles-permissions/tpu](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu))
- permission (evidence: [https://docs.cloud.google.com/tpu/docs/quick-starts](https://docs.cloud.google.com/tpu/docs/quick-starts), [https://docs.cloud.google.com/tpu/docs/troubleshooting/troubleshooting](https://docs.cloud.google.com/tpu/docs/troubleshooting/troubleshooting), [https://docs.cloud.google.com/iam/docs/roles-permissions/tpu](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu))
- policy (evidence: [https://docs.cloud.google.com/tpu/docs/quick-starts](https://docs.cloud.google.com/tpu/docs/quick-starts), [https://docs.cloud.google.com/tpu/docs/troubleshooting/troubleshooting](https://docs.cloud.google.com/tpu/docs/troubleshooting/troubleshooting), [https://docs.cloud.google.com/iam/docs/roles-permissions/tpu](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu))
- private (evidence: [https://docs.cloud.google.com/tpu/docs/quick-starts](https://docs.cloud.google.com/tpu/docs/quick-starts), [https://docs.cloud.google.com/tpu/docs/troubleshooting/troubleshooting](https://docs.cloud.google.com/tpu/docs/troubleshooting/troubleshooting), [https://docs.cloud.google.com/iam/docs/roles-permissions/tpu](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu))
- role (evidence: [https://docs.cloud.google.com/tpu/docs/quick-starts](https://docs.cloud.google.com/tpu/docs/quick-starts), [https://docs.cloud.google.com/tpu/docs/troubleshooting/troubleshooting](https://docs.cloud.google.com/tpu/docs/troubleshooting/troubleshooting), [https://docs.cloud.google.com/iam/docs/roles-permissions/tpu](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu))
- security (evidence: [https://docs.cloud.google.com/tpu/docs/quick-starts](https://docs.cloud.google.com/tpu/docs/quick-starts), [https://docs.cloud.google.com/tpu/docs/troubleshooting/troubleshooting](https://docs.cloud.google.com/tpu/docs/troubleshooting/troubleshooting), [https://docs.cloud.google.com/iam/docs/roles-permissions/tpu](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu))

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/roles-permissions/tpu](https://docs.cloud.google.com/iam/docs/roles-permissions/tpu)
- [https://docs.cloud.google.com/tpu/docs/quick-starts](https://docs.cloud.google.com/tpu/docs/quick-starts)
- [https://docs.cloud.google.com/tpu/docs/troubleshooting/troubleshooting](https://docs.cloud.google.com/tpu/docs/troubleshooting/troubleshooting)
