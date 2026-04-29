# Google Groups project access

Product: App Engine standard environment Python
Feature slug: `google-groups-project-access`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

App Engine supports granting project and application access through Google Group membership.

## Lifecycle

- Latest feature date: 2016-01-14
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
