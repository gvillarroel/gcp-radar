---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:20.325Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Faster failed Python package update handling"
feature_slug: "faster-failed-python-package-update-handling"
latest_feature_date: "2019-08-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest"
  - "https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies"
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsClient"
keywords:
  - "faster"
  - "failed"
  - "python"
  - "package"
  - "update"
  - "handling"
  - "composer"
  - "reduced"
---

# Faster failed Python package update handling

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer reduced latency when Python package updates fail because of invalid packages; Cloud Composer reduced latency when Python package updates fail because of invalid packages.

## Extended Definition

Cloud Composer reduced latency when Python package updates fail because of invalid packages; Cloud Composer reduced latency when Python package updates fail because of invalid packages.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/composer/latest](https://docs.cloud.google.com/python/docs/reference/composer/latest)
- [https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies](https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies)
- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsClient)

## Supporting Pages

### "Python Client for Cloud Composer \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest](https://docs.cloud.google.com/python/docs/reference/composer/latest)
- Source ID: `site-python-reference`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- Mac/Linux python3 -m venv <your-env> source <your-env>/bin/activate pip install google-cloud-orchestration-airflow Windows py -m venv <your-env> .\<your-env>\Scripts\activate pip install google-cloud-orchestration-airflow Next Steps Read the Client Library Documentation for Cloud Composer to see other available methods on the client.
- Python >= 3.7, including 3.14 Unsupported Python Versions Python <= 3.6 If you are using an end-of-life version of Python, we recommend that you update as soon as possible to an actively supported version.
- Home Documentation Developer tools Python Client libraries Send feedback Python Client for Cloud Composer Stay organized with collections Save and categorize content based on your preferences.
- These isolated environments can have separate versions of Python packages, which allows you to isolate one project’s dependencies from the dependencies of other projects.

### Install Python dependencies \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies](https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies)
- Source ID: `site-iam-reference`
- Final score: 169
- Re-rank relevance: N/A

Evidence snippets:
- Users with the composer.environments.update permission can execute Python code on behalf of the environment's service account when installing packages in your environment.
- Example: // PATCH https://composer.googleapis.com/v1/projects/example-project/ // locations/us-central1/environments/example-environment?updateMask= // config.softwareConfig.pypiPackages.EXAMPLE PACKAGE, // config.softwareConfig.pypiPackages.ANOTHER PACKAGE { "config" : { "softwareConfig" : { "pypiPackages" : { "EXAMPLE PACKAGE" : "" , "ANOTHER PACKAGE" : ">=1.10.3" } } } } Terraform The pypi packages block in the software config block specifies packages. resource "google composer environment" "example" { name = " ENVIRONMENT NAME " region = " LOCATION " config { software config { pypi packages = { PACKAGE NAME = " EXTRAS AND VERSION " } } } } Replace: ENVIRONMENT NAME with the name of the environment.
- Example: gcloud composer environments update example-environment \ --location us-central1 \ --update-pypi-package "scipy>=0.13.3" Removing packages Update your environment, and specify the packages that you want to delete in the --remove-pypi-packages argument: gcloud composer environments update ENVIRONMENT NAME \ --location LOCATION \ --remove-pypi-packages PACKAGE NAMES Replace: ENVIRONMENT NAME with the name of the environment.
- For example: scipy>=0.13.3 scikit-learn nltk[machine learning] Update your environment, and specify the requirements.txt file in the --update-pypi-packages-from-file argument. gcloud composer environments update ENVIRONMENT NAME \ --location LOCATION \ --update-pypi-packages-from-file requirements.txt Replace: ENVIRONMENT NAME with the name of the environment.

### "Class EnvironmentsAsyncClient (1.19.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- For example, to delete all pre-existing user-specified PyPI packages and install botocore at version 1.7.14, the updateMask would contain the path "config.softwareConfig.pypiPackages", and the patch environment would be the following: :: { "config":{ "softwareConfig":{ "pypiPackages":{ "botocore":"==1.7.14" } } } } Note: Only the following fields can be updated: - config.softwareConfig.pypiPackages - Replace all custom custom PyPI packages.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.orchestration.airflow import service v1 async def sample update user workloads config map(): Create a client client = service v1.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.orchestration.airflow import service v1 async def sample update user workloads secret(): Create a client client = service v1.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.orchestration.airflow import service v1 async def sample update environment(): Create a client client = service v1.

### "Class EnvironmentsClient (1.19.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsClient](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.services.environments.EnvironmentsClient)
- Source ID: `site-python-reference`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- For example, to delete all pre-existing user-specified PyPI packages and install botocore at version 1.7.14, the updateMask would contain the path "config.softwareConfig.pypiPackages", and the patch environment would be the following: :: { "config":{ "softwareConfig":{ "pypiPackages":{ "botocore":"==1.7.14" } } } } Note: Only the following fields can be updated: - config.softwareConfig.pypiPackages - Replace all custom custom PyPI packages.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.orchestration.airflow import service v1 def sample update user workloads config map(): Create a client client = service v1.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.orchestration.airflow import service v1 def sample update user workloads secret(): Create a client client = service v1.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.orchestration.airflow import service v1 def sample update environment(): Create a client client = service v1.

