---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.759Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Data lineage"
feature_slug: "data-lineage"
latest_feature_date: "2025-03-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-parquet"
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-tfrecords"
  - "https://docs.cloud.google.com/dataflow/docs/guides/templates/using-flex-templates"
keywords:
  - "lineage"
  - "dataflow"
  - "supports"
  - "track"
  - "how"
  - "moves"
  - "through"
  - "systems"
---

# Data lineage

Product: Dataflow
Coverage: LOW

## Step 02 Summary

Dataflow supports data lineage to track how data moves through systems.

## Extended Definition

Dataflow supports data lineage to track how data moves through systems.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-parquet](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-parquet)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-tfrecords](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-tfrecords)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/using-flex-templates](https://docs.cloud.google.com/dataflow/docs/guides/templates/using-flex-templates)

## Supporting Pages

### "BigQuery export to Parquet (via Storage API) template \_|\_ Cloud Dataflow\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-parquet](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-parquet)
- Source ID: `site-api-reference`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BATCH , displayName = "BigQuery export to Parquet (via Storage API)" , description = "The BigQuery export to Parquet template is a batch pipeline that reads data from a BigQuery table and writes it to a Cloud Storage bucket in Parquet format. " + "This template utilizes the <a href=\"https://cloud.google.com/bigquery/docs/reference/storage\">BigQuery Storage API</a> to export the data." , optionsClass = BigQueryToParquetOptions . class , flexContainerName = "bigquery-to-parquet" , documentation = "https://cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-parquet" , contactInformation = "https://cloud.google.com/support" , requirements = { "The input BigQuery table must exist before running the pipeline." , "The output Cloud Storage bucket must exist before running the pipeline." }) public class BigQueryToParquet { / Logger for class. / private static final Logger LOG = LoggerFactory . getLogger ( BigQueryToParquet . class ); / File suffix for file to be written. / private static final String FILE SUFFIX = ".parquet" ; / Factory to create BigQueryStorageClients. / static class BigQueryStorageClientFactory { / Creates BigQueryStorage client for use in extracting table schema. @return BigQueryStorageClient / static BigQueryStorageClient create () { try { return BigQueryStorageClient . create (); } catch ( IOException e ) { LOG . error ( "Error connecting to BigQueryStorage API: " + e . getMessage ()); throw new RuntimeException ( e ); } } } / Factory to create ReadSessions. / static class ReadSessionFactory { / Creates ReadSession for schema extraction. @param client BigQueryStorage client used to create ReadSession. @param options BigQueryToParquetOptions options. @param tableReadOptions TableReadOptions that specify any fields in the table to filter on. @return session ReadSession object that contains the schema for the export. / static ReadSession create ( BigQueryStorageClient client , BigQueryToParquetOptions options , TableReadOptions tableReadOptions ) { String tableString = options . getTableRef (); TableReference tableReference = BigQueryHelpers . parseTableSpec ( tableString ); BigQueryOptions bigQueryOptions = options . as ( BigQueryOptions . class ); String parentProjectId = bigQueryOptions . getBigQueryProject () == null ? bigQueryOptions . getProject () : bigQueryOptions . getBigQueryProject (); String parentProjectIdResource = "projects/" + parentProjectId ; TableReferenceProto .
- InvalidArgumentException ; import com.google.api.services.bigquery.model.TableReference ; import com.google.cloud.bigquery.storage.v1beta1.BigQueryStorageClient ; import com.google.cloud.bigquery.storage.v1beta1.ReadOptions.TableReadOptions ; import com.google.cloud.bigquery.storage.v1beta1.Storage.CreateReadSessionRequest ; import com.google.cloud.bigquery.storage.v1beta1.Storage.ReadSession ; import com.google.cloud.bigquery.storage.v1beta1.TableReferenceProto ; import com.google.cloud.teleport.metadata.Template ; import com.google.cloud.teleport.metadata.TemplateCategory ; import com.google.cloud.teleport.metadata.TemplateParameter ; import com.google.cloud.teleport.v2.common.UncaughtExceptionLogger ; import com.google.cloud.teleport.v2.templates.BigQueryToParquet.BigQueryToParquetOptions ; import com.google.common.base.Splitter ; import com.google.common.base.Strings ; import java.io.IOException ; import java.util.Arrays ; import java.util.List ; import org.apache.avro.Schema ; import org.apache.avro.generic.GenericRecord ; import org.apache.beam.sdk.Pipeline ; import org.apache.beam.sdk.PipelineResult ; import org.apache.beam.sdk.extensions.avro.coders.AvroCoder ; import org.apache.beam.sdk.io.FileIO ; import org.apache.beam.sdk.io.gcp.bigquery.BigQueryHelpers ; import org.apache.beam.sdk.io.gcp.bigquery.BigQueryIO ; import org.apache.beam.sdk.io.gcp.bigquery.BigQueryIO.TypedRead ; import org.apache.beam.sdk.io.gcp.bigquery.BigQueryIO.TypedRead.Method ; import org.apache.beam.sdk.io.gcp.bigquery.BigQueryOptions ; import org.apache.beam.sdk.io.gcp.bigquery.SchemaAndRecord ; import org.apache.beam.sdk.io.parquet.ParquetIO ; import org.apache.beam.sdk.options.Default ; import org.apache.beam.sdk.options.PipelineOptions ; import org.apache.beam.sdk.options.PipelineOptionsFactory ; import org.apache.beam.sdk.options.Validation.Required ; import org.slf4j.Logger ; import org.slf4j.LoggerFactory ; / The {@link BigQueryToParquet} pipeline exports data from a BigQuery table to Parquet file(s) in a Google Cloud Storage bucket. <p>Check out <a href="https://github.com/GoogleCloudPlatform/DataflowTemplates/blob/main/v2/bigquery-to-parquet/README BigQuery to Parquet.md">README</a> for instructions on how to use or modify this template. / @Template ( name = "BigQuery to Parquet" , category = TemplateCategory .
- POST h tt ps : //dataflow.googleapis.com/v1b3/projects/ PROJECT ID /locations/ LOCATION /flexTemplates:launch { "launch parameter" : { "jobName" : " JOB NAME " , "parameters" : { "tableRef" : " BIGQUERY TABLE " , "bucket" : " OUTPUT DIRECTORY " , "numShards" : " NUM SHARDS " , "fields" : " FIELDS " }, "containerSpecGcsPath" : "gs://dataflow-templates- LOCATION / VERSION /flex/BigQuery to Parquet" , } } Replace the following: PROJECT ID : the Google Cloud project ID where you want to run the Dataflow job JOB NAME : a unique job name of your choice VERSION : the version of the template that you want to use You can use the following values: latest to use the latest version of the template, which is available in the non-dated parent folder in the bucket— gs://dataflow-templates- REGION NAME /latest/ the version name, like 2023-09-12-00 RC00 , to use a specific version of the template, which can be found nested in the respective dated parent folder in the bucket— gs://dataflow-templates- REGION NAME / Caution: The latest version of templates might update with breaking changes.
- In your shell or terminal, run the template: gcloud dataflow flex-template run JOB NAME \ --project = PROJECT ID \ --template-file-gcs-location = gs://dataflow-templates- REGION NAME / VERSION /flex/BigQuery to Parquet \ --region = REGION NAME \ --parameters \ tableRef = BIGQUERY TABLE , \ bucket = OUTPUT DIRECTORY , \ numShards = NUM SHARDS , \ fields = FIELDS Replace the following: PROJECT ID : the Google Cloud project ID where you want to run the Dataflow job JOB NAME : a unique job name of your choice VERSION : the version of the template that you want to use You can use the following values: latest to use the latest version of the template, which is available in the non-dated parent folder in the bucket— gs://dataflow-templates- REGION NAME /latest/ the version name, like 2023-09-12-00 RC00 , to use a specific version of the template, which can be found nested in the respective dated parent folder in the bucket— gs://dataflow-templates- REGION NAME / Caution: The latest version of templates might update with breaking changes.

### "BigQuery to Cloud Storage TFRecords template \_|\_ Cloud Dataflow \_|\_\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-tfrecords](https://docs.cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-tfrecords)
- Source ID: `site-api-reference`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- POST h tt ps : //dataflow.googleapis.com/v1b3/projects/ PROJECT ID /locations/ LOCATION /templates:launch?gcsPath=gs://dataflow-templates- LOCATION / VERSION /Cloud BigQuery to GCS TensorFlow Records { "jobName" : " JOB NAME " , "parameters" : { "readQuery" : " READ QUERY " , "outputDirectory" : " OUTPUT DIRECTORY " , "trainingPercentage" : " TRAINING PERCENTAGE " , "testingPercentage" : " TESTING PERCENTAGE " , "validationPercentage" : " VALIDATION PERCENTAGE " , "outputSuffix" : " OUTPUT FILENAME SUFFIX " }, "environment" : { "zone" : "us-central1-f" } } Replace the following: PROJECT ID : the Google Cloud project ID where you want to run the Dataflow job JOB NAME : a unique job name of your choice VERSION : the version of the template that you want to use You can use the following values: latest to use the latest version of the template, which is available in the non-dated parent folder in the bucket— gs://dataflow-templates- REGION NAME /latest/ the version name, like 2023-09-12-00 RC00 , to use a specific version of the template, which can be found nested in the respective dated parent folder in the bucket— gs://dataflow-templates- REGION NAME / Caution: The latest version of templates might update with breaking changes.
- In your shell or terminal, run the template: gcloud dataflow jobs run JOB NAME \ --gcs-location gs://dataflow-templates- REGION NAME / VERSION /Cloud BigQuery to GCS TensorFlow Records \ --region REGION NAME \ --parameters \ readQuery = READ QUERY , \ outputDirectory = OUTPUT DIRECTORY , \ trainingPercentage = TRAINING PERCENTAGE , \ testingPercentage = TESTING PERCENTAGE , \ validationPercentage = VALIDATION PERCENTAGE , \ outputSuffix = OUTPUT FILENAME SUFFIX Replace the following: JOB NAME : a unique job name of your choice VERSION : the version of the template that you want to use You can use the following values: latest to use the latest version of the template, which is available in the non-dated parent folder in the bucket— gs://dataflow-templates- REGION NAME /latest/ the version name, like 2023-09-12-00 RC00 , to use a specific version of the template, which can be found nested in the respective dated parent folder in the bucket— gs://dataflow-templates- REGION NAME / Caution: The latest version of templates might update with breaking changes.
- BATCH , displayName = "BigQuery to TensorFlow Records" , description = "The BigQuery to Cloud Storage TFRecords template is a pipeline that reads data from a BigQuery query and writes it to a Cloud Storage bucket in TFRecord format. " + "You can specify the training, testing, and validation percentage splits. " + "By default, the split is 1 or 100% for the training set and 0 or 0% for testing and validation sets. " + "When setting the dataset split, the sum of training, testing, and validation needs to add up to 1 or 100% (for example, 0.6+0.2+0.2). " + "Dataflow automatically determines the optimal number of shards for each output dataset." , optionsClass = Options . class , optionsOrder = { BigQueryReadOptions . class , Options . class }, documentation = "https://cloud.google.com/dataflow/docs/guides/templates/provided/bigquery-to-tfrecords" , contactInformation = "https://cloud.google.com/support" , requirements = { "The BigQuery dataset and table must exist." , "The output Cloud Storage bucket must exist before pipeline execution.
- LOCATION : the region where you want to deploy your Dataflow job—for example, us-central1 READ QUERY : the BigQuery query to run OUTPUT DIRECTORY : the Cloud Storage path prefix for output datasets TRAINING PERCENTAGE : the decimal percentage split for the training dataset TESTING PERCENTAGE : the decimal percentage split for the testing dataset VALIDATION PERCENTAGE : the decimal percentage split for the validation dataset OUTPUT FILENAME SUFFIX : the preferred output TensorFlow Record file suffix Template source code Java / Copyright (C) 2019 Google LLC Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.

### "Build and run an example Flex Template \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/templates/using-flex-templates](https://docs.cloud.google.com/dataflow/docs/guides/templates/using-flex-templates)
- Source ID: `site-docs-root`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Java gcloud dataflow flex-template build gs:// BUCKET NAME /getting started-java.json \ --image-gcr-path " LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY /getting-started-java:latest" \ --sdk-language "JAVA" \ --flex-template-base-image JAVA17 \ --metadata-file "metadata.json" \ --jar "target/flex-template-getting-started-1.0.jar" \ --env FLEX TEMPLATE JAVA MAIN CLASS = "com.example.dataflow.FlexTemplateGettingStarted" Replace the following: BUCKET NAME : the name of the Cloud Storage bucket that you created earlier LOCATION : the location PROJECT ID : the Google Cloud project ID REPOSITORY : the name of the Artifact Registry repository that you created earlier Python gcloud dataflow flex-template build gs:// BUCKET NAME /getting started-py.json \ --image-gcr-path " LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY /getting-started-python:latest" \ --sdk-language "PYTHON" \ --flex-template-base-image "PYTHON3" \ --metadata-file "metadata.json" \ --py-path "." \ --env "FLEX TEMPLATE PYTHON PY FILE=getting started.py" \ --env "FLEX TEMPLATE PYTHON REQUIREMENTS FILE=requirements.txt" Replace the following: BUCKET NAME : the name of the Cloud Storage bucket that you created earlier LOCATION : the location PROJECT ID : the Google Cloud project ID REPOSITORY : the name of the Artifact Registry repository that you created earlier Go gcloud dataflow flex-template build gs:// BUCKET NAME /samples/dataflow/templates/wordcount-go.json \ --image-gcr-path " LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY /dataflow/wordcount-go:latest" \ --sdk-language "GO" \ --flex-template-base-image "GO" \ --metadata-file "metadata.json" \ --go-binary-path = "." \ --env "FLEX TEMPLATE GO BINARY=wordcount" Replace the following: BUCKET NAME : the name of the Cloud Storage bucket that you created earlier.
- Run the following command once for each of the following IAM roles: roles/dataflow.admin roles/dataflow.worker roles/storage.objectAdmin roles/artifactregistry.writer gcloud projects remove-iam-policy-binding PROJECT ID \ --member = serviceAccount: PROJECT NUMBER -compute@developer.gserviceaccount.com \ --role = SERVICE ACCOUNT ROLE Optional: Revoke the authentication credentials that you created, and delete the local credential file. gcloud auth application-default revoke Optional: Revoke credentials from the gcloud CLI. gcloud auth revoke What's next Use Flex Templates to package a Dataflow pipeline .
- Go Use the gcloud dataflow flex-template run command to run a Dataflow job that uses the Flex Template. gcloud dataflow flex-template run "wordcount-go-date +%Y%m%d-%H%M%S" \ --template-file-gcs-location "gs:// BUCKET NAME /samples/dataflow/templates/wordcount-go.json" \ --parameters output = "gs:// BUCKET NAME /samples/dataflow/templates/counts.txt" \ --region " REGION " Replace the following: BUCKET NAME : the name of the Cloud Storage bucket that you created earlier REGION : the region To view the status of the Dataflow job in the Google Cloud console, go to the Dataflow Jobs page.
- Run the following command once for each of the following IAM roles: roles/dataflow.admin roles/dataflow.worker roles/storage.objectAdmin roles/artifactregistry.writer gcloud projects add-iam-policy-binding PROJECT ID --member = "serviceAccount: PROJECT NUMBER -compute@developer.gserviceaccount.com" --role = SERVICE ACCOUNT ROLE Replace the following: PROJECT ID : your project ID PROJECT NUMBER your Google Cloud project number SERVICE ACCOUNT ROLE : each individual role Prepare your environment for Flex Templates Install the SDK and any requirements for your development environment.

