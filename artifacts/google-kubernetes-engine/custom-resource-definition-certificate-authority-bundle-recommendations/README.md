# Custom Resource Definition certificate authority bundle recommendations

Product: Google Kubernetes Engine
Feature slug: `custom-resource-definition-certificate-authority-bundle-recommendations`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

GKE provides insights and recommendations to identify clusters whose Custom Resource Definitions contain an invalid or malformed Certificate Authority bundle.

## Lifecycle

- Latest feature date: 2025-05-13
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
- firewall
- iam
- key
- logging
- permission
- policy
- private
- role
- secret
- security

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/crd-with-invalid-caBundle](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/crd-with-invalid-caBundle)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
