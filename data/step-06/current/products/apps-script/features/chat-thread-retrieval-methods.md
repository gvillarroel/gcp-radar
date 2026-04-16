---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.516Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Chat thread retrieval methods"
feature_slug: "chat-thread-retrieval-methods"
latest_feature_date: "2022-11-01"
deprecation_date: "2022-11-01"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/reference/add-ons-response-service/chat-message"
  - "https://developers.google.com/apps-script/reference/add-ons-response-service/accessory-widget"
keywords:
  - "chat"
  - "thread"
  - "retrieval"
  - "methods"
  - "let"
  - "apps"
  - "script"
  - "access"
---

# Chat thread retrieval methods

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Chat thread retrieval methods let Apps Script access chat threads through getChatThreads overloads; Chat thread retrieval methods let Apps Script access chat threads through getChatThreads overloads; deprecated on 2022-11-01.

## Extended Definition

Chat thread retrieval methods let Apps Script access chat threads through getChatThreads overloads; Chat thread retrieval methods let Apps Script access chat threads through getChatThreads overloads; deprecated on 2022-11-01.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/reference/add-ons-response-service/chat-message](https://developers.google.com/apps-script/reference/add-ons-response-service/chat-message)
- [https://developers.google.com/apps-script/reference/add-ons-response-service/accessory-widget](https://developers.google.com/apps-script/reference/add-ons-response-service/accessory-widget)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- July 08, 2022 Deprecated Apps Script has deprecated the following methods: getChatThreads() getChatThreads(start, max) These methods will become unavailable later this year once Google switches all users from Classic Hangouts to Google Chat.
- November 01, 2022 Deprecated Apps Script has sunset the following methods: getChatThreads() getChatThreads(start, max) There isn't a replacement method to get this data with Apps Script.
- Feature The Spreadsheet service has been extended with the following new classes and methods to support text styles and Rich Text cell formatting: RichTextValue RichTextValueBuilder TextStyle TextStyleBuilder Range.getRichTextValue() Range.getRichTextValues() Range.getTextStyle() Range.getTextStyles() Range.setRichTextValue(value) Range.setRichTextValues(values) Range.setTextStyle(style) Range.setTextStyles(styles) SpreadsheetApp.newRichTextValue() SpreadsheetApp.newTextStyle() The Data Studio service has been extended with the following new classes and methods that define and support authentication types for community connectors: GetAuthTypeResponse AuthType CommunityConnector,newAuthTypeResponse() January 04, 2019 Feature The Slides service has been extended with the following new classes and methods that support slide linking and text box insertion: SlideLinkingMode [ Layout.insertTextBox(text) }(https://developers.google.com/apps-script/reference/slides/layout#inserttextboxtext) Layout.insertTextBox(text, left, top, width, height) Master.insertTextBox(text) Master.insertTextBox(text, left, top, width, height) Page.insertTextBox(text) Page.insertTextBox(text, left, top, width, height) Presentation.appendSlide(slide, linkingMode) Presentation.insertSlide(insertionIndex, slide, linkingMode) Slide.getSlideLinkingMode() Slide.getSourcePresentationId() Slide.getSourceSlideObjectId() Slide.insertTextBox(text) Slide.insertTextBox(text, left, top, width, height) Slide.refreshSlide() Slide.unlink() The Data Studio service has been extended with the following new classes and methods that error displays: DebugError UserError CommunityConnector.newDebugError() CommunityConnector.newUserError() December 13, 2018 Deprecated The Fusion Tables advanced service has been deprecated and will shutdown fully on December 3rd, 2019.
- The Card service has been extended with the following classes and methods that provide new widgets and event responses: CalendarEventActionResponse CalendarEventActionResponseBuilder DatePicker DateTimePicker DisplayStyle DriveItemsSelectedActionResponse DriveItemsSelectedActionResponseBuilder FixedFooter SwitchControlType TimePicker CardBuilder.setDisplayStyle(displayStyle) CardBuilder.setFixedFooter(fixedFooter) CardBuilder.setPeekCardHeader(peekCardHeader) CardService.newCalendarEventActionResponseBuilder() CardService.newDatePicker() CardService.newDateTimePicker() CardService.newDriveItemsSelectedActionResponseBuilder() CardService.newFixedFooter() CardService.newTimePicker() Switch.setControlType(controlType) The Conference Data service has been added to Apps Script.

### Class ChatMessage \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/reference/add-ons-response-service/chat-message](https://developers.google.com/apps-script/reference/add-ons-response-service/chat-message)
- Source ID: `site-docs-reference-3`
- Final score: 90
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Available for Google Workspace add-ons that extend Google Chat. const card = CardService . newCardBuilder () . setHeader ( CardService . newCardHeader (). setTitle ( "Card Title" )) . addSection ( CardService . newCardSection () . addWidget ( CardService . newTextParagraph (). setText ( "Text paragraph" ))) . build (); const cardWithId = CardService . newCardWithId (). setCardId ( "card one" ). setCard ( card ); const message = AddOnsResponseService . newChatMessage (). addCardWithId ( cardWithId ); Methods Method Return type Brief description add Accessory Widget(accessoryWidget) Chat Message Sets the accessoryWidget for this action. add Card With Id(cardWithId) Chat Message Sets the card of the message. set Text(text) Chat Message Sets the text of the message.
- Home Google Workspace Apps Script Reference Send feedback Class ChatMessage Stay organized with collections Save and categorize content based on your preferences.
- Return ChatMessage — This object, for chaining. addCardWithId(cardWithId) Sets the card of the message. const card = CardService . newCardBuilder () . setHeader ( CardService . newCardHeader () . setTitle ( "Card Title" )) . addSection ( CardService . newCardSection () . addWidget ( CardService . newTextParagraph () . setText ( "Text paragraph" ))) . build (); const cardWithId = CardService . newCardWithId () . setCardId ( "card one" ) . setCard ( card ); const message = AddOnsResponseService . newChatMessage () . addCardWithId ( cardWithId ); Parameters Name Type Description card With Id Card With Id The cardWithId to set.
- Return ChatMessage — This object, for chaining. setText(text) Sets the text of the message. const message = AddOnsResponseService . newChatMessage () . setText ( "Example text" ); Parameters Name Type Description text String The text part of a message.

### Class AccessoryWidget \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/reference/add-ons-response-service/accessory-widget](https://developers.google.com/apps-script/reference/add-ons-response-service/accessory-widget)
- Source ID: `site-docs-reference-3`
- Final score: 80
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- PHONE ) . setOnClickAction ( CardService . newAction () . setFunctionName ( "phone" ))) . addButton ( CardService . newTextButton () . setText ( "Robot" ) . setIconUrl ( "https://developers.google.com/chat/images/quickstart-app-avatar.png" ) . setOnClickAction ( CardService . newAction () . setFunctionName ( "robot" ))); const accessoryWidget = AddOnsResponseService . newAccessoryWidget () . addWidget ( widget ); Methods Method Return type Brief description add Widget(widget) Accessory Widget Sets the widget for this action.
- Home Google Workspace Apps Script Reference Send feedback Class AccessoryWidget Stay organized with collections Save and categorize content based on your preferences.
- AccessoryWidget A builder for Chat AccessoryWidget objects.
- Available for Google Workspace add-ons that extend Google Chat. const widget = CardService . newButtonSet () . addButton ( CardService . newImageButton () . setIcon ( CardService .

