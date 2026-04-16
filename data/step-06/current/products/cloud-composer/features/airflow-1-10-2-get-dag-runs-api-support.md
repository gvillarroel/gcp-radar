---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:20.323Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Airflow 1.10.2 GET dag_runs API support"
feature_slug: "airflow-1-10-2-get-dag-runs-api-support"
latest_feature_date: "2019-08-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api"
  - "https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag"
  - "https://docs.cloud.google.com/composer/docs/latest/view-dags"
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface"
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
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer backported AIRFLOW-4015 to add support for the GET dag_runs endpoint in Airflow 1.10.2; Cloud Composer backported AIRFLOW-4015 to add support for the GET dag_runs endpoint in Airflow 1.10.2.

## Extended Definition

Cloud Composer backported AIRFLOW-4015 to add support for the GET dag_runs endpoint in Airflow 1.10.2; Cloud Composer backported AIRFLOW-4015 to add support for the GET dag_runs endpoint in Airflow 1.10.2.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api)
- [https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag](https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag)
- [https://docs.cloud.google.com/composer/docs/latest/view-dags](https://docs.cloud.google.com/composer/docs/latest/view-dags)
- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface)

## Supporting Pages

### Access the Airflow REST API \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api)
- Source ID: `site-iam-reference`
- Final score: 277
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 Apache Airflow has a REST API interface that you can use to perform tasks such as getting information about DAG runs and tasks, updating DAGs, getting Airflow configuration, adding and deleting connections, and listing users.
- This function is currently only compatible with Composer v1 environments. """ Fill in with your Composer info here Navigate to your webserver's login page and get this from the URL Or use the script found at https://github.com/GoogleCloudPlatform/python-docs-samples/blob/main/composer/rest/get client id.py client id = "YOUR-CLIENT-ID" This should be part of your webserver's URL: {tenant-project-id}.appspot.com webserver id = "YOUR-TENANT-PROJECT" The name of the DAG you wish to trigger dag name = "composer sample trigger response dag" if USE EXPERIMENTAL API : endpoint = f "api/experimental/dags/ { dag name } /dag runs" json data = { "conf" : data , "replace microseconds" : "false" } else : endpoint = f "api/v1/dags/ { dag name } /dagRuns" json data = { "conf" : data } webserver url = "https://" + webserver id + ".appspot.com/" + endpoint Make a POST request to IAP which then Triggers the DAG make iap request ( webserver url , client id , method = "POST" , json = json data ) This code is copied from https://github.com/GoogleCloudPlatform/python-docs-samples/blob/main/iap/make iap request.py START COPIED IAP CODE def make iap request ( url , client id , method = "GET" , kwargs ): """Makes a request to an application protected by Identity-Aware Proxy.
- AuthorizedSession ( credentials ) project id = 'YOUR PROJECT ID' location = 'us-central1' composer environment = 'YOUR COMPOSER ENVIRONMENT NAME' environment url = ( "https://composer.googleapis.com/v1beta1/projects/ {} /locations/ {} " "/environments/ {} " ) . format ( project id , location , composer environment ) composer response = authed session . request ( "GET" , environment url ) environment data = composer response . json () composer version = environment data [ "config" ][ "softwareConfig" ][ "imageVersion" ] if "composer-1" not in composer version : version error = ( "This script is intended to be used with Composer 1 environments. " "In Composer 2, the Airflow Webserver is not in the tenant project, " "so there is no tenant client ID. " "See https://cloud.google.com/composer/docs/composer-2/environment-architecture for more details." ) raise ( RuntimeError ( version error )) airflow uri = environment data [ "config" ][ "airflowUri" ] The Composer environment response does not include the IAP client ID.
- The USE EXPERIMENTAL API variable is already set to True . from google.auth.transport.requests import Request from google.oauth2 import id token import requests IAM SCOPE = "https://www.googleapis.com/auth/iam" OAUTH TOKEN URI = "https://www.googleapis.com/oauth2/v4/token" If you are using the stable API, set this value to False For more info about Airflow APIs see https://cloud.google.com/composer/docs/access-airflow-api USE EXPERIMENTAL API = True def trigger dag ( data , context = None ): """Makes a POST request to the Composer DAG Trigger API When called via Google Cloud Functions (GCF), data and context are Background function parameters.

### "Quickstart: Run an Apache Airflow DAG in Cloud Composer\_3 \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag](https://docs.cloud.google.com/composer/docs/latest/run-apache-airflow-dag)
- Source ID: `site-docs-root`
- Final score: 234
- Re-rank relevance: N/A

Evidence snippets:
- Enable the API To get the permissions that you need to complete this quickstart, ask your administrator to grant you the following IAM roles on your project: To assign IAM roles and permissions: Project IAM Admin ( roles/resourcemanager.projectIamAdmin ) To create a service account for the Cloud Composer environment: Create Service Accounts ( roles/iam.serviceAccountCreator ) To view create and manage the Cloud Composer environment: Environment and Storage Object Administrator ( roles/composer.environmentAndStorageObjectAdmin ) Service Account User ( roles/iam.serviceAccountUser ) To view logs: Logs Viewer ( roles/logging.viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Run an Apache Airflow DAG in Cloud Composer 3 Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 This quickstart guide shows you how to create a Cloud Composer environment and run an Apache Airflow DAG in Cloud Composer 3.
- DAG ( "composer quickstart" , catchup = False , default args = default args , schedule interval = datetime . timedelta ( days = 1 ), ) as dag : Print the dag run id from the Airflow logs print dag run conf = bash .
- The list of DAGs displays the composer quickstart DAG (click to enlarge) Note: The airflow monitoring DAG is used by Cloud Composer to monitor the health of your environment.

### View DAGs, DAG runs, and tasks \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/latest/view-dags](https://docs.cloud.google.com/composer/docs/latest/view-dags)
- Source ID: `site-docs-root`
- Final score: 229
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can follow the link in the Run ID column to get additional information about tasks. gcloud Run the dags list-runs Airflow CLI command: gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ dags list-runs -- -d DAG ID Replace: ENVIRONMENT NAME with the name of the environment.
- Ways to view information about DAGs Cloud Composer provides several ways to get detailed information about DAGs in your environment: DAG UI is a section of Google Cloud console interface for Cloud Composer dedicated to viewing and monitoring DAGs, DAG runs, and individual tasks.
- You can follow the link in the Run after column to get additional information about tasks. (Airflow 2) In the Airflow UI, select Browse > DAG Runs .
- In the Airflow UI, on the DAGs page, a list of DAGs for your environment is displayed. gcloud Run the dags list Airflow CLI command: gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ dags list -- -o plain Replace: ENVIRONMENT NAME with the name of the environment.

### "Access the Airflow web interface \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface)
- Source ID: `site-iam-reference`
- Final score: 227
- Re-rank relevance: N/A

Evidence snippets:
- To ensure that web server remains accessible regardless of DAG load time, you can configure asynchronous DAG loading to parse and load DAGs in the background at a pre-configured interval (available in composer-1.7.1-airflow-1.10.2 and later versions).
- Example: // PATCH https://composer.googleapis.com/v1/projects/example-project/ // locations/us-central1/environments/example-environment?updateMask= // config.webServerNetworkAccessControl { "config" : { "webServerNetworkAccessControl" : { "allowedIpRanges" : [ { "value" : "192.0.2.0/24" , "description" : "example range" }, { "value" : "192.0.4.0/24" , "description" : "example range 2" } ] } } } Terraform In the allowed ip range block, in the web server network access control specify IP ranges that can access web server. resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { web server network access control { allowed ip range { value = " WS IP RANGE " description = " WS RANGE DESCRIPTION " } } } } Replace the following: WS IP RANGE : the IP range, in the CIDR notation, that can access the Airflow UI.
- To get the URL for the Airflow UI, run the following command in Google Cloud CLI: gcloud composer environments describe ENVIRONMENT NAME \ --location LOCATION Replace the following: ENVIRONMENT NAME : the name of your environment.
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 Apache Airflow includes a web user interface called Airflow UI , which you can use to manage Airflow DAGs, view DAG run logs, monitor Airflow, and perform administrative actions.

