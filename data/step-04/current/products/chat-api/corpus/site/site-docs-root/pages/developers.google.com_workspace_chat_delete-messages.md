---
title: "Delete a message \_|\_ Google Chat \_|\_ Google for Developers"
url: https://developers.google.com/workspace/chat/delete-messages
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/workspace/chat/overview
source_metadata:
  url: https://developers.google.com/workspace/chat/delete-messages
  title: "Delete a message \_|\_ Google Chat \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Chat
Guides
Send feedback
Delete a message
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This guide demonstrates how to delete text or card messages in Google Chat using the delete() method of the Google Chat API.
You can delete messages sent by the Chat app or the authenticated user, and potentially messages sent by other space members if you are a space manager.
Before using this method, you need a Google Workspace account, a Google Cloud project, and appropriate authorization credentials (user or app).
Code samples are provided for Node.js, Python, Java, and Apps Script, showing how to delete messages with both user and app authentication.
To successfully delete a message, you need the name of the space and the name of the message you want to delete.
This guide explains how to use the
delete()
method on the Message resource of the Google Chat API to delete a text or card
message.
In the Chat API, a Chat message is represented by the
Message resource .
While Chat users can only send messages that contain text,
Chat apps can use many other messaging features, including
displaying static or interactive user interfaces, collecting information from
users, and delivering messages privately. To learn more about messaging
features available for the Chat API, see the
Google Chat messages overview .
With app authentication ,
you can use this method to delete a message that the
Chat app sent. With
user authentication , you
can use this method to delete a message that the authenticated user sent. If
the user is a space manager for the space, you might also be able to delete a
message that other space members sent. For more information, see Learn about
your role as a Space Manager .
Prerequisites
Node.js
A Business or Enterprise
Google Workspace account with access to
Google Chat .
Set up your environment:
Create a Google Cloud project .
Configure the OAuth consent screen .
Enable and configure the Google Chat API with a name,
icon, and description for your Chat app.
Install the
Node.js
Cloud Client Library .
Create access credentials based on how you want to authenticate in your Google Chat API
request:
To authenticate as a Chat user,
create OAuth client ID
credentials and save the credentials as a JSON file named
credentials.json to your local directory.
To authenticate as the Chat app,
create service account
credentials and save the credentials as a JSON file named
credentials.json .
Choose an authorization scope based on whether you want to authenticate as a user or the
Chat app.
Python
A Business or Enterprise
Google Workspace account with access to
Google Chat .
Set up your environment:
Create a Google Cloud project .
Configure the OAuth consent screen .
Enable and configure the Google Chat API with a name,
icon, and description for your Chat app.
Install the
Python
Cloud Client Library .
Create access credentials based on how you want to authenticate in your Google Chat API
request:
To authenticate as a Chat user,
create OAuth client ID
credentials and save the credentials as a JSON file named
credentials.json to your local directory.
To authenticate as the Chat app,
create service account
credentials and save the credentials as a JSON file named
credentials.json .
Choose an authorization scope based on whether you want to authenticate as a user or the
Chat app.
Java
A Business or Enterprise
Google Workspace account with access to
Google Chat .
Set up your environment:
Create a Google Cloud project .
Configure the OAuth consent screen .
Enable and configure the Google Chat API with a name,
icon, and description for your Chat app.
Install the
Java
Cloud Client Library .
Create access credentials based on how you want to authenticate in your Google Chat API
request:
To authenticate as a Chat user,
create OAuth client ID
credentials and save the credentials as a JSON file named
credentials.json to your local directory.
To authenticate as the Chat app,
create service account
credentials and save the credentials as a JSON file named
credentials.json .
Choose an authorization scope based on whether you want to authenticate as a user or the
Chat app.
Apps Script
A Business or Enterprise
Google Workspace account with access to
Google Chat .
Set up your environment:
Create a Google Cloud project .
Configure the OAuth consent screen .
Enable and configure the Google Chat API with a name,
icon, and description for your Chat app.
Create a standalone Apps Script project ,
and turn on the Advanced Chat Service .
In this guide, you must use either user
or app authentication . To authenticate as the Chat app, create
service account credentials. For steps, see
Authenticate and authorize as a
Google Chat app .
Choose an authorization scope based on whether you want to authenticate as a user or the
Chat app.
The code samples in this page use the gRPC API interface with the Google Cloud client
libraries. Alternatively, you can use the REST API interface. For more information about the gRPC
and REST interfaces, see
Google Chat API overview .
Delete a message with user authentication
To delete a message with user authentication ,
pass the following in your request:
Specify the chat.messages authorization scope.
Call the
DeleteMessage()
method.
Set name to the resource name of the message to delete.
The following example deletes a message with
user authentication :
Node.js
chat/client-libraries/cloud/delete-message-user-cred.js
View on GitHub
import { createClientWithUserCredentials } from './authentication-utils.js' ;
const USER_AUTH_OAUTH_SCOPES = [
'https://www.googleapis.com/auth/chat.messages' ,
];
// This sample shows how to delete a message with user credential
async function main () {
// Create a client
const chatClient = await createClientWithUserCredentials (
USER_AUTH_OAUTH_SCOPES ,
);
// Initialize request argument(s)
const request = {
// Replace SPACE_NAME and MESSAGE_NAME here
name : 'spaces/SPACE_NAME/messages/MESSAGE_NAME' ,
};
// Make the request
const response = await chatClient . deleteMessage ( request );
// Handle the response
console . log ( response );
}
await main ();
Python
chat/client-libraries/cloud/delete_message_user_cred.py
View on GitHub
from authentication_utils import create_client_with_user_credentials
from google.apps import chat_v1 as google_chat
SCOPES = [ "https://www.googleapis.com/auth/chat.messages" ]
# This sample shows how to delete a message with user credential
def delete_message_with_user_cred ():
# Create a client
client = create_client_with_user_credentials ( SCOPES )
# Initialize request argument(s)
request = google_chat . DeleteMessageRequest (
# Replace SPACE_NAME and MESSAGE_NAME here
name = "spaces/SPACE_NAME/messages/MESSAGE_NAME" ,
)
# Make the request
response = client . delete_message ( request )
# Handle the response
print ( response )
delete_message_with_user_cred ()
Java
chat/client-libraries/cloud/src/main/java/com/google/workspace/api/chat/samples/DeleteMessageUserCred.java
View on GitHub
import com.google.chat.v1.ChatServiceClient ;
import com.google.chat.v1.DeleteMessageRequest ;
import com.google.chat.v1.SpaceName ;
// This sample shows how to delete message with user credential.
public class DeleteMessageUserCred {
private static final String SCOPE =
"https://www.googleapis.com/auth/chat.messages" ;
public static void main ( String [] args ) throws Exception {
try ( ChatServiceClient chatServiceClient =
AuthenticationUtils . createClientWithUserCredentials (
ImmutableList . of ( SCOPE ))) {
DeleteMessageRequest . Builder request = DeleteMessageRequest . newBuilder ()
// replace SPACE_NAME and MESSAGE_NAME here
. setName ( "spaces/SPACE_NAME/messages/MESSAGE_NAME" );
chatServiceClient . deleteMessage ( request . build ());
}
}
}
Apps Script
chat/advanced-service/Main.gs
View on GitHub
/**
* This sample shows how to delete a message with user credential
*
* It relies on the OAuth2 scope 'https://www.googleapis.com/auth/chat.messages'
* referenced in the manifest file (appsscript.json).
*/
function deleteMessageUserCred () {
// Initialize request argument(s)
// TODO(developer): Replace SPACE_NAME and MESSAGE_NAME here
const name = "spaces/SPACE_NAME/messages/MESSAGE_NAME" ;
// Make the request
const response = Chat . Spaces . Messages . remove ( name );
// Handle the response
console . log ( response );
}
To run this sample, replace the following:
SPACE_NAME : the ID from the space's
name .
You can obtain the ID by calling the
ListSpaces()
method or from the space's URL.
MESSAGE_NAME : the ID from the message's
name .
You can obtain the ID from the response body returned after creating a
message asynchronously with the Chat API, or with the
custom name
assigned to the message at creation.
If successful, the response body is empty, which indicates that the message is
deleted.
Delete a message with app authentication
To delete a message with
app authentication , pass the
following in your request:
Specify the chat.bot authorization scope.
Call the
DeleteMessage()
method.
Set name to the resource name of the message to delete.
The following example deletes a message with
app authentication :
Node.js
chat/client-libraries/cloud/delete-message-app-cred.js
View on GitHub
import { createClientWithAppCredentials } from './authentication-utils.js' ;
// This sample shows how to delete a message with app credential
async function main () {
// Create a client
const chatClient = createClientWithAppCredentials ();
// Initialize request argument(s)
const request = {
// Replace SPACE_NAME and MESSAGE_NAME here
name : 'spaces/SPACE_NAME/messages/MESSAGE_NAME' ,
};
// Make the request
const response = await chatClient . deleteMessage ( request );
// Handle the response
console . log ( response );
}
await main ();
Python
chat/client-libraries/cloud/delete_message_app_cred.py
View on GitHub
from authentication_utils import create_client_with_app_credentials
from google.apps import chat_v1 as google_chat
# This sample shows how to delete a message with app credential
def delete_message_with_app_cred ():
# Create a client
client = create_client_with_app_credentials ()
# Initialize request argument(s)
request = google_chat . DeleteMessageRequest (
# Replace SPACE_NAME and MESSAGE_NAME here
name = "spaces/SPACE_NAME/messages/MESSAGE_NAME" ,
)
# Make the request
response = client . delete_message ( request )
# Handle the response
print ( response )
delete_message_with_app_cred ()
Java
chat/client-libraries/cloud/src/main/java/com/google/workspace/api/chat/samples/DeleteMessageAppCred.java
View on GitHub
import com.google.chat.v1.ChatServiceClient ;
import com.google.chat.v1.DeleteMessageRequest ;
// This sample shows how to delete message with app credential.
public class DeleteMessageAppCred {
public static void main ( String [] args ) throws Exception {
try ( ChatServiceClient chatServiceClient =
AuthenticationUtils . createClientWithAppCredentials ()) {
DeleteMessageRequest . Builder request = DeleteMessageRequest . newBuilder ()
// replace SPACE_NAME and MESSAGE_NAME here
. setName ( "spaces/SPACE_NAME/messages/MESSAGE_NAME" );
chatServiceClient . deleteMessage ( request . build ());
}
}
}
Apps Script
chat/advanced-service/Main.gs
View on GitHub
/**
* This sample shows how to delete a message with app credential
*
* It relies on the OAuth2 scope 'https://www.googleapis.com/auth/chat.bot'
* used by service accounts.
*/
function deleteMessageAppCred () {
// Initialize request argument(s)
// TODO(developer): Replace SPACE_NAME and MESSAGE_NAME here
const name = "spaces/SPACE_NAME/messages/MESSAGE_NAME" ;
const parameters = {};
// Make the request
const response = Chat . Spaces . Messages . remove (
name ,
parameters ,
getHeaderWithAppCredentials (),
);
// Handle the response
console . log ( response );
}
To run this sample, replace the following:
SPACE_NAME : the ID from the space's
name .
You can obtain the ID by calling the
ListSpaces()
method or from the space's URL.
MESSAGE_NAME : the ID from the message's
name .
You can obtain the ID from the response body returned after creating a
message asynchronously with the Chat API, or with the
custom name
assigned to the message at creation.
If successful, the response body is empty, which indicates that the message is
deleted.
Related topics
Format a message .
Get details about a message .
List messages in a space .
Update a message .
Send a message .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["The document details how to delete messages in Google Chat using the `delete()` method via the Chat API. Messages can be deleted with either user or app authentication. User authentication requires the `chat.messages` scope, while app authentication requires `chat.bot`. To delete a message, call `DeleteMessage()`, setting the `name` parameter to the message's resource name. Prerequisites include setting up a Google Cloud project, configuring the Chat API, and creating the appropriate access credentials. It provides code examples for Node.js, Python, Java, and Apps Script.\n"]]
