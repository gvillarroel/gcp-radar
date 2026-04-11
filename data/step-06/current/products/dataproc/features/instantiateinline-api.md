---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.105Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "InstantiateInline API"
feature_slug: "instantiateinline-api"
latest_feature_date: "2018-09-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1"
keywords:
  - "instantiateinline"
  - "api"
  - "the"
  - "lets"
  - "users"
  - "instantiate"
  - "dataproc"
  - "workflow"
---

# InstantiateInline API

Product: Dataproc
Coverage: LOW

## Step 02 Summary

The InstantiateInline API lets users instantiate Dataproc workflow templates inline through the API.

## Extended Definition

The InstantiateInline API lets users instantiate Dataproc workflow templates inline through the API.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest](https://docs.cloud.google.com/dataproc/docs/reference/rest)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)

## Supporting Pages

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- September 25, 2018 Feature Announcing the General Availability (GA) release of Cloud Dataproc Workflow Templates , including Workflow Template Parameterization and the Workflow Templates InstantiateInline API .
- January 10, 2018 Feature It is now possible to instantiate Dataproc workflows directly without creating a WorkflowTemplate by using the new InstantiateInline method .
- November 13, 2025 Announcement New Serverless for Apache Spark runtime versions : 1.2.62 2.2.62 2.3.15 Feature Serverless for Apache Spark: Added the dataproc.artifacts.remove property, which lets users remove default artifacts, such as spark-bigquery-connector , iceberg , and delta-lake from a Serverless for Apache Spark runtime.
- Announcement Announcing the General Availability (GA) release of the Dataproc Workflow Timeout feature, which allows users to set a timeout on their graph of jobs and automatically cancel their workflow after a specified period.

### "Cloud Dataproc API \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest](https://docs.cloud.google.com/dataproc/docs/reference/rest)
- Source ID: `site-docs-reference`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- REST Resource: v1.projects.locations.workflowTemplates Methods create POST /v1/{parent=projects/ /locations/ }/workflowTemplates Creates new workflow template. delete DELETE /v1/{name=projects/ /locations/ /workflowTemplates/ } Deletes a workflow template. get GET /v1/{name=projects/ /locations/ /workflowTemplates/ } Retrieves the latest workflow template. getIamPolicy POST /v1/{resource=projects/ /locations/ /workflowTemplates/ }:getIamPolicy Gets the access control policy for a resource. instantiate POST /v1/{name=projects/ /locations/ /workflowTemplates/ }:instantiate Instantiates a template and begins execution. instantiateInline POST /v1/{parent=projects/ /locations/ }/workflowTemplates:instantiateInline Instantiates a template and begins execution. list GET /v1/{parent=projects/ /locations/ }/workflowTemplates Lists workflows that match the specified filter in the request. setIamPolicy POST /v1/{resource=projects/ /locations/ /workflowTemplates/ }:setIamPolicy Sets the access control policy on the specified resource. testIamPermissions POST /v1/{resource=projects/ /locations/ /workflowTemplates/ }:testIamPermissions Returns permissions that a caller has on the specified resource. update PUT /v1/{template.name=projects/ /locations/ /workflowTemplates/ } Updates (replaces) workflow template.
- REST Resource: v1.projects.regions.workflowTemplates Methods create POST /v1/{parent=projects/ /regions/ }/workflowTemplates Creates new workflow template. delete DELETE /v1/{name=projects/ /regions/ /workflowTemplates/ } Deletes a workflow template. get GET /v1/{name=projects/ /regions/ /workflowTemplates/ } Retrieves the latest workflow template. getIamPolicy POST /v1/{resource=projects/ /regions/ /workflowTemplates/ }:getIamPolicy Gets the access control policy for a resource. instantiate POST /v1/{name=projects/ /regions/ /workflowTemplates/ }:instantiate Instantiates a template and begins execution. instantiateInline POST /v1/{parent=projects/ /regions/ }/workflowTemplates:instantiateInline Instantiates a template and begins execution. list GET /v1/{parent=projects/ /regions/ }/workflowTemplates Lists workflows that match the specified filter in the request. setIamPolicy POST /v1/{resource=projects/ /regions/ /workflowTemplates/ }:setIamPolicy Sets the access control policy on the specified resource. testIamPermissions POST /v1/{resource=projects/ /regions/ /workflowTemplates/ }:testIamPermissions Returns permissions that a caller has on the specified resource. update PUT /v1/{template.name=projects/ /regions/ /workflowTemplates/ } Updates (replaces) workflow template.
- REST Resource: v1.projects.locations.autoscalingPolicies REST Resource: v1.projects.locations.operations REST Resource: v1.projects.locations.workflowTemplates REST Resource: v1.projects.regions.autoscalingPolicies REST Resource: v1.projects.regions.clusters REST Resource: v1.projects.regions.clusters.nodeGroups REST Resource: v1.projects.regions.jobs REST Resource: v1.projects.regions.operations REST Resource: v1.projects.regions.workflowTemplates Service: dataproc.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://dataproc.googleapis.com REST Resource: v1.projects.locations.autoscalingPolicies Methods create POST /v1/{parent=projects/ /locations/ }/autoscalingPolicies Creates new autoscaling policy. delete DELETE /v1/{name=projects/ /locations/ /autoscalingPolicies/ } Deletes an autoscaling policy. get GET /v1/{name=projects/ /locations/ /autoscalingPolicies/ } Retrieves autoscaling policy. getIamPolicy POST /v1/{resource=projects/ /locations/ /autoscalingPolicies/ }:getIamPolicy Gets the access control policy for a resource. list GET /v1/{parent=projects/ /locations/ }/autoscalingPolicies Lists autoscaling policies in the project. setIamPolicy POST /v1/{resource=projects/ /locations/ /autoscalingPolicies/ }:setIamPolicy Sets the access control policy on the specified resource. testIamPermissions POST /v1/{resource=projects/ /locations/ /autoscalingPolicies/ }:testIamPermissions Returns permissions that a caller has on the specified resource. update PUT /v1/{policy.name=projects/ /locations/ /autoscalingPolicies/ } Updates (replaces) autoscaling policy.

### "Package com.google.cloud.dataproc.v1 (4.85.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- Source ID: `site-java-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Workflow Template Service Grpc The API interface for managing Workflow Templates in the Dataproc API. com. google. cloud. dataproc. v1.
- Workflow Template Service Client Service Description: The API interface for managing Workflow Templates in the Dataproc API.
- Async Service The API interface for managing Workflow Templates in the Dataproc API. com. google. cloud. dataproc. v1.
- The API interface for managing Workflow Templates in the com. google. cloud. dataproc. v1.

