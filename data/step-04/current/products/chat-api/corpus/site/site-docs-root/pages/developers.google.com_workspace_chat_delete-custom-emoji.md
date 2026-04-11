---
title: "Delete a custom emoji \_|\_ Google Chat \_|\_ Google for Developers"
url: https://developers.google.com/workspace/chat/delete-custom-emoji
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/workspace/chat/overview
source_metadata:
  url: https://developers.google.com/workspace/chat/delete-custom-emoji
  title: "Delete a custom emoji \_|\_ Google Chat \_|\_ Google for Developers"
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
Delete a custom emoji
Stay organized with collections
Save and categorize content based on your preferences.
This guide explains how to use the
delete
method on the
CustomEmoji
resource of the Google Chat API to delete a custom emoji in a Google Workspace organization.
By default, users can only delete custom emoji they created. Emoji
managers assigned by the
administrator can delete any custom emoji in the organization.
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
The code samples in this page use the gRPC API interface with the Google Cloud client
libraries. Alternatively, you can use the REST API interface. For more information about the gRPC
and REST interfaces, see
Google Chat API overview .
Delete a custom emoji
To delete a custom emoji with
user authentication , pass
the following in your request:
Specify the chat.customemojis authorization scope.
Call the
DeleteCustomEmoji()
method.
In the request body, set name to the resource name of the custom emoji to delete.
The following example deletes a custom emoji.
Node.js
chat/client-libraries/cloud/delete-custom-emoji-user-cred.js
View on GitHub
import { createClientWithUserCredentials } from './authentication-utils.js' ;
const USER_AUTH_OAUTH_SCOPES = [
'https://www.googleapis.com/auth/chat.customemojis' ,
];
// This sample shows how to delete a custom emoji with user credential
async function main () {
// Create a client
const chatClient = await createClientWithUserCredentials (
USER_AUTH_OAUTH_SCOPES ,
);
// Initialize request argument(s)
const request = {
// TODO(developer): Replace EMOJI_NAME here.
name : 'customEmojis/EMOJI_NAME' ,
};
// Make the request
const response = await chatClient . deleteCustomEmoji ( request );
// Handle the response
console . log ( response );
}
await main ();
To run this sample, replace the following:
EMOJI_NAME : the unique name for your custom emoji, in the
emoji_name field.
You can obtain the ID by calling the
ListCustomEmoji
method, or from the response body returned after creating a custom emoji
asynchronously with the Chat API.
Related topics
Create a custom emoji
Get details about a custom emoji
List custom emojis in an organization
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
