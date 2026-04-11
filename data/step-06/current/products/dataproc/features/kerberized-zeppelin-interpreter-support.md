---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.072Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Kerberized Zeppelin interpreter support"
feature_slug: "kerberized-zeppelin-interpreter-support"
latest_feature_date: "2020-07-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-start-stop"
  - "https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups"
keywords:
  - "kerberized"
  - "zeppelin"
  - "interpreter"
  - "dataproc"
  - "clusters"
  - "spark"
  - "and"
  - "shell"
---

# Kerberized Zeppelin interpreter support

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Kerberized Dataproc clusters support Zeppelin Spark and shell interpreters by default.

## Extended Definition

Kerberized Dataproc clusters support Zeppelin Spark and shell interpreters by default.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-start-stop](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-start-stop)
- [https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups](https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups)

## Supporting Pages

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Feature Added support for Zeppelin Spark and shell interpreters in Kerberized clusters by default.
- February 10, 2025 Announcement Dataproc on Compute Engine: To help diagnose Dataproc clusters, you can set the following cluster properties to true when you create a cluster : dataproc:diagnostic.capture.enabled : When set to true , enables the collection of checkpoint data in the cluster temp bucket . dataproc:dataproc.logging.extended.enabled : When set to true , enables the collection of logs for the Knox, Zeppelin, Solr, Trino, Presto, Ranger-usersync, Jupyter notebook components and the Spark History-Server in Cloud Logging . dataproc:dataproc.logging.syslog.enabled : When set to true , enables the collection of VM syslogs in Cloud Logging .
- Announcement Dataproc on Compute Engine: Starting August 18, 2025, the following diagnostic properties will be enabled by default for newly created Dataproc clusters: dataproc:diagnostic.capture.enabled : Enables the collection of checkpoint data in the cluster temp bucket . dataproc:dataproc.logging.extended.enabled : Enables the collection of logs for the Knox, Zeppelin, Ranger-usersync, Jupyter notebook, Jupyter kernel gateway components and the Spark History-Server in Cloud Logging . dataproc:dataproc.logging.syslog.enabled : Enables the collection of VM syslogs in Cloud Logging .
- Change Dataproc on Compute Engine: The following diagnostic properties are now enabled by default for new Dataproc clusters created with 2.0+ image versions: dataproc:diagnostic.capture.enabled : Collects checkpoint diagnostic data in the cluster temp bucket . dataproc:dataproc.logging.extended.enabled : Collects logs for the Knox, Zeppelin, Ranger-usersync, Jupyter notebook, Jupyter kernel gateway components and the Spark History-Server in Cloud Logging . dataproc:dataproc.logging.syslog.enabled : Collects VM syslogs in Cloud Logging .

### "Stop and start clusters \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-start-stop](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-start-stop)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Google Cloud console Click the cluster name from the Managed Service for Apache Spark Clusters page in the Google Cloud console, then click STOP to stop and START to start the cluster. gcloud CLI Stop a cluster gcloud dataproc clusters stop CLUSTER NAME \ --region= REGION Start a cluster gcloud dataproc clusters start CLUSTER NAME \ --region= REGION REST API Stop a cluster Submit a clusters.stop request.
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- Home Documentation Data analytics Managed Service for Apache Spark Guides Send feedback Stop and start clusters Stay organized with collections Save and categorize content based on your preferences.
- You can use the gcloud dataproc clusters describe cluster-name command to monitor the transitioning of the cluster's status from RUNNING to STOPPING to STOPPED .

### Managed Service for Apache Spark driver node groups \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups](https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups)
- Source ID: `site-iam-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://dataproc.googleapis.com/v1/projects/ PROJECT ID /regions/ REGION /clusters" Select-Object -Expand Content You should receive a JSON response similar to the following: { "projectId": " PROJECT ID ", "clusterName": " CLUSTER NAME ", "config": { ... "auxiliaryNodeGroups": [ { "nodeGroup": { "name": "projects/ PROJECT ID /regions/ REGION /clusters/ CLUSTER NAME /nodeGroups/ NODE GROUP ID ", "roles": [ "DRIVER" ], "nodeGroupConfig": { "numInstances": SIZE , "instanceNames": [ " CLUSTER NAME -np-q1gp", " CLUSTER NAME -np-xfc0" ], "imageUri": "https://www.googleapis.com/compute/v1/projects/cloud-dataproc-ci/global/images/dataproc-2-0-deb10-...-rc01", "machineTypeUri": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /zones/ REGION -a/machineTypes/n1-standard-4", "diskConfig": { "bootDiskSizeGb": 1000, "bootDiskType": "pd-standard" }, "managedGroupConfig": { "instanceTemplateName": "dataproc-2a8224d2-...", "instanceGroupManagerName": "dataproc-2a8224d2-..." }, "minCpuPlatform": "AUTOMATIC", "preemptibility": "NON PREEMPTIBLE" } }, "nodeGroupId": " NODE GROUP ID " } ] }, } Get driver node group cluster metadata You can use the gcloud dataproc node-groups describe command or the Managed Service for Apache Spark API to get driver node group metadata. gcloud gcloud dataproc node-groups describe NODE GROUP ID \ --cluster= CLUSTER NAME \ --region= REGION Required flags: NODE GROUP ID : You can run gcloud dataproc clusters describe CLUSTER NAME to list the node group ID.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://dataproc.googleapis.com/v1/projects/ PROJECT ID /regions/ REGION /clusters/ CLUSTER NAME nodeGroups/ Node GROUP ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /regions/ REGION /clusters/ CLUSTER NAME /nodeGroups/ NODE GROUP ID ", "roles": [ "DRIVER" ], "nodeGroupConfig": { "numInstances": 5, "imageUri": "https://www.googleapis.com/compute/v1/projects/cloud-dataproc-ci/global/images/dataproc-2-0-deb10-...-rc01", "machineTypeUri": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /zones/ REGION -a/machineTypes/n1-standard-4", "diskConfig": { "bootDiskSizeGb": 1000, "bootDiskType": "pd-standard" }, "managedGroupConfig": { "instanceTemplateName": "dataproc-driver-pool-mcia3j656h2fy", "instanceGroupManagerName": "dataproc-driver-pool-mcia3j656h2fy" }, "minCpuPlatform": "AUTOMATIC", "preemptibility": "NON PREEMPTIBLE" } } Resize a driver node group You can use the gcloud dataproc node-groups resize command or the Managed Service for Apache Spark API to add or remove driver nodes from a cluster driver node group. gcloud gcloud dataproc node-groups resize NODE GROUP ID \ --cluster= CLUSTER NAME \ --region= REGION \ --size= SIZE Required flags: NODE GROUP ID : You can run gcloud dataproc clusters describe CLUSTER NAME to list the node group ID.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://dataproc.googleapis.com/v1/projects/ PROJECT ID /regions/ REGION /clusters/ CLUSTER NAME /nodeGroups/ Node GROUP ID :resize" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /regions/ REGION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.dataproc.v1.NodeGroupOperationMetadata", "nodeGroupId": " NODE GROUP ID ", "clusterUuid": " CLUSTER UUID ", "status": { "state": "PENDING", "innerState": "PENDING", "stateStartTime": "2022-12-01T23:34:53.064308Z" }, "operationType": "RESIZE", "description": "Scale "up or "down" a GCE node pool to SIZE nodes." } } Delete a driver node group cluster When you delete a Managed Service for Apache Spark cluster , node groups associated with the cluster are deleted.
- HTTP method and URL: POST https://dataproc.googleapis.com/v1/projects/ PROJECT ID /regions/ REGION /jobs:submit Request JSON body: { "job": { "placement": { "clusterName": " CLUSTER NAME ", }, "driverSchedulingConfig": { " memoryMb ]": DRIVER MEMORY , " vcores ": DRIVER VCORES }, "sparkJob": { "jarFileUris": "file:///usr/lib/spark/examples/jars/spark-examples.jar", "args": [ "10000" ], "mainClass": "org.apache.spark.examples.SparkPi" } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

