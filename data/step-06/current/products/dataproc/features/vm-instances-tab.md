---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.711Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "VM instances tab"
feature_slug: "vm-instances-tab"
latest_feature_date: "2015-12-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-console"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig"
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerAsyncClient"
keywords:
  - "vm"
  - "instances"
  - "tab"
  - "cluster"
  - "details"
  - "include"
  - "listing"
  - "vms"
---

# VM instances tab

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Cluster details include a VM instances tab for listing cluster VMs and quickly connecting to the master node.

## Extended Definition

Cluster details include a VM instances tab for listing cluster VMs and quickly connecting to the master node.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-console](https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-console)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerAsyncClient)

## Supporting Pages

### "ClusterConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- Source ID: `site-docs-reference`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- The following base set of scopes is always included: https://www.googleapis.com/auth/cloud.useraccounts.readonly https://www.googleapis.com/auth/devstorage.read write https://www.googleapis.com/auth/logging.write If no scopes are specified, the following defaults are also provided: https://www.googleapis.com/auth/bigquery https://www.googleapis.com/auth/bigtable.admin.table https://www.googleapis.com/auth/bigtable.data https://www.googleapis.com/auth/devstorage.full control tags[] string The Compute Engine network tags to add to all instances (see Tagging instances ). metadata map (key: string, value: string) Optional.
- The Dataproc service account (also see VM Data Plane identity ) used by Dataproc cluster VM instances to access Google Cloud Platform services.
- GceClusterConfig Common config settings for resources of Compute Engine cluster instances, applicable to all instances in the cluster.
- The Compute Engine config settings for the cluster's worker instances. secondaryWorkerConfig object ( InstanceGroupConfig ) Optional.

### "Quickstart: Create a cluster by using the Google Cloud console \_|\_ Managed\

- URL: [https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-console](https://docs.cloud.google.com/dataproc/docs/quickstarts/update-cluster-console)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Update a cluster Update your cluster by changing the number of worker instances: In the Managed Service for Apache Spark navigation menu, click Clusters .
- To delete the cluster, on the Cluster details page for example-cluster , click delete Delete .
- On the Cluster details page, click the Configuration tab.
- User roles To get the permissions that you need to create a Managed Service for Apache Spark cluster, ask your administrator to grant you the following IAM roles: Dataproc Editor ( roles/dataproc.editor ) on the project Service Account User ( roles/iam.serviceAccountUser ) on the Compute Engine default service account Service account role To ensure that the Compute Engine default service account has the necessary permissions to create a Managed Service for Apache Spark cluster, ask your administrator to grant the Dataproc Worker ( roles/dataproc.worker ) IAM role to the Compute Engine default service account on the project.

### "Class ClusterControllerAsyncClient (5.26.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerAsyncClient)
- Source ID: `site-python-reference`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- For example, to change the number of workers in a cluster to 5, the update mask parameter would be specified as config.worker config.num instances , and the PATCH request body would specify the new value, as follows: :: { "config":{ "workerConfig":{ "numInstances":"5" } } } Similarly, to change the number of preemptible workers in a cluster to 5, the update mask parameter would be config.secondary worker config.num instances , and the PATCH request body would be set as follows: :: { "config":{ "secondaryWorkerConfig":{ "numInstances":"5" } } } Note: Currently, only the following fields can be updated: .. raw:: html Mask Purpose labels Update labels config.worker config.num instances Resize primary worker group config.secondary worker config.num instances Resize secondary worker group config.autoscaling config.policy uri Use, stop using, or change autoscaling policies This corresponds to the update mask field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- ClientInfo ) The ClusterControllerService provides methods to manage clusters of Compute Engine instances.
- JSON Example :: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": ["user:eve@example.com"], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ]="" }="" yaml="" example ="" ::="" bindings:="" -="" members:="" -="" user:mike@example.com="" -="" group:admins@example.com="" -="" domain:google.com="" -="" serviceaccount:my-project-id@appspot.gserviceaccount.com="" role:="" roles/resourcemanager.organizationadmin="" -="" members:="" -="" user:eve@example.com="" role:="" roles/resourcemanager.organizationviewer="" condition:="" title:="" expirable="" access="" description:="" does="" not="" grant="" access="" after="" sep="" 2020="" expression:="" request.time="">< timestamp('2020-10-01t00:00:00.000z')="" for="" a="" description="" of="" iam="" and="" its="" features,="" see="" the=""> IAM developer's guide . start cluster start cluster ( request : typing .
- Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes . cluster path cluster path ( project : str , location : str , cluster : str ) - > str Returns a fully-qualified cluster string. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. create cluster create cluster ( request : typing .

