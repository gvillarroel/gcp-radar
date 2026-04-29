# App-level default service account selection

Product: App Engine flexible environment Ruby
Feature slug: `app-level-default-service-account-selection`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

App Engine applications can use any configured project service account as the app-level default service account during creation and updates.

## Lifecycle

- Latest feature date: 2022-12-13
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
- role

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control)
- [https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/flexible/configure-service-accounts)
- [https://docs.cloud.google.com/appengine/docs/flexible/roles](https://docs.cloud.google.com/appengine/docs/flexible/roles)
