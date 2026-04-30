# Rabbit MQ event subscriptions

Product: Integration Connectors
Feature slug: `rabbit-mq-event-subscriptions`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The Rabbit MQ connector supports event subscriptions through a new trigger in Application Integration.

## Lifecycle

- Latest feature date: 2023-11-21
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
- audit
- iam
- identity
- logging
- permission
- policy
- role
- secret

## Official Evidence

- [https://docs.cloud.google.com/integration-connectors/docs/audit-logging](https://docs.cloud.google.com/integration-connectors/docs/audit-logging)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/azuread/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/azuread/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/reference/rest](https://docs.cloud.google.com/integration-connectors/docs/reference/rest)
