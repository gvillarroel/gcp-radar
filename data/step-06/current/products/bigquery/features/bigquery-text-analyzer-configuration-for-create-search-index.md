---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.607Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery text analyzer configuration for CREATE SEARCH INDEX"
feature_slug: "bigquery-text-analyzer-configuration-for-create-search-index"
latest_feature_date: "2023-11-02"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "PATTERN_ANALYZER"
  - "LOG_ANALYZER option"
  - "search index analyzer"
  - "analyzer configuration"
  - "LOG_ANALYZER"
  - "text analyzer"
  - "SEARCH function integration"
  - "CREATE SEARCH INDEX"
---

# BigQuery text analyzer configuration for CREATE SEARCH INDEX

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery adds support in CREATE SEARCH INDEX for text analysis configuration using LOG_ANALYZER and PATTERN_ANALYZER, including use with SEARCH-related functions.

## Extended Definition

BigQuery supports configuring a text analyzer when creating a search index via the `CREATE SEARCH INDEX` statement by using the `analyzer` option. This option is a JSON-formatted STRING that sets the text analyzer configuration for index token generation, and documented supported values include `LOG ANALYZER`, `NO OP ANALYZER`, and `PATTERN ANALYZER`. The provided documentation indicates `PATTERN ANALYZER` (and `LOG ANALYZER`) as supported analyzer modes when that option is used.

## Evidence Summary

The cited BigQuery DDL reference defines `CREATE SEARCH INDEX` analyzer support and explicitly lists supported text analyzer values (`LOG ANALYZER`, `PATTERN ANALYZER`, `NO OP ANALYZER`) and format.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- The supported values are 'LOG ANALYZER' , 'NO OP ANALYZER' , and 'PATTERN ANALYZER' . analyzer options JSON-formatted STRING The text analyzer configurations to set when creating a search index.
- CREATE TABLE dataset . my table ( a STRING , b INT64 ); CREATE SEARCH INDEX my index ON dataset . my table ( ALL COLUMNS ); The following example creates a search index on columns a , my struct.string field , and b that uses the NO OP ANALYZER text analyzer.
- The following options are supported: NAME VALUE Details analyzer STRING Example: analyzer='LOG ANALYZER' The text analyzer to use to generate tokens for the search index.
- Supported when analyzer is equal to 'LOG ANALYZER' or 'PATTERN ANALYZER' .

