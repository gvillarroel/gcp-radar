---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:34:19.260Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Airflow CLI via Cloud Composer API"
feature_slug: "airflow-cli-via-cloud-composer-api"
latest_feature_date: "2023-08-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli"
  - "https://docs.cloud.google.com/composer/docs/latest/schedule-and-trigger-dags"
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api"
keywords:
  - "airflow"
  - "cli"
  - "via"
  - "composer"
  - "lets"
  - "you"
  - "run"
  - "commands"
---

# Airflow CLI via Cloud Composer API

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer lets you run Airflow CLI commands through the Cloud Composer API.

## Extended Definition

Cloud Composer lets you run Airflow CLI commands through the Cloud Composer API.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli)
- [https://docs.cloud.google.com/composer/docs/latest/schedule-and-trigger-dags](https://docs.cloud.google.com/composer/docs/latest/schedule-and-trigger-dags)
- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api)

## Supporting Pages

### "Access Airflow command-line interface \_|\_ Cloud Composer \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli)
- Source ID: `site-iam-reference`
- Final score: 101
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Run Airflow CLI commands with gcloud CLI To run Airflow CLI commands in your environments, use gcloud CLI: gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ SUBCOMMAND \ -- SUBCOMMAND ARGUMENTS Replace the following: ENVIRONMENT NAME : the name of your environment.
- Supported Airflow CLI commands Airflow in Cloud Composer 1 provides two different syntaxes for CLI commands: Airflow 1.10 CLI syntax , available in Cloud Composer environments with Airflow 1.10.
- Before you begin For executing Airflow CLI commands through Google Cloud CLI: Your Google Account must have permissions to use Google Cloud CLI with Cloud Composer and run Airflow CLI commands.
- Example: gcloud composer environments run example-environment \ dags list -- --output = json Airflow 1 Specify CLI commands as a sub-command.

### "Schedule and trigger Airflow DAGs \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/latest/schedule-and-trigger-dags](https://docs.cloud.google.com/composer/docs/latest/schedule-and-trigger-dags)
- Source ID: `site-docs-root`
- Final score: 91
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about the available Airflow CLI commands, see the gcloud composer environments run command reference .
- For more information about the available Airflow CLI commands, see the gcloud composer environments run command reference .
- For more information about running Airflow CLI commands in Cloud Composer environments, see Running Airflow CLI commands .
- For more information about running Airflow CLI commands in Cloud Composer environments, see Running Airflow CLI commands .

### Access the Airflow REST API \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api)
- Source ID: `site-iam-reference`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Click Save . gcloud Note: In Cloud Composer environments with Airflow 1, you cannot run Airflow CLI commands that create users through gcloud .
- AuthorizedSession ( credentials ) project id = 'YOUR PROJECT ID' location = 'us-central1' composer environment = 'YOUR COMPOSER ENVIRONMENT NAME' environment url = ( "https://composer.googleapis.com/v1beta1/projects/ {} /locations/ {} " "/environments/ {} " ) . format ( project id , location , composer environment ) composer response = authed session . request ( "GET" , environment url ) environment data = composer response . json () composer version = environment data [ "config" ][ "softwareConfig" ][ "imageVersion" ] if "composer-1" not in composer version : version error = ( "This script is intended to be used with Composer 1 environments. " "In Composer 2, the Airflow Webserver is not in the tenant project, " "so there is no tenant client ID. " "See https://cloud.google.com/composer/docs/composer-2/environment-architecture for more details." ) raise ( RuntimeError ( version error )) airflow uri = environment data [ "config" ][ "airflowUri" ] The Composer environment response does not include the IAP client ID.
- The USE EXPERIMENTAL API variable is already set to True . from google.auth.transport.requests import Request from google.oauth2 import id token import requests IAM SCOPE = "https://www.googleapis.com/auth/iam" OAUTH TOKEN URI = "https://www.googleapis.com/oauth2/v4/token" If you are using the stable API, set this value to False For more info about Airflow APIs see https://cloud.google.com/composer/docs/access-airflow-api USE EXPERIMENTAL API = True def trigger dag ( data , context = None ): """Makes a POST request to the Composer DAG Trigger API When called via Google Cloud Functions (GCF), data and context are Background function parameters.
- You can enable or disable the stable REST API, or change the default user role by overriding the following Airflow configuration options: Section Key Value Notes api (Airflow 2.2.5 and earlier) auth backend (Airflow 2.3.0 and later) auth backends airflow.composer.api.backend.composer auth To disable the stable REST API, change to airflow.api.auth.backend.deny all api composer auth user registration role Op You can specify any other role .

