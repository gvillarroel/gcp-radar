---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:12:02.880Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Airflow webserver UI product banner"
feature_slug: "airflow-webserver-ui-product-banner"
latest_feature_date: "2018-10-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api"
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface"
  - "https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac"
keywords:
  - "displays"
  - "branding"
  - "banner"
  - "webserver"
  - "airflow"
---

# Airflow webserver UI product banner

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

The Airflow webserver UI displays Cloud Composer branding in the top-right banner.

## Extended Definition

The Airflow webserver UI displays Cloud Composer branding in the top-right banner.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api)
- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface)
- [https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac](https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac)

## Supporting Pages

### "Access the Airflow web interface \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface)
- Source ID: `site-iam-reference`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- Example: // PATCH https://composer.googleapis.com/v1/projects/example-project/ // locations/us-central1/environments/example-environment?updateMask= // config.webServerNetworkAccessControl { "config" : { "webServerNetworkAccessControl" : { "allowedIpRanges" : [ { "value" : "192.0.2.0/24" , "description" : "example range" }, { "value" : "192.0.4.0/24" , "description" : "example range 2" } ] } } } Terraform In the allowed ip range block, in the web server network access control specify IP ranges that can access web server. resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { web server network access control { allowed ip range { value = " WS IP RANGE " description = " WS RANGE DESCRIPTION " } } } } Replace the following: WS IP RANGE : the IP range, in the CIDR notation, that can access the Airflow UI.
- The webServerNetworkAccessControl element must be present, but must not contain an allowedIpRanges element. { "config" : { "webServerNetworkAccessControl" : { "allowedIpRanges" : [ { "value" : " WS IP RANGE " , "description" : " WS RANGE DESCRIPTION " } ] } } } Replace the following: WS IP RANGE : the IP range, in the CIDR notation, that can access the Airflow UI.
- In the request body, specify how Airflow task logs must be saved: To provide access to Airflow from all IP addresses, specify an empty config element (the webServerNetworkAccessControl element must not be present).
- Override the following Airflow configuration options: Section Key Value Notes webserver async dagbag loader True The default is False . webserver collect dags interval 30 The default is 30 .

### "Using Airflow UI Access Control \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac](https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac)
- Source ID: `site-iam-reference`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- In Airflow 2 and 3, override the following Airflow configuration option: Section Key Value webserver rbac user registration role UserNoDags In Airflow 1, override the following Airflow configuration option: Section Key Value webserver rbac user registration role NoDags Make sure that users are registered in Airflow .
- Auto-assign DAGs to per-folder roles To auto-assign DAGs to per-folder roles: Override the following Airflow configuration option: Section Key Value webserver rbac autoregister per folder roles True Change the new user registration role to a role without access to any DAGs.
- Airflow 1 To enable the Airflow UI with Access Control, override the following Airflow configuration option: Section Key Value webserver rbac True You can do so for an existing environment, or when creating a new environment.
- Section Key Value webserver rbac user registration role User or other non-Admin role Admins can now configure Airflow UI access control for new users, including granting the Admin role to other users.

### Access the Airflow REST API \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api)
- Source ID: `site-iam-reference`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- AuthorizedSession ( credentials ) project id = 'YOUR PROJECT ID' location = 'us-central1' composer environment = 'YOUR COMPOSER ENVIRONMENT NAME' environment url = ( "https://composer.googleapis.com/v1beta1/projects/ {} /locations/ {} " "/environments/ {} " ) . format ( project id , location , composer environment ) composer response = authed session . request ( "GET" , environment url ) environment data = composer response . json () composer version = environment data [ "config" ][ "softwareConfig" ][ "imageVersion" ] if "composer-1" not in composer version : version error = ( "This script is intended to be used with Composer 1 environments. " "In Composer 2, the Airflow Webserver is not in the tenant project, " "so there is no tenant client ID. " "See https://cloud.google.com/composer/docs/composer-2/environment-architecture for more details." ) raise ( RuntimeError ( version error )) airflow uri = environment data [ "config" ][ "airflowUri" ] The Composer environment response does not include the IAP client ID.
- This script is intended to be used with Composer 1 environments In Composer 2, the Airflow Webserver is not in the tenant project so there is no tenant client ID See https://cloud.google.com/composer/docs/composer-2/environment-architecture for more details import google.auth import google.auth.transport.requests import requests import six.moves.urllib.parse Authenticate with Google Cloud.
- Replace the value of the webserver id variable with your tenant project ID, which is a part of the Airflow web interface URL before .appspot.com .
- This function is currently only compatible with Composer v1 environments. """ Fill in with your Composer info here Navigate to your webserver's login page and get this from the URL Or use the script found at https://github.com/GoogleCloudPlatform/python-docs-samples/blob/main/composer/rest/get client id.py client id = "YOUR-CLIENT-ID" This should be part of your webserver's URL: {tenant-project-id}.appspot.com webserver id = "YOUR-TENANT-PROJECT" The name of the DAG you wish to trigger dag name = "composer sample trigger response dag" if USE EXPERIMENTAL API : endpoint = f "api/experimental/dags/ { dag name } /dag runs" json data = { "conf" : data , "replace microseconds" : "false" } else : endpoint = f "api/v1/dags/ { dag name } /dagRuns" json data = { "conf" : data } webserver url = "https://" + webserver id + ".appspot.com/" + endpoint Make a POST request to IAP which then Triggers the DAG make iap request ( webserver url , client id , method = "POST" , json = json data ) This code is copied from https://github.com/GoogleCloudPlatform/python-docs-samples/blob/main/iap/make iap request.py START COPIED IAP CODE def make iap request ( url , client id , method = "GET" , kwargs ): """Makes a request to an application protected by Identity-Aware Proxy.

