---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:26:07.658Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "Card and dialog user input processing"
feature_slug: "card-and-dialog-user-input-processing"
latest_feature_date: "2023-01-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/chat/build-dialogflow-chat-app-natural-language"
  - "https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1"
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/cards"
keywords:
  - "processing"
  - "dialog"
  - "input"
  - "user"
  - "card"
  - "apps"
  - "chat"
  - "and"
---

# Card and dialog user input processing

Product: Chat API
Coverage: LOW

## Step 02 Summary

Chat apps can now receive and respond to information submitted by users in cards and dialogs.

## Extended Definition

Chat apps can now receive and respond to information submitted by users in cards and dialogs.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/chat/build-dialogflow-chat-app-natural-language](https://developers.google.com/workspace/chat/build-dialogflow-chat-app-natural-language)
- [https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1)
- [https://developers.google.com/workspace/chat/api/reference/rest/v1/cards](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards)

## Supporting Pages

### "Build a Dialogflow CX Google Chat app that understands and responds with\

- URL: [https://developers.google.com/workspace/chat/build-dialogflow-chat-app-natural-language](https://developers.google.com/workspace/chat/build-dialogflow-chat-app-natural-language)
- Source ID: `site-docs-root`
- Final score: 236
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Considerations for responding to slash commands and receiving data from cards or dialogs : When Dialogflow Chat apps receive a message with a slash command, the query input contains only the value of the text field.
- The following JSON shows how to send a card message as a custom payload in fulfillment: json { 'cardsV 2 ' : [{ 'cardId' : 'crea te CardMessage' , 'card' : { 'header' : { ' t i tle ' : 'A card message!' , 'sub t i tle ' : 'Se nt fr om Dialog fl ow' , 'imageUrl' : 'h tt ps : //developers.google.com/chat/images/chat-product-icon.png', 'imageType' : 'CIRCLE' }, 'sec t io ns ' : [ { 'widge ts ' : [ { 'bu tt o n Lis t ' : { 'bu tt o ns ' : [ { ' te x t ' : 'Read t he docs!' , 'o n Click' : { 'ope n Li n k' : { 'url' : 'h tt ps : //developers.google.com/workspace/chat' } } } ] } } ] } ] } }] } Limits and considerations Chat interaction events have limited support and some considerations: The following interaction events types are supported: MESSAGE ADDED TO SPACE CARD CLICKED For MESSAGE or ADDED TO SPACE events, the query input sent to the Dialogflow agent corresponds to the value of the argumentText field in the Chat message.
- For a detailed walkthrough instructing you how to build and configure agents, see Create a Dialogflow CX agent . code Codelab: For an example of how to build a Dialogflow CX data store agent, see the knowledge Chat app from the codelab Build apps for Google Chat with Gemini . code Codelab: For an example of how to build a Dialogflow CX conversational agent, see the feedback Chat app from the codelab Build apps for Google Chat with Gemini .
- Send card messages from Dialogflow code Codelab: For an applied example of sending card messages from Dialogflow, see Display sources in knowledge Chat app answers in the codelab Build apps for Google Chat with Gemini.

### Package google.apps.card.v1 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1)
- Source ID: `site-docs-reference`
- Final score: 220
- Re-rank relevance: N/A

Evidence snippets:
- Available for Google Workspace add-ons and unavailable for Google Chat apps. peek card header CardHeader When displaying contextual content, the peek card header acts as a placeholder so that the user can navigate forward between the homepage cards and the contextual cards.
- Cards in Google Chat and Workspace add-ons can utilize data sources, like users or spaces, using PlatformDataSource and CommonDataSource components within selection inputs.
- This limit applies to both card messages and dialogs in Google Chat apps, and to cards in Google Workspace add-ons.
- OPEN DIALOG Opens a dialog , a windowed, card-based interface that Chat apps use to interact with users.

### Cards v2 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/cards](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards)
- Source ID: `site-api-reference`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- Available for Google Workspace add-ons and unavailable for Google Chat apps. peekCardHeader object ( CardHeader ) When displaying contextual content, the peek card header acts as a placeholder so that the user can navigate forward between the homepage cards and the contextual cards.
- This limit applies to both card messages and dialogs in Google Chat apps, and to cards in Google Workspace add-ons.
- OPEN DIALOG Opens a dialog , a windowed, card-based interface that Chat apps use to interact with users.
- For an example in Google Chat apps, see Display cards and dialogs in columns .

