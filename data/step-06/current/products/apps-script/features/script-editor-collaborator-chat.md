---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.819Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Script editor collaborator chat"
feature_slug: "script-editor-collaborator-chat"
latest_feature_date: "2012-07-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/advanced/chat"
  - "https://developers.google.com/apps-script/overview"
keywords:
  - "collaborator"
  - "collaboration"
  - "chat"
  - "editor"
  - "script"
  - "added"
  - "for"
  - "the"
---

# Script editor collaborator chat

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

The Script Editor added support for collaboration chat with a visible chat panel when multiple users edit a script.

## Extended Definition

The Script Editor added support for collaboration chat with a visible chat panel when multiple users edit a script.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/advanced/chat](https://developers.google.com/apps-script/advanced/chat)
- [https://developers.google.com/apps-script/overview](https://developers.google.com/apps-script/overview)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- Feature Added support for chatting with script collaborators in the Script Editor.
- Added the client-side HTML-service method google.script.host.editor.focus() , which allows scripts to switch browser focus from the dialog or sidebar to the Google Docs, Sheets, or Forms editor.
- Added a getUi method to DocumentApp and FormApp , which returns a Ui object that allows the script to add features like menus, dialogs, and sidebars to the Docs or Forms editor.
- Added support for find and replace in the script editor.

### Advanced Chat Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/chat](https://developers.google.com/apps-script/advanced/chat)
- Source ID: `site-docs-reference`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Add the chat.spaces.readonly authorization scope to the Apps Script project's appsscript.json file: "oauthScopes" : [ "https://www.googleapis.com/auth/chat.spaces.readonly" ] Add a function like this one to the Apps Script project's code: advanced/chat.gs View on GitHub / Gets information about a Chat space. @param {string} spaceName The resource name of the space. / function getSpace ( spaceName ) { try { const space = Chat .
- Members . list ( spaceName , { pageSize : 10 , pageToken : pageToken , }); if ( ! response . memberships response . memberships . length === 0 ) { pageToken = response . nextPageToken ; continue ; } for ( const membership of response . memberships ) { console . log ( "Member: %s, Role: %s" , membership . member . displayName , membership . role , ); } pageToken = response . nextPageToken ; } while ( pageToken ); } catch ( err ) { // TODO (developer) - Handle exception console . log ( "Failed with error %s" , err . message ); } } Troubleshoot If you encounter Error 400: invalid scope with the error message Some requested scopes cannot be shown , it means you haven't specified any authorization scopes in the Apps Script project's appsscript.json file.
- For details about authentication with service accounts, see Authenticate as a Google Chat app . advanced/chat.gs View on GitHub / Posts a new message to the specified space on behalf of the app. @param {string} spaceName The resource name of the space. / function postMessageWithAppCredentials ( spaceName ) { try { // See https://developers.google.com/chat/api/guides/auth/service-accounts // for details on how to obtain a service account OAuth token. const appToken = getToken (); const message = { text : "Hello world!" }; Chat .
- Add the chat.messages.create authorization scope to the Apps Script project's appsscript.json file: "oauthScopes" : [ "https://www.googleapis.com/auth/chat.messages.create" ] Add a function like this one to the Apps Script project's code: advanced/chat.gs View on GitHub / Posts a new message to the specified space on behalf of the user. @param {string} spaceName The resource name of the space. / function postMessageWithUserCredentials ( spaceName ) { try { const message = { text : "Hello world!" }; Chat .

### Google Apps Script overview \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/overview](https://developers.google.com/apps-script/overview)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Apps Script is versatile and can be used to add custom features to Google Docs, Sheets, and Forms, build web apps, interact with other Google services, and create add-ons.
- You don't need to install anything as it offers a browser-based code editor, saves scripts to Google Drive, and runs them on Google's servers.
- There's nothing to install—we give you a code editor right in your browser, and your scripts are saved to Drive and run on Google's servers.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]

