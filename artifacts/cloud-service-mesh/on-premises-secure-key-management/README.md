# On-premises secure key management

Product: Cloud Service Mesh
Feature slug: `on-premises-secure-key-management`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Anthos Service Mesh supports on-premises secure key management with Thales Luna HSM 7+ and HashiCorp Vault; Anthos Service Mesh supports on-premises secure key management with Thales Luna HSM 7+ and HashiCorp Vault.

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
- armor
- audit
- auth
- authorization
- certificate
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
- [https://docs.cloud.google.com/iam/docs/federated-identity-supported-services](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services)
- [https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane](https://docs.cloud.google.com/service-mesh/docs/onboarding/provision-control-plane)
- [https://docs.cloud.google.com/service-mesh/docs/security-bulletins](https://docs.cloud.google.com/service-mesh/docs/security-bulletins)
