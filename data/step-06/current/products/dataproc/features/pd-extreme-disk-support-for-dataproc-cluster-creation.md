---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.033Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "pd-extreme disk support for Dataproc cluster creation"
feature_slug: "pd-extreme-disk-support-for-dataproc-cluster-creation"
latest_feature_date: "2023-03-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc/docs/guides/recreate-cluster"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig"
keywords:
  - "pd"
  - "extreme"
  - "disk"
  - "for"
  - "dataproc"
  - "cluster"
  - "creation"
  - "supports"
---

# pd-extreme disk support for Dataproc cluster creation

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Dataproc cluster creation supports the pd-extreme disk type.

## Extended Definition

Dataproc cluster creation supports the pd-extreme disk type.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/dataproc/docs/guides/recreate-cluster](https://docs.cloud.google.com/dataproc/docs/guides/recreate-cluster)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)

## Supporting Pages

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- March 28, 2023 Announcement New sub-minor versions of Dataproc images: 1.5.87-debian10, 1.5.87-rocky8, 1.5.87-ubuntu18 2.0.61-debian10, 2.0.61-rocky8, 2.0.61-ubuntu18 2.1.9-debian11, 2.1.9-rocky8, 2.1.9-ubuntu20 Feature Dataproc cluster creation now supports the pd-extreme disk type.
- Fixed Fixed the ability to delete jobs that fast-failed before some cluster and staging directories were created Fixed some remaining errors with vmem settings when using the distcp command Fixed a rare bug in which underlying Compute Engine issues could lead to VM instances failing to be deleted after the Cloud Dataproc cluster had been successfully deleted Hive command has been fixed Fixed error reporting when updating the number of workers (standard and preemptible) in a cluster Fixed some cases when Rate Limit Exceeded errors occurred The maximum cluster name length is now correctly 55 instead of 56 characters GCP Console Cluster list now includes a Created column, and the cluster configuration tab now includes a Created field, telling the creation time of the cluster In the cluster-create screen, cluster memory sizes greater than 999 GB are now displayed in TB Fields that were missing from the PySpark and Hive job configuration tab ( Additional Python Files and Jar Files ) have been added The option to add preemptible nodes when creating a cluster is now in the "expander" at the bottom of the form Machine types with insufficient memory (less than 3.5 GB) are no longer displayed in the list of machine types (previously, selecting one of these small machine types would lead to an error from the backend The placeholder text in the Arguments field of the submit-job form has been corrected October 23, 2015 Feature GCP Console: Added support for adding, editing, and removing preemptible instances in clusters.
- Announcement Announcing the General Availability (GA) release of Dataproc Serverless for Spark runtime versions 2.3 , which include the following components: Spark 3.5.1 BigQuery Spark Connector 0.42.3 Cloud Storage Connector 3.1.2 Java 17 Python 3.11 R 4.3 Scala 2.13 Announcement New Dataproc Serverless for Spark runtime versions : 1.1.105 1.2.49 2.2.49 2.3.0 May 23, 2025 Feature Dataproc now supports the creation of zero-scale clusters , available in preview .
- Announcing the general availability (GA) release of Cloud Dataproc Persistent Solid State Drive (PD-SSD) Boot Disks , which allows you to create clusters that use PD-SSDs for the master and worker node boot disks.

### "Recreate and update a cluster \_|\_ Managed Service for Apache Spark \_\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/recreate-cluster](https://docs.cloud.google.com/dataproc/docs/guides/recreate-cluster)
- Source ID: `site-iam-reference`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Set variables. export PROJECT= project-id export REGION= region export OLD CLUSTER= old-cluster-name export NEW CLUSTER= new-cluster-name export NEW IMAGE VERSION= image-version (for example, '2.2-debian12') Export the existing (old) cluster configuration to a JSON file. curl -X GET -H "Authorization: Bearer $(gcloud auth print-access-token)" "https://dataproc.googleapis.com/v1/projects/${PROJECT}/regions/${REGION}/clusters/${OLD CLUSTER}?alt=json" > "${OLD CLUSTER}-config.json" Update the configuration.
- Set variables. export PROJECT= project-id export REGION= region export OLD CLUSTER= old-cluster-name export NEW CLUSTER= new-cluster-name export NEW IMAGE VERSION= image-version (for example, '2.2-debian12') Export the existing (old) cluster configuration to a YAML file. gcloud dataproc clusters export $OLD CLUSTER \ --project=$PROJECT \ --region=$REGION > "${OLD CLUSTER}-config.yaml" Update the configuration.
- IMPORTANT: This step deletes all data stored in HDFS and on local disk in your cluster. gcloud dataproc clusters delete $OLD CLUSTER \ --project=$PROJECT \ --region=$REGION REST API The example instructions show updating the cluster name and the image version settings in a cluster configuration.
- The following example uses jq to update the cluster name and the image version. jq ".clusterName = \"${NEW CLUSTER}\" .config.softwareConfig.imageVersion=\"${NEW IMAGE VERSION}\" del(.config.workerConfig.imageUri) del(.config.masterConfig.imageUri)" "${OLD CLUSTER}-config.json" > "${NEW CLUSTER}-config-updated.json" Import the updated cluster configuration to create a new cluster with the updated configuration. curl -i -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json; charset=utf-8" -d "@${NEW CLUSTER}-config-updated.json" "https://dataproc.googleapis.com/v1/projects/${PROJECT}/regions/${REGION}/clusters?alt=json" After confirming your workloads run in the new cluster without issues, delete the existing (old) cluster.

### "ClusterConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- Source ID: `site-docs-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see Dataproc staging and temp buckets ).
- If you do not specify a temp bucket, Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's temp bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket.
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- The Dataproc service account (also see VM Data Plane identity ) used by Dataproc cluster VM instances to access Google Cloud Platform services.

