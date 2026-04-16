---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.715Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "Custom core count per node"
feature_slug: "custom-core-count-per-node"
latest_feature_date: "2022-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vmware-engine/docs/networking/howto-use-storage-only-nodes"
  - "https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineClient"
keywords:
  - "custom"
  - "core"
  - "count"
  - "per"
  - "node"
  - "clusters"
  - "can"
  - "created"
---

# Custom core count per node

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

Clusters can be created with a custom number of cores per node to match application-specific requirements.

## Extended Definition

Clusters can be created with a custom number of cores per node to match application-specific requirements.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-use-storage-only-nodes](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-use-storage-only-nodes)
- [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineClient](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineClient)

## Supporting Pages

### "Manage storage-only nodes \_|\_ Google Cloud VMware Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/networking/howto-use-storage-only-nodes](https://docs.cloud.google.com/vmware-engine/docs/networking/howto-use-storage-only-nodes)
- Source ID: `site-docs-reference`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Clicking the Clusters tab displays cluster data in the table. gcloud To create stretched private cloud that contains storage-only nodes using the Google Cloud CLI, do the following: Create a stretched private cloud by entering the gcloud private-clouds create command : gcloud vmware private-clouds create STRETCHED PC STORAGE NODE NAME \ --description= DESCRIPTION \ --location= REGION \ --cluster= STRETCHED CLUSTER NAME \ --node-type-config=type=standard-72,count= n \ --node-type-config=type=storage-only-standard-72,count= m \ --management-range= IP ADDRESS \ --vmware-engine-network= NETWORK NAME --preferred-zone=projects/ PROJECT ID /locations/ PREFERRED ZONE \ --secondary-zone=projects/ PROJECT ID /locations/ SECONDARY ZONE \ --type=STRETCHED Replace the following: STRETCHED PC STORAGE NODE NAME : the name for the stretched private cloud with storage-only node.
- Click Save . gcloud To expand or shrink a stretched cluster by adding or removing storage-only nodes using the Google Cloud CLI, use the gcloud vmware private-clouds clusters update command : gcloud vmware private-clouds clusters update STRETCHED CLUSTER NAME \ --location= REGION \ --project= PROJECT ID \ --private-cloud= STRETCHED PC STORAGE NODE NAME \ --node-type-config=type=standard-72,count= n \ --node-type-config=type=storage-only-standard-72,count= m Replace the following: STRETCHED CLUSTER NAME : the name of the stretched cluster in this private cloud.
- Click Create . gcloud To create a new cluster with storage-only nodes using the Google Cloud CLI, use the gcloud vmware private-clouds clusters create command : gcloud vmware private-clouds clusters create CLUSTER NAME \ --private-cloud= PC STORAGE NODE NAME \ --location= ZONE \ --project= PROJECT ID \ --node-type-config=type=standard-72,count= n \ --node-type-config=type=storage-only-standard-72,count= m Replace the following: CLUSTER NAME : the name for the new cluster in this private cloud.
- API To shrink a cluster that contains storage-only nodes using the VMware Engine API, make a PATCH request: PATCH "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ ZONE /privateClouds/ PC STORAGE NODE NAME /clusters/ CLUSTER NAME /?alt=json&updateMask=node type configs. .node count" -d '{ "nodeTypeConfigs": { "standard-72": { "nodeCount": n }, "storage-only-standard-72": { "nodeCount": m } } }' Replace the following: PROJECT ID : the project ID for the request.

### "Class VmwareEngineAsyncClient (1.11.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineAsyncClient)
- Source ID: `site-python-reference`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: projects/{project}/locations/{location}/privateClouds/{private cloud}/clusters/{cluster}/nodes/{node} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- For example: projects/my-project/locations/us-central1-a/privateClouds/my-cloud/clusters/my-cluster This corresponds to the parent field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- For example: projects/my-project/locations/us-central1-a/privateClouds/my-cloud/clusters/my-cluster This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- For example: projects/my-project/locations/us-central1-a/privateClouds/my-cloud/clusters/my-cluster This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

### "Class VmwareEngineClient (1.11.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineClient](https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.VmwareEngineClient)
- Source ID: `site-python-reference`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: projects/{project}/locations/{location}/privateClouds/{private cloud}/clusters/{cluster}/nodes/{node} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- For example: projects/my-project/locations/us-central1-a/privateClouds/my-cloud/clusters/my-cluster This corresponds to the parent field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- For example: projects/my-project/locations/us-central1-a/privateClouds/my-cloud/clusters/my-cluster This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- For example: projects/my-project/locations/us-central1-a/privateClouds/my-cloud/clusters/my-cluster This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

