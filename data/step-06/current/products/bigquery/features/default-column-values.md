---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.621Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Default column values"
feature_slug: "default-column-values"
latest_feature_date: "2023-02-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/column-data-masking-intro"
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-columns"
  - "https://docs.cloud.google.com/bigquery/docs/column-data-masking"
keywords:
  - "default"
  - "column"
  - "values"
  - "let"
  - "users"
  - "define"
  - "columns"
  - "bigquery"
---

# Default column values

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Default column values let users define default values on columns in BigQuery tables; BigQuery tables can define default values for columns.

## Extended Definition

Default column values let users define default values on columns in BigQuery tables; BigQuery tables can define default values for columns.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/column-data-masking-intro](https://docs.cloud.google.com/bigquery/docs/column-data-masking-intro)
- [https://docs.cloud.google.com/bigquery/docs/information-schema-columns](https://docs.cloud.google.com/bigquery/docs/information-schema-columns)
- [https://docs.cloud.google.com/bigquery/docs/column-data-masking](https://docs.cloud.google.com/bigquery/docs/column-data-masking)

## Supporting Pages

### COLUMNS view \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-columns](https://docs.cloud.google.com/bigquery/docs/information-schema-columns)
- Source ID: `site-api-reference`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The INFORMATION SCHEMA.COLUMNS view has the following schema: Column name Data type Value table catalog STRING The project ID of the project that contains the dataset. table schema STRING The name of the dataset that contains the table also referred to as the datasetId . table name STRING The name of the table or view also referred to as the tableId . column name STRING The name of the column. ordinal position INT64 The 1-indexed offset of the column within the table; if it's a pseudo column such as PARTITIONTIME or PARTITIONDATE, the value is NULL . is nullable STRING YES or NO depending on whether the column's mode allows NULL values. data type STRING The column's GoogleSQL data type . is generated STRING The value is ALWAYS if the column is an automatically generated embedding column ; otherwise, the value is NEVER . generation expression STRING The value is the generation expression used to define the column if the column is an automatically generated embedding column; otherwise the value is NULL . is stored STRING The value is YES if the column is an automatically generated embedding column; otherwise, the value is NULL . is hidden STRING YES or NO depending on whether the column is a pseudo column such as PARTITIONTIME or PARTITIONDATE. is updatable STRING The value is always NULL . is system defined STRING YES or NO depending on whether the column is a pseudo column such as PARTITIONTIME or PARTITIONDATE. is partitioning column STRING YES or NO depending on whether the column is a partitioning column . clustering ordinal position INT64 The 1-indexed offset of the column within the table's clustering columns; the value is NULL if the table is not a clustered table. collation name STRING The name of the collation specification if it exists; otherwise, NULL .
- Required permissions To query the INFORMATION SCHEMA.COLUMNS view, you need the following Identity and Access Management (IAM) permissions: bigquery.tables.get bigquery.tables.list Each of the following predefined IAM roles includes the preceding permissions: roles/bigquery.admin roles/bigquery.dataViewer roles/bigquery.dataEditor roles/bigquery.metadataViewer For more information about BigQuery permissions, see Access control with IAM .
- For readability, some columns are excluded from the result. +------------------------+-------------+------------------+-------------+-----------+-----------+-------------------+------------------------+-----------------------------+-------------+ table name column name ordinal position is nullable data type is hidden is system defined is partitioning column clustering ordinal position policy tags +------------------------+-------------+------------------+-------------+-----------+-----------+-------------------+------------------------+-----------------------------+-------------+ population by zip 2010 zipcode 1 NO STRING NO NO NO NULL 0 rows population by zip 2010 geo id 2 YES STRING NO NO NO NULL 0 rows population by zip 2010 minimum age 3 YES INT64 NO NO NO NULL 0 rows population by zip 2010 maximum age 4 YES INT64 NO NO NO NULL 0 rows population by zip 2010 gender 5 YES STRING NO NO NO NULL 0 rows population by zip 2010 population 6 YES INT64 NO NO NO NULL 0 rows +------------------------+-------------+------------------+-------------+-----------+-----------+-------------------+------------------------+-----------------------------+-------------+ Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- If a STRING or ARRAY<STRING> is passed in, the collation specification is returned if it exists; otherwise NULL is returned. column default STRING The default value of the column if it exists; otherwise, the value is NULL . rounding mode STRING The mode of rounding that's used for values written to the field if its type is a parameterized NUMERIC or BIGNUMERIC ; otherwise, the value is NULL . data policies.name STRING The list of data policies that are attached to the column to control access and masking.

### Introduction to data masking \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/column-data-masking-intro](https://docs.cloud.google.com/bigquery/docs/column-data-masking-intro)
- Source ID: `site-docs-reference-5`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Given the tags that are associated with the columns, running SELECT FROM Accounts; leads to the following results for the different groups: data-users@example.com : This group has been granted the BigQuery Masked Reader role on both the PII and Confidential policy tags.
- The following table shows the default masking value for each data type: Data type Default masking value STRING "" BYTES b'' INTEGER 0 FLOAT 0.0 NUMERIC 0 BOOLEAN FALSE TIMESTAMP 1970-01-01 00:00:00 UTC DATE 1970-01-01 TIME 00:00:00 DATETIME 1970-01-01T00:00:00 GEOGRAPHY POINT(0 0) BIGNUMERIC 0 ARRAY [] STRUCT NOT APPLICABLE Policy tags can't be applied to columns that use the STRUCT data type, but they can be associated with the leaf fields of such columns.
- Roles for attaching policy tags to columns You need the datacatalog.taxonomies.get and bigquery.tables.setCategory permissions to attach policy tags to columns. datacatalog.taxonomies.get is included in the Data Catalog Policy Tags Admin and Viewer roles. bigquery.tables.setCategory is included in the BigQuery Admin ( roles/bigquery.admin ) and BigQuery Data Owner ( roles/bigquery.dataOwner ) roles.
- For a given column, it is possible to have some users with the BigQuery Masked Reader role that allows them to read masked data, some users with the Data Catalog Fine-Grained Reader role that allows them to read unmasked data, some users with both, and some users with neither.

### Mask column data \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/column-data-masking](https://docs.cloud.google.com/bigquery/docs/column-data-masking)
- Source ID: `site-docs-reference-5`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to assign a data policy directly on a column: bigquery.tables.update bigquery.tables.setColumnDataPolicy bigquery.dataPolicies.attach You might also be able to get these permissions with custom roles or other predefined roles .
- All columns that have that policy tag applied return masked data in response to queries from users who have the Masked Reader role.
- By default, data masking does not support partitioned or clustered columns.
- Data policies define rules for data masking, row-level security, or column-level security. @param {string} projectId The Google Cloud project ID. (for example, 'example-project-id') @param {string} location The Google Cloud location of the data policies. (For example, 'us') / async function listDataPolicies ( projectId , location ) { const parent = projects/ ${ projectId } /locations/ ${ location } ; const request = { parent , }; try { console . log ( Listing data policies for project: ${ projectId } in location: ${ location } , ); const [ dataPolicies ] = await client . listDataPolicies ( request ); if ( dataPolicies . length === 0 ) { console . log ( No data policies found in location ${ location } for project ${ projectId } . , ); return ; } console . log ( 'Data Policies:' ); for ( const dataPolicy of dataPolicies ) { console . log ( Data Policy Name: ${ dataPolicy . name } ); console . log ( ID: ${ dataPolicy . dataPolicyId } ); console . log ( Type: ${ dataPolicy . dataPolicyType } ); if ( dataPolicy . policyTag ) { console . log ( Policy Tag: ${ dataPolicy . policyTag } ); } if ( dataPolicy . grantees && dataPolicy . grantees . length > 0 ) { console . log ( Grantees: ${ dataPolicy . grantees . join ( ', ' ) } ); } if ( dataPolicy . dataMaskingPolicy ) { if ( dataPolicy . dataMaskingPolicy . predefinedExpression ) { console . log ( Data Masking Predefined Expression: ${ dataPolicy . dataMaskingPolicy . predefinedExpression } , ); } else if ( dataPolicy . dataMaskingPolicy . routine ) { console . log ( Data Masking Routine: ${ dataPolicy . dataMaskingPolicy . routine } , ); } } } console . log ( Successfully listed ${ dataPolicies . length } data policies. ); } catch ( err ) { if ( err . code === status .

