---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:20.288Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer regional availability in Salt Lake City (us-west3)"
feature_slug: "cloud-composer-regional-availability-in-salt-lake-city-us-west3"
latest_feature_date: "2020-04-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/install-plugins"
  - "https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard"
  - "https://docs.cloud.google.com/composer/docs/composer-1/launch-dataflow-pipelines"
  - "https://docs.cloud.google.com/composer/docs/gcloud-installation"
keywords:
  - "composer"
  - "regional"
  - "availability"
  - "in"
  - "salt"
  - "lake"
  - "city"
  - "us"
---

# Cloud Composer regional availability in Salt Lake City (us-west3)

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer became available in the Salt Lake City (us-west3) region.

## Extended Definition

Cloud Composer became available in the Salt Lake City (us-west3) region.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/install-plugins](https://docs.cloud.google.com/composer/docs/composer-1/install-plugins)
- [https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard](https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard)
- [https://docs.cloud.google.com/composer/docs/composer-1/launch-dataflow-pipelines](https://docs.cloud.google.com/composer/docs/composer-1/launch-dataflow-pipelines)
- [https://docs.cloud.google.com/composer/docs/gcloud-installation](https://docs.cloud.google.com/composer/docs/gcloud-installation)

## Supporting Pages

### Install custom plugins \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/install-plugins](https://docs.cloud.google.com/composer/docs/composer-1/install-plugins)
- Source ID: `site-iam-reference`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- For more information about deleting objects, see Deleting objects . gcloud Use the following gcloud command: gcloud composer environments storage plugins delete \ --environment ENVIRONMENT NAME \ --location LOCATION \ PLUGIN TO DELETE Download plugins To download plugins, choose an option: Console In the Google Cloud console, go to the Environments page.
- For more information about deleting objects, see Downloading objects . gcloud Use the following gcloud command: gcloud composer environments storage plugins export \ --environment ENVIRONMENT NAME \ --location LOCATION \ --destination PATH TO LOCAL DESTINATION \ --source PATH IN FOLDER Replace: ENVIRONMENT NAME with the name of the environment.
- For more information about uploading objects, see Uploading objects . gcloud Use the following gcloud command: gcloud composer environments storage plugins import \ --environment ENVIRONMENT NAME \ --location LOCATION \ --source PATH TO LOCAL FILE \ --destination PATH IN SUBFOLDER Replace: ENVIRONMENT NAME with the name of the environment.
- View the plugin files. gcloud Use the following gcloud command: gcloud composer environments storage plugins list \ --environment ENVIRONMENT NAME \ --location LOCATION Replace: ENVIRONMENT NAME with the name of the environment.

### Use the monitoring dashboard \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard](https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Data analytics Cloud Composer Composer 3 Guides Send feedback Use the monitoring dashboard Stay organized with collections Save and categorize content based on your preferences.
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 This page describes how to access and use the monitoring dashboard for a Cloud Composer environment.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- What's next Monitor Cloud Composer environments Troubleshooting scheduling Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Launch Dataflow pipelines with Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/launch-dataflow-pipelines](https://docs.cloud.google.com/composer/docs/composer-1/launch-dataflow-pipelines)
- Source ID: `site-iam-reference`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- If the destination object already exists in your bucket, set instead a generation-match precondition using its generation number. generation match precondition = 0 blob . upload from filename ( source file name , if generation match = generation match precondition ) print ( f "File { source file name } uploaded to { destination blob name } ." ) Ruby To authenticate to Cloud Composer, set up Application Default Credentials.
- DAG ( The id you will see in the DAG airflow page "composer dataflow dag" , default args = default args , The interval with which to schedule the DAG schedule interval = datetime . timedelta ( days = 1 ), # Override to match your needs ) as dag : start template job = DataflowTemplatedJobStartOperator ( The task id of your job task id = "dataflow operator transform csv to bq" , The name of the template that you're using.
- DAG ( The id you will see in the DAG airflow page "composer dataflow dag" , default args = default args , The interval with which to schedule the DAG schedule interval = datetime . timedelta ( days = 1 ), # Override to match your needs ) as dag : start template job = DataflowTemplateOperator ( The task id of your job task id = "dataflow operator transform csv to bq" , The name of the template that you're using.
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 This page describes how to use the DataflowTemplateOperator to launch Dataflow pipelines from Cloud Composer.

### Using Google Cloud CLI with Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/gcloud-installation](https://docs.cloud.google.com/composer/docs/gcloud-installation)
- Source ID: `site-docs-reference`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configure the Cloud Composer location by running the following command: gcloud config set composer/location LOCATION Replace the following: LOCATION : the region where the environment is located, such as us-central1 or europe-west1 . (Optional) To list the configuration for Google Cloud CLI, you can run the following command: gcloud config list What's next Add and update Airflow DAGs gcloud composer reference gcloud beta composer reference Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- You can get help for the tool, resources, and commands by using the --help flag: gcloud composer environments --help The help displayed with the --help flag is also available in the Google Cloud CLI reference for gcloud composer .
- Home Documentation Data analytics Cloud Composer Reference Send feedback Using Google Cloud CLI with Cloud Composer Stay organized with collections Save and categorize content based on your preferences.
- Before you begin Google Cloud CLI uses Cloud Composer API to run gcloud composer commands, so you must enable the API .

