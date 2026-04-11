---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.025Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Confidential Computing option for cluster creation"
feature_slug: "confidential-computing-option-for-cluster-creation"
latest_feature_date: "2023-12-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig"
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-console"
keywords:
  - "confidential"
  - "computing"
  - "option"
  - "for"
  - "cluster"
  - "creation"
  - "the"
  - "console"
---

# Confidential Computing option for cluster creation

Product: Dataproc
Coverage: LOW

## Step 02 Summary

The Google Cloud console includes a Confidential Computing option when creating a Dataproc cluster on Compute Engine.

## Extended Definition

The Google Cloud console includes a Confidential Computing option when creating a Dataproc cluster on Compute Engine.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-console](https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-console)

## Supporting Pages

### "ClusterConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- Source ID: `site-docs-reference`
- Final score: 158
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- ConfidentialInstanceConfig Confidential Instance Config for clusters using Confidential VMs JSON representation { "enableConfidentialCompute" : boolean } Fields enableConfidentialCompute boolean Optional.
- Either the exact time the cluster should be stopped at or the cluster maximum age. stop ttl can be only one of the following: autoStopTime string ( Timestamp format) Optional.
- Either the exact time the cluster should be deleted at or the cluster maximum age. ttl can be only one of the following: autoDeleteTime string ( Timestamp format) Optional.
- Shielded Instance Config for clusters using Compute Engine Shielded VMs . confidentialInstanceConfig object ( ConfidentialInstanceConfig ) Optional.

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Change Blocklisted the following Dataproc on Compute Engine Images due to issue with increase in startup time: 2.0.86-debian10, 2.0.86-rocky8, 2.0.86-ubuntu18 2.1.34-debian11, 2.1.34-rocky8, 2.1.34-ubuntu20, 2.1.34-ubuntu20-arm December 06, 2023 Announcement New Dataproc Serverless for Spark runtime versions : 1.1.41 2.0.49 2.1.28 2.2.0-RC1 Announcement Announcing the Preview release of Dataproc Serverless for Spark 2.2 runtime : Spark 3.5.0 BigQuery Spark Connector 0.34.0 Cloud Storage Connector 3.0.0-RC1 Conda 23.10 Java 17 Python 3.12 R 4.3 Scala 2.13 December 04, 2023 Announcement New Dataproc on Compute Engine subminor image versions : 2.0.85-debian10, 2.0.85-rocky8, 2.0.85-ubuntu18 2.1.33-debian11, 2.1.33-rocky8, 2.1.33-ubuntu20, 2.1.33-ubuntu20-arm Feature Added the Confidential Computing option on the "Manage Security" panel on the "Create a Dataproc cluster on Compute Engine" page in the Google Cloud console.
- Fixed Fixed the ability to delete jobs that fast-failed before some cluster and staging directories were created Fixed some remaining errors with vmem settings when using the distcp command Fixed a rare bug in which underlying Compute Engine issues could lead to VM instances failing to be deleted after the Cloud Dataproc cluster had been successfully deleted Hive command has been fixed Fixed error reporting when updating the number of workers (standard and preemptible) in a cluster Fixed some cases when Rate Limit Exceeded errors occurred The maximum cluster name length is now correctly 55 instead of 56 characters GCP Console Cluster list now includes a Created column, and the cluster configuration tab now includes a Created field, telling the creation time of the cluster In the cluster-create screen, cluster memory sizes greater than 999 GB are now displayed in TB Fields that were missing from the PySpark and Hive job configuration tab ( Additional Python Files and Jar Files ) have been added The option to add preemptible nodes when creating a cluster is now in the "expander" at the bottom of the form Machine types with insufficient memory (less than 3.5 GB) are no longer displayed in the list of machine types (previously, selecting one of these small machine types would lead to an error from the backend The placeholder text in the Arguments field of the submit-job form has been corrected October 23, 2015 Feature GCP Console: Added support for adding, editing, and removing preemptible instances in clusters.
- January 15, 2024 Change Dataproc Serverless for Spark: Upgraded Spark RAPIDS to version 23.12.1 Upgraded the following components to the following versions in the latest 2.2 runtime: Spark BigQuery connector version 0.35.0 Cloud Storage connector version 3.0.0 Conda version 23.11 Announcement New Dataproc Serverless for Spark runtime versions : 1.1.45 2.0.53 2.1.32 2.2.0-RC5 Feature Dataproc Spark Enhancements are now available in the Google Cloud console Dataproc cluster and job creation pages.
- After enabling this feature, the Web Interfaces tab on the Cluster details form on the GCP console lists the Component Gateway links to the web interfaces of default and optional components installed on the cluster.

### "Quickstart: Create a cluster by using the Google Cloud console \_|\_ Managed\

- URL: [https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-console](https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-console)
- Source ID: `site-docs-reference`
- Final score: 152
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a cluster by using the Google Cloud console This page shows you how to use the Google Cloud console to create a Managed Service for Apache Spark cluster, run a basic Apache Spark job in the cluster, and then modify the number of workers in the cluster.
- Create a cluster In the Google Cloud console, go to the Managed Service for Apache Spark Clusters page.
- User roles To get the permissions that you need to create a Managed Service for Apache Spark cluster, ask your administrator to grant you the following IAM roles: Dataproc Editor ( roles/dataproc.editor ) on the project Service Account User ( roles/iam.serviceAccountUser ) on the Compute Engine default service account Service account role To ensure that the Compute Engine default service account has the necessary permissions to create a Managed Service for Apache Spark cluster, ask your administrator to grant the Dataproc Worker ( roles/dataproc.worker ) IAM role to the Compute Engine default service account on the project.
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).

