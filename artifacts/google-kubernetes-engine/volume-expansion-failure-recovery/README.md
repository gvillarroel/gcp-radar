# Volume expansion failure recovery

Product: Google Kubernetes Engine
Feature slug: `volume-expansion-failure-recovery`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Support for recovering from volume expansion failure graduated to beta and is enabled by default.

## Lifecycle

- Latest feature date: 2024-12-17
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-pd-to-hyperdisk-backup-gke](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-pd-to-hyperdisk-backup-gke), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/simulate-zone-failure](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/simulate-zone-failure))
- allow (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-pd-to-hyperdisk-backup-gke](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-pd-to-hyperdisk-backup-gke), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/simulate-zone-failure](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/simulate-zone-failure))
- credential (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-pd-to-hyperdisk-backup-gke](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-pd-to-hyperdisk-backup-gke), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/simulate-zone-failure](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/simulate-zone-failure))
- key (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-pd-to-hyperdisk-backup-gke](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-pd-to-hyperdisk-backup-gke), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/simulate-zone-failure](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/simulate-zone-failure))
- policy (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-pd-to-hyperdisk-backup-gke](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-pd-to-hyperdisk-backup-gke), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/simulate-zone-failure](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/simulate-zone-failure))
- private (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-pd-to-hyperdisk-backup-gke](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-pd-to-hyperdisk-backup-gke), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/simulate-zone-failure](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/simulate-zone-failure))
- secret (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-pd-to-hyperdisk-backup-gke](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-pd-to-hyperdisk-backup-gke), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/simulate-zone-failure](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/simulate-zone-failure))

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/simulate-zone-failure](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/simulate-zone-failure)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-pd-to-hyperdisk-backup-gke](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-pd-to-hyperdisk-backup-gke)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql)
