---
title: "Update or renew a Google Workspace subscription \_|\_ Google for Developers"
url: https://developers.google.com/workspace/events/guides/update-subscription
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://developers.google.com/workspace/events/guides/auth
source_metadata:
  url: https://developers.google.com/workspace/events/guides/update-subscription
  title: "Update or renew a Google Workspace subscription \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Guides
Send feedback
Update or renew a Google Workspace subscription
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This page provides instructions on renewing a Google Workspace subscription to its maximum expiration time using the subscriptions.update() method.
You can also use the subscriptions.update() method to update the list of event types to receive or to update the expiration time of a subscription.
Code samples are provided in Apps Script and Python demonstrating how to renew a subscription.
Before renewing, you'll need an existing Google Workspace subscription, appropriate user authentication, and necessary tools like an Apps Script project or Python environment.
This page explains how to renew a Google Workspace subscription using
the
subscriptions.update()
method. Use this method to update the expiration time of a subscription,
including renewing the subscription for the maximum expiration time possible, or
to update the list of event types to receive about the target resource.
Apps Script
A Google Workspace subscription. To create one,
see Create a subscription .
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
Requires authentication and an appropriate authorization scope for each event type in the subscription:
For user authentication, requires one or more scopes that support at least one of the event types for the subscription. To identify a scope, see Scopes by event type .
Note: To run the code sample in this guide, you must use the same
OAuth
client ID credentials that you used to create the subscription.
For subscribing to a Chat event as a Chat app, requires app authentication with one-time administrator approval .
Python
Python 3.6 or greater
The pip package management tool
The latest Google client libraries for Python. To install or update them, run the following
command in your command-line interface:
pip3 install --upgrade google-api-python-client google-auth-oauthlib
A Google Workspace subscription. To create one,
see Create a subscription .
Requires authentication and an appropriate authorization scope for each event type in the subscription:
For user authentication, requires one or more scopes that support at least one of the event types for the subscription. To identify a scope, see Scopes by event type .
Note: To run the code sample in this guide, you must use the same
OAuth
client ID credentials that you used to create the subscription.
For subscribing to a Chat event as a Chat app, requires app authentication with one-time administrator approval .
Note: To prevent your subscription from expiring, Google recommends that you don't rely on expiration reminder events . Instead, track your subscription's expiration time and renew it as needed.
Renew a Google Workspace subscription
In this section, use the Google Workspace Events API's
subscriptions.update() method to renew a subscription to its maximum
expiration time. To specify the maximum expiration time, update the ttl
field of the
Subscription resource
to 0 .
The maximum expiration time depends on what resource data is included in the
event payload. To learn more about expiration times, see Event data for
Google Workspace events .
To renew a Google Workspace subscription:
Apps Script
In your Apps Script project, create a new script file
named updateSubscription and add the following code:
function updateSubscription () {
// The name of the subscription to update.
const name = 'subscriptions/ SUBSCRIPTION_ID ' ;
// Call the Workspace Events API using the advanced service.
const response = WorkspaceEvents . Subscriptions . patch ({
ttl : '0s' ,
}, name );
console . log ( response );
}
Replace the following:
SUBSCRIPTION_ID : The ID of the subscription. To get the ID, you can use any of the following:
The value of the
uid field.
The ID of the resource name represented in the
name field. For example, if the resource name is
subscriptions/subscription-123 , use subscription-123 .
To update the Google Workspace subscription, run the function
updateSubscription in your Apps Script project.
Python
In your working directory, create a file named update_subscription.py
and add the following code:
"""Update subscription."""
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
# Specify required scopes.
SCOPES = [ SCOPES ]
# Authenticate with Google Workspace and get user authentication.
flow = InstalledAppFlow . from_client_secrets_file ( 'credentials.json' , SCOPES )
CREDENTIALS = flow . run_local_server ()
# Call the Workspace Events API using the service endpoint.
service = build (
'workspaceevents' ,
'v1' ,
credentials = CREDENTIALS ,
)
BODY = {
'ttl' : { 'seconds' : 0 },
}
NAME = 'subscriptions/ SUBSCRIPTION_ID '
response = (
service . subscriptions ()
. patch ( name = NAME , updateMask = 'ttl' , body = BODY )
. execute ()
)
print ( response )
Replace the following:
SCOPES : One or more OAuth scopes that support each event type
for the subscription. Formatted as an array of strings. To list multiple scopes, separate by commas.
For example, 'https://www.googleapis.com/auth/chat.spaces.readonly',
'https://www.googleapis.com/auth/chat.memberships.readonly' .
SUBSCRIPTION_ID : The ID of the subscription. To get the ID, you can use any of the following:
The value of the
uid field.
The ID of the resource name represented in the
name field. For example, if the resource name is
subscriptions/subscription-123 , use subscription-123 .
In your working directory, make sure you've stored your OAuth client ID
credentials and named the file credentials.json . The code sample uses this JSON
file to authenticate with Google Workspace and get user credentials. For instructions,
see Create OAuth client ID
credentials .
To update the Google Workspace subscription, run the following in
your terminal:
python3 update_subscription.py
The Google Workspace Events API returns a
long-running operation that
contains the instance of the Subscription resource.
To get details about the updated Subscription resource, use the
operations.get() method
and specify the Operation resource returned from your subscriptions.update()
request. Otherwise, if you specify a Operation resource from a previous
version of the subscription, the response is empty.
Update or renew a subscription as a Google Chat app
You can update or renew a subscription to Chat events as a
Chat app instead of as a user. The process is similar,
except:
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
Subscribe to Chat space message events.
https://www.googleapis.com/auth/chat.app.spaces :
Subscribe to Chat space events.
https://www.googleapis.com/auth/chat.app.spaces.readonly :
Subscribe to Chat space events.
Write a script that calls Google Workspace Events API
The following code sample updates a Chat app's
Google Workspace subscription:
Python
"""Update subscription."""
from google.oauth2 import service_account
from apiclient.discovery import build
# Specify required scopes.
SCOPES = [ SCOPES ]
# Specify service account details.
CREDENTIALS = (
service_account . Credentials . from_service_account_file ( 'credentials.json' )
. with_scopes ( SCOPES )
)
# Call the Workspace Events API using the service endpoint.
service = build (
'workspaceevents' ,
'v1beta' ,
credentials = CREDENTIALS ,
)
BODY = {
'ttl' : { 'seconds' : 0 },
}
NAME = 'subscriptions/ SUBSCRIPTION_ID '
response = (
service . subscriptions ()
. patch ( name = NAME , updateMask = 'ttl' , body = BODY )
. execute ()
)
print ( response )
Replace the following:
SCOPES : Specify authorization scopes that allow the
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
SUBSCRIPTION_ID : The ID of the subscription. To get the ID, you can use any of the following:
The value of the
uid field.
The ID of the resource name represented in the
name field. For example, if the resource name is
subscriptions/subscription-123 , use subscription-123 .
Related topics
Get a subscription
List subscriptions
Create a subscription
Resolve errors and reactivate a subscription
Delete a subscription
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],["The core function described is renewing a Google Workspace subscription using the `subscriptions.update()` method. This involves updating the `ttl` field of the subscription resource to `0` to set the maximum expiration time. The process requires authentication with specific scopes and OAuth client ID credentials. Code examples are provided for Apps Script and Python, detailing how to execute the update, and how to retrieve the updated subscription resource via `operations.get()`. It also mentions that the update can include changes to event types.\n"]]
