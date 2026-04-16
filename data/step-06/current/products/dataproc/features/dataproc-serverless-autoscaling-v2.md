---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.593Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Dataproc Serverless autoscaling V2"
feature_slug: "dataproc-serverless-autoscaling-v2"
latest_feature_date: "2023-11-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListAutoscalingPoliciesResponse"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies/create"
keywords:
  - "dataproc"
  - "serverless"
  - "autoscaling"
  - "v2"
  - "supports"
  - "help"
  - "manage"
  - "workloads"
---

# Dataproc Serverless autoscaling V2

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc Serverless supports autoscaling V2 to help manage workloads, performance, and costs.

## Extended Definition

Dataproc Serverless supports autoscaling V2 to help manage workloads, performance, and costs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListAutoscalingPoliciesResponse](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListAutoscalingPoliciesResponse)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies/create](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies/create)

## Supporting Pages

### "REST Resource: projects.locations.autoscalingPolicies \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies)
- Source ID: `site-docs-reference`
- Final score: 112
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- Resource: AutoscalingPolicy JSON representation BasicAutoscalingAlgorithm JSON representation BasicYarnAutoscalingConfig JSON representation InstanceGroupAutoscalingPolicyConfig JSON representation ClusterType Methods Resource: AutoscalingPolicy Describes an autoscaling policy for Dataproc cluster autoscaler.
- Home Documentation Data analytics Managed Service for Apache Spark Reference Send feedback REST Resource: projects.locations.autoscalingPolicies Stay organized with collections Save and categorize content based on your preferences.
- JSON representation { "id" : string , "name" : string , "workerConfig" : { object ( InstanceGroupAutoscalingPolicyConfig ) } , "secondaryWorkerConfig" : { object ( InstanceGroupAutoscalingPolicyConfig ) } , "clusterType" : enum ( ClusterType ) , // Union field algorithm can be only one of the following: "basicAlgorithm" : { object ( BasicAutoscalingAlgorithm ) } // End of list of possible types for union field algorithm . } Fields id string Required.

### "ListAutoscalingPoliciesResponse \_|\_ Managed Service for Apache Spark \_\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListAutoscalingPoliciesResponse](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListAutoscalingPoliciesResponse)
- Source ID: `site-docs-reference`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- Home Documentation Data analytics Managed Service for Apache Spark Reference Send feedback ListAutoscalingPoliciesResponse Stay organized with collections Save and categorize content based on your preferences.
- JSON representation { "policies" : [ { object ( AutoscalingPolicy ) } ] , "nextPageToken" : string } Fields policies[] object ( AutoscalingPolicy ) Output only.
- JSON representation A response to a request to list autoscaling policies in a project.

### "Method: projects.locations.autoscalingPolicies.create \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies/create](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies/create)
- Source ID: `site-docs-reference`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- For projects.regions.autoscalingPolicies.create , the resource name of the region has the following format: projects/{projectId}/regions/{region} For projects.locations.autoscalingPolicies.create , the resource name of the location has the following format: projects/{projectId}/locations/{location} Authorization requires the following IAM permission on the specified resource parent : dataproc.autoscalingPolicies.create Request body The request body contains an instance of AutoscalingPolicy .
- Home Documentation Data analytics Managed Service for Apache Spark Reference Send feedback Method: projects.locations.autoscalingPolicies.create Stay organized with collections Save and categorize content based on your preferences.
- HTTP request POST https://dataproc.googleapis.com/v1/{parent=projects/ /locations/ }/autoscalingPolicies The URL uses gRPC Transcoding syntax.

