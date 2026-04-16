---
title: "REST Resource: projects.locations.workflows.executions \_|\_ Workflows \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows.executions
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/workflows/docs/reference/googleapis/workflows/v1/Overview
source_metadata:
  url: https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows.executions
  title: "REST Resource: projects.locations.workflows.executions \_|\_ Workflows \_\
    |\_ Google Cloud Documentation"
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
REST Resource: projects.locations.workflows.executions
Stay organized with collections
Save and categorize content based on your preferences.
Resource: Execution
JSON representation
State
Error
JSON representation
StackTrace
JSON representation
StackTraceElement
JSON representation
Position
JSON representation
CallLogLevel
Status
JSON representation
Step
JSON representation
StateError
JSON representation
Type
ExecutionHistoryLevel
Methods
Resource: Execution
A running instance of a Workflow .
JSON representation
{
"name" : string ,
"createTime" : string ,
"startTime" : string ,
"endTime" : string ,
"duration" : string ,
"state" : enum ( State ) ,
"argument" : string ,
"result" : string ,
"error" : {
object ( Error )
} ,
"workflowRevisionId" : string ,
"callLogLevel" : enum ( CallLogLevel ) ,
"status" : {
object ( Status )
} ,
"labels" : {
string : string ,
...
} ,
"stateError" : {
object ( StateError )
}
}
Fields
name
string
Output only. The resource name of the execution. Format: projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution}
createTime
string ( Timestamp format)
Output only. Marks the creation of the execution.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
startTime
string ( Timestamp format)
Output only. Marks the beginning of execution. Note that this will be the same as createTime for executions that start immediately.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
endTime
string ( Timestamp format)
Output only. Marks the end of execution, successful or not.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
duration
string ( Duration format)
Output only. Measures the duration of the execution.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
state
enum ( State )
Output only. Current state of the execution.
argument
string
Input parameters of the execution represented as a JSON string. The size limit is 32KB.
Note : If you are using the REST API directly to run your workflow, you must escape any JSON string value of argument . Example: '{"argument":"{\"firstName\":\"FIRST\",\"lastName\":\"LAST\"}"}'
result
string
Output only. Output of the execution represented as a JSON string. The value can only be present if the execution's state is SUCCEEDED .
error
object ( Error )
Output only. The error which caused the execution to finish prematurely. The value is only present if the execution's state is FAILED or CANCELLED .
workflowRevisionId
string
Output only. Revision of the workflow this execution is using.
callLogLevel
enum ( CallLogLevel )
The call logging level associated to this execution.
status
object ( Status )
Output only. Status tracks the current steps and progress data of this execution.
labels
map (key: string, value: string)
Labels associated with this execution. Labels can contain at most 64 entries. Keys and values can be no longer than 63 characters and can only contain lowercase letters, numeric characters, underscores, and dashes. Label keys must start with a letter. International characters are allowed. By default, labels are inherited from the workflow but are overridden by any labels associated with the execution.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
stateError
object ( StateError )
Output only. Error regarding the state of the Execution resource. For example, this field will have error details if the execution data is unavailable due to revoked KMS key permissions.
State
Describes the current state of the execution. More states might be added in the future.
Enums
STATE_UNSPECIFIED
Invalid state.
ACTIVE
The execution is in progress.
SUCCEEDED
The execution finished successfully.
FAILED
The execution failed with an error.
CANCELLED
The execution was stopped intentionally.
UNAVAILABLE
Execution data is unavailable. See the stateError field.
QUEUED
Request has been placed in the backlog for processing at a later time.
Error
Error describes why the execution was abnormally terminated.
JSON representation
{
"payload" : string ,
"context" : string ,
"stackTrace" : {
object ( StackTrace )
}
}
Fields
payload
string
Error message and data returned represented as a JSON string.
context
string
Human-readable stack trace string.
stackTrace
object ( StackTrace )
Stack trace with detailed information of where error was generated.
StackTrace
A collection of stack elements (frames) where an error occurred.
JSON representation
{
"elements" : [
{
object ( StackTraceElement )
}
]
}
Fields
elements[]
object ( StackTraceElement )
An array of stack elements.
StackTraceElement
A single stack element (frame) where an error occurred.
JSON representation
{
"step" : string ,
"routine" : string ,
"position" : {
object ( Position )
}
}
Fields
step
string
The step the error occurred at.
routine
string
The routine where the error occurred.
position
object ( Position )
The source position information of the stack trace element.
Position
Position contains source position information about the stack trace element such as line number, column number and length of the code block in bytes.
JSON representation
{
"line" : string ,
"column" : string ,
"length" : string
}
Fields
line
string ( int64 format)
The source code line number the current instruction was generated from.
column
string ( int64 format)
The source code column position (of the line) the current instruction was generated from.
length
string ( int64 format)
The number of bytes of source code making up this stack trace element.
CallLogLevel
Describes the level of platform logging to apply to calls and call responses during workflow executions.
Enums
CALL_LOG_LEVEL_UNSPECIFIED
No call logging level specified.
LOG_ALL_CALLS
Log all call steps within workflows, all call returns, and all exceptions raised.
LOG_ERRORS_ONLY
Log only exceptions that are raised from call steps within workflows.
LOG_NONE
Explicitly log nothing.
Status
Represents the current status of this execution.
JSON representation
{
"currentSteps" : [
{
object ( Step )
}
]
}
Fields
currentSteps[]
object ( Step )
A list of currently executing or last executed step names for the workflow execution currently running. If the workflow has succeeded or failed, this is the last attempted or executed step. Presently, if the current step is inside a subworkflow, the list only includes that step. In the future, the list will contain items for each step in the call stack, starting with the outermost step in the main subworkflow, and ending with the most deeply nested step.
Step
Represents a step of the workflow this execution is running.
JSON representation
{
"routine" : string ,
"step" : string
}
Fields
routine
string
Name of a routine within the workflow.
step
string
Name of a step within the routine.
StateError
Describes an error related to the current state of the Execution resource.
JSON representation
{
"details" : string ,
"type" : enum ( Type )
}
Fields
details
string
Provides specifics about the error.
type
enum ( Type )
The type of this state error.
Type
Describes the possible types of a state error.
Enums
TYPE_UNSPECIFIED
No type specified.
KMS_ERROR
Caused by an issue with KMS.
ExecutionHistoryLevel
Define possible options for enabling the execution history level.
Enums
EXECUTION_HISTORY_LEVEL_UNSPECIFIED
The default/unset value.
EXECUTION_HISTORY_BASIC
Enable a basic execution history level for this execution.
EXECUTION_HISTORY_DETAILED
Enable a detailed execution history level for this execution including
iteration progress and in-scope variable values.
Methods
cancel
Cancels an execution of the given name.
create
Creates a new execution using the latest revision of the given workflow.
deleteExecutionHistory
Deletes all step entries for an execution.
exportData
Returns all metadata stored about an execution, excluding most data that is already accessible using other API methods.
get
Returns an execution of the given name.
list
Returns a list of executions which belong to the workflow with the given name.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-14 UTC."],[],[]]
