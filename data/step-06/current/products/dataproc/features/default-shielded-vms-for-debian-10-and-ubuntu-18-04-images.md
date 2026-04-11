---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.071Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Default Shielded VMs for Debian 10 and Ubuntu 18.04 images"
feature_slug: "default-shielded-vms-for-debian-10-and-ubuntu-18-04-images"
latest_feature_date: "2020-07-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-start-stop"
keywords:
  - "default"
  - "shielded"
  - "vms"
  - "for"
  - "debian"
  - "10"
  - "and"
  - "ubuntu"
---

# Default Shielded VMs for Debian 10 and Ubuntu 18.04 images

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Dataproc uses Shielded VMs by default for Debian 10 and Ubuntu 18.04 clusters.

## Extended Definition

Dataproc uses Shielded VMs by default for Debian 10 and Ubuntu 18.04 clusters.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-start-stop](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-start-stop)

## Supporting Pages

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- July 17, 2020 Feature Dataproc now uses Shielded VMs for Debian 10 and Ubuntu 18.04 clusters by default.
- Features and improvements: Regional and multi-zonal workloads are used by default to increase obtainability of compute resources Faster startup than previous runtimes Fast resource cleanup that allows faster release of VPC IPs after workload completion End-user credentials are used for all workloads by default New bigquery Spark catalog, pre-configured for out-of-the-box BigQuery native table interactions New Spark Serverless-specific IAM roles New dataproc-rm.googleapis.com API enablement is required November 22, 2025 Announcement New Dataproc on Compute Engine subminor image versions : 2.0.154-debian10, 2.0.154-ubuntu18, 2.0.154-rocky8 2.1.103-debian11, 2.1.103-ubuntu20, 2.1.103-ubuntu20-arm, 2.1.103-rocky8 2.2.71-debian12, 2.2.71-ubuntu22, 2.2.71-ubuntu22-arm, 2.2.71-rocky9 2.3.18-debian12, 2.3.18-ubuntu22, 2.3.18-ubuntu22-arm, 2.3.18-ml-ubuntu22, 2.3.18-rocky9 Change Dataproc on Compute Engine : Updated Cloud Storage connector: Updated to 3.1.10 in image version 2.3.18 .
- Announcement New sub-minor versions of Dataproc images: 1.5.78-debian10, 1.5.78-rocky8, 1.5.78-ubuntu18 2.0.52-debian10, 2.0.52-rocky8, 2.0.52-ubuntu18 2.1.0-debian11, 2.1.0-rocky8, 2.1.0-ubuntu20 Announcement New Dataproc Serverless for Spark runtime versions: 1.0.24 and 2.0.4 Change Dataproc Serverless for Spark runtime 1.0: Upgrade to Spark to 3.2.3 Upgrade Cloud Storage connector to 2.2.9 Upgrade Spark dependencies: Jetty to 9.4.49.v20220914 ORC to 1.7.7 Protobuf to 3.19.6 RoaringBitmap to 0.9.35 Scala to 2.12.17 Change Dataproc Serverless for Spark runtime 2.0: Upgrade Cloud Storage connector to 2.2.9 Upgrade Spark dependencies: Protobuf to 3.21.9 RoaringBitmap to 0.9.35 Change Use jemalloc as a default OS memory allocator in Dataproc Serverless for Spark runtime.
- April 04, 2024 Announcement New Dataproc Serverless for Spark runtime versions : 1.1.57 1.2.1 2.0.65 2.1.44 2.2.1 Change Added bigframes Python package by default in the Dataproc Serverless for Spark runtime versions 1.2 and 2.2 April 02, 2024 Announcement The following previously released sub-minor versions of Dataproc on Compute Engine images have been rolled back and can only be used when updating existing clusters that already use them: 2.0.97-debian10, 2.0.97-rocky8, 2.0.97-ubuntu18 2.1.45-debian11, 2.1.45-rocky8, 2.1.45-ubuntu20, 2.1.45-ubuntu20-arm 2.2.11-debian12, 2.2.11-rocky9, 2.2.11-ubuntu22 March 29, 2024 Breaking Dataproc Serverless for Spark: runtime version 2.2 will become the default Dataproc Serverless for Spark runtime version on May 3, 2024.

### "ClusterConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- Source ID: `site-docs-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- The following are supported prefixes and their mappings: capacity-scheduler: capacity-scheduler.xml core: core-site.xml distcp: distcp-default.xml hdfs: hdfs-site.xml hive: hive-site.xml mapred: mapred-site.xml pig: pig.properties spark: spark-defaults.conf yarn: yarn-site.xml For more information, see Cluster properties .
- Examples: https://www.googleapis.com/compute/v1/projects/[projectId]/zones/[zone]/nodeGroups/node-group-1 projects/[projectId]/zones/[zone]/nodeGroups/node-group-1 node-group-1 ShieldedInstanceConfig Shielded Instance Config for clusters using Compute Engine Shielded VMs .
- Shielded Instance Config for clusters using Compute Engine Shielded VMs . confidentialInstanceConfig object ( ConfidentialInstanceConfig ) Optional.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-21 UTC."],[],[]]

### "Stop and start clusters \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-start-stop](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-start-stop)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Notes: The cluster start and stop feature is available on clusters created with images released on or after the following image versions: 1.4.35-debian10/ubuntu18 1.5.10-debian10/ubuntu18 2.0.0-RC6-debian10/ubuntu18 Stopping individual cluster nodes is not recommended since the status of a stopped VM may not be in sync with cluster status, which can result in errors.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- Google Cloud console Click the cluster name from the Managed Service for Apache Spark Clusters page in the Google Cloud console, then click STOP to stop and START to start the cluster. gcloud CLI Stop a cluster gcloud dataproc clusters stop CLUSTER NAME \ --region= REGION Start a cluster gcloud dataproc clusters start CLUSTER NAME \ --region= REGION REST API Stop a cluster Submit a clusters.stop request.
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).

