---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T08:20:50.971Z"
product_name: "Gmail API"
product_slug: "gmail-api"
feature_name: "messages.batchDelete"
feature_slug: "messages-batchdelete"
latest_feature_date: "2016-02-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/batchDelete"
  - "https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/batchModify"
  - "https://developers.google.com/workspace/gmail/api/reference/rest"
keywords:
  - "batchdelete"
  - "deletes"
  - "operation"
  - "multiple"
  - "single"
  - "batch"
  - "messages"
  - "method"
---

# messages.batchDelete

Product: Gmail API
Coverage: MEDIUM

## Step 02 Summary

The messages.batchDelete method deletes multiple messages in a single batch operation.

## Extended Definition

The messages.batchDelete method deletes multiple messages in a single batch operation.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/batchDelete](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/batchDelete)
- [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/batchModify](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/batchModify)
- [https://developers.google.com/workspace/gmail/api/reference/rest](https://developers.google.com/workspace/gmail/api/reference/rest)

## Supporting Pages

### Method: users.messages.batchDelete \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/batchDelete](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/batchDelete)
- Source ID: `site-docs-reference`
- Final score: 210
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Google Workspace Gmail Reference Send feedback Method: users.messages.batchDelete Stay organized with collections Save and categorize content based on your preferences.
- HTTP request POST https://gmail.googleapis.com/gmail/v1/users/{userId}/messages/batchDelete The URL uses gRPC Transcoding syntax.
- Deletes many messages by message ID.
- Request body The request body contains data with the following structure: JSON representation { "ids" : [ string ] } Fields ids[] string The IDs of the messages to delete.

### Method: users.messages.batchModify \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/batchModify](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/batchModify)
- Source ID: `site-docs-reference`
- Final score: 103
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Google Workspace Gmail Reference Send feedback Method: users.messages.batchModify Stay organized with collections Save and categorize content based on your preferences.
- HTTP request POST https://gmail.googleapis.com/gmail/v1/users/{userId}/messages/batchModify The URL uses gRPC Transcoding syntax.
- Request body The request body contains data with the following structure: JSON representation { "ids" : [ string ] , "addLabelIds" : [ string ] , "removeLabelIds" : [ string ] } Fields ids[] string The IDs of the messages to modify.
- There is a limit of 1000 ids per request. addLabelIds[] string A list of label IDs to add to messages. removeLabelIds[] string A list of label IDs to remove from messages.

### Gmail API \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/reference/rest](https://developers.google.com/workspace/gmail/api/reference/rest)
- Source ID: `site-docs-reference`
- Final score: 94
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- REST Resource: v1.users.messages Methods batchDelete POST /gmail/v1/users/{userId}/messages/batchDelete Deletes many messages by message ID. batchModify POST /gmail/v1/users/{userId}/messages/batchModify Modifies the labels on the specified messages. delete DELETE /gmail/v1/users/{userId}/messages/{id} Immediately and permanently deletes the specified message. get GET /gmail/v1/users/{userId}/messages/{id} Gets the specified message. import POST /gmail/v1/users/{userId}/messages/import POST /upload/gmail/v1/users/{userId}/messages/import Imports a message into only this user's mailbox, with standard email delivery scanning and classification similar to receiving via SMTP. insert POST /gmail/v1/users/{userId}/messages POST /upload/gmail/v1/users/{userId}/messages Directly inserts a message into only this user's mailbox similar to IMAP APPEND , bypassing most scanning and classification. list GET /gmail/v1/users/{userId}/messages Lists the messages in the user's mailbox. modify POST /gmail/v1/users/{userId}/messages/{id}/modify Modifies the labels on the specified message. send POST /gmail/v1/users/{userId}/messages/send POST /upload/gmail/v1/users/{userId}/messages/send Sends the specified message to the recipients in the To , Cc , and Bcc headers. trash POST /gmail/v1/users/{userId}/messages/{id}/trash Moves the specified message to the trash. untrash POST /gmail/v1/users/{userId}/messages/{id}/untrash Removes the specified message from the trash.
- REST Resource: v1.users.labels Methods create POST /gmail/v1/users/{userId}/labels Creates a new label. delete DELETE /gmail/v1/users/{userId}/labels/{id} Immediately and permanently deletes the specified label and removes it from any messages and threads that it is applied to. get GET /gmail/v1/users/{userId}/labels/{id} Gets the specified label. list GET /gmail/v1/users/{userId}/labels Lists all labels in the user's mailbox. patch PATCH /gmail/v1/users/{userId}/labels/{id} Patch the specified label. update PUT /gmail/v1/users/{userId}/labels/{id} Updates the specified label.
- REST Resource: v1.users.settings.cse.keypairs Methods create POST /gmail/v1/users/{userId}/settings/cse/keypairs Creates and uploads a client-side encryption S/MIME public key certificate chain and private key metadata for the authenticated user. disable POST /gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId}:disable Turns off a client-side encryption key pair. enable POST /gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId}:enable Turns on a client-side encryption key pair that was turned off. get GET /gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId} Retrieves an existing client-side encryption key pair. list GET /gmail/v1/users/{userId}/settings/cse/keypairs Lists client-side encryption key pairs for an authenticated user. obliterate POST /gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId}:obliterate Deletes a client-side encryption key pair permanently and immediately.
- REST Resource: v1.users.settings.sendAs.smimeInfo Methods delete DELETE /gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo/{id} Deletes the specified S/MIME config for the specified send-as alias. get GET /gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo/{id} Gets the specified S/MIME config for the specified send-as alias. insert POST /gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo Insert (upload) the given S/MIME config for the specified send-as alias. list GET /gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo Lists S/MIME configs for the specified send-as alias. setDefault POST /gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo/{id}/setDefault Sets the default S/MIME config for the specified send-as alias.

