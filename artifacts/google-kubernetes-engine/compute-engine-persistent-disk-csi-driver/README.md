# Compute Engine persistent disk CSI driver

Product: Google Kubernetes Engine
Feature slug: `compute-engine-persistent-disk-csi-driver`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Installs the Compute Engine persistent disk CSI driver to provision PersistentVolumes with pd.csi.storage.gke.io.

## Lifecycle

- Latest feature date: 2021-01-11
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- armor
- credential
- key
- logging

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/persistent-volumes/gce-pd-csi-driver](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/persistent-volumes/gce-pd-csi-driver)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-mysql-to-hyperdisk](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-mysql-to-hyperdisk)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-pd-to-hyperdisk-backup-gke](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/migrate-pd-to-hyperdisk-backup-gke)
