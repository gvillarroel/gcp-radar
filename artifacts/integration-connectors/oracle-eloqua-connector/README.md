# Oracle Eloqua connector

Product: Integration Connectors
Feature slug: `oracle-eloqua-connector`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The Oracle Eloqua connector is generally available.

## Lifecycle

- Latest feature date: 2025-02-21
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

- access (evidence: [https://docs.cloud.google.com/integration-connectors/docs/connector-reference-overview](https://docs.cloud.google.com/integration-connectors/docs/connector-reference-overview), [https://docs.cloud.google.com/integration-connectors/docs/all-integration-connectors](https://docs.cloud.google.com/integration-connectors/docs/all-integration-connectors), [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions), [https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredatalakestorage/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredatalakestorage/configure))
- auth (evidence: [https://docs.cloud.google.com/integration-connectors/docs/connector-reference-overview](https://docs.cloud.google.com/integration-connectors/docs/connector-reference-overview), [https://docs.cloud.google.com/integration-connectors/docs/all-integration-connectors](https://docs.cloud.google.com/integration-connectors/docs/all-integration-connectors), [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions), [https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredatalakestorage/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredatalakestorage/configure))
- iam (evidence: [https://docs.cloud.google.com/integration-connectors/docs/connector-reference-overview](https://docs.cloud.google.com/integration-connectors/docs/connector-reference-overview), [https://docs.cloud.google.com/integration-connectors/docs/all-integration-connectors](https://docs.cloud.google.com/integration-connectors/docs/all-integration-connectors), [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions), [https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredatalakestorage/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredatalakestorage/configure))
- identity (evidence: [https://docs.cloud.google.com/integration-connectors/docs/connector-reference-overview](https://docs.cloud.google.com/integration-connectors/docs/connector-reference-overview), [https://docs.cloud.google.com/integration-connectors/docs/all-integration-connectors](https://docs.cloud.google.com/integration-connectors/docs/all-integration-connectors), [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions), [https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredatalakestorage/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredatalakestorage/configure))
- permission (evidence: [https://docs.cloud.google.com/integration-connectors/docs/connector-reference-overview](https://docs.cloud.google.com/integration-connectors/docs/connector-reference-overview), [https://docs.cloud.google.com/integration-connectors/docs/all-integration-connectors](https://docs.cloud.google.com/integration-connectors/docs/all-integration-connectors), [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions), [https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredatalakestorage/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredatalakestorage/configure))
- policy (evidence: [https://docs.cloud.google.com/integration-connectors/docs/connector-reference-overview](https://docs.cloud.google.com/integration-connectors/docs/connector-reference-overview), [https://docs.cloud.google.com/integration-connectors/docs/all-integration-connectors](https://docs.cloud.google.com/integration-connectors/docs/all-integration-connectors), [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions), [https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredatalakestorage/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredatalakestorage/configure))
- role (evidence: [https://docs.cloud.google.com/integration-connectors/docs/connector-reference-overview](https://docs.cloud.google.com/integration-connectors/docs/connector-reference-overview), [https://docs.cloud.google.com/integration-connectors/docs/all-integration-connectors](https://docs.cloud.google.com/integration-connectors/docs/all-integration-connectors), [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions), [https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredatalakestorage/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredatalakestorage/configure))
- secret (evidence: [https://docs.cloud.google.com/integration-connectors/docs/connector-reference-overview](https://docs.cloud.google.com/integration-connectors/docs/connector-reference-overview), [https://docs.cloud.google.com/integration-connectors/docs/all-integration-connectors](https://docs.cloud.google.com/integration-connectors/docs/all-integration-connectors), [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions), [https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredatalakestorage/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredatalakestorage/configure))

## Official Evidence

- [https://docs.cloud.google.com/integration-connectors/docs/all-integration-connectors](https://docs.cloud.google.com/integration-connectors/docs/all-integration-connectors)
- [https://docs.cloud.google.com/integration-connectors/docs/connector-reference-overview](https://docs.cloud.google.com/integration-connectors/docs/connector-reference-overview)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredatalakestorage/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredatalakestorage/configure)
