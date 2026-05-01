# Dell PowerScale file share access

Product: Google Cloud VMware Engine
Feature slug: `dell-powerscale-file-share-access`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Dell PowerScale file shares can be accessed in-guest from Google Cloud VMware Engine VMs using NFS or SMB.

## Lifecycle

- Latest feature date: 2022-09-23
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
- firewall
- iam
- logging
- permission
- policy
- private
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/cloud-console/filestore/filestore-instance-backup](https://docs.cloud.google.com/backup-disaster-recovery/docs/cloud-console/filestore/filestore-instance-backup)
- [https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone](https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone)
