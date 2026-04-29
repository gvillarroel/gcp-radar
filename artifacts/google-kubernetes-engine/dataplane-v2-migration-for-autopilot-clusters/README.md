# Dataplane V2 migration for Autopilot clusters

Product: Google Kubernetes Engine
Feature slug: `dataplane-v2-migration-for-autopilot-clusters`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

GKE Autopilot clusters can migrate their datapath provider to Dataplane V2 during control plane upgrades.

## Lifecycle

- Latest feature date: 2022-12-14
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- audit
- key
- logging
- policy
- security

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-pd-to-hyperdisk-backup-gke](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-pd-to-hyperdisk-backup-gke)
