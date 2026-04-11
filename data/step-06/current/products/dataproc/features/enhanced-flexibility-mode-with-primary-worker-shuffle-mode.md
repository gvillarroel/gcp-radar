---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.050Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Enhanced Flexibility Mode with primary worker shuffle mode"
feature_slug: "enhanced-flexibility-mode-with-primary-worker-shuffle-mode"
latest_feature_date: "2022-02-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig"
keywords:
  - "enhanced"
  - "flexibility"
  - "mode"
  - "with"
  - "primary"
  - "worker"
  - "shuffle"
  - "dataproc"
---

# Enhanced Flexibility Mode with primary worker shuffle mode

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Dataproc image version 2.0 supports Enhanced Flexibility Mode with primary worker shuffle mode for Spark.

## Extended Definition

Dataproc image version 2.0 supports Enhanced Flexibility Mode with primary worker shuffle mode for Spark.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig)

## Supporting Pages

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- Feature Dataproc on Compute Engine: Added support for Enhanced Flexibility Mode (EFM) with primary worker shuffle mode on Spark for image version 2.2.50 and above.
- February 18, 2022 Feature Added support for Enhanced Flexibility Mode (EFM) with primary worker shuffle mode on Spark for image version 2.0 .
- August 21, 2020 Feature Announcing the Beta release of Dataproc Enhanced Flexibility Mode (EFM) , which manages shuffle data to minimize job progress delays caused by the removal of nodes from a running cluster.
- Fixed Fixed an issue on 1.4 and 1.5 images where temporary shuffle data could be leaked when running Enhanced Flexibility Mode (EFM) with Spark.

### "Package com.google.cloud.dataproc.v1 (4.85.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- Source ID: `site-java-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Instance Flexibility Policy Instance flexibility Policy allowing a mixture of VM shapes and provisioning models. com. google. cloud. dataproc. v1.
- Provisioning Model Mix Defines how Dataproc should create VMs with a mixture of provisioning models. com. google. cloud. dataproc. v1.
- Builder Instance flexibility Policy allowing a mixture of VM shapes and provisioning models. com. google. cloud. dataproc. v1.
- Builder Defines how Dataproc should create VMs with a mixture of provisioning models. com. google. cloud. dataproc. v1.

### "InstanceGroupConfig \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig)
- Source ID: `site-docs-reference`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation DiskConfig JSON representation AttachedDiskConfig JSON representation DiskType Preemptibility ManagedGroupConfig JSON representation AcceleratorConfig JSON representation InstanceFlexibilityPolicy JSON representation ProvisioningModelMix JSON representation InstanceSelection JSON representation InstanceSelectionResult JSON representation StartupConfig JSON representation The config settings for Compute Engine resources in an instance group, such as a master or worker group.
- ProvisioningModelMix Defines how Dataproc should create VMs with a mixture of provisioning models.
- Dataproc will create only standard VMs until it reaches standardCapacityBase, then it will start using standardCapacityPercentAboveBase to mix Spot with Standard VMs. eg.
- If minNumInstances is set, cluster creation will succeed if the number of primary workers created is at least equal to the minNumInstances number.

