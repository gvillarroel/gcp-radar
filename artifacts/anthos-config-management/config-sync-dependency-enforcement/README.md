# Config Sync dependency enforcement

Product: Anthos Config Management
Feature slug: `config-sync-dependency-enforcement`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Config Sync can skip applying objects whose dependencies are not successfully applied and fully reconciled.

## Lifecycle

- Latest feature date: 2022-03-24
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow
- auth
- constraint
- key
- policy

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/declare-resource-dependency](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/declare-resource-dependency)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/safe-rollouts-with-config-sync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/safe-rollouts-with-config-sync)
