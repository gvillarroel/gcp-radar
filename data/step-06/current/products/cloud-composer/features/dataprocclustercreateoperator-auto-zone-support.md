---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:49.109Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "DataprocClusterCreateOperator auto-zone support"
feature_slug: "dataprocclustercreateoperator-auto-zone-support"
latest_feature_date: "2019-05-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/release-notes"
  - "https://docs.cloud.google.com/composer/docs/composer-2/composer-overview"
  - "https://docs.cloud.google.com/composer/docs/composer-3/composer-overview"
keywords:
  - "dataprocclustercreateoperator"
  - "auto"
  - "zone"
  - "composer"
  - "supports"
  - "behavior"
  - "in"
---

# DataprocClusterCreateOperator auto-zone support

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer supports auto-zone behavior in `DataprocClusterCreateOperator`.

## Extended Definition

Cloud Composer supports auto-zone behavior in `DataprocClusterCreateOperator`.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- [https://docs.cloud.google.com/composer/docs/composer-2/composer-overview](https://docs.cloud.google.com/composer/docs/composer-2/composer-overview)
- [https://docs.cloud.google.com/composer/docs/composer-3/composer-overview](https://docs.cloud.google.com/composer/docs/composer-3/composer-overview)

## Supporting Pages

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- May 28, 2019 Feature Backported AIRFLOW-3143 to support auto-zone in DataprocClusterCreateOperator.
- Change New Airflow builds are available in Cloud Composer 3: composer-3-airflow-2.10.5-build.13 (default) composer-3-airflow-2.9.3-build.33 Change New images are available in Cloud Composer 2: composer-2.14.1-airflow-2.10.5 (default) composer-2.14.1-airflow-2.9.3 Feature (Available without upgrading) Cloud Composer 3 now supports DNS resolution for regional service endpoints .
- Deactivating these APIs won't cause the deactivation of the Cloud Composer API: artifactregistry.googleapis.com cloudbuild.googleapis.com container.googleapis.com pubsub.googleapis.com sqladmin.googleapis.com Starting May 27, 2026 , these APIs will no longer be enabled automatically when you enable the Cloud Composer API.
- June 07, 2022 Fixed This version fixes a problem with autoscaling not working properly in Cloud Composer 2 environments when GKE version 1.22 is used for the environment's cluster: The issue could impact your Cloud Composer 2 environment if you created it between June 2, 2022 and June 7, 2022.

### Cloud Composer overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-2/composer-overview](https://docs.cloud.google.com/composer/docs/composer-2/composer-overview)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- For more information about networking in Cloud Composer, see pages for individual networking features: Public IP and Private IP environments Private Service Connect environments Shared VPC environments Configuring VPC Service Controls Authorized networks IP Masquerade agent Privately used public IP ranges Other features of Cloud Composer Other Cloud Composer features include: Autoscaling environments Development with local Airflow environments Highly resilient environments Environment snapshots Data lineage integration with Dataplex Universal Catalog Encryption with customer-managed encryption keys (CMEK) Frequently Asked Questions What version of Apache Airflow does Cloud Composer use?
- Environment networking Cloud Composer supports several networking configurations for environments, with many configuration options.
- Cloud Composer automatically distributes the components of your environment between zones.
- The cluster also hosts other Cloud Composer components like Composer Agent and Airflow Monitoring, which help manage the Cloud Composer environment, gather logs to store in Cloud Logging, and gather metrics to upload to Cloud Monitoring.

### Cloud Composer overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-3/composer-overview](https://docs.cloud.google.com/composer/docs/composer-3/composer-overview)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- For more information about networking in Cloud Composer, see pages for individual networking features: Public IP and Private IP environments Connecting an environment to your VPC network Shared VPC environments Configuring VPC Service Controls Other features of Cloud Composer Other Cloud Composer features include: Autoscaling environments Development with local Airflow environments Highly resilient environments Environment snapshots Data lineage integration with Dataplex Universal Catalog Encryption with customer-managed encryption keys (CMEK) Frequently Asked Questions What version of Apache Airflow does Cloud Composer use?
- Environment networking Cloud Composer supports several networking configurations for environments, with many configuration options.
- Cloud Composer automatically distributes the components of your environment between zones.
- The cluster also hosts other Cloud Composer components like Composer Agent and Airflow Monitoring, which help manage the Cloud Composer environment, gather logs to store in Cloud Logging, and gather metrics to upload to Cloud Monitoring.

