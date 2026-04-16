---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.099Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Cluster Scheduled Stop"
feature_slug: "cluster-scheduled-stop"
latest_feature_date: "2025-07-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-start-stop"
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerClient"
keywords:
  - "stop"
  - "scheduled"
  - "automatically"
  - "after"
  - "clusters"
  - "cluster"
---

# Cluster Scheduled Stop

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Cluster Scheduled Stop can automatically stop Dataproc clusters after an idle period or at a scheduled time.

## Extended Definition

Cluster Scheduled Stop can automatically stop Dataproc clusters after an idle period or at a scheduled time.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-start-stop](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-start-stop)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerClient)

## Supporting Pages

### "Stop and start clusters \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-start-stop](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-start-stop)
- Source ID: `site-docs-root`
- Final score: 197
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Notes: The cluster start and stop feature is available on clusters created with images released on or after the following image versions: 1.4.35-debian10/ubuntu18 1.5.10-debian10/ubuntu18 2.0.0-RC6-debian10/ubuntu18 Stopping individual cluster nodes is not recommended since the status of a stopped VM may not be in sync with cluster status, which can result in errors.
- Google Cloud console Click the cluster name from the Managed Service for Apache Spark Clusters page in the Google Cloud console, then click STOP to stop and START to start the cluster. gcloud CLI Stop a cluster gcloud dataproc clusters stop CLUSTER NAME \ --region= REGION Start a cluster gcloud dataproc clusters start CLUSTER NAME \ --region= REGION REST API Stop a cluster Submit a clusters.stop request.
- Limitations You cannot stop: clusters with secondary workers clusters with local ssds When a cluster is stopped, you cannot: update the cluster submit jobs to the cluster access notebooks running on the cluster using the Managed Service for Apache Spark component gateway Starting a cluster When you restart a stopped cluster, any initialization actions won't be re-run.
- Home Documentation Data analytics Managed Service for Apache Spark Guides Send feedback Stop and start clusters Stay organized with collections Save and categorize content based on your preferences.

### "Class ClusterControllerAsyncClient (5.26.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerAsyncClient)
- Source ID: `site-python-reference`
- Final score: 166
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, to change the number of workers in a cluster to 5, the update mask parameter would be specified as config.worker config.num instances , and the PATCH request body would specify the new value, as follows: :: { "config":{ "workerConfig":{ "numInstances":"5" } } } Similarly, to change the number of preemptible workers in a cluster to 5, the update mask parameter would be config.secondary worker config.num instances , and the PATCH request body would be set as follows: :: { "config":{ "secondaryWorkerConfig":{ "numInstances":"5" } } } Note: Currently, only the following fields can be updated: .. raw:: html Mask Purpose labels Update labels config.worker config.num instances Resize primary worker group config.secondary worker config.num instances Resize secondary worker group config.autoscaling config.policy uri Use, stop using, or change autoscaling policies This corresponds to the update mask field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- JSON Example :: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": ["user:eve@example.com"], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ]="" }="" yaml="" example ="" ::="" bindings:="" -="" members:="" -="" user:mike@example.com="" -="" group:admins@example.com="" -="" domain:google.com="" -="" serviceaccount:my-project-id@appspot.gserviceaccount.com="" role:="" roles/resourcemanager.organizationadmin="" -="" members:="" -="" user:eve@example.com="" role:="" roles/resourcemanager.organizationviewer="" condition:="" title:="" expirable="" access="" description:="" does="" not="" grant="" access="" after="" sep="" 2020="" expression:="" request.time="">< timestamp('2020-10-01t00:00:00.000z')="" for="" a="" description="" of="" iam="" and="" its="" features,="" see="" the=""> IAM developer's guide . start cluster start cluster ( request : typing .
- StopClusterRequest ( project id="project id value", region="region value", cluster name="cluster name value", ) Make the request operation = client. stop cluster (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.dataproc v1.types.StopClusterRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 async def sample list clusters(): Create a client client = dataproc v1 .

### "Class ClusterControllerClient (5.26.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerClient)
- Source ID: `site-python-reference`
- Final score: 166
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, to change the number of workers in a cluster to 5, the update mask parameter would be specified as config.worker config.num instances , and the PATCH request body would specify the new value, as follows: :: { "config":{ "workerConfig":{ "numInstances":"5" } } } Similarly, to change the number of preemptible workers in a cluster to 5, the update mask parameter would be config.secondary worker config.num instances , and the PATCH request body would be set as follows: :: { "config":{ "secondaryWorkerConfig":{ "numInstances":"5" } } } Note: Currently, only the following fields can be updated: .. raw:: html Mask Purpose labels Update labels config.worker config.num instances Resize primary worker group config.secondary worker config.num instances Resize secondary worker group config.autoscaling config.policy uri Use, stop using, or change autoscaling policies This corresponds to the update mask field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- JSON Example :: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": ["user:eve@example.com"], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ]="" }="" yaml="" example ="" ::="" bindings:="" -="" members:="" -="" user:mike@example.com="" -="" group:admins@example.com="" -="" domain:google.com="" -="" serviceaccount:my-project-id@appspot.gserviceaccount.com="" role:="" roles/resourcemanager.organizationadmin="" -="" members:="" -="" user:eve@example.com="" role:="" roles/resourcemanager.organizationviewer="" condition:="" title:="" expirable="" access="" description:="" does="" not="" grant="" access="" after="" sep="" 2020="" expression:="" request.time="">< timestamp('2020-10-01t00:00:00.000z')="" for="" a="" description="" of="" iam="" and="" its="" features,="" see="" the=""> IAM developer's guide . start cluster start cluster ( request : typing .
- StopClusterRequest ( project id="project id value", region="region value", cluster name="cluster name value", ) Make the request operation = client. stop cluster (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.dataproc v1.types.StopClusterRequest , dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 def sample list clusters(): Create a client client = dataproc v1 .

