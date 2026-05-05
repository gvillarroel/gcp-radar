# TEXT_ANALYZE function

Product: BigQuery
Feature slug: `text-analyze-function`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The TEXT_ANALYZE function analyzes text by using BigQuery text analyzers.

## Lifecycle

- Latest feature date: 2024-03-18
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis-functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis-functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/search_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/search_functions))
- audit (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis-functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis-functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/search_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/search_functions))
- constraint (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis-functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis-functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/search_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/search_functions))
- credential (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis-functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis-functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/search_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/search_functions))
- encrypt (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis-functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis-functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/search_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/search_functions))
- iam (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis-functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis-functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/search_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/search_functions))
- key (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis-functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis-functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/search_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/search_functions))
- logging (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis-functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis-functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/search_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/search_functions))
- permission (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis-functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis-functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/search_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/search_functions))
- policy (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis-functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis-functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/search_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/search_functions))
- private (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis-functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis-functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/search_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/search_functions))
- security (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis-functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis-functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/search_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/search_functions))
- token (evidence: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis-functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis-functions), [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/search_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/search_functions))

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/search_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/search_functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis-functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/text-analysis-functions)
