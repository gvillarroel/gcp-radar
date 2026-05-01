# Cloud Billing export queries with tags and resource names

Product: AlloyDB
Feature slug: `cloud-billing-export-queries-with-tags-and-resource-names`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

AlloyDB supports querying exported Cloud Billing data by using resource-level tags and resource names.

## Lifecycle

- Latest feature date: 2024-07-10
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- authorization
- key
- permission
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration](https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration)
- [https://docs.cloud.google.com/alloydb/docs/reference/database-performance-snapshot-report-reference](https://docs.cloud.google.com/alloydb/docs/reference/database-performance-snapshot-report-reference)
- [https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters](https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
