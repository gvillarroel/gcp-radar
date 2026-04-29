# Pre-existing Storage Pool restore for Hyperdisk volumes

Product: Backup for GKE
Feature slug: `pre-existing-storage-pool-restore-for-hyperdisk-volumes`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Backup for GKE now supports restoring Hyperdisk Balanced and Hyperdisk Throughput disks to pre-existing Storage Pools.

## Lifecycle

- Latest feature date: 2025-09-16
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
- iam
- identity
- permission
- policy
- role
- secret
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/roles-permissions/gkebackup](https://docs.cloud.google.com/iam/docs/roles-permissions/gkebackup)
- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/restore-plan](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/restore-plan)
- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig)
