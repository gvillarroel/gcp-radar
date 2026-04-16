---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:19.703Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Python 2 operator support in Cloud Composer"
feature_slug: "python-2-operator-support-in-cloud-composer"
latest_feature_date: "2022-08-10"
deprecation_date: "2022-08-10"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies"
  - "https://docs.cloud.google.com/composer/docs/composer-1/known-issues"
  - "https://docs.cloud.google.com/composer/docs/composer-1/launch-dataflow-pipelines"
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient"
keywords:
  - "python"
  - "operator"
  - "in"
  - "composer"
  - "19"
  - "and"
  - "later"
  - "no"
---

# Python 2 operator support in Cloud Composer

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer 1.19.6 and later no longer allow operators that call Python 2, including PythonVirtualenvOperator virtual environment creation; deprecated on 2022-08-10.

## Extended Definition

Cloud Composer 1.19.6 and later no longer allow operators that call Python 2, including PythonVirtualenvOperator virtual environment creation; deprecated on 2022-08-10.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies](https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies)
- [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- [https://docs.cloud.google.com/composer/docs/composer-1/launch-dataflow-pipelines](https://docs.cloud.google.com/composer/docs/composer-1/launch-dataflow-pipelines)
- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient)

## Supporting Pages

### Install Python dependencies \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies](https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies)
- Source ID: `site-iam-reference`
- Final score: 288
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To install custom PyPI packages from an Artifact Registry repository: Create a pip.conf file and include the following information in the file, if applicable: URL of the Artifact Registry repository (in the index-url parameter) Access credentials for the repository Non-default pip installation options For an Artifact Registry repository, append /simple/ to the repository URL: [global] index-url = https://us-central1-python.pkg.dev/example-project/example-repository/simple/ (Optional) In some cases, you might want to fetch packages from multiple repositories, such as when your Artifact Registry repository contains some specific packages that you want to install, and you want to install all other packages from PyPI: Configure an Artifact Registry virtual repository .
- Example: // PATCH https://composer.googleapis.com/v1/projects/example-project/ // locations/us-central1/environments/example-environment?updateMask= // config.softwareConfig.pypiPackages.EXAMPLE PACKAGE, // config.softwareConfig.pypiPackages.ANOTHER PACKAGE { "config" : { "softwareConfig" : { "pypiPackages" : { "EXAMPLE PACKAGE" : "" , "ANOTHER PACKAGE" : ">=1.10.3" } } } } Terraform The pypi packages block in the software config block specifies packages. resource "google composer environment" "example" { name = " ENVIRONMENT NAME " region = " LOCATION " config { software config { pypi packages = { PACKAGE NAME = " EXTRAS AND VERSION " } } } } Replace: ENVIRONMENT NAME with the name of the environment.
- To install packages from a private repository hosted in your project's network: Create a pip.conf file and include the following information in the file, if applicable: IP address of the repository in your project's network Access credentials for the repository Non-default pip installation options Example: [global] index-url=https://192.0.2.10/ (Optional) In some cases, you might want to fetch packages from multiple repositories, such as when the private repository contains some specific packages that you want to install, and you want to install all other packages from PyPI: Configure an Artifact Registry virtual repository .
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Install Python dependencies Stay organized with collections Save and categorize content based on your preferences.

### Known issues \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- Source ID: `site-iam-reference`
- Final score: 276
- Re-rank relevance: N/A

Evidence snippets:
- Only the following list of Non-RFC 1918 ranges is supported in Cloud Composer: 100.64.0.0/10 192.0.0.0/24 192.0.2.0/24 192.88.99.0/24 198.18.0.0/15 198.51.100.0/24 203.0.113.0/24 240.0.0.0/4 Airflow UI does not show tasks logs when DAG Serialization is on in Composer 1.10.2 and Composer 1.10.3 Enabling DAG serialization in environments using Composer versions 1.10.2 and 1.10.3 prevents logs from showing in the Airflow web server.
- Airflow 1.9.0 stores and expects the log names to be in the following format: BUCKET/logs/DAG/2020-03-30T10:29:06/1.log Airflow 1.10.x stores and expects the log names to be in the following format: BUCKET/logs/DAG/2020-03-30T10:29:06+00:00/1.log As a result, if you upgrade from Airflow 1.9.0 to Airflow 1.10.x and would like to read the log for a task executed with Airflow 1.9.0, the Airflow Web server will show the following error message: Unable to read remote log from BUCKET/logs/DAG/2020-03-30T10:29:06+00:00/1.log Workaround: Rename the logs generated by Airflow 1.9.0 in the Cloud Storage bucket using the format: BUCKET/logs/DAG/2020-03-30T10:29:06+00:00/1.log Cannot create Cloud Composer environments with the organization policy constraints/compute.disableSerialPortLogging enforced Cloud Composer environment creation fails if the constraints/compute.disableSerialPortLogging organization policy is enforced on the target project.
- Warnings about duplicate entries of 'echo' task belonging to the 'echo-airflow monitoring' DAG You might see the following entry in the Airflow logs: in query db.query(q) File "/opt/python3.6/lib/python3.6/site-packages/MySQLdb/ connections.py", line 280, in query mysql.connection.query(self, query) mysql exceptions.IntegrityError: (1062, "Duplicate entry 'echo-airflow monitoring-2020-10-20 15:59:40.000000' for key 'PRIMARY'") You can ignore these log entries, because this error doesn't impact Airflow DAG and task processing.
- Environment is in the ERROR state after the project's billing account was deleted or deactivated, or the Cloud Composer API was disabled Cloud Composer environments affected by these problems are non-recoverable: After the project's billing account was deleted or deactivated, even if another account was linked later.

### Launch Dataflow pipelines with Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/launch-dataflow-pipelines](https://docs.cloud.google.com/composer/docs/composer-1/launch-dataflow-pipelines)
- Source ID: `site-iam-reference`
- Final score: 256
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Python Save this code as dataflowtemplateoperator create dataset and table helper.py and update the variables in it to reflect your project and location, then run it with the following command: python dataflowtemplateoperator create dataset and table helper.py Python To authenticate to Cloud Composer, set up Application Default Credentials.
- Cloud Composer 2 versions 2.1.x and later are still supported and are not impacted by this change.
- For more info on zones where Dataflow is available see: https://cloud.google.com/dataflow/docs/resources/locations bucket path - Google Cloud Storage bucket where you've stored the User Defined Function (.js), the input file (.txt), and the JSON schema (.json). """ import datetime from airflow import models from airflow.providers.google.cloud.operators.dataflow import ( DataflowTemplatedJobStartOperator , ) from airflow.utils.dates import days ago bucket path = "{{var.value.bucket path}}" project id = "{{var.value.project id}}" gce zone = "{{var.value.gce zone}}" default args = { Tell airflow to start one day ago, so that it runs as soon as you upload it "start date" : days ago ( 1 ), "dataflow default options" : { "project" : project id , Set to your zone "zone" : gce zone , This is a subfolder for storing temporary files, like the staged pipeline job. "tempLocation" : bucket path + "/tmp/" , }, } Define a DAG (directed acyclic graph) of tasks.
- Learn more about the difference between the two here: https://cloud.google.com/compute/docs/regions-zones bucket path - Google Cloud Storage bucket where you've stored the User Defined Function (.js), the input file (.txt), and the JSON schema (.json). """ import datetime from airflow import models from airflow.contrib.operators.dataflow operator import DataflowTemplateOperator from airflow.utils.dates import days ago bucket path = "{{var.value.bucket path}}" project id = "{{var.value.project id}}" gce zone = "{{var.value.gce zone}}" default args = { Tell airflow to start one day ago, so that it runs as soon as you upload it "start date" : days ago ( 1 ), "dataflow default options" : { "project" : project id , Set to your zone "zone" : gce zone , This is a subfolder for storing temporary files, like the staged pipeline job. "tempLocation" : bucket path + "/tmp/" , }, } Define a DAG (directed acyclic graph) of tasks.

### "Class EnvironmentsAsyncClient (1.19.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 240
- Re-rank relevance: N/A

Evidence snippets:
- The included patch environment would specify the scikit-learn version as follows: :: { "config":{ "softwareConfig":{ "pypiPackages":{ "scikit-learn":"==0.19.0" } } } } Note that in the above example, any existing PyPI packages other than scikit-learn and numpy will be unaffected.
- List environments in a project and location. parent str List environments in the given project and location, in the form: "projects/{projectId}/locations/{locationId}" This corresponds to the parent field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-10 UTC."],[],[]]
- For example, to delete all pre-existing user-specified PyPI packages and install botocore at version 1.7.14, the updateMask would contain the path "config.softwareConfig.pypiPackages", and the patch environment would be the following: :: { "config":{ "softwareConfig":{ "pypiPackages":{ "botocore":"==1.7.14" } } } } Note: Only the following fields can be updated: - config.softwareConfig.pypiPackages - Replace all custom custom PyPI packages.

