---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T08:20:50.972Z"
product_name: "Gmail API"
product_slug: "gmail-api"
feature_name: "messages.insert label assignment"
feature_slug: "messages-insert-label-assignment"
latest_feature_date: "2015-03-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/insert"
  - "https://developers.google.com/workspace/gmail/api/guides/labels"
  - "https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get"
keywords:
  - "assignment"
  - "sent"
  - "insert"
  - "label"
  - "messages"
  - "method"
---

# messages.insert label assignment

Product: Gmail API
Coverage: MEDIUM

## Step 02 Summary

The messages.insert method can set the SENT and DRAFT labels on inserted messages.

## Extended Definition

The messages.insert method can set the SENT and DRAFT labels on inserted messages.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/insert](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/insert)
- [https://developers.google.com/workspace/gmail/api/guides/labels](https://developers.google.com/workspace/gmail/api/guides/labels)
- [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get)

## Supporting Pages

### Method: users.messages.insert \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/insert](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/insert)
- Source ID: `site-docs-reference-required-2`
- Final score: 154
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Google Workspace Gmail Reference Send feedback Method: users.messages.insert Stay organized with collections Save and categorize content based on your preferences.
- HTTP request Upload URI, for media upload requests: POST https://gmail.googleapis.com/upload/gmail/v1/users/{userId}/messages Metadata URI, for metadata-only requests: POST https://gmail.googleapis.com/gmail/v1/users/{userId}/messages The URL uses gRPC Transcoding syntax.
- Authorization scopes Requires one of the following OAuth scopes: https://mail.google.com/ https://www.googleapis.com/auth/gmail.modify https://www.googleapis.com/auth/gmail.insert For more information, see the OAuth 2.0 Overview .
- Directly inserts a message into only this user's mailbox similar to IMAP APPEND , bypassing most scanning and classification.

### Manage labels \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/labels](https://developers.google.com/workspace/gmail/api/guides/labels)
- Source ID: `site-docs-root`
- Final score: 111
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following table lists several of the most common Gmail system labels: Name Can be manually applied Notes INBOX yes SPAM yes TRASH yes UNREAD yes STARRED yes IMPORTANT yes SENT no Applied automatically to messages that are: sent with drafts.send or messages.send . inserted with messages.insert and the user's email in the From header. sent by the user through the web interface.
- A label has a many-to-many relationship with messages and threads: you can apply multiple labels to a single message or thread, and apply a single label to multiple messages or threads.
- Add or remove labels on messages When you add a label to a message, the label is added to that message and becomes associated with the thread to which the message belongs.
- Add or remove labels on threads When you add or remove a label on a thread, you add or remove the specified label on all existing messages in the thread.

### Method: users.messages.get \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get)
- Source ID: `site-docs-reference-required-2`
- Final score: 94
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Google Workspace Gmail Reference Send feedback Method: users.messages.get Stay organized with collections Save and categorize content based on your preferences.
- The ID is also contained in the result when a message is inserted ( messages.insert ) or imported ( messages.import ).
- HTTP request GET https://gmail.googleapis.com/gmail/v1/users/{userId}/messages/{id} The URL uses gRPC Transcoding syntax.
- This ID is usually retrieved using messages.list .

