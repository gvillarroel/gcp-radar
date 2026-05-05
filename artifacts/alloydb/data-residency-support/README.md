# Data Residency support

Product: AlloyDB
Feature slug: `data-residency-support`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

AlloyDB supports Data Residency controls.

## Lifecycle

- Latest feature date: 2023-07-18
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent](https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent), [https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb](https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb), [https://docs.cloud.google.com/alloydb/docs/reference/database-performance-snapshot-report-reference](https://docs.cloud.google.com/alloydb/docs/reference/database-performance-snapshot-report-reference))
- allow (evidence: [https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent](https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent), [https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb](https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb), [https://docs.cloud.google.com/alloydb/docs/reference/database-performance-snapshot-report-reference](https://docs.cloud.google.com/alloydb/docs/reference/database-performance-snapshot-report-reference))
- auth (evidence: [https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent](https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent), [https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb](https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb), [https://docs.cloud.google.com/alloydb/docs/reference/database-performance-snapshot-report-reference](https://docs.cloud.google.com/alloydb/docs/reference/database-performance-snapshot-report-reference))
- authorization (evidence: [https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent](https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent), [https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb](https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb), [https://docs.cloud.google.com/alloydb/docs/reference/database-performance-snapshot-report-reference](https://docs.cloud.google.com/alloydb/docs/reference/database-performance-snapshot-report-reference))
- iam (evidence: [https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent](https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent), [https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb](https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb), [https://docs.cloud.google.com/alloydb/docs/reference/database-performance-snapshot-report-reference](https://docs.cloud.google.com/alloydb/docs/reference/database-performance-snapshot-report-reference))
- identity (evidence: [https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent](https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent), [https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb](https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb), [https://docs.cloud.google.com/alloydb/docs/reference/database-performance-snapshot-report-reference](https://docs.cloud.google.com/alloydb/docs/reference/database-performance-snapshot-report-reference))
- permission (evidence: [https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent](https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent), [https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb](https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb), [https://docs.cloud.google.com/alloydb/docs/reference/database-performance-snapshot-report-reference](https://docs.cloud.google.com/alloydb/docs/reference/database-performance-snapshot-report-reference))
- role (evidence: [https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent](https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent), [https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb](https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb), [https://docs.cloud.google.com/alloydb/docs/reference/database-performance-snapshot-report-reference](https://docs.cloud.google.com/alloydb/docs/reference/database-performance-snapshot-report-reference))
- token (evidence: [https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent](https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent), [https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb](https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb), [https://docs.cloud.google.com/alloydb/docs/reference/database-performance-snapshot-report-reference](https://docs.cloud.google.com/alloydb/docs/reference/database-performance-snapshot-report-reference))

## Official Evidence

- [https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent](https://docs.cloud.google.com/alloydb/docs/ai/integrate-applications-data-agent)
- [https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb](https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb)
- [https://docs.cloud.google.com/alloydb/docs/reference/database-performance-snapshot-report-reference](https://docs.cloud.google.com/alloydb/docs/reference/database-performance-snapshot-report-reference)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:generic_supporting_pages` Supporting pages do not mention any informative feature tokens.
