---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.678Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "InstantiateInline workflow execution"
feature_slug: "instantiateinline-workflow-execution"
latest_feature_date: "2018-01-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest"
  - "https://docs.cloud.google.com/dataproc/docs/concepts/workflows/workflow-schedule-solutions"
keywords:
  - "instantiateinline"
  - "workflow"
  - "execution"
  - "lets"
  - "users"
  - "run"
  - "dataproc"
  - "workflows"
---

# InstantiateInline workflow execution

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

InstantiateInline lets users run Dataproc workflows directly without first creating a WorkflowTemplate.

## Extended Definition

InstantiateInline lets users run Dataproc workflows directly without first creating a WorkflowTemplate.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview](https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest](https://docs.cloud.google.com/dataproc/docs/reference/rest)
- [https://docs.cloud.google.com/dataproc/docs/concepts/workflows/workflow-schedule-solutions](https://docs.cloud.google.com/dataproc/docs/concepts/workflows/workflow-schedule-solutions)

## Supporting Pages

### "Workflow scheduling solutions \_|\_ Managed Service for Apache Spark \_\

- URL: [https://docs.cloud.google.com/dataproc/docs/concepts/workflows/workflow-schedule-solutions](https://docs.cloud.google.com/dataproc/docs/concepts/workflows/workflow-schedule-solutions)
- Source ID: `site-docs-root`
- Final score: 107
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Dataproc Workflow Templates Managed Service for Apache Spark Workflow templates provide a flexible and easy-to-use mechanism for managing and executing workflows.
- Advantages: Supports time- and event-based scheduling Simplified calls to Managed Service for Apache Spark using Operators Dynamically generate workflows and workflow parameters Build data flows that span multiple Google Cloud products Tutorial: Workflow using Cloud Composer Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Minimal coding required using Managed Service for Apache Spark Go , Node.js , or Python client libraries Dynamically generate workflows and workflow parameters Tutorial: Workflow using Cloud Run functions Cloud Composer Cloud Composer is a managed Apache Airflow service you can use to create, schedule, monitor, and manage workflows.
- You can use Cloud Run functions with Cloud Scheduler for workflows that require the calculation of time-based parameters.

### "Overview of Managed Service for Apache Spark Workflow Templates \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview](https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview)
- Source ID: `site-docs-root`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- Inline Workflows can be instantiated inline using the gcloud command with workflow template YAML files or by calling the Managed Service for Apache Spark InstantiateInline API (see Using inline Dataproc workflows ).
- The Managed Service for Apache Spark WorkflowTemplates API provides a flexible and easy-to-use mechanism for managing and executing workflows.
- A workflow can select a specific cluster by matching the goog-dataproc-cluster-name label (see Using Automatically Applied Labels ).
- Workflows encapsulate frequently used cluster configurations and jobs.

### "Cloud Dataproc API \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest](https://docs.cloud.google.com/dataproc/docs/reference/rest)
- Source ID: `site-docs-reference`
- Final score: 103
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v1.projects.locations.workflowTemplates Methods create POST /v1/{parent=projects/ /locations/ }/workflowTemplates Creates new workflow template. delete DELETE /v1/{name=projects/ /locations/ /workflowTemplates/ } Deletes a workflow template. get GET /v1/{name=projects/ /locations/ /workflowTemplates/ } Retrieves the latest workflow template. getIamPolicy POST /v1/{resource=projects/ /locations/ /workflowTemplates/ }:getIamPolicy Gets the access control policy for a resource. instantiate POST /v1/{name=projects/ /locations/ /workflowTemplates/ }:instantiate Instantiates a template and begins execution. instantiateInline POST /v1/{parent=projects/ /locations/ }/workflowTemplates:instantiateInline Instantiates a template and begins execution. list GET /v1/{parent=projects/ /locations/ }/workflowTemplates Lists workflows that match the specified filter in the request. setIamPolicy POST /v1/{resource=projects/ /locations/ /workflowTemplates/ }:setIamPolicy Sets the access control policy on the specified resource. testIamPermissions POST /v1/{resource=projects/ /locations/ /workflowTemplates/ }:testIamPermissions Returns permissions that a caller has on the specified resource. update PUT /v1/{template.name=projects/ /locations/ /workflowTemplates/ } Updates (replaces) workflow template.
- REST Resource: v1.projects.regions.workflowTemplates Methods create POST /v1/{parent=projects/ /regions/ }/workflowTemplates Creates new workflow template. delete DELETE /v1/{name=projects/ /regions/ /workflowTemplates/ } Deletes a workflow template. get GET /v1/{name=projects/ /regions/ /workflowTemplates/ } Retrieves the latest workflow template. getIamPolicy POST /v1/{resource=projects/ /regions/ /workflowTemplates/ }:getIamPolicy Gets the access control policy for a resource. instantiate POST /v1/{name=projects/ /regions/ /workflowTemplates/ }:instantiate Instantiates a template and begins execution. instantiateInline POST /v1/{parent=projects/ /regions/ }/workflowTemplates:instantiateInline Instantiates a template and begins execution. list GET /v1/{parent=projects/ /regions/ }/workflowTemplates Lists workflows that match the specified filter in the request. setIamPolicy POST /v1/{resource=projects/ /regions/ /workflowTemplates/ }:setIamPolicy Sets the access control policy on the specified resource. testIamPermissions POST /v1/{resource=projects/ /regions/ /workflowTemplates/ }:testIamPermissions Returns permissions that a caller has on the specified resource. update PUT /v1/{template.name=projects/ /regions/ /workflowTemplates/ } Updates (replaces) workflow template.
- REST Resource: v1.projects.locations.autoscalingPolicies REST Resource: v1.projects.locations.operations REST Resource: v1.projects.locations.workflowTemplates REST Resource: v1.projects.regions.autoscalingPolicies REST Resource: v1.projects.regions.clusters REST Resource: v1.projects.regions.clusters.nodeGroups REST Resource: v1.projects.regions.jobs REST Resource: v1.projects.regions.operations REST Resource: v1.projects.regions.workflowTemplates Service: dataproc.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://dataproc.googleapis.com REST Resource: v1.projects.locations.autoscalingPolicies Methods create POST /v1/{parent=projects/ /locations/ }/autoscalingPolicies Creates new autoscaling policy. delete DELETE /v1/{name=projects/ /locations/ /autoscalingPolicies/ } Deletes an autoscaling policy. get GET /v1/{name=projects/ /locations/ /autoscalingPolicies/ } Retrieves autoscaling policy. getIamPolicy POST /v1/{resource=projects/ /locations/ /autoscalingPolicies/ }:getIamPolicy Gets the access control policy for a resource. list GET /v1/{parent=projects/ /locations/ }/autoscalingPolicies Lists autoscaling policies in the project. setIamPolicy POST /v1/{resource=projects/ /locations/ /autoscalingPolicies/ }:setIamPolicy Sets the access control policy on the specified resource. testIamPermissions POST /v1/{resource=projects/ /locations/ /autoscalingPolicies/ }:testIamPermissions Returns permissions that a caller has on the specified resource. update PUT /v1/{policy.name=projects/ /locations/ /autoscalingPolicies/ } Updates (replaces) autoscaling policy.

