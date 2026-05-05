# Domain tags

Product: Managed Service for Microsoft Active Directory
Feature slug: `domain-tags`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Managed Microsoft AD supports tags on domains.

## Lifecycle

- Latest feature date: 2022-02-03
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

- access (evidence: [https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains](https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains), [https://docs.cloud.google.com/iam/docs/roles-permissions/managedidentities](https://docs.cloud.google.com/iam/docs/roles-permissions/managedidentities), [https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains.backups](https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains.backups))
- audit (evidence: [https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains](https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains), [https://docs.cloud.google.com/iam/docs/roles-permissions/managedidentities](https://docs.cloud.google.com/iam/docs/roles-permissions/managedidentities), [https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains.backups](https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains.backups))
- iam (evidence: [https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains](https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains), [https://docs.cloud.google.com/iam/docs/roles-permissions/managedidentities](https://docs.cloud.google.com/iam/docs/roles-permissions/managedidentities), [https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains.backups](https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains.backups))
- key (evidence: [https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains](https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains), [https://docs.cloud.google.com/iam/docs/roles-permissions/managedidentities](https://docs.cloud.google.com/iam/docs/roles-permissions/managedidentities), [https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains.backups](https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains.backups))
- permission (evidence: [https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains](https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains), [https://docs.cloud.google.com/iam/docs/roles-permissions/managedidentities](https://docs.cloud.google.com/iam/docs/roles-permissions/managedidentities), [https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains.backups](https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains.backups))
- policy (evidence: [https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains](https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains), [https://docs.cloud.google.com/iam/docs/roles-permissions/managedidentities](https://docs.cloud.google.com/iam/docs/roles-permissions/managedidentities), [https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains.backups](https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains.backups))
- private (evidence: [https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains](https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains), [https://docs.cloud.google.com/iam/docs/roles-permissions/managedidentities](https://docs.cloud.google.com/iam/docs/roles-permissions/managedidentities), [https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains.backups](https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains.backups))
- role (evidence: [https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains](https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains), [https://docs.cloud.google.com/iam/docs/roles-permissions/managedidentities](https://docs.cloud.google.com/iam/docs/roles-permissions/managedidentities), [https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains.backups](https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains.backups))
- security (evidence: [https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains](https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains), [https://docs.cloud.google.com/iam/docs/roles-permissions/managedidentities](https://docs.cloud.google.com/iam/docs/roles-permissions/managedidentities), [https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains.backups](https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains.backups))

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/roles-permissions/managedidentities](https://docs.cloud.google.com/iam/docs/roles-permissions/managedidentities)
- [https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains](https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains)
- [https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains.backups](https://docs.cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains.backups)
