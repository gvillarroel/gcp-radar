# Users API IAM role support

Product: App Engine standard environment Go
Feature slug: `users-api-iam-role-support`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The App Engine Users API recognizes IAM roles and Google Group membership when determining admin access.

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

- access (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control), [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control), [https://docs.cloud.google.com/appengine/docs/standard/go/access-control](https://docs.cloud.google.com/appengine/docs/standard/go/access-control))
- auth (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control), [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control), [https://docs.cloud.google.com/appengine/docs/standard/go/access-control](https://docs.cloud.google.com/appengine/docs/standard/go/access-control))
- iam (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control), [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control), [https://docs.cloud.google.com/appengine/docs/standard/go/access-control](https://docs.cloud.google.com/appengine/docs/standard/go/access-control))
- key (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control), [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control), [https://docs.cloud.google.com/appengine/docs/standard/go/access-control](https://docs.cloud.google.com/appengine/docs/standard/go/access-control))
- policy (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control), [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control), [https://docs.cloud.google.com/appengine/docs/standard/go/access-control](https://docs.cloud.google.com/appengine/docs/standard/go/access-control))
- role (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control), [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control), [https://docs.cloud.google.com/appengine/docs/standard/go/access-control](https://docs.cloud.google.com/appengine/docs/standard/go/access-control))
- token (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control), [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control), [https://docs.cloud.google.com/appengine/docs/standard/go/access-control](https://docs.cloud.google.com/appengine/docs/standard/go/access-control))

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control)
- [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)
- [https://docs.cloud.google.com/appengine/docs/standard/go/access-control](https://docs.cloud.google.com/appengine/docs/standard/go/access-control)
