---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:49.136Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer pinned Airflow base Docker image tag"
feature_slug: "cloud-composer-pinned-airflow-base-docker-image-tag"
latest_feature_date: "2018-12-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database"
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-database"
  - "https://docs.cloud.google.com/composer/docs/release-notes"
keywords:
  - "composer"
  - "pinned"
  - "airflow"
  - "base"
  - "docker"
  - "image"
  - "tag"
  - "the"
---

# Cloud Composer pinned Airflow base Docker image tag

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer pinned the Airflow base Docker image tag for initial environment creation and subsequent PyPI dependency installs.

## Extended Definition

Cloud Composer pinned the Airflow base Docker image tag for initial environment creation and subsequent PyPI dependency installs.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database](https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database)
- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-database](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-database)
- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)

## Supporting Pages

### Clean up the Airflow database \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database](https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database)
- Source ID: `site-iam-reference`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- Put the DAG in your gcs bucket. """ from datetime import datetime , timedelta import logging import os import airflow from airflow import settings from airflow.jobs import BaseJob from airflow.models import ( DAG , DagModel , DagRun , Log , SlaMiss , TaskInstance , Variable , XCom , ) from airflow.operators.python operator import PythonOperator from airflow.version import version as airflow version import dateutil.parser from sqlalchemy import and , func from sqlalchemy.exc import ProgrammingError from sqlalchemy.orm import load only try : airflow.utils.timezone is available from v1.10 onwards from airflow.utils import timezone now = timezone . utcnow except ImportError : now = datetime . utcnow airflow-db-cleanup DAG ID = os . path . basename ( file ) . replace ( ".pyc" , "" ) . replace ( ".py" , "" ) START DATE = airflow . utils . dates . days ago ( 1 ) How often to Run. @daily - Once a day at Midnight (UTC) SCHEDULE INTERVAL = "@daily" Who is listed as the owner of this DAG in the Airflow Web Server DAG OWNER NAME = "operations" List of email address to send email alerts to if this job fails ALERT EMAIL ADDRESSES = [] Airflow version used by the environment in list form, value stored in airflow version is in format e.g "1.10.15+composer" AIRFLOW VERSION = airflow version [: - len ( "+composer" )] . split ( "." ) Length to retain the log files if not already provided in the conf.
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Clean up the Airflow database Stay organized with collections Save and categorize content based on your preferences.
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 This page explains how to maintain the Airflow database in your environment.
- Session () logging . info ( "Retrieving max execution date from XCom" ) max date = context [ "ti" ] . xcom pull ( task ids = print configuration . task id , key = "max date" ) max date = dateutil . parser . parse ( max date ) # stored as iso8601 str in xcom airflow db model = context [ "params" ] . get ( "airflow db model" ) state = context [ "params" ] . get ( "state" ) age check column = context [ "params" ] . get ( "age check column" ) keep last = context [ "params" ] . get ( "keep last" ) keep last filters = context [ "params" ] . get ( "keep last filters" ) keep last group by = context [ "params" ] . get ( "keep last group by" ) logging . info ( "Configurations:" ) logging . info ( "max date: " + str ( max date )) logging . info ( "enable delete: " + str ( ENABLE DELETE )) logging . info ( "session: " + str ( session )) logging . info ( "airflow db model: " + str ( airflow db model )) logging . info ( "state: " + str ( state )) logging . info ( "age check column: " + str ( age check column )) logging . info ( "keep last: " + str ( keep last )) logging . info ( "keep last filters: " + str ( keep last filters )) logging . info ( "keep last group by: " + str ( keep last group by )) logging . info ( "" ) logging . info ( "Running Cleanup Process..." ) try : if context [ "params" ] . get ( "do not delete by dag id" ): query = build query ( session , airflow db model , age check column , max date , keep last , keep last filters , keep last group by , ) if PRINT DELETES : print query ( query , airflow db model , age check column ) if ENABLE DELETE : logging . info ( "Performing Delete..." ) query . delete ( synchronize session = False ) session . commit () else : dags = session . query ( airflow db model . dag id ) . distinct () session . commit () list dags = [ str ( list ( dag )[ 0 ]) for dag in dags ] for dag in list dags : query = build query ( session , airflow db model , age check column , max date , keep last , keep last filters , keep last group by , ) query = query . filter ( airflow db model . dag id == dag ) if PRINT DELETES : print query ( query , airflow db model , age check column ) if ENABLE DELETE : logging . info ( "Performing Delete..." ) query . delete ( synchronize session = False ) session . commit () if not ENABLE DELETE : logging . warn ( "You've opted to skip deleting the db entries. " "Set ENABLE DELETE to True to delete entries!!!" ) logging . info ( "Finished Running Cleanup Process" ) except ProgrammingError as e : logging . error ( e ) logging . error ( str ( airflow db model ) + " is not present in the metadata. " "Skipping..." ) finally : session . close () for db object in DATABASE OBJECTS : cleanup op = PythonOperator ( task id = "cleanup " + str ( db object [ "airflow db model" ] . name ), python callable = cleanup function , params = db object , provide context = True , dag = dag , ) print configuration . set downstream ( cleanup op ) Maintain database performance Airflow database performance issues can lead to overall DAG execution issues.

### Access the Airflow database \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-database](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-database)
- Source ID: `site-iam-reference`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Example: gcloud composer environments snapshots save \ example-environment \ --location us-central1 \ --snapshot-location "gs://example-bucket/environment snapshots" Example result: Response: '@type': type.googleapis.com/google.cloud.orchestration.airflow.service.v1.SaveSnapshotResponse snapshotPath: gs://example-bucket/environment snapshots/example-environment us-central1 2026-03-17T11-26-24 Prepare the destination database If you don't have a Cloud SQL instance, create one.
- You can use this approach in all versions of Airflow supported by Cloud Composer 3, including Airflow 3 versions later than 3.1.7 where direct access to the Airflow database is no longer possible.
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Access the Airflow database Stay organized with collections Save and categorize content based on your preferences.
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 This page explains how to connect to a Cloud SQL instance that runs the Airflow database of your Cloud Composer environment and run SQL queries.

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Pinned the Airflow base Docker image tag for initial environment creation and future PyPI dependency installations.
- Change New Airflow builds are available in Cloud Composer 3: composer-3-airflow-3.1.7-build.2 composer-3-airflow-2.10.5-build.31 (default) composer-3-airflow-2.9.3-build.51 Change New images are available in Cloud Composer 2: composer-2.16.8-airflow-2.10.5 (default) composer-2.16.8-airflow-2.9.3 March 17, 2026 Change (Airflow 3.1.7) Starting from version composer-3-airflow-3.1.7-build.1, Airflow workers no longer have direct access to the Airflow database of your environment.
- June 07, 2021 Change New versions of Cloud Composer images: composer-1.17.0-preview.2-airflow-2.0.1 composer-1.16.6-airflow-1.10.15 composer-1.16.6-airflow-1.10.14 (default) composer-1.16.6-airflow-1.10.12 Change Increased the timeout for environment upgrade operations to support upgrades for databases up to 16 GB in size.
- Change The following packages are now preinstalled in Cloud Composer images with Airflow 2.2.5: google-cloud-firestore , firebase-admin , gcfs , dbt-core , apache-airflow-providers-dbt-cloud .

