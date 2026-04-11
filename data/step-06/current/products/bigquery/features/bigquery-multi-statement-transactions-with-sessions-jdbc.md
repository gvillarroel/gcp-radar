---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.717Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery multi-statement transactions with sessions (JDBC)"
feature_slug: "bigquery-multi-statement-transactions-with-sessions-jdbc"
latest_feature_date: "2022-09-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/procedural-language"
  - "https://docs.cloud.google.com/bigquery/docs/transactions"
keywords:
  - "BEGIN and COMMIT"
  - "multi-stmt transactions"
  - "multi-query transaction"
  - "JDBC session transactions"
  - "session-based transactions"
  - "transactions with sessions"
  - "multi-statement transactions"
  - "BigQuery sessions"
---

# BigQuery multi-statement transactions with sessions (JDBC)

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery JDBC now supports multi-statement transactions within one query or across multiple queries when using sessions; BigQuery ODBC now supports multi-statement transactions within one query or across multiple queries when using sessions.

## Extended Definition

BigQuery defines multi-statement transactions as transactions started with `BEGIN TRANSACTION` and completed with `COMMIT TRANSACTION` or `ROLLBACK TRANSACTION`, with automatic rollback if execution ends before either terminator. It also documents that multi-statement transactions can be executed across multiple queries when using sessions. Evidence available confirms the SQL transaction behavior and session-based multi-query scope, but does not explicitly confirm JDBC or ODBC driver-specific support in these cited excerpts.

## Evidence Summary

The cited BigQuery documentation pages provide official details on transaction control statements (`BEGIN`, `COMMIT`, `ROLLBACK`) and on multi-statement transaction behavior, including session-based execution across queries.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/procedural-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/procedural-language)
- [https://docs.cloud.google.com/bigquery/docs/transactions](https://docs.cloud.google.com/bigquery/docs/transactions)

## Supporting Pages

### Procedural language \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/procedural-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/procedural-language)
- Source ID: `site-docs-reference`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- For more information about transactions in BigQuery, see Multi-statement transactions .
- For more information about transactions in BigQuery, see Multi-statement transactions .
- For more information about transactions in BigQuery, see Multi-statement transactions .

