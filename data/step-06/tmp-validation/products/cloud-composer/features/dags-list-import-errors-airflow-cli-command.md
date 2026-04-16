---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:12:02.180Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "dags list-import-errors Airflow CLI command"
feature_slug: "dags-list-import-errors-airflow-cli-command"
latest_feature_date: "2023-12-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api"
  - "https://docs.cloud.google.com/composer/docs/latest/schedule-and-trigger-dags"
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface"
keywords:
  - "import"
  - "list"
  - "command"
  - "errors"
  - "dags"
  - "airflow"
---

# dags list-import-errors Airflow CLI command

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer supports the Airflow CLI command dags list-import-errors.

## Extended Definition

Cloud Composer supports the Airflow CLI command dags list-import-errors.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api)
- [https://docs.cloud.google.com/composer/docs/latest/schedule-and-trigger-dags](https://docs.cloud.google.com/composer/docs/latest/schedule-and-trigger-dags)
- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface)

## Supporting Pages

### "Schedule and trigger Airflow DAGs \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/latest/schedule-and-trigger-dags](https://docs.cloud.google.com/composer/docs/latest/schedule-and-trigger-dags)
- Source ID: `site-docs-root`
- Final score: 40
- Re-rank relevance: N/A

Evidence snippets:
- In the Airflow web interface, on the DAGs page, click the toggle next to the DAG's name. gcloud Run the dags pause Airflow CLI command: gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ dags pause -- DAG ID Replace the following: ENVIRONMENT NAME : the name of your environment.
- Note: To backfill DAG runs for a certain date instead of catching up, run the dags backfill Airflow CLI command using Google Cloud CLI . (Optional) In the retries parameter, define how many times Airflow must retry tasks that failed (each DAG consists of one or more individual tasks).
- Run the dags trigger Airflow CLI command: gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ dags trigger -- DAG ID Replace the following: ENVIRONMENT NAME : the name of your environment.
- In the Airflow UI, on the DAGs page, click the Trigger DAG button for your DAG. gcloud Important: If you want to trigger a large number of DAGs , we recommend to do it with Airflow REST API .

### Access the Airflow REST API \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api)
- Source ID: `site-iam-reference`
- Final score: 39
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 Apache Airflow has a REST API interface that you can use to perform tasks such as getting information about DAG runs and tasks, updating DAGs, getting Airflow configuration, adding and deleting connections, and listing users.
- What's next Triggering DAGs with Cloud Run functions Airflow command-line interface Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The USE EXPERIMENTAL API variable is already set to True . from google.auth.transport.requests import Request from google.oauth2 import id token import requests IAM SCOPE = "https://www.googleapis.com/auth/iam" OAUTH TOKEN URI = "https://www.googleapis.com/oauth2/v4/token" If you are using the stable API, set this value to False For more info about Airflow APIs see https://cloud.google.com/composer/docs/access-airflow-api USE EXPERIMENTAL API = True def trigger dag ( data , context = None ): """Makes a POST request to the Composer DAG Trigger API When called via Google Cloud Functions (GCF), data and context are Background function parameters.
- This script is intended to be used with Composer 1 environments In Composer 2, the Airflow Webserver is not in the tenant project so there is no tenant client ID See https://cloud.google.com/composer/docs/composer-2/environment-architecture for more details import google.auth import google.auth.transport.requests import requests import six.moves.urllib.parse Authenticate with Google Cloud.

### "Access the Airflow web interface \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface)
- Source ID: `site-iam-reference`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- Using async dagbag loader and store serialized dags Airflow configuration options produces HTTP 503 errors and breaks your environment.
- To ensure that web server remains accessible regardless of DAG load time, you can configure asynchronous DAG loading to parse and load DAGs in the background at a pre-configured interval (available in composer-1.7.1-airflow-1.10.2 and later versions).
- To get the URL for the Airflow UI, run the following command in Google Cloud CLI: gcloud composer environments describe ENVIRONMENT NAME \ --location LOCATION Replace the following: ENVIRONMENT NAME : the name of your environment.
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 Apache Airflow includes a web user interface called Airflow UI , which you can use to manage Airflow DAGs, view DAG run logs, monitor Airflow, and perform administrative actions.

