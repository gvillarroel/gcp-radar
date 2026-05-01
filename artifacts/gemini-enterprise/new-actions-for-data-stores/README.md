# New actions for data stores

Product: Gemini Enterprise
Feature slug: `new-actions-for-data-stores`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Users can use new actions for GitHub, Microsoft SharePoint, Notion, and Shopify data stores; Users can use new actions for Confluence Data Center, Monday, Shopify, and Zendesk data stores.

## Lifecycle

- Latest feature date: 2026-03-11
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
- private
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control)
- [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores)
- [https://docs.cloud.google.com/gemini/enterprise/docs/concepts](https://docs.cloud.google.com/gemini/enterprise/docs/concepts)
- [https://docs.cloud.google.com/gemini/enterprise/docs/configure-autocomplete](https://docs.cloud.google.com/gemini/enterprise/docs/configure-autocomplete)
