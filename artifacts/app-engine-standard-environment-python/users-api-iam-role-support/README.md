# Users API IAM role support

Product: App Engine standard environment Python
Feature slug: `users-api-iam-role-support`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The Users API recognizes project IAM roles and group membership when determining admin users.

## Lifecycle

- Latest feature date: 2016-04-18
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
- key
- policy
- role
- token

## Official Evidence

- [https://cloud.google.com/appengine/docs/standard/access-control](https://cloud.google.com/appengine/docs/standard/access-control)
- [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control)
- [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)
