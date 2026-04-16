---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:20.402Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer beta launch"
feature_slug: "cloud-composer-beta-launch"
latest_feature_date: "2018-05-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/launch-dataflow-pipelines"
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface"
  - "https://docs.cloud.google.com/composer/docs/composer-1/audit-logging"
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api"
keywords:
  - "composer"
  - "beta"
  - "launch"
  - "launched"
  - "in"
  - "with"
  - "the"
  - "airflow"
---

# Cloud Composer beta launch

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Launched Cloud Composer in Beta with the composer-0.5.0-airflow-1.9.0 package.

## Extended Definition

Launched Cloud Composer in Beta with the composer-0.5.0-airflow-1.9.0 package.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/launch-dataflow-pipelines](https://docs.cloud.google.com/composer/docs/composer-1/launch-dataflow-pipelines)
- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface)
- [https://docs.cloud.google.com/composer/docs/composer-1/audit-logging](https://docs.cloud.google.com/composer/docs/composer-1/audit-logging)
- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api)

## Supporting Pages

### Launch Dataflow pipelines with Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/launch-dataflow-pipelines](https://docs.cloud.google.com/composer/docs/composer-1/launch-dataflow-pipelines)
- Source ID: `site-iam-reference`
- Final score: 265
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- DAG ( The id you will see in the DAG airflow page "composer dataflow dag" , default args = default args , The interval with which to schedule the DAG schedule interval = datetime . timedelta ( days = 1 ), # Override to match your needs ) as dag : start template job = DataflowTemplatedJobStartOperator ( The task id of your job task id = "dataflow operator transform csv to bq" , The name of the template that you're using.
- DAG ( The id you will see in the DAG airflow page "composer dataflow dag" , default args = default args , The interval with which to schedule the DAG schedule interval = datetime . timedelta ( days = 1 ), # Override to match your needs ) as dag : start template job = DataflowTemplateOperator ( The task id of your job task id = "dataflow operator transform csv to bq" , The name of the template that you're using.
- Python Save this code as dataflowtemplateoperator create dataset and table helper.py and update the variables in it to reflect your project and location, then run it with the following command: python dataflowtemplateoperator create dataset and table helper.py Python To authenticate to Cloud Composer, set up Application Default Credentials.
- Enable the APIs Make sure that you have the following permissions: Cloud Composer roles : create an environment (if you don't have one), manage objects in the environment's bucket, Run DAGs and access the Airflow UI.

### "Access the Airflow web interface \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface)
- Source ID: `site-iam-reference`
- Final score: 251
- Re-rank relevance: N/A

Evidence snippets:
- Example: // PATCH https://composer.googleapis.com/v1/projects/example-project/ // locations/us-central1/environments/example-environment?updateMask= // config.webServerNetworkAccessControl { "config" : { "webServerNetworkAccessControl" : { "allowedIpRanges" : [ { "value" : "192.0.2.0/24" , "description" : "example range" }, { "value" : "192.0.4.0/24" , "description" : "example range 2" } ] } } } Terraform In the allowed ip range block, in the web server network access control specify IP ranges that can access web server. resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { web server network access control { allowed ip range { value = " WS IP RANGE " description = " WS RANGE DESCRIPTION " } } } } Replace the following: WS IP RANGE : the IP range, in the CIDR notation, that can access the Airflow UI.
- Example: resource "google composer environment" "example" { provider = google-beta name = "example-environment" region = "us-central1" config { web server network access control { allowed ip range { value = "192.0.2.0/24" description = "example range" }, allowed ip range { value = "192.0.4.0/24" description = "example range 2" } } } What's next Airflow UI Access Control Troubleshooting Airflow web server issues Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Access the Airflow web interface Stay organized with collections Save and categorize content based on your preferences.
- To ensure that web server remains accessible regardless of DAG load time, you can configure asynchronous DAG loading to parse and load DAGs in the background at a pre-configured interval (available in composer-1.7.1-airflow-1.10.2 and later versions).

### Cloud Composer audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/audit-logging](https://docs.cloud.google.com/composer/docs/composer-1/audit-logging)
- Source ID: `site-iam-reference`
- Final score: 233
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Permission type Methods ADMIN READ google.cloud.orchestration.airflow.service.v1.Environments.FetchDatabaseProperties google.cloud.orchestration.airflow.service.v1.Environments.GetEnvironment google.cloud.orchestration.airflow.service.v1.Environments.GetUserWorkloadsConfigMap google.cloud.orchestration.airflow.service.v1.Environments.GetUserWorkloadsSecret google.cloud.orchestration.airflow.service.v1.Environments.ListEnvironments google.cloud.orchestration.airflow.service.v1.Environments.ListUserWorkloadsConfigMaps google.cloud.orchestration.airflow.service.v1.Environments.ListUserWorkloadsSecrets google.cloud.orchestration.airflow.service.v1.Environments.ListWorkloads google.cloud.orchestration.airflow.service.v1.ImageVersions.ListImageVersions google.cloud.orchestration.airflow.service.v1beta1.Environments.FetchDatabaseProperties google.cloud.orchestration.airflow.service.v1beta1.Environments.GetEnvironment google.cloud.orchestration.airflow.service.v1beta1.Environments.GetUserWorkloadsConfigMap google.cloud.orchestration.airflow.service.v1beta1.Environments.GetUserWorkloadsSecret google.cloud.orchestration.airflow.service.v1beta1.Environments.ListEnvironments google.cloud.orchestration.airflow.service.v1beta1.Environments.ListUserWorkloadsConfigMaps google.cloud.orchestration.airflow.service.v1beta1.Environments.ListUserWorkloadsSecrets google.cloud.orchestration.airflow.service.v1beta1.Environments.ListWorkloads google.cloud.orchestration.airflow.service.v1beta1.ImageVersions.ListImageVersions ADMIN WRITE google.cloud.orchestration.airflow.service.v1.Environments.CheckUpgrade (LRO) google.cloud.orchestration.airflow.service.v1.Environments.CreateEnvironment (LRO) google.cloud.orchestration.airflow.service.v1.Environments.CreateUserWorkloadsConfigMap google.cloud.orchestration.airflow.service.v1.Environments.CreateUserWorkloadsSecret google.cloud.orchestration.airflow.service.v1.Environments.DatabaseFailover (LRO) google.cloud.orchestration.airflow.service.v1.Environments.DeleteEnvironment (LRO) google.cloud.orchestration.airflow.service.v1.Environments.DeleteUserWorkloadsConfigMap google.cloud.orchestration.airflow.service.v1.Environments.DeleteUserWorkloadsSecret google.cloud.orchestration.airflow.service.v1.Environments.ExecuteAirflowCommand google.cloud.orchestration.airflow.service.v1.Environments.LoadSnapshot (LRO) google.cloud.orchestration.airflow.service.v1.Environments.PollAirflowCommand google.cloud.orchestration.airflow.service.v1.Environments.SaveSnapshot (LRO) google.cloud.orchestration.airflow.service.v1.Environments.StopAirflowCommand google.cloud.orchestration.airflow.service.v1.Environments.UpdateEnvironment (LRO) google.cloud.orchestration.airflow.service.v1.Environments.UpdateUserWorkloadsConfigMap google.cloud.orchestration.airflow.service.v1.Environments.UpdateUserWorkloadsSecret google.cloud.orchestration.airflow.service.v1beta1.Environments.CheckUpgrade (LRO) google.cloud.orchestration.airflow.service.v1beta1.Environments.CreateEnvironment (LRO) google.cloud.orchestration.airflow.service.v1beta1.Environments.CreateUserWorkloadsConfigMap google.cloud.orchestration.airflow.service.v1beta1.Environments.CreateUserWorkloadsSecret google.cloud.orchestration.airflow.service.v1beta1.Environments.DatabaseFailover (LRO) google.cloud.orchestration.airflow.service.v1beta1.Environments.DeleteEnvironment (LRO) google.cloud.orchestration.airflow.service.v1beta1.Environments.DeleteUserWorkloadsConfigMap google.cloud.orchestration.airflow.service.v1beta1.Environments.DeleteUserWorkloadsSecret google.cloud.orchestration.airflow.service.v1beta1.Environments.ExecuteAirflowCommand google.cloud.orchestration.airflow.service.v1beta1.Environments.LoadSnapshot (LRO) google.cloud.orchestration.airflow.service.v1beta1.Environments.PollAirflowCommand google.cloud.orchestration.airflow.service.v1beta1.Environments.RestartWebServer (LRO) google.cloud.orchestration.airflow.service.v1beta1.Environments.SaveSnapshot (LRO) google.cloud.orchestration.airflow.service.v1beta1.Environments.StopAirflowCommand google.cloud.orchestration.airflow.service.v1beta1.Environments.UpdateEnvironment (LRO) google.cloud.orchestration.airflow.service.v1beta1.Environments.UpdateUserWorkloadsConfigMap google.cloud.orchestration.airflow.service.v1beta1.Environments.UpdateUserWorkloadsSecret google.longrunning.Operations.DeleteOperation API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Cloud Composer. google.cloud.orchestration.airflow.service.v1.Environments The following audit logs are associated with methods belonging to google.cloud.orchestration.airflow.service.v1.Environments .
- Filter for this method : protoPayload.methodName="google.cloud.orchestration.airflow.service.v1beta1.Environments.UpdateUserWorkloadsSecret" google.cloud.orchestration.airflow.service.v1beta1.ImageVersions The following audit logs are associated with methods belonging to google.cloud.orchestration.airflow.service.v1beta1.ImageVersions .
- Filter for this method : protoPayload.methodName="google.cloud.orchestration.airflow.service.v1.ImageVersions.ListImageVersions" google.cloud.orchestration.airflow.service.v1beta1.Environments The following audit logs are associated with methods belonging to google.cloud.orchestration.airflow.service.v1beta1.Environments .
- Filter for this method : protoPayload.methodName="google.cloud.orchestration.airflow.service.v1beta1.ImageVersions.ListImageVersions" google.longrunning.Operations The following audit logs are associated with methods belonging to google.longrunning.Operations .

### Access the Airflow REST API \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-api)
- Source ID: `site-iam-reference`
- Final score: 223
- Re-rank relevance: N/A

Evidence snippets:
- AuthorizedSession ( credentials ) project id = 'YOUR PROJECT ID' location = 'us-central1' composer environment = 'YOUR COMPOSER ENVIRONMENT NAME' environment url = ( "https://composer.googleapis.com/v1beta1/projects/ {} /locations/ {} " "/environments/ {} " ) . format ( project id , location , composer environment ) composer response = authed session . request ( "GET" , environment url ) environment data = composer response . json () composer version = environment data [ "config" ][ "softwareConfig" ][ "imageVersion" ] if "composer-1" not in composer version : version error = ( "This script is intended to be used with Composer 1 environments. " "In Composer 2, the Airflow Webserver is not in the tenant project, " "so there is no tenant client ID. " "See https://cloud.google.com/composer/docs/composer-2/environment-architecture for more details." ) raise ( RuntimeError ( version error )) airflow uri = environment data [ "config" ][ "airflowUri" ] The Composer environment response does not include the IAP client ID.
- This script is intended to be used with Composer 1 environments In Composer 2, the Airflow Webserver is not in the tenant project so there is no tenant client ID See https://cloud.google.com/composer/docs/composer-2/environment-architecture for more details import google.auth import google.auth.transport.requests import requests import six.moves.urllib.parse Authenticate with Google Cloud.
- In Airflow 2, run the following Airflow CLI command: gcloud composer environments run ENVIRONMENT NAME \ --location LOCATION \ users create -- \ -u accounts.google.com: NUMERIC USER ID \ -e UNIQUE ID \ -f UNIQUE ID \ -l - -r Op --use-random-password Replace: ENVIRONMENT NAME with the name of the environment.
- Even though the Airflow web server itself doesn't require authentication, Cloud Composer uses its own authentication layer to protect it, which is integrated with Identity-Aware Proxy.

