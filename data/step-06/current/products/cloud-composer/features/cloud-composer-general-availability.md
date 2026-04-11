---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:49.157Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer general availability"
feature_slug: "cloud-composer-general-availability"
latest_feature_date: "2018-07-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/release-notes"
  - "https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database"
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-database"
keywords:
  - "composer"
  - "general"
  - "availability"
  - "launched"
  - "as"
  - "generally"
  - "available"
---

# Cloud Composer general availability

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Launched Cloud Composer as generally available.

## Extended Definition

Launched Cloud Composer as generally available.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- [https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database](https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database)
- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-database](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-database)

## Supporting Pages

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- January 25, 2024 Feature The Logs in Cloud Logging Only feature is now generally available (GA): New Cloud Composer environments now save Airflow task logs only in Cloud Logging by default.
- Feature IP Masquerade agent support is now generally available (GA) in Cloud Composer 1 and Cloud Composer 2.
- Change Cloud Composer 1.20.2 and 2.1.2 images are available: composer-1.20.2-airflow-1.10.15 (default) composer-1.20.2-airflow-2.2.5 composer-1.20.2-airflow-2.3.4 composer-2.1.2-airflow-2.2.5 composer-2.1.2-airflow-2.3.4 (default) December 06, 2022 Feature (Cloud Composer 2) Environment snapshots and Scheduled snapshots are now generally available (GA) for Cloud Composer 2 versions 2.1.1 and later.
- Change Cloud Composer 2.4.2 images are available: composer-2.4.2-airflow-2.5.3 (default) composer-2.4.2-airflow-2.4.3 September 07, 2023 Feature Maintenance windows configuration is now generally available (GA).

### Clean up the Airflow database \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database](https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database)
- Source ID: `site-iam-reference`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- Put the DAG in your gcs bucket. """ from datetime import datetime , timedelta import logging import os import airflow from airflow import settings from airflow.jobs import BaseJob from airflow.models import ( DAG , DagModel , DagRun , Log , SlaMiss , TaskInstance , Variable , XCom , ) from airflow.operators.python operator import PythonOperator from airflow.version import version as airflow version import dateutil.parser from sqlalchemy import and , func from sqlalchemy.exc import ProgrammingError from sqlalchemy.orm import load only try : airflow.utils.timezone is available from v1.10 onwards from airflow.utils import timezone now = timezone . utcnow except ImportError : now = datetime . utcnow airflow-db-cleanup DAG ID = os . path . basename ( file ) . replace ( ".pyc" , "" ) . replace ( ".py" , "" ) START DATE = airflow . utils . dates . days ago ( 1 ) How often to Run. @daily - Once a day at Midnight (UTC) SCHEDULE INTERVAL = "@daily" Who is listed as the owner of this DAG in the Airflow Web Server DAG OWNER NAME = "operations" List of email address to send email alerts to if this job fails ALERT EMAIL ADDRESSES = [] Airflow version used by the environment in list form, value stored in airflow version is in format e.g "1.10.15+composer" AIRFLOW VERSION = airflow version [: - len ( "+composer" )] . split ( "." ) Length to retain the log files if not already provided in the conf.
- COMPOSER SUFFIX = "+composer" if version . endswith ( COMPOSER SUFFIX ): airflow version without suffix = version [: - len ( COMPOSER SUFFIX )] else : airflow version without suffix = version airflow version str = airflow version without suffix . split ( "." ) return tuple ([ int ( s ) for s in airflow version str ]) now = timezone . utcnow airflow-db-cleanup DAG ID = os . path . basename ( file ) . replace ( ".pyc" , "" ) . replace ( ".py" , "" ) START DATE = airflow . utils . dates . days ago ( 1 ) How often to Run. @daily - Once a day at Midnight (UTC).
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Clean up the Airflow database Stay organized with collections Save and categorize content based on your preferences.
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 This page explains how to maintain the Airflow database in your environment.

### Access the Airflow database \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-database](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-database)
- Source ID: `site-iam-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Example: gcloud composer environments snapshots save \ example-environment \ --location us-central1 \ --snapshot-location "gs://example-bucket/environment snapshots" Example result: Response: '@type': type.googleapis.com/google.cloud.orchestration.airflow.service.v1.SaveSnapshotResponse snapshotPath: gs://example-bucket/environment snapshots/example-environment us-central1 2026-03-17T11-26-24 Prepare the destination database If you don't have a Cloud SQL instance, create one.
- The airflow db database will be unavailable during the import process. gcloud sql import sql SQL INSTANCE NAME \ $( gcloud storage ls SNAPSHOTS URI / .sql.gz ) \ --database = airflow db \ --user = postgres Replace the following: SQL INSTANCE NAME : name of the Cloud SQL instance.
- You can use this approach in all versions of Airflow supported by Cloud Composer 3, including Airflow 3 versions later than 3.1.7 where direct access to the Airflow database is no longer possible.
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Access the Airflow database Stay organized with collections Save and categorize content based on your preferences.

