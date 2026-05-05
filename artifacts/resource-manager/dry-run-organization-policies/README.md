# Dry-run organization policies

Product: Resource Manager
Feature slug: `dry-run-organization-policies`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Dry-run organization policies let you preview how policy changes would affect workflows before enforcement.

## Lifecycle

- Latest feature date: 2023-03-08
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

- access (evidence: [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org), [https://docs.cloud.google.com/resource-manager/docs/create-migration-plan](https://docs.cloud.google.com/resource-manager/docs/create-migration-plan), [https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization](https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization))
- allow (evidence: [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org), [https://docs.cloud.google.com/resource-manager/docs/create-migration-plan](https://docs.cloud.google.com/resource-manager/docs/create-migration-plan), [https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization](https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization))
- constraint (evidence: [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org), [https://docs.cloud.google.com/resource-manager/docs/create-migration-plan](https://docs.cloud.google.com/resource-manager/docs/create-migration-plan), [https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization](https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization))
- iam (evidence: [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org), [https://docs.cloud.google.com/resource-manager/docs/create-migration-plan](https://docs.cloud.google.com/resource-manager/docs/create-migration-plan), [https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization](https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization))
- permission (evidence: [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org), [https://docs.cloud.google.com/resource-manager/docs/create-migration-plan](https://docs.cloud.google.com/resource-manager/docs/create-migration-plan), [https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization](https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization))
- policy (evidence: [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org), [https://docs.cloud.google.com/resource-manager/docs/create-migration-plan](https://docs.cloud.google.com/resource-manager/docs/create-migration-plan), [https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization](https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization))
- private (evidence: [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org), [https://docs.cloud.google.com/resource-manager/docs/create-migration-plan](https://docs.cloud.google.com/resource-manager/docs/create-migration-plan), [https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization](https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization))
- role (evidence: [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org), [https://docs.cloud.google.com/resource-manager/docs/create-migration-plan](https://docs.cloud.google.com/resource-manager/docs/create-migration-plan), [https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization](https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization))
- security (evidence: [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org), [https://docs.cloud.google.com/resource-manager/docs/create-migration-plan](https://docs.cloud.google.com/resource-manager/docs/create-migration-plan), [https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization](https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization))

## Official Evidence

- [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org)
- [https://docs.cloud.google.com/resource-manager/docs/create-migration-plan](https://docs.cloud.google.com/resource-manager/docs/create-migration-plan)
- [https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization](https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization)
