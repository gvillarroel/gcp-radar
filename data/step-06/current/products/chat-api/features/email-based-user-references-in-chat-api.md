---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:26:07.653Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "Email-based user references in Chat API"
feature_slug: "email-based-user-references-in-chat-api"
latest_feature_date: "2023-07-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1"
  - "https://developers.google.com/workspace/chat/create-messages"
  - "https://developers.google.com/workspace/chat/create-members"
keywords:
  - "references"
  - "email"
  - "authenticated"
  - "based"
  - "user"
  - "chat"
  - "api"
  - "in"
---

# Email-based user references in Chat API

Product: Chat API
Coverage: LOW

## Step 02 Summary

User-authenticated Chat apps can reference users by email for space and membership operations and use email addresses for @mentions.

## Extended Definition

User-authenticated Chat apps can reference users by email for space and membership operations and use email addresses for @mentions.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1)
- [https://developers.google.com/workspace/chat/create-messages](https://developers.google.com/workspace/chat/create-messages)
- [https://developers.google.com/workspace/chat/create-members](https://developers.google.com/workspace/chat/create-members)

## Supporting Pages

### Package google.chat.v1 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1)
- Source ID: `site-docs-reference`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- Supports the following types of authentication with an authorization scope appropriate for reading the requested data: App authentication with administrator approval with one of the following authorization scopes: https://www.googleapis.com/auth/chat.app.spaces https://www.googleapis.com/auth/chat.app.spaces.readonly https://www.googleapis.com/auth/chat.app.messages.readonly https://www.googleapis.com/auth/chat.app.memberships https://www.googleapis.com/auth/chat.app.memberships.readonly User authentication with one of the following authorization scopes: https://www.googleapis.com/auth/chat.spaces.readonly https://www.googleapis.com/auth/chat.spaces https://www.googleapis.com/auth/chat.messages.readonly https://www.googleapis.com/auth/chat.messages https://www.googleapis.com/auth/chat.messages.reactions.readonly https://www.googleapis.com/auth/chat.messages.reactions https://www.googleapis.com/auth/chat.memberships.readonly https://www.googleapis.com/auth/chat.memberships To get an event, the authenticated caller must be a member of the space.
- Supports the following types of authentication with an authorization scope appropriate for reading the requested data: App authentication with administrator approval with one of the following authorization scopes: https://www.googleapis.com/auth/chat.app.spaces https://www.googleapis.com/auth/chat.app.spaces.readonly https://www.googleapis.com/auth/chat.app.messages.readonly https://www.googleapis.com/auth/chat.app.memberships https://www.googleapis.com/auth/chat.app.memberships.readonly User authentication with one of the following authorization scopes: https://www.googleapis.com/auth/chat.spaces.readonly https://www.googleapis.com/auth/chat.spaces https://www.googleapis.com/auth/chat.messages.readonly https://www.googleapis.com/auth/chat.messages https://www.googleapis.com/auth/chat.messages.reactions.readonly https://www.googleapis.com/auth/chat.messages.reactions https://www.googleapis.com/auth/chat.memberships.readonly https://www.googleapis.com/auth/chat.memberships To list events, the authenticated caller must be a member of the space.
- For example, users/123456789 in Chat API represents the same person as the 123456789 Person profile ID in People API. the id for a user in the Admin SDK Directory API. the user's email address can be used as an alias for {user} in API requests.
- Supports the following types of authentication : App authentication with one of the following authorization scopes: https://www.googleapis.com/auth/chat.bot https://www.googleapis.com/auth/chat.app.memberships (requires administrator approval ) User authentication with one of the following authorization scopes: https://www.googleapis.com/auth/chat.memberships.readonly https://www.googleapis.com/auth/chat.memberships https://www.googleapis.com/auth/chat.import (import mode spaces only) User authentication grants administrator privileges when an administrator account authenticates, use admin access is true , and one of the following authorization scopes is used: https://www.googleapis.com/auth/chat.admin.memberships.readonly https://www.googleapis.com/auth/chat.admin.memberships Authorization scopes Requires one of the following OAuth scopes: https://www.googleapis.com/auth/chat.admin.memberships https://www.googleapis.com/auth/chat.admin.memberships.readonly https://www.googleapis.com/auth/chat.app.memberships https://www.googleapis.com/auth/chat.bot https://www.googleapis.com/auth/chat.import https://www.googleapis.com/auth/chat.memberships https://www.googleapis.com/auth/chat.memberships.readonly For more information, see the Authorization guide .

### Send a message using the Google Chat API \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/create-messages](https://developers.google.com/workspace/chat/create-messages)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- The following code shows an example of how a Chat app can send a text message with an ID to a given space on behalf of an authenticated user: Node.js chat/client-libraries/cloud/create-message-user-cred-message-id.js View on GitHub import { createClientWithUserCredentials } from './authentication-utils.js' ; const USER AUTH OAUTH SCOPES = [ 'https://www.googleapis.com/auth/chat.messages.create' , ]; // This sample shows how to create a message with user credentials and a custom // message id async function main () { // Create a client const chatClient = await createClientWithUserCredentials ( USER AUTH OAUTH SCOPES , ); // Initialize request argument(s) const request = { // Replace SPACE NAME here. parent : 'spaces/SPACE NAME' , // Message id lets chat apps get, update or delete a message without needing // to store the system assigned ID in the message's resource name messageId : 'client-MESSAGE-ID' , message : { text : 'Hello with user credential!' }, }; // Make the request const response = await chatClient . createMessage ( request ); // Handle the response console . log ( response ); } await main (); Python chat/client-libraries/cloud/create message user cred message id.py View on GitHub from authentication utils import create client with user credentials from google.apps import chat v1 as google chat SCOPES = [ "https://www.googleapis.com/auth/chat.messages.create" ] This sample shows how to create message with user credential with message id def create message with user cred message id (): Create a client client = create client with user credentials ( SCOPES ) Initialize request argument(s) request = google chat .
- The following code shows an example of how a Chat app can send a text message in a given space on behalf of an authenticated user: Node.js chat/client-libraries/cloud/create-message-user-cred.js View on GitHub import { createClientWithUserCredentials } from './authentication-utils.js' ; const USER AUTH OAUTH SCOPES = [ 'https://www.googleapis.com/auth/chat.messages.create' , ]; // This sample shows how to create message with user credential async function main () { // Create a client const chatClient = await createClientWithUserCredentials ( USER AUTH OAUTH SCOPES , ); // Initialize request argument(s) const request = { // Replace SPACE NAME here. parent : 'spaces/SPACE NAME' , message : { text : '👋🌎 Hello world!' + 'Text messages can contain things like:\n\n' + ' Hyperlinks 🔗\n' + ' Emojis 😄🎉\n' + ' Mentions of other Chat users @ \n\n' + 'For details, see the ' + '<https://developers.google.com/workspace/chat/format-messages' + ' Chat API developer documentation>.' , }, }; // Make the request const response = await chatClient . createMessage ( request ); // Handle the response console . log ( response ); } await main (); Python chat/client-libraries/cloud/create message user cred.py View on GitHub from authentication utils import create client with user credentials from google.apps import chat v1 as google chat SCOPES = [ "https://www.googleapis.com/auth/chat.messages.create" ] def create message with user cred (): Create a client client = create client with user credentials ( SCOPES ) Initialize request argument(s) request = google chat .
- The following code shows an example of how a Chat app can send a text message that starts or replies to a given thread identified by key of a given space on behalf of an authenticated user: Node.js chat/client-libraries/cloud/create-message-user-cred-thread-key.js View on GitHub import { protos } from '@google-apps/chat' ; import { createClientWithUserCredentials } from './authentication-utils.js' ; const USER AUTH OAUTH SCOPES = [ 'https://www.googleapis.com/auth/chat.messages.create' , ]; // This sample shows how to create message with user credential with thread key async function main () { // Create a client const chatClient = await createClientWithUserCredentials ( USER AUTH OAUTH SCOPES , ); // Initialize request argument(s) const request = { // Replace SPACE NAME here. parent : 'spaces/SPACE NAME' , // Creates the message as a reply to the thread specified by thread key // If it fails, the message starts a new thread instead messageReplyOption : protos . google . chat . v1 .
- Create access credentials based on how you want to authenticate in your Google Chat API request: To authenticate as a Chat user, create OAuth client ID credentials and save the credentials as a JSON file named credentials.json to your local directory.

### "Invite or add a user, Google Group, or Google Chat app to a space \_|\_\

- URL: [https://developers.google.com/workspace/chat/create-members](https://developers.google.com/workspace/chat/create-members)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create access credentials based on how you want to authenticate in your Google Chat API request: To authenticate as a Chat user, create OAuth client ID credentials and save the credentials as a JSON file named credentials.json to your local directory.
- Create access credentials based on how you want to authenticate in your Google Chat API request: To authenticate as a Chat user, create OAuth client ID credentials and save the credentials as a JSON file named credentials.json to your local directory.
- Create access credentials based on how you want to authenticate in your Google Chat API request: To authenticate as a Chat user, create OAuth client ID credentials and save the credentials as a JSON file named credentials.json to your local directory.
- Home Google Workspace Google Chat Guides Send feedback Invite or add a user, Google Group, or Google Chat app to a space Stay organized with collections Save and categorize content based on your preferences.

