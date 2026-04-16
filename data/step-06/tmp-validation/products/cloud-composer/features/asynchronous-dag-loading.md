---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:12:02.850Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Asynchronous DAG loading"
feature_slug: "asynchronous-dag-loading"
latest_feature_date: "2019-05-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface"
  - "https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard"
  - "https://docs.cloud.google.com/composer/docs/composer-1/enable-composer-service"
keywords:
  - "loading"
  - "asynchronous"
  - "server"
  - "supports"
  - "airflow"
---

# Asynchronous DAG loading

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer supports asynchronous DAG loading in the Airflow web server to improve DAG display speed and reduce downtime.

## Extended Definition

Cloud Composer supports asynchronous DAG loading in the Airflow web server to improve DAG display speed and reduce downtime.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface)
- [https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard](https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard)
- [https://docs.cloud.google.com/composer/docs/composer-1/enable-composer-service](https://docs.cloud.google.com/composer/docs/composer-1/enable-composer-service)

## Supporting Pages

### Enable and disable the Cloud Composer service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/enable-composer-service](https://docs.cloud.google.com/composer/docs/composer-1/enable-composer-service)
- Source ID: `site-iam-reference`
- Final score: 36
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

### "Access the Airflow web interface \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface)
- Source ID: `site-iam-reference`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- To ensure that web server remains accessible regardless of DAG load time, you can configure asynchronous DAG loading to parse and load DAGs in the background at a pre-configured interval (available in composer-1.7.1-airflow-1.10.2 and later versions).
- The URL is listed as airflowUri . config : airflowUri : https://example-tp.appspot.com Configure asynchronous DAG loading When asynchronous DAG loading is enabled, the Airflow web server creates a new process.
- If you continue to experience web server issues due to DAG parsing, we recommend that you use asynchronous DAG loading.
- Example: // PATCH https://composer.googleapis.com/v1/projects/example-project/ // locations/us-central1/environments/example-environment?updateMask= // config.webServerNetworkAccessControl { "config" : { "webServerNetworkAccessControl" : { "allowedIpRanges" : [ { "value" : "192.0.2.0/24" , "description" : "example range" }, { "value" : "192.0.4.0/24" , "description" : "example range 2" } ] } } } Terraform In the allowed ip range block, in the web server network access control specify IP ranges that can access web server. resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { web server network access control { allowed ip range { value = " WS IP RANGE " description = " WS RANGE DESCRIPTION " } } } } Replace the following: WS IP RANGE : the IP range, in the CIDR notation, that can access the Airflow UI.

### Use the monitoring dashboard \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard](https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard)
- Source ID: `site-docs-root`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- Total web server disk usage The total usage of disk space by containers running in all Airflow web server Pods , and the combined disk space limit for all web servers.
- Web server CPU usage The total usage of vCPU cores by containers running in all Airflow web server Pods , and the combined vCPU limit for all web servers.
- Web server memory usage The total usage of memory by containers running in all Airflow web server Pods , and the combined vCPU limit for all web servers.
- This status is generated based on HTTP status codes returned by the Airflow web server.

