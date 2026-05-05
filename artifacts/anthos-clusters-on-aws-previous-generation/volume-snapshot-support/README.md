# Volume snapshot support

Product: Anthos clusters on AWS (previous generation)
Feature slug: `volume-snapshot-support`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

GKE on AWS 1.5.0 added support for volume snapshots.

## Lifecycle

- Latest feature date: 2020-10-12
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-aws-iam-roles](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-aws-iam-roles), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/reference/aws-iam-role-list](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/reference/aws-iam-role-list))
- allow (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-aws-iam-roles](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-aws-iam-roles), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/reference/aws-iam-role-list](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/reference/aws-iam-role-list))
- auth (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-aws-iam-roles](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-aws-iam-roles), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/reference/aws-iam-role-list](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/reference/aws-iam-role-list))
- encrypt (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-aws-iam-roles](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-aws-iam-roles), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/reference/aws-iam-role-list](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/reference/aws-iam-role-list))
- iam (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-aws-iam-roles](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-aws-iam-roles), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/reference/aws-iam-role-list](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/reference/aws-iam-role-list))
- key (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-aws-iam-roles](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-aws-iam-roles), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/reference/aws-iam-role-list](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/reference/aws-iam-role-list))
- kms (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-aws-iam-roles](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-aws-iam-roles), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/reference/aws-iam-role-list](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/reference/aws-iam-role-list))
- permission (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-aws-iam-roles](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-aws-iam-roles), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/reference/aws-iam-role-list](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/reference/aws-iam-role-list))
- policy (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-aws-iam-roles](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-aws-iam-roles), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/reference/aws-iam-role-list](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/reference/aws-iam-role-list))
- role (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-aws-iam-roles](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-aws-iam-roles), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/reference/aws-iam-role-list](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/reference/aws-iam-role-list))
- secret (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-aws-iam-roles](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-aws-iam-roles), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/reference/aws-iam-role-list](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/reference/aws-iam-role-list))
- security (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-aws-iam-roles](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-aws-iam-roles), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/reference/aws-iam-role-list](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/reference/aws-iam-role-list))

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/storage)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-aws-iam-roles](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-aws-iam-roles)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/reference/aws-iam-role-list](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/reference/aws-iam-role-list)
