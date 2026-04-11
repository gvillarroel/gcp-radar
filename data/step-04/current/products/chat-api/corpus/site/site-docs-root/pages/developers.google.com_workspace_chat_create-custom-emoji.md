---
title: "Create a custom emoji \_|\_ Google Chat \_|\_ Google for Developers"
url: https://developers.google.com/workspace/chat/create-custom-emoji
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/workspace/chat/overview
source_metadata:
  url: https://developers.google.com/workspace/chat/create-custom-emoji
  title: "Create a custom emoji \_|\_ Google Chat \_|\_ Google for Developers"
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
Create a custom emoji
Stay organized with collections
Save and categorize content based on your preferences.
This guide explains how to use the
create
method on the CustomEmoji resource of the Google Chat API to create a new
custom emoji in a Google Workspace organization.
Custom emojis are only available for Google Workspace accounts, and your
administrator must turn custom emoji on for your organization. For more
information, see Learn about custom emoji in Google Chat and
Manage custom emoji permissions .
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
Create a custom emoji
To create a custom emoji with
user authentication , pass the following in your request:
Specify the chat.customemojis authorization scope.
Call the CreateCustomEmoji method.
In the request body, provide a CustomEmoji resource, setting the emojiName (a unique identifier you choose for the emoji) and payload (image content you choose for the emoji).
The following example creates a custom emoji:
Node.js
chat/client-libraries/cloud/create-custom-emoji-user-cred.js
View on GitHub
import fs from 'node:fs' ;
import { createClientWithUserCredentials } from './authentication-utils.js' ;
const USER_AUTH_OAUTH_SCOPES = [
'https://www.googleapis.com/auth/chat.customemojis' ,
];
// This sample shows how to create custom emoji with user credential
async function main () {
// Create a client
const chatClient = await createClientWithUserCredentials (
USER_AUTH_OAUTH_SCOPES ,
);
// TODO(developer) Replace FILENAME here.
const filename = 'FILENAME' ;
// Read custom emoji file content into a base64 encoded string.
const fileContent = fs . readFileSync ( filename , { encoding : 'base64' });
// Initialize request argument(s)
const request = {
custom_emoji : {
// TODO(developer): Replace EMOJI_NAME here.
emoji_name : 'EMOJI_NAME' ,
payload : {
file_content : fileContent ,
filename ,
},
},
};
// Make the request
const response = await chatClient . createCustomEmoji ( request );
// Handle the response
console . log ( response );
}
await main ();
To run this sample, replace the following:
FILENAME : A filename of the image.
EMOJI_NAME : A unique name for your custom emoji, like :smiley-face: .
The Chat API returns an instance of
CustomEmoji that details the custom emoji that was created.
Related topics
Delete a custom emoji
Get details about a custom emoji
List custom emojis in an organization
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
