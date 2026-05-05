# MongoDB Version 2 connector

Product: Integration Connectors
Feature slug: `mongodb-version-2-connector`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The MongoDB Version 2 connector supports queryable encryption.

## Lifecycle

- Latest feature date: 2023-05-23
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth (evidence: [https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/ConnectorVersionView](https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/ConnectorVersionView), [https://docs.cloud.google.com/integration-connectors/docs/cmek](https://docs.cloud.google.com/integration-connectors/docs/cmek), [https://docs.cloud.google.com/integration-connectors/docs/sample-terraform-connection](https://docs.cloud.google.com/integration-connectors/docs/sample-terraform-connection), [https://docs.cloud.google.com/integration-connectors/docs/connectors/db2/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/db2/configure))
- certificate (evidence: [https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/ConnectorVersionView](https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/ConnectorVersionView), [https://docs.cloud.google.com/integration-connectors/docs/cmek](https://docs.cloud.google.com/integration-connectors/docs/cmek), [https://docs.cloud.google.com/integration-connectors/docs/sample-terraform-connection](https://docs.cloud.google.com/integration-connectors/docs/sample-terraform-connection), [https://docs.cloud.google.com/integration-connectors/docs/connectors/db2/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/db2/configure))
- encrypt (evidence: [https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/ConnectorVersionView](https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/ConnectorVersionView), [https://docs.cloud.google.com/integration-connectors/docs/cmek](https://docs.cloud.google.com/integration-connectors/docs/cmek), [https://docs.cloud.google.com/integration-connectors/docs/sample-terraform-connection](https://docs.cloud.google.com/integration-connectors/docs/sample-terraform-connection), [https://docs.cloud.google.com/integration-connectors/docs/connectors/db2/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/db2/configure))
- iam (evidence: [https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/ConnectorVersionView](https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/ConnectorVersionView), [https://docs.cloud.google.com/integration-connectors/docs/cmek](https://docs.cloud.google.com/integration-connectors/docs/cmek), [https://docs.cloud.google.com/integration-connectors/docs/sample-terraform-connection](https://docs.cloud.google.com/integration-connectors/docs/sample-terraform-connection), [https://docs.cloud.google.com/integration-connectors/docs/connectors/db2/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/db2/configure))
- key (evidence: [https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/ConnectorVersionView](https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/ConnectorVersionView), [https://docs.cloud.google.com/integration-connectors/docs/cmek](https://docs.cloud.google.com/integration-connectors/docs/cmek), [https://docs.cloud.google.com/integration-connectors/docs/sample-terraform-connection](https://docs.cloud.google.com/integration-connectors/docs/sample-terraform-connection), [https://docs.cloud.google.com/integration-connectors/docs/connectors/db2/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/db2/configure))
- kms (evidence: [https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/ConnectorVersionView](https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/ConnectorVersionView), [https://docs.cloud.google.com/integration-connectors/docs/cmek](https://docs.cloud.google.com/integration-connectors/docs/cmek), [https://docs.cloud.google.com/integration-connectors/docs/sample-terraform-connection](https://docs.cloud.google.com/integration-connectors/docs/sample-terraform-connection), [https://docs.cloud.google.com/integration-connectors/docs/connectors/db2/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/db2/configure))
- private (evidence: [https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/ConnectorVersionView](https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/ConnectorVersionView), [https://docs.cloud.google.com/integration-connectors/docs/cmek](https://docs.cloud.google.com/integration-connectors/docs/cmek), [https://docs.cloud.google.com/integration-connectors/docs/sample-terraform-connection](https://docs.cloud.google.com/integration-connectors/docs/sample-terraform-connection), [https://docs.cloud.google.com/integration-connectors/docs/connectors/db2/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/db2/configure))
- role (evidence: [https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/ConnectorVersionView](https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/ConnectorVersionView), [https://docs.cloud.google.com/integration-connectors/docs/cmek](https://docs.cloud.google.com/integration-connectors/docs/cmek), [https://docs.cloud.google.com/integration-connectors/docs/sample-terraform-connection](https://docs.cloud.google.com/integration-connectors/docs/sample-terraform-connection), [https://docs.cloud.google.com/integration-connectors/docs/connectors/db2/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/db2/configure))
- secret (evidence: [https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/ConnectorVersionView](https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/ConnectorVersionView), [https://docs.cloud.google.com/integration-connectors/docs/cmek](https://docs.cloud.google.com/integration-connectors/docs/cmek), [https://docs.cloud.google.com/integration-connectors/docs/sample-terraform-connection](https://docs.cloud.google.com/integration-connectors/docs/sample-terraform-connection), [https://docs.cloud.google.com/integration-connectors/docs/connectors/db2/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/db2/configure))

## Official Evidence

- [https://docs.cloud.google.com/integration-connectors/docs/cmek](https://docs.cloud.google.com/integration-connectors/docs/cmek)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/db2/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/db2/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/ConnectorVersionView](https://docs.cloud.google.com/integration-connectors/docs/reference/rest/v1/ConnectorVersionView)
- [https://docs.cloud.google.com/integration-connectors/docs/sample-terraform-connection](https://docs.cloud.google.com/integration-connectors/docs/sample-terraform-connection)
