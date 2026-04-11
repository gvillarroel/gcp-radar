---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:49.103Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Airflow 1.10.2 GET dag_runs API support"
feature_slug: "airflow-1-10-2-get-dag-runs-api-support"
latest_feature_date: "2019-08-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api"
  - "https://docs.cloud.google.com/composer/docs/release-notes"
  - "https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag"
keywords:
  - "airflow"
  - "10"
  - "get"
  - "dag"
  - "runs"
  - "api"
  - "composer"
  - "backported"
---

# Airflow 1.10.2 GET dag_runs API support

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer backported AIRFLOW-4015 to add support for the GET dag_runs endpoint in Airflow 1.10.2; Cloud Composer backported AIRFLOW-4015 to add support for the GET dag_runs endpoint in Airflow 1.10.2.

## Extended Definition

Cloud Composer backported AIRFLOW-4015 to add support for the GET dag_runs endpoint in Airflow 1.10.2; Cloud Composer backported AIRFLOW-4015 to add support for the GET dag_runs endpoint in Airflow 1.10.2.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api)
- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- [https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag](https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag)

## Supporting Pages

### Access the Airflow REST API \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api)
- Source ID: `site-iam-reference`
- Final score: 216
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 Apache Airflow has a REST API interface that you can use to perform tasks such as getting information about DAG runs and tasks, updating DAGs, getting Airflow configuration, adding and deleting connections, and listing users.
- This function is currently only compatible with Composer v1 environments. """ Fill in with your Composer info here Navigate to your webserver's login page and get this from the URL Or use the script found at https://github.com/GoogleCloudPlatform/python-docs-samples/blob/main/composer/rest/get client id.py client id = "YOUR-CLIENT-ID" This should be part of your webserver's URL: {tenant-project-id}.appspot.com webserver id = "YOUR-TENANT-PROJECT" The name of the DAG you wish to trigger dag name = "composer sample trigger response dag" if USE EXPERIMENTAL API : endpoint = f "api/experimental/dags/ { dag name } /dag runs" json data = { "conf" : data , "replace microseconds" : "false" } else : endpoint = f "api/v1/dags/ { dag name } /dagRuns" json data = { "conf" : data } webserver url = "https://" + webserver id + ".appspot.com/" + endpoint Make a POST request to IAP which then Triggers the DAG make iap request ( webserver url , client id , method = "POST" , json = json data ) This code is copied from https://github.com/GoogleCloudPlatform/python-docs-samples/blob/main/iap/make iap request.py START COPIED IAP CODE def make iap request ( url , client id , method = "GET" , kwargs ): """Makes a request to an application protected by Identity-Aware Proxy.
- AuthorizedSession ( credentials ) project id = 'YOUR PROJECT ID' location = 'us-central1' composer environment = 'YOUR COMPOSER ENVIRONMENT NAME' environment url = ( "https://composer.googleapis.com/v1beta1/projects/ {} /locations/ {} " "/environments/ {} " ) . format ( project id , location , composer environment ) composer response = authed session . request ( "GET" , environment url ) environment data = composer response . json () composer version = environment data [ "config" ][ "softwareConfig" ][ "imageVersion" ] if "composer-1" not in composer version : version error = ( "This script is intended to be used with Composer 1 environments. " "In Composer 2, the Airflow Webserver is not in the tenant project, " "so there is no tenant client ID. " "See https://cloud.google.com/composer/docs/composer-2/environment-architecture for more details." ) raise ( RuntimeError ( version error )) airflow uri = environment data [ "config" ][ "airflowUri" ] The Composer environment response does not include the IAP client ID.
- The USE EXPERIMENTAL API variable is already set to True . from google.auth.transport.requests import Request from google.oauth2 import id token import requests IAM SCOPE = "https://www.googleapis.com/auth/iam" OAUTH TOKEN URI = "https://www.googleapis.com/oauth2/v4/token" If you are using the stable API, set this value to False For more info about Airflow APIs see https://cloud.google.com/composer/docs/access-airflow-api USE EXPERIMENTAL API = True def trigger dag ( data , context = None ): """Makes a POST request to the Composer DAG Trigger API When called via Google Cloud Functions (GCF), data and context are Background function parameters.

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- Backported AIRFLOW-4015 to support the GET dag runs endpoint in Airflow 1.10.2.
- Backported AIRFLOW-4015 to support the GET dag runs endpoint in Airflow 1.10.2.
- Change Cloud Composer 1.18.11 and 2.0.15 images are available: composer-1.18.11-airflow-1.10.15 (default) composer-1.18.11-airflow-2.1.4 composer-1.18.11-airflow-2.2.5 composer-2.0.15-airflow-2.1.4 composer-2.0.15-airflow-2.2.5 May 26, 2022 Deprecated (Airflow 2) If your DAGs use the google-ads package version 14.0.0 or earlier, please upgrade your environment to Cloud Composer version 2.0.14 so that your environment uses Google Ads API v10 .
- Change New Airflow builds are available in Cloud Composer 3: composer-3-airflow-2.10.5-build.15 (default) composer-3-airflow-2.9.3-build.35 Issue (Airflow 2.10.5) CloudComposerDAGRunSensor is broken in the apache-airflow-providers-google package version 17.2.0.

### "Quickstart: Run an Apache Airflow DAG in Cloud Composer\_3 \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag](https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- Enable the API To get the permissions that you need to complete this quickstart, ask your administrator to grant you the following IAM roles on your project: To assign IAM roles and permissions: Project IAM Admin ( roles/resourcemanager.projectIamAdmin ) To create a service account for the Cloud Composer environment: Create Service Accounts ( roles/iam.serviceAccountCreator ) To view create and manage the Cloud Composer environment: Environment and Storage Object Administrator ( roles/composer.environmentAndStorageObjectAdmin ) Service Account User ( roles/iam.serviceAccountUser ) To view logs: Logs Viewer ( roles/logging.viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Run an Apache Airflow DAG in Cloud Composer 3 Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 This quickstart guide shows you how to create a Cloud Composer environment and run an Apache Airflow DAG in Cloud Composer 3.
- DAG ( "composer quickstart" , catchup = False , default args = default args , schedule interval = datetime . timedelta ( days = 1 ), ) as dag : Print the dag run id from the Airflow logs print dag run conf = bash .
- The list of DAGs displays the composer quickstart DAG (click to enlarge) Note: The airflow monitoring DAG is used by Cloud Composer to monitor the health of your environment.

