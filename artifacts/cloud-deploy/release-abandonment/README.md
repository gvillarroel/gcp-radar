# Release abandonment

Product: Cloud Deploy
Feature slug: `release-abandonment`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Release abandonment lets you permanently abandon a release in Cloud Deploy.

## Lifecycle

- Latest feature date: 2022-07-11
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
- logging
- permission
- policy
- role
- security

## Official Evidence

- [https://docs.cloud.google.com/deploy/docs/abandon-release](https://docs.cloud.google.com/deploy/docs/abandon-release)
- [https://docs.cloud.google.com/deploy/docs/iam-roles-permissions](https://docs.cloud.google.com/deploy/docs/iam-roles-permissions)
- [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.types.AbandonReleaseRequest](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.types.AbandonReleaseRequest)
