# Custom connectors

Product: Integration Connectors
Feature slug: `custom-connectors`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Custom connectors based on OpenAPI let you define connectors outside the standard catalog and use them in integrations.

## Lifecycle

- Latest feature date: 2024-01-24
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

- access (evidence: [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions), [https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredevops/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredevops/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors/confluence/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/confluence/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors/airtable/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/airtable/configure))
- auth (evidence: [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions), [https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredevops/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredevops/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors/confluence/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/confluence/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors/airtable/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/airtable/configure))
- iam (evidence: [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions), [https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredevops/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredevops/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors/confluence/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/confluence/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors/airtable/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/airtable/configure))
- permission (evidence: [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions), [https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredevops/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredevops/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors/confluence/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/confluence/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors/airtable/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/airtable/configure))
- policy (evidence: [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions), [https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredevops/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredevops/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors/confluence/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/confluence/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors/airtable/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/airtable/configure))
- role (evidence: [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions), [https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredevops/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredevops/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors/confluence/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/confluence/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors/airtable/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/airtable/configure))
- secret (evidence: [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions), [https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredevops/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredevops/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors/confluence/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/confluence/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors/airtable/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/airtable/configure))
- token (evidence: [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions), [https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredevops/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredevops/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors/confluence/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/confluence/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors/airtable/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/airtable/configure))

## Official Evidence

- [https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions](https://docs.cloud.google.com/integration-connectors/docs/connectors-access-permissions)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/airtable/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/airtable/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredevops/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/azuredevops/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/confluence/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/confluence/configure)
