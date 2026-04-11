---
title: "REST Resource: tasks \_|\_ Google Tasks \_|\_ Google for Developers"
url: https://developers.google.com/workspace/tasks/reference/rest/v1/tasks
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/workspace/tasks/reference/rest
source_metadata:
  url: https://developers.google.com/workspace/tasks/reference/rest/v1/tasks
  title: "REST Resource: tasks \_|\_ Google Tasks \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Tasks
Reference
Send feedback
REST Resource: tasks
Stay organized with collections
Save and categorize content based on your preferences.
Resource: Task
JSON representation
AssignmentInfo
JSON representation
ContextType
DriveResourceInfo
JSON representation
SpaceInfo
JSON representation
Methods
Resource: Task
JSON representation
{
"kind" : string ,
"id" : string ,
"etag" : string ,
"title" : string ,
"updated" : string ,
"selfLink" : string ,
"parent" : string ,
"position" : string ,
"notes" : string ,
"status" : string ,
"due" : string ,
"completed" : string ,
"deleted" : boolean ,
"hidden" : boolean ,
"links" : [
{
"type" : string ,
"description" : string ,
"link" : string
}
] ,
"webViewLink" : string ,
"assignmentInfo" : {
object ( AssignmentInfo )
}
}
Fields
kind
string
Output only. Type of the resource. This is always "tasks#task".
id
string
Task identifier.
etag
string
ETag of the resource.
title
string
Title of the task. Maximum length allowed: 1024 characters.
updated
string
Output only. Last modification time of the task (as a RFC 3339 timestamp).
selfLink
string
Output only. URL pointing to this task. Used to retrieve, update, or delete this task.
parent
string
Output only. Parent task identifier. This field is omitted if it is a top-level task. Use the "move" method to move the task under a different parent or to the top level. A parent task can never be an assigned task (from Chat Spaces, Docs). This field is read-only.
position
string
Output only. String indicating the position of the task among its sibling tasks under the same parent task or at the top level. If this string is greater than another task's corresponding position string according to lexicographical ordering, the task is positioned after the other task under the same parent task (or at the top level). Use the "move" method to move the task to another position.
notes
string
Notes describing the task. Tasks assigned from Google Docs cannot have notes. Optional. Maximum length allowed: 8192 characters.
status
string
Status of the task. This is either "needsAction" or "completed".
due
string
Scheduled date for the task (as an RFC 3339 timestamp). Optional. This represents the day that the task should be done, or that the task is visible on the calendar grid. It doesn't represent the deadline of the task. Only date information is recorded; the time portion of the timestamp is discarded when setting this field. It isn't possible to read or write the time that a task is scheduled for using the API.
completed
string
Completion date of the task (as a RFC 3339 timestamp). This field is omitted if the task has not been completed.
deleted
boolean
Flag indicating whether the task has been deleted. For assigned tasks this field is read-only. They can only be deleted by calling tasks.delete, in which case both the assigned task and the original task (in Docs or Chat Spaces) are deleted. To delete the assigned task only, navigate to the assignment surface and unassign the task from there. The default is False.
hidden
boolean
Flag indicating whether the task is hidden. This is the case if the task had been marked completed when the task list was last cleared. The default is False. This field is read-only.
links[]
object
Output only. Collection of links. This collection is read-only.
links[].type
string
Type of the link, e.g. "email", "generic", "chat_message", "keep_note".
links[].description
string
The description (might be empty).
links[].link
string
The URL.
webViewLink
string
Output only. An absolute link to the task in the Google Tasks Web UI.
assignmentInfo
object ( AssignmentInfo )
Output only. Context information for assigned tasks. A task can be assigned to a user, currently possible from surfaces like Docs and Chat Spaces. This field is populated for tasks assigned to the current user and identifies where the task was assigned from. This field is read-only.
AssignmentInfo
Information about the source of the task assignment (Document, Chat Space).
JSON representation
{
"linkToTask" : string ,
"surfaceType" : enum ( ContextType ) ,
"driveResourceInfo" : {
object ( DriveResourceInfo )
} ,
"spaceInfo" : {
object ( SpaceInfo )
}
}
Fields
linkToTask
string
Output only. An absolute link to the original task in the surface of assignment (Docs, Chat spaces, etc.).
surfaceType
enum ( ContextType )
Output only. The type of surface this assigned task originates from. Currently limited to DOCUMENT or SPACE.
Union field surface_info . Information about the surface (Docs, Chat Spaces) where this task was assigned from. surface_info can be only one of the following:
driveResourceInfo
object ( DriveResourceInfo )
Output only. Information about the Drive file where this task originates from. Currently, the Drive file can only be a document. This field is read-only.
spaceInfo
object ( SpaceInfo )
Output only. Information about the Chat Space where this task originates from. This field is read-only.
ContextType
The product associated with the task.
Enums
CONTEXT_TYPE_UNSPECIFIED
Unknown value for this task's context.
GMAIL
The task is created from Gmail.
DOCUMENT
The task is assigned from a document.
SPACE
The task is assigned from a Chat Space.
DriveResourceInfo
Information about the Drive resource where a task was assigned from (the document, sheet, etc.).
JSON representation
{
"driveFileId" : string ,
"resourceKey" : string
}
Fields
driveFileId
string
Output only. Identifier of the file in the Drive API.
resourceKey
string
Output only. Resource key required to access files shared via a shared link. Not required for all files. See also developers.google.com/drive/api/guides/resource-keys.
SpaceInfo
Information about the Chat Space where a task was assigned from.
JSON representation
{
"space" : string
}
Fields
space
string
Output only. The Chat space where this task originates from. The format is "spaces/{space}".
Methods
clear
Clears all completed tasks from the specified task list.
delete
Deletes the specified task from the task list.
get
Returns the specified task.
insert
Creates a new task on the specified task list.
list
Returns all tasks in the specified task list.
move
Moves the specified task to another position in the destination task list.
patch
Updates the specified task.
update
Updates the specified task.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-24 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-24 UTC."],[],[]]
