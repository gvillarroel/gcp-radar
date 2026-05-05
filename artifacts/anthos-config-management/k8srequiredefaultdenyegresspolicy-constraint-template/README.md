# K8sRequireDefaultDenyEgressPolicy constraint template

Product: Anthos Config Management
Feature slug: `k8srequiredefaultdenyegresspolicy-constraint-template`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

This constraint template requires a default deny egress network policy configuration.

## Lifecycle

- Latest feature date: 2022-12-08
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

- access (evidence: [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements))
- allow (evidence: [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements))
- armor (evidence: [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements))
- audit (evidence: [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements))
- auth (evidence: [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements))
- authorization (evidence: [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements))
- certificate (evidence: [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements))
- confidential (evidence: [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements))
- constraint (evidence: [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements))
- credential (evidence: [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements))
- encrypt (evidence: [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements))
- firewall (evidence: [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements))
- iam (evidence: [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements))
- identity (evidence: [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements))
- key (evidence: [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements))
- kms (evidence: [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements))
- logging (evidence: [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements))
- permission (evidence: [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements))
- policy (evidence: [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements))
- private (evidence: [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements))
- role (evidence: [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements))
- secret (evidence: [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements))
- security (evidence: [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements))
- threat (evidence: [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements))
- token (evidence: [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements))

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)
- [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements)
