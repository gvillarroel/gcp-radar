---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:12:02.879Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Python 3 support"
feature_slug: "python-3-support"
latest_feature_date: "2018-11-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types.CheckUpgradeRequest"
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types.AirflowMetadataRetentionPolicyConfig"
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types.CheckUpgradeResponse.ConflictResult"
keywords:
  - "console"
  - "environments"
  - "creating"
  - "through"
  - "python"
  - "supports"
---

# Python 3 support

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer supports creating Python 3 environments through the v1 API and Google Cloud Console; Cloud Composer supports creating Python 3 environments and running Python 2 and Python 3 environments simultaneously in one project.

## Extended Definition

Cloud Composer supports creating Python 3 environments through the v1 API and Google Cloud Console; Cloud Composer supports creating Python 3 environments and running Python 2 and Python 3 environments simultaneously in one project.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types.CheckUpgradeRequest](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types.CheckUpgradeRequest)
- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types.AirflowMetadataRetentionPolicyConfig](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types.AirflowMetadataRetentionPolicyConfig)
- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types.CheckUpgradeResponse.ConflictResult](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types.CheckUpgradeResponse.ConflictResult)

## Supporting Pages

### "Class AirflowMetadataRetentionPolicyConfig (1.19.0) \_|\_ Python client\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types.AirflowMetadataRetentionPolicyConfig](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types.AirflowMetadataRetentionPolicyConfig)
- Source ID: `site-python-reference`
- Final score: 23
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Developer tools Python Client libraries Send feedback Class AirflowMetadataRetentionPolicyConfig (1.19.0) Stay organized with collections Save and categorize content based on your preferences.

### "Class CheckUpgradeRequest (1.19.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types.CheckUpgradeRequest](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types.CheckUpgradeRequest)
- Source ID: `site-python-reference`
- Final score: 23
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Developer tools Python Client libraries Send feedback Class CheckUpgradeRequest (1.19.0) Stay organized with collections Save and categorize content based on your preferences.
- The resource name of the environment to check upgrade for, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}". image version str Optional.

### "Class ConflictResult (1.19.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types.CheckUpgradeResponse.ConflictResult](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types.CheckUpgradeResponse.ConflictResult)
- Source ID: `site-python-reference`
- Final score: 23
- Re-rank relevance: N/A

Evidence snippets:
- Version latest keyboard arrow down 1.19.0 (latest) 1.18.0 1.17.5 1.16.1 1.15.1 1.14.0 1.13.1 1.12.2 1.11.1 1.10.0 1.9.1 1.8.0 1.7.1 1.6.1 1.5.0 1.4.4 1.3.2 1.2.1 1.1.0 1.0.0 0.1.3 ConflictResult ( value ) Whether there were python modules conflict during image build.
- Home Documentation Developer tools Python Client libraries Send feedback Class ConflictResult (1.19.0) Stay organized with collections Save and categorize content based on your preferences.
- NO CONFLICT There were no python packages conflicts.
- CONFLICT There were python packages conflicts.

