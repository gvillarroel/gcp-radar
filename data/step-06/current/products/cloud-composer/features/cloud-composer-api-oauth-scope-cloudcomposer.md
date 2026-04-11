---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:47.714Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer API OAuth scope cloudcomposer"
feature_slug: "cloud-composer-api-oauth-scope-cloudcomposer"
latest_feature_date: "2026-02-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api"
  - "https://docs.cloud.google.com/composer/docs/release-notes"
  - "https://docs.cloud.google.com/composer/docs/composer-1/create-environments"
keywords:
  - "composer"
  - "api"
  - "oauth"
  - "scope"
  - "cloudcomposer"
  - "now"
  - "accepts"
  - "the"
---

# Cloud Composer API OAuth scope cloudcomposer

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer API now accepts the https://www.googleapis.com/auth/cloudcomposer OAuth scope, which is limited to Cloud Composer API access.

## Extended Definition

Cloud Composer API now accepts the https://www.googleapis.com/auth/cloudcomposer OAuth scope, which is limited to Cloud Composer API access.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api)
- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)

## Supporting Pages

### Access the Airflow REST API \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api)
- Source ID: `site-iam-reference`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- The USE EXPERIMENTAL API variable is already set to True . from google.auth.transport.requests import Request from google.oauth2 import id token import requests IAM SCOPE = "https://www.googleapis.com/auth/iam" OAUTH TOKEN URI = "https://www.googleapis.com/oauth2/v4/token" If you are using the stable API, set this value to False For more info about Airflow APIs see https://cloud.google.com/composer/docs/access-airflow-api USE EXPERIMENTAL API = True def trigger dag ( data , context = None ): """Makes a POST request to the Composer DAG Trigger API When called via Google Cloud Functions (GCF), data and context are Background function parameters.
- This function is currently only compatible with Composer v1 environments. """ Fill in with your Composer info here Navigate to your webserver's login page and get this from the URL Or use the script found at https://github.com/GoogleCloudPlatform/python-docs-samples/blob/main/composer/rest/get client id.py client id = "YOUR-CLIENT-ID" This should be part of your webserver's URL: {tenant-project-id}.appspot.com webserver id = "YOUR-TENANT-PROJECT" The name of the DAG you wish to trigger dag name = "composer sample trigger response dag" if USE EXPERIMENTAL API : endpoint = f "api/experimental/dags/ { dag name } /dag runs" json data = { "conf" : data , "replace microseconds" : "false" } else : endpoint = f "api/v1/dags/ { dag name } /dagRuns" json data = { "conf" : data } webserver url = "https://" + webserver id + ".appspot.com/" + endpoint Make a POST request to IAP which then Triggers the DAG make iap request ( webserver url , client id , method = "POST" , json = json data ) This code is copied from https://github.com/GoogleCloudPlatform/python-docs-samples/blob/main/iap/make iap request.py START COPIED IAP CODE def make iap request ( url , client id , method = "GET" , kwargs ): """Makes a request to an application protected by Identity-Aware Proxy.
- AuthorizedSession ( credentials ) project id = 'YOUR PROJECT ID' location = 'us-central1' composer environment = 'YOUR COMPOSER ENVIRONMENT NAME' environment url = ( "https://composer.googleapis.com/v1beta1/projects/ {} /locations/ {} " "/environments/ {} " ) . format ( project id , location , composer environment ) composer response = authed session . request ( "GET" , environment url ) environment data = composer response . json () composer version = environment data [ "config" ][ "softwareConfig" ][ "imageVersion" ] if "composer-1" not in composer version : version error = ( "This script is intended to be used with Composer 1 environments. " "In Composer 2, the Airflow Webserver is not in the tenant project, " "so there is no tenant client ID. " "See https://cloud.google.com/composer/docs/composer-2/environment-architecture for more details." ) raise ( RuntimeError ( version error )) airflow uri = environment data [ "config" ][ "airflowUri" ] The Composer environment response does not include the IAP client ID.
- You can enable or disable the stable REST API, or change the default user role by overriding the following Airflow configuration options: Section Key Value Notes api (Airflow 2.2.5 and earlier) auth backend (Airflow 2.3.0 and later) auth backends airflow.composer.api.backend.composer auth To disable the stable REST API, change to airflow.api.auth.backend.deny all api composer auth user registration role Op You can specify any other role .

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Change New Airflow builds are available in Cloud Composer 3: composer-3-airflow-3.1.7-build.0 composer-3-airflow-2.10.5-build.29 (default) composer-3-airflow-2.9.3-build.49 Change New images are available in Cloud Composer 2: composer-2.16.6-airflow-2.10.5 (default) composer-2.16.6-airflow-2.9.3 February 20, 2026 Feature Cloud Composer API now accepts the new https://www.googleapis.com/auth/cloudcomposer OAuth scope.
- January 10, 2022 Change (Available without upgrading) Programmatic calls to Airflow API and Airflow UI in Cloud Composer 2 must now contain OAuth tokens with the https://www.googleapis.com/auth/cloud-platform scope.
- May 26, 2025 Feature (Cloud Composer 3) New metrics that show the number of active Airflow components are now available for Cloud Composer 3 environments: The number of active schedulers The number of active DAG processors The number of active triggerers The number of active web servers Fixed (Cloud Composer 3) It's now possible to override the default scopes of access tokens in all regions supported by Cloud Composer 3.
- Change New Airflow builds are available in Cloud Composer 3: composer-3-airflow-2.10.5-build.4 (default) composer-3-airflow-2.9.3-build.24 Change New images are available in Cloud Composer 2: composer-2.13.2-airflow-2.10.5 (default) composer-2.13.2-airflow-2.9.3 May 14, 2025 Feature It is now possible to restart the Airflow web server through Cloud Composer API by using the RestartWebServer method .

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- Source ID: `site-iam-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "nodeConfig" : { "location" : "projects/example-project/zones/us-central1-a" , "oauthScopes" : [ "https://www.googleapis.com/auth/cloud-platform" , "https://www.googleapis.com/auth/bigquery" ], "serviceAccount" : " example-account@example-project. iam.gserviceaccount.com " }, "softwareConfig" : { "pythonVersion" : "3" } } } Terraform When you create an environment, following fields control miscellaneous parameters of your environment: zone field in the node config block specifies a Compute Engine zone for your environment VMs. oauth scopes field in the node config block specifies a comma-separated list of OAuth scopes. python version field in the software config block specifies the version of Python. resource "google composer environment" "example" { name = " ENVIRONMENT NAME " region = " LOCATION " config { node config { zone = " ZONE " oauth scopes = "[ OAUTH SCOPES ]" service account = " SERVICE ACCOUNT " } software config { python version = " PYTHON VERSION " } } } Replace: ZONE with the name of the Compute Engine zone.
- Example: gcloud composer environments create example-environment \ --location us-central1 \ --image-version composer-1.20.12-airflow-1.10.15 \ --service-account " example-account@example-project. iam.gserviceaccount.com " \ --zone us-central1-a \ --oauth-scopes https://www.googleapis.com/auth/cloud-platform,https://www.googleapis.com/auth/bigquery \ --python-version 3 API When you create an environment, in the Environment > EnvironmentConfig resource, specify miscellaneous parameters of your environment. { "name" : "projects/ PROJECT ID /locations/ LOCATION /environments/ ENVIRONMENT NAME " , "config" : { "nodeConfig" : { "location" : "projects/ PROJECT ID /zones/ ZONE " , "oauthScopes" : [ " OAUTH SCOPE " ], "serviceAccount" : " SERVICE ACCOUNT " }, "softwareConfig" : { "pythonVersion" : " PYTHON VERSION " } } } Replace: ZONE with the name of the Compute Engine zone.
- Example: resource "google composer environment" "example" { name = "example-environment" region = "us-central1" config { node config { zone = "us-central1-a" oauth scopes = "[https://www.googleapis.com/auth/cloud-platform,https://www.googleapis.com/auth/bigquery]" service account = " example-account@example-project . iam.gserviceaccount.com " } software config { python version = "3" } } } Step 12. (Optional) Enforce Beta API usage Preview — Enforcing beta API usage This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Include https://www.googleapis.com/auth/cloud-platform in the list of specified scopes. --python-version specifies the version of Python. gcloud composer environments create ENVIRONMENT NAME \ --location LOCATION \ --image-version composer-1.20.12-airflow-1.10.15 \ --service-account " SERVICE ACCOUNT " \ --zone ZONE \ --oauth-scopes OAUTH SCOPES \ --python-version PYTHON VERSION Replace: ZONE with the name of the Compute Engine zone.

