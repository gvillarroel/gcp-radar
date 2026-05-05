# NetApp Cloud Volumes Service support

Product: Google Cloud VMware Engine
Feature slug: `netapp-cloud-volumes-service-support`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Workload VMs can use NetApp Cloud Volumes Service volumes as NFS mount points or SMB shares.

## Lifecycle

- Latest feature date: 2021-03-25
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/vmware-engine/docs/concepts-backup-vms](https://docs.cloud.google.com/vmware-engine/docs/concepts-backup-vms), [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-data/mount-snapshot-images-of-cloud-instances](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-data/mount-snapshot-images-of-cloud-instances), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging))
- audit (evidence: [https://docs.cloud.google.com/vmware-engine/docs/concepts-backup-vms](https://docs.cloud.google.com/vmware-engine/docs/concepts-backup-vms), [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-data/mount-snapshot-images-of-cloud-instances](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-data/mount-snapshot-images-of-cloud-instances), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging))
- certificate (evidence: [https://docs.cloud.google.com/vmware-engine/docs/concepts-backup-vms](https://docs.cloud.google.com/vmware-engine/docs/concepts-backup-vms), [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-data/mount-snapshot-images-of-cloud-instances](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-data/mount-snapshot-images-of-cloud-instances), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging))
- credential (evidence: [https://docs.cloud.google.com/vmware-engine/docs/concepts-backup-vms](https://docs.cloud.google.com/vmware-engine/docs/concepts-backup-vms), [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-data/mount-snapshot-images-of-cloud-instances](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-data/mount-snapshot-images-of-cloud-instances), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging))
- encrypt (evidence: [https://docs.cloud.google.com/vmware-engine/docs/concepts-backup-vms](https://docs.cloud.google.com/vmware-engine/docs/concepts-backup-vms), [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-data/mount-snapshot-images-of-cloud-instances](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-data/mount-snapshot-images-of-cloud-instances), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging))
- iam (evidence: [https://docs.cloud.google.com/vmware-engine/docs/concepts-backup-vms](https://docs.cloud.google.com/vmware-engine/docs/concepts-backup-vms), [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-data/mount-snapshot-images-of-cloud-instances](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-data/mount-snapshot-images-of-cloud-instances), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging))
- identity (evidence: [https://docs.cloud.google.com/vmware-engine/docs/concepts-backup-vms](https://docs.cloud.google.com/vmware-engine/docs/concepts-backup-vms), [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-data/mount-snapshot-images-of-cloud-instances](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-data/mount-snapshot-images-of-cloud-instances), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging))
- key (evidence: [https://docs.cloud.google.com/vmware-engine/docs/concepts-backup-vms](https://docs.cloud.google.com/vmware-engine/docs/concepts-backup-vms), [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-data/mount-snapshot-images-of-cloud-instances](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-data/mount-snapshot-images-of-cloud-instances), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging))
- logging (evidence: [https://docs.cloud.google.com/vmware-engine/docs/concepts-backup-vms](https://docs.cloud.google.com/vmware-engine/docs/concepts-backup-vms), [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-data/mount-snapshot-images-of-cloud-instances](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-data/mount-snapshot-images-of-cloud-instances), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging))
- permission (evidence: [https://docs.cloud.google.com/vmware-engine/docs/concepts-backup-vms](https://docs.cloud.google.com/vmware-engine/docs/concepts-backup-vms), [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-data/mount-snapshot-images-of-cloud-instances](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-data/mount-snapshot-images-of-cloud-instances), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging))
- policy (evidence: [https://docs.cloud.google.com/vmware-engine/docs/concepts-backup-vms](https://docs.cloud.google.com/vmware-engine/docs/concepts-backup-vms), [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-data/mount-snapshot-images-of-cloud-instances](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-data/mount-snapshot-images-of-cloud-instances), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging))
- token (evidence: [https://docs.cloud.google.com/vmware-engine/docs/concepts-backup-vms](https://docs.cloud.google.com/vmware-engine/docs/concepts-backup-vms), [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-data/mount-snapshot-images-of-cloud-instances](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-data/mount-snapshot-images-of-cloud-instances), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging))

## Official Evidence

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-data/mount-snapshot-images-of-cloud-instances](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-data/mount-snapshot-images-of-cloud-instances)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging)
- [https://docs.cloud.google.com/vmware-engine/docs/concepts-backup-vms](https://docs.cloud.google.com/vmware-engine/docs/concepts-backup-vms)
