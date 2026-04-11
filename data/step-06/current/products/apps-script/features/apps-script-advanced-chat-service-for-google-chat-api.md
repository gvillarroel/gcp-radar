---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.652Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Apps Script Advanced Chat Service for Google Chat API"
feature_slug: "apps-script-advanced-chat-service-for-google-chat-api"
latest_feature_date: "2023-11-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/advanced/chat"
  - "https://developers.google.com/apps-script/guides/services/advanced"
  - "https://developers.google.com/apps-script/advanced/docs"
keywords:
  - "call"
  - "chat"
  - "advanced"
  - "script"
  - "api"
  - "apps"
  - "can"
  - "for"
---

# Apps Script Advanced Chat Service for Google Chat API

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Apps Script can call the Google Chat API via the Advanced Chat Service.

## Extended Definition

Apps Script can call the Google Chat API via the Advanced Chat Service.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/advanced/chat](https://developers.google.com/apps-script/advanced/chat)
- [https://developers.google.com/apps-script/guides/services/advanced](https://developers.google.com/apps-script/guides/services/advanced)
- [https://developers.google.com/apps-script/advanced/docs](https://developers.google.com/apps-script/advanced/docs)

## Supporting Pages

### Advanced Chat Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/chat](https://developers.google.com/apps-script/advanced/chat)
- Source ID: `site-docs-reference`
- Final score: 272
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Add the chat.spaces.readonly authorization scope to the Apps Script project's appsscript.json file: "oauthScopes" : [ "https://www.googleapis.com/auth/chat.spaces.readonly" ] Add a function like this one to the Apps Script project's code: advanced/chat.gs View on GitHub / Gets information about a Chat space. @param {string} spaceName The resource name of the space. / function getSpace ( spaceName ) { try { const space = Chat .
- Add the chat.messages.create authorization scope to the Apps Script project's appsscript.json file: "oauthScopes" : [ "https://www.googleapis.com/auth/chat.messages.create" ] Add a function like this one to the Apps Script project's code: advanced/chat.gs View on GitHub / Posts a new message to the specified space on behalf of the user. @param {string} spaceName The resource name of the space. / function postMessageWithUserCredentials ( spaceName ) { try { const message = { text : "Hello world!" }; Chat .
- Add the chat.memberships.readonly authorization scope to the Apps Script project's appsscript.json file: "oauthScopes" : [ "https://www.googleapis.com/auth/chat.memberships.readonly" ] Add a function like this one to the Apps Script project's code: advanced/chat.gs View on GitHub / Lists all the members of a Chat space. @param {string} spaceName The resource name of the space. / function listMemberships ( spaceName ) { let response ; let pageToken = null ; try { do { response = Chat .
- Add the chat.spaces.create authorization scope to the Apps Script project's appsscript.json file: "oauthScopes" : [ "https://www.googleapis.com/auth/chat.spaces.create" ] Add a function like this one to the Apps Script project's code: advanced/chat.gs View on GitHub / Creates a new Chat space. / function createSpace () { try { const space = { displayName : "New Space" , spaceType : "SPACE" }; Chat .

### Advanced Google services \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/services/advanced](https://developers.google.com/apps-script/guides/services/advanced)
- Source ID: `site-docs-reference`
- Final score: 236
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- How method signatures are determined Advanced services generally use the same objects, method names, and parameters as the corresponding public APIs, although method signatures are translated for use in Apps Script.
- Support for advanced services Because advanced services are thin wrappers around Google APIs, any issue encountered while using them is usually an issue with the underlying API, not with Apps Script.
- Page Summary outlined flag Advanced services in Apps Script allow experienced developers to connect to certain public Google APIs with less set-up than using their HTTP interfaces.
- Step 2: Enable the Google Cloud API (Standard Google Cloud project projects only) If using a default Google Cloud project (created automatically by Apps Script), skip this step.

### Advanced Docs Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/docs](https://developers.google.com/apps-script/advanced/docs)
- Source ID: `site-docs-reference`
- Final score: 232
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note that when possible you should batch together multiple operations into a single batchUpdate call for efficiency. advanced/docs.gs View on GitHub / Insert text at the beginning of the first tab in the document and then style the inserted text. @param {string} documentId The document the text is inserted into. @param {string} text The text to insert into the document. @return {Object} replies @see https://developers.google.com/docs/api/reference/rest/v1/documents/batchUpdate / function insertAndStyleText ( documentId , text ) { const requests = [ { insertText : { location : { index : 1 , // A tab can be specified using its ID.
- Page Summary outlined flag The advanced Docs service in Apps Script allows you to use the Google Docs API to read, edit, and format Google Docs content.
- This can be useful when replacing placeholders in a copy of a template document with values from a database. advanced/docs.gs View on GitHub / Performs "replace all". @param {string} documentId The document to perform the replace text operations on. @param {Object} findTextToReplacementMap A map from the "find text" to the "replace text". @return {Object} replies @see https://developers.google.com/docs/api/reference/rest/v1/documents/batchUpdate / function findAndReplace ( documentId , findTextToReplacementMap ) { const requests = []; for ( const findText in findTextToReplacementMap ) { const replaceText = findTextToReplacementMap [ findText ]; // Replace all text across all tabs. const replaceAllTextRequest = { replaceAllText : { containsText : { text : findText , matchCase : true , }, replaceText : replaceText , }, }; // Replace all text across specific tabs. const replaceAllTextWithTabsCriteria = { replaceAllText : { ... replaceAllTextRequest . replaceAllText , tabsCriteria : { tabIds : [ TAB ID 1 , TAB ID 2 , TAB ID 3 ], }, }, }; requests . push ( replaceAllTextRequest ); } const response = Docs .
- This advanced service provides additional features beyond the built-in Apps Script Docs service but is an advanced service that requires enabling before use.

