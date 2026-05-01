# Config Sync stopSyncing field

Product: Anthos Config Management
Feature slug: `config-sync-stopsyncing-field`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Config Sync adds the spec.configSync.stopSyncing field to stop and resume syncing.

## Lifecycle

- Latest feature date: 2024-12-05
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth
- identity
- policy
- secret

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/gcloud-apply-fields](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/gcloud-apply-fields)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/gcloud-configuration-field-behavior](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/gcloud-configuration-field-behavior)
