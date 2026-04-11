---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.642Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery primary and foreign key table constraints"
feature_slug: "bigquery-primary-and-foreign-key-table-constraints"
latest_feature_date: "2023-07-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "PK and FK"
  - "primary key constraint"
  - "foreign key constraint"
  - "primary/foreign key"
  - "console visibility of constraints"
  - "ADD CONSTRAINT"
  - "constraint metadata"
  - "table constraints"
---

# BigQuery primary and foreign key table constraints

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Primary and foreign key table constraints are now generally available, including API-based management and console visibility.

## Extended Definition

BigQuery Standard SQL DDL supports primary key and foreign key table constraints through `CREATE TABLE` constraint definitions and `ALTER TABLE ... ADD CONSTRAINT` statements. In documented examples, these constraints are specified with column lists, `FOREIGN KEY ... REFERENCES ...`, optional constraint names, and a `NOT ENFORCED` clause; the documentation also says columns that are part of PK/FK constraints cannot be renamed or dropped with ALTER TABLE. This confirms support for explicit PK/FK metadata in table schema and restricted schema changes around constrained columns, while runtime enforcement behavior is not detailed beyond the `NOT ENFORCED` form shown.

## Evidence Summary

The source provides SQL syntax and ALTER TABLE behavior for BigQuery primary and foreign key constraints, including metadata-oriented constraint definitions and schema-alteration restrictions on constrained columns.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- You cannot use this statement to rename the following: Subfields, such as nested columns in a STRUCT Partitioning columns Clustering columns Fields that are part of primary key constraints or foreign key constraints Columns in a table that has row access policies After one or more columns in a table are renamed, you cannot do the following: Query the table with legacy SQL.
- You cannot use this statement to drop the following: Partitioned columns Clustered columns Fields that are part of primary key constraints or foreign key constraints Nested columns inside existing RECORD fields Columns in a table that has row access policies After one or more columns in a table are dropped you cannot do the following: Query the table with legacy SQL.
- ALTER TABLE fk table ADD CONSTRAINT my fk name FOREIGN KEY ( u , v ) REFERENCES pk table ( x , y ) NOT ENFORCED The following example adds the fk and fk2 foreign key constraints to the fk table table in a single statement.
- Syntax CREATE [ OR REPLACE ] [ TEMP TEMPORARY ] TABLE [ IF NOT EXISTS ] table name [ ( column constraint definition [ , ... ] ) ] [ DEFAULT COLLATE collate specification ] [ PARTITION BY partition expression ] [ CLUSTER BY clustering column list ] [ WITH CONNECTION connection name ] [ OPTIONS ( table option list ) ] [ AS query statement ] column := column definition constraint definition := [ primary key ] [[ CONSTRAINT constraint name ] foreign key , ... ] primary key := PRIMARY KEY ( column name [ , ... ] ) NOT ENFORCED foreign key := FOREIGN KEY ( column name [ , ... ] ) foreign reference foreign reference := REFERENCES primary key table ( column name [ , ... ] ) NOT ENFORCED Arguments OR REPLACE : Replaces any table with the same name if it exists.

