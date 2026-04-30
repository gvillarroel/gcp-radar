# Istio 1.7 compatibility

Product: Cloud Service Mesh
Feature slug: `istio-1-7-compatibility`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Anthos Service Mesh 1.7 is compatible with and includes the feature set of Istio 1.7, subject to supported-feature limitations; Anthos Service Mesh 1.7 is compatible with and includes the feature set of Istio 1.7, subject to supported-feature limitations.

## Lifecycle

- Latest feature date: 2020-11-03
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
- [https://docs.cloud.google.com/service-mesh/docs/migrate-istio-to-anthos-service-mesh](https://docs.cloud.google.com/service-mesh/docs/migrate-istio-to-anthos-service-mesh)
- [https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane)
- [https://docs.cloud.google.com/service-mesh/docs/supported-features-managed](https://docs.cloud.google.com/service-mesh/docs/supported-features-managed)
