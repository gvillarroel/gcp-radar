---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.648Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Google Chat Card Service support in Apps Script"
feature_slug: "google-chat-card-service-support-in-apps-script"
latest_feature_date: "2024-04-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings"
  - "https://developers.google.com/apps-script/advanced/chat"
  - "https://developers.google.com/apps-script/releases"
keywords:
  - "chat"
  - "use"
  - "card"
  - "script"
  - "apps"
  - "can"
  - "in"
  - "to"
---

# Google Chat Card Service support in Apps Script

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Google Chat apps can use Apps Script's Card Service to build card-based interfaces such as messages and dialogs; Google Chat apps begin supporting Apps Script's Card Service in Developer Preview for card-based UI development.

## Extended Definition

Google Chat apps can use Apps Script's Card Service to build card-based interfaces such as messages and dialogs; Google Chat apps begin supporting Apps Script's Card Service in Developer Preview for card-based UI development.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings](https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings)
- [https://developers.google.com/apps-script/advanced/chat](https://developers.google.com/apps-script/advanced/chat)
- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)

## Supporting Pages

### Admin SDK Groups Settings Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings](https://developers.google.com/apps-script/advanced/admin-sdk-groups-settings)
- Source ID: `site-docs-reference`
- Final score: 226
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Page Summary outlined flag The Admin SDK Groups Settings service in Apps Script allows Google Workspace administrators to manage group settings using the Admin SDK Groups Settings API.
- Like all advanced services in Apps Script, the Admin SDK Groups Settings service uses the same objects, methods, and parameters as the public API.
- The Admin SDK Groups Settings service lets you use the Admin SDK's Groups Settings API in Google Apps Script.
- Apps Script to manage group settings for Google Workspace domains.

### Advanced Chat Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/chat](https://developers.google.com/apps-script/advanced/chat)
- Source ID: `site-docs-reference`
- Final score: 218
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Add the chat.messages.create authorization scope to the Apps Script project's appsscript.json file: "oauthScopes" : [ "https://www.googleapis.com/auth/chat.messages.create" ] Add a function like this one to the Apps Script project's code: advanced/chat.gs View on GitHub / Posts a new message to the specified space on behalf of the user. @param {string} spaceName The resource name of the space. / function postMessageWithUserCredentials ( spaceName ) { try { const message = { text : "Hello world!" }; Chat .
- In most cases, Apps Script automatically determines what scopes a script needs, but when you use the Chat advanced service, you must manually add the authorization scopes that your script uses to your Apps Script project's manifest file.
- Members . list ( spaceName , { pageSize : 10 , pageToken : pageToken , }); if ( ! response . memberships response . memberships . length === 0 ) { pageToken = response . nextPageToken ; continue ; } for ( const membership of response . memberships ) { console . log ( "Member: %s, Role: %s" , membership . member . displayName , membership . role , ); } pageToken = response . nextPageToken ; } while ( pageToken ); } catch ( err ) { // TODO (developer) - Handle exception console . log ( "Failed with error %s" , err . message ); } } Troubleshoot If you encounter Error 400: invalid scope with the error message Some requested scopes cannot be shown , it means you haven't specified any authorization scopes in the Apps Script project's appsscript.json file.
- Add the chat.memberships.readonly authorization scope to the Apps Script project's appsscript.json file: "oauthScopes" : [ "https://www.googleapis.com/auth/chat.memberships.readonly" ] Add a function like this one to the Apps Script project's code: advanced/chat.gs View on GitHub / Lists all the members of a Chat space. @param {string} spaceName The resource name of the space. / function listMemberships ( spaceName ) { let response ; let pageToken = null ; try { do { response = Chat .

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: N/A

Evidence snippets:
- If you've built your Chat app using Apps Script, you can use Card Service to build user interfaces such as card messages and dialogs.
- If you've built your Chat app using Apps Script, you can use Card Service to build user interfaces such as card messages and dialogs.
- We've also updated the Apps Script code samples to use the Advanced Chat Service in the following Chat API developer guides: Authenticate as an app Authenticate as a user Try it - Respond to Incidents September 26, 2023 Change The email address that sends notifications about errors in triggers has been updated from apps-scripts-notifications@google.com to noreply-apps-scripts-notifications@google.com .
- July 08, 2022 Deprecated Apps Script has deprecated the following methods: getChatThreads() getChatThreads(start, max) These methods will become unavailable later this year once Google switches all users from Classic Hangouts to Google Chat.

