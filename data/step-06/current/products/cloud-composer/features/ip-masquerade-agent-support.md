---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:34:19.550Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "IP Masquerade agent support"
feature_slug: "ip-masquerade-agent-support"
latest_feature_date: "2022-06-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/enable-ip-masquerade-agent"
  - "https://docs.cloud.google.com/composer/docs/composer-1/composer-overview"
  - "https://docs.cloud.google.com/composer/docs/composer-2/composer-overview"
keywords:
  - "ip"
  - "masquerade"
  - "agent"
  - "composer"
  - "supports"
  - "environments"
---

# IP Masquerade agent support

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer 1 and Cloud Composer 2 support the IP Masquerade agent; Cloud Composer supports the IP Masquerade agent for new Cloud Composer 1 environments.

## Extended Definition

Cloud Composer 1 and Cloud Composer 2 support the IP Masquerade agent; Cloud Composer supports the IP Masquerade agent for new Cloud Composer 1 environments.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/enable-ip-masquerade-agent](https://docs.cloud.google.com/composer/docs/composer-1/enable-ip-masquerade-agent)
- [https://docs.cloud.google.com/composer/docs/composer-1/composer-overview](https://docs.cloud.google.com/composer/docs/composer-1/composer-overview)
- [https://docs.cloud.google.com/composer/docs/composer-2/composer-overview](https://docs.cloud.google.com/composer/docs/composer-2/composer-overview)

## Supporting Pages

### "Enable the IP Masquerade agent in Cloud Composer environments \_|\_ Google\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/enable-ip-masquerade-agent](https://docs.cloud.google.com/composer/docs/composer-1/enable-ip-masquerade-agent)
- Source ID: `site-iam-reference`
- Final score: 34
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- About the IP Masquerade agent in Cloud Composer Cloud Composer supports the IP Masquerade agent for your environments.
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Enable the IP Masquerade agent in Cloud Composer environments Stay organized with collections Save and categorize content based on your preferences.
- Example: // POST https://composer.googleapis.com/v1/{parent=projects/ /locations/ }/environments { "name" : "projects/example-project/locations/us-central1/environments/example-environment" , "config" : { "softwareConfig" : { "imageVersion" : "composer-1.20.12-airflow-1.10.15" }, "nodeConfig" : { "ipAllocationPolicy" : { "useIpAliases" : true , }, "enableIpMasqAgent" : true } } } Terraform When you create an environment, the enable ip masq agent field in the node config block enables the IP Masqerade agent.
- Example: resource "google composer environment" "example environment" { provider = google-beta name = "example-environment" region = "us-central1" config { software config { image version = "composer-1.20.12-airflow-1.10.15" } node config { ip allocation policy = [{ use ip aliases = true // Other networking configuration }] enable ip masq agent = true } } } Configure the IP Masquerade agent Caution: Cloud Composer enables intranode visibility on GKE clusters.

### Cloud Composer overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/composer-overview](https://docs.cloud.google.com/composer/docs/composer-1/composer-overview)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- For more information about networking in Cloud Composer, see pages for individual networking features: Public IP and Private IP environments Shared VPC environments Configuring VPC Service Controls Authorized networks IP Masquerade agent Privately used public IP ranges Frequently Asked Questions What version of Apache Airflow does Cloud Composer use?
- Environment networking Cloud Composer supports several networking configurations for environments, with many configuration options.
- The cluster also hosts other Cloud Composer components like Composer Agent and Airflow Monitoring, which help manage the Cloud Composer environment, gather logs to store in Cloud Logging, and gather metrics to upload to Cloud Monitoring.
- Logging and monitoring for DAGs, Airflow components, and Cloud Composer environments: You can view Airflow logs that are associated with single DAG tasks in the Airflow web interface and the logs folder in the environment's bucket .

### Cloud Composer overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-2/composer-overview](https://docs.cloud.google.com/composer/docs/composer-2/composer-overview)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- For more information about networking in Cloud Composer, see pages for individual networking features: Public IP and Private IP environments Private Service Connect environments Shared VPC environments Configuring VPC Service Controls Authorized networks IP Masquerade agent Privately used public IP ranges Other features of Cloud Composer Other Cloud Composer features include: Autoscaling environments Development with local Airflow environments Highly resilient environments Environment snapshots Data lineage integration with Dataplex Universal Catalog Encryption with customer-managed encryption keys (CMEK) Frequently Asked Questions What version of Apache Airflow does Cloud Composer use?
- Environment networking Cloud Composer supports several networking configurations for environments, with many configuration options.
- The cluster also hosts other Cloud Composer components like Composer Agent and Airflow Monitoring, which help manage the Cloud Composer environment, gather logs to store in Cloud Logging, and gather metrics to upload to Cloud Monitoring.
- Logging and monitoring for DAGs, Airflow components, and Cloud Composer environments: You can view Airflow logs that are associated with single DAG tasks in the Airflow web interface and the logs folder in the environment's bucket .

