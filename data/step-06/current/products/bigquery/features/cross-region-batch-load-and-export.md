---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.350Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Cross-region batch load and export"
feature_slug: "cross-region-batch-load-and-export"
latest_feature_date: "2025-05-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/batch-loading-data"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas"
keywords:
  - "cross"
  - "region"
  - "batch"
  - "load"
  - "export"
  - "bigquery"
  - "now"
  - "supports"
---

# Cross-region batch load and export

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery now supports loading and exporting data between any regions or multi-regions with a single statement or command.

## Extended Definition

BigQuery now supports loading and exporting data between any regions or multi-regions with a single statement or command.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/batch-loading-data](https://docs.cloud.google.com/bigquery/docs/batch-loading-data)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)

## Supporting Pages

### Batch loading data \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/batch-loading-data](https://docs.cloud.google.com/bigquery/docs/batch-loading-data)
- Source ID: `site-docs-reference-5`
- Final score: 183
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Loading data from Cloud Storage BigQuery supports loading data from any of the following Cloud Storage storage classes : Standard Nearline Coldline Archive To learn how to load data into BigQuery, see the page for your data format: CSV JSON Avro Parquet ORC Datastore exports Firestore exports To learn how to configure a recurring load from Cloud Storage into BigQuery, see Cloud Storage transfers .
- The source data can be in any of the following formats: Avro Comma-separated values (CSV) JSON (newline-delimited) ORC Parquet Datastore exports stored in Cloud Storage Firestore exports stored in Cloud Storage You can also use BigQuery Data Transfer Service to set up recurring loads from Cloud Storage into BigQuery.
- Loading compressed and uncompressed data For Avro, Parquet, and ORC formats, BigQuery supports loading files where the file data has been compressed using a supported codec.
- JOBS BY PROJECT WHERE date ( creation time ) = CURRENT DATE () Pricing There is no charge for batch loading data into BigQuery using the shared slot pool.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- ALTER PROJECT project id SET OPTIONS ( region-us.default time zone = "America/New York" , region-us.default job query timeout ms = 1800000 ); The following example sets the default time zone, the default query job timeout, the default Cloud KMS key to NULL , and the default interactive and batch queue timeouts and default sql dialect, clearing the project level default settings: ALTER PROJECT project id SET OPTIONS ( region-us.default time zone = NULL , region-us.default kms key name = NULL , region-us.default query job timeout ms = NULL , region-us.default interactive query queue timeout ms = NULL , region-us.default batch query queue timeout ms = NULL , region-us.default sql dialect option = NULL ); ALTER BI CAPACITY SET OPTIONS statement Sets the options on BigQuery BI Engine capacity.
- Required permissions This statement requires the following IAM permissions : Permission Resource bigquery.bireservations.update BI Engine reservation Examples Allocating BI Engine capacity without preferred tables ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 250 ) Deallocating BI capacity ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 0 ) Removing a set of preferred tables from reservation ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( preferred tables = NULL ) Allocating BI Capacity with preferred tables list ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 250 , preferred tables = [ "data project1.dataset1.table1" , "data project2.dataset2.table2" ] ) Overwriting list of preferred tables without changing the size ALTER BI CAPACITY region-us.default SET OPTIONS ( preferred tables = [ "dataset1.table1" , "data project2.dataset2.table2" ] ) ALTER CAPACITY SET OPTIONS statement Alters an existing capacity commitment.
- Examples The following example sets the default time zone to America/Chicago and the default query job timeout to one hour for an organization in the US region: ALTER ORGANIZATION SET OPTIONS ( region-us.default time zone = "America/Chicago" , region-us.default job query timeout ms = 3600000 ); The following example sets the default time zone, the default query job timeout, the default interactive and batch queue timeouts, and the default Cloud KMS key, clearing the organization level default settings: ALTER ORGANIZATION SET OPTIONS ( region-us.default time zone = NULL , region-us.default kms key name = NULL , region-us.default query job timeout ms = NULL , region-us.default interactive query queue timeout ms = NULL , region-us.default batch query queue timeout ms = NULL ); ALTER PROJECT SET OPTIONS statement Sets the options on a project.
- Last modified Schema Total Rows Total Bytes Expiration Time Partitioning Clustered Fields Total Logical ----------------- --------------------------- ------------ ------------- ------------ ------------------- ------------------ --------------- 31 Oct 17:34:31 - l orderkey: integer 3086653 210767042 210767042 - l partkey: integer - l suppkey: integer - l commitdate: date - l shipdate: date - l receiptdate: date - l shipinstruct: string - l shipmode: string Now, using the CREATE TABLE AS SELECT statement you can selectively load data to the myotherdataset.orders table in the US multi-region: CREATE OR REPLACE TABLE myotherdataset . orders PARTITION BY DATE TRUNC ( l commitdate , YEAR ) AS SELECT FROM myawsdataset . orders WHERE EXTRACT ( YEAR FROM l commitdate ) = 1992 ; Note: If you get a ResourceExhausted error, retry after some time.

### Troubleshoot quota and limit errors \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- To see all copy jobs in all regions, you can use the following filter in Cloud Logging: resource.type="bigquery resource" protoPayload.methodName="jobservice.insert" protoPayload.serviceData.jobInsertRequest.resource.jobConfiguration.tableCopy: Resolution If the goal of the frequent copy operations is to create a snapshot of data, consider using table snapshots instead.
- Identify API calls Go to the Google Cloud navigation menu menu, and then select Logging > Logs Explorer : Go to the Logs Explorer Filter logs to view table operations by running the following query: resource.type="bigquery dataset" protoPayload.resourceName="projects/my-project-id/datasets/my dataset/tables/my table" (protoPayload.methodName="google.cloud.bigquery.v2.TableService.PatchTable" OR protoPayload.methodName="google.cloud.bigquery.v2.TableService.UpdateTable" OR protoPayload.methodName="google.cloud.bigquery.v2.TableService.InsertTable") Identify jobs The following query returns a list of jobs that modify the affected table in the project within the past day.
- To identify the method that reached the limit, do the following: In the Google Cloud console, go to the Google Cloud navigation menu menu and then select Logging > Logs Explorer for your project: Go to the Logs Explorer Filter logs by running the following query: resource.type="bigquery resource" protoPayload.authenticationInfo.principalEmail="<user email or service account>" "Too many API requests per user per method for this user method" In the log entry, you can find the method name under the property protoPayload.method name.
- STREAMING TIMELINE BY PROJECT WHERE start timestamp > TIMESTAMP SUB ( CURRENT TIMESTAMP , INTERVAL 1 DAY ) GROUP BY start timestamp , error code ORDER BY 1 DESC Resolution To resolve this quota error, do the following: If you are using the insertId field for deduplication, and your project is in a region that supports the higher streaming quota, we recommend removing the insertId field.

