# BigQueryTable external data metadata controls

Product: Config Connector
Feature slug: `bigquerytable-external-data-metadata-controls`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Config Connector supports metadata cache mode and object metadata settings for BigQueryTable external data configuration.

## Lifecycle

- Latest feature date: 2023-08-21
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- audit
- auth
- authorization
- certificate
- constraint
- encrypt
- firewall
- iam
- identity
- key
- kms
- logging
- permission
- policy
- private
- role
- secret
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeter](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeter)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/bigquery/bigquerytable](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/bigquery/bigquerytable)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/pubsub/pubsubsubscription](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/pubsub/pubsubsubscription)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
