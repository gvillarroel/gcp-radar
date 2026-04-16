---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.513Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Advanced Chat service"
feature_slug: "advanced-chat-service"
latest_feature_date: "2023-11-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/advanced/chat"
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/advanced/events"
keywords:
  - "advanced"
  - "chat"
  - "lets"
  - "apps"
  - "script"
  - "call"
---

# Advanced Chat service

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

The Advanced Chat service lets Apps Script call the Google Chat API.

## Extended Definition

The Advanced Chat service lets Apps Script call the Google Chat API.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/advanced/chat](https://developers.google.com/apps-script/advanced/chat)
- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/advanced/events](https://developers.google.com/apps-script/advanced/events)

## Supporting Pages

### Advanced Chat Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/chat](https://developers.google.com/apps-script/advanced/chat)
- Source ID: `site-docs-reference`
- Final score: 203
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In most cases, Apps Script automatically determines what scopes a script needs, but when you use the Chat advanced service, you must manually add the authorization scopes that your script uses to your Apps Script project's manifest file.
- The Advanced Chat service lets you use the Google Chat API in Google Apps Script.
- Add the chat.messages.create authorization scope to the Apps Script project's appsscript.json file: "oauthScopes" : [ "https://www.googleapis.com/auth/chat.messages.create" ] Add a function like this one to the Apps Script project's code: advanced/chat.gs View on GitHub / Posts a new message to the specified space on behalf of the user. @param {string} spaceName The resource name of the space. / function postMessageWithUserCredentials ( spaceName ) { try { const message = { text : "Hello world!" }; Chat .
- Add the chat.memberships.readonly authorization scope to the Apps Script project's appsscript.json file: "oauthScopes" : [ "https://www.googleapis.com/auth/chat.memberships.readonly" ] Add a function like this one to the Apps Script project's code: advanced/chat.gs View on GitHub / Lists all the members of a Chat space. @param {string} spaceName The resource name of the space. / function listMemberships ( spaceName ) { let response ; let pageToken = null ; try { do { response = Chat .

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- November 06, 2023 Feature (Generally available) : You can now call the Chat API from Apps Script with the Advanced Chat Service.
- We've also updated the Apps Script code samples to use the Advanced Chat Service in the following Chat API developer guides: Authenticate as an app Authenticate as a user Try it - Respond to Incidents September 26, 2023 Change The email address that sends notifications about errors in triggers has been updated from apps-scripts-notifications@google.com to noreply-apps-scripts-notifications@google.com .
- The gallery also features the following new samples: Build a Google Chat app with an ADK AI agent Build a Chat app with an Agent2Agent agent Analyze and label Gmail messages with Gemini and Vertex AI June 04, 2025 Deprecated Google Analytics 4 has replaced Universal Analytics , which means the Apps Script Advanced Service for Google Analytics Management API and Reporting API is deprecated.
- January 12, 2026 Feature Generally Available: Use Apps Script's Vertex AI advanced service to call the Vertex AI API and prompt AI models to generate text, images, and more.

### "Advanced Google Workspace Events Service \_|\_ Apps Script \_|\_ Google\

- URL: [https://developers.google.com/apps-script/advanced/events](https://developers.google.com/apps-script/advanced/events)
- Source ID: `site-docs-reference`
- Final score: 115
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Subscriptions . create ({ targetResource : targetResource , eventTypes : eventTypes , notificationEndpoint : { pubsubTopic : pubsubTopic , }, }); console . log ( operation ); } catch ( err ) { // TODO (developer) - Handle exception console . log ( "Failed to create subscription with error %s" , err . message ); } } List subscriptions To list subscriptions filtered by event types and target resource, add the following function to the Apps Script project's code: advanced/events.gs View on GitHub / Lists subscriptions created by the calling app filtered by one or more event types and optionally by a target resource.
- The Advanced Google Workspace Events service lets you use the Google Workspace Events API in Google Apps Script.
- Subscriptions . patch ( { // Setting the TTL to 0 seconds extends the subscription to its maximum expiration time. ttl : "0s" , }, name , ); console . log ( operation ); } catch ( err ) { // TODO (developer) - Handle exception console . log ( "Failed to update subscription with error %s" , err . message ); } } Reactivate subscription To reactivate a subscription, add the following function to the Apps Script project's code: advanced/events.gs View on GitHub / Reactivates a suspended subscription.
- Subscriptions . list ({ filter }); console . log ( response ); } catch ( err ) { // TODO (developer) - Handle exception console . log ( "Failed to list subscriptions with error %s" , err . message ); } } Get subscription To get information about a subscription, add the following function to the Apps Script project's code: advanced/events.gs View on GitHub / Gets details about a subscription.

