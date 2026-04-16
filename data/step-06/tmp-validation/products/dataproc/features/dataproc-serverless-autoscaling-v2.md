---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.113Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Dataproc Serverless autoscaling V2"
feature_slug: "dataproc-serverless-autoscaling-v2"
latest_feature_date: "2023-11-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListAutoscalingPoliciesResponse"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies/create"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies/delete"
keywords:
  - "help"
  - "autoscaling"
  - "manage"
  - "workloads"
  - "serverless"
  - "supports"
---

# Dataproc Serverless autoscaling V2

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc Serverless supports autoscaling V2 to help manage workloads, performance, and costs.

## Extended Definition

Dataproc Serverless supports autoscaling V2 to help manage workloads, performance, and costs.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListAutoscalingPoliciesResponse](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListAutoscalingPoliciesResponse)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies/create](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies/create)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies/delete](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies/delete)

## Supporting Pages

### "ListAutoscalingPoliciesResponse \_|\_ Managed Service for Apache Spark \_\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListAutoscalingPoliciesResponse](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListAutoscalingPoliciesResponse)
- Source ID: `site-docs-reference`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Data analytics Managed Service for Apache Spark Reference Send feedback ListAutoscalingPoliciesResponse Stay organized with collections Save and categorize content based on your preferences.
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- JSON representation { "policies" : [ { object ( AutoscalingPolicy ) } ] , "nextPageToken" : string } Fields policies[] object ( AutoscalingPolicy ) Output only.
- JSON representation A response to a request to list autoscaling policies in a project.

### "Method: projects.locations.autoscalingPolicies.create \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies/create](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies/create)
- Source ID: `site-docs-reference`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Data analytics Managed Service for Apache Spark Reference Send feedback Method: projects.locations.autoscalingPolicies.create Stay organized with collections Save and categorize content based on your preferences.
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- For projects.regions.autoscalingPolicies.create , the resource name of the region has the following format: projects/{projectId}/regions/{region} For projects.locations.autoscalingPolicies.create , the resource name of the location has the following format: projects/{projectId}/locations/{location} Authorization requires the following IAM permission on the specified resource parent : dataproc.autoscalingPolicies.create Request body The request body contains an instance of AutoscalingPolicy .
- HTTP request POST https://dataproc.googleapis.com/v1/{parent=projects/ /locations/ }/autoscalingPolicies The URL uses gRPC Transcoding syntax.

### "Method: projects.locations.autoscalingPolicies.delete \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies/delete](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies/delete)
- Source ID: `site-docs-reference`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Data analytics Managed Service for Apache Spark Reference Send feedback Method: projects.locations.autoscalingPolicies.delete Stay organized with collections Save and categorize content based on your preferences.
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- For projects.regions.autoscalingPolicies.delete , the resource name of the policy has the following format: projects/{projectId}/regions/{region}/autoscalingPolicies/{policyId} For projects.locations.autoscalingPolicies.delete , the resource name of the policy has the following format: projects/{projectId}/locations/{location}/autoscalingPolicies/{policyId} Authorization requires the following IAM permission on the specified resource name : dataproc.autoscalingPolicies.delete Request body The request body must be empty.
- HTTP request DELETE https://dataproc.googleapis.com/v1/{name=projects/ /locations/ /autoscalingPolicies/ } The URL uses gRPC Transcoding syntax.

