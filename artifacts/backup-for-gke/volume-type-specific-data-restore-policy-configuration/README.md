# Volume-type-specific data restore policy configuration

Product: Backup for GKE
Feature slug: `volume-type-specific-data-restore-policy-configuration`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Backup for GKE allows configuring volume data restore policies by volume type, with overrides for specific volumes.

## Lifecycle

- Latest feature date: 2024-06-03
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- iam
- identity
- permission
- policy
- role

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/restore-plan](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/restore-plan)
- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig)
- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/VolumeDataRestorePolicy](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/VolumeDataRestorePolicy)
