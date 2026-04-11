---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.656Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Rhino function debugging in V8 migration-free mode"
feature_slug: "rhino-function-debugging-in-v8-migration-free-mode"
latest_feature_date: "2022-04-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/samples/custom-functions/fact-check"
  - "https://developers.google.com/apps-script/advanced/admin-sdk-groups-migration"
keywords:
  - "debugging"
  - "rhino"
  - "free"
  - "v8"
  - "function"
  - "migration"
  - "mode"
  - "in"
---

# Rhino function debugging in V8 migration-free mode

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Enables debugging Rhino functions in the new IDE without requiring migration to the V8 runtime.

## Extended Definition

Enables debugging Rhino functions in the new IDE without requiring migration to the V8 runtime.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/samples/custom-functions/fact-check](https://developers.google.com/apps-script/samples/custom-functions/fact-check)
- [https://developers.google.com/apps-script/advanced/admin-sdk-groups-migration](https://developers.google.com/apps-script/advanced/admin-sdk-groups-migration)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- The Google Analytics Advanced Service and the Rhino runtime are scheduled for deprecation, requiring migration to the Google Analytics Data API Advanced Service and the V8 runtime respectively.
- Debug Rhino functions without migrating to the V8 runtime .
- Function names are still displayed when there is an error (to help with debugging) and when the script is run from the script editor.
- March 25, 2013 Fixed Issue 2534 : Debugging into a recursive function using certain GroupsManager methods no longer throws an error.

### "Fact-check statements with an ADK AI agent and Gemini model \_|\_ Apps Script\

- URL: [https://developers.google.com/apps-script/samples/custom-functions/fact-check](https://developers.google.com/apps-script/samples/custom-functions/fact-check)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Coding level : Advanced Duration : 30 minutes Project type : Custom function Overview A fact-check custom function for Google Sheets to be used as a bound Google Apps Script project powered by a Vertex AI agent and Gemini model.
- Page Summary outlined flag The webpage provides an advanced guide on creating a fact-check custom function for Google Sheets using Google Apps Script, powered by a Vertex AI agent and Gemini model.
- The custom function, named FACT CHECK , analyzes statements using a Vertex AI agent for reasoning and a Gemini model for output formatting.
- Next steps Plan travels with an AI agent accessible across Google Workspace Build Gemini Enterprise agents that are tightly integrated with Workspace data stores, APIs, and add ons Build Vertex AI agents that are tightly integrated with Workspace data stores, APIs, and add ons Custom functions in Sheets Extending Sheets Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Admin SDK Groups Migration Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/admin-sdk-groups-migration](https://developers.google.com/apps-script/advanced/admin-sdk-groups-migration)
- Source ID: `site-docs-reference`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Migrate emails from Gmail to a Google Group This sample gets three RFC 822 formatted messages from the each of the latest three threads in the user's Gmail inbox, creates a blob from the email content (including attachments), and inserts it in a Google Group in the domain. advanced/adminSDK.gs View on GitHub / Gets three RFC822 formatted messages from the each of the latest three threads in the user's Gmail inbox, creates a blob from the email content (including attachments), and inserts it in a Google Group in the domain. / function migrateMessages () { // TODO (developer) - Replace groupId value with yours const groupId = "exampleGroup@example.com" ; const messagesToMigrate = getRecentMessagesContent (); for ( const messageContent of messagesToMigrate ) { const contentBlob = Utilities . newBlob ( messageContent , "message/rfc822" ); AdminGroupsMigration .
- By default, fetches 3 messages from the latest 3 threads. @return {Array} the messages' content. / function getRecentMessagesContent () { const NUM THREADS = 3 ; const NUM MESSAGES = 3 ; const threads = GmailApp . getInboxThreads ( 0 , NUM THREADS ); const messages = GmailApp . getMessagesForThreads ( threads ); const messagesContent = []; for ( let i = 0 ; i < messages . length ; i ++ ) { for ( let j = 0 ; j < NUM MESSAGES ; j ++ ) { const message = messages [ i ][ j ]; if ( message ) { messagesContent . push ( message . getRawContent ()); } } } return messagesContent ; } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Page Summary outlined flag The Admin SDK Groups Migration service in Apps Script allows administrators to migrate emails from public folders and distribution lists to Google Groups discussion archives.
- Home Google Workspace Apps Script Reference Send feedback Admin SDK Groups Migration Service Stay organized with collections Save and categorize content based on your preferences.

