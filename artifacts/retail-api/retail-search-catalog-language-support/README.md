# Retail Search catalog language support

Product: Retail API
Feature slug: `retail-search-catalog-language-support`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Retail Search catalog language support includes Korean, Polish, and Turkish.

## Lifecycle

- Latest feature date: 2023-02-06
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

- access (evidence: [https://docs.cloud.google.com/retail/docs/catalog](https://docs.cloud.google.com/retail/docs/catalog), [https://docs.cloud.google.com/retail/docs/completion-overview](https://docs.cloud.google.com/retail/docs/completion-overview), [https://docs.cloud.google.com/iam/docs/roles-permissions/retail](https://docs.cloud.google.com/iam/docs/roles-permissions/retail), [https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide](https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide))
- allow (evidence: [https://docs.cloud.google.com/retail/docs/catalog](https://docs.cloud.google.com/retail/docs/catalog), [https://docs.cloud.google.com/retail/docs/completion-overview](https://docs.cloud.google.com/retail/docs/completion-overview), [https://docs.cloud.google.com/iam/docs/roles-permissions/retail](https://docs.cloud.google.com/iam/docs/roles-permissions/retail), [https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide](https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide))
- audit (evidence: [https://docs.cloud.google.com/retail/docs/catalog](https://docs.cloud.google.com/retail/docs/catalog), [https://docs.cloud.google.com/retail/docs/completion-overview](https://docs.cloud.google.com/retail/docs/completion-overview), [https://docs.cloud.google.com/iam/docs/roles-permissions/retail](https://docs.cloud.google.com/iam/docs/roles-permissions/retail), [https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide](https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide))
- auth (evidence: [https://docs.cloud.google.com/retail/docs/catalog](https://docs.cloud.google.com/retail/docs/catalog), [https://docs.cloud.google.com/retail/docs/completion-overview](https://docs.cloud.google.com/retail/docs/completion-overview), [https://docs.cloud.google.com/iam/docs/roles-permissions/retail](https://docs.cloud.google.com/iam/docs/roles-permissions/retail), [https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide](https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide))
- authorization (evidence: [https://docs.cloud.google.com/retail/docs/catalog](https://docs.cloud.google.com/retail/docs/catalog), [https://docs.cloud.google.com/retail/docs/completion-overview](https://docs.cloud.google.com/retail/docs/completion-overview), [https://docs.cloud.google.com/iam/docs/roles-permissions/retail](https://docs.cloud.google.com/iam/docs/roles-permissions/retail), [https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide](https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide))
- iam (evidence: [https://docs.cloud.google.com/retail/docs/catalog](https://docs.cloud.google.com/retail/docs/catalog), [https://docs.cloud.google.com/retail/docs/completion-overview](https://docs.cloud.google.com/retail/docs/completion-overview), [https://docs.cloud.google.com/iam/docs/roles-permissions/retail](https://docs.cloud.google.com/iam/docs/roles-permissions/retail), [https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide](https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide))
- identity (evidence: [https://docs.cloud.google.com/retail/docs/catalog](https://docs.cloud.google.com/retail/docs/catalog), [https://docs.cloud.google.com/retail/docs/completion-overview](https://docs.cloud.google.com/retail/docs/completion-overview), [https://docs.cloud.google.com/iam/docs/roles-permissions/retail](https://docs.cloud.google.com/iam/docs/roles-permissions/retail), [https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide](https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide))
- key (evidence: [https://docs.cloud.google.com/retail/docs/catalog](https://docs.cloud.google.com/retail/docs/catalog), [https://docs.cloud.google.com/retail/docs/completion-overview](https://docs.cloud.google.com/retail/docs/completion-overview), [https://docs.cloud.google.com/iam/docs/roles-permissions/retail](https://docs.cloud.google.com/iam/docs/roles-permissions/retail), [https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide](https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide))
- logging (evidence: [https://docs.cloud.google.com/retail/docs/catalog](https://docs.cloud.google.com/retail/docs/catalog), [https://docs.cloud.google.com/retail/docs/completion-overview](https://docs.cloud.google.com/retail/docs/completion-overview), [https://docs.cloud.google.com/iam/docs/roles-permissions/retail](https://docs.cloud.google.com/iam/docs/roles-permissions/retail), [https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide](https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide))
- permission (evidence: [https://docs.cloud.google.com/retail/docs/catalog](https://docs.cloud.google.com/retail/docs/catalog), [https://docs.cloud.google.com/retail/docs/completion-overview](https://docs.cloud.google.com/retail/docs/completion-overview), [https://docs.cloud.google.com/iam/docs/roles-permissions/retail](https://docs.cloud.google.com/iam/docs/roles-permissions/retail), [https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide](https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide))
- role (evidence: [https://docs.cloud.google.com/retail/docs/catalog](https://docs.cloud.google.com/retail/docs/catalog), [https://docs.cloud.google.com/retail/docs/completion-overview](https://docs.cloud.google.com/retail/docs/completion-overview), [https://docs.cloud.google.com/iam/docs/roles-permissions/retail](https://docs.cloud.google.com/iam/docs/roles-permissions/retail), [https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide](https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide))
- security (evidence: [https://docs.cloud.google.com/retail/docs/catalog](https://docs.cloud.google.com/retail/docs/catalog), [https://docs.cloud.google.com/retail/docs/completion-overview](https://docs.cloud.google.com/retail/docs/completion-overview), [https://docs.cloud.google.com/iam/docs/roles-permissions/retail](https://docs.cloud.google.com/iam/docs/roles-permissions/retail), [https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide](https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide))
- token (evidence: [https://docs.cloud.google.com/retail/docs/catalog](https://docs.cloud.google.com/retail/docs/catalog), [https://docs.cloud.google.com/retail/docs/completion-overview](https://docs.cloud.google.com/retail/docs/completion-overview), [https://docs.cloud.google.com/iam/docs/roles-permissions/retail](https://docs.cloud.google.com/iam/docs/roles-permissions/retail), [https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide](https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide))

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/roles-permissions/retail](https://docs.cloud.google.com/iam/docs/roles-permissions/retail)
- [https://docs.cloud.google.com/retail/docs/catalog](https://docs.cloud.google.com/retail/docs/catalog)
- [https://docs.cloud.google.com/retail/docs/completion-overview](https://docs.cloud.google.com/retail/docs/completion-overview)
- [https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide](https://docs.cloud.google.com/retail/docs/conversational-commerce-dev-guide)
