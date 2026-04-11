---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:49.151Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Airflow task state failure handling"
feature_slug: "airflow-task-state-failure-handling"
latest_feature_date: "2018-07-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/release-notes"
  - "https://docs.cloud.google.com/composer/docs/composer-1/known-issues"
  - "https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database"
keywords:
  - "airflow"
  - "task"
  - "state"
  - "failure"
  - "handling"
  - "fixed"
  - "the"
  - "issue"
---

# Airflow task state failure handling

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Fixed the issue where Airflow tasks could remain in queued or running states for long periods before failing.

## Extended Definition

Fixed the issue where Airflow tasks could remain in queued or running states for long periods before failing.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- [https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database](https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database)

## Supporting Pages

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- July 19, 2018 Feature Fixed the following Airflow issues: Fixed the issue where Airflow tasks were stuck in queued or running states for extended periods of time before failing.
- Fixed (Cloud Composer 1) Fixed the problem that caused increased DAG and task failures in Public IP environments because of Airflow database connectivity issues.
- Change Cloud Composer 2.9.5 images are available: composer-2.9.5-airflow-2.9.3 composer-2.9.5-airflow-2.9.1 (default) composer-2.9.5-airflow-2.7.3 Change New Airflow builds are available in Cloud Composer 3: composer-3-airflow-2.9.3-build.1 composer-3-airflow-2.9.1-build.8 (default) composer-3-airflow-2.7.3-build.17 September 18, 2024 Fixed (Cloud Composer 3) Fixed the issue that caused KubernetesPodOperator tasks to fail if they ran for longer than 15 minutes.
- Change Cloud Composer 1.19.13 and 2.0.30 images are available: composer-1.19.13-airflow-1.10.15 (default) composer-1.19.13-airflow-2.1.4 composer-1.19.13-airflow-2.2.5 composer-1.19.13-airflow-2.3.3 composer-2.0.30-airflow-2.1.4 composer-2.0.30-airflow-2.2.5 composer-2.0.30-airflow-2.3.3 October 18, 2022 Fixed (Available without upgrading) Fixed the issue with the CrashLoopBackOff task status in Airflow 2.3.

### Known issues \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- Source ID: `site-iam-reference`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Intermittent Task Failure during scheduling in Cloud Composer The issue is seen in the Airflow scheduler for the task instance during the execution of a task.
- Airflow workers or schedulers might experience issues when accessing the environment's Cloud Storage bucket Cloud Composer uses gcsfuse to access the /data folder in the environment's bucket and to save Airflow task logs to the /logs directory (if enabled).
- If you encounter this issue in Airflow 1 in a long-running task, increase the value of the [celery broker transport options]visibility timeout Airflow configuration option (the default value is 604800 for Composer 1.17.0, 21600 for older environments).
- If you experience this issue then in the Airflow tasks logs you will see the following error message: "Can't connect to MySQL server on 'airflow-sqlproxy-service.default.svc.cluster.local' (104)" Cloud Composer team works on resolving this problem.

### Clean up the Airflow database \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database](https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database)
- Source ID: `site-iam-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- Session () logging . info ( "Retrieving max execution date from XCom" ) max date = context [ "ti" ] . xcom pull ( task ids = print configuration . task id , key = "max date" ) max date = dateutil . parser . parse ( max date ) # stored as iso8601 str in xcom airflow db model = context [ "params" ] . get ( "airflow db model" ) state = context [ "params" ] . get ( "state" ) age check column = context [ "params" ] . get ( "age check column" ) keep last = context [ "params" ] . get ( "keep last" ) keep last filters = context [ "params" ] . get ( "keep last filters" ) keep last group by = context [ "params" ] . get ( "keep last group by" ) logging . info ( "Configurations:" ) logging . info ( "max date: " + str ( max date )) logging . info ( "enable delete: " + str ( ENABLE DELETE )) logging . info ( "session: " + str ( session )) logging . info ( "airflow db model: " + str ( airflow db model )) logging . info ( "state: " + str ( state )) logging . info ( "age check column: " + str ( age check column )) logging . info ( "keep last: " + str ( keep last )) logging . info ( "keep last filters: " + str ( keep last filters )) logging . info ( "keep last group by: " + str ( keep last group by )) logging . info ( "" ) logging . info ( "Running Cleanup Process..." ) try : if context [ "params" ] . get ( "do not delete by dag id" ): query = build query ( session , airflow db model , age check column , max date , keep last , keep last filters , keep last group by , ) if PRINT DELETES : print query ( query , airflow db model , age check column ) if ENABLE DELETE : logging . info ( "Performing Delete..." ) query . delete ( synchronize session = False ) session . commit () else : dags = session . query ( airflow db model . dag id ) . distinct () session . commit () list dags = [ str ( list ( dag )[ 0 ]) for dag in dags ] for dag in list dags : query = build query ( session , airflow db model , age check column , max date , keep last , keep last filters , keep last group by , ) query = query . filter ( airflow db model . dag id == dag ) if PRINT DELETES : print query ( query , airflow db model , age check column ) if ENABLE DELETE : logging . info ( "Performing Delete..." ) query . delete ( synchronize session = False ) session . commit () if not ENABLE DELETE : logging . warn ( "You've opted to skip deleting the db entries. " "Set ENABLE DELETE to True to delete entries!!!" ) logging . info ( "Finished Running Cleanup Process" ) except ProgrammingError as e : logging . error ( e ) logging . error ( str ( airflow db model ) + " is not present in the metadata. " "Skipping..." ) finally : session . close () for db object in DATABASE OBJECTS : cleanup op = PythonOperator ( task id = "cleanup " + str ( db object [ "airflow db model" ] . name ), python callable = cleanup function , params = db object , provide context = True , dag = dag , ) print configuration . set downstream ( cleanup op ) Maintain database performance Airflow database performance issues can lead to overall DAG execution issues.
- Session () logging . info ( "Retrieving max execution date from XCom" ) max date = context [ "ti" ] . xcom pull ( task ids = print configuration . task id , key = "max date" ) max date = dateutil . parser . parse ( max date ) # stored as iso8601 str in xcom airflow db model = context [ "params" ] . get ( "airflow db model" ) state = context [ "params" ] . get ( "state" ) age check column = context [ "params" ] . get ( "age check column" ) keep last = context [ "params" ] . get ( "keep last" ) keep last filters = context [ "params" ] . get ( "keep last filters" ) keep last group by = context [ "params" ] . get ( "keep last group by" ) logging . info ( "Configurations:" ) logging . info ( "max date: " + str ( max date )) logging . info ( "enable delete: " + str ( ENABLE DELETE )) logging . info ( "session: " + str ( session )) logging . info ( "airflow db model: " + str ( airflow db model )) logging . info ( "state: " + str ( state )) logging . info ( "age check column: " + str ( age check column )) logging . info ( "keep last: " + str ( keep last )) logging . info ( "keep last filters: " + str ( keep last filters )) logging . info ( "keep last group by: " + str ( keep last group by )) logging . info ( "" ) logging . info ( "Running Cleanup Process..." ) try : if context [ "params" ] . get ( "do not delete by dag id" ): query = build query ( session = session , airflow db model = airflow db model , age check column = age check column , max date = max date , ) if PRINT DELETES : print query ( query , airflow db model , age check column ) if ENABLE DELETE : logging . info ( "Performing Delete..." ) query . delete ( synchronize session = False ) session . commit () else : dags = session . query ( airflow db model . dag id ) . distinct () session . commit () list dags = [ str ( list ( dag )[ 0 ]) for dag in dags ] + [ None ] for dag id in list dags : query = build query ( session = session , airflow db model = airflow db model , age check column = age check column , max date = max date , dag id = dag id , ) if PRINT DELETES : print query ( query , airflow db model , age check column ) if ENABLE DELETE : logging . info ( "Performing Delete..." ) query . delete ( synchronize session = False ) session . commit () if not ENABLE DELETE : logging . warning ( "You've opted to skip deleting the db entries. " "Set ENABLE DELETE to True to delete entries!!!" ) logging . info ( "Finished Running Cleanup Process" ) except ProgrammingError as e : logging . error ( e ) logging . error ( str ( airflow db model ) + " is not present in the metadata." + "Skipping..." ) finally : session . close () def cleanup sessions (): session = settings .
- Using Default '" + str ( DEFAULT MAX DB ENTRY AGE IN DAYS ) + "'" ) max db entry age in days = DEFAULT MAX DB ENTRY AGE IN DAYS max date = now () + timedelta ( - max db entry age in days ) logging . info ( "Finished Loading Configurations" ) logging . info ( "" ) logging . info ( "Configurations:" ) logging . info ( "max db entry age in days: " + str ( max db entry age in days )) logging . info ( "max date: " + str ( max date )) logging . info ( "enable delete: " + str ( ENABLE DELETE )) logging . info ( "" ) logging . info ( "Setting max execution date to XCom for Downstream Processes" ) context [ "ti" ] . xcom push ( key = "max date" , value = max date . isoformat ()) print configuration = PythonOperator ( task id = "print configuration" , python callable = print configuration function , provide context = True , dag = dag , ) def build query ( session , airflow db model , age check column , max date , keep last , keep last filters = None , keep last group by = None , ): query = session . query ( airflow db model ) . options ( load only ( age check column )) logging . info ( "INITIAL QUERY : " + str ( query )) if not keep last : query = query . filter ( age check column < = max date , ) else : subquery = session . query ( func . max ( DagRun . execution date )) workaround for MySQL "table specified twice" issue https://github.com/teamclairvoyant/airflow-maintenance-dags/issues/41 if keep last filters is not None : for entry in keep last filters : subquery = subquery . filter ( entry ) logging . info ( "SUB QUERY [keep last filters]: " + str ( subquery )) if keep last group by is not None : subquery = subquery . group by ( keep last group by ) logging . info ( "SUB QUERY [keep last group by]: " + str ( subquery )) subquery = subquery . from self () query = query . filter ( and ( age check column . notin ( subquery )), and ( age check column < = max date ) ) return query def print query ( query , airflow db model , age check column ): entries to delete = query . all () logging . info ( "Query: " + str ( query )) logging . info ( "Process will be Deleting the following " + str ( airflow db model . name ) + "(s):" ) for entry in entries to delete : date = str ( entry . dict [ str ( age check column ) . split ( "." )[ 1 ]]) logging . info ( " \t Entry: " + str ( entry ) + ", Date: " + date ) logging . info ( "Process will be Deleting " + str ( len ( entries to delete )) + " " + str ( airflow db model . name ) + "(s)" ) def cleanup function ( context ): session = settings .
- DATABASE OBJECTS = [ { "airflow db model" : DagRun , "age check column" : DagRun . execution date , "keep last" : True , "keep last filters" : [ DagRun . external trigger . is ( False )], "keep last group by" : DagRun . dag id , }, { "airflow db model" : TaskInstance , "age check column" : TaskInstance . start date , "keep last" : False , "keep last filters" : None , "keep last group by" : None , }, { "airflow db model" : Log , "age check column" : Log . dttm , "keep last" : False , "keep last filters" : None , "keep last group by" : None , }, { "airflow db model" : XCom , "age check column" : XCom . execution date if AIRFLOW VERSION < ( 2 , 2 , 5 ) else XCom . timestamp , "keep last" : False , "keep last filters" : None , "keep last group by" : None , }, { "airflow db model" : SlaMiss , "age check column" : SlaMiss . execution date , "keep last" : False , "keep last filters" : None , "keep last group by" : None , }, { "airflow db model" : DagModel , "age check column" : DagModel . last parsed time , "keep last" : False , "keep last filters" : None , "keep last group by" : None , }, ] Check for TaskReschedule model. try : from airflow.models import TaskReschedule DATABASE OBJECTS . append ( { "airflow db model" : TaskReschedule , "age check column" : TaskReschedule . execution date if AIRFLOW VERSION < ( 2 , 2 , 0 ) else TaskReschedule . start date , "keep last" : False , "keep last filters" : None , "keep last group by" : None , } ) except Exception as e : logging . error ( e ) Check for TaskFail model. try : from airflow.models import TaskFail DATABASE OBJECTS . append ( { "airflow db model" : TaskFail , "age check column" : TaskFail . start date , "keep last" : False , "keep last filters" : None , "keep last group by" : None , } ) except Exception as e : logging . error ( e ) Check for RenderedTaskInstanceFields model. if AIRFLOW VERSION < ( 2 , 4 , 0 ): try : from airflow.models import RenderedTaskInstanceFields DATABASE OBJECTS . append ( { "airflow db model" : RenderedTaskInstanceFields , "age check column" : RenderedTaskInstanceFields . execution date , "keep last" : False , "keep last filters" : None , "keep last group by" : None , } ) except Exception as e : logging . error ( e ) Check for ImportError model. try : from airflow.models import ImportError DATABASE OBJECTS . append ( { "airflow db model" : ImportError , "age check column" : ImportError . timestamp , "keep last" : False , "keep last filters" : None , "keep last group by" : None , "do not delete by dag id" : True , } ) except Exception as e : logging . error ( e ) if AIRFLOW VERSION < ( 2 , 6 , 0 ): try : from airflow.jobs.base job import BaseJob DATABASE OBJECTS . append ( { "airflow db model" : BaseJob , "age check column" : BaseJob . latest heartbeat , "keep last" : False , "keep last filters" : None , "keep last group by" : None , } ) except Exception as e : logging . error ( e ) else : try : from airflow.jobs.job import Job DATABASE OBJECTS . append ( { "airflow db model" : Job , "age check column" : Job . latest heartbeat , "keep last" : False , "keep last filters" : None , "keep last group by" : None , } ) except Exception as e : logging . error ( e ) default args = { "owner" : DAG OWNER NAME , "depends on past" : False , "email" : ALERT EMAIL ADDRESSES , "email on failure" : True , "email on retry" : False , "start date" : START DATE , "retries" : 1 , "retry delay" : timedelta ( minutes = 1 ), } dag = DAG ( DAG ID , default args = default args , schedule interval = SCHEDULE INTERVAL , start date = START DATE , ) if hasattr ( dag , "doc md" ): dag . doc md = doc if hasattr ( dag , "catchup" ): dag . catchup = False def print configuration function ( context ): logging . info ( "Loading Configurations..." ) dag run conf = context . get ( "dag run" ) . conf logging . info ( "dag run.conf: " + str ( dag run conf )) max db entry age in days = None if dag run conf : max db entry age in days = dag run conf . get ( "maxDBEntryAgeInDays" , None ) logging . info ( "maxDBEntryAgeInDays from dag run.conf: " + str ( dag run conf )) if max db entry age in days is None or max db entry age in days < 1 : logging . info ( "maxDBEntryAgeInDays conf variable isn't included or Variable " + "value is less than 1.

