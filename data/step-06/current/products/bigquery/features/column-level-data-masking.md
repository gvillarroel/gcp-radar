---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.645Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Column-level data masking"
feature_slug: "column-level-data-masking"
latest_feature_date: "2022-10-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/column-data-masking"
  - "https://docs.cloud.google.com/bigquery/docs/column-data-masking-intro"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "column"
  - "level"
  - "masking"
  - "selectively"
  - "obscures"
  - "values"
  - "specific"
  - "groups"
---

# Column-level data masking

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Column-level data masking selectively obscures column values for specific groups of users; Column-level data masking selectively obscures column data for different groups of users.

## Extended Definition

Column-level data masking selectively obscures column values for specific groups of users; Column-level data masking selectively obscures column data for different groups of users.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/column-data-masking](https://docs.cloud.google.com/bigquery/docs/column-data-masking)
- [https://docs.cloud.google.com/bigquery/docs/column-data-masking-intro](https://docs.cloud.google.com/bigquery/docs/column-data-masking-intro)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### Mask column data \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/column-data-masking](https://docs.cloud.google.com/bigquery/docs/column-data-masking)
- Source ID: `site-docs-reference-5`
- Final score: 214
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Data policies define rules for data masking, row-level security, or column-level security. @param {string} projectId The Google Cloud project ID. (for example, 'example-project-id') @param {string} location The Google Cloud location of the data policies. (For example, 'us') / async function listDataPolicies ( projectId , location ) { const parent = projects/ ${ projectId } /locations/ ${ location } ; const request = { parent , }; try { console . log ( Listing data policies for project: ${ projectId } in location: ${ location } , ); const [ dataPolicies ] = await client . listDataPolicies ( request ); if ( dataPolicies . length === 0 ) { console . log ( No data policies found in location ${ location } for project ${ projectId } . , ); return ; } console . log ( 'Data Policies:' ); for ( const dataPolicy of dataPolicies ) { console . log ( Data Policy Name: ${ dataPolicy . name } ); console . log ( ID: ${ dataPolicy . dataPolicyId } ); console . log ( Type: ${ dataPolicy . dataPolicyType } ); if ( dataPolicy . policyTag ) { console . log ( Policy Tag: ${ dataPolicy . policyTag } ); } if ( dataPolicy . grantees && dataPolicy . grantees . length > 0 ) { console . log ( Grantees: ${ dataPolicy . grantees . join ( ', ' ) } ); } if ( dataPolicy . dataMaskingPolicy ) { if ( dataPolicy . dataMaskingPolicy . predefinedExpression ) { console . log ( Data Masking Predefined Expression: ${ dataPolicy . dataMaskingPolicy . predefinedExpression } , ); } else if ( dataPolicy . dataMaskingPolicy . routine ) { console . log ( Data Masking Routine: ${ dataPolicy . dataMaskingPolicy . routine } , ); } } } console . log ( Successfully listed ${ dataPolicies . length } data policies. ); } catch ( err ) { if ( err . code === status .
- For more information, see Set up authentication for client libraries . const datapolicy = require ( ' @google-cloud/bigquery-datapolicies ' ); const { DataPolicyServiceClient } = datapolicy . v2 ; const protos = datapolicy . protos . google . cloud . bigquery . datapolicies . v2 ; const { status } = require ( '@grpc/grpc-js' ); const dataPolicyServiceClient = new DataPolicyServiceClient (); / Creates a data policy to apply a data masking rule to a specific BigQuery table column.
- DataPolicyServiceClient () def create data policy ( project id : str , location : str , data policy id : str ) - > None : """Creates a data policy to apply a data masking rule to a specific BigQuery table column.
- Mask column data This document shows you how to implement data masking in order to selectively obscure sensitive data.

### Introduction to data masking \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/column-data-masking-intro](https://docs.cloud.google.com/bigquery/docs/column-data-masking-intro)
- Source ID: `site-docs-reference-5`
- Final score: 200
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When you use data masking in combination with column-level access control, you can configure a range of access to column data, from full access to no access, based on the needs of different user groups.
- You can use data masking to selectively obscure column data for user groups, while still allowing them access to the column.
- Data masking functionality is built on top of column-level access control , so you should familiarize yourself with that feature before you proceed.
- When you call the SEARCH function on columns that have data masking applied, you must use search criteria compatible with your level of access.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- WITH COLUMN OPTIONS : Can only be used with ALL COLUMNS to set options on specific indexed columns. column name : The name of a top-level column in the table which is one of the following supported data types or contains a field with one of the supported data types: Supported data types Notes STRING Primitive data type.
- The table schema contains 2 columns: transaction id: An integer transaction date: A date The table option list specifies the: Partition expiration: Three days Description: A table partitioned by transaction date Creating a partitioned table from the result of a query The following example creates a partitioned table named days with rain in mydataset using a DATE column: CREATE TABLE mydataset . days with rain PARTITION BY date OPTIONS ( partition expiration days = 365 , description = "weather stations with precipitation, partitioned by day" ) AS SELECT DATE ( CAST ( year AS INT64 ), CAST ( mo AS INT64 ), CAST ( da AS INT64 )) AS date , ( SELECT ANY VALUE ( name ) FROM bigquery-public-data.noaa gsod.stations AS stations WHERE stations . usaf = stn ) AS station name , -- Stations can have multiple names prcp FROM bigquery-public-data.noaa gsod.gsod2017 AS weather WHERE prcp != 99.9 -- Filter unknown values AND prcp > 0 -- Filter stations/days with no precipitation If you haven't configured a default project, prepend a project ID to the dataset name in the example SQL, and enclose the name in backticks if project id contains special characters: project id.dataset.table .
- Syntax: '{ "differential privacy policy": { "privacy unit column": value, "max epsilon per query": value, "epsilon budget": value, "delta per query": value, "delta budget": value, "max groups contributed": value } }' Parameters: differential privacy policy : The differential privacy policy for the view. privacy unit column : The column that represents the privacy unit column for differentially private queries on the view. value is a JSON string. max epsilon per query : The maximum amount of epsilon that can be specified for a differentially private query on the view. value is a JSON number from 0.001 to 1e+15. epsilon budget : The amount of epsilon that can be used in totality for all differentially private queries on the view. value is JSON number from 0.001 to 1e+15. delta per query : The maximum amount of delta that can be specified for a differentially private query on the view. value is a JSON number from 1e-15 to 1. delta budget : The amount of delta that can be used in totality for all differentially private queries on the view.
- This example creates a vector index of type IVF on the embedding column of my table : CREATE VECTOR INDEX my index ON my dataset . my table ( embedding ) OPTIONS ( index type = 'IVF' ); The following example creates a vector index on the embedding column of my table , and specifies the distance type to use and the IVF options: CREATE VECTOR INDEX my index ON my dataset . my table ( embedding ) OPTIONS ( index type = 'IVF' , distance type = 'COSINE' , ivf options = '{"num lists":2500}' ); The following example creates a vector index on the embedding column of my table , and specifies the distance type to use and the TREE AH options: CREATE VECTOR INDEX my index ON my dataset . my table ( embedding ) OPTIONS ( index type = 'TREE AH' , distance type = 'EUCLIDEAN' , tree ah options = '{"normalization type": "L2"}' ); CREATE DATA POLICY statement Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .

