---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:49.125Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer Airflow Dataflow operator Google Cloud connection fix"
feature_slug: "cloud-composer-airflow-dataflow-operator-google-cloud-connection-fix"
latest_feature_date: "2019-02-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database"
  - "https://docs.cloud.google.com/composer/docs/release-notes"
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-secret-manager"
keywords:
  - "composer"
  - "airflow"
  - "dataflow"
  - "operator"
  - "connection"
  - "fix"
  - "backported"
  - "an"
---

# Cloud Composer Airflow Dataflow operator Google Cloud connection fix

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer backported an upstream Apache Airflow fix for the broken Google Cloud connection in DataflowJavaOperator and DataflowPythonOperator.

## Extended Definition

Cloud Composer backported an upstream Apache Airflow fix for the broken Google Cloud connection in DataflowJavaOperator and DataflowPythonOperator.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database](https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database)
- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- [https://docs.cloud.google.com/composer/docs/composer-1/configure-secret-manager](https://docs.cloud.google.com/composer/docs/composer-1/configure-secret-manager)

## Supporting Pages

### Clean up the Airflow database \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database](https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database)
- Source ID: `site-iam-reference`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- Put the DAG in your gcs bucket. """ from datetime import datetime , timedelta import logging import os import airflow from airflow import settings from airflow.jobs import BaseJob from airflow.models import ( DAG , DagModel , DagRun , Log , SlaMiss , TaskInstance , Variable , XCom , ) from airflow.operators.python operator import PythonOperator from airflow.version import version as airflow version import dateutil.parser from sqlalchemy import and , func from sqlalchemy.exc import ProgrammingError from sqlalchemy.orm import load only try : airflow.utils.timezone is available from v1.10 onwards from airflow.utils import timezone now = timezone . utcnow except ImportError : now = datetime . utcnow airflow-db-cleanup DAG ID = os . path . basename ( file ) . replace ( ".pyc" , "" ) . replace ( ".py" , "" ) START DATE = airflow . utils . dates . days ago ( 1 ) How often to Run. @daily - Once a day at Midnight (UTC) SCHEDULE INTERVAL = "@daily" Who is listed as the owner of this DAG in the Airflow Web Server DAG OWNER NAME = "operations" List of email address to send email alerts to if this job fails ALERT EMAIL ADDRESSES = [] Airflow version used by the environment in list form, value stored in airflow version is in format e.g "1.10.15+composer" AIRFLOW VERSION = airflow version [: - len ( "+composer" )] . split ( "." ) Length to retain the log files if not already provided in the conf.
- COMPOSER SUFFIX = "+composer" if version . endswith ( COMPOSER SUFFIX ): airflow version without suffix = version [: - len ( COMPOSER SUFFIX )] else : airflow version without suffix = version airflow version str = airflow version without suffix . split ( "." ) return tuple ([ int ( s ) for s in airflow version str ]) now = timezone . utcnow airflow-db-cleanup DAG ID = os . path . basename ( file ) . replace ( ".pyc" , "" ) . replace ( ".py" , "" ) START DATE = airflow . utils . dates . days ago ( 1 ) How often to Run. @daily - Once a day at Midnight (UTC).
- Session () logging . info ( "Retrieving max execution date from XCom" ) max date = context [ "ti" ] . xcom pull ( task ids = print configuration . task id , key = "max date" ) max date = dateutil . parser . parse ( max date ) # stored as iso8601 str in xcom airflow db model = context [ "params" ] . get ( "airflow db model" ) state = context [ "params" ] . get ( "state" ) age check column = context [ "params" ] . get ( "age check column" ) keep last = context [ "params" ] . get ( "keep last" ) keep last filters = context [ "params" ] . get ( "keep last filters" ) keep last group by = context [ "params" ] . get ( "keep last group by" ) logging . info ( "Configurations:" ) logging . info ( "max date: " + str ( max date )) logging . info ( "enable delete: " + str ( ENABLE DELETE )) logging . info ( "session: " + str ( session )) logging . info ( "airflow db model: " + str ( airflow db model )) logging . info ( "state: " + str ( state )) logging . info ( "age check column: " + str ( age check column )) logging . info ( "keep last: " + str ( keep last )) logging . info ( "keep last filters: " + str ( keep last filters )) logging . info ( "keep last group by: " + str ( keep last group by )) logging . info ( "" ) logging . info ( "Running Cleanup Process..." ) try : if context [ "params" ] . get ( "do not delete by dag id" ): query = build query ( session , airflow db model , age check column , max date , keep last , keep last filters , keep last group by , ) if PRINT DELETES : print query ( query , airflow db model , age check column ) if ENABLE DELETE : logging . info ( "Performing Delete..." ) query . delete ( synchronize session = False ) session . commit () else : dags = session . query ( airflow db model . dag id ) . distinct () session . commit () list dags = [ str ( list ( dag )[ 0 ]) for dag in dags ] for dag in list dags : query = build query ( session , airflow db model , age check column , max date , keep last , keep last filters , keep last group by , ) query = query . filter ( airflow db model . dag id == dag ) if PRINT DELETES : print query ( query , airflow db model , age check column ) if ENABLE DELETE : logging . info ( "Performing Delete..." ) query . delete ( synchronize session = False ) session . commit () if not ENABLE DELETE : logging . warn ( "You've opted to skip deleting the db entries. " "Set ENABLE DELETE to True to delete entries!!!" ) logging . info ( "Finished Running Cleanup Process" ) except ProgrammingError as e : logging . error ( e ) logging . error ( str ( airflow db model ) + " is not present in the metadata. " "Skipping..." ) finally : session . close () for db object in DATABASE OBJECTS : cleanup op = PythonOperator ( task id = "cleanup " + str ( db object [ "airflow db model" ] . name ), python callable = cleanup function , params = db object , provide context = True , dag = dag , ) print configuration . set downstream ( cleanup op ) Maintain database performance Airflow database performance issues can lead to overall DAG execution issues.
- Using Default '" + str ( DEFAULT MAX DB ENTRY AGE IN DAYS ) + "'" ) max db entry age in days = DEFAULT MAX DB ENTRY AGE IN DAYS max date = now () + timedelta ( - max db entry age in days ) logging . info ( "Finished Loading Configurations" ) logging . info ( "" ) logging . info ( "Configurations:" ) logging . info ( "max db entry age in days: " + str ( max db entry age in days )) logging . info ( "max date: " + str ( max date )) logging . info ( "enable delete: " + str ( ENABLE DELETE )) logging . info ( "" ) logging . info ( "Setting max execution date to XCom for Downstream Processes" ) context [ "ti" ] . xcom push ( key = "max date" , value = max date . isoformat ()) print configuration = PythonOperator ( task id = "print configuration" , python callable = print configuration function , provide context = True , dag = dag , ) def build query ( session , airflow db model , age check column , max date , keep last , keep last filters = None , keep last group by = None , ): query = session . query ( airflow db model ) . options ( load only ( age check column )) logging . info ( "INITIAL QUERY : " + str ( query )) if not keep last : query = query . filter ( age check column < = max date , ) else : subquery = session . query ( func . max ( DagRun . execution date )) workaround for MySQL "table specified twice" issue https://github.com/teamclairvoyant/airflow-maintenance-dags/issues/41 if keep last filters is not None : for entry in keep last filters : subquery = subquery . filter ( entry ) logging . info ( "SUB QUERY [keep last filters]: " + str ( subquery )) if keep last group by is not None : subquery = subquery . group by ( keep last group by ) logging . info ( "SUB QUERY [keep last group by]: " + str ( subquery )) subquery = subquery . from self () query = query . filter ( and ( age check column . notin ( subquery )), and ( age check column < = max date ) ) return query def print query ( query , airflow db model , age check column ): entries to delete = query . all () logging . info ( "Query: " + str ( query )) logging . info ( "Process will be Deleting the following " + str ( airflow db model . name ) + "(s):" ) for entry in entries to delete : date = str ( entry . dict [ str ( age check column ) . split ( "." )[ 1 ]]) logging . info ( " \t Entry: " + str ( entry ) + ", Date: " + date ) logging . info ( "Process will be Deleting " + str ( len ( entries to delete )) + " " + str ( airflow db model . name ) + "(s)" ) def cleanup function ( context ): session = settings .

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- February 06, 2019 Feature Backported Airflow upstream fix for the broken Google Cloud connection in the DataflowJavaOperator and DataflowPythonOperator AIRFLOW-2009 in all Cloud Composer managed Airflow versions.
- Composer users can now use Dataflow Operators with Python 2 and 3. (Airflow 1.10.3 only.) Fixed an issue with App Engine health check errors when creating environments with Composer version 1.7.5 or lower.
- Change (Airflow 1.10.15) Upgraded apache-beam and google provider packages to version 2022.6.1: Support impersonation chain parameter for Dataflow runner in Apache Beam operators Added missing project id parameter for wait for job method in the Dataflow operators Added key secret project id parameter which specifies a project with KeyFile Change Cloud Composer 1.18.12 and 2.0.16 images are available: composer-1.18.12-airflow-1.10.15 (default) composer-1.18.12-airflow-2.1.4 composer-1.18.12-airflow-2.2.5 composer-2.0.16-airflow-2.1.4 composer-2.0.16-airflow-2.2.5 June 01, 2022 Feature Web server restarting is available in Preview in Cloud Composer 2.
- Change Cloud Composer 2.9.5 images are available: composer-2.9.5-airflow-2.9.3 composer-2.9.5-airflow-2.9.1 (default) composer-2.9.5-airflow-2.7.3 Change New Airflow builds are available in Cloud Composer 3: composer-3-airflow-2.9.3-build.1 composer-3-airflow-2.9.1-build.8 (default) composer-3-airflow-2.7.3-build.17 September 18, 2024 Fixed (Cloud Composer 3) Fixed the issue that caused KubernetesPodOperator tasks to fail if they ran for longer than 15 minutes.

### "Configure Secret Manager for your environment \_|\_ Cloud Composer \_|\_\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-secret-manager](https://docs.cloud.google.com/composer/docs/composer-1/configure-secret-manager)
- Source ID: `site-iam-reference`
- Final score: 184
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Note: The Keyfile Secret Name (in GCP Secret Manager) option in Airflow connection is supported only when Secret Manager and Cloud Composer are in the same Google Cloud project.
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 This page shows how to use Secret Manager to securely store Airflow connections and secrets.
- If the requested variable or connection is not found, Cloud Composer then checks the environment variables and the Airflow database.
- It is possible to get the URI string representation of a connection like this: exampleConnectionUri = BaseHook . get connection ( 'exampleConnection' ) . get uri () What's next Override Airflow configuration options Access the Airflow REST API Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

