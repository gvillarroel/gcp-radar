---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:34:19.851Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Private Python package repositories"
feature_slug: "private-python-package-repositories"
latest_feature_date: "2019-05-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types"
  - "https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies"
  - "https://docs.cloud.google.com/composer/docs/composer-1/composer-overview"
keywords:
  - "private"
  - "python"
  - "package"
  - "repositories"
  - "composer"
  - "supports"
---

# Private Python package repositories

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer supports private Python package repositories.

## Extended Definition

Cloud Composer supports private Python package repositories.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types)
- [https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies](https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies)
- [https://docs.cloud.google.com/composer/docs/composer-1/composer-overview](https://docs.cloud.google.com/composer/docs/composer-1/composer-overview)

## Supporting Pages

### "Package service_v1.types (1.19.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types)
- Source ID: `site-python-reference`
- Final score: 39
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Developer tools Python Client libraries Send feedback Package service v1.types (1.19.0) Stay organized with collections Save and categorize content based on your preferences.
- PrivateEnvironmentConfig The configuration information for configuring a Private IP Cloud Composer environment.
- PrivateClusterConfig Configuration options for the private GKE cluster in a Cloud Composer environment.
- Setting any member of the oneof automatically clears all other members. .. oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields ImageVersion ImageVersion information ListEnvironmentsRequest List environments in a project and location.

### Install Python dependencies \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies](https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies)
- Source ID: `site-iam-reference`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- To install custom PyPI packages from an Artifact Registry repository: Create a pip.conf file and include the following information in the file, if applicable: URL of the Artifact Registry repository (in the index-url parameter) Access credentials for the repository Non-default pip installation options For an Artifact Registry repository, append /simple/ to the repository URL: [global] index-url = https://us-central1-python.pkg.dev/example-project/example-repository/simple/ (Optional) In some cases, you might want to fetch packages from multiple repositories, such as when your Artifact Registry repository contains some specific packages that you want to install, and you want to install all other packages from PyPI: Configure an Artifact Registry virtual repository .
- To install packages from a private repository hosted in your project's network: Create a pip.conf file and include the following information in the file, if applicable: IP address of the repository in your project's network Access credentials for the repository Non-default pip installation options Example: [global] index-url=https://192.0.2.10/ (Optional) In some cases, you might want to fetch packages from multiple repositories, such as when the private repository contains some specific packages that you want to install, and you want to install all other packages from PyPI: Configure an Artifact Registry virtual repository .
- Example: resource "google composer environment" "example" { name = "example-environment" region = "us-central1" config { software config { pypi packages = { scipy = ">=1.10.3" scikit-learn = "" nltk = "[machine learning]" } } } } Install packages from a public repository You can install packages hosted in other repositories that have a public IP address.
- You can use the --tree argument to get the result of the python -m pipdeptree --warn command. gcloud beta composer environments list-packages \ ENVIRONMENT NAME \ --location LOCATION Replace: ENVIRONMENT NAME with the name of the environment.

### Cloud Composer overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/composer-overview](https://docs.cloud.google.com/composer/docs/composer-1/composer-overview)
- Source ID: `site-docs-reference`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- Python dependencies : You can install Python dependencies from the Python Package Index in your environment or from a private package repository, including Artifact Registry repositories.
- For more information about networking in Cloud Composer, see pages for individual networking features: Public IP and Private IP environments Shared VPC environments Configuring VPC Service Controls Authorized networks IP Masquerade agent Privately used public IP ranges Frequently Asked Questions What version of Apache Airflow does Cloud Composer use?
- Environment networking Cloud Composer supports several networking configurations for environments, with many configuration options.
- Cloud Composer is built on the popular Apache Airflow open source project and operates using the Python programming language.

