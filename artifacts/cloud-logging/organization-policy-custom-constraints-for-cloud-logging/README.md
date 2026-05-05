# Organization Policy custom constraints for Cloud Logging

Product: Cloud Logging
Feature slug: `organization-policy-custom-constraints-for-cloud-logging`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Custom Organization Policy constraints provide more granular control over Cloud Logging resources.

## Lifecycle

- Latest feature date: 2025-02-18
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

- access (evidence: [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control), [https://docs.cloud.google.com/logging/docs/buckets](https://docs.cloud.google.com/logging/docs/buckets), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Policy](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Policy))
- constraint (evidence: [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control), [https://docs.cloud.google.com/logging/docs/buckets](https://docs.cloud.google.com/logging/docs/buckets), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Policy](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Policy))
- iam (evidence: [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control), [https://docs.cloud.google.com/logging/docs/buckets](https://docs.cloud.google.com/logging/docs/buckets), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Policy](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Policy))
- key (evidence: [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control), [https://docs.cloud.google.com/logging/docs/buckets](https://docs.cloud.google.com/logging/docs/buckets), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Policy](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Policy))
- logging (evidence: [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control), [https://docs.cloud.google.com/logging/docs/buckets](https://docs.cloud.google.com/logging/docs/buckets), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Policy](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Policy))
- permission (evidence: [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control), [https://docs.cloud.google.com/logging/docs/buckets](https://docs.cloud.google.com/logging/docs/buckets), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Policy](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Policy))
- policy (evidence: [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control), [https://docs.cloud.google.com/logging/docs/buckets](https://docs.cloud.google.com/logging/docs/buckets), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Policy](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Policy))
- private (evidence: [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control), [https://docs.cloud.google.com/logging/docs/buckets](https://docs.cloud.google.com/logging/docs/buckets), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Policy](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Policy))
- role (evidence: [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control), [https://docs.cloud.google.com/logging/docs/buckets](https://docs.cloud.google.com/logging/docs/buckets), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Policy](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Policy))

## Official Evidence

- [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control)
- [https://docs.cloud.google.com/logging/docs/buckets](https://docs.cloud.google.com/logging/docs/buckets)
- [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Policy](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Policy)
