---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.181Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Autoscaler recommendations in Cloud Logging"
feature_slug: "autoscaler-recommendations-in-cloud-logging"
latest_feature_date: "2019-12-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies"
  - "https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1"
keywords:
  - "recommendations"
  - "limits"
  - "autoscaler"
  - "graceful"
  - "configured"
  - "logging"
  - "include"
  - "worker"
---

# Autoscaler recommendations in Cloud Logging

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Autoscaler recommendations in Cloud Logging include configured worker limits, graceful decommission timeout, and reasons scaling actions were capped.

## Extended Definition

Autoscaler recommendations in Cloud Logging include configured worker limits, graceful decommission timeout, and reasons scaling actions were capped.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies)
- [https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups](https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)

## Supporting Pages

### "REST Resource: projects.locations.autoscalingPolicies \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies)
- Source ID: `site-docs-reference`
- Final score: 85
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- JSON representation { "gracefulDecommissionTimeout" : string , "scaleUpFactor" : number , "scaleDownFactor" : number , "scaleUpMinWorkerFraction" : number , "scaleDownMinWorkerFraction" : number } Fields gracefulDecommissionTimeout string ( Duration format) Required.
- If weight is not set on any instance group, the cluster will default to equal weight for all groups: the cluster will attempt to maintain an equal number of workers in each group within the configured size bounds for each group.
- For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler must recommend at least a 2 worker scale-down for the cluster to scale.
- For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler must recommend at least a 2-worker scale-up for the cluster to scale.

### "Package com.google.cloud.dataproc.v1 (4.85.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- Source ID: `site-java-reference`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Gke Node Pool Autoscaling Config GkeNodePoolAutoscaling contains information the cluster autoscaler needs to adjust the size of the node pool to the current cluster usage. com. google. cloud. dataproc. v1.
- Builder GkeNodePoolAutoscaling contains information the cluster autoscaler needs to adjust the size of the node pool to the current cluster usage. com. google. cloud. dataproc. v1.
- Node Initialization Action Specifies an executable to run on a fully configured node and a timeout period for executable completion. com. google. cloud. dataproc. v1.
- Instance Group Config The config settings for Compute Engine resources in an instance group, such as a master or worker group. com. google. cloud. dataproc. v1.

### Managed Service for Apache Spark driver node groups \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups](https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups)
- Source ID: `site-iam-reference`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Driver node group compared to Spark cluster mode Feature Spark cluster mode Driver node group Worker node scale down Long-lived drivers run on the same worker nodes as short-lived containers, making scale down of workers using graceful decommission slow.
- A scale down of worker nodes can be slow if you enable graceful decommissioning .
- Example: { "size": SIZE , "gracefulDecommissionTimeout": " TIMEOUT DURATION " } HTTP method and URL: POST https://dataproc.googleapis.com/v1/projects/ PROJECT ID /regions/ REGION /clusters/ CLUSTER NAME /nodeGroups/ Node GROUP ID :resize Request JSON body: { "size": SIZE , } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Run the following gcloud CLI command to list the location of driver logs in Cloud Storage: gcloud dataproc jobs describe JOB ID \ --region= REGION The Cloud Storage location of driver logs is listed as the driverOutputResourceUri in the command output in the following format: driverOutputResourceUri: gs:// CLUSTER STAGING BUCKET /google-cloud-dataproc-metainfo/ CLUSTER UUID /jobs/ JOB ID Console To view node group cluster logs: Enable Logging .

