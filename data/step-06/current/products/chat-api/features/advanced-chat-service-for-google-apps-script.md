---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:26:07.647Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "Advanced Chat Service for Google Apps Script"
feature_slug: "advanced-chat-service-for-google-apps-script"
latest_feature_date: "2023-11-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/chat/api/guides/quickstart/apps-script"
  - "https://developers.google.com/workspace/chat/quickstart/apps-script-app"
  - "https://developers.google.com/workspace/chat/authenticate-authorize"
keywords:
  - "advanced"
  - "script"
  - "apps"
  - "the"
  - "chat"
  - "api"
  - "can"
  - "for"
---

# Advanced Chat Service for Google Apps Script

Product: Chat API
Coverage: LOW

## Step 02 Summary

The Chat API can now be invoked from Google Apps Script through the Advanced Chat Service.

## Extended Definition

The Chat API can now be invoked from Google Apps Script through the Advanced Chat Service.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/chat/api/guides/quickstart/apps-script](https://developers.google.com/workspace/chat/api/guides/quickstart/apps-script)
- [https://developers.google.com/workspace/chat/quickstart/apps-script-app](https://developers.google.com/workspace/chat/quickstart/apps-script-app)
- [https://developers.google.com/workspace/chat/authenticate-authorize](https://developers.google.com/workspace/chat/authenticate-authorize)

## Supporting Pages

### Google Apps Script quickstart \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/guides/quickstart/apps-script](https://developers.google.com/workspace/chat/api/guides/quickstart/apps-script)
- Source ID: `site-docs-root`
- Final score: 254
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["This document outlines how to create and run a Google Apps Script to interact with the Google Chat API.
- Click Editor code , select the file appscript.json , and replace the contents with the following code: chat/quickstart/appsscript.json View on GitHub { "timeZone" : "America/New York" , "exceptionLogging" : "STACKDRIVER" , "runtimeVersion" : "V8" , "oauthScopes" : [ "https://www.googleapis.com/auth/chat.spaces.readonly" ], "chat" : {}, "dependencies" : { "enabledAdvancedServices" : [ { "userSymbol" : "Chat" , "version" : "v1" , "serviceId" : "chat" } ] } } Run the sample In the Apps Script editor, click Run .
- Replace the contents of the script editor with the following code: chat/quickstart/Code.gs View on GitHub / This quickstart sample shows how to list spaces with user credential It relies on the OAuth2 scope 'https://www.googleapis.com/auth/chat.spaces.readonly' referenced in the manifest file (appsscript.json). / function listSpaces () { // Initialize request argument(s) // Filter spaces by space type (SPACE or GROUP CHAT or DIRECT MESSAGE) const filter = 'space type = "SPACE"' ; // Iterate through the response pages using page tokens let responsePage ; let pageToken = null ; do { // Request response pages responsePage = Chat .
- Next steps Google Apps Script Advanced Services documentation Try the Google Workspace APIs in the APIs explorer Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Build a Google Chat app with Google Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/quickstart/apps-script-app](https://developers.google.com/workspace/chat/quickstart/apps-script-app)
- Source ID: `site-docs-root`
- Final score: 240
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Key actions include: setting up a Google Cloud environment and enabling the Chat API; configuring the OAuth consent screen; creating an Apps Script project from a template and linking it to the Cloud project; publishing the app with a deployment ID; and testing the app by sending a direct message.
- The following diagram shows the architecture and messaging pattern: In the preceding diagram, a user interacting with an Apps Script Chat app has the following flow of information: A user sends a message to a Chat app, either in a direct message or in a Chat space.
- Although an error message might not display in the Chat UI, descriptive error messages and log data are available to help you fix errors when error logging for Chat apps is turned on.
- Multiple cards can be strung together sequentially, which helps users complete multi-step processes, like filling in form data. code Codelab: Ready to build a more advanced Chat app?

### "Authenticate and authorize Chat apps and Google Chat API requests \_|\_\

- URL: [https://developers.google.com/workspace/chat/authenticate-authorize](https://developers.google.com/workspace/chat/authenticate-authorize)
- Source ID: `site-docs-root`
- Final score: 236
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For asynchronous Chat API calls The following table lists the Chat API methods and their supported authorization scopes: Method User authentication supported App authentication supported Authorization scopes supported Spaces Create a space check check With User authentication : chat.spaces.create chat.spaces chat.import With App authentication and administrator approval : chat.app.spaces.create chat.app.spaces Set up a space check — With User authentication : chat.spaces.create chat.spaces Get a space check check With User authentication : chat.spaces.readonly chat.spaces With User authentication using administrator privileges : chat.admin.spaces.readonly With App authentication : chat.bot With App authentication and administrator approval : chat.app.spaces List spaces check check With User authentication : chat.spaces.readonly chat.spaces With App authentication : chat.bot Search spaces check — With User authentication using administrator privileges : chat.admin.spaces.readonly Update a space check check With User authentication : chat.spaces chat.import With User authentication using administrator privileges : chat.admin.spaces With App authentication and administrator approval : chat.app.spaces Delete a space check check With User authentication : chat.delete chat.import With User authentication using administrator privileges : chat.admin.delete With App authentication and administrator approval : chat.app.delete Complete the import process for a space check — With User authentication : chat.import Find a direct message check check With User authentication : chat.spaces.readonly chat.spaces With App authentication : chat.bot Members Create a member check check With User authentication : chat.memberships chat.memberships.app chat.import With User authentication using administrator privileges : chat.admin.memberships With App authentication and administrator approval : chat.app.memberships Get a member check check With User authentication : chat.memberships.readonly chat.memberships With App authentication : chat.bot With User authentication using administrator privileges : chat.admin.memberships.readonly List members check check With User authentication : chat.memberships.readonly chat.memberships chat.import With App authentication : chat.bot With User authentication using administrator privileges : chat.admin.memberships.readonly Delete a member check check With User authentication : chat.memberships chat.memberships.app chat.import With User authentication using administrator privileges : chat.admin.memberships With App authentication and administrator approval : chat.app.memberships Update a member check check With User authentication : chat.memberships chat.import With User authentication using administrator privileges : chat.admin.memberships With App authentication and administrator approval : chat.app.memberships Messages Create a message check check With User authentication : chat.messages.create chat.messages chat.import With App authentication : chat.bot Get a message check check With User authentication : chat.messages.readonly chat.messages With App authentication : chat.bot With App authentication and administrator approval : chat.app.messages.readonly List messages check check With User authentication : chat.messages.readonly chat.messages chat.import With App authentication and administrator approval : chat.app.messages.readonly Update a message check check With User authentication : chat.messages chat.import With App authentication : chat.bot Delete a message check check With User authentication : chat.messages chat.import With App authentication : chat.bot Update cards in a message Developer Preview: Available as part of the Google Workspace Developer Preview Program , which grants early access to certain features. — check With App authentication : chat.bot Reactions Create a reaction check — With User authentication : chat.messages.reactions.create chat.messages.reactions chat.messages chat.import List reactions check — With User authentication : chat.messages.reactions.readonly chat.messages.reactions chat.messages.readonly chat.messages Delete a reaction check — With User authentication : chat.messages.reactions chat.messages chat.import Custom emoji Create a custom emoji check — With User authentication : chat.customemojis Delete a custom emoji check — With User authentication : chat.customemojis Get a custom emoji check — With User authentication : chat.customemojis chat.customemojis.readonly List custom emoji check — With User authentication : chat.customemojis chat.customemojis.readonly Media & attachments Upload media as a file attachment check — With User authentication : chat.messages.create chat.messages chat.import Download media check check With User authentication : chat.messages.readonly chat.messages With App authentication : chat.bot Get a message attachment — check With App authentication : chat.bot User read states Get a user's space read state check — With User authentication : chat.users.readstate chat.users.readstate.readonly Update a user's space read state check — With User authentication : chat.users.readstate Get a user's thread read state check — With User authentication : chat.users.readstate chat.users.readstate.readonly User space settings Get a user's space notification setting check — With User authentication : chat.users.spacesettings Update a user's space notification setting check — With User authentication : chat.users.spacesettings Space events Get space events check — With User authentication , you must use a scope based on the event type : For events about messages: chat.messages chat.messages.readonly For events about reactions: chat.messages.reactions chat.messages.reactions.readonly chat.messages chat.messages.readonly For events about memberships: chat.memberships chat.memberships.readonly For events about the space: chat.spaces chat.spaces.readonly List space events check — With User authentication , you must use a scope for each event type included in the request: For events about messages: chat.messages chat.messages.readonly For events about reactions: chat.messages.reactions chat.messages.reactions.readonly chat.messages chat.messages.readonly For events about memberships: chat.memberships chat.memberships.readonly For events about the space: chat.spaces chat.spaces.readonly Sections Create a section check — With User authentication : chat.users.sections Delete a section check — With User authentication : chat.users.sections List sections check — With User authentication : chat.users.sections chat.users.sections.readonly Update a section check — With User authentication : chat.users.sections Position a section check — With User authentication : chat.users.sections Section Items Move a section item check — With User authentication : chat.users.sections List section items check — With User authentication : chat.users.sections chat.users.sections.readonly For Chat app interaction events The following table lists common ways that users interact with Chat apps and whether authentication is required or supported: Scenario No authentication required User authentication supported App authentication supported Receive messages from: Chat app interaction events check — — Apps Script callbacks check — — Google Cloud Pub/Sub — — check Respond to messages: Synchronously, using a Chat app interaction event check — — Synchronously, using an Apps Script callback return value check — — Send new messages: With incoming webhooks check — — Related topics For an overview of authentication and authorization in Google Workspace, see Learn about authentication & authorization .
- Sensitive scopes Scope code Description https://www.googleapis.com/auth/chat.spaces Create conversations and spaces and see or edit metadata (including history settings and access settings) in Chat. https://www.googleapis.com/auth/chat.spaces.create Create new conversations in Chat. https://www.googleapis.com/auth/chat.spaces.readonly View chat and spaces in Chat. https://www.googleapis.com/auth/chat.memberships View, add, update, and remove members from conversations in Chat. https://www.googleapis.com/auth/chat.memberships.app Add and remove itself from conversations in Google Chat. https://www.googleapis.com/auth/chat.memberships.readonly View members in Chat conversations. https://www.googleapis.com/auth/chat.messages.create Compose and send messages in Chat. https://www.googleapis.com/auth/chat.messages.reactions View, add, and delete reactions to messages in Chat. https://www.googleapis.com/auth/chat.messages.reactions.create Add reactions to a message in Chat. https://www.googleapis.com/auth/chat.messages.reactions.readonly View reactions to a message in Chat. https://www.googleapis.com/auth/chat.users.readstate View and modify last read time for Chat conversations. https://www.googleapis.com/auth/chat.users.readstate.readonly View last read time for Chat conversations. https://www.googleapis.com/auth/chat.admin.spaces.readonly View chat and spaces owned by the administrator's domain in Chat. https://www.googleapis.com/auth/chat.admin.spaces View or edit chat and spaces owned by the administrator's domain in Chat. https://www.googleapis.com/auth/chat.admin.memberships.readonly View members and managers in conversations owned by the administrator's domain in Chat. https://www.googleapis.com/auth/chat.admin.memberships View, add, update and remove members and managers in conversations owned by the administrator's domain in Chat. https://www.googleapis.com/auth/chat.app.spaces Create conversations and spaces and see or update metadata (including history settings and access settings) in Chat as a Chat app.
- Types of required authentication There are two ways Chat apps can authenticate and authorize with the Chat API: User authentication User authentication lets a Chat app access user data and complete actions on a user's behalf.
- Chat API scopes Configure the OAuth consent screen and choose scopes to define what information is displayed to users and app reviewers, and register your app so that you can publish it later.

