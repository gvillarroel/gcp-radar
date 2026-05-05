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

- access (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/crd-with-invalid-caBundle](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/crd-with-invalid-caBundle), [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates))
- allow (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/crd-with-invalid-caBundle](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/crd-with-invalid-caBundle), [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates))
- audit (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/crd-with-invalid-caBundle](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/crd-with-invalid-caBundle), [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates))
- auth (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/crd-with-invalid-caBundle](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/crd-with-invalid-caBundle), [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates))
- certificate (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/crd-with-invalid-caBundle](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/crd-with-invalid-caBundle), [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates))
- constraint (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/crd-with-invalid-caBundle](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/crd-with-invalid-caBundle), [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates))
- firewall (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/crd-with-invalid-caBundle](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/crd-with-invalid-caBundle), [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates))
- iam (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/crd-with-invalid-caBundle](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/crd-with-invalid-caBundle), [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates))
- key (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/crd-with-invalid-caBundle](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/crd-with-invalid-caBundle), [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates))
- logging (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/crd-with-invalid-caBundle](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/crd-with-invalid-caBundle), [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates))
- permission (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/crd-with-invalid-caBundle](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/crd-with-invalid-caBundle), [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates))
- policy (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/crd-with-invalid-caBundle](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/crd-with-invalid-caBundle), [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates))
- private (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/crd-with-invalid-caBundle](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/crd-with-invalid-caBundle), [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates))
- role (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/crd-with-invalid-caBundle](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/crd-with-invalid-caBundle), [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates))
- secret (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/crd-with-invalid-caBundle](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/crd-with-invalid-caBundle), [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates))
- security (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/crd-with-invalid-caBundle](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/crd-with-invalid-caBundle), [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates))

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/access-private-registries-private-certificates)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/crd-with-invalid-caBundle](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/crd-with-invalid-caBundle)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
