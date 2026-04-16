---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:18.916Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Environment snapshots for Airflow 3"
feature_slug: "environment-snapshots-for-airflow-3"
latest_feature_date: "2026-02-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments"
  - "https://docs.cloud.google.com/composer/docs/composer-1/known-issues"
  - "https://docs.cloud.google.com/composer/docs/composer-1/create-environments"
  - "https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database"
keywords:
  - "environment"
  - "snapshots"
  - "for"
  - "airflow"
  - "are"
  - "now"
  - "available"
  - "preview"
---

# Environment snapshots for Airflow 3

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Environment snapshots are now available for Airflow 3 (Preview) environments across all supported Cloud Composer 3 regions.

## Extended Definition

Environment snapshots are now available for Airflow 3 (Preview) environments across all supported Cloud Composer 3 regions.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- [https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database](https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database)

## Supporting Pages

### "REST Resource: projects.locations.environments \_|\_ Cloud Composer \_|\_\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- Source ID: `site-docs-reference`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- Resource: Environment JSON representation EnvironmentConfig JSON representation SoftwareConfig JSON representation CloudDataLineageIntegration JSON representation WebServerPluginsMode NodeConfig JSON representation IPAllocationPolicy JSON representation PrivateEnvironmentConfig JSON representation NetworkingType PrivateClusterConfig JSON representation NetworkingConfig JSON representation ConnectionType WebServerNetworkAccessControl JSON representation AllowedIpRange JSON representation DatabaseConfig JSON representation WebServerConfig JSON representation EncryptionConfig JSON representation MaintenanceWindow JSON representation WorkloadsConfig JSON representation SchedulerResource JSON representation WebServerResource JSON representation WorkerResource JSON representation TriggererResource JSON representation DagProcessorResource JSON representation EnvironmentSize MasterAuthorizedNetworksConfig JSON representation CidrBlock JSON representation RecoveryConfig JSON representation ScheduledSnapshotsConfig JSON representation ResilienceMode DataRetentionConfig JSON representation AirflowMetadataRetentionPolicyConfig JSON representation RetentionMode TaskLogsRetentionConfig JSON representation TaskLogsStorageMode State StorageConfig JSON representation Methods Resource: Environment An environment for running orchestration tasks.
- Methods checkUpgrade Check if an upgrade operation on the environment will succeed. create Create a new environment. databaseFailover Triggers database failover (only for highly resilient environments). delete Delete an environment. executeAirflowCommand Executes Airflow CLI command. fetchDatabaseProperties Fetches database properties. get Get an existing environment. list List environments. loadSnapshot Loads a snapshot of a Cloud Composer environment. patch Update an environment. pollAirflowCommand Polls Airflow CLI command execution and fetches logs. restartWebServer Restart Airflow web server. saveSnapshot Creates a snapshots of a Cloud Composer environment. stopAirflowCommand Stops Airflow CLI command execution.
- This field is supported for Cloud Composer environments in versions composer-2.2.0-airflow- . . and newer. dataRetentionConfig object ( DataRetentionConfig ) Optional.
- This field is supported for Cloud Composer environments in versions composer-1. . -airflow- . . . softwareConfig object ( SoftwareConfig ) Optional.

### Known issues \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- Source ID: `site-iam-reference`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- The command-line interface is the recommended approach for deleting the connection: gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ connections delete -- \ CONNECTION ID After deleting the connection, recreate it using the Airflow UI , ensuring that the fields you intend to leave empty are indeed left blank.
- Such entities are eventually removed from local storages of Airflow schedulers and workers when these components are restarted (for example, as a result of scaling down or maintenance operations in your environment's cluster).
- Airflow tasks logs are unavailable in the Airflow web server after upgrading from Airflow 1.9.0 to Airflow 1.10.x Airflow 1.10.x introduced backwards-incompatible changes to the naming convention for log files.
- If Airflow UI is permanently unavailable, and timeout or 504 errors are generated, make sure that your environment can access .composer.googleusercontent.com . (Cloud Composer 2 only) Connectivity issue.

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- Source ID: `site-iam-reference`
- Final score: 189
- Re-rank relevance: N/A

Evidence snippets:
- Example: gcloud composer environments create example-environment \ --location us-central1 \ --image-version composer-1.20.12-airflow-1.10.15 \ --service-account " example-account@example-project. iam.gserviceaccount.com " \ --zone us-central1-a \ --node-count 6 \ --scheduler-count 1 \ --disk-size 50 \ --machine-type n1-standard-2 \ --cloud-sql-machine-type db-n1-standard-2 \ --web-server-machine-type composer-n1-webserver-2 API When you create an environment, in the Environment > EnvironmentConfig resource, specify environment scale and performance parameters. { "name" : "projects/ PROJECT ID /locations/ LOCATION /environments/ ENVIRONMENT NAME " , "config" : { "nodeCount" : NODE COUNT , "nodeConfig" : { "machineType" : " NODE MACHINE TYPE " , "diskSizeGb" : DISK SIZE , "serviceAccount" : " SERVICE ACCOUNT " }, "softwareConfig" : { "schedulerCount" : SCHEDULER COUNT }, "databaseConfig" : { "machineType" : " SQL MACHINE TYPE " }, "webServerConfig" : { "machineType" : " WS MACHINE TYPE " } } } Replace: NODE COUNT with the number of nodes.
- Example: gcloud composer environments create example-environment \ --location us-central1 \ --image-version composer-1.20.12-airflow-1.10.15 \ --service-account " example-account@example-project. iam.gserviceaccount.com " \ --zone us-central1-a \ --oauth-scopes https://www.googleapis.com/auth/cloud-platform,https://www.googleapis.com/auth/bigquery \ --python-version 3 API When you create an environment, in the Environment > EnvironmentConfig resource, specify miscellaneous parameters of your environment. { "name" : "projects/ PROJECT ID /locations/ LOCATION /environments/ ENVIRONMENT NAME " , "config" : { "nodeConfig" : { "location" : "projects/ PROJECT ID /zones/ ZONE " , "oauthScopes" : [ " OAUTH SCOPE " ], "serviceAccount" : " SERVICE ACCOUNT " }, "softwareConfig" : { "pythonVersion" : " PYTHON VERSION " } } } Replace: ZONE with the name of the Compute Engine zone.
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "softwareConfig" : { "imageVersion" : "composer-1.20.12-airflow-1.10.15" }, "nodeConfig" : { "serviceAccount" : " example-account@example-project. iam.gserviceaccount.com " } } } Terraform To create an environment with default parameters is a specified location, add the following resource block to your Terraform configuration and run terraform apply . resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { software config { image version = " IMAGE VERSION " } node config { service account = " SERVICE ACCOUNT " } } } Important: You must specify an image version for Cloud Composer 1.
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "softwareConfig" : { "airflowConfigOverrides" : { "core-dags are paused at creation" : "True" , "webserver-dag orientation" : "TB" }, "envVariables" : { "SENDGRID MAIL FROM" : "user@example.com" , "SENDGRID API KEY" : "example-key" } }, "nodeConfig" : { "serviceAccount" : " example-account@example-project. iam.gserviceaccount.com " } } } Terraform When you create an environment, following blocks control environment variables and Airflow configuration overrides: env variables block in the software config block specifies environment variables.

### Clean up the Airflow database \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database](https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database)
- Source ID: `site-iam-reference`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- Put the DAG in your gcs bucket. """ from datetime import datetime , timedelta import logging import os import airflow from airflow import settings from airflow.jobs import BaseJob from airflow.models import ( DAG , DagModel , DagRun , Log , SlaMiss , TaskInstance , Variable , XCom , ) from airflow.operators.python operator import PythonOperator from airflow.version import version as airflow version import dateutil.parser from sqlalchemy import and , func from sqlalchemy.exc import ProgrammingError from sqlalchemy.orm import load only try : airflow.utils.timezone is available from v1.10 onwards from airflow.utils import timezone now = timezone . utcnow except ImportError : now = datetime . utcnow airflow-db-cleanup DAG ID = os . path . basename ( file ) . replace ( ".pyc" , "" ) . replace ( ".py" , "" ) START DATE = airflow . utils . dates . days ago ( 1 ) How often to Run. @daily - Once a day at Midnight (UTC) SCHEDULE INTERVAL = "@daily" Who is listed as the owner of this DAG in the Airflow Web Server DAG OWNER NAME = "operations" List of email address to send email alerts to if this job fails ALERT EMAIL ADDRESSES = [] Airflow version used by the environment in list form, value stored in airflow version is in format e.g "1.10.15+composer" AIRFLOW VERSION = airflow version [: - len ( "+composer" )] . split ( "." ) Length to retain the log files if not already provided in the conf.
- Transferring big files or a large number of files using XCom impacts Airflow database's performance and can lead to failures when loading snapshots or upgrading your environment.
- Using Default '" + str ( DEFAULT MAX DB ENTRY AGE IN DAYS ) + "'" ) max db entry age in days = DEFAULT MAX DB ENTRY AGE IN DAYS max date = now () + timedelta ( - max db entry age in days ) logging . info ( "Finished Loading Configurations" ) logging . info ( "" ) logging . info ( "Configurations:" ) logging . info ( "max db entry age in days: " + str ( max db entry age in days )) logging . info ( "max date: " + str ( max date )) logging . info ( "enable delete: " + str ( ENABLE DELETE )) logging . info ( "" ) logging . info ( "Setting max execution date to XCom for Downstream Processes" ) context [ "ti" ] . xcom push ( key = "max date" , value = max date . isoformat ()) print configuration = PythonOperator ( task id = "print configuration" , python callable = print configuration function , provide context = True , dag = dag , ) def build query ( session , airflow db model , age check column , max date , keep last , keep last filters = None , keep last group by = None , ): query = session . query ( airflow db model ) . options ( load only ( age check column )) logging . info ( "INITIAL QUERY : " + str ( query )) if not keep last : query = query . filter ( age check column < = max date , ) else : subquery = session . query ( func . max ( DagRun . execution date )) workaround for MySQL "table specified twice" issue https://github.com/teamclairvoyant/airflow-maintenance-dags/issues/41 if keep last filters is not None : for entry in keep last filters : subquery = subquery . filter ( entry ) logging . info ( "SUB QUERY [keep last filters]: " + str ( subquery )) if keep last group by is not None : subquery = subquery . group by ( keep last group by ) logging . info ( "SUB QUERY [keep last group by]: " + str ( subquery )) subquery = subquery . from self () query = query . filter ( and ( age check column . notin ( subquery )), and ( age check column < = max date ) ) return query def print query ( query , airflow db model , age check column ): entries to delete = query . all () logging . info ( "Query: " + str ( query )) logging . info ( "Process will be Deleting the following " + str ( airflow db model . name ) + "(s):" ) for entry in entries to delete : date = str ( entry . dict [ str ( age check column ) . split ( "." )[ 1 ]]) logging . info ( " \t Entry: " + str ( entry ) + ", Date: " + date ) logging . info ( "Process will be Deleting " + str ( len ( entries to delete )) + " " + str ( airflow db model . name ) + "(s)" ) def cleanup function ( context ): session = settings .
- Session () session . execute ( "ANALYZE" ) session . commit () session . close () analyze op = PythonOperator ( task id = "analyze query" , python callable = analyze db , provide context = True , dag = dag ) cleanup session op = PythonOperator ( task id = "cleanup sessions" , python callable = cleanup sessions , provide context = True , dag = dag , ) cleanup session op . set downstream ( analyze op ) for db object in DATABASE OBJECTS : cleanup op = PythonOperator ( task id = "cleanup " + str ( db object [ "airflow db model" ] . name ), python callable = cleanup function , params = db object , provide context = True , dag = dag , ) print configuration . set downstream ( cleanup op ) cleanup op . set downstream ( analyze op ) If your environment uses Airflow 1, use the following DAG instead: """ A maintenance workflow that you can deploy into Airflow to periodically clean out the DagRun, TaskInstance, Log, XCom, Job DB and SlaMiss entries to avoid having too much data in your Airflow MetaStore.

