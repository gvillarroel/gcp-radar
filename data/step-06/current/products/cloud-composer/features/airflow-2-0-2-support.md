---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:34:19.730Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Airflow 2.0.2 support"
feature_slug: "airflow-2-0-2-support"
latest_feature_date: "2021-07-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag"
  - "https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac"
  - "https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database"
keywords:
  - "airflow"
  - "composer"
  - "images"
  - "include"
  - "apache"
---

# Airflow 2.0.2 support

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer images include Apache Airflow 2.0.2.

## Extended Definition

Cloud Composer images include Apache Airflow 2.0.2.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag](https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag)
- [https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac](https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac)
- [https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database](https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database)

## Supporting Pages

### "Quickstart: Run an Apache Airflow DAG in Cloud Composer\_3 \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag](https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- Save a copy of the quickstart.py file on your local machine: import datetime from airflow import models from airflow.operators import bash If you are running Airflow in more than one time zone see https://airflow.apache.org/docs/apache-airflow/stable/timezone.html for best practices YESTERDAY = datetime . datetime . now () - datetime . timedelta ( days = 1 ) default args = { "owner" : "Composer Example" , "depends on past" : False , "email" : [ "" ], "email on failure" : False , "email on retry" : False , "retries" : 1 , "retry delay" : datetime . timedelta ( minutes = 5 ), "start date" : YESTERDAY , } with models .
- Run an Apache Airflow DAG in Cloud Composer 3 Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 This quickstart guide shows you how to create a Cloud Composer environment and run an Apache Airflow DAG in Cloud Composer 3.
- If you want to use Google Cloud CLI instead , see Run an Apache Airflow DAG in Cloud Composer (Google Cloud CLI) .
- What's next Adding and updating DAGs Writing DAGs Overriding Airflow configurations Accessing Airflow UI Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Using Airflow UI Access Control \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac](https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac)
- Source ID: `site-iam-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- What's next Override Airflow configuration options Security overview Cloud Composer access control Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To preregister a user with a custom role through Google Cloud CLI, run the following Airflow CLI command : gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ users create -- \ -r ROLE \ -e USER EMAIL \ -u USER EMAIL \ -f FIRST NAME \ -l LAST NAME \ --use-random-password # The password value is required, but is not used Replace the following: ENVIRONMENT NAME : the name of the environment LOCATION : the region where the environment is located ROLE : an Airflow role for the user, for example, Op USER EMAIL : the user's email address FIRST NAME and LAST NAME : user's first name and last name Example: gcloud composer environments run example-environment \ --location us-central1 \ users create -- \ -r Op \ -e "example-user@example.com" \ -u "example-user@example.com" \ -f "Name" \ -l "Surname" \ --use-random-password Remove users Deleting a user from Airflow does not revoke access for that user, because they are automatically registered again next time they access the Airflow UI.
- Overview of Airflow UI access control in Cloud Composer Access to Airflow UI and DAG UI and visibility of data and operations in those UIs is controlled at two levels in Cloud Composer: Access to the Airflow UI and DAG UI in Cloud Composer is controlled by IAM .
- To assign the Admin role, run the following Airflow CLI command with gcloud CLI: gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ users add-role -- -e USER EMAIL -r Admin Replace: ENVIRONMENT NAME with the name of the environment.

### Clean up the Airflow database \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database](https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database)
- Source ID: `site-iam-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- DATABASE OBJECTS = [ { "airflow db model" : DagRun , "age check column" : DagRun . execution date , "keep last" : True , "keep last filters" : [ DagRun . external trigger . is ( False )], "keep last group by" : DagRun . dag id , }, { "airflow db model" : TaskInstance , "age check column" : TaskInstance . start date , "keep last" : False , "keep last filters" : None , "keep last group by" : None , }, { "airflow db model" : Log , "age check column" : Log . dttm , "keep last" : False , "keep last filters" : None , "keep last group by" : None , }, { "airflow db model" : XCom , "age check column" : XCom . execution date if AIRFLOW VERSION < ( 2 , 2 , 5 ) else XCom . timestamp , "keep last" : False , "keep last filters" : None , "keep last group by" : None , }, { "airflow db model" : SlaMiss , "age check column" : SlaMiss . execution date , "keep last" : False , "keep last filters" : None , "keep last group by" : None , }, { "airflow db model" : DagModel , "age check column" : DagModel . last parsed time , "keep last" : False , "keep last filters" : None , "keep last group by" : None , }, ] Check for TaskReschedule model. try : from airflow.models import TaskReschedule DATABASE OBJECTS . append ( { "airflow db model" : TaskReschedule , "age check column" : TaskReschedule . execution date if AIRFLOW VERSION < ( 2 , 2 , 0 ) else TaskReschedule . start date , "keep last" : False , "keep last filters" : None , "keep last group by" : None , } ) except Exception as e : logging . error ( e ) Check for TaskFail model. try : from airflow.models import TaskFail DATABASE OBJECTS . append ( { "airflow db model" : TaskFail , "age check column" : TaskFail . start date , "keep last" : False , "keep last filters" : None , "keep last group by" : None , } ) except Exception as e : logging . error ( e ) Check for RenderedTaskInstanceFields model. if AIRFLOW VERSION < ( 2 , 4 , 0 ): try : from airflow.models import RenderedTaskInstanceFields DATABASE OBJECTS . append ( { "airflow db model" : RenderedTaskInstanceFields , "age check column" : RenderedTaskInstanceFields . execution date , "keep last" : False , "keep last filters" : None , "keep last group by" : None , } ) except Exception as e : logging . error ( e ) Check for ImportError model. try : from airflow.models import ImportError DATABASE OBJECTS . append ( { "airflow db model" : ImportError , "age check column" : ImportError . timestamp , "keep last" : False , "keep last filters" : None , "keep last group by" : None , "do not delete by dag id" : True , } ) except Exception as e : logging . error ( e ) if AIRFLOW VERSION < ( 2 , 6 , 0 ): try : from airflow.jobs.base job import BaseJob DATABASE OBJECTS . append ( { "airflow db model" : BaseJob , "age check column" : BaseJob . latest heartbeat , "keep last" : False , "keep last filters" : None , "keep last group by" : None , } ) except Exception as e : logging . error ( e ) else : try : from airflow.jobs.job import Job DATABASE OBJECTS . append ( { "airflow db model" : Job , "age check column" : Job . latest heartbeat , "keep last" : False , "keep last filters" : None , "keep last group by" : None , } ) except Exception as e : logging . error ( e ) default args = { "owner" : DAG OWNER NAME , "depends on past" : False , "email" : ALERT EMAIL ADDRESSES , "email on failure" : True , "email on retry" : False , "start date" : START DATE , "retries" : 1 , "retry delay" : timedelta ( minutes = 1 ), } dag = DAG ( DAG ID , default args = default args , schedule interval = SCHEDULE INTERVAL , start date = START DATE , ) if hasattr ( dag , "doc md" ): dag . doc md = doc if hasattr ( dag , "catchup" ): dag . catchup = False def print configuration function ( context ): logging . info ( "Loading Configurations..." ) dag run conf = context . get ( "dag run" ) . conf logging . info ( "dag run.conf: " + str ( dag run conf )) max db entry age in days = None if dag run conf : max db entry age in days = dag run conf . get ( "maxDBEntryAgeInDays" , None ) logging . info ( "maxDBEntryAgeInDays from dag run.conf: " + str ( dag run conf )) if max db entry age in days is None or max db entry age in days < 1 : logging . info ( "maxDBEntryAgeInDays conf variable isn't included or Variable " + "value is less than 1.
- DATABASE OBJECTS = [ { "airflow db model" : BaseJob , "age check column" : BaseJob . latest heartbeat , "keep last" : False , "keep last filters" : None , "keep last group by" : None , }, { "airflow db model" : DagRun , "age check column" : DagRun . execution date , "keep last" : True , "keep last filters" : [ DagRun . external trigger . is ( False )], "keep last group by" : DagRun . dag id , }, { "airflow db model" : TaskInstance , "age check column" : TaskInstance . execution date , "keep last" : False , "keep last filters" : None , "keep last group by" : None , }, { "airflow db model" : Log , "age check column" : Log . dttm , "keep last" : False , "keep last filters" : None , "keep last group by" : None , }, { "airflow db model" : XCom , "age check column" : XCom . execution date , "keep last" : False , "keep last filters" : None , "keep last group by" : None , }, { "airflow db model" : SlaMiss , "age check column" : SlaMiss . execution date , "keep last" : False , "keep last filters" : None , "keep last group by" : None , }, { "airflow db model" : DagModel , "age check column" : DagModel . last scheduler run , "keep last" : False , "keep last filters" : None , "keep last group by" : None , }, ] Check for TaskReschedule model try : from airflow.models import TaskReschedule DATABASE OBJECTS . append ( { "airflow db model" : TaskReschedule , "age check column" : TaskReschedule . execution date , "keep last" : False , "keep last filters" : None , "keep last group by" : None , } ) except Exception as e : logging . error ( e ) Check for TaskFail model try : from airflow.models import TaskFail DATABASE OBJECTS . append ( { "airflow db model" : TaskFail , "age check column" : TaskFail . execution date , "keep last" : False , "keep last filters" : None , "keep last group by" : None , } ) except Exception as e : logging . error ( e ) Check for ImportError model try : from airflow.models import ImportError DATABASE OBJECTS . append ( { "airflow db model" : ImportError , "age check column" : ImportError . timestamp , "keep last" : False , "keep last filters" : None , "keep last group by" : None , "do not delete by dag id" : True , } ) except Exception as e : logging . error ( e ) default args = { "owner" : DAG OWNER NAME , "depends on past" : False , "email" : ALERT EMAIL ADDRESSES , "email on failure" : True , "email on retry" : False , "start date" : START DATE , "retries" : 1 , "retry delay" : timedelta ( minutes = 1 ), } dag = DAG ( DAG ID , default args = default args , schedule interval = SCHEDULE INTERVAL , start date = START DATE , ) if hasattr ( dag , "doc md" ): dag . doc md = doc if hasattr ( dag , "catchup" ): dag . catchup = False def print configuration function ( context ): logging . info ( "Loading Configurations..." ) dag run conf = context . get ( "dag run" ) . conf logging . info ( "dag run.conf: " + str ( dag run conf )) max db entry age in days = None if dag run conf : max db entry age in days = dag run conf . get ( "maxDBEntryAgeInDays" , None ) logging . info ( "maxDBEntryAgeInDays from dag run.conf: " + str ( dag run conf )) if max db entry age in days is None or max db entry age in days < 1 : logging . info ( "maxDBEntryAgeInDays conf variable isn't included or Variable " + "value is less than 1.
- Put the DAG in your gcs bucket. """ from datetime import datetime , timedelta import logging import os import airflow from airflow import settings from airflow.jobs import BaseJob from airflow.models import ( DAG , DagModel , DagRun , Log , SlaMiss , TaskInstance , Variable , XCom , ) from airflow.operators.python operator import PythonOperator from airflow.version import version as airflow version import dateutil.parser from sqlalchemy import and , func from sqlalchemy.exc import ProgrammingError from sqlalchemy.orm import load only try : airflow.utils.timezone is available from v1.10 onwards from airflow.utils import timezone now = timezone . utcnow except ImportError : now = datetime . utcnow airflow-db-cleanup DAG ID = os . path . basename ( file ) . replace ( ".pyc" , "" ) . replace ( ".py" , "" ) START DATE = airflow . utils . dates . days ago ( 1 ) How often to Run. @daily - Once a day at Midnight (UTC) SCHEDULE INTERVAL = "@daily" Who is listed as the owner of this DAG in the Airflow Web Server DAG OWNER NAME = "operations" List of email address to send email alerts to if this job fails ALERT EMAIL ADDRESSES = [] Airflow version used by the environment in list form, value stored in airflow version is in format e.g "1.10.15+composer" AIRFLOW VERSION = airflow version [: - len ( "+composer" )] . split ( "." ) Length to retain the log files if not already provided in the conf.
- COMPOSER SUFFIX = "+composer" if version . endswith ( COMPOSER SUFFIX ): airflow version without suffix = version [: - len ( COMPOSER SUFFIX )] else : airflow version without suffix = version airflow version str = airflow version without suffix . split ( "." ) return tuple ([ int ( s ) for s in airflow version str ]) now = timezone . utcnow airflow-db-cleanup DAG ID = os . path . basename ( file ) . replace ( ".pyc" , "" ) . replace ( ".py" , "" ) START DATE = airflow . utils . dates . days ago ( 1 ) How often to Run. @daily - Once a day at Midnight (UTC).

