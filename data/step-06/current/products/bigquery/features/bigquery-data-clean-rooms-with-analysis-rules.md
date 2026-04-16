---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.475Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery data clean rooms with analysis rules"
feature_slug: "bigquery-data-clean-rooms-with-analysis-rules"
latest_feature_date: "2024-04-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/analysis-rules"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
keywords:
  - "bigquery"
  - "clean"
  - "rooms"
  - "analysis"
  - "rules"
  - "provide"
  - "privacy"
  - "preserving"
---

# BigQuery data clean rooms with analysis rules

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery data clean rooms provide a privacy-preserving environment for multiple parties to share and augment data using analysis rules.

## Extended Definition

BigQuery data clean rooms provide a privacy-preserving environment for multiple parties to share and augment data using analysis rules.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/analysis-rules](https://docs.cloud.google.com/bigquery/docs/analysis-rules)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)

## Supporting Pages

### "Restrict data access using analysis rules \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/analysis-rules](https://docs.cloud.google.com/bigquery/docs/analysis-rules)
- Source ID: `site-docs-reference-2`
- Final score: 220
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Preview Parameter-driven privacy budgeting for differential privacy is in preview while differential privacy enforcement in BigQuery data clean rooms is now generally available (GA).
- Restrict data access using analysis rules This document provides general information about analysis rules in GoogleSQL for BigQuery.
- You can define a differential privacy analysis rule for a view in a data clean room or with the CREATE VIEW statement: CREATE OR REPLACE VIEW VIEW NAME OPTIONS ( privacy policy = ' '' { "differential privacy policy": { "privacy unit column": " PRIVACY UNIT COLUMN ", "max epsilon per query": MAX EPSILON PER QUERY , "epsilon budget": EPSILON BUDGET , "delta per query": DELTA PER QUERY , "delta budget": DELTA BUDGET , "max groups contributed": MAX GROUPS CONTRIBUTED }, "join restriction policy": { "join condition": " JOIN CONDITION ", "join allowed columns": JOIN ALLOWED COLUMNS } } '' ' ) AS QUERY ; Definitions: differential privacy policy : The differential privacy policy for the differential privacy analysis rule.
- You can change the differential privacy analysis rule for a view in a data clean room or with the ALTER VIEW statement: ALTER VIEW VIEW NAME SET OPTIONS ( privacy policy = ' '' { "differential privacy policy": { "privacy unit column": " PRIVACY UNIT COLUMN ", "max epsilon per query": MAX EPSILON PER QUERY , "epsilon budget": EPSILON BUDGET , "delta per query": DELTA PER QUERY , "delta budget": DELTA BUDGET , "max groups contributed": MAX GROUPS CONTRIBUTED } } '' ' ) For more information about the values you can set for the privacy policies in the preceding syntax, see Define a differential privacy analysis rule for a view .

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Talend Cloud with BigQuery BigQuery connector guide Partner Advantage page Direct link Trifacta Solution Dataprep by Trifacta Category ETL & Data Integration Description Dataprep by Trifacta is an intelligent data service for visually exploring, cleaning, and preparing structured and unstructured data for analysis, reporting, and machine learning.
- Partner references BigQuery Service Connector Connecting to BigQuery BigQuery Writeback Connector Partner Advantage page Direct link Dreamdata Solution Dreamdata digital analytics Category BI, ML, & Advanced Analytics Description Dreamdata gathers, joins and cleans all revenue-related data to present transparent, actionable analysis of what drives B2B revenue.
- DBT specializes in the T of ELT; while it doesn't extract or load data, it's extremely good at transforming data that's already loaded into your warehouse: organizing, cleansing, denormalizing, filtering, renaming, and pre-aggregating raw data in BigQuery so that it's ready for analysis.
- Partner references Data Intelligence Platform Cloud migration with Collibra & BigQuery Enterprise-wide data privacy: Collibra + BigQuery Enterprise-scale data quality: Collibra + BigQuery Data quality without the complexity: BigQuery & Collibra Partner Advantage page Direct link Datahub Solution DataHub Cloud Category Data Governance, Security, & MDM Description Datahub is an open source metadata platform that helps organizations discover, understand, and govern their data assets.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- The constant expression cannot contain: A reference to a table Subqueries or SQL statements such as SELECT , CREATE , or UPDATE User-defined functions, aggregate functions, or analytic functions The following scalar functions: ARRAY TO STRING REPLACE REGEXP REPLACE RAND FORMAT LPAD RPAD REPEAT SESSION USER GENERATE ARRAY GENERATE DATE ARRAY If VALUE evaluates to NULL , the corresponding option NAME in the CREATE VIEW statement is ignored. privacy policy The following policies are available in the privacy policy view option to create analysis rules .
- Example: export function finalize ( finalState , initialSum ) Serialization functions for a JavaScript UDAF If you want to work with non-serializable aggregation states, the JavaScript UDAF must provide the serialize and deserialize functions: serialize function: Converts an aggregation state into a BigQuery-serializable object.
- This can be used with all analysis rules except for the list overlap analysis rule . join allowed columns : A list of columns that can be part of a join operation. value is a JSON array.
- Note: To provide feedback or request support for this feature, send an email to bigquery-security@google.com .

