# Opting in and out of optional advisory notification types

Product: Advisory Notifications
Feature slug: `opting-in-and-out-of-optional-advisory-notification-types`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Advisory Notifications adds support for users to opt in to or opt out of optional notification types.

## Lifecycle

- Latest feature date: 2023-09-25
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

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/organizations.locations.notifications](https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/organizations.locations.notifications), [https://docs.cloud.google.com/advisory-notifications/docs/quickstart](https://docs.cloud.google.com/advisory-notifications/docs/quickstart), [https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/projects.locations.notifications](https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/projects.locations.notifications))
- iam (evidence: [https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/organizations.locations.notifications](https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/organizations.locations.notifications), [https://docs.cloud.google.com/advisory-notifications/docs/quickstart](https://docs.cloud.google.com/advisory-notifications/docs/quickstart), [https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/projects.locations.notifications](https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/projects.locations.notifications))
- identity (evidence: [https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/organizations.locations.notifications](https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/organizations.locations.notifications), [https://docs.cloud.google.com/advisory-notifications/docs/quickstart](https://docs.cloud.google.com/advisory-notifications/docs/quickstart), [https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/projects.locations.notifications](https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/projects.locations.notifications))
- permission (evidence: [https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/organizations.locations.notifications](https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/organizations.locations.notifications), [https://docs.cloud.google.com/advisory-notifications/docs/quickstart](https://docs.cloud.google.com/advisory-notifications/docs/quickstart), [https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/projects.locations.notifications](https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/projects.locations.notifications))
- role (evidence: [https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/organizations.locations.notifications](https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/organizations.locations.notifications), [https://docs.cloud.google.com/advisory-notifications/docs/quickstart](https://docs.cloud.google.com/advisory-notifications/docs/quickstart), [https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/projects.locations.notifications](https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/projects.locations.notifications))
- security (evidence: [https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/organizations.locations.notifications](https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/organizations.locations.notifications), [https://docs.cloud.google.com/advisory-notifications/docs/quickstart](https://docs.cloud.google.com/advisory-notifications/docs/quickstart), [https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/projects.locations.notifications](https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/projects.locations.notifications))
- threat (evidence: [https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/organizations.locations.notifications](https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/organizations.locations.notifications), [https://docs.cloud.google.com/advisory-notifications/docs/quickstart](https://docs.cloud.google.com/advisory-notifications/docs/quickstart), [https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/projects.locations.notifications](https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/projects.locations.notifications))

## Official Evidence

- [https://docs.cloud.google.com/advisory-notifications/docs/quickstart](https://docs.cloud.google.com/advisory-notifications/docs/quickstart)
- [https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/organizations.locations.notifications](https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/organizations.locations.notifications)
- [https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/projects.locations.notifications](https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/projects.locations.notifications)

## Validation Findings

- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
