---
title: "Create a named space in Google Chat \_|\_ Google for Developers"
url: https://developers.google.com/workspace/chat/create-spaces
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/workspace/chat/overview
source_metadata:
  url: https://developers.google.com/workspace/chat/create-spaces
  title: "Create a named space in Google Chat \_|\_ Google for Developers"
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
Create a named space in Google Chat
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This guide explains how to create a named space in Google Chat using the Google Chat API.
Named spaces allow for messaging, file sharing, and collaboration, including the integration of Chat apps.
You can create a named space authenticated as either a Chat user or a Chat app (Developer Preview).
After creating a space, add members individually or use the setUp() method to add them during space creation.
View code samples for Node.js, Python, Java, and Apps Script to help you get started.
This guide explains how to create a named space using the
create()
method on the Space resource
of the Google Chat API.
A named space (where the
spaceType is
SPACE ) is a place where people send messages, share files, and collaborate.
Named spaces can include Chat apps. Named spaces have space
managers who can apply administrative settings, descriptions, and add or remove
people and apps.
To create different types of Chat spaces
(including direct messages or group messages), use the setUp() method on the
Space resource to create the space and add members at the same time. For
details, Set up a space .
After creating a named space, the only member of the space is the authenticated
user. To add members to the space, call the
create() method on the Membership resource
for
each person or app that you want to add. Or, you can use the setUp() method to
create a named space and add members to it at the same time.
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
Create a named space as a user
To create a named space with
user authentication , pass
the following in your request:
Specify the chat.spaces.create or chat.spaces authorization scope.
Call the
CreateSpace()
method, passing space as an instance of
Space
with the following fields:
spaceType set to SPACE .
displayName set to the user-visible name of the space.
Optionally, set other attributes, like the following:
spaceDetails - a user-visible description and set of guidelines for
the space.
predefinedPermissionSettings - predefined permissions for the space.
For example, you can configure it so that all members or only space
managers can post messages.
Here's how to create a named space:
Node.js
chat/client-libraries/cloud/create-space-user-cred.js
View on GitHub
import { createClientWithUserCredentials } from './authentication-utils.js' ;
const USER_AUTH_OAUTH_SCOPES = [
'https://www.googleapis.com/auth/chat.spaces.create' ,
];
// This sample shows how to create a named space with user credential
async function main () {
// Create a client
const chatClient = await createClientWithUserCredentials (
USER_AUTH_OAUTH_SCOPES ,
);
// Initialize request argument(s)
const request = {
space : {
spaceType : 'SPACE' ,
// Replace DISPLAY_NAME here.
displayName : 'DISPLAY_NAME' ,
},
};
// Make the request
const response = await chatClient . createSpace ( request );
// Handle the response
console . log ( response );
}
await main ();
Python
chat/client-libraries/cloud/create_space_user_cred.py
View on GitHub
from authentication_utils import create_client_with_user_credentials
from google.apps import chat_v1 as google_chat
SCOPES = [ "https://www.googleapis.com/auth/chat.spaces.create" ]
def create_space_with_user_cred ():
# Create a client
client = create_client_with_user_credentials ( SCOPES )
# Initialize request argument(s)
request = google_chat . CreateSpaceRequest (
space = {
"space_type" : 'SPACE' ,
# Replace DISPLAY_NAME here.
"display_name" : 'DISPLAY_NAME'
}
)
# Make the request
response = client . create_space ( request )
# Handle the response
print ( response )
create_space_with_user_cred ()
Java
chat/client-libraries/cloud/src/main/java/com/google/workspace/api/chat/samples/CreateSpaceUserCred.java
View on GitHub
import com.google.chat.v1.ChatServiceClient ;
import com.google.chat.v1.CreateSpaceRequest ;
import com.google.chat.v1.Space ;
// This sample shows how to create space with user credential.
public class CreateSpaceUserCred {
private static final String SCOPE =
"https://www.googleapis.com/auth/chat.spaces.create" ;
public static void main ( String [] args ) throws Exception {
try ( ChatServiceClient chatServiceClient =
AuthenticationUtils . createClientWithUserCredentials (
ImmutableList . of ( SCOPE ))) {
CreateSpaceRequest . Builder request = CreateSpaceRequest . newBuilder ()
. setSpace ( Space . newBuilder ()
. setSpaceType ( Space . SpaceType . SPACE )
// Replace DISPLAY_NAME here.
. setDisplayName ( "DISPLAY_NAME" ));
Space response = chatServiceClient . createSpace ( request . build ());
System . out . println ( JsonFormat . printer (). print ( response ));
}
}
}
Apps Script
chat/advanced-service/Main.gs
View on GitHub
/**
* This sample shows how to create space with user credential
*
* It relies on the OAuth2 scope 'https://www.googleapis.com/auth/chat.spaces.create'
* referenced in the manifest file (appsscript.json).
*/
function createSpaceUserCred () {
// Initialize request argument(s)
const space = {
spaceType : "SPACE" ,
// TODO(developer): Replace DISPLAY_NAME here
displayName : "DISPLAY_NAME" ,
};
// Make the request
const response = Chat . Spaces . create ( space );
// Handle the response
console . log ( response );
}
Create a named space as a Chat app
App authentication requires one-time
administrator approval .
To invite or add a user to a space with
app authentication , pass
the following in your request:
Specify the chat.app.spaces.create or chat.app.spaces authorization
scope.
Call the
create method
on the
Space resource .
Set
spaceType
to SPACE .
Set
displayName
to the user-visible name of the space. In the following example, displayName
is set to API-made .
Specify the customer ID of the Google Workspace domain using the customer field.
Optionally, set other space attributes, like
spaceDetails
(a user-visible description and set of guidelines for the space).
Write a script that calls Chat API
Here's how to create a named space:
Note: The following sample uses the REST API interface with the Google API
client libraries instead of the gRPC API interface. For more information about
the gRPC and REST interfaces, see
Google Chat API overview .
Python
In your working directory, create a file named chat_space_create_named_app.py .
Include the following code in chat_space_create_named_app.py :
from google.oauth2 import service_account
from apiclient.discovery import build
# Define your app's authorization scopes.
# When modifying these scopes, delete the file token.json, if it exists.
SCOPES = [ "https://www.googleapis.com/auth/chat.app.spaces.create" ]
def main ():
'''
Authenticates with Chat API using app authentication,
then creates a Chat space.
'''
# Specify service account details.
creds = (
service_account . Credentials . from_service_account_file ( 'credentials.json' )
. with_scopes ( SCOPES )
)
# Build a service endpoint for Chat API.
chat = build ( 'chat' , 'v1' , credentials = creds )
# Use the service endpoint to call Chat API.
result = chat . spaces () . create (
# Details about the space to create.
body = {
# To create a named space, set spaceType to SPACE.
'spaceType' : 'SPACE' ,
# The user-visible name of the space.
'displayName' : 'API-made' ,
# The customer ID of the Workspace domain.
'customer' : ' CUSTOMER '
}
) . execute ()
# Prints details about the created space.
print ( result )
if __name__ == '__main__' :
main ()
In the code, replace the following:
CUSTOMER : the customer ID of the domain of the
space in the format customer/{customer} where {customer} is the ID
from the
Admin SDK customer resource .
To create a space in the same Google Workspace organization as
the Chat app, use customers/my_customer .
In your working directory, build and run the sample:
python3 chat_space_create_named_app.py
Open the space in Google Chat
To navigate to the space, use the space's resource ID
to build the space's URL. You can find the resource ID from the space
name in the Google Chat response body. For example, if your space's
name is spaces/1234567 , you can navigate to the space using the following
URL: https://mail.google.com/chat/u/0/#chat/space/1234567 .
Limitations and considerations
When you create a space using
app authentication ,
the authenticating
Chat app is added as a member of the space, but
unlike user authentication, not as a space manager. By default, all space
members can remove the Chat app. To allow only space
managers to remove the Chat app, set
permissionSettings.manageApps
to managersAllowed .
Related topics
Add people and apps to the space by
creating members .
Post a message in the space by
creating a message .
Get details about a space .
List spaces .
Update a space .
Delete a space .
Set up a space .
Find a direct message space .
Make a space discoverable to specific users .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["This document outlines creating named spaces in Google Chat using the `create()` method on the `Space` resource. To do so, set `spaceType` to `SPACE` and `displayName` to the space's name, with the option to include `spaceDetails` and `predefinedPermissionSettings`. Authentication can be done as a user, using the `chat.spaces.create` scope, or as a Chat app, using `chat.app.spaces.create` scope and an API key. After creation, add members using the `create()` method on the `Membership` resource or the `setUp()` method.\n"]]
