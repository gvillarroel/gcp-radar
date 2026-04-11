---
title: "Choose Google Workspace Events API scopes \_|\_ Google for Developers"
url: https://developers.google.com/workspace/events/guides/auth
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://developers.google.com/workspace/events/guides/auth
source_metadata:
  url: https://developers.google.com/workspace/events/guides/auth
  title: "Choose Google Workspace Events API scopes \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Guides
Send feedback
Choose Google Workspace Events API scopes
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This document outlines authentication and authorization specifics for the Google Workspace Events API, advising prior review of general Google Workspace authentication guidelines.
You need to configure OAuth 2.0, including consent screen and scopes, to manage data access for your app, prioritizing the most limited scopes necessary.
Google Workspace Events API uses scopes from Google Workspace apps that support subscriptions and might require OAuth verification for certain scopes.
Subscriptions to Google Chat events support both user and app authentication, influencing the data returned by API calls.
Specific authorization scopes are required depending on the desired event types, such as chat messages, reactions, memberships, spaces, or Meet conferences and recordings.
This document contains Google Workspace Events API-specific authorization and
authentication information. Before reading this document, be sure to read the
Google Workspace's general authentication and authorization information at
Learn about authentication and authorization .
Configure OAuth 2.0 for authorization
Configure the OAuth consent screen and choose scopes
to define what information is displayed to users and app reviewers, and register
your app so that you can publish it later.
Google Workspace Events API scopes
To define the level of access granted to your app, you need to identify and
declare authorization scopes . An authorization scope is an OAuth 2.0 URI string
that contains the Google Workspace app name, what kind of data it accesses, and
the level of access. Scopes are your app's requests to work with Google Workspace data, including
users' Google Account data.
When your app is installed, a user is asked to validate the scopes used
by the app. Generally, you should choose the most narrowly focused scope
possible and avoid requesting scopes that your app doesn't require. Users more
readily grant access to limited, clearly described scopes.
If your public application uses scopes that permit access to
certain user data, it must complete a verification process. If you see unverified
app on the screen when testing your application, you must submit a
verification request to remove it. Find out more about
unverified apps
and get answers to
frequently asked questions about app verification in the Help Center.
The Google Workspace Events API uses scopes from Google Workspace
applications that support subscriptions. If your app already uses the scopes
required for your subscription, you don't need to add scopes to use the
Google Workspace Events API. If you do add scopes, choose the least sensitive
scope that still allows your app to function. For details about scope
categories, see Scope
categories .
The following table lists the supported scopes for the
Google Workspace Events API:
Scope code
Description
Usage
Google Chat
https://www.googleapis.com/auth/chat.bot
Lets Chat apps view chats and send messages. Gives
access to all features available to Chat apps.
Note: The chat.bot scope:
Only supports app authentication. You can't authenticate user credentials using this scope.
Doesn't support domain-wide delegation .
Non-sensitive
https://www.googleapis.com/auth/chat.memberships
View, add, and remove members from conversations in
Chat.
Sensitive
https://www.googleapis.com/auth/chat.memberships.readonly
View members in Chat conversations.
Sensitive
https://www.googleapis.com/auth/chat.app.memberships
See, add, update, and remove members from conversations and spaces in
Chat as a Chat app.
Requires administrator approval .
This scope only supports app authentication with service accounts. You
can't authenticate with user credentials or with
domain-wide delegation
using this scope.
Sensitive
https://www.googleapis.com/auth/chat.app.memberships.readonly
See members from conversations and spaces in Google Chat as a Chat app.
Requires administrator approval .
This scope only supports app authentication with service accounts. You
can't authenticate with user credentials or with
domain-wide delegation
using this scope.
Sensitive
https://www.googleapis.com/auth/chat.spaces
Create conversations and spaces and view or update metadata (including
history settings) in Chat.
Sensitive
https://www.googleapis.com/auth/chat.spaces.readonly
View chat and spaces in Chat.
Sensitive
https://www.googleapis.com/auth/chat.app.spaces
Create conversations and spaces and view or update metadata (including
history settings) in Chat as a
Chat app.
Requires administrator approval .
This scope only supports app authentication with service accounts. You
can't authenticate with user credentials or with
domain-wide delegation
using this scope.
Sensitive
https://www.googleapis.com/auth/chat.app.spaces.readonly
View metadata (including history settings) in Google Chat as a Chat app.
Requires administrator approval .
This scope only supports app authentication with service accounts. You
can't authenticate with user credentials or with
domain-wide delegation
using this scope.
Sensitive
https://www.googleapis.com/auth/chat.messages.reaction s
View, add, and delete reactions to messages in
Chat.
Sensitive
https://www.googleapis.com/auth/chat.messages.reactions.readonly
View reactions to a message in Chat.
Sensitive
https://www.googleapis.com/auth/chat.messages
View, compose, send, update, and delete messages, and add, view, and
delete reactions to messages.
Restricted
https://www.googleapis.com/auth/chat.messages.readonly
View messages and reactions in Chat.
Restricted
https://www.googleapis.com/auth/chat.app.messages.readonly
View messages and reactions in Chat as a
Chat app.
Requires administrator approval .
This scope only supports app authentication with service accounts. You
can't authenticate with user credentials or with
domain-wide delegation
using this scope.
Restricted
Google Drive
https://www.googleapis.com/auth/drive.file
Create new Drive files, or modify existing files, that
you open with an app or that the user shares with an app while using the
Google Picker API or the app's file picker.
Non-sensitive
https://www.googleapis.com/auth/drive
View and manage all your Drive files.
Restricted
https://www.googleapis.com/auth/drive.readonly
View and download all your Drive files.
Restricted
https://www.googleapis.com/auth/drive.metadata
View and manage metadata of files in your Drive.
Restricted
https://www.googleapis.com/auth/drive.metadata.readonly
View metadata for files in your Drive.
Restricted
Google Meet
https://www.googleapis.com/auth/meetings.space.created
Allow apps to create, modify, and read metadata about meeting spaces
created by your app.
Sensitive
https://www.googleapis.com/auth/meetings.space.readonly
Allow apps to read metadata about any meeting space the user has access
to.
Sensitive
The Usage column in the preceding table indicates the sensitivity of each scope:
Non-sensitive : These scopes provide the smallest scope of authorization
access and only require basic app verification. For information on this
requirement, see Verification
requirements .
Sensitive : These scopes provide access to specific Google User Data
that's authorized by the user for your app. It requires you to go through
additional app verification. For information on this requirement, see
Sensitive and Restricted Scope
Requirements .
Restricted : These scopes provide wide access to Google User Data and
require you to go through a restricted scope verification process. For
information on this requirement, see Google API Services: User Data
Policy and Additional Requirements
for Specific API
Scopes .
If you store restricted scope data on servers (or transmit), then you must
go through a security assessment.
If your app requires access to any other Google APIs, you can add those scopes
as well. For more information about Google API scopes, see Using OAuth 2.0 to
Access Google APIs .
For more information about specific OAuth 2.0 scopes, see OAuth 2.0 Scopes for
Google APIs .
OAuth verification
Using certain OAuth scopes might require that your app proceed through OAuth
App Verification Help Center .
Read the OAuth app FAQs to
determine when your app should go through verification and what type of
verification is required. See also the Drive Terms of
Service .
Types of required authentication
This section explains which types of authentication are required or supported,
and provides the supported scopes for each method of the
Google Workspace Events API.
For subscriptions to Chat events, the
Google Workspace Events API supports both user and app authentication to call
some of its methods. If an API method supports both credentials, the type of
credential used in the call affects the result that's returned. For example, if
you call the
subscriptions.list
method with user authentication, the API returns a list of subscriptions that
the authenticated user can access. If you use app authentication, the API
returns a list of subscriptions that the app can access. To learn more about
the types of Chat authentication, see Authenticate and authorize
Chat apps and Chat API
requests .
The following table displays which scopes and types of authentication are
required or supported for each Google Workspace Events API
method:
Method
User authentication required or supported
App authentication supported (Chat apps only)
Authorization scopes supported
Create a subscription
check
—
With user authentication, requires a supported scope for each event type :
chat.messages
chat.messages.readonly
chat.messages.reactions
chat.messages.reactions.readonly
chat.memberships
chat.memberships.readonly
chat.spaces
chat.spaces.readonly
drive.file
drive
drive.readonly
drive.metadata
drive.metadata.readonly
meetings.space.created
meetings.space.readonly
Developer Preview : With app authentication and administrator approval (Google Chat apps only), requires a supported scope for each event type :
chat.app.memberships
chat.app.memberships.readonly
chat.app.spaces
chat.app.spaces.readonly
chat.app.messages.readonly
Get a subscription
check
check
With user authentication, this method requires a scope that supports at least one event type for the subscription.
With app authentication (Chat apps only):
chat.bot
List subscriptions
check
check
With user authentication, this method requires a scope that supports at least one event type for the subscription.
With app authentication (Chat apps only):
chat.bot
Update a subscription
check
—
With user authentication, requires a supported scope for each event type :
chat.messages
chat.messages.readonly
chat.messages.reactions
chat.messages.reactions.readonly
chat.memberships
chat.memberships.readonly
chat.spaces
chat.spaces.readonly
drive.file
drive
drive.readonly
drive.metadata
drive.metadata.readonly
meetings.space.created
meetings.space.readonly
Developer Preview : With app authentication and administrator approval (Google Chat apps only), requires a supported scope for each event type :
chat.app.memberships
chat.app.memberships.readonly
chat.app.spaces
chat.app.spaces.readonly
chat.app.messages.readonly
Reactivate a subscription
check
—
With user authentication, requires a supported scope for each event type :
chat.messages
chat.messages.readonly
chat.messages.reactions
chat.messages.reactions.readonly
chat.memberships
chat.memberships.readonly
chat.spaces
chat.spaces.readonly
drive.file
drive
drive.readonly
drive.metadata
drive.metadata.readonly
meetings.space.created
meetings.space.readonly
With app authentication and administrator approval (Chat apps only), requires a supported scope for each event type :
chat.app.memberships
chat.app.memberships.readonly
chat.app.spaces
chat.app.spaces.readonly
chat.app.messages.readonly
Delete a subscription
check
check
With user authentication, this method requires a scope that supports at least one event type for the subscription.
With app authentication (Chat apps only):
chat.bot
Scopes by event type
When you call the Google Workspace Events API using user authentication, you
must specify one or more scopes that correspond to the event types of the
subscription.
The following table displays which authorization scopes are supported for each
event type:
Events
Event types
Authorization scopes supported
Chat
A message is
posted or updated.
google.workspace.chat.message.v1.created
google.workspace.chat.message.v1.updated
With User authentication :
chat.messages
chat.messages.readonly
With App authentication and administrator approval :
chat.app.messages.readonly
A reaction is added or deleted, or multiple reactions are changed.
google.workspace.chat.reaction.v1.created
google.workspace.chat.reaction.v1.deleted
google.workspace.chat.reaction.v1.batchChanged
chat.messages.reactions
chat.messages.reactions.readonly
chat.messages
chat.messages.readonly
A membership
is created, updated, or removed, or multiple memberships
are changed.
google.workspace.chat.membership.v1.created
google.workspace.chat.membership.v1.updated
google.workspace.chat.membership.v1.deleted
google.workspace.chat.membership.v1.batchChanged
With User authentication :
chat.memberships
chat.memberships.readonly
With App authentication and administrator approval :
chat.app.memberships
chat.app.memberships.readonly
A space is updated or
deleted.
google.workspace.chat.space.v1.updated
google.workspace.chat.space.v1.deleted
With User authentication :
chat.spaces
chat.spaces.readonly
With App authentication and administrator approval :
chat.app.spaces
chat.app.spaces.readonly
Drive
A file is
created, changed, moved, deleted, renamed, trashed, or removed from the
trash.
google.workspace.drive.file.v3.added
google.workspace.drive.file.v3.moved
google.workspace.drive.file.v3.contentChanged
google.workspace.drive.file.v3.deleted
google.workspace.drive.file.v3.renamed
google.workspace.drive.file.v3.trashed
google.workspace.drive.file.v3.untrashed
drive
drive.file
drive.readonly
drive.metadata
An Access Proposal
is created or resolved on a file.
google.workspace.drive.accessProposal.v3.created
google.workspace.drive.accessProposal.v3.resolved
drive
drive.file
drive.readonly
drive.metadata
drive.metadata
drive.metadata.readonly
An Approval
is cancelled, completed, created, reset, reviewers changed, or reviewers responded on a file.
google.workspace.drive.approval.v3.cancelled
google.workspace.drive.approval.v3.completed
google.workspace.drive.approval.v3.created
google.workspace.drive.approval.v3.reset
google.workspace.drive.approval.v3.reviewersChanged
google.workspace.drive.approval.v3.reviewerResponded
drive
drive.file
drive.readonly
drive.metadata
drive.metadata
drive.metadata.readonly
A Comment
is created, deleted, edited, reopened, or resolved on a file.
google.workspace.drive.comment.v3.created
google.workspace.drive.comment.v3.deleted
google.workspace.drive.comment.v3.edited
google.workspace.drive.comment.v3.reopened
google.workspace.drive.comment.v3.resolved
drive
drive.file
drive.readonly
drive.metadata
drive.metadata
drive.metadata.readonly
A Reply
is created, deleted, or edited on a file.
google.workspace.drive.reply.v3.created
google.workspace.drive.reply.v3.deleted
google.workspace.drive.reply.v3.edited
drive
drive.file
drive.readonly
drive.metadata
drive.metadata
drive.metadata.readonly
A Permission
is created, deleted, or edited on a file.
google.workspace.drive.permission.v3.created
google.workspace.drive.permission.v3.deleted
google.workspace.drive.permission.v3.edited
drive
drive.file
drive.readonly
drive.metadata
drive.metadata
drive.metadata.readonly
Meet
A conference starts or ends.
google.workspace.meet.conference.v2.started
google.workspace.meet.conference.v2.ended
meetings.space.created
meetings.space.readonly
A participant joins or
leaves a conference.
google.workspace.meet.participant.v2.joined
google.workspace.meet.participant.v2.left
meetings.space.created
meetings.space.readonly
A recording was generated.
google.workspace.meet.recording.v2.fileGenerated
meetings.space.created
meetings.space.readonly
A transcript was
generated.
google.workspace.meet.transcript.v2.fileGenerated
meetings.space.created
meetings.space.readonly
Related topics
Authentication overview for Chat
Authentication overview for Drive
Authentication overview for Meet
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],["To use the Google Workspace Events API, configure OAuth 2.0, select appropriate authorization scopes, and possibly undergo app verification. Scopes define the level of access to Google Workspace data, with categories like non-sensitive, sensitive, and restricted. Different API methods require specific scopes and support either user or app authentication. Available scopes for Google Chat and Google Meet events allow actions like viewing, creating, and deleting messages, reactions, memberships, spaces, and managing meeting spaces. Verification might be required depending on the chosen scopes.\n"]]
