---
title: "REST Resource: projects.locations.workflows.executions.stepEntries \_|\_ Workflows\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows.executions.stepEntries
knowledge_key: corpus
source_id: site-api-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview
source_metadata:
  url: https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows.executions.stepEntries
  title: "REST Resource: projects.locations.workflows.executions.stepEntries \_|\_\
    \ Workflows \_|\_ Google Cloud Documentation"
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
REST Resource: projects.locations.workflows.executions.stepEntries
Stay organized with collections
Save and categorize content based on your preferences.
Resource: StepEntry
JSON representation
StepType
State
Exception
JSON representation
NavigationInfo
JSON representation
StepEntryMetadata
JSON representation
ProgressType
VariableData
JSON representation
Methods
Resource: StepEntry
An information entry that can assist in debugging a step in a workflow execution.
JSON representation
{
"name" : string ,
"createTime" : string ,
"updateTime" : string ,
"routine" : string ,
"step" : string ,
"stepType" : enum ( StepType ) ,
"state" : enum ( State ) ,
"exception" : {
object ( Exception )
} ,
"entryId" : string ,
"navigationInfo" : {
object ( NavigationInfo )
} ,
"stepEntryMetadata" : {
object ( StepEntryMetadata )
} ,
"variableData" : {
object ( VariableData )
}
}
Fields
name
string
Output only. The full resource name of the step entry. Each step entry has a unique entry ID which is a monotonically increasing counter. Step entry names have the format: projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution}/stepEntries/{step_entry} .
createTime
string ( Timestamp format)
Output only. The creation time of the step entry.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution, and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
updateTime
string ( Timestamp format)
Output only. The most recently updated time of the step entry.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution, and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
routine
string
Output only. The name of the routine this step entry belongs to. A routine name is the subworkflow name defined in the YAML or JSON source code. The top level routine name is main .
step
string
Output only. The name of the step this step entry belongs to.
stepType
enum ( StepType )
Output only. The type of the step this step entry belongs to.
state
enum ( State )
Output only. The state of the step entry.
exception
object ( Exception )
Output only. The exception thrown by the step entry.
entryId
string ( int64 format)
Output only. The numeric ID of this step entry, used for navigation.
navigationInfo
object ( NavigationInfo )
Output only. The NavigationInfo associated with this step.
stepEntryMetadata
object ( StepEntryMetadata )
Output only. The StepEntryMetadata associated with this step.
variableData
object ( VariableData )
Output only. The VariableData associated with this step.
StepType
Describes the type of step this step entry belongs to.
Enums
STEP_TYPE_UNSPECIFIED
Invalid step type.
STEP_ASSIGN
The step entry assigns a variable.
STEP_CALL
The step entry calls a subworkflow or standard library routine.
STEP_SWITCH
The step entry executes a switch-case block.
STEP_CONDITION
The step entry executes a condition inside a switch.
STEP_FOR
The step entry executes a for loop.
STEP_FOR_ITERATION
The step entry executes an iteration of a for loop.
STEP_PARALLEL_FOR
The step entry executes a parallel for loop.
STEP_PARALLEL_BRANCH
The step entry executes a series of parallel branches.
STEP_PARALLEL_BRANCH_ENTRY
The step entry executes a branch of a parallel branch.
STEP_TRY_RETRY_EXCEPT
The step entry executes a try/retry/except block.
STEP_TRY
The step entry executes the try part of a try/retry/except block.
STEP_RETRY
The step entry executes the retry part of a try/retry/except block.
STEP_EXCEPT
The step entry executes the except part of a try/retry/except block.
STEP_RETURN
The step entry returns.
STEP_RAISE
The step entry raises an error.
STEP_GOTO
The step entry jumps to another step.
State
Describes the current state of the step entry.
Enums
STATE_UNSPECIFIED
Invalid state.
STATE_IN_PROGRESS
The step entry is in progress.
STATE_SUCCEEDED
The step entry finished successfully.
STATE_FAILED
The step entry failed with an error.
Exception
Describes why the step entry failed.
JSON representation
{
"payload" : string
}
Fields
payload
string
Error message represented as a JSON string.
NavigationInfo
Describes what steps come before or after this step, or what steps are parents or children of this step.
JSON representation
{
"children" : [
string
] ,
"parent" : string ,
"next" : string ,
"previous" : string
}
Fields
children[]
string ( int64 format)
Indices of child step entries (for example, a for loop has one child step entry for each iteration).
parent
string ( int64 format)
Index of the parent step entry, if any.
next
string ( int64 format)
Index of the next step entry, if any.
previous
string ( int64 format)
Index of the previous step entry, if any.
StepEntryMetadata
Contains metadata information about this step.
JSON representation
{
"threadId" : string ,
"progressType" : enum ( ProgressType ) ,
"progressNumber" : string ,
"expectedIteration" : string
}
Fields
threadId
string
Child thread ID that this step entry belongs to.
progressType
enum ( ProgressType )
Progress type of this step entry.
progressNumber
string ( int64 format)
Indicates the current state of the step entry progress. For example, the fourth iteration of a PROGRESS_TYPE_FOR .
expectedIteration
string ( int64 format)
Represents the expected number of iterations in the step's progress.
ProgressType
Describes the progress type of this step entry.
Enums
PROGRESS_TYPE_UNSPECIFIED
Current step entry does not have any progress data.
PROGRESS_TYPE_FOR
A for step is in progress for the current step entry.
PROGRESS_TYPE_SWITCH
A switch step is in progress for the current step entry.
PROGRESS_TYPE_RETRY
A retry step is in progress for the current step entry.
PROGRESS_TYPE_PARALLEL_FOR
A parallel for step is in progress for the current step entry.
PROGRESS_TYPE_PARALLEL_BRANCH
A parallel branch step is in progress for the current step entry.
VariableData
VariableData contains the variable data for this step.
JSON representation
{
"variables" : {
string : value ,
...
}
}
Fields
variables
map (key: string, value: value ( Value format))
Variables that are associated with this step.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
Methods
get
Returns a step entry for a workflow execution.
list
Returns a list of step entries for a workflow execution.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-14 UTC."],[],[]]
