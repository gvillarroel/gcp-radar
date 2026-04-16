---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.215Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Heterogeneous cluster machine types"
feature_slug: "heterogeneous-cluster-machine-types"
latest_feature_date: "2016-01-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels"
  - "https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/quotas"
keywords:
  - "heterogeneous"
  - "whose"
  - "types"
  - "machine"
  - "clusters"
  - "supports"
  - "cluster"
---

# Heterogeneous cluster machine types

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Dataproc supports clusters whose master and worker nodes use different machine types and memory sizes.

## Extended Definition

Dataproc supports clusters whose master and worker nodes use different machine types and memory sizes.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels](https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels)
- [https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies](https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies)
- [https://docs.cloud.google.com/dataproc-metastore/docs/quotas](https://docs.cloud.google.com/dataproc-metastore/docs/quotas)

## Supporting Pages

### "Create and manage Labels \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels](https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels)
- Source ID: `site-docs-root`
- Final score: 27
- Re-rank relevance: N/A

Evidence snippets:
- Here is the JSON body of a cluster.create request that includes attaches a key1:value label to the cluster. { "clusterName":"cluster-1", "projectId":"my-project", "config":{ "configBucket":"", "gceClusterConfig":{ "networkUri":".../networks/default", "zoneUri":".../zones/us-central1-f" }, "masterConfig":{ "numInstances":1, "machineTypeUri":"..../machineTypes/n1-standard-4", "diskConfig":{ "bootDiskSizeGb":500, "numLocalSsds":0 } }, "workerConfig":{ "numInstances":2, "machineTypeUri":"...machineTypes/n1-standard-4", "diskConfig":{ "bootDiskSizeGb":500, "numLocalSsds":0 } } }, "labels":{ "key1":"value1" } } The clusters.list and jobs.list APIs can be used to list clusters or jobs that match a specified filter, using the following format: labels.<key=value> .
- For example, if you scale up the cluster, all new primary and secondary workers will have the new labels. gcloud Command You can specify one or more labels to be applied to a Managed Service for Apache Spark cluster or job at creation or submit time using the Google Cloud CLI. gcloud dataproc clusters create args --labels environment=production,customer=acme gcloud dataproc jobs submit args --labels environment=production,customer=acme Once a Managed Service for Apache Spark cluster or job has been created, you can update the labels associated with that resource using the Google Cloud CLI. gcloud dataproc clusters update args --update-labels environment=production,customer=acme gcloud dataproc jobs update args --update-labels environment=production,customer=acme Similarly, you can use the Google Cloud CLI to filter Managed Service for Apache Spark resources by label using a filter expression of the following format: labels.<key=value> . gcloud dataproc clusters list \ --region= region \ --filter="status.state=ACTIVE AND labels.environment=production" gcloud dataproc jobs list \ --region= region \ --filter="status.state=ACTIVE AND labels.customer=acme" See the clusters.list and jobs.list Dataproc API documentation for more information on writing a filter expression.
- Common uses of labels Here are some common use cases for labels: Team or cost center labels : Add labels based on team or cost center to distinguish Managed Service for Apache Spark clusters and jobs owned by different teams (for example, team:research and team:analytics ).
- Once a resource is associated with a label, the label is propagated to operations performed on the resource—cluster create, update, patch, or delete; job submit, update, cancel, or delete—allowing you to filter and list clusters, jobs, and operations by label.

### Quotas and limits \_|\_ Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/quotas](https://docs.cloud.google.com/dataproc-metastore/docs/quotas)
- Source ID: `site-docs-root-2`
- Final score: 26
- Re-rank relevance: N/A

### "Manage Java and Scala dependencies for Apache Spark \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies](https://docs.cloud.google.com/dataproc/docs/guides/manage-spark-dependencies)
- Source ID: `site-docs-root`
- Final score: 23
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Here are recommended approaches to including these dependencies when you submit a Spark job to a Managed Service for Apache Spark cluster: When submitting a job from your local machine with the gcloud dataproc jobs submit command, use the --properties spark.jars.packages=[DEPENDENCIES] flag.
- Example: gcloud dataproc jobs submit spark \ --cluster=my-cluster \ --region= region \ --properties=spark.jars.packages='com.google.cloud:google-cloud-translate:1.35.0,org.apache.bahir:spark-streaming-pubsub 2.11:2.2.0' When submitting a job directly on your cluster use the spark-submit command with the --packages=[DEPENDENCIES] parameter.
- If your application requires a Spark version that is different from the version installed on your Managed Service for Apache Spark cluster, you can write an initialization action or construct a custom image that installs the Spark version used by your application.
- Therefore, you may need to provide more granular rules that explicitly merge specific types of conflicting files using MergeStrategy.first , last , concat , filterDistinctLines , rename , or discard strategies.

