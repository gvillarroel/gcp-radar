---
title: "REST Resource: users.messages \_|\_ Gmail \_|\_ Google for Developers"
url: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages
knowledge_key: corpus
source_id: site-docs-reference-required-2
source_type: site
entrypoint: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/insert
source_metadata:
  url: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages
  title: "REST Resource: users.messages \_|\_ Gmail \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Gmail
Reference
Send feedback
REST Resource: users.messages
Stay organized with collections
Save and categorize content based on your preferences.
Resource: Message
JSON representation
MessagePart
JSON representation
Header
JSON representation
ClassificationLabelValue
JSON representation
ClassificationLabelFieldValue
JSON representation
Methods
Resource: Message
An email message.
JSON representation
{
"id" : string ,
"threadId" : string ,
"labelIds" : [
string
] ,
"snippet" : string ,
"historyId" : string ,
"internalDate" : string ,
"payload" : {
object ( MessagePart )
} ,
"sizeEstimate" : integer ,
"raw" : string ,
"classificationLabelValues" : [
{
object ( ClassificationLabelValue )
}
]
}
Fields
id
string
The immutable ID of the message.
threadId
string
The ID of the thread the message belongs to. To add a message or draft to a thread, the following criteria must be met: The requested threadId must be specified on the Message or Draft.Message you supply with your request.
The References and In-Reply-To headers must be set in compliance with the RFC 2822 standard.
The Subject headers must match.
labelIds[]
string
List of IDs of labels applied to this message.
snippet
string
A short part of the message text.
historyId
string
The ID of the last history record that modified this message.
internalDate
string ( int64 format)
The internal message creation timestamp (epoch ms), which determines ordering in the inbox. For normal SMTP-received email, this represents the time the message was originally accepted by Google, which is more reliable than the Date header. However, for API-migrated mail, it can be configured by client to be based on the Date header.
payload
object ( MessagePart )
The parsed email structure in the message parts.
sizeEstimate
integer
Estimated size in bytes of the message.
raw
string ( bytes format)
The entire email message in an RFC 2822 formatted and base64url encoded string. Returned in messages.get and drafts.get responses when the format=RAW parameter is supplied.
A base64-encoded string.
classificationLabelValues[]
object ( ClassificationLabelValue )
Classification Label values on the message. Available Classification Label schemas can be queried using the Google Drive Labels API. Each classification label ID must be unique. If duplicate IDs are provided, only one will be retained, and the selection is arbitrary. Only used for Google Workspace accounts.
MessagePart
A single MIME message part.
JSON representation
{
"partId" : string ,
"mimeType" : string ,
"filename" : string ,
"headers" : [
{
object ( Header )
}
] ,
"body" : {
object ( MessagePartBody )
} ,
"parts" : [
{
object ( MessagePart )
}
]
}
Fields
partId
string
The immutable ID of the message part.
mimeType
string
The MIME type of the message part.
filename
string
The filename of the attachment. Only present if this message part represents an attachment.
headers[]
object ( Header )
List of headers on this message part. For the top-level message part, representing the entire message payload, it will contain the standard RFC 2822 email headers such as To , From , and Subject .
body
object ( MessagePartBody )
The message part body for this part, which may be empty for container MIME message parts.
parts[]
object ( MessagePart )
The child MIME message parts of this part. This only applies to container MIME message parts, for example multipart/* . For non- container MIME message part types, such as text/plain , this field is empty. For more information, see RFC 1521 .
Header
JSON representation
{
"name" : string ,
"value" : string
}
Fields
name
string
The name of the header before the : separator. For example, To .
value
string
The value of the header after the : separator. For example, someuser@example.com .
ClassificationLabelValue
Classification Labels applied to the email message. Classification Labels are different from Gmail inbox labels. Only used for Google Workspace accounts. Learn more about classification labels .
JSON representation
{
"labelId" : string ,
"fields" : [
{
object ( ClassificationLabelFieldValue )
}
]
}
Fields
labelId
string
Required. The canonical or raw alphanumeric classification label ID. Maps to the ID field of the Google Drive Label resource.
fields[]
object ( ClassificationLabelFieldValue )
Field values for the given classification label ID.
ClassificationLabelFieldValue
Field values for a classification label.
JSON representation
{
"fieldId" : string ,
"selection" : string
}
Fields
fieldId
string
Required. The field ID for the Classification Label Value. Maps to the ID field of the Google Drive Label.Field object.
selection
string
Selection choice ID for the selection option. Should only be set if the field type is SELECTION in the Google Drive Label.Field object. Maps to the id field of the Google Drive Label.Field.SelectionOptions resource.
Methods
batchDelete
Deletes many messages by message ID.
batchModify
Modifies the labels on the specified messages.
delete
Immediately and permanently deletes the specified message.
get
Gets the specified message.
import
Imports a message into only this user's mailbox, with standard email delivery scanning and classification similar to receiving via SMTP.
insert
Directly inserts a message into only this user's mailbox similar to IMAP APPEND , bypassing most scanning and classification.
list
Lists the messages in the user's mailbox.
modify
Modifies the labels on the specified message.
send
Sends the specified message to the recipients in the To , Cc , and Bcc headers.
trash
Moves the specified message to the trash.
untrash
Removes the specified message from the trash.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-13 UTC."],[],[]]
