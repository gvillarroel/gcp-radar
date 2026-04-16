---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:34:19.144Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Environment upgrading"
feature_slug: "environment-upgrading"
latest_feature_date: "2024-06-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/enable-ip-masquerade-agent"
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.workloads/list"
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/patch"
keywords:
  - "environment"
  - "upgrading"
  - "composer"
  - "supports"
  - "existing"
  - "environments"
---

# Environment upgrading

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer supports upgrading existing environments.

## Extended Definition

Cloud Composer supports upgrading existing environments.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/enable-ip-masquerade-agent](https://docs.cloud.google.com/composer/docs/composer-1/enable-ip-masquerade-agent)
- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.workloads/list](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.workloads/list)
- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/patch](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/patch)

## Supporting Pages

### "Enable the IP Masquerade agent in Cloud Composer environments \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/enable-ip-masquerade-agent](https://docs.cloud.google.com/composer/docs/composer-1/enable-ip-masquerade-agent)
- Source ID: `site-iam-reference`
- Final score: 29
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- About the IP Masquerade agent in Cloud Composer Cloud Composer supports the IP Masquerade agent for your environments.
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "softwareConfig" : { "imageVersion" : "composer-1.20.12-airflow-1.10.15" }, "nodeConfig" : { "ipAllocationPolicy" : { "useIpAliases" : true , }, "enableIpMasqAgent" : true } } } Terraform When you create an environment, the enable ip masq agent field in the node config block enables the IP Masqerade agent.
- Specify the configuration in the Environment resource. { "name" : "projects/ PROJECT ID /locations/ LOCATION /environments/ ENVIRONMENT NAME " , "config" : { "softwareConfig" : { "imageVersion" : "composer-1.20.12-airflow-1.10.15" }, "nodeConfig" : { "ipAllocationPolicy" : { "useIpAliases" : true , }, "enableIpMasqAgent" : true } } } Replace: PROJECT ID with the Project ID .
- You must also enable IP alias with the --enable-ip-alias argument. gcloud composer environments create ENVIRONMENT NAME \ --location LOCATION \ --image-version composer-1.20.12-airflow-1.10.15 \ --enable-ip-alias \ --enable-ip-masq-agent Replace: ENVIRONMENT NAME with the name of the environment.

### "Method: projects.locations.environments.patch \_|\_ Cloud Composer \_|\_\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/patch](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/patch)
- Source ID: `site-docs-reference`
- Final score: 28
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Path parameters Parameters name string The relative resource name of the environment to update, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}" Authorization requires the following IAM permission on the specified resource name : composer.environments.update Query parameters Parameters updateMask string ( FieldMask format) Required.
- Supported for Cloud Composer environments in versions composer-1. . -airflow- . . . config.webServerNetworkAccessControl Replace the environment's current WebServerNetworkAccessControl . config.softwareConfig.airflowConfigOverrides Replace all Apache Airflow config overrides.
- Home Documentation Data analytics Cloud Composer Reference Send feedback Method: projects.locations.environments.patch Stay organized with collections Save and categorize content based on your preferences.
- Supported for Cloud Composer environments in versions composer-1. . -airflow- . . . config.webServerConfig.machineType Machine type on which Airflow web server is running.

### "Method: projects.locations.environments.workloads.list \_|\_ Cloud Composer\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.workloads/list](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.workloads/list)
- Source ID: `site-docs-reference`
- Final score: 28
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The environment name to get workloads for, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}" Authorization requires the following IAM permission on the specified resource parent : composer.environments.get Query parameters Parameters pageSize integer Optional.
- Home Documentation Data analytics Cloud Composer Reference Send feedback Method: projects.locations.environments.workloads.list Stay organized with collections Save and categorize content based on your preferences.
- HTTP request GET https://composer.googleapis.com/v1/{parent=projects/ /locations/ /environments/ }/workloads The URL uses gRPC Transcoding syntax.
- This method is supported for Cloud Composer environments in versions composer-2. . -airflow- . . and newer.

