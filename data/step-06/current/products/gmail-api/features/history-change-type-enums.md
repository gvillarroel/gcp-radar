---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T08:20:50.973Z"
product_name: "Gmail API"
product_slug: "gmail-api"
feature_name: "History change-type enums"
feature_slug: "history-change-type-enums"
latest_feature_date: "2015-02-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list"
  - "https://developers.google.com/workspace/gmail/api/guides/push"
  - "https://developers.google.com/workspace/gmail/api/guides/sync"
keywords:
  - "includes"
  - "enums"
  - "change"
  - "type"
  - "history"
  - "list"
  - "method"
---

# History change-type enums

Product: Gmail API
Coverage: MEDIUM

## Step 02 Summary

The history.list method now includes change-type enums such as messagesAdded, messagesDeleted, labelsAdded, and labelsDeleted.

## Extended Definition

The history.list method now includes change-type enums such as messagesAdded, messagesDeleted, labelsAdded, and labelsDeleted.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list)
- [https://developers.google.com/workspace/gmail/api/guides/push](https://developers.google.com/workspace/gmail/api/guides/push)
- [https://developers.google.com/workspace/gmail/api/guides/sync](https://developers.google.com/workspace/gmail/api/guides/sync)

## Supporting Pages

### Method: users.history.list \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list)
- Source ID: `site-docs-reference`
- Final score: 224
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- HistoryType Enums messageAdded messageDeleted labelAdded labelRemoved History A record of a change to the user's mailbox.
- We recommend using the specific change-type fields instead of this. messagesAdded[] object ( MessageAdded ) Messages added to the mailbox in this history record. messagesDeleted[] object ( MessageDeleted ) Messages deleted (not Trashed) from the mailbox in this history record. labelsAdded[] object ( LabelAdded ) Labels added to messages in this history record. labelsRemoved[] object ( LabelRemoved ) Labels removed from messages in this history record.
- JSON representation { "id" : string , "messages" : [ { object ( Message ) } ] , "messagesAdded" : [ { object ( MessageAdded ) } ] , "messagesDeleted" : [ { object ( MessageDeleted ) } ] , "labelsAdded" : [ { object ( LabelAdded ) } ] , "labelsRemoved" : [ { object ( LabelRemoved ) } ] } Fields id string The mailbox sequence ID. messages[] object ( Message ) List of messages changed in this history record.
- Home Google Workspace Gmail Reference Send feedback Method: users.history.list Stay organized with collections Save and categorize content based on your preferences.

### Configure push notifications in Gmail API \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/push](https://developers.google.com/workspace/gmail/api/guides/push)
- Source ID: `site-docs-root`
- Final score: 157
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The message.data field is a Base64URL-encoded string that decodes to a JSON object containing the email address and the new mailbox history ID for the user: { "emailAddress" : "user@example.com" , "historyId" : "9876543210" } You can then use the history.list method to get the change details for the user since their last known historyId , as described in the Synchronize clients with Gmail API .
- For example, use the history.list method to identify changes that occurred between your initial watch request and the receipt of the notification message shared in the previous example.
- For example, use the following request to be notified any time a change is made to the inbox: Protocol POST "https://www.googleapis.com/gmail/v1/users/me/watch" Content - type : application / json { topicName : "projects/myproject/topics/mytopic" , labelIds : [ "INBOX" ], labelFilterBehavior : "INCLUDE" , } Python request = { 'labelIds' : [ 'INBOX' ], 'topicName' : 'projects/myproject/topics/mytopic' , 'labelFilterBehavior' : 'INCLUDE' } gmail . users () . watch ( userId = 'me' , body = request ) . execute () Watch response If the watch request is successful, you receive a response like the following: { historyId: 1234567890 expiration: 1431990098200 } The response contains the current mailbox historyId for the user.
- For example, fall back to periodically calling the history.list method after a period with no notifications for a user.

### Synchronize clients with Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/sync](https://developers.google.com/workspace/gmail/api/guides/sync)
- Source ID: `site-docs-root`
- Final score: 99
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The returned History object includes message IDs and the type of change for each message, such as message added or labels modified, since the time of the provided startHistoryId .
- Partial synchronization If your app has synchronized recently, you can perform a partial sync using the history.list method to return all history records newer than the startHistoryId query parameter you must specify in your request.
- To retrieve the historyId of a recent message, use the messages.get or messages.list methods.
- Your app should store the historyId of the most recent message (the first message in the list response) for future partial synchronizations.

