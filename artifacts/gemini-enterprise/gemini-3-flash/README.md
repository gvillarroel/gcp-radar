# Gemini 3 Flash

Product: Gemini Enterprise
Feature slug: `gemini-3-flash`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Gemini 3 Flash is available in Preview for Gemini Enterprise.

## Lifecycle

- Latest feature date: 2025-12-17
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

- access (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/quickstart-gemini-enterprise](https://docs.cloud.google.com/gemini/enterprise/docs/quickstart-gemini-enterprise), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/connect-alloydb-data](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/connect-alloydb-data), [https://docs.cloud.google.com/gemini/enterprise/docs/before-you-begin](https://docs.cloud.google.com/gemini/enterprise/docs/before-you-begin))
- allow (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/quickstart-gemini-enterprise](https://docs.cloud.google.com/gemini/enterprise/docs/quickstart-gemini-enterprise), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/connect-alloydb-data](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/connect-alloydb-data), [https://docs.cloud.google.com/gemini/enterprise/docs/before-you-begin](https://docs.cloud.google.com/gemini/enterprise/docs/before-you-begin))
- auth (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/quickstart-gemini-enterprise](https://docs.cloud.google.com/gemini/enterprise/docs/quickstart-gemini-enterprise), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/connect-alloydb-data](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/connect-alloydb-data), [https://docs.cloud.google.com/gemini/enterprise/docs/before-you-begin](https://docs.cloud.google.com/gemini/enterprise/docs/before-you-begin))
- authorization (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/quickstart-gemini-enterprise](https://docs.cloud.google.com/gemini/enterprise/docs/quickstart-gemini-enterprise), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/connect-alloydb-data](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/connect-alloydb-data), [https://docs.cloud.google.com/gemini/enterprise/docs/before-you-begin](https://docs.cloud.google.com/gemini/enterprise/docs/before-you-begin))
- credential (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/quickstart-gemini-enterprise](https://docs.cloud.google.com/gemini/enterprise/docs/quickstart-gemini-enterprise), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/connect-alloydb-data](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/connect-alloydb-data), [https://docs.cloud.google.com/gemini/enterprise/docs/before-you-begin](https://docs.cloud.google.com/gemini/enterprise/docs/before-you-begin))
- iam (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/quickstart-gemini-enterprise](https://docs.cloud.google.com/gemini/enterprise/docs/quickstart-gemini-enterprise), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/connect-alloydb-data](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/connect-alloydb-data), [https://docs.cloud.google.com/gemini/enterprise/docs/before-you-begin](https://docs.cloud.google.com/gemini/enterprise/docs/before-you-begin))
- identity (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/quickstart-gemini-enterprise](https://docs.cloud.google.com/gemini/enterprise/docs/quickstart-gemini-enterprise), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/connect-alloydb-data](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/connect-alloydb-data), [https://docs.cloud.google.com/gemini/enterprise/docs/before-you-begin](https://docs.cloud.google.com/gemini/enterprise/docs/before-you-begin))
- logging (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/quickstart-gemini-enterprise](https://docs.cloud.google.com/gemini/enterprise/docs/quickstart-gemini-enterprise), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/connect-alloydb-data](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/connect-alloydb-data), [https://docs.cloud.google.com/gemini/enterprise/docs/before-you-begin](https://docs.cloud.google.com/gemini/enterprise/docs/before-you-begin))
- permission (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/quickstart-gemini-enterprise](https://docs.cloud.google.com/gemini/enterprise/docs/quickstart-gemini-enterprise), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/connect-alloydb-data](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/connect-alloydb-data), [https://docs.cloud.google.com/gemini/enterprise/docs/before-you-begin](https://docs.cloud.google.com/gemini/enterprise/docs/before-you-begin))
- policy (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/quickstart-gemini-enterprise](https://docs.cloud.google.com/gemini/enterprise/docs/quickstart-gemini-enterprise), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/connect-alloydb-data](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/connect-alloydb-data), [https://docs.cloud.google.com/gemini/enterprise/docs/before-you-begin](https://docs.cloud.google.com/gemini/enterprise/docs/before-you-begin))
- role (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/quickstart-gemini-enterprise](https://docs.cloud.google.com/gemini/enterprise/docs/quickstart-gemini-enterprise), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/connect-alloydb-data](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/connect-alloydb-data), [https://docs.cloud.google.com/gemini/enterprise/docs/before-you-begin](https://docs.cloud.google.com/gemini/enterprise/docs/before-you-begin))
- token (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/quickstart-gemini-enterprise](https://docs.cloud.google.com/gemini/enterprise/docs/quickstart-gemini-enterprise), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/connect-alloydb-data](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/connect-alloydb-data), [https://docs.cloud.google.com/gemini/enterprise/docs/before-you-begin](https://docs.cloud.google.com/gemini/enterprise/docs/before-you-begin))

## Official Evidence

- [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control)
- [https://docs.cloud.google.com/gemini/enterprise/docs/before-you-begin](https://docs.cloud.google.com/gemini/enterprise/docs/before-you-begin)
- [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/connect-alloydb-data](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/connect-alloydb-data)
- [https://docs.cloud.google.com/gemini/enterprise/docs/quickstart-gemini-enterprise](https://docs.cloud.google.com/gemini/enterprise/docs/quickstart-gemini-enterprise)
