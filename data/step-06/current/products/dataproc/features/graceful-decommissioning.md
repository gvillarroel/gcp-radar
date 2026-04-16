---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.679Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Graceful decommissioning"
feature_slug: "graceful-decommissioning"
latest_feature_date: "2017-08-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups"
  - "https://docs.cloud.google.com/dataproc/docs/guides/manage-cluster"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies"
keywords:
  - "graceful"
  - "decommissioning"
  - "lets"
  - "dataproc"
  - "remove"
  - "cluster"
  - "nodes"
  - "without"
---

# Graceful decommissioning

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Graceful decommissioning lets Dataproc remove cluster nodes without interrupting running YARN jobs by waiting up to a configured timeout.

## Extended Definition

Graceful decommissioning lets Dataproc remove cluster nodes without interrupting running YARN jobs by waiting up to a configured timeout.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups](https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups)
- [https://docs.cloud.google.com/dataproc/docs/guides/manage-cluster](https://docs.cloud.google.com/dataproc/docs/guides/manage-cluster)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies)

## Supporting Pages

### Managed Service for Apache Spark driver node groups \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups](https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups)
- Source ID: `site-iam-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://dataproc.googleapis.com/v1/projects/ PROJECT ID /regions/ REGION /clusters/ CLUSTER NAME nodeGroups/ Node GROUP ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /regions/ REGION /clusters/ CLUSTER NAME /nodeGroups/ NODE GROUP ID ", "roles": [ "DRIVER" ], "nodeGroupConfig": { "numInstances": 5, "imageUri": "https://www.googleapis.com/compute/v1/projects/cloud-dataproc-ci/global/images/dataproc-2-0-deb10-...-rc01", "machineTypeUri": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /zones/ REGION -a/machineTypes/n1-standard-4", "diskConfig": { "bootDiskSizeGb": 1000, "bootDiskType": "pd-standard" }, "managedGroupConfig": { "instanceTemplateName": "dataproc-driver-pool-mcia3j656h2fy", "instanceGroupManagerName": "dataproc-driver-pool-mcia3j656h2fy" }, "minCpuPlatform": "AUTOMATIC", "preemptibility": "NON PREEMPTIBLE" } } Resize a driver node group You can use the gcloud dataproc node-groups resize command or the Managed Service for Apache Spark API to add or remove driver nodes from a cluster driver node group. gcloud gcloud dataproc node-groups resize NODE GROUP ID \ --cluster= CLUSTER NAME \ --region= REGION \ --size= SIZE Required flags: NODE GROUP ID : You can run gcloud dataproc clusters describe CLUSTER NAME to list the node group ID.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://dataproc.googleapis.com/v1/projects/ PROJECT ID /regions/ REGION /clusters/ CLUSTER NAME /nodeGroups/ Node GROUP ID :resize" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /regions/ REGION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.dataproc.v1.NodeGroupOperationMetadata", "nodeGroupId": " NODE GROUP ID ", "clusterUuid": " CLUSTER UUID ", "status": { "state": "PENDING", "innerState": "PENDING", "stateStartTime": "2022-12-01T23:34:53.064308Z" }, "operationType": "RESIZE", "description": "Scale "up or "down" a GCE node pool to SIZE nodes." } } Delete a driver node group cluster When you delete a Managed Service for Apache Spark cluster , node groups associated with the cluster are deleted.
- Example: { "size": SIZE , "gracefulDecommissionTimeout": " TIMEOUT DURATION " } HTTP method and URL: POST https://dataproc.googleapis.com/v1/projects/ PROJECT ID /regions/ REGION /clusters/ CLUSTER NAME /nodeGroups/ Node GROUP ID :resize Request JSON body: { "size": SIZE , } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Example: gcloud CLI NodeGroup scale up command: gcloud dataproc node-groups resize NODE GROUP ID \ --cluster= CLUSTER NAME \ --region= REGION \ --size=4 Example: gcloud CLI NodeGroup scale down command: gcloud dataproc node-groups resize NODE GROUP ID \ --cluster= CLUSTER NAME \ --region= REGION \ --size=1 \ --graceful-decommission-timeout="100s" REST Before using any of the request data, make the following replacements: PROJECT ID : Required.

### "Manage a cluster \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/manage-cluster](https://docs.cloud.google.com/dataproc/docs/guides/manage-cluster)
- Source ID: `site-iam-reference`
- Final score: 116
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following cluster parameters can be updated: the number of standard worker nodes in a cluster—see Scaling clusters the number of secondary worker nodes in a cluster— see Managed Service for Apache Spark secondary workers whether to use graceful decommissioning to control shutting down a worker after its jobs are completed adding or deleting cluster labels Cluster update error Managed Service for Apache Spark issues an ERROR DUE TO UPDATE error when a cluster update operation fails.
- Google Cloud CLI To delete a Managed Service for Apache Spark cluster, use the gcloud CLI gcloud dataproc clusters delete command locally in a terminal window or in Cloud Shell . gcloud dataproc clusters delete cluster-name \ --region= region REST API Use the Managed Service for Apache Spark clusters.delete API to delete a cluster.
- Update a cluster You can update a cluster by issuing a Dataproc API clusters.patch request, running a gcloud dataproc clusters update command in a local terminal window or in Cloud Shell , or by editing cluster parameters from the Configuration tab of the Cluster details page for the cluster in the Google Cloud console .
- Delete a cluster You can delete a cluster via a Dataproc API clusters.delete HTTP or programmatic request, using the Google Cloud CLI gcloud command-line tool locally in a terminal window or in Cloud Shell , or from the Google Cloud console .

### "REST Resource: projects.locations.autoscalingPolicies \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies)
- Source ID: `site-docs-reference`
- Final score: 104
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resource: AutoscalingPolicy JSON representation BasicAutoscalingAlgorithm JSON representation BasicYarnAutoscalingConfig JSON representation InstanceGroupAutoscalingPolicyConfig JSON representation ClusterType Methods Resource: AutoscalingPolicy Describes an autoscaling policy for Dataproc cluster autoscaler.
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- ZERO SCALE Clusters that can use only secondary workers and be scaled down to zero secondary worker nodes.
- STANDARD Standard dataproc cluster with a minimum of two primary workers.

