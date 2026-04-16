---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:05:37.112Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Reversible store_serialized_dags setting"
feature_slug: "reversible-store-serialized-dags-setting"
latest_feature_date: "2020-03-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/dag-serialization"
  - "https://docs.cloud.google.com/composer/docs/composer-1/dag-cicd-github"
  - "https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface"
keywords:
  - "reversible"
  - "store"
  - "serialized"
  - "dags"
  - "setting"
  - "airflow"
  - "core"
  - "can"
---

# Reversible store_serialized_dags setting

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

The Airflow core.store_serialized_dags setting can be changed back to False after being set to True.

## Extended Definition

The Airflow core.store_serialized_dags setting can be changed back to False after being set to True.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/dag-serialization](https://docs.cloud.google.com/composer/docs/composer-1/dag-serialization)
- [https://docs.cloud.google.com/composer/docs/composer-1/dag-cicd-github](https://docs.cloud.google.com/composer/docs/composer-1/dag-cicd-github)
- [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface)

## Supporting Pages

### "Enabling and disabling DAG serialization \_|\_ Cloud Composer \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/dag-serialization](https://docs.cloud.google.com/composer/docs/composer-1/dag-serialization)
- Source ID: `site-iam-reference`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To enable DAG serialization, override the following Airflow configuration options: Section Key Value core store serialized dags True core store dag code True core min serialized dag update interval 30 scheduler dag dir list interval 30 The min serialized dag update interval Airflow configuration option controls how frequently serialized DAGs are updated in the database.
- To disable DAG serialization, override the following Airflow configuration options: Section Key Value core store serialized dags False core store dag code False Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Instead, it reads the serialized DAGs from the Airflow database.
- In a Cloud Composer environment, both the Airflow scheduler and the Airflow web server continuously process DAGs.

### "Test, synchronize, and deploy your DAGs from GitHub \_|\_ Cloud Composer\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/dag-cicd-github](https://docs.cloud.google.com/composer/docs/composer-1/dag-cicd-github)
- Source ID: `site-iam-reference`
- Final score: 85
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create the Cloud Build trigger for the presubmit check Follow the Building repositories from GitHub guide to create a GitHub app based trigger with the following configurations: Name : test-dags Event : Pull Request Source - Repository: choose your repository Source - Base branch: ^main$ (change main to the name of your repository's base branch, if required) Source - Comment Control: not required Caution: Setting Comment Control to be not required means that any user can submit a Pull Request that triggers the build.
- What's next Run local Airflow environments Write DAGs Schedule and trigger DAGs Test DAGs Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- DAGs and tests are stored in the dags/ directory, with requirements files, the constraints file, and Cloud Build configuration files stored at the top level.
- This guide assumes that you have your DAGs and their tests stored in a GitHub repository.

### "Access the Airflow web interface \_|\_ Cloud Composer \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface](https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface)
- Source ID: `site-iam-reference`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- Using async dagbag loader and store serialized dags Airflow configuration options produces HTTP 503 errors and breaks your environment.
- To ensure that web server remains accessible regardless of DAG load time, you can configure asynchronous DAG loading to parse and load DAGs in the background at a pre-configured interval (available in composer-1.7.1-airflow-1.10.2 and later versions).
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 Apache Airflow includes a web user interface called Airflow UI , which you can use to manage Airflow DAGs, view DAG run logs, monitor Airflow, and perform administrative actions.
- Override the following Airflow configuration options: Section Key Value Notes webserver async dagbag loader True The default is False . webserver collect dags interval 30 The default is 30 .

