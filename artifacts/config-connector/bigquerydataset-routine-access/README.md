# BigQueryDataset routine access

Product: Config Connector
Feature slug: `bigquerydataset-routine-access`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Config Connector supports routine access entries on BigQueryDataset resources.

## Lifecycle

- Latest feature date: 2023-08-01
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

## Official Evidence

- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/bigquery/bigquerydataset](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/bigquery/bigquerydataset)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/bigquery/bigqueryjob](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/bigquery/bigqueryjob)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/bigquery/bigquerytable](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/bigquery/bigquerytable)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
