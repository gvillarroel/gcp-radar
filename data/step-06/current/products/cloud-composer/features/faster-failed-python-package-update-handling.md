---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:49.105Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Faster failed Python package update handling"
feature_slug: "faster-failed-python-package-update-handling"
latest_feature_date: "2019-08-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/release-notes"
  - "https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies"
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest"
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
Coverage: LOW

## Step 02 Summary

Cloud Composer reduced latency when Python package updates fail because of invalid packages; Cloud Composer reduced latency when Python package updates fail because of invalid packages.

## Extended Definition

Cloud Composer reduced latency when Python package updates fail because of invalid packages; Cloud Composer reduced latency when Python package updates fail because of invalid packages.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- [https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies](https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies)
- [https://docs.cloud.google.com/python/docs/reference/composer/latest](https://docs.cloud.google.com/python/docs/reference/composer/latest)

## Supporting Pages

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- Reduced the latency of failed Python package updates when invalid packages are selected.
- Reduced the latency of failed Python package updates when invalid packages are selected.
- Feature Composer will now fail faster when the network settings in Private IP environments prohibit the download of publicly stored Python packages.
- Changes compared to version 6.8.0 : Breaking changes: Upgrade to support Google Ads v10 ( #22965 ) Features: [FEATURE] google provider - BigQueryInsertJobOperator log query ( #23648 ) [FEATURE] google provider - split GkeStartPodOperator execute ( #23518 ) Add exportContext.offload flag to CLOUD SQL EXPORT VALIDATION. ( #23614 ) Create links for BiqTable operators ( #23164 ) implements #22859 - Add .sql as templatable extension ( #22920 ) GCSFileTransformOperator : New templated fields 'source object', 'destination object' ( #23328 ) Bug Fixes Fix PostgresToGCSOperator does not allow nested JSON ( #23063 ) Fix GCSToGCSOperator ignores replace parameter when there is no wildcard ( #23340 ) update processor to fix broken download URLs ( #23299 ) LookerStartPdtBuildOperator , LookerCheckPdtBuildSensor : fix empty materialization id handling ( #23025 ) Change ComputeSSH to throw provider import error instead paramiko ( #23035 ) Fix cancel on kill after execution timeout for DataprocSubmitJobOperator ( #22955 ) Fix select query xcom push for BigQueryGetDataOperator ( #22936 ) MSSQLToGCSOperator fails: datetime is not JSON Serializable ( #22882 ) Update credentials when using ADC in Compute Engine #23773 Misc changes Add Stackdriver assets and migrate system tests to AIP-47 ( #23320 ) CloudTasks assets & system tests migration (AIP-47) ( #23282 ) TextToSpeech assets & system tests migration (AIP-47) ( #23247 ) Fix code-snippets in google provider ( #23438 ) BigQuery assets ( #23165 ) Remove redundant docstring in BigQueryUpdateTableSchemaOperator ( #23349 ) Migrate gcs to new system tests design ( #22778 ) add missing docstring in 'BigQueryHook.create empty table' ( #23270 ) Cleanup Google provider CHANGELOG.rst ( #23390 ) migrate system test gcs to bigquery into new design ( #22753 ) Add example DAG for demonstrating usage of GCS sensors ( #22808 ) Change (Airflow 1) The google-cloud-bigquery package is upgraded from 1.28.0 to 2.13.0.

### Install Python dependencies \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies](https://docs.cloud.google.com/composer/docs/composer-1/install-python-dependencies)
- Source ID: `site-iam-reference`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- Users with the composer.environments.update permission can execute Python code on behalf of the environment's service account when installing packages in your environment.
- Example: // PATCH https://composer.googleapis.com/v1/projects/example-project/ // locations/us-central1/environments/example-environment?updateMask= // config.softwareConfig.pypiPackages.EXAMPLE PACKAGE, // config.softwareConfig.pypiPackages.ANOTHER PACKAGE { "config" : { "softwareConfig" : { "pypiPackages" : { "EXAMPLE PACKAGE" : "" , "ANOTHER PACKAGE" : ">=1.10.3" } } } } Terraform The pypi packages block in the software config block specifies packages. resource "google composer environment" "example" { name = " ENVIRONMENT NAME " region = " LOCATION " config { software config { pypi packages = { PACKAGE NAME = " EXTRAS AND VERSION " } } } } Replace: ENVIRONMENT NAME with the name of the environment.
- Example: gcloud composer environments update example-environment \ --location us-central1 \ --update-pypi-package "scipy>=0.13.3" Removing packages Update your environment, and specify the packages that you want to delete in the --remove-pypi-packages argument: gcloud composer environments update ENVIRONMENT NAME \ --location LOCATION \ --remove-pypi-packages PACKAGE NAMES Replace: ENVIRONMENT NAME with the name of the environment.
- For example: scipy>=0.13.3 scikit-learn nltk[machine learning] Update your environment, and specify the requirements.txt file in the --update-pypi-packages-from-file argument. gcloud composer environments update ENVIRONMENT NAME \ --location LOCATION \ --update-pypi-packages-from-file requirements.txt Replace: ENVIRONMENT NAME with the name of the environment.

### "Python Client for Cloud Composer \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest](https://docs.cloud.google.com/python/docs/reference/composer/latest)
- Source ID: `site-python-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Mac/Linux python3 -m venv <your-env> source <your-env>/bin/activate pip install google-cloud-orchestration-airflow Windows py -m venv <your-env> .\<your-env>\Scripts\activate pip install google-cloud-orchestration-airflow Next Steps Read the Client Library Documentation for Cloud Composer to see other available methods on the client.
- Python >= 3.7, including 3.14 Unsupported Python Versions Python <= 3.6 If you are using an end-of-life version of Python, we recommend that you update as soon as possible to an actively supported version.
- Home Documentation Developer tools Python Client libraries Send feedback Python Client for Cloud Composer Stay organized with collections Save and categorize content based on your preferences.
- These isolated environments can have separate versions of Python packages, which allows you to isolate one project’s dependencies from the dependencies of other projects.

