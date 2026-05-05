# Backup for GKE

Schema version: `step-08-product-feature-cards-v1`
Generated at: `2026-05-05T13:10:54.637Z`
Product status: `PASS`

## Summary

- Feature cards: 15
- Step 07 failed features: 0
- Step 07 warned features: 0
- Corpus health: healthy
- IAM mapping: 3 explicit, 0 derived, 12 unknown

## Service Card

- Service card ID: `backup-for-gke:service`
- Latest feature date: 2025-09-16
- Official source links: 18
- Security capabilities: 25

## Features

| Feature | Coverage | Gate | IAM | Sources |
| --- | --- | --- | --- | --- |
| Pre-existing Storage Pool restore for Hyperdisk volumes | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/iam/docs/roles-permissions/gkebackup)<br>[source](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/restore-plan)<br>[source](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig) |
| Organization Policy custom constraints for Backup for GKE | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/deny-permissions-support)<br>[source](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/Policy) |
| Committed use discounts for Backup for GKE | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/iam/docs)<br>[source](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes)<br>[source](https://docs.cloud.google.com/iam/docs/resource-types-with-policies) |
| Cluster-creation backup plan creation | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/concepts/backup-for-gke)<br>[source](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup-plan)<br>[source](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/restore-plan) |
| Backup-side restore validation | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup-plan)<br>[source](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/protected-application)<br>[source](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/restore-plan) |
| Configurable resource restore order in restore plans | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/restore-plan)<br>[source](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/transformation-rules)<br>[source](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig) |
| Fine-grained resource selection in restore creation | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/protected-application)<br>[source](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/errors)<br>[source](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig) |
| Namespaced resource conflict handling policies during restore | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/restore-plan)<br>[source](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/transformation-rules)<br>[source](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig) |
| Volume-type-specific data restore policy configuration | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/restore-plan)<br>[source](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig)<br>[source](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/VolumeDataRestorePolicy) |
| Backup index visibility | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/iam/docs/overview)<br>[source](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup)<br>[source](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/transformation-rules) |
| Smart Scheduling for automatic backups | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup)<br>[source](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup-plan)<br>[source](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/protected-application) |
| Restore transformation rules | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/restore-plan)<br>[source](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/transformation-rules)<br>[source](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig) |
| Terraform management of RestorePlan resources | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/iam/docs/roles-permissions/gkebackup)<br>[source](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup-plan)<br>[source](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/transformation-rules) |
| Automatic Backup for GKE agent installation | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup)<br>[source](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/backup-plan)<br>[source](https://docs.cloud.google.com/kubernetes-engine/docs/integrations/ai-infra) |
| Restore resource blocklist | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/protected-application)<br>[source](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/restore-plan)<br>[source](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig) |
