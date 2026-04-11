---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.095Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Compute Engine Accelerator support"
feature_slug: "compute-engine-accelerator-support"
latest_feature_date: "2019-09-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AcceleratorConfig.Builder"
keywords:
  - "compute"
  - "engine"
  - "accelerator"
  - "lets"
  - "dataproc"
  - "clusters"
  - "attach"
  - "gpus"
---

# Compute Engine Accelerator support

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Compute Engine Accelerator support lets Dataproc clusters attach GPUs.

## Extended Definition

Compute Engine Accelerator support lets Dataproc clusters attach GPUs.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AcceleratorConfig.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AcceleratorConfig.Builder)

## Supporting Pages

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- September 24, 2019 Feature Announcing the General Availability (GA) release of Cloud Dataproc Compute Engine Accelerator Support , which allows you to attach graphics processing units (GPUs) to a Cloud Dataproc cluster.
- Attaching GPUs to clusters (Beta) – Cloud Dataproc clusters now support Compute Engine GPUs .
- October 03, 2025 Announcement New Dataproc on Compute Engine subminor image versions : 2.0.150-debian10, 2.0.150-ubuntu18, 2.0.150-rocky8 2.1.99-debian11, 2.1.99-ubuntu20, 2.1.99-ubuntu20-arm, 2.1.99-rocky8 2.2.67-debian12, 2.2.67-ubuntu22, 2.2.67-ubuntu22-arm, 2.2.67-rocky9 2.3.14-debian12, 2.3.14-ubuntu22, 2.3.14-ubuntu22-arm, 2.3.14-ml-ubuntu22, 2.3.14-rocky9 September 15, 2025 Announcement New Dataproc on Compute Engine subminor image versions : 2.0.149-debian10, 2.0.149-ubuntu18, 2.0.149-rocky8 2.1.98-debian11, 2.1.98-ubuntu20, 2.1.98-ubuntu20-arm, 2.1.98-rocky8 2.2.66-debian12, 2.2.66-ubuntu22, 2.2.66-ubuntu22-arm, 2.2.66-rocky9 2.3.13-debian12, 2.3.13-ubuntu22, 2.3.13-ubuntu22-arm, 2.3.13-ml-ubuntu22, 2.3.13-rocky9 September 11, 2025 Announcement New Serverless for Apache Spark runtime versions : 1.2.61 2.2.61 2.3.12 3.0.0-RC4 September 08, 2025 Announcement Announcing the Preview release of Dataproc on Compute Engine image version 3.0.0-RC1 : Spark 4.0.0 Hadoop 3.4.1 Hive 4.1.0 Tez 0.10.5 Cloud Storage Connector 3.1.4 Conda 24.11 Java 17 Python 3.11 R 4.3 Scala 2.13 Announcement Announcing the Preview release of Serverless for Apache Spark 3.0.0-RC3 runtime : Spark 4.0.0 BigQuery Spark Connector 0.42.3 Cloud Storage Connector 3.1.5 Conda 25.3.0 Java 21 Python 3.12 R 4.4 Scala 2.13 Announcement New Dataproc on Compute Engine subminor image versions : 2.3.11-debian12, 2.3.11-ubuntu22, 2.3.11-ubuntu22-arm, 2.3.11-ml-ubuntu22, 2.3.11-rocky9 September 05, 2025 Announcement New Dataproc Serverless for Spark runtime versions: 1.2.60 2.2.60 2.3.11 September 02, 2025 Feature Multi-tenant clusters are now available in Preview.
- Fixed Fixed the ability to delete jobs that fast-failed before some cluster and staging directories were created Fixed some remaining errors with vmem settings when using the distcp command Fixed a rare bug in which underlying Compute Engine issues could lead to VM instances failing to be deleted after the Cloud Dataproc cluster had been successfully deleted Hive command has been fixed Fixed error reporting when updating the number of workers (standard and preemptible) in a cluster Fixed some cases when Rate Limit Exceeded errors occurred The maximum cluster name length is now correctly 55 instead of 56 characters GCP Console Cluster list now includes a Created column, and the cluster configuration tab now includes a Created field, telling the creation time of the cluster In the cluster-create screen, cluster memory sizes greater than 999 GB are now displayed in TB Fields that were missing from the PySpark and Hive job configuration tab ( Additional Python Files and Jar Files ) have been added The option to add preemptible nodes when creating a cluster is now in the "expander" at the bottom of the form Machine types with insufficient memory (less than 3.5 GB) are no longer displayed in the list of machine types (previously, selecting one of these small machine types would lead to an error from the backend The placeholder text in the Arguments field of the submit-job form has been corrected October 23, 2015 Feature GCP Console: Added support for adding, editing, and removing preemptible instances in clusters.

### "Package com.google.cloud.dataproc.v1 (4.85.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- Source ID: `site-java-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Cluster Controller Grpc The ClusterControllerService provides methods to manage clusters of Compute Engine instances. com. google. cloud. dataproc. v1.
- Async Service The ClusterControllerService provides methods to manage clusters of Compute Engine instances. com. google. cloud. dataproc. v1.
- Shielded Instance Config Shielded Instance Config for clusters using Compute Engine Shielded VMs . com. google. cloud. dataproc. v1.
- Builder Shielded Instance Config for clusters using Compute Engine Shielded VMs . com. google. cloud. dataproc. v1.

### "Class AcceleratorConfig.Builder (4.85.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AcceleratorConfig.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AcceleratorConfig.Builder)
- Source ID: `site-java-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Examples: https://www.googleapis.com/compute/v1/projects/[project id]/zones/[zone]/acceleratorTypes/nvidia-tesla-t4 projects/[project id]/zones/[zone]/acceleratorTypes/nvidia-tesla-t4 nvidia-tesla-t4 Auto Zone Exception : If you are using the Dataproc Auto Zone Placement feature, you must use the short name of the accelerator type resource, for example, nvidia-tesla-t4 . string accelerator type uri = 1; Returns Type Description AcceleratorConfig.Builder This builder for chaining. getAcceleratorCount() public int getAcceleratorCount () The number of the accelerator cards of this type exposed to this instance. int32 accelerator count = 2; Returns Type Description int The acceleratorCount. getAcceleratorTypeUri() public String getAcceleratorTypeUri () Full URL, partial URI, or short name of the accelerator type resource to expose to this instance.
- Examples: https://www.googleapis.com/compute/v1/projects/[project id]/zones/[zone]/acceleratorTypes/nvidia-tesla-t4 projects/[project id]/zones/[zone]/acceleratorTypes/nvidia-tesla-t4 nvidia-tesla-t4 Auto Zone Exception : If you are using the Dataproc Auto Zone Placement feature, you must use the short name of the accelerator type resource, for example, nvidia-tesla-t4 . string accelerator type uri = 1; Returns Type Description ByteString The bytes for acceleratorTypeUri. getDefaultInstanceForType() public AcceleratorConfig getDefaultInstanceForType () Returns Type Description AcceleratorConfig getDescriptorForType() public Descriptors .
- Examples: https://www.googleapis.com/compute/v1/projects/[project id]/zones/[zone]/acceleratorTypes/nvidia-tesla-t4 projects/[project id]/zones/[zone]/acceleratorTypes/nvidia-tesla-t4 nvidia-tesla-t4 Auto Zone Exception : If you are using the Dataproc Auto Zone Placement feature, you must use the short name of the accelerator type resource, for example, nvidia-tesla-t4 . string accelerator type uri = 1; Returns Type Description String The acceleratorTypeUri. getAcceleratorTypeUriBytes() public ByteString getAcceleratorTypeUriBytes () Full URL, partial URI, or short name of the accelerator type resource to expose to this instance.
- Examples: https://www.googleapis.com/compute/v1/projects/[project id]/zones/[zone]/acceleratorTypes/nvidia-tesla-t4 projects/[project id]/zones/[zone]/acceleratorTypes/nvidia-tesla-t4 nvidia-tesla-t4 Auto Zone Exception : If you are using the Dataproc Auto Zone Placement feature, you must use the short name of the accelerator type resource, for example, nvidia-tesla-t4 . string accelerator type uri = 1; Parameter Name Description value ByteString The bytes for acceleratorTypeUri to set.

