---
title: "REST Resource: spaces.messages.attachments \_|\_ Google Chat \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.attachments
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/workspace/chat/api/reference
source_metadata:
  url: https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.attachments
  title: "REST Resource: spaces.messages.attachments \_|\_ Google Chat \_|\_ Google\
    \ for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Chat
Reference
Send feedback
REST Resource: spaces.messages.attachments
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
An Attachment resource represents a file attached to a Google Chat message, containing metadata such as file name, content type, and source.
Attachment includes URLs for thumbnail preview and user download, but Chat apps should utilize the data_ref field for accessing content.
The data_ref field can point to either uploaded content within Chat ( AttachmentDataRef ) or a Google Drive file ( DriveDataRef ).
AttachmentDataRef is used by Chat apps to create/update messages with attachments or to download attachment data via the media API.
Developers can use the get method to retrieve metadata for a specific message attachment.
Resource: Attachment
JSON representation
AttachmentDataRef
JSON representation
Source
Methods
Resource: Attachment
An attachment in Google Chat.
JSON representation
{
"name" : string ,
"contentName" : string ,
"contentType" : string ,
"thumbnailUri" : string ,
"downloadUri" : string ,
"source" : enum ( Source ) ,
"attachmentDataRef" : {
object ( AttachmentDataRef )
} ,
"driveDataRef" : {
object ( DriveDataRef )
}
}
Fields
name
string
Identifier. Resource name of the attachment.
Format: spaces/{space}/messages/{message}/attachments/{attachment} .
contentName
string
Output only. The original file name for the content, not the full path.
contentType
string
Output only. The content type (MIME type) of the file.
thumbnailUri
string
Output only. The thumbnail URL which should be used to preview the attachment to a human user. Chat apps shouldn't use this URL to download attachment content.
downloadUri
string
Output only. The download URL which should be used to allow a human user to download the attachment. Chat apps shouldn't use this URL to download attachment content.
source
enum ( Source )
Output only. The source of the attachment.
Union field data_ref . The data reference to the attachment. data_ref can be only one of the following:
attachmentDataRef
object ( AttachmentDataRef )
Optional. A reference to the attachment data. This field is used to create or update messages with attachments, or with the media API to download the attachment data.
driveDataRef
object ( DriveDataRef )
Output only. A reference to the Google Drive attachment. This field is used with the Google Drive API.
AttachmentDataRef
A reference to the attachment data.
JSON representation
{
"resourceName" : string ,
"attachmentUploadToken" : string
}
Fields
resourceName
string
Optional. The resource name of the attachment data. This field is used with the media API to download the attachment data.
attachmentUploadToken
string
Optional. Opaque token containing a reference to an uploaded attachment. Treated by clients as an opaque string and used to create or update Chat messages with attachments.
Source
The source of the attachment.
Enums
SOURCE_UNSPECIFIED
Reserved.
DRIVE_FILE
The file is a Google Drive file.
UPLOADED_CONTENT
The file is uploaded to Chat.
Methods
get
Gets the metadata of a message attachment.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-24 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-24 UTC."],[],["Attachments in Google Chat contain metadata and data references. Key information includes the attachment's `name`, `contentName`, `contentType`, `thumbnailUri`, and `downloadUri`. The `source` indicates if it's from Google Drive or uploaded to Chat. `AttachmentDataRef` provides a `resourceName` for media API downloads and an `attachmentUploadToken` for creating/updating messages with attachments. Methods to retrieve attachments metadata are detailed. The data source can be either a Drive file or uploaded content.\n"]]
