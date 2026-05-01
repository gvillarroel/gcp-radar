# Regional availability

Product: Config Controller
Feature slug: `regional-availability`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Config Controller supports deployment in additional Google Cloud regions; Config Controller supports deployment in additional Google Cloud regions.

## Lifecycle

- Latest feature date: 2024-06-25
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

- access
- audit
- certificate
- credential
- iam
- permission
- policy
- role
- secret
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/availability](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/availability)
- [https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/reference/roles-permissions](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/reference/roles-permissions)
- [https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/scalability](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/scalability)
- [https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/sharding](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/sharding)
