---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.197Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "PD-SSD boot disks"
feature_slug: "pd-ssd-boot-disks"
latest_feature_date: "2018-06-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups"
  - "https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig"
keywords:
  - "disks"
  - "boot"
  - "clusters"
---

# PD-SSD boot disks

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

PD-SSD boot disks let Dataproc clusters use persistent SSD boot disks for master and worker nodes; PD-SSD boot disks let Dataproc clusters use persistent SSD boot disks for master and worker nodes.

## Extended Definition

PD-SSD boot disks let Dataproc clusters use persistent SSD boot disks for master and worker nodes; PD-SSD boot disks let Dataproc clusters use persistent SSD boot disks for master and worker nodes.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups](https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups)
- [https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels](https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig)

## Supporting Pages

### Managed Service for Apache Spark driver node groups \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups](https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups)
- Source ID: `site-iam-reference`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://dataproc.googleapis.com/v1/projects/ PROJECT ID /regions/ REGION /clusters" Select-Object -Expand Content You should receive a JSON response similar to the following: { "projectId": " PROJECT ID ", "clusterName": " CLUSTER NAME ", "config": { ... "auxiliaryNodeGroups": [ { "nodeGroup": { "name": "projects/ PROJECT ID /regions/ REGION /clusters/ CLUSTER NAME /nodeGroups/ NODE GROUP ID ", "roles": [ "DRIVER" ], "nodeGroupConfig": { "numInstances": SIZE , "instanceNames": [ " CLUSTER NAME -np-q1gp", " CLUSTER NAME -np-xfc0" ], "imageUri": "https://www.googleapis.com/compute/v1/projects/cloud-dataproc-ci/global/images/dataproc-2-0-deb10-...-rc01", "machineTypeUri": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /zones/ REGION -a/machineTypes/n1-standard-4", "diskConfig": { "bootDiskSizeGb": 1000, "bootDiskType": "pd-standard" }, "managedGroupConfig": { "instanceTemplateName": "dataproc-2a8224d2-...", "instanceGroupManagerName": "dataproc-2a8224d2-..." }, "minCpuPlatform": "AUTOMATIC", "preemptibility": "NON PREEMPTIBLE" } }, "nodeGroupId": " NODE GROUP ID " } ] }, } Get driver node group cluster metadata You can use the gcloud dataproc node-groups describe command or the Managed Service for Apache Spark API to get driver node group metadata. gcloud gcloud dataproc node-groups describe NODE GROUP ID \ --cluster= CLUSTER NAME \ --region= REGION Required flags: NODE GROUP ID : You can run gcloud dataproc clusters describe CLUSTER NAME to list the node group ID.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://dataproc.googleapis.com/v1/projects/ PROJECT ID /regions/ REGION /clusters/ CLUSTER NAME nodeGroups/ Node GROUP ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /regions/ REGION /clusters/ CLUSTER NAME /nodeGroups/ NODE GROUP ID ", "roles": [ "DRIVER" ], "nodeGroupConfig": { "numInstances": 5, "imageUri": "https://www.googleapis.com/compute/v1/projects/cloud-dataproc-ci/global/images/dataproc-2-0-deb10-...-rc01", "machineTypeUri": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /zones/ REGION -a/machineTypes/n1-standard-4", "diskConfig": { "bootDiskSizeGb": 1000, "bootDiskType": "pd-standard" }, "managedGroupConfig": { "instanceTemplateName": "dataproc-driver-pool-mcia3j656h2fy", "instanceGroupManagerName": "dataproc-driver-pool-mcia3j656h2fy" }, "minCpuPlatform": "AUTOMATIC", "preemptibility": "NON PREEMPTIBLE" } } Resize a driver node group You can use the gcloud dataproc node-groups resize command or the Managed Service for Apache Spark API to add or remove driver nodes from a cluster driver node group. gcloud gcloud dataproc node-groups resize NODE GROUP ID \ --cluster= CLUSTER NAME \ --region= REGION \ --size= SIZE Required flags: NODE GROUP ID : You can run gcloud dataproc clusters describe CLUSTER NAME to list the node group ID.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://dataproc.googleapis.com/v1/projects/ PROJECT ID /regions/ REGION /clusters/ CLUSTER NAME /nodeGroups/ Node GROUP ID :resize" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /regions/ REGION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.dataproc.v1.NodeGroupOperationMetadata", "nodeGroupId": " NODE GROUP ID ", "clusterUuid": " CLUSTER UUID ", "status": { "state": "PENDING", "innerState": "PENDING", "stateStartTime": "2022-12-01T23:34:53.064308Z" }, "operationType": "RESIZE", "description": "Scale "up or "down" a GCE node pool to SIZE nodes." } } Delete a driver node group cluster When you delete a Managed Service for Apache Spark cluster , node groups associated with the cluster are deleted.
- HTTP method and URL: POST https://dataproc.googleapis.com/v1/projects/ PROJECT ID /regions/ REGION /clusters Request JSON body: { "clusterName":" CLUSTER NAME ", "config": { "softwareConfig": { "imageVersion":"" }, "endpointConfig": { "enableHttpPortAccess": true }, "auxiliaryNodeGroups": [{ "nodeGroup":{ "roles":["DRIVER"], "nodeGroupConfig": { "numInstances": SIZE } }, "nodeGroupId": " NODE GROUP ID " }] } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### "Create and manage Labels \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels](https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels)
- Source ID: `site-docs-root`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- Here is the JSON body of a cluster.create request that includes attaches a key1:value label to the cluster. { "clusterName":"cluster-1", "projectId":"my-project", "config":{ "configBucket":"", "gceClusterConfig":{ "networkUri":".../networks/default", "zoneUri":".../zones/us-central1-f" }, "masterConfig":{ "numInstances":1, "machineTypeUri":"..../machineTypes/n1-standard-4", "diskConfig":{ "bootDiskSizeGb":500, "numLocalSsds":0 } }, "workerConfig":{ "numInstances":2, "machineTypeUri":"...machineTypes/n1-standard-4", "diskConfig":{ "bootDiskSizeGb":500, "numLocalSsds":0 } } }, "labels":{ "key1":"value1" } } The clusters.list and jobs.list APIs can be used to list clusters or jobs that match a specified filter, using the following format: labels.<key=value> .
- For example, if you scale up the cluster, all new primary and secondary workers will have the new labels. gcloud Command You can specify one or more labels to be applied to a Managed Service for Apache Spark cluster or job at creation or submit time using the Google Cloud CLI. gcloud dataproc clusters create args --labels environment=production,customer=acme gcloud dataproc jobs submit args --labels environment=production,customer=acme Once a Managed Service for Apache Spark cluster or job has been created, you can update the labels associated with that resource using the Google Cloud CLI. gcloud dataproc clusters update args --update-labels environment=production,customer=acme gcloud dataproc jobs update args --update-labels environment=production,customer=acme Similarly, you can use the Google Cloud CLI to filter Managed Service for Apache Spark resources by label using a filter expression of the following format: labels.<key=value> . gcloud dataproc clusters list \ --region= region \ --filter="status.state=ACTIVE AND labels.environment=production" gcloud dataproc jobs list \ --region= region \ --filter="status.state=ACTIVE AND labels.customer=acme" See the clusters.list and jobs.list Dataproc API documentation for more information on writing a filter expression.
- Common uses of labels Here are some common use cases for labels: Team or cost center labels : Add labels based on team or cost center to distinguish Managed Service for Apache Spark clusters and jobs owned by different teams (for example, team:research and team:analytics ).
- Once a resource is associated with a label, the label is propagated to operations performed on the resource—cluster create, update, patch, or delete; job submit, update, cancel, or delete—allowing you to filter and list clusters, jobs, and operations by label.

### "InstanceGroupConfig \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig)
- Source ID: `site-docs-reference`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "bootDiskType" : string , "bootDiskSizeGb" : integer , "numLocalSsds" : integer , "localSsdInterface" : string , "attachedDiskConfigs" : [ { object ( AttachedDiskConfig ) } ] , "bootDiskProvisionedIops" : string , "bootDiskProvisionedThroughput" : string } Fields bootDiskType string Optional.
- See Disk types . bootDiskSizeGb integer Optional.
- JSON representation { "diskType" : enum ( DiskType ) , "diskSizeGb" : integer , "provisionedIops" : string , "provisionedThroughput" : string } Fields diskType enum ( DiskType ) Optional.
- If one or more SSDs are attached, this runtime bulk data is spread across them, and the boot disk contains only basic config and installed binaries.

