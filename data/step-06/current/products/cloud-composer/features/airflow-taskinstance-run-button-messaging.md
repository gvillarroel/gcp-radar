---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:20.380Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Airflow TaskInstance RUN button messaging"
feature_slug: "airflow-taskinstance-run-button-messaging"
latest_feature_date: "2018-07-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database"
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface"
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api"
  - "https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag"
keywords:
  - "airflow"
  - "taskinstance"
  - "run"
  - "button"
  - "messaging"
  - "updated"
  - "the"
  - "web"
---

# Airflow TaskInstance RUN button messaging

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Updated the Airflow web interface message shown when the TaskInstance RUN action is triggered.

## Extended Definition

Updated the Airflow web interface message shown when the TaskInstance RUN action is triggered.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database](https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database)
- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface)
- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api)
- [https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag](https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag)

## Supporting Pages

### Clean up the Airflow database \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database](https://docs.cloud.google.com/composer/docs/composer-1/cleanup-airflow-database)
- Source ID: `site-iam-reference`
- Final score: 187
- Re-rank relevance: N/A

Evidence snippets:
- Put the DAG in your gcs bucket. """ from datetime import datetime , timedelta import logging import os import airflow from airflow import settings from airflow.jobs import BaseJob from airflow.models import ( DAG , DagModel , DagRun , Log , SlaMiss , TaskInstance , Variable , XCom , ) from airflow.operators.python operator import PythonOperator from airflow.version import version as airflow version import dateutil.parser from sqlalchemy import and , func from sqlalchemy.exc import ProgrammingError from sqlalchemy.orm import load only try : airflow.utils.timezone is available from v1.10 onwards from airflow.utils import timezone now = timezone . utcnow except ImportError : now = datetime . utcnow airflow-db-cleanup DAG ID = os . path . basename ( file ) . replace ( ".pyc" , "" ) . replace ( ".py" , "" ) START DATE = airflow . utils . dates . days ago ( 1 ) How often to Run. @daily - Once a day at Midnight (UTC) SCHEDULE INTERVAL = "@daily" Who is listed as the owner of this DAG in the Airflow Web Server DAG OWNER NAME = "operations" List of email address to send email alerts to if this job fails ALERT EMAIL ADDRESSES = [] Airflow version used by the environment in list form, value stored in airflow version is in format e.g "1.10.15+composer" AIRFLOW VERSION = airflow version [: - len ( "+composer" )] . split ( "." ) Length to retain the log files if not already provided in the conf.
- Session () session . execute ( "ANALYZE" ) session . commit () session . close () analyze op = PythonOperator ( task id = "analyze query" , python callable = analyze db , provide context = True , dag = dag ) cleanup session op = PythonOperator ( task id = "cleanup sessions" , python callable = cleanup sessions , provide context = True , dag = dag , ) cleanup session op . set downstream ( analyze op ) for db object in DATABASE OBJECTS : cleanup op = PythonOperator ( task id = "cleanup " + str ( db object [ "airflow db model" ] . name ), python callable = cleanup function , params = db object , provide context = True , dag = dag , ) print configuration . set downstream ( cleanup op ) cleanup op . set downstream ( analyze op ) If your environment uses Airflow 1, use the following DAG instead: """ A maintenance workflow that you can deploy into Airflow to periodically clean out the DagRun, TaskInstance, Log, XCom, Job DB and SlaMiss entries to avoid having too much data in your Airflow MetaStore.
- Put the DAG in your gcs bucket. """ from datetime import timedelta import logging import os import airflow from airflow import settings from airflow.models import ( DAG , DagModel , DagRun , Log , SlaMiss , TaskInstance , Variable , XCom , ) from airflow.operators.python import PythonOperator from airflow.utils import timezone from airflow.version import version as airflow version import dateutil.parser from sqlalchemy import desc , text from sqlalchemy.exc import ProgrammingError def parse airflow version ( version : str ) - > tuple [ int ]: TODO(developer): Update this function if you are using a version with non-numerical characters such as "2.9.3rc1".
- If your environment uses Airflow 2: """A maintenance workflow that you can deploy into Airflow to periodically clean out the DagRun, TaskInstance, Log, XCom, Job DB and SlaMiss entries to avoid having too much data in your Airflow MetaStore.

### "Access the Airflow web interface \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface)
- Source ID: `site-iam-reference`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- During the environment creation, Cloud Composer configures the URL for the web server that runs the Airflow UI.
- About the Airflow web server Each Cloud Composer environment has a web server that runs the Airflow UI.
- Example: // PATCH https://composer.googleapis.com/v1/projects/example-project/ // locations/us-central1/environments/example-environment?updateMask= // config.webServerNetworkAccessControl { "config" : { "webServerNetworkAccessControl" : { "allowedIpRanges" : [ { "value" : "192.0.2.0/24" , "description" : "example range" }, { "value" : "192.0.4.0/24" , "description" : "example range 2" } ] } } } Terraform In the allowed ip range block, in the web server network access control specify IP ranges that can access web server. resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { web server network access control { allowed ip range { value = " WS IP RANGE " description = " WS RANGE DESCRIPTION " } } } } Replace the following: WS IP RANGE : the IP range, in the CIDR notation, that can access the Airflow UI.
- Example: resource "google composer environment" "example" { provider = google-beta name = "example-environment" region = "us-central1" config { web server network access control { allowed ip range { value = "192.0.2.0/24" description = "example range" }, allowed ip range { value = "192.0.4.0/24" description = "example range 2" } } } What's next Airflow UI Access Control Troubleshooting Airflow web server issues Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Access the Airflow REST API \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api)
- Source ID: `site-iam-reference`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- AuthorizedSession ( credentials ) project id = 'YOUR PROJECT ID' location = 'us-central1' composer environment = 'YOUR COMPOSER ENVIRONMENT NAME' environment url = ( "https://composer.googleapis.com/v1beta1/projects/ {} /locations/ {} " "/environments/ {} " ) . format ( project id , location , composer environment ) composer response = authed session . request ( "GET" , environment url ) environment data = composer response . json () composer version = environment data [ "config" ][ "softwareConfig" ][ "imageVersion" ] if "composer-1" not in composer version : version error = ( "This script is intended to be used with Composer 1 environments. " "In Composer 2, the Airflow Webserver is not in the tenant project, " "so there is no tenant client ID. " "See https://cloud.google.com/composer/docs/composer-2/environment-architecture for more details." ) raise ( RuntimeError ( version error )) airflow uri = environment data [ "config" ][ "airflowUri" ] The Composer environment response does not include the IAP client ID.
- Scaling the Airflow REST API component Airflow REST API and Airflow UI endpoints are run within the Airflow web server.
- This function is currently only compatible with Composer v1 environments. """ Fill in with your Composer info here Navigate to your webserver's login page and get this from the URL Or use the script found at https://github.com/GoogleCloudPlatform/python-docs-samples/blob/main/composer/rest/get client id.py client id = "YOUR-CLIENT-ID" This should be part of your webserver's URL: {tenant-project-id}.appspot.com webserver id = "YOUR-TENANT-PROJECT" The name of the DAG you wish to trigger dag name = "composer sample trigger response dag" if USE EXPERIMENTAL API : endpoint = f "api/experimental/dags/ { dag name } /dag runs" json data = { "conf" : data , "replace microseconds" : "false" } else : endpoint = f "api/v1/dags/ { dag name } /dagRuns" json data = { "conf" : data } webserver url = "https://" + webserver id + ".appspot.com/" + endpoint Make a POST request to IAP which then Triggers the DAG make iap request ( webserver url , client id , method = "POST" , json = json data ) This code is copied from https://github.com/GoogleCloudPlatform/python-docs-samples/blob/main/iap/make iap request.py START COPIED IAP CODE def make iap request ( url , client id , method = "GET" , kwargs ): """Makes a request to an application protected by Identity-Aware Proxy.
- Make a second, unauthenticated HTTP request to the web server to get the redirect URI. redirect response = requests . get ( airflow uri , allow redirects = False ) redirect location = redirect response . headers [ "location" ] Extract the client id query parameter from the redirect. parsed = six . moves . urllib . parse . urlparse ( redirect location ) query string = six . moves . urllib . parse . parse qs ( parsed . query ) print ( query string [ "client id" ][ 0 ]) Call Airflow REST API using client id Make the following replacements: Replace the value of the client id variable with the client id value obtained in the previous step.

### "Quickstart: Run an Apache Airflow DAG in Cloud Composer\_3 \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag](https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- Save a copy of the quickstart.py file on your local machine: import datetime from airflow import models from airflow.operators import bash If you are running Airflow in more than one time zone see https://airflow.apache.org/docs/apache-airflow/stable/timezone.html for best practices YESTERDAY = datetime . datetime . now () - datetime . timedelta ( days = 1 ) default args = { "owner" : "Composer Example" , "depends on past" : False , "email" : [ "" ], "email on failure" : False , "email on retry" : False , "retries" : 1 , "retry delay" : datetime . timedelta ( minutes = 5 ), "start date" : YESTERDAY , } with models .
- DAG ( "composer quickstart" , catchup = False , default args = default args , schedule interval = datetime . timedelta ( days = 1 ), ) as dag : Print the dag run id from the Airflow logs print dag run conf = bash .
- Wait about five minutes to give Airflow time to process the DAG file that you uploaded previously, and to complete the first DAG run (explained later).
- Airflow immediately executes a DAG run for the example DAG because the start date in the DAG file is set to yesterday.

