# Error Reporting IAM roles

Product: Error Reporting
Feature slug: `error-reporting-iam-roles`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

IAM roles for Stackdriver Error Reporting are available for access control.

## Lifecycle

- Latest feature date: 2017-06-05
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
- auth
- iam
- identity
- key
- logging
- permission
- role

## Official Evidence

- [https://docs.cloud.google.com/error-reporting/docs/iam](https://docs.cloud.google.com/error-reporting/docs/iam)
- [https://docs.cloud.google.com/error-reporting/docs/reference/authentication](https://docs.cloud.google.com/error-reporting/docs/reference/authentication)
- [https://docs.cloud.google.com/error-reporting/docs/setup/ruby](https://docs.cloud.google.com/error-reporting/docs/setup/ruby)
