---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.416Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "SQL-based IAM tag management for BigQuery"
feature_slug: "sql-based-iam-tag-management-for-bigquery"
latest_feature_date: "2025-06-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
keywords:
  - "IAM tag administration"
  - "SQL IAM tagging"
  - "SQL tag management"
  - "SQL-based IAM tags"
  - "manage IAM tags"
  - "IAM tags via SQL"
  - "datasets and tables"
---

# SQL-based IAM tag management for BigQuery

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery now supports managing IAM tags on datasets and tables directly through SQL.

## Extended Definition

The available Google Cloud BigQuery documentation excerpt shows that BigQuery tag administration can be performed on datasets and tables through the `bq update` command using `--add tags`, `--remove tags`, and `--clear all tags` flags. However, this excerpt only demonstrates CLI-based tag operations and does not provide evidence of SQL syntax for managing IAM tags.

## Evidence Summary

The cited reference contributes flag-level support for adding, removing, and clearing tags on BigQuery datasets and tables via `bq update`, but it does not explicitly describe SQL-based IAM tag management.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)

## Supporting Pages

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- Replace PLAN with one of the following: ANNUAL THREE YEAR --refresh window days= DAYS An integer that specifies an updated refresh window (in days) for a transfer configuration. --remove tags= TAG KEYS Only available on datasets and tables.
- Synopsis bq update [ FLAGS ] [ RESOURCE ] Flags and arguments The bq update command uses the following flags and arguments: --add tags= TAGS Only available on datasets and tables.
- Use this flag with the --merge , --plan , --renewal plan , --split , and --slots flags. --clear all tags={true false} Only available on datasets and tables.

