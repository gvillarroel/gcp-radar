# Enterprise Search documents purge

Product: Vertex AI Search
Feature slug: `enterprise-search-documents-purge`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Enterprise Search now supports a documents.purge method to delete data from a datastore.

## Lifecycle

- Latest feature date: 2023-04-28
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

- access (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/delete-datastores](https://docs.cloud.google.com/generative-ai-app-builder/docs/delete-datastores), [https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging](https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging), [https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control))
- allow (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/delete-datastores](https://docs.cloud.google.com/generative-ai-app-builder/docs/delete-datastores), [https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging](https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging), [https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control))
- audit (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/delete-datastores](https://docs.cloud.google.com/generative-ai-app-builder/docs/delete-datastores), [https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging](https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging), [https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control))
- auth (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/delete-datastores](https://docs.cloud.google.com/generative-ai-app-builder/docs/delete-datastores), [https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging](https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging), [https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control))
- authorization (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/delete-datastores](https://docs.cloud.google.com/generative-ai-app-builder/docs/delete-datastores), [https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging](https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging), [https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control))
- credential (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/delete-datastores](https://docs.cloud.google.com/generative-ai-app-builder/docs/delete-datastores), [https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging](https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging), [https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control))
- encrypt (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/delete-datastores](https://docs.cloud.google.com/generative-ai-app-builder/docs/delete-datastores), [https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging](https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging), [https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control))
- iam (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/delete-datastores](https://docs.cloud.google.com/generative-ai-app-builder/docs/delete-datastores), [https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging](https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging), [https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control))
- identity (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/delete-datastores](https://docs.cloud.google.com/generative-ai-app-builder/docs/delete-datastores), [https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging](https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging), [https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control))
- key (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/delete-datastores](https://docs.cloud.google.com/generative-ai-app-builder/docs/delete-datastores), [https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging](https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging), [https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control))
- logging (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/delete-datastores](https://docs.cloud.google.com/generative-ai-app-builder/docs/delete-datastores), [https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging](https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging), [https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control))
- permission (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/delete-datastores](https://docs.cloud.google.com/generative-ai-app-builder/docs/delete-datastores), [https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging](https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging), [https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control))
- policy (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/delete-datastores](https://docs.cloud.google.com/generative-ai-app-builder/docs/delete-datastores), [https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging](https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging), [https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control))
- role (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/delete-datastores](https://docs.cloud.google.com/generative-ai-app-builder/docs/delete-datastores), [https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging](https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging), [https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control))
- secret (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/delete-datastores](https://docs.cloud.google.com/generative-ai-app-builder/docs/delete-datastores), [https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging](https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging), [https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control))
- security (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/delete-datastores](https://docs.cloud.google.com/generative-ai-app-builder/docs/delete-datastores), [https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging](https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging), [https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control))
- token (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/delete-datastores](https://docs.cloud.google.com/generative-ai-app-builder/docs/delete-datastores), [https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging](https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging), [https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control))

## Official Evidence

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging](https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/delete-datastores](https://docs.cloud.google.com/generative-ai-app-builder/docs/delete-datastores)
