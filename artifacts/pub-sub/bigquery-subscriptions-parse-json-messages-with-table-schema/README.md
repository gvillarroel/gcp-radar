# BigQuery subscriptions parse JSON messages with table schema

Product: Pub/Sub
Feature slug: `bigquery-subscriptions-parse-json-messages-with-table-schema`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

BigQuery subscriptions can parse JSON messages by using the schema of a BigQuery table.

## Lifecycle

- Latest feature date: 2024-01-22
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

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/pubsub/docs/associate-schema-topic](https://docs.cloud.google.com/pubsub/docs/associate-schema-topic), [https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription](https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription), [https://docs.cloud.google.com/pubsub/docs/access-control](https://docs.cloud.google.com/pubsub/docs/access-control), [https://docs.cloud.google.com/pubsub/docs/bigquery-troubleshooting](https://docs.cloud.google.com/pubsub/docs/bigquery-troubleshooting))
- audit (evidence: [https://docs.cloud.google.com/pubsub/docs/associate-schema-topic](https://docs.cloud.google.com/pubsub/docs/associate-schema-topic), [https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription](https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription), [https://docs.cloud.google.com/pubsub/docs/access-control](https://docs.cloud.google.com/pubsub/docs/access-control), [https://docs.cloud.google.com/pubsub/docs/bigquery-troubleshooting](https://docs.cloud.google.com/pubsub/docs/bigquery-troubleshooting))
- auth (evidence: [https://docs.cloud.google.com/pubsub/docs/associate-schema-topic](https://docs.cloud.google.com/pubsub/docs/associate-schema-topic), [https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription](https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription), [https://docs.cloud.google.com/pubsub/docs/access-control](https://docs.cloud.google.com/pubsub/docs/access-control), [https://docs.cloud.google.com/pubsub/docs/bigquery-troubleshooting](https://docs.cloud.google.com/pubsub/docs/bigquery-troubleshooting))
- iam (evidence: [https://docs.cloud.google.com/pubsub/docs/associate-schema-topic](https://docs.cloud.google.com/pubsub/docs/associate-schema-topic), [https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription](https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription), [https://docs.cloud.google.com/pubsub/docs/access-control](https://docs.cloud.google.com/pubsub/docs/access-control), [https://docs.cloud.google.com/pubsub/docs/bigquery-troubleshooting](https://docs.cloud.google.com/pubsub/docs/bigquery-troubleshooting))
- identity (evidence: [https://docs.cloud.google.com/pubsub/docs/associate-schema-topic](https://docs.cloud.google.com/pubsub/docs/associate-schema-topic), [https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription](https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription), [https://docs.cloud.google.com/pubsub/docs/access-control](https://docs.cloud.google.com/pubsub/docs/access-control), [https://docs.cloud.google.com/pubsub/docs/bigquery-troubleshooting](https://docs.cloud.google.com/pubsub/docs/bigquery-troubleshooting))
- key (evidence: [https://docs.cloud.google.com/pubsub/docs/associate-schema-topic](https://docs.cloud.google.com/pubsub/docs/associate-schema-topic), [https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription](https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription), [https://docs.cloud.google.com/pubsub/docs/access-control](https://docs.cloud.google.com/pubsub/docs/access-control), [https://docs.cloud.google.com/pubsub/docs/bigquery-troubleshooting](https://docs.cloud.google.com/pubsub/docs/bigquery-troubleshooting))
- kms (evidence: [https://docs.cloud.google.com/pubsub/docs/associate-schema-topic](https://docs.cloud.google.com/pubsub/docs/associate-schema-topic), [https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription](https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription), [https://docs.cloud.google.com/pubsub/docs/access-control](https://docs.cloud.google.com/pubsub/docs/access-control), [https://docs.cloud.google.com/pubsub/docs/bigquery-troubleshooting](https://docs.cloud.google.com/pubsub/docs/bigquery-troubleshooting))
- permission (evidence: [https://docs.cloud.google.com/pubsub/docs/associate-schema-topic](https://docs.cloud.google.com/pubsub/docs/associate-schema-topic), [https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription](https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription), [https://docs.cloud.google.com/pubsub/docs/access-control](https://docs.cloud.google.com/pubsub/docs/access-control), [https://docs.cloud.google.com/pubsub/docs/bigquery-troubleshooting](https://docs.cloud.google.com/pubsub/docs/bigquery-troubleshooting))
- policy (evidence: [https://docs.cloud.google.com/pubsub/docs/associate-schema-topic](https://docs.cloud.google.com/pubsub/docs/associate-schema-topic), [https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription](https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription), [https://docs.cloud.google.com/pubsub/docs/access-control](https://docs.cloud.google.com/pubsub/docs/access-control), [https://docs.cloud.google.com/pubsub/docs/bigquery-troubleshooting](https://docs.cloud.google.com/pubsub/docs/bigquery-troubleshooting))
- role (evidence: [https://docs.cloud.google.com/pubsub/docs/associate-schema-topic](https://docs.cloud.google.com/pubsub/docs/associate-schema-topic), [https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription](https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription), [https://docs.cloud.google.com/pubsub/docs/access-control](https://docs.cloud.google.com/pubsub/docs/access-control), [https://docs.cloud.google.com/pubsub/docs/bigquery-troubleshooting](https://docs.cloud.google.com/pubsub/docs/bigquery-troubleshooting))

## Official Evidence

- [https://docs.cloud.google.com/pubsub/docs/access-control](https://docs.cloud.google.com/pubsub/docs/access-control)
- [https://docs.cloud.google.com/pubsub/docs/associate-schema-topic](https://docs.cloud.google.com/pubsub/docs/associate-schema-topic)
- [https://docs.cloud.google.com/pubsub/docs/bigquery-troubleshooting](https://docs.cloud.google.com/pubsub/docs/bigquery-troubleshooting)
- [https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription](https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription)
