---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:34:18.863Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Gemini Cloud Assist task investigations"
feature_slug: "gemini-cloud-assist-task-investigations"
latest_feature_date: "2025-11-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database"
  - "https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard"
  - "https://docs.cloud.google.com/composer/docs/latest/view-dags"
keywords:
  - "gemini"
  - "assist"
  - "task"
  - "investigations"
  - "help"
  - "analyze"
  - "failed"
  - "airflow"
---

# Gemini Cloud Assist task investigations

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Gemini Cloud Assist investigations help analyze failed Airflow tasks.

## Extended Definition

Gemini Cloud Assist investigations help analyze failed Airflow tasks.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database](https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database)
- [https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard](https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard)
- [https://docs.cloud.google.com/composer/docs/latest/view-dags](https://docs.cloud.google.com/composer/docs/latest/view-dags)

## Supporting Pages

### Clean up the Airflow database \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database](https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database)
- Source ID: `site-iam-reference`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Session () session . execute ( "ANALYZE" ) session . commit () session . close () analyze op = PythonOperator ( task id = "analyze query" , python callable = analyze db , provide context = True , dag = dag ) cleanup session op = PythonOperator ( task id = "cleanup sessions" , python callable = cleanup sessions , provide context = True , dag = dag , ) cleanup session op . set downstream ( analyze op ) for db object in DATABASE OBJECTS : cleanup op = PythonOperator ( task id = "cleanup " + str ( db object [ "airflow db model" ] . name ), python callable = cleanup function , params = db object , provide context = True , dag = dag , ) print configuration . set downstream ( cleanup op ) cleanup op . set downstream ( analyze op ) If your environment uses Airflow 1, use the following DAG instead: """ A maintenance workflow that you can deploy into Airflow to periodically clean out the DagRun, TaskInstance, Log, XCom, Job DB and SlaMiss entries to avoid having too much data in your Airflow MetaStore.
- DATABASE OBJECTS = [ { "airflow db model" : DagRun , "age check column" : DagRun . execution date , "keep last" : True , "keep last filters" : [ DagRun . external trigger . is ( False )], "keep last group by" : DagRun . dag id , }, { "airflow db model" : TaskInstance , "age check column" : TaskInstance . start date , "keep last" : False , "keep last filters" : None , "keep last group by" : None , }, { "airflow db model" : Log , "age check column" : Log . dttm , "keep last" : False , "keep last filters" : None , "keep last group by" : None , }, { "airflow db model" : XCom , "age check column" : XCom . execution date if AIRFLOW VERSION < ( 2 , 2 , 5 ) else XCom . timestamp , "keep last" : False , "keep last filters" : None , "keep last group by" : None , }, { "airflow db model" : SlaMiss , "age check column" : SlaMiss . execution date , "keep last" : False , "keep last filters" : None , "keep last group by" : None , }, { "airflow db model" : DagModel , "age check column" : DagModel . last parsed time , "keep last" : False , "keep last filters" : None , "keep last group by" : None , }, ] Check for TaskReschedule model. try : from airflow.models import TaskReschedule DATABASE OBJECTS . append ( { "airflow db model" : TaskReschedule , "age check column" : TaskReschedule . execution date if AIRFLOW VERSION < ( 2 , 2 , 0 ) else TaskReschedule . start date , "keep last" : False , "keep last filters" : None , "keep last group by" : None , } ) except Exception as e : logging . error ( e ) Check for TaskFail model. try : from airflow.models import TaskFail DATABASE OBJECTS . append ( { "airflow db model" : TaskFail , "age check column" : TaskFail . start date , "keep last" : False , "keep last filters" : None , "keep last group by" : None , } ) except Exception as e : logging . error ( e ) Check for RenderedTaskInstanceFields model. if AIRFLOW VERSION < ( 2 , 4 , 0 ): try : from airflow.models import RenderedTaskInstanceFields DATABASE OBJECTS . append ( { "airflow db model" : RenderedTaskInstanceFields , "age check column" : RenderedTaskInstanceFields . execution date , "keep last" : False , "keep last filters" : None , "keep last group by" : None , } ) except Exception as e : logging . error ( e ) Check for ImportError model. try : from airflow.models import ImportError DATABASE OBJECTS . append ( { "airflow db model" : ImportError , "age check column" : ImportError . timestamp , "keep last" : False , "keep last filters" : None , "keep last group by" : None , "do not delete by dag id" : True , } ) except Exception as e : logging . error ( e ) if AIRFLOW VERSION < ( 2 , 6 , 0 ): try : from airflow.jobs.base job import BaseJob DATABASE OBJECTS . append ( { "airflow db model" : BaseJob , "age check column" : BaseJob . latest heartbeat , "keep last" : False , "keep last filters" : None , "keep last group by" : None , } ) except Exception as e : logging . error ( e ) else : try : from airflow.jobs.job import Job DATABASE OBJECTS . append ( { "airflow db model" : Job , "age check column" : Job . latest heartbeat , "keep last" : False , "keep last filters" : None , "keep last group by" : None , } ) except Exception as e : logging . error ( e ) default args = { "owner" : DAG OWNER NAME , "depends on past" : False , "email" : ALERT EMAIL ADDRESSES , "email on failure" : True , "email on retry" : False , "start date" : START DATE , "retries" : 1 , "retry delay" : timedelta ( minutes = 1 ), } dag = DAG ( DAG ID , default args = default args , schedule interval = SCHEDULE INTERVAL , start date = START DATE , ) if hasattr ( dag , "doc md" ): dag . doc md = doc if hasattr ( dag , "catchup" ): dag . catchup = False def print configuration function ( context ): logging . info ( "Loading Configurations..." ) dag run conf = context . get ( "dag run" ) . conf logging . info ( "dag run.conf: " + str ( dag run conf )) max db entry age in days = None if dag run conf : max db entry age in days = dag run conf . get ( "maxDBEntryAgeInDays" , None ) logging . info ( "maxDBEntryAgeInDays from dag run.conf: " + str ( dag run conf )) if max db entry age in days is None or max db entry age in days < 1 : logging . info ( "maxDBEntryAgeInDays conf variable isn't included or Variable " + "value is less than 1.
- DATABASE OBJECTS = [ { "airflow db model" : BaseJob , "age check column" : BaseJob . latest heartbeat , "keep last" : False , "keep last filters" : None , "keep last group by" : None , }, { "airflow db model" : DagRun , "age check column" : DagRun . execution date , "keep last" : True , "keep last filters" : [ DagRun . external trigger . is ( False )], "keep last group by" : DagRun . dag id , }, { "airflow db model" : TaskInstance , "age check column" : TaskInstance . execution date , "keep last" : False , "keep last filters" : None , "keep last group by" : None , }, { "airflow db model" : Log , "age check column" : Log . dttm , "keep last" : False , "keep last filters" : None , "keep last group by" : None , }, { "airflow db model" : XCom , "age check column" : XCom . execution date , "keep last" : False , "keep last filters" : None , "keep last group by" : None , }, { "airflow db model" : SlaMiss , "age check column" : SlaMiss . execution date , "keep last" : False , "keep last filters" : None , "keep last group by" : None , }, { "airflow db model" : DagModel , "age check column" : DagModel . last scheduler run , "keep last" : False , "keep last filters" : None , "keep last group by" : None , }, ] Check for TaskReschedule model try : from airflow.models import TaskReschedule DATABASE OBJECTS . append ( { "airflow db model" : TaskReschedule , "age check column" : TaskReschedule . execution date , "keep last" : False , "keep last filters" : None , "keep last group by" : None , } ) except Exception as e : logging . error ( e ) Check for TaskFail model try : from airflow.models import TaskFail DATABASE OBJECTS . append ( { "airflow db model" : TaskFail , "age check column" : TaskFail . execution date , "keep last" : False , "keep last filters" : None , "keep last group by" : None , } ) except Exception as e : logging . error ( e ) Check for ImportError model try : from airflow.models import ImportError DATABASE OBJECTS . append ( { "airflow db model" : ImportError , "age check column" : ImportError . timestamp , "keep last" : False , "keep last filters" : None , "keep last group by" : None , "do not delete by dag id" : True , } ) except Exception as e : logging . error ( e ) default args = { "owner" : DAG OWNER NAME , "depends on past" : False , "email" : ALERT EMAIL ADDRESSES , "email on failure" : True , "email on retry" : False , "start date" : START DATE , "retries" : 1 , "retry delay" : timedelta ( minutes = 1 ), } dag = DAG ( DAG ID , default args = default args , schedule interval = SCHEDULE INTERVAL , start date = START DATE , ) if hasattr ( dag , "doc md" ): dag . doc md = doc if hasattr ( dag , "catchup" ): dag . catchup = False def print configuration function ( context ): logging . info ( "Loading Configurations..." ) dag run conf = context . get ( "dag run" ) . conf logging . info ( "dag run.conf: " + str ( dag run conf )) max db entry age in days = None if dag run conf : max db entry age in days = dag run conf . get ( "maxDBEntryAgeInDays" , None ) logging . info ( "maxDBEntryAgeInDays from dag run.conf: " + str ( dag run conf )) if max db entry age in days is None or max db entry age in days < 1 : logging . info ( "maxDBEntryAgeInDays conf variable isn't included or Variable " + "value is less than 1.
- Session () logging . info ( "Retrieving max execution date from XCom" ) max date = context [ "ti" ] . xcom pull ( task ids = print configuration . task id , key = "max date" ) max date = dateutil . parser . parse ( max date ) # stored as iso8601 str in xcom airflow db model = context [ "params" ] . get ( "airflow db model" ) state = context [ "params" ] . get ( "state" ) age check column = context [ "params" ] . get ( "age check column" ) keep last = context [ "params" ] . get ( "keep last" ) keep last filters = context [ "params" ] . get ( "keep last filters" ) keep last group by = context [ "params" ] . get ( "keep last group by" ) logging . info ( "Configurations:" ) logging . info ( "max date: " + str ( max date )) logging . info ( "enable delete: " + str ( ENABLE DELETE )) logging . info ( "session: " + str ( session )) logging . info ( "airflow db model: " + str ( airflow db model )) logging . info ( "state: " + str ( state )) logging . info ( "age check column: " + str ( age check column )) logging . info ( "keep last: " + str ( keep last )) logging . info ( "keep last filters: " + str ( keep last filters )) logging . info ( "keep last group by: " + str ( keep last group by )) logging . info ( "" ) logging . info ( "Running Cleanup Process..." ) try : if context [ "params" ] . get ( "do not delete by dag id" ): query = build query ( session , airflow db model , age check column , max date , keep last , keep last filters , keep last group by , ) if PRINT DELETES : print query ( query , airflow db model , age check column ) if ENABLE DELETE : logging . info ( "Performing Delete..." ) query . delete ( synchronize session = False ) session . commit () else : dags = session . query ( airflow db model . dag id ) . distinct () session . commit () list dags = [ str ( list ( dag )[ 0 ]) for dag in dags ] for dag in list dags : query = build query ( session , airflow db model , age check column , max date , keep last , keep last filters , keep last group by , ) query = query . filter ( airflow db model . dag id == dag ) if PRINT DELETES : print query ( query , airflow db model , age check column ) if ENABLE DELETE : logging . info ( "Performing Delete..." ) query . delete ( synchronize session = False ) session . commit () if not ENABLE DELETE : logging . warn ( "You've opted to skip deleting the db entries. " "Set ENABLE DELETE to True to delete entries!!!" ) logging . info ( "Finished Running Cleanup Process" ) except ProgrammingError as e : logging . error ( e ) logging . error ( str ( airflow db model ) + " is not present in the metadata. " "Skipping..." ) finally : session . close () for db object in DATABASE OBJECTS : cleanup op = PythonOperator ( task id = "cleanup " + str ( db object [ "airflow db model" ] . name ), python callable = cleanup function , params = db object , provide context = True , dag = dag , ) print configuration . set downstream ( cleanup op ) Maintain database performance Airflow database performance issues can lead to overall DAG execution issues.

### View DAGs, DAG runs, and tasks \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/latest/view-dags](https://docs.cloud.google.com/composer/docs/latest/view-dags)
- Source ID: `site-docs-root`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can follow the link in the Run ID column to get additional information about tasks. gcloud Run the dags list-runs Airflow CLI command: gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ dags list-runs -- -d DAG ID Replace: ENVIRONMENT NAME with the name of the environment.
- You can follow the link in the Run after column to get additional information about tasks. (Airflow 2) In the Airflow UI, select Browse > DAG Runs .
- You can get additional information about task instances by running tasks state and tasks states-for-dag-run Airflow CLI commands.
- In the Airflow UI, on the DAGs page, a list of DAGs for your environment is displayed. gcloud Run the dags list Airflow CLI command: gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ dags list -- -o plain Replace: ENVIRONMENT NAME with the name of the environment.

### Use the monitoring dashboard \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard](https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard)
- Source ID: `site-docs-root`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- If an Airflow worker Pod is evicted, all task instances running on that Pod are interrupted, and later marked as failed by Airflow.
- DAG parsing and task scheduling done by the Airflow scheduler (click to enlarge) DAG parse time is the amount of time it takes for the Airflow Scheduler to read a DAG file and parse it.
- If an Airflow task instance is abnormally interrupted (for example, detected as a zombie), it will also remain unacknowledged until the visibility timeout is reached.
- Before the Airflow scheduler can schedule any task from a DAG, the scheduler must parse the DAG file to discover the structure of the DAG and defined tasks.

