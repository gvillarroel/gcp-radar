---
title: "Develop with Google Chat \_|\_ Google for Developers"
url: https://developers.google.com/workspace/chat/api-overview
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/workspace/chat/api/reference
source_metadata:
  url: https://developers.google.com/workspace/chat/api-overview
  title: "Develop with Google Chat \_|\_ Google for Developers"
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
Develop with Google Chat
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Google Chat apps integrate services directly into chats, enabling users to access information and take action without leaving the conversation.
These apps support various functionalities, including workflow management, data collection, and interactive elements like dialogs and slash commands.
Choose from interactive, non-interactive, or event-driven architectures to build apps that cater to your specific needs and use cases.
Google Chat apps can be built using various platforms like AppSheet, Google Apps Script, and Dialogflow.
Access to user data beyond basic identity requires authentication and user consent, ensuring privacy and security.
This page provides an overview of the Google Chat API and Google Chat apps.
Google Chat API overview
The Chat API consists of
gRPC services or REST resources and methods
that grant access to Chat, including spaces, space members,
messages, message reactions, message attachments, space events, and user read
states.
Concepts
The following section defines the services, resources, and methods for the
Chat API:
Spaces
Spaces are places where people and apps can converse and share files. There
are several types of spaces. Direct messages (DMs) are 1:1 conversations
between two users or a user and a Chat app. Group
chats are conversations between three or more users and
Chat apps. Named spaces are persistent places where people send
messages, share files, and collaborate.
Resource reference:
RPC reference
REST reference
For example usage, see:
Create a space
Set up a space
Get a space
List spaces
Update a space
Delete a space
Find a direct message (DM)
Members
Members are users and Chat apps that have joined or are
invited to a space.
Resource reference:
RPC reference
REST reference
For example usage, see:
Create a membership
Get a membership
List memberships
Update a membership
Delete a membership
Messages
Messages include
text
and
card
communications posted in spaces. Messages can have files attached to them.
People can react to messages by appending emoji to them.
Resource reference:
RPC reference
REST reference
For example usage, see:
Create a message
Get a message
List messages
Update a message
Delete a message
Reactions
Reactions represent the emoji people use to react to a message, such as
👍, 🚲, and 🌞.
Resource reference:
RPC reference
REST reference
For example usage, see:
Create a reaction
List reactions
Delete a reaction
Custom emoji
Custom emoji represent custom emoji created and shared within the
organization in Google Chat. Custom emoji can be included in the content of
a message or used to react to a message.
Resource reference:
RPC reference
REST reference
For example usage, see:
Create a custom emoji
Delete a custom emoji
Get details about a custom emoji
List custom emojis in an organization
Sections
Sections are ways for users to group their conversations and customize the
list of spaces displayed in the Google Chat navigation panel. There are
predefined system sections and user-defined custom sections.
Resource reference:
RPC reference
REST reference
For example usage, see:
Create a section
Update a section
Delete a section
Change the position of a section
List sections
List spaces in a section
Move a space to a different section
Media and attachments
Media represents a file uploaded to Google Chat, like images, videos, and
documents.
Media resource reference (Unavailable in RPC):
REST reference
Attachments are instances of media (files) attached to messages.
Resource reference:
RPC reference
REST reference
For example usage, see:
Upload media as an attachment
Download media as an attachment
Get an attachment
Space events
Space events represent changes to a space or its
child resources, including its members, messages, and reactions.
Resource reference:
RPC reference
REST reference
For example usage, see:
Get space read state
Update space read state
Get thread read state
User read states
User read states are singleton resources that represent details about a
specified user's last read message in a Google Chat space or a message
thread.
Space read state resource reference:
RPC reference
REST reference
Thread read state resource reference:
RPC reference
REST reference
For example usage, see:
Get space read state
Update space read state
Get thread read state
User space notification settings
User space notification settings are singleton resources that represent a
specified user notification settings in a Google Chat space.
Resource reference:
RPC reference
REST reference
Authentication
Calling the Chat API requires authentication. Each
Chat API method requires either
user authentication
(to perform actions or access
data on behalf of a user) or
app authentication
(to perform actions or access data as a Chat app). Some
methods support both user authentication and app authentication.
To learn more about authentication in Chat, see
Authentication overview .
Client libraries
The recommended way for most developers to call the Google Chat API
is with our officially supported
Cloud Client Libraries
for your preferred language, like Python, Java, or Node.js.
If you're coding with Google Apps Script, use the
Advanced Chat service
instead of installing a client library.
Build Chat apps
The Chat API lets you build Google Chat apps that bring your
services and resources right into Google Chat. You can build
Chat apps to do any of the following:
Retrieve information based on structured or free text queries entered by
the user.
Generate incident reports or other artifacts, using information provided by
the user.
Enhance team collaboration, such as providing "team memory" or scheduling
resources.
You can design your Chat app using several different
architecture styles, including the following:
Interactive apps : Respond to user interaction, such as @mentions or slash
commands, and present information or guide users through a workflow with
cards and dialogs.
Command-line apps or webhooks : Send proactive messages, such as alarms
or notifications, from another system into a space. Users can't directly
interact with this type of app.
Event-driven apps : Subscribe to and react to activity in a
Chat space, such as a new member joining. In response to an
event, the app can send a message or perform another action.
For details about designing your Chat app, see
Choose a Google Chat app architecture .
Related topics
Explore Google Chat app samples .
Build interactive Google Chat apps .
Choose a Google Chat app architecture .
Want to see the Google Chat API in action?
The Google Workspace Developers channel offers videos about tips,
tricks, and the latest features.
Subscribe now
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["Google Chat apps integrate services directly into conversations, allowing users to access information and perform actions without leaving the chat. These apps can send text or card messages within spaces or direct messages. They can be interactive, responding to mentions and commands, or non-interactive, sending messages without user interaction. Apps can retrieve information, file tickets, and coordinate team efforts. Developers can build these apps using diverse platforms, manage deployments, and publish them on the Google Workspace Marketplace.\n"]]
