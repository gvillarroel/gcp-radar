# Python Buildpack uv default package manager

Product: Cloud Run functions
Feature slug: `python-buildpack-uv-default-package-manager`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

For Python 3.14 and later, the Python Buildpack uses uv as the default package manager and can be switched to pip with an environment variable; For Python 3.14 and later, the Python Buildpack uses uv as the default package manager and can be switched to pip with an environment variable.

## Lifecycle

- Latest feature date: 2025-12-19
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

- access (evidence: [https://docs.cloud.google.com/functions/docs/reference/iam/roles](https://docs.cloud.google.com/functions/docs/reference/iam/roles), [https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub](https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub), [https://docs.cloud.google.com/functions/docs/tutorials/terraform](https://docs.cloud.google.com/functions/docs/tutorials/terraform))
- allow (evidence: [https://docs.cloud.google.com/functions/docs/reference/iam/roles](https://docs.cloud.google.com/functions/docs/reference/iam/roles), [https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub](https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub), [https://docs.cloud.google.com/functions/docs/tutorials/terraform](https://docs.cloud.google.com/functions/docs/tutorials/terraform))
- audit (evidence: [https://docs.cloud.google.com/functions/docs/reference/iam/roles](https://docs.cloud.google.com/functions/docs/reference/iam/roles), [https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub](https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub), [https://docs.cloud.google.com/functions/docs/tutorials/terraform](https://docs.cloud.google.com/functions/docs/tutorials/terraform))
- auth (evidence: [https://docs.cloud.google.com/functions/docs/reference/iam/roles](https://docs.cloud.google.com/functions/docs/reference/iam/roles), [https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub](https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub), [https://docs.cloud.google.com/functions/docs/tutorials/terraform](https://docs.cloud.google.com/functions/docs/tutorials/terraform))
- iam (evidence: [https://docs.cloud.google.com/functions/docs/reference/iam/roles](https://docs.cloud.google.com/functions/docs/reference/iam/roles), [https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub](https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub), [https://docs.cloud.google.com/functions/docs/tutorials/terraform](https://docs.cloud.google.com/functions/docs/tutorials/terraform))
- identity (evidence: [https://docs.cloud.google.com/functions/docs/reference/iam/roles](https://docs.cloud.google.com/functions/docs/reference/iam/roles), [https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub](https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub), [https://docs.cloud.google.com/functions/docs/tutorials/terraform](https://docs.cloud.google.com/functions/docs/tutorials/terraform))
- permission (evidence: [https://docs.cloud.google.com/functions/docs/reference/iam/roles](https://docs.cloud.google.com/functions/docs/reference/iam/roles), [https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub](https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub), [https://docs.cloud.google.com/functions/docs/tutorials/terraform](https://docs.cloud.google.com/functions/docs/tutorials/terraform))
- policy (evidence: [https://docs.cloud.google.com/functions/docs/reference/iam/roles](https://docs.cloud.google.com/functions/docs/reference/iam/roles), [https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub](https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub), [https://docs.cloud.google.com/functions/docs/tutorials/terraform](https://docs.cloud.google.com/functions/docs/tutorials/terraform))
- role (evidence: [https://docs.cloud.google.com/functions/docs/reference/iam/roles](https://docs.cloud.google.com/functions/docs/reference/iam/roles), [https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub](https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub), [https://docs.cloud.google.com/functions/docs/tutorials/terraform](https://docs.cloud.google.com/functions/docs/tutorials/terraform))
- security (evidence: [https://docs.cloud.google.com/functions/docs/reference/iam/roles](https://docs.cloud.google.com/functions/docs/reference/iam/roles), [https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub](https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub), [https://docs.cloud.google.com/functions/docs/tutorials/terraform](https://docs.cloud.google.com/functions/docs/tutorials/terraform))
- token (evidence: [https://docs.cloud.google.com/functions/docs/reference/iam/roles](https://docs.cloud.google.com/functions/docs/reference/iam/roles), [https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub](https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub), [https://docs.cloud.google.com/functions/docs/tutorials/terraform](https://docs.cloud.google.com/functions/docs/tutorials/terraform))

## Official Evidence

- [https://docs.cloud.google.com/functions/docs/reference/iam/roles](https://docs.cloud.google.com/functions/docs/reference/iam/roles)
- [https://docs.cloud.google.com/functions/docs/tutorials/terraform](https://docs.cloud.google.com/functions/docs/tutorials/terraform)
- [https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub](https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub)
