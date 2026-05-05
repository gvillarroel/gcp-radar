# 4

Product: Dataflow
Feature slug: `4`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Dataflow jobs can scale to 4,000 worker VMs.

## Lifecycle

- Latest feature date: 2023-11-13
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

- access (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm](https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/jobs-list](https://docs.cloud.google.com/dataflow/docs/guides/jobs-list))
- auth (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm](https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/jobs-list](https://docs.cloud.google.com/dataflow/docs/guides/jobs-list))
- authorization (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm](https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/jobs-list](https://docs.cloud.google.com/dataflow/docs/guides/jobs-list))
- certificate (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm](https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/jobs-list](https://docs.cloud.google.com/dataflow/docs/guides/jobs-list))
- encrypt (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm](https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/jobs-list](https://docs.cloud.google.com/dataflow/docs/guides/jobs-list))
- firewall (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm](https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/jobs-list](https://docs.cloud.google.com/dataflow/docs/guides/jobs-list))
- iam (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm](https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/jobs-list](https://docs.cloud.google.com/dataflow/docs/guides/jobs-list))
- identity (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm](https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/jobs-list](https://docs.cloud.google.com/dataflow/docs/guides/jobs-list))
- key (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm](https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/jobs-list](https://docs.cloud.google.com/dataflow/docs/guides/jobs-list))
- kms (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm](https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/jobs-list](https://docs.cloud.google.com/dataflow/docs/guides/jobs-list))
- logging (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm](https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/jobs-list](https://docs.cloud.google.com/dataflow/docs/guides/jobs-list))
- permission (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm](https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/jobs-list](https://docs.cloud.google.com/dataflow/docs/guides/jobs-list))
- policy (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm](https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/jobs-list](https://docs.cloud.google.com/dataflow/docs/guides/jobs-list))
- private (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm](https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/jobs-list](https://docs.cloud.google.com/dataflow/docs/guides/jobs-list))
- role (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm](https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/jobs-list](https://docs.cloud.google.com/dataflow/docs/guides/jobs-list))
- security (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm](https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/jobs-list](https://docs.cloud.google.com/dataflow/docs/guides/jobs-list))
- token (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm](https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm), [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control), [https://docs.cloud.google.com/dataflow/docs/guides/jobs-list](https://docs.cloud.google.com/dataflow/docs/guides/jobs-list))

## Official Evidence

- [https://docs.cloud.google.com/dataflow/docs/concepts/access-control](https://docs.cloud.google.com/dataflow/docs/concepts/access-control)
- [https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm](https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm)
- [https://docs.cloud.google.com/dataflow/docs/guides/jobs-list](https://docs.cloud.google.com/dataflow/docs/guides/jobs-list)
