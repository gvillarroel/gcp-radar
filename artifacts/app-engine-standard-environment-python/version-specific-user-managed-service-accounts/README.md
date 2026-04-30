# Version-specific user-managed service accounts

Product: App Engine standard environment Python
Feature slug: `version-specific-user-managed-service-accounts`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

App Engine versions can be deployed with a specified user-managed service account to scope privileges per version; App Engine versions can be deployed with a specified user-managed service account to scope privileges per version.

## Lifecycle

- Latest feature date: 2022-05-18
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
- audit
- auth
- iam
- logging
- policy
- role
- token

## Official Evidence

- [https://cloud.google.com/appengine/docs/standard/configure-service-accounts](https://cloud.google.com/appengine/docs/standard/configure-service-accounts)
- [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control)
- [https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts)
