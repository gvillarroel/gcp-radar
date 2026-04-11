---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.870Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "ORC format loading"
feature_slug: "orc-format-loading"
latest_feature_date: "2018-09-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/analysis-rules"
keywords:
  - "Optimized Row Columnar"
  - "bq load --source_format"
  - "CREATE EXTERNAL TABLE ORC"
  - "Cloud Storage ORC data"
  - "source_format=ORC"
  - "ORC format"
  - "load ORC"
  - "ORC"
---

# ORC format loading

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports loading data in ORC format.

## Extended Definition

BigQuery supports loading data in ORC format.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart](https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/analysis-rules](https://docs.cloud.google.com/bigquery/docs/analysis-rules)

## Supporting Pages

### Work with Salesforce Data Cloud data in BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart](https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart)
- Source ID: `site-docs-root-2`
- Final score: 38
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Work with Salesforce Data Cloud data in BigQuery Data Cloud users can access their Data Cloud data natively in BigQuery.
- Go to BigQuery Click Salesforce Data Cloud Data Cloud datasets are displayed.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- Syntax CREATE [ OR REPLACE ] [ TEMP TEMPORARY ] TABLE [ IF NOT EXISTS ] table name [ ( column constraint definition [ , ... ] ) ] [ DEFAULT COLLATE collate specification ] [ PARTITION BY partition expression ] [ CLUSTER BY clustering column list ] [ WITH CONNECTION connection name ] [ OPTIONS ( table option list ) ] [ AS query statement ] column := column definition constraint definition := [ primary key ] [[ CONSTRAINT constraint name ] foreign key , ... ] primary key := PRIMARY KEY ( column name [ , ... ] ) NOT ENFORCED foreign key := FOREIGN KEY ( column name [ , ... ] ) foreign reference foreign reference := REFERENCES primary key table ( column name [ , ... ] ) NOT ENFORCED Arguments OR REPLACE : Replaces any table with the same name if it exists.
- NAME and VALUE must be one of the following combinations: NAME VALUE Details expiration timestamp TIMESTAMP Example: expiration timestamp=TIMESTAMP "2025-01-01 00:00:00 UTC" This property is equivalent to the expirationTime table resource property. friendly name STRING Example: friendly name="my view" This property is equivalent to the friendlyName table resource property. description STRING Example: description="a view that expires in 2025" This property is equivalent to the description table resource property. labels ARRAY<STRUCT<STRING, STRING>> Example: labels=[("org unit", "development")] This property is equivalent to the labels table resource property. privacy policy JSON-formatted STRING The policies to enforce when anyone queries the view.
- NAME and VALUE must be one of the following combinations: NAME VALUE Details expiration timestamp TIMESTAMP Example: expiration timestamp=TIMESTAMP "2025-01-01 00:00:00 UTC" This property is equivalent to the expirationTime table resource property. friendly name STRING Example: friendly name="my view" This property is equivalent to the friendlyName table resource property. description STRING Example: description="a view that expires in 2025" This property is equivalent to the description table resource property. labels ARRAY<STRUCT<STRING, STRING>> Example: labels=[("org unit", "development")] This property is equivalent to the labels table resource property. privacy policy JSON-formatted STRING The policies to enforce when anyone queries the view.
- Note: Constraints cannot be specified on ARRAY or STRUCT elements. column := column name column schema column schema := { simple type STRUCT<field list> ARRAY<array element schema> } [ PRIMARY KEY NOT ENFORCED REFERENCES table name ( column name ) NOT ENFORCED ] [ DEFAULT default expression GENERATED ALWAYS AS ( generation expression ) STORED OPTIONS ( generation option list ) ] [ NOT NULL ] [ OPTIONS ( column option list ) ] simple type := { data type STRING COLLATE collate specification } field list := field name column schema [ , ... ] array element schema := { simple type STRUCT<field list> } [ NOT NULL ] column name is the name of the column.

### "Restrict data access using analysis rules \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/analysis-rules](https://docs.cloud.google.com/bigquery/docs/analysis-rules)
- Source ID: `site-docs-root-2`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- The differentially private data should be successfully returned from ExamView because epsilon , delta , and max groups contributed all satisfy the conditions of the differential analysis rule in ExamView . -- Query an analysis–rule enforced view called ExamView.
- Aggregation threshold analysis rule An aggregation threshold analysis rule enforces the minimum number of distinct entities that must contribute to an output row of a query, so that the output row is included in the query result.
- Differential privacy analysis rule The differential privacy analysis rule enforces a privacy budget, which limits the data that is revealed to a subscriber when the data is protected with differential privacy .
- Supported analysis rules The following analysis rules are supported: Aggregation threshold analysis rule : Enforces the minimum number of distinct entities that must be present in a dataset.

