---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.344Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Google Account authorization for pipelines and scheduling workflows"
feature_slug: "google-account-authorization-for-pipelines-and-scheduling-workflows"
latest_feature_date: "2025-05-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer"
  - "https://docs.cloud.google.com/bigquery/docs/reference/libraries-overview"
  - "https://docs.cloud.google.com/bigquery/docs/blms-rest-catalog"
keywords:
  - "account"
  - "authorization"
  - "pipelines"
  - "scheduling"
  - "workflows"
  - "user"
  - "credentials"
  - "can"
---

# Google Account authorization for pipelines and scheduling workflows

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Google Account user credentials can authorize creating, scheduling, and running pipelines and scheduling notebooks and data preparations.

## Extended Definition

Google Account user credentials can authorize creating, scheduling, and running pipelines and scheduling notebooks and data preparations.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer](https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer)
- [https://docs.cloud.google.com/bigquery/docs/reference/libraries-overview](https://docs.cloud.google.com/bigquery/docs/reference/libraries-overview)
- [https://docs.cloud.google.com/bigquery/docs/blms-rest-catalog](https://docs.cloud.google.com/bigquery/docs/blms-rest-catalog)

## Supporting Pages

### "Migrate Apache Hive Metastore tables to Google Cloud \_|\_ BigQuery \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer](https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer)
- Source ID: `site-api-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- To ensure that the service agent has the necessary permissions to run a Hive Metastore transfer, ask your administrator to grant the following IAM roles to the service agent on the project: Important: You must grant these roles to the service agent, not to your user account.
- Configure permissions To configure permissions for a Hive Metastore transfer, do the following: The user or the service account creating the transfer should be granted the BigQuery Admin role ( roles/bigquery.admin ).
- The service account should belong to the same Google Cloud project where the transfer configuration and destination dataset is created. bq To schedule Hive Metastore transfer, enter the bq mk command and supply the transfer creation flag --transfer config : bq mk --transfer config --data source = hadoop display name = ' TRANSFER NAME ' --service account name = ' SERVICE ACCOUNT ' --project id = ' PROJECT ID ' location = ' REGION ' --params = '{ "transfer strategy":" TRANSFER STRATEGY ", "table name patterns":" LIST OF TABLES ", "table metadata path":"gs:// DUMPER BUCKET /hive-dumper-output.zip", "target gcs file path":"gs:// MIGRATION BUCKET ", "metastore":" METASTORE ", "destination dataproc metastore":" DATAPROC METASTORE URL ", "destination bigquery dataset":" BIGLAKE METASTORE DATASET ", "translation output gcs path":"gs:// TRANSLATION OUTPUT BUCKET /metadata/config/default database/", "storage type":" STORAGE TYPE ", "agent pool name":" AGENT POOL NAME ", "aws access key id":" AWS ACCESS KEY ID ", "aws secret access key":" AWS SECRET ACCESS KEY ", "azure sas token":" AZURE SAS TOKEN ", "partition filter gcs path":" FILTER GCS PATH " }' Replace the following: TRANSFER NAME : the display name for the transfer configuration.
- Run the API request with the following information: GET https://bigquerydatatransfer.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /transferConfigs/ CONFIG ID /transferResources Example Response (abridged) (JSON): { "transferResources": [ { "name": "projects/.../transferResources/table1", "latestStatusDetail": { "state": "RESOURCE TRANSFER SUCCEEDED", "completedPercentage": 100.0 }, "updateTime": "2026-02-03T22:42:06Z" } ] } curl command: curl -X GET "https://bigquerydatatransfer.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /transferConfigs/ CONFIG ID /transferResources" -H "Authorization: Bearer $( gcloud auth print-access-token ) " -H "Accept: application/json" You can filter the results by resource name or state.

### Use the BigLake metastore Iceberg REST catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/blms-rest-catalog](https://docs.cloud.google.com/bigquery/docs/blms-rest-catalog)
- Source ID: `site-docs-reference-5`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- With end-user credentials, the catalog passes the identity of the end user accessing it to Cloud Storage for authorization checks.
- To use credential vending, you must use a catalog in credential vending mode and add the X-Iceberg-Access-Delegation header to Iceberg REST catalog requests with a value of vended-credentials by adding the following line to the SparkSession builder: . config ( f 'spark.sql.catalog. { catalog name } .header.X-Iceberg-Access-Delegation' , 'vended-credentials' ) Example with credential vending The following example configures the query engine with credential vending: import pyspark from pyspark.context import SparkContext from pyspark.sql import SparkSession catalog name = " CATALOG NAME " spark = SparkSession . builder . appName ( " APP NAME " ) \ . config ( f 'spark.sql.catalog. { catalog name } ' , 'org.apache.iceberg.spark.SparkCatalog' ) \ . config ( f 'spark.sql.catalog. { catalog name } .type' , 'rest' ) \ . config ( f 'spark.sql.catalog. { catalog name } .uri' , 'https://biglake.googleapis.com/iceberg/v1/restcatalog' ) \ . config ( f 'spark.sql.catalog. { catalog name } .warehouse' , 'gs:// CLOUD STORAGE BUCKET NAME ' ) \ . config ( f 'spark.sql.catalog. { catalog name } .header.x-goog-user-project' , ' PROJECT ID ' ) \ . config ( f "spark.sql.catalog. { catalog name } .token" , " TOKEN " ) \ . config ( f "spark.sql.catalog. { catalog name } .oauth2-server-uri" , "https://oauth2.googleapis.com/token" ) \ . config ( f 'spark.sql.catalog. { catalog name } .io-impl' , 'org.apache.iceberg.gcp.gcs.GCSFileIO' ) \ . config ( f 'spark.sql.catalog. { catalog name } .header.X-Iceberg-Access-Delegation' , 'vended-credentials' ) \ . config ( f 'spark.sql.catalog. { catalog name } .rest-metrics-reporting-enabled' , 'false' ) \ . config ( 'spark.sql.extensions' , 'org.apache.iceberg.spark.extensions.IcebergSparkSessionExtensions' ) \ . config ( 'spark.sql.defaultCatalog' , ' CATALOG NAME ' ) \ . getOrCreate () For more information, see the Headers in the RESTCatalog section of the Iceberg documentation.
- Configure with credential vending To use credential vending, you must use a catalog in credential vending mode and add the X-Iceberg-Access-Delegation header to Iceberg REST catalog requests with a value of vended-credentials by adding the following line to the SparkSession builder: . config ( f 'spark.sql.catalog. { catalog name } .header.X-Iceberg-Access-Delegation' , 'vended-credentials' ) Example with credential vending The following example configures the query engine with credential vending: import pyspark from pyspark.context import SparkContext from pyspark.sql import SparkSession catalog name = " CATALOG NAME " spark = SparkSession . builder . appName ( " APP NAME " ) \ . config ( f 'spark.sql.catalog. { catalog name } ' , 'org.apache.iceberg.spark.SparkCatalog' ) \ . config ( f 'spark.sql.catalog. { catalog name } .type' , 'rest' ) \ . config ( f 'spark.sql.catalog. { catalog name } .uri' , 'https://biglake.googleapis.com/iceberg/v1/restcatalog' ) \ . config ( f 'spark.sql.catalog. { catalog name } .warehouse' , 'gs:// CLOUD STORAGE BUCKET NAME ' ) \ . config ( f 'spark.sql.catalog. { catalog name } .header.x-goog-user-project' , ' PROJECT ID ' ) \ . config ( f 'spark.sql.catalog. { catalog name } .rest.auth.type' , 'org.apache.iceberg.gcp.auth.GoogleAuthManager' ) \ . config ( f 'spark.sql.catalog. { catalog name } .io-impl' , 'org.apache.iceberg.gcp.gcs.GCSFileIO' ) \ . config ( f 'spark.sql.catalog. { catalog name } .header.X-Iceberg-Access-Delegation' , 'vended-credentials' ) \ . config ( f 'spark.sql.catalog. { catalog name } .rest-metrics-reporting-enabled' , 'false' ) \ . config ( 'spark.sql.extensions' , 'org.apache.iceberg.spark.extensions.IcebergSparkSessionExtensions' ) \ . config ( 'spark.sql.defaultCatalog' , ' CATALOG NAME ' ) \ . getOrCreate () For more information, see the Headers in the RESTCatalog section of the Iceberg documentation.
- To use credential vending, you must use a catalog in credential vending mode and add the X-Iceberg-Access-Delegation header to Iceberg REST catalog requests with a value of vended-credentials by adding the following line to the SparkSession builder: . config ( f 'spark.sql.catalog. { catalog name } .header.X-Iceberg-Access-Delegation' , 'vended-credentials' ) Example with credential vending The following example configures the query engine with credential vending: import pyspark from pyspark.context import SparkContext from pyspark.sql import SparkSession catalog name = " CATALOG NAME " spark = SparkSession . builder . appName ( " APP NAME " ) \ . config ( f 'spark.sql.catalog. { catalog name } ' , 'org.apache.iceberg.spark.SparkCatalog' ) \ . config ( f 'spark.sql.catalog. { catalog name } .type' , 'rest' ) \ . config ( f 'spark.sql.catalog. { catalog name } .uri' , 'https://biglake.googleapis.com/iceberg/v1/restcatalog' ) \ . config ( f 'spark.sql.catalog. { catalog name } .warehouse' , 'gs:// CLOUD STORAGE BUCKET NAME ' ) \ . config ( f 'spark.sql.catalog. { catalog name } .header.x-goog-user-project' , ' PROJECT ID ' ) \ . config ( f 'spark.sql.catalog. { catalog name } .rest.auth.type' , 'org.apache.iceberg.gcp.auth.GoogleAuthManager' ) \ . config ( f 'spark.sql.catalog. { catalog name } .io-impl' , 'org.apache.iceberg.gcp.gcs.GCSFileIO' ) \ . config ( f 'spark.sql.catalog. { catalog name } .header.X-Iceberg-Access-Delegation' , 'vended-credentials' ) \ . config ( f 'spark.sql.catalog. { catalog name } .rest-metrics-reporting-enabled' , 'false' ) \ . config ( 'spark.sql.extensions' , 'org.apache.iceberg.spark.extensions.IcebergSparkSessionExtensions' ) \ . config ( 'spark.sql.defaultCatalog' , ' CATALOG NAME ' ) \ . getOrCreate () For more information, see the Headers in the RESTCatalog section of the Iceberg documentation.

### BigQuery APIs and libraries overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/libraries-overview](https://docs.cloud.google.com/bigquery/docs/reference/libraries-overview)
- Source ID: `site-docs-reference`
- Final score: 110
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can do this by using Application Default Credentials , a service account key file , or user credentials .
- Examples of pipelines include scheduling periodic ingestions from Cloud Storage, automated ingestion of analytics data from other Google properties such as YouTube, or data transfers from third-party partners who integrate with the service.
- For links to the reference documentation and source code, select a language: C++ API Reference Documentation Source Code C# API Reference Documentation Source Code Go API Reference Documentation Source Code Java API Reference Documentation Source Code Node.js API Reference Documentation Source Code PHP API Reference Documentation Source Code Python API Reference Documentation Source Code Ruby API Reference Documentation Source Code BigQuery Reservation API This API provides the mechanisms by which enterprise users can provision and manage dedicated resources such as slots and BigQuery BI Engine memory allocations.
- For links to the reference documentation and source code, select a language: C++ API Reference Documentation Source Code C# API Reference Documentation Source Code Go API Reference Documentation Source Code Java API Reference Documentation Source Code Node.js API Reference Documentation Source Code PHP API Reference Documentation Source Code Python API Reference Documentation Source Code Ruby API Reference Documentation Source Code BigQuery Migration API This API supports mechanisms to help users migrate existing data warehouses to BigQuery.

