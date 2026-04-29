# ConfigConnectorAlphaResources

Product: Config Controller
Feature slug: `configconnectoralpharesources`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

ConfigConnectorAlphaResources is an experimental feature that manages installation and upgrade of Config Connector v1alpha1 CRDs.

## Lifecycle

- Latest feature date: 2023-07-24
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
- allow
- audit
- auth
- certificate
- constraint
- credential
- iam
- permission
- policy
- role
- secret
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/iam](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/iam)
- [https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/manage-resources](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/manage-resources)
- [https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/reference/roles-permissions](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/reference/roles-permissions)
- [https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/setup](https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/setup)
