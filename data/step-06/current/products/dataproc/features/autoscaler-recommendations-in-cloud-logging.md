---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.656Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Autoscaler recommendations in Cloud Logging"
feature_slug: "autoscaler-recommendations-in-cloud-logging"
latest_feature_date: "2019-12-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicy.Builder"
keywords:
  - "autoscaler"
  - "recommendations"
  - "logging"
  - "include"
  - "configured"
  - "worker"
  - "limits"
  - "graceful"
---

# Autoscaler recommendations in Cloud Logging

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Autoscaler recommendations in Cloud Logging include configured worker limits, graceful decommission timeout, and reasons scaling actions were capped.

## Extended Definition

Autoscaler recommendations in Cloud Logging include configured worker limits, graceful decommission timeout, and reasons scaling actions were capped.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicy.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicy.Builder)

## Supporting Pages

### "REST Resource: projects.locations.autoscalingPolicies \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies)
- Source ID: `site-docs-reference`
- Final score: 97
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "gracefulDecommissionTimeout" : string , "scaleUpFactor" : number , "scaleDownFactor" : number , "scaleUpMinWorkerFraction" : number , "scaleDownMinWorkerFraction" : number } Fields gracefulDecommissionTimeout string ( Duration format) Required.
- If weight is not set on any instance group, the cluster will default to equal weight for all groups: the cluster will attempt to maintain an equal number of workers in each group within the configured size bounds for each group.
- For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler must recommend at least a 2 worker scale-down for the cluster to scale.
- For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler must recommend at least a 2-worker scale-up for the cluster to scale.

### "Class AutoscalingPolicy.Builder (4.85.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicy.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AutoscalingPolicy.Builder)
- Source ID: `site-java-reference`
- Final score: 89
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Describes how the autoscaler will operate for primary workers. .google.cloud.dataproc.v1.InstanceGroupAutoscalingPolicyConfig worker config = 4 [(.google.api.field behavior) = REQUIRED]; Returns Type Description InstanceGroupAutoscalingPolicyConfigOrBuilder hasBasicAlgorithm() public boolean hasBasicAlgorithm () .google.cloud.dataproc.v1.BasicAutoscalingAlgorithm basic algorithm = 3 [(.google.api.field behavior) = REQUIRED]; Returns Type Description boolean Whether the basicAlgorithm field is set. hasSecondaryWorkerConfig() public boolean hasSecondaryWorkerConfig () Optional.
- Describes how the autoscaler will operate for primary workers. .google.cloud.dataproc.v1.InstanceGroupAutoscalingPolicyConfig worker config = 4 [(.google.api.field behavior) = REQUIRED]; Parameter Name Description builderForValue InstanceGroupAutoscalingPolicyConfig.Builder Returns Type Description AutoscalingPolicy.Builder Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Describes how the autoscaler will operate for secondary workers. .google.cloud.dataproc.v1.InstanceGroupAutoscalingPolicyConfig secondary worker config = 5 [(.google.api.field behavior) = OPTIONAL]; Parameter Name Description value InstanceGroupAutoscalingPolicyConfig Returns Type Description AutoscalingPolicy.Builder setSecondaryWorkerConfig(InstanceGroupAutoscalingPolicyConfig.Builder builderForValue) public AutoscalingPolicy .
- Describes how the autoscaler will operate for secondary workers. .google.cloud.dataproc.v1.InstanceGroupAutoscalingPolicyConfig secondary worker config = 5 [(.google.api.field behavior) = OPTIONAL]; Parameter Name Description builderForValue InstanceGroupAutoscalingPolicyConfig.Builder Returns Type Description AutoscalingPolicy.Builder setWorkerConfig(InstanceGroupAutoscalingPolicyConfig value) public AutoscalingPolicy .

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

