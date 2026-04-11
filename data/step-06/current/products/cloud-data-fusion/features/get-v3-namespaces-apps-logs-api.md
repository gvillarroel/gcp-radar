---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:04:57.769Z"
product_name: "Cloud Data Fusion"
product_slug: "cloud-data-fusion"
feature_name: "GET /v3/namespaces/.../apps/.../logs API"
feature_slug: "get-v3-namespaces-apps-logs-api"
latest_feature_date: "2025-03-17"
deprecation_date: "2025-03-17"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference"
  - "https://docs.cloud.google.com/data-fusion/docs/release-notes"
  - "https://docs.cloud.google.com/data-fusion/docs/reference/replication-ref"
keywords:
  - "get"
  - "v3"
  - "namespaces"
  - "apps"
  - "logs"
  - "api"
  - "the"
  - "namespace"
---

# GET /v3/namespaces/.../apps/.../logs API

Product: Cloud Data Fusion
Coverage: LOW

## Step 02 Summary

The namespace/application logs download API was deprecated for system service and pipeline run log retrieval; deprecated on 2025-03-17.

## Extended Definition

The namespace/application logs download API was deprecated for system service and pipeline run log retrieval; deprecated on 2025-03-17.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference](https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference)
- [https://docs.cloud.google.com/data-fusion/docs/release-notes](https://docs.cloud.google.com/data-fusion/docs/release-notes)
- [https://docs.cloud.google.com/data-fusion/docs/reference/replication-ref](https://docs.cloud.google.com/data-fusion/docs/reference/replication-ref)

## Supporting Pages

### CDAP reference \_|\_ Cloud Data Fusion \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference](https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference)
- Source ID: `site-api-reference`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- GET -H "Authorization: Bearer ${AUTH TOKEN}" "${CDAP ENDPOINT}/v3/namespaces/ namespace-id /apps/ pipeline-name /workflows/DataPipelineWorkflow/runs/ run-id /logs?start= start-ts &stop= stop-ts " Parameter Description / value namespace-id The namespace ID must either be the name of the namespace when it was created or default , which is the name of the default namespace. pipeline-name Your pipeline name. run-id Relevant only if you want to view logs of a specific pipeline run.
- GET -H "Authorization: Bearer ${AUTH TOKEN}" "${CDAP ENDPOINT}/v3/namespaces/ namespace-id /apps/ pipeline-name /workflows/DataPipelineWorkflow/logs?start= start-ts &stop= stop-ts To view logs of a specific run of a batch pipeline, submit the following HTTP GET request.
- GET -H "Authorization: Bearer ${AUTH TOKEN}" "${CDAP ENDPOINT}/v3/namespaces/ namespace-id /apps/ pipeline-name /workflows/DataPipelineWorkflow/runs Records of a batch pipeline run GET -H "Authorization: Bearer ${AUTH TOKEN}" "${CDAP ENDPOINT}/v3/namespaces/ namespace-id /apps/ pipeline-name /workflows/DataPipelineWorkflow/runs/ run-id Parameter Description namespace-id The namespace ID must either be the name of the namespace when it was created or default , which is the name of the default namespace. pipeline-name run-id To find the run ID, see Batch pipeline run records , which returns a list of run IDs.
- GET -H "Authorization: Bearer ${AUTH TOKEN}" "${CDAP ENDPOINT}/v3/namespaces/ namespace-id /apps/ pipeline-name /spark/DataStreamsSparkStreaming/runs/ run-id /logs?start= start-ts &stop= stop-ts " Parameter Description / value namespace-id The namespace ID must either be the name of the namespace when it was created or default , which is the name of the default namespace. pipeline-name Your pipeline name. run-id Relevant only if you want to view logs of a specific pipeline run.

### Cloud Data Fusion release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/data-fusion/docs/release-notes](https://docs.cloud.google.com/data-fusion/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- Deprecated The following APIs for downloading system service and pipeline run logs are deprecated in 6.11.0: GET /v3/namespaces/<NAMESPACE ID>/apps/<APP ID>/<PROGRAM TYPE>/<PROGRAM ID>/logs GET /v3/system/services/<SERVICE ID>/logs Deprecated The ability to retrieve all applications without pagination using the GET /v3/namespaces/<NAMESPACE ID>/apps endpoint is deprecated in 6.11.0.
- This release includes the following feature: InstanceV3 monitored-resource: Introduced datafusion.googleapis.com/InstanceV3 as the default monitored resource for instance-level metrics and system service logs.
- When using role-based access control, performing the List Pipelines operation requires datafusion.pipelines.list permission, in addition to datafusion.namespaces.get permission.
- Change To support the Private Service Connect integration, the following permissions are added to the Cloud Data Fusion API Service Agent role: compute.networkAttachments.get compute.networkAttachments.update compute.networkAttachments.list Fixed Fixed in Cloud Data Fusion 6.10.0: Fixed an issue in the Postgres DB plugin causing macros to be unsupported for database configuration ( PLUGIN-1681 ).

### Replication API reference \_|\_ Cloud Data Fusion \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/data-fusion/docs/reference/replication-ref](https://docs.cloud.google.com/data-fusion/docs/reference/replication-ref)
- Source ID: `site-api-reference`
- Final score: 154
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- GET -H "Authorization: Bearer ${AUTH TOKEN}" "${CDAP ENDPOINT}/v3/namespaces/ namespace-id /apps/ replicator-name " Parameter Description namespace-id The namespace of the replication job to view.
- GET -H "Authorization: Bearer ${AUTH TOKEN}" "${CDAP ENDPOINT}/v3/namespaces/ namespace-id /apps" Parameter Description namespace-id The namespace of the replication jobs to list.
- POST -H "Authorization: Bearer ${AUTH TOKEN}" "${CDAP ENDPOINT}/v3/namespaces/ namespace-id /apps/ replicator-name /workers/DeltaWorker/start" Parameter Description namespace-id The namespace of the replication job to start.
- POST -H "Authorization: Bearer ${AUTH TOKEN}" "${CDAP ENDPOINT}/v3/namespaces/ namespace-id /apps/ replicator-name /workers/DeltaWorker/stop" Parameter Description namespace-id The namespace of the replication job to stop.

