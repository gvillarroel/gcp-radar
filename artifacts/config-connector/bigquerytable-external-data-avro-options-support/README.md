# BigQueryTable external data Avro options support

Product: Config Connector
Feature slug: `bigquerytable-external-data-avro-options-support`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Config Connector supports the spec.externalDataConfiguration.avroOptions field for BigQueryTable resources.

## Lifecycle

- Latest feature date: 2022-11-15
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

- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/bigquery/bigqueryjob](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/bigquery/bigqueryjob)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/bigquery/bigquerytable](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/bigquery/bigquerytable)
- [https://docs.cloud.google.com/config-connector/docs/resources](https://docs.cloud.google.com/config-connector/docs/resources)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
