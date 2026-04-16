---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T08:20:50.972Z"
product_name: "Gmail API"
product_slug: "gmail-api"
feature_name: "Mailbox push notifications"
feature_slug: "mailbox-push-notifications"
latest_feature_date: "2015-05-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/gmail/api/guides/push"
  - "https://developers.google.com/workspace/gmail/api/reference/rest"
  - "https://developers.google.com/workspace/gmail/api/guides"
keywords:
  - "notifications"
  - "delivered"
  - "updates"
  - "push"
  - "real"
  - "time"
  - "mailbox"
---

# Mailbox push notifications

Product: Gmail API
Coverage: MEDIUM

## Step 02 Summary

Mailbox updates can be delivered in real time through Cloud Pub/Sub notifications filtered by Gmail labels.

## Extended Definition

Mailbox updates can be delivered in real time through Cloud Pub/Sub notifications filtered by Gmail labels.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://developers.google.com/workspace/gmail/api/guides/push](https://developers.google.com/workspace/gmail/api/guides/push)
- [https://developers.google.com/workspace/gmail/api/reference/rest](https://developers.google.com/workspace/gmail/api/reference/rest)
- [https://developers.google.com/workspace/gmail/api/guides](https://developers.google.com/workspace/gmail/api/guides)

## Supporting Pages

### Configure push notifications in Gmail API \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/push](https://developers.google.com/workspace/gmail/api/guides/push)
- Source ID: `site-docs-root`
- Final score: 165
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Get Gmail mailbox updates After the initial Cloud Pub/Sub setup is finished, configure Gmail accounts to send notifications for mailbox updates.
- The Gmail API provides server push notifications that let you watch for changes to Gmail mailboxes.
- If you configured a push subscription, a webhook notification to your server conforms to a PubsubMessage : POST h tt ps : //yourserver.example.com/yourUrl Co ntent - t ype : applica t io n /jso n { message : { // This is the actual notification data, as Base64URL-encoded JSON. da ta : "eyJlbWFpbEFkZHJlc3MiOiAidXNlckBleGFtcGxlLmNvbSIsICJoaXN0b3J5SWQiOiAiMTIzNDU2Nzg5MCJ9" , // This is a Cloud Pub/Sub message id, unrelated to Gmail messages. "messageId" : "2070443601311540" , // This is the publish time of the message. "publishTime" : "2021-02-26T19:13:55.749Z" , } subscrip t io n : "projects/myproject/subscriptions/mysubscription" } The HTTP POST body is JSON and the actual Gmail notification payload is in the message.data field.
- For example, use the following request to be notified any time a change is made to the inbox: Protocol POST "https://www.googleapis.com/gmail/v1/users/me/watch" Content - type : application / json { topicName : "projects/myproject/topics/mytopic" , labelIds : [ "INBOX" ], labelFilterBehavior : "INCLUDE" , } Python request = { 'labelIds' : [ 'INBOX' ], 'topicName' : 'projects/myproject/topics/mytopic' , 'labelFilterBehavior' : 'INCLUDE' } gmail . users () . watch ( userId = 'me' , body = request ) . execute () Watch response If the watch request is successful, you receive a response like the following: { historyId: 1234567890 expiration: 1431990098200 } The response contains the current mailbox historyId for the user.

### Gmail API \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/reference/rest](https://developers.google.com/workspace/gmail/api/reference/rest)
- Source ID: `site-docs-reference`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://gmail.googleapis.com REST Resource: v1.users Methods getProfile GET /gmail/v1/users/{userId}/profile Gets the current user's Gmail profile. stop POST /gmail/v1/users/{userId}/stop Stop receiving push notifications for the given user mailbox. watch POST /gmail/v1/users/{userId}/watch Set up or update a push notification watch on the given user mailbox.
- REST Resource: v1.users.labels Methods create POST /gmail/v1/users/{userId}/labels Creates a new label. delete DELETE /gmail/v1/users/{userId}/labels/{id} Immediately and permanently deletes the specified label and removes it from any messages and threads that it is applied to. get GET /gmail/v1/users/{userId}/labels/{id} Gets the specified label. list GET /gmail/v1/users/{userId}/labels Lists all labels in the user's mailbox. patch PATCH /gmail/v1/users/{userId}/labels/{id} Patch the specified label. update PUT /gmail/v1/users/{userId}/labels/{id} Updates the specified label.
- REST Resource: v1.users.messages Methods batchDelete POST /gmail/v1/users/{userId}/messages/batchDelete Deletes many messages by message ID. batchModify POST /gmail/v1/users/{userId}/messages/batchModify Modifies the labels on the specified messages. delete DELETE /gmail/v1/users/{userId}/messages/{id} Immediately and permanently deletes the specified message. get GET /gmail/v1/users/{userId}/messages/{id} Gets the specified message. import POST /gmail/v1/users/{userId}/messages/import POST /upload/gmail/v1/users/{userId}/messages/import Imports a message into only this user's mailbox, with standard email delivery scanning and classification similar to receiving via SMTP. insert POST /gmail/v1/users/{userId}/messages POST /upload/gmail/v1/users/{userId}/messages Directly inserts a message into only this user's mailbox similar to IMAP APPEND , bypassing most scanning and classification. list GET /gmail/v1/users/{userId}/messages Lists the messages in the user's mailbox. modify POST /gmail/v1/users/{userId}/messages/{id}/modify Modifies the labels on the specified message. send POST /gmail/v1/users/{userId}/messages/send POST /upload/gmail/v1/users/{userId}/messages/send Sends the specified message to the recipients in the To , Cc , and Bcc headers. trash POST /gmail/v1/users/{userId}/messages/{id}/trash Moves the specified message to the trash. untrash POST /gmail/v1/users/{userId}/messages/{id}/untrash Removes the specified message from the trash.
- REST Resource: v1.users.settings Methods getAutoForwarding GET /gmail/v1/users/{userId}/settings/autoForwarding Gets the auto-forwarding setting for the specified account. getImap GET /gmail/v1/users/{userId}/settings/imap Gets IMAP settings. getLanguage GET /gmail/v1/users/{userId}/settings/language Gets language settings. getPop GET /gmail/v1/users/{userId}/settings/pop Gets POP settings. getVacation GET /gmail/v1/users/{userId}/settings/vacation Gets vacation responder settings. updateAutoForwarding PUT /gmail/v1/users/{userId}/settings/autoForwarding Updates the auto-forwarding setting for the specified account. updateImap PUT /gmail/v1/users/{userId}/settings/imap Updates IMAP settings. updateLanguage PUT /gmail/v1/users/{userId}/settings/language Updates language settings. updatePop PUT /gmail/v1/users/{userId}/settings/pop Updates POP settings. updateVacation PUT /gmail/v1/users/{userId}/settings/vacation Updates vacation responder settings.

### Gmail API overview \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides](https://developers.google.com/workspace/gmail/api/guides)
- Source ID: `site-docs-root`
- Final score: 65
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Applications can "watch" a mailbox, and the Gmail API will send automatic webhooks or alerts whenever a change occurs (like a new email arriving), eliminating the need for the app to continuously poll the server for updates.
- Push notifications A server-side notification system integrating with Google Cloud Pub/Sub.
- For more information, see Push notifications .
- For most web applications the Gmail API is the best choice for authorized access to a user's Gmail data and is suitable for various applications, such as: Read-only mail extraction, indexing, and backup Automated or programmatic message sending Email account migration Email organization including filtering and sorting of messages Standardization of email signatures across an organization Common terms The following is a list of common terms used in this API: Delegator and Delegate A delegator is a Gmail user who grants mailbox access to another user within the same Google Workspace organization.

