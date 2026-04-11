---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.111Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Cluster creation from YAML"
feature_slug: "cluster-creation-from-yaml"
latest_feature_date: "2018-06-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-gcloud"
  - "https://docs.cloud.google.com/dataproc/docs/guides/create-cluster"
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
keywords:
  - "cluster"
  - "creation"
  - "from"
  - "yaml"
  - "the"
  - "gcloud"
  - "command"
  - "can"
---

# Cluster creation from YAML

Product: Dataproc
Coverage: LOW

## Step 02 Summary

The gcloud command can create Dataproc clusters directly from a YAML file.

## Extended Definition

The gcloud command can create Dataproc clusters directly from a YAML file.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-gcloud](https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-gcloud)
- [https://docs.cloud.google.com/dataproc/docs/guides/create-cluster](https://docs.cloud.google.com/dataproc/docs/guides/create-cluster)
- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)

## Supporting Pages

### "Create a cluster by using the gcloud CLI \_|\_ Managed Service for Apache\

- URL: [https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-gcloud](https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-gcloud)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Update a cluster To change the number of workers in the cluster to five, run the following command: gcloud dataproc clusters update example-cluster \ --region= REGION \ --num-workers 5 The command output displays cluster details: workerConfig: ... instanceNames: - example-cluster-w-0 - example-cluster-w-1 - example-cluster-w-2 - example-cluster-w-3 - example-cluster-w-4 numInstances: 5 statusHistory: ... - detail: Add 3 workers.
- Submit a job To submit a sample Spark job that calculates a rough value for pi , run the following gcloud Managed Service for Apache Spark jobs submit spark command: gcloud dataproc jobs submit spark --cluster example-cluster \ --region= REGION \ --class org.apache.spark.examples.SparkPi \ --jars file:///usr/lib/spark/examples/jars/spark-examples.jar -- 1000 Notes: Replace the following: REGION : Specify the cluster region.
- To decrease the number of worker nodes to the original value of 2 , run the following command: gcloud dataproc clusters update example-cluster \ --region= REGION \ --num-workers 2 Clean up To avoid incurring charges to your Google Cloud account for the resources used on this page, follow these steps.
- This page shows you how to use the Google Cloud CLI gcloud command-line tool to create a Managed Service for Apache Spark cluster, run a Apache Spark job in the cluster, then modify the number of workers in the cluster.

### "Create a cluster \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/create-cluster](https://docs.cloud.google.com/dataproc/docs/guides/create-cluster)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://dataproc.googleapis.com/v1/projects/ PROJECT /regions/ REGION /clusters" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT /regions/ REGION /operations/b5706e31......", "metadata": { "@type": "type.googleapis.com/google.cloud.dataproc.v1.ClusterOperationMetadata", "clusterName": " CLUSTER NAME ", "clusterUuid": "5fe882b2-...", "status": { "state": "PENDING", "innerState": "PENDING", "stateStartTime": "2019-11-21T00:37:56.220Z" }, "operationType": "CREATE", "description": "Create cluster with 2 workers", "warnings": [ "For PD-Standard without local SSDs, we strongly recommend provisioning 1TB ..."" ] } } Note: You can click the Equivalent REST or command line links at the bottom of the left panel of the Managed Service for Apache Spark Google Cloud console Create a cluster page to have the Console construct an equivalent API REST request or gcloud tool command to use in your code or from the command line to create a cluster.
- Note: You can click the Equivalent REST or command line links at the bottom of the left panel on the Managed Service for Apache Spark Google Cloud console Create a cluster page to have the Console construct an equivalent API REST request or gcloud tool command to use in your code or from the command line to create a cluster.
- Create a cluster with a YAML file Run the following gcloud command to export the configuration of an existing Managed Service for Apache Spark cluster into a cluster.yaml file. gcloud dataproc clusters export EXISTING CLUSTER NAME \ --region= REGION \ --destination= cluster.yaml Create a new cluster by importing the YAML file configuration. gcloud dataproc clusters import NEW CLUSTER NAME \ --region= REGION \ --source= cluster.yaml Note: During the export operation, cluster-specific fields, such as cluster name, output-only fields, and automatically applied labels are filtered.
- HTTP method and URL: POST https://dataproc.googleapis.com/v1/projects/ PROJECT /regions/ REGION /clusters Request JSON body: { "project id":" PROJECT ", "cluster name":" CLUSTER NAME ", "config":{ "master config":{ "num instances":1, "machine type uri":"n1-standard-2", "image uri":"" }, "softwareConfig": { "imageVersion": "", "properties": {}, "optionalComponents": [] }, "worker config":{ "num instances":2, "machine type uri":"n1-standard-2", "image uri":"" }, "gce cluster config":{ "zone uri":" ZONE " } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Feature Preemptible boot disk sizes - The disk size for preemptible workers can now be set via the gcloud command-line tool at cluster creation, even when preemptibles are not added to a cluster using the commend --preemptible-worker-boot-disk-size .
- As part of this feature launch, users can import and export workflow templates directly from YAML files using the gcloud command-line tool.
- Fixed Fixed the ability to delete jobs that fast-failed before some cluster and staging directories were created Fixed some remaining errors with vmem settings when using the distcp command Fixed a rare bug in which underlying Compute Engine issues could lead to VM instances failing to be deleted after the Cloud Dataproc cluster had been successfully deleted Hive command has been fixed Fixed error reporting when updating the number of workers (standard and preemptible) in a cluster Fixed some cases when Rate Limit Exceeded errors occurred The maximum cluster name length is now correctly 55 instead of 56 characters GCP Console Cluster list now includes a Created column, and the cluster configuration tab now includes a Created field, telling the creation time of the cluster In the cluster-create screen, cluster memory sizes greater than 999 GB are now displayed in TB Fields that were missing from the PySpark and Hive job configuration tab ( Additional Python Files and Jar Files ) have been added The option to add preemptible nodes when creating a cluster is now in the "expander" at the bottom of the form Machine types with insufficient memory (less than 3.5 GB) are no longer displayed in the list of machine types (previously, selecting one of these small machine types would lead to an error from the backend The placeholder text in the Arguments field of the submit-job form has been corrected October 23, 2015 Feature GCP Console: Added support for adding, editing, and removing preemptible instances in clusters.
- January 27, 2016 Fixed Fixed two issues which would sometimes cause virtual machines to remain active after a cluster deletion request was submitted The Spark maxExecutors setting is now set to 10000 to avoid the AppMaster failing on jobs with many tasks Improved handling for aggressive job submission by making several changes to the Cloud Dataproc agent, including: Limiting the number of concurrent jobs so they are proportional to the memory of the master node Checking free memory before scheduling new jobs Rate limiting how many jobs can be scheduled per cycle Improved how HDFS capacity is calculated before commissioning or decommissioning nodes to prevent excessively long updates Feature Two new options have been added to the Cloud Dataproc gcloud command-line tool for adding tags and metadata to virtual machines used in Cloud Dataproc clusters.

