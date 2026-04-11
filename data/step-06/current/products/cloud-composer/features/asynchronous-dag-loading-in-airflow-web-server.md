---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:49.108Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Asynchronous DAG loading in Airflow web server"
feature_slug: "asynchronous-dag-loading-in-airflow-web-server"
latest_feature_date: "2019-05-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface"
  - "https://docs.cloud.google.com/composer/docs/composer-1/dag-serialization"
  - "https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac"
keywords:
  - "asynchronous"
  - "dag"
  - "loading"
  - "in"
  - "airflow"
  - "web"
  - "server"
  - "composer"
---

# Asynchronous DAG loading in Airflow web server

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer now supports asynchronous DAG loading in the Airflow web server to display DAGs faster.

## Extended Definition

Cloud Composer now supports asynchronous DAG loading in the Airflow web server to display DAGs faster.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface)
- [https://docs.cloud.google.com/composer/docs/composer-1/dag-serialization](https://docs.cloud.google.com/composer/docs/composer-1/dag-serialization)
- [https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac](https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac)

## Supporting Pages

### "Access the Airflow web interface \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface)
- Source ID: `site-iam-reference`
- Final score: 272
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To ensure that web server remains accessible regardless of DAG load time, you can configure asynchronous DAG loading to parse and load DAGs in the background at a pre-configured interval (available in composer-1.7.1-airflow-1.10.2 and later versions).
- The URL is listed as airflowUri . config : airflowUri : https://example-tp.appspot.com Configure asynchronous DAG loading When asynchronous DAG loading is enabled, the Airflow web server creates a new process.
- If you continue to experience web server issues due to DAG parsing, we recommend that you use asynchronous DAG loading.
- Example: // PATCH https://composer.googleapis.com/v1/projects/example-project/ // locations/us-central1/environments/example-environment?updateMask= // config.webServerNetworkAccessControl { "config" : { "webServerNetworkAccessControl" : { "allowedIpRanges" : [ { "value" : "192.0.2.0/24" , "description" : "example range" }, { "value" : "192.0.4.0/24" , "description" : "example range 2" } ] } } } Terraform In the allowed ip range block, in the web server network access control specify IP ranges that can access web server. resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { web server network access control { allowed ip range { value = " WS IP RANGE " description = " WS RANGE DESCRIPTION " } } } } Replace the following: WS IP RANGE : the IP range, in the CIDR notation, that can access the Airflow UI.

### "Enabling and disabling DAG serialization \_|\_ Cloud Composer \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/dag-serialization](https://docs.cloud.google.com/composer/docs/composer-1/dag-serialization)
- Source ID: `site-iam-reference`
- Final score: 220
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In a Cloud Composer environment, both the Airflow scheduler and the Airflow web server continuously process DAGs.
- Enabling DAG serialization disables all Airflow web server plugins for Cloud Composer.
- DAG serialization affects the following Cloud Composer features: DAG serialization cannot be enabled at the same time as asynchronous DAG loading .
- You can improve the reliability and performance of the Airflow web server by enabling DAG serialization .

### "Using Airflow UI Access Control \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac](https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac)
- Source ID: `site-iam-reference`
- Final score: 202
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In Airflow 2 and 3, override the following Airflow configuration option: Section Key Value webserver rbac user registration role UserNoDags In Airflow 1, override the following Airflow configuration option: Section Key Value webserver rbac user registration role NoDags Make sure that users are registered in Airflow .
- Auto-assign DAGs to per-folder roles To auto-assign DAGs to per-folder roles: Override the following Airflow configuration option: Section Key Value webserver rbac autoregister per folder roles True Change the new user registration role to a role without access to any DAGs.
- Overview of Airflow UI access control in Cloud Composer Access to Airflow UI and DAG UI and visibility of data and operations in those UIs is controlled at two levels in Cloud Composer: Access to the Airflow UI and DAG UI in Cloud Composer is controlled by IAM .
- Airflow 1 To enable the Airflow UI with Access Control, override the following Airflow configuration option: Section Key Value webserver rbac True You can do so for an existing environment, or when creating a new environment.

