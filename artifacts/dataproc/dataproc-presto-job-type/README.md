# Dataproc Presto job type

Product: Dataproc
Feature slug: `dataproc-presto-job-type`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Dataproc supports submitting Presto jobs to clusters with the Presto optional component enabled.

## Lifecycle

- Latest feature date: 2020-04-01
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth
- encrypt
- iam
- identity
- key
- kms
- logging
- permission
- policy
- role

## Official Evidence

- [https://docs.cloud.google.com/dataproc-metastore/docs/cmek](https://docs.cloud.google.com/dataproc-metastore/docs/cmek)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PrestoJob](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PrestoJob)
- [https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example](https://docs.cloud.google.com/dataproc/docs/tutorials/bigquery-connector-mapreduce-example)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
