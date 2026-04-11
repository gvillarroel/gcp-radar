---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T18:48:08.231Z"
product_name: "Gmail API"
product_slug: "gmail-api"
feature_name: "messages.batchModify"
feature_slug: "messages-batchmodify"
latest_feature_date: "2016-11-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/gmail/api/reference/rest"
  - "https://developers.google.com/workspace/gmail/api/guides/push"
  - "https://developers.google.com/workspace/gmail/api/guides/list-messages"
  - "https://developers.google.com/workspace/gmail/api/guides/labels"
keywords:
  - "messages"
  - "batchmodify"
  - "the"
  - "method"
  - "modifies"
  - "labels"
  - "on"
  - "multiple"
---

# messages.batchModify

Product: Gmail API
Coverage: LOW

## Step 02 Summary

The messages.batchModify method modifies labels on multiple messages in a single batch operation.

## Extended Definition

The messages.batchModify method modifies labels on multiple messages in a single batch operation.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/gmail/api/reference/rest](https://developers.google.com/workspace/gmail/api/reference/rest)
- [https://developers.google.com/workspace/gmail/api/guides/push](https://developers.google.com/workspace/gmail/api/guides/push)
- [https://developers.google.com/workspace/gmail/api/guides/list-messages](https://developers.google.com/workspace/gmail/api/guides/list-messages)
- [https://developers.google.com/workspace/gmail/api/guides/labels](https://developers.google.com/workspace/gmail/api/guides/labels)

## Supporting Pages

### Gmail API \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/reference/rest](https://developers.google.com/workspace/gmail/api/reference/rest)
- Source ID: `site-docs-reference`
- Final score: 128
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- REST Resource: v1.users.messages Methods batchDelete POST /gmail/v1/users/{userId}/messages/batchDelete Deletes many messages by message ID. batchModify POST /gmail/v1/users/{userId}/messages/batchModify Modifies the labels on the specified messages. delete DELETE /gmail/v1/users/{userId}/messages/{id} Immediately and permanently deletes the specified message. get GET /gmail/v1/users/{userId}/messages/{id} Gets the specified message. import POST /gmail/v1/users/{userId}/messages/import POST /upload/gmail/v1/users/{userId}/messages/import Imports a message into only this user's mailbox, with standard email delivery scanning and classification similar to receiving via SMTP. insert POST /gmail/v1/users/{userId}/messages POST /upload/gmail/v1/users/{userId}/messages Directly inserts a message into only this user's mailbox similar to IMAP APPEND , bypassing most scanning and classification. list GET /gmail/v1/users/{userId}/messages Lists the messages in the user's mailbox. modify POST /gmail/v1/users/{userId}/messages/{id}/modify Modifies the labels on the specified message. send POST /gmail/v1/users/{userId}/messages/send POST /upload/gmail/v1/users/{userId}/messages/send Sends the specified message to the recipients in the To , Cc , and Bcc headers. trash POST /gmail/v1/users/{userId}/messages/{id}/trash Moves the specified message to the trash. untrash POST /gmail/v1/users/{userId}/messages/{id}/untrash Removes the specified message from the trash.
- REST Resource: v1.users.threads Methods delete DELETE /gmail/v1/users/{userId}/threads/{id} Immediately and permanently deletes the specified thread. get GET /gmail/v1/users/{userId}/threads/{id} Gets the specified thread. list GET /gmail/v1/users/{userId}/threads Lists the threads in the user's mailbox. modify POST /gmail/v1/users/{userId}/threads/{id}/modify Modifies the labels applied to the thread. trash POST /gmail/v1/users/{userId}/threads/{id}/trash Moves the specified thread to the trash. untrash POST /gmail/v1/users/{userId}/threads/{id}/untrash Removes the specified thread from the trash.
- REST Resource: v1.users.labels Methods create POST /gmail/v1/users/{userId}/labels Creates a new label. delete DELETE /gmail/v1/users/{userId}/labels/{id} Immediately and permanently deletes the specified label and removes it from any messages and threads that it is applied to. get GET /gmail/v1/users/{userId}/labels/{id} Gets the specified label. list GET /gmail/v1/users/{userId}/labels Lists all labels in the user's mailbox. patch PATCH /gmail/v1/users/{userId}/labels/{id} Patch the specified label. update PUT /gmail/v1/users/{userId}/labels/{id} Updates the specified label.
- REST Resource: v1.users.settings Methods getAutoForwarding GET /gmail/v1/users/{userId}/settings/autoForwarding Gets the auto-forwarding setting for the specified account. getImap GET /gmail/v1/users/{userId}/settings/imap Gets IMAP settings. getLanguage GET /gmail/v1/users/{userId}/settings/language Gets language settings. getPop GET /gmail/v1/users/{userId}/settings/pop Gets POP settings. getVacation GET /gmail/v1/users/{userId}/settings/vacation Gets vacation responder settings. updateAutoForwarding PUT /gmail/v1/users/{userId}/settings/autoForwarding Updates the auto-forwarding setting for the specified account. updateImap PUT /gmail/v1/users/{userId}/settings/imap Updates IMAP settings. updateLanguage PUT /gmail/v1/users/{userId}/settings/language Updates language settings. updatePop PUT /gmail/v1/users/{userId}/settings/pop Updates POP settings. updateVacation PUT /gmail/v1/users/{userId}/settings/vacation Updates vacation responder settings.

### Configure push notifications in Gmail API \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/push](https://developers.google.com/workspace/gmail/api/guides/push)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- If you configured a push subscription, a webhook notification to your server conforms to a PubsubMessage : POST h tt ps : //yourserver.example.com/yourUrl Co ntent - t ype : applica t io n /jso n { message : { // This is the actual notification data, as Base64URL-encoded JSON. da ta : "eyJlbWFpbEFkZHJlc3MiOiAidXNlckBleGFtcGxlLmNvbSIsICJoaXN0b3J5SWQiOiAiMTIzNDU2Nzg5MCJ9" , // This is a Cloud Pub/Sub message id, unrelated to Gmail messages. "messageId" : "2070443601311540" , // This is the publish time of the message. "publishTime" : "2021-02-26T19:13:55.749Z" , } subscrip t io n : "projects/myproject/subscriptions/mysubscription" } The HTTP POST body is JSON and the actual Gmail notification payload is in the message.data field.
- The message.data field is a Base64URL-encoded string that decodes to a JSON object containing the email address and the new mailbox history ID for the user: { "emailAddress" : "user@example.com" , "historyId" : "9876543210" } You can then use the history.list method to get the change details for the user since their last known historyId , as described in the Synchronize clients with Gmail API .
- Refer to the code samples in Cloud Pub/Sub's pull subscriptions guide for more details on acknowledging messages either asynchronously or synchronously using the official RPC-based client libraries.
- For example, use the history.list method to identify changes that occurred between your initial watch request and the receipt of the notification message shared in the previous example.

### List Gmail messages \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/list-messages](https://developers.google.com/workspace/gmail/api/guides/list-messages)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Lists the user's Gmail messages. """ creds = None The file token.json stores the user's access and refresh tokens, and is created automatically when the authorization flow completes for the first time. if os . path . exists ( "token.json" ): creds = Credentials . from authorized user file ( "token.json" , SCOPES ) If there are no (valid) credentials available, let the user log in. if not creds or not creds . valid : if creds and creds . expired and creds . refresh token : creds . refresh ( Request ()) else : flow = InstalledAppFlow . from client secrets file ( "credentials.json" , SCOPES ) creds = flow . run local server ( port = 0 ) Save the credentials for the next run with open ( "token.json" , "w" ) as token : token . write ( creds . to json ()) try : Call the Gmail API service = build ( "gmail" , "v1" , credentials = creds ) results = ( service . users () . messages () . list ( userId = "me" , labelIds = [ "INBOX" ]) . execute () ) messages = results . get ( "messages" , []) if not messages : print ( "No messages found." ) return print ( "Messages:" ) for message in messages : print ( f 'Message ID: { message [ "id" ] } ' ) msg = ( service . users () . messages () . get ( userId = "me" , id = message [ "id" ]) . execute () ) print ( f ' Subject: { msg [ "snippet" ] } ' ) except HttpError as error : TODO(developer) - Handle errors from gmail API. print ( f "An error occurred: { error } " ) if name == " main " : main () The messages.list method returns a response body that contains the following: messages[] : An array of Message resources. nextPageToken : For requests with multiple pages of results, a token that can be used with subsequent calls to list more messages. resultSizeEstimate : An estimated total number of results.
- List messages The messages.list method supports several query parameters to filter the messages: maxResults : Maximum number of messages to return (defaults to 100, maximum 500). pageToken : Token to retrieve a specific page of results. q : Query string to filter messages, such as from:someuser@example.com is:unread . labelIds : Only return messages with labels that match all specified label IDs. includeSpamTrash : Include messages from SPAM and TRASH in the results.
- To fetch the full message content and metadata, use the message.id field to call the messages.get method.
- The method returns an array of Gmail messages objects that contain the message id and threadId .

### Manage labels \_|\_ Gmail \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/gmail/api/guides/labels](https://developers.google.com/workspace/gmail/api/guides/labels)
- Source ID: `site-docs-root`
- Final score: 114
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following table lists several of the most common Gmail system labels: Name Can be manually applied Notes INBOX yes SPAM yes TRASH yes UNREAD yes STARRED yes IMPORTANT yes SENT no Applied automatically to messages that are: sent with drafts.send or messages.send . inserted with messages.insert and the user's email in the From header. sent by the user through the web interface.
- A label has a many-to-many relationship with messages and threads: you can apply multiple labels to a single message or thread, and apply a single label to multiple messages or threads.
- Add or remove labels on messages When you add a label to a message, the label is added to that message and becomes associated with the thread to which the message belongs.
- Add or remove labels on threads When you add or remove a label on a thread, you add or remove the specified label on all existing messages in the thread.

