# AWS EFS log collection in snapshots

Product: Anthos clusters on AWS (previous generation)
Feature slug: `aws-efs-log-collection-in-snapshots`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Snapshot collection now includes AWS Elastic File System logs from user cluster nodes.

## Lifecycle

- Latest feature date: 2021-02-03
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-aws-iam-roles](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-aws-iam-roles), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/reference/aws-iam-role-list](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/reference/aws-iam-role-list))
- allow (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-aws-iam-roles](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-aws-iam-roles), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/reference/aws-iam-role-list](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/reference/aws-iam-role-list))
- auth (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-aws-iam-roles](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-aws-iam-roles), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/reference/aws-iam-role-list](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/reference/aws-iam-role-list))
- encrypt (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-aws-iam-roles](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-aws-iam-roles), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/reference/aws-iam-role-list](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/reference/aws-iam-role-list))
- iam (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-aws-iam-roles](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-aws-iam-roles), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/reference/aws-iam-role-list](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/reference/aws-iam-role-list))
- key (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-aws-iam-roles](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-aws-iam-roles), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/reference/aws-iam-role-list](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/reference/aws-iam-role-list))
- kms (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-aws-iam-roles](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-aws-iam-roles), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/reference/aws-iam-role-list](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/reference/aws-iam-role-list))
- permission (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-aws-iam-roles](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-aws-iam-roles), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/reference/aws-iam-role-list](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/reference/aws-iam-role-list))
- policy (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-aws-iam-roles](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-aws-iam-roles), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/reference/aws-iam-role-list](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/reference/aws-iam-role-list))
- role (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-aws-iam-roles](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-aws-iam-roles), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/reference/aws-iam-role-list](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/reference/aws-iam-role-list))
- secret (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-aws-iam-roles](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-aws-iam-roles), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/reference/aws-iam-role-list](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/reference/aws-iam-role-list))
- security (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-aws-iam-roles](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-aws-iam-roles), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/reference/aws-iam-role-list](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/reference/aws-iam-role-list))

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-aws-iam-roles](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-aws-iam-roles)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/reference/aws-iam-role-list](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/reference/aws-iam-role-list)
