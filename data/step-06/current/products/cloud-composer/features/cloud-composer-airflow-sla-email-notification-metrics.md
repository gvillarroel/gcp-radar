---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:48.574Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer Airflow SLA email notification metrics"
feature_slug: "cloud-composer-airflow-sla-email-notification-metrics"
latest_feature_date: "2022-05-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database"
  - "https://docs.cloud.google.com/composer/docs/release-notes"
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-email"
keywords:
  - "composer"
  - "airflow"
  - "sla"
  - "email"
  - "notification"
  - "metrics"
  - "now"
  - "offers"
---

# Cloud Composer Airflow SLA email notification metrics

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer now offers new Airflow metrics for SLA email notifications.

## Extended Definition

Cloud Composer now offers new Airflow metrics for SLA email notifications.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database](https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database)
- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- [https://docs.cloud.google.com/composer/docs/composer-1/configure-email](https://docs.cloud.google.com/composer/docs/composer-1/configure-email)

## Supporting Pages

### Clean up the Airflow database \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database](https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database)
- Source ID: `site-iam-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Put the DAG in your gcs bucket. """ from datetime import datetime , timedelta import logging import os import airflow from airflow import settings from airflow.jobs import BaseJob from airflow.models import ( DAG , DagModel , DagRun , Log , SlaMiss , TaskInstance , Variable , XCom , ) from airflow.operators.python operator import PythonOperator from airflow.version import version as airflow version import dateutil.parser from sqlalchemy import and , func from sqlalchemy.exc import ProgrammingError from sqlalchemy.orm import load only try : airflow.utils.timezone is available from v1.10 onwards from airflow.utils import timezone now = timezone . utcnow except ImportError : now = datetime . utcnow airflow-db-cleanup DAG ID = os . path . basename ( file ) . replace ( ".pyc" , "" ) . replace ( ".py" , "" ) START DATE = airflow . utils . dates . days ago ( 1 ) How often to Run. @daily - Once a day at Midnight (UTC) SCHEDULE INTERVAL = "@daily" Who is listed as the owner of this DAG in the Airflow Web Server DAG OWNER NAME = "operations" List of email address to send email alerts to if this job fails ALERT EMAIL ADDRESSES = [] Airflow version used by the environment in list form, value stored in airflow version is in format e.g "1.10.15+composer" AIRFLOW VERSION = airflow version [: - len ( "+composer" )] . split ( "." ) Length to retain the log files if not already provided in the conf.
- DATABASE OBJECTS = [ { "airflow db model" : DagRun , "age check column" : DagRun . execution date , "keep last" : True , "keep last filters" : [ DagRun . external trigger . is ( False )], "keep last group by" : DagRun . dag id , }, { "airflow db model" : TaskInstance , "age check column" : TaskInstance . start date , "keep last" : False , "keep last filters" : None , "keep last group by" : None , }, { "airflow db model" : Log , "age check column" : Log . dttm , "keep last" : False , "keep last filters" : None , "keep last group by" : None , }, { "airflow db model" : XCom , "age check column" : XCom . execution date if AIRFLOW VERSION < ( 2 , 2 , 5 ) else XCom . timestamp , "keep last" : False , "keep last filters" : None , "keep last group by" : None , }, { "airflow db model" : SlaMiss , "age check column" : SlaMiss . execution date , "keep last" : False , "keep last filters" : None , "keep last group by" : None , }, { "airflow db model" : DagModel , "age check column" : DagModel . last parsed time , "keep last" : False , "keep last filters" : None , "keep last group by" : None , }, ] Check for TaskReschedule model. try : from airflow.models import TaskReschedule DATABASE OBJECTS . append ( { "airflow db model" : TaskReschedule , "age check column" : TaskReschedule . execution date if AIRFLOW VERSION < ( 2 , 2 , 0 ) else TaskReschedule . start date , "keep last" : False , "keep last filters" : None , "keep last group by" : None , } ) except Exception as e : logging . error ( e ) Check for TaskFail model. try : from airflow.models import TaskFail DATABASE OBJECTS . append ( { "airflow db model" : TaskFail , "age check column" : TaskFail . start date , "keep last" : False , "keep last filters" : None , "keep last group by" : None , } ) except Exception as e : logging . error ( e ) Check for RenderedTaskInstanceFields model. if AIRFLOW VERSION < ( 2 , 4 , 0 ): try : from airflow.models import RenderedTaskInstanceFields DATABASE OBJECTS . append ( { "airflow db model" : RenderedTaskInstanceFields , "age check column" : RenderedTaskInstanceFields . execution date , "keep last" : False , "keep last filters" : None , "keep last group by" : None , } ) except Exception as e : logging . error ( e ) Check for ImportError model. try : from airflow.models import ImportError DATABASE OBJECTS . append ( { "airflow db model" : ImportError , "age check column" : ImportError . timestamp , "keep last" : False , "keep last filters" : None , "keep last group by" : None , "do not delete by dag id" : True , } ) except Exception as e : logging . error ( e ) if AIRFLOW VERSION < ( 2 , 6 , 0 ): try : from airflow.jobs.base job import BaseJob DATABASE OBJECTS . append ( { "airflow db model" : BaseJob , "age check column" : BaseJob . latest heartbeat , "keep last" : False , "keep last filters" : None , "keep last group by" : None , } ) except Exception as e : logging . error ( e ) else : try : from airflow.jobs.job import Job DATABASE OBJECTS . append ( { "airflow db model" : Job , "age check column" : Job . latest heartbeat , "keep last" : False , "keep last filters" : None , "keep last group by" : None , } ) except Exception as e : logging . error ( e ) default args = { "owner" : DAG OWNER NAME , "depends on past" : False , "email" : ALERT EMAIL ADDRESSES , "email on failure" : True , "email on retry" : False , "start date" : START DATE , "retries" : 1 , "retry delay" : timedelta ( minutes = 1 ), } dag = DAG ( DAG ID , default args = default args , schedule interval = SCHEDULE INTERVAL , start date = START DATE , ) if hasattr ( dag , "doc md" ): dag . doc md = doc if hasattr ( dag , "catchup" ): dag . catchup = False def print configuration function ( context ): logging . info ( "Loading Configurations..." ) dag run conf = context . get ( "dag run" ) . conf logging . info ( "dag run.conf: " + str ( dag run conf )) max db entry age in days = None if dag run conf : max db entry age in days = dag run conf . get ( "maxDBEntryAgeInDays" , None ) logging . info ( "maxDBEntryAgeInDays from dag run.conf: " + str ( dag run conf )) if max db entry age in days is None or max db entry age in days < 1 : logging . info ( "maxDBEntryAgeInDays conf variable isn't included or Variable " + "value is less than 1.
- DATABASE OBJECTS = [ { "airflow db model" : BaseJob , "age check column" : BaseJob . latest heartbeat , "keep last" : False , "keep last filters" : None , "keep last group by" : None , }, { "airflow db model" : DagRun , "age check column" : DagRun . execution date , "keep last" : True , "keep last filters" : [ DagRun . external trigger . is ( False )], "keep last group by" : DagRun . dag id , }, { "airflow db model" : TaskInstance , "age check column" : TaskInstance . execution date , "keep last" : False , "keep last filters" : None , "keep last group by" : None , }, { "airflow db model" : Log , "age check column" : Log . dttm , "keep last" : False , "keep last filters" : None , "keep last group by" : None , }, { "airflow db model" : XCom , "age check column" : XCom . execution date , "keep last" : False , "keep last filters" : None , "keep last group by" : None , }, { "airflow db model" : SlaMiss , "age check column" : SlaMiss . execution date , "keep last" : False , "keep last filters" : None , "keep last group by" : None , }, { "airflow db model" : DagModel , "age check column" : DagModel . last scheduler run , "keep last" : False , "keep last filters" : None , "keep last group by" : None , }, ] Check for TaskReschedule model try : from airflow.models import TaskReschedule DATABASE OBJECTS . append ( { "airflow db model" : TaskReschedule , "age check column" : TaskReschedule . execution date , "keep last" : False , "keep last filters" : None , "keep last group by" : None , } ) except Exception as e : logging . error ( e ) Check for TaskFail model try : from airflow.models import TaskFail DATABASE OBJECTS . append ( { "airflow db model" : TaskFail , "age check column" : TaskFail . execution date , "keep last" : False , "keep last filters" : None , "keep last group by" : None , } ) except Exception as e : logging . error ( e ) Check for ImportError model try : from airflow.models import ImportError DATABASE OBJECTS . append ( { "airflow db model" : ImportError , "age check column" : ImportError . timestamp , "keep last" : False , "keep last filters" : None , "keep last group by" : None , "do not delete by dag id" : True , } ) except Exception as e : logging . error ( e ) default args = { "owner" : DAG OWNER NAME , "depends on past" : False , "email" : ALERT EMAIL ADDRESSES , "email on failure" : True , "email on retry" : False , "start date" : START DATE , "retries" : 1 , "retry delay" : timedelta ( minutes = 1 ), } dag = DAG ( DAG ID , default args = default args , schedule interval = SCHEDULE INTERVAL , start date = START DATE , ) if hasattr ( dag , "doc md" ): dag . doc md = doc if hasattr ( dag , "catchup" ): dag . catchup = False def print configuration function ( context ): logging . info ( "Loading Configurations..." ) dag run conf = context . get ( "dag run" ) . conf logging . info ( "dag run.conf: " + str ( dag run conf )) max db entry age in days = None if dag run conf : max db entry age in days = dag run conf . get ( "maxDBEntryAgeInDays" , None ) logging . info ( "maxDBEntryAgeInDays from dag run.conf: " + str ( dag run conf )) if max db entry age in days is None or max db entry age in days < 1 : logging . info ( "maxDBEntryAgeInDays conf variable isn't included or Variable " + "value is less than 1.
- COMPOSER SUFFIX = "+composer" if version . endswith ( COMPOSER SUFFIX ): airflow version without suffix = version [: - len ( COMPOSER SUFFIX )] else : airflow version without suffix = version airflow version str = airflow version without suffix . split ( "." ) return tuple ([ int ( s ) for s in airflow version str ]) now = timezone . utcnow airflow-db-cleanup DAG ID = os . path . basename ( file ) . replace ( ".pyc" , "" ) . replace ( ".py" , "" ) START DATE = airflow . utils . dates . days ago ( 1 ) How often to Run. @daily - Once a day at Midnight (UTC).

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- Feature New Airflow metrics for pools, smart sensor, and SLA email notifications are available for Cloud Composer environments.
- May 26, 2025 Feature (Cloud Composer 3) New metrics that show the number of active Airflow components are now available for Cloud Composer 3 environments: The number of active schedulers The number of active DAG processors The number of active triggerers The number of active web servers Fixed (Cloud Composer 3) It's now possible to override the default scopes of access tokens in all regions supported by Cloud Composer 3.
- You can now use Stackdriver Monitoring to understand the performance and health of your Cloud Composer environments and examine Airflow metrics.
- Feature (Cloud Composer 2) Airflow component metrics are now available on the Monitoring dashboard in the Google Cloud console.

### Configure email notifications \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-email](https://docs.cloud.google.com/composer/docs/composer-1/configure-email)
- Source ID: `site-iam-reference`
- Final score: 146
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Configure email notifications Stay organized with collections Save and categorize content based on your preferences.
- DAG ( "composer sample sendgrid" , start date = datetime . datetime ( 2022 , 1 , 1 ), ) as dag : task email = EmailOperator ( task id = "send-email" , conn id = "sendgrid default" , You can specify more than one recipient with a list. to = "user@example.com" , subject = "EmailOperator test for SendGrid" , html content = "This is a test message sent through SendGrid." , dag = dag , ) Upload the DAG to your environment and check that the task succeeds.
- Once you configure Secret Manager for your Composer environment, you can store an SMTP password in Secret Manager: Create a new secret: echo -n " SMTP PASSWORD " gcloud beta secrets create \ airflow-config-smtp-password \ --data-file = - \ --replication-policy = automatic Replace SMTP PASSWORD with your SMTP password.
- To configure a third-party SMTP service, override the following Airflow configuration options: Section Key Value email email backend airflow.utils.email.send email smtp smtp smtp host The hostname for the SMTP server. smtp smtp user The username on the SMTP server. smtp smtp port The port for the SMTP server.

