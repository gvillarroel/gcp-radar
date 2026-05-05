# Custom image storage location

Product: Compute Engine
Feature slug: `custom-image-storage-location`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Custom image storage location lets you choose where custom images are stored to support locality and redundancy requirements.

## Lifecycle

- Latest feature date: 2019-12-18
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

- access (evidence: [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/tutorials/high-availability-linux-pacemaker](https://docs.cloud.google.com/compute/docs/tutorials/high-availability-linux-pacemaker))
- allow (evidence: [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/tutorials/high-availability-linux-pacemaker](https://docs.cloud.google.com/compute/docs/tutorials/high-availability-linux-pacemaker))
- armor (evidence: [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/tutorials/high-availability-linux-pacemaker](https://docs.cloud.google.com/compute/docs/tutorials/high-availability-linux-pacemaker))
- audit (evidence: [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/tutorials/high-availability-linux-pacemaker](https://docs.cloud.google.com/compute/docs/tutorials/high-availability-linux-pacemaker))
- auth (evidence: [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/tutorials/high-availability-linux-pacemaker](https://docs.cloud.google.com/compute/docs/tutorials/high-availability-linux-pacemaker))
- authorization (evidence: [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/tutorials/high-availability-linux-pacemaker](https://docs.cloud.google.com/compute/docs/tutorials/high-availability-linux-pacemaker))
- certificate (evidence: [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/tutorials/high-availability-linux-pacemaker](https://docs.cloud.google.com/compute/docs/tutorials/high-availability-linux-pacemaker))
- confidential (evidence: [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/tutorials/high-availability-linux-pacemaker](https://docs.cloud.google.com/compute/docs/tutorials/high-availability-linux-pacemaker))
- constraint (evidence: [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/tutorials/high-availability-linux-pacemaker](https://docs.cloud.google.com/compute/docs/tutorials/high-availability-linux-pacemaker))
- credential (evidence: [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/tutorials/high-availability-linux-pacemaker](https://docs.cloud.google.com/compute/docs/tutorials/high-availability-linux-pacemaker))
- encrypt (evidence: [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/tutorials/high-availability-linux-pacemaker](https://docs.cloud.google.com/compute/docs/tutorials/high-availability-linux-pacemaker))
- firewall (evidence: [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/tutorials/high-availability-linux-pacemaker](https://docs.cloud.google.com/compute/docs/tutorials/high-availability-linux-pacemaker))
- iam (evidence: [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/tutorials/high-availability-linux-pacemaker](https://docs.cloud.google.com/compute/docs/tutorials/high-availability-linux-pacemaker))
- identity (evidence: [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/tutorials/high-availability-linux-pacemaker](https://docs.cloud.google.com/compute/docs/tutorials/high-availability-linux-pacemaker))
- key (evidence: [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/tutorials/high-availability-linux-pacemaker](https://docs.cloud.google.com/compute/docs/tutorials/high-availability-linux-pacemaker))
- kms (evidence: [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/tutorials/high-availability-linux-pacemaker](https://docs.cloud.google.com/compute/docs/tutorials/high-availability-linux-pacemaker))
- logging (evidence: [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/tutorials/high-availability-linux-pacemaker](https://docs.cloud.google.com/compute/docs/tutorials/high-availability-linux-pacemaker))
- permission (evidence: [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/tutorials/high-availability-linux-pacemaker](https://docs.cloud.google.com/compute/docs/tutorials/high-availability-linux-pacemaker))
- policy (evidence: [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/tutorials/high-availability-linux-pacemaker](https://docs.cloud.google.com/compute/docs/tutorials/high-availability-linux-pacemaker))
- private (evidence: [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/tutorials/high-availability-linux-pacemaker](https://docs.cloud.google.com/compute/docs/tutorials/high-availability-linux-pacemaker))
- role (evidence: [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/tutorials/high-availability-linux-pacemaker](https://docs.cloud.google.com/compute/docs/tutorials/high-availability-linux-pacemaker))
- secret (evidence: [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/tutorials/high-availability-linux-pacemaker](https://docs.cloud.google.com/compute/docs/tutorials/high-availability-linux-pacemaker))
- security (evidence: [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/tutorials/high-availability-linux-pacemaker](https://docs.cloud.google.com/compute/docs/tutorials/high-availability-linux-pacemaker))

## Official Evidence

- [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam)
- [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines)
- [https://docs.cloud.google.com/compute/docs/tutorials/high-availability-linux-pacemaker](https://docs.cloud.google.com/compute/docs/tutorials/high-availability-linux-pacemaker)
