# Certificate Authority Service integration

Product: Cloud Service Mesh
Feature slug: `certificate-authority-service-integration`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Certificate Authority Service integration lets Anthos Service Mesh use CA Service to sign mutual TLS certificates; Certificate Authority Service integration lets Anthos Service Mesh use CA Service to sign mutual TLS certificates.

## Lifecycle

- Latest feature date: 2021-10-06
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

- [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support)
- [https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane)
- [https://docs.cloud.google.com/service-mesh/docs/security-bulletins](https://docs.cloud.google.com/service-mesh/docs/security-bulletins)
- [https://docs.cloud.google.com/service-mesh/docs/security/security-overview](https://docs.cloud.google.com/service-mesh/docs/security/security-overview)
