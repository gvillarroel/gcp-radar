---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:19.359Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Airflow 2.4.3 support in Cloud Composer images"
feature_slug: "airflow-2-4-3-support-in-cloud-composer-images"
latest_feature_date: "2023-10-30"
deprecation_date: "2023-10-30"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli"
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface"
  - "https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies"
  - "https://docs.cloud.google.com/composer/docs/composer-1/known-issues"
keywords:
  - "airflow"
  - "in"
  - "composer"
  - "images"
  - "is"
  - "no"
  - "longer"
  - "included"
---

# Airflow 2.4.3 support in Cloud Composer images

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Airflow 2.4.3 is no longer included in Cloud Composer images; deprecated on 2023-10-30.

## Extended Definition

Airflow 2.4.3 is no longer included in Cloud Composer images; deprecated on 2023-10-30.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli)
- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface)
- [https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies](https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies)
- [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)

## Supporting Pages

### "Access Airflow command-line interface \_|\_ Cloud Composer \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-cli)
- Source ID: `site-iam-reference`
- Final score: 255
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, to trigger a DAG named sample quickstart with the ID 5077 in your Cloud Composer environment: Airflow 2 gcloud composer environments run example-environment \ --location us-central1 dags trigger -- sample quickstart \ --run-id = 5077 Airflow 1 gcloud composer environments run example-environment \ --location us-central1 trigger dag -- sample quickstart \ --run id = 5077 What's next Access Airflow UI Access control (Airflow CLI) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Before you begin For executing Airflow CLI commands through Google Cloud CLI: Your Google Account must have permissions to use Google Cloud CLI with Cloud Composer and run Airflow CLI commands.
- Triggering DAGs through Google Cloud CLI might cause your environment to reach the quota limit, and as a result, Airflow CLI commands will no longer be executed.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

### "Access the Airflow web interface \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface)
- Source ID: `site-iam-reference`
- Final score: 243
- Re-rank relevance: N/A

Evidence snippets:
- Example: // PATCH https://composer.googleapis.com/v1/projects/example-project/ // locations/us-central1/environments/example-environment?updateMask= // config.webServerNetworkAccessControl { "config" : { "webServerNetworkAccessControl" : { "allowedIpRanges" : [ { "value" : "192.0.2.0/24" , "description" : "example range" }, { "value" : "192.0.4.0/24" , "description" : "example range 2" } ] } } } Terraform In the allowed ip range block, in the web server network access control specify IP ranges that can access web server. resource "google composer environment" "example" { provider = google-beta name = " ENVIRONMENT NAME " region = " LOCATION " config { web server network access control { allowed ip range { value = " WS IP RANGE " description = " WS RANGE DESCRIPTION " } } } } Replace the following: WS IP RANGE : the IP range, in the CIDR notation, that can access the Airflow UI.
- Example: resource "google composer environment" "example" { provider = google-beta name = "example-environment" region = "us-central1" config { web server network access control { allowed ip range { value = "192.0.2.0/24" description = "example range" }, allowed ip range { value = "192.0.4.0/24" description = "example range 2" } } } What's next Airflow UI Access Control Troubleshooting Airflow web server issues Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To ensure that web server remains accessible regardless of DAG load time, you can configure asynchronous DAG loading to parse and load DAGs in the background at a pre-configured interval (available in composer-1.7.1-airflow-1.10.2 and later versions).
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 Apache Airflow includes a web user interface called Airflow UI , which you can use to manage Airflow DAGs, view DAG run logs, monitor Airflow, and perform administrative actions.

### Install Python dependencies \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies](https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies)
- Source ID: `site-iam-reference`
- Final score: 242
- Re-rank relevance: N/A

Evidence snippets:
- Example: // PATCH https://composer.googleapis.com/v1/projects/example-project/ // locations/us-central1/environments/example-environment?updateMask= // config.softwareConfig.pypiPackages.EXAMPLE PACKAGE, // config.softwareConfig.pypiPackages.ANOTHER PACKAGE { "config" : { "softwareConfig" : { "pypiPackages" : { "EXAMPLE PACKAGE" : "" , "ANOTHER PACKAGE" : ">=1.10.3" } } } } Terraform The pypi packages block in the software config block specifies packages. resource "google composer environment" "example" { name = " ENVIRONMENT NAME " region = " LOCATION " config { software config { pypi packages = { PACKAGE NAME = " EXTRAS AND VERSION " } } } } Replace: ENVIRONMENT NAME with the name of the environment.
- Warning: Don't modify or delete the images built by Cloud Composer in Artifact Registry or the repository itself.
- To install custom PyPI packages from an Artifact Registry repository: Create a pip.conf file and include the following information in the file, if applicable: URL of the Artifact Registry repository (in the index-url parameter) Access credentials for the repository Non-default pip installation options For an Artifact Registry repository, append /simple/ to the repository URL: [global] index-url = https://us-central1-python.pkg.dev/example-project/example-repository/simple/ (Optional) In some cases, you might want to fetch packages from multiple repositories, such as when your Artifact Registry repository contains some specific packages that you want to install, and you want to install all other packages from PyPI: Configure an Artifact Registry virtual repository .
- To install packages from a private repository hosted in your project's network: Create a pip.conf file and include the following information in the file, if applicable: IP address of the repository in your project's network Access credentials for the repository Non-default pip installation options Example: [global] index-url=https://192.0.2.10/ (Optional) In some cases, you might want to fetch packages from multiple repositories, such as when the private repository contains some specific packages that you want to install, and you want to install all other packages from PyPI: Configure an Artifact Registry virtual repository .

### Known issues \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- Source ID: `site-iam-reference`
- Final score: 239
- Re-rank relevance: N/A

Evidence snippets:
- Airflow 1.9.0 stores and expects the log names to be in the following format: BUCKET/logs/DAG/2020-03-30T10:29:06/1.log Airflow 1.10.x stores and expects the log names to be in the following format: BUCKET/logs/DAG/2020-03-30T10:29:06+00:00/1.log As a result, if you upgrade from Airflow 1.9.0 to Airflow 1.10.x and would like to read the log for a task executed with Airflow 1.9.0, the Airflow Web server will show the following error message: Unable to read remote log from BUCKET/logs/DAG/2020-03-30T10:29:06+00:00/1.log Workaround: Rename the logs generated by Airflow 1.9.0 in the Cloud Storage bucket using the format: BUCKET/logs/DAG/2020-03-30T10:29:06+00:00/1.log Cannot create Cloud Composer environments with the organization policy constraints/compute.disableSerialPortLogging enforced Cloud Composer environment creation fails if the constraints/compute.disableSerialPortLogging organization policy is enforced on the target project.
- Only the following list of Non-RFC 1918 ranges is supported in Cloud Composer: 100.64.0.0/10 192.0.0.0/24 192.0.2.0/24 192.88.99.0/24 198.18.0.0/15 198.51.100.0/24 203.0.113.0/24 240.0.0.0/4 Airflow UI does not show tasks logs when DAG Serialization is on in Composer 1.10.2 and Composer 1.10.3 Enabling DAG serialization in environments using Composer versions 1.10.2 and 1.10.3 prevents logs from showing in the Airflow web server.
- Note: Cloud Composer version 2.4.2 fixes this issue in Airflow versions 2.4.3 and 2.5.3.
- Warnings about duplicate entries of 'echo' task belonging to the 'echo-airflow monitoring' DAG You might see the following entry in the Airflow logs: in query db.query(q) File "/opt/python3.6/lib/python3.6/site-packages/MySQLdb/ connections.py", line 280, in query mysql.connection.query(self, query) mysql exceptions.IntegrityError: (1062, "Duplicate entry 'echo-airflow monitoring-2020-10-20 15:59:40.000000' for key 'PRIMARY'") You can ignore these log entries, because this error doesn't impact Airflow DAG and task processing.

