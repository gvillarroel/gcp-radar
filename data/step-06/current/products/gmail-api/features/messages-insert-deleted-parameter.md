---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T08:20:50.972Z"
product_name: "Gmail API"
product_slug: "gmail-api"
feature_name: "messages.insert deleted parameter"
feature_slug: "messages-insert-deleted-parameter"
latest_feature_date: "2015-03-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/insert"
  - "https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get"
  - "https://developers.google.com/workspace/gmail/api/reference/quota"
keywords:
  - "request"
  - "deleted"
  - "insert"
  - "parameter"
  - "supports"
  - "messages"
  - "method"
---

# messages.insert deleted parameter

Product: Gmail API
Coverage: MEDIUM

## Step 02 Summary

The messages.insert method supports the deleted request parameter.

## Extended Definition

The messages.insert method supports the deleted request parameter.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/insert](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/insert)
- [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get)
- [https://developers.google.com/workspace/gmail/api/reference/quota](https://developers.google.com/workspace/gmail/api/reference/quota)

## Supporting Pages

### Method: users.messages.insert \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/insert](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/insert)
- Source ID: `site-docs-reference-required-2`
- Final score: 214
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Google Workspace Gmail Reference Send feedback Method: users.messages.insert Stay organized with collections Save and categorize content based on your preferences.
- HTTP request Upload URI, for media upload requests: POST https://gmail.googleapis.com/upload/gmail/v1/users/{userId}/messages Metadata URI, for metadata-only requests: POST https://gmail.googleapis.com/gmail/v1/users/{userId}/messages The URL uses gRPC Transcoding syntax.
- Query parameters Parameters internalDateSource enum ( InternalDateSource ) Source for Gmail's internal date of the message. deleted boolean Mark the email as permanently deleted (not TRASH) and only visible in Google Vault to a Vault administrator.
- HTTP request Path parameters Query parameters Request body Response body Authorization scopes Try it!

### Method: users.messages.get \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get)
- Source ID: `site-docs-reference-required-2`
- Final score: 139
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Google Workspace Gmail Reference Send feedback Method: users.messages.get Stay organized with collections Save and categorize content based on your preferences.
- HTTP request GET https://gmail.googleapis.com/gmail/v1/users/{userId}/messages/{id} The URL uses gRPC Transcoding syntax.
- The ID is also contained in the result when a message is inserted ( messages.insert ) or imported ( messages.import ).
- HTTP request Path parameters Query parameters Request body Response body Authorization scopes Try it!

### Usage limits \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/reference/quota](https://developers.google.com/workspace/gmail/api/reference/quota)
- Source ID: `site-docs-reference`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- The following table outlines the per-method quota unit usage: Method Quota units drafts.create 10 drafts.delete 10 drafts.get 5 drafts.list 5 drafts.send 100 drafts.update 15 getProfile 1 history.list 2 labels.create 5 labels.delete 5 labels.get 1 labels.list 1 labels.update 5 messages.attachments.get 5 messages.batchDelete 50 messages.batchModify 50 messages.delete 10 messages.get 5 messages.import 25 messages.insert 25 messages.list 5 messages.modify 5 messages.send 100 messages.trash 5 messages.untrash 5 settings.delegates.create 100 settings.delegates.delete 5 settings.delegates.get 1 settings.delegates.list 1 settings.filters.create 5 settings.filters.delete 5 settings.filters.get 1 settings.filters.list 1 settings.forwardingAddresses.create 100 settings.forwardingAddresses.delete 5 settings.forwardingAddresses.get 1 settings.forwardingAddresses.list 1 settings.getAutoForwarding 1 settings.getImap 1 settings.getPop 1 settings.getVacation 1 settings.sendAs.create 100 settings.sendAs.delete 5 settings.sendAs.get 1 settings.sendAs.list 1 settings.sendAs.update 100 settings.sendAs.verify 100 settings.updateAutoForwarding 5 settings.updateImap 5 settings.updatePop 100 settings.updateVacation 5 stop 50 threads.delete 20 threads.get 10 threads.list 10 threads.modify 10 threads.trash 10 threads.untrash 10 watch 100 When using the Gmail API, there's also a limit of 500 recipients per email message.
- Per-method quota usage The number of quota units consumed by a request varies depending on the method called.
- To learn more, see the following resources: About quota adjustments View your current quota usage and limits Request a higher quota limit Related topics Improve performance Limits for sending & getting mail Gmail sending limits in Google Workspace Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Continue waiting and retrying up to some maximum number of retries, but don't increase the wait period between retries. where: The wait time is min(((2^n)+random number milliseconds), maximum backoff) , with n incremented by 1 for each iteration (request). random number milliseconds is a random number of milliseconds less than or equal to 1,000.

