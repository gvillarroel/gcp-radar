---
title: "Delete a reaction from a message \_|\_ Google Chat \_|\_ Google for Developers"
url: https://developers.google.com/workspace/chat/delete-reactions
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/workspace/chat/overview
source_metadata:
  url: https://developers.google.com/workspace/chat/delete-reactions
  title: "Delete a reaction from a message \_|\_ Google Chat \_|\_ Google for Developers"
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
Delete a reaction from a message
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This guide explains how to delete reactions (emojis like 👍, 🚲, 🌞) from Google Chat messages using the delete() method.
Deleting a reaction does not delete the original message itself.
You'll need a Google Workspace account and Node.js to use the Google Chat API for deleting reactions.
The guide provides a code sample and instructions to set up your environment and authenticate for using the API.
To successfully delete a reaction, you need to provide the specific name of the reaction resource in your API request.
This guide explains how to use the
delete()
method on the Reaction resource of the Google Chat API to delete a reaction from
a message—like 👍, 🚲, and 🌞. Deleting a reaction doesn't delete the message.
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
Delete a reaction
To delete a reaction from a message, pass the following in your request:
Specify the chat.messages.reactions or the chat.messages authorization
scope.
Call the
DeleteReaction()
method, passing the name as the resource name of the reaction to delete.
The following example deletes the 😀 reaction from a message:
Node.js
chat/client-libraries/cloud/delete-reaction-user-cred.js
View on GitHub
import { createClientWithUserCredentials } from './authentication-utils.js' ;
const USER_AUTH_OAUTH_SCOPES = [
'https://www.googleapis.com/auth/chat.messages.reactions' ,
];
// This sample shows how to delete a reaction to a message with user credential
async function main () {
// Create a client
const chatClient = await createClientWithUserCredentials (
USER_AUTH_OAUTH_SCOPES ,
);
// Initialize request argument(s)
const request = {
// Replace SPACE_NAME, MESSAGE_NAME, and REACTION_NAME here
name : 'spaces/SPACE_NAME/messages/MESSAGE_NAME/reactions/REACTION_NAME' ,
};
// Make the request
const response = await chatClient . deleteReaction ( request );
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
REACTION_NAME : the ID from the reaction's
name .
You can obtain the ID by calling the
ListReactions()
method, or from the response body returned after creating a reaction
asynchronously with the Chat API.
If successful, the response body is empty, which indicates that the reaction is
deleted.
Related topics
Add a reaction to a message .
List reactions for a message .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["This guide details deleting reactions from Google Chat messages using the `delete()` method on the `Reaction` resource. Key steps include setting up a Google Workspace account, enabling the Google Chat API, and installing the Node.js Cloud Client Library. To delete a reaction, specify the `chat.messages.reactions` or `chat.messages` scope, and call `DeleteReaction()`, providing the reaction's `name`. The guide includes a Node.js code sample that demonstrates the deletion, requiring the space, message, and reaction IDs. A successful deletion results in an empty response.\n"]]
