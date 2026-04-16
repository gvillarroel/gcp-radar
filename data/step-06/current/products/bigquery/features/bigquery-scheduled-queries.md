---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.846Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery scheduled queries"
feature_slug: "bigquery-scheduled-queries"
latest_feature_date: "2018-09-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/continuous-queries-introduction"
  - "https://docs.cloud.google.com/bigquery/docs/inference-tutorial-mobilenet"
  - "https://docs.cloud.google.com/bigquery/docs/inference-tutorial-resnet"
keywords:
  - "bigquery"
  - "scheduled"
  - "queries"
  - "supports"
  - "scheduling"
  - "run"
  - "automatically"
---

# BigQuery scheduled queries

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports scheduling queries to run automatically.

## Extended Definition

BigQuery supports scheduling queries to run automatically.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/continuous-queries-introduction](https://docs.cloud.google.com/bigquery/docs/continuous-queries-introduction)
- [https://docs.cloud.google.com/bigquery/docs/inference-tutorial-mobilenet](https://docs.cloud.google.com/bigquery/docs/inference-tutorial-mobilenet)
- [https://docs.cloud.google.com/bigquery/docs/inference-tutorial-resnet](https://docs.cloud.google.com/bigquery/docs/inference-tutorial-resnet)

## Supporting Pages

### Introduction to continuous queries \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/continuous-queries-introduction](https://docs.cloud.google.com/bigquery/docs/continuous-queries-introduction)
- Source ID: `site-docs-reference-5`
- Final score: 23
- Re-rank relevance: N/A

Evidence snippets:
- BigQuery automatically determines the number of continuous queries that can run concurrently, based on available reservation assignments that use the CONTINUOUS job type.
- You can't use the following SQL capabilities in a continuous query, unless they are listed as a supported stateful operation : The following query operators: PIVOT UNPIVOT TABLESAMPLE Query set operators The SELECT DISTINCT statement EXISTS or NOT EXISTS subqueries Recursive CTEs User-defined functions Window function calls BigQuery ML functions other than those listed in Supported functionality Data definition language (DDL) statements Data manipulation language (DML) statements except for INSERT .
- Writes from the results of a batch query to a permanent table Writes from the results of a BigQuery continuous query to a permanent table A Pub/Sub BigQuery subscription Writes from Dataflow to BigQuery Writes from Datastream to BigQuery using append-only write mode You can use continuous queries to perform time-sensitive tasks, such as creating and immediately acting on insights, applying real-time machine learning (ML) inference, and replicating data into other platforms.
- Continuous queries can process data that has been written to standard BigQuery tables by using one of the following methods: The BigQuery Storage Write API The tabledata.insertAll method Batch load The INSERT DML statement Mutating data manipulation language (DML) statements such as DELETE , UPDATE , and MERGE when exporting data to Pub/Sub .

### "Tutorial: Run inference on an object table by using a classification model\

- URL: [https://docs.cloud.google.com/bigquery/docs/inference-tutorial-resnet](https://docs.cloud.google.com/bigquery/docs/inference-tutorial-resnet)
- Source ID: `site-docs-reference-2`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Go to BigQuery In the Editor pane, run the following SQL statement: CREATE EXTERNAL TABLE resnet inference test . vision images WITH CONNECTION us.lake-connection OPTIONS ( object metadata = 'SIMPLE' , uris = [ 'gs://cloud-samples-data/vision/ .jpg' ] ); bq In Cloud Shell, run the bq mk command to create the connection: bq mk --table \ --external table definition='gs://cloud-samples-data/vision/ .jpg@us.lake-connection' \ --object metadata=SIMPLE \ resnet inference test . vision images Upload the model to Cloud Storage Get the model files and make them available in Cloud Storage: Download the ResNet 50 model to your local machine.
- To load the model into BigQuery ML, you need the following permissions: bigquery.jobs.create bigquery.models.create bigquery.models.getData bigquery.models.updateData To run inference, you need the following permissions: bigquery.tables.getData on the object table bigquery.models.getData on the model bigquery.jobs.create Costs In this document, you use the following billable components of Google Cloud: BigQuery : You incur storage costs for the object table you create in BigQuery.
- To create the connection resource, you need the following permissions: bigquery.connections.create bigquery.connections.get To grant permissions to the connection's service account, you need the following permission: resourcemanager.projects.setIamPolicy To create the object table, you need the following permissions: bigquery.tables.create bigquery.tables.update bigquery.connections.delegate To create the bucket, you need the storage.buckets.create permission.
- Go to BigQuery In the Editor pane, run the following SQL statement: CREATE MODEL resnet inference test.resnet OPTIONS ( model type = 'TENSORFLOW' , model path = 'gs:// BUCKET NAME / ' ); Replace BUCKET NAME with the name of the bucket you previously created.

### "Tutorial: Run inference on an object table by using a feature vector model\

- URL: [https://docs.cloud.google.com/bigquery/docs/inference-tutorial-mobilenet](https://docs.cloud.google.com/bigquery/docs/inference-tutorial-mobilenet)
- Source ID: `site-docs-reference-2`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Go to BigQuery In the Editor pane, run the following SQL statement: CREATE EXTERNAL TABLE mobilenet inference test . sample images WITH CONNECTION us.lake-connection OPTIONS ( object metadata = 'SIMPLE' , uris = [ 'gs:// BUCKET NAME /flowers/ ' ] ); Replace BUCKET NAME with the name of the bucket you previously created. bq In Cloud Shell, run the bq mk command to create the connection: bq mk --table \ --external table definition = 'gs:// BUCKET NAME /flowers/ @us.lake-connection' \ --object metadata = SIMPLE \ mobilenet inference test.sample images Replace BUCKET NAME with the name of the bucket you previously created.
- To load the model into BigQuery ML, you need the following permissions: bigquery.jobs.create bigquery.models.create bigquery.models.getData bigquery.models.updateData To run inference, you need the following permissions: bigquery.tables.getData on the object table bigquery.models.getData on the model bigquery.jobs.create Costs In this document, you use the following billable components of Google Cloud: BigQuery : You incur storage costs for the object table you create in BigQuery.
- To create the connection resource, you need the following permissions: bigquery.connections.create bigquery.connections.get To grant permissions to the connection's service account, you need the following permission: resourcemanager.projects.setIamPolicy To create the object table, you need the following permissions: bigquery.tables.create bigquery.tables.update bigquery.connections.delegate To create the bucket, you need the storage.buckets.create permission.
- Go to BigQuery In the Editor pane, run the following SQL statement: CREATE MODEL mobilenet inference test.mobilenet OPTIONS ( model type = 'TENSORFLOW' , model path = 'gs:// BUCKET NAME /mobilenet/ ' ); Replace BUCKET NAME with the name of the bucket you previously created.

