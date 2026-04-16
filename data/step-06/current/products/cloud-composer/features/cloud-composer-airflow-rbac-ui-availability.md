---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:20.136Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer Airflow RBAC UI availability"
feature_slug: "cloud-composer-airflow-rbac-ui-availability"
latest_feature_date: "2021-03-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac"
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api"
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-secret-manager"
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-database"
keywords:
  - "composer"
  - "airflow"
  - "rbac"
  - "ui"
  - "availability"
  - "for"
  - "the"
  - "role"
---

# Cloud Composer Airflow RBAC UI availability

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Support for the Airflow Role-Based Access Control (RBAC) UI became generally available in Cloud Composer.

## Extended Definition

Support for the Airflow Role-Based Access Control (RBAC) UI became generally available in Cloud Composer.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac](https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac)
- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api)
- [https://docs.cloud.google.com/composer/docs/composer-1/configure-secret-manager](https://docs.cloud.google.com/composer/docs/composer-1/configure-secret-manager)
- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-database](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-database)

## Supporting Pages

### "Using Airflow UI Access Control \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac](https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac)
- Source ID: `site-iam-reference`
- Final score: 291
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To preregister a user with a custom role through Google Cloud CLI, run the following Airflow CLI command : gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ users create -- \ -r ROLE \ -e USER EMAIL \ -u USER EMAIL \ -f FIRST NAME \ -l LAST NAME \ --use-random-password # The password value is required, but is not used Replace the following: ENVIRONMENT NAME : the name of the environment LOCATION : the region where the environment is located ROLE : an Airflow role for the user, for example, Op USER EMAIL : the user's email address FIRST NAME and LAST NAME : user's first name and last name Example: gcloud composer environments run example-environment \ --location us-central1 \ users create -- \ -r Op \ -e "example-user@example.com" \ -u "example-user@example.com" \ -f "Name" \ -l "Surname" \ --use-random-password Remove users Deleting a user from Airflow does not revoke access for that user, because they are automatically registered again next time they access the Airflow UI.
- Section Key Value webserver rbac user registration role User or other non-Admin role Admins can now configure Airflow UI access control for new users, including granting the Admin role to other users.
- Airflow 1 To enable the Airflow UI with Access Control, override the following Airflow configuration option: Section Key Value webserver rbac True You can do so for an existing environment, or when creating a new environment.
- If you upload DAGs to subfolders with names that match built-in Airflow roles and roles created by Cloud Composer, then permissions to DAGs in these subfolders are still assigned to these roles.

### Access the Airflow REST API \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api)
- Source ID: `site-iam-reference`
- Final score: 242
- Re-rank relevance: N/A

Evidence snippets:
- Create an Airflow user with the Op role for the service account: Airflow UI Go to the Airflow UI .
- Returns: The page body, or raises an exception if the page couldn't be retrieved. """ Set the default timeout, if missing if "timeout" not in kwargs : kwargs [ "timeout" ] = 90 Obtain an OpenID Connect (OIDC) token from metadata server or using service account. google open id connect token = id token . fetch id token ( Request (), client id ) Fetch the Identity-Aware Proxy-protected URL, including an Authorization header containing "Bearer " followed by a Google-issued OpenID Connect token for the service account. resp = requests . request ( method , url , headers = { "Authorization" : "Bearer {} " . format ( google open id connect token )}, kwargs , ) if resp . status code == 403 : raise Exception ( "Service account does not have permission to " "access the IAP-protected application." ) elif resp . status code != 200 : raise Exception ( "Bad response from application: {!r} / {!r} / {!r} " . format ( resp . status code , resp . headers , resp . text ) ) else : return resp . text END COPIED IAP CODE Access Airflow REST API using a service account Note: If your environment uses Airflow 1, then this section only applies if Airflow UI Access Control is enabled in your environment.
- AuthorizedSession ( credentials ) project id = 'YOUR PROJECT ID' location = 'us-central1' composer environment = 'YOUR COMPOSER ENVIRONMENT NAME' environment url = ( "https://composer.googleapis.com/v1beta1/projects/ {} /locations/ {} " "/environments/ {} " ) . format ( project id , location , composer environment ) composer response = authed session . request ( "GET" , environment url ) environment data = composer response . json () composer version = environment data [ "config" ][ "softwareConfig" ][ "imageVersion" ] if "composer-1" not in composer version : version error = ( "This script is intended to be used with Composer 1 environments. " "In Composer 2, the Airflow Webserver is not in the tenant project, " "so there is no tenant client ID. " "See https://cloud.google.com/composer/docs/composer-2/environment-architecture for more details." ) raise ( RuntimeError ( version error )) airflow uri = environment data [ "config" ][ "airflowUri" ] The Composer environment response does not include the IAP client ID.
- The USE EXPERIMENTAL API variable is already set to True . from google.auth.transport.requests import Request from google.oauth2 import id token import requests IAM SCOPE = "https://www.googleapis.com/auth/iam" OAUTH TOKEN URI = "https://www.googleapis.com/oauth2/v4/token" If you are using the stable API, set this value to False For more info about Airflow APIs see https://cloud.google.com/composer/docs/access-airflow-api USE EXPERIMENTAL API = True def trigger dag ( data , context = None ): """Makes a POST request to the Composer DAG Trigger API When called via Google Cloud Functions (GCF), data and context are Background function parameters.

### "Configure Secret Manager for your environment \_|\_ Cloud Composer \_|\_\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-secret-manager](https://docs.cloud.google.com/composer/docs/composer-1/configure-secret-manager)
- Source ID: `site-iam-reference`
- Final score: 239
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enable and configure the Secret Manager backend Override the following Airflow configuration option: Section Key Value secrets backend airflow.providers.google.cloud.secrets.secret manager.CloudSecretManagerBackend Caution: Do not use airflow.contrib.secrets.gcp secrets manager.CloudSecretsManagerBackend because this value does not allow you to view logs in the Airflow UI.
- Note: For security reasons, variables and connections from Secret Manager are not visible in the Airflow UI.
- For example, for the airflow-variables-secret filename secret: from airflow.models.variable import Variable file name = Variable . get ( 'secret filename' ) Read connections Unless you are writing a custom operator, you should rarely need to access connections directly.
- For the airflow-variables-secret filename secret: file name = '{{var.value.secret filename}}' Read variables using custom operators and callbacks You can also use Secret Manager to read variables in custom operators or callback methods from operators.

### Access the Airflow database \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-database](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-database)
- Source ID: `site-iam-reference`
- Final score: 238
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- DAG ( "airflow db connection example" , start date = datetime . datetime ( 2025 , 1 , 1 ), schedule = None , catchup = False ) as dag : SQLExecuteQueryOperator ( task id = "run airflow db query" , dag = dag , conn id = "airflow db" , database = SQL DATABASE , sql = "SELECT FROM dag LIMIT 10;" , ) For more information about using the SQLExecuteQueryOperator, see the How-to Guide for Postgres using SQLExecuteQueryOperator in the Airflow documentation.
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Access the Airflow database Stay organized with collections Save and categorize content based on your preferences.
- Example: gcloud composer environments snapshots save \ example-environment \ --location us-central1 \ --snapshot-location "gs://example-bucket/environment snapshots" Example result: Response: '@type': type.googleapis.com/google.cloud.orchestration.airflow.service.v1.SaveSnapshotResponse snapshotPath: gs://example-bucket/environment snapshots/example-environment us-central1 2026-03-17T11-26-24 Prepare the destination database If you don't have a Cloud SQL instance, create one.
- Example: gcloud sql instances describe example-instance --format = "value(serviceAccountEmailAddress)" Example output: p231236835740-kw9999@gcp-sa-cloud-sql.iam.gserviceaccount.com Grant read permissions to this service account: gcloud storage buckets add-iam-policy-binding gs:// BUCKET NAME \ --member = serviceAccount: SQL SERVICE ACCOUNT \ --role = roles/storage.objectAdmin Replace the following: BUCKET NAME : name of the Cloud Storage bucket.

