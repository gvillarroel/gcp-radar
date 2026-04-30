# Layout parser image and table annotations

Product: Document AI
Feature slug: `layout-parser-image-and-table-annotations`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Layout parser can detect images and tables in parsed documents and annotate them as descriptive text blocks; Layout parser can detect images and tables in parsed documents and annotate them as descriptive text blocks.

## Lifecycle

- Latest feature date: 2025-10-17
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

- [https://docs.cloud.google.com/document-ai/docs/handle-response](https://docs.cloud.google.com/document-ai/docs/handle-response)
- [https://docs.cloud.google.com/document-ai/docs/layout-parse-chunk](https://docs.cloud.google.com/document-ai/docs/layout-parse-chunk)
- [https://docs.cloud.google.com/document-ai/docs/layout-parse-quickstart](https://docs.cloud.google.com/document-ai/docs/layout-parse-quickstart)
- [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support)
