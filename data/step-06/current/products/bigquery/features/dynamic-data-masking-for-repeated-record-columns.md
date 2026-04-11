---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.668Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Dynamic data masking for REPEATED RECORD columns"
feature_slug: "dynamic-data-masking-for-repeated-record-columns"
latest_feature_date: "2023-04-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax"
keywords:
  - "DDM repeated RECORD"
  - "repeated RECORD columns"
  - "repeated field masking"
  - "dynamic data masking"
  - "REPEATED RECORD"
  - "column-level masking"
  - "masking policy"
---

# Dynamic data masking for REPEATED RECORD columns

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery dynamic data masking now supports masking on RECORD columns that use REPEATED mode.

## Extended Definition

BigQuery supports dynamic data masking via column options in Data Definition Language (DDL) using `data policy type = 'DATA MASKING POLICY'` together with a `masking expression` (predefined rule or custom masking routine). The DML reference confirms that REPEATED RECORD fields are handled as `ARRAY` of `STRUCT` values and can be updated by appending elements. However, the provided excerpts do not explicitly state that dynamic data masking policies are supported specifically on REPEATED RECORD/REPEATED mode columns, so evidence for that exact feature behavior is incomplete here.

## Evidence Summary

The DDL page provides masking policy syntax (`DATA MASKING POLICY` and masking expression), while the DML page demonstrates how REPEATED RECORD/`ARRAY<STRUCT>` columns are updated, but neither excerpt explicitly links masking policy application to repeated record columns.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- The following options are supported: NAME VALUE Details data policy type STRING Set it to DATA MASKING POLICY . masking expression STRING Specifies the predefined masking rule or a custom masking routine .
- DATA MASKING POLICY type should come with masking expression set. masking expression STRING Specifies the predefined masking rule or a custom masking routine .
- The following options are supported: NAME VALUE Details data policy type STRING The supported values are DATA MASKING POLICY and RAW DATA ACCESS POLICY .

### "Data manipulation language (DML) statements in GoogleSQL \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/dml-syntax)
- Source ID: `site-docs-reference`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- DetailedInventory SET specifications = STRUCT<color STRING , warranty STRING , dimensions STRUCT<depth FLOAT64 , height FLOAT64 , width FLOAT64 >> ( 'white' , '1 year' , NULL ) WHERE product like '%washer%' +----------------------+----------+--------------------+----------+---------------------------------------------------------+ product quantity supply constrained comments specifications +----------------------+----------+--------------------+----------+---------------------------------------------------------+ countertop microwave 20 NULL [] NULL dishwasher 30 false [] {"color":"white","warranty":"1 year","dimensions":null} dryer 30 false [] NULL front load washer 20 false [] {"color":"white","warranty":"1 year","dimensions":null} microwave 20 false [] NULL oven 5 false [] NULL refrigerator 10 false [] NULL top load washer 10 false [] {"color":"white","warranty":"1 year","dimensions":null} +----------------------+----------+--------------------+----------+---------------------------------------------------------+ UPDATE repeated records The following example appends an entry to a repeated record in the comments column for products that contain the string washer : UPDATE dataset .
- DetailedInventory SET comments = ARRAY CONCAT ( comments , ARRAY<STRUCT<created DATE , comment STRING >> [ ( CAST ( '2016-01-01' AS DATE ), 'comment1' ) ] ) WHERE product like '%washer%' The following example appends a second entry to the repeated record in the comments column for all rows: UPDATE dataset .

