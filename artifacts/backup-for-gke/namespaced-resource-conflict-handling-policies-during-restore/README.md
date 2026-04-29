# Namespaced resource conflict handling policies during restore

Product: Backup for GKE
Feature slug: `namespaced-resource-conflict-handling-policies-during-restore`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Backup for GKE introduced restore policies for handling namespaced resource conflicts with compatibility for GitOps-based workflows.

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
- policy

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/restore-plan](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/restore-plan)
- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/transformation-rules](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/transformation-rules)
- [https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig)
