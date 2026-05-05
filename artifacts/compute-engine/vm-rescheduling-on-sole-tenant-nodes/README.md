# VM rescheduling on sole-tenant nodes

Product: Compute Engine
Feature slug: `vm-rescheduling-on-sole-tenant-nodes`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

VM rescheduling on sole-tenant nodes lets you move VMs onto, off of, or between sole-tenant nodes.

## Lifecycle

- Latest feature date: 2020-01-31
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

- access (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources](https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources))
- allow (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources](https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources))
- armor (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources](https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources))
- audit (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources](https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources))
- auth (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources](https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources))
- authorization (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources](https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources))
- certificate (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources](https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources))
- confidential (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources](https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources))
- constraint (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources](https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources))
- credential (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources](https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources))
- encrypt (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources](https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources))
- firewall (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources](https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources))
- iam (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources](https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources))
- identity (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources](https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources))
- key (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources](https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources))
- kms (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources](https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources))
- logging (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources](https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources))
- permission (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources](https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources))
- policy (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources](https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources))
- private (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources](https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources))
- role (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources](https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources))
- security (evidence: [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines), [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam), [https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources](https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources))

## Official Evidence

- [https://docs.cloud.google.com/compute/docs/access/iam](https://docs.cloud.google.com/compute/docs/access/iam)
- [https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources](https://docs.cloud.google.com/compute/docs/access/managing-access-to-resources)
- [https://docs.cloud.google.com/compute/docs/general-purpose-machines](https://docs.cloud.google.com/compute/docs/general-purpose-machines)
