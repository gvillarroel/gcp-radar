# HCX KVM and Hyper-V migration to vSphere

Product: Google Cloud VMware Engine
Feature slug: `hcx-kvm-and-hyper-v-migration-to-vsphere`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

HCX supports migrations from KVM and Hyper-V environments to vSphere.

## Lifecycle

- Latest feature date: 2022-05-31
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components](https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components), [https://docs.cloud.google.com/vmware-engine/docs/concepts-migration-options](https://docs.cloud.google.com/vmware-engine/docs/concepts-migration-options))
- audit (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components](https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components), [https://docs.cloud.google.com/vmware-engine/docs/concepts-migration-options](https://docs.cloud.google.com/vmware-engine/docs/concepts-migration-options))
- certificate (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components](https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components), [https://docs.cloud.google.com/vmware-engine/docs/concepts-migration-options](https://docs.cloud.google.com/vmware-engine/docs/concepts-migration-options))
- credential (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components](https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components), [https://docs.cloud.google.com/vmware-engine/docs/concepts-migration-options](https://docs.cloud.google.com/vmware-engine/docs/concepts-migration-options))
- iam (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components](https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components), [https://docs.cloud.google.com/vmware-engine/docs/concepts-migration-options](https://docs.cloud.google.com/vmware-engine/docs/concepts-migration-options))
- identity (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components](https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components), [https://docs.cloud.google.com/vmware-engine/docs/concepts-migration-options](https://docs.cloud.google.com/vmware-engine/docs/concepts-migration-options))
- logging (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components](https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components), [https://docs.cloud.google.com/vmware-engine/docs/concepts-migration-options](https://docs.cloud.google.com/vmware-engine/docs/concepts-migration-options))
- permission (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components](https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components), [https://docs.cloud.google.com/vmware-engine/docs/concepts-migration-options](https://docs.cloud.google.com/vmware-engine/docs/concepts-migration-options))
- policy (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components](https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components), [https://docs.cloud.google.com/vmware-engine/docs/concepts-migration-options](https://docs.cloud.google.com/vmware-engine/docs/concepts-migration-options))
- private (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components](https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components), [https://docs.cloud.google.com/vmware-engine/docs/concepts-migration-options](https://docs.cloud.google.com/vmware-engine/docs/concepts-migration-options))
- security (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components](https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components), [https://docs.cloud.google.com/vmware-engine/docs/concepts-migration-options](https://docs.cloud.google.com/vmware-engine/docs/concepts-migration-options))
- token (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components](https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components), [https://docs.cloud.google.com/vmware-engine/docs/concepts-migration-options](https://docs.cloud.google.com/vmware-engine/docs/concepts-migration-options))

## Official Evidence

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging)
- [https://docs.cloud.google.com/vmware-engine/docs/concepts-migration-options](https://docs.cloud.google.com/vmware-engine/docs/concepts-migration-options)
- [https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components](https://docs.cloud.google.com/vmware-engine/docs/concepts-vmware-components)
