---
title: "Google Drive API \_|\_ Google for Developers"
url: https://developers.google.com/workspace/drive/api/reference/rest/v2
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/workspace/drive/api/reference/rest/v3
source_metadata:
  url: https://developers.google.com/workspace/drive/api/reference/rest/v2
  title: "Google Drive API \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Drive
Reference
Send feedback
Google Drive API
Stay organized with collections
Save and categorize content based on your preferences.
The Google Drive API allows clients to access resources from Google Drive.
REST Resource: v2.about
REST Resource: v2.apps
REST Resource: v2.changes
REST Resource: v2.channels
REST Resource: v2.children
REST Resource: v2.comments
REST Resource: v2.drives
REST Resource: v2.files
REST Resource: v2.parents
REST Resource: v2.permissions
REST Resource: v2.properties
REST Resource: v2.replies
REST Resource: v2.revisions
Service: googleapis.com/drive/v2
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://www.googleapis.com/discovery/v1/apis/drive/v2/rest
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://www.googleapis.com
REST Resource: v2.about
Methods
get
GET /drive/v2/about
Gets the information about the current user along with Drive API settings
REST Resource: v2.apps
Methods
get
GET /drive/v2/apps/{appId}
Gets a specific app.
list
GET /drive/v2/apps
Lists a user's installed apps.
REST Resource: v2.changes
Methods
get
GET /drive/v2/changes/{changeId}
Deprecated: Use changes.getStartPageToken and changes.list to retrieve recent changes.
getStartPageToken
GET /drive/v2/changes/startPageToken
Gets the starting pageToken for listing future changes.
list
GET /drive/v2/changes
Lists the changes for a user or shared drive.
watch
POST /drive/v2/changes/watch
Subscribe to changes for a user.
REST Resource: v2.channels
Methods
stop
POST /drive/v2/channels/stop
Stops watching resources through this channel.
REST Resource: v2.children
Methods
delete
DELETE /drive/v2/files/{folderId}/children/{childId}
Removes a child from a folder.
get
GET /drive/v2/files/{folderId}/children/{childId}
Gets a specific child reference.
insert
POST /drive/v2/files/{folderId}/children
Inserts a file into a folder.
list
GET /drive/v2/files/{folderId}/children
Lists a folder's children.
REST Resource: v2.comments
Methods
delete
DELETE /drive/v2/files/{fileId}/comments/{commentId}
Deletes a comment.
get
GET /drive/v2/files/{fileId}/comments/{commentId}
Gets a comment by ID.
insert
POST /drive/v2/files/{fileId}/comments
Creates a new comment on the given file.
list
GET /drive/v2/files/{fileId}/comments
Lists a file's comments.
patch
PATCH /drive/v2/files/{fileId}/comments/{commentId}
Updates an existing comment.
update
PUT /drive/v2/files/{fileId}/comments/{commentId}
Updates an existing comment.
REST Resource: v2.drives
Methods
delete
DELETE /drive/v2/drives/{driveId}
Permanently deletes a shared drive for which the user is an organizer .
get
GET /drive/v2/drives/{driveId}
Gets a shared drive's metadata by ID.
hide
POST /drive/v2/drives/{driveId}/hide
Hides a shared drive from the default view.
insert
POST /drive/v2/drives
Creates a new shared drive.
list
GET /drive/v2/drives
Lists the user's shared drives.
unhide
POST /drive/v2/drives/{driveId}/unhide
Restores a shared drive to the default view.
update
PUT /drive/v2/drives/{driveId}
Updates the metadata for a shared drive.
REST Resource: v2.files
Methods
copy
POST /drive/v2/files/{fileId}/copy
Creates a copy of the specified file.
delete
DELETE /drive/v2/files/{fileId}
Permanently deletes a file owned by the user without moving it to the trash.
emptyTrash
DELETE /drive/v2/files/trash
Permanently deletes all of the user's trashed files.
export
GET /drive/v2/files/{fileId}/export
Exports a Google Workspace document to the requested MIME type and returns exported byte content.
generateIds
GET /drive/v2/files/generateIds
Generates a set of file IDs which can be provided in insert or copy requests.
get
GET /drive/v2/files/{fileId}
Gets a file's metadata or content by ID.
insert
POST /drive/v2/files
POST /upload/drive/v2/files
Inserts a new file.
list
GET /drive/v2/files
Lists the user's files.
listLabels
GET /drive/v2/files/{fileId}/listLabels
Lists the labels on a file.
modifyLabels
POST /drive/v2/files/{fileId}/modifyLabels
Modifies the set of labels applied to a file.
patch
PATCH /drive/v2/files/{fileId}
Updates a file's metadata and/or content.
touch
POST /drive/v2/files/{fileId}/touch
Set the file's updated time to the current server time.
trash
POST /drive/v2/files/{fileId}/trash
Moves a file to the trash.
untrash
POST /drive/v2/files/{fileId}/untrash
Restores a file from the trash.
update
PUT /drive/v2/files/{fileId}
PUT /upload/drive/v2/files/{fileId}
Updates a file's metadata, content, or both.
watch
POST /drive/v2/files/{fileId}/watch
Subscribes to changes to a file.
REST Resource: v2.parents
Methods
delete
DELETE /drive/v2/files/{fileId}/parents/{parentId}
Removes a parent from a file.
get
GET /drive/v2/files/{fileId}/parents/{parentId}
Gets a specific parent reference.
insert
POST /drive/v2/files/{fileId}/parents
Adds a parent folder for a file.
list
GET /drive/v2/files/{fileId}/parents
Lists a file's parents.
REST Resource: v2.permissions
Methods
delete
DELETE /drive/v2/files/{fileId}/permissions/{permissionId}
Deletes a permission from a file or shared drive.
get
GET /drive/v2/files/{fileId}/permissions/{permissionId}
Gets a permission by ID.
getIdForEmail
GET /drive/v2/permissionIds/{email}
Returns the permission ID for an email address.
insert
POST /drive/v2/files/{fileId}/permissions
Inserts a permission for a file or shared drive.
list
GET /drive/v2/files/{fileId}/permissions
Lists a file's or shared drive's permissions.
patch
PATCH /drive/v2/files/{fileId}/permissions/{permissionId}
Updates a permission using patch semantics.
update
PUT /drive/v2/files/{fileId}/permissions/{permissionId}
Updates a permission.
REST Resource: v2.properties
Methods
delete
DELETE /drive/v2/files/{fileId}/properties/{propertyKey}
Deletes a property.
get
GET /drive/v2/files/{fileId}/properties/{propertyKey}
Gets a property by its key.
insert
POST /drive/v2/files/{fileId}/properties
Adds a property to a file, or updates it if it already exists.
list
GET /drive/v2/files/{fileId}/properties
Lists a file's properties.
patch
PATCH /drive/v2/files/{fileId}/properties/{propertyKey}
Updates a property.
update
PUT /drive/v2/files/{fileId}/properties/{propertyKey}
Updates a property.
REST Resource: v2.replies
Methods
delete
DELETE /drive/v2/files/{fileId}/comments/{commentId}/replies/{replyId}
Deletes a reply.
get
GET /drive/v2/files/{fileId}/comments/{commentId}/replies/{replyId}
Gets a reply.
insert
POST /drive/v2/files/{fileId}/comments/{commentId}/replies
Creates a new reply to the given comment.
list
GET /drive/v2/files/{fileId}/comments/{commentId}/replies
Lists all of the replies to a comment.
patch
PATCH /drive/v2/files/{fileId}/comments/{commentId}/replies/{replyId}
Updates an existing reply.
update
PUT /drive/v2/files/{fileId}/comments/{commentId}/replies/{replyId}
Updates an existing reply.
REST Resource: v2.revisions
Methods
delete
DELETE /drive/v2/files/{fileId}/revisions/{revisionId}
Permanently deletes a file version.
get
GET /drive/v2/files/{fileId}/revisions/{revisionId}
Gets a specific revision.
list
GET /drive/v2/files/{fileId}/revisions
Lists a file's revisions.
patch
PATCH /drive/v2/files/{fileId}/revisions/{revisionId}
Updates a revision.
update
PUT /drive/v2/files/{fileId}/revisions/{revisionId}
Updates a revision.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-20 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-20 UTC."],[],[]]
