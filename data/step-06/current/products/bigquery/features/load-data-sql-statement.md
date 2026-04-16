---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.591Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "LOAD DATA SQL statement"
feature_slug: "load-data-sql-statement"
latest_feature_date: "2023-07-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/reference/api-uploads"
  - "https://docs.cloud.google.com/bigquery/docs/batch-loading-data"
keywords:
  - "load"
  - "sql"
  - "statement"
  - "loads"
  - "avro"
  - "csv"
  - "newline"
  - "delimited"
---

# LOAD DATA SQL statement

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The LOAD DATA SQL statement loads Avro, CSV, newline delimited JSON, JSON, ORC, or Parquet files into a table.

## Extended Definition

The LOAD DATA SQL statement loads Avro, CSV, newline delimited JSON, JSON, ORC, or Parquet files into a table.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/api-uploads](https://docs.cloud.google.com/bigquery/docs/reference/api-uploads)
- [https://docs.cloud.google.com/bigquery/docs/batch-loading-data](https://docs.cloud.google.com/bigquery/docs/batch-loading-data)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Supported values for LOAD DATA include: AVRO , CSV , DELTA LAKE ( preview ) NEWLINE DELIMITED JSON (or JSON ), ORC , PARQUET .
- Supported values for CREATE EXTERNAL TABLE include: AVRO , CLOUD BIGTABLE , CSV , DATASTORE BACKUP , DELTA LAKE ( preview ), GOOGLE SHEETS , NEWLINE DELIMITED JSON (or JSON ), ORC , PARQUET .
- Last modified Schema Total Rows Total Bytes Expiration Time Partitioning Clustered Fields Total Logical ----------------- --------------------------- ------------ ------------- ------------ ------------------- ------------------ --------------- 31 Oct 17:34:31 - l orderkey: integer 3086653 210767042 210767042 - l partkey: integer - l suppkey: integer - l commitdate: date - l shipdate: date - l receiptdate: date - l shipinstruct: string - l shipmode: string Now, using the CREATE TABLE AS SELECT statement you can selectively load data to the myotherdataset.orders table in the US multi-region: CREATE OR REPLACE TABLE myotherdataset . orders PARTITION BY DATE TRUNC ( l commitdate , YEAR ) AS SELECT FROM myawsdataset . orders WHERE EXTRACT ( YEAR FROM l commitdate ) = 1992 ; Note: If you get a ResourceExhausted error, retry after some time.
- Example The following example assigns the project my project to the prod reservation for query jobs: CREATE ASSIGNMENT admin project.region-us.prod.my assignment OPTIONS ( assignee = 'projects/my project' , job type = 'QUERY' ); The following example assigns an organization to the prod reservation for pipeline jobs, such as load and extract jobs: CREATE ASSIGNMENT admin project.region-us.prod.my assignment OPTIONS ( assignee = 'organizations/1234' , job type = 'PIPELINE' ); CREATE SEARCH INDEX statement Creates a new search index on one or more columns of a table.

### API uploads \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/api-uploads](https://docs.cloud.google.com/bigquery/docs/reference/api-uploads)
- Source ID: `site-docs-reference-3`
- Final score: 160
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- POST /upload/bigquery/v2/projects/ projectId /jobs?uploadType=multipart HTTP/1.1 Host: www.googleapis.com Authorization: Bearer your auth token Content-Type: multipart/related; boundary=foo bar baz Content-Length: number of bytes in entire request body --foo bar baz Content-Type: application/json; charset=UTF-8 { "configuration": { "load": { "sourceFormat": "NEWLINE DELIMITED JSON", "schema": { "fields": [ {"name": "f1", "type": "STRING"}, {"name": "f2", "type": "INTEGER"} ] }, "destinationTable": { "projectId": "projectId", "datasetId": "datasetId", "tableId": "tableId" } } } } --foo bar baz Content-Type: / CSV, JSON, AVRO, PARQUET, or ORC data --foo bar baz-- If the request succeeds, the server returns the HTTP 200 OK status code along with any metadata: HTTP/1.1 200 Content-Type: application/json { "configuration": { "load": { "sourceFormat": "NEWLINE DELIMITED JSON", "schema": { "fields": [ {"name": "f1", "type": "STRING"}, {"name": "f2", "type": "INTEGER"} ] }, "destinationTable": { "projectId": "projectId", "datasetId": "datasetId", "tableId": "tableId" } } } } Resumable upload To upload data files more reliably, you can use the resumable upload protocol.
- POST /upload/bigquery/v2/projects/ projectId /jobs?uploadType=resumable HTTP/1.1 Host: www.googleapis.com Authorization: Bearer your auth token Content-Length: 38 Content-Type: application/json; charset=UTF-8 X-Upload-Content-Type: / X-Upload-Content-Length: 2000000 { "configuration": { "load": { "sourceFormat": "NEWLINE DELIMITED JSON", "schema": { "fields": [ {"name": "f1", "type": "STRING"}, {"name": "f2", "type": "INTEGER"} ] }, "destinationTable": { "projectId": "projectId", "datasetId": "datasetId", "tableId": "tableId" } } } } Note: For an initial resumable update request without metadata, leave the body of the request empty, and set the Content-Length header to 0 .
- Resume or retry uploads that fail due to connection interruptions or any 5xx errors, including: 500 Internal Server Error 502 Bad Gateway 503 Service Unavailable 504 Gateway Timeout Use an exponential backoff strategy if any 5xx server error is returned when resuming or retrying upload requests.
- The flow for implementing simple exponential backoff is as follows: int seconds to delay retry = 1; int max seconds to delay retry = 60; int timeout = / developer choice; can be long for large uploads; max 7d /; int delay time; while (time elapsed Make a request to the API.

### Batch loading data \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/batch-loading-data](https://docs.cloud.google.com/bigquery/docs/batch-loading-data)
- Source ID: `site-docs-reference-5`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- The source data can be in any of the following formats: Avro Comma-separated values (CSV) JSON (newline-delimited) ORC Parquet Datastore exports stored in Cloud Storage Firestore exports stored in Cloud Storage You can also use BigQuery Data Transfer Service to set up recurring loads from Cloud Storage into BigQuery.
- The schema is defined in a local schema file named myschema.json . bq load \ -- source format = NEWLINE DELIMITED JSON \ mydataset . mytable \ ./ mydata . json \ ./ myschema . json The following command loads a local CSV file ( mydata.csv ) into a table named mytable in mydataset in myotherproject .
- FORMAT : CSV , AVRO , PARQUET , ORC , or NEWLINE DELIMITED JSON . project id : your project ID. dataset : an existing dataset. table : the name of the table into which you're loading data. path to source : the path to the local file. schema : a valid schema.
- Examples: The following command loads a local newline-delimited JSON file ( mydata.json ) into a table named mytable in mydataset in your default project.

