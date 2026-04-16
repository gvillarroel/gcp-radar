---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.659Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Compute Engine Accelerator support"
feature_slug: "compute-engine-accelerator-support"
latest_feature_date: "2019-09-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AcceleratorConfig.Builder"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig"
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
Coverage: MEDIUM

## Step 02 Summary

Compute Engine Accelerator support lets Dataproc clusters attach GPUs.

## Extended Definition

Compute Engine Accelerator support lets Dataproc clusters attach GPUs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AcceleratorConfig.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AcceleratorConfig.Builder)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig)

## Supporting Pages

### "Package com.google.cloud.dataproc.v1 (4.85.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- Source ID: `site-java-reference`
- Final score: 147
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cluster Controller Grpc The ClusterControllerService provides methods to manage clusters of Compute Engine instances. com. google. cloud. dataproc. v1.
- Async Service The ClusterControllerService provides methods to manage clusters of Compute Engine instances. com. google. cloud. dataproc. v1.
- Shielded Instance Config Shielded Instance Config for clusters using Compute Engine Shielded VMs . com. google. cloud. dataproc. v1.
- Builder Shielded Instance Config for clusters using Compute Engine Shielded VMs . com. google. cloud. dataproc. v1.

### "Class AcceleratorConfig.Builder (4.85.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AcceleratorConfig.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AcceleratorConfig.Builder)
- Source ID: `site-java-reference`
- Final score: 141
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Examples: https://www.googleapis.com/compute/v1/projects/[project id]/zones/[zone]/acceleratorTypes/nvidia-tesla-t4 projects/[project id]/zones/[zone]/acceleratorTypes/nvidia-tesla-t4 nvidia-tesla-t4 Auto Zone Exception : If you are using the Dataproc Auto Zone Placement feature, you must use the short name of the accelerator type resource, for example, nvidia-tesla-t4 . string accelerator type uri = 1; Returns Type Description AcceleratorConfig.Builder This builder for chaining. getAcceleratorCount() public int getAcceleratorCount () The number of the accelerator cards of this type exposed to this instance. int32 accelerator count = 2; Returns Type Description int The acceleratorCount. getAcceleratorTypeUri() public String getAcceleratorTypeUri () Full URL, partial URI, or short name of the accelerator type resource to expose to this instance.
- Examples: https://www.googleapis.com/compute/v1/projects/[project id]/zones/[zone]/acceleratorTypes/nvidia-tesla-t4 projects/[project id]/zones/[zone]/acceleratorTypes/nvidia-tesla-t4 nvidia-tesla-t4 Auto Zone Exception : If you are using the Dataproc Auto Zone Placement feature, you must use the short name of the accelerator type resource, for example, nvidia-tesla-t4 . string accelerator type uri = 1; Returns Type Description ByteString The bytes for acceleratorTypeUri. getDefaultInstanceForType() public AcceleratorConfig getDefaultInstanceForType () Returns Type Description AcceleratorConfig getDescriptorForType() public Descriptors .
- Examples: https://www.googleapis.com/compute/v1/projects/[project id]/zones/[zone]/acceleratorTypes/nvidia-tesla-t4 projects/[project id]/zones/[zone]/acceleratorTypes/nvidia-tesla-t4 nvidia-tesla-t4 Auto Zone Exception : If you are using the Dataproc Auto Zone Placement feature, you must use the short name of the accelerator type resource, for example, nvidia-tesla-t4 . string accelerator type uri = 1; Returns Type Description String The acceleratorTypeUri. getAcceleratorTypeUriBytes() public ByteString getAcceleratorTypeUriBytes () Full URL, partial URI, or short name of the accelerator type resource to expose to this instance.
- Examples: https://www.googleapis.com/compute/v1/projects/[project id]/zones/[zone]/acceleratorTypes/nvidia-tesla-t4 projects/[project id]/zones/[zone]/acceleratorTypes/nvidia-tesla-t4 nvidia-tesla-t4 Auto Zone Exception : If you are using the Dataproc Auto Zone Placement feature, you must use the short name of the accelerator type resource, for example, nvidia-tesla-t4 . string accelerator type uri = 1; Parameter Name Description value ByteString The bytes for acceleratorTypeUri to set.

### "InstanceGroupConfig \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig)
- Source ID: `site-docs-reference`
- Final score: 129
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation DiskConfig JSON representation AttachedDiskConfig JSON representation DiskType Preemptibility ManagedGroupConfig JSON representation AcceleratorConfig JSON representation InstanceFlexibilityPolicy JSON representation ProvisioningModelMix JSON representation InstanceSelection JSON representation InstanceSelectionResult JSON representation StartupConfig JSON representation The config settings for Compute Engine resources in an instance group, such as a master or worker group.
- Examples: https://www.googleapis.com/compute/v1/projects/[projectId]/zones/[zone]/acceleratorTypes/nvidia-tesla-t4 projects/[projectId]/zones/[zone]/acceleratorTypes/nvidia-tesla-t4 nvidia-tesla-t4 Auto Zone Exception : If you are using the Dataproc Auto Zone Placement feature, you must use the short name of the accelerator type resource, for example, nvidia-tesla-t4 . acceleratorCount integer The number of the accelerator cards of this type exposed to this instance.
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- The Compute Engine accelerator configuration for these instances. minCpuPlatform string Optional.

