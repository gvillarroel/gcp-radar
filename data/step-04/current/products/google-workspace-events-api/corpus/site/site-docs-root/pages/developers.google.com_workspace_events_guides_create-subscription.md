---
title: "Create a Google Workspace subscription \_|\_ Google for Developers"
url: https://developers.google.com/workspace/events/guides/create-subscription
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/workspace/events
source_metadata:
  url: https://developers.google.com/workspace/events/guides/create-subscription
  title: "Create a Google Workspace subscription \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Guides
Send feedback
Create a Google Workspace subscription
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Google Workspace Events API enables receiving notifications about changes to Google Workspace resources (like Google Docs, Chat, or Calendar).
Set up involves creating a Pub/Sub topic, subscribing to it, and configuring event delivery for real-time updates.
Subscriptions can be tailored to specific resources and event types, offering flexibility in monitoring desired changes.
Prerequisites include a Google Cloud project, enabled APIs, OAuth credentials, and appropriate scopes for chosen event types.
Users can leverage either Apps Script or Python to integrate with the API based on their development preference.
This page explains how to use the Google Workspace Events API to create a
subscription to a Google Workspace resource. A
Google Workspace subscription lets your app receive information about
Google Workspace events , which represent changes to a
Google Workspace resource. To learn about which resources and event
types the Google Workspace Events API supports, see the
Google Workspace Events API overview .
This page includes the following steps for creating a Google Workspace
subscription:
Set up your environment.
Create and subscribe to a Google Cloud Pub/Sub topic. Use this document as
an endpoint to receive Google Workspace events.
Call the Google Workspace Events API's
create
method on the
Subscription
resource.
Test your Google Workspace subscription to verify that your Pub/Sub
topic receives events that you've subscribed to.
Optionally, configure how to push events to an endpoint for your app, so
that your app can process the event and, if necessary, take action.
Note: Events for Google Drive API is offered as part of the Google Workspace
Developer Preview Program ,
which grants early access to certain features. The code sample listed here won't
work with these events.
Prerequisites
Apps Script
To use the Google Cloud CLI commands in this guide:
Install the Google Cloud CLI .
To
initialize the gcloud CLI, run the following code:
gcloud init
An Apps Script project:
Use your Google Cloud project instead of the default one created automatically by
Apps Script.
For all scopes that you added to configure the OAuth consent screen, you must also add the
scopes to the appsscript.json file in your Apps Script project.
For example, if you specified the chat.messages scope, then add the following:
"oauthScopes": [
"https://www.googleapis.com/auth/chat.messages"
]
Enable
the Google Workspace Events advanced service.
A Google Cloud project
with billing enabled. For subscriptions to Chat, you must
also enable the Chat API in your Cloud project and
configure the App name , Avatar URL , and Description
fields. For details, see
Build a Google Chat app .
Requires authentication and an appropriate authorization scope for each event type in the subscription:
Typically requires user authentication with the OAuth consent screen configured for
the app. When you configure the consent screen, you must specify a scope to
support each event type for the subscription. To configure the consent
screen and identify required scopes, see
Choose scopes .
For subscribing to a Chat event as a Chat app, requires app authentication with one-time administrator approval .
Python
Python 3.6 or greater
The pip package management tool
The latest Google client libraries for Python. To install or update them, run the following
command in your command-line interface:
pip3 install --upgrade google-api-python-client google-auth-oauthlib
To use the Google Cloud CLI commands in this guide:
Install the Google Cloud CLI .
To
initialize the gcloud CLI, run the following code:
gcloud init
A Google Cloud project
with billing enabled. For subscriptions to Chat, you must
also enable the Chat API in your Cloud project and
configure the App name , Avatar URL , and Description
fields. For details, see
Build a Google Chat app .
Requires authentication and an appropriate authorization scope for each event type in the subscription:
Typically requires user authentication with the OAuth consent screen configured for
the app. When you configure the consent screen, you must specify a scope to
support each event type for the subscription. To configure the consent
screen and identify required scopes, see
Choose scopes .
For subscribing to a Chat event as a Chat app, requires app authentication with one-time administrator approval .
Set up your environment
The following section explains how to set up your environment before creating a
Google Workspace subscription.
Enable the Google Workspace Events API and Google Cloud Pub/Sub API
Before using Google APIs, you need to turn them on in a Google Cloud project.
You can turn on one or more APIs in a single Google Cloud project.
Google Cloud console
In the Google Cloud console, open the Google Cloud project for your app and enable the
Google Workspace Events API and Pub/Sub API:
Enable the APIs
gcloud
In your working directory, sign in to your Google Account:
gcloud auth login
Set your project to the Cloud project for your app:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with the
project ID
for the Cloud project for your app.
Enable the Google Workspace Events API and Google Cloud Pub/Sub
API:
gcloud services enable pubsub.googleapis.com workspaceevents.googleapis.com
Create OAuth client ID credentials
Note: You can skip this step if you are using Apps Script.
Choose your application
type for
specific instructions about how to create an OAuth client ID:
Note: To run the code sample in this guide, choose Desktop app and follow
the instructions.
Web application
In the Google API Console, go to Menu menu
> Google Auth platform
> Clients .
Go to Clients
Click Create Client .
Click Application type > Web application .
In the Name field, type a name for the credential. This name is only shown in the Google API Console.
Add authorized URIs related to your app:
Client-side apps (JavaScript) –Under Authorized JavaScript origins , click Add URI . Then, enter a URI to use for browser requests. This identifies the domains from which your application can send API requests to the OAuth 2.0 server.
Server-side apps (Java, Python, and more) –Under Authorized redirect URIs , click Add URI . Then, enter an endpoint URI to which the OAuth 2.0 server can send responses.
Click Create .
The newly created credential appears under OAuth 2.0 Client IDs .
Note the Client ID. Client secrets aren't used for Web applications.
Android
In the Google API Console, go to Menu menu
> Google Auth platform
> Clients .
Go to Clients
Click Create Client .
Click Application type > Android .
In the "Name" field, type a name for the credential. This name is only shown in the Google API Console.
In the "Package name" field, enter the package name from your AndroidManifest.xml file.
In the "SHA-1 certificate fingerprint" field, enter your generated SHA-1 certificate fingerprint .
Click Create .
The newly created credential appears under "OAuth 2.0 Client IDs."
iOS
In the Google API Console, go to Menu menu
> Google Auth platform
> Clients .
Go to Clients
Click Create Client .
Click Application type > iOS .
In the "Name" field, type a name for the credential. This name is only shown in the Google API Console.
In the "Bundle ID" field, enter the bundle identifier as listed in the app's Info.plist file.
Optional: If your app appears in the Apple App Store, enter the App Store ID.
Optional: In the "Team ID" field, enter the unique 10-character string that's generated by Apple and assigned to your team.
Click Create .
The newly created credential appears under "OAuth 2.0 Client IDs."
Chrome app
In the Google API Console, go to Menu menu
> Google Auth platform
> Clients .
Go to Clients
Click Create Client .
Click Application type > Chrome Extension .
In the "Name" field, type a name for the credential. This name is only shown in the Google API Console.
In the "Item ID" field, enter your app's unique 32-character ID string. You can find this ID value in your app's Chrome Web Store URL and in the Chrome Web Store Developer Dashboard .
Click Create .
The newly created credential appears under "OAuth 2.0 Client IDs."
Desktop app
In the Google API Console, go to Menu menu
> Google Auth platform
> Clients .
Go to Clients
Click Create Client .
Click Application type > Desktop app .
In the Name field, type a name for the credential. This name is only shown in the Google API Console.
Click Create .
The newly created credential appears under "OAuth 2.0 Client IDs."
TVs & Limited Input devices
In the Google API Console, go to Menu menu
> Google Auth platform
> Clients .
Go to Clients
Click Create Client .
Click Application type > TVs & Limited Input devices .
In the "Name" field, type a name for the credential. This name is only shown in the Google API Console.
Click Create .
The newly created credential appears under "OAuth 2.0 Client IDs."
Universal Windows Platform (UWP)
In the Google API Console, go to Menu menu
>
> Clients .
Go to Clients
Click Create Client .
Click Application type > Universal Windows Platform (UWP) .
In the "Name" field, type a name for the credential. This name is only shown in the Google API Console.
In the "Store ID" field, enter your app's unique, 12-character Microsoft Store ID value. You can find this ID in your app's Microsoft Store URL and in the Partner Center .
Click Create .
The newly created credential appears under "OAuth 2.0 Client IDs."
Download the client secret JSON file
Note: You can skip this step if you are using Apps Script.
The client secret file is a JSON representation of the OAuth client ID
credentials that your app can reference when providing credentials.
In the Google API Console, go to Menu menu
> APIs & Services
> Credentials .
Go to Credentials
Under OAuth 2.0 Client IDs , click the client ID that you created.
Click Download JSON .
Save the file as credentials.json .
Create and subscribe to a Pub/Sub topic
In this section, you create a Pub/Sub topic and subscription to the topic. Your
Pub/Sub topic serves as the notification endpoint where your
Google Workspace subscription receives events.
To learn more about creating and managing Pub/Sub topics, see the Pub/Sub
documentation .
Note: The Google Workspace Events API uses ordering
keys so that your app receives
messages in the order that they are published. We recommend avoiding use of
message storage
policy .
Events published to topics with such policies are likely to fail, because the
regions in the policy might not match the event source.
To create and subscribe to a Pub/Sub topic:
Google API Console
In the Google API Console, go to the Pub/Sub page:
Go to Google Cloud Pub/Sub
Make sure that the Cloud project for your app is selected.
Click add_box Create topic and
do the following:
Enter a name for your topic, such as workspace-events-topic .
Leave Add a default subscription selected. Pub/Sub names this
default subscription similar to your topic's name, such as
workspace-events-topic-sub .
Optional: Update or configure additional
properties
for your topic.
Click Create . Your full topic name is formatted as
projects/ PROJECT_ID /topics/ TOPIC_ID .
Use this full name in a later step.
Grant access to publish Pub/Sub messages to your topic:
On your topic's page, go to the side panel and open the
Permissions tab.
Click Add Principal .
In the Add principals field, add the service account for the
Google Workspace application that delivers events to your
subscription:
For Chat events:
If your Chat app is a
Google Workspace add-on that extends Chat,
use the service account email on the
Chat API configuration page .
To learn more, see Build a Google Chat app that uses Pub/Sub .
If your Chat app uses
Chat API interaction events ,
use chat-api-push@system.gserviceaccount.com .
Developer Preview: : For Drive events,
drive-api-event-push@system.gserviceaccount.com .
For Meet events,
meet-api-event-push@system.gserviceaccount.com .
In the Assign roles menu, select Pub/Sub Publisher .
Click Save . It can take a few minutes to update the permissions
for your topic.
gcloud
In your Cloud project, create a topic by running the following
command:
gcloud pubsub topics create TOPIC_ID
Replace TOPIC_ID with a unique ID for your topic, such
as workspace-events-topic .
The output displays the full topic name, formatted as
projects/ PROJECT_ID /topics/ TOPIC_ID .
Make note of the name, and make sure the value for
PROJECT_ID is the Cloud project ID
for your app. Use the topic name in the following step, and to create
the Google Workspace subscription later.
Grant access to publish messages to your topic:
gcloud pubsub topics add-iam-policy-binding TOPIC_NAME --member = 'serviceAccount: GOOGLE_WORKSPACE_APPLICATION ' --role = 'roles/pubsub.publisher'
Replace the following:
TOPIC_NAME : The full topic name, which is the
output from the previous step. Formatted as
projects/ PROJECT_ID /topics/ TOPIC_ID .
GOOGLE_WORKSPACE_APPLICATION : The
Google Workspace application that must deliver events to
your subscription:
To receive events from Chat, use one of the
following service accounts:
If your Chat app is a
Google Workspace add-on that extends Chat,
use the service account email on the
Chat API configuration page .
To learn more, see
Build a Google Chat app that uses Pub/Sub .
If your Chat app uses
Chat API interaction events ,
use chat-api-push@system.gserviceaccount.com .
Developer Preview: : To receive events from
Drive, use
drive-api-event-push@system.gserviceaccount.com .
To receive events from Meet, use
meet-api-event-push@system.gserviceaccount.com .
It can take a few minutes to update the permissions for your topic.
Create a Pub/Sub subscription for the topic:
gcloud pubsub subscriptions create SUBSCRIPTION_NAME --topic = TOPIC_NAME
Replace the following:
SUBSCRIPTION_NAME : A name for your subscription,
such as workspace-events-subscription .
TOPIC_NAME : The name of your topic that you created
in the previous step.
Subscribe to a Google Workspace resource
In this section, you subscribe to the Google Workspace resource that
you want to monitor for events.
Choose and identify the target resource
In a Google Workspace subscription, the target resource is the
Google Workspace resource that you monitor for events. The target
resource is represented in the subscription's
targetResource
field, formatted using the full resource name. For example, for a subscription
that monitors a Chat space ( spaces/AAAABBBBBBB ), the value of
the targetResource is //chat.googleapis.com/spaces/AAAABBBBBBB .
Note: The maximum expiration time for your subscriptions depends on whether
resource data is included in the event payload. To learn more about expiration
times, see
Event data for Google Workspace events .
Identify a target resource for Chat
Target resource
Format
Limitations
Space
//chat.googleapis.com/spaces/ SPACE
where SPACE is the ID in the
resource name of the Chat API space resource.
You can obtain the ID from the space's URL or using the
spaces.list() method.
The Chat user or Chat app that authorizes the subscription must
be a member of the space through their Google Workspace or Google
Account. Supports:
User authentication
App authentication with administrator approval
All spaces for a user
//chat.googleapis.com/spaces/-
The subscription only receives events for the spaces where the user is
a member through their Google Workspace or Google Account. Only supports user authentication .
User
//cloudidentity.googleapis.com/users/ USER
where USER is the ID in the
resource name of the Chat API user resource.
For details, see
Identify and specify
Google Chat users .
The subscription only receives events about the user that
authorized the subscription. A user can't authorize a subscription on
behalf of other users. Only supports user authentication .
Identify a target resource for Drive
Developer Preview: Available as part of the
Google Workspace Developer Preview Program ,
which grants early access to certain features.
Target resource
Format
Limitations (if applicable)
File
//drive.googleapis.com/files/ FILE
where FILE is the ID in the
resource name
of the Drive API files resource. You can obtain the ID from the
file's URL or by using the
files.list
method.
The user that authorizes the subscription must have permission on the file within the
subscription relative to the subscribe to event.
Shared drive
//drive.googleapis.com/drives/ DRIVE
where DRIVE is the ID in the
resource name
of the Drive API drives resource. You can obtain the ID from the
drive's URL or by using the
drives.list
method.
The subscription only receives events for items in the shared drive where the user is a
member through their Google Workspace Account or Google Account.
Identify a target resource for Meet
Target resource
Format
Limitations (if applicable)
Meeting space
//meet.googleapis.com/spaces/ SPACE
where SPACE is the ID in the
resource name of the Meet REST API spaces resource.
For details, see
How
Meet identifies a meeting space .
User
//cloudidentity.googleapis.com/users/ USER
where USER is the ID in the
signedinUser.user field of the Meet REST API participants resource.
For details, see
Work with participants .
The subscription receives events about all meeting spaces where the
user is the owner of the meeting space. Usually, the meeting space owner is also the
organizer of the
Google Calendar event associated with the meeting space.
Create a Google Workspace subscription
To create a subscription, use the Google Workspace Events API's
subscriptions.create method to create a
Subscription resource.
Specify the following fields:
targetResource : A Google Workspace that you identified in the
previous section , formatted using its full resource name.
eventTypes : An array of one or more event types you want to receive about
the resource. For example, if your app only needs to know about new messages
posted to a Chat space, your app can just subscribe to events
about created messages.
notificationEndpoint : A notification endpoint where your
Google Workspace subscription delivers events. Use the Pub/Sub
topic that you created in the previous section.
payloadOptions : Options to specify how much resource data to include in
the event payload. This configuration affects the expiration time for your
subscription. To learn more, see Event
data .
To create a Google Workspace subscription:
Apps Script
In your Apps Script project, create a new script file
named createSubscription and add the following code:
function createSubscription () {
// The Google Workspace resource to monitor for events.
const targetResource = ' TARGET_RESOURCE ' ;
// The types of events to receive.
const eventTypes = [ EVENT_TYPES ];
// The endpoint to deliver events to, such as a Google Cloud Pub/Sub topic.
const pubsubTopic = ' TOPIC_NAME ' ;
// Whether to include resource data or not.
const resourceData = RESOURCE_DATA ;
// Call the Workspace Events API using the advanced service.
const response = WorkspaceEvents . Subscriptions . create ({
targetResource : targetResource ,
eventTypes : eventTypes ,
notificationEndpoint : {
pubsubTopic : pubsubTopic ,
},
payloadOptions : {
includeResource : resourceData
}
});
console . log ( response );
}
Replace the following:
TARGET_RESOURCE : The Google Workspace resource
that you're subscribing to, formatted as its full resource name. For
example, to subscribe to a Chat space with the space ID
AAAABBBB , use //chat.googleapis.com/spaces/AAAABBBB .
EVENT_TYPES : One or more event types
that you want to subscribe to in the target resource. Format as an
array of strings such as 'google.workspace.chat.message.v1.created' .
TOPIC_NAME : The full name of the Pub/Sub topic that
you created in your Cloud project. Formatted as
projects/ PROJECT_ID /topics/ TOPIC_ID .
RESOURCE_DATA : A boolean that specifies whether the
subscription includes resource data in the payload:
True : Includes all resource data. To limit which fields are
included, add the fieldMask
field and specify at least one field for the changed resource. Only
subscriptions to Chat resources support including
resource data.
False : Excludes resource data.
To create the Google Workspace subscription, run the function
createSubscription in your Apps Script project.
Python
In your working directory, create a file named create_subscription.py
and add the following code:
"""Create subscription."""
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
# Specify required scopes.
SCOPES = [ SCOPES ]
# Authenticate with Google Workspace and get user authentication.
flow = InstalledAppFlow . from_client_secrets_file ( 'credentials.json' , SCOPES )
CREDENTIALS = flow . run_local_server ()
# The Google Workspace resource to monitor for events.
TARGET_RESOURCE = ' TARGET_RESOURCE '
# The types of events to receive.
EVENT_TYPES = [ EVENT_TYPES ]
# The endpoint to deliver events to, such as a Google Cloud Pub/Sub topic.
TOPIC = ' TOPIC_NAME '
# Call the Workspace Events API using the service endpoint.
service = build (
'workspaceevents' ,
'v1' ,
credentials = CREDENTIALS ,
)
BODY = {
'target_resource' : TARGET_RESOURCE ,
'event_types' : EVENT_TYPES ,
'notification_endpoint' : { 'pubsub_topic' : TOPIC },
'payload_options' : { 'include_resource' : RESOURCE_DATA },
}
response = service . subscriptions () . create ( body = BODY ) . execute ()
print ( response )
Replace the following:
SCOPES : One or more OAuth scopes that support each event type
for the subscription. Formatted as an array of strings. To list multiple scopes, separate by commas.
For example, 'https://www.googleapis.com/auth/chat.spaces.readonly',
'https://www.googleapis.com/auth/chat.memberships.readonly' .
TARGET_RESOURCE : The Google Workspace resource
that you're subscribing to, formatted as its full resource name. For
example, to subscribe to a Chat space with the space ID
AAAABBBB , use //chat.googleapis.com/spaces/AAAABBBB .
EVENT_TYPES : One or more event types
that you want to subscribe to in the target resource. Format as an
array of strings such as 'google.workspace.chat.message.v1.created' .
TOPIC_NAME : The full name of the Pub/Sub topic that
you created in your Cloud project. Formatted as
projects/ PROJECT_ID /topics/ TOPIC_ID .
RESOURCE_DATA : A boolean that specifies whether the
subscription includes resource data in the payload:
True : Includes all resource data. To limit which fields are
included, add the fieldMask
field and specify at least one field for the changed resource. Only
subscriptions to Chat resources support including
resource data.
False : Excludes resource data.
To create the Google Workspace subscription, run the following in
your terminal:
python3 create_subscription.py
The Google Workspace Events API returns a completed long-running
operation that contains the
instance of the Subscription resource that you created.
Test your Google Workspace subscription
To test that you're receiving Google Workspace events, you can trigger
an event and pull messages to the Pub/Sub subscription.
To test your Google Workspace subscription:
Google API Console
Trigger one or more types of events in the target resource of your
Google Workspace subscription. For example, if you've subscribed
to new messages in a Chat space, post a message to the
space.
In the Google API Console, go to the Pub/Sub page:
Go to Pub/Sub
Make sure that the Cloud project for your app is selected.
In the Pub/Sub menu, click Subscriptions .
In the table, find the Pub/Sub subscription for your topic and click
the subscription name.
Click the Messages tab.
Click Pull . It can take up to a few minutes for an event to generate a
Pub/Sub message.
gcloud
Trigger one or more types of events in the target resource of your
Google Workspace subscription. For example, if you've subscribed
to new messages in a Chat space, post a message in the
space.
Run the following command:
gcloud pubsub subscriptions pull PUBSUB_SUBSCRIPTION_NAME --format = json --limit = MESSAGE_COUNT --auto-ack
Replace the following:
PUBSUB_SUBSCRIPTION_NAME : The full name of your
Pub/Sub subscription, formatted as
projects/ PROJECT_ID /subscriptions/ SUBSCRIPTION_ID .
MESSAGE_COUNT : The maximum number of Pub/Sub messages you want to pull.
It can take up to a few minutes for an event to generate a Pub/Sub
message.
For each Google Workspace event that you triggered, a message is
delivered to your Pub/Sub subscription that contains the event. For details, see
Receiving events as Google Cloud Pub/Sub
messages .
Configure how your app receives events
The Pub/Sub subscription that you created is pull-based. After you've tested
your Pub/Sub subscription, you can update the delivery type to change how your
app receives events. For example, you can configure the Pub/Sub subscription to
a push delivery type, so that your app can receive events directly to an app
endpoint.
To learn about configuring a Pub/Sub subscription, see the Pub/Sub
documentation .
Note: You can't set an Apps Script project as a push delivery
endpoint in Pub/Sub. To push Pub/Sub messages to an Apps Script
project, you must publish the script as a web app .
Subscribe to Chat space events as a Google Chat app
You can subscribe to Chat events as a
Chat app from a space in which the
Chat app has membership.
Chat apps can't subscribe to user events.
Write a script that calls Google Workspace Events API
Here's how to create a subscription to Chat space events with
app authentication and administrator
approval :
If necessary,
Build a Chat app .
Subscribe to a Chat resource , but:
Instead of user authentication,
authenticate as a Chat app with one-time administrator approval .
Specify authorization scopes that allow the
Chat app to subscribe to Chat
events. These authorization scopes always begin with chat.app , and
include the following:
https://www.googleapis.com/auth/chat.app.memberships :
Subscribe to Chat space member events.
https://www.googleapis.com/auth/chat.app.memberships.readonly :
Subscribe to Chat space member events.
https://www.googleapis.com/auth/chat.app.messages.readonly :
Subscribe to Chat space message and reaction events.
https://www.googleapis.com/auth/chat.app.spaces :
Subscribe to Chat space events.
https://www.googleapis.com/auth/chat.app.spaces.readonly :
Subscribe to Chat space events.
The following code sample subscribes to message events in a specified
Chat space:
Python
"""Create subscription."""
from google.oauth2 import service_account
from apiclient.discovery import build
# Specify required scopes.
SCOPES = [ 'https://www.googleapis.com/auth/chat.app.messages.readonly' ]
# Specify service account details.
CREDENTIALS = (
service_account . Credentials . from_service_account_file ( 'credentials.json' )
. with_scopes ( SCOPES )
)
# The Google Workspace resource to monitor for events.
TARGET_RESOURCE = '//chat.googleapis.com/spaces/ SPACE_ID '
# The types of events to receive.
EVENT_TYPES = [
'google.workspace.chat.message.v1.created' ,
'google.workspace.chat.message.v1.updated' ,
'google.workspace.chat.message.v1.deleted' ,
]
# The endpoint to deliver events to, such as a Google Cloud Pub/Sub topic.
TOPIC = ' TOPIC_NAME '
# Call the Workspace Events API using the service endpoint.
service = build (
'workspaceevents' ,
'v1beta' ,
credentials = CREDENTIALS ,
)
BODY = {
'target_resource' : TARGET_RESOURCE ,
'event_types' : EVENT_TYPES ,
'notification_endpoint' : { 'pubsub_topic' : TOPIC },
'payload_options' : { 'include_resource' : RESOURCE_DATA },
}
response = service . subscriptions () . create ( body = BODY ) . execute ()
print ( response )
Replace the following:
SPACE_ID : The space name, which you can obtain from
the spaces.list method
in the Chat API, or from a space's URL.
TOPIC_NAME : The full name of the Pub/Sub topic that
you created in your Cloud project. Formatted as
projects/ PROJECT_ID /topics/ TOPIC_ID .
RESOURCE_DATA : A boolean that specifies whether the
subscription includes resource data in the payload:
True : Includes all resource data. To limit which fields are
included, add the fieldMask
field and specify at least one field for the changed resource. Only
subscriptions to Chat resources support including
resource data.
False : Excludes resource data.
Related topics
Tutorial: Observe meeting events with Python and the Meet REST API
Get a subscription
List subscriptions
Update or renew a subscription
Resolve errors and reactivate a subscription
Delete a subscription
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-03 UTC."],[],["To receive notifications about Google Workspace changes, set up a subscription using the Google Workspace Events API. First, enable the Events and Pub/Sub APIs and create OAuth credentials. Next, create a Pub/Sub topic and grant the relevant Google Workspace service account publish access. Then, use the API's `create()` method to define the subscription, specifying the target resource, event types, and the Pub/Sub topic for event delivery. Finally, trigger events and check the Pub/Sub messages. Optionally, configure an endpoint to receive events directly.\n"]]
