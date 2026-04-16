---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:27:57.184Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "Google Workspace add-ons for Chat apps"
feature_slug: "google-workspace-add-ons-for-chat-apps"
latest_feature_date: "2025-07-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/chat/quickstart/apps-script-app"
  - "https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1"
  - "https://developers.google.com/workspace/chat/build-dialogflow-chat-app-natural-language"
keywords:
  - "workspace"
  - "add"
  - "ons"
  - "chat"
  - "apps"
  - "developers"
  - "can"
  - "build"
---

# Google Workspace add-ons for Chat apps

Product: Chat API
Coverage: MEDIUM

## Step 02 Summary

Developers can build Google Chat apps as Google Workspace add-ons.

## Extended Definition

Developers can build Google Chat apps as Google Workspace add-ons.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/chat/quickstart/apps-script-app](https://developers.google.com/workspace/chat/quickstart/apps-script-app)
- [https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1)
- [https://developers.google.com/workspace/chat/build-dialogflow-chat-app-natural-language](https://developers.google.com/workspace/chat/build-dialogflow-chat-app-natural-language)

## Supporting Pages

### Build a Google Chat app with Google Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/quickstart/apps-script-app](https://developers.google.com/workspace/chat/quickstart/apps-script-app)
- Source ID: `site-docs-root`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Google Workspace Google Chat Guides Send feedback Build a Google Chat app with Google Apps Script Stay organized with collections Save and categorize content based on your preferences.
- Click Configuration and set up the Chat app: Clear Build this Chat app as a Google Workspace add-on .
- See the feedback Chat app from the codelab Build apps for Google Chat with Gemini .
- You can also build your Chat app as a Google Workspace add-on.

### Package google.apps.card.v1 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1)
- Source ID: `site-docs-reference`
- Final score: 175
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example: Card message for a Google Chat app To create the sample card message in Google Chat, use the following JSON: { "cardsV2": [ { "cardId": "unique-card-id", "card": { "header": { "title": "Sasha", "subtitle": "Software Engineer", "imageUrl": "https://developers.google.com/workspace/chat/images/quickstart-app-avatar.png", "imageType": "CIRCLE", "imageAltText": "Avatar for Sasha" }, "sections": [ { "header": "Contact Info", "collapsible": true, "uncollapsibleWidgetsCount": 1, "widgets": [ { "decoratedText": { "startIcon": { "knownIcon": "EMAIL" }, "text": "sasha@example.com" } }, { "decoratedText": { "startIcon": { "knownIcon": "PERSON" }, "text": "<font color=\"#80e27e\">Online</font>" } }, { "decoratedText": { "startIcon": { "knownIcon": "PHONE" }, "text": "+1 (555) 555-1234" } }, { "buttonList": { "buttons": [ { "text": "Share", "onClick": { "openLink": { "url": "https://example.com/share" } } }, { "text": "Edit", "onClick": { "action": { "function": "goToView", "parameters": [ { "key": "viewType", "value": "EDIT" } ] } } } ] } } ] } ] } } ] } Fields header CardHeader The header of the card.
- For example, this is a JSON representation of a carousel that contains three text paragraph widgets. { "carouselCards": [ { "widgets": [ { "textParagraph": { "text": "First text paragraph in carousel", } } ] }, { "widgets": [ { "textParagraph": { "text": "Second text paragraph in carousel", } } ] }, { "widgets": [ { "textParagraph": { "text": "Third text paragraph in carousel", } } ] } ] } Available for Google Chat apps and unavailable for Google Workspace add-ons.
- Google Workspace add-ons and Chat apps Fields Union field data . data can be only one of the following: text paragraph TextParagraph TextParagraph widget. image Image Image widget. decorated text DecoratedText DecoratedText widget. button list ButtonList ButtonList widget. text input TextInput TextInput widget. selection input SelectionInput SelectionInput widget. date time picker DateTimePicker DateTimePicker widget. chip list ChipList ChipList widget.
- Google Workspace add-ons and Chat apps Fields horizontal size style HorizontalSizeStyle Specifies how a column fills the width of the card. horizontal alignment HorizontalAlignment Specifies whether widgets align to the left, right, or center of a column. vertical alignment VerticalAlignment Specifies whether widgets align to the top, bottom, or center of a column. widgets[] Widgets An array of widgets included in a column.

### "Build a Dialogflow CX Google Chat app that understands and responds with\

- URL: [https://developers.google.com/workspace/chat/build-dialogflow-chat-app-natural-language](https://developers.google.com/workspace/chat/build-dialogflow-chat-app-natural-language)
- Source ID: `site-docs-root`
- Final score: 151
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following JSON shows how to send a card message as a custom payload in fulfillment: json { 'cardsV 2 ' : [{ 'cardId' : 'crea te CardMessage' , 'card' : { 'header' : { ' t i tle ' : 'A card message!' , 'sub t i tle ' : 'Se nt fr om Dialog fl ow' , 'imageUrl' : 'h tt ps : //developers.google.com/chat/images/chat-product-icon.png', 'imageType' : 'CIRCLE' }, 'sec t io ns ' : [ { 'widge ts ' : [ { 'bu tt o n Lis t ' : { 'bu tt o ns ' : [ { ' te x t ' : 'Read t he docs!' , 'o n Click' : { 'ope n Li n k' : { 'url' : 'h tt ps : //developers.google.com/workspace/chat' } } } ] } } ] } ] } }] } Limits and considerations Chat interaction events have limited support and some considerations: The following interaction events types are supported: MESSAGE ADDED TO SPACE CARD CLICKED For MESSAGE or ADDED TO SPACE events, the query input sent to the Dialogflow agent corresponds to the value of the argumentText field in the Chat message.
- For a detailed walkthrough instructing you how to build and configure agents, see Create a Dialogflow CX agent . code Codelab: For an example of how to build a Dialogflow CX data store agent, see the knowledge Chat app from the codelab Build apps for Google Chat with Gemini . code Codelab: For an example of how to build a Dialogflow CX conversational agent, see the feedback Chat app from the codelab Build apps for Google Chat with Gemini .
- Home Google Workspace Google Chat Guides Send feedback Build a Dialogflow CX Google Chat app that understands and responds with natural language Stay organized with collections Save and categorize content based on your preferences.
- Send card messages from Dialogflow code Codelab: For an applied example of sending card messages from Dialogflow, see Display sources in knowledge Chat app answers in the codelab Build apps for Google Chat with Gemini.

