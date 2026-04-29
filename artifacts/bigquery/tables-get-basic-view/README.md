# tables.get BASIC view

Product: BigQuery
Feature slug: `tables-get-basic-view`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The tables.get API method can return a BASIC view that omits some storage statistics to reduce latency.

## Lifecycle

- Latest feature date: 2022-06-29
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- audit
- constraint
- credential
- encrypt
- iam
- key
- logging
- permission
- policy
- private
- role
- security

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)
- [https://docs.cloud.google.com/bigquery/docs/reference/rest/v2/tables/get](https://docs.cloud.google.com/bigquery/docs/reference/rest/v2/tables/get)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
