---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:27:57.251Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "Apps Script Advanced Chat Service"
feature_slug: "apps-script-advanced-chat-service"
latest_feature_date: "2023-11-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/chat/api/guides/quickstart/apps-script"
  - "https://developers.google.com/workspace/chat/quickstart/apps-script-app"
  - "https://developers.google.com/workspace/chat/api/reference"
keywords:
  - "apps"
  - "script"
  - "advanced"
  - "chat"
  - "can"
  - "call"
  - "through"
---

# Apps Script Advanced Chat Service

Product: Chat API
Coverage: MEDIUM

## Step 02 Summary

Apps Script can call the Chat API through the Advanced Chat Service.

## Extended Definition

Apps Script can call the Chat API through the Advanced Chat Service.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/chat/api/guides/quickstart/apps-script](https://developers.google.com/workspace/chat/api/guides/quickstart/apps-script)
- [https://developers.google.com/workspace/chat/quickstart/apps-script-app](https://developers.google.com/workspace/chat/quickstart/apps-script-app)
- [https://developers.google.com/workspace/chat/api/reference](https://developers.google.com/workspace/chat/api/reference)

## Supporting Pages

### Google Apps Script quickstart \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/guides/quickstart/apps-script](https://developers.google.com/workspace/chat/api/guides/quickstart/apps-script)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Replace the contents of the script editor with the following code: chat/quickstart/Code.gs View on GitHub / This quickstart sample shows how to list spaces with user credential It relies on the OAuth2 scope 'https://www.googleapis.com/auth/chat.spaces.readonly' referenced in the manifest file (appsscript.json). / function listSpaces () { // Initialize request argument(s) // Filter spaces by space type (SPACE or GROUP CHAT or DIRECT MESSAGE) const filter = 'space type = "SPACE"' ; // Iterate through the response pages using page tokens let responsePage ; let pageToken = null ; do { // Request response pages responsePage = Chat .
- Click Editor code , select the file appscript.json , and replace the contents with the following code: chat/quickstart/appsscript.json View on GitHub { "timeZone" : "America/New York" , "exceptionLogging" : "STACKDRIVER" , "runtimeVersion" : "V8" , "oauthScopes" : [ "https://www.googleapis.com/auth/chat.spaces.readonly" ], "chat" : {}, "dependencies" : { "enabledAdvancedServices" : [ { "userSymbol" : "Chat" , "version" : "v1" , "serviceId" : "chat" } ] } } Run the sample In the Apps Script editor, click Run .
- In Apps Script, Google Workspace quickstarts use Advanced Google services to call Google Workspace APIs and handle some details of the authentication and authorization flow.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["This document outlines how to create and run a Google Apps Script to interact with the Google Chat API.

### Build a Google Chat app with Google Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/quickstart/apps-script-app](https://developers.google.com/workspace/chat/quickstart/apps-script-app)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Key actions include: setting up a Google Cloud environment and enabling the Chat API; configuring the OAuth consent screen; creating an Apps Script project from a template and linking it to the Cloud project; publishing the app with a deployment ID; and testing the app by sending a direct message.
- The following diagram shows the architecture and messaging pattern: In the preceding diagram, a user interacting with an Apps Script Chat app has the following flow of information: A user sends a message to a Chat app, either in a direct message or in a Chat space.
- Home Google Workspace Google Chat Guides Send feedback Build a Google Chat app with Google Apps Script Stay organized with collections Save and categorize content based on your preferences.
- Although an error message might not display in the Chat UI, descriptive error messages and log data are available to help you fix errors when error logging for Chat apps is turned on.

### Google Chat API overview \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference](https://developers.google.com/workspace/chat/api/reference)
- Source ID: `site-api-reference`
- Final score: 118
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Developers are encouraged to use the provided client libraries for Python, Java, Node.js, or the Advanced Chat service for Google Apps Script.
- If you're coding with Google Apps Script, use the Advanced Chat service instead of installing a client library.
- Developers can use Cloud Client Libraries, or the Advanced Chat service with Google Apps Script.
- Related topics Call the Google Chat API Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

