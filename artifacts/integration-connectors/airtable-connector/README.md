# Airtable connector

Product: Integration Connectors
Feature slug: `airtable-connector`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The Airtable connector is generally available.

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

- access (evidence: [https://docs.cloud.google.com/integration-connectors/docs/connectors/airtable/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/airtable/configure), [https://docs.cloud.google.com/integration-connectors/docs/connector-reference-overview](https://docs.cloud.google.com/integration-connectors/docs/connector-reference-overview), [https://docs.cloud.google.com/integration-connectors/docs/all-integration-connectors](https://docs.cloud.google.com/integration-connectors/docs/all-integration-connectors), [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions))
- auth (evidence: [https://docs.cloud.google.com/integration-connectors/docs/connectors/airtable/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/airtable/configure), [https://docs.cloud.google.com/integration-connectors/docs/connector-reference-overview](https://docs.cloud.google.com/integration-connectors/docs/connector-reference-overview), [https://docs.cloud.google.com/integration-connectors/docs/all-integration-connectors](https://docs.cloud.google.com/integration-connectors/docs/all-integration-connectors), [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions))
- iam (evidence: [https://docs.cloud.google.com/integration-connectors/docs/connectors/airtable/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/airtable/configure), [https://docs.cloud.google.com/integration-connectors/docs/connector-reference-overview](https://docs.cloud.google.com/integration-connectors/docs/connector-reference-overview), [https://docs.cloud.google.com/integration-connectors/docs/all-integration-connectors](https://docs.cloud.google.com/integration-connectors/docs/all-integration-connectors), [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions))
- identity (evidence: [https://docs.cloud.google.com/integration-connectors/docs/connectors/airtable/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/airtable/configure), [https://docs.cloud.google.com/integration-connectors/docs/connector-reference-overview](https://docs.cloud.google.com/integration-connectors/docs/connector-reference-overview), [https://docs.cloud.google.com/integration-connectors/docs/all-integration-connectors](https://docs.cloud.google.com/integration-connectors/docs/all-integration-connectors), [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions))
- logging (evidence: [https://docs.cloud.google.com/integration-connectors/docs/connectors/airtable/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/airtable/configure), [https://docs.cloud.google.com/integration-connectors/docs/connector-reference-overview](https://docs.cloud.google.com/integration-connectors/docs/connector-reference-overview), [https://docs.cloud.google.com/integration-connectors/docs/all-integration-connectors](https://docs.cloud.google.com/integration-connectors/docs/all-integration-connectors), [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions))
- permission (evidence: [https://docs.cloud.google.com/integration-connectors/docs/connectors/airtable/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/airtable/configure), [https://docs.cloud.google.com/integration-connectors/docs/connector-reference-overview](https://docs.cloud.google.com/integration-connectors/docs/connector-reference-overview), [https://docs.cloud.google.com/integration-connectors/docs/all-integration-connectors](https://docs.cloud.google.com/integration-connectors/docs/all-integration-connectors), [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions))
- policy (evidence: [https://docs.cloud.google.com/integration-connectors/docs/connectors/airtable/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/airtable/configure), [https://docs.cloud.google.com/integration-connectors/docs/connector-reference-overview](https://docs.cloud.google.com/integration-connectors/docs/connector-reference-overview), [https://docs.cloud.google.com/integration-connectors/docs/all-integration-connectors](https://docs.cloud.google.com/integration-connectors/docs/all-integration-connectors), [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions))
- role (evidence: [https://docs.cloud.google.com/integration-connectors/docs/connectors/airtable/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/airtable/configure), [https://docs.cloud.google.com/integration-connectors/docs/connector-reference-overview](https://docs.cloud.google.com/integration-connectors/docs/connector-reference-overview), [https://docs.cloud.google.com/integration-connectors/docs/all-integration-connectors](https://docs.cloud.google.com/integration-connectors/docs/all-integration-connectors), [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions))
- secret (evidence: [https://docs.cloud.google.com/integration-connectors/docs/connectors/airtable/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/airtable/configure), [https://docs.cloud.google.com/integration-connectors/docs/connector-reference-overview](https://docs.cloud.google.com/integration-connectors/docs/connector-reference-overview), [https://docs.cloud.google.com/integration-connectors/docs/all-integration-connectors](https://docs.cloud.google.com/integration-connectors/docs/all-integration-connectors), [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions))
- token (evidence: [https://docs.cloud.google.com/integration-connectors/docs/connectors/airtable/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/airtable/configure), [https://docs.cloud.google.com/integration-connectors/docs/connector-reference-overview](https://docs.cloud.google.com/integration-connectors/docs/connector-reference-overview), [https://docs.cloud.google.com/integration-connectors/docs/all-integration-connectors](https://docs.cloud.google.com/integration-connectors/docs/all-integration-connectors), [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions))

## Official Evidence

- [https://docs.cloud.google.com/integration-connectors/docs/all-integration-connectors](https://docs.cloud.google.com/integration-connectors/docs/all-integration-connectors)
- [https://docs.cloud.google.com/integration-connectors/docs/connector-reference-overview](https://docs.cloud.google.com/integration-connectors/docs/connector-reference-overview)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/airtable/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/airtable/configure)
