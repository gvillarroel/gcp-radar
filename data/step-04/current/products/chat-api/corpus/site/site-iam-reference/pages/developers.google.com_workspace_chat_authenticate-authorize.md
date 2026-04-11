---
title: "Authenticate and authorize Chat apps and Google Chat API requests \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/workspace/chat/authenticate-authorize
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://developers.google.com/workspace/chat/authenticate-authorize
source_metadata:
  url: https://developers.google.com/workspace/chat/authenticate-authorize
  title: "Authenticate and authorize Chat apps and Google Chat API requests \_|\_\
    \ Google for Developers"
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
Authenticate and authorize Chat apps and Google Chat API requests
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Google Chat apps can use either user or app authentication to interact with the Chat API.
User authentication requires user consent for specific data access, while app authentication utilizes service accounts.
Different Chat API methods require specific authentication types and authorization scopes.
The document provides detailed tables outlining supported authentication and authorization for various API functionalities.
Developers should carefully consider the authentication and authorization requirements for their specific app's functionality.
Authentication and authorization are mechanisms used to verify identity and
access to resources, respectively. This document outlines how authentication and
authorization work for Chat apps and Chat API requests.
Process overview
The following diagram shows the high-level steps of authentication and
authorization for Google Chat:
Figure 1. High-level steps for Google Chat authentication and authorization.
Configure a Google Cloud project, enable Chat API, and configure your
Chat app: During development, you create a
Google Cloud project. In the Google Cloud project, you enable Chat API,
configure your Chat app, and set up authentication.
For more information, see
Develop on Google Workspace
and
Build a Chat app .
Call Chat API: When your app calls the
Chat API, it sends authentication credentials to the
Chat API. If
your app authenticates with a service account, the credentials are sent as
part of your app's code. If your app requires calling Chat API
using a user's authentication that hasn't yet been granted, it prompts the
user to sign in.
Request resources : Your app asks for access with
scopes
that you specify while setting up authentication.
Ask for consent: If your app is authenticating as a user, Google displays
an OAuth consent screen so the user can decide whether to grant your app
access to the requested data. Authentication with a service account doesn't
require user consent.
Send approved request for resources: If the user consents to the
authorization scopes, your app bundles the credentials and the user-approved
scopes into a request. The request is sent to the Google authorization server
to obtain an access token.
Google returns an access token: The access token contains a list of
granted scopes. If the returned list of scopes is more restrictive than the
requested scopes, your app turns off any features limited by the token.
Access requested resources: Your app uses the access token from Google to
invoke the Chat API and access Chat API resources.
Get a refresh token (optional): If your app must access the
Google Chat API beyond the lifetime of a single access token, it can get a
refresh token. For more information, see
Use OAuth 2.0 to access Google APIs .
Request more resources: If your app needs more access, it asks the user
to grant new scopes, resulting in a new request to get an access token
(steps 3-6).
When Chat apps require authentication
Chat apps can send messages in response to a user interaction, or
asynchronously. They can also complete tasks on a user's behalf, such as
creating a Chat space or getting a list of people in a
Chat space.
Chat apps don't require authentication to respond to a
user interaction, unless the Chat app calls the
Chat API or another Google API
while processing a response.
To send asynchronous messages or perform tasks on a user's behalf,
Chat apps make RESTful requests to the
Chat API ,
which require authentication and authorization.
Responses to user interactions don't require authentication
Google Chat apps don't need to authenticate as a user or
Chat app to receive and respond synchronously to
interaction events .
Google Chat apps receive interaction events whenever a user interacts or
invokes a Chat app, including the following:
A user sends a message to a Chat app.
A user @mentions a Chat app.
A user invokes one of the Chat app's
commands .
The following diagram shows a request-response sequence between a
Chat user and Chat app:
Figure 2. Chat app interaction events don't require authentication.
The user sends a message to the Chat app in
Google Chat.
Google Chat forwards the message to the app.
The app receives the message, processes it, and returns a response to
Google Chat.
Google Chat renders the response for the user, or in a space.
This sequence repeats for each Chat app interaction
event.
Asynchronous messages require authentication
Asynchronous messages occur when a Chat app makes a
request to the
Chat API ,
which requires authentication and authorization.
By calling the Chat API, Chat apps can post messages
to Google Chat or complete tasks and access data on a user's behalf. For
example, after detecting a server outage, a Chat app can call the
Chat API to:
Create a Chat space dedicated to investigating and fixing the
outage.
Add people to the Chat space.
Post a message to the Chat space to give details about the
outage.
The following diagram shows an asynchronous message sequence between a
Chat app and a Chat space:
Figure 3. Asynchronous messages require authentication.
A Chat app creates a message by calling the
Chat API using the
spaces.messages.create
method ,
and includes user credentials in the HTTP request.
Google Chat authenticates the Chat app with
service account or user credentials.
Google Chat renders the app's message to a specified Chat
space.
Chat API scopes
Configure the OAuth consent screen and choose scopes
to define what information is displayed to users and app reviewers, and register
your app so that you can publish it later.
To define the level of access granted to your app, you need to identify and
declare authorization scopes . An authorization scope is an OAuth 2.0 URI
string that contains the Google Workspace app name, what kind of data it
accesses, and the level of access.
Non-sensitive scopes
Scope code
Description
https://www.googleapis.com/auth/chat.bot
Lets Chat apps view chats and send messages.
This scope only supports app authentication with service accounts. You
can't authenticate with user credentials or with
domain-wide delegation
using this scope.
Sensitive scopes
Scope code
Description
https://www.googleapis.com/auth/chat.spaces
Create conversations and spaces and see or edit metadata (including
history settings and access settings) in Chat.
https://www.googleapis.com/auth/chat.spaces.create
Create new conversations in Chat.
https://www.googleapis.com/auth/chat.spaces.readonly
View chat and spaces in Chat.
https://www.googleapis.com/auth/chat.memberships
View, add, update, and remove members from conversations in Chat.
https://www.googleapis.com/auth/chat.memberships.app
Add and remove itself from conversations in Google Chat.
https://www.googleapis.com/auth/chat.memberships.readonly
View members in Chat conversations.
https://www.googleapis.com/auth/chat.messages.create
Compose and send messages in Chat.
https://www.googleapis.com/auth/chat.messages.reactions
View, add, and delete reactions to messages in Chat.
https://www.googleapis.com/auth/chat.messages.reactions.create
Add reactions to a message in Chat.
https://www.googleapis.com/auth/chat.messages.reactions.readonly
View reactions to a message in Chat.
https://www.googleapis.com/auth/chat.users.readstate
View and modify last read time for Chat conversations.
https://www.googleapis.com/auth/chat.users.readstate.readonly
View last read time for Chat conversations.
https://www.googleapis.com/auth/chat.admin.spaces.readonly
View chat and spaces owned by the administrator's domain in Chat.
https://www.googleapis.com/auth/chat.admin.spaces
View or edit chat and spaces owned by the administrator's domain in Chat.
https://www.googleapis.com/auth/chat.admin.memberships.readonly
View members and managers in conversations owned by the administrator's domain in Chat.
https://www.googleapis.com/auth/chat.admin.memberships
View, add, update and remove members and managers in conversations owned by the administrator's domain in Chat.
https://www.googleapis.com/auth/chat.app.spaces
Create conversations and spaces and see or update metadata (including
history settings and access settings) in Chat as a Chat app. Requires
administrator approval .
This scope only supports app authentication with service accounts. You
can't authenticate with user credentials or with
domain-wide delegation
using this scope.
https://www.googleapis.com/auth/chat.app.spaces.readonly
View metadata (including
history settings) in Chat as a Chat app. Requires
administrator approval .
This scope only supports app authentication with service accounts. You
can't authenticate with user credentials or with
domain-wide delegation
using this scope.
https://www.googleapis.com/auth/chat.app.spaces.create
Create new conversations and spaces in Chat as a Chat app. Requires
administrator approval .
This scope only supports app authentication with service accounts. You
can't authenticate with user credentials or with
domain-wide delegation
using this scope.
https://www.googleapis.com/auth/chat.app.memberships
See, add, update, and remove members from conversations and spaces in Chat as a Chat app.
Requires administrator approval .
This scope only supports app authentication with service accounts. You
can't authenticate with user credentials or with
domain-wide delegation
using this scope.
https://www.googleapis.com/auth/chat.app.memberships.readonly
See members from conversations and spaces in Chat as a Chat app.
Requires administrator approval .
This scope only supports app authentication with service accounts. You
can't authenticate with user credentials or with
domain-wide delegation
using this scope.
https://www.googleapis.com/auth/chat.customemojis
View, create, and delete custom emoji in Chat.
https://www.googleapis.com/auth/chat.customemojis.readonly
View custom emoji in Chat.
https://www.googleapis.com/auth/chat.users.spacesettings
View and update Chat user space settings.
https://www.googleapis.com/auth/chat.users.sections
View, create, update, and delete your sections in Chat; move and list your section items in Chat.
https://www.googleapis.com/auth/chat.users.sections.readonly
View your sections and their section items in Chat.
Restricted scopes
Scope code
Description
https://www.googleapis.com/auth/chat.delete
Delete conversations and spaces, and remove access to associated files
in Chat.
https://www.googleapis.com/auth/chat.import
Import spaces, messages, and memberships into Chat. For
more information, see
Authorize Chat apps to import data
https://www.googleapis.com/auth/chat.messages
View, compose, send, update, and delete messages, and add, view, and
delete reactions to messages.
https://www.googleapis.com/auth/chat.messages.readonly
View messages and reactions in Chat.
https://www.googleapis.com/auth/chat.app.messages.readonly
View messages and reactions in Chat as a Chat app.
Requires administrator approval .
This scope only supports app authentication with service accounts. You
can't authenticate with user credentials or with
domain-wide delegation
using this scope.
https://www.googleapis.com/auth/chat.admin.delete
Delete conversations and spaces owned by the administrator's domain, and remove access to associated files
in Chat.
https://www.googleapis.com/auth/chat.app.delete
Delete conversations and spaces and remove access to associated files
in Chat as a Chat app.
Requires administrator approval .
This scope only supports app authentication with service accounts. You
can't authenticate with user credentials or with
domain-wide delegation
using this scope.
The scopes in the preceding tables indicate their sensitivity, according to the
following definitions:
Non-sensitive —These scopes provide the smallest sphere of
authorization access and only require basic app verification. For
information about this requirement, see Steps to prepare for
verification .
Sensitive —These scopes provide your app access to a specific
user's Google data after receiving authorization from the user. It requires
you to go through additional app verification. For information about this
requirement, see Steps for apps requesting sensitive
scopes .
Restricted —These scopes provide wide access to Google user data
and require you to go through the restricted scope verification process. For
information about this requirement, see Google API Services: User Data
Policy
and Additional Requirements for Specific API
Scopes .
See also Steps for apps requesting restricted
scopes .
If your app requires access to any other Google APIs, you can add those scopes
as well. For more information about Google API scopes, see Using OAuth 2.0 to
Access Google APIs .
To learn more about scopes for Google Workspace APIs, see
Configure the OAuth consent screen and choose scopes .
Types of required authentication
There are two ways Chat apps can authenticate and authorize with
the Chat API:
User authentication
User authentication
lets a Chat app access user data and complete actions
on a user's behalf. OAuth scopes specify the authorized data and actions.
Unless the Chat app was
admin installed
or given
domain-wide delegation ,
the first time the Chat app performs an action on a
user's behalf, the user must authorize the Chat app
using the OAuth consent screen .
App authentication
App authentication lets a
Chat app use service account credentials and access
data and complete actions as itself. Because the
Chat app
uses its own credentials to access and work with resources,
end users don't need to approve the
Chat app's API calls,
and you can't add OAuth authorization scopes that support app authorization
to the OAuth consent screen.
Two types of OAuth authorization scopes support app authentication:
https://www.googleapis.com/auth/chat.bot :
Your Chat app can call Google Chat API
methods that support this authorization scope to create, update, get,
list, or delete resources that it has access to, like messages in spaces
that end users add your Chat app to.
Your
Chat app can self-grant this authorization scope,
no administrator or end user authorization required.
https://www.googleapis.com/auth/chat.app.* :
Using these scopes requires one-time administrator approval. To
receive administrator approval, you
prepare the Chat app's service account to receive administrator approval
by creating a Google Workspace Marketplace-compatible OAuth client and
configuring the app in Google Workspace Marketplace SDK. These scopes
allow your Chat app to call specific Google Chat API
methods. For example, chat.app.spaces.create permits apps to create
Chat spaces.
If a method supports both user or app authentication, the Chat API
returns different results based on the authentication type that you use:
With app authentication, the methods only return resources that the
Chat app can access.
With user authentication, the methods only return resources that the user
can access.
For example, calling the spaces.list() method with app authorization returns
the list of spaces that the Chat app is a member of.
Calling spaces.list() with
user authorization returns the list of spaces that the user is a member of. In
practice, you might use both types of
authentication when calling the Chat API, depending on the design
and features of your Chat app.
For asynchronous Chat API calls
The following table lists the Chat API methods and their supported
authorization scopes:
Method
User authentication supported
App authentication supported
Authorization scopes supported
Spaces
Create a space
check
check
With User authentication :
chat.spaces.create
chat.spaces
chat.import
With App authentication and administrator approval :
chat.app.spaces.create
chat.app.spaces
Set up a space
check
—
With User authentication :
chat.spaces.create
chat.spaces
Get a space
check
check
With User authentication :
chat.spaces.readonly
chat.spaces
With User authentication using administrator privileges :
chat.admin.spaces.readonly
With App authentication :
chat.bot
With App authentication and administrator approval :
chat.app.spaces
List spaces
check
check
With User authentication :
chat.spaces.readonly
chat.spaces
With App authentication :
chat.bot
Search spaces
check
—
With User authentication using administrator privileges :
chat.admin.spaces.readonly
Update a space
check
check
With User authentication :
chat.spaces
chat.import
With User authentication using administrator privileges :
chat.admin.spaces
With App authentication and administrator approval :
chat.app.spaces
Delete a space
check
check
With User authentication :
chat.delete
chat.import
With User authentication using administrator privileges :
chat.admin.delete
With App authentication and administrator approval :
chat.app.delete
Complete the import process for a space
check
—
With User authentication :
chat.import
Find a direct message
check
check
With User authentication :
chat.spaces.readonly
chat.spaces
With App authentication :
chat.bot
Members
Create a member
check
check
With User authentication :
chat.memberships
chat.memberships.app
chat.import
With User authentication using administrator privileges :
chat.admin.memberships
With App authentication and administrator approval :
chat.app.memberships
Get a member
check
check
With User authentication :
chat.memberships.readonly
chat.memberships
With App authentication :
chat.bot
With User authentication using administrator privileges :
chat.admin.memberships.readonly
List members
check
check
With User authentication :
chat.memberships.readonly
chat.memberships
chat.import
With App authentication :
chat.bot
With User authentication using administrator privileges :
chat.admin.memberships.readonly
Delete a member
check
check
With User authentication :
chat.memberships
chat.memberships.app
chat.import
With User authentication using administrator privileges :
chat.admin.memberships
With App authentication and administrator approval :
chat.app.memberships
Update a member
check
check
With User authentication :
chat.memberships
chat.import
With User authentication using administrator privileges :
chat.admin.memberships
With App authentication and administrator approval :
chat.app.memberships
Messages
Create a message
check
check
With User authentication :
chat.messages.create
chat.messages
chat.import
With App authentication :
chat.bot
Get a message
check
check
With User authentication :
chat.messages.readonly
chat.messages
With App authentication :
chat.bot
With App authentication and administrator approval :
chat.app.messages.readonly
List messages
check
check
With User authentication :
chat.messages.readonly
chat.messages
chat.import
With App authentication and administrator approval :
chat.app.messages.readonly
Update a message
check
check
With User authentication :
chat.messages
chat.import
With App authentication :
chat.bot
Delete a message
check
check
With User authentication :
chat.messages
chat.import
With App authentication :
chat.bot
Update cards in a message
Developer Preview: Available as part of the
Google Workspace Developer Preview Program ,
which grants early access to certain features.
—
check
With App authentication :
chat.bot
Reactions
Create a reaction
check
—
With User authentication :
chat.messages.reactions.create
chat.messages.reactions
chat.messages
chat.import
List reactions
check
—
With User authentication :
chat.messages.reactions.readonly
chat.messages.reactions
chat.messages.readonly
chat.messages
Delete a reaction
check
—
With User authentication :
chat.messages.reactions
chat.messages
chat.import
Custom emoji
Create a custom emoji
check
—
With User authentication :
chat.customemojis
Delete a custom emoji
check
—
With User authentication :
chat.customemojis
Get a custom emoji
check
—
With User authentication :
chat.customemojis
chat.customemojis.readonly
List custom emoji
check
—
With User authentication :
chat.customemojis
chat.customemojis.readonly
Media & attachments
Upload media as a file attachment
check
—
With User authentication :
chat.messages.create
chat.messages
chat.import
Download media
check
check
With User authentication :
chat.messages.readonly
chat.messages
With App authentication :
chat.bot
Get a message attachment
—
check
With App authentication :
chat.bot
User read states
Get a user's space read state
check
—
With User authentication :
chat.users.readstate
chat.users.readstate.readonly
Update a user's space read state
check
—
With User authentication :
chat.users.readstate
Get a user's thread read state
check
—
With User authentication :
chat.users.readstate
chat.users.readstate.readonly
User space settings
Get a user's space notification setting
check
—
With User authentication :
chat.users.spacesettings
Update a user's space notification setting
check
—
With User authentication :
chat.users.spacesettings
Space events
Get space events
check
—
With User authentication ,
you must use a scope based on the
event type :
For events about messages:
chat.messages
chat.messages.readonly
For events about reactions:
chat.messages.reactions
chat.messages.reactions.readonly
chat.messages
chat.messages.readonly
For events about memberships:
chat.memberships
chat.memberships.readonly
For events about the space:
chat.spaces
chat.spaces.readonly
List space events
check
—
With User authentication ,
you must use a scope for each
event type included in the request:
For events about messages:
chat.messages
chat.messages.readonly
For events about reactions:
chat.messages.reactions
chat.messages.reactions.readonly
chat.messages
chat.messages.readonly
For events about memberships:
chat.memberships
chat.memberships.readonly
For events about the space:
chat.spaces
chat.spaces.readonly
Sections
Create a section
check
—
With User authentication :
chat.users.sections
Delete a section
check
—
With User authentication :
chat.users.sections
List sections
check
—
With User authentication :
chat.users.sections
chat.users.sections.readonly
Update a section
check
—
With User authentication :
chat.users.sections
Position a section
check
—
With User authentication :
chat.users.sections
Section Items
Move a section item
check
—
With User authentication :
chat.users.sections
List section items
check
—
With User authentication :
chat.users.sections
chat.users.sections.readonly
For Chat app interaction events
The following table lists common ways that users interact with
Chat apps and whether authentication is required or supported:
Scenario
No authentication required
User authentication supported
App authentication supported
Receive messages from:
Chat app interaction events
check
—
—
Apps Script callbacks
check
—
—
Google Cloud Pub/Sub
—
—
check
Respond to messages:
Synchronously, using a Chat app interaction event
check
—
—
Synchronously, using an Apps Script callback return value
check
—
—
Send new messages:
With incoming webhooks
check
—
—
Related topics
For an overview of authentication and authorization in Google Workspace,
see
Learn about authentication & authorization .
For an overview of authentication and authorization in Google Cloud, see
Authentication overview .
To learn more about service accounts, see
Service accounts .
To learn more about how Google APIs use OAuth 2.0, see
Using OAuth 2.0 to Access Google APIs .
Set up authentication and authorization with
user credentials
or a
service account .
To manage granular OAuth permissions, see Manage granular OAuth permissions for Google Chat apps .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],["Google Chat app authentication involves setting up a project, enabling the Chat API, and defining scopes. Apps use either service account or user credentials to call the API. User consent is required for user authentication unless admin-installed. Scopes dictate data access levels. Authentication is needed for asynchronous actions, like sending messages; synchronous responses don't require it. Scopes are non-sensitive, sensitive, or restricted, with varying verification levels. Methods and access are defined by OAuth scopes. There is user and app authentication, user needs to approve the scopes, app does not.\n"]]
