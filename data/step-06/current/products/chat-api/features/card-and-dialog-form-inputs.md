---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:27:57.261Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "Card and dialog form inputs"
feature_slug: "card-and-dialog-form-inputs"
latest_feature_date: "2023-01-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1"
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/cards"
  - "https://developers.google.com/workspace/chat/build-dialogflow-chat-app-natural-language"
keywords:
  - "card"
  - "dialog"
  - "form"
  - "inputs"
  - "chat"
  - "apps"
  - "can"
  - "receive"
---

# Card and dialog form inputs

Product: Chat API
Coverage: MEDIUM

## Step 02 Summary

Chat apps can receive and respond to user-submitted information from cards and dialogs.

## Extended Definition

Chat apps can receive and respond to user-submitted information from cards and dialogs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1)
- [https://developers.google.com/workspace/chat/api/reference/rest/v1/cards](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards)
- [https://developers.google.com/workspace/chat/build-dialogflow-chat-app-natural-language](https://developers.google.com/workspace/chat/build-dialogflow-chat-app-natural-language)

## Supporting Pages

### Package google.apps.card.v1 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1)
- Source ID: `site-docs-reference`
- Final score: 201
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cards in Google Chat and Workspace add-ons can utilize data sources, like users or spaces, using PlatformDataSource and CommonDataSource components within selection inputs.
- Open the Card Builder To learn how to build cards, see the following documentation: For Google Chat apps, see Design the components of a card or dialog .
- This limit applies to both card messages and dialogs in Google Chat apps, and to cards in Google Workspace add-ons.
- OPEN DIALOG Opens a dialog , a windowed, card-based interface that Chat apps use to interact with users.

### Cards v2 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/cards](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards)
- Source ID: `site-api-reference`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Open the Card Builder To learn how to build cards, see the following documentation: For Google Chat apps, see Design the components of a card or dialog .
- For dialogs in Google Chat , opens or updates a dialog. updateCard Card Updates the top card with a new card and preserves filled form fields values.
- This limit applies to both card messages and dialogs in Google Chat apps, and to cards in Google Workspace add-ons.
- OPEN DIALOG Opens a dialog , a windowed, card-based interface that Chat apps use to interact with users.

### "Build a Dialogflow CX Google Chat app that understands and responds with\

- URL: [https://developers.google.com/workspace/chat/build-dialogflow-chat-app-natural-language](https://developers.google.com/workspace/chat/build-dialogflow-chat-app-natural-language)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Considerations for responding to slash commands and receiving data from cards or dialogs : When Dialogflow Chat apps receive a message with a slash command, the query input contains only the value of the text field.
- Send card messages from Dialogflow code Codelab: For an applied example of sending card messages from Dialogflow, see Display sources in knowledge Chat app answers in the codelab Build apps for Google Chat with Gemini.
- The following JSON shows how to send a card message as a custom payload in fulfillment: json { 'cardsV 2 ' : [{ 'cardId' : 'crea te CardMessage' , 'card' : { 'header' : { ' t i tle ' : 'A card message!' , 'sub t i tle ' : 'Se nt fr om Dialog fl ow' , 'imageUrl' : 'h tt ps : //developers.google.com/chat/images/chat-product-icon.png', 'imageType' : 'CIRCLE' }, 'sec t io ns ' : [ { 'widge ts ' : [ { 'bu tt o n Lis t ' : { 'bu tt o ns ' : [ { ' te x t ' : 'Read t he docs!' , 'o n Click' : { 'ope n Li n k' : { 'url' : 'h tt ps : //developers.google.com/workspace/chat' } } } ] } } ] } ] } }] } Limits and considerations Chat interaction events have limited support and some considerations: The following interaction events types are supported: MESSAGE ADDED TO SPACE CARD CLICKED For MESSAGE or ADDED TO SPACE events, the query input sent to the Dialogflow agent corresponds to the value of the argumentText field in the Chat message.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["To build a Google Chat app integrated with Dialogflow CX, first enable the necessary APIs and set up a Google Cloud project.

