# Cloud Run Jobs Executor With Overrides role

Product: Cloud Run
Feature slug: `cloud-run-jobs-executor-with-overrides-role`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The Cloud Run Jobs Executor With Overrides predefined IAM role grants least-privilege access for executing Cloud Run jobs with overrides.

## Lifecycle

- Latest feature date: 2024-12-17
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

- access
- iam
- identity
- key
- kms
- logging
- permission
- policy
- role
- security

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.jobs.JobsAsyncClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.jobs.JobsAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.jobs.JobsClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.jobs.JobsClient)
- [https://docs.cloud.google.com/run/docs/reference/iam/roles](https://docs.cloud.google.com/run/docs/reference/iam/roles)
