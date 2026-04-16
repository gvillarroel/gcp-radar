---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:19.388Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer maintenance windows configuration"
feature_slug: "cloud-composer-maintenance-windows-configuration"
latest_feature_date: "2023-09-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/known-issues"
  - "https://docs.cloud.google.com/composer/docs/composer-1/create-environments"
  - "https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database"
  - "https://docs.cloud.google.com/composer/docs/latest/create-environments"
keywords:
  - "composer"
  - "maintenance"
  - "windows"
  - "configuration"
  - "of"
  - "is"
  - "now"
  - "generally"
---

# Cloud Composer maintenance windows configuration

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Configuration of maintenance windows is now generally available in Cloud Composer.

## Extended Definition

Configuration of maintenance windows is now generally available in Cloud Composer.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- [https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database](https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database)
- [https://docs.cloud.google.com/composer/docs/latest/create-environments](https://docs.cloud.google.com/composer/docs/latest/create-environments)

## Supporting Pages

### Known issues \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- Source ID: `site-iam-reference`
- Final score: 246
- Re-rank relevance: N/A

Evidence snippets:
- Add the cloud-airflow-prod@system.gserviceaccount.com service account as the member of your security perimeter by using the following configuration in the YAML conditions file: - members : - serviceAccount:cloud-airflow-prod@ system.gserviceaccount.com Cloud Composer 1 environment creation fails when the compute.requireOsLogin policy is enabled If compute.requireOsLogin policy is set to true in your project, then Cloud Composer 1 v1 environment creation operations fails.
- If you encounter this issue in Airflow 1 in a long-running task, increase the value of the [celery broker transport options]visibility timeout Airflow configuration option (the default value is 604800 for Composer 1.17.0, 21600 for older environments).
- In the meantime, if you believe that you are highly impacted by this issue you can do the following to mitigate it: In Google Cloud console, go to the Environment Configuration page of the impacted Cloud Composer environments.
- Only the following list of Non-RFC 1918 ranges is supported in Cloud Composer: 100.64.0.0/10 192.0.0.0/24 192.0.2.0/24 192.88.99.0/24 198.18.0.0/15 198.51.100.0/24 203.0.113.0/24 240.0.0.0/4 Airflow UI does not show tasks logs when DAG Serialization is on in Composer 1.10.2 and Composer 1.10.3 Enabling DAG serialization in environments using Composer versions 1.10.2 and 1.10.3 prevents logs from showing in the Airflow web server.

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- Source ID: `site-iam-reference`
- Final score: 219
- Re-rank relevance: N/A

Evidence snippets:
- Example: gcloud composer environments create example-environment \ --location us-central1 \ --image-version composer-1.20.12-airflow-1.10.15 \ --service-account " example-account@example-project. iam.gserviceaccount.com " \ --env-variables SENDGRID MAIL FROM = user@example.com,SENDGRID API KEY = example-key \ --airflow-configs core-dags are paused at creation = True,webserver-dag orientation = TB API When you create an environment, in the Environment > EnvironmentConfig resource, specify environment variables and Airflow configuration overrides. { "name" : "projects/ PROJECT ID /locations/ LOCATION /environments/ ENVIRONMENT NAME " , "config" : { "softwareConfig" : { "airflowConfigOverrides" : { " SECTION - KEY " : " OVERRIDE VALUE " }, "envVariables" : { " VAR NAME " : " VAR VALUE " , } }, "nodeConfig" : { "serviceAccount" : " SERVICE ACCOUNT " } } } Replace: SECTION with the section in the configuration file where the Airflow configuration option is located.
- The 1 January, 2023 date is ignored. gcloud composer environments create example-environment \ --location us-central1 \ --image-version composer-1.20.12-airflow-1.10.15 \ --service-account " example-account@example-project. iam.gserviceaccount.com " \ --maintenance-window-start '2023-01-01T01:00:00Z' \ --maintenance-window-end '2023-01-01T07:00:00Z' \ --maintenance-window-recurrence 'FREQ=WEEKLY;BYDAY=SU,WE,SA' API When you create an environment, in the Environment > EnvironmentConfig resource, specify maintenance windows parameters: { "name" : "projects/ PROJECT ID /locations/ LOCATION /environments/ ENVIRONMENT NAME " , "config" : { "maintenanceWindow" : { "startTime" : " DATETIME START " , "endTime" : " DATETIME END " , "recurrence" : " MAINTENANCE RECURRENCE " }, "nodeConfig" : { "serviceAccount" : " SERVICE ACCOUNT " } } } Replace: DATETIME START with the start date and time in the date/time input format .
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "maintenanceWindow" : { "startTime" : "2023-01-01T01:00:00Z" , "endTime" : "2023-01-01T07:00:00Z" , "recurrence" : "FREQ=WEEKLY;BYDAY=SU,WE,SA" }, "nodeConfig" : { "serviceAccount" : " SERVICE ACCOUNT " } } } Terraform The maintenance window block specifies the maintenance windows for your environment: resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { maintenance window { start time = " DATETIME START " end time = " DATETIME END " recurrence = " MAINTENANCE RECURRENCE " } node config { service account = " SERVICE ACCOUNT " } } } Replace: DATETIME START with the start date and time in the date/time input format .
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "softwareConfig" : { "imageVersion" : "composer-1.20.12-airflow-1.10.15" }, "nodeConfig" : { "serviceAccount" : " example-account@example-project. iam.gserviceaccount.com " } } } Terraform To create an environment with default parameters is a specified location, add the following resource block to your Terraform configuration and run terraform apply . resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { software config { image version = " IMAGE VERSION " } node config { service account = " SERVICE ACCOUNT " } } } Important: You must specify an image version for Cloud Composer 1.

### Clean up the Airflow database \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database](https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database)
- Source ID: `site-iam-reference`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- Using Default '" + str ( DEFAULT MAX DB ENTRY AGE IN DAYS ) + "'" ) max db entry age in days = DEFAULT MAX DB ENTRY AGE IN DAYS max date = now () + timedelta ( - max db entry age in days ) logging . info ( "Finished Loading Configurations" ) logging . info ( "" ) logging . info ( "Configurations:" ) logging . info ( "max db entry age in days: " + str ( max db entry age in days )) logging . info ( "max date: " + str ( max date )) logging . info ( "enable delete: " + str ( ENABLE DELETE )) logging . info ( "" ) logging . info ( "Setting max execution date to XCom for Downstream Processes" ) context [ "ti" ] . xcom push ( key = "max date" , value = max date . isoformat ()) print configuration = PythonOperator ( task id = "print configuration" , python callable = print configuration function , provide context = True , dag = dag , ) def build query ( session , airflow db model , age check column , max date , keep last , keep last filters = None , keep last group by = None , ): query = session . query ( airflow db model ) . options ( load only ( age check column )) logging . info ( "INITIAL QUERY : " + str ( query )) if not keep last : query = query . filter ( age check column < = max date , ) else : subquery = session . query ( func . max ( DagRun . execution date )) workaround for MySQL "table specified twice" issue https://github.com/teamclairvoyant/airflow-maintenance-dags/issues/41 if keep last filters is not None : for entry in keep last filters : subquery = subquery . filter ( entry ) logging . info ( "SUB QUERY [keep last filters]: " + str ( subquery )) if keep last group by is not None : subquery = subquery . group by ( keep last group by ) logging . info ( "SUB QUERY [keep last group by]: " + str ( subquery )) subquery = subquery . from self () query = query . filter ( and ( age check column . notin ( subquery )), and ( age check column < = max date ) ) return query def print query ( query , airflow db model , age check column ): entries to delete = query . all () logging . info ( "Query: " + str ( query )) logging . info ( "Process will be Deleting the following " + str ( airflow db model . name ) + "(s):" ) for entry in entries to delete : date = str ( entry . dict [ str ( age check column ) . split ( "." )[ 1 ]]) logging . info ( " \t Entry: " + str ( entry ) + ", Date: " + date ) logging . info ( "Process will be Deleting " + str ( len ( entries to delete )) + " " + str ( airflow db model . name ) + "(s)" ) def cleanup function ( context ): session = settings .
- Put the DAG in your gcs bucket. """ from datetime import datetime , timedelta import logging import os import airflow from airflow import settings from airflow.jobs import BaseJob from airflow.models import ( DAG , DagModel , DagRun , Log , SlaMiss , TaskInstance , Variable , XCom , ) from airflow.operators.python operator import PythonOperator from airflow.version import version as airflow version import dateutil.parser from sqlalchemy import and , func from sqlalchemy.exc import ProgrammingError from sqlalchemy.orm import load only try : airflow.utils.timezone is available from v1.10 onwards from airflow.utils import timezone now = timezone . utcnow except ImportError : now = datetime . utcnow airflow-db-cleanup DAG ID = os . path . basename ( file ) . replace ( ".pyc" , "" ) . replace ( ".py" , "" ) START DATE = airflow . utils . dates . days ago ( 1 ) How often to Run. @daily - Once a day at Midnight (UTC) SCHEDULE INTERVAL = "@daily" Who is listed as the owner of this DAG in the Airflow Web Server DAG OWNER NAME = "operations" List of email address to send email alerts to if this job fails ALERT EMAIL ADDRESSES = [] Airflow version used by the environment in list form, value stored in airflow version is in format e.g "1.10.15+composer" AIRFLOW VERSION = airflow version [: - len ( "+composer" )] . split ( "." ) Length to retain the log files if not already provided in the conf.
- Using Default '" + str ( DEFAULT MAX DB ENTRY AGE IN DAYS ) + "'" ) max db entry age in days = DEFAULT MAX DB ENTRY AGE IN DAYS max date = now () + timedelta ( - max db entry age in days ) logging . info ( "Finished Loading Configurations" ) logging . info ( "" ) logging . info ( "Configurations:" ) logging . info ( "max db entry age in days: " + str ( max db entry age in days )) logging . info ( "max date: " + str ( max date )) logging . info ( "enable delete: " + str ( ENABLE DELETE )) logging . info ( "" ) logging . info ( "Setting max execution date to XCom for Downstream Processes" ) context [ "ti" ] . xcom push ( key = "max date" , value = max date . isoformat ()) print configuration = PythonOperator ( task id = "print configuration" , python callable = print configuration function , provide context = True , dag = dag , ) def build query ( session , airflow db model , age check column , max date , dag id = None ): """ Build a database query to retrieve and filter Airflow data.
- Session () session . execute ( "ANALYZE" ) session . commit () session . close () analyze op = PythonOperator ( task id = "analyze query" , python callable = analyze db , provide context = True , dag = dag ) cleanup session op = PythonOperator ( task id = "cleanup sessions" , python callable = cleanup sessions , provide context = True , dag = dag , ) cleanup session op . set downstream ( analyze op ) for db object in DATABASE OBJECTS : cleanup op = PythonOperator ( task id = "cleanup " + str ( db object [ "airflow db model" ] . name ), python callable = cleanup function , params = db object , provide context = True , dag = dag , ) print configuration . set downstream ( cleanup op ) cleanup op . set downstream ( analyze op ) If your environment uses Airflow 1, use the following DAG instead: """ A maintenance workflow that you can deploy into Airflow to periodically clean out the DagRun, TaskInstance, Log, XCom, Job DB and SlaMiss entries to avoid having too much data in your Airflow MetaStore.

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/latest/create-environments](https://docs.cloud.google.com/composer/docs/latest/create-environments)
- Source ID: `site-docs-root`
- Final score: 201
- Re-rank relevance: N/A

Evidence snippets:
- Example: resource "google composer environment" "example" { provider = google-beta name = "example-environment" region = "us-central1" config { software config { airflow config overrides = { core-dags are paused at creation = "True" webserver-dag orientation = "TB" } env variables = { SENDGRID MAIL FROM = "user@example.com" SENDGRID API KEY = "example-key" } } node config { service account = " example-account@example-project . iam.gserviceaccount.com " } } } Step 10. (Optional) Specify maintenance windows Default maintenance windows in Cloud Composer 3 are defined in the following way: All times are in the local time zone of the region where your environment is located, but with daylight saving time ignored.
- Example: gcloud composer environments create example-environment \ --location us-central1 \ --image-version composer-3-airflow-2.10.5-build.33 \ --service-account " example-account@example-project. iam.gserviceaccount.com " \ --env-variables SENDGRID MAIL FROM = user@example.com,SENDGRID API KEY = example-key \ --airflow-configs core-dags are paused at creation = True,webserver-dag orientation = TB API When you create an environment, in the Environment > EnvironmentConfig resource, specify environment variables and Airflow configuration overrides. { "name" : "projects/ PROJECT ID /locations/ LOCATION /environments/ ENVIRONMENT NAME " , "config" : { "softwareConfig" : { "airflowConfigOverrides" : { " SECTION - KEY " : " OVERRIDE VALUE " }, "envVariables" : { " VAR NAME " : " VAR VALUE " , } }, "nodeConfig" : { "serviceAccount" : " SERVICE ACCOUNT " } } } Replace: SECTION with the section in the configuration file where the Airflow configuration option is located.
- The 1 January, 2023 date is ignored. gcloud composer environments create example-environment \ --location us-central1 \ --image-version composer-3-airflow-2.10.5-build.33 \ --service-account " example-account@example-project. iam.gserviceaccount.com " \ --maintenance-window-start '2023-01-01T01:00:00Z' \ --maintenance-window-end '2023-01-01T07:00:00Z' \ --maintenance-window-recurrence 'FREQ=WEEKLY;BYDAY=SU,WE,SA' API When you create an environment, in the Environment > EnvironmentConfig resource, specify maintenance windows parameters: { "name" : "projects/ PROJECT ID /locations/ LOCATION /environments/ ENVIRONMENT NAME " , "config" : { "maintenanceWindow" : { "startTime" : " DATETIME START " , "endTime" : " DATETIME END " , "recurrence" : " MAINTENANCE RECURRENCE " }, "nodeConfig" : { "serviceAccount" : " SERVICE ACCOUNT " } } } Replace: DATETIME START with the start date and time in the date/time input format .
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "maintenanceWindow" : { "startTime" : "2023-01-01T01:00:00Z" , "endTime" : "2023-01-01T07:00:00Z" , "recurrence" : "FREQ=WEEKLY;BYDAY=SU,WE,SA" }, "nodeConfig" : { "serviceAccount" : " SERVICE ACCOUNT " } } } Terraform The maintenance window block specifies the maintenance windows for your environment: resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { maintenance window { start time = " DATETIME START " end time = " DATETIME END " recurrence = " MAINTENANCE RECURRENCE " } node config { service account = " SERVICE ACCOUNT " } } } Replace: DATETIME START with the start date and time in the date/time input format .

