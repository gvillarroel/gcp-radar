# Backup for GKE

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 15
Unique features: 15

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2025-09-16 | Pre-existing Storage Pool restore for Hyperdisk volumes |  | Backup for GKE now supports restoring Hyperdisk Balanced and Hyperdisk Throughput disks to pre-existing Storage Pools. |
| 2025-08-20 | Organization Policy custom constraints for Backup for GKE |  | Backup for GKE adds support for Organization Policy custom constraints to control specific resource fields with finer granularity. |
| 2024-07-29 | Committed use discounts for Backup for GKE |  | Backup for GKE now offers committed use discounts for backup management fees, with 20% savings for one year and 45% for three years. |
| 2024-06-27 | Cluster-creation backup plan creation |  | Backup for GKE now supports creating a backup plan during cluster creation. |
| 2024-06-03 | Backup-side restore validation |  | Backup for GKE introduced Backup-Side Restore Validation to validate that backups from new backup plans are restorable. |
| 2024-06-03 | Configurable resource restore order in restore plans |  | Backup for GKE now supports specifying restore order when creating or updating a restore plan. |
| 2024-06-03 | Fine-grained resource selection in restore creation |  | Backup for GKE now provides more granular resource selection when creating restores. |
| 2024-06-03 | Namespaced resource conflict handling policies during restore |  | Backup for GKE introduced restore policies for handling namespaced resource conflicts with compatibility for GitOps-based workflows. |
| 2024-06-03 | Volume-type-specific data restore policy configuration |  | Backup for GKE allows configuring volume data restore policies by volume type, with overrides for specific volumes. |
| 2024-04-22 | Backup index visibility |  | Backup for GKE now provides a backup index to view resource information within backups. |
| 2024-04-22 | Smart Scheduling for automatic backups |  | Backup for GKE now supports Smart Scheduling, an RPO-based backup scheduling model in addition to cron scheduling. |
| 2023-10-31 | Restore transformation rules |  | Backup for GKE now supports transformation rules that modify resources during restore operations. |
| 2023-10-31 | Terraform management of RestorePlan resources |  | Backup for GKE now supports managing RestorePlan resources via Terraform. |
| 2023-07-11 | Automatic Backup for GKE agent installation |  | Backup for GKE now automatically installs the agent in a cluster when a user creates the first BackupPlan or RestorePlan resource. |
| 2023-07-11 | Restore resource blocklist |  | Backup for GKE now supports a blocklist for excluding cluster-scoped and namespaced resources during restore operations. |

Source file slug: `backup-for-gke.md`

