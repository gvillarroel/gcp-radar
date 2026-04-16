---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.143Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Dataproc regional availability in asia-south2"
feature_slug: "dataproc-regional-availability-in-asia-south2"
latest_feature_date: "2021-06-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/regions"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/quotas"
keywords:
  - "south2"
  - "delhi"
  - "asia"
  - "availability"
  - "available"
  - "regional"
  - "region"
---

# Dataproc regional availability in asia-south2

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc is available in the asia-south2 (Delhi) region.

## Extended Definition

Dataproc is available in the asia-south2 (Delhi) region.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/regions](https://docs.cloud.google.com/dataproc-metastore/docs/regions)
- [https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore)
- [https://docs.cloud.google.com/dataproc-metastore/docs/quotas](https://docs.cloud.google.com/dataproc-metastore/docs/quotas)

## Supporting Pages

### Dataproc Metastore regions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/regions](https://docs.cloud.google.com/dataproc-metastore/docs/regions)
- Source ID: `site-docs-root-2`
- Final score: 108
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Asia Pacific Tokyo Region description Region name Taiwan asia-east1 Hong Kong asia-east2 Tokyo asia-northeast1 Seoul asia-northeast3 Mumbai asia-south1 Delhi asia-south2 Singapore asia-southeast1 Jakarta asia-southeast2 Sydney australia-southeast1 Melbourne australia-southeast2 Europe Region description Region name Warsaw europe-central2 Finland europe-north1 Madrid europe-southwest1 Belgium europe-west1 London europe-west2 Frankfurt europe-west3 Netherlands europe-west4 Zürich europe-west6 Milan europe-west8 Paris europe-west9 Turin europe-west12 Middle East Region description Region name Tel Aviv me-west1 Dammam me-central2 Dataproc Metastore services created in me-central2 can't be attached to Managed Service for Apache Spark clusters.
- Feature Supported Administrator Interface ✓ Artifacts Cloud Storage bucket ✓ Auxiliary versions ✓ Backup/Restore ✓ CMEK config ✓ Database type Spanner/MySQL Data Catalog sync ✓ Endpoint protocol (Thrift/gRPC) ✓ IAM policies on individual tables/databases ✓ Import/Export ✓ Kerberos ✓ Private Service Connect ✓ Release channels ✓ Scaling config ✓ VPC-SC ✓ Single region services Dataproc Metastore is available in the following regions.
- North America Region description Region name Montréal northamerica-northeast1 Toronto northamerica-northeast2 Mexico northamerica-south1 Iowa us-central1 South Carolina us-east1 Northern Virginia us-east4 Columbus us-east5 Dallas us-south1 Oregon us-west1 Los Angeles us-west2 Salt Lake City us-west3 Las Vegas us-west4 South America Region description Region name São Paulo southamerica-east1 Santiago southamerica-west1 What's next Update and delete a service Use Apache Hive Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Data analytics Dataproc Metastore Resources Send feedback Dataproc Metastore regions Stay organized with collections Save and categorize content based on your preferences.

### Disaster recovery for Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore)
- Source ID: `site-docs-root-2`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- Create Hive data storage In Cloud Shell, create a dual-regional bucket to host the Hive data: gcloud storage buckets create gs:// ${ WAREHOUSE BUCKET } --location=NAM4 Copy some sample data to the Hive data bucket: gcloud storage cp gs://retail csv gs:// ${ WAREHOUSE BUCKET } /retail --recursive Create storage for metadata backups In Cloud Shell, create a dual-region bucket to host the DPMS metadata backups: gcloud storage buckets create gs:// ${ BACKUP BUCKET } --location=NAM4 Deploying compute resources in the primary region In this section, you deploy all the compute resources in the primary region, including the DPMS instance and the Managed Service for Apache Spark cluster.
- Create a Managed Service for Apache Spark cluster In Cloud Shell, create a Managed Service for Apache Spark cluster and attach it to the DPMS instance: gcloud dataproc clusters create ${ HADOOP PRIMARY } \ --dataproc-metastore=projects/ ${ PROJECT } /locations/ ${ DPMS PRIMARY REGION } /services/ ${ DPMS PRIMARY INSTANCE } \ --region= ${ DPMS PRIMARY REGION } \ --image-version=2.0 Specify the cluster image as version 2.0 , which is the latest version available as of June 2021.
- Because the backup files are stored in a dual-regional bucket, they are accessible even if your primary region (region A) goes down.
- Dual-region buckets have a 99.95% availability SLA, compared to the 99.9% availability of single-region buckets.

### Quotas and limits \_|\_ Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/quotas](https://docs.cloud.google.com/dataproc-metastore/docs/quotas)
- Source ID: `site-docs-root-2`
- Final score: 75
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, you might have sufficient quota to create a new regional, external IP address in the us-central1 region, but that would not be possible if there were no available external IP addresses in that region.
- Situations where resources are unavailable in an entire region are rare; however, resources within a zone can be depleted from time to time, typically without impact to the service level agreement (SLA) for the type of resource.
- Resource availability Each quota represents a maximum number for a particular type of resource that you can create, provided that resource is available.
- Quotas and limits Dataproc Metastore services Item Quotas and limits Notes Services per region 20 services When a project violates Google Cloud service policy, its per-region service quota is significantly lowered.

