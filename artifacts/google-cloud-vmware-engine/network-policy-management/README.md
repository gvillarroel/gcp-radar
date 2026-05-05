# Network policy management

Product: Google Cloud VMware Engine
Feature slug: `network-policy-management`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Network policies can be managed with Terraform resources.

## Lifecycle

- Latest feature date: 2023-12-18
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

- access (evidence: [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/vmware-engine/docs/public/reference/rest](https://docs.cloud.google.com/vmware-engine/docs/public/reference/rest))
- allow (evidence: [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/vmware-engine/docs/public/reference/rest](https://docs.cloud.google.com/vmware-engine/docs/public/reference/rest))
- armor (evidence: [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/vmware-engine/docs/public/reference/rest](https://docs.cloud.google.com/vmware-engine/docs/public/reference/rest))
- audit (evidence: [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/vmware-engine/docs/public/reference/rest](https://docs.cloud.google.com/vmware-engine/docs/public/reference/rest))
- credential (evidence: [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/vmware-engine/docs/public/reference/rest](https://docs.cloud.google.com/vmware-engine/docs/public/reference/rest))
- encrypt (evidence: [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/vmware-engine/docs/public/reference/rest](https://docs.cloud.google.com/vmware-engine/docs/public/reference/rest))
- firewall (evidence: [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/vmware-engine/docs/public/reference/rest](https://docs.cloud.google.com/vmware-engine/docs/public/reference/rest))
- iam (evidence: [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/vmware-engine/docs/public/reference/rest](https://docs.cloud.google.com/vmware-engine/docs/public/reference/rest))
- identity (evidence: [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/vmware-engine/docs/public/reference/rest](https://docs.cloud.google.com/vmware-engine/docs/public/reference/rest))
- key (evidence: [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/vmware-engine/docs/public/reference/rest](https://docs.cloud.google.com/vmware-engine/docs/public/reference/rest))
- kms (evidence: [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/vmware-engine/docs/public/reference/rest](https://docs.cloud.google.com/vmware-engine/docs/public/reference/rest))
- logging (evidence: [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/vmware-engine/docs/public/reference/rest](https://docs.cloud.google.com/vmware-engine/docs/public/reference/rest))
- permission (evidence: [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/vmware-engine/docs/public/reference/rest](https://docs.cloud.google.com/vmware-engine/docs/public/reference/rest))
- policy (evidence: [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/vmware-engine/docs/public/reference/rest](https://docs.cloud.google.com/vmware-engine/docs/public/reference/rest))
- private (evidence: [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/vmware-engine/docs/public/reference/rest](https://docs.cloud.google.com/vmware-engine/docs/public/reference/rest))
- role (evidence: [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/vmware-engine/docs/public/reference/rest](https://docs.cloud.google.com/vmware-engine/docs/public/reference/rest))
- security (evidence: [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/vmware-engine/docs/public/reference/rest](https://docs.cloud.google.com/vmware-engine/docs/public/reference/rest))
- token (evidence: [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security), [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/vmware-engine/docs/public/reference/rest](https://docs.cloud.google.com/vmware-engine/docs/public/reference/rest))

## Official Evidence

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control)
- [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security)
- [https://docs.cloud.google.com/vmware-engine/docs/public/reference/rest](https://docs.cloud.google.com/vmware-engine/docs/public/reference/rest)
