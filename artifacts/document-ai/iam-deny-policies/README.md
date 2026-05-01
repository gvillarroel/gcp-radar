# IAM deny policies

Product: Document AI
Feature slug: `iam-deny-policies`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Document AI supports IAM deny policies that block specified principals from using permissions on Google Cloud resources; Document AI supports IAM deny policies that block specified principals from using permissions on Google Cloud resources.

## Lifecycle

- Latest feature date: 2025-07-04
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

- [https://docs.cloud.google.com/document-ai/docs/custom-org-policies](https://docs.cloud.google.com/document-ai/docs/custom-org-policies)
- [https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr](https://docs.cloud.google.com/document-ai/docs/enterprise-document-ocr)
- [https://docs.cloud.google.com/document-ai/docs/process-documents-ocr](https://docs.cloud.google.com/document-ai/docs/process-documents-ocr)
- [https://docs.cloud.google.com/iam/docs/deny-permissions-support](https://docs.cloud.google.com/iam/docs/deny-permissions-support)
