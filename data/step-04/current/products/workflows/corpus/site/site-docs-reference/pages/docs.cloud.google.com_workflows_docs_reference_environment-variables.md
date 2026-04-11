---
title: "Built-in environment variables \_|\_ Workflows \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/workflows/docs/reference/environment-variables
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/workflows/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/workflows/docs/reference/environment-variables
  title: "Built-in environment variables \_|\_ Workflows \_|\_ Google Cloud Documentation"
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
Built-in environment variables
Stay organized with collections
Save and categorize content based on your preferences.
You can access a workflow's environment information using built-in environment
variables. Built-in environment variables require no declaration and are
available in every workflow execution.
User-defined environment variables
are also supported.
List of built-in environment variables
You can use the following built-in environment variables:
GOOGLE_CLOUD_LOCATION : The location of the workflow.
GOOGLE_CLOUD_PROJECT_ID : The project identifier of the workflow.
GOOGLE_CLOUD_PROJECT_NUMBER : The project number of the workflow.
GOOGLE_CLOUD_SERVICE_ACCOUNT_NAME : The name of the workflow execution's service
account.
GOOGLE_CLOUD_WORKFLOW_EXECUTION_ID : The identifier of the workflow execution.
GOOGLE_CLOUD_WORKFLOW_ID : The identifier of the workflow.
GOOGLE_CLOUD_WORKFLOW_REVISION_ID : The identifier of the workflow revision.
Access built-in environment variables
To access an environment variable, make a call to the sys.get_env() function
in an expression, passing the name of the environment variable as a parameter.
The name of the environment variable must be passed as a string.
For example, the following step assigns the value of the environment variable
GOOGLE_CLOUD_PROJECT_ID to a workflow variable called projectID :
- getProjectID :
assign :
- projectID : ${sys.get_env("GOOGLE_CLOUD_PROJECT_ID")}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
