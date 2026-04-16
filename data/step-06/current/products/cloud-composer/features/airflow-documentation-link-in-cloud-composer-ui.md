---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:20.379Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Airflow documentation link in Cloud Composer UI"
feature_slug: "airflow-documentation-link-in-cloud-composer-ui"
latest_feature_date: "2018-07-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/install-plugins"
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface"
  - "https://docs.cloud.google.com/composer/docs/composer-1/launch-dataflow-pipelines"
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli"
keywords:
  - "airflow"
  - "documentation"
  - "link"
  - "in"
  - "composer"
  - "ui"
  - "corrected"
  - "the"
---

# Airflow documentation link in Cloud Composer UI

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Corrected the Airflow documentation link shown in the Cloud Composer web interface.

## Extended Definition

Corrected the Airflow documentation link shown in the Cloud Composer web interface.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/install-plugins](https://docs.cloud.google.com/composer/docs/composer-1/install-plugins)
- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface)
- [https://docs.cloud.google.com/composer/docs/composer-1/launch-dataflow-pipelines](https://docs.cloud.google.com/composer/docs/composer-1/launch-dataflow-pipelines)
- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli)

## Supporting Pages

### Install custom plugins \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/install-plugins](https://docs.cloud.google.com/composer/docs/composer-1/install-plugins)
- Source ID: `site-iam-reference`
- Final score: 291
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Install custom plugins Stay organized with collections Save and categorize content based on your preferences.
- Troubleshoot plugin issues A newly-uploaded plugin is not visible in Airflow UI If you use Airflow UI Access Control then the newly uploaded plugin might not be visible in Airflow UI.
- To address this issue, ask Airflow UI Administrator to configure access to the newly uploaded plugin or assign yourself the Admin role in Airflow UI.
- For more information, see custom plugins in the Airflow documentation.

### "Access the Airflow web interface \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface)
- Source ID: `site-iam-reference`
- Final score: 275
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Access the Airflow web interface Stay organized with collections Save and categorize content based on your preferences.
- Example: // PATCH https://composer.googleapis.com/v1/projects/example-project/ // locations/us-central1/environments/example-environment?updateMask= // config.webServerNetworkAccessControl { "config" : { "webServerNetworkAccessControl" : { "allowedIpRanges" : [ { "value" : "192.0.2.0/24" , "description" : "example range" }, { "value" : "192.0.4.0/24" , "description" : "example range 2" } ] } } } Terraform In the allowed ip range block, in the web server network access control specify IP ranges that can access web server. resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { web server network access control { allowed ip range { value = " WS IP RANGE " description = " WS RANGE DESCRIPTION " } } } } Replace the following: WS IP RANGE : the IP range, in the CIDR notation, that can access the Airflow UI.
- Example: resource "google composer environment" "example" { provider = google-beta name = "example-environment" region = "us-central1" config { web server network access control { allowed ip range { value = "192.0.2.0/24" description = "example range" }, allowed ip range { value = "192.0.4.0/24" description = "example range 2" } } } What's next Airflow UI Access Control Troubleshooting Airflow web server issues Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To get the URL for the Airflow UI, run the following command in Google Cloud CLI: gcloud composer environments describe ENVIRONMENT NAME \ --location LOCATION Replace the following: ENVIRONMENT NAME : the name of your environment.

### Launch Dataflow pipelines with Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/launch-dataflow-pipelines](https://docs.cloud.google.com/composer/docs/composer-1/launch-dataflow-pipelines)
- Source ID: `site-iam-reference`
- Final score: 263
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For versions in non-production environments, use the subfolder 'latest' https://cloud.google.com/dataflow/docs/guides/templates/provided-batch#gcstexttobigquery template = "gs://dataflow-templates/latest/GCS Text to BigQuery" , Use the link above to specify the correct parameters for your template. parameters = { "javascriptTextTransformFunctionName" : "transformCSVtoJSON" , "JSONPath" : bucket path + "/jsonSchema.json" , "javascriptTextTransformGcsPath" : bucket path + "/transformCSVtoJSON.js" , "inputFilePattern" : bucket path + "/inputFile.txt" , "outputTable" : project id + ":average weather.average weather" , "bigQueryLoadingTemporaryDirectory" : bucket path + "/tmp/" , }, ) Airflow 1 """Example Airflow DAG that creates a Cloud Dataflow workflow which takes a text file and adds the rows to a BigQuery table.
- Enable the APIs Make sure that you have the following permissions: Cloud Composer roles : create an environment (if you don't have one), manage objects in the environment's bucket, Run DAGs and access the Airflow UI.
- For versions in non-production environments, use the subfolder 'latest' https://cloud.google.com/dataflow/docs/guides/templates/provided-batch#gcstexttobigquery template = "gs://dataflow-templates/latest/GCS Text to BigQuery" , Use the link above to specify the correct parameters for your template. parameters = { "javascriptTextTransformFunctionName" : "transformCSVtoJSON" , "JSONPath" : bucket path + "/jsonSchema.json" , "javascriptTextTransformGcsPath" : bucket path + "/transformCSVtoJSON.js" , "inputFilePattern" : bucket path + "/inputFile.txt" , "outputTable" : project id + ":average weather.average weather" , "bigQueryLoadingTemporaryDirectory" : bucket path + "/tmp/" , }, ) Upload the DAG to Cloud Storage Upload your DAG to the /dags folder in your environment's bucket.
- For more information, see Set up authentication for a local development environment . def upload file bucket name :, local file path :, file name : nil The ID of your GCS bucket bucket name = "your-unique-bucket-name" The path to your file to upload local file path = "/local/path/to/file.txt" The ID of your GCS object file name = "your-file-name" require "google/cloud/storage" storage = Google :: Cloud :: Storage . new bucket = storage . bucket bucket name , skip lookup : true file = bucket . create file local file path , file name puts "Uploaded #{ local file path } as #{ file . name } in bucket #{ bucket name } " end Configure DataflowTemplateOperator Before running the DAG, set the following Airflow variables .

### "Access Airflow command-line interface \_|\_ Cloud Composer \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli)
- Source ID: `site-iam-reference`
- Final score: 256
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, to trigger a DAG named sample quickstart with the ID 5077 in your Cloud Composer environment: Airflow 2 gcloud composer environments run example-environment \ --location us-central1 dags trigger -- sample quickstart \ --run-id = 5077 Airflow 1 gcloud composer environments run example-environment \ --location us-central1 trigger dag -- sample quickstart \ --run id = 5077 What's next Access Airflow UI Access control (Airflow CLI) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Access Airflow command-line interface Stay organized with collections Save and categorize content based on your preferences.
- Run Airflow CLI commands with gcloud CLI To run Airflow CLI commands in your environments, use gcloud CLI: gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ SUBCOMMAND \ -- SUBCOMMAND ARGUMENTS Replace the following: ENVIRONMENT NAME : the name of your environment.
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 Apache Airflow has a command-line interface (CLI) that you can use to perform tasks such as triggering and managing DAGs, getting information about DAG runs and tasks, adding and deleting connections and users.

