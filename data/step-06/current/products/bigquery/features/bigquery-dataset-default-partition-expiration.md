---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.838Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery dataset default partition expiration"
feature_slug: "bigquery-dataset-default-partition-expiration"
latest_feature_date: "2018-12-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-partitioned"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-range-partitioned"
keywords:
  - "bigquery"
  - "dataset"
  - "default"
  - "partition"
  - "expiration"
  - "lets"
  - "users"
  - "set"
---

# BigQuery dataset default partition expiration

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery lets users set or update a default partition expiration time on a dataset.

## Extended Definition

BigQuery lets users set or update a default partition expiration time on a dataset.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-partitioned](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-partitioned)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-range-partitioned](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-range-partitioned)

## Supporting Pages

### Column-based time partitioning \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-partitioned](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-partitioned)
- Source ID: `site-docs-reference-required-15`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see the Terraform provider reference documentation . resource "google bigquery dataset" "default" { dataset id = "mydataset" default partition expiration ms = 2592000000 # 30 days default table expiration ms = 31536000000 # 365 days description = "dataset description" location = "US" max time travel hours = 96 # 4 days labels = { billing group = "accounting" , pii = "sensitive" } } resource "google bigquery table" "default" { dataset id = google bigquery dataset.default.dataset id table id = "mytable" time partitioning { type = "DAY" field = "Created" expiration ms = 432000000 # 5 days } require partition filter = true schema = << EOF [ { "name" : "ID" , "type" : "INT64" , "mode" : "NULLABLE" , "description" : "Item ID" }, { "name" : "Created" , "type" : "TIMESTAMP" , "description" : "Record creation timestamp" }, { "name" : "Item" , "type" : "STRING" , "mode" : "NULLABLE" } ] EOF } What's next To search and filter code samples for other Google Cloud products, see the Google Cloud sample browser .
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function createTablePartitioned () { // Creates a new partitioned table named "my table" in "my dataset". / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = "my dataset"; // const tableId = "my table"; const schema = 'Name:string, Post Abbr:string, Date:date' ; // For all options, see https://cloud.google.com/bigquery/docs/reference/v2/tables#resource const options = { schema : schema , location : 'US' , timePartitioning : { type : 'DAY' , expirationMs : '7776000000' , field : ' date ' , }, }; // Create a new table in the dataset const [ table ] = await bigquery . dataset ( datasetId ) . createTable ( tableId , options ); console . log ( Table ${ table . id } created with partitioning: ); console . log ( table . metadata . timePartitioning ); } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService (); TableId tableId = TableId . of ( datasetName , tableName ); TimePartitioning partitioning = TimePartitioning . newBuilder ( TimePartitioning .
- DAY ) . setField ( "date" ) // name of column to use for partitioning . setExpirationMs ( 7776000000L ) // 90 days . build (); StandardTableDefinition tableDefinition = StandardTableDefinition . newBuilder () . setSchema ( schema ) . setTimePartitioning ( partitioning ) . build (); TableInfo tableInfo = TableInfo . newBuilder ( tableId , tableDefinition ). build (); bigquery . create ( tableInfo ); System . out . println ( "Partitioned table created successfully" ); } catch ( BigQueryException e ) { System . out . println ( "Partitioned table was not created. \n" + e . toString ()); } } } Node.js Before trying this sample, follow the Node.js setup instructions in the BigQuery quickstart using client libraries .

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- The table schema contains 2 columns: transaction id: An integer transaction date: A date The table option list specifies the: Partition expiration: Three days Description: A table partitioned by transaction date Creating a partitioned table from the result of a query The following example creates a partitioned table named days with rain in mydataset using a DATE column: CREATE TABLE mydataset . days with rain PARTITION BY date OPTIONS ( partition expiration days = 365 , description = "weather stations with precipitation, partitioned by day" ) AS SELECT DATE ( CAST ( year AS INT64 ), CAST ( mo AS INT64 ), CAST ( da AS INT64 )) AS date , ( SELECT ANY VALUE ( name ) FROM bigquery-public-data.noaa gsod.stations AS stations WHERE stations . usaf = stn ) AS station name , -- Stations can have multiple names prcp FROM bigquery-public-data.noaa gsod.gsod2017 AS weather WHERE prcp != 99.9 -- Filter unknown values AND prcp > 0 -- Filter stations/days with no precipitation If you haven't configured a default project, prepend a project ID to the dataset name in the example SQL, and enclose the name in backticks if project id contains special characters: project id.dataset.table .
- The table option list specifies the: Table expiration time: January 1, 2025 at 00:00:00 UTC Partition expiration time: 1 day Description: A table that expires in 2025 Label: org unit = development Creating a new table from an existing table The following example creates a table named top words in mydataset from a query: CREATE TABLE mydataset . top words OPTIONS ( description = "Top ten words per Shakespeare corpus" ) AS SELECT corpus , ARRAY AGG ( STRUCT ( word , word count ) ORDER BY word count DESC LIMIT 10 ) AS top words FROM bigquery - public - data . samples . shakespeare GROUP BY corpus ; If you haven't configured a default project, prepend a project ID to the dataset name in the example SQL, and enclose the name in backticks if project id contains special characters: project id.dataset.table .
- If the table name exists in the dataset, the following error is returned: Already Exists: project id:dataset.table The table schema contains 3 columns: x: A parameterized string with a maximum length of 10 y: A STRUCT containing a (an array of parameterized bytes with a maximum length of 5), b (a parameterized NUMERIC with a maximum precision of 15, maximum scale of 2, and rounding mode set to 'ROUND HALF EVEN'), and c (a float) z: A parameterized BIGNUMERIC with a maximum precision of 35 and maximum scale of 0 Creating a partitioned table The following example creates a partitioned table named newtable in mydataset using a DATE column: CREATE TABLE mydataset . newtable ( transaction id INT64 , transaction date DATE ) PARTITION BY transaction date OPTIONS ( partition expiration days = 3 , description = "a table partitioned by transaction date" ) If you haven't configured a default project, prepend a project ID to the dataset name in the example SQL, and enclose the name in backticks if project id contains special characters: project id.dataset.table .
- Examples Setting the expiration timestamp and description on a table The following example sets the expiration timestamp on a table to seven days from the execution time of the ALTER TABLE statement, and sets the description as well: ALTER TABLE mydataset . mytable SET OPTIONS ( expiration timestamp = TIMESTAMP ADD ( CURRENT TIMESTAMP (), INTERVAL 7 DAY ), description = "Table that expires seven days from now" ) Setting the require partition filter attribute on a partitioned table The following example sets the timePartitioning.requirePartitionFilter attribute on a partitioned table : ALTER TABLE mydataset . mypartitionedtable SET OPTIONS ( require partition filter = true ) Queries that reference this table must use a filter on the partitioning column, or else BigQuery returns an error.

### "Create an integer-range partitioned table \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-range-partitioned](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-range-partitioned)
- Source ID: `site-docs-reference-required-15`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see the Terraform provider reference documentation . resource "google bigquery dataset" "default" { dataset id = "mydataset" default partition expiration ms = 2592000000 # 30 days default table expiration ms = 31536000000 # 365 days description = "dataset description" location = "US" max time travel hours = 96 # 4 days labels = { billing group = "accounting" , pii = "sensitive" } } resource "google bigquery table" "default" { dataset id = google bigquery dataset.default.dataset id table id = "mytable" range partitioning { field = "ID" range { start = 0 end = 1000 interval = 10 } } require partition filter = true schema = << EOF [ { "name" : "ID" , "type" : "INT64" , "description" : "Item ID" }, { "name" : "Item" , "type" : "STRING" , "mode" : "NULLABLE" } ] EOF } What's next To search and filter code samples for other Google Cloud products, see the Google Cloud sample browser .
- BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService (); TableId tableId = TableId . of ( datasetName , tableName ); // Note: The field must be a top- level, NULLABLE/REQUIRED field. // The only supported type is INTEGER/INT64 RangePartitioning partitioning = RangePartitioning . newBuilder () . setField ( "integerField" ) . setRange ( RangePartitioning .
- For more information, see Set up authentication for client libraries . require "google/cloud/bigquery" Creates a table with range partitioning. @param dataset id [String] The ID of the dataset to create the table in. @param table id [String] The ID of the table to create. def create range partitioned table dataset id , table id bigquery = Google :: Cloud :: Bigquery . new dataset = bigquery . dataset dataset id table = dataset . create table table id do t t . schema do s s . integer "integerField" , mode : :required s . string "stringField" , mode : :nullable s . boolean "booleanField" , mode : :nullable s . date "dateField" , mode : :nullable end t . range partitioning field = "integerField" t . range partitioning start = 1 t . range partitioning interval = 2 t . range partitioning end = 10 end puts "Created range-partitioned table: #{ table . table id } " end Terraform To learn how to apply or remove a Terraform configuration, see Basic Terraform commands .
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function createTableRangePartitioned () { // Creates a new integer range partitioned table named "my table" // in "my dataset". / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = "my dataset"; // const tableId = "my table"; const schema = [ { name : 'fullName' , type : 'STRING' }, { name : 'city' , type : 'STRING' }, { name : 'zipcode' , type : ' INTEGER ' }, ]; // To use integer range partitioning, select a top-level REQUIRED or // NULLABLE column with INTEGER / INT64 data type.

