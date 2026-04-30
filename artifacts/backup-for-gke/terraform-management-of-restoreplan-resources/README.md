# Terraform management of RestorePlan resources

Product: Backup for GKE
Feature slug: `terraform-management-of-restoreplan-resources`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Backup for GKE now supports managing RestorePlan resources via Terraform.

## Lifecycle

- Latest feature date: 2023-10-31
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
- certificate
- encrypt
- iam
- identity
- key
- permission
- policy
- role
- secret
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/roles-permissions/gkebackup](https://docs.cloud.google.com/iam/docs/roles-permissions/gkebackup)
- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup-plan](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup-plan)
- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/transformation-rules](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/transformation-rules)
