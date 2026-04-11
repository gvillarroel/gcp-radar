---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T18:48:08.230Z"
product_name: "Gmail API"
product_slug: "gmail-api"
feature_name: "history.list type filtering"
feature_slug: "history-list-type-filtering"
latest_feature_date: "2017-02-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list"
  - "https://developers.google.com/workspace/gmail/api/guides/push"
  - "https://developers.google.com/workspace/gmail/api/guides/filtering"
  - "https://developers.google.com/workspace/gmail/api/reference/rest"
keywords:
  - "history"
  - "list"
  - "type"
  - "filtering"
  - "the"
  - "method"
  - "can"
  - "filter"
---

# history.list type filtering

Product: Gmail API
Coverage: LOW

## Step 02 Summary

The history.list method can filter history records by type.

## Extended Definition

The history.list method can filter history records by type.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list)
- [https://developers.google.com/workspace/gmail/api/guides/push](https://developers.google.com/workspace/gmail/api/guides/push)
- [https://developers.google.com/workspace/gmail/api/guides/filtering](https://developers.google.com/workspace/gmail/api/guides/filtering)
- [https://developers.google.com/workspace/gmail/api/reference/rest](https://developers.google.com/workspace/gmail/api/reference/rest)

## Supporting Pages

### Method: users.history.list \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list)
- Source ID: `site-docs-reference`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you receive no nextPageToken in the response, there are no updates to retrieve and you can store the returned historyId for a future request. labelId string Only return messages with a label matching the ID. historyTypes[] enum ( HistoryType ) History types to be returned by the function Request body The request body must be empty.
- We recommend using the specific change-type fields instead of this. messagesAdded[] object ( MessageAdded ) Messages added to the mailbox in this history record. messagesDeleted[] object ( MessageDeleted ) Messages deleted (not Trashed) from the mailbox in this history record. labelsAdded[] object ( LabelAdded ) Labels added to messages in this history record. labelsRemoved[] object ( LabelRemoved ) Labels removed from messages in this history record.
- JSON representation { "id" : string , "messages" : [ { object ( Message ) } ] , "messagesAdded" : [ { object ( MessageAdded ) } ] , "messagesDeleted" : [ { object ( MessageDeleted ) } ] , "labelsAdded" : [ { object ( LabelAdded ) } ] , "labelsRemoved" : [ { object ( LabelRemoved ) } ] } Fields id string The mailbox sequence ID. messages[] object ( Message ) List of messages changed in this history record.
- Response body If successful, the response body contains data with the following structure: JSON representation { "history" : [ { object ( History ) } ] , "nextPageToken" : string , "historyId" : string } Fields history[] object ( History ) List of history records.

### Configure push notifications in Gmail API \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/push](https://developers.google.com/workspace/gmail/api/guides/push)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The message.data field is a Base64URL-encoded string that decodes to a JSON object containing the email address and the new mailbox history ID for the user: { "emailAddress" : "user@example.com" , "historyId" : "9876543210" } You can then use the history.list method to get the change details for the user since their last known historyId , as described in the Synchronize clients with Gmail API .
- For example, use the following request to be notified any time a change is made to the inbox: Protocol POST "https://www.googleapis.com/gmail/v1/users/me/watch" Content - type : application / json { topicName : "projects/myproject/topics/mytopic" , labelIds : [ "INBOX" ], labelFilterBehavior : "INCLUDE" , } Python request = { 'labelIds' : [ 'INBOX' ], 'topicName' : 'projects/myproject/topics/mytopic' , 'labelFilterBehavior' : 'INCLUDE' } gmail . users () . watch ( userId = 'me' , body = request ) . execute () Watch response If the watch request is successful, you receive a response like the following: { historyId: 1234567890 expiration: 1431990098200 } The response contains the current mailbox historyId for the user.
- For example, use the history.list method to identify changes that occurred between your initial watch request and the receipt of the notification message shared in the previous example.
- For example, fall back to periodically calling the history.list method after a period with no notifications for a user.

### Search and filter messages \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/filtering](https://developers.google.com/workspace/gmail/api/guides/filtering)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can search or filter files using the messages.list and threads.list methods.
- For example, the following messages.list method query retrieves all messages sent by the user in January 2014: GET https://www.googleapis.com/gmail/v1/users/me/messages?q=in:sent after:2014/01/01 before:2014/02/01 Caution: All dates used in the search query are interpreted as midnight on that date in the PST timezone.
- To specify accurate dates for other timezones pass the value in seconds instead: ?q=in:sent after:1388552400 before:1391230800 In addition to search queries, you can also filter messages and threads by label with the labelIds[] parameter.
- For a list of search and filter differences between the Gmail UI and Gmail API, see Differences from the Gmail UI .

### Gmail API \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/reference/rest](https://developers.google.com/workspace/gmail/api/reference/rest)
- Source ID: `site-docs-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: v1.users.messages Methods batchDelete POST /gmail/v1/users/{userId}/messages/batchDelete Deletes many messages by message ID. batchModify POST /gmail/v1/users/{userId}/messages/batchModify Modifies the labels on the specified messages. delete DELETE /gmail/v1/users/{userId}/messages/{id} Immediately and permanently deletes the specified message. get GET /gmail/v1/users/{userId}/messages/{id} Gets the specified message. import POST /gmail/v1/users/{userId}/messages/import POST /upload/gmail/v1/users/{userId}/messages/import Imports a message into only this user's mailbox, with standard email delivery scanning and classification similar to receiving via SMTP. insert POST /gmail/v1/users/{userId}/messages POST /upload/gmail/v1/users/{userId}/messages Directly inserts a message into only this user's mailbox similar to IMAP APPEND , bypassing most scanning and classification. list GET /gmail/v1/users/{userId}/messages Lists the messages in the user's mailbox. modify POST /gmail/v1/users/{userId}/messages/{id}/modify Modifies the labels on the specified message. send POST /gmail/v1/users/{userId}/messages/send POST /upload/gmail/v1/users/{userId}/messages/send Sends the specified message to the recipients in the To , Cc , and Bcc headers. trash POST /gmail/v1/users/{userId}/messages/{id}/trash Moves the specified message to the trash. untrash POST /gmail/v1/users/{userId}/messages/{id}/untrash Removes the specified message from the trash.
- REST Resource: v1.users.settings.delegates Methods create POST /gmail/v1/users/{userId}/settings/delegates Adds a delegate with its verification status set directly to accepted , without sending any verification email. delete DELETE /gmail/v1/users/{userId}/settings/delegates/{delegateEmail} Removes the specified delegate (which can be of any verification status), and revokes any verification that may have been required for using it. get GET /gmail/v1/users/{userId}/settings/delegates/{delegateEmail} Gets the specified delegate. list GET /gmail/v1/users/{userId}/settings/delegates Lists the delegates for the specified account.
- REST Resource: v1.users.settings.filters Methods create POST /gmail/v1/users/{userId}/settings/filters Creates a filter. delete DELETE /gmail/v1/users/{userId}/settings/filters/{id} Immediately and permanently deletes the specified filter. get GET /gmail/v1/users/{userId}/settings/filters/{id} Gets a filter. list GET /gmail/v1/users/{userId}/settings/filters Lists the message filters of a Gmail user.
- REST Resource: v1.users.history Methods list GET /gmail/v1/users/{userId}/history Lists the history of all changes to the given mailbox.

