---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:48.432Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer 2.0.0-preview.2"
feature_slug: "cloud-composer-2-0-0-preview-2"
latest_feature_date: "2022-09-29"
deprecation_date: "2022-09-29"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/release-notes"
  - "https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies"
  - "https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database"
keywords:
  - "composer"
  - "preview"
  - "has"
  - "reached"
  - "the"
  - "end"
  - "of"
  - "its"
---

# Cloud Composer 2.0.0-preview.2

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer 2.0.0-preview.2 has reached the end of its full support period; deprecated on 2022-09-29.

## Extended Definition

Cloud Composer 2.0.0-preview.2 has reached the end of its full support period; deprecated on 2022-09-29.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- [https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies](https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies)
- [https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database](https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database)

## Supporting Pages

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- Change (Airflow 2.1.1) downgraded google-cloud-memcache dependency from 1.1.0 to 1.0.0 Change (Airflow 2.1.1) Downgraded colorlog dependency from 5.0.1 to 4.8.0 Change New versions of Cloud Composer images: composer-1.16.14-airflow-1.10.12 composer-1.16.14-airflow-1.10.14 composer-1.16.14-airflow-1.10.15 (default) composer-1.17.0-preview.10-airflow-2.0.2 composer-1.17.0-preview.10-airflow-2.1.1 Deprecated Cloud Composer 1.11.2 has reached its end of full support period .
- Change New versions of Cloud Composer images: composer-1.17.2-airflow-2.1.2 composer-1.17.2-airflow-2.0.2 composer-1.17.2-airflow-1.10.15 (default) composer-1.17.2-airflow-1.10.14 composer-1.17.2-airflow-1.10.12 composer-2.0.0-preview.3-airflow-2.1.2 (default) composer-2.0.0-preview.3-airflow-2.0.2 Deprecated Cloud Composer 1.12.1 has reached its end of full support period .
- Change New versions of Cloud Composer images: composer-1.17.1-airflow-2.1.2 composer-1.17.1-airflow-2.0.2 composer-1.17.1-airflow-1.10.15 (default) composer-1.17.1-airflow-1.10.14 composer-1.17.1-airflow-1.10.12 composer-2.0.0-preview.2-airflow-2.1.2 composer-2.0.0-preview.2-airflow-2.0.2 Deprecated Cloud Composer 1.12.0 has reached its end of full support period .
- Change New versions of Cloud Composer images: composer-1.16.15-airflow-1.10.12 composer-1.16.15-airflow-1.10.14 composer-1.16.15-airflow-1.10.15 (default) composer-1.17.0-preview.11-airflow-2.0.2 composer-1.17.0-preview.11-airflow-2.1.1 Deprecated Cloud Composer 1.11.3 has reached its end of full support period .

### Install Python dependencies \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies](https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies)
- Source ID: `site-iam-reference`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- Note: Cloud Composer does not support pip customization and does not resolve package dependencies and conflicts outside of the resolution mechanisms that the default pip tool provides.
- On September 15, 2026 , all Cloud Composer 1 versions and versions 2.0.x of Cloud Composer 2 will reach their planned end of life .
- To install custom PyPI packages from an Artifact Registry repository: Create a pip.conf file and include the following information in the file, if applicable: URL of the Artifact Registry repository (in the index-url parameter) Access credentials for the repository Non-default pip installation options For an Artifact Registry repository, append /simple/ to the repository URL: [global] index-url = https://us-central1-python.pkg.dev/example-project/example-repository/simple/ (Optional) In some cases, you might want to fetch packages from multiple repositories, such as when your Artifact Registry repository contains some specific packages that you want to install, and you want to install all other packages from PyPI: Configure an Artifact Registry virtual repository .
- Example: // PATCH https://composer.googleapis.com/v1/projects/example-project/ // locations/us-central1/environments/example-environment?updateMask= // config.softwareConfig.pypiPackages.EXAMPLE PACKAGE, // config.softwareConfig.pypiPackages.ANOTHER PACKAGE { "config" : { "softwareConfig" : { "pypiPackages" : { "EXAMPLE PACKAGE" : "" , "ANOTHER PACKAGE" : ">=1.10.3" } } } } Terraform The pypi packages block in the software config block specifies packages. resource "google composer environment" "example" { name = " ENVIRONMENT NAME " region = " LOCATION " config { software config { pypi packages = { PACKAGE NAME = " EXTRAS AND VERSION " } } } } Replace: ENVIRONMENT NAME with the name of the environment.

### Clean up the Airflow database \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database](https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database)
- Source ID: `site-iam-reference`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- Returns: SQLAlchemy query object: The constructed query. """ query = session . query ( airflow db model ) logging . info ( "INITIAL QUERY : " + str ( query )) if hasattr ( airflow db model , 'dag id' ): logging . info ( "Filtering by dag id: " + str ( dag id )) query = query . filter ( airflow db model . dag id == dag id ) if airflow db model == DagRun : newest dagrun = ( session . query ( airflow db model ) . filter ( DagRun . external trigger . is ( False )) . filter ( airflow db model . dag id == dag id ) . order by ( desc ( airflow db model . execution date )) . first () ) logging . info ( "Newest dagrun: " + str ( newest dagrun )) For DagRuns we want to leave last scheduled DagRun regardless of its age, otherwise Airflow will retrigger it if newest dagrun is not None : query = ( query . filter ( airflow db model . id != newest dagrun . id ) ) query = query . filter ( age check column < = max date ) logging . info ( "FINAL QUERY: " + str ( query )) return query def print query ( query , airflow db model , age check column ): entries to delete = query . all () logging . info ( "Query: " + str ( query )) logging . info ( "Process will be Deleting the following " + str ( airflow db model . name ) + "(s):" ) for entry in entries to delete : date = str ( entry . dict [ str ( age check column ) . split ( "." )[ 1 ]]) logging . info ( " \t Entry: " + str ( entry ) + ", Date: " + date ) logging . info ( "Process will be Deleting " + str ( len ( entries to delete )) + " " + str ( airflow db model . name ) + "(s)" ) def cleanup function ( context ): session = settings .
- Put the DAG in your gcs bucket. """ from datetime import datetime , timedelta import logging import os import airflow from airflow import settings from airflow.jobs import BaseJob from airflow.models import ( DAG , DagModel , DagRun , Log , SlaMiss , TaskInstance , Variable , XCom , ) from airflow.operators.python operator import PythonOperator from airflow.version import version as airflow version import dateutil.parser from sqlalchemy import and , func from sqlalchemy.exc import ProgrammingError from sqlalchemy.orm import load only try : airflow.utils.timezone is available from v1.10 onwards from airflow.utils import timezone now = timezone . utcnow except ImportError : now = datetime . utcnow airflow-db-cleanup DAG ID = os . path . basename ( file ) . replace ( ".pyc" , "" ) . replace ( ".py" , "" ) START DATE = airflow . utils . dates . days ago ( 1 ) How often to Run. @daily - Once a day at Midnight (UTC) SCHEDULE INTERVAL = "@daily" Who is listed as the owner of this DAG in the Airflow Web Server DAG OWNER NAME = "operations" List of email address to send email alerts to if this job fails ALERT EMAIL ADDRESSES = [] Airflow version used by the environment in list form, value stored in airflow version is in format e.g "1.10.15+composer" AIRFLOW VERSION = airflow version [: - len ( "+composer" )] . split ( "." ) Length to retain the log files if not already provided in the conf.
- On September 15, 2026 , all Cloud Composer 1 versions and versions 2.0.x of Cloud Composer 2 will reach their planned end of life .
- COMPOSER SUFFIX = "+composer" if version . endswith ( COMPOSER SUFFIX ): airflow version without suffix = version [: - len ( COMPOSER SUFFIX )] else : airflow version without suffix = version airflow version str = airflow version without suffix . split ( "." ) return tuple ([ int ( s ) for s in airflow version str ]) now = timezone . utcnow airflow-db-cleanup DAG ID = os . path . basename ( file ) . replace ( ".pyc" , "" ) . replace ( ".py" , "" ) START DATE = airflow . utils . dates . days ago ( 1 ) How often to Run. @daily - Once a day at Midnight (UTC).

