---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:12:02.854Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "DataflowTemplateOperator region support"
feature_slug: "dataflowtemplateoperator-region-support"
latest_feature_date: "2019-05-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/launch-dataflow-pipelines"
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface"
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-database"
keywords:
  - "dataflowtemplateoperator"
  - "2715"
  - "backports"
  - "airflow"
  - "region"
---

# DataflowTemplateOperator region support

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer backports AIRFLOW-2715 to fix region support in DataflowTemplateOperator.

## Extended Definition

Cloud Composer backports AIRFLOW-2715 to fix region support in DataflowTemplateOperator.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/launch-dataflow-pipelines](https://docs.cloud.google.com/composer/docs/composer-1/launch-dataflow-pipelines)
- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface)
- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-database](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-database)

## Supporting Pages

### "Access the Airflow web interface \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface)
- Source ID: `site-iam-reference`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- Example: // PATCH https://composer.googleapis.com/v1/projects/example-project/ // locations/us-central1/environments/example-environment?updateMask= // config.webServerNetworkAccessControl { "config" : { "webServerNetworkAccessControl" : { "allowedIpRanges" : [ { "value" : "192.0.2.0/24" , "description" : "example range" }, { "value" : "192.0.4.0/24" , "description" : "example range 2" } ] } } } Terraform In the allowed ip range block, in the web server network access control specify IP ranges that can access web server. resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { web server network access control { allowed ip range { value = " WS IP RANGE " description = " WS RANGE DESCRIPTION " } } } } Replace the following: WS IP RANGE : the IP range, in the CIDR notation, that can access the Airflow UI.
- Example: resource "google composer environment" "example" { provider = google-beta name = "example-environment" region = "us-central1" config { web server network access control { allowed ip range { value = "192.0.2.0/24" description = "example range" }, allowed ip range { value = "192.0.4.0/24" description = "example range 2" } } } What's next Airflow UI Access Control Troubleshooting Airflow web server issues Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The webServerNetworkAccessControl element must be present, but must not contain an allowedIpRanges element. { "config" : { "webServerNetworkAccessControl" : { "allowedIpRanges" : [ { "value" : " WS IP RANGE " , "description" : " WS RANGE DESCRIPTION " } ] } } } Replace the following: WS IP RANGE : the IP range, in the CIDR notation, that can access the Airflow UI.
- To forbid access for all IP addresses, select Allow access only from specific IP addresses and click Delete item next to the empty range entry. gcloud When you update an environment, the following arguments control web server access parameters: --web-server-allow-all provides access to Airflow from all IP addresses.

### Launch Dataflow pipelines with Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/launch-dataflow-pipelines](https://docs.cloud.google.com/composer/docs/composer-1/launch-dataflow-pipelines)
- Source ID: `site-iam-reference`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- Learn more about the difference between the two here: https://cloud.google.com/compute/docs/regions-zones bucket path - Google Cloud Storage bucket where you've stored the User Defined Function (.js), the input file (.txt), and the JSON schema (.json). """ import datetime from airflow import models from airflow.contrib.operators.dataflow operator import DataflowTemplateOperator from airflow.utils.dates import days ago bucket path = "{{var.value.bucket path}}" project id = "{{var.value.project id}}" gce zone = "{{var.value.gce zone}}" default args = { Tell airflow to start one day ago, so that it runs as soon as you upload it "start date" : days ago ( 1 ), "dataflow default options" : { "project" : project id , Set to your zone "zone" : gce zone , This is a subfolder for storing temporary files, like the staged pipeline job. "tempLocation" : bucket path + "/tmp/" , }, } Define a DAG (directed acyclic graph) of tasks.
- For more information, see Set up authentication for a local development environment . def upload file bucket name :, local file path :, file name : nil The ID of your GCS bucket bucket name = "your-unique-bucket-name" The path to your file to upload local file path = "/local/path/to/file.txt" The ID of your GCS object file name = "your-file-name" require "google/cloud/storage" storage = Google :: Cloud :: Storage . new bucket = storage . bucket bucket name , skip lookup : true file = bucket . create file local file path , file name puts "Uploaded #{ local file path } as #{ file . name } in bucket #{ bucket name } " end Configure DataflowTemplateOperator Before running the DAG, set the following Airflow variables .
- DAG ( The id you will see in the DAG airflow page "composer dataflow dag" , default args = default args , The interval with which to schedule the DAG schedule interval = datetime . timedelta ( days = 1 ), # Override to match your needs ) as dag : start template job = DataflowTemplateOperator ( The task id of your job task id = "dataflow operator transform csv to bq" , The name of the template that you're using.
- For more info on zones where Dataflow is available see: https://cloud.google.com/dataflow/docs/resources/locations bucket path - Google Cloud Storage bucket where you've stored the User Defined Function (.js), the input file (.txt), and the JSON schema (.json). """ import datetime from airflow import models from airflow.providers.google.cloud.operators.dataflow import ( DataflowTemplatedJobStartOperator , ) from airflow.utils.dates import days ago bucket path = "{{var.value.bucket path}}" project id = "{{var.value.project id}}" gce zone = "{{var.value.gce zone}}" default args = { Tell airflow to start one day ago, so that it runs as soon as you upload it "start date" : days ago ( 1 ), "dataflow default options" : { "project" : project id , Set to your zone "zone" : gce zone , This is a subfolder for storing temporary files, like the staged pipeline job. "tempLocation" : bucket path + "/tmp/" , }, } Define a DAG (directed acyclic graph) of tasks.

### Access the Airflow database \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-database](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-database)
- Source ID: `site-iam-reference`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- Example: gcloud sql instances create example-instance \ --database-version = POSTGRES 15 \ --cpu = 2 \ --memory = 4GB \ --storage-size = 100GB \ --storage-auto-increase \ --region = us-central1 \ --root-password = example password Run the following command to create a database named airflow db : gcloud sql databases create airflow db \ --instance = SQL INSTANCE NAME Replace the following: SQL INSTANCE NAME : name of the Cloud SQL instance.
- Example: gcloud composer environments snapshots save \ example-environment \ --location us-central1 \ --snapshot-location "gs://example-bucket/environment snapshots" Example result: Response: '@type': type.googleapis.com/google.cloud.orchestration.airflow.service.v1.SaveSnapshotResponse snapshotPath: gs://example-bucket/environment snapshots/example-environment us-central1 2026-03-17T11-26-24 Prepare the destination database If you don't have a Cloud SQL instance, create one.
- DAG ( "airflow db connection example" , start date = datetime . datetime ( 2025 , 1 , 1 ), schedule = None , catchup = False ) as dag : SQLExecuteQueryOperator ( task id = "run airflow db query" , dag = dag , conn id = "airflow db" , database = SQL DATABASE , sql = "SELECT FROM dag LIMIT 10;" , ) For more information about using the SQLExecuteQueryOperator, see the How-to Guide for Postgres using SQLExecuteQueryOperator in the Airflow documentation.
- Example: gcloud sql import sql example-instance \ $( gcloud storage ls gs://example-bucket/environment snapshots/example-environment us-central1 2026-03-17T11-26-24/ .sql.gz ) \ --database = airflow db \ --user = postgres (Recommended) Revoke the bucket access after the import is complete We recommend revoking Cloud Storage bucket access permissions from the service account of your Cloud SQL instance after the import is completed.

