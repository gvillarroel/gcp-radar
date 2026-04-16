---
title: "Send execution logs to Cloud Logging \_|\_ Workflows \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/workflows/docs/log-workflow
knowledge_key: corpus
source_id: site-docs-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/workflows/docs/reference/syntax/expressions
source_metadata:
  url: https://docs.cloud.google.com/workflows/docs/log-workflow
  title: "Send execution logs to Cloud Logging \_|\_ Workflows \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Workflows
Guides
Send feedback
Send execution logs to Cloud Logging
Stay organized with collections
Save and categorize content based on your preferences.
Workflows automatically generates execution logs for
workflow executions in Cloud Logging.
You can also enable call logging . Or, you can create custom logs that use
the sys.log function in your source. Call logging and custom logs let you
control when logs are sent to Logging during a workflow execution
and can be particularly helpful when debugging your workflow.
For details, including the engine_call and executions_system logging proto
files, see this GitHub repository .
Execution logs
Each workflow execution automatically triggers at least two execution logs:
one at the start of an execution and one at the end.
For more information about the Workflows platform logs that
are available in Logging, see Google Cloud platform logs .
Call logging
You can set a flag so that each call step
during the execution of your workflow is logged, and step names, function names,
function arguments, and call responses are returned. Or, you can log any
exceptions that are caught, or that stop a call.
Only explicit call steps are logged; for example, calls to subworkflows or
library functions. Calls from within expressions, or within standard
library functions (for example, http.post in sys.log ), and inside connectors
are not logged.
HTTP Authorization request headers are redacted from the logs for HTTP calls.
When applying call logging to a
workflow definition
or to the
execution of a workflow ,
you can specify the level of logging required. The execution log level takes
precedence over any workflow log level, unless the execution log level is not
specified (the default); in that case, the workflow log level applies.
Note that the log entry size limit set by Cloud Logging
also applies to call logging.
Custom logs
To create a log entry in Logging during a workflow execution,
define a step in the workflow that makes a call to the standard library sys.log
function:
YAML
- step1 :
assign :
- varA : "Hello"
- varB : "World"
- logStep :
call : sys.log
args :
text : TEXT
severity : SEVERITY
- step2 :
return : ${varA + " " + varB}
JSON
[
{
"step1" : {
"assign" : [
{
"varA" : "Hello"
},
{
"varB" : "World"
}
]
}
},
{
"logStep" : {
"call" : "sys.log" ,
"args" : {
"text" : " TEXT " ,
"severity" : " SEVERITY "
}
}
},
{
"step2" : {
"return" : "${varA + " " + varB}"
}
}
]
When creating a log entry, define the following:
TEXT : required. The text to be logged. If you need to
log the values of a map, use ${json.encode_to_string(myMap)} .
SEVERITY : optional. The severity level of the log
entry. For example, INFO , WARNING , or CRITICAL .
For more information, see the sys.log function reference .
Required permissions
To apply call logging or send custom logs to Logging, a workflow
must be associated with a service account that includes the
logging.logEntries.create permission (for example, the roles/logging.logWriter
role). If you need to change the service account updated with your workflow, see
Update a workflow .
To learn more about creating service accounts and assigning roles, see
Manage access to projects, folders, and organizations .
View workflow logs
You can view logs in Workflows or in Logging.
To view the logs for a single workflow, use the Logs tab in
Workflows. To get an aggregate view of the logs for all
of your workflows, use the Logs Explorer page in Logging.
View logs in Workflows
To view a workflow's logs in Workflows, do the following:
In the Google Cloud console, go to the Workflows page:
Go to Workflows
To access a workflow's logs, click the workflow's name to go
to its Details page.
To view the logs, click Logs .
To filter the logs by severity, in the Default list, select
the type of log to display. By default, logs of all severity
levels are shown.
The Logs tab on a workflow's Details page displays the following types
of logs:
Logs sent to Logging
Audit logs of any operations performed on the workflow, such as updates to
the workflow's definition
View logs in Logging
To view logs in Logging, do the following:
In the Google Cloud console, go to the Logs Explorer page:
Go to Logs Explorer
In the Query builder , click Resource and enter workflow . Select
Cloud Workflow from the list and click Add .
Click Run query .
To learn more about viewing logs in Logging, see
Use the Logs Explorer .
What's next
Access workflow execution results
Troubleshoot issues
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
