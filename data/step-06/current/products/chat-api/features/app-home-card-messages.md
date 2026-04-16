---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:27:57.211Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "App home card messages"
feature_slug: "app-home-card-messages"
latest_feature_date: "2024-04-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1"
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/cards"
  - "https://developers.google.com/workspace/chat/quickstart/apps-script-app"
keywords:
  - "app"
  - "home"
  - "card"
  - "messages"
  - "chat"
  - "apps"
  - "can"
  - "send"
---

# App home card messages

Product: Chat API
Coverage: MEDIUM

## Step 02 Summary

Chat apps can send a customizable app home card message to users when they open a direct message with the app; Chat apps can send a customizable app home card message when a user opens a direct message with the app.

## Extended Definition

Chat apps can send a customizable app home card message to users when they open a direct message with the app; Chat apps can send a customizable app home card message when a user opens a direct message with the app.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1)
- [https://developers.google.com/workspace/chat/api/reference/rest/v1/cards](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards)
- [https://developers.google.com/workspace/chat/quickstart/apps-script-app](https://developers.google.com/workspace/chat/quickstart/apps-script-app)

## Supporting Pages

### Package google.apps.card.v1 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1)
- Source ID: `site-docs-reference`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Home Google Workspace Google Chat Reference Send feedback Package google.apps.card.v1 Stay organized with collections Save and categorize content based on your preferences.
- Available for Google Workspace add-ons and unavailable for Google Chat apps. peek card header CardHeader When displaying contextual content, the peek card header acts as a placeholder so that the user can navigate forward between the homepage cards and the contextual cards.
- For card messages in Chat apps, you must also set the action's ResponseType to UPDATE MESSAGE and use the same card id from the card that contained the action.
- This limit applies to both card messages and dialogs in Google Chat apps, and to cards in Google Workspace add-ons.

### Cards v2 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/cards](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards)
- Source ID: `site-api-reference`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- Available for Google Workspace add-ons and unavailable for Google Chat apps. peekCardHeader object ( CardHeader ) When displaying contextual content, the peek card header acts as a placeholder so that the user can navigate forward between the homepage cards and the contextual cards.
- For card messages in Chat apps, you must also set the action's ResponseType to UPDATE MESSAGE and use the same cardId from the card that contained the action.
- Home Google Workspace Google Chat Reference Send feedback Cards v2 Stay organized with collections Save and categorize content based on your preferences.
- This limit applies to both card messages and dialogs in Google Chat apps, and to cards in Google Workspace add-ons.

### Build a Google Chat app with Google Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/quickstart/apps-script-app](https://developers.google.com/workspace/chat/quickstart/apps-script-app)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Google Workspace Google Chat Guides Send feedback Build a Google Chat app with Google Apps Script Stay organized with collections Save and categorize content based on your preferences.
- Key actions include: setting up a Google Cloud environment and enabling the Chat API; configuring the OAuth consent screen; creating an Apps Script project from a template and linking it to the Cloud project; publishing the app with a deployment ID; and testing the app by sending a direct message.
- The following diagram shows the architecture and messaging pattern: In the preceding diagram, a user interacting with an Apps Script Chat app has the following flow of information: A user sends a message to a Chat app, either in a direct message or in a Chat space.
- Although an error message might not display in the Chat UI, descriptive error messages and log data are available to help you fix errors when error logging for Chat apps is turned on.

