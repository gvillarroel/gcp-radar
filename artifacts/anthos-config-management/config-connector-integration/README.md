# Config Connector integration

Product: Anthos Config Management
Feature slug: `config-connector-integration`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Config Connector integration lets Anthos Config Management manage Google Cloud resources through Kubernetes configuration; Config Connector integration lets Anthos Config Management manage Google Cloud resources through Kubernetes configuration.

## Lifecycle

- Latest feature date: 2020-09-24
- Deprecation date: none recorded
- Status: feature_observed

## IAM

Explicit IAM evidence was found in the supporting documentation.

Roles:

- `roles/accessapproval.admin`
- `roles/accessapproval.approver`
- `roles/accessapproval.configEditor`

Permissions:

- `resourcemanager.projects.list`

## Security Capabilities

- access
- allow
- auth
- authorization
- constraint
- firewall
- iam
- identity
- key
- kms
- logging
- permission
- policy
- role
- secret
- security

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes)
- [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/safe-rollouts-with-config-sync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/safe-rollouts-with-config-sync)
