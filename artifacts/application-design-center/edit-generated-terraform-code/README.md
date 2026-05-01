# Edit generated Terraform code

Product: Application Design Center
Feature slug: `edit-generated-terraform-code`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Application Design Center allows editing of Terraform code generated from templates and applications.

## Lifecycle

- Latest feature date: 2025-10-07
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
- iam
- identity
- permission
- policy
- role
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/application-design-center/docs/design-application-templates](https://docs.cloud.google.com/application-design-center/docs/design-application-templates)
- [https://docs.cloud.google.com/application-design-center/docs/manage-applications](https://docs.cloud.google.com/application-design-center/docs/manage-applications)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/designcenter](https://docs.cloud.google.com/iam/docs/roles-permissions/designcenter)
