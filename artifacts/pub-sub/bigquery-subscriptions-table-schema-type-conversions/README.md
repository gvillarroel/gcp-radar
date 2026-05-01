# BigQuery subscriptions table schema type conversions

Product: Pub/Sub
Feature slug: `bigquery-subscriptions-table-schema-type-conversions`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

BigQuery subscriptions with Use table schema enabled now support type conversions for DATE, TIME, DATETIME, TIMESTAMP, NUMERIC, and BIGNUMERIC values.

## Lifecycle

- Latest feature date: 2024-08-20
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- certificate
- credential
- firewall
- iam
- identity
- key
- kms
- logging
- permission
- policy
- role
- secret
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription](https://docs.cloud.google.com/pubsub/docs/create-bigquery-subscription)
- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription)
- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_subscriptions)
- [https://docs.cloud.google.com/python/docs/reference/pubsub/latest/changelog](https://docs.cloud.google.com/python/docs/reference/pubsub/latest/changelog)
