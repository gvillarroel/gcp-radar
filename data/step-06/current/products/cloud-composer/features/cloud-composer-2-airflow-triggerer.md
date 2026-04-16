---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:19.629Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer 2 Airflow triggerer"
feature_slug: "cloud-composer-2-airflow-triggerer"
latest_feature_date: "2022-11-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard"
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface"
  - "https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database"
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli"
keywords:
  - "composer"
  - "airflow"
  - "triggerer"
  - "now"
  - "offers"
  - "the"
  - "in"
  - "preview"
---

# Cloud Composer 2 Airflow triggerer

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer 2 now offers the Airflow triggerer in Preview, requiring Cloud Composer 2.0.31+ and Apache Airflow 2.2.5+.

## Extended Definition

Cloud Composer 2 now offers the Airflow triggerer in Preview, requiring Cloud Composer 2.0.31+ and Apache Airflow 2.2.5+.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard](https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard)
- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface)
- [https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database](https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database)
- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli)

## Supporting Pages

### Use the monitoring dashboard \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard](https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard)
- Source ID: `site-docs-root`
- Final score: 234
- Re-rank relevance: N/A

Evidence snippets:
- Access the monitoring dashboard The monitoring dashboard contains metrics and charts for monitoring trends in the DAG runs in your environment, and identifing issues with Airflow components and Cloud Composer resources.
- If an Airflow task instance is abnormally interrupted (for example, detected as a zombie), it will also remain unacknowledged until the visibility timeout is reached.
- Total triggerers disk usage The total usage of disk space by containers running in all Airflow triggerer pods, and the combined disk space limit for all triggerers.
- Total triggerers CPU usage The total usage of vCPU cores by containers running in all Airflow triggerer pods, and the combined vCPU limit for all triggerers.

### "Access the Airflow web interface \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface)
- Source ID: `site-iam-reference`
- Final score: 217
- Re-rank relevance: N/A

Evidence snippets:
- Example: // PATCH https://composer.googleapis.com/v1/projects/example-project/ // locations/us-central1/environments/example-environment?updateMask= // config.webServerNetworkAccessControl { "config" : { "webServerNetworkAccessControl" : { "allowedIpRanges" : [ { "value" : "192.0.2.0/24" , "description" : "example range" }, { "value" : "192.0.4.0/24" , "description" : "example range 2" } ] } } } Terraform In the allowed ip range block, in the web server network access control specify IP ranges that can access web server. resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { web server network access control { allowed ip range { value = " WS IP RANGE " description = " WS RANGE DESCRIPTION " } } } } Replace the following: WS IP RANGE : the IP range, in the CIDR notation, that can access the Airflow UI.
- Example: resource "google composer environment" "example" { provider = google-beta name = "example-environment" region = "us-central1" config { web server network access control { allowed ip range { value = "192.0.2.0/24" description = "example range" }, allowed ip range { value = "192.0.4.0/24" description = "example range 2" } } } What's next Airflow UI Access Control Troubleshooting Airflow web server issues Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To ensure that web server remains accessible regardless of DAG load time, you can configure asynchronous DAG loading to parse and load DAGs in the background at a pre-configured interval (available in composer-1.7.1-airflow-1.10.2 and later versions).
- To get the URL for the Airflow UI, run the following command in Google Cloud CLI: gcloud composer environments describe ENVIRONMENT NAME \ --location LOCATION Replace the following: ENVIRONMENT NAME : the name of your environment.

### Clean up the Airflow database \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database](https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database)
- Source ID: `site-iam-reference`
- Final score: 217
- Re-rank relevance: N/A

Evidence snippets:
- Put the DAG in your gcs bucket. """ from datetime import datetime , timedelta import logging import os import airflow from airflow import settings from airflow.jobs import BaseJob from airflow.models import ( DAG , DagModel , DagRun , Log , SlaMiss , TaskInstance , Variable , XCom , ) from airflow.operators.python operator import PythonOperator from airflow.version import version as airflow version import dateutil.parser from sqlalchemy import and , func from sqlalchemy.exc import ProgrammingError from sqlalchemy.orm import load only try : airflow.utils.timezone is available from v1.10 onwards from airflow.utils import timezone now = timezone . utcnow except ImportError : now = datetime . utcnow airflow-db-cleanup DAG ID = os . path . basename ( file ) . replace ( ".pyc" , "" ) . replace ( ".py" , "" ) START DATE = airflow . utils . dates . days ago ( 1 ) How often to Run. @daily - Once a day at Midnight (UTC) SCHEDULE INTERVAL = "@daily" Who is listed as the owner of this DAG in the Airflow Web Server DAG OWNER NAME = "operations" List of email address to send email alerts to if this job fails ALERT EMAIL ADDRESSES = [] Airflow version used by the environment in list form, value stored in airflow version is in format e.g "1.10.15+composer" AIRFLOW VERSION = airflow version [: - len ( "+composer" )] . split ( "." ) Length to retain the log files if not already provided in the conf.
- Using Default '" + str ( DEFAULT MAX DB ENTRY AGE IN DAYS ) + "'" ) max db entry age in days = DEFAULT MAX DB ENTRY AGE IN DAYS max date = now () + timedelta ( - max db entry age in days ) logging . info ( "Finished Loading Configurations" ) logging . info ( "" ) logging . info ( "Configurations:" ) logging . info ( "max db entry age in days: " + str ( max db entry age in days )) logging . info ( "max date: " + str ( max date )) logging . info ( "enable delete: " + str ( ENABLE DELETE )) logging . info ( "" ) logging . info ( "Setting max execution date to XCom for Downstream Processes" ) context [ "ti" ] . xcom push ( key = "max date" , value = max date . isoformat ()) print configuration = PythonOperator ( task id = "print configuration" , python callable = print configuration function , provide context = True , dag = dag , ) def build query ( session , airflow db model , age check column , max date , keep last , keep last filters = None , keep last group by = None , ): query = session . query ( airflow db model ) . options ( load only ( age check column )) logging . info ( "INITIAL QUERY : " + str ( query )) if not keep last : query = query . filter ( age check column < = max date , ) else : subquery = session . query ( func . max ( DagRun . execution date )) workaround for MySQL "table specified twice" issue https://github.com/teamclairvoyant/airflow-maintenance-dags/issues/41 if keep last filters is not None : for entry in keep last filters : subquery = subquery . filter ( entry ) logging . info ( "SUB QUERY [keep last filters]: " + str ( subquery )) if keep last group by is not None : subquery = subquery . group by ( keep last group by ) logging . info ( "SUB QUERY [keep last group by]: " + str ( subquery )) subquery = subquery . from self () query = query . filter ( and ( age check column . notin ( subquery )), and ( age check column < = max date ) ) return query def print query ( query , airflow db model , age check column ): entries to delete = query . all () logging . info ( "Query: " + str ( query )) logging . info ( "Process will be Deleting the following " + str ( airflow db model . name ) + "(s):" ) for entry in entries to delete : date = str ( entry . dict [ str ( age check column ) . split ( "." )[ 1 ]]) logging . info ( " \t Entry: " + str ( entry ) + ", Date: " + date ) logging . info ( "Process will be Deleting " + str ( len ( entries to delete )) + " " + str ( airflow db model . name ) + "(s)" ) def cleanup function ( context ): session = settings .
- COMPOSER SUFFIX = "+composer" if version . endswith ( COMPOSER SUFFIX ): airflow version without suffix = version [: - len ( COMPOSER SUFFIX )] else : airflow version without suffix = version airflow version str = airflow version without suffix . split ( "." ) return tuple ([ int ( s ) for s in airflow version str ]) now = timezone . utcnow airflow-db-cleanup DAG ID = os . path . basename ( file ) . replace ( ".pyc" , "" ) . replace ( ".py" , "" ) START DATE = airflow . utils . dates . days ago ( 1 ) How often to Run. @daily - Once a day at Midnight (UTC).
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 This page explains how to maintain the Airflow database in your environment.

### "Access Airflow command-line interface \_|\_ Cloud Composer \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli)
- Source ID: `site-iam-reference`
- Final score: 207
- Re-rank relevance: N/A

Evidence snippets:
- For example, to trigger a DAG named sample quickstart with the ID 5077 in your Cloud Composer environment: Airflow 2 gcloud composer environments run example-environment \ --location us-central1 dags trigger -- sample quickstart \ --run-id = 5077 Airflow 1 gcloud composer environments run example-environment \ --location us-central1 trigger dag -- sample quickstart \ --run id = 5077 What's next Access Airflow UI Access control (Airflow CLI) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Run Airflow CLI commands with gcloud CLI To run Airflow CLI commands in your environments, use gcloud CLI: gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ SUBCOMMAND \ -- SUBCOMMAND ARGUMENTS Replace the following: ENVIRONMENT NAME : the name of your environment.
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 Apache Airflow has a command-line interface (CLI) that you can use to perform tasks such as triggering and managing DAGs, getting information about DAG runs and tasks, adding and deleting connections and users.
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Access Airflow command-line interface Stay organized with collections Save and categorize content based on your preferences.

