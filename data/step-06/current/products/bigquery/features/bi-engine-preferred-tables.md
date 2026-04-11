---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.733Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BI Engine preferred tables"
feature_slug: "bi-engine-preferred-tables"
latest_feature_date: "2022-06-23"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "table-level BI Engine acceleration"
  - "limit BI Engine acceleration"
  - "BI Engine table scope"
  - "BI Engine preferred tables"
  - "preferred tables"
---

# BI Engine preferred tables

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BI Engine preferred tables allow acceleration to be limited to a specified set of tables in BigQuery.

## Extended Definition

In BigQuery, BI Engine preferred tables are a reservation option on the `ALTER BI CAPACITY` DDL statement, defined as `preferred tables <ARRAY<STRING>>` and used to specify the set of tables to which BI Engine acceleration should be applied. This option enables table-level control by allocating or updating a reservation with an explicit list of table names, and the list can also be overwritten or cleared.

## Evidence Summary

The BigQuery DDL reference explicitly documents the `preferred tables` reservation option, its data type, its meaning (tables for which acceleration applies), and example `ALTER BI CAPACITY` statements to add, replace, or clear that table list.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- Required permissions This statement requires the following IAM permissions : Permission Resource bigquery.bireservations.update BI Engine reservation Examples Allocating BI Engine capacity without preferred tables ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 250 ) Deallocating BI capacity ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 0 ) Removing a set of preferred tables from reservation ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( preferred tables = NULL ) Allocating BI Capacity with preferred tables list ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 250 , preferred tables = [ "data project1.dataset1.table1" , "data project2.dataset2.table2" ] ) Overwriting list of preferred tables without changing the size ALTER BI CAPACITY region-us.default SET OPTIONS ( preferred tables = [ "dataset1.table1" , "data project2.dataset2.table2" ] ) ALTER CAPACITY SET OPTIONS statement Alters an existing capacity commitment.
- The following options are supported: NAME VALUE Details size gb INT64 Specifies the size of the reservation in gigabytes. preferred tables <ARRAY<STRING>> List of tables that acceleration should be applied to.

