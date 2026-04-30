# BigQueryOptions row scan percentage limit

Product: Sensitive Data Protection
Feature slug: `bigqueryoptions-row-scan-percentage-limit`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Adds support for limiting the number of rows scanned per file by percentage in BigQueryOptions.

## Lifecycle

- Latest feature date: 2018-08-10
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow
- auth
- key

## Official Evidence

- [https://docs.cloud.google.com/sensitive-data-protection/docs/inspecting-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/inspecting-storage)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/known-issues](https://docs.cloud.google.com/sensitive-data-protection/docs/known-issues)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/InspectJobConfig](https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/InspectJobConfig)
