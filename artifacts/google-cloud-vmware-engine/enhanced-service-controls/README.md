# Enhanced service controls

Product: Google Cloud VMware Engine
Feature slug: `enhanced-service-controls`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Enhanced service controls add more granular permissions-elevation controls for Google support access to VMware Engine instances.

## Lifecycle

- Latest feature date: 2023-06-28
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
- `resourcemanager.projects.list`

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/vmware-engine/docs/concepts-vpc-service-controls](https://docs.cloud.google.com/vmware-engine/docs/concepts-vpc-service-controls))
- allow (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/vmware-engine/docs/concepts-vpc-service-controls](https://docs.cloud.google.com/vmware-engine/docs/concepts-vpc-service-controls))
- armor (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/vmware-engine/docs/concepts-vpc-service-controls](https://docs.cloud.google.com/vmware-engine/docs/concepts-vpc-service-controls))
- audit (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/vmware-engine/docs/concepts-vpc-service-controls](https://docs.cloud.google.com/vmware-engine/docs/concepts-vpc-service-controls))
- encrypt (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/vmware-engine/docs/concepts-vpc-service-controls](https://docs.cloud.google.com/vmware-engine/docs/concepts-vpc-service-controls))
- firewall (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/vmware-engine/docs/concepts-vpc-service-controls](https://docs.cloud.google.com/vmware-engine/docs/concepts-vpc-service-controls))
- iam (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/vmware-engine/docs/concepts-vpc-service-controls](https://docs.cloud.google.com/vmware-engine/docs/concepts-vpc-service-controls))
- identity (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/vmware-engine/docs/concepts-vpc-service-controls](https://docs.cloud.google.com/vmware-engine/docs/concepts-vpc-service-controls))
- key (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/vmware-engine/docs/concepts-vpc-service-controls](https://docs.cloud.google.com/vmware-engine/docs/concepts-vpc-service-controls))
- logging (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/vmware-engine/docs/concepts-vpc-service-controls](https://docs.cloud.google.com/vmware-engine/docs/concepts-vpc-service-controls))
- permission (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/vmware-engine/docs/concepts-vpc-service-controls](https://docs.cloud.google.com/vmware-engine/docs/concepts-vpc-service-controls))
- policy (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/vmware-engine/docs/concepts-vpc-service-controls](https://docs.cloud.google.com/vmware-engine/docs/concepts-vpc-service-controls))
- private (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/vmware-engine/docs/concepts-vpc-service-controls](https://docs.cloud.google.com/vmware-engine/docs/concepts-vpc-service-controls))
- role (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/vmware-engine/docs/concepts-vpc-service-controls](https://docs.cloud.google.com/vmware-engine/docs/concepts-vpc-service-controls))
- security (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/vmware-engine/docs/concepts-vpc-service-controls](https://docs.cloud.google.com/vmware-engine/docs/concepts-vpc-service-controls))
- token (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/vmware-engine/docs/concepts-vpc-service-controls](https://docs.cloud.google.com/vmware-engine/docs/concepts-vpc-service-controls))

## Official Evidence

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control)
- [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security)
- [https://docs.cloud.google.com/vmware-engine/docs/concepts-vpc-service-controls](https://docs.cloud.google.com/vmware-engine/docs/concepts-vpc-service-controls)
