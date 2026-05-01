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

- access
- allow
- armor
- audit
- encrypt
- firewall
- iam
- identity
- key
- logging
- permission
- policy
- private
- role
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control)
- [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security)
- [https://docs.cloud.google.com/vmware-engine/docs/concepts-vpc-service-controls](https://docs.cloud.google.com/vmware-engine/docs/concepts-vpc-service-controls)
