---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.762Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery table snapshots"
feature_slug: "bigquery-table-snapshots"
latest_feature_date: "2021-10-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
  - "https://docs.cloud.google.com/bigquery/docs/tables"
keywords:
  - "read-only snapshot"
  - "point-in-time snapshot"
  - "cross-project snapshot"
  - "table snapshot feature"
  - "CREATE SNAPSHOT TABLE"
  - "table snapshots"
  - "snapshot tables"
  - "snapshot table"
---

# BigQuery table snapshots

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery table snapshots became generally available, including console support and cross-project snapshot creation from a base table; BigQuery introduces table snapshots, enabling low-cost read-only copies of a table at a specific point in time.

## Extended Definition

BigQuery table snapshots became generally available, including console support and cross-project snapshot creation from a base table; BigQuery introduces table snapshots, enabling low-cost read-only copies of a table at a specific point in time.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- For information about creating table snapshots, see CREATE SNAPSHOT TABLE .
- The table snapshot is created in the dataset mydataset and is named mytablesnapshot : CREATE SNAPSHOT TABLE myproject . mydataset . mytablesnapshot CLONE myproject.mydataset.mytable OPTIONS ( expiration timestamp = TIMESTAMP ADD ( CURRENT TIMESTAMP (), INTERVAL 48 HOUR ), friendly name = "my table snapshot" , description = "A table snapshot that expires in 2 days" , labels =[ ( "org unit" , "development" ) ] ) If the table snapshot name already exists in the dataset, then the following error is returned: Already Exists: myproject.mydataset.mytablesnapshot The table snapshot option list specifies the following: Expiration time: 48 hours after the time the table snapshot is created Friendly name: my table snapshot Description: A table snapshot that expires in 2 days Label: org unit = development Create a table snapshot: ignore if it already exists The following example creates a table snapshot of the table myproject.mydataset.mytable .
- The table snapshot is created in the dataset mydataset and is named mytablesnapshot : CREATE SNAPSHOT TABLE IF NOT EXISTS myproject . mydataset . mytablesnapshot CLONE myproject.mydataset.mytable OPTIONS ( expiration timestamp = TIMESTAMP ADD ( CURRENT TIMESTAMP (), INTERVAL 48 HOUR ), friendly name = "my table snapshot" , description = "A table snapshot that expires in 2 days" labels =[ ( "org unit" , "development" ) ] ) The table snapshot option list specifies the following: Expiration time: 48 hours after the time the table snapshot is created Friendly name: my table snapshot Description: A table snapshot that expires in 2 days Label: org unit = development If the table snapshot name already exists in the dataset, then no action is taken, and no error is returned.
- The constant expression cannot contain: A reference to a table Subqueries or SQL statements such as SELECT , CREATE , and UPDATE User-defined functions, aggregate functions, or analytic functions The following scalar functions: ARRAY TO STRING REPLACE REGEXP REPLACE RAND FORMAT LPAD RPAD REPEAT SESSION USER GENERATE ARRAY GENERATE DATE ARRAY If VALUE evaluates to NULL , the corresponding option NAME in the CREATE SNAPSHOT TABLE statement is ignored.

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- For more information about using the bq ls command, see the following: Managing jobs Listing datasets in a project Creating and using tables Listing views in a dataset Working with transfers Listing table snapshots in a dataset bq mk Use the bq mk command to create a BigQuery resource.
- For more information about using the bq rm command, see the following: Managing datasets Managing jobs Managing tables Managing views Working with transfers Deleting table snapshots bq set-iam-policy Use the bq set-iam-policy command to specify or update the IAM policy for a resource.
- For more information about using the cp command, see the following: Copy a table Create table clones Create table snapshots Restore table snapshots bq extract Use the bq extract command to export table data to Cloud Storage.

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- The managed table type; one of the following: NATIVE : A standard table BIGLAKE : A BigLake table for Apache Iceberg in BigQuery is insertable into STRING YES or NO depending on whether the table supports DML INSERT statements is fine grained mutations enabled STRING YES or NO depending on whether fine-grained DML mutations are enabled on the table is typed STRING The value is always NO is change history enabled STRING YES or NO depending on whether change history is enabled creation time TIMESTAMP The table's creation time base table catalog STRING For table clones and table snapshots , the base table's project.
- Applicable only to tables with table type set to CLONE or SNAPSHOT . snapshot time ms TIMESTAMP For table clones and table snapshots , the time when the clone or snapshot operation was run on the base table to create this table.
- Applicable only to tables with table type set to CLONE or SNAPSHOT . base table schema STRING For table clones and table snapshots , the base table's dataset.
- Applicable only to tables with table type set to CLONE or SNAPSHOT . base table name STRING For table clones and table snapshots , the base table's name.

