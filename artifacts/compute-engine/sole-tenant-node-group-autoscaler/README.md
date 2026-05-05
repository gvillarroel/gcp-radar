# Sole-tenant node group autoscaler

Product: Compute Engine
Feature slug: `sole-tenant-node-group-autoscaler`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The sole-tenant node group autoscaler automatically manages the size of sole-tenant node groups.

## Lifecycle

- Latest feature date: 2020-05-12
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

- access (evidence: [https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances](https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines))
- allow (evidence: [https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances](https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines))
- armor (evidence: [https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances](https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines))
- audit (evidence: [https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances](https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines))
- auth (evidence: [https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances](https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines))
- certificate (evidence: [https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances](https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines))
- confidential (evidence: [https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances](https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines))
- constraint (evidence: [https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances](https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines))
- credential (evidence: [https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances](https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines))
- encrypt (evidence: [https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances](https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines))
- firewall (evidence: [https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances](https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines))
- iam (evidence: [https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances](https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines))
- identity (evidence: [https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances](https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines))
- key (evidence: [https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances](https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines))
- kms (evidence: [https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances](https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines))
- logging (evidence: [https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances](https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines))
- permission (evidence: [https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances](https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines))
- policy (evidence: [https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances](https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines))
- private (evidence: [https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances](https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines))
- role (evidence: [https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances](https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines))
- security (evidence: [https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances](https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines))

## Official Evidence

- [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam)
- [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines)
- [https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances](https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances)
