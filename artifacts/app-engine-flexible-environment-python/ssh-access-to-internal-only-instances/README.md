# SSH access to internal-only instances

Product: App Engine flexible environment Python
Feature slug: `ssh-access-to-internal-only-instances`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

App Engine flexible environment lets you use SSH to connect to instances that use only internal IP addresses.

## Lifecycle

- Latest feature date: 2023-03-24
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

- access (evidence: [https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip), [https://docs.cloud.google.com/appengine/docs/flexible/python/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/python/disable-external-ip), [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control))
- auth (evidence: [https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip), [https://docs.cloud.google.com/appengine/docs/flexible/python/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/python/disable-external-ip), [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control))
- firewall (evidence: [https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip), [https://docs.cloud.google.com/appengine/docs/flexible/python/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/python/disable-external-ip), [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control))
- key (evidence: [https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip), [https://docs.cloud.google.com/appengine/docs/flexible/python/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/python/disable-external-ip), [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control))
- private (evidence: [https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip), [https://docs.cloud.google.com/appengine/docs/flexible/python/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/python/disable-external-ip), [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control))
- role (evidence: [https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip), [https://docs.cloud.google.com/appengine/docs/flexible/python/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/python/disable-external-ip), [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control))

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control)
- [https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip)
- [https://docs.cloud.google.com/appengine/docs/flexible/python/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/python/disable-external-ip)
