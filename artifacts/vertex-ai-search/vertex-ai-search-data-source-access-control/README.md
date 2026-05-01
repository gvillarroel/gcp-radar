# Vertex AI Search data source access control

Product: Vertex AI Search
Feature slug: `vertex-ai-search-data-source-access-control`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Vertex AI Search offers Public Preview access control for BigQuery, Cloud Storage, and Confluence data sources so users see only results they are authorized to access; Vertex AI Search adds preview support for access-controlled data sources in BigQuery, Cloud Storage, and Confluence, using identity provider-based authorization to limit which search results users can see.

## Lifecycle

- Latest feature date: 2024-02-28
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
- auth
- authorization
- credential
- iam
- identity
- logging
- permission
- policy
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/access-control)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control)
