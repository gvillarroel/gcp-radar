# MCP connector

Product: Integration Connectors
Feature slug: `mcp-connector`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The MCP connector enables secure data exchange and operations in business applications.

## Lifecycle

- Latest feature date: 2025-12-16
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

- access (evidence: [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors/dataverse/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/dataverse/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions), [https://docs.cloud.google.com/integration-connectors/docs/quickstart-mysql-connector](https://docs.cloud.google.com/integration-connectors/docs/quickstart-mysql-connector))
- auth (evidence: [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors/dataverse/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/dataverse/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions), [https://docs.cloud.google.com/integration-connectors/docs/quickstart-mysql-connector](https://docs.cloud.google.com/integration-connectors/docs/quickstart-mysql-connector))
- certificate (evidence: [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors/dataverse/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/dataverse/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions), [https://docs.cloud.google.com/integration-connectors/docs/quickstart-mysql-connector](https://docs.cloud.google.com/integration-connectors/docs/quickstart-mysql-connector))
- iam (evidence: [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors/dataverse/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/dataverse/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions), [https://docs.cloud.google.com/integration-connectors/docs/quickstart-mysql-connector](https://docs.cloud.google.com/integration-connectors/docs/quickstart-mysql-connector))
- key (evidence: [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors/dataverse/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/dataverse/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions), [https://docs.cloud.google.com/integration-connectors/docs/quickstart-mysql-connector](https://docs.cloud.google.com/integration-connectors/docs/quickstart-mysql-connector))
- logging (evidence: [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors/dataverse/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/dataverse/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions), [https://docs.cloud.google.com/integration-connectors/docs/quickstart-mysql-connector](https://docs.cloud.google.com/integration-connectors/docs/quickstart-mysql-connector))
- permission (evidence: [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors/dataverse/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/dataverse/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions), [https://docs.cloud.google.com/integration-connectors/docs/quickstart-mysql-connector](https://docs.cloud.google.com/integration-connectors/docs/quickstart-mysql-connector))
- policy (evidence: [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors/dataverse/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/dataverse/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions), [https://docs.cloud.google.com/integration-connectors/docs/quickstart-mysql-connector](https://docs.cloud.google.com/integration-connectors/docs/quickstart-mysql-connector))
- private (evidence: [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors/dataverse/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/dataverse/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions), [https://docs.cloud.google.com/integration-connectors/docs/quickstart-mysql-connector](https://docs.cloud.google.com/integration-connectors/docs/quickstart-mysql-connector))
- role (evidence: [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors/dataverse/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/dataverse/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions), [https://docs.cloud.google.com/integration-connectors/docs/quickstart-mysql-connector](https://docs.cloud.google.com/integration-connectors/docs/quickstart-mysql-connector))
- secret (evidence: [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors/dataverse/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/dataverse/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions), [https://docs.cloud.google.com/integration-connectors/docs/quickstart-mysql-connector](https://docs.cloud.google.com/integration-connectors/docs/quickstart-mysql-connector))
- token (evidence: [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors/dataverse/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/dataverse/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions), [https://docs.cloud.google.com/integration-connectors/docs/quickstart-mysql-connector](https://docs.cloud.google.com/integration-connectors/docs/quickstart-mysql-connector))

## Official Evidence

- [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/dataverse/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/dataverse/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/quickstart-mysql-connector](https://docs.cloud.google.com/integration-connectors/docs/quickstart-mysql-connector)
