# NUMERIC input support for SQL mathematical functions

Product: Spanner
Feature slug: `numeric-input-support-for-sql-mathematical-functions`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Spanner SQL now allows EXP, LN, LOG, LOG10, and SQRT to accept NUMERIC input directly without casting to FLOAT64.

## Lifecycle

- Latest feature date: 2021-06-15
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/spanner/docs/cloud-run-remote-function](https://docs.cloud.google.com/spanner/docs/cloud-run-remote-function), [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg), [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema))
- allow (evidence: [https://docs.cloud.google.com/spanner/docs/cloud-run-remote-function](https://docs.cloud.google.com/spanner/docs/cloud-run-remote-function), [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg), [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema))
- key (evidence: [https://docs.cloud.google.com/spanner/docs/cloud-run-remote-function](https://docs.cloud.google.com/spanner/docs/cloud-run-remote-function), [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg), [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema))
- role (evidence: [https://docs.cloud.google.com/spanner/docs/cloud-run-remote-function](https://docs.cloud.google.com/spanner/docs/cloud-run-remote-function), [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg), [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema))

## Official Evidence

- [https://docs.cloud.google.com/spanner/docs/cloud-run-remote-function](https://docs.cloud.google.com/spanner/docs/cloud-run-remote-function)
- [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
