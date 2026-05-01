# BigQuery optional job creation query execution

Product: Looker
Feature slug: `bigquery-optional-job-creation-query-execution`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Looker can execute BigQuery queries with jobCreationMode=JOB_CREATION_OPTIONAL to return immediate results without creating a job when possible.

## Lifecycle

- Latest feature date: 2025-07-24
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- authorization
- iam
- key
- permission
- policy
- role
- secret
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/information-schema-jobs](https://docs.cloud.google.com/bigquery/docs/information-schema-jobs)
