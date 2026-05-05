# Terraform code export to repository

Product: Application Design Center
Feature slug: `terraform-code-export-to-repository`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Application Design Center allows users to export generated Terraform code to a code repository.

## Lifecycle

- Latest feature date: 2025-12-05
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

- access (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/designcenter](https://docs.cloud.google.com/iam/docs/roles-permissions/designcenter), [https://docs.cloud.google.com/application-design-center/docs/import-components](https://docs.cloud.google.com/application-design-center/docs/import-components), [https://docs.cloud.google.com/application-design-center/docs/reference/rest/v1alpha/ArtifactLocation](https://docs.cloud.google.com/application-design-center/docs/reference/rest/v1alpha/ArtifactLocation))
- allow (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/designcenter](https://docs.cloud.google.com/iam/docs/roles-permissions/designcenter), [https://docs.cloud.google.com/application-design-center/docs/import-components](https://docs.cloud.google.com/application-design-center/docs/import-components), [https://docs.cloud.google.com/application-design-center/docs/reference/rest/v1alpha/ArtifactLocation](https://docs.cloud.google.com/application-design-center/docs/reference/rest/v1alpha/ArtifactLocation))
- audit (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/designcenter](https://docs.cloud.google.com/iam/docs/roles-permissions/designcenter), [https://docs.cloud.google.com/application-design-center/docs/import-components](https://docs.cloud.google.com/application-design-center/docs/import-components), [https://docs.cloud.google.com/application-design-center/docs/reference/rest/v1alpha/ArtifactLocation](https://docs.cloud.google.com/application-design-center/docs/reference/rest/v1alpha/ArtifactLocation))
- auth (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/designcenter](https://docs.cloud.google.com/iam/docs/roles-permissions/designcenter), [https://docs.cloud.google.com/application-design-center/docs/import-components](https://docs.cloud.google.com/application-design-center/docs/import-components), [https://docs.cloud.google.com/application-design-center/docs/reference/rest/v1alpha/ArtifactLocation](https://docs.cloud.google.com/application-design-center/docs/reference/rest/v1alpha/ArtifactLocation))
- iam (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/designcenter](https://docs.cloud.google.com/iam/docs/roles-permissions/designcenter), [https://docs.cloud.google.com/application-design-center/docs/import-components](https://docs.cloud.google.com/application-design-center/docs/import-components), [https://docs.cloud.google.com/application-design-center/docs/reference/rest/v1alpha/ArtifactLocation](https://docs.cloud.google.com/application-design-center/docs/reference/rest/v1alpha/ArtifactLocation))
- identity (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/designcenter](https://docs.cloud.google.com/iam/docs/roles-permissions/designcenter), [https://docs.cloud.google.com/application-design-center/docs/import-components](https://docs.cloud.google.com/application-design-center/docs/import-components), [https://docs.cloud.google.com/application-design-center/docs/reference/rest/v1alpha/ArtifactLocation](https://docs.cloud.google.com/application-design-center/docs/reference/rest/v1alpha/ArtifactLocation))
- permission (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/designcenter](https://docs.cloud.google.com/iam/docs/roles-permissions/designcenter), [https://docs.cloud.google.com/application-design-center/docs/import-components](https://docs.cloud.google.com/application-design-center/docs/import-components), [https://docs.cloud.google.com/application-design-center/docs/reference/rest/v1alpha/ArtifactLocation](https://docs.cloud.google.com/application-design-center/docs/reference/rest/v1alpha/ArtifactLocation))
- policy (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/designcenter](https://docs.cloud.google.com/iam/docs/roles-permissions/designcenter), [https://docs.cloud.google.com/application-design-center/docs/import-components](https://docs.cloud.google.com/application-design-center/docs/import-components), [https://docs.cloud.google.com/application-design-center/docs/reference/rest/v1alpha/ArtifactLocation](https://docs.cloud.google.com/application-design-center/docs/reference/rest/v1alpha/ArtifactLocation))
- role (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/designcenter](https://docs.cloud.google.com/iam/docs/roles-permissions/designcenter), [https://docs.cloud.google.com/application-design-center/docs/import-components](https://docs.cloud.google.com/application-design-center/docs/import-components), [https://docs.cloud.google.com/application-design-center/docs/reference/rest/v1alpha/ArtifactLocation](https://docs.cloud.google.com/application-design-center/docs/reference/rest/v1alpha/ArtifactLocation))
- security (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/designcenter](https://docs.cloud.google.com/iam/docs/roles-permissions/designcenter), [https://docs.cloud.google.com/application-design-center/docs/import-components](https://docs.cloud.google.com/application-design-center/docs/import-components), [https://docs.cloud.google.com/application-design-center/docs/reference/rest/v1alpha/ArtifactLocation](https://docs.cloud.google.com/application-design-center/docs/reference/rest/v1alpha/ArtifactLocation))
- token (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/designcenter](https://docs.cloud.google.com/iam/docs/roles-permissions/designcenter), [https://docs.cloud.google.com/application-design-center/docs/import-components](https://docs.cloud.google.com/application-design-center/docs/import-components), [https://docs.cloud.google.com/application-design-center/docs/reference/rest/v1alpha/ArtifactLocation](https://docs.cloud.google.com/application-design-center/docs/reference/rest/v1alpha/ArtifactLocation))

## Official Evidence

- [https://docs.cloud.google.com/application-design-center/docs/import-components](https://docs.cloud.google.com/application-design-center/docs/import-components)
- [https://docs.cloud.google.com/application-design-center/docs/reference/rest/v1alpha/ArtifactLocation](https://docs.cloud.google.com/application-design-center/docs/reference/rest/v1alpha/ArtifactLocation)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/designcenter](https://docs.cloud.google.com/iam/docs/roles-permissions/designcenter)
