---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:45.381Z"
product_name: "Cloud Data Fusion"
product_slug: "cloud-data-fusion"
feature_name: "GET /v3/namespaces/{namespace}/apps endpoint pagination behavior"
feature_slug: "get-v3-namespaces-namespace-apps-endpoint-pagination-behavior"
latest_feature_date: "2025-03-17"
deprecation_date: "2025-03-17"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference"
  - "https://docs.cloud.google.com/data-fusion/docs/reference/replication-ref"
  - "https://docs.cloud.google.com/data-fusion/docs/reference/rest"
keywords:
  - "get"
  - "v3"
  - "namespaces"
  - "namespace"
  - "apps"
  - "endpoint"
  - "pagination"
  - "behavior"
---

# GET /v3/namespaces/{namespace}/apps endpoint pagination behavior

Product: Cloud Data Fusion
Coverage: MEDIUM

## Step 02 Summary

The ability to retrieve all applications without pagination via GET /v3/namespaces/{namespace}/apps was deprecated; deprecated on 2025-03-17.

## Extended Definition

The ability to retrieve all applications without pagination via GET /v3/namespaces/{namespace}/apps was deprecated; deprecated on 2025-03-17.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference](https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference)
- [https://docs.cloud.google.com/data-fusion/docs/reference/replication-ref](https://docs.cloud.google.com/data-fusion/docs/reference/replication-ref)
- [https://docs.cloud.google.com/data-fusion/docs/reference/rest](https://docs.cloud.google.com/data-fusion/docs/reference/rest)

## Supporting Pages

### CDAP reference \_|\_ Cloud Data Fusion \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference](https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference)
- Source ID: `site-api-reference`
- Final score: 121
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- GET -H "Authorization: Bearer ${AUTH TOKEN}" "${CDAP ENDPOINT}/v3/namespaces/ namespace-id /apps/ pipeline-name /spark/DataStreamsSparkStreaming Records of a real-time pipeline run GET -H "Authorization: Bearer ${AUTH TOKEN}" "${CDAP ENDPOINT}/v3/namespaces/ namespace-id /apps/ pipeline-name /spark/DataStreamsSparkStreaming/run-id Parameter Description namespace-id The namespace ID must either be the name of the namespace when it was created or default , which is the name of the default namespace. pipeline-name Your pipeline name. run-id To find the run ID, see Real-time pipeline run records , which returns a list of run IDs.
- GET -H "Authorization: Bearer ${AUTH TOKEN}" "${CDAP ENDPOINT}/v3/namespaces/ namespace-id /apps/ pipeline-name /workflows/DataPipelineWorkflow/runs Records of a batch pipeline run GET -H "Authorization: Bearer ${AUTH TOKEN}" "${CDAP ENDPOINT}/v3/namespaces/ namespace-id /apps/ pipeline-name /workflows/DataPipelineWorkflow/runs/ run-id Parameter Description namespace-id The namespace ID must either be the name of the namespace when it was created or default , which is the name of the default namespace. pipeline-name run-id To find the run ID, see Batch pipeline run records , which returns a list of run IDs.
- GET -H "Authorization: Bearer ${AUTH TOKEN}" "${CDAP ENDPOINT}/v3/namespaces/ namespace-id /apps/ pipeline-name /spark/DataStreamsSparkStreaming/runs/ run-id /logs?start= start-ts &stop= stop-ts " Parameter Description / value namespace-id The namespace ID must either be the name of the namespace when it was created or default , which is the name of the default namespace. pipeline-name Your pipeline name. run-id Relevant only if you want to view logs of a specific pipeline run.
- GET -H "Authorization: Bearer ${AUTH TOKEN}" "${CDAP ENDPOINT}/v3/namespaces/ namespace-id /apps/ pipeline-name /workflows/DataPipelineWorkflow/runs/ run-id /logs?start= start-ts &stop= stop-ts " Parameter Description / value namespace-id The namespace ID must either be the name of the namespace when it was created or default , which is the name of the default namespace. pipeline-name Your pipeline name. run-id Relevant only if you want to view logs of a specific pipeline run.

### Replication API reference \_|\_ Cloud Data Fusion \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/data-fusion/docs/reference/replication-ref](https://docs.cloud.google.com/data-fusion/docs/reference/replication-ref)
- Source ID: `site-api-reference`
- Final score: 121
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- POST -H "Authorization: Bearer ${AUTH TOKEN}" "${CDAP ENDPOINT}/v3/namespaces/ namespace-id /apps/ replicator-name /workers/DeltaWorker/start" Parameter Description namespace-id The namespace of the replication job to start.
- POST -H "Authorization: Bearer ${AUTH TOKEN}" "${CDAP ENDPOINT}/v3/namespaces/ namespace-id /apps/ replicator-name /workers/DeltaWorker/stop" Parameter Description namespace-id The namespace of the replication job to stop.
- PUT -H "Authorization: Bearer ${AUTH TOKEN}" "${CDAP ENDPOINT}/v3/namespaces/ namespace-id /apps/ replicator-name " Parameter Description namespace-id The namespace in which to create the replication job.
- GET -H "Authorization: Bearer ${AUTH TOKEN}" "${CDAP ENDPOINT}/v3/namespaces/ namespace-id /apps/ replicator-name " Parameter Description namespace-id The namespace of the replication job to view.

### Cloud Data Fusion API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/data-fusion/docs/reference/rest](https://docs.cloud.google.com/data-fusion/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 90
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v1beta1.projects.locations REST Resource: v1beta1.projects.locations.instances REST Resource: v1beta1.projects.locations.instances.dnsPeerings REST Resource: v1beta1.projects.locations.instances.namespaces REST Resource: v1beta1.projects.locations.operations REST Resource: v1beta1.projects.locations.versions REST Resource: v1.projects.locations REST Resource: v1.projects.locations.instances REST Resource: v1.projects.locations.instances.dnsPeerings REST Resource: v1.projects.locations.operations REST Resource: v1.projects.locations.versions Service: datafusion.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- REST Resource: v1beta1.projects.locations.instances.namespaces Methods getIamPolicy GET /v1beta1/{resource=projects/ /locations/ /instances/ /namespaces/ }:getIamPolicy Gets the access control policy for a resource. list GET /v1beta1/{parent=projects/ /locations/ /instances/ }/namespaces List namespaces in a given instance setIamPolicy POST /v1beta1/{resource=projects/ /locations/ /instances/ /namespaces/ }:setIamPolicy Sets the access control policy on the specified resource. testIamPermissions POST /v1beta1/{resource=projects/ /locations/ /instances/ /namespaces/ }:testIamPermissions Returns permissions that a caller has on the specified resource.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://datafusion.googleapis.com REST Resource: v1beta1.projects.locations Methods get GET /v1beta1/{name=projects/ /locations/ } Gets information about a location. list GET /v1beta1/{name=projects/ }/locations Lists information about the supported locations for this service. removeIamPolicy POST /v1beta1/{resource=projects/ /locations/ / }:removeIamPolicy Remove IAM policy that is currently set on the given resource.
- This service provides the following discovery documents: https://datafusion.googleapis.com/$discovery/rest?version=v1 https://datafusion.googleapis.com/$discovery/rest?version=v1beta1 Service endpoint A service endpoint is a base URL that specifies the network address of an API service.

