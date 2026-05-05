# Identity mapping store

Product: Vertex AI Search
Feature slug: `identity-mapping-store`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Introduces IdentityMappingStore support for mapping identities from third-party applications to an identity provider to enforce access control with synchronized external users.

## Lifecycle

- Latest feature date: 2025-01-24
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

- access (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest), [https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control), [https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control))
- allow (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest), [https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control), [https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control))
- audit (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest), [https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control), [https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control))
- auth (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest), [https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control), [https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control))
- authorization (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest), [https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control), [https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control))
- credential (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest), [https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control), [https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control))
- iam (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest), [https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control), [https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control))
- identity (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest), [https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control), [https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control))
- logging (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest), [https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control), [https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control))
- permission (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest), [https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control), [https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control))
- policy (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest), [https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control), [https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control))
- role (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest), [https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control), [https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control))
- token (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest), [https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control), [https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control))

## Official Evidence

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/rest)
