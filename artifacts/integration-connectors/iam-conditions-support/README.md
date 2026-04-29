# IAM Conditions support

Product: Integration Connectors
Feature slug: `iam-conditions-support`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

IAM Conditions can be added to Connection, ManagedZone, EndpointAttachment, and EventSubscription resources.

## Lifecycle

- Latest feature date: 2023-10-10
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
- auth
- encrypt
- iam
- identity
- key
- logging
- permission
- policy
- private
- role
- secret
- token

## Official Evidence

- [https://docs.cloud.google.com/integration-connectors/docs/add-connector-iam-conditions](https://docs.cloud.google.com/integration-connectors/docs/add-connector-iam-conditions)
- [https://docs.cloud.google.com/integration-connectors/docs/audit-logging](https://docs.cloud.google.com/integration-connectors/docs/audit-logging)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredatalakestorage/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredatalakestorage/configure)
