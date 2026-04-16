---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.551Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Card Service text button styling"
feature_slug: "card-service-text-button-styling"
latest_feature_date: "2018-11-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/reference/add-ons-response-service/add-ons-response-service"
  - "https://developers.google.com/apps-script/reference/add-ons-response-service/chat-data-actions-response-builder"
keywords:
  - "card"
  - "text"
  - "button"
  - "styling"
  - "apps"
  - "script"
  - "adds"
  - "background"
---

# Card Service text button styling

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Apps Script Card Service adds text button styling and background customization methods.

## Extended Definition

Apps Script Card Service adds text button styling and background customization methods.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/reference/add-ons-response-service/add-ons-response-service](https://developers.google.com/apps-script/reference/add-ons-response-service/add-ons-response-service)
- [https://developers.google.com/apps-script/reference/add-ons-response-service/chat-data-actions-response-builder](https://developers.google.com/apps-script/reference/add-ons-response-service/chat-data-actions-response-builder)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- March 15, 2024 Change The default property for the TextButtonStyle enum in the Apps Script Card Service has been renamed from TEXT to OUTLINED to align with the Google Material 3 design system .
- Feature The Slides service has been extended with the following new classes and methods that support connector lines: ConnnectionSite Group.getConnectionSites() Image.getConnectionSites() Line.getConnectionSites() Line.getEndConnection() Line.getLineCategory() Line.getStartConnection() Line.isConnector() Line.setEndConnection(connectionSite) Line.setLineCategory(lineCategory) Line.setStartConnection(connectionSite) LineCategory.UNSUPPORTED PageElement.getConnectionSites() Shape.getConnectionSites() SheetsChart.getConnectionSites() Table.getConnectionSites() Video.getConnectionSites() WordArt.getConnectionSites() November 14, 2018 Feature The Card service has been extended with the following new classes and methods that let you to customize the background of text button widgets: TextButtonStyle TextButton.setBackgroundColor(backgroundColor) TextButton.setDisabled(disabled) TextButton.setTextButtonStyle(textButtonStyle) The Slides service has been extended with the following new methods that let you control the Z-positioning of page elements in Slides.
- Feature The Spreadsheet service has been extended with the following new classes and methods to support text styles and Rich Text cell formatting: RichTextValue RichTextValueBuilder TextStyle TextStyleBuilder Range.getRichTextValue() Range.getRichTextValues() Range.getTextStyle() Range.getTextStyles() Range.setRichTextValue(value) Range.setRichTextValues(values) Range.setTextStyle(style) Range.setTextStyles(styles) SpreadsheetApp.newRichTextValue() SpreadsheetApp.newTextStyle() The Data Studio service has been extended with the following new classes and methods that define and support authentication types for community connectors: GetAuthTypeResponse AuthType CommunityConnector,newAuthTypeResponse() January 04, 2019 Feature The Slides service has been extended with the following new classes and methods that support slide linking and text box insertion: SlideLinkingMode [ Layout.insertTextBox(text) }(https://developers.google.com/apps-script/reference/slides/layout#inserttextboxtext) Layout.insertTextBox(text, left, top, width, height) Master.insertTextBox(text) Master.insertTextBox(text, left, top, width, height) Page.insertTextBox(text) Page.insertTextBox(text, left, top, width, height) Presentation.appendSlide(slide, linkingMode) Presentation.insertSlide(insertionIndex, slide, linkingMode) Slide.getSlideLinkingMode() Slide.getSourcePresentationId() Slide.getSourceSlideObjectId() Slide.insertTextBox(text) Slide.insertTextBox(text, left, top, width, height) Slide.refreshSlide() Slide.unlink() The Data Studio service has been extended with the following new classes and methods that error displays: DebugError UserError CommunityConnector.newDebugError() CommunityConnector.newUserError() December 13, 2018 Deprecated The Fusion Tables advanced service has been deprecated and will shutdown fully on December 3rd, 2019.
- The Card service has been extended with the following classes and methods that provide new widgets and event responses: CalendarEventActionResponse CalendarEventActionResponseBuilder DatePicker DateTimePicker DisplayStyle DriveItemsSelectedActionResponse DriveItemsSelectedActionResponseBuilder FixedFooter SwitchControlType TimePicker CardBuilder.setDisplayStyle(displayStyle) CardBuilder.setFixedFooter(fixedFooter) CardBuilder.setPeekCardHeader(peekCardHeader) CardService.newCalendarEventActionResponseBuilder() CardService.newDatePicker() CardService.newDateTimePicker() CardService.newDriveItemsSelectedActionResponseBuilder() CardService.newFixedFooter() CardService.newTimePicker() Switch.setControlType(controlType) The Conference Data service has been added to Apps Script.

### Class AddOnsResponseService \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/reference/add-ons-response-service/add-ons-response-service](https://developers.google.com/apps-script/reference/add-ons-response-service/add-ons-response-service)
- Source ID: `site-docs-reference-3`
- Final score: 114
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Sample usage: function myFunction () { return AddOnsResponseService . newChatDataActionBuilder (); } The following example shows how a Chat app responds with a dialog: const card = CardService . newCardBuilder () . setHeader ( CardService . newCardHeader () . setTitle ( "Card Title" )) . addSection ( CardService . newCardSection () . addWidget ( CardService . newTextParagraph () . setText ( "Text paragraph" ))) . build (); const actionResponse = AddOnsResponseService . newActionResponseBuilder () . setNavigation ( AddOnsResponseService . newNavigation () . pushCard ( card )) . build (); The following example shows how a Chat app responds with a link preview card: const card = CardService . newCardBuilder () . setHeader ( CardService . newCardHeader () . setTitle ( "Unfurl Card!" )) . addSection ( CardService . newCardSection () . addWidget ( CardService . newTextParagraph () . setText ( "url" )) . addWidget ( CardService . newButtonSet () . addButton ( CardService . newTextButton () . setText ( "Open URL!" ) . setOpenLink ( CardService . newOpenLink () . setUrl ( "https://www.google.com" ))))) . build (); const cardWithId = CardService . newCardWithId () . setCardId ( "card one" ) . setCard ( card ); const chatDataAction = AddOnsResponseService . newChatDataActionBuilder () . setUpdateInlinePreviewAction ( AddOnsResponseService . newUpdateInlinePreviewAction () . addCardWithId ( cardWithId )) . build (); Properties Property Type Description Addon Compose Ui Action Type Addon Compose Ui Action Type The Addon Compose Ui Action Type enumeration.
- Return UpdateDraftToRecipientsAction — An empty UpdateDraftToRecipientsAction. newUpdateInlinePreviewAction() Creates a UpdateInlinePreviewAction . const card = CardService . newCardBuilder () . setHeader ( CardService . newCardHeader (). setTitle ( "Unfurl Card!" )) . addSection ( CardService . newCardSection () . addWidget ( CardService . newTextParagraph (). setText ( "url" )) . addWidget ( CardService . newButtonSet () . addButton ( CardService . newTextButton () . setText ( "Open URL!" ) . setOpenLink ( CardService . newOpenLink (). setUrl ( "https://www.google.com" ))))) . build (); const cardWithId = CardService . newCardWithId (). setCardId ( "card one" ). setCard ( card ); const chatDataAction = AddOnsResponseService . newChatDataActionBuilder () . setUpdateInlinePreviewAction ( AddOnsResponseService . newUpdateInlinePreviewAction () . addCardWithId ( cardWithId )). build (); Return UpdateInlinePreviewAction — An empty UpdateInlinePreviewAction. newUpdateMessageAction() Creates a UpdateMessageAction . const card = CardService . newCardBuilder () . setHeader ( CardService . newCardHeader (). setTitle ( "Card Title" )) . addSection ( CardService . newCardSection () . addWidget ( CardService . newTextParagraph (). setText ( "Text paragraph" ))) . build (); const cardWithId = CardService . newCardWithId (). setCardId ( "card one" ). setCard ( card ); const message = AddOnsResponseService . newChatMessage (). addCardWithId ( cardWithId ); const chatDataAction = AddOnsResponseService . newChatDataActionBuilder () . setUpdateChatMessageAction ( AddOnsResponseService . newUpdateMessageAction () . setMessage ( message )) . build (); Return UpdateMessageAction — An empty UpdateMessageAction.
- Return CalendarEventActionResponseBuilder — An empty CalendarEventActionResponseBuilder . newChatDataActionBuilder() Creates a ChatDataActionsResponseBuilder . const card = CardService . newCardBuilder () . setHeader ( CardService . newCardHeader (). setTitle ( "Card Title" )) . addSection ( CardService . newCardSection () . addWidget ( CardService . newTextParagraph (). setText ( "Text paragraph" ))) . build (); const cardWithId = CardService . newCardWithId (). setCardId ( "card one" ). setCard ( card ); const message = AddOnsResponseService . newChatMessage (). addCardWithId ( cardWithId ); const chatDataAction = AddOnsResponseService . newChatDataActionBuilder () . setCreateChatMessageAction ( AddOnsResponseService . newCreateMessageAction () . setMessage ( message )) . build (); Return ChatDataActionsResponseBuilder — An empty ChatDataActionsResponseBuilder. newChatMessage() Creates a ChatMessage . const card = CardService . newCardBuilder () . setHeader ( CardService . newCardHeader (). setTitle ( "Card Title" )) . addSection ( CardService . newCardSection () . addWidget ( CardService . newTextParagraph (). setText ( "Text paragraph" ))) . build (); const cardWithId = CardService . newCardWithId (). setCardId ( "card one" ). setCard ( card ); const message = AddOnsResponseService . newChatMessage (). addCardWithId ( cardWithId ); Return ChatMessage — An empty ChatMessage. newComposeActionResponseBuilder() Creates a ComposeActionResponseBuilder .
- Return ComposeActionResponseBuilder — An empty ComposeActionResponse builder. newCreateMessageAction() Creates a CreateMessageAction . const card = CardService . newCardBuilder () . setHeader ( CardService . newCardHeader (). setTitle ( "Card Title" )) . addSection ( CardService . newCardSection () . addWidget ( CardService . newTextParagraph (). setText ( "Text paragraph" ))) . build (); const cardWithId = CardService . newCardWithId (). setCardId ( "card one" ). setCard ( card ); const message = AddOnsResponseService . newChatMessage (). addCardWithId ( cardWithId ); const chatDataAction = AddOnsResponseService . newChatDataActionBuilder () . setCreateChatMessageAction ( AddOnsResponseService . newCreateMessageAction () . setMessage ( message )) . build (); Return CreateMessageAction — An empty CreateMessageAction. newDriveItemsSelectedActionResponseBuilder() Creates a DriveItemsSelectedActionResponseBuilder .

### "Class ChatDataActionsResponseBuilder \_|\_ Apps Script \_|\_ Google for\

- URL: [https://developers.google.com/apps-script/reference/add-ons-response-service/chat-data-actions-response-builder](https://developers.google.com/apps-script/reference/add-ons-response-service/chat-data-actions-response-builder)
- Source ID: `site-docs-reference-3`
- Final score: 98
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Return ChatDataActionsResponseBuilder — This object, for chaining. setUpdateInlinePreviewAction(updateInlinePreviewAction) Sets the UpdateInlinePreviewAction for this DataActionsResponse . const card = CardService . newCardBuilder () . setHeader ( CardService . newCardHeader () . setTitle ( "Unfurl Card!" )) . addSection ( CardService . newCardSection () . addWidget ( CardService . newTextParagraph () . setText ( "url" )) . addWidget ( CardService . newButtonSet () . addButton ( CardService . newTextButton () . setText ( "Open URL!" ) . setOpenLink ( CardService . newOpenLink () . setUrl ( "https://www.google.com" ))))) . build (); const cardWithId = CardService . newCardWithId () . setCardId ( "card one" ) . setCard ( card ); const chatDataAction = AddOnsResponseService . newChatDataActionBuilder () . setUpdateInlinePreviewAction ( AddOnsResponseService . newUpdateInlinePreviewAction () . addCardWithId ( cardWithId )) . build (); Parameters Name Type Description update Inline Preview Action Update Inline Preview Action The update inline preview to use.
- Available for Google Workspace add-ons that extend Google Chat. const card = CardService . newCardBuilder () . setHeader ( CardService . newCardHeader (). setTitle ( "Card Title" )) . addSection ( CardService . newCardSection () . addWidget ( CardService . newTextParagraph (). setText ( "Text paragraph" ))) . build () const cardWithId = CardService . newCardWithId (). setCardId ( "card one" ). setCard ( card ) const message = AddOnsResponseService . newChatMessage (). addCardWithId ( cardWithId ) const chatDataAction = AddOnsResponseService . newChatDataActionBuilder () . setCreateChatMessageAction ( AddOnsResponseService . newCreateMessageAction () . setMessage ( message )) . build () Methods Method Return type Brief description build() Data Actions Response Builds the current action response. set Create Chat Message Action(createMessageAction) Chat Data Actions Response Builder Sets the Create Message Action for this Data Actions Response . set Update Chat Message Action(updateMessageAction) Chat Data Actions Response Builder Sets the Update Message Action for this Data Actions Response . set Update Inline Preview Action(updateInlinePreviewAction) Chat Data Actions Response Builder Sets the Update Inline Preview Action for this Data Actions Response .
- Return ChatDataActionsResponseBuilder — This object, for chaining. setUpdateChatMessageAction(updateMessageAction) Sets the UpdateMessageAction for this DataActionsResponse . const card = CardService . newCardBuilder () . setHeader ( CardService . newCardHeader () . setTitle ( "Card Title" )) . addSection ( CardService . newCardSection () . addWidget ( CardService . newTextParagraph () . setText ( "Text paragraph" ))) . build () const cardWithId = CardService . newCardWithId () . setCardId ( "card one" ) . setCard ( card ) const message = AddOnsResponseService . newChatMessage () . addCardWithId ( cardWithId ) const chatDataAction = AddOnsResponseService . newChatDataActionBuilder () . setUpdateChatMessageAction ( AddOnsResponseService . newUpdateMessageAction () . setMessage ( message )) . build () Parameters Name Type Description update Message Action Update Message Action The update message action to use.
- Return DataActionsResponse — A DataActionResponse . setCreateChatMessageAction(createMessageAction) Sets the CreateMessageAction for this DataActionsResponse . const card = CardService . newCardBuilder () . setHeader ( CardService . newCardHeader () . setTitle ( "Card Title" )) . addSection ( CardService . newCardSection () . addWidget ( CardService . newTextParagraph () . setText ( "Text paragraph" ))) . build () const cardWithId = CardService . newCardWithId () . setCardId ( "card one" ) . setCard ( card ) const message = AddOnsResponseService . newChatMessage () . addCardWithId ( cardWithId ) const chatDataAction = AddOnsResponseService . newChatDataActionBuilder () . setCreateChatMessageAction ( AddOnsResponseService . newCreateMessageAction () . setMessage ( message )) . build () Parameters Name Type Description create Message Action Create Message Action The create message action to use.

