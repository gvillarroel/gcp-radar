---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:20.389Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer general availability"
feature_slug: "cloud-composer-general-availability"
latest_feature_date: "2018-07-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database"
  - "https://docs.cloud.google.com/composer/docs/latest/migrate-composer-1-to-3"
  - "https://docs.cloud.google.com/composer/docs/composer-1/create-environments"
  - "https://docs.cloud.google.com/composer/docs/composer-1/security-practices"
keywords:
  - "composer"
  - "general"
  - "availability"
  - "launched"
  - "as"
  - "generally"
  - "available"
---

# Cloud Composer general availability

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Launched Cloud Composer as generally available.

## Extended Definition

Launched Cloud Composer as generally available.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database](https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database)
- [https://docs.cloud.google.com/composer/docs/latest/migrate-composer-1-to-3](https://docs.cloud.google.com/composer/docs/latest/migrate-composer-1-to-3)
- [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- [https://docs.cloud.google.com/composer/docs/composer-1/security-practices](https://docs.cloud.google.com/composer/docs/composer-1/security-practices)

## Supporting Pages

### Clean up the Airflow database \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database](https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database)
- Source ID: `site-iam-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Put the DAG in your gcs bucket. """ from datetime import datetime , timedelta import logging import os import airflow from airflow import settings from airflow.jobs import BaseJob from airflow.models import ( DAG , DagModel , DagRun , Log , SlaMiss , TaskInstance , Variable , XCom , ) from airflow.operators.python operator import PythonOperator from airflow.version import version as airflow version import dateutil.parser from sqlalchemy import and , func from sqlalchemy.exc import ProgrammingError from sqlalchemy.orm import load only try : airflow.utils.timezone is available from v1.10 onwards from airflow.utils import timezone now = timezone . utcnow except ImportError : now = datetime . utcnow airflow-db-cleanup DAG ID = os . path . basename ( file ) . replace ( ".pyc" , "" ) . replace ( ".py" , "" ) START DATE = airflow . utils . dates . days ago ( 1 ) How often to Run. @daily - Once a day at Midnight (UTC) SCHEDULE INTERVAL = "@daily" Who is listed as the owner of this DAG in the Airflow Web Server DAG OWNER NAME = "operations" List of email address to send email alerts to if this job fails ALERT EMAIL ADDRESSES = [] Airflow version used by the environment in list form, value stored in airflow version is in format e.g "1.10.15+composer" AIRFLOW VERSION = airflow version [: - len ( "+composer" )] . split ( "." ) Length to retain the log files if not already provided in the conf.
- COMPOSER SUFFIX = "+composer" if version . endswith ( COMPOSER SUFFIX ): airflow version without suffix = version [: - len ( COMPOSER SUFFIX )] else : airflow version without suffix = version airflow version str = airflow version without suffix . split ( "." ) return tuple ([ int ( s ) for s in airflow version str ]) now = timezone . utcnow airflow-db-cleanup DAG ID = os . path . basename ( file ) . replace ( ".pyc" , "" ) . replace ( ".py" , "" ) START DATE = airflow . utils . dates . days ago ( 1 ) How often to Run. @daily - Once a day at Midnight (UTC).
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Clean up the Airflow database Stay organized with collections Save and categorize content based on your preferences.
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 This page explains how to maintain the Airflow database in your environment.

### "Migrate to Cloud Composer\_3 from Cloud Composer\_1 (Airflow 2) \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/latest/migrate-composer-1-to-3](https://docs.cloud.google.com/composer/docs/latest/migrate-composer-1-to-3)
- Source ID: `site-docs-reference`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- COMPOSER 3 LOCATION with the region where the environment is located. (Airflow versions 2.9.1 and later) If there are quota errors while unpausing a large number of DAGs, you can use the following Airflow CLI commands to unpause all DAGs at once: gcloud composer environments run COMPOSER 3 ENV dags unpause \ --project PROJECT ID \ --location COMPOSER 3 LOCATION \ -- -y --treat-dag-id-as-regex ". " (Airflow versions earlier than 2.9.1) If there are quota errors while unpausing a large number of DAGs, it's possible to unpause DAGs using the Airflow REST API .
- COMPOSER 1 LOCATION with the region where the environment is located. (Airflow versions 2.9.1 and later) If there are quota errors while pausing a large number of DAGs, you can use the following Airflow CLI commands to pause all DAGs at once: gcloud composer environments run COMPOSER 1 ENV dags pause \ --project PROJECT ID \ --location COMPOSER 1 LOCATION \ -- -y --treat-dag-id-as-regex ". " (Airflow versions earlier than 2.9.1) If there are quota errors while pausing a large number of DAGs, it's possible to pause DAGs using the Airflow REST API .
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Migrate to Cloud Composer 3 from Cloud Composer 1 (Airflow 2) Stay organized with collections Save and categorize content based on your preferences.
- If a DAG run was successful, don't unpause it in the Cloud Composer 1 environment; if you do so, a DAG run for the same time and date happens in your Cloud Composer 1 environment.

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- Source ID: `site-iam-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Example: gcloud composer environments create example-environment \ --location us-central1 \ --image-version composer-1.20.12-airflow-1.10.15 \ --service-account " example-account@example-project. iam.gserviceaccount.com " \ --zone us-central1-a \ --node-count 6 \ --scheduler-count 1 \ --disk-size 50 \ --machine-type n1-standard-2 \ --cloud-sql-machine-type db-n1-standard-2 \ --web-server-machine-type composer-n1-webserver-2 API When you create an environment, in the Environment > EnvironmentConfig resource, specify environment scale and performance parameters. { "name" : "projects/ PROJECT ID /locations/ LOCATION /environments/ ENVIRONMENT NAME " , "config" : { "nodeCount" : NODE COUNT , "nodeConfig" : { "machineType" : " NODE MACHINE TYPE " , "diskSizeGb" : DISK SIZE , "serviceAccount" : " SERVICE ACCOUNT " }, "softwareConfig" : { "schedulerCount" : SCHEDULER COUNT }, "databaseConfig" : { "machineType" : " SQL MACHINE TYPE " }, "webServerConfig" : { "machineType" : " WS MACHINE TYPE " } } } Replace: NODE COUNT with the number of nodes.
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "nodeCount" : 6 , "nodeConfig" : { "machineType" : "projects/example-project/zones/us-central1-a/machineTypes/n1-standard-2" , "diskSizeGb" : 50 , "serviceAccount" : " example-account@example-project. iam.gserviceaccount.com " }, "softwareConfig" : { "schedulerCount" : 1 }, "databaseConfig" : { "machineType" : "db-n1-standard-2" }, "webServerConfig" : { "machineType" : "composer-n1-webserver-2" } } } Terraform When you create an environment, following fields control environment scale and performance parameters: node count in the node config block specifies the number of nodes in your environment.
- Variable names may contain upper and lowercase letters, digits, and underscores, but they may not begin with a digit. airflow config overrides block in the software config block specifies Airflow configuration overrides. resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { software config { airflow config overrides = { SECTION - KEY = " OVERRIDE VALUE " } env variables = { VAR NAME = " VAR VALUE " } } node config { service account = " SERVICE ACCOUNT " } } } Replace: SECTION with the section in the configuration file where the Airflow configuration option is located.
- Example: resource "google composer environment" "example" { name = "example-environment" region = "us-central1" config { node config { node count = 4 disk size gb = 100 zone = "us-central1-a" machine type = "n1-standard-2" service account = " example-account@example-project . iam.gserviceaccount.com " } software config { scheduler count = 2 } database config { machine type = "db-n1-standard-2" } web server config { machine type = "composer-n1-webserver-2" } } } Step 4. (Optional) Configure your environment's networking Networking parameters depend on the type of environment that you want to create: Public IP environment .

### Security best practices \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/security-practices](https://docs.cloud.google.com/composer/docs/composer-1/security-practices)
- Source ID: `site-iam-reference`
- Final score: 128
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Security best practices Stay organized with collections Save and categorize content based on your preferences.
- To get more information about security features available in Cloud Composer, see Security overview .
- A DAG in a Cloud Composer environment has access to all tables in the Airflow database.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

