---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.582Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Enhanced Flexibility Mode with primary worker shuffle"
feature_slug: "enhanced-flexibility-mode-with-primary-worker-shuffle"
latest_feature_date: "2025-03-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1"
  - "https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups"
keywords:
  - "enhanced"
  - "flexibility"
  - "mode"
  - "primary"
  - "worker"
  - "shuffle"
  - "dataproc"
  - "compute"
---

# Enhanced Flexibility Mode with primary worker shuffle

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc on Compute Engine supports Enhanced Flexibility Mode with primary worker shuffle mode for Spark.

## Extended Definition

Dataproc on Compute Engine supports Enhanced Flexibility Mode with primary worker shuffle mode for Spark.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- [https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups](https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups)

## Supporting Pages

### "InstanceGroupConfig \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig)
- Source ID: `site-docs-reference`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation DiskConfig JSON representation AttachedDiskConfig JSON representation DiskType Preemptibility ManagedGroupConfig JSON representation AcceleratorConfig JSON representation InstanceFlexibilityPolicy JSON representation ProvisioningModelMix JSON representation InstanceSelection JSON representation InstanceSelectionResult JSON representation StartupConfig JSON representation The config settings for Compute Engine resources in an instance group, such as a master or worker group.
- Examples: https://www.googleapis.com/compute/v1/projects/[projectId]/zones/[zone]/acceleratorTypes/nvidia-tesla-t4 projects/[projectId]/zones/[zone]/acceleratorTypes/nvidia-tesla-t4 nvidia-tesla-t4 Auto Zone Exception : If you are using the Dataproc Auto Zone Placement feature, you must use the short name of the accelerator type resource, for example, nvidia-tesla-t4 . acceleratorCount integer The number of the accelerator cards of this type exposed to this instance.
- Examples: https://www.googleapis.com/compute/v1/projects/[projectId]/zones/[zone]/machineTypes/n1-standard-2 projects/[projectId]/zones/[zone]/machineTypes/n1-standard-2 n1-standard-2 Auto Zone Exception : If you are using the Dataproc Auto Zone Placement feature, you must use the short name of the machine type resource, for example, n1-standard-2 . diskConfig object ( DiskConfig ) Optional.
- Dataproc will use the most recent image from the family: https://www.googleapis.com/compute/v1/projects/[projectId]/global/images/family/[custom-image-family-name] projects/[projectId]/global/images/family/[custom-image-family-name] If the URI is unspecified, it will be inferred from SoftwareConfig.image version or the system default. machineTypeUri string Optional.

### "Package com.google.cloud.dataproc.v1 (4.85.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- Source ID: `site-java-reference`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Instance Group Config The config settings for Compute Engine resources in an instance group, such as a master or worker group. com. google. cloud. dataproc. v1.
- Instance Flexibility Policy Instance flexibility Policy allowing a mixture of VM shapes and provisioning models. com. google. cloud. dataproc. v1.
- Builder The config settings for Compute Engine resources in an instance group, such as a master or worker group. com. google. cloud. dataproc. v1.
- Builder Instance flexibility Policy allowing a mixture of VM shapes and provisioning models. com. google. cloud. dataproc. v1.

### Managed Service for Apache Spark driver node groups \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups](https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups)
- Source ID: `site-iam-reference`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://dataproc.googleapis.com/v1/projects/ PROJECT ID /regions/ REGION /clusters" Select-Object -Expand Content You should receive a JSON response similar to the following: { "projectId": " PROJECT ID ", "clusterName": " CLUSTER NAME ", "config": { ... "auxiliaryNodeGroups": [ { "nodeGroup": { "name": "projects/ PROJECT ID /regions/ REGION /clusters/ CLUSTER NAME /nodeGroups/ NODE GROUP ID ", "roles": [ "DRIVER" ], "nodeGroupConfig": { "numInstances": SIZE , "instanceNames": [ " CLUSTER NAME -np-q1gp", " CLUSTER NAME -np-xfc0" ], "imageUri": "https://www.googleapis.com/compute/v1/projects/cloud-dataproc-ci/global/images/dataproc-2-0-deb10-...-rc01", "machineTypeUri": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /zones/ REGION -a/machineTypes/n1-standard-4", "diskConfig": { "bootDiskSizeGb": 1000, "bootDiskType": "pd-standard" }, "managedGroupConfig": { "instanceTemplateName": "dataproc-2a8224d2-...", "instanceGroupManagerName": "dataproc-2a8224d2-..." }, "minCpuPlatform": "AUTOMATIC", "preemptibility": "NON PREEMPTIBLE" } }, "nodeGroupId": " NODE GROUP ID " } ] }, } Get driver node group cluster metadata You can use the gcloud dataproc node-groups describe command or the Managed Service for Apache Spark API to get driver node group metadata. gcloud gcloud dataproc node-groups describe NODE GROUP ID \ --cluster= CLUSTER NAME \ --region= REGION Required flags: NODE GROUP ID : You can run gcloud dataproc clusters describe CLUSTER NAME to list the node group ID.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://dataproc.googleapis.com/v1/projects/ PROJECT ID /regions/ REGION /clusters/ CLUSTER NAME nodeGroups/ Node GROUP ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /regions/ REGION /clusters/ CLUSTER NAME /nodeGroups/ NODE GROUP ID ", "roles": [ "DRIVER" ], "nodeGroupConfig": { "numInstances": 5, "imageUri": "https://www.googleapis.com/compute/v1/projects/cloud-dataproc-ci/global/images/dataproc-2-0-deb10-...-rc01", "machineTypeUri": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /zones/ REGION -a/machineTypes/n1-standard-4", "diskConfig": { "bootDiskSizeGb": 1000, "bootDiskType": "pd-standard" }, "managedGroupConfig": { "instanceTemplateName": "dataproc-driver-pool-mcia3j656h2fy", "instanceGroupManagerName": "dataproc-driver-pool-mcia3j656h2fy" }, "minCpuPlatform": "AUTOMATIC", "preemptibility": "NON PREEMPTIBLE" } } Resize a driver node group You can use the gcloud dataproc node-groups resize command or the Managed Service for Apache Spark API to add or remove driver nodes from a cluster driver node group. gcloud gcloud dataproc node-groups resize NODE GROUP ID \ --cluster= CLUSTER NAME \ --region= REGION \ --size= SIZE Required flags: NODE GROUP ID : You can run gcloud dataproc clusters describe CLUSTER NAME to list the node group ID.
- Driver node group compared to Spark cluster mode Feature Spark cluster mode Driver node group Worker node scale down Long-lived drivers run on the same worker nodes as short-lived containers, making scale down of workers using graceful decommission slow.
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).

