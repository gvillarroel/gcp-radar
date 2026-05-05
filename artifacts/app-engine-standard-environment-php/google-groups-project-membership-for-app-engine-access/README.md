# Google Groups project membership for App Engine access

Product: App Engine standard environment PHP
Feature slug: `google-groups-project-membership-for-app-engine-access`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

App Engine now supports granting application access to all members of a Google Group when the group is added as a project member.

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

- access (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control), [https://docs.cloud.google.com/appengine/docs/standard/php7/granting-project-access](https://docs.cloud.google.com/appengine/docs/standard/php7/granting-project-access), [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control))
- auth (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control), [https://docs.cloud.google.com/appengine/docs/standard/php7/granting-project-access](https://docs.cloud.google.com/appengine/docs/standard/php7/granting-project-access), [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control))
- credential (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control), [https://docs.cloud.google.com/appengine/docs/standard/php7/granting-project-access](https://docs.cloud.google.com/appengine/docs/standard/php7/granting-project-access), [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control))
- iam (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control), [https://docs.cloud.google.com/appengine/docs/standard/php7/granting-project-access](https://docs.cloud.google.com/appengine/docs/standard/php7/granting-project-access), [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control))
- key (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control), [https://docs.cloud.google.com/appengine/docs/standard/php7/granting-project-access](https://docs.cloud.google.com/appengine/docs/standard/php7/granting-project-access), [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control))
- policy (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control), [https://docs.cloud.google.com/appengine/docs/standard/php7/granting-project-access](https://docs.cloud.google.com/appengine/docs/standard/php7/granting-project-access), [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control))
- role (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control), [https://docs.cloud.google.com/appengine/docs/standard/php7/granting-project-access](https://docs.cloud.google.com/appengine/docs/standard/php7/granting-project-access), [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control))
- token (evidence: [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control), [https://docs.cloud.google.com/appengine/docs/standard/php7/granting-project-access](https://docs.cloud.google.com/appengine/docs/standard/php7/granting-project-access), [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control))

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control)
- [https://docs.cloud.google.com/appengine/docs/standard/access-control](https://docs.cloud.google.com/appengine/docs/standard/access-control)
- [https://docs.cloud.google.com/appengine/docs/standard/php7/granting-project-access](https://docs.cloud.google.com/appengine/docs/standard/php7/granting-project-access)
