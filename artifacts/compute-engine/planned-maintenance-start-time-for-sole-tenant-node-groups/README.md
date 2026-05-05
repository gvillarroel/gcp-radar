# Planned maintenance start time for sole-tenant node groups

Product: Compute Engine
Feature slug: `planned-maintenance-start-time-for-sole-tenant-node-groups`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Planned maintenance start time for sole-tenant node groups lets you specify when maintenance begins for VMs in the group.

## Lifecycle

- Latest feature date: 2021-02-02
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

- access (evidence: [https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances](https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam))
- allow (evidence: [https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances](https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam))
- armor (evidence: [https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances](https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam))
- audit (evidence: [https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances](https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam))
- auth (evidence: [https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances](https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam))
- certificate (evidence: [https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances](https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam))
- confidential (evidence: [https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances](https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam))
- constraint (evidence: [https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances](https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam))
- credential (evidence: [https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances](https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam))
- encrypt (evidence: [https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances](https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam))
- firewall (evidence: [https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances](https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam))
- iam (evidence: [https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances](https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam))
- identity (evidence: [https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances](https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam))
- key (evidence: [https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances](https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam))
- kms (evidence: [https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances](https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam))
- logging (evidence: [https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances](https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam))
- permission (evidence: [https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances](https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam))
- policy (evidence: [https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances](https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam))
- private (evidence: [https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances](https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam))
- role (evidence: [https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances](https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam))
- security (evidence: [https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances](https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam))

## Official Evidence

- [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam)
- [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines)
- [https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances](https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances)
