---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:12:02.505Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Python 2 operator support"
feature_slug: "python-2-operator-support"
latest_feature_date: "2022-08-10"
deprecation_date: "2022-08-10"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies"
  - "https://docs.cloud.google.com/composer/docs/composer-1/backport-packages"
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient"
keywords:
  - "invoke"
  - "including"
  - "operator"
  - "operators"
  - "python"
---

# Python 2 operator support

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer can run operators that invoke Python 2, including PythonVirtualenvOperator with Python 2 virtual environments; deprecated on 2022-08-10.

## Extended Definition

Cloud Composer can run operators that invoke Python 2, including PythonVirtualenvOperator with Python 2 virtual environments; deprecated on 2022-08-10.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies](https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies)
- [https://docs.cloud.google.com/composer/docs/composer-1/backport-packages](https://docs.cloud.google.com/composer/docs/composer-1/backport-packages)
- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient)

## Supporting Pages

### Install Python dependencies \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies](https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies)
- Source ID: `site-iam-reference`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- KubernetesPodOperator and GKE operators You require external dependencies that cannot be installed from pip , such as dist-packages , or are on an internal pip server.
- PythonVirtualenvOperator You don't want the package to be installed for all Airflow workers, or the dependency conflicts with preinstalled packages.
- PythonVirtualenvOperator doesn't use the configuration from your environment's pip.conf file.
- To install custom PyPI packages from an Artifact Registry repository: Create a pip.conf file and include the following information in the file, if applicable: URL of the Artifact Registry repository (in the index-url parameter) Access credentials for the repository Non-default pip installation options For an Artifact Registry repository, append /simple/ to the repository URL: [global] index-url = https://us-central1-python.pkg.dev/example-project/example-repository/simple/ (Optional) In some cases, you might want to fetch packages from multiple repositories, such as when your Artifact Registry repository contains some specific packages that you want to install, and you want to install all other packages from PyPI: Configure an Artifact Registry virtual repository .

### "Import operators from backport provider packages \_|\_ Cloud Composer \_\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/backport-packages](https://docs.cloud.google.com/composer/docs/composer-1/backport-packages)
- Source ID: `site-iam-reference`
- Final score: 92
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following example imports moved operators from the apache-airflow-backport-providers-google package: from airflow.contrib.operators.bigquery operator import ( BigQueryCreateEmptyDatasetOperator , BigQueryOperator , ) What's next Writing DAGs Installing PyPI packages List of preinstalled packages in Cloud Composer images Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The following example imports new operators from the apache-airflow-backport-providers-google package: from airflow.providers.google.cloud.operators.bigquery dts import ( BigQueryCreateDataTransferOperator , BigQueryDeleteDataTransferConfigOperator , ) Import moved operators Moved operators are those that already exist in Airflow 1.10. .
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Import operators from backport provider packages Stay organized with collections Save and categorize content based on your preferences.
- Backport provider packages solve an important problem: you can get new features and security updates for operators, transfers, sensors, and hooks without upgrading your Airflow environment to a later version.

### "Class EnvironmentsAsyncClient (1.19.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description google.cloud.orchestration.airflow.service v1.types.UserWorkloadsSecret User workloads Secret used by Airflow tasks that run with Kubernetes executor or KubernetesPodOperator. user workloads config map path user workloads config map path ( project : str , location : str , environment : str , user workloads config map : str ) - > str Returns a fully-qualified user workloads config map string. user workloads secret path user workloads secret path ( project : str , location : str , environment : str , user workloads secret : str ) - > str Returns a fully-qualified user workloads secret string.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.orchestration.airflow import service v1 async def sample create user workloads config map(): Create a client client = service v1.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.orchestration.airflow import service v1 async def sample delete user workloads config map(): Create a client client = service v1.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.orchestration.airflow import service v1 async def sample update user workloads config map(): Create a client client = service v1.

