---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:34:19.510Z"
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
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest"
keywords:
  - "python"
  - "operator"
  - "composer"
  - "can"
  - "run"
  - "operators"
  - "invoke"
  - "including"
---

# Python 2 operator support

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer can run operators that invoke Python 2, including PythonVirtualenvOperator with Python 2 virtual environments; deprecated on 2022-08-10.

## Extended Definition

Cloud Composer can run operators that invoke Python 2, including PythonVirtualenvOperator with Python 2 virtual environments; deprecated on 2022-08-10.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies](https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies)
- [https://docs.cloud.google.com/composer/docs/composer-1/backport-packages](https://docs.cloud.google.com/composer/docs/composer-1/backport-packages)
- [https://docs.cloud.google.com/python/docs/reference/composer/latest](https://docs.cloud.google.com/python/docs/reference/composer/latest)

## Supporting Pages

### Install Python dependencies \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies](https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies)
- Source ID: `site-iam-reference`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- You can use the --tree argument to get the result of the python -m pipdeptree --warn command. gcloud beta composer environments list-packages \ ENVIRONMENT NAME \ --location LOCATION Replace: ENVIRONMENT NAME with the name of the environment.
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Install Python dependencies Stay organized with collections Save and categorize content based on your preferences.
- Users with the composer.environments.update permission can execute Python code on behalf of the environment's service account when installing packages in your environment.
- KubernetesPodOperator and GKE operators You require external dependencies that cannot be installed from pip , such as dist-packages , or are on an internal pip server.

### "Import operators from backport provider packages \_|\_ Cloud Composer \_\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/backport-packages](https://docs.cloud.google.com/composer/docs/composer-1/backport-packages)
- Source ID: `site-iam-reference`
- Final score: 104
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example imports moved operators from the apache-airflow-backport-providers-google package: from airflow.contrib.operators.bigquery operator import ( BigQueryCreateEmptyDatasetOperator , BigQueryOperator , ) What's next Writing DAGs Installing PyPI packages List of preinstalled packages in Cloud Composer images Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Import operators from backport provider packages Stay organized with collections Save and categorize content based on your preferences.
- The following example imports new operators from the apache-airflow-backport-providers-google package: from airflow.providers.google.cloud.operators.bigquery dts import ( BigQueryCreateDataTransferOperator , BigQueryDeleteDataTransferConfigOperator , ) Import moved operators Moved operators are those that already exist in Airflow 1.10. .
- Backport provider packages solve an important problem: you can get new features and security updates for operators, transfers, sensors, and hooks without upgrading your Airflow environment to a later version.

### "Python Client for Cloud Composer \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest](https://docs.cloud.google.com/python/docs/reference/composer/latest)
- Source ID: `site-python-reference`
- Final score: 91
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Mac/Linux python3 -m venv <your-env> source <your-env>/bin/activate pip install google-cloud-orchestration-airflow Windows py -m venv <your-env> .\<your-env>\Scripts\activate pip install google-cloud-orchestration-airflow Next Steps Read the Client Library Documentation for Cloud Composer to see other available methods on the client.
- Python >= 3.7, including 3.14 Unsupported Python Versions Python <= 3.6 If you are using an end-of-life version of Python, we recommend that you update as soon as possible to an actively supported version.
- Home Documentation Developer tools Python Client libraries Send feedback Python Client for Cloud Composer Stay organized with collections Save and categorize content based on your preferences.
- Environment-Based Examples Enabling the default handler for all Google-based loggers export GOOGLE SDK PYTHON LOGGING SCOPE=google Enabling the default handler for a specific Google module (for a client library called library v1 ): export GOOGLE SDK PYTHON LOGGING SCOPE=google.cloud.library v1 Advanced, code-based configuration You can also configure a valid logging scope using Python’s standard logging mechanism.

