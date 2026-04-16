---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:12:02.743Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Airflow 1.10.15 support"
feature_slug: "airflow-1-10-15-support"
latest_feature_date: "2021-04-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag"
  - "https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac"
  - "https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database"
keywords:
  - "include"
  - "images"
  - "airflow"
  - "apache"
---

# Airflow 1.10.15 support

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer images include Apache Airflow 1.10.15.

## Extended Definition

Cloud Composer images include Apache Airflow 1.10.15.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag](https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag)
- [https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac](https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac)
- [https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database](https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database)

## Supporting Pages

### "Quickstart: Run an Apache Airflow DAG in Cloud Composer\_3 \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag](https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag)
- Source ID: `site-docs-root`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Save a copy of the quickstart.py file on your local machine: import datetime from airflow import models from airflow.operators import bash If you are running Airflow in more than one time zone see https://airflow.apache.org/docs/apache-airflow/stable/timezone.html for best practices YESTERDAY = datetime . datetime . now () - datetime . timedelta ( days = 1 ) default args = { "owner" : "Composer Example" , "depends on past" : False , "email" : [ "" ], "email on failure" : False , "email on retry" : False , "retries" : 1 , "retry delay" : datetime . timedelta ( minutes = 5 ), "start date" : YESTERDAY , } with models .
- What's next Adding and updating DAGs Writing DAGs Overriding Airflow configurations Accessing Airflow UI Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Run an Apache Airflow DAG in Cloud Composer 3 Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 This quickstart guide shows you how to create a Cloud Composer environment and run an Apache Airflow DAG in Cloud Composer 3.
- If you are new to Airflow , see the Airflow concepts tutorial in Apache Airflow documentation for more information about Airflow concepts, objects, and their usage.

### "Using Airflow UI Access Control \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac](https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac)
- Source ID: `site-iam-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- What's next Override Airflow configuration options Security overview Cloud Composer access control Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Apache Airflow Access Control is a feature of Airflow, with its own model of users, roles, permissions, which is different from IAM.
- Apache Airflow Access Control model allows to reduce visibility in Airflow UI and DAG UI based on user role.
- Built-in Airflow roles include Admin, Op, User, Viewer, and Public.

### Clean up the Airflow database \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database](https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database)
- Source ID: `site-iam-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- DATABASE OBJECTS = [ { "airflow db model" : DagRun , "age check column" : DagRun . execution date , "keep last" : True , "keep last filters" : [ DagRun . external trigger . is ( False )], "keep last group by" : DagRun . dag id , }, { "airflow db model" : TaskInstance , "age check column" : TaskInstance . start date , "keep last" : False , "keep last filters" : None , "keep last group by" : None , }, { "airflow db model" : Log , "age check column" : Log . dttm , "keep last" : False , "keep last filters" : None , "keep last group by" : None , }, { "airflow db model" : XCom , "age check column" : XCom . execution date if AIRFLOW VERSION < ( 2 , 2 , 5 ) else XCom . timestamp , "keep last" : False , "keep last filters" : None , "keep last group by" : None , }, { "airflow db model" : SlaMiss , "age check column" : SlaMiss . execution date , "keep last" : False , "keep last filters" : None , "keep last group by" : None , }, { "airflow db model" : DagModel , "age check column" : DagModel . last parsed time , "keep last" : False , "keep last filters" : None , "keep last group by" : None , }, ] Check for TaskReschedule model. try : from airflow.models import TaskReschedule DATABASE OBJECTS . append ( { "airflow db model" : TaskReschedule , "age check column" : TaskReschedule . execution date if AIRFLOW VERSION < ( 2 , 2 , 0 ) else TaskReschedule . start date , "keep last" : False , "keep last filters" : None , "keep last group by" : None , } ) except Exception as e : logging . error ( e ) Check for TaskFail model. try : from airflow.models import TaskFail DATABASE OBJECTS . append ( { "airflow db model" : TaskFail , "age check column" : TaskFail . start date , "keep last" : False , "keep last filters" : None , "keep last group by" : None , } ) except Exception as e : logging . error ( e ) Check for RenderedTaskInstanceFields model. if AIRFLOW VERSION < ( 2 , 4 , 0 ): try : from airflow.models import RenderedTaskInstanceFields DATABASE OBJECTS . append ( { "airflow db model" : RenderedTaskInstanceFields , "age check column" : RenderedTaskInstanceFields . execution date , "keep last" : False , "keep last filters" : None , "keep last group by" : None , } ) except Exception as e : logging . error ( e ) Check for ImportError model. try : from airflow.models import ImportError DATABASE OBJECTS . append ( { "airflow db model" : ImportError , "age check column" : ImportError . timestamp , "keep last" : False , "keep last filters" : None , "keep last group by" : None , "do not delete by dag id" : True , } ) except Exception as e : logging . error ( e ) if AIRFLOW VERSION < ( 2 , 6 , 0 ): try : from airflow.jobs.base job import BaseJob DATABASE OBJECTS . append ( { "airflow db model" : BaseJob , "age check column" : BaseJob . latest heartbeat , "keep last" : False , "keep last filters" : None , "keep last group by" : None , } ) except Exception as e : logging . error ( e ) else : try : from airflow.jobs.job import Job DATABASE OBJECTS . append ( { "airflow db model" : Job , "age check column" : Job . latest heartbeat , "keep last" : False , "keep last filters" : None , "keep last group by" : None , } ) except Exception as e : logging . error ( e ) default args = { "owner" : DAG OWNER NAME , "depends on past" : False , "email" : ALERT EMAIL ADDRESSES , "email on failure" : True , "email on retry" : False , "start date" : START DATE , "retries" : 1 , "retry delay" : timedelta ( minutes = 1 ), } dag = DAG ( DAG ID , default args = default args , schedule interval = SCHEDULE INTERVAL , start date = START DATE , ) if hasattr ( dag , "doc md" ): dag . doc md = doc if hasattr ( dag , "catchup" ): dag . catchup = False def print configuration function ( context ): logging . info ( "Loading Configurations..." ) dag run conf = context . get ( "dag run" ) . conf logging . info ( "dag run.conf: " + str ( dag run conf )) max db entry age in days = None if dag run conf : max db entry age in days = dag run conf . get ( "maxDBEntryAgeInDays" , None ) logging . info ( "maxDBEntryAgeInDays from dag run.conf: " + str ( dag run conf )) if max db entry age in days is None or max db entry age in days < 1 : logging . info ( "maxDBEntryAgeInDays conf variable isn't included or Variable " + "value is less than 1.
- DATABASE OBJECTS = [ { "airflow db model" : BaseJob , "age check column" : BaseJob . latest heartbeat , "keep last" : False , "keep last filters" : None , "keep last group by" : None , }, { "airflow db model" : DagRun , "age check column" : DagRun . execution date , "keep last" : True , "keep last filters" : [ DagRun . external trigger . is ( False )], "keep last group by" : DagRun . dag id , }, { "airflow db model" : TaskInstance , "age check column" : TaskInstance . execution date , "keep last" : False , "keep last filters" : None , "keep last group by" : None , }, { "airflow db model" : Log , "age check column" : Log . dttm , "keep last" : False , "keep last filters" : None , "keep last group by" : None , }, { "airflow db model" : XCom , "age check column" : XCom . execution date , "keep last" : False , "keep last filters" : None , "keep last group by" : None , }, { "airflow db model" : SlaMiss , "age check column" : SlaMiss . execution date , "keep last" : False , "keep last filters" : None , "keep last group by" : None , }, { "airflow db model" : DagModel , "age check column" : DagModel . last scheduler run , "keep last" : False , "keep last filters" : None , "keep last group by" : None , }, ] Check for TaskReschedule model try : from airflow.models import TaskReschedule DATABASE OBJECTS . append ( { "airflow db model" : TaskReschedule , "age check column" : TaskReschedule . execution date , "keep last" : False , "keep last filters" : None , "keep last group by" : None , } ) except Exception as e : logging . error ( e ) Check for TaskFail model try : from airflow.models import TaskFail DATABASE OBJECTS . append ( { "airflow db model" : TaskFail , "age check column" : TaskFail . execution date , "keep last" : False , "keep last filters" : None , "keep last group by" : None , } ) except Exception as e : logging . error ( e ) Check for ImportError model try : from airflow.models import ImportError DATABASE OBJECTS . append ( { "airflow db model" : ImportError , "age check column" : ImportError . timestamp , "keep last" : False , "keep last filters" : None , "keep last group by" : None , "do not delete by dag id" : True , } ) except Exception as e : logging . error ( e ) default args = { "owner" : DAG OWNER NAME , "depends on past" : False , "email" : ALERT EMAIL ADDRESSES , "email on failure" : True , "email on retry" : False , "start date" : START DATE , "retries" : 1 , "retry delay" : timedelta ( minutes = 1 ), } dag = DAG ( DAG ID , default args = default args , schedule interval = SCHEDULE INTERVAL , start date = START DATE , ) if hasattr ( dag , "doc md" ): dag . doc md = doc if hasattr ( dag , "catchup" ): dag . catchup = False def print configuration function ( context ): logging . info ( "Loading Configurations..." ) dag run conf = context . get ( "dag run" ) . conf logging . info ( "dag run.conf: " + str ( dag run conf )) max db entry age in days = None if dag run conf : max db entry age in days = dag run conf . get ( "maxDBEntryAgeInDays" , None ) logging . info ( "maxDBEntryAgeInDays from dag run.conf: " + str ( dag run conf )) if max db entry age in days is None or max db entry age in days < 1 : logging . info ( "maxDBEntryAgeInDays conf variable isn't included or Variable " + "value is less than 1.
- This data includes information and logs related to past DAG runs, tasks, and other Airflow operations.
- Session () logging . info ( "Retrieving max execution date from XCom" ) max date = context [ "ti" ] . xcom pull ( task ids = print configuration . task id , key = "max date" ) max date = dateutil . parser . parse ( max date ) # stored as iso8601 str in xcom airflow db model = context [ "params" ] . get ( "airflow db model" ) state = context [ "params" ] . get ( "state" ) age check column = context [ "params" ] . get ( "age check column" ) keep last = context [ "params" ] . get ( "keep last" ) keep last filters = context [ "params" ] . get ( "keep last filters" ) keep last group by = context [ "params" ] . get ( "keep last group by" ) logging . info ( "Configurations:" ) logging . info ( "max date: " + str ( max date )) logging . info ( "enable delete: " + str ( ENABLE DELETE )) logging . info ( "session: " + str ( session )) logging . info ( "airflow db model: " + str ( airflow db model )) logging . info ( "state: " + str ( state )) logging . info ( "age check column: " + str ( age check column )) logging . info ( "keep last: " + str ( keep last )) logging . info ( "keep last filters: " + str ( keep last filters )) logging . info ( "keep last group by: " + str ( keep last group by )) logging . info ( "" ) logging . info ( "Running Cleanup Process..." ) try : if context [ "params" ] . get ( "do not delete by dag id" ): query = build query ( session , airflow db model , age check column , max date , keep last , keep last filters , keep last group by , ) if PRINT DELETES : print query ( query , airflow db model , age check column ) if ENABLE DELETE : logging . info ( "Performing Delete..." ) query . delete ( synchronize session = False ) session . commit () else : dags = session . query ( airflow db model . dag id ) . distinct () session . commit () list dags = [ str ( list ( dag )[ 0 ]) for dag in dags ] for dag in list dags : query = build query ( session , airflow db model , age check column , max date , keep last , keep last filters , keep last group by , ) query = query . filter ( airflow db model . dag id == dag ) if PRINT DELETES : print query ( query , airflow db model , age check column ) if ENABLE DELETE : logging . info ( "Performing Delete..." ) query . delete ( synchronize session = False ) session . commit () if not ENABLE DELETE : logging . warn ( "You've opted to skip deleting the db entries. " "Set ENABLE DELETE to True to delete entries!!!" ) logging . info ( "Finished Running Cleanup Process" ) except ProgrammingError as e : logging . error ( e ) logging . error ( str ( airflow db model ) + " is not present in the metadata. " "Skipping..." ) finally : session . close () for db object in DATABASE OBJECTS : cleanup op = PythonOperator ( task id = "cleanup " + str ( db object [ "airflow db model" ] . name ), python callable = cleanup function , params = db object , provide context = True , dag = dag , ) print configuration . set downstream ( cleanup op ) Maintain database performance Airflow database performance issues can lead to overall DAG execution issues.

