# Access Transparency for Vertex AI

Product: Vertex AI
Feature slug: `access-transparency-for-vertex-ai`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Vertex AI now offers Access Transparency, providing visibility into Google staff access to customer data and support activities.

## Lifecycle

- Latest feature date: 2021-07-27
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

- access (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency](https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy](https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy))
- auth (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency](https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy](https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy))
- authorization (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency](https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy](https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy))
- certificate (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency](https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy](https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy))
- encrypt (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency](https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy](https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy))
- firewall (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency](https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy](https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy))
- iam (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency](https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy](https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy))
- identity (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency](https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy](https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy))
- key (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency](https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy](https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy))
- kms (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency](https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy](https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy))
- logging (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency](https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy](https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy))
- permission (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency](https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy](https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy))
- policy (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency](https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy](https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy))
- role (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency](https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy](https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy))
- security (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency](https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy](https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy))
- token (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency](https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy](https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy))

## Official Evidence

- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy](https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy)
- [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control)
- [https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency](https://docs.cloud.google.com/vertex-ai/docs/general/access-transparency)
