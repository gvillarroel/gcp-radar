---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:12:02.589Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "MLEngineManageModelOperator"
feature_slug: "mlenginemanagemodeloperator"
latest_feature_date: "2022-05-10"
deprecation_date: "2022-05-10"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface"
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-large-scale-networks"
  - "https://docs.cloud.google.com/composer/docs/composer-1/enable-composer-service"
keywords:
  - "mlenginemanagemodeloperator"
  - "deprecated"
  - "supports"
  - "airflow"
  - "2022"
---

# MLEngineManageModelOperator

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer supports the MLEngineManageModelOperator for Airflow 2; deprecated on 2022-05-10.

## Extended Definition

Cloud Composer supports the MLEngineManageModelOperator for Airflow 2; deprecated on 2022-05-10.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface)
- [https://docs.cloud.google.com/composer/docs/composer-1/configure-large-scale-networks](https://docs.cloud.google.com/composer/docs/composer-1/configure-large-scale-networks)
- [https://docs.cloud.google.com/composer/docs/composer-1/enable-composer-service](https://docs.cloud.google.com/composer/docs/composer-1/enable-composer-service)

## Supporting Pages

### "Configure large-scale networks for Cloud Composer environments \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-large-scale-networks](https://docs.cloud.google.com/composer/docs/composer-1/configure-large-scale-networks)
- Source ID: `site-iam-reference`
- Final score: 26
- Re-rank relevance: N/A

### Enable and disable the Cloud Composer service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/enable-composer-service](https://docs.cloud.google.com/composer/docs/composer-1/enable-composer-service)
- Source ID: `site-iam-reference`
- Final score: 26
- Re-rank relevance: N/A

### "Access the Airflow web interface \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface)
- Source ID: `site-iam-reference`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- Example: // PATCH https://composer.googleapis.com/v1/projects/example-project/ // locations/us-central1/environments/example-environment?updateMask= // config.webServerNetworkAccessControl { "config" : { "webServerNetworkAccessControl" : { "allowedIpRanges" : [ { "value" : "192.0.2.0/24" , "description" : "example range" }, { "value" : "192.0.4.0/24" , "description" : "example range 2" } ] } } } Terraform In the allowed ip range block, in the web server network access control specify IP ranges that can access web server. resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { web server network access control { allowed ip range { value = " WS IP RANGE " description = " WS RANGE DESCRIPTION " } } } } Replace the following: WS IP RANGE : the IP range, in the CIDR notation, that can access the Airflow UI.
- Example: resource "google composer environment" "example" { provider = google-beta name = "example-environment" region = "us-central1" config { web server network access control { allowed ip range { value = "192.0.2.0/24" description = "example range" }, allowed ip range { value = "192.0.4.0/24" description = "example range 2" } } } What's next Airflow UI Access Control Troubleshooting Airflow web server issues Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The webServerNetworkAccessControl element must be present, but must not contain an allowedIpRanges element. { "config" : { "webServerNetworkAccessControl" : { "allowedIpRanges" : [ { "value" : " WS IP RANGE " , "description" : " WS RANGE DESCRIPTION " } ] } } } Replace the following: WS IP RANGE : the IP range, in the CIDR notation, that can access the Airflow UI.
- To forbid access for all IP addresses, select Allow access only from specific IP addresses and click Delete item next to the empty range entry. gcloud When you update an environment, the following arguments control web server access parameters: --web-server-allow-all provides access to Airflow from all IP addresses.

