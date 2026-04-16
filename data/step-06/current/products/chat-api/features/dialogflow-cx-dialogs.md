---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:27:57.204Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "Dialogflow CX dialogs"
feature_slug: "dialogflow-cx-dialogs"
latest_feature_date: "2024-06-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/chat/build-dialogflow-chat-app-natural-language"
  - "https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1"
  - "https://developers.google.com/workspace/chat/quickstart/apps-script-app"
keywords:
  - "dialogflow"
  - "cx"
  - "dialogs"
  - "chat"
  - "apps"
  - "can"
  - "open"
  - "receive"
---

# Dialogflow CX dialogs

Product: Chat API
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX Chat apps can open dialogs and receive user input from card messages and dialogs.

## Extended Definition

Dialogflow CX Chat apps can open dialogs and receive user input from card messages and dialogs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/chat/build-dialogflow-chat-app-natural-language](https://developers.google.com/workspace/chat/build-dialogflow-chat-app-natural-language)
- [https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1)
- [https://developers.google.com/workspace/chat/quickstart/apps-script-app](https://developers.google.com/workspace/chat/quickstart/apps-script-app)

## Supporting Pages

### Package google.apps.card.v1 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1)
- Source ID: `site-docs-reference`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- Available for Google Workspace add-ons and unavailable for Google Chat apps. on close OnClose Whether the client forgets about a link after opening it, or observes it until the window closes.
- Available for Google Workspace add-ons and unavailable for Google Chat apps. overflow menu OverflowMenu If specified, this onClick opens an overflow menu.
- Open the Card Builder To learn how to build cards, see the following documentation: For Google Chat apps, see Design the components of a card or dialog .
- This limit applies to both card messages and dialogs in Google Chat apps, and to cards in Google Workspace add-ons.

### "Build a Dialogflow CX Google Chat app that understands and responds with\

- URL: [https://developers.google.com/workspace/chat/build-dialogflow-chat-app-natural-language](https://developers.google.com/workspace/chat/build-dialogflow-chat-app-natural-language)
- Source ID: `site-docs-root`
- Final score: 114
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Considerations for responding to slash commands and receiving data from cards or dialogs : When Dialogflow Chat apps receive a message with a slash command, the query input contains only the value of the text field.
- For a detailed walkthrough instructing you how to build and configure agents, see Create a Dialogflow CX agent . code Codelab: For an example of how to build a Dialogflow CX data store agent, see the knowledge Chat app from the codelab Build apps for Google Chat with Gemini . code Codelab: For an example of how to build a Dialogflow CX conversational agent, see the feedback Chat app from the codelab Build apps for Google Chat with Gemini .
- Send card messages from Dialogflow code Codelab: For an applied example of sending card messages from Dialogflow, see Display sources in knowledge Chat app answers in the codelab Build apps for Google Chat with Gemini.
- Dialogflow Chat apps are useful in all kinds of interactions.

### Build a Google Chat app with Google Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/quickstart/apps-script-app](https://developers.google.com/workspace/chat/quickstart/apps-script-app)
- Source ID: `site-docs-root`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- The Chat app logic that's implemented in Apps Script, which resides in Google Cloud, receives and processes the message.
- Key actions include: setting up a Google Cloud environment and enabling the Chat API; configuring the OAuth consent screen; creating an Apps Script project from a template and linking it to the Cloud project; publishing the app with a deployment ID; and testing the app by sending a direct message.
- The following diagram shows the architecture and messaging pattern: In the preceding diagram, a user interacting with an Apps Script Chat app has the following flow of information: A user sends a message to a Chat app, either in a direct message or in a Chat space.
- Test the Chat app To test your Chat app, open a direct message space with the Chat app and send a message: Open Google Chat using the Google Workspace account that you provided when you added yourself as a trusted tester.

