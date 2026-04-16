---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.496Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "AddOnsResponseService"
feature_slug: "addonsresponseservice"
latest_feature_date: "2026-03-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/reference/add-ons-response-service/add-ons-response-service"
  - "https://developers.google.com/apps-script/reference/add-ons-response-service/create-message-action"
keywords:
  - "addonsresponseservice"
  - "lets"
  - "developers"
  - "create"
  - "manage"
  - "interactive"
  - "responses"
  - "workspace"
---

# AddOnsResponseService

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

AddOnsResponseService lets developers create and manage interactive responses for Google Workspace add-ons that extend Google Chat.

## Extended Definition

AddOnsResponseService lets developers create and manage interactive responses for Google Workspace add-ons that extend Google Chat.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/reference/add-ons-response-service/add-ons-response-service](https://developers.google.com/apps-script/reference/add-ons-response-service/add-ons-response-service)
- [https://developers.google.com/apps-script/reference/add-ons-response-service/create-message-action](https://developers.google.com/apps-script/reference/add-ons-response-service/create-message-action)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 185
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This service allows developers to create and manage interactive responses for Google Workspace Add-ons that extend Google Chat.
- For more information, refer to the following documentation: Enum EventTransparency Class CalendarEvent Class CalendarEventSeries November 27, 2024 Feature The Calendar service now has a getEventType() method that lets developers differentiate regular events from other types of events like out-of-office and working location events.
- Feature Launched the Script service in response to this feature request , which allows developers to programmatically set triggers and manage the publishing of scripts as a service.
- March 24, 2022 Feature For Google Workspace Add-ons, an Attachment class has been added to the Card Service that lets you add custom attachments to Calendar events.

### Class AddOnsResponseService \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/reference/add-ons-response-service/add-ons-response-service](https://developers.google.com/apps-script/reference/add-ons-response-service/add-ons-response-service)
- Source ID: `site-docs-reference-3`
- Final score: 165
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- PHONE ) . setOnClickAction ( CardService . newAction () . setFunctionName ( "phone" ))) . addButton ( CardService . newTextButton () . setText ( "Robot" ) . setIconUrl ( "https://developers.google.com/chat/images/quickstart-app-avatar.png" ) . setOnClickAction ( CardService . newAction () . setFunctionName ( "robot" ))); const accessoryWidget = AddOnsResponseService . newAccessoryWidget () . addWidget ( widget ); Return AccessoryWidget — An empty AccessoryWidget. newAction() Creates a new Action .
- AddOnsResponseService AddOnsResponseService provides the ability to create responses for Google Workspace add-ons.
- Return UpdateDraftToRecipientsAction — An empty UpdateDraftToRecipientsAction. newUpdateInlinePreviewAction() Creates a UpdateInlinePreviewAction . const card = CardService . newCardBuilder () . setHeader ( CardService . newCardHeader (). setTitle ( "Unfurl Card!" )) . addSection ( CardService . newCardSection () . addWidget ( CardService . newTextParagraph (). setText ( "url" )) . addWidget ( CardService . newButtonSet () . addButton ( CardService . newTextButton () . setText ( "Open URL!" ) . setOpenLink ( CardService . newOpenLink (). setUrl ( "https://www.google.com" ))))) . build (); const cardWithId = CardService . newCardWithId (). setCardId ( "card one" ). setCard ( card ); const chatDataAction = AddOnsResponseService . newChatDataActionBuilder () . setUpdateInlinePreviewAction ( AddOnsResponseService . newUpdateInlinePreviewAction () . addCardWithId ( cardWithId )). build (); Return UpdateInlinePreviewAction — An empty UpdateInlinePreviewAction. newUpdateMessageAction() Creates a UpdateMessageAction . const card = CardService . newCardBuilder () . setHeader ( CardService . newCardHeader (). setTitle ( "Card Title" )) . addSection ( CardService . newCardSection () . addWidget ( CardService . newTextParagraph (). setText ( "Text paragraph" ))) . build (); const cardWithId = CardService . newCardWithId (). setCardId ( "card one" ). setCard ( card ); const message = AddOnsResponseService . newChatMessage (). addCardWithId ( cardWithId ); const chatDataAction = AddOnsResponseService . newChatDataActionBuilder () . setUpdateChatMessageAction ( AddOnsResponseService . newUpdateMessageAction () . setMessage ( message )) . build (); Return UpdateMessageAction — An empty UpdateMessageAction.
- Return CalendarEventActionResponseBuilder — An empty CalendarEventActionResponseBuilder . newChatDataActionBuilder() Creates a ChatDataActionsResponseBuilder . const card = CardService . newCardBuilder () . setHeader ( CardService . newCardHeader (). setTitle ( "Card Title" )) . addSection ( CardService . newCardSection () . addWidget ( CardService . newTextParagraph (). setText ( "Text paragraph" ))) . build (); const cardWithId = CardService . newCardWithId (). setCardId ( "card one" ). setCard ( card ); const message = AddOnsResponseService . newChatMessage (). addCardWithId ( cardWithId ); const chatDataAction = AddOnsResponseService . newChatDataActionBuilder () . setCreateChatMessageAction ( AddOnsResponseService . newCreateMessageAction () . setMessage ( message )) . build (); Return ChatDataActionsResponseBuilder — An empty ChatDataActionsResponseBuilder. newChatMessage() Creates a ChatMessage . const card = CardService . newCardBuilder () . setHeader ( CardService . newCardHeader (). setTitle ( "Card Title" )) . addSection ( CardService . newCardSection () . addWidget ( CardService . newTextParagraph (). setText ( "Text paragraph" ))) . build (); const cardWithId = CardService . newCardWithId (). setCardId ( "card one" ). setCard ( card ); const message = AddOnsResponseService . newChatMessage (). addCardWithId ( cardWithId ); Return ChatMessage — An empty ChatMessage. newComposeActionResponseBuilder() Creates a ComposeActionResponseBuilder .

### Class CreateMessageAction \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/reference/add-ons-response-service/create-message-action](https://developers.google.com/apps-script/reference/add-ons-response-service/create-message-action)
- Source ID: `site-docs-reference-3`
- Final score: 155
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Available for Google Workspace add-ons that extend Google Chat. const card = CardService . newCardBuilder () . setHeader ( CardService . newCardHeader (). setTitle ( "Card Title" )) . addSection ( CardService . newCardSection () . addWidget ( CardService . newTextParagraph (). setText ( "Text paragraph" ))) . build (); const cardWithId = CardService . newCardWithId (). setCardId ( "card one" ). setCard ( card ); const message = AddOnsResponseService . newChatMessage (). addCardWithId ( cardWithId ); const chatDataAction = AddOnsResponseService . newChatDataActionBuilder () . setCreateChatMessageAction ( AddOnsResponseService . newCreateMessageAction () . setMessage ( message )) . build (); Methods Method Return type Brief description set Message(message) Create Message Action Sets the message for this action.
- Detailed documentation setMessage(message) Sets the message for this action. const card = CardService . newCardBuilder () . setHeader ( CardService . newCardHeader (). setTitle ( "Card Title" )) . addSection ( CardService . newCardSection () . addWidget ( CardService . newTextParagraph (). setText ( "Text paragraph" ))) . build (); const cardWithId = CardService . newCardWithId (). setCardId ( "card one" ). setCard ( card ); const message = AddOnsResponseService . newChatMessage (). addCardWithId ( cardWithId ); const chatDataAction = AddOnsResponseService . newChatDataActionBuilder () . setCreateChatMessageAction ( AddOnsResponseService . newCreateMessageAction () . setMessage ( message )) . build (); Parameters Name Type Description message Chat Message The chat message to create.
- Home Google Workspace Apps Script Reference Send feedback Class CreateMessageAction Stay organized with collections Save and categorize content based on your preferences.
- CreateMessageAction A builder for Chat CreateMessageAction objects.

