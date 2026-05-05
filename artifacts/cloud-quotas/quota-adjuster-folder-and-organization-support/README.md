# Quota adjuster folder and organization support

Product: Cloud Quotas
Feature slug: `quota-adjuster-folder-and-organization-support`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Quota adjuster supports folder-level and organization-level configuration through the Cloud Quotas API, gcloud CLI, Terraform, and client libraries.

## Lifecycle

- Latest feature date: 2026-01-30
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

- access (evidence: [https://docs.cloud.google.com/docs/quotas/quota-adjuster](https://docs.cloud.google.com/docs/quotas/quota-adjuster), [https://docs.cloud.google.com/docs/quotas/api-overview](https://docs.cloud.google.com/docs/quotas/api-overview), [https://docs.cloud.google.com/docs/quotas/view-manage](https://docs.cloud.google.com/docs/quotas/view-manage), [https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples](https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples))
- iam (evidence: [https://docs.cloud.google.com/docs/quotas/quota-adjuster](https://docs.cloud.google.com/docs/quotas/quota-adjuster), [https://docs.cloud.google.com/docs/quotas/api-overview](https://docs.cloud.google.com/docs/quotas/api-overview), [https://docs.cloud.google.com/docs/quotas/view-manage](https://docs.cloud.google.com/docs/quotas/view-manage), [https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples](https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples))
- identity (evidence: [https://docs.cloud.google.com/docs/quotas/quota-adjuster](https://docs.cloud.google.com/docs/quotas/quota-adjuster), [https://docs.cloud.google.com/docs/quotas/api-overview](https://docs.cloud.google.com/docs/quotas/api-overview), [https://docs.cloud.google.com/docs/quotas/view-manage](https://docs.cloud.google.com/docs/quotas/view-manage), [https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples](https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples))
- permission (evidence: [https://docs.cloud.google.com/docs/quotas/quota-adjuster](https://docs.cloud.google.com/docs/quotas/quota-adjuster), [https://docs.cloud.google.com/docs/quotas/api-overview](https://docs.cloud.google.com/docs/quotas/api-overview), [https://docs.cloud.google.com/docs/quotas/view-manage](https://docs.cloud.google.com/docs/quotas/view-manage), [https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples](https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples))
- role (evidence: [https://docs.cloud.google.com/docs/quotas/quota-adjuster](https://docs.cloud.google.com/docs/quotas/quota-adjuster), [https://docs.cloud.google.com/docs/quotas/api-overview](https://docs.cloud.google.com/docs/quotas/api-overview), [https://docs.cloud.google.com/docs/quotas/view-manage](https://docs.cloud.google.com/docs/quotas/view-manage), [https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples](https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples))

## Official Evidence

- [https://docs.cloud.google.com/docs/quotas/api-overview](https://docs.cloud.google.com/docs/quotas/api-overview)
- [https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples](https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples)
- [https://docs.cloud.google.com/docs/quotas/quota-adjuster](https://docs.cloud.google.com/docs/quotas/quota-adjuster)
- [https://docs.cloud.google.com/docs/quotas/view-manage](https://docs.cloud.google.com/docs/quotas/view-manage)
