# Retail console

Product: Retail API
Feature slug: `retail-console`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

A unified console for managing Recommendations AI and Retail Search in one project.

## Lifecycle

- Latest feature date: 2022-01-21
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

- access (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/retail](https://docs.cloud.google.com/iam/docs/roles-permissions/retail), [https://docs.cloud.google.com/retail/docs/setting-up](https://docs.cloud.google.com/retail/docs/setting-up), [https://docs.cloud.google.com/retail/docs/catalog](https://docs.cloud.google.com/retail/docs/catalog), [https://docs.cloud.google.com/retail/docs/create-controls](https://docs.cloud.google.com/retail/docs/create-controls))
- audit (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/retail](https://docs.cloud.google.com/iam/docs/roles-permissions/retail), [https://docs.cloud.google.com/retail/docs/setting-up](https://docs.cloud.google.com/retail/docs/setting-up), [https://docs.cloud.google.com/retail/docs/catalog](https://docs.cloud.google.com/retail/docs/catalog), [https://docs.cloud.google.com/retail/docs/create-controls](https://docs.cloud.google.com/retail/docs/create-controls))
- auth (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/retail](https://docs.cloud.google.com/iam/docs/roles-permissions/retail), [https://docs.cloud.google.com/retail/docs/setting-up](https://docs.cloud.google.com/retail/docs/setting-up), [https://docs.cloud.google.com/retail/docs/catalog](https://docs.cloud.google.com/retail/docs/catalog), [https://docs.cloud.google.com/retail/docs/create-controls](https://docs.cloud.google.com/retail/docs/create-controls))
- authorization (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/retail](https://docs.cloud.google.com/iam/docs/roles-permissions/retail), [https://docs.cloud.google.com/retail/docs/setting-up](https://docs.cloud.google.com/retail/docs/setting-up), [https://docs.cloud.google.com/retail/docs/catalog](https://docs.cloud.google.com/retail/docs/catalog), [https://docs.cloud.google.com/retail/docs/create-controls](https://docs.cloud.google.com/retail/docs/create-controls))
- iam (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/retail](https://docs.cloud.google.com/iam/docs/roles-permissions/retail), [https://docs.cloud.google.com/retail/docs/setting-up](https://docs.cloud.google.com/retail/docs/setting-up), [https://docs.cloud.google.com/retail/docs/catalog](https://docs.cloud.google.com/retail/docs/catalog), [https://docs.cloud.google.com/retail/docs/create-controls](https://docs.cloud.google.com/retail/docs/create-controls))
- identity (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/retail](https://docs.cloud.google.com/iam/docs/roles-permissions/retail), [https://docs.cloud.google.com/retail/docs/setting-up](https://docs.cloud.google.com/retail/docs/setting-up), [https://docs.cloud.google.com/retail/docs/catalog](https://docs.cloud.google.com/retail/docs/catalog), [https://docs.cloud.google.com/retail/docs/create-controls](https://docs.cloud.google.com/retail/docs/create-controls))
- key (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/retail](https://docs.cloud.google.com/iam/docs/roles-permissions/retail), [https://docs.cloud.google.com/retail/docs/setting-up](https://docs.cloud.google.com/retail/docs/setting-up), [https://docs.cloud.google.com/retail/docs/catalog](https://docs.cloud.google.com/retail/docs/catalog), [https://docs.cloud.google.com/retail/docs/create-controls](https://docs.cloud.google.com/retail/docs/create-controls))
- logging (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/retail](https://docs.cloud.google.com/iam/docs/roles-permissions/retail), [https://docs.cloud.google.com/retail/docs/setting-up](https://docs.cloud.google.com/retail/docs/setting-up), [https://docs.cloud.google.com/retail/docs/catalog](https://docs.cloud.google.com/retail/docs/catalog), [https://docs.cloud.google.com/retail/docs/create-controls](https://docs.cloud.google.com/retail/docs/create-controls))
- permission (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/retail](https://docs.cloud.google.com/iam/docs/roles-permissions/retail), [https://docs.cloud.google.com/retail/docs/setting-up](https://docs.cloud.google.com/retail/docs/setting-up), [https://docs.cloud.google.com/retail/docs/catalog](https://docs.cloud.google.com/retail/docs/catalog), [https://docs.cloud.google.com/retail/docs/create-controls](https://docs.cloud.google.com/retail/docs/create-controls))
- role (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/retail](https://docs.cloud.google.com/iam/docs/roles-permissions/retail), [https://docs.cloud.google.com/retail/docs/setting-up](https://docs.cloud.google.com/retail/docs/setting-up), [https://docs.cloud.google.com/retail/docs/catalog](https://docs.cloud.google.com/retail/docs/catalog), [https://docs.cloud.google.com/retail/docs/create-controls](https://docs.cloud.google.com/retail/docs/create-controls))
- security (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/retail](https://docs.cloud.google.com/iam/docs/roles-permissions/retail), [https://docs.cloud.google.com/retail/docs/setting-up](https://docs.cloud.google.com/retail/docs/setting-up), [https://docs.cloud.google.com/retail/docs/catalog](https://docs.cloud.google.com/retail/docs/catalog), [https://docs.cloud.google.com/retail/docs/create-controls](https://docs.cloud.google.com/retail/docs/create-controls))
- token (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/retail](https://docs.cloud.google.com/iam/docs/roles-permissions/retail), [https://docs.cloud.google.com/retail/docs/setting-up](https://docs.cloud.google.com/retail/docs/setting-up), [https://docs.cloud.google.com/retail/docs/catalog](https://docs.cloud.google.com/retail/docs/catalog), [https://docs.cloud.google.com/retail/docs/create-controls](https://docs.cloud.google.com/retail/docs/create-controls))

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/roles-permissions/retail](https://docs.cloud.google.com/iam/docs/roles-permissions/retail)
- [https://docs.cloud.google.com/retail/docs/catalog](https://docs.cloud.google.com/retail/docs/catalog)
- [https://docs.cloud.google.com/retail/docs/create-controls](https://docs.cloud.google.com/retail/docs/create-controls)
- [https://docs.cloud.google.com/retail/docs/setting-up](https://docs.cloud.google.com/retail/docs/setting-up)
