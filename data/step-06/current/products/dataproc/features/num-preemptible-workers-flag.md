---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.087Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "--num-preemptible-workers flag"
feature_slug: "num-preemptible-workers-flag"
latest_feature_date: "2020-03-18"
deprecation_date: "2020-03-18"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-gcloud"
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels"
keywords:
  - "num"
  - "preemptible"
  - "workers"
  - "flag"
  - "the"
  - "in"
  - "gcloud"
  - "dataproc"
---

# --num-preemptible-workers flag

Product: Dataproc
Coverage: LOW

## Step 02 Summary

The --num-preemptible-workers flag in gcloud dataproc clusters update configured the number of preemptible workers during cluster updates; deprecated on 2020-03-18.

## Extended Definition

The --num-preemptible-workers flag in gcloud dataproc clusters update configured the number of preemptible workers during cluster updates; deprecated on 2020-03-18.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-gcloud](https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-gcloud)
- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels](https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels)

## Supporting Pages

### "Create a cluster by using the gcloud CLI \_|\_ Managed Service for Apache\

- URL: [https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-gcloud](https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-gcloud)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Update a cluster To change the number of workers in the cluster to five, run the following command: gcloud dataproc clusters update example-cluster \ --region= REGION \ --num-workers 5 The command output displays cluster details: workerConfig: ... instanceNames: - example-cluster-w-0 - example-cluster-w-1 - example-cluster-w-2 - example-cluster-w-3 - example-cluster-w-4 numInstances: 5 statusHistory: ... - detail: Add 3 workers.
- To decrease the number of worker nodes to the original value of 2 , run the following command: gcloud dataproc clusters update example-cluster \ --region= REGION \ --num-workers 2 Clean up To avoid incurring charges to your Google Cloud account for the resources used on this page, follow these steps.
- This page shows you how to use the Google Cloud CLI gcloud command-line tool to create a Managed Service for Apache Spark cluster, run a Apache Spark job in the cluster, then modify the number of workers in the cluster.
- Submit a job To submit a sample Spark job that calculates a rough value for pi , run the following gcloud Managed Service for Apache Spark jobs submit spark command: gcloud dataproc jobs submit spark --cluster example-cluster \ --region= REGION \ --class org.apache.spark.examples.SparkPi \ --jars file:///usr/lib/spark/examples/jars/spark-examples.jar -- 1000 Notes: Replace the following: REGION : Specify the cluster region.

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- March 10, 2020 Change Added the following flags to gcloud dataproc clusters create and gcloud dataproc workflow-templates set-managed-cluster commands: --num-secondary-workers --num-secondary-worker-local-ssds --secondary-worker-boot-disk-size --secondary-worker-boot-disk-type --secondary-worker-accelerator Deprecated The following flags to gcloud dataproc clusters create and gcloud dataproc workflow-templates set-managed-cluster commands have been deprecated: --num-preemptible-workers --num-preemptible-worker-local-ssds --preemptible-worker-boot-disk-size --preemptible-worker-boot-disk-type --preemptible-worker-accelerator See the related change, above, for the new flags to use in place of these deprecated flags.
- March 18, 2020 Change Added the following flag to the gcloud dataproc clusters update command: --num-secondary-workers Deprecated The following flag to gcloud dataproc clusters update has been deprecated: --num-preemptible-workers See the related change, above, for the new flag to use in place of this deprecated flag.
- Fixed Fixed the ability to delete jobs that fast-failed before some cluster and staging directories were created Fixed some remaining errors with vmem settings when using the distcp command Fixed a rare bug in which underlying Compute Engine issues could lead to VM instances failing to be deleted after the Cloud Dataproc cluster had been successfully deleted Hive command has been fixed Fixed error reporting when updating the number of workers (standard and preemptible) in a cluster Fixed some cases when Rate Limit Exceeded errors occurred The maximum cluster name length is now correctly 55 instead of 56 characters GCP Console Cluster list now includes a Created column, and the cluster configuration tab now includes a Created field, telling the creation time of the cluster In the cluster-create screen, cluster memory sizes greater than 999 GB are now displayed in TB Fields that were missing from the PySpark and Hive job configuration tab ( Additional Python Files and Jar Files ) have been added The option to add preemptible nodes when creating a cluster is now in the "expander" at the bottom of the form Machine types with insufficient memory (less than 3.5 GB) are no longer displayed in the list of machine types (previously, selecting one of these small machine types would lead to an error from the backend The placeholder text in the Arguments field of the submit-job form has been corrected October 23, 2015 Feature GCP Console: Added support for adding, editing, and removing preemptible instances in clusters.
- Decreased job startup time for SparkSQL jobs with partitioned/nested directories by applying a patch for Spark ( SPARK-9926 ) Further optimized job startup time for any job with a lot of file inputs by applying a patch for Hadoop ( HADOOP-12810 ) Feature gcloud command-line tool Added the flag --preemptible-worker-boot-disk-size which can be used to adjust the boot disk size of preemptible workers.

### "Create and manage Labels \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels](https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, if you scale up the cluster, all new primary and secondary workers will have the new labels. gcloud Command You can specify one or more labels to be applied to a Managed Service for Apache Spark cluster or job at creation or submit time using the Google Cloud CLI. gcloud dataproc clusters create args --labels environment=production,customer=acme gcloud dataproc jobs submit args --labels environment=production,customer=acme Once a Managed Service for Apache Spark cluster or job has been created, you can update the labels associated with that resource using the Google Cloud CLI. gcloud dataproc clusters update args --update-labels environment=production,customer=acme gcloud dataproc jobs update args --update-labels environment=production,customer=acme Similarly, you can use the Google Cloud CLI to filter Managed Service for Apache Spark resources by label using a filter expression of the following format: labels.<key=value> . gcloud dataproc clusters list \ --region= region \ --filter="status.state=ACTIVE AND labels.environment=production" gcloud dataproc jobs list \ --region= region \ --filter="status.state=ACTIVE AND labels.customer=acme" See the clusters.list and jobs.list Dataproc API documentation for more information on writing a filter expression.
- A cluster can contain either preemptible workers or non-preemptible secondary workers, but not both.
- Here is the JSON body of a cluster.create request that includes attaches a key1:value label to the cluster. { "clusterName":"cluster-1", "projectId":"my-project", "config":{ "configBucket":"", "gceClusterConfig":{ "networkUri":".../networks/default", "zoneUri":".../zones/us-central1-f" }, "masterConfig":{ "numInstances":1, "machineTypeUri":"..../machineTypes/n1-standard-4", "diskConfig":{ "bootDiskSizeGb":500, "numLocalSsds":0 } }, "workerConfig":{ "numInstances":2, "machineTypeUri":"...machineTypes/n1-standard-4", "diskConfig":{ "bootDiskSizeGb":500, "numLocalSsds":0 } } }, "labels":{ "key1":"value1" } } The clusters.list and jobs.list APIs can be used to list clusters or jobs that match a specified filter, using the following format: labels.<key=value> .
- Label Description goog-dataproc-cluster-name User-specified cluster name goog-dataproc-cluster-uuid Unique cluster ID goog-dataproc-location Managed Service for Apache Spark regional cluster endpoint You can use these automatically applied labels in many ways, including: Searching and filtering for Managed Service for Apache Spark resources Filtering billing data to calculate Managed Service for Apache Spark costs What's next Learn how to create and update labels for projects using the Resource Manager.

