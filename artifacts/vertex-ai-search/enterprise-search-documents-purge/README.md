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

- access
- allow
- audit
- auth
- authorization
- credential
- encrypt
- iam
- identity
- key
- logging
- permission
- policy
- role
- secret
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging](https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/delete-datastores](https://docs.cloud.google.com/generative-ai-app-builder/docs/delete-datastores)
