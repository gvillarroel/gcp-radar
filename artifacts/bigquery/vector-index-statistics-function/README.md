# VECTOR_INDEX.STATISTICS function

Product: BigQuery
Feature slug: `vector-index-statistics-function`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The VECTOR_INDEX.STATISTICS function measures drift between current table data and the data used when a vector index was created.

## Lifecycle

- Latest feature date: 2025-07-22
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/vectorindex_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/vectorindex_functions), [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language))
- audit (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/vectorindex_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/vectorindex_functions), [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language))
- constraint (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/vectorindex_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/vectorindex_functions), [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language))
- credential (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/vectorindex_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/vectorindex_functions), [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language))
- encrypt (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/vectorindex_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/vectorindex_functions), [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language))
- iam (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/vectorindex_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/vectorindex_functions), [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language))
- key (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/vectorindex_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/vectorindex_functions), [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language))
- logging (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/vectorindex_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/vectorindex_functions), [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language))
- permission (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/vectorindex_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/vectorindex_functions), [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language))
- policy (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/vectorindex_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/vectorindex_functions), [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language))
- private (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/vectorindex_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/vectorindex_functions), [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language))
- security (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/vectorindex_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/vectorindex_functions), [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language))

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/vectorindex_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/vectorindex_functions)
- [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)
