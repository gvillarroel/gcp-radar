# Compute Engine VM policy assignment during creation

Product: Backup and DR
Feature slug: `compute-engine-vm-policy-assignment-during-creation`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Backup and DR policies can now be applied when creating Compute Engine VMs during the VM creation workflow.

## Lifecycle

- Latest feature date: 2024-12-02
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/compute/docs/containers/migrate-containers](https://docs.cloud.google.com/compute/docs/containers/migrate-containers), [https://docs.cloud.google.com/compute/docs/containers/prevent-konlet-vms](https://docs.cloud.google.com/compute/docs/containers/prevent-konlet-vms), [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery))
- constraint (evidence: [https://docs.cloud.google.com/compute/docs/containers/migrate-containers](https://docs.cloud.google.com/compute/docs/containers/migrate-containers), [https://docs.cloud.google.com/compute/docs/containers/prevent-konlet-vms](https://docs.cloud.google.com/compute/docs/containers/prevent-konlet-vms), [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery))
- key (evidence: [https://docs.cloud.google.com/compute/docs/containers/migrate-containers](https://docs.cloud.google.com/compute/docs/containers/migrate-containers), [https://docs.cloud.google.com/compute/docs/containers/prevent-konlet-vms](https://docs.cloud.google.com/compute/docs/containers/prevent-konlet-vms), [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery))
- logging (evidence: [https://docs.cloud.google.com/compute/docs/containers/migrate-containers](https://docs.cloud.google.com/compute/docs/containers/migrate-containers), [https://docs.cloud.google.com/compute/docs/containers/prevent-konlet-vms](https://docs.cloud.google.com/compute/docs/containers/prevent-konlet-vms), [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery))
- policy (evidence: [https://docs.cloud.google.com/compute/docs/containers/migrate-containers](https://docs.cloud.google.com/compute/docs/containers/migrate-containers), [https://docs.cloud.google.com/compute/docs/containers/prevent-konlet-vms](https://docs.cloud.google.com/compute/docs/containers/prevent-konlet-vms), [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery))
- security (evidence: [https://docs.cloud.google.com/compute/docs/containers/migrate-containers](https://docs.cloud.google.com/compute/docs/containers/migrate-containers), [https://docs.cloud.google.com/compute/docs/containers/prevent-konlet-vms](https://docs.cloud.google.com/compute/docs/containers/prevent-konlet-vms), [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery))

## Official Evidence

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery)
- [https://docs.cloud.google.com/compute/docs/containers/migrate-containers](https://docs.cloud.google.com/compute/docs/containers/migrate-containers)
- [https://docs.cloud.google.com/compute/docs/containers/prevent-konlet-vms](https://docs.cloud.google.com/compute/docs/containers/prevent-konlet-vms)
