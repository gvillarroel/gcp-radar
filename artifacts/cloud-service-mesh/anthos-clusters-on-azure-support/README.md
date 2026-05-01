# Anthos Clusters on Azure support

Product: Cloud Service Mesh
Feature slug: `anthos-clusters-on-azure-support`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Cloud Service Mesh supports Anthos Clusters on Azure; Cloud Service Mesh supports Anthos Clusters on Azure.

## Lifecycle

- Latest feature date: 2023-02-21
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

## Security Capabilities

- access
- allow
- audit
- auth
- authorization
- certificate
- credential
- firewall
- iam
- identity
- logging
- permission
- policy
- role
- secret
- security

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/roles-permissions/anthosservicemesh](https://docs.cloud.google.com/iam/docs/roles-permissions/anthosservicemesh)
- [https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane)
- [https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/docs/supported-features-in-cluster)
- [https://docs.cloud.google.com/service-mesh/docs/tutorials/authz](https://docs.cloud.google.com/service-mesh/docs/tutorials/authz)
