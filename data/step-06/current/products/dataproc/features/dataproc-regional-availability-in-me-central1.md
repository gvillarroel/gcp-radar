---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.598Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Dataproc regional availability in me-central1"
feature_slug: "dataproc-regional-availability-in-me-central1"
latest_feature_date: "2023-03-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/quotas"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/create-service"
keywords:
  - "dataproc"
  - "regional"
  - "availability"
  - "me"
  - "central1"
  - "available"
  - "doha"
  - "region"
---

# Dataproc regional availability in me-central1

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc is available in the me-central1 (Doha) region.

## Extended Definition

Dataproc is available in the me-central1 (Doha) region.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore)
- [https://docs.cloud.google.com/dataproc-metastore/docs/quotas](https://docs.cloud.google.com/dataproc-metastore/docs/quotas)
- [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service)

## Supporting Pages

### Disaster recovery for Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore)
- Source ID: `site-docs-root-2`
- Final score: 112
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Update the environment variables based on these new roles: export DPMS PRIMARY REGION = us - east1 export DPMS STANDBY REGION = us - central1 ] export DPMS PRIMARY INSTANCE = dpms2 export DPMS STANDBY INSTANCE = dpms1 export HADOOP PRIMARY = dataproc - cluster2 export HADOOP STANDBY = dataproc - cluster1 Verify that you can write to the new primary Managed Service for Apache Spark Metastore in region B: gcloud dataproc jobs submit hive \ --cluster ${ DPMS PRIMARY INSTANCE } \ --region ${ DPMS PRIMARY REGION } \ --execute "create view completed orders as select from orders where order status = 'COMPLETE';" gcloud dataproc jobs submit hive \ --cluster ${ HADOOP PRIMARY } \ --region ${ DPMS PRIMARY REGION } \ --execute "select from completed orders limit 5;" The output contains the following: +----------------------------+------------------------------+-------------------------------------+--------------------------------+ completed orders.order id completed orders.order date completed orders.order customer id completed orders.order status +----------------------------+------------------------------+-------------------------------------+--------------------------------+ 3 2013-07-25 00:00:00.0 12111 COMPLETE 5 2013-07-25 00:00:00.0 11318 COMPLETE 6 2013-07-25 00:00:00.0 7130 COMPLETE 7 2013-07-25 00:00:00.0 4530 COMPLETE 15 2013-07-25 00:00:00.0 2568 COMPLETE +----------------------------+------------------------------+-------------------------------------+--------------------------------+ The failover is now complete.
- Clone the tutorial's GitHub repository: git clone https://github.com/GoogleCloudPlatform/metastore-disaster-recovery.git Enable the following Google Cloud APIs: gcloud services enable dataproc.googleapis.com metastore.googleapis.com Set some environment variables: export PROJECT =$ ( gcloud info -- format = 'value(config.project)' ) export WAREHOUSE BUCKET =$ { PROJECT } - warehouse export BACKUP BUCKET =$ { PROJECT } - dpms - backups export DPMS PRIMARY REGION = us - central1 export DPMS STANDBY REGION = us - east1 export DPMS PRIMARY INSTANCE = dpms1 export DPMS STANDBY INSTANCE = dpms2 export HADOOP PRIMARY = dataproc - cluster1 export HADOOP STANDBY = dataproc - cluster2 Creating storage for Hive data and Hive Metastore backups In this section, you create Cloud Storage buckets to host the Hive data and Hive Metastore backups.
- Create a Managed Service for Apache Spark cluster In Cloud Shell, create a Managed Service for Apache Spark cluster and attach it to the DPMS instance: gcloud dataproc clusters create ${ HADOOP PRIMARY } \ --dataproc-metastore=projects/ ${ PROJECT } /locations/ ${ DPMS PRIMARY REGION } /services/ ${ DPMS PRIMARY INSTANCE } \ --region= ${ DPMS PRIMARY REGION } \ --image-version=2.0 Specify the cluster image as version 2.0 , which is the latest version available as of June 2021.
- Update the environment variables to these new roles: export DPMS PRIMARY REGION = us - central1 export DPMS STANDBY REGION = us - east1 export DPMS PRIMARY INSTANCE = dpms1 export DPMS STANDBY INSTANCE = dpms12 export HADOOP PRIMARY = dataproc - cluster1 export HADOOP STANDBY = dataproc - cluster2 The failback is now complete.

### Quotas and limits \_|\_ Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/quotas](https://docs.cloud.google.com/dataproc-metastore/docs/quotas)
- Source ID: `site-docs-root-2`
- Final score: 98
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, you might have sufficient quota to create a new regional, external IP address in the us-central1 region, but that would not be possible if there were no available external IP addresses in that region.
- Situations where resources are unavailable in an entire region are rare; however, resources within a zone can be depleted from time to time, typically without impact to the service level agreement (SLA) for the type of resource.
- Quotas and limits Dataproc Metastore services Item Quotas and limits Notes Services per region 20 services When a project violates Google Cloud service policy, its per-region service quota is significantly lowered.
- Resource availability Each quota represents a maximum number for a particular type of resource that you can create, provided that resource is available.

### Create a Dataproc Metastore service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service)
- Source ID: `site-docs-root-2`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- For more information about selecting the appropriate region, see Available regions and zones and Regional endpoint .
- For more information about selecting the appropriate region, see Available regions and zones and Regional endpoint .
- For more information about selecting the appropriate region, see Available regions and zones and Regional endpoint .
- Autoscaling is only available for single region Dataproc Metastore instances.

