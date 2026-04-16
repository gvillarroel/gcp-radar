---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:34:19.755Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Resource location restrictions and data residency"
feature_slug: "resource-location-restrictions-and-data-residency"
latest_feature_date: "2021-03-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-resource-location-restrictions"
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types.AirflowMetadataRetentionPolicyConfig"
  - "https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types.CloudDataLineageIntegration"
keywords:
  - "resource"
  - "location"
  - "restrictions"
  - "residency"
  - "composer"
  - "supports"
  - "controls"
---

# Resource location restrictions and data residency

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer supports resource location restrictions and data residency controls.

## Extended Definition

Cloud Composer supports resource location restrictions and data residency controls.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/configure-resource-location-restrictions](https://docs.cloud.google.com/composer/docs/composer-1/configure-resource-location-restrictions)
- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types.AirflowMetadataRetentionPolicyConfig](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types.AirflowMetadataRetentionPolicyConfig)
- [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types.CloudDataLineageIntegration](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types.CloudDataLineageIntegration)

## Supporting Pages

### "Configure resource location restrictions \_|\_ Cloud Composer \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-resource-location-restrictions](https://docs.cloud.google.com/composer/docs/composer-1/configure-resource-location-restrictions)
- Source ID: `site-iam-reference`
- Final score: 49
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Configure resource location restrictions Stay organized with collections Save and categorize content based on your preferences.
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 This page shows how to configure resource location restrictions so that your data stored by Cloud Composer is kept within the locations you specify.
- They are always sent to the default storage. gcloud logging sinks update Default \ --add-exclusion name = ENVIRONMENT NAME -exclusion,filter = \ "resource.type=cloud composer environment AND \ resource.labels.environment name= ENVIRONMENT NAME AND \ resource.labels.location= LOCATION " Replace: ENVIRONMENT NAME with the name of the environment.
- Create a new log sink. gcloud logging sinks create \ composer-log-sink- ENVIRONMENT NAME \ storage.googleapis.com/ BUCKET NAME \ --log-filter "resource.type=cloud composer environment AND \ resource.labels.environment name= ENVIRONMENT NAME AND \ resource.labels.location= LOCATION " Replace: ENVIRONMENT NAME with the name of the environment.

### "Class AirflowMetadataRetentionPolicyConfig (1.19.0) \_|\_ Python client\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types.AirflowMetadataRetentionPolicyConfig](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types.AirflowMetadataRetentionPolicyConfig)
- Source ID: `site-python-reference`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "Class CloudDataLineageIntegration (1.19.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types.CloudDataLineageIntegration](https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types.CloudDataLineageIntegration)
- Source ID: `site-python-reference`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

