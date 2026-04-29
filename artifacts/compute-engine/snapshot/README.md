# snapshot

Product: Compute Engine
Feature slug: `snapshot`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Disks, snapshots, and images are available in all zones of the Toronto northamerica-northeast2 region.

## Lifecycle

- Latest feature date: 2021-08-03
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
- armor
- auth
- authorization
- certificate
- encrypt
- firewall
- iam
- identity
- key
- kms
- permission
- policy
- private
- role
- security

## Official Evidence

- [https://developers.google.com/compute/docs/disks/persistent-disks](https://developers.google.com/compute/docs/disks/persistent-disks)
- [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam)
- [https://docs.cloud.google.com/compute/docs/disks/persistent-disks](https://docs.cloud.google.com/compute/docs/disks/persistent-disks)
