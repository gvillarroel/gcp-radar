# Mandatory security and privacy notifications for users without an organization

Product: Advisory Notifications
Feature slug: `mandatory-security-and-privacy-notifications-for-users-without-an-organization`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Advisory Notifications sends mandatory security and privacy alerts to Google Cloud users that are not part of an organization.

## Lifecycle

- Latest feature date: 2023-12-04
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

- access (evidence: [https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/organizations.locations.notifications](https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/organizations.locations.notifications), [https://docs.cloud.google.com/advisory-notifications/docs/quickstart](https://docs.cloud.google.com/advisory-notifications/docs/quickstart), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview))
- allow (evidence: [https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/organizations.locations.notifications](https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/organizations.locations.notifications), [https://docs.cloud.google.com/advisory-notifications/docs/quickstart](https://docs.cloud.google.com/advisory-notifications/docs/quickstart), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview))
- auth (evidence: [https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/organizations.locations.notifications](https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/organizations.locations.notifications), [https://docs.cloud.google.com/advisory-notifications/docs/quickstart](https://docs.cloud.google.com/advisory-notifications/docs/quickstart), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview))
- iam (evidence: [https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/organizations.locations.notifications](https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/organizations.locations.notifications), [https://docs.cloud.google.com/advisory-notifications/docs/quickstart](https://docs.cloud.google.com/advisory-notifications/docs/quickstart), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview))
- identity (evidence: [https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/organizations.locations.notifications](https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/organizations.locations.notifications), [https://docs.cloud.google.com/advisory-notifications/docs/quickstart](https://docs.cloud.google.com/advisory-notifications/docs/quickstart), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview))
- permission (evidence: [https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/organizations.locations.notifications](https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/organizations.locations.notifications), [https://docs.cloud.google.com/advisory-notifications/docs/quickstart](https://docs.cloud.google.com/advisory-notifications/docs/quickstart), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview))
- policy (evidence: [https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/organizations.locations.notifications](https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/organizations.locations.notifications), [https://docs.cloud.google.com/advisory-notifications/docs/quickstart](https://docs.cloud.google.com/advisory-notifications/docs/quickstart), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview))
- role (evidence: [https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/organizations.locations.notifications](https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/organizations.locations.notifications), [https://docs.cloud.google.com/advisory-notifications/docs/quickstart](https://docs.cloud.google.com/advisory-notifications/docs/quickstart), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview))
- security (evidence: [https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/organizations.locations.notifications](https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/organizations.locations.notifications), [https://docs.cloud.google.com/advisory-notifications/docs/quickstart](https://docs.cloud.google.com/advisory-notifications/docs/quickstart), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview))
- threat (evidence: [https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/organizations.locations.notifications](https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/organizations.locations.notifications), [https://docs.cloud.google.com/advisory-notifications/docs/quickstart](https://docs.cloud.google.com/advisory-notifications/docs/quickstart), [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview))

## Official Evidence

- [https://docs.cloud.google.com/advisory-notifications/docs/quickstart](https://docs.cloud.google.com/advisory-notifications/docs/quickstart)
- [https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/organizations.locations.notifications](https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/organizations.locations.notifications)
- [https://docs.cloud.google.com/iam/docs/overview](https://docs.cloud.google.com/iam/docs/overview)
