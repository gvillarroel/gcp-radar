---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.670Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Cloud console metadata copy to clipboard"
feature_slug: "cloud-console-metadata-copy-to-clipboard"
latest_feature_date: "2022-08-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/tables"
keywords:
  - "console"
  - "metadata"
  - "copy"
  - "clipboard"
  - "can"
  - "selected"
  - "schema"
  - "fields"
---

# Cloud console metadata copy to clipboard

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The Cloud console can copy selected schema fields and resource IDs to the clipboard.

## Extended Definition

The Cloud console can copy selected schema fields and resource IDs to the clipboard.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)

## Supporting Pages

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- If --autodetect is false , and no schema is specified by using the --schema flag, and the destination table exists, then the schema of the destination table is used. --clustering fields= COLUMNS A comma-separated list of up to four column names that specifies the fields to use for table clustering . --column name character map= SCOPE Defines the scope and handling of characters in column names, with the option of enabling flexible column names .
- Synopsis bq head [ FLAGS ] [ TABLE ] Example bq head --max rows=10 --start row=50 --selected fields=field1,field3 \ myDataset.myTable Flags and arguments The bq head command uses the following flags and arguments: --job= JOB or -j= JOB To read the results of a query job, specify this flag with a valid job ID. --max rows= MAX or -n= MAX An integer that indicates the maximum number of rows to print when showing table data.
- Use one of the following values: ALLOW FIELD ADDITION : Allow new fields to be added ALLOW FIELD RELAXATION : Allow relaxing REQUIRED fields to NULLABLE Repeat this flag to specify multiple schema update options. --skip leading rows= NUMBER OF ROWS An integer that specifies the number of rows to skip at the beginning of the source file.
- You must set the --metadata cache mode flag if you set the --max staleness flag with the bq mk command . --parquet enable list inference={true false} If source format is set to PARQUET , then this flag specifies whether to use schema inference for Parquet LIST logical types.

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- Use the INFORMATION SCHEMA.COLUMNS and INFORMATION SCHEMA.COLUMN FIELD PATHS views to retrieve metadata about the columns (fields) in a table.
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library and create a client const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function createTable () { // Creates a new table named "my table" in "my dataset". / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = "my dataset"; // const tableId = "my table"; // const schema = 'Name:string, Age:integer, Weight:float, IsMagic:boolean'; // For all options, see https://cloud.google.com/bigquery/docs/reference/v2/tables#resource const options = { schema : schema , location : 'US' , }; // Create a new table in the dataset const [ table ] = await bigquery . dataset ( datasetId ) . createTable ( tableId , options ); console . log ( Table ${ table . id } created. ); } PHP Before trying this sample, follow the PHP setup instructions in the BigQuery quickstart using client libraries .
- For readability, some columns are excluded from the result. +----------------+---------------+----------------+------------+--------------------+---------------------+---------------------------------------------+ table catalog table schema table name table type is insertable into creation time ddl +----------------+---------------+----------------+------------+--------------------+---------------------+---------------------------------------------+ myproject mydataset mytable1 BASE TABLE YES 2018-10-29 20:34:44 CREATE TABLE myproject.mydataset.mytable1 ( id INT64 ); myproject mydataset myview1 VIEW NO 2018-12-29 00:19:20 CREATE VIEW myproject.mydataset.myview1 AS SELECT 100 as id; +----------------+---------------+----------------+------------+--------------------+---------------------+---------------------------------------------+ Example 2: The following example retrieves table metadata for all tables of type CLONE or SNAPSHOT from the INFORMATION SCHEMA.TABLES view.
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function getTable () { // Retrieves table named "my table" in "my dataset". / TODO(developer): Uncomment the following lines before running the sample / // const datasetId = "my dataset"; // const tableId = "my table"; // Retrieve table reference const dataset = bigquery . dataset ( datasetId ); const [ table ] = await dataset . table ( tableId ). get (); console . log ( 'Table:' ); console . log ( table . metadata . tableReference ); } getTable (); PHP Before trying this sample, follow the PHP setup instructions in the BigQuery quickstart using client libraries .

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- If the table name exists in the dataset, the following error is returned: Already Exists: project id:dataset.table The table schema contains 2 columns: corpus: Name of a Shakespeare corpus top words: An ARRAY of STRUCT s containing 2 fields: word (a STRING ) and word count (an INT64 with the word count) Note: When you examine the table schema in the Google Cloud console, a STRUCT is displayed as a RECORD column, and an ARRAY is displayed as a REPEATED column.
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library and create a client const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function ddlCreateView () { // Creates a view via a DDL query / TODO(developer): Uncomment the following lines before running the sample. / // const projectId = "my project" // const datasetId = "my dataset" // const tableId = "my new view" const query = CREATE VIEW \ ${ projectId } . ${ datasetId } . ${ tableId } \ OPTIONS( expiration timestamp=TIMESTAMP ADD( CURRENT TIMESTAMP(), INTERVAL 48 HOUR), friendly name="new view", description="a view that expires in 2 days", labels=[("org unit", "development")] ) AS SELECT name, state, year, number FROM \bigquery-public-data.usa names.usa 1910 current\ WHERE state LIKE 'W%' ; // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query const options = { query : query , }; // Run the query as a job const [ job ] = await bigquery . createQueryJob ( options ); job . on ( 'complete' , metadata = > { console . log ( Created new view ${ tableId } via job ${ metadata . id } ); }); } Python Call the Client.query() method to start a query job.
- Last modified Schema Total Rows Total Bytes Expiration Time Partitioning Clustered Fields Total Logical ----------------- --------------------------- ------------ ------------- ------------ ------------------- ------------------ --------------- 31 Oct 17:34:31 - l orderkey: integer 3086653 210767042 210767042 - l partkey: integer - l suppkey: integer - l commitdate: date - l shipdate: date - l receiptdate: date - l shipinstruct: string - l shipmode: string Now, using the CREATE TABLE AS SELECT statement you can selectively load data to the myotherdataset.orders table in the US multi-region: CREATE OR REPLACE TABLE myotherdataset . orders PARTITION BY DATE TRUNC ( l commitdate , YEAR ) AS SELECT FROM myawsdataset . orders WHERE EXTRACT ( YEAR FROM l commitdate ) = 1992 ; Note: If you get a ResourceExhausted error, retry after some time.
- Examples Example 1 The following example creates a new table named newtable in mydataset with the same metadata as sourcetable : CREATE TABLE mydataset . newtable LIKE mydataset . sourcetable Example 2 The following example creates a new table named newtable in mydataset with the same metadata as sourcetable and the data from the SELECT statement: CREATE TABLE mydataset . newtable LIKE mydataset . sourcetable AS SELECT FROM mydataset . myothertable CREATE TABLE COPY statement Creates a table that has the same metadata and data as another table.

