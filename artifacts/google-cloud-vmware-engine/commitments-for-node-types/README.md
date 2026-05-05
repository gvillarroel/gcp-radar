# Commitments for node types

Product: Google Cloud VMware Engine
Feature slug: `commitments-for-node-types`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Allows purchase of commitments tied to specific node types.

## Lifecycle

- Latest feature date: 2024-02-27
- Deprecation date: none recorded
- Status: feature_observed

## IAM

Explicit IAM evidence was found in the supporting documentation.

Roles:

- `roles/accessapproval.admin`
- `roles/accessapproval.approver`
- `roles/accessapproval.configEditor`

Permissions:

- `resourcemanager.projects.get`

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/vmware-engine/docs/cud](https://docs.cloud.google.com/vmware-engine/docs/cud), [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/cud](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/cud), [https://docs.cloud.google.com/vmware-engine/docs/concepts-node-types](https://docs.cloud.google.com/vmware-engine/docs/concepts-node-types))
- allow (evidence: [https://docs.cloud.google.com/vmware-engine/docs/cud](https://docs.cloud.google.com/vmware-engine/docs/cud), [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/cud](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/cud), [https://docs.cloud.google.com/vmware-engine/docs/concepts-node-types](https://docs.cloud.google.com/vmware-engine/docs/concepts-node-types))
- iam (evidence: [https://docs.cloud.google.com/vmware-engine/docs/cud](https://docs.cloud.google.com/vmware-engine/docs/cud), [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/cud](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/cud), [https://docs.cloud.google.com/vmware-engine/docs/concepts-node-types](https://docs.cloud.google.com/vmware-engine/docs/concepts-node-types))
- permission (evidence: [https://docs.cloud.google.com/vmware-engine/docs/cud](https://docs.cloud.google.com/vmware-engine/docs/cud), [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/cud](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/cud), [https://docs.cloud.google.com/vmware-engine/docs/concepts-node-types](https://docs.cloud.google.com/vmware-engine/docs/concepts-node-types))
- private (evidence: [https://docs.cloud.google.com/vmware-engine/docs/cud](https://docs.cloud.google.com/vmware-engine/docs/cud), [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/cud](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/cud), [https://docs.cloud.google.com/vmware-engine/docs/concepts-node-types](https://docs.cloud.google.com/vmware-engine/docs/concepts-node-types))
- role (evidence: [https://docs.cloud.google.com/vmware-engine/docs/cud](https://docs.cloud.google.com/vmware-engine/docs/cud), [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/cud](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/cud), [https://docs.cloud.google.com/vmware-engine/docs/concepts-node-types](https://docs.cloud.google.com/vmware-engine/docs/concepts-node-types))

## Official Evidence

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/cud](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/cud)
- [https://docs.cloud.google.com/vmware-engine/docs/concepts-node-types](https://docs.cloud.google.com/vmware-engine/docs/concepts-node-types)
- [https://docs.cloud.google.com/vmware-engine/docs/cud](https://docs.cloud.google.com/vmware-engine/docs/cud)
