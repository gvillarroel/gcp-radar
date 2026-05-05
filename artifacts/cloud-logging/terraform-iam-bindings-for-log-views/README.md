# Terraform IAM bindings for log views

Product: Cloud Logging
Feature slug: `terraform-iam-bindings-for-log-views`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Terraform can attach IAM role bindings to log views to grant principals access.

## Lifecycle

- Latest feature date: 2024-06-13
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

- access (evidence: [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Policy](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Policy), [https://docs.cloud.google.com/logging/docs/central-log-storage](https://docs.cloud.google.com/logging/docs/central-log-storage))
- iam (evidence: [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Policy](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Policy), [https://docs.cloud.google.com/logging/docs/central-log-storage](https://docs.cloud.google.com/logging/docs/central-log-storage))
- key (evidence: [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Policy](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Policy), [https://docs.cloud.google.com/logging/docs/central-log-storage](https://docs.cloud.google.com/logging/docs/central-log-storage))
- logging (evidence: [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Policy](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Policy), [https://docs.cloud.google.com/logging/docs/central-log-storage](https://docs.cloud.google.com/logging/docs/central-log-storage))
- permission (evidence: [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Policy](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Policy), [https://docs.cloud.google.com/logging/docs/central-log-storage](https://docs.cloud.google.com/logging/docs/central-log-storage))
- policy (evidence: [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Policy](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Policy), [https://docs.cloud.google.com/logging/docs/central-log-storage](https://docs.cloud.google.com/logging/docs/central-log-storage))
- private (evidence: [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Policy](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Policy), [https://docs.cloud.google.com/logging/docs/central-log-storage](https://docs.cloud.google.com/logging/docs/central-log-storage))
- role (evidence: [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Policy](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Policy), [https://docs.cloud.google.com/logging/docs/central-log-storage](https://docs.cloud.google.com/logging/docs/central-log-storage))

## Official Evidence

- [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control)
- [https://docs.cloud.google.com/logging/docs/central-log-storage](https://docs.cloud.google.com/logging/docs/central-log-storage)
- [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Policy](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Policy)
