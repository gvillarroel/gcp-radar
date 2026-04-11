---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:26:07.656Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "Chat API data import mode"
feature_slug: "chat-api-data-import-mode"
latest_feature_date: "2023-06-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1"
  - "https://developers.google.com/workspace/chat/api/guides/auth"
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages"
keywords:
  - "attachments"
  - "importing"
  - "supports"
  - "mode"
  - "import"
  - "messages"
  - "chat"
  - "api"
---

# Chat API data import mode

Product: Chat API
Coverage: LOW

## Step 02 Summary

Chat API supports importing messages, attachments, reactions, memberships, and space entities from other messaging platforms through import-mode Chat spaces.

## Extended Definition

Chat API supports importing messages, attachments, reactions, memberships, and space entities from other messaging platforms through import-mode Chat spaces.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1)
- [https://developers.google.com/workspace/chat/api/guides/auth](https://developers.google.com/workspace/chat/api/guides/auth)
- [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages)

## Supporting Pages

### Package google.chat.v1 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1)
- Source ID: `site-docs-reference`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- Supports the following types of authentication : App authentication with the authorization scope: https://www.googleapis.com/auth/chat.bot User authentication with one of the following authorization scopes: https://www.googleapis.com/auth/chat.messages.create https://www.googleapis.com/auth/chat.messages https://www.googleapis.com/auth/chat.import (import mode spaces only) Chat attributes the message sender differently depending on the type of authentication that you use in your request.
- Supports the following types of authentication : App authentication with the authorization scope: https://www.googleapis.com/auth/chat.bot User authentication with one of the following authorization scopes: https://www.googleapis.com/auth/chat.messages https://www.googleapis.com/auth/chat.import (import mode spaces only) When using app authentication, requests can only delete messages created by the calling Chat app.
- Supports the following types of authentication : App authentication with the authorization scope: https://www.googleapis.com/auth/chat.bot User authentication with one of the following authorization scopes: https://www.googleapis.com/auth/chat.messages https://www.googleapis.com/auth/chat.import (import mode spaces only) When using app authentication, requests can only update messages created by the calling Chat app.
- Supports the following types of authentication : App authentication with one of the following authorization scopes: https://www.googleapis.com/auth/chat.bot https://www.googleapis.com/auth/chat.app.memberships (requires administrator approval ) User authentication with one of the following authorization scopes: https://www.googleapis.com/auth/chat.memberships.readonly https://www.googleapis.com/auth/chat.memberships https://www.googleapis.com/auth/chat.import (import mode spaces only) User authentication grants administrator privileges when an administrator account authenticates, use admin access is true , and one of the following authorization scopes is used: https://www.googleapis.com/auth/chat.admin.memberships.readonly https://www.googleapis.com/auth/chat.admin.memberships Authorization scopes Requires one of the following OAuth scopes: https://www.googleapis.com/auth/chat.admin.memberships https://www.googleapis.com/auth/chat.admin.memberships.readonly https://www.googleapis.com/auth/chat.app.memberships https://www.googleapis.com/auth/chat.bot https://www.googleapis.com/auth/chat.import https://www.googleapis.com/auth/chat.memberships https://www.googleapis.com/auth/chat.memberships.readonly For more information, see the Authorization guide .

### "Authenticate and authorize Chat apps and Google Chat API requests \_|\_\

- URL: [https://developers.google.com/workspace/chat/api/guides/auth](https://developers.google.com/workspace/chat/api/guides/auth)
- Source ID: `site-iam-reference`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- For asynchronous Chat API calls The following table lists the Chat API methods and their supported authorization scopes: Method User authentication supported App authentication supported Authorization scopes supported Spaces Create a space check check With User authentication : chat.spaces.create chat.spaces chat.import With App authentication and administrator approval : chat.app.spaces.create chat.app.spaces Set up a space check — With User authentication : chat.spaces.create chat.spaces Get a space check check With User authentication : chat.spaces.readonly chat.spaces With User authentication using administrator privileges : chat.admin.spaces.readonly With App authentication : chat.bot With App authentication and administrator approval : chat.app.spaces List spaces check check With User authentication : chat.spaces.readonly chat.spaces With App authentication : chat.bot Search spaces check — With User authentication using administrator privileges : chat.admin.spaces.readonly Update a space check check With User authentication : chat.spaces chat.import With User authentication using administrator privileges : chat.admin.spaces With App authentication and administrator approval : chat.app.spaces Delete a space check check With User authentication : chat.delete chat.import With User authentication using administrator privileges : chat.admin.delete With App authentication and administrator approval : chat.app.delete Complete the import process for a space check — With User authentication : chat.import Find a direct message check check With User authentication : chat.spaces.readonly chat.spaces With App authentication : chat.bot Members Create a member check check With User authentication : chat.memberships chat.memberships.app chat.import With User authentication using administrator privileges : chat.admin.memberships With App authentication and administrator approval : chat.app.memberships Get a member check check With User authentication : chat.memberships.readonly chat.memberships With App authentication : chat.bot With User authentication using administrator privileges : chat.admin.memberships.readonly List members check check With User authentication : chat.memberships.readonly chat.memberships chat.import With App authentication : chat.bot With User authentication using administrator privileges : chat.admin.memberships.readonly Delete a member check check With User authentication : chat.memberships chat.memberships.app chat.import With User authentication using administrator privileges : chat.admin.memberships With App authentication and administrator approval : chat.app.memberships Update a member check check With User authentication : chat.memberships chat.import With User authentication using administrator privileges : chat.admin.memberships With App authentication and administrator approval : chat.app.memberships Messages Create a message check check With User authentication : chat.messages.create chat.messages chat.import With App authentication : chat.bot Get a message check check With User authentication : chat.messages.readonly chat.messages With App authentication : chat.bot With App authentication and administrator approval : chat.app.messages.readonly List messages check check With User authentication : chat.messages.readonly chat.messages chat.import With App authentication and administrator approval : chat.app.messages.readonly Update a message check check With User authentication : chat.messages chat.import With App authentication : chat.bot Delete a message check check With User authentication : chat.messages chat.import With App authentication : chat.bot Update cards in a message Developer Preview: Available as part of the Google Workspace Developer Preview Program , which grants early access to certain features. — check With App authentication : chat.bot Reactions Create a reaction check — With User authentication : chat.messages.reactions.create chat.messages.reactions chat.messages chat.import List reactions check — With User authentication : chat.messages.reactions.readonly chat.messages.reactions chat.messages.readonly chat.messages Delete a reaction check — With User authentication : chat.messages.reactions chat.messages chat.import Custom emoji Create a custom emoji check — With User authentication : chat.customemojis Delete a custom emoji check — With User authentication : chat.customemojis Get a custom emoji check — With User authentication : chat.customemojis chat.customemojis.readonly List custom emoji check — With User authentication : chat.customemojis chat.customemojis.readonly Media & attachments Upload media as a file attachment check — With User authentication : chat.messages.create chat.messages chat.import Download media check check With User authentication : chat.messages.readonly chat.messages With App authentication : chat.bot Get a message attachment — check With App authentication : chat.bot User read states Get a user's space read state check — With User authentication : chat.users.readstate chat.users.readstate.readonly Update a user's space read state check — With User authentication : chat.users.readstate Get a user's thread read state check — With User authentication : chat.users.readstate chat.users.readstate.readonly User space settings Get a user's space notification setting check — With User authentication : chat.users.spacesettings Update a user's space notification setting check — With User authentication : chat.users.spacesettings Space events Get space events check — With User authentication , you must use a scope based on the event type : For events about messages: chat.messages chat.messages.readonly For events about reactions: chat.messages.reactions chat.messages.reactions.readonly chat.messages chat.messages.readonly For events about memberships: chat.memberships chat.memberships.readonly For events about the space: chat.spaces chat.spaces.readonly List space events check — With User authentication , you must use a scope for each event type included in the request: For events about messages: chat.messages chat.messages.readonly For events about reactions: chat.messages.reactions chat.messages.reactions.readonly chat.messages chat.messages.readonly For events about memberships: chat.memberships chat.memberships.readonly For events about the space: chat.spaces chat.spaces.readonly Sections Create a section check — With User authentication : chat.users.sections Delete a section check — With User authentication : chat.users.sections List sections check — With User authentication : chat.users.sections chat.users.sections.readonly Update a section check — With User authentication : chat.users.sections Position a section check — With User authentication : chat.users.sections Section Items Move a section item check — With User authentication : chat.users.sections List section items check — With User authentication : chat.users.sections chat.users.sections.readonly For Chat app interaction events The following table lists common ways that users interact with Chat apps and whether authentication is required or supported: Scenario No authentication required User authentication supported App authentication supported Receive messages from: Chat app interaction events check — — Apps Script callbacks check — — Google Cloud Pub/Sub — — check Respond to messages: Synchronously, using a Chat app interaction event check — — Synchronously, using an Apps Script callback return value check — — Send new messages: With incoming webhooks check — — Related topics For an overview of authentication and authorization in Google Workspace, see Learn about authentication & authorization .
- For more information, see Authorize Chat apps to import data https://www.googleapis.com/auth/chat.messages View, compose, send, update, and delete messages, and add, view, and delete reactions to messages. https://www.googleapis.com/auth/chat.messages.readonly View messages and reactions in Chat. https://www.googleapis.com/auth/chat.app.messages.readonly View messages and reactions in Chat as a Chat app.
- Restricted scopes Scope code Description https://www.googleapis.com/auth/chat.delete Delete conversations and spaces, and remove access to associated files in Chat. https://www.googleapis.com/auth/chat.import Import spaces, messages, and memberships into Chat.
- Sensitive scopes Scope code Description https://www.googleapis.com/auth/chat.spaces Create conversations and spaces and see or edit metadata (including history settings and access settings) in Chat. https://www.googleapis.com/auth/chat.spaces.create Create new conversations in Chat. https://www.googleapis.com/auth/chat.spaces.readonly View chat and spaces in Chat. https://www.googleapis.com/auth/chat.memberships View, add, update, and remove members from conversations in Chat. https://www.googleapis.com/auth/chat.memberships.app Add and remove itself from conversations in Google Chat. https://www.googleapis.com/auth/chat.memberships.readonly View members in Chat conversations. https://www.googleapis.com/auth/chat.messages.create Compose and send messages in Chat. https://www.googleapis.com/auth/chat.messages.reactions View, add, and delete reactions to messages in Chat. https://www.googleapis.com/auth/chat.messages.reactions.create Add reactions to a message in Chat. https://www.googleapis.com/auth/chat.messages.reactions.readonly View reactions to a message in Chat. https://www.googleapis.com/auth/chat.users.readstate View and modify last read time for Chat conversations. https://www.googleapis.com/auth/chat.users.readstate.readonly View last read time for Chat conversations. https://www.googleapis.com/auth/chat.admin.spaces.readonly View chat and spaces owned by the administrator's domain in Chat. https://www.googleapis.com/auth/chat.admin.spaces View or edit chat and spaces owned by the administrator's domain in Chat. https://www.googleapis.com/auth/chat.admin.memberships.readonly View members and managers in conversations owned by the administrator's domain in Chat. https://www.googleapis.com/auth/chat.admin.memberships View, add, update and remove members and managers in conversations owned by the administrator's domain in Chat. https://www.googleapis.com/auth/chat.app.spaces Create conversations and spaces and see or update metadata (including history settings and access settings) in Chat as a Chat app.

### REST Resource: spaces.messages \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages)
- Source ID: `site-docs-root-2`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- To include this field in your request, you must call the Chat API using app authentication and omit the following: Attachments Accessory widgets For details, see Send a message privately . deletionMetadata object ( DeletionMetadata ) Output only.
- Page Summary outlined flag Google Chat messages are the fundamental units of communication within spaces, containing rich content like text, cards, and attachments.
- Developers can leverage the Chat API's methods to programmatically create, update, and manage messages and their interactions.
- The API only supports reading messages with GMAIL MESSAGE rich links.

