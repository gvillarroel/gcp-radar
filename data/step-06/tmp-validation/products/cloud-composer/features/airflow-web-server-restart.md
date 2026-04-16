---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:12:02.760Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Airflow web server restart"
feature_slug: "airflow-web-server-restart"
latest_feature_date: "2021-01-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface"
  - "https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac"
  - "https://docs.cloud.google.com/composer/docs/composer-1/known-issues"
keywords:
  - "gcloud"
  - "restart"
  - "server"
  - "through"
  - "airflow"
---

# Airflow web server restart

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer can restart the Airflow web server through the gcloud beta command or Beta API.

## Extended Definition

Cloud Composer can restart the Airflow web server through the gcloud beta command or Beta API.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface)
- [https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac](https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac)
- [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)

## Supporting Pages

### "Access the Airflow web interface \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface)
- Source ID: `site-iam-reference`
- Final score: 144
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To forbid access for all IP addresses, select Allow access only from specific IP addresses and click Delete item next to the empty range entry. gcloud When you update an environment, the following arguments control web server access parameters: --web-server-allow-all provides access to Airflow from all IP addresses.
- You can restart the web server using the restartWebServer API or the restart-web-server command in Google Cloud CLI: gcloud composer environments restart-web-server ENVIRONMENT NAME \ --location = LOCATION Replace the following: ENVIRONMENT NAME : the name of your environment.
- Restart the web server When debugging or troubleshooting Cloud Composer environments, some issues may be resolved by restarting the Airflow web server.
- Example: // PATCH https://composer.googleapis.com/v1/projects/example-project/ // locations/us-central1/environments/example-environment?updateMask= // config.webServerNetworkAccessControl { "config" : { "webServerNetworkAccessControl" : { "allowedIpRanges" : [ { "value" : "192.0.2.0/24" , "description" : "example range" }, { "value" : "192.0.4.0/24" , "description" : "example range 2" } ] } } } Terraform In the allowed ip range block, in the web server network access control specify IP ranges that can access web server. resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { web server network access control { allowed ip range { value = " WS IP RANGE " description = " WS RANGE DESCRIPTION " } } } } Replace the following: WS IP RANGE : the IP range, in the CIDR notation, that can access the Airflow UI.

### "Using Airflow UI Access Control \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac](https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac)
- Source ID: `site-iam-reference`
- Final score: 135
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To preregister a user with a custom role through Google Cloud CLI, run the following Airflow CLI command : gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ users create -- \ -r ROLE \ -e USER EMAIL \ -u USER EMAIL \ -f FIRST NAME \ -l LAST NAME \ --use-random-password # The password value is required, but is not used Replace the following: ENVIRONMENT NAME : the name of the environment LOCATION : the region where the environment is located ROLE : an Airflow role for the user, for example, Op USER EMAIL : the user's email address FIRST NAME and LAST NAME : user's first name and last name Example: gcloud composer environments run example-environment \ --location us-central1 \ users create -- \ -r Op \ -e "example-user@example.com" \ -u "example-user@example.com" \ -f "Name" \ -l "Surname" \ --use-random-password Remove users Deleting a user from Airflow does not revoke access for that user, because they are automatically registered again next time they access the Airflow UI.
- Airflow UI Access Control does not apply to other interfaces that are available to users, such as Airflow CLI commands executed through gcloud CLI.
- Manually granting DAG permissions (through Airflow UI or gcloud CLI) can cause conflicts.
- In Airflow 2 and 3, override the following Airflow configuration option: Section Key Value webserver rbac user registration role UserNoDags In Airflow 1, override the following Airflow configuration option: Section Key Value webserver rbac user registration role NoDags Make sure that users are registered in Airflow .

### Known issues \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- Source ID: `site-iam-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Check web server logs for log entries that look similar to: GCS sync exited with 1: gcloud storage cp gs://<bucket-name>/airflow.cfg /home/airflow/gcs/airflow.cfg.tmp or GCS sync exited with 1: gcloud storage cp gs://<bucket-name>/env var.json.cfg /home/airflow/gcs/env var.json.tmp .
- You can also restart the Airflow web server . (Cloud Composer 3 only) Connectivity issue.
- In such a case, restart the Airflow web server of your environment.
- Airflow 1.9.0 stores and expects the log names to be in the following format: BUCKET/logs/DAG/2020-03-30T10:29:06/1.log Airflow 1.10.x stores and expects the log names to be in the following format: BUCKET/logs/DAG/2020-03-30T10:29:06+00:00/1.log As a result, if you upgrade from Airflow 1.9.0 to Airflow 1.10.x and would like to read the log for a task executed with Airflow 1.9.0, the Airflow Web server will show the following error message: Unable to read remote log from BUCKET/logs/DAG/2020-03-30T10:29:06+00:00/1.log Workaround: Rename the logs generated by Airflow 1.9.0 in the Cloud Storage bucket using the format: BUCKET/logs/DAG/2020-03-30T10:29:06+00:00/1.log Cannot create Cloud Composer environments with the organization policy constraints/compute.disableSerialPortLogging enforced Cloud Composer environment creation fails if the constraints/compute.disableSerialPortLogging organization policy is enforced on the target project.

