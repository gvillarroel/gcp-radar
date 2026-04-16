---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.509Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Google Chat apps Card Service support"
feature_slug: "google-chat-apps-card-service-support"
latest_feature_date: "2024-04-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/reference/add-ons-response-service/chat-data-actions-response-builder"
  - "https://developers.google.com/apps-script/advanced/chat"
keywords:
  - "chat"
  - "apps"
  - "card"
  - "lets"
  - "script"
  - "build"
  - "messages"
  - "dialogs"
---

# Google Chat apps Card Service support

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Google Chat apps Card Service support lets Apps Script Chat apps build card messages and dialogs with Card Service; Google Chat apps Card Service support lets Apps Script Chat apps build card messages and dialogs with Card Service.

## Extended Definition

Google Chat apps Card Service support lets Apps Script Chat apps build card messages and dialogs with Card Service; Google Chat apps Card Service support lets Apps Script Chat apps build card messages and dialogs with Card Service.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/reference/add-ons-response-service/chat-data-actions-response-builder](https://developers.google.com/apps-script/reference/add-ons-response-service/chat-data-actions-response-builder)
- [https://developers.google.com/apps-script/advanced/chat](https://developers.google.com/apps-script/advanced/chat)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- If you've built your Chat app using Apps Script, you can use Card Service to build user interfaces such as card messages and dialogs.
- If you've built your Chat app using Apps Script, you can use Card Service to build user interfaces such as card messages and dialogs.
- The gallery also features the following new samples: Build a Google Chat app with an ADK AI agent Build a Chat app with an Agent2Agent agent Analyze and label Gmail messages with Gemini and Vertex AI June 04, 2025 Deprecated Google Analytics 4 has replaced Universal Analytics , which means the Apps Script Advanced Service for Google Analytics Management API and Reporting API is deprecated.
- The Card service has been extended with the following classes and methods that provide new widgets and event responses: CalendarEventActionResponse CalendarEventActionResponseBuilder DatePicker DateTimePicker DisplayStyle DriveItemsSelectedActionResponse DriveItemsSelectedActionResponseBuilder FixedFooter SwitchControlType TimePicker CardBuilder.setDisplayStyle(displayStyle) CardBuilder.setFixedFooter(fixedFooter) CardBuilder.setPeekCardHeader(peekCardHeader) CardService.newCalendarEventActionResponseBuilder() CardService.newDatePicker() CardService.newDateTimePicker() CardService.newDriveItemsSelectedActionResponseBuilder() CardService.newFixedFooter() CardService.newTimePicker() Switch.setControlType(controlType) The Conference Data service has been added to Apps Script.

### "Class ChatDataActionsResponseBuilder \_|\_ Apps Script \_|\_ Google for\

- URL: [https://developers.google.com/apps-script/reference/add-ons-response-service/chat-data-actions-response-builder](https://developers.google.com/apps-script/reference/add-ons-response-service/chat-data-actions-response-builder)
- Source ID: `site-docs-reference-3`
- Final score: 141
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Available for Google Workspace add-ons that extend Google Chat. const card = CardService . newCardBuilder () . setHeader ( CardService . newCardHeader (). setTitle ( "Card Title" )) . addSection ( CardService . newCardSection () . addWidget ( CardService . newTextParagraph (). setText ( "Text paragraph" ))) . build () const cardWithId = CardService . newCardWithId (). setCardId ( "card one" ). setCard ( card ) const message = AddOnsResponseService . newChatMessage (). addCardWithId ( cardWithId ) const chatDataAction = AddOnsResponseService . newChatDataActionBuilder () . setCreateChatMessageAction ( AddOnsResponseService . newCreateMessageAction () . setMessage ( message )) . build () Methods Method Return type Brief description build() Data Actions Response Builds the current action response. set Create Chat Message Action(createMessageAction) Chat Data Actions Response Builder Sets the Create Message Action for this Data Actions Response . set Update Chat Message Action(updateMessageAction) Chat Data Actions Response Builder Sets the Update Message Action for this Data Actions Response . set Update Inline Preview Action(updateInlinePreviewAction) Chat Data Actions Response Builder Sets the Update Inline Preview Action for this Data Actions Response .
- Return ChatDataActionsResponseBuilder — This object, for chaining. setUpdateInlinePreviewAction(updateInlinePreviewAction) Sets the UpdateInlinePreviewAction for this DataActionsResponse . const card = CardService . newCardBuilder () . setHeader ( CardService . newCardHeader () . setTitle ( "Unfurl Card!" )) . addSection ( CardService . newCardSection () . addWidget ( CardService . newTextParagraph () . setText ( "url" )) . addWidget ( CardService . newButtonSet () . addButton ( CardService . newTextButton () . setText ( "Open URL!" ) . setOpenLink ( CardService . newOpenLink () . setUrl ( "https://www.google.com" ))))) . build (); const cardWithId = CardService . newCardWithId () . setCardId ( "card one" ) . setCard ( card ); const chatDataAction = AddOnsResponseService . newChatDataActionBuilder () . setUpdateInlinePreviewAction ( AddOnsResponseService . newUpdateInlinePreviewAction () . addCardWithId ( cardWithId )) . build (); Parameters Name Type Description update Inline Preview Action Update Inline Preview Action The update inline preview to use.
- Return ChatDataActionsResponseBuilder — This object, for chaining. setUpdateChatMessageAction(updateMessageAction) Sets the UpdateMessageAction for this DataActionsResponse . const card = CardService . newCardBuilder () . setHeader ( CardService . newCardHeader () . setTitle ( "Card Title" )) . addSection ( CardService . newCardSection () . addWidget ( CardService . newTextParagraph () . setText ( "Text paragraph" ))) . build () const cardWithId = CardService . newCardWithId () . setCardId ( "card one" ) . setCard ( card ) const message = AddOnsResponseService . newChatMessage () . addCardWithId ( cardWithId ) const chatDataAction = AddOnsResponseService . newChatDataActionBuilder () . setUpdateChatMessageAction ( AddOnsResponseService . newUpdateMessageAction () . setMessage ( message )) . build () Parameters Name Type Description update Message Action Update Message Action The update message action to use.
- Return DataActionsResponse — A DataActionResponse . setCreateChatMessageAction(createMessageAction) Sets the CreateMessageAction for this DataActionsResponse . const card = CardService . newCardBuilder () . setHeader ( CardService . newCardHeader () . setTitle ( "Card Title" )) . addSection ( CardService . newCardSection () . addWidget ( CardService . newTextParagraph () . setText ( "Text paragraph" ))) . build () const cardWithId = CardService . newCardWithId () . setCardId ( "card one" ) . setCard ( card ) const message = AddOnsResponseService . newChatMessage () . addCardWithId ( cardWithId ) const chatDataAction = AddOnsResponseService . newChatDataActionBuilder () . setCreateChatMessageAction ( AddOnsResponseService . newCreateMessageAction () . setMessage ( message )) . build () Parameters Name Type Description create Message Action Create Message Action The create message action to use.

### Advanced Chat Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/chat](https://developers.google.com/apps-script/advanced/chat)
- Source ID: `site-docs-reference`
- Final score: 115
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This API lets scripts find, create, and modify Chat spaces, add or remove members to spaces, and read or post messages with text, cards, attachments, and reactions.
- Add the chat.messages.create authorization scope to the Apps Script project's appsscript.json file: "oauthScopes" : [ "https://www.googleapis.com/auth/chat.messages.create" ] Add a function like this one to the Apps Script project's code: advanced/chat.gs View on GitHub / Posts a new message to the specified space on behalf of the user. @param {string} spaceName The resource name of the space. / function postMessageWithUserCredentials ( spaceName ) { try { const message = { text : "Hello world!" }; Chat .
- Page Summary outlined flag The Advanced Chat service allows using the Google Chat API in Apps Script to manage Chat spaces, members, and messages.
- To create a compatible Google Chat app, see Build a Google Chat app with Google Apps Script .

