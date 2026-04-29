# Anthos Policy Controller CIS Kubernetes Benchmark 1.5.1 policies

Product: Anthos Config Management
Feature slug: `anthos-policy-controller-cis-kubernetes-benchmark-1-5-1-policies`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Anthos Policy Controller includes additional policies covering many CIS Kubernetes Benchmark 1.5.1 controls.

## Lifecycle

- Latest feature date: 2020-12-10
- Deprecation date: none recorded
- Status: feature_observed

## IAM

Explicit IAM evidence was found in the supporting documentation.

Roles:

- `roles/accessapproval.admin`
- `roles/accessapproval.approver`
- `roles/accessapproval.configEditor`

Permissions:

- `accessapproval.requests.approve`
- `accessapproval.requests.dismiss`
- `accessapproval.requests.get`
- `accessapproval.requests.invalidate`
- `accessapproval.requests.list`
- `accessapproval.serviceAccounts.get`
- `accessapproval.settings.delete`
- `accessapproval.settings.get`
- `accessapproval.settings.update`
- `resourcemanager.projects.get`
- `resourcemanager.projects.list`

## Security Capabilities

- access
- allow
- armor
- audit
- auth
- authorization
- certificate
- confidential
- constraint
- credential
- encrypt
- firewall
- iam
- identity
- key
- kms
- logging
- permission
- policy
- private
- role
- secret
- security
- threat
- token

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/overview](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/overview)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/safe-rollouts-with-config-sync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/safe-rollouts-with-config-sync)
