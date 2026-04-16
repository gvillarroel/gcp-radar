---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T08:20:50.976Z"
product_name: "Gmail API"
product_slug: "gmail-api"
feature_name: "getProfile method"
feature_slug: "getprofile-method"
latest_feature_date: "2014-10-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list"
  - "https://developers.google.com/workspace/gmail/api/guides/uploads"
  - "https://developers.google.com/workspace/gmail/api/reference/rest"
keywords:
  - "getprofile"
  - "wide"
  - "metadata"
  - "returns"
  - "such"
  - "mailbox"
  - "history"
  - "method"
---

# getProfile method

Product: Gmail API
Coverage: MEDIUM

## Step 02 Summary

The getProfile method returns mailbox-wide metadata such as history ID and total message and thread counts.

## Extended Definition

The getProfile method returns mailbox-wide metadata such as history ID and total message and thread counts.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list)
- [https://developers.google.com/workspace/gmail/api/guides/uploads](https://developers.google.com/workspace/gmail/api/guides/uploads)
- [https://developers.google.com/workspace/gmail/api/reference/rest](https://developers.google.com/workspace/gmail/api/reference/rest)

## Supporting Pages

### Method: users.history.list \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list)
- Source ID: `site-docs-reference`
- Final score: 105
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- We recommend using the specific change-type fields instead of this. messagesAdded[] object ( MessageAdded ) Messages added to the mailbox in this history record. messagesDeleted[] object ( MessageDeleted ) Messages deleted (not Trashed) from the mailbox in this history record. labelsAdded[] object ( LabelAdded ) Labels added to messages in this history record. labelsRemoved[] object ( LabelRemoved ) Labels removed from messages in this history record.
- JSON representation { "id" : string , "messages" : [ { object ( Message ) } ] , "messagesAdded" : [ { object ( MessageAdded ) } ] , "messagesDeleted" : [ { object ( MessageDeleted ) } ] , "labelsAdded" : [ { object ( LabelAdded ) } ] , "labelsRemoved" : [ { object ( LabelRemoved ) } ] } Fields id string The mailbox sequence ID. messages[] object ( Message ) List of messages changed in this history record.
- Any messages contained in the response will typically only have id and threadId fields populated. nextPageToken string Page token to retrieve the next page of results in the list. historyId string The ID of the mailbox's current history record.
- Home Google Workspace Gmail Reference Send feedback Method: users.history.list Stay organized with collections Save and categorize content based on your preferences.

### Upload attachments \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/uploads](https://developers.google.com/workspace/gmail/api/guides/uploads)
- Source ID: `site-docs-root`
- Final score: 77
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- POST /upload/gmail/v1/users/ userId /messages/send?uploadType=multipart HTTP/1.1 Host: www.googleapis.com Authorization: Bearer your auth token Content-Type: multipart/related; boundary=foo bar baz Content-Length: number of bytes in entire request body --foo bar baz Content-Type: application/json; charset=UTF-8 { "id" : string , "threadId" : string , "labelIds" : [ string ], "snippet" : string , "historyId" : unsigned long , "payload" : { "partId" : string , "mimeType" : string , "filename" : string , "headers" : [ { "name" : string , "value" : string } ], "body" : users . messages . attachments Resource , "parts" : [ ( MessagePart ) ] }, "sizeEstimate" : integer , "raw" : bytes } --foo bar baz Content-Type: message/rfc822 Email Message data --foo bar baz-- If the request succeeds, the server returns the HTTP 200 OK status code along with any metadata: HTTP/1.1 200 Content-Type: application/json { "id" : string , "threadId" : string , "labelIds" : [ string ], "snippet" : string , "historyId" : unsigned long , "payload" : { "partId" : string , "mimeType" : string , "filename" : string , "headers" : [ { "name" : string , "value" : string } ], "body" : users . messages . attachments Resource , "parts" : [ ( MessagePart ) ] }, "sizeEstimate" : integer , "raw" : bytes } Resumable upload To upload data files more reliably, you can use the resumable upload protocol.
- POST /upload/gmail/v1/users/ userId /messages/send?uploadType=media HTTP/1.1 Host: www.googleapis.com Content-Type: message/rfc822 Content-Length: number of bytes in file Authorization: Bearer your auth token Email Message data If the request succeeds, the server returns the HTTP 200 OK status code along with any metadata: HTTP/1.1 200 Content-Type: application/json { "id" : string , "threadId" : string , "labelIds" : [ string ], "snippet" : string , "historyId" : unsigned long , "payload" : { "partId" : string , "mimeType" : string , "filename" : string , "headers" : [ { "name" : string , "value" : string } ], "body" : users . messages . attachments Resource , "parts" : [ ( MessagePart ) ] }, "sizeEstimate" : integer , "raw" : bytes } Multipart upload If you have metadata that you want to send along with the data to upload, you can make a single multipart/related request.
- POST /upload/gmail/v1/users/ userId /messages/send?uploadType=resumable HTTP/1.1 Host: www.googleapis.com Authorization: Bearer your auth token Content-Length: 38 Content-Type: application/json; charset=UTF-8 X-Upload-Content-Type: message/rfc822 X-Upload-Content-Length: 2000000 { "id" : string , "threadId" : string , "labelIds" : [ string ], "snippet" : string , "historyId" : unsigned long , "payload" : { "partId" : string , "mimeType" : string , "filename" : string , "headers" : [ { "name" : string , "value" : string } ], "body" : users . messages . attachments Resource , "parts" : [ ( MessagePart ) ] }, "sizeEstimate" : integer , "raw" : bytes } Note: For an initial resumable update request without metadata, leave the body of the request empty, and set the Content-Length header to 0 .
- Step 1: Start a resumable session To initiate a resumable upload, make a POST or PUT request to the method's /upload URI and add the query parameter uploadType=resumable , for example: POST https://www.googleapis.com/upload/gmail/v1/users/ userId /messages/send?uploadType=resumable For this initiating request, the body is either empty or it contains the metadata only; you'll transfer the actual contents of the file you want to upload in subsequent requests.

### Gmail API \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/reference/rest](https://developers.google.com/workspace/gmail/api/reference/rest)
- Source ID: `site-docs-reference`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://gmail.googleapis.com REST Resource: v1.users Methods getProfile GET /gmail/v1/users/{userId}/profile Gets the current user's Gmail profile. stop POST /gmail/v1/users/{userId}/stop Stop receiving push notifications for the given user mailbox. watch POST /gmail/v1/users/{userId}/watch Set up or update a push notification watch on the given user mailbox.
- REST Resource: v1.users.history Methods list GET /gmail/v1/users/{userId}/history Lists the history of all changes to the given mailbox.
- REST Resource: v1.users.messages Methods batchDelete POST /gmail/v1/users/{userId}/messages/batchDelete Deletes many messages by message ID. batchModify POST /gmail/v1/users/{userId}/messages/batchModify Modifies the labels on the specified messages. delete DELETE /gmail/v1/users/{userId}/messages/{id} Immediately and permanently deletes the specified message. get GET /gmail/v1/users/{userId}/messages/{id} Gets the specified message. import POST /gmail/v1/users/{userId}/messages/import POST /upload/gmail/v1/users/{userId}/messages/import Imports a message into only this user's mailbox, with standard email delivery scanning and classification similar to receiving via SMTP. insert POST /gmail/v1/users/{userId}/messages POST /upload/gmail/v1/users/{userId}/messages Directly inserts a message into only this user's mailbox similar to IMAP APPEND , bypassing most scanning and classification. list GET /gmail/v1/users/{userId}/messages Lists the messages in the user's mailbox. modify POST /gmail/v1/users/{userId}/messages/{id}/modify Modifies the labels on the specified message. send POST /gmail/v1/users/{userId}/messages/send POST /upload/gmail/v1/users/{userId}/messages/send Sends the specified message to the recipients in the To , Cc , and Bcc headers. trash POST /gmail/v1/users/{userId}/messages/{id}/trash Moves the specified message to the trash. untrash POST /gmail/v1/users/{userId}/messages/{id}/untrash Removes the specified message from the trash.
- REST Resource: v1.users.settings.cse.keypairs Methods create POST /gmail/v1/users/{userId}/settings/cse/keypairs Creates and uploads a client-side encryption S/MIME public key certificate chain and private key metadata for the authenticated user. disable POST /gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId}:disable Turns off a client-side encryption key pair. enable POST /gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId}:enable Turns on a client-side encryption key pair that was turned off. get GET /gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId} Retrieves an existing client-side encryption key pair. list GET /gmail/v1/users/{userId}/settings/cse/keypairs Lists client-side encryption key pairs for an authenticated user. obliterate POST /gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId}:obliterate Deletes a client-side encryption key pair permanently and immediately.

