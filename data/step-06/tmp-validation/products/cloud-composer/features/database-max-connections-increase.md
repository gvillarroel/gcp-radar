---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:12:02.603Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Database max_connections increase"
feature_slug: "database-max-connections-increase"
latest_feature_date: "2022-04-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database"
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-database"
  - "https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard"
keywords:
  - "increase"
  - "limits"
  - "connections"
  - "increases"
  - "database"
  - "airflow"
---

# Database max_connections increase

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer for Airflow 2 increases database max_connections limits to three times the default Cloud SQL values.

## Extended Definition

Cloud Composer for Airflow 2 increases database max_connections limits to three times the default Cloud SQL values.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database](https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database)
- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-database](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-database)
- [https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard](https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard)

## Supporting Pages

### Clean up the Airflow database \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database](https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database)
- Source ID: `site-iam-reference`
- Final score: 153
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you observe that the Airflow metadata database size metric increases significantly between runs of the maintenance DAG, consider running this DAG more often.
- Run the DB maintenance DAG on a schedule You can use the maintenance DAG to prune the content of your environment's Airflow database: Run the maintenance DAG periodically to keep the database size within limits.
- Limits for database size As the time goes, the Airflow database of your environment stores more and more data.
- DATABASE OBJECTS = [ { "airflow db model" : DagRun , "age check column" : DagRun . execution date , "keep last" : True , "keep last filters" : [ DagRun . external trigger . is ( False )], "keep last group by" : DagRun . dag id , }, { "airflow db model" : TaskInstance , "age check column" : TaskInstance . start date , "keep last" : False , "keep last filters" : None , "keep last group by" : None , }, { "airflow db model" : Log , "age check column" : Log . dttm , "keep last" : False , "keep last filters" : None , "keep last group by" : None , }, { "airflow db model" : XCom , "age check column" : XCom . execution date if AIRFLOW VERSION < ( 2 , 2 , 5 ) else XCom . timestamp , "keep last" : False , "keep last filters" : None , "keep last group by" : None , }, { "airflow db model" : SlaMiss , "age check column" : SlaMiss . execution date , "keep last" : False , "keep last filters" : None , "keep last group by" : None , }, { "airflow db model" : DagModel , "age check column" : DagModel . last parsed time , "keep last" : False , "keep last filters" : None , "keep last group by" : None , }, ] Check for TaskReschedule model. try : from airflow.models import TaskReschedule DATABASE OBJECTS . append ( { "airflow db model" : TaskReschedule , "age check column" : TaskReschedule . execution date if AIRFLOW VERSION < ( 2 , 2 , 0 ) else TaskReschedule . start date , "keep last" : False , "keep last filters" : None , "keep last group by" : None , } ) except Exception as e : logging . error ( e ) Check for TaskFail model. try : from airflow.models import TaskFail DATABASE OBJECTS . append ( { "airflow db model" : TaskFail , "age check column" : TaskFail . start date , "keep last" : False , "keep last filters" : None , "keep last group by" : None , } ) except Exception as e : logging . error ( e ) Check for RenderedTaskInstanceFields model. if AIRFLOW VERSION < ( 2 , 4 , 0 ): try : from airflow.models import RenderedTaskInstanceFields DATABASE OBJECTS . append ( { "airflow db model" : RenderedTaskInstanceFields , "age check column" : RenderedTaskInstanceFields . execution date , "keep last" : False , "keep last filters" : None , "keep last group by" : None , } ) except Exception as e : logging . error ( e ) Check for ImportError model. try : from airflow.models import ImportError DATABASE OBJECTS . append ( { "airflow db model" : ImportError , "age check column" : ImportError . timestamp , "keep last" : False , "keep last filters" : None , "keep last group by" : None , "do not delete by dag id" : True , } ) except Exception as e : logging . error ( e ) if AIRFLOW VERSION < ( 2 , 6 , 0 ): try : from airflow.jobs.base job import BaseJob DATABASE OBJECTS . append ( { "airflow db model" : BaseJob , "age check column" : BaseJob . latest heartbeat , "keep last" : False , "keep last filters" : None , "keep last group by" : None , } ) except Exception as e : logging . error ( e ) else : try : from airflow.jobs.job import Job DATABASE OBJECTS . append ( { "airflow db model" : Job , "age check column" : Job . latest heartbeat , "keep last" : False , "keep last filters" : None , "keep last group by" : None , } ) except Exception as e : logging . error ( e ) default args = { "owner" : DAG OWNER NAME , "depends on past" : False , "email" : ALERT EMAIL ADDRESSES , "email on failure" : True , "email on retry" : False , "start date" : START DATE , "retries" : 1 , "retry delay" : timedelta ( minutes = 1 ), } dag = DAG ( DAG ID , default args = default args , schedule interval = SCHEDULE INTERVAL , start date = START DATE , ) if hasattr ( dag , "doc md" ): dag . doc md = doc if hasattr ( dag , "catchup" ): dag . catchup = False def print configuration function ( context ): logging . info ( "Loading Configurations..." ) dag run conf = context . get ( "dag run" ) . conf logging . info ( "dag run.conf: " + str ( dag run conf )) max db entry age in days = None if dag run conf : max db entry age in days = dag run conf . get ( "maxDBEntryAgeInDays" , None ) logging . info ( "maxDBEntryAgeInDays from dag run.conf: " + str ( dag run conf )) if max db entry age in days is None or max db entry age in days < 1 : logging . info ( "maxDBEntryAgeInDays conf variable isn't included or Variable " + "value is less than 1.

### Access the Airflow database \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-database](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-database)
- Source ID: `site-iam-reference`
- Final score: 118
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Example: gcloud sql instances create example-instance \ --database-version = POSTGRES 15 \ --cpu = 2 \ --memory = 4GB \ --storage-size = 100GB \ --storage-auto-increase \ --region = us-central1 \ --root-password = example password Run the following command to create a database named airflow db : gcloud sql databases create airflow db \ --instance = SQL INSTANCE NAME Replace the following: SQL INSTANCE NAME : name of the Cloud SQL instance.
- Example: gcloud composer environments snapshots save \ example-environment \ --location us-central1 \ --snapshot-location "gs://example-bucket/environment snapshots" Example result: Response: '@type': type.googleapis.com/google.cloud.orchestration.airflow.service.v1.SaveSnapshotResponse snapshotPath: gs://example-bucket/environment snapshots/example-environment us-central1 2026-03-17T11-26-24 Prepare the destination database If you don't have a Cloud SQL instance, create one.
- DAG ( "airflow db connection example" , start date = datetime . datetime ( 2025 , 1 , 1 ), schedule = None , catchup = False ) as dag : SQLExecuteQueryOperator ( task id = "run airflow db query" , dag = dag , conn id = "airflow db" , database = SQL DATABASE , sql = "SELECT FROM dag LIMIT 10;" , ) For more information about using the SQLExecuteQueryOperator, see the How-to Guide for Postgres using SQLExecuteQueryOperator in the Airflow documentation.
- Example: gcloud sql import sql example-instance \ $( gcloud storage ls gs://example-bucket/environment snapshots/example-environment us-central1 2026-03-17T11-26-24/ .sql.gz ) \ --database = airflow db \ --user = postgres (Recommended) Revoke the bucket access after the import is complete We recommend revoking Cloud Storage bucket access permissions from the service account of your Cloud SQL instance after the import is completed.

### Use the monitoring dashboard \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard](https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard)
- Source ID: `site-docs-root`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- This metric decreases when the Airflow metadata database size is reduced (for example, after the Airflow database maintenance ) and determines if it's possible to create snapshots and upgrade environments.
- This metric applies to the Airflow component of your environment and shows the amount of disk space taken by the Airflow metadata database on the Cloud SQL database instance.
- This metric applies to the Cloud SQL database instance itself, so the metric doesn't decrease when the Airflow database size is reduced.
- Database health A timeline showing the status of the connection to the Cloud SQL instance that hosts the Airflow DB.

