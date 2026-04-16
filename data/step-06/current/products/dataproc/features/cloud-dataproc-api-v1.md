---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.701Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Cloud Dataproc API v1"
feature_slug: "cloud-dataproc-api-v1"
latest_feature_date: "2016-02-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1"
  - "https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups"
  - "https://docs.cloud.google.com/dataproc/docs/api-libraries-overview"
keywords:
  - "dataproc"
  - "v1"
  - "provides"
  - "live"
  - "regional"
  - "related"
  - "fixes"
---

# Cloud Dataproc API v1

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

The v1 Cloud Dataproc API provides the live general API with regional support and related fixes.

## Extended Definition

The v1 Cloud Dataproc API provides the live general API with regional support and related fixes.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- [https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups](https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups)
- [https://docs.cloud.google.com/dataproc/docs/api-libraries-overview](https://docs.cloud.google.com/dataproc/docs/api-libraries-overview)

## Supporting Pages

### "Overview of APIs and Client Libraries \_|\_ Managed Service for Apache Spark\

- URL: [https://docs.cloud.google.com/dataproc/docs/api-libraries-overview](https://docs.cloud.google.com/dataproc/docs/api-libraries-overview)
- Source ID: `site-docs-reference`
- Final score: 60
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- These "legacy" libraries access REST but not gRPC APIs (see Google API Client Libraries for additional information). gRPC : If a client library is not available for your programming language of choice, you can generate gRPC client libraries for Dataproc in any gRPC-supported language.
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).

### "Package com.google.cloud.dataproc.v1 (4.85.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- Source ID: `site-java-reference`
- Final score: 57
- Re-rank relevance: N/A

Evidence snippets:
- Node Group Controller Grpc The NodeGroupControllerService provides methods to manage node groups of Compute Engine managed instances. com. google. cloud. dataproc. v1.
- Async Service The NodeGroupControllerService provides methods to manage node groups of Compute Engine managed instances. com. google. cloud. dataproc. v1.
- Cluster Controller Grpc The ClusterControllerService provides methods to manage clusters of Compute Engine instances. com. google. cloud. dataproc. v1.
- Identity Config Identity related configuration, including service account based secure multi-tenancy user mappings. com. google. cloud. dataproc. v1.

### Managed Service for Apache Spark driver node groups \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups](https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups)
- Source ID: `site-iam-reference`
- Final score: 49
- Re-rank relevance: N/A

Evidence snippets:
- Additional flags: DATAPROC FLAGS : Add any additional gcloud dataproc jobs submit flags related to the job type.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://dataproc.googleapis.com/v1/projects/ PROJECT ID /regions/ REGION /clusters" Select-Object -Expand Content You should receive a JSON response similar to the following: { "projectId": " PROJECT ID ", "clusterName": " CLUSTER NAME ", "config": { ... "auxiliaryNodeGroups": [ { "nodeGroup": { "name": "projects/ PROJECT ID /regions/ REGION /clusters/ CLUSTER NAME /nodeGroups/ NODE GROUP ID ", "roles": [ "DRIVER" ], "nodeGroupConfig": { "numInstances": SIZE , "instanceNames": [ " CLUSTER NAME -np-q1gp", " CLUSTER NAME -np-xfc0" ], "imageUri": "https://www.googleapis.com/compute/v1/projects/cloud-dataproc-ci/global/images/dataproc-2-0-deb10-...-rc01", "machineTypeUri": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /zones/ REGION -a/machineTypes/n1-standard-4", "diskConfig": { "bootDiskSizeGb": 1000, "bootDiskType": "pd-standard" }, "managedGroupConfig": { "instanceTemplateName": "dataproc-2a8224d2-...", "instanceGroupManagerName": "dataproc-2a8224d2-..." }, "minCpuPlatform": "AUTOMATIC", "preemptibility": "NON PREEMPTIBLE" } }, "nodeGroupId": " NODE GROUP ID " } ] }, } Get driver node group cluster metadata You can use the gcloud dataproc node-groups describe command or the Managed Service for Apache Spark API to get driver node group metadata. gcloud gcloud dataproc node-groups describe NODE GROUP ID \ --cluster= CLUSTER NAME \ --region= REGION Required flags: NODE GROUP ID : You can run gcloud dataproc clusters describe CLUSTER NAME to list the node group ID.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://dataproc.googleapis.com/v1/projects/ PROJECT ID /regions/ REGION /clusters/ CLUSTER NAME nodeGroups/ Node GROUP ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /regions/ REGION /clusters/ CLUSTER NAME /nodeGroups/ NODE GROUP ID ", "roles": [ "DRIVER" ], "nodeGroupConfig": { "numInstances": 5, "imageUri": "https://www.googleapis.com/compute/v1/projects/cloud-dataproc-ci/global/images/dataproc-2-0-deb10-...-rc01", "machineTypeUri": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /zones/ REGION -a/machineTypes/n1-standard-4", "diskConfig": { "bootDiskSizeGb": 1000, "bootDiskType": "pd-standard" }, "managedGroupConfig": { "instanceTemplateName": "dataproc-driver-pool-mcia3j656h2fy", "instanceGroupManagerName": "dataproc-driver-pool-mcia3j656h2fy" }, "minCpuPlatform": "AUTOMATIC", "preemptibility": "NON PREEMPTIBLE" } } Resize a driver node group You can use the gcloud dataproc node-groups resize command or the Managed Service for Apache Spark API to add or remove driver nodes from a cluster driver node group. gcloud gcloud dataproc node-groups resize NODE GROUP ID \ --cluster= CLUSTER NAME \ --region= REGION \ --size= SIZE Required flags: NODE GROUP ID : You can run gcloud dataproc clusters describe CLUSTER NAME to list the node group ID.
- Spark job to estimate value of pi : gcloud dataproc jobs submit spark \ --cluster= CLUSTER NAME \ --region= REGION \ --driver-required-memory-mb=2048 \ --driver-required-vcores=2 \ --class=org.apache.spark.examples.SparkPi \ --jars=file:///usr/lib/spark/examples/jars/spark-examples.jar \ -- 1000 Spark wordcount job: gcloud dataproc jobs submit spark \ --cluster= CLUSTER NAME \ --region= REGION \ --driver-required-memory-mb=2048 \ --driver-required-vcores=2 \ --class=org.apache.spark.examples.JavaWordCount \ --jars=file:///usr/lib/spark/examples/jars/spark-examples.jar \ -- 'gs://apache-beam-samples/shakespeare/macbeth.txt' PySpark job to estimate value of pi : gcloud dataproc jobs submit pyspark \ file:///usr/lib/spark/examples/src/main/python/pi.py \ --cluster= CLUSTER NAME \ --region= REGION \ --driver-required-memory-mb=2048 \ --driver-required-vcores=2 \ -- 1000 Hadoop TeraGen MapReduce job: gcloud dataproc jobs submit hadoop \ --cluster= CLUSTER NAME \ --region= REGION \ --driver-required-memory-mb=2048 \ --driver-required-vcores=2 \ --jar file:///usr/lib/hadoop-mapreduce/hadoop-mapreduce-examples.jar \ -- teragen 1000 \ hdfs:///gen1/test REST Before using any of the request data, make the following replacements: PROJECT ID : Required.

