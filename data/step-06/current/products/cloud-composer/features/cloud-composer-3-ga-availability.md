---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:19.089Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer 3 GA availability"
feature_slug: "cloud-composer-3-ga-availability"
latest_feature_date: "2024-12-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.workloads/list"
  - "https://docs.cloud.google.com/composer/docs/composer-1/composer-overview"
  - "https://docs.cloud.google.com/composer/docs/composer-2/composer-overview"
  - "https://docs.cloud.google.com/composer/docs/composer-3/composer-overview"
keywords:
  - "composer"
  - "ga"
  - "availability"
  - "reached"
  - "general"
  - "and"
  - "supports"
  - "workloads"
---

# Cloud Composer 3 GA availability

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer 3 reached general availability and supports GA workloads using Airflow builds from airflow-2.9.3-build.11 or airflow-2.10.2-build.4, or later.

## Extended Definition

Cloud Composer 3 reached general availability and supports GA workloads using Airflow builds from airflow-2.9.3-build.11 or airflow-2.10.2-build.4, or later.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.workloads/list](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.workloads/list)
- [https://docs.cloud.google.com/composer/docs/composer-1/composer-overview](https://docs.cloud.google.com/composer/docs/composer-1/composer-overview)
- [https://docs.cloud.google.com/composer/docs/composer-2/composer-overview](https://docs.cloud.google.com/composer/docs/composer-2/composer-overview)
- [https://docs.cloud.google.com/composer/docs/composer-3/composer-overview](https://docs.cloud.google.com/composer/docs/composer-3/composer-overview)

## Supporting Pages

### "Method: projects.locations.environments.workloads.list \_|\_ Cloud Composer\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.workloads/list](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments.workloads/list)
- Source ID: `site-docs-reference`
- Final score: 167
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics Cloud Composer Reference Send feedback Method: projects.locations.environments.workloads.list Stay organized with collections Save and categorize content based on your preferences.
- If successful, the response body contains data with the following structure: JSON representation { "workloads" : [ { object ( ComposerWorkload ) } ] , "nextPageToken" : string } Fields workloads[] object ( ComposerWorkload ) The list of environment workloads. nextPageToken string The page token used to query for the next page if one exists.
- The environment name to get workloads for, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}" Authorization requires the following IAM permission on the specified resource parent : composer.environments.get Query parameters Parameters pageSize integer Optional.
- JSON representation { "name" : string , "type" : enum ( ComposerWorkloadType ) , "status" : { object ( ComposerWorkloadStatus ) } } Fields name string Name of a workload. type enum ( ComposerWorkloadType ) Type of a workload. status object ( ComposerWorkloadStatus ) Output only.

### Cloud Composer overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/composer-overview](https://docs.cloud.google.com/composer/docs/composer-1/composer-overview)
- Source ID: `site-docs-reference`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- The cluster also hosts other Cloud Composer components like Composer Agent and Airflow Monitoring, which help manage the Cloud Composer environment, gather logs to store in Cloud Logging, and gather metrics to upload to Cloud Monitoring.
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Cloud Composer overview Stay organized with collections Save and categorize content based on your preferences.
- Cloud Composer 1 supports Airflow 1 and Airflow 2.
- For more information about networking in Cloud Composer, see pages for individual networking features: Public IP and Private IP environments Shared VPC environments Configuring VPC Service Controls Authorized networks IP Masquerade agent Privately used public IP ranges Frequently Asked Questions What version of Apache Airflow does Cloud Composer use?

### Cloud Composer overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-2/composer-overview](https://docs.cloud.google.com/composer/docs/composer-2/composer-overview)
- Source ID: `site-docs-reference`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- The cluster also hosts other Cloud Composer components like Composer Agent and Airflow Monitoring, which help manage the Cloud Composer environment, gather logs to store in Cloud Logging, and gather metrics to upload to Cloud Monitoring.
- Home Documentation Data analytics Cloud Composer Composer 2 Guides Send feedback Cloud Composer overview Stay organized with collections Save and categorize content based on your preferences.
- Cloud Composer 1 supports Airflow 1 and Airflow 2.
- For more information about networking in Cloud Composer, see pages for individual networking features: Public IP and Private IP environments Private Service Connect environments Shared VPC environments Configuring VPC Service Controls Authorized networks IP Masquerade agent Privately used public IP ranges Other features of Cloud Composer Other Cloud Composer features include: Autoscaling environments Development with local Airflow environments Highly resilient environments Environment snapshots Data lineage integration with Dataplex Universal Catalog Encryption with customer-managed encryption keys (CMEK) Frequently Asked Questions What version of Apache Airflow does Cloud Composer use?

### Cloud Composer overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-3/composer-overview](https://docs.cloud.google.com/composer/docs/composer-3/composer-overview)
- Source ID: `site-docs-reference`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- The cluster also hosts other Cloud Composer components like Composer Agent and Airflow Monitoring, which help manage the Cloud Composer environment, gather logs to store in Cloud Logging, and gather metrics to upload to Cloud Monitoring.
- Home Documentation Data analytics Cloud Composer Composer 3 Guides Send feedback Cloud Composer overview Stay organized with collections Save and categorize content based on your preferences.
- Cloud Composer 1 supports Airflow 1 and Airflow 2.
- For more information about networking in Cloud Composer, see pages for individual networking features: Public IP and Private IP environments Connecting an environment to your VPC network Shared VPC environments Configuring VPC Service Controls Other features of Cloud Composer Other Cloud Composer features include: Autoscaling environments Development with local Airflow environments Highly resilient environments Environment snapshots Data lineage integration with Dataplex Universal Catalog Encryption with customer-managed encryption keys (CMEK) Frequently Asked Questions What version of Apache Airflow does Cloud Composer use?

