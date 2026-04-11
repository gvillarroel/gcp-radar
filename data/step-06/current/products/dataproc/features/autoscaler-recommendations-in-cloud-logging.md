---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.092Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Autoscaler recommendations in Cloud Logging"
feature_slug: "autoscaler-recommendations-in-cloud-logging"
latest_feature_date: "2019-12-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyOrBuilder"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicy.Builder"
keywords:
  - "autoscaler"
  - "recommendations"
  - "in"
  - "logging"
  - "include"
  - "configured"
  - "worker"
  - "limits"
---

# Autoscaler recommendations in Cloud Logging

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Autoscaler recommendations in Cloud Logging include configured worker limits, graceful decommission timeout, and reasons scaling actions were capped.

## Extended Definition

Autoscaler recommendations in Cloud Logging include configured worker limits, graceful decommission timeout, and reasons scaling actions were capped.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyOrBuilder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyOrBuilder)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicy.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicy.Builder)

## Supporting Pages

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- In particular each recommendation now includes 1) the minimum and maximum worker counts configured in the autoscaling policy, 2) the graceful decommission timeout (for SCALE DOWN operations), and 3) additional context into why the autoscaler couldn't add or remove more nodes.
- Feature Added additional information into Autoscaler recommendations in Stackdriver logging.
- Fixed Fixed the ability to delete jobs that fast-failed before some cluster and staging directories were created Fixed some remaining errors with vmem settings when using the distcp command Fixed a rare bug in which underlying Compute Engine issues could lead to VM instances failing to be deleted after the Cloud Dataproc cluster had been successfully deleted Hive command has been fixed Fixed error reporting when updating the number of workers (standard and preemptible) in a cluster Fixed some cases when Rate Limit Exceeded errors occurred The maximum cluster name length is now correctly 55 instead of 56 characters GCP Console Cluster list now includes a Created column, and the cluster configuration tab now includes a Created field, telling the creation time of the cluster In the cluster-create screen, cluster memory sizes greater than 999 GB are now displayed in TB Fields that were missing from the PySpark and Hive job configuration tab ( Additional Python Files and Jar Files ) have been added The option to add preemptible nodes when creating a cluster is now in the "expander" at the bottom of the form Machine types with insufficient memory (less than 3.5 GB) are no longer displayed in the list of machine types (previously, selecting one of these small machine types would lead to an error from the backend The placeholder text in the Arguments field of the submit-job form has been corrected October 23, 2015 Feature GCP Console: Added support for adding, editing, and removing preemptible instances in clusters.
- GCP Console The Output tab for a job now includes a Line wrapping option to make it easier to view job output containing very long lines January 21, 2016 Fixed SparkR jobs no longer immediately fail with a "permission denied" error ( Spark JIRA issue ) Configuring logging for Spark jobs with the --driver-logging-levels option no longer interferes with Java driver options GCP Console The error shown for improperly-formatted initialization actions now properly appears with information about the problem Very long error messages now include a scrollbar so the Close button remains on-screen re ## January 7, 2016 #### Bugfixes Fixed issue in Dataproc version 0.1 that caused zero-byte SUCCESS and FAILURE files for each job to be continually re-written to Cloud Storage.

### "Interface AutoscalingPolicyOrBuilder (4.85.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyOrBuilder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicyOrBuilder)
- Source ID: `site-java-reference`
- Final score: 110
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Describes how the autoscaler will operate for primary workers. .google.cloud.dataproc.v1.InstanceGroupAutoscalingPolicyConfig worker config = 4 [(.google.api.field behavior) = REQUIRED]; Returns Type Description InstanceGroupAutoscalingPolicyConfigOrBuilder hasBasicAlgorithm() public abstract boolean hasBasicAlgorithm () .google.cloud.dataproc.v1.BasicAutoscalingAlgorithm basic algorithm = 3 [(.google.api.field behavior) = REQUIRED]; Returns Type Description boolean Whether the basicAlgorithm field is set. hasSecondaryWorkerConfig() public abstract boolean hasSecondaryWorkerConfig () Optional.
- Describes how the autoscaler will operate for secondary workers. .google.cloud.dataproc.v1.InstanceGroupAutoscalingPolicyConfig secondary worker config = 5 [(.google.api.field behavior) = OPTIONAL]; Returns Type Description InstanceGroupAutoscalingPolicyConfig The secondaryWorkerConfig. getSecondaryWorkerConfigOrBuilder() public abstract InstanceGroupAutoscalingPolicyConfigOrBuilder getSecondaryWorkerConfigOrBuilder () Optional.
- Describes how the autoscaler will operate for primary workers. .google.cloud.dataproc.v1.InstanceGroupAutoscalingPolicyConfig worker config = 4 [(.google.api.field behavior) = REQUIRED]; Returns Type Description InstanceGroupAutoscalingPolicyConfig The workerConfig. getWorkerConfigOrBuilder() public abstract InstanceGroupAutoscalingPolicyConfigOrBuilder getWorkerConfigOrBuilder () Required.
- Describes how the autoscaler will operate for secondary workers. .google.cloud.dataproc.v1.InstanceGroupAutoscalingPolicyConfig secondary worker config = 5 [(.google.api.field behavior) = OPTIONAL]; Returns Type Description InstanceGroupAutoscalingPolicyConfigOrBuilder getWorkerConfig() public abstract InstanceGroupAutoscalingPolicyConfig getWorkerConfig () Required.

### "Class AutoscalingPolicy.Builder (4.85.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicy.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicy.Builder)
- Source ID: `site-java-reference`
- Final score: 108
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Describes how the autoscaler will operate for primary workers. .google.cloud.dataproc.v1.InstanceGroupAutoscalingPolicyConfig worker config = 4 [(.google.api.field behavior) = REQUIRED]; Returns Type Description InstanceGroupAutoscalingPolicyConfigOrBuilder hasBasicAlgorithm() public boolean hasBasicAlgorithm () .google.cloud.dataproc.v1.BasicAutoscalingAlgorithm basic algorithm = 3 [(.google.api.field behavior) = REQUIRED]; Returns Type Description boolean Whether the basicAlgorithm field is set. hasSecondaryWorkerConfig() public boolean hasSecondaryWorkerConfig () Optional.
- Describes how the autoscaler will operate for primary workers. .google.cloud.dataproc.v1.InstanceGroupAutoscalingPolicyConfig worker config = 4 [(.google.api.field behavior) = REQUIRED]; Parameter Name Description builderForValue InstanceGroupAutoscalingPolicyConfig.Builder Returns Type Description AutoscalingPolicy.Builder Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Describes how the autoscaler will operate for secondary workers. .google.cloud.dataproc.v1.InstanceGroupAutoscalingPolicyConfig secondary worker config = 5 [(.google.api.field behavior) = OPTIONAL]; Parameter Name Description value InstanceGroupAutoscalingPolicyConfig Returns Type Description AutoscalingPolicy.Builder setSecondaryWorkerConfig(InstanceGroupAutoscalingPolicyConfig.Builder builderForValue) public AutoscalingPolicy .
- Describes how the autoscaler will operate for secondary workers. .google.cloud.dataproc.v1.InstanceGroupAutoscalingPolicyConfig secondary worker config = 5 [(.google.api.field behavior) = OPTIONAL]; Parameter Name Description builderForValue InstanceGroupAutoscalingPolicyConfig.Builder Returns Type Description AutoscalingPolicy.Builder setWorkerConfig(InstanceGroupAutoscalingPolicyConfig value) public AutoscalingPolicy .

