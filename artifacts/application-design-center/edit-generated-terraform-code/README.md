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

- access (evidence: [https://docs.cloud.google.com/application-design-center/docs/manage-applications](https://docs.cloud.google.com/application-design-center/docs/manage-applications), [https://docs.cloud.google.com/application-design-center/docs/design-application-templates](https://docs.cloud.google.com/application-design-center/docs/design-application-templates), [https://docs.cloud.google.com/iam/docs/roles-permissions/designcenter](https://docs.cloud.google.com/iam/docs/roles-permissions/designcenter))
- allow (evidence: [https://docs.cloud.google.com/application-design-center/docs/manage-applications](https://docs.cloud.google.com/application-design-center/docs/manage-applications), [https://docs.cloud.google.com/application-design-center/docs/design-application-templates](https://docs.cloud.google.com/application-design-center/docs/design-application-templates), [https://docs.cloud.google.com/iam/docs/roles-permissions/designcenter](https://docs.cloud.google.com/iam/docs/roles-permissions/designcenter))
- audit (evidence: [https://docs.cloud.google.com/application-design-center/docs/manage-applications](https://docs.cloud.google.com/application-design-center/docs/manage-applications), [https://docs.cloud.google.com/application-design-center/docs/design-application-templates](https://docs.cloud.google.com/application-design-center/docs/design-application-templates), [https://docs.cloud.google.com/iam/docs/roles-permissions/designcenter](https://docs.cloud.google.com/iam/docs/roles-permissions/designcenter))
- auth (evidence: [https://docs.cloud.google.com/application-design-center/docs/manage-applications](https://docs.cloud.google.com/application-design-center/docs/manage-applications), [https://docs.cloud.google.com/application-design-center/docs/design-application-templates](https://docs.cloud.google.com/application-design-center/docs/design-application-templates), [https://docs.cloud.google.com/iam/docs/roles-permissions/designcenter](https://docs.cloud.google.com/iam/docs/roles-permissions/designcenter))
- iam (evidence: [https://docs.cloud.google.com/application-design-center/docs/manage-applications](https://docs.cloud.google.com/application-design-center/docs/manage-applications), [https://docs.cloud.google.com/application-design-center/docs/design-application-templates](https://docs.cloud.google.com/application-design-center/docs/design-application-templates), [https://docs.cloud.google.com/iam/docs/roles-permissions/designcenter](https://docs.cloud.google.com/iam/docs/roles-permissions/designcenter))
- identity (evidence: [https://docs.cloud.google.com/application-design-center/docs/manage-applications](https://docs.cloud.google.com/application-design-center/docs/manage-applications), [https://docs.cloud.google.com/application-design-center/docs/design-application-templates](https://docs.cloud.google.com/application-design-center/docs/design-application-templates), [https://docs.cloud.google.com/iam/docs/roles-permissions/designcenter](https://docs.cloud.google.com/iam/docs/roles-permissions/designcenter))
- permission (evidence: [https://docs.cloud.google.com/application-design-center/docs/manage-applications](https://docs.cloud.google.com/application-design-center/docs/manage-applications), [https://docs.cloud.google.com/application-design-center/docs/design-application-templates](https://docs.cloud.google.com/application-design-center/docs/design-application-templates), [https://docs.cloud.google.com/iam/docs/roles-permissions/designcenter](https://docs.cloud.google.com/iam/docs/roles-permissions/designcenter))
- policy (evidence: [https://docs.cloud.google.com/application-design-center/docs/manage-applications](https://docs.cloud.google.com/application-design-center/docs/manage-applications), [https://docs.cloud.google.com/application-design-center/docs/design-application-templates](https://docs.cloud.google.com/application-design-center/docs/design-application-templates), [https://docs.cloud.google.com/iam/docs/roles-permissions/designcenter](https://docs.cloud.google.com/iam/docs/roles-permissions/designcenter))
- role (evidence: [https://docs.cloud.google.com/application-design-center/docs/manage-applications](https://docs.cloud.google.com/application-design-center/docs/manage-applications), [https://docs.cloud.google.com/application-design-center/docs/design-application-templates](https://docs.cloud.google.com/application-design-center/docs/design-application-templates), [https://docs.cloud.google.com/iam/docs/roles-permissions/designcenter](https://docs.cloud.google.com/iam/docs/roles-permissions/designcenter))
- security (evidence: [https://docs.cloud.google.com/application-design-center/docs/manage-applications](https://docs.cloud.google.com/application-design-center/docs/manage-applications), [https://docs.cloud.google.com/application-design-center/docs/design-application-templates](https://docs.cloud.google.com/application-design-center/docs/design-application-templates), [https://docs.cloud.google.com/iam/docs/roles-permissions/designcenter](https://docs.cloud.google.com/iam/docs/roles-permissions/designcenter))
- token (evidence: [https://docs.cloud.google.com/application-design-center/docs/manage-applications](https://docs.cloud.google.com/application-design-center/docs/manage-applications), [https://docs.cloud.google.com/application-design-center/docs/design-application-templates](https://docs.cloud.google.com/application-design-center/docs/design-application-templates), [https://docs.cloud.google.com/iam/docs/roles-permissions/designcenter](https://docs.cloud.google.com/iam/docs/roles-permissions/designcenter))

## Official Evidence

- [https://docs.cloud.google.com/application-design-center/docs/design-application-templates](https://docs.cloud.google.com/application-design-center/docs/design-application-templates)
- [https://docs.cloud.google.com/application-design-center/docs/manage-applications](https://docs.cloud.google.com/application-design-center/docs/manage-applications)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/designcenter](https://docs.cloud.google.com/iam/docs/roles-permissions/designcenter)
