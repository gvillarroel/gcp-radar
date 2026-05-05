# SSH access to internal-IP flexible instances

Product: App Engine flexible environment custom runtimes
Feature slug: `ssh-access-to-internal-ip-flexible-instances`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

App Engine flexible environment instances that use only internal IP addresses can be accessed over SSH.

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

- access (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control), [https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip), [https://docs.cloud.google.com/appengine/docs/flexible/roles](https://docs.cloud.google.com/appengine/docs/flexible/roles))
- auth (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control), [https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip), [https://docs.cloud.google.com/appengine/docs/flexible/roles](https://docs.cloud.google.com/appengine/docs/flexible/roles))
- iam (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control), [https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip), [https://docs.cloud.google.com/appengine/docs/flexible/roles](https://docs.cloud.google.com/appengine/docs/flexible/roles))
- key (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control), [https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip), [https://docs.cloud.google.com/appengine/docs/flexible/roles](https://docs.cloud.google.com/appengine/docs/flexible/roles))
- policy (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control), [https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip), [https://docs.cloud.google.com/appengine/docs/flexible/roles](https://docs.cloud.google.com/appengine/docs/flexible/roles))
- private (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control), [https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip), [https://docs.cloud.google.com/appengine/docs/flexible/roles](https://docs.cloud.google.com/appengine/docs/flexible/roles))
- role (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control), [https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip), [https://docs.cloud.google.com/appengine/docs/flexible/roles](https://docs.cloud.google.com/appengine/docs/flexible/roles))
- token (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control), [https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip), [https://docs.cloud.google.com/appengine/docs/flexible/roles](https://docs.cloud.google.com/appengine/docs/flexible/roles))

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control)
- [https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip)
- [https://docs.cloud.google.com/appengine/docs/flexible/roles](https://docs.cloud.google.com/appengine/docs/flexible/roles)
