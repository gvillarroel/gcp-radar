---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T08:20:50.976Z"
product_name: "Gmail API"
product_slug: "gmail-api"
feature_name: "Labels count fields"
feature_slug: "labels-count-fields"
latest_feature_date: "2014-10-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.labels"
  - "https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages"
  - "https://developers.google.com/workspace/gmail/api/guides"
keywords:
  - "resource"
  - "fields"
  - "unread"
  - "count"
  - "total"
  - "adds"
  - "message"
  - "labels"
---

# Labels count fields

Product: Gmail API
Coverage: MEDIUM

## Step 02 Summary

The Labels resource adds fields for total and unread message and thread counts.

## Extended Definition

The Labels resource adds fields for total and unread message and thread counts.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.labels](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.labels)
- [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages)
- [https://developers.google.com/workspace/gmail/api/guides](https://developers.google.com/workspace/gmail/api/guides)

## Supporting Pages

### REST Resource: users.labels \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.labels](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.labels)
- Source ID: `site-docs-reference`
- Final score: 154
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- JSON representation { "id" : string , "name" : string , "messageListVisibility" : enum ( MessageListVisibility ) , "labelListVisibility" : enum ( LabelListVisibility ) , "type" : enum ( Type ) , "messagesTotal" : integer , "messagesUnread" : integer , "threadsTotal" : integer , "threadsUnread" : integer , "color" : { object ( Color ) } } Fields id string The immutable ID of the label. name string The display name of the label. messageListVisibility enum ( MessageListVisibility ) The visibility of messages with this label in the message list in the Gmail web interface. labelListVisibility enum ( LabelListVisibility ) The visibility of the label in the label list in the Gmail web interface. type enum ( Type ) The owner type for the label.
- For example, users can apply and remove the INBOX and UNREAD labels from messages and threads, but cannot apply or remove the DRAFTS or SENT labels from messages or threads. messagesTotal integer The total number of messages with the label. messagesUnread integer The number of unread messages with the label. threadsTotal integer The total number of threads with the label. threadsUnread integer The number of unread threads with the label. color object ( Color ) The color to assign to the label.
- Resource: Label JSON representation MessageListVisibility LabelListVisibility Type Color JSON representation Methods Resource: Label Labels are used to categorize messages and threads within the user's mailbox.
- LabelListVisibility Enums labelShow Show the label in the label list. labelShowIfUnread Show the label if there are any unread messages with that label. labelHide Do not show the label in the label list.

### REST Resource: users.messages \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages)
- Source ID: `site-docs-reference`
- Final score: 145
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Methods batchDelete Deletes many messages by message ID. batchModify Modifies the labels on the specified messages. delete Immediately and permanently deletes the specified message. get Gets the specified message. import Imports a message into only this user's mailbox, with standard email delivery scanning and classification similar to receiving via SMTP. insert Directly inserts a message into only this user's mailbox similar to IMAP APPEND , bypassing most scanning and classification. list Lists the messages in the user's mailbox. modify Modifies the labels on the specified message. send Sends the specified message to the recipients in the To , Cc , and Bcc headers. trash Moves the specified message to the trash. untrash Removes the specified message from the trash.
- JSON representation { "id" : string , "threadId" : string , "labelIds" : [ string ] , "snippet" : string , "historyId" : string , "internalDate" : string , "payload" : { object ( MessagePart ) } , "sizeEstimate" : integer , "raw" : string , "classificationLabelValues" : [ { object ( ClassificationLabelValue ) } ] } Fields id string The immutable ID of the message. threadId string The ID of the thread the message belongs to.
- JSON representation { "partId" : string , "mimeType" : string , "filename" : string , "headers" : [ { object ( Header ) } ] , "body" : { object ( MessagePartBody ) } , "parts" : [ { object ( MessagePart ) } ] } Fields partId string The immutable ID of the message part. mimeType string The MIME type of the message part. filename string The filename of the attachment.
- The Subject headers must match. labelIds[] string List of IDs of labels applied to this message. snippet string A short part of the message text. historyId string The ID of the last history record that modified this message. internalDate string ( int64 format) The internal message creation timestamp (epoch ms), which determines ordering in the inbox.

### Gmail API overview \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides](https://developers.google.com/workspace/gmail/api/guides)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For most web applications the Gmail API is the best choice for authorized access to a user's Gmail data and is suitable for various applications, such as: Read-only mail extraction, indexing, and backup Automated or programmatic message sending Email account migration Email organization including filtering and sorting of messages Standardization of email signatures across an organization Common terms The following is a list of common terms used in this API: Delegator and Delegate A delegator is a Gmail user who grants mailbox access to another user within the same Google Workspace organization.
- Filters Advanced rules configured for an account that evaluate incoming messages against specific matching criteria (like sender, subject, or size).
- When a message matches, filters automatically trigger actions such as adding or removing labels, or forwarding the email to a specified address.
- Forwarding addresses Specific, verified email addresses configured to receive auto-forwarded messages from a user's account.

