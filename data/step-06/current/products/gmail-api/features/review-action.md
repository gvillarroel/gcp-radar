---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T18:48:08.259Z"
product_name: "Gmail API"
product_slug: "gmail-api"
feature_name: "Review Action"
feature_slug: "review-action"
latest_feature_date: "2013-10-28"
deprecation_date: "2017-07-15"
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list"
  - "https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history"
  - "https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings"
  - "https://developers.google.com/workspace/gmail/api/guides/uploads"
keywords:
  - "review"
  - "action"
  - "is"
  - "deprecated"
  - "now"
  - "generally"
  - "available"
  - "to"
---

# Review Action

Product: Gmail API
Coverage: LOW

## Step 02 Summary

Review Action is deprecated; Review Action is now generally available to all users; deprecated on 2017-07-15.

## Extended Definition

Review Action is deprecated; Review Action is now generally available to all users; deprecated on 2017-07-15.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list)
- [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history)
- [https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings](https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings)
- [https://developers.google.com/workspace/gmail/api/guides/uploads](https://developers.google.com/workspace/gmail/api/guides/uploads)

## Supporting Pages

### Method: users.history.list \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list)
- Source ID: `site-docs-reference`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-05 UTC."],[],[]]
- We recommend using the specific change-type fields instead of this. messagesAdded[] object ( MessageAdded ) Messages added to the mailbox in this history record. messagesDeleted[] object ( MessageDeleted ) Messages deleted (not Trashed) from the mailbox in this history record. labelsAdded[] object ( LabelAdded ) Labels added to messages in this history record. labelsRemoved[] object ( LabelRemoved ) Labels removed from messages in this history record.
- JSON representation { "id" : string , "messages" : [ { object ( Message ) } ] , "messagesAdded" : [ { object ( MessageAdded ) } ] , "messagesDeleted" : [ { object ( MessageDeleted ) } ] , "labelsAdded" : [ { object ( LabelAdded ) } ] , "labelsRemoved" : [ { object ( LabelRemoved ) } ] } Fields id string The mailbox sequence ID. messages[] object ( Message ) List of messages changed in this history record.
- If you receive no nextPageToken in the response, there are no updates to retrieve and you can store the returned historyId for a future request. labelId string Only return messages with a label matching the ID. historyTypes[] enum ( HistoryType ) History types to be returned by the function Request body The request body must be empty.

### REST Resource: users.history \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history)
- Source ID: `site-docs-reference`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-03-24 UTC."],[],[]]
- Home Google Workspace Gmail Reference Send feedback REST Resource: users.history Stay organized with collections Save and categorize content based on your preferences.
- Methods list Lists the history of all changes to the given mailbox.
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Migrate from the Email Settings API \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings](https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings)
- Source ID: `site-docs-root`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- Old setting New setting Notes enable accessWindow Disabled when set to disabled enableFor accessWindow ALL MAIL is now allMail MAIL FROM NOW ON is now fromNowOn action disposition KEEP is now leaveInInbox ARCHIVE is now archive DELETE is now trash MARK READ is now markRead Manage IMAP settings To manage IMAP access in the Gmail API, use the settings resource.
- Old setting New setting Notes enable enabled forwardTo emailAddress action disposition KEEP is now leaveInInbox ARCHIVE is now archive DELETE is now trash MARK READ is now markRead Other changes: Forwarding addresses must be created and verified prior to use.
- Old setting New setting Notes from criteria.from to criteria.to subject criteria.subject hasTheWord criteria.query doesNotHaveTheWord criteria.negatedQuery hasAttachment criteria.hasAttachment shouldArchive action.removeLabelIds Use INBOX as the label ID shouldMarkAsRead action.removeLabelIds Use UNREAD as the label ID shouldStar action.addLabelIds Use STARRED as the label ID label action.addLabelIds Use the ID of the label to add forwardTo action.forward shouldTrash action.addLabelIds Use TRASH as the label ID neverSpam action.removeLabelIds Use SPAM as the label ID Other changes: If adding a user label doesn't already exist, it must be explicitly created using the labels.create method.
- If either of the delegator or delegate users are disabled (for example, suspended in Google Workspace) this method fails with an HTTP 4XX error instead of an HTTP 500 error. settings.delegates.delete This method can now be used to delete delegates with any VerificationStatus , rather than just delegates which are accepted or expired . settings.delegates.get This is a new method, which might be preferable over the settings.delegates.list method depending on need.

### Upload attachments \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/uploads](https://developers.google.com/workspace/gmail/api/guides/uploads)
- Source ID: `site-docs-root`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- Resume or retry uploads that fail due to connection interruptions or any 5xx errors, including: 500 Internal Server Error 502 Bad Gateway 503 Service Unavailable 504 Gateway Timeout Use an exponential backoff strategy if any 5xx server error is returned when resuming or retrying upload requests.
- Resume an interrupted upload If an upload request is terminated before receiving a response or if you receive an HTTP 503 Service Unavailable response from the server, then you need to resume the interrupted upload.
- This might be true if you plan to send metadata for this resource in a separate request, or if no metadata is supported or available.
- The following request uses the Content-Range header to indicate that the current position in the 2,000,000 byte file is unknown.

