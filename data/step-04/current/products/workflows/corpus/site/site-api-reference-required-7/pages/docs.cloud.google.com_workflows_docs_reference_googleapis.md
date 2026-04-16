---
title: "Connectors reference \_|\_ Workflows \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/workflows/docs/reference/googleapis
knowledge_key: corpus
source_id: site-api-reference-required-7
source_type: site
entrypoint: https://docs.cloud.google.com/workflows/docs/reference/stdlib/map/merge_nested
source_metadata:
  url: https://docs.cloud.google.com/workflows/docs/reference/googleapis
  title: "Connectors reference \_|\_ Workflows \_|\_ Google Cloud Documentation"
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
Connectors reference
Stay organized with collections
Save and categorize content based on your preferences.
Workflows publishes connectors that make it easier to access other
Google Cloud products within a workflow. This document details the correct
Workflows syntax for the available connectors.
For workflow samples that demonstrate how to use a connector, see each
connector's overview page.
To learn more about authentication, and behavior during retries and long-running
operations, see Understand connectors .
Invoke a connector call
Similar to invoking an HTTP endpoint ,
a connector call requires call and args fields. You can specify a timeout
value and polling policy using the connector_params block:
- STEP_NAME :
call : CONNECTOR
args :
ARG : ARG_VALUE
[ ... ]
body :
KEY : KEY_VALUE
[...]
connector_params :
timeout : TIMEOUT_IN_SECONDS
polling_policy :
initial_delay : INITIAL_DELAY_IN_SECONDS
multiplier : MULTIPLIER_VALUE
max_delay : MAX_DELAY_IN_SECONDS
skip_polling : SKIP_POLLING_SWITCH
scopes : OAUTH2_SCOPE
result : RESPONSE_VALUE
Replace the following:
STEP_NAME : the name of the step.
CONNECTOR (required): the connector method in the form
googleapis.gcp_service.version.resource.operation . For example,
googleapis.bigquery.v2.tables.get .
ARG and ARG_VALUE (required):
each connector call requires different arguments.
KEY and KEY_VALUE (optional):
fields to supply input to the API.
Connector-specific parameters (optional):
TIMEOUT_IN_SECONDS : time in seconds.
The end-to-end duration the connector call is allowed to run for before
throwing a timeout exception. The default value is 1800 and this should
be the maximum for connector methods that are not long-running operations.
Otherwise, for long-running operations, the maximum timeout for a
connector call is 31536000 seconds (one year).
INITIAL_DELAY_IN_SECONDS : polling policy
parameter with a default value of 1.0 . Only applies to long-running
operation calls.
MULTIPLIER_VALUE : polling policy parameter with
a default value of 1.25 . Only applies to long-running operation calls.
MAX_DELAY_IN_SECONDS : polling policy parameter
with a default value of 60.0 . Only applies to long-running operation
calls.
SKIP_POLLING_SWITCH : if set to True , the
connector invocation call is non-blocking if the initial request to manage
or update the resource succeeds (usually HTTP POST , HTTP UPDATE , or
HTTP DELETE ). If the initial request is not successful, retries might
occur. Polling of status ( HTTP GET requests that follow the initial
request) is skipped for the long-running operation after the initial
request completes. The default value is False .
OAUTH2_SCOPE : OAuth2 scopes to pass to the
Google API. Can be a string, list of strings, space-separated string, or
comma-separated string.
RESPONSE_VALUE (optional): variable name where the
result of a connector call invocation step is stored.
List of supported connectors
Google Cloud product
Connector
Long-running operation type
AI Platform Training
ml
Job
Application Integration
integrations
None
Batch
batch
Job
Operation
BigQuery
bigquery
Job
BigQuery Data Transfer Service
bigquerydatatransfer
TransferRun
Cloud Build
cloudbuild
Operation
Cloud Run functions
cloudfunctions
Operation
Cloud Natural Language API
language
None
Cloud Run
run
None
Cloud Scheduler
cloudscheduler
None
Cloud SQL
sqladmin
Operation
Cloud Storage
storage
None
Cloud Tasks
cloudtasks
None
Cloud Translation
translate
Operation
Compute Engine
compute
Operation
Dataflow
dataflow
Job
Document AI
documentai
Operation
Processor
Firestore
firestore
Operation
Google Forms
forms
None
Google Kubernetes Engine
container
Operation
Google Sheets
sheets
None
Kubernetes API (control plane)
gke
None
Pub/Sub
pubsub
None
Resource Manager
cloudresourcemanager
None
Secret Manager
secretmanager
None
Spanner
spanner
Operation
Storage Transfer Service
storagetransfer
Operation
Transcoder API
transcoder
Job
Vertex AI
aiplatform (Vertex AI)
Artifact
Execution
Job
Operation
Pipeline
Schedule
Study
Trial
Workflows
workflows
workflowexecutions
Operation
Execution
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
