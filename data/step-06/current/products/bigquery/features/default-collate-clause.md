---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.742Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "DEFAULT COLLATE clause"
feature_slug: "default-collate-clause"
latest_feature_date: "2022-05-02"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "CREATE TABLE DEFAULT COLLATE"
  - "DEFAULT COLLATE clause"
  - "default collation setting"
  - "default collation in DDL"
  - "default collation clause"
  - "schema default collation"
  - "DEFAULT COLLATE"
  - "table default collation"
---

# DEFAULT COLLATE clause

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery now supports the DEFAULT COLLATE clause in DDL to apply a default collation setting across supported column data types in schemas and tables.

## Extended Definition

In BigQuery SQL DDL, the DEFAULT COLLATE clause is used in CREATE TABLE to set a default collation for the table’s STRING columns when those columns do not define their own COLLATE explicitly. In the ALTER TABLE syntax, SET DEFAULT COLLATE updates the table-level default collation for future schema changes, but does not change the collation on existing columns. If a column (including nested STRING fields) specifies COLLATE explicitly, that explicit collation overrides the table default.

## Evidence Summary

The referenced DDL page provides clause syntax and examples showing CREATE TABLE DEFAULT COLLATE behavior, precedence of column-level COLLATE, and that ALTER TABLE SET DEFAULT COLLATE affects only newly created columns.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Syntax CREATE [ OR REPLACE ] [ TEMP TEMPORARY ] TABLE [ IF NOT EXISTS ] table name [ ( column constraint definition [ , ... ] ) ] [ DEFAULT COLLATE collate specification ] [ PARTITION BY partition expression ] [ CLUSTER BY clustering column list ] [ WITH CONNECTION connection name ] [ OPTIONS ( table option list ) ] [ AS query statement ] column := column definition constraint definition := [ primary key ] [[ CONSTRAINT constraint name ] foreign key , ... ] primary key := PRIMARY KEY ( column name [ , ... ] ) NOT ENFORCED foreign key := FOREIGN KEY ( column name [ , ... ] ) foreign reference foreign reference := REFERENCES primary key table ( column name [ , ... ] ) NOT ENFORCED Arguments OR REPLACE : Replaces any table with the same name if it exists.
- All STRING column schemas in this table are collated with 'und:ci' : CREATE TABLE mydataset . newtable ( a STRING , b STRING , c STRUCT < x FLOAT64 y ARRAY < STRING > ) DEFAULT COLLATE 'und:ci' ; Only b and y are collated with 'und:ci' : CREATE TABLE mydataset . newtable ( a STRING , b STRING COLLATE 'und:ci' , c STRUCT < x FLOAT64 y ARRAY < STRING COLLATE 'und:ci' > ); Creating a table with parameterized data types The following example creates a table named newtable in mydataset .
- ALTER TABLE mydataset . mytable SET DEFAULT COLLATE '' Although you have updated the collation specification, your existing column, word , continues to use the previous collation specification. +--------------------------------+ mydataset.mytable number INT64 word STRING COLLATE 'und:ci' +--------------------------------+ However, if you create a new column for your table, the new column includes the new collation specification.
- Example The following example creates a Cloud resource connection named my cloud resource connection : CREATE CONNECTION IF NOT EXISTS us.my cloud resource connection OPTIONS ( connection type = "CLOUD RESOURCE" , friendly name = "My Resource Connection" , description = "Connection to access Cloud resources" ); ALTER SCHEMA SET DEFAULT COLLATE statement Sets collation specifications on a dataset.

