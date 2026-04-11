---
title: "Trash or delete files and folders \_|\_ Google Drive \_|\_ Google for Developers"
url: https://developers.google.com/workspace/drive/api/guides/delete
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://developers.google.com/workspace/drive/api/guides/api-specific-auth
source_metadata:
  url: https://developers.google.com/workspace/drive/api/guides/delete
  title: "Trash or delete files and folders \_|\_ Google Drive \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Drive
Guides
Send feedback
Trash or delete files and folders
Stay organized with collections
Save and categorize content based on your preferences.
You can remove Google Drive files and folders from both your My
Drive and shared drives. You have two options to do this: trash
or delete.
You can move files and folders into the trash and then restore them (within 30
days of trashing them). Deleting files and folders removes them permanently from
Drive. If you trash, restore, or permanently delete multiple
files or folders at once, it might take time for you to notice the changes.
Note: For this document, assume the term "files" means both files and folders.
Folders are files that only contain metadata and can be used to organize files
in Drive. Specifically, a folder is a file with no extension and
a MIME type of
application/vnd.google-apps.folder . For more information, see Create
metadata-only files .
This guide explains how you can dispose of files in Drive.
Use the fields parameter
If you want to specify the fields to return in the response, you can set the
fields system
parameter
with any method of the files resource. If you omit the fields parameter, the
server returns a default set of fields specific to the method. For example, the
list method returns only the kind , id ,
name , mimeType , and resourceKey fields for each file. To return different
fields, see Return specific fields .
Trash
To remove Drive files, you can move them to the trash. Files in
the trash are automatically deleted after 30 days. You can restore files from
your trash before the 30-day period.
Only the file owner can trash a file, but other users can still access the file
in the owner's trash until it's permanently deleted. If you attempt to trash a
file you don't own, you receive an insufficientFilePermissions error. For more
information, see Permissions .
To verify you're the file owner, call the get
method on the files resource with the fileId
path parameter and the fields parameter set to the boolean ownedByMe field. The ownedByMe field
isn't populated for files in shared drives because they're owned by the shared
drive, not individual users. For more information about the fields parameter,
see Use the fields parameter .
If you're not the file owner but still want a copy of the trashed file, do one
of the following:
Make a copy of the file.
Contact the owner to have them restore it from the trash.
Move a file to the trash
To move a file to the trash, use the update
method on the files resource with the fileId
path parameter and set the boolean
trashed field to true . To
trash a shared drive file, you must also set the boolean supportsAllDrives query
parameter to true . For more information, see Implement shared drive
support .
If successful, the response
body contains an instance of the
files resource.
Note: If you're using the previous Drive API v2 version, use the
trash method on the files resource. Learn how to migrate to
Drive API v3 .
The following code sample shows how to use the fileId to mark the file as
trashed:
Python
body_value = { 'trashed' : True }
response = drive_service . files () . update ( fileId = " FILE_ID " , body = body_value ) . execute ()
Node.js
const body_value = {
'trashed' : true
};
const response = await drive_service . files . update ({
fileId : ' FILE_ID ' ,
requestBody : body_value ,
});
return response ;
Replace FILE_ID with the fileId of the file that you want to
trash.
Determine a trashed file's properties
When a file is trashed, you can retrieve additional file properties. You can use
the get method on the files resource with the fileId path parameter and use one
of the following trashed fields in the fields parameter. For more information
about the fields parameter, see Use the fields parameter .
The following fields are populated for all files:
trashed : Whether the file
was trashed, either explicitly or from a trashed parent folder. Note that
while using trashed with the update method sets the file's status, the
get method retrieves the file's status.
explicitlyTrashed :
Whether the file was explicitly trashed, as opposed to recursively trashed,
from a parent folder.
The following fields are only populated for files located within a shared drive:
trashedTime : The time
that the item was trashed in RFC
3339 date-time format. If
you're using the previous Drive API v2 version, this field is
called
trashedDate .
trashingUser : If the
file was explicitly trashed, the user who trashed it.
Recover a file from the trash
To recover a file from the trash, use the
update method on the files resource with the fileId path parameter and set the
boolean trashed field to
false . To untrash a shared drive file, you also must set the boolean
supportsAllDrives query
parameter to true . For more information, see Implement shared drive
support .
If successful, the response
body contains an instance of the
files resource.
Note: If you're using the previous Drive API v2 version, use the
untrash method on the files resource. Learn how to migrate to
Drive API v3 .
The following code sample shows how to use the fileId to mark the file as
untrashed:
Python
body_value = { 'trashed' : False }
response = drive_service . files () . update ( fileId = " FILE_ID " , body = body_value ) . execute ()
Node.js
const body_value = {
'trashed' : false
};
const response = await drive_service . files . update ({
fileId : ' FILE_ID ' ,
requestBody : body_value ,
});
return response ;
Replace FILE_ID with the fileId of the file that you want to
untrash.
Empty trash
You can permanently delete all Drive files the user has moved to
the trash using the
emptyTrash method on the files resource. To empty the trash of a shared drive, you
must also set the
driveId
query parameter to the shared drive ID.
If successful, the response
body contains an empty JSON
object.
Note: If you're using the previous Drive API v2 version, use the
emptyTrash method on the files resource. Learn how to migrate to
Drive API v3 .
The following code sample shows how to use the fileId to permanently delete
all files in the trash:
Python
response = drive_service . files () . emptyTrash () . execute ()
Node.js
const response = await drive_service . files . emptyTrash ({
});
return response ;
Delete
You can permanently delete a Drive file without moving it to the
trash. After you delete a file, anyone you've shared the file with loses access
to it. If you want others to retain access to the file, you can transfer
ownership to someone else before deletion.
To delete a shared drive file, the user must have role=organizer on the parent
folder. If you're deleting a folder, all descendants owned by the user are also
deleted. For more information, see Permissions .
To permanently delete a user-owned file without moving it to the trash, use the
delete method on the files resource. To delete a shared drive file, you must also
set the boolean supportsAllDrives query
parameter to true . For more information, see Implement shared drive
support .
If successful, the response
body contains an empty JSON
object.
Note: If you're using the previous Drive API v2 version, use the
delete method on the files resource. Learn how to migrate to
Drive API v3 .
The following code sample shows how to use the fileId to delete the file:
Python
response = drive_service . files () . delete ( fileId = " FILE_ID " ) . execute ()
Node.js
const response = await drive_service . files . delete ({
fileId : ' FILE_ID '
});
return response ;
Replace FILE_ID with the fileId of the file that you want to
delete.
Permissions
The following table shows the role permissions required to trash or delete files
and folders. For a complete list of roles and the operations permitted by each,
refer to Roles and permissions .
Permitted operation
owner
organizer
fileOrganizer
writer
commenter
reader
Move files and folders into the trash
Recover files and folders from the trash
Empty the trash
Delete a file or folder
Delete files and folders in a shared drive [*]
Delete an empty shared drive
[*] Requires the organizer role on
a direct or indirect parent, as opposed to the role being present on the item.
Capabilities
A files resource contains a collection of boolean
capabilities fields that indicate the capabilities the user has on this file.
To check the capabilities, call the get method
on the files resource with the fileId path parameter and use one of the
following capabilities
fields in the fields parameter. For more information about the fields
parameter, see Use the fields parameter .
The following fields are populated for all files:
capabilities.canTrash :
Whether the current user can move this file to trash.
capabilities.canUntrash :
Whether the current user can restore this file from trash.
capabilities.canDelete :
Whether the current user can delete this file.
capabilities.canRemoveChildren :
Whether the current user can remove children from this folder. This is
false when the item isn't a folder.
The following fields are only populated for files located within a shared drive:
capabilities.canTrashChildren :
Whether the current user can trash children of this folder. This is false
when the item isn't a folder.
capabilities.canDeleteChildren :
Whether the current user can delete children of this folder. This is false
when the item isn't a folder.
File and folder limits
Drive files and folders, along with shared drive folders, have
some storage limits.
Generally, after the item limit is reached, the only way to create more space is
to permanently delete items or use a
different account. Moving files to the trash isn't enough to free up space.
For more information on file and folder limits, see the following:
File and folder limits in files
Folder limits in shared drives
Related topics
Delete files in Google Drive
Shared drive versus My Drive API differences
Roles and permissions
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
