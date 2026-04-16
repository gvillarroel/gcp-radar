---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.476Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Data clean room analysis rule differential privacy with privacy budgeting"
feature_slug: "data-clean-room-analysis-rule-differential-privacy-with-privacy-budgeting"
latest_feature_date: "2024-04-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/analysis-rules"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
keywords:
  - "clean"
  - "room"
  - "analysis"
  - "rule"
  - "differential"
  - "privacy"
  - "budgeting"
  - "bigquery"
---

# Data clean room analysis rule differential privacy with privacy budgeting

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery data clean rooms can enforce differential privacy with privacy budgeting through analysis rules.

## Extended Definition

BigQuery data clean rooms can enforce differential privacy with privacy budgeting through analysis rules.

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
- Final score: 242
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can define a differential privacy analysis rule for a view in a data clean room or with the CREATE VIEW statement: CREATE OR REPLACE VIEW VIEW NAME OPTIONS ( privacy policy = ' '' { "differential privacy policy": { "privacy unit column": " PRIVACY UNIT COLUMN ", "max epsilon per query": MAX EPSILON PER QUERY , "epsilon budget": EPSILON BUDGET , "delta per query": DELTA PER QUERY , "delta budget": DELTA BUDGET , "max groups contributed": MAX GROUPS CONTRIBUTED }, "join restriction policy": { "join condition": " JOIN CONDITION ", "join allowed columns": JOIN ALLOWED COLUMNS } } '' ' ) AS QUERY ; Definitions: differential privacy policy : The differential privacy policy for the differential privacy analysis rule.
- You can change the differential privacy analysis rule for a view in a data clean room or with the ALTER VIEW statement: ALTER VIEW VIEW NAME SET OPTIONS ( privacy policy = ' '' { "differential privacy policy": { "privacy unit column": " PRIVACY UNIT COLUMN ", "max epsilon per query": MAX EPSILON PER QUERY , "epsilon budget": EPSILON BUDGET , "delta per query": DELTA PER QUERY , "delta budget": DELTA BUDGET , "max groups contributed": MAX GROUPS CONTRIBUTED } } '' ' ) For more information about the values you can set for the privacy policies in the preceding syntax, see Define a differential privacy analysis rule for a view .
- Preview Parameter-driven privacy budgeting for differential privacy is in preview while differential privacy enforcement in BigQuery data clean rooms is now generally available (GA).
- Define an aggregation threshold analysis rule for a view You can define an aggregation threshold analysis rule for a view in a data clean room or with the CREATE VIEW statement: CREATE OR REPLACE VIEW VIEW NAME OPTIONS ( privacy policy = ' '' { "aggregation threshold policy": { "threshold" : THRESHOLD , "privacy unit column": " PRIVACY UNIT COLUMN " }, "join restriction policy": { "join condition": " JOIN CONDITION ", "join allowed columns": JOIN ALLOWED COLUMNS } } '' ' ) AS QUERY ; Definitions: aggregation threshold policy : The aggregation threshold policy for the aggregation threshold analysis rule.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- The constant expression cannot contain: A reference to a table Subqueries or SQL statements such as SELECT , CREATE , or UPDATE User-defined functions, aggregate functions, or analytic functions The following scalar functions: ARRAY TO STRING REPLACE REGEXP REPLACE RAND FORMAT LPAD RPAD REPEAT SESSION USER GENERATE ARRAY GENERATE DATE ARRAY If VALUE evaluates to NULL , the corresponding option NAME in the CREATE VIEW statement is ignored. privacy policy The following policies are available in the privacy policy view option to create analysis rules .
- Syntax: '{ "differential privacy policy": { "privacy unit column": value, "max epsilon per query": value, "epsilon budget": value, "delta per query": value, "delta budget": value, "max groups contributed": value } }' Parameters: differential privacy policy : The differential privacy policy for the view. privacy unit column : The column that represents the privacy unit column for differentially private queries on the view. value is a JSON string. max epsilon per query : The maximum amount of epsilon that can be specified for a differentially private query on the view. value is a JSON number from 0.001 to 1e+15. epsilon budget : The amount of epsilon that can be used in totality for all differentially private queries on the view. value is JSON number from 0.001 to 1e+15. delta per query : The maximum amount of delta that can be specified for a differentially private query on the view. value is a JSON number from 1e-15 to 1. delta budget : The amount of delta that can be used in totality for all differentially private queries on the view.
- Example: privacy policy='{"differential privacy policy": { "privacy unit column": "contributor id", "max epsilon per query": 0.01, "epsilon budget": 25.6, "delta per query": 0.005, "delta budget": 9.6, "max groups contributed": 2}}' join restriction policy A join restriction policy for the view.
- This can be used with all analysis rules except for the list overlap analysis rule . join allowed columns : A list of columns that can be part of a join operation. value is a JSON array.

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Talend Cloud with BigQuery BigQuery connector guide Partner Advantage page Direct link Trifacta Solution Dataprep by Trifacta Category ETL & Data Integration Description Dataprep by Trifacta is an intelligent data service for visually exploring, cleaning, and preparing structured and unstructured data for analysis, reporting, and machine learning.
- Partner references BigQuery Service Connector Connecting to BigQuery BigQuery Writeback Connector Partner Advantage page Direct link Dreamdata Solution Dreamdata digital analytics Category BI, ML, & Advanced Analytics Description Dreamdata gathers, joins and cleans all revenue-related data to present transparent, actionable analysis of what drives B2B revenue.
- DBT specializes in the T of ELT; while it doesn't extract or load data, it's extremely good at transforming data that's already loaded into your warehouse: organizing, cleansing, denormalizing, filtering, renaming, and pre-aggregating raw data in BigQuery so that it's ready for analysis.
- Partner references Data Intelligence Platform Cloud migration with Collibra & BigQuery Enterprise-wide data privacy: Collibra + BigQuery Enterprise-scale data quality: Collibra + BigQuery Data quality without the complexity: BigQuery & Collibra Partner Advantage page Direct link Datahub Solution DataHub Cloud Category Data Governance, Security, & MDM Description Datahub is an open source metadata platform that helps organizations discover, understand, and govern their data assets.

