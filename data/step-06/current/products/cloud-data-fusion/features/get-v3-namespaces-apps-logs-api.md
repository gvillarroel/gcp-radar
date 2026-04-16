---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:45.380Z"
product_name: "Cloud Data Fusion"
product_slug: "cloud-data-fusion"
feature_name: "GET /v3/namespaces/.../apps/.../logs API"
feature_slug: "get-v3-namespaces-apps-logs-api"
latest_feature_date: "2025-03-17"
deprecation_date: "2025-03-17"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference"
  - "https://docs.cloud.google.com/data-fusion/docs/reference/replication-ref"
  - "https://docs.cloud.google.com/data-fusion/docs/tutorials/pipeline-monitoring-dashboard"
keywords:
  - "get"
  - "v3"
  - "namespaces"
  - "apps"
  - "logs"
  - "namespace"
  - "application"
  - "download"
---

# GET /v3/namespaces/.../apps/.../logs API

Product: Cloud Data Fusion
Coverage: MEDIUM

## Step 02 Summary

The namespace/application logs download API was deprecated for system service and pipeline run log retrieval; deprecated on 2025-03-17.

## Extended Definition

The namespace/application logs download API was deprecated for system service and pipeline run log retrieval; deprecated on 2025-03-17.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference](https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference)
- [https://docs.cloud.google.com/data-fusion/docs/reference/replication-ref](https://docs.cloud.google.com/data-fusion/docs/reference/replication-ref)
- [https://docs.cloud.google.com/data-fusion/docs/tutorials/pipeline-monitoring-dashboard](https://docs.cloud.google.com/data-fusion/docs/tutorials/pipeline-monitoring-dashboard)

## Supporting Pages

### CDAP reference \_|\_ Cloud Data Fusion \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference](https://docs.cloud.google.com/data-fusion/docs/reference/cdap-reference)
- Source ID: `site-api-reference`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- GET -H "Authorization: Bearer ${AUTH TOKEN}" "${CDAP ENDPOINT}/v3/namespaces/ namespace-id /apps/ pipeline-name /spark/DataStreamsSparkStreaming/runs/ run-id /logs?start= start-ts &stop= stop-ts " Parameter Description / value namespace-id The namespace ID must either be the name of the namespace when it was created or default , which is the name of the default namespace. pipeline-name Your pipeline name. run-id Relevant only if you want to view logs of a specific pipeline run.
- GET -H "Authorization: Bearer ${AUTH TOKEN}" "${CDAP ENDPOINT}/v3/namespaces/ namespace-id /apps/ pipeline-name /workflows/DataPipelineWorkflow/runs/ run-id /logs?start= start-ts &stop= stop-ts " Parameter Description / value namespace-id The namespace ID must either be the name of the namespace when it was created or default , which is the name of the default namespace. pipeline-name Your pipeline name. run-id Relevant only if you want to view logs of a specific pipeline run.
- GET -H "Authorization: Bearer ${AUTH TOKEN}" "${CDAP ENDPOINT}/v3/namespaces/ namespace-id /apps/ pipeline-name /spark/DataStreamsSparkStreaming/logs?start= start-ts &stop= stop-ts " To view logs of a specific run of a real-time pipeline, submit the following HTTP GET request.
- GET -H "Authorization: Bearer ${AUTH TOKEN}" "${CDAP ENDPOINT}/v3/namespaces/ namespace-id /apps/ pipeline-name /workflows/DataPipelineWorkflow/logs?start= start-ts &stop= stop-ts To view logs of a specific run of a batch pipeline, submit the following HTTP GET request.

### Replication API reference \_|\_ Cloud Data Fusion \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/data-fusion/docs/reference/replication-ref](https://docs.cloud.google.com/data-fusion/docs/reference/replication-ref)
- Source ID: `site-api-reference`
- Final score: 128
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- POST -H "Authorization: Bearer ${AUTH TOKEN}" "${CDAP ENDPOINT}/v3/namespaces/ namespace-id /apps/ replicator-name /workers/DeltaWorker/start" Parameter Description namespace-id The namespace of the replication job to start.
- POST -H "Authorization: Bearer ${AUTH TOKEN}" "${CDAP ENDPOINT}/v3/namespaces/ namespace-id /apps/ replicator-name /workers/DeltaWorker/stop" Parameter Description namespace-id The namespace of the replication job to stop.
- PUT -H "Authorization: Bearer ${AUTH TOKEN}" "${CDAP ENDPOINT}/v3/namespaces/ namespace-id /apps/ replicator-name " Parameter Description namespace-id The namespace in which to create the replication job.
- GET -H "Authorization: Bearer ${AUTH TOKEN}" "${CDAP ENDPOINT}/v3/namespaces/ namespace-id /apps/ replicator-name " Parameter Description namespace-id The namespace of the replication job to view.

### "Create a pipeline monitoring dashboard using Cloud Monitoring \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/data-fusion/docs/tutorials/pipeline-monitoring-dashboard](https://docs.cloud.google.com/data-fusion/docs/tutorials/pipeline-monitoring-dashboard)
- Source ID: `site-iam-reference`
- Final score: 90
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Label name Label type Field name Project STRING resource.labels.project id Message STRING jsonPayload.message LoggerName STRING labels.loggerName ClusterName STRING resource.labels.cluster name SparkPhase STRING labels.".workflowSparkId" Region STRING resource.labels.region Pipeline STRING labels.".applicationId" RunId STRING labels.".runId" Namespace STRING labels.".namespaceId" LogLevel STRING labels.levelName Click Create metric .
- In the Build filter field, enter the following: resource.type="cloud dataproc cluster" log name= "projects/. /logs/datafusion-pipeline-logs" In the Labels section, click Add label and create the following labels.
- To preserve the URLs that use the project ID, such as an appspot.com URL, delete selected resources inside the project instead of deleting the whole project.
- Copy the content of the downloaded JSON file and paste it into the JSON editor, replacing the content that the JSON editor contains by default.

