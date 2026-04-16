---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.129Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Dataproc regional availability in us-east5"
feature_slug: "dataproc-regional-availability-in-us-east5"
latest_feature_date: "2022-06-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/quotas"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/create-service"
keywords:
  - "columbus"
  - "east5"
  - "ohio"
  - "availability"
  - "available"
  - "regional"
---

# Dataproc regional availability in us-east5

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc is available in the us-east5 (Columbus, Ohio) region.

## Extended Definition

Dataproc is available in the us-east5 (Columbus, Ohio) region.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/quotas](https://docs.cloud.google.com/dataproc-metastore/docs/quotas)
- [https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore)
- [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service)

## Supporting Pages

### Quotas and limits \_|\_ Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/quotas](https://docs.cloud.google.com/dataproc-metastore/docs/quotas)
- Source ID: `site-docs-root-2`
- Final score: 55
- Re-rank relevance: N/A

Evidence snippets:
- For example, you might have sufficient quota to create a new regional, external IP address in the us-central1 region, but that would not be possible if there were no available external IP addresses in that region.
- Resource availability Each quota represents a maximum number for a particular type of resource that you can create, provided that resource is available.
- Situations where resources are unavailable in an entire region are rare; however, resources within a zone can be depleted from time to time, typically without impact to the service level agreement (SLA) for the type of resource.
- Even if you have available quota, you won't be able to create a new resource if it is not available.

### Disaster recovery for Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore)
- Source ID: `site-docs-root-2`
- Final score: 53
- Re-rank relevance: N/A

Evidence snippets:
- Create Hive data storage In Cloud Shell, create a dual-regional bucket to host the Hive data: gcloud storage buckets create gs:// ${ WAREHOUSE BUCKET } --location=NAM4 Copy some sample data to the Hive data bucket: gcloud storage cp gs://retail csv gs:// ${ WAREHOUSE BUCKET } /retail --recursive Create storage for metadata backups In Cloud Shell, create a dual-region bucket to host the DPMS metadata backups: gcloud storage buckets create gs:// ${ BACKUP BUCKET } --location=NAM4 Deploying compute resources in the primary region In this section, you deploy all the compute resources in the primary region, including the DPMS instance and the Managed Service for Apache Spark cluster.
- Create a Managed Service for Apache Spark cluster In Cloud Shell, create a Managed Service for Apache Spark cluster and attach it to the DPMS instance: gcloud dataproc clusters create ${ HADOOP PRIMARY } \ --dataproc-metastore=projects/ ${ PROJECT } /locations/ ${ DPMS PRIMARY REGION } /services/ ${ DPMS PRIMARY INSTANCE } \ --region= ${ DPMS PRIMARY REGION } \ --image-version=2.0 Specify the cluster image as version 2.0 , which is the latest version available as of June 2021.
- Managed Service for Apache Spark Metastore is a fully-managed, highly-available, auto-scaled, auto-healing, OSS-native metastore service that greatly simplifies technical metadata management.
- Because the backup files are stored in a dual-regional bucket, they are accessible even if your primary region (region A) goes down.

### Create a Dataproc Metastore service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service)
- Source ID: `site-docs-root-2`
- Final score: 47
- Re-rank relevance: N/A

Evidence snippets:
- For more information about selecting the appropriate region, see Available regions and zones and Regional endpoint .
- For more information about selecting the appropriate region, see Available regions and zones and Regional endpoint .
- For more information about selecting the appropriate region, see Available regions and zones and Regional endpoint .
- When creating a metastore, the VPC network you are using might run out of available RFC 1918 addresses required by Dataproc Metastore services.

