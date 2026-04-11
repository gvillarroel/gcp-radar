---
title: "Configure push notifications in Gmail API \_|\_ Google for Developers"
url: https://developers.google.com/workspace/gmail/api/guides/push
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/workspace/gmail/api/guides
source_metadata:
  url: https://developers.google.com/workspace/gmail/api/guides/push
  title: "Configure push notifications in Gmail API \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Gmail
Guides
Send feedback
Configure push notifications in Gmail API
Stay organized with collections
Save and categorize content based on your preferences.
This document explains how to manage push notifications in Gmail API.
The Gmail API provides server push notifications that let you watch
for changes to Gmail mailboxes. Use this feature to improve your
application's performance. It eliminates the extra network and compute costs of
polling resources to determine if they've changed. Whenever a mailbox changes,
the Gmail API notifies your backend server application.
Note: For notifications to user-owned devices
(for example, installed apps, mobile devices, or browsers), the poll-based
Synchronize clients with Gmail API
guide is still the recommended approach to retrieve updates.
Initial Cloud Pub/Sub setup
The Gmail API uses the Cloud Pub/Sub
API to deliver push
notifications. This allows notifications using various methods including
webhooks and polling on a single subscription endpoint.
Prerequisites
To complete this setup, fulfill the Cloud Pub/Sub
prerequisites and then set up a
Cloud Pub/Sub client .
Create a topic
Using your Cloud Pub/Sub client, create the
topic that the
Gmail API should send notifications to. The topic name can be any name
you choose under your project (for example, matching
projects/myproject/topics/* , where myproject is the Project ID listed for
your project in the Google Cloud console).
Create a subscription
To set up a subscription to the topic you created, follow the Cloud Pub/Sub
subscription type guide.
Configure the subscription type to be either a webhook push (that is, an HTTP
POST callback) or a pull (that is, initiated by your app). This is how your
application receives notifications for updates.
Grant publish rights on your topic
Cloud Pub/Sub requires that you grant Gmail privileges to publish
notifications to your topic.
To do this, grant publish privileges to
gmail-api-push@system.gserviceaccount.com . You can do this using the Cloud
Pub/Sub permissions
console in
the Google Cloud console
by following these access control
instructions .
Your organization's domain restricted
sharing
configuration might prevent you from granting publish permissions. To resolve
this, you can configure an
exception
for this service account.
Get Gmail mailbox updates
After the initial Cloud Pub/Sub setup is finished, configure
Gmail accounts to send notifications for mailbox updates.
Watch request
To configure Gmail accounts to send notifications to your Cloud
Pub/Sub topic, use your Gmail API client to call the
watch method on the
Gmail user mailbox. This is similar to any other
Gmail API call. Provide the topic name you created and any other
options in your watch request, such as
labels to filter on. For example, use
the following request to be notified any time a change is made to the inbox:
Protocol
POST "https://www.googleapis.com/gmail/v1/users/me/watch"
Content - type : application / json
{
topicName : "projects/myproject/topics/mytopic" ,
labelIds : [ "INBOX" ],
labelFilterBehavior : "INCLUDE" ,
}
Python
request = {
'labelIds' : [ 'INBOX' ],
'topicName' : 'projects/myproject/topics/mytopic' ,
'labelFilterBehavior' : 'INCLUDE'
}
gmail . users () . watch ( userId = 'me' , body = request ) . execute ()
Watch response
If the watch request is
successful, you receive a response like the following:
{ historyId: 1234567890 expiration: 1431990098200 }
The response contains the current mailbox historyId for the user. Your client
receives notifications for all changes after that historyId . If you need to
process changes prior to this historyId , refer to the Synchronize clients
with Gmail API .
Additionally, a successful watch call causes a notification to be immediately
sent to your Cloud Pub/Sub topic.
If you receive an error from the watch call, the details should explain the
source of the problem. This is typically an issue with the setup of the Cloud
Pub/Sub topic and subscription. Refer to the Cloud Pub/Sub
documentation to confirm that the setup
is correct and for help debugging topic and subscription issues.
Renew mailbox watch
You must call the watch
at least once every 7 days or you'll stop receiving updates for the user. We
recommend calling watch once per day. The watch method response also has an
expiration
field with the timestamp for the watch expiration.
Receive notifications
Whenever a mailbox update occurs that matches your watch , your application
receives a notification message describing the change.
If you configured a push subscription, a webhook notification to your server
conforms to a
PubsubMessage :
POST h tt ps : //yourserver.example.com/yourUrl
Co ntent - t ype : applica t io n /jso n
{
message :
{
// This is the actual notification data, as Base64URL-encoded JSON.
da ta : "eyJlbWFpbEFkZHJlc3MiOiAidXNlckBleGFtcGxlLmNvbSIsICJoaXN0b3J5SWQiOiAiMTIzNDU2Nzg5MCJ9" ,
// This is a Cloud Pub/Sub message id, unrelated to Gmail messages.
"messageId" : "2070443601311540" ,
// This is the publish time of the message.
"publishTime" : "2021-02-26T19:13:55.749Z" ,
}
subscrip t io n : "projects/myproject/subscriptions/mysubscription"
}
The HTTP POST body is JSON and the actual Gmail notification
payload is in the message.data field. The message.data field is a
Base64URL-encoded string that decodes to a JSON object containing the email
address and the new mailbox history ID for the user:
{ "emailAddress" : "user@example.com" , "historyId" : "9876543210" }
You can then use the
history.list
method to get the change details for the user since their last known
historyId , as described in the Synchronize clients with
Gmail API .
For example, use the
history.list
method to identify changes that occurred between your initial
watch request and the
receipt of the notification message shared in the previous example. Pass
1234567890 as the startHistoryId to history.list . Afterward, you can
persist 9876543210 as the last known historyId for future use cases.
If you configured a pull subscription instead, refer to the code samples in
Cloud Pub/Sub's pull subscriptions
guide for more details on receiving messages.
Respond to notifications
All notifications must be acknowledged. If you use webhook push
delivery , then responding
successfully (for example, HTTP 200) acknowledges the notification.
If you use pull delivery ( REST
Pull ,
RPC
Pull ,
or RPC
StreamingPull ),
you must follow up with an acknowledge call
( REST
or
RPC ).
Refer to the code samples in Cloud Pub/Sub's pull
subscriptions guide for more details
on acknowledging messages either
asynchronously
or
synchronously
using the official RPC-based client libraries.
If you don't acknowledge the notifications (for example, if your webhook
callback returns an error or times out), Cloud Pub/Sub retries the notification
at a later time.
Stop mailbox updates
To stop receiving updates on a mailbox, call the
stop method. All new
notifications should stop within a few minutes.
Limitations
The following are the limitations of working with server push notifications:
Maximum notification rate
Each Gmail user being watched has a maximum notification rate of
one event per second. Any user notifications exceeding that rate are dropped.
When handling notifications, be careful not to trigger another notification,
which can start a notification loop.
Reliability
Typically, all notifications are delivered reliably within a few seconds;
however, in some extreme situations, notifications might be delayed or dropped.
Handle this possibility gracefully so that the application still syncs even if
no push messages are received. For example, fall back to periodically calling
the history.list
method after a period with no notifications for a user.
Cloud Pub/Sub limitations
The Cloud Pub/Sub API also has its own limitations, which are detailed in its
pricing and
quotas documentation.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
