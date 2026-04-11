---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.129Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Preemptible worker boot disk size flag"
feature_slug: "preemptible-worker-boot-disk-size-flag"
latest_feature_date: "2016-07-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig"
keywords:
  - "preemptible"
  - "worker"
  - "boot"
  - "disk"
  - "size"
  - "flag"
  - "the"
  - "gcloud"
---

# Preemptible worker boot disk size flag

Product: Dataproc
Coverage: LOW

## Step 02 Summary

The gcloud --preemptible-worker-boot-disk-size flag lets users set the boot disk size of preemptible workers.

## Extended Definition

The gcloud --preemptible-worker-boot-disk-size flag lets users set the boot disk size of preemptible workers.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups](https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig)

## Supporting Pages

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- March 10, 2020 Change Added the following flags to gcloud dataproc clusters create and gcloud dataproc workflow-templates set-managed-cluster commands: --num-secondary-workers --num-secondary-worker-local-ssds --secondary-worker-boot-disk-size --secondary-worker-boot-disk-type --secondary-worker-accelerator Deprecated The following flags to gcloud dataproc clusters create and gcloud dataproc workflow-templates set-managed-cluster commands have been deprecated: --num-preemptible-workers --num-preemptible-worker-local-ssds --preemptible-worker-boot-disk-size --preemptible-worker-boot-disk-type --preemptible-worker-accelerator See the related change, above, for the new flags to use in place of these deprecated flags.
- Decreased job startup time for SparkSQL jobs with partitioned/nested directories by applying a patch for Spark ( SPARK-9926 ) Further optimized job startup time for any job with a lot of file inputs by applying a patch for Hadoop ( HADOOP-12810 ) Feature gcloud command-line tool Added the flag --preemptible-worker-boot-disk-size which can be used to adjust the boot disk size of preemptible workers.
- Feature Preemptible boot disk sizes - The disk size for preemptible workers can now be set via the gcloud command-line tool at cluster creation, even when preemptibles are not added to a cluster using the commend --preemptible-worker-boot-disk-size .
- The --preemptible-worker-boot-disk-size command no longer requires that you specify 0 preemptible workers if you do not want to add preemptible machines when you create a cluster.

### Managed Service for Apache Spark driver node groups \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups](https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups)
- Source ID: `site-iam-reference`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://dataproc.googleapis.com/v1/projects/ PROJECT ID /regions/ REGION /clusters" Select-Object -Expand Content You should receive a JSON response similar to the following: { "projectId": " PROJECT ID ", "clusterName": " CLUSTER NAME ", "config": { ... "auxiliaryNodeGroups": [ { "nodeGroup": { "name": "projects/ PROJECT ID /regions/ REGION /clusters/ CLUSTER NAME /nodeGroups/ NODE GROUP ID ", "roles": [ "DRIVER" ], "nodeGroupConfig": { "numInstances": SIZE , "instanceNames": [ " CLUSTER NAME -np-q1gp", " CLUSTER NAME -np-xfc0" ], "imageUri": "https://www.googleapis.com/compute/v1/projects/cloud-dataproc-ci/global/images/dataproc-2-0-deb10-...-rc01", "machineTypeUri": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /zones/ REGION -a/machineTypes/n1-standard-4", "diskConfig": { "bootDiskSizeGb": 1000, "bootDiskType": "pd-standard" }, "managedGroupConfig": { "instanceTemplateName": "dataproc-2a8224d2-...", "instanceGroupManagerName": "dataproc-2a8224d2-..." }, "minCpuPlatform": "AUTOMATIC", "preemptibility": "NON PREEMPTIBLE" } }, "nodeGroupId": " NODE GROUP ID " } ] }, } Get driver node group cluster metadata You can use the gcloud dataproc node-groups describe command or the Managed Service for Apache Spark API to get driver node group metadata. gcloud gcloud dataproc node-groups describe NODE GROUP ID \ --cluster= CLUSTER NAME \ --region= REGION Required flags: NODE GROUP ID : You can run gcloud dataproc clusters describe CLUSTER NAME to list the node group ID.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://dataproc.googleapis.com/v1/projects/ PROJECT ID /regions/ REGION /clusters/ CLUSTER NAME nodeGroups/ Node GROUP ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /regions/ REGION /clusters/ CLUSTER NAME /nodeGroups/ NODE GROUP ID ", "roles": [ "DRIVER" ], "nodeGroupConfig": { "numInstances": 5, "imageUri": "https://www.googleapis.com/compute/v1/projects/cloud-dataproc-ci/global/images/dataproc-2-0-deb10-...-rc01", "machineTypeUri": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /zones/ REGION -a/machineTypes/n1-standard-4", "diskConfig": { "bootDiskSizeGb": 1000, "bootDiskType": "pd-standard" }, "managedGroupConfig": { "instanceTemplateName": "dataproc-driver-pool-mcia3j656h2fy", "instanceGroupManagerName": "dataproc-driver-pool-mcia3j656h2fy" }, "minCpuPlatform": "AUTOMATIC", "preemptibility": "NON PREEMPTIBLE" } } Resize a driver node group You can use the gcloud dataproc node-groups resize command or the Managed Service for Apache Spark API to add or remove driver nodes from a cluster driver node group. gcloud gcloud dataproc node-groups resize NODE GROUP ID \ --cluster= CLUSTER NAME \ --region= REGION \ --size= SIZE Required flags: NODE GROUP ID : You can run gcloud dataproc clusters describe CLUSTER NAME to list the node group ID.
- When specifying an accelerator, the GPU type is required; the number of GPUs is optional. --num-driver-pool-local-ssds No default --driver-pool-local-ssd-interface No default --driver-pool-boot-disk-type pd-standard --driver-pool-boot-disk-size 1000 GB --driver-pool-min-cpu-platform AUTOMATIC REST Complete a AuxiliaryNodeGroup as part of a Managed Service for Apache Spark API cluster.create request.
- Note: Managed Service for Apache Spark driver node groups are supported in clusters created with 2.0.52 and later image versions . gcloud gcloud dataproc clusters create CLUSTER NAME \ --region= REGION \ --driver-pool-size= SIZE \ --driver-pool-id= NODE GROUP ID Required flags: CLUSTER NAME : The cluster name, which must be unique within a project.

### "InstanceGroupConfig \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig)
- Source ID: `site-docs-reference`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- Size in GB of the boot disk (default is 500GB). numLocalSsds integer Optional.
- JSON representation DiskConfig JSON representation AttachedDiskConfig JSON representation DiskType Preemptibility ManagedGroupConfig JSON representation AcceleratorConfig JSON representation InstanceFlexibilityPolicy JSON representation ProvisioningModelMix JSON representation InstanceSelection JSON representation InstanceSelectionResult JSON representation StartupConfig JSON representation The config settings for Compute Engine resources in an instance group, such as a master or worker group.
- JSON representation { "bootDiskType" : string , "bootDiskSizeGb" : integer , "numLocalSsds" : integer , "localSsdInterface" : string , "attachedDiskConfigs" : [ { object ( AttachedDiskConfig ) } ] , "bootDiskProvisionedIops" : string , "bootDiskProvisionedThroughput" : string } Fields bootDiskType string Optional.
- If one or more SSDs are attached, this runtime bulk data is spread across them, and the boot disk contains only basic config and installed binaries.

