---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.495Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery SEARCH function phrase support"
feature_slug: "bigquery-search-function-phrase-support"
latest_feature_date: "2024-08-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/vector-search-intro"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "quoted phrase query"
  - "SEARCH phrase matching"
  - "phrase search in SEARCH"
  - "SEARCH phrase support"
  - "phrase-based search"
  - "phrase mode"
  - "SEARCH function"
  - "preview"
---

# BigQuery SEARCH function phrase support

Product: BigQuery
Coverage: LOW

## Step 02 Summary

The BigQuery SEARCH function now supports phrase-based search; The BigQuery SEARCH function now includes phrase support in preview.

## Extended Definition

The provided excerpts do not explicitly document phrase-based querying (quoted phrase syntax) for the BigQuery `SEARCH` function. They only reference vector search features such as `VECTOR SEARCH` and `AI.SEARCH`, including vector index usage, pricing implications, and preview-class availability for related functionality, so this evidence set does not substantiate the claimed "SEARCH phrase support" behavior.

## Evidence Summary

These pages collectively show BigQuery vector search/functionality references and preview mentions, but they do not provide direct textual support for phrase matching in the `SEARCH` function itself.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 46
- Re-rank relevance: N/A

Evidence snippets:
- This example creates a vector index of type IVF on the embedding column of my table : CREATE VECTOR INDEX my index ON my dataset . my table ( embedding ) OPTIONS ( index type = 'IVF' ); The following example creates a vector index on the embedding column of my table , and specifies the distance type to use and the IVF options: CREATE VECTOR INDEX my index ON my dataset . my table ( embedding ) OPTIONS ( index type = 'IVF' , distance type = 'COSINE' , ivf options = '{"num lists":2500}' ); The following example creates a vector index on the embedding column of my table , and specifies the distance type to use and the TREE AH options: CREATE VECTOR INDEX my index ON my dataset . my table ( embedding ) OPTIONS ( index type = 'TREE AH' , distance type = 'EUCLIDEAN' , tree ah options = '{"normalization type": "L2"}' ); CREATE DATA POLICY statement Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Syntax To create a SQL UDF, use the following syntax: CREATE [ OR REPLACE ] [ TEMPORARY TEMP ] FUNCTION [ IF NOT EXISTS ] [[ project name . ] dataset name . ] function name ( [ named parameter [ , ... ]] ) ( [ named parameter [ , ... ]] ) [ RETURNS data type ] AS ( sql expression ) [ OPTIONS ( function option list ) ] named parameter : param name param type To create a JavaScript UDF, use the following syntax: CREATE [ OR REPLACE ] [ TEMPORARY TEMP ] FUNCTION [ IF NOT EXISTS ] [[ project name . ] dataset name . ] function name ( [ named parameter [ , ... ]] ) RETURNS data type [ determinism specifier ] LANGUAGE js [ OPTIONS ( function option list ) ] AS javascript code named parameter : param name param type determinism specifier : { DETERMINISTIC NOT DETERMINISTIC } To create a Python UDF, use the following syntax: Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- The table schema contains 2 columns: customer id: The customer ID as a STRING transaction amount: The transaction amount as NUMERIC The table option list specifies the: Description: A table clustered by customer id Creating a table with autonomous embedding generation Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- These slots are located in the region-us region and managed by a project admin project : ALTER RESERVATION admin project.region-us.my-reservation SET OPTIONS ( slot capacity = 300 , autoscale max slots = 400 ); ALTER VECTOR INDEX REBUILD statement Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .

### "Introduction to embeddings and vector search \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/vector-search-intro](https://docs.cloud.google.com/bigquery/docs/vector-search-intro)
- Source ID: `site-docs-root`
- Final score: 40
- Re-rank relevance: N/A

Evidence snippets:
- Generate and search multimodal embeddings Perform semantic search and retrieval-augmented generation Autonomous embedding generation Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- When a vector index is used, the VECTOR SEARCH and AI.SEARCH functions use the Approximate Nearest Neighbor search technique to improve vector search performance, with the trade-off of reducing recall and so returning more approximate results.
- Pricing The VECTOR SEARCH and AI.SEARCH functions and the CREATE VECTOR INDEX statement use BigQuery compute pricing .
- Limitations Queries that contain the VECTOR SEARCH or AI.SEARCH function aren't accelerated by BigQuery BI Engine .

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- Features Add dataset access policy version attribute ( #2169 ) ( b7656b9 ) Add preview support for incremental results ( #2145 ) ( 22b80bb ) Add WRITE TRUNCATE DATA enum ( #2166 ) ( 4692747 ) Adds condition class and assoc. unit tests ( #2159 ) ( a69d6b7 ) Support BigLakeConfiguration (managed Iceberg tables) ( #2162 ) ( a1c8e9a ) Update the AccessEntry class with a new condition attribute and unit tests ( #2163 ) ( 7301667 ) Bug Fixes query() now warns when job id is set and the default job retry is ignored ( #2167 ) ( ca1798a ) Empty record dtypes ( #2147 ) ( 77d7173 ) Table iterator should not use bqstorage when page size is not None ( #2154 ) ( e89a707 ) Feature Continuous queries let you build long-lived, continuously processing SQL statements that can analyze, process, and perform machine learning (ML) inference on incoming data in BigQuery in real time.
- This pricing update applies to the following third-party connectors when they are generally available (GA) : Facebook Ads MySQL Oracle PostgreSQL Salesforce Salesforce Marketing Cloud ServiceNow Other third-party connectors planned for future releases August 18, 2025 Libraries Java 2.54.1 (2025-08-13) Bug Fixes Adapt graalvm config to arrow update ( #3928 ) ( ecfabc4 ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.51.0 ( #3924 ) ( cb66be5 ) Feature In the BigQuery console, you can now use the Reference panel to do the following: In the query editor, you can use the Reference panel to preview the schema details of tables, snapshots, views, and materialized views, or open these resources in a new tab.
- Feature The CREATE EXTERNAL TABLE and LOAD DATA statements now support the following options in preview : time zone : specify a time zone to use when loading data date format , datetime format , time format , and timestamp format : define how date and time values are formatted in your source files Feature In the navigation menu, you can now go to Settings and select Configuration settings to customize the BigQuery Studio experience for users within the selected project or organization.
- BigQuery-managed open models offer the following benefits: Manage Vertex AI resource by using SQL queries Automatic or immediate open model undeployment to save costs Customize model deployment machine types or reserve open model resources by using Compute Engine reservations This feature is in Preview .

