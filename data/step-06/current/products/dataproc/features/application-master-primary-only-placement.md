---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.104Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Application master primary-only placement"
feature_slug: "application-master-primary-only-placement"
latest_feature_date: "2018-09-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc/docs/guides/create-cluster"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig"
keywords:
  - "application"
  - "master"
  - "primary"
  - "only"
  - "placement"
  - "the"
  - "am"
  - "cluster"
---

# Application master primary-only placement

Product: Dataproc
Coverage: LOW

## Step 02 Summary

The am.primary_only cluster property prevents the application master from running on preemptible workers.

## Extended Definition

The am.primary_only cluster property prevents the application master from running on preemptible workers.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/dataproc/docs/guides/create-cluster](https://docs.cloud.google.com/dataproc/docs/guides/create-cluster)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)

## Supporting Pages

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Image 1.3 only: Cloud Storage connector upgrade (for more information, review the change notes in the GitHub repository): Cloud Storage connector has been upgraded to 1.9.7 version Image 1.0-1.2 only: Cloud Storage and BigQuery connector upgrades (for more information, review the change notes in the GitHub repository): Cloud Storage connector has been upgraded to 1.6.10 version BigQuery connector has been upgraded to 0.10.11 version Feature Feature (1.2+) - Enabled new dataproc:am.primary only cluster property to prevent application master from running on preemptible workers.
- Disallowed using the dataproc:am.primary only cluster property with autoscaling since this property, which restricts the scheduling of app masters to primary workers, uses YARN Node Labels .
- To use the cluster property, set --properties dataproc:am.primary only=true when creating a cluster.
- April 04, 2024 Announcement New Dataproc Serverless for Spark runtime versions : 1.1.57 1.2.1 2.0.65 2.1.44 2.2.1 Change Added bigframes Python package by default in the Dataproc Serverless for Spark runtime versions 1.2 and 2.2 April 02, 2024 Announcement The following previously released sub-minor versions of Dataproc on Compute Engine images have been rolled back and can only be used when updating existing clusters that already use them: 2.0.97-debian10, 2.0.97-rocky8, 2.0.97-ubuntu18 2.1.45-debian11, 2.1.45-rocky8, 2.1.45-ubuntu20, 2.1.45-ubuntu20-arm 2.2.11-debian12, 2.2.11-rocky9, 2.2.11-ubuntu22 March 29, 2024 Breaking Dataproc Serverless for Spark: runtime version 2.2 will become the default Dataproc Serverless for Spark runtime version on May 3, 2024.

### "Create a cluster \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/create-cluster](https://docs.cloud.google.com/dataproc/docs/guides/create-cluster)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://dataproc.googleapis.com/v1/projects/ PROJECT /regions/ REGION /clusters" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT /regions/ REGION /operations/b5706e31......", "metadata": { "@type": "type.googleapis.com/google.cloud.dataproc.v1.ClusterOperationMetadata", "clusterName": " CLUSTER NAME ", "clusterUuid": "5fe882b2-...", "status": { "state": "PENDING", "innerState": "PENDING", "stateStartTime": "2019-11-21T00:37:56.220Z" }, "operationType": "CREATE", "description": "Create cluster with 2 workers", "warnings": [ "For PD-Standard without local SSDs, we strongly recommend provisioning 1TB ..."" ] } } Note: You can click the Equivalent REST or command line links at the bottom of the left panel of the Managed Service for Apache Spark Google Cloud console Create a cluster page to have the Console construct an equivalent API REST request or gcloud tool command to use in your code or from the command line to create a cluster.
- ClusterControllerClient ( client options = { "api endpoint" : f " { region } -dataproc.googleapis.com:443" } ) Create the cluster config. cluster = { "project id" : project id , "cluster name" : cluster name , "config" : { "master config" : { "num instances" : 1 , "machine type uri" : "n1-standard-2" }, "worker config" : { "num instances" : 2 , "machine type uri" : "n1-standard-2" }, }, } Create the cluster. operation = cluster client . create cluster ( request = { "project id" : project id , "region" : region , "cluster" : cluster } ) result = operation . result () Output a success message. print ( f "Cluster created successfully: { result . cluster name } " ) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- HTTP method and URL: POST https://dataproc.googleapis.com/v1/projects/ PROJECT /regions/ REGION /clusters Request JSON body: { "project id":" PROJECT ", "cluster name":" CLUSTER NAME ", "config":{ "master config":{ "num instances":1, "machine type uri":"n1-standard-2", "image uri":"" }, "softwareConfig": { "imageVersion": "", "properties": {}, "optionalComponents": [] }, "worker config":{ "num instances":2, "machine type uri":"n1-standard-2", "image uri":"" }, "gce cluster config":{ "zone uri":" ZONE " } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- ClusterControllerClient ({ apiEndpoint : ${ region } -dataproc.googleapis.com , projectId : projectId , }); async function createCluster () { // Create the cluster config const request = { projectId : projectId , region : region , cluster : { clusterName : clusterName , config : { masterConfig : { numInstances : 1 , machineTypeUri : 'n1-standard-2' , }, workerConfig : { numInstances : 2 , machineTypeUri : 'n1-standard-2' , }, }, }, }; // Create the cluster const [ operation ] = await client . createCluster ( request ); const [ response ] = await operation . promise (); // Output a success message console . log ( Cluster created successfully: ${ response . clusterName } ` ); Python Install the client library.

### "ClusterConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- Source ID: `site-docs-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Either the exact time the cluster should be stopped at or the cluster maximum age. stop ttl can be only one of the following: autoStopTime string ( Timestamp format) Optional.
- Either the exact time the cluster should be deleted at or the cluster maximum age. ttl can be only one of the following: autoDeleteTime string ( Timestamp format) Optional.
- When this key resource name is provided, the following job arguments of the following job types submitted to the cluster are encrypted using CMEK: FlinkJob args HadoopJob args SparkJob args SparkRJob args PySparkJob args SparkSqlJob scriptVariables and queryList.queries HiveJob scriptVariables and queryList.queries PigJob scriptVariables and queryList.queries PrestoJob scriptVariables and queryList.queries AutoscalingConfig Autoscaling Policy config associated with the cluster.
- Examples: yarn:ResourceManager:QueueMetrics:AppsCompleted spark:driver:DAGScheduler:job.allJobs sparkHistoryServer:JVM:Memory:NonHeapMemoryUsage.committed hiveserver2:JVM:Memory:NonHeapMemoryUsage.used Notes: Only the specified overridden metrics are collected for the metric source.

