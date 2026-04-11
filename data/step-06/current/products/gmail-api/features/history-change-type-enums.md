---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T18:48:08.247Z"
product_name: "Gmail API"
product_slug: "gmail-api"
feature_name: "History change-type enums"
feature_slug: "history-change-type-enums"
latest_feature_date: "2015-02-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list"
  - "https://developers.google.com/workspace/gmail/api/guides/push"
  - "https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings"
  - "https://developers.google.com/workspace/gmail/api/guides/uploads"
keywords:
  - "history"
  - "change"
  - "type"
  - "enums"
  - "the"
  - "list"
  - "method"
  - "now"
---

# History change-type enums

Product: Gmail API
Coverage: LOW

## Step 02 Summary

The history.list method now includes change-type enums such as messagesAdded, messagesDeleted, labelsAdded, and labelsDeleted.

## Extended Definition

The history.list method now includes change-type enums such as messagesAdded, messagesDeleted, labelsAdded, and labelsDeleted.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list)
- [https://developers.google.com/workspace/gmail/api/guides/push](https://developers.google.com/workspace/gmail/api/guides/push)
- [https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings](https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings)
- [https://developers.google.com/workspace/gmail/api/guides/uploads](https://developers.google.com/workspace/gmail/api/guides/uploads)

## Supporting Pages

### Method: users.history.list \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list)
- Source ID: `site-docs-reference`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- HistoryType Enums messageAdded messageDeleted labelAdded labelRemoved History A record of a change to the user's mailbox.
- We recommend using the specific change-type fields instead of this. messagesAdded[] object ( MessageAdded ) Messages added to the mailbox in this history record. messagesDeleted[] object ( MessageDeleted ) Messages deleted (not Trashed) from the mailbox in this history record. labelsAdded[] object ( LabelAdded ) Labels added to messages in this history record. labelsRemoved[] object ( LabelRemoved ) Labels removed from messages in this history record.
- JSON representation { "id" : string , "messages" : [ { object ( Message ) } ] , "messagesAdded" : [ { object ( MessageAdded ) } ] , "messagesDeleted" : [ { object ( MessageDeleted ) } ] , "labelsAdded" : [ { object ( LabelAdded ) } ] , "labelsRemoved" : [ { object ( LabelRemoved ) } ] } Fields id string The mailbox sequence ID. messages[] object ( Message ) List of messages changed in this history record.
- Lists the history of all changes to the given mailbox.

### Configure push notifications in Gmail API \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/push](https://developers.google.com/workspace/gmail/api/guides/push)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The message.data field is a Base64URL-encoded string that decodes to a JSON object containing the email address and the new mailbox history ID for the user: { "emailAddress" : "user@example.com" , "historyId" : "9876543210" } You can then use the history.list method to get the change details for the user since their last known historyId , as described in the Synchronize clients with Gmail API .
- For example, use the history.list method to identify changes that occurred between your initial watch request and the receipt of the notification message shared in the previous example.
- For example, use the following request to be notified any time a change is made to the inbox: Protocol POST "https://www.googleapis.com/gmail/v1/users/me/watch" Content - type : application / json { topicName : "projects/myproject/topics/mytopic" , labelIds : [ "INBOX" ], labelFilterBehavior : "INCLUDE" , } Python request = { 'labelIds' : [ 'INBOX' ], 'topicName' : 'projects/myproject/topics/mytopic' , 'labelFilterBehavior' : 'INCLUDE' } gmail . users () . watch ( userId = 'me' , body = request ) . execute () Watch response If the watch request is successful, you receive a response like the following: { historyId: 1234567890 expiration: 1431990098200 } The response contains the current mailbox historyId for the user.
- For example, fall back to periodically calling the history.list method after a period with no notifications for a user.

### Migrate from the Email Settings API \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings](https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings)
- Source ID: `site-docs-root`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- If either of the delegator or delegate users are disabled (for example, suspended in Google Workspace) this method fails with an HTTP 4XX error instead of an HTTP 500 error. settings.delegates.delete This method can now be used to delete delegates with any VerificationStatus , rather than just delegates which are accepted or expired . settings.delegates.get This is a new method, which might be preferable over the settings.delegates.list method depending on need.
- Old setting New setting Notes labelId id label name unreadCount messagesUnread visibility labelListVisibility SHOW is now labelShow HIDE is now labelHide Other changes: When updating or deleting labels, the Gmail API references labels by ID instead of by name.
- This method can now be used for users which require a password change at their next sign in.
- Old setting New setting Notes from criteria.from to criteria.to subject criteria.subject hasTheWord criteria.query doesNotHaveTheWord criteria.negatedQuery hasAttachment criteria.hasAttachment shouldArchive action.removeLabelIds Use INBOX as the label ID shouldMarkAsRead action.removeLabelIds Use UNREAD as the label ID shouldStar action.addLabelIds Use STARRED as the label ID label action.addLabelIds Use the ID of the label to add forwardTo action.forward shouldTrash action.addLabelIds Use TRASH as the label ID neverSpam action.removeLabelIds Use SPAM as the label ID Other changes: If adding a user label doesn't already exist, it must be explicitly created using the labels.create method.

### Upload attachments \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/uploads](https://developers.google.com/workspace/gmail/api/guides/uploads)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- See the API reference for each method's list of accepted media MIME types and size limits for uploaded files.
- See the API reference for each method's list of accepted media MIME types and size limits for uploaded files.
- POST /upload/gmail/v1/users/ userId /messages/send?uploadType=multipart HTTP/1.1 Host: www.googleapis.com Authorization: Bearer your auth token Content-Type: multipart/related; boundary=foo bar baz Content-Length: number of bytes in entire request body --foo bar baz Content-Type: application/json; charset=UTF-8 { "id" : string , "threadId" : string , "labelIds" : [ string ], "snippet" : string , "historyId" : unsigned long , "payload" : { "partId" : string , "mimeType" : string , "filename" : string , "headers" : [ { "name" : string , "value" : string } ], "body" : users . messages . attachments Resource , "parts" : [ ( MessagePart ) ] }, "sizeEstimate" : integer , "raw" : bytes } --foo bar baz Content-Type: message/rfc822 Email Message data --foo bar baz-- If the request succeeds, the server returns the HTTP 200 OK status code along with any metadata: HTTP/1.1 200 Content-Type: application/json { "id" : string , "threadId" : string , "labelIds" : [ string ], "snippet" : string , "historyId" : unsigned long , "payload" : { "partId" : string , "mimeType" : string , "filename" : string , "headers" : [ { "name" : string , "value" : string } ], "body" : users . messages . attachments Resource , "parts" : [ ( MessagePart ) ] }, "sizeEstimate" : integer , "raw" : bytes } Resumable upload To upload data files more reliably, you can use the resumable upload protocol.
- POST /upload/gmail/v1/users/ userId /messages/send?uploadType=media HTTP/1.1 Host: www.googleapis.com Content-Type: message/rfc822 Content-Length: number of bytes in file Authorization: Bearer your auth token Email Message data If the request succeeds, the server returns the HTTP 200 OK status code along with any metadata: HTTP/1.1 200 Content-Type: application/json { "id" : string , "threadId" : string , "labelIds" : [ string ], "snippet" : string , "historyId" : unsigned long , "payload" : { "partId" : string , "mimeType" : string , "filename" : string , "headers" : [ { "name" : string , "value" : string } ], "body" : users . messages . attachments Resource , "parts" : [ ( MessagePart ) ] }, "sizeEstimate" : integer , "raw" : bytes } Multipart upload If you have metadata that you want to send along with the data to upload, you can make a single multipart/related request.

