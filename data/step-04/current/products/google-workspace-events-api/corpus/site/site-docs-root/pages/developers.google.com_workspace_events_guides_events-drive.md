---
title: "Subscribe to Google Drive events \_|\_ Google Workspace \_|\_ Google for Developers"
url: https://developers.google.com/workspace/events/guides/events-drive
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/workspace/events
source_metadata:
  url: https://developers.google.com/workspace/events/guides/events-drive
  title: "Subscribe to Google Drive events \_|\_ Google Workspace \_|\_ Google for\
    \ Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Guides
Send feedback
Subscribe to Google Drive events
Stay organized with collections
Save and categorize content based on your preferences.
This page describes the Google Drive events that your app can subscribe to
using the Google Workspace Events API. After you decide which types of events you
need, create a subscription to
start receiving events from Drive.
To learn more about developing apps for Drive, see the
Google Drive API overview .
Supported Drive events
Google Workspace subscriptions let you receive events about the
following types of changes in Drive:
An access proposal
is created or resolved on a file.
An approval is created,
cancelled, reset, or completed on a file. An approval reviewer is changed on
a file. An approval reviewer responded to an approval on a file.
A comment is created,
edited, resolved, reopened, or deleted on a file or a file within a shared
drive.
A file is:
Added to a folder or shared drive.
Moved to a folder or shared drive.
Edited or a new revision is uploaded.
Trashed or removed from the trash.
Renamed (the title of a file or folder is changed).
Permissions are
created, edited, or deleted on a file.
A reply is created,
edited, or deleted on a comment thread in a file or a file within a shared
drive.
Resources that you can monitor for events
To receive events, specify a Drive resource to monitor, which
is called the target resource of the subscription.
The Google Workspace Events API supports the following target resources for
Drive:
Target resource
Format
Limitations (if applicable)
File
//drive.googleapis.com/files/ FILE
where FILE is the ID in the
resource name
of the Drive API files resource. You can obtain the ID from the
file's URL or by using the
files.list
method.
The user that authorizes the subscription must have permission on the file within the
subscription relative to the subscribe to event.
Shared drive
//drive.googleapis.com/drives/ DRIVE
where DRIVE is the ID in the
resource name
of the Drive API drives resource. You can obtain the ID from the
drive's URL or by using the
drives.list
method.
The subscription only receives events for items in the shared drive where the user is a
member through their Google Workspace Account or Google Account.
Event types for creating subscriptions
When you create a subscription to a Drive resource, you use the
eventTypes[]
field to specify which types of events you want to receive. Event types are
formatted according to the CloudEvents specification,
such as
google.workspace. APPLICATION . RESOURCE . VERSION . ACTION .
For example, to receive events about a file being created in a folder or shared
drive, specify the file as the target resource, and the event type as
google.workspace.drive.file.v3.created . To receive events about an access
proposal being created on a file, specify the access proposal as the target
resource, and the event type as
google.workspace.drive.accessproposal.v3.created . To learn more about how
events work, see Structure of Google Workspace
events .
The following table displays which event types are supported for subscriptions
to Drive resources:
Event type
Format
Resource data
Subscriptions to files and shared drives
An access proposal is created on a file.
google.workspace.drive.accessproposal.v3.created
accessproposal
An access proposal is resolved on a file.
google.workspace.drive.accessproposal.v3.resolved
accessproposal
An approval is created on a file.
google.workspace.drive.approval.v3.created
approval
An approval is cancelled on a file.
google.workspace.drive.approval.v3.cancelled
approval
An approval is reset on a file.
google.workspace.drive.approval.v3.reset
approval
An approval is completed on a file.
google.workspace.drive.approval.v3.completed
approval
An approval reviewer is changed on a file.
google.workspace.drive.approval.v3.reviewersChanged
approval
An approval reviewer responded to an approval on a file.
google.workspace.drive.approval.v3.responded
approval
A comment is created on a file or a file within a shared drive.
google.workspace.drive.comment.v3.created
comment
A comment is edited on a file or a file within a shared drive.
google.workspace.drive.comment.v3.edited
comment
A comment is resolved on a file or a file within a shared drive.
google.workspace.drive.comment.v3.resolved
comment
A comment is reopened on a file or a file within a shared drive.
google.workspace.drive.comment.v3.reopened
comment
A comment is deleted on a file or a file within a shared drive.
google.workspace.drive.comment.v3.deleted
comment
A file is added to a folder or shared drive.
google.workspace.drive.file.v3.created
file
A file is moved to a folder or shared drive.
google.workspace.drive.file.v3.moved
file
A file is edited or a new revision is uploaded.
google.workspace.drive.file.v3.contentChanged
file
A file is deleted.
google.workspace.drive.file.v3.deleted
file
A file is trashed.
google.workspace.drive.file.v3.trashed
file
A file is removed from the trash.
google.workspace.drive.file.v3.untrashed
file
A file is renamed.
google.workspace.drive.file.v3.renamed
file
Permissions are created on a file.
google.workspace.drive.permission.v3.created
permission
Permissions are edited on a file.
google.workspace.drive.permission.v3.edited
permission
Permissions are deleted on a file.
google.workspace.drive.permission.v3.deleted
permission
A reply is created on a comment thread in a file or a file within a
shared drive.
google.workspace.drive.reply.v3.created
reply
A reply is edited on a comment thread in a file or a file within a
shared drive.
google.workspace.drive.reply.v3.edited
reply
A reply is deleted on a comment thread in a file or a file within a
shared drive.
google.workspace.drive.reply.v3.deleted
reply
Event data
This section describes event data and example payloads for events in
Drive.
When your Google Workspace subscription receives an event from
Drive, the
data
field contains the payload for the event. This payload has information about the
Google Workspace resource that changed. For example, if you've
subscribed to file events, the payload for these events contains information
about the files resource that
changed.
Resource data in the event payload
When you create a subscription, specify whether you want the payload to
include details about the resource, or just the name of the resource. For
example, if you want to receive events about files in Drive,
specify which fields of a files resource you want to receive in the event
payload.
Note: Including resource data affects the lifecycle of your subscription. To
learn more, see the Structure of Google Workspace
events .
The following table provides examples of JSON payloads for a subscription to the
Drive resource. The file ID contains letters, numbers, and some
special characters structured as files/^[01][0-9a-zA-Z_-]+$/ . For example,
files/1aaabbbAAABBB111222-_ . For each event that the subscription receives,
the payload appears in the data field of the event:
Example
Event type
JSON payload
A user creates an access proposal on a file.
google.workspace.drive.accessproposal.v3.created
Includes resource data
{
"accessProposal": [
{
"file_id": " FILE_ID ",
"proposalId": " PROPOSAL_ID ",
"recipientEmailAddress": "alex@altostrat.com",
"requesterEmailAddress": "kai@cymbalgroup.com",
"requestMessage": "grant me access to this file",
"rolesAndViews": [
{
"role": "writer",
"view": "published"
}
]
}
]
}
Excludes resource data
{
"accessProposal": [
{
"proposalId": " PROPOSAL_ID "
}
]
}
A user resolves an access proposal on a file.
google.workspace.drive.accessProposal.v3.resolved
Includes resource data
{
"accessProposal": [
{
"file_id": " FILE_ID ",
"proposalId": " PROPOSAL_ID ",
"recipientEmailAddress": "alex@altostrat.com",
"requesterEmailAddress": "kai@cymbalgroup.com",
"requestMessage": "resolve access to this file",
"rolesAndViews": [
{
"role": "writer",
"view": "published"
}
]
}
]
}
Excludes resource data
{
"accessProposal": [
{
"proposalId": " PROPOSAL_ID "
}
]
}
A user creates an approval on a file.
google.workspace.drive.approval.v3.created
Includes resource data
{
"approval": {
"approvalId": "APPROVAL_ID",
"targetFileId": "FILE_ID",
"dueDate": "1970-01-01T20:42:44.565Z",
"status": "IN_PROGRESS",
"reviewerEmailAddresses": ["reviewer1@cymbalgroup.com", "reviewer2@cymbalgroup.com"],
"initiatorEmailAddress": ["initiator@cymbalgroup.com"]
}
}
Excludes resource data
{
"approval": {
"approvalId": "APPROVAL_ID",
"targetFileId": "FILE_ID"
}
}
A user cancels an approval on a file.
google.workspace.drive.approval.v3.cancelled
Includes resource data
{
"approval": {
"approvalId": "APPROVAL_ID",
"targetFileId": "FILE_ID",
"dueDate": "1970-01-01T20:42:44.565Z",
"status": "CANCELLED",
"reviewerEmailAddresses": ["reviewer1@cymbalgroup.com", "reviewer2@cymbalgroup.com"],
"initiatorEmailAddress": ["initiator@cymbalgroup.com"]
}
}
Excludes resource data
{
"approval": {
"approvalId": "APPROVAL_ID",
"targetFileId": "FILE_ID"
}
}
A user resets an approval on a file.
google.workspace.drive.approval.v3.reset
Includes resource data
{
"approval": {
"approvalId": "APPROVAL_ID",
"targetFileId": "FILE_ID",
"dueDate": "1970-01-01T20:42:44.565Z",
"status": "IN_PROGRESS",
"reviewerEmailAddresses": ["reviewer1@cymbalgroup.com", "reviewer2@cymbalgroup.com"],
"initiatorEmailAddress": ["initiator@cymbalgroup.com"]
}
}
Excludes resource data
{
"approval": {
"approvalId": "APPROVAL_ID",
"targetFileId": "FILE_ID"
}
}
A user completes an approval on a file.
google.workspace.drive.approval.v3.completed
Includes resource data
{
"approval": {
"approvalId": "APPROVAL_ID",
"targetFileId": "FILE_ID",
"dueDate": "1970-01-01T20:42:44.565Z",
"status": "APPROVED",
"reviewerEmailAddresses": ["reviewer1@cymbalgroup.com", "reviewer2@cymbalgroup.com"],
"initiatorEmailAddress": ["initiator@cymbalgroup.com"]
}
}
Excludes resource data
{
"approval": {
"approvalId": "APPROVAL_ID",
"targetFileId": "FILE_ID"
}
}
An approval reviewer is changed on a file.
google.workspace.drive.approval.v3.reviewersChanged
Includes resource data
{
"approval": {
"approvalId": "APPROVAL_ID",
"targetFileId": "FILE_ID",
"dueDate": "1970-01-01T20:42:44.565Z",
"status": "APPROVED",
"reviewerEmailAddresses": ["reviewer1@cymbalgroup.com", "reviewer2@cymbalgroup.com"],
"initiatorEmailAddress": ["initiator@cymbalgroup.com"]
}
}
Excludes resource data
{
"approval": {
"approvalId": "APPROVAL_ID",
"targetFileId": "FILE_ID"
}
}
An approval reviewer responded to an approval on a file.
google.workspace.drive.approval.v3.responded
Includes resource data
{
"approval": {
"approvalId": "APPROVAL_ID",
"targetFileId": "FILE_ID",
"dueDate": "1970-01-01T20:42:44.565Z",
"status": "APPROVED",
"reviewerEmailAddresses": ["reviewer1@cymbalgroup.com", "reviewer2@cymbalgroup.com"],
"initiatorEmailAddress": ["initiator@cymbalgroup.com"]
},
"response": {
"reviewerEmailAddress": "reviewer1@cymbalgroup.com",
"response": "DECLINED"
}
}
Excludes resource data
{
"approval": {
"approvalId": "APPROVAL_ID",
"targetFileId": "FILE_ID"
}
}
A user creates a comment on a file.
google.workspace.drive.comment.v3.created
Includes resource data
{
"comment": {
"id": " COMMENT_ID ",
"file_id": " FILE_ID ",
"mentioned_email_addresses": ["alex@altostrat.com", "kai@cymbalgroup.com"],
"assignee_email_address": "yuri@altostrat.com"
}
}
Excludes resource data
{
"comment": {
"id": " COMMENT_ID ",
"file_id": " FILE_ID "
}
}
A user edits a comment on a file.
google.workspace.drive.comment.v3.edited
Includes resource data
{
"comment": {
"id": " COMMENT_ID ",
"file_id": " FILE_ID ",
"mentioned_email_addresses": ["alex@altostrat.com", "kai@cymbalgroup.com"],
"assignee_email_address": "yuri@altostrat.com"
}
}
Excludes resource data
{
"comment": {
"id": " COMMENT_ID ",
"file_id": " FILE_ID "
}
}
A user resolves a comment on a file.
google.workspace.drive.comment.v3.resolved
Includes resource data
{
"comment": {
"id": " COMMENT_ID ",
"file_id": " FILE_ID ",
"mentioned_email_addresses": ["alex@altostrat.com", "kai@cymbalgroup.com"],
"assignee_email_address": "yuri@altostrat.com"
}
}
Excludes resource data
{
"comment": {
"id": " COMMENT_ID ",
"file_id": " FILE_ID "
}
}
A user reopens a comment on a file.
google.workspace.drive.comment.v3.reopened
Includes resource data
{
"comment": {
"id": " COMMENT_ID ",
"file_id": " FILE_ID ",
"mentioned_email_addresses": ["alex@altostrat.com", "kai@cymbalgroup.com"],
"assignee_email_address": "yuri@altostrat.com"
}
}
Excludes resource data
{
"comment": {
"id": " COMMENT_ID ",
"file_id": " FILE_ID "
}
}
A user deletes a comment on a file.
google.workspace.drive.comment.v3.deleted
Includes resource data
{
"comment": {
"id": " COMMENT_ID ",
"file_id": " FILE_ID ",
"mentioned_email_addresses": ["alex@altostrat.com", "kai@cymbalgroup.com"],
"assignee_email_address": "yuri@altostrat.com"
}
}
Excludes resource data
{
"comment": {
"id": " COMMENT_ID ",
"file_id": " FILE_ID "
}
}
A user adds a file to a folder or shared drive.
google.workspace.drive.file.v3.created
Includes resource data
{
"file": {
"id": " FILE_ID ",
"parent": " PARENT_ID ",
"version": "63",
"mimeType": "application/vnd.google-apps.document"
}
}
Excludes resource data
{
"file": {
"id": " FILE_ID "
}
}
A user moves a file to a folder or shared drive.
google.workspace.drive.file.v3.moved
Includes resource data
{
"file": {
"id": " FILE_ID ",
"parent": " PARENT_ID ",
"version": "63",
"mimeType": "application/vnd.google-apps.document"
}
}
Excludes resource data
{
"file": {
"id": " FILE_ID "
}
}
A user edits a file or a new revision is uploaded.
google.workspace.drive.file.v3.contentChanged
Includes resource data
{
"file": {
"id": " FILE_ID ",
"parent": " PARENT_ID ",
"version": "63",
"mimeType": "application/vnd.google-apps.document"
}
}
Excludes resource data
{
"file": {
"id": " FILE_ID "
}
}
A user deletes a file.
google.workspace.drive.file.v3.deleted
Includes resource data
{
"file": {
"id": " FILE_ID ",
"parent": " PARENT_ID ",
"version": "63",
"mimeType": "application/vnd.google-apps.document"
}
}
Excludes resource data
{
"file": {
"id": " FILE_ID "
}
}
A user trashes a file.
google.workspace.drive.file.v3.trashed
Includes resource data
{
"file": {
"id": " FILE_ID ",
"parent": " PARENT_ID ",
"version": "63",
"mimeType": "application/vnd.google-apps.document"
}
}
Excludes resource data
{
"file": {
"id": " FILE_ID "
}
}
A user restores a file from the trash.
google.workspace.drive.file.v3.untrashed
Includes resource data
{
"file": {
"id": " FILE_ID ",
"parent": " PARENT_ID ",
"version": "63",
"mimeType": "application/vnd.google-apps.document"
}
}
Excludes resource data
{
"file": {
"id": " FILE_ID "
}
}
A user renames a file or folder.
google.workspace.drive.file.v3.renamed
Includes resource data
{
"file": {
"id": " FILE_ID ",
"parent": " PARENT_ID ",
"version": "63",
"mimeType": "application/vnd.google-apps.document"
}
}
Excludes resource data
{
"file": {
"id": " FILE_ID "
}
}
A user creates a permission on a file.
google.workspace.drive.permission.v3.created
Includes resource data
{
"permission": [
{
"id": "PERMISSION_ID",
"file_id": "FILE_ID"
}
]
}
Excludes resource data
{
"permission": [
{
"id": "PERMISSION_ID"
}
]
}
A user edits a permission on a file.
google.workspace.drive.permission.v3.edited
Includes resource data
{
"permission": [
{
"id": "PERMISSION_ID",
"file_id": "FILE_ID"
}
]
}
Excludes resource data
{
"permission": [
{
"id": "PERMISSION_ID"
}
]
}
A user deletes permissions on a file.
google.workspace.drive.permission.v3.deleted
Includes resource data
{
"permission": [
{
"id": "PERMISSION_ID",
"file_id": "FILE_ID"
}
]
}
Excludes resource data
{
"permission": [
{
"id": "PERMISSION_ID"
}
]
}
A user creates a comment reply on a comment thread.
google.workspace.drive.reply.v3.created
Includes resource data
{
"reply": {
"id": " REPLY_ID ",
"comment_id": " COMMENT_ID ",
"file_id": " FILE_ID ",
"mentioned_email_addresses": ["alex@altostrat.com", "kai@cymbalgroup.com"],
"assignee_email_address": "yuri@altostrat.com"
}
}
Excludes resource data
{
"reply": {
"id": " REPLY_ID ",
"comment_id": " COMMENT_ID ",
"file_id": " FILE_ID "
}
}
A user edits a comment reply on a comment thread.
google.workspace.drive.reply.v3.edited
Includes resource data
{
"reply": {
"id": " REPLY_ID ",
"comment_id": " COMMENT_ID ",
"file_id": " FILE_ID ",
"mentioned_email_addresses": ["alex@altostrat.com", "kai@cymbalgroup.com"],
"assignee_email_address": "yuri@altostrat.com"
}
}
Excludes resource data
{
"reply": {
"id": " REPLY_ID ",
"comment_id": " COMMENT_ID ",
"file_id": " FILE_ID "
}
}
A user deletes a comment reply on a comment thread.
google.workspace.drive.reply.v3.deleted
Includes resource data
{
"reply": {
"id": " REPLY_ID ",
"comment_id": " COMMENT_ID ",
"file_id": " FILE_ID ",
"mentioned_email_addresses": ["alex@altostrat.com", "kai@cymbalgroup.com"],
"assignee_email_address": "yuri@altostrat.com"
}
}
Excludes resource data
{
"reply": {
"id": " REPLY_ID ",
"comment_id": " COMMENT_ID ",
"file_id": " FILE_ID "
}
}
Limitations
When the includeDescendants
boolean field in
DriveOptions
is true , Drive subscriptions on shared drives and folders
always dispatch an event, even if the file that triggered the event is nested many layers below
the folder used for the Drive subscription.
Even though you may have created a subscription on a folder, you may not receive all events
within the file hierarchy as the user or application may not be granted access to them. In this
case, the subscription remains active but you won't receive any events for resources you don't
have access to.
Subscriptions are supported for events on all files and folders but not on the root folder of
shared drives. Subscriptions are only supported for files and folders inside shared
drives. Changes made directly to the root folder of a shared drive won't trigger events.
The user that authorizes the subscription must have permission on the file corresponding to the
events that they subscribe to.
The subscription only receives events for resources where the user has access through
their Google Workspace account or Google Account.
Related topics
Google Workspace Events API overview
Structure of Google Workspace events
Choose Google Workspace Events API scopes
Choose Google Drive API scopes
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
