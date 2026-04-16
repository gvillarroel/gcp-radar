---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.647Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "SEARCH function"
feature_slug: "search-function"
latest_feature_date: "2022-10-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/ai-introduction"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
keywords:
  - "search"
  - "lets"
  - "bigquery"
  - "users"
  - "find"
  - "specific"
  - "elements"
  - "unstructured"
---

# SEARCH function

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The SEARCH function lets BigQuery users find specific data elements in unstructured text and semi-structured data with GoogleSQL.

## Extended Definition

The SEARCH function lets BigQuery users find specific data elements in unstructured text and semi-structured data with GoogleSQL.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/ai-introduction](https://docs.cloud.google.com/bigquery/docs/ai-introduction)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- Note: Constraints cannot be specified on ARRAY or STRUCT elements. column := column name column schema column schema := { simple type STRUCT<field list> ARRAY<array element schema> } [ PRIMARY KEY NOT ENFORCED REFERENCES table name ( column name ) NOT ENFORCED ] [ DEFAULT default expression GENERATED ALWAYS AS ( generation expression ) STORED OPTIONS ( generation option list ) ] [ NOT NULL ] [ OPTIONS ( column option list ) ] simple type := { data type STRING COLLATE collate specification } field list := field name column schema [ , ... ] array element schema := { simple type STRUCT<field list> } [ NOT NULL ] column name is the name of the column.
- An object in JavaScript is BigQuery-serializable if all fields are a JavaScript primitive data type (for example, String , Number , null , undefined ), another BigQuery-serializable object, or a JavaScript Array , where all elements are either primitives or BigQuery-serializable objects.
- Cannot appear with main file uri in procedure option list . argument type : Any valid BigQuery type . procedure argument mode : Specifies whether an argument is an input, an output, or both. procedure option list The procedure option list lets you specify procedure options.
- BigQuery returns an error if any column name is not a STRING or does not contain a STRING field, or if you call CREATE SEARCH INDEX on ALL COLUMNS of a table which contains no STRING fields.

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Import BigQuery Data into Amplitude Export data to BigQuery AskYourDatabase Solution AskYourDatabase Category BI, ML, & Advanced Analytics Description AskYourDatabase is an AI-powered tool that lets users ask questions in plain English and get instant answers from their database.
- It lets users create, explore, and share interactive dashboards directly from cloud data warehouses like Google BigQuery, leveraging live data without extracts and offering embedded analytics capabilities.
- It lets users ingest, join, and analyze streaming data with the same ease as a traditional database, offering seamless integration to sink processed data into BigQuery for long-term storage and analysis.
- The BigQuery connector for Datahub lets it ingest metadata from your BigQuery environment, providing a centralized and searchable catalog for all your tables, views, and data.

### Introduction to AI in BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/ai-introduction](https://docs.cloud.google.com/bigquery/docs/ai-introduction)
- Source ID: `site-docs-reference-2`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Search BigQuery offers a variety of search functions and features to help you efficiently find specific data or discover similarities between data including multimodal data.
- You can improve search performance by creating a search index , which lets BigQuery optimize queries that use the SEARCH function, as well as other functions and operators.
- Because BigQuery ML lets SQL practitioners use existing SQL tools and skills to build and evaluate models, it democratizes ML and speeds up model development by bringing ML to the data instead of requiring data movement.
- AI functions BigQuery offers various SQL functions that you can use for AI tasks such as text generation, text or unstructured data analysis, and translation.

