---
title: "Workflow Executions API \_|\_ Workflows \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/workflows/docs/reference/executions/rest
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/workflows/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/workflows/docs/reference/executions/rest
  title: "Workflow Executions API \_|\_ Workflows \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Workflows
Reference
Send feedback
Workflow Executions API
Stay organized with collections
Save and categorize content based on your preferences.
Execute workflows created with Workflows API.
REST Resource: projects.locations.workflows.executions.callbacks
REST Resource: v1.projects.locations.workflows
REST Resource: v1.projects.locations.workflows.executions
REST Resource: v1.projects.locations.workflows.executions.callbacks
REST Resource: v1.projects.locations.workflows.executions.stepEntries
REST Resource: v1beta.projects.locations.workflows.executions
Service: workflowexecutions.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://workflowexecutions.googleapis.com/$discovery/rest?version=v1
https://workflowexecutions.googleapis.com/$discovery/rest?version=v1beta
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://workflowexecutions.googleapis.com
REST Resource: v1.projects.locations.workflows
Methods
triggerPubsubExecution
POST /v1/{workflow=projects/*/locations/*/workflows/*}:triggerPubsubExecution
Triggers a new execution using the latest revision of the given workflow by a Pub/Sub push notification.
REST Resource: v1.projects.locations.workflows.executions
Methods
cancel
POST /v1/{name=projects/*/locations/*/workflows/*/executions/*}:cancel
Cancels an execution of the given name.
create
POST /v1/{parent=projects/*/locations/*/workflows/*}/executions
Creates a new execution using the latest revision of the given workflow.
deleteExecutionHistory
POST /v1/{name=projects/*/locations/*/workflows/*/executions/*}:deleteExecutionHistory
Deletes all step entries for an execution.
exportData
GET /v1/{name=projects/*/locations/*/workflows/*/executions/*}:exportData
Returns all metadata stored about an execution, excluding most data that is already accessible using other API methods.
get
GET /v1/{name=projects/*/locations/*/workflows/*/executions/*}
Returns an execution of the given name.
list
GET /v1/{parent=projects/*/locations/*/workflows/*}/executions
Returns a list of executions which belong to the workflow with the given name.
REST Resource: v1.projects.locations.workflows.executions.callbacks
Methods
list
GET /v1/{parent=projects/*/locations/*/workflows/*/executions/*}/callbacks
Returns a list of active callbacks which belong to the execution with the given name.
sendHttpCallback
NONE /v1/{workflow=projects/*/locations/*/workflows/*}/executions/{executionId}/callbacks/{callbackId}
Sends an HTTP callback to resume the corresponding workflow execution.
REST Resource: v1.projects.locations.workflows.executions.stepEntries
Methods
get
GET /v1/{name=projects/*/locations/*/workflows/*/executions/*/stepEntries/*}
Returns a step entry.
list
GET /v1/{parent=projects/*/locations/*/workflows/*/executions/*}/stepEntries
Returns a list of step entries for the corresponding workflow execution.
REST Resource: v1beta.projects.locations.workflows.executions
Methods
cancel
POST /v1beta/{name=projects/*/locations/*/workflows/*/executions/*}:cancel
Cancels an execution of the given name.
create
POST /v1beta/{parent=projects/*/locations/*/workflows/*}/executions
Creates a new execution using the latest revision of the given workflow.
get
GET /v1beta/{name=projects/*/locations/*/workflows/*/executions/*}
Returns an execution of the given name.
list
GET /v1beta/{parent=projects/*/locations/*/workflows/*}/executions
Returns a list of executions which belong to the workflow with the given name.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-14 UTC."],[],[]]
