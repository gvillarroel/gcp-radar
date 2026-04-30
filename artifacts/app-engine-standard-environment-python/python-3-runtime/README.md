# Python 3 runtime

Product: App Engine standard environment Python
Feature slug: `python-3-runtime`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The Python 3 runtime provides the managed execution environment for Python applications on App Engine standard; The Python 3 runtime provides the managed execution environment for Python applications on App Engine standard.

## Lifecycle

- Latest feature date: 2019-04-04
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
- key
- role

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control)
- [https://docs.cloud.google.com/appengine/docs/standard/lifecycle/runtime-lifecycle](https://docs.cloud.google.com/appengine/docs/standard/lifecycle/runtime-lifecycle)
- [https://docs.cloud.google.com/appengine/docs/standard/python3](https://docs.cloud.google.com/appengine/docs/standard/python3)
