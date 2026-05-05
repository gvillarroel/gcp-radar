# Terraform support for Log Analytics bucket and linked dataset configuration

Product: Cloud Logging
Feature slug: `terraform-support-for-log-analytics-bucket-and-linked-dataset-configuration`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Terraform modules can configure Log Analytics on Cloud Logging buckets and BigQuery linked datasets.

## Lifecycle

- Latest feature date: 2023-04-18
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

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/logging/docs/buckets](https://docs.cloud.google.com/logging/docs/buckets), [https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog](https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog), [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control))
- allow (evidence: [https://docs.cloud.google.com/logging/docs/buckets](https://docs.cloud.google.com/logging/docs/buckets), [https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog](https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog), [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control))
- audit (evidence: [https://docs.cloud.google.com/logging/docs/buckets](https://docs.cloud.google.com/logging/docs/buckets), [https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog](https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog), [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control))
- auth (evidence: [https://docs.cloud.google.com/logging/docs/buckets](https://docs.cloud.google.com/logging/docs/buckets), [https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog](https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog), [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control))
- certificate (evidence: [https://docs.cloud.google.com/logging/docs/buckets](https://docs.cloud.google.com/logging/docs/buckets), [https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog](https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog), [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control))
- credential (evidence: [https://docs.cloud.google.com/logging/docs/buckets](https://docs.cloud.google.com/logging/docs/buckets), [https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog](https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog), [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control))
- iam (evidence: [https://docs.cloud.google.com/logging/docs/buckets](https://docs.cloud.google.com/logging/docs/buckets), [https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog](https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog), [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control))
- key (evidence: [https://docs.cloud.google.com/logging/docs/buckets](https://docs.cloud.google.com/logging/docs/buckets), [https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog](https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog), [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control))
- kms (evidence: [https://docs.cloud.google.com/logging/docs/buckets](https://docs.cloud.google.com/logging/docs/buckets), [https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog](https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog), [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control))
- logging (evidence: [https://docs.cloud.google.com/logging/docs/buckets](https://docs.cloud.google.com/logging/docs/buckets), [https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog](https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog), [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control))
- permission (evidence: [https://docs.cloud.google.com/logging/docs/buckets](https://docs.cloud.google.com/logging/docs/buckets), [https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog](https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog), [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control))
- policy (evidence: [https://docs.cloud.google.com/logging/docs/buckets](https://docs.cloud.google.com/logging/docs/buckets), [https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog](https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog), [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control))
- private (evidence: [https://docs.cloud.google.com/logging/docs/buckets](https://docs.cloud.google.com/logging/docs/buckets), [https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog](https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog), [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control))
- role (evidence: [https://docs.cloud.google.com/logging/docs/buckets](https://docs.cloud.google.com/logging/docs/buckets), [https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog](https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog), [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control))
- token (evidence: [https://docs.cloud.google.com/logging/docs/buckets](https://docs.cloud.google.com/logging/docs/buckets), [https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog](https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog), [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control))

## Official Evidence

- [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control)
- [https://docs.cloud.google.com/logging/docs/buckets](https://docs.cloud.google.com/logging/docs/buckets)
- [https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog](https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog)
