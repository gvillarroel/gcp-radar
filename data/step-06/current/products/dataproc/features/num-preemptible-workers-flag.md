---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.648Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "--num-preemptible-workers flag"
feature_slug: "num-preemptible-workers-flag"
latest_feature_date: "2020-03-18"
deprecation_date: "2020-03-18"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-gcloud"
  - "https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels"
  - "https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups"
keywords:
  - "num"
  - "preemptible"
  - "workers"
  - "flag"
  - "gcloud"
  - "dataproc"
  - "clusters"
  - "update"
---

# --num-preemptible-workers flag

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

The --num-preemptible-workers flag in gcloud dataproc clusters update configured the number of preemptible workers during cluster updates; deprecated on 2020-03-18.

## Extended Definition

The --num-preemptible-workers flag in gcloud dataproc clusters update configured the number of preemptible workers during cluster updates; deprecated on 2020-03-18.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-gcloud](https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-gcloud)
- [https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels](https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels)
- [https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups](https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups)

## Supporting Pages

### "Create a cluster by using the gcloud CLI \_|\_ Managed Service for Apache\

- URL: [https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-gcloud](https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-gcloud)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Update a cluster To change the number of workers in the cluster to five, run the following command: gcloud dataproc clusters update example-cluster \ --region= REGION \ --num-workers 5 The command output displays cluster details: workerConfig: ... instanceNames: - example-cluster-w-0 - example-cluster-w-1 - example-cluster-w-2 - example-cluster-w-3 - example-cluster-w-4 numInstances: 5 statusHistory: ... - detail: Add 3 workers.
- To decrease the number of worker nodes to the original value of 2 , run the following command: gcloud dataproc clusters update example-cluster \ --region= REGION \ --num-workers 2 Clean up To avoid incurring charges to your Google Cloud account for the resources used on this page, follow these steps.
- To use Cloud Shell, you need a Google Cloud project. gcloud dataproc clusters create example-cluster --region= REGION Replace the following: REGION : Specify a region where the cluster will be located.
- To delete the example-cluster , run the clusters delete command: gcloud dataproc clusters delete example-cluster \ --region= REGION What's next Learn how to write and run a Spark Scala job .

### "Create and manage Labels \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels](https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels)
- Source ID: `site-docs-root`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, if you scale up the cluster, all new primary and secondary workers will have the new labels. gcloud Command You can specify one or more labels to be applied to a Managed Service for Apache Spark cluster or job at creation or submit time using the Google Cloud CLI. gcloud dataproc clusters create args --labels environment=production,customer=acme gcloud dataproc jobs submit args --labels environment=production,customer=acme Once a Managed Service for Apache Spark cluster or job has been created, you can update the labels associated with that resource using the Google Cloud CLI. gcloud dataproc clusters update args --update-labels environment=production,customer=acme gcloud dataproc jobs update args --update-labels environment=production,customer=acme Similarly, you can use the Google Cloud CLI to filter Managed Service for Apache Spark resources by label using a filter expression of the following format: labels.<key=value> . gcloud dataproc clusters list \ --region= region \ --filter="status.state=ACTIVE AND labels.environment=production" gcloud dataproc jobs list \ --region= region \ --filter="status.state=ACTIVE AND labels.customer=acme" See the clusters.list and jobs.list Dataproc API documentation for more information on writing a filter expression.
- Label updates propagate to all preemptible secondary workers within 24 hours.
- Label updates don't propagate to existing non-preemptible secondary workers.
- Label Description goog-dataproc-cluster-name User-specified cluster name goog-dataproc-cluster-uuid Unique cluster ID goog-dataproc-location Managed Service for Apache Spark regional cluster endpoint You can use these automatically applied labels in many ways, including: Searching and filtering for Managed Service for Apache Spark resources Filtering billing data to calculate Managed Service for Apache Spark costs What's next Learn how to create and update labels for projects using the Resource Manager.

### Managed Service for Apache Spark driver node groups \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups](https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups)
- Source ID: `site-iam-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://dataproc.googleapis.com/v1/projects/ PROJECT ID /regions/ REGION /clusters" Select-Object -Expand Content You should receive a JSON response similar to the following: { "projectId": " PROJECT ID ", "clusterName": " CLUSTER NAME ", "config": { ... "auxiliaryNodeGroups": [ { "nodeGroup": { "name": "projects/ PROJECT ID /regions/ REGION /clusters/ CLUSTER NAME /nodeGroups/ NODE GROUP ID ", "roles": [ "DRIVER" ], "nodeGroupConfig": { "numInstances": SIZE , "instanceNames": [ " CLUSTER NAME -np-q1gp", " CLUSTER NAME -np-xfc0" ], "imageUri": "https://www.googleapis.com/compute/v1/projects/cloud-dataproc-ci/global/images/dataproc-2-0-deb10-...-rc01", "machineTypeUri": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /zones/ REGION -a/machineTypes/n1-standard-4", "diskConfig": { "bootDiskSizeGb": 1000, "bootDiskType": "pd-standard" }, "managedGroupConfig": { "instanceTemplateName": "dataproc-2a8224d2-...", "instanceGroupManagerName": "dataproc-2a8224d2-..." }, "minCpuPlatform": "AUTOMATIC", "preemptibility": "NON PREEMPTIBLE" } }, "nodeGroupId": " NODE GROUP ID " } ] }, } Get driver node group cluster metadata You can use the gcloud dataproc node-groups describe command or the Managed Service for Apache Spark API to get driver node group metadata. gcloud gcloud dataproc node-groups describe NODE GROUP ID \ --cluster= CLUSTER NAME \ --region= REGION Required flags: NODE GROUP ID : You can run gcloud dataproc clusters describe CLUSTER NAME to list the node group ID.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://dataproc.googleapis.com/v1/projects/ PROJECT ID /regions/ REGION /clusters/ CLUSTER NAME nodeGroups/ Node GROUP ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /regions/ REGION /clusters/ CLUSTER NAME /nodeGroups/ NODE GROUP ID ", "roles": [ "DRIVER" ], "nodeGroupConfig": { "numInstances": 5, "imageUri": "https://www.googleapis.com/compute/v1/projects/cloud-dataproc-ci/global/images/dataproc-2-0-deb10-...-rc01", "machineTypeUri": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /zones/ REGION -a/machineTypes/n1-standard-4", "diskConfig": { "bootDiskSizeGb": 1000, "bootDiskType": "pd-standard" }, "managedGroupConfig": { "instanceTemplateName": "dataproc-driver-pool-mcia3j656h2fy", "instanceGroupManagerName": "dataproc-driver-pool-mcia3j656h2fy" }, "minCpuPlatform": "AUTOMATIC", "preemptibility": "NON PREEMPTIBLE" } } Resize a driver node group You can use the gcloud dataproc node-groups resize command or the Managed Service for Apache Spark API to add or remove driver nodes from a cluster driver node group. gcloud gcloud dataproc node-groups resize NODE GROUP ID \ --cluster= CLUSTER NAME \ --region= REGION \ --size= SIZE Required flags: NODE GROUP ID : You can run gcloud dataproc clusters describe CLUSTER NAME to list the node group ID.
- Note: Managed Service for Apache Spark driver node groups are supported in clusters created with 2.0.52 and later image versions . gcloud gcloud dataproc clusters create CLUSTER NAME \ --region= REGION \ --driver-pool-size= SIZE \ --driver-pool-id= NODE GROUP ID Required flags: CLUSTER NAME : The cluster name, which must be unique within a project.
- Additional flags: The following optional driver-pool flags can be added to the gcloud dataproc clusters create command to customize the node group.

