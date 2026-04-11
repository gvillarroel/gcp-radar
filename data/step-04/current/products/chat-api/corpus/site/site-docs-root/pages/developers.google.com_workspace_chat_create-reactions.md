---
title: "Add a reaction to a message \_|\_ Google Chat \_|\_ Google for Developers"
url: https://developers.google.com/workspace/chat/create-reactions
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/workspace/chat/overview
source_metadata:
  url: https://developers.google.com/workspace/chat/create-reactions
  title: "Add a reaction to a message \_|\_ Google Chat \_|\_ Google for Developers"
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
Add a reaction to a message
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This guide demonstrates how to add emoji reactions (👍, 🚲, 🌞) to Google Chat messages using the create() method of the Google Chat API.
It requires a Google Workspace account, a configured Google Cloud project with the Chat API enabled, and the Node.js Cloud Client Library.
To add a reaction, call the CreateReaction() method, providing the message's resource name and the desired emoji's unicode representation.
A sample Node.js code snippet is included, illustrating the process of creating a reaction using user credentials.
You need to replace placeholders for space and message names within the code with your specific values to execute the sample successfully.
This guide explains how to use the
create()
method on the Reaction resource of the Google Chat API to add a reaction to a
message—like 👍, 🚲, and 🌞.
The
Reaction resource
represents an emoji that people can use to react to a message, such as 👍, 🚲,
and 🌞.
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
Create OAuth client ID credentials for a desktop application. To run the sample in this
guide, save the credentials as a JSON file named credentials.json to your
local directory.
For guidance, complete the steps for setting up your environment in this
quickstart .
Choose an authorization scope that supports user authentication.
The code samples in this page use the gRPC API interface with the Google Cloud client
libraries. Alternatively, you can use the REST API interface. For more information about the gRPC
and REST interfaces, see
Google Chat API overview .
Add a reaction to a message
To create a reaction to a message, pass the following in your
request:
Specify the chat.messages.reactions.create , chat.messages.reactions , or
chat.messages authorization scope.
Call the
CreateReaction()
method, passing the parent as the resource name of the message to react
to, and the reaction as a an instance of
Reaction
in which the unicode field is a standard emoji represented by a unicode
string.
The following example reacts to a message with the 😀 emoji:
Node.js
chat/client-libraries/cloud/create-reaction-user-cred.js
View on GitHub
import { createClientWithUserCredentials } from './authentication-utils.js' ;
const USER_AUTH_OAUTH_SCOPES = [
'https://www.googleapis.com/auth/chat.messages.reactions.create' ,
];
// This sample shows how to create reaction to a message with user credential
async function main () {
// Create a client
const chatClient = await createClientWithUserCredentials (
USER_AUTH_OAUTH_SCOPES ,
);
// Initialize request argument(s)
const request = {
// Replace SPACE_NAME and MESSAGE_NAME here.
parent : 'spaces/SPACE_NAME/messages/MESSAGE_NAME' ,
reaction : {
// A standard emoji represented by a unicode string.
emoji : { unicode : '😀' },
},
};
// Make the request
const response = await chatClient . createReaction ( request );
// Handle the response
console . log ( response );
}
await main ();
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
The Chat API returns an instance of
Reaction
that details the reaction that's created.
Related topics
Delete a reaction from a message .
List reactions for a message .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["To add a reaction to a message using the Google Chat API, utilize the `CreateReaction()` method. Specify the message's resource name as the `parent` and provide a `Reaction` instance with a Unicode emoji string in the `unicode` field. Ensure you have the `chat.messages.reactions.create`, `chat.messages.reactions`, or `chat.messages` authorization scope. You must have a Google Workspace account, a configured Google Cloud project, and have set up the Node.js environment, including OAuth client ID credentials. The API returns the created `Reaction` details.\n"]]
