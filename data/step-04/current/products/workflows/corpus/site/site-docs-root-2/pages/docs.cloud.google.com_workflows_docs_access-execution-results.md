---
title: "Access workflow execution results \_|\_ Workflows \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/workflows/docs/access-execution-results
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/workflows/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/workflows/docs/access-execution-results
  title: "Access workflow execution results \_|\_ Workflows \_|\_ Google Cloud Documentation"
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
Access workflow execution results
Stay organized with collections
Save and categorize content based on your preferences.
After you execute a workflow , you can
access workflow execution results in the Google Cloud console or by using the
Google Cloud CLI.
Console
In the Google Cloud console, go to the Workflows page.
Go to Workflows
To access a workflow's execution results, click the workflow's name to go
to its Workflow details page.
For details about a particular execution, on the Executions tab, click
the execution ID in the list to go to its Execution details page.
Note: To access the Execution details page, you must have a role
that contains the workflows.workflows.get , workflows.executions.get , and
workflows.stepEntries.list permissions. For more information, see
Workflows roles and
permissions and
Manage access .
On the Summary tab, each execution has the following information:
Execution ID : the unique identifier of the workflow execution.
Execution state : indicates the workflow's end state, including the
current or final workflow step.
Execution created : when the execution was initiated.
Execution start : when the execution began running and executing steps.
Execution end : when the execution ended.
Execution duration : total time elapsed. This can be an indication of
network errors or connectivity problems.
Workflow name : the workflow name.
Workflow revision : the current revision at the time of execution.
Call log level : the level of call logging applied during the
execution. For more information, see
Call logging .
Input : the runtime arguments passed to the workflow, if any.
Output : the workflow's output. If the execution failed, includes the
exception that led to the execution's failure. In this document, see
Execution error maps .
To view the workflow execution history as a list of step entries, click the
Steps tab. For more information, see
View history of execution steps .
To view the logs for a workflow execution, click the Logs tab.
To filter the execution logs, use the Filter field at the top of the
table. For example, to display only failed execution attempts, enter
failed in the filter's text field.
gcloud
To see a full list of a workflow's executions, enter the following
command:
gcloud workflows executions list WORKFLOW_NAME
Replace WORKFLOW_NAME with your workflow's name.
Copy the execution ID of the execution you're interested in.
To view a workflow's execution logs, enter the following command:
gcloud workflows executions describe \
--workflow = WORKFLOW_NAME \
EXECUTION_ID
Replace the following:
WORKFLOW_NAME : the workflow's name
EXECUTION_ID : the execution's unique ID
This command returns output similar to the following:
argument: 'null'
endTime: '2022-07-19T12:40:07.070039707Z'
error:
context: | -
The argument of 'in' must be a dict or an array ; got: null
in step "checkSearchTermInInput" , routine "main" , line: 12
payload: "{" message ":" The argument of 'in' must be a dict or an array ; got: null "
," tags ":[" TypeError "]}"
stackTrace:
elements:
- position:
column: '26'
length: '24'
line: '12'
routine: main
step: checkSearchTermInInput
name: projects/1051295516635/locations/us-central1/workflows/myFirstWorkflow/executions/17ffc89c-0a27-4d2f-8356-e681d949a3d3
startTime: '2022-07-19T12:40:07.024823663Z'
state: FAILED
status:
currentSteps:
- routine: main
step: checkSearchTermInInput
workflowRevisionId: 000001 -ac2
The output contains the following information:
argument : the runtime arguments passed to the workflow, if any
endTime : when the execution ended
error : the error message thrown as a part of the exception that
resulted in the execution's failure
name : the full name of the execution, including the name of the
project, the location of the workflow, the name of the workflow, and the
execution ID
startTime : when the execution began
state : indicates the workflow's end state
status : the current or final workflow step of the execution
workflowRevisionID : the current revision at the time of the execution
Execution error maps
When a workflow throws an error during execution that isn't caught in a
try/except block , the
execution fails, and an error map (a JSON dictionary) describing the error is
returned.
Errors thrown during workflow execution contain tags to help you identify what
caused the error. For example, the error returned from a connector can have two
keys ( tags and message ) similar to the following:
{'tags': ['SystemError'], 'message': 'an error has occurred'}
There can be more than one tag. To check for a specific tag, you can use an
expression . For example:
${'SystemError' in e.tags}
Access error data returned as a string
Some connectors and HTTP APIs will serialize errors as strings before returning
the errors. You can use standard library functions to restore a payload to the
original error. For example, to convert an error string to a map, you can use
the json.decode
and text.encode functions:
json.decode ( text.encode ( ERROR_FROM_API ))
Error tags
The following table describes the meaning of different error tags.
Tag
Description
AuthError
Raised when generating credentials for an HTTP request fails.
ConnectionError
Raised when a connection is successfully established with the endpoint
but there is a problem with the connection during data transfer. The
connection is terminated before a full response is received and a message
might not have been delivered to the endpoint. Retries might not be
idempotent.
ConnectionFailedError
Raised when a connection is not established with the API endpoint; for
example, due to an incorrect domain name, DNS resolution issues, or other
network problems. Retries are idempotent.
HttpError
Raised when an
HTTP request fails
with an HTTP error status . When this exception is raised, the
response is a map with the following elements:
tags —list with HttpError string
message —human-readable error message
code —HTTP response status code
headers —response headers
body —response body
IndexError
Raised when a sequence subscript is an out of range integer.
KeyError
Raised when a map key is not found in the set of existing keys.
OperationError
Raised when a long-running operation finishes unsuccessfully.
ParallelNestingError
Raised when the maximum
depth that parallel steps can be nested is exceeded.
RecursionError
Raised when the interpreter detects that the
maximum call stack depth is exceeded.
ResourceLimitError
Raised when some resource limit is exhausted. When raised internally,
this type of error cannot be caught and causes immediate execution
failure.
ResponseTypeError
Raised when a long-running operation returns a response of the wrong
type.
SystemError
Raised when the interpreter finds an internal error.
TimeoutError
Raised when a system function times out at the system level.
TypeError
Raised when an operation or function is applied to an object of
incompatible type. The associated value is a string giving details about
the type mismatch.
UnhandledBranchError
Raised when one or more branches or iterations encounters an
unhandled runtime error up to a
maximum number .
ValueError
Raised when an operation or function receives an argument that has the
correct type but an incorrect value, and the situation is not described
by a more precise exception, such as an IndexError .
ZeroDivisionError
Raised when the second argument of a division or modulo operation is
zero. The associated value is a string indicating the type of the
operands and the operation.
You can also raise custom errors
using the raise syntax.
What's next
Debugging overview
Known issues for Workflows
Send execution logs to Cloud Logging
Troubleshoot issues
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
