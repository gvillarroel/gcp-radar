---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:27:57.168Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "Pub/Sub delivery for Chat apps built as Google Workspace add-ons"
feature_slug: "pub-sub-delivery-for-chat-apps-built-as-google-workspace-add-ons"
latest_feature_date: "2026-02-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1"
  - "https://developers.google.com/workspace/chat/build-dialogflow-chat-app-natural-language"
  - "https://developers.google.com/workspace/chat/debug-apps"
keywords:
  - "pub"
  - "sub"
  - "delivery"
  - "chat"
  - "apps"
  - "built"
  - "workspace"
  - "add"
---

# Pub/Sub delivery for Chat apps built as Google Workspace add-ons

Product: Chat API
Coverage: MEDIUM

## Step 02 Summary

Developers can build Google Chat apps as Google Workspace add-ons that receive messages through Cloud Pub/Sub.

## Extended Definition

Developers can build Google Chat apps as Google Workspace add-ons that receive messages through Cloud Pub/Sub.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1)
- [https://developers.google.com/workspace/chat/build-dialogflow-chat-app-natural-language](https://developers.google.com/workspace/chat/build-dialogflow-chat-app-natural-language)
- [https://developers.google.com/workspace/chat/debug-apps](https://developers.google.com/workspace/chat/debug-apps)

## Supporting Pages

### Package google.apps.card.v1 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1)
- Source ID: `site-docs-reference`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- For example, this is a JSON representation of a carousel that contains three text paragraph widgets. { "carouselCards": [ { "widgets": [ { "textParagraph": { "text": "First text paragraph in carousel", } } ] }, { "widgets": [ { "textParagraph": { "text": "Second text paragraph in carousel", } } ] }, { "widgets": [ { "textParagraph": { "text": "Third text paragraph in carousel", } } ] } ] } Available for Google Chat apps and unavailable for Google Workspace add-ons.
- Google Workspace add-ons and Chat apps Fields Union field data . data can be only one of the following: text paragraph TextParagraph TextParagraph widget. image Image Image widget. decorated text DecoratedText DecoratedText widget. button list ButtonList ButtonList widget. text input TextInput TextInput widget. selection input SelectionInput SelectionInput widget. date time picker DateTimePicker DateTimePicker widget. chip list ChipList ChipList widget.
- Google Workspace add-ons and Chat apps Fields horizontal size style HorizontalSizeStyle Specifies how a column fills the width of the card. horizontal alignment HorizontalAlignment Specifies whether widgets align to the left, right, or center of a column. vertical alignment VerticalAlignment Specifies whether widgets align to the top, bottom, or center of a column. widgets[] Widgets An array of widgets included in a column.
- Available for Google Chat apps and unavailable for Google Workspace add-ons. multi select data source can be only one of the following: external data source Action An external data source, such as a relational database. platform data source PlatformDataSource A data source from Google Workspace.

### Debug Google Chat apps \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/debug-apps](https://developers.google.com/workspace/chat/debug-apps)
- Source ID: `site-docs-root`
- Final score: 113
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: If your Chat app is built with Google Apps Script, use the following instead: Test a deployment Use the debugger and breakpoints Debug from local development environment In this section, you interact with your Chat app that executes in your local environment.
- Home Google Workspace Google Chat Guides Send feedback Debug Google Chat apps Stay organized with collections Save and categorize content based on your preferences.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["This guide details how to debug HTTP Google Chat apps using ngrok for local testing and SSH for remote debugging.
- Node.js Clone the googleworkspace/google-chat-samples repository from GitHub to your local environment, it contains the code of the application to execute: git clone https://github.com/googleworkspace/google-chat-samples.git From the Visual Studio Code IDE installed in your local environment, do the following: In a new window, open the folder google-chat-samples/node/basic-app .

### "Build a Dialogflow CX Google Chat app that understands and responds with\

- URL: [https://developers.google.com/workspace/chat/build-dialogflow-chat-app-natural-language](https://developers.google.com/workspace/chat/build-dialogflow-chat-app-natural-language)
- Source ID: `site-docs-root`
- Final score: 110
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following JSON shows how to send a card message as a custom payload in fulfillment: json { 'cardsV 2 ' : [{ 'cardId' : 'crea te CardMessage' , 'card' : { 'header' : { ' t i tle ' : 'A card message!' , 'sub t i tle ' : 'Se nt fr om Dialog fl ow' , 'imageUrl' : 'h tt ps : //developers.google.com/chat/images/chat-product-icon.png', 'imageType' : 'CIRCLE' }, 'sec t io ns ' : [ { 'widge ts ' : [ { 'bu tt o n Lis t ' : { 'bu tt o ns ' : [ { ' te x t ' : 'Read t he docs!' , 'o n Click' : { 'ope n Li n k' : { 'url' : 'h tt ps : //developers.google.com/workspace/chat' } } } ] } } ] } ] } }] } Limits and considerations Chat interaction events have limited support and some considerations: The following interaction events types are supported: MESSAGE ADDED TO SPACE CARD CLICKED For MESSAGE or ADDED TO SPACE events, the query input sent to the Dialogflow agent corresponds to the value of the argumentText field in the Chat message.
- For a detailed walkthrough instructing you how to build and configure agents, see Create a Dialogflow CX agent . code Codelab: For an example of how to build a Dialogflow CX data store agent, see the knowledge Chat app from the codelab Build apps for Google Chat with Gemini . code Codelab: For an example of how to build a Dialogflow CX conversational agent, see the feedback Chat app from the codelab Build apps for Google Chat with Gemini .
- Architecture The following diagram shows the architecture of a Chat app built with Dialogflow: In the preceding diagram, a user interacting with a Dialogflow Chat app has the following flow of information: A user sends a message in Chat to a Chat app, either in a direct message or in a Chat space.
- The prebuilt agents help you get started fast, and showcase what Dialogflow can do, like: Book flights Schedule doctor appointments Order food delivery Answer questions about a retail product catalog, like whether items are available in other colors Figure 1.

