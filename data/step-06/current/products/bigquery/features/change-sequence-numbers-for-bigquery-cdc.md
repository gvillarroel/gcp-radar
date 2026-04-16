---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.448Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Change sequence numbers for BigQuery CDC"
feature_slug: "change-sequence-numbers-for-bigquery-cdc"
latest_feature_date: "2024-05-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/change-data-capture"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
keywords:
  - "change"
  - "sequence"
  - "numbers"
  - "bigquery"
  - "cdc"
  - "capture"
  - "supports"
  - "defining"
---

# Change sequence numbers for BigQuery CDC

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery change data capture supports defining a _CHANGE_SEQUENCE_NUMBER to manage streaming UPSERT ordering.

## Extended Definition

BigQuery change data capture supports defining a _CHANGE_SEQUENCE_NUMBER to manage streaming UPSERT ordering.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/change-data-capture](https://docs.cloud.google.com/bigquery/docs/change-data-capture)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)

## Supporting Pages

### "Stream table updates with change data capture ingestion \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/change-data-capture](https://docs.cloud.google.com/bigquery/docs/change-data-capture)
- Source ID: `site-docs-reference-5`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Consider the following CHANGE SEQUENCE NUMBER comparison examples and their precedence results: Example 1: Record #1: CHANGE SEQUENCE NUMBER = '77' Record #2: CHANGE SEQUENCE NUMBER = '7B' Result: Record #2 is considered the latest record because '7B' > '77' (i.e. '123' > '119') Example 2: Record #1: CHANGE SEQUENCE NUMBER = 'FFF/B' Record #2: CHANGE SEQUENCE NUMBER = 'FFF/ABC' Result: Record #2 is considered the latest record because 'FFF/ABC' > 'FFF/B' (i.e. '4095/2748' > '4095/11') Example 3: Record #1: CHANGE SEQUENCE NUMBER = 'BA/FFFFFFFF' Record #2: CHANGE SEQUENCE NUMBER = 'ABC' Result: Record #2 is considered the latest record because 'ABC' > 'BA/FFFFFFFF' (i.e. '2748' > '186/4294967295') Example 4: Record #1: CHANGE SEQUENCE NUMBER = 'FFF/ABC' Record #2: CHANGE SEQUENCE NUMBER = 'ABC' Result: Record #1 is considered the latest record because 'FFF/ABC' > 'ABC' (i.e. '4095/2748' > '2748') If two CHANGE SEQUENCE NUMBER values are identical, then the record with the latest BigQuery system ingestion time has precedence over previously ingested records.
- To configure user-supplied ordering keys, the pseudocolumn CHANGE SEQUENCE NUMBER is used to indicate the order in which BigQuery should apply records, based on the larger CHANGE SEQUENCE NUMBER between two matching records with the same primary key.
- BigQuery CDC ingestion jobs that apply pending row modifications within the max staleness interval are considered background jobs and use the BACKGROUND or BACKGROUND CHANGE DATA CAPTURE assignment type , rather than the QUERY assignment type .
- Stream table updates with change data capture ingestion BigQuery change data capture (CDC) ingestion updates your BigQuery tables by processing and applying streamed changes to existing data.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- A column name: Must contain only letters (a-z, A-Z), numbers (0-9), or underscores ( ) Must start with a letter or underscore Can be up to 300 characters column schema : Similar to a data type , but supports an optional NOT NULL constraint for types other than ARRAY . column schema also supports options on top-level columns and STRUCT fields. column schema can be used only in the column definition list of CREATE TABLE statements.
- Examples The following example removes the NOT NULL constraint from a column called mycolumn : ALTER TABLE mydataset . mytable ALTER COLUMN mycolumn DROP NOT NULL ALTER COLUMN SET DATA TYPE statement Changes the data type of a column in a table in BigQuery to a less restrictive data type.
- For example, with change data capture , when this option is set, the table copy operation is denied if data is more stale than the max staleness value. max staleness is disabled by default. enable fine grained mutations BOOL In preview .
- For example, with change data capture , when this option is set, the table copy operation is denied if data is more stale than the max staleness value. max staleness is disabled by default. enable fine grained mutations BOOL In preview .

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Partner references SqlDBM + BigQuery Google BigQuery - Direct Connect and Reverse Engineer Partner Advantage page Direct link Stelo Data Solution Stelo Data Replication Category ETL & Data Integration Description Stelo is an enterprise-class Change Data Capture (CDC) tool that delivers data dynamically from anywhere to anywhere for BI analysis, reporting, and managing business operations and supply chains.
- Partner references BigQuery Source Connector Striim Solution Striim Platform Category ETL & Data Integration Description Striim is a proprietary software that offers a non-intrusive, real-time data ingestion (including change data capture) and replication from multiple data sources to Google Cloud - with support for some light in-flight transformations and enrichments.
- Partner references Google BigQuery Integration View data in BigQuery Product & Behavioral Analytics on Google BigQuery Optimizely's partnership with Google Cloud Partner Advantage page Direct link Numberstation Solution Numbersstation.ai Category BI, ML, & Advanced Analytics Description Numbers Station leverages a multi-agent architecture built with specialized agents to reason through complex questions, building end-to-end analytics solutions and democratizing data by delivering insights where and when you need them.
- Partner references Move your data to BigQuery with millisecond latency BigQuery materialization connector BigQuery Batch Query Connector Partner Advantage page Direct link Fivetran Fivetran Data Pipelines Solution Fivetran Data Pipelines Category ETL & Data Integration Description Fivetran is a leader in automated data integration and delivers ready-to-use connectors that automatically adapt as schemas and APIs change, ensuring consistent, reliable access to data.

