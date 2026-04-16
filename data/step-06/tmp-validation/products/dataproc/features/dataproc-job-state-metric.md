---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.122Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Dataproc job state metric"
feature_slug: "dataproc-job-state-metric"
latest_feature_date: "2022-12-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-alerts"
  - "https://docs.cloud.google.com/dataproc/docs/guides/create-cluster"
keywords:
  - "googleapis"
  - "state"
  - "monitoring"
  - "metric"
  - "provides"
---

# Dataproc job state metric

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc provides the dataproc.googleapis.com/job/state metric for monitoring job states and querying job IDs in MQL.

## Extended Definition

Dataproc provides the dataproc.googleapis.com/job/state metric for monitoring job states and querying job IDs in MQL.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups](https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-alerts](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-alerts)
- [https://docs.cloud.google.com/dataproc/docs/guides/create-cluster](https://docs.cloud.google.com/dataproc/docs/guides/create-cluster)

## Supporting Pages

### Managed Service for Apache Spark driver node groups \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups](https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups)
- Source ID: `site-iam-reference`
- Final score: 249
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://dataproc.googleapis.com/v1/projects/ PROJECT ID /regions/ REGION /clusters/ CLUSTER NAME /nodeGroups/ Node GROUP ID :resize" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /regions/ REGION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.dataproc.v1.NodeGroupOperationMetadata", "nodeGroupId": " NODE GROUP ID ", "clusterUuid": " CLUSTER UUID ", "status": { "state": "PENDING", "innerState": "PENDING", "stateStartTime": "2022-12-01T23:34:53.064308Z" }, "operationType": "RESIZE", "description": "Scale "up or "down" a GCE node pool to SIZE nodes." } } Delete a driver node group cluster When you delete a Managed Service for Apache Spark cluster , node groups associated with the cluster are deleted.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://dataproc.googleapis.com/v1/projects/ PROJECT ID /regions/ REGION /jobs:submit" Select-Object -Expand Content You should receive a JSON response similar to the following: { "reference": { "projectId": " PROJECT ID ", "jobId": "job-id" }, "placement": { "clusterName": " CLUSTER NAME ", "clusterUuid": "cluster-Uuid" }, "sparkJob": { "mainClass": "org.apache.spark.examples.SparkPi", "args": [ "1000" ], "jarFileUris": [ "file:///usr/lib/spark/examples/jars/spark-examples.jar" ] }, "status": { "state": "PENDING", "stateStartTime": "start-time" }, "jobUuid": "job-Uuid" } Python Install the client library Set up application default credentials Run the code See Setting Up a Python Development Environment .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://dataproc.googleapis.com/v1/projects/ PROJECT ID /regions/ REGION /clusters" Select-Object -Expand Content You should receive a JSON response similar to the following: { "projectId": " PROJECT ID ", "clusterName": " CLUSTER NAME ", "config": { ... "auxiliaryNodeGroups": [ { "nodeGroup": { "name": "projects/ PROJECT ID /regions/ REGION /clusters/ CLUSTER NAME /nodeGroups/ NODE GROUP ID ", "roles": [ "DRIVER" ], "nodeGroupConfig": { "numInstances": SIZE , "instanceNames": [ " CLUSTER NAME -np-q1gp", " CLUSTER NAME -np-xfc0" ], "imageUri": "https://www.googleapis.com/compute/v1/projects/cloud-dataproc-ci/global/images/dataproc-2-0-deb10-...-rc01", "machineTypeUri": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /zones/ REGION -a/machineTypes/n1-standard-4", "diskConfig": { "bootDiskSizeGb": 1000, "bootDiskType": "pd-standard" }, "managedGroupConfig": { "instanceTemplateName": "dataproc-2a8224d2-...", "instanceGroupManagerName": "dataproc-2a8224d2-..." }, "minCpuPlatform": "AUTOMATIC", "preemptibility": "NON PREEMPTIBLE" } }, "nodeGroupId": " NODE GROUP ID " } ] }, } Get driver node group cluster metadata You can use the gcloud dataproc node-groups describe command or the Managed Service for Apache Spark API to get driver node group metadata. gcloud gcloud dataproc node-groups describe NODE GROUP ID \ --cluster= CLUSTER NAME \ --region= REGION Required flags: NODE GROUP ID : You can run gcloud dataproc clusters describe CLUSTER NAME to list the node group ID.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://dataproc.googleapis.com/v1/projects/ PROJECT ID /regions/ REGION /clusters/ CLUSTER NAME nodeGroups/ Node GROUP ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /regions/ REGION /clusters/ CLUSTER NAME /nodeGroups/ NODE GROUP ID ", "roles": [ "DRIVER" ], "nodeGroupConfig": { "numInstances": 5, "imageUri": "https://www.googleapis.com/compute/v1/projects/cloud-dataproc-ci/global/images/dataproc-2-0-deb10-...-rc01", "machineTypeUri": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /zones/ REGION -a/machineTypes/n1-standard-4", "diskConfig": { "bootDiskSizeGb": 1000, "bootDiskType": "pd-standard" }, "managedGroupConfig": { "instanceTemplateName": "dataproc-driver-pool-mcia3j656h2fy", "instanceGroupManagerName": "dataproc-driver-pool-mcia3j656h2fy" }, "minCpuPlatform": "AUTOMATIC", "preemptibility": "NON PREEMPTIBLE" } } Resize a driver node group You can use the gcloud dataproc node-groups resize command or the Managed Service for Apache Spark API to add or remove driver nodes from a cluster driver node group. gcloud gcloud dataproc node-groups resize NODE GROUP ID \ --cluster= CLUSTER NAME \ --region= REGION \ --size= SIZE Required flags: NODE GROUP ID : You can run gcloud dataproc clusters describe CLUSTER NAME to list the node group ID.

### "Create metric alerts \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-alerts](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-alerts)
- Source ID: `site-docs-root`
- Final score: 235
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can modify the query by filtering on the job id to apply it to a specific job: sum by (job id) ({ " name "="dataproc.googleapis.com/job/state", "monitored resource"="cloud dataproc job", "state"="ERROR", "job id"="1234567890" }) != 0 Cluster capacity deviation alert Managed Service for Apache Spark emits the dataproc.googleapis.com/cluster/capacity deviation metric, which reports the difference between the expected node count in the cluster and the active YARN node count.
- Failed Managed Service for Apache Spark job alert You can also use the dataproc.googleapis.com/job/state metric (see Long-running Managed Service for Apache Spark job alert ) to alert you when a Managed Service for Apache Spark job fails.
- Long-running Managed Service for Apache Spark job alert Managed Service for Apache Spark emits the dataproc.googleapis.com/job/state metric, which tracks how long a job has been in different states.
- You can modify the query by filtering on the job id to apply it to a specific job: sum by (job id) ({ " name "="dataproc.googleapis.com/job/state", "monitored resource"="cloud dataproc job", "state"="RUNNING", "job id"="1234567890" }) != 0 Long-running YARN application alert The previous sample shows an alert that is triggered when a Managed Service for Apache Spark job runs longer than a specified duration, but it only applies to jobs submitted to the Managed Service for Apache Spark service using the Google Cloud console, the Google Cloud CLI, or by direct calls to the Managed Service for Apache Spark jobs API.

### "Create a cluster \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/create-cluster](https://docs.cloud.google.com/dataproc/docs/guides/create-cluster)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://dataproc.googleapis.com/v1/projects/ PROJECT /regions/ REGION /clusters" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT /regions/ REGION /operations/b5706e31......", "metadata": { "@type": "type.googleapis.com/google.cloud.dataproc.v1.ClusterOperationMetadata", "clusterName": " CLUSTER NAME ", "clusterUuid": "5fe882b2-...", "status": { "state": "PENDING", "innerState": "PENDING", "stateStartTime": "2019-11-21T00:37:56.220Z" }, "operationType": "CREATE", "description": "Create cluster with 2 workers", "warnings": [ "For PD-Standard without local SSDs, we strongly recommend provisioning 1TB ..."" ] } } Note: You can click the Equivalent REST or command line links at the bottom of the left panel of the Managed Service for Apache Spark Google Cloud console Create a cluster page to have the Console construct an equivalent API REST request or gcloud tool command to use in your code or from the command line to create a cluster.
- ClusterControllerClient ( client options = { "api endpoint" : f " { region } -dataproc.googleapis.com:443" } ) Create the cluster config. cluster = { "project id" : project id , "cluster name" : cluster name , "config" : { "master config" : { "num instances" : 1 , "machine type uri" : "n1-standard-2" }, "worker config" : { "num instances" : 2 , "machine type uri" : "n1-standard-2" }, }, } Create the cluster. operation = cluster client . create cluster ( request = { "project id" : project id , "region" : region , "cluster" : cluster } ) result = operation . result () Output a success message. print ( f "Cluster created successfully: { result . cluster name } " ) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- HTTP method and URL: POST https://dataproc.googleapis.com/v1/projects/ PROJECT /regions/ REGION /clusters Request JSON body: { "project id":" PROJECT ", "cluster name":" CLUSTER NAME ", "config":{ "master config":{ "num instances":1, "machine type uri":"n1-standard-2", "image uri":"" }, "softwareConfig": { "imageVersion": "", "properties": {}, "optionalComponents": [] }, "worker config":{ "num instances":2, "machine type uri":"n1-standard-2", "image uri":"" }, "gce cluster config":{ "zone uri":" ZONE " } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- ClusterControllerClient ({ apiEndpoint : ${ region } -dataproc.googleapis.com , projectId : projectId , }); async function createCluster () { // Create the cluster config const request = { projectId : projectId , region : region , cluster : { clusterName : clusterName , config : { masterConfig : { numInstances : 1 , machineTypeUri : 'n1-standard-2' , }, workerConfig : { numInstances : 2 , machineTypeUri : 'n1-standard-2' , }, }, }, }; // Create the cluster const [ operation ] = await client . createCluster ( request ); const [ response ] = await operation . promise (); // Output a success message console . log ( Cluster created successfully: ${ response . clusterName } ` ); Python Install the client library.

