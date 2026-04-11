---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:49.009Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer Python package installation diagnostics"
feature_slug: "cloud-composer-python-package-installation-diagnostics"
latest_feature_date: "2020-10-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies"
  - "https://docs.cloud.google.com/composer/docs/release-notes"
  - "https://docs.cloud.google.com/composer/docs/composer-1/known-issues"
keywords:
  - "composer"
  - "python"
  - "package"
  - "installation"
  - "diagnostics"
  - "now"
  - "provides"
  - "more"
---

# Cloud Composer Python package installation diagnostics

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer now provides more detailed error messages for failures during Python package installation.

## Extended Definition

Cloud Composer now provides more detailed error messages for failures during Python package installation.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies](https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies)
- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)

## Supporting Pages

### Install Python dependencies \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies](https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies)
- Source ID: `site-iam-reference`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- To install custom PyPI packages from an Artifact Registry repository: Create a pip.conf file and include the following information in the file, if applicable: URL of the Artifact Registry repository (in the index-url parameter) Access credentials for the repository Non-default pip installation options For an Artifact Registry repository, append /simple/ to the repository URL: [global] index-url = https://us-central1-python.pkg.dev/example-project/example-repository/simple/ (Optional) In some cases, you might want to fetch packages from multiple repositories, such as when your Artifact Registry repository contains some specific packages that you want to install, and you want to install all other packages from PyPI: Configure an Artifact Registry virtual repository .
- You can use the --tree argument to get the result of the python -m pipdeptree --warn command. gcloud beta composer environments list-packages \ ENVIRONMENT NAME \ --location LOCATION Replace: ENVIRONMENT NAME with the name of the environment.
- Note: Cloud Composer does not support pip customization and does not resolve package dependencies and conflicts outside of the resolution mechanisms that the default pip tool provides.
- Users with the composer.environments.update permission can execute Python code on behalf of the environment's service account when installing packages in your environment.

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Deprecated The following Cloud Composer versions have been deprecated: Composer-1.7.2 Composer-1.7.3 Composer-1.7.4 Composer-1.7.5 Composer-1.7.6 Composer-1.7.7 Composer-1.8.0 October 30, 2020 Feature More detailed error messages are now provided for errors during Python package installation.
- Change Cloud Composer 2 environments now always use the environment's service account for performing PyPI packages installations : Existing Cloud Composer 2 environments that previously used the default Cloud Build service account now use the environment's service account instead.
- Feature Composer will now fail faster when the network settings in Private IP environments prohibit the download of publicly stored Python packages.
- Fixed PyPI package installation is now possible in network setups with maximum transmission unit (MTU) of 1280 bytes or more.

### Known issues \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/known-issues](https://docs.cloud.google.com/composer/docs/composer-1/known-issues)
- Source ID: `site-iam-reference`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Warnings about duplicate entries of 'echo' task belonging to the 'echo-airflow monitoring' DAG You might see the following entry in the Airflow logs: in query db.query(q) File "/opt/python3.6/lib/python3.6/site-packages/MySQLdb/ connections.py", line 280, in query mysql.connection.query(self, query) mysql exceptions.IntegrityError: (1062, "Duplicate entry 'echo-airflow monitoring-2020-10-20 15:59:40.000000' for key 'PRIMARY'") You can ignore these log entries, because this error doesn't impact Airflow DAG and task processing.
- Logs for Airflow tasks aren't collected if [core]execute tasks new python interpreter is set to True Cloud Composer doesn't collect logs for Airflow tasks if the [core]execute tasks new python interpreter Airflow configuration option is set to True .
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Known issues Stay organized with collections Save and categorize content based on your preferences.
- Verify roles assigned to users through the Airflow UI access control mechanism (this is a separate mechanism that provides more granular access to Airflow UI).

