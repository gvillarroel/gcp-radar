---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.623Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "ALTER TABLE RENAME COLUMN"
feature_slug: "alter-table-rename-column"
latest_feature_date: "2023-02-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/column-data-masking"
  - "https://docs.cloud.google.com/bigquery/docs/biglake-intro"
keywords:
  - "alter"
  - "table"
  - "rename"
  - "column"
  - "lets"
  - "users"
  - "columns"
  - "bigquery"
---

# ALTER TABLE RENAME COLUMN

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

ALTER TABLE RENAME COLUMN lets users rename columns in BigQuery tables; The ALTER TABLE RENAME COLUMN statement lets you rename columns in a table.

## Extended Definition

ALTER TABLE RENAME COLUMN lets users rename columns in BigQuery tables; The ALTER TABLE RENAME COLUMN statement lets you rename columns in a table.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/column-data-masking](https://docs.cloud.google.com/bigquery/docs/column-data-masking)
- [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 220
- Re-rank relevance: N/A

Evidence snippets:
- Examples Renaming columns The following example renames columns from an existing table named mytable : Column A -> columnA Column B -> columnB ALTER TABLE mydataset . mytable RENAME COLUMN A TO columnA , RENAME COLUMN IF EXISTS B TO columnB If column A does not exist, then the statement fails.
- The following example swaps the names of columnA and columnB : ALTER TABLE mydataset . mytable RENAME COLUMN columnA TO temp col , RENAME COLUMN columnB TO columnA , RENAME COLUMN temp col TO columnB ALTER TABLE DROP COLUMN statement Drops one or more columns from an existing table schema.
- The table schema contains 2 columns: transaction id: An integer transaction date: A date The table option list specifies the: Partition expiration: Three days Description: A table partitioned by transaction date Creating a partitioned table from the result of a query The following example creates a partitioned table named days with rain in mydataset using a DATE column: CREATE TABLE mydataset . days with rain PARTITION BY date OPTIONS ( partition expiration days = 365 , description = "weather stations with precipitation, partitioned by day" ) AS SELECT DATE ( CAST ( year AS INT64 ), CAST ( mo AS INT64 ), CAST ( da AS INT64 )) AS date , ( SELECT ANY VALUE ( name ) FROM bigquery-public-data.noaa gsod.stations AS stations WHERE stations . usaf = stn ) AS station name , -- Stations can have multiple names prcp FROM bigquery-public-data.noaa gsod.gsod2017 AS weather WHERE prcp != 99.9 -- Filter unknown values AND prcp > 0 -- Filter stations/days with no precipitation If you haven't configured a default project, prepend a project ID to the dataset name in the example SQL, and enclose the name in backticks if project id contains special characters: project id.dataset.table .
- Examples Setting the expiration timestamp and description on a table The following example sets the expiration timestamp on a table to seven days from the execution time of the ALTER TABLE statement, and sets the description as well: ALTER TABLE mydataset . mytable SET OPTIONS ( expiration timestamp = TIMESTAMP ADD ( CURRENT TIMESTAMP (), INTERVAL 7 DAY ), description = "Table that expires seven days from now" ) Setting the require partition filter attribute on a partitioned table The following example sets the timePartitioning.requirePartitionFilter attribute on a partitioned table : ALTER TABLE mydataset . mypartitionedtable SET OPTIONS ( require partition filter = true ) Queries that reference this table must use a filter on the partitioning column, or else BigQuery returns an error.

### Mask column data \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/column-data-masking](https://docs.cloud.google.com/bigquery/docs/column-data-masking)
- Source ID: `site-docs-reference-5`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example uses the CREATE TABLE statement and sets data policies on a column: CREATE TABLE myproject . table1 ( name INT64 OPTIONS ( data policies = [ "{'name':'myproject.region-us.data policy name1'}" , "{'name':'myproject.region-us.data policy name2'}" ]) ); The following example uses the ALTER COLUMN SET OPTIONS to add a data policy to an existing column on a table: ALTER TABLE myproject . table1 ALTER COLUMN column name SET OPTIONS ( data policies += [ "{'name':'myproject.region-us.data policy name1'}" , "{'name':'myproject.region-us.data policy name2'}" ]); API To assign a data policy to a column, call the patch method on the table and update the table schema with the applicable data policies.
- The following example uses the ALTER COLUMN SET OPTIONS to remove all data policies from an existing column on a table: ALTER TABLE myproject . table1 ALTER COLUMN column name SET OPTIONS ( data policies = []); The following example uses the ALTER COLUMN SET OPTIONS to replace data policies from an existing column on a table: ALTER TABLE myproject . table1 ALTER COLUMN column name SET OPTIONS ( data policies = [ "{'name':'myproject.region-us.new data policy name'}" ]); API To unassign a data policy to a column, call the patch method on the table and update the table schema empty or updated data policies.
- For more information, see Set up authentication for client libraries . const datapolicy = require ( ' @google-cloud/bigquery-datapolicies ' ); const { DataPolicyServiceClient } = datapolicy . v2 ; const protos = datapolicy . protos . google . cloud . bigquery . datapolicies . v2 ; const { status } = require ( '@grpc/grpc-js' ); const dataPolicyServiceClient = new DataPolicyServiceClient (); / Creates a data policy to apply a data masking rule to a specific BigQuery table column.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to assign a data policy directly on a column: bigquery.tables.update bigquery.tables.setColumnDataPolicy bigquery.dataPolicies.attach You might also be able to get these permissions with custom roles or other predefined roles .

### "Introduction to BigLake external tables \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- Source ID: `site-docs-reference-5`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- However, BigQuery helps reduce these costs by only transferring columns and rows in the BigLake table that are referenced in the query, rather than the entire table.
- For example, the following diagram demonstrates how the BigQuery Storage API lets users access authorized data using open source query engines such as Apache Spark: For more information about connectors supported by BigQuery, see BigQuery connectors .
- To optimize performance, consider creating a view in the BigQuery Omni region that filters STRUCT and JSON columns and returns only the necessary fields as individual columns.
- The BigQuery Storage API enforces row- and column-level governance policies on all data access to BigLake tables, including through connectors.

