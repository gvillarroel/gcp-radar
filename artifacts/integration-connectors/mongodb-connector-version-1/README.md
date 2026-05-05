# MongoDB connector version 1

Product: Integration Connectors
Feature slug: `mongodb-connector-version-1`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Version 1 of the MongoDB connector is deprecated and support ends on 2024-04-20; deprecated on 2024-04-20.

## Lifecycle

- Latest feature date: 2024-02-19
- Deprecation date: 2024-04-20
- Status: deprecation_noted

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

- access (evidence: [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions), [https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/ConnectorVersionView](https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/ConnectorVersionView), [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure), [https://docs.cloud.google.com/integration-connectors/docs/reference/rest](https://docs.cloud.google.com/integration-connectors/docs/reference/rest))
- auth (evidence: [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions), [https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/ConnectorVersionView](https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/ConnectorVersionView), [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure), [https://docs.cloud.google.com/integration-connectors/docs/reference/rest](https://docs.cloud.google.com/integration-connectors/docs/reference/rest))
- certificate (evidence: [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions), [https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/ConnectorVersionView](https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/ConnectorVersionView), [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure), [https://docs.cloud.google.com/integration-connectors/docs/reference/rest](https://docs.cloud.google.com/integration-connectors/docs/reference/rest))
- iam (evidence: [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions), [https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/ConnectorVersionView](https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/ConnectorVersionView), [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure), [https://docs.cloud.google.com/integration-connectors/docs/reference/rest](https://docs.cloud.google.com/integration-connectors/docs/reference/rest))
- key (evidence: [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions), [https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/ConnectorVersionView](https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/ConnectorVersionView), [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure), [https://docs.cloud.google.com/integration-connectors/docs/reference/rest](https://docs.cloud.google.com/integration-connectors/docs/reference/rest))
- logging (evidence: [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions), [https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/ConnectorVersionView](https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/ConnectorVersionView), [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure), [https://docs.cloud.google.com/integration-connectors/docs/reference/rest](https://docs.cloud.google.com/integration-connectors/docs/reference/rest))
- permission (evidence: [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions), [https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/ConnectorVersionView](https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/ConnectorVersionView), [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure), [https://docs.cloud.google.com/integration-connectors/docs/reference/rest](https://docs.cloud.google.com/integration-connectors/docs/reference/rest))
- policy (evidence: [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions), [https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/ConnectorVersionView](https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/ConnectorVersionView), [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure), [https://docs.cloud.google.com/integration-connectors/docs/reference/rest](https://docs.cloud.google.com/integration-connectors/docs/reference/rest))
- private (evidence: [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions), [https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/ConnectorVersionView](https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/ConnectorVersionView), [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure), [https://docs.cloud.google.com/integration-connectors/docs/reference/rest](https://docs.cloud.google.com/integration-connectors/docs/reference/rest))
- role (evidence: [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions), [https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/ConnectorVersionView](https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/ConnectorVersionView), [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure), [https://docs.cloud.google.com/integration-connectors/docs/reference/rest](https://docs.cloud.google.com/integration-connectors/docs/reference/rest))
- secret (evidence: [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions), [https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/ConnectorVersionView](https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/ConnectorVersionView), [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure), [https://docs.cloud.google.com/integration-connectors/docs/reference/rest](https://docs.cloud.google.com/integration-connectors/docs/reference/rest))
- token (evidence: [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions), [https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/ConnectorVersionView](https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/ConnectorVersionView), [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure), [https://docs.cloud.google.com/integration-connectors/docs/reference/rest](https://docs.cloud.google.com/integration-connectors/docs/reference/rest))

## Official Evidence

- [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/apachecassandra/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/reference/rest](https://docs.cloud.google.com/integration-connectors/docs/reference/rest)
- [https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/ConnectorVersionView](https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/ConnectorVersionView)
