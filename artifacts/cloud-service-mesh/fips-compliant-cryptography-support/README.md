# FIPS-compliant cryptography support

Product: Cloud Service Mesh
Feature slug: `fips-compliant-cryptography-support`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Anthos Service Mesh components and proxies are built with FIPS-compliant cryptographic options and algorithms; Anthos Service Mesh components and proxies are built with FIPS-compliant cryptographic options and algorithms.

## Lifecycle

- Latest feature date: 2020-07-22
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
- authorization
- certificate
- credential
- encrypt
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
- [https://docs.cloud.google.com/service-mesh/docs/migrate-istio-to-anthos-service-mesh](https://docs.cloud.google.com/service-mesh/docs/migrate-istio-to-anthos-service-mesh)
- [https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane)
- [https://docs.cloud.google.com/service-mesh/docs/overview](https://docs.cloud.google.com/service-mesh/docs/overview)
