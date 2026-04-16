---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.199Z"
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
  - "execution"
  - "instantiateinline"
  - "workflows"
  - "workflow"
  - "users"
  - "lets"
---

# InstantiateInline workflow execution

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

InstantiateInline lets users run Dataproc workflows directly without first creating a WorkflowTemplate.

## Extended Definition

InstantiateInline lets users run Dataproc workflows directly without first creating a WorkflowTemplate.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview](https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest](https://docs.cloud.google.com/dataproc/docs/reference/rest)
- [https://docs.cloud.google.com/dataproc/docs/concepts/workflows/workflow-schedule-solutions](https://docs.cloud.google.com/dataproc/docs/concepts/workflows/workflow-schedule-solutions)

## Supporting Pages

### "Overview of Managed Service for Apache Spark Workflow Templates \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview](https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview)
- Source ID: `site-docs-root`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- Inline Workflows can be instantiated inline using the gcloud command with workflow template YAML files or by calling the Managed Service for Apache Spark InstantiateInline API (see Using inline Dataproc workflows ).
- The Managed Service for Apache Spark WorkflowTemplates API provides a flexible and easy-to-use mechanism for managing and executing workflows.
- Workflows encapsulate frequently used cluster configurations and jobs.
- Inline workflows do not create or modify workflow template resources.

### "Workflow scheduling solutions \_|\_ Managed Service for Apache Spark \_\

- URL: [https://docs.cloud.google.com/dataproc/docs/concepts/workflows/workflow-schedule-solutions](https://docs.cloud.google.com/dataproc/docs/concepts/workflows/workflow-schedule-solutions)
- Source ID: `site-docs-root`
- Final score: 95
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Advantages: Supports time- and event-based scheduling Simplified calls to Managed Service for Apache Spark using Operators Dynamically generate workflows and workflow parameters Build data flows that span multiple Google Cloud products Tutorial: Workflow using Cloud Composer Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Minimal coding required using Managed Service for Apache Spark Go , Node.js , or Python client libraries Dynamically generate workflows and workflow parameters Tutorial: Workflow using Cloud Run functions Cloud Composer Cloud Composer is a managed Apache Airflow service you can use to create, schedule, monitor, and manage workflows.
- Dataproc Workflow Templates Managed Service for Apache Spark Workflow templates provide a flexible and easy-to-use mechanism for managing and executing workflows.
- You can use Cloud Run functions with Cloud Scheduler for workflows that require the calculation of time-based parameters.

### "Cloud Dataproc API \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest](https://docs.cloud.google.com/dataproc/docs/reference/rest)
- Source ID: `site-docs-reference`
- Final score: 91
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- REST Resource: v1.projects.locations.workflowTemplates Methods create POST /v1/{parent=projects/ /locations/ }/workflowTemplates Creates new workflow template. delete DELETE /v1/{name=projects/ /locations/ /workflowTemplates/ } Deletes a workflow template. get GET /v1/{name=projects/ /locations/ /workflowTemplates/ } Retrieves the latest workflow template. getIamPolicy POST /v1/{resource=projects/ /locations/ /workflowTemplates/ }:getIamPolicy Gets the access control policy for a resource. instantiate POST /v1/{name=projects/ /locations/ /workflowTemplates/ }:instantiate Instantiates a template and begins execution. instantiateInline POST /v1/{parent=projects/ /locations/ }/workflowTemplates:instantiateInline Instantiates a template and begins execution. list GET /v1/{parent=projects/ /locations/ }/workflowTemplates Lists workflows that match the specified filter in the request. setIamPolicy POST /v1/{resource=projects/ /locations/ /workflowTemplates/ }:setIamPolicy Sets the access control policy on the specified resource. testIamPermissions POST /v1/{resource=projects/ /locations/ /workflowTemplates/ }:testIamPermissions Returns permissions that a caller has on the specified resource. update PUT /v1/{template.name=projects/ /locations/ /workflowTemplates/ } Updates (replaces) workflow template.
- REST Resource: v1.projects.regions.workflowTemplates Methods create POST /v1/{parent=projects/ /regions/ }/workflowTemplates Creates new workflow template. delete DELETE /v1/{name=projects/ /regions/ /workflowTemplates/ } Deletes a workflow template. get GET /v1/{name=projects/ /regions/ /workflowTemplates/ } Retrieves the latest workflow template. getIamPolicy POST /v1/{resource=projects/ /regions/ /workflowTemplates/ }:getIamPolicy Gets the access control policy for a resource. instantiate POST /v1/{name=projects/ /regions/ /workflowTemplates/ }:instantiate Instantiates a template and begins execution. instantiateInline POST /v1/{parent=projects/ /regions/ }/workflowTemplates:instantiateInline Instantiates a template and begins execution. list GET /v1/{parent=projects/ /regions/ }/workflowTemplates Lists workflows that match the specified filter in the request. setIamPolicy POST /v1/{resource=projects/ /regions/ /workflowTemplates/ }:setIamPolicy Sets the access control policy on the specified resource. testIamPermissions POST /v1/{resource=projects/ /regions/ /workflowTemplates/ }:testIamPermissions Returns permissions that a caller has on the specified resource. update PUT /v1/{template.name=projects/ /regions/ /workflowTemplates/ } Updates (replaces) workflow template.
- REST Resource: v1.projects.locations.autoscalingPolicies REST Resource: v1.projects.locations.operations REST Resource: v1.projects.locations.workflowTemplates REST Resource: v1.projects.regions.autoscalingPolicies REST Resource: v1.projects.regions.clusters REST Resource: v1.projects.regions.clusters.nodeGroups REST Resource: v1.projects.regions.jobs REST Resource: v1.projects.regions.operations REST Resource: v1.projects.regions.workflowTemplates Service: dataproc.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .

