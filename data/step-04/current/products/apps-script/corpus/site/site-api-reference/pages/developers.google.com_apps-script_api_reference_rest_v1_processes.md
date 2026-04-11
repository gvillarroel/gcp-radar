---
title: "REST Resource: processes \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/api/reference/rest/v1/processes
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/apps-script/api/reference/rest
source_metadata:
  url: https://developers.google.com/apps-script/api/reference/rest/v1/processes
  title: "REST Resource: processes \_|\_ Apps Script \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Apps Script
Reference
Send feedback
REST Resource: processes
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
A Process resource represents a single script execution started from various sources like the script editor, triggers, or the Apps Script API.
Unlike the Operation resource, Process specifically covers executions not solely initiated via the Apps Script API.
The Process resource includes fields such as projectName , functionName , processType , processStatus , and userAccessLevel .
ProcessType defines how the process was started, while ProcessStatus indicates its current state.
The API provides methods like list and listScriptProcesses to retrieve information about script process executions.
Resource: Process
JSON representation
ProcessType
ProcessStatus
UserAccessLevel
Methods
Resource: Process
Representation of a single script process execution that was started from the script editor, a trigger, an application, or using the Apps Script API. This is distinct from the Operation resource, which only represents executions started via the Apps Script API.
JSON representation
{
"projectName" : string ,
"functionName" : string ,
"processType" : enum ( ProcessType ) ,
"processStatus" : enum ( ProcessStatus ) ,
"userAccessLevel" : enum ( UserAccessLevel ) ,
"startTime" : string ,
"duration" : string
}
Fields
projectName
string
Name of the script being executed.
functionName
string
Name of the function the started the execution.
processType
enum ( ProcessType )
The executions type.
processStatus
enum ( ProcessStatus )
The executions status.
userAccessLevel
enum ( UserAccessLevel )
The executing users access level to the script.
startTime
string ( Timestamp format)
Time the execution started.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
duration
string ( Duration format)
Duration the execution spent executing.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
ProcessType
The type of process, which defines how the process was started.
Enums
PROCESS_TYPE_UNSPECIFIED
Unspecified type.
ADD_ON
The process was started from an add-on entry point.
EXECUTION_API
The process was started using the Apps Script API.
TIME_DRIVEN
The process was started from a time-based trigger.
TRIGGER
The process was started from an event-based trigger.
WEBAPP
The process was started from a web app entry point.
EDITOR
The process was started using the Apps Script IDE.
SIMPLE_TRIGGER
The process was started from a G Suite simple trigger.
MENU
The process was started from a G Suite menu item.
BATCH_TASK
The process was started as a task in a batch job.
ProcessStatus
The process status.
Enums
PROCESS_STATUS_UNSPECIFIED
Unspecified status.
RUNNING
The process is currently running.
PAUSED
The process has paused.
COMPLETED
The process has completed.
CANCELED
The process was cancelled.
FAILED
The process failed.
TIMED_OUT
The process timed out.
UNKNOWN
Process status unknown.
DELAYED
The process is delayed, waiting for quota.
UserAccessLevel
The various user access levels.
Enums
USER_ACCESS_LEVEL_UNSPECIFIED
User access level unspecified
NONE
The user has no access.
READ
The user has read-only access.
WRITE
The user has write access.
OWNER
The user is an owner.
Methods
list
List information about processes made by or on behalf of a user, such as process type and current status.
listScriptProcesses
List information about a script's executed processes, such as process type and current status.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-10-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-10-31 UTC."],[],[]]
