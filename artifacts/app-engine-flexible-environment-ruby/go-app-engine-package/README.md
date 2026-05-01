# Go App Engine package

Product: App Engine flexible environment Ruby
Feature slug: `go-app-engine-package`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The Go App Engine package is the legacy Go package for App Engine flexible environment applications; deprecated on 2016-11-15.

## Lifecycle

- Latest feature date: 2016-11-15
- Deprecation date: 2016-11-15
- Status: deprecation_noted

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
- allow
- auth
- certificate
- iam
- key
- policy
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control)
- [https://docs.cloud.google.com/appengine/docs/flexible/roles](https://docs.cloud.google.com/appengine/docs/flexible/roles)
- [https://docs.cloud.google.com/appengine/docs/flexible/ruby](https://docs.cloud.google.com/appengine/docs/flexible/ruby)
