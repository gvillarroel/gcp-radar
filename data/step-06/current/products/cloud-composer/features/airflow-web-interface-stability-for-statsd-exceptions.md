---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:49.152Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Airflow web interface stability for statsd exceptions"
feature_slug: "airflow-web-interface-stability-for-statsd-exceptions"
latest_feature_date: "2018-07-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface"
  - "https://docs.cloud.google.com/composer/docs/release-notes"
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api"
keywords:
  - "airflow"
  - "web"
  - "interface"
  - "stability"
  - "for"
  - "statsd"
  - "exceptions"
  - "fixed"
---

# Airflow web interface stability for statsd exceptions

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Fixed a web interface crash-loop issue in Airflow caused by statsd exceptions.

## Extended Definition

Fixed a web interface crash-loop issue in Airflow caused by statsd exceptions.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface)
- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api)

## Supporting Pages

### "Access the Airflow web interface \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface)
- Source ID: `site-iam-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 Apache Airflow includes a web user interface called Airflow UI , which you can use to manage Airflow DAGs, view DAG run logs, monitor Airflow, and perform administrative actions.
- Example: // PATCH https://composer.googleapis.com/v1/projects/example-project/ // locations/us-central1/environments/example-environment?updateMask= // config.webServerNetworkAccessControl { "config" : { "webServerNetworkAccessControl" : { "allowedIpRanges" : [ { "value" : "192.0.2.0/24" , "description" : "example range" }, { "value" : "192.0.4.0/24" , "description" : "example range 2" } ] } } } Terraform In the allowed ip range block, in the web server network access control specify IP ranges that can access web server. resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { web server network access control { allowed ip range { value = " WS IP RANGE " description = " WS RANGE DESCRIPTION " } } } } Replace the following: WS IP RANGE : the IP range, in the CIDR notation, that can access the Airflow UI.
- To forbid access for all IP addresses, select Allow access only from specific IP addresses and click Delete item next to the empty range entry. gcloud When you update an environment, the following arguments control web server access parameters: --web-server-allow-all provides access to Airflow from all IP addresses.
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Access the Airflow web interface Stay organized with collections Save and categorize content based on your preferences.

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Fixed the Airflow web interface crashlooping issue that resulted from statsd exceptions.
- May 26, 2025 Feature (Cloud Composer 3) New metrics that show the number of active Airflow components are now available for Cloud Composer 3 environments: The number of active schedulers The number of active DAG processors The number of active triggerers The number of active web servers Fixed (Cloud Composer 3) It's now possible to override the default scopes of access tokens in all regions supported by Cloud Composer 3.
- Change Source code for the apache-airflow-providers-google package versions 2022.6.22+composer and 2022.5.18+composer is available on GitHub: 2022.6.22+composer 2022.5.18+composer Fixed (Cloud Composer 2) Improved the reliability of web server proxy connectivity.
- March 07, 2019 Feature You can now access the Airflow web interface logs in Stackdriver Logging for Cloud Composer under airflow-webserver .

### Access the Airflow REST API \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api)
- Source ID: `site-iam-reference`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- Replace the value of the webserver id variable with your tenant project ID, which is a part of the Airflow web interface URL before .appspot.com .
- AuthorizedSession ( credentials ) project id = 'YOUR PROJECT ID' location = 'us-central1' composer environment = 'YOUR COMPOSER ENVIRONMENT NAME' environment url = ( "https://composer.googleapis.com/v1beta1/projects/ {} /locations/ {} " "/environments/ {} " ) . format ( project id , location , composer environment ) composer response = authed session . request ( "GET" , environment url ) environment data = composer response . json () composer version = environment data [ "config" ][ "softwareConfig" ][ "imageVersion" ] if "composer-1" not in composer version : version error = ( "This script is intended to be used with Composer 1 environments. " "In Composer 2, the Airflow Webserver is not in the tenant project, " "so there is no tenant client ID. " "See https://cloud.google.com/composer/docs/composer-2/environment-architecture for more details." ) raise ( RuntimeError ( version error )) airflow uri = environment data [ "config" ][ "airflowUri" ] The Composer environment response does not include the IAP client ID.
- This script is intended to be used with Composer 1 environments In Composer 2, the Airflow Webserver is not in the tenant project so there is no tenant client ID See https://cloud.google.com/composer/docs/composer-2/environment-architecture for more details import google.auth import google.auth.transport.requests import requests import six.moves.urllib.parse Authenticate with Google Cloud.
- Instead, make an unauthenticated request to the Airflow web server and capture the client ID from the redirect URL: cURL curl -v AIRFLOW URL 2>&1 >/dev/null grep -o "client id\=[A-Za-z0-9-] \.apps\.googleusercontent\.com" Replace AIRFLOW URL with the URL of the Airflow web interface.

