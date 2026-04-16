---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:12:02.859Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Private Python package repositories"
feature_slug: "private-python-package-repositories"
latest_feature_date: "2019-05-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies"
  - "https://docs.cloud.google.com/composer/docs/composer-1/composer-overview"
  - "https://docs.cloud.google.com/composer/docs/composer-2/composer-overview"
keywords:
  - "repositories"
  - "private"
  - "package"
  - "python"
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

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies](https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies)
- [https://docs.cloud.google.com/composer/docs/composer-1/composer-overview](https://docs.cloud.google.com/composer/docs/composer-1/composer-overview)
- [https://docs.cloud.google.com/composer/docs/composer-2/composer-overview](https://docs.cloud.google.com/composer/docs/composer-2/composer-overview)

## Supporting Pages

### Install Python dependencies \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies](https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies)
- Source ID: `site-iam-reference`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- To install custom PyPI packages from an Artifact Registry repository: Create a pip.conf file and include the following information in the file, if applicable: URL of the Artifact Registry repository (in the index-url parameter) Access credentials for the repository Non-default pip installation options For an Artifact Registry repository, append /simple/ to the repository URL: [global] index-url = https://us-central1-python.pkg.dev/example-project/example-repository/simple/ (Optional) In some cases, you might want to fetch packages from multiple repositories, such as when your Artifact Registry repository contains some specific packages that you want to install, and you want to install all other packages from PyPI: Configure an Artifact Registry virtual repository .
- To install packages from a private repository hosted in your project's network: Create a pip.conf file and include the following information in the file, if applicable: IP address of the repository in your project's network Access credentials for the repository Non-default pip installation options Example: [global] index-url=https://192.0.2.10/ (Optional) In some cases, you might want to fetch packages from multiple repositories, such as when the private repository contains some specific packages that you want to install, and you want to install all other packages from PyPI: Configure an Artifact Registry virtual repository .
- Install packages from a private repository You can host a private repository in your project's network and configure your environment to install Python packages from it.
- Grant additional permissions for installing packages from private repositories to the service account of your environment, as described in Access control .

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

### Cloud Composer overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-2/composer-overview](https://docs.cloud.google.com/composer/docs/composer-2/composer-overview)
- Source ID: `site-docs-reference`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- Python dependencies : You can install Python dependencies from the Python Package Index in your environment or from a private package repository, including Artifact Registry repositories.
- For more information about networking in Cloud Composer, see pages for individual networking features: Public IP and Private IP environments Private Service Connect environments Shared VPC environments Configuring VPC Service Controls Authorized networks IP Masquerade agent Privately used public IP ranges Other features of Cloud Composer Other Cloud Composer features include: Autoscaling environments Development with local Airflow environments Highly resilient environments Environment snapshots Data lineage integration with Dataplex Universal Catalog Encryption with customer-managed encryption keys (CMEK) Frequently Asked Questions What version of Apache Airflow does Cloud Composer use?
- Environment networking Cloud Composer supports several networking configurations for environments, with many configuration options.
- Cloud Composer is built on the popular Apache Airflow open source project and operates using the Python programming language.

