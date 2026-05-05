# K8sStorageClass constraint template

Product: Anthos Config Management
Feature slug: `k8sstorageclass-constraint-template`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

This constraint template applies policy controls related to Kubernetes StorageClass resources.

## Lifecycle

- Latest feature date: 2022-09-15
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

- access (evidence: [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages))
- allow (evidence: [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages))
- armor (evidence: [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages))
- audit (evidence: [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages))
- auth (evidence: [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages))
- authorization (evidence: [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages))
- certificate (evidence: [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages))
- confidential (evidence: [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages))
- constraint (evidence: [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages))
- credential (evidence: [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages))
- encrypt (evidence: [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages))
- firewall (evidence: [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages))
- iam (evidence: [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages))
- identity (evidence: [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages))
- key (evidence: [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages))
- kms (evidence: [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages))
- logging (evidence: [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages))
- permission (evidence: [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages))
- policy (evidence: [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages))
- private (evidence: [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages))
- role (evidence: [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages))
- secret (evidence: [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages))
- security (evidence: [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages))
- threat (evidence: [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages))
- token (evidence: [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support), [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages))

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)
- [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-packages)
