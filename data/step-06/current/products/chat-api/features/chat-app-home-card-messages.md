---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:26:07.645Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "Chat app home card messages"
feature_slug: "chat-app-home-card-messages"
latest_feature_date: "2023-11-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1"
  - "https://developers.google.com/workspace/chat/quickstart/apps-script-app"
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/cards"
keywords:
  - "home"
  - "send"
  - "messages"
  - "card"
  - "apps"
  - "app"
  - "chat"
  - "can"
---

# Chat app home card messages

Product: Chat API
Coverage: LOW

## Step 02 Summary

Chat apps can send a customizable app home card message directly to users in direct messages.

## Extended Definition

Chat apps can send a customizable app home card message directly to users in direct messages.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1)
- [https://developers.google.com/workspace/chat/quickstart/apps-script-app](https://developers.google.com/workspace/chat/quickstart/apps-script-app)
- [https://developers.google.com/workspace/chat/api/reference/rest/v1/cards](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards)

## Supporting Pages

### Package google.apps.card.v1 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1)
- Source ID: `site-docs-reference`
- Final score: 250
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Available for Google Workspace add-ons and unavailable for Google Chat apps. peek card header CardHeader When displaying contextual content, the peek card header acts as a placeholder so that the user can navigate forward between the homepage cards and the contextual cards.
- Home Google Workspace Google Chat Reference Send feedback Package google.apps.card.v1 Stay organized with collections Save and categorize content based on your preferences.
- For Chat apps, you can use fixed footers in dialogs , but not card messages .
- For Chat apps, you can use fixed footers in dialogs , but not card messages .

### Build a Google Chat app with Google Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/quickstart/apps-script-app](https://developers.google.com/workspace/chat/quickstart/apps-script-app)
- Source ID: `site-docs-root`
- Final score: 246
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Google Workspace Google Chat Guides Send feedback Build a Google Chat app with Google Apps Script Stay organized with collections Save and categorize content based on your preferences.
- Key actions include: setting up a Google Cloud environment and enabling the Chat API; configuring the OAuth consent screen; creating an Apps Script project from a template and linking it to the Cloud project; publishing the app with a deployment ID; and testing the app by sending a direct message.
- The following diagram shows the architecture and messaging pattern: In the preceding diagram, a user interacting with an Apps Script Chat app has the following flow of information: A user sends a message to a Chat app, either in a direct message or in a Chat space.
- Although an error message might not display in the Chat UI, descriptive error messages and log data are available to help you fix errors when error logging for Chat apps is turned on.

### Cards v2 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/cards](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards)
- Source ID: `site-api-reference`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- Available for Google Workspace add-ons and unavailable for Google Chat apps. peekCardHeader object ( CardHeader ) When displaying contextual content, the peek card header acts as a placeholder so that the user can navigate forward between the homepage cards and the contextual cards.
- For Chat apps, you can use fixed footers in dialogs , but not card messages .
- For Chat apps, you can use fixed footers in dialogs , but not card messages .
- Available for Google Chat apps and Google Workspace add-ons. navigations: { updateCard: CARD } Fields Union field navigate action . navigate action can be only one of the following: pushCard Card Pushes a card onto the card stack.

