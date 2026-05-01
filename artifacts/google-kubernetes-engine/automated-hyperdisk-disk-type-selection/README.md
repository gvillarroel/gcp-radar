# Automated Hyperdisk disk type selection

Product: Google Kubernetes Engine
Feature slug: `automated-hyperdisk-disk-type-selection`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

GKE automatically selects Hyperdisk or Persistent Disk based on the node machine type when provisioning volumes.

## Lifecycle

- Latest feature date: 2026-03-05
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- credential
- key

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/hyperdisk](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/hyperdisk)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-mysql-to-hyperdisk](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-mysql-to-hyperdisk)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-pd-to-hyperdisk-backup-gke](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-pd-to-hyperdisk-backup-gke)
