# Python 3.9 runtime

Product: App Engine standard environment Python
Feature slug: `python-3-9-runtime`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Python 3.9 is a supported App Engine standard environment runtime for Python applications.

## Lifecycle

- Latest feature date: 2021-03-11
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

- access (evidence: [https://docs.cloud.google.com/appengine/docs/standard/lifecycle/runtime-lifecycle](https://docs.cloud.google.com/appengine/docs/standard/lifecycle/runtime-lifecycle), [https://docs.cloud.google.com/appengine/docs/standard/python3](https://docs.cloud.google.com/appengine/docs/standard/python3), [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control))
- key (evidence: [https://docs.cloud.google.com/appengine/docs/standard/lifecycle/runtime-lifecycle](https://docs.cloud.google.com/appengine/docs/standard/lifecycle/runtime-lifecycle), [https://docs.cloud.google.com/appengine/docs/standard/python3](https://docs.cloud.google.com/appengine/docs/standard/python3), [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control))
- policy (evidence: [https://docs.cloud.google.com/appengine/docs/standard/lifecycle/runtime-lifecycle](https://docs.cloud.google.com/appengine/docs/standard/lifecycle/runtime-lifecycle), [https://docs.cloud.google.com/appengine/docs/standard/python3](https://docs.cloud.google.com/appengine/docs/standard/python3), [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control))
- role (evidence: [https://docs.cloud.google.com/appengine/docs/standard/lifecycle/runtime-lifecycle](https://docs.cloud.google.com/appengine/docs/standard/lifecycle/runtime-lifecycle), [https://docs.cloud.google.com/appengine/docs/standard/python3](https://docs.cloud.google.com/appengine/docs/standard/python3), [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control))

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control)
- [https://docs.cloud.google.com/appengine/docs/standard/lifecycle/runtime-lifecycle](https://docs.cloud.google.com/appengine/docs/standard/lifecycle/runtime-lifecycle)
- [https://docs.cloud.google.com/appengine/docs/standard/python3](https://docs.cloud.google.com/appengine/docs/standard/python3)
