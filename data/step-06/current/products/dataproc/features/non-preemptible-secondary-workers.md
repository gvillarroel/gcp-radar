---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.636Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Non-preemptible secondary workers"
feature_slug: "non-preemptible-secondary-workers"
latest_feature_date: "2020-05-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels"
  - "https://docs.cloud.google.com/dataproc/docs/guides/create-partial-cluster"
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerAsyncClient"
keywords:
  - "non"
  - "preemptible"
  - "secondary"
  - "workers"
  - "dataproc"
  - "clusters"
  - "creation"
---

# Non-preemptible secondary workers

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc clusters support creation with non-preemptible secondary workers.

## Extended Definition

Dataproc clusters support creation with non-preemptible secondary workers.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels](https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels)
- [https://docs.cloud.google.com/dataproc/docs/guides/create-partial-cluster](https://docs.cloud.google.com/dataproc/docs/guides/create-partial-cluster)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerAsyncClient)

## Supporting Pages

### "Create and manage Labels \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels](https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, if you scale up the cluster, all new primary and secondary workers will have the new labels. gcloud Command You can specify one or more labels to be applied to a Managed Service for Apache Spark cluster or job at creation or submit time using the Google Cloud CLI. gcloud dataproc clusters create args --labels environment=production,customer=acme gcloud dataproc jobs submit args --labels environment=production,customer=acme Once a Managed Service for Apache Spark cluster or job has been created, you can update the labels associated with that resource using the Google Cloud CLI. gcloud dataproc clusters update args --update-labels environment=production,customer=acme gcloud dataproc jobs update args --update-labels environment=production,customer=acme Similarly, you can use the Google Cloud CLI to filter Managed Service for Apache Spark resources by label using a filter expression of the following format: labels.<key=value> . gcloud dataproc clusters list \ --region= region \ --filter="status.state=ACTIVE AND labels.environment=production" gcloud dataproc jobs list \ --region= region \ --filter="status.state=ACTIVE AND labels.customer=acme" See the clusters.list and jobs.list Dataproc API documentation for more information on writing a filter expression.
- Create and use Managed Service for Apache Spark labels Updating labels on clusters with secondary workers.
- A cluster can contain either preemptible workers or non-preemptible secondary workers, but not both.
- Label updates propagate to all preemptible secondary workers within 24 hours.

### "Create a Managed Service for Apache Spark partial cluster \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/create-partial-cluster](https://docs.cloud.google.com/dataproc/docs/guides/create-partial-cluster)
- Source ID: `site-docs-root`
- Final score: 102
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Display the number of provisioned workers After creating a cluster, you can run the following gcloud CLI command to list the number of workers, including any secondary workers, provisioned in your cluster. gcloud dataproc clusters list \ --project= PROJECT \ --region= REGION \ --filter=clusterName= CLUSTER NAME Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Note: Managed Service for Apache Spark partial cluster creation is not available in the Google Cloud console. gcloud To create a Managed Service for Apache Spark partial cluster on the command line, run the following gcloud dataproc clusters create command locally in a terminal window or in Cloud Shell . gcloud dataproc clusters create CLUSTER NAME \ --project= PROJECT \ --region= REGION \ --num-workers= NUM WORKERS \ --min-num-workers= MIN NUM WORKERS \ other args ...
- REST To create a Dataproc partial cluster, specify the minimum number of primary workers in the workerConfig.minNumInstances field as part of a clusters.create request.
- Setting the scaleDownFactor to 0 prevents the cluster from scaling down from 10 to 8, and will help keep the number of workers at the maximum 10-worker limit. workerConfig: minInstances: 8 maxInstances: 10 basicAlgorithm: cooldownPeriod: 2m yarnConfig: scaleUpFactor: 1 scaleDownFactor: 0 gracefulDecommissionTimeout: 1h Create a partial cluster You can use the Google Cloud CLI or the Dataproc API to create a Managed Service for Apache Spark partial cluster.

### "Class ClusterControllerAsyncClient (5.26.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerAsyncClient)
- Source ID: `site-python-reference`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- For example, to change the number of workers in a cluster to 5, the update mask parameter would be specified as config.worker config.num instances , and the PATCH request body would specify the new value, as follows: :: { "config":{ "workerConfig":{ "numInstances":"5" } } } Similarly, to change the number of preemptible workers in a cluster to 5, the update mask parameter would be config.secondary worker config.num instances , and the PATCH request body would be set as follows: :: { "config":{ "secondaryWorkerConfig":{ "numInstances":"5" } } } Note: Currently, only the following fields can be updated: .. raw:: html Mask Purpose labels Update labels config.worker config.num instances Resize primary worker group config.secondary worker config.num instances Resize secondary worker group config.autoscaling config.policy uri Use, stop using, or change autoscaling policies This corresponds to the update mask field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 async def sample list clusters(): Create a client client = dataproc v1 .
- ListClustersRequest ( project id="project id value", region="region value", ) Make the request page result = client. list clusters (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.dataproc v1.types.ListClustersRequest , dict]] The request object.
- Returns Type Description google.cloud.dataproc v1.services.cluster controller.pagers.ListClustersAsyncPager The list of all clusters in a project.

