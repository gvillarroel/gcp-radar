---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.151Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Dataproc Solr Optional Component"
feature_slug: "dataproc-solr-optional-component"
latest_feature_date: "2020-10-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images"
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.node_group_controller.NodeGroupControllerAsyncClient"
keywords:
  - "solr"
  - "adds"
  - "optional"
  - "component"
  - "clusters"
---

# Dataproc Solr Optional Component

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

The Dataproc Solr Optional Component adds Solr as an optional component for Dataproc clusters.

## Extended Definition

The Dataproc Solr Optional Component adds Solr as an optional component for Dataproc clusters.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.node_group_controller.NodeGroupControllerAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.node_group_controller.NodeGroupControllerAsyncClient)

## Supporting Pages

### "ClusterConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- Source ID: `site-docs-reference`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- ConfidentialInstanceConfig Confidential Instance Config for clusters using Confidential VMs JSON representation { "enableConfidentialCompute" : boolean } Fields enableConfidentialCompute boolean Optional.
- JSON representation { "imageVersion" : string , "properties" : { string : string , ... } , "optionalComponents" : [ enum ( Component ) ] } Fields imageVersion string Optional.
- Shielded Instance Config for clusters using Compute Engine Shielded VMs . confidentialInstanceConfig object ( ConfidentialInstanceConfig ) Optional.
- Confidential Instance Config for clusters using Confidential VMs . resourceManagerTags map (key: string, value: string) Optional.

### "Create a Managed Service for Apache Spark custom image \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- Source ID: `site-docs-root`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- Example: Google Cloud CLI cluster creation command : gcloud dataproc clusters create CLUSTER NAME --image= CUSTOM IMAGE URI \ --optional-components= COMPONENT NAME \ ... other flags If the component name is not specified when you create the cluster, the optional component, including any custom OS packages and configs, will be deleted.
- Example: Google Cloud CLI cluster creation command: gcloud dataproc clusters create CLUSTER NAME --image= CUSTOM IMAGE URI \ --optional-components= COMPONENT NAME \ ... other flags For a listing of available optional flags, see Optional Arguments on GitHub.
- A list of optional components , such as SOLR, RANGER, TRINO, DOCKER, FLINK, HIVE WEBHCAT, ZEPPELIN, HUDI, ICEBERG, and PIG (PIG is available as an optional component in image versions 2.3 and later), to install in the image.
- If your project is part of a shared VPC , you must specify the full subnetwork URL in the following format: projects/ HOST PROJECT ID /regions/ REGION /subnetworks/ SUBNET . --optional-components : This flag is available only when using base image versions 2.3 and later.

### "Class NodeGroupControllerAsyncClient (5.26.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.node_group_controller.NodeGroupControllerAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.node_group_controller.NodeGroupControllerAsyncClient)
- Source ID: `site-python-reference`
- Final score: 90
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Optional [ google . cloud . dataproc v1 . types . clusters .
- Format: projects/{project}/regions/{region}/clusters/{cluster}/nodeGroups/{nodeGroup} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- CreateNodeGroupRequest ( parent="parent value", node group=node group, ) Make the request operation = client. create node group (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.dataproc v1.types.CreateNodeGroupRequest , dict]] The request object.
- ResizeNodeGroupRequest ( name="name value", size=443, ) Make the request operation = client. resize node group (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.dataproc v1.types.ResizeNodeGroupRequest , dict]] The request object.

