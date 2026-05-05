# Conversational Analytics Show reasoning

Product: Looker
Feature slug: `conversational-analytics-show-reasoning`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Conversational Analytics includes a Show reasoning control that explains how it interprets and answers queries; Conversational Analytics includes a Show reasoning control that explains how it interprets and answers queries.

## Lifecycle

- Latest feature date: 2026-02-02
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

- access (evidence: [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control), [https://docs.cloud.google.com/looker/docs/best-practices/ca-apis-in-looker-api-best-practices](https://docs.cloud.google.com/looker/docs/best-practices/ca-apis-in-looker-api-best-practices), [https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transformation](https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transformation))
- audit (evidence: [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control), [https://docs.cloud.google.com/looker/docs/best-practices/ca-apis-in-looker-api-best-practices](https://docs.cloud.google.com/looker/docs/best-practices/ca-apis-in-looker-api-best-practices), [https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transformation](https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transformation))
- iam (evidence: [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control), [https://docs.cloud.google.com/looker/docs/best-practices/ca-apis-in-looker-api-best-practices](https://docs.cloud.google.com/looker/docs/best-practices/ca-apis-in-looker-api-best-practices), [https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transformation](https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transformation))
- key (evidence: [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control), [https://docs.cloud.google.com/looker/docs/best-practices/ca-apis-in-looker-api-best-practices](https://docs.cloud.google.com/looker/docs/best-practices/ca-apis-in-looker-api-best-practices), [https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transformation](https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transformation))
- kms (evidence: [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control), [https://docs.cloud.google.com/looker/docs/best-practices/ca-apis-in-looker-api-best-practices](https://docs.cloud.google.com/looker/docs/best-practices/ca-apis-in-looker-api-best-practices), [https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transformation](https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transformation))
- logging (evidence: [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control), [https://docs.cloud.google.com/looker/docs/best-practices/ca-apis-in-looker-api-best-practices](https://docs.cloud.google.com/looker/docs/best-practices/ca-apis-in-looker-api-best-practices), [https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transformation](https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transformation))
- permission (evidence: [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control), [https://docs.cloud.google.com/looker/docs/best-practices/ca-apis-in-looker-api-best-practices](https://docs.cloud.google.com/looker/docs/best-practices/ca-apis-in-looker-api-best-practices), [https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transformation](https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transformation))
- policy (evidence: [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control), [https://docs.cloud.google.com/looker/docs/best-practices/ca-apis-in-looker-api-best-practices](https://docs.cloud.google.com/looker/docs/best-practices/ca-apis-in-looker-api-best-practices), [https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transformation](https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transformation))
- role (evidence: [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control), [https://docs.cloud.google.com/looker/docs/best-practices/ca-apis-in-looker-api-best-practices](https://docs.cloud.google.com/looker/docs/best-practices/ca-apis-in-looker-api-best-practices), [https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transformation](https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transformation))
- security (evidence: [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control), [https://docs.cloud.google.com/looker/docs/best-practices/ca-apis-in-looker-api-best-practices](https://docs.cloud.google.com/looker/docs/best-practices/ca-apis-in-looker-api-best-practices), [https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transformation](https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transformation))
- token (evidence: [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control), [https://docs.cloud.google.com/looker/docs/best-practices/ca-apis-in-looker-api-best-practices](https://docs.cloud.google.com/looker/docs/best-practices/ca-apis-in-looker-api-best-practices), [https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transformation](https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transformation))

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control)
- [https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transformation](https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transformation)
- [https://docs.cloud.google.com/looker/docs/best-practices/ca-apis-in-looker-api-best-practices](https://docs.cloud.google.com/looker/docs/best-practices/ca-apis-in-looker-api-best-practices)
