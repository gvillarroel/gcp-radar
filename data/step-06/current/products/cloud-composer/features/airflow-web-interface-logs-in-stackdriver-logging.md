---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:49.121Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Airflow web interface logs in Stackdriver Logging"
feature_slug: "airflow-web-interface-logs-in-stackdriver-logging"
latest_feature_date: "2019-03-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface"
  - "https://docs.cloud.google.com/composer/docs/composer-1/audit-logging"
  - "https://docs.cloud.google.com/composer/docs/release-notes"
keywords:
  - "airflow"
  - "web"
  - "interface"
  - "logs"
  - "in"
  - "stackdriver"
  - "logging"
  - "composer"
---

# Airflow web interface logs in Stackdriver Logging

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer now makes Airflow web interface logs available in Stackdriver Logging under `airflow-webserver`.

## Extended Definition

Cloud Composer now makes Airflow web interface logs available in Stackdriver Logging under `airflow-webserver`.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface)
- [https://docs.cloud.google.com/composer/docs/composer-1/audit-logging](https://docs.cloud.google.com/composer/docs/composer-1/audit-logging)
- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)

## Supporting Pages

### "Access the Airflow web interface \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface)
- Source ID: `site-iam-reference`
- Final score: 236
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 Apache Airflow includes a web user interface called Airflow UI , which you can use to manage Airflow DAGs, view DAG run logs, monitor Airflow, and perform administrative actions.
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Access the Airflow web interface Stay organized with collections Save and categorize content based on your preferences.
- Example: // PATCH https://composer.googleapis.com/v1/projects/example-project/ // locations/us-central1/environments/example-environment?updateMask= // config.webServerNetworkAccessControl { "config" : { "webServerNetworkAccessControl" : { "allowedIpRanges" : [ { "value" : "192.0.2.0/24" , "description" : "example range" }, { "value" : "192.0.4.0/24" , "description" : "example range 2" } ] } } } Terraform In the allowed ip range block, in the web server network access control specify IP ranges that can access web server. resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { web server network access control { allowed ip range { value = " WS IP RANGE " description = " WS RANGE DESCRIPTION " } } } } Replace the following: WS IP RANGE : the IP range, in the CIDR notation, that can access the Airflow UI.
- Example: resource "google composer environment" "example" { provider = google-beta name = "example-environment" region = "us-central1" config { web server network access control { allowed ip range { value = "192.0.2.0/24" description = "example range" }, allowed ip range { value = "192.0.4.0/24" description = "example range 2" } } } What's next Airflow UI Access Control Troubleshooting Airflow web server issues Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Cloud Composer audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/audit-logging](https://docs.cloud.google.com/composer/docs/composer-1/audit-logging)
- Source ID: `site-iam-reference`
- Final score: 200
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Permission type Methods ADMIN READ google.cloud.orchestration.airflow.service.v1.Environments.FetchDatabaseProperties google.cloud.orchestration.airflow.service.v1.Environments.GetEnvironment google.cloud.orchestration.airflow.service.v1.Environments.GetUserWorkloadsConfigMap google.cloud.orchestration.airflow.service.v1.Environments.GetUserWorkloadsSecret google.cloud.orchestration.airflow.service.v1.Environments.ListEnvironments google.cloud.orchestration.airflow.service.v1.Environments.ListUserWorkloadsConfigMaps google.cloud.orchestration.airflow.service.v1.Environments.ListUserWorkloadsSecrets google.cloud.orchestration.airflow.service.v1.Environments.ListWorkloads google.cloud.orchestration.airflow.service.v1.ImageVersions.ListImageVersions google.cloud.orchestration.airflow.service.v1beta1.Environments.FetchDatabaseProperties google.cloud.orchestration.airflow.service.v1beta1.Environments.GetEnvironment google.cloud.orchestration.airflow.service.v1beta1.Environments.GetUserWorkloadsConfigMap google.cloud.orchestration.airflow.service.v1beta1.Environments.GetUserWorkloadsSecret google.cloud.orchestration.airflow.service.v1beta1.Environments.ListEnvironments google.cloud.orchestration.airflow.service.v1beta1.Environments.ListUserWorkloadsConfigMaps google.cloud.orchestration.airflow.service.v1beta1.Environments.ListUserWorkloadsSecrets google.cloud.orchestration.airflow.service.v1beta1.Environments.ListWorkloads google.cloud.orchestration.airflow.service.v1beta1.ImageVersions.ListImageVersions ADMIN WRITE google.cloud.orchestration.airflow.service.v1.Environments.CheckUpgrade (LRO) google.cloud.orchestration.airflow.service.v1.Environments.CreateEnvironment (LRO) google.cloud.orchestration.airflow.service.v1.Environments.CreateUserWorkloadsConfigMap google.cloud.orchestration.airflow.service.v1.Environments.CreateUserWorkloadsSecret google.cloud.orchestration.airflow.service.v1.Environments.DatabaseFailover (LRO) google.cloud.orchestration.airflow.service.v1.Environments.DeleteEnvironment (LRO) google.cloud.orchestration.airflow.service.v1.Environments.DeleteUserWorkloadsConfigMap google.cloud.orchestration.airflow.service.v1.Environments.DeleteUserWorkloadsSecret google.cloud.orchestration.airflow.service.v1.Environments.ExecuteAirflowCommand google.cloud.orchestration.airflow.service.v1.Environments.LoadSnapshot (LRO) google.cloud.orchestration.airflow.service.v1.Environments.PollAirflowCommand google.cloud.orchestration.airflow.service.v1.Environments.SaveSnapshot (LRO) google.cloud.orchestration.airflow.service.v1.Environments.StopAirflowCommand google.cloud.orchestration.airflow.service.v1.Environments.UpdateEnvironment (LRO) google.cloud.orchestration.airflow.service.v1.Environments.UpdateUserWorkloadsConfigMap google.cloud.orchestration.airflow.service.v1.Environments.UpdateUserWorkloadsSecret google.cloud.orchestration.airflow.service.v1beta1.Environments.CheckUpgrade (LRO) google.cloud.orchestration.airflow.service.v1beta1.Environments.CreateEnvironment (LRO) google.cloud.orchestration.airflow.service.v1beta1.Environments.CreateUserWorkloadsConfigMap google.cloud.orchestration.airflow.service.v1beta1.Environments.CreateUserWorkloadsSecret google.cloud.orchestration.airflow.service.v1beta1.Environments.DatabaseFailover (LRO) google.cloud.orchestration.airflow.service.v1beta1.Environments.DeleteEnvironment (LRO) google.cloud.orchestration.airflow.service.v1beta1.Environments.DeleteUserWorkloadsConfigMap google.cloud.orchestration.airflow.service.v1beta1.Environments.DeleteUserWorkloadsSecret google.cloud.orchestration.airflow.service.v1beta1.Environments.ExecuteAirflowCommand google.cloud.orchestration.airflow.service.v1beta1.Environments.LoadSnapshot (LRO) google.cloud.orchestration.airflow.service.v1beta1.Environments.PollAirflowCommand google.cloud.orchestration.airflow.service.v1beta1.Environments.RestartWebServer (LRO) google.cloud.orchestration.airflow.service.v1beta1.Environments.SaveSnapshot (LRO) google.cloud.orchestration.airflow.service.v1beta1.Environments.StopAirflowCommand google.cloud.orchestration.airflow.service.v1beta1.Environments.UpdateEnvironment (LRO) google.cloud.orchestration.airflow.service.v1beta1.Environments.UpdateUserWorkloadsConfigMap google.cloud.orchestration.airflow.service.v1beta1.Environments.UpdateUserWorkloadsSecret google.longrunning.Operations.DeleteOperation API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Cloud Composer. google.cloud.orchestration.airflow.service.v1.Environments The following audit logs are associated with methods belonging to google.cloud.orchestration.airflow.service.v1.Environments .
- Filter for this method : protoPayload.methodName="google.cloud.orchestration.airflow.service.v1beta1.Environments.PollAirflowCommand" RestartWebServer Method : google.cloud.orchestration.airflow.service.v1beta1.Environments.RestartWebServer Audit log type : Admin activity Permissions : composer.environments.update - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.orchestration.airflow.service.v1beta1.Environments.RestartWebServer" SaveSnapshot Method : google.cloud.orchestration.airflow.service.v1beta1.Environments.SaveSnapshot Audit log type : Admin activity Permissions : composer.environments.update - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.orchestration.airflow.service.v1beta1.Environments.SaveSnapshot" StopAirflowCommand Method : google.cloud.orchestration.airflow.service.v1beta1.Environments.StopAirflowCommand Audit log type : Admin activity Permissions : composer.environments.executeAirflowCommand - ADMIN WRITE Method is a long-running or streaming operation : No.
- For more information about Cloud Audit Logs, see the following: Types of audit logs Audit log entry structure Storing and routing audit logs Cloud Logging pricing summary Enable Data Access audit logs Service name Cloud Composer audit logs use the service name composer.googleapis.com .
- Filter for this method : protoPayload.methodName="google.cloud.orchestration.airflow.service.v1beta1.Environments.CreateUserWorkloadsSecret" DatabaseFailover Method : google.cloud.orchestration.airflow.service.v1beta1.Environments.DatabaseFailover Audit log type : Admin activity Permissions : composer.environments.update - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.orchestration.airflow.service.v1beta1.Environments.DatabaseFailover" DeleteEnvironment Method : google.cloud.orchestration.airflow.service.v1beta1.Environments.DeleteEnvironment Audit log type : Admin activity Permissions : composer.environments.delete - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.orchestration.airflow.service.v1beta1.Environments.DeleteEnvironment" DeleteUserWorkloadsConfigMap Method : google.cloud.orchestration.airflow.service.v1beta1.Environments.DeleteUserWorkloadsConfigMap Audit log type : Admin activity Permissions : composer.userworkloadsconfigmaps.delete - ADMIN WRITE Method is a long-running or streaming operation : No.

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- March 07, 2019 Feature You can now access the Airflow web interface logs in Stackdriver Logging for Cloud Composer under airflow-webserver .
- Feature You can now access the Airflow web interface logs in Stackdriver Logging for Cloud Composer under airflow-webserver .
- Cloud Composer is now available in the following regions: asia-northeast1 us-east1 Revamped Stackdriver Logging as follows: Stackdriver Logging now based on fluentd and now includes composer-agent , airflow-redis , and airflow-sqlproxy logs.
- Change New images are available in Cloud Composer 2: composer-2.14.2-airflow-2.10.5 (default) composer-2.14.2-airflow-2.9.3 Change New Airflow builds are available in Cloud Composer 3: composer-3-airflow-2.10.5-build.14 (default) composer-3-airflow-2.9.3-build.34 Fixed Fixed Airflow logs not exporting to Cloud Logging because of a GKE version mismatch between Airflow worker and GKE Control plane nodes.

