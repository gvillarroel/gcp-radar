---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.558Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Forms response deletion"
feature_slug: "forms-response-deletion"
latest_feature_date: "2018-06-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/reference/add-ons-response-service/add-ons-response-service"
  - "https://developers.google.com/apps-script/reference/add-ons-response-service/chat-data-actions-response-builder"
keywords:
  - "forms"
  - "response"
  - "deletion"
  - "apps"
  - "script"
  - "adds"
  - "form"
  - "deleteresponse"
---

# Forms response deletion

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Apps Script Forms service adds Form.deleteResponse() to delete a form response by ID.

## Extended Definition

Apps Script Forms service adds Form.deleteResponse() to delete a form response by ID.

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
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Feature The Spreadsheet service has been extended with the following new classes and methods to support text styles and Rich Text cell formatting: RichTextValue RichTextValueBuilder TextStyle TextStyleBuilder Range.getRichTextValue() Range.getRichTextValues() Range.getTextStyle() Range.getTextStyles() Range.setRichTextValue(value) Range.setRichTextValues(values) Range.setTextStyle(style) Range.setTextStyles(styles) SpreadsheetApp.newRichTextValue() SpreadsheetApp.newTextStyle() The Data Studio service has been extended with the following new classes and methods that define and support authentication types for community connectors: GetAuthTypeResponse AuthType CommunityConnector,newAuthTypeResponse() January 04, 2019 Feature The Slides service has been extended with the following new classes and methods that support slide linking and text box insertion: SlideLinkingMode [ Layout.insertTextBox(text) }(https://developers.google.com/apps-script/reference/slides/layout#inserttextboxtext) Layout.insertTextBox(text, left, top, width, height) Master.insertTextBox(text) Master.insertTextBox(text, left, top, width, height) Page.insertTextBox(text) Page.insertTextBox(text, left, top, width, height) Presentation.appendSlide(slide, linkingMode) Presentation.insertSlide(insertionIndex, slide, linkingMode) Slide.getSlideLinkingMode() Slide.getSourcePresentationId() Slide.getSourceSlideObjectId() Slide.insertTextBox(text) Slide.insertTextBox(text, left, top, width, height) Slide.refreshSlide() Slide.unlink() The Data Studio service has been extended with the following new classes and methods that error displays: DebugError UserError CommunityConnector.newDebugError() CommunityConnector.newUserError() December 13, 2018 Deprecated The Fusion Tables advanced service has been deprecated and will shutdown fully on December 3rd, 2019.
- Feature The Forms service now has the following method: Form.deleteResponse(responseId) The Utilities service now has the following methods: Utilities.computeDigest(algorithm, value) , where value is a Byte array Utilities.computeHmacSha256Signature(value, key) , where value and key are Byte arrays Utilities.computeHmacSignature(algorithm, value, key) , where value and key are Byte arrays Change The quota limits for UrlFetch GET response size and POST size have been increased to 50MB / call.
- Page Summary outlined flag Several Apps Script services have been updated, including the Spreadsheet, Forms, Calendar, Docs, Chat, and Google Workspace Add-ons services, adding new features and capabilities.
- April 26, 2017 Feature Quizzes in Google Forms is now accessible from the Apps Script Forms service .

### Class AddOnsResponseService \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/reference/add-ons-response-service/add-ons-response-service](https://developers.google.com/apps-script/reference/add-ons-response-service/add-ons-response-service)
- Source ID: `site-docs-reference-3`
- Final score: 103
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Sample usage: function myFunction () { return AddOnsResponseService . newChatDataActionBuilder (); } The following example shows how a Chat app responds with a dialog: const card = CardService . newCardBuilder () . setHeader ( CardService . newCardHeader () . setTitle ( "Card Title" )) . addSection ( CardService . newCardSection () . addWidget ( CardService . newTextParagraph () . setText ( "Text paragraph" ))) . build (); const actionResponse = AddOnsResponseService . newActionResponseBuilder () . setNavigation ( AddOnsResponseService . newNavigation () . pushCard ( card )) . build (); The following example shows how a Chat app responds with a link preview card: const card = CardService . newCardBuilder () . setHeader ( CardService . newCardHeader () . setTitle ( "Unfurl Card!" )) . addSection ( CardService . newCardSection () . addWidget ( CardService . newTextParagraph () . setText ( "url" )) . addWidget ( CardService . newButtonSet () . addButton ( CardService . newTextButton () . setText ( "Open URL!" ) . setOpenLink ( CardService . newOpenLink () . setUrl ( "https://www.google.com" ))))) . build (); const cardWithId = CardService . newCardWithId () . setCardId ( "card one" ) . setCard ( card ); const chatDataAction = AddOnsResponseService . newChatDataActionBuilder () . setUpdateInlinePreviewAction ( AddOnsResponseService . newUpdateInlinePreviewAction () . addCardWithId ( cardWithId )) . build (); Properties Property Type Description Addon Compose Ui Action Type Addon Compose Ui Action Type The Addon Compose Ui Action Type enumeration.
- Home Google Workspace Apps Script Reference Send feedback Class AddOnsResponseService Stay organized with collections Save and categorize content based on your preferences.
- Methods Method Return type Brief description new Accessory Widget() Accessory Widget Creates a new Accessory Widget . new Action() Action Creates a new Action . new Action Response Builder() Action Response Builder Creates a Action Response Builder . new Addon Compose Ui Action Response Builder() Addon Compose Ui Action Response Builder Creates a Addon Compose Ui Action Response Builder . new Attachment() Attachment Creates a Attachment . new Calendar Event Action Response Builder() Calendar Event Action Response Builder Creates a Calendar Event Action Response Builder . new Chat Data Action Builder() Chat Data Actions Response Builder Creates a Chat Data Actions Response Builder . new Chat Message() Chat Message Creates a Chat Message . new Compose Action Response Builder() Compose Action Response Builder Creates a Compose Action Response Builder . new Create Message Action() Create Message Action Creates a Create Message Action . new Drive Items Selected Action Response Builder() Drive Items Selected Action Response Builder Creates a Drive Items Selected Action Response Builder . new Editor File Scope Action Response Builder() Editor File Scope Action Response Builder Creates a Editor File Scope Action Response Builder . new Link Preview() Link Preview Creates a Link Preview . new Navigation() Navigation Creates a Navigation . new Notification() Notification Creates a Notification . new Open Link() Open Link Creates a Open Link . new Render Action Builder() Render Action Builder Creates a new Render Action Builder . new Universal Action Response Builder() Universal Action Response Builder Creates a Universal Action Response Builder . new Update Draft Action Response Builder() Update Draft Action Response Builder Creates a Update Draft Action Response Builder . new Update Draft Bcc Recipients Action() Update Draft Bcc Recipients Action Creates a Update Draft Bcc Recipients Action ; new Update Draft Body Action() Update Draft Body Action Creates a Update Draft Body Action . new Update Draft Cc Recipients Action() Update Draft Cc Recipients Action Creates a Update Draft Cc Recipients Action . new Update Draft Subject Action() Update Draft Subject Action Creates a Update Draft Subject Action . new Update Draft To Recipients Action() Update Draft To Recipients Action Creates a Update Draft To Recipients Action . new Update Inline Preview Action() Update Inline Preview Action Creates a Update Inline Preview Action . new Update Message Action() Update Message Action Creates a Update Message Action .
- Return UpdateDraftToRecipientsAction — An empty UpdateDraftToRecipientsAction. newUpdateInlinePreviewAction() Creates a UpdateInlinePreviewAction . const card = CardService . newCardBuilder () . setHeader ( CardService . newCardHeader (). setTitle ( "Unfurl Card!" )) . addSection ( CardService . newCardSection () . addWidget ( CardService . newTextParagraph (). setText ( "url" )) . addWidget ( CardService . newButtonSet () . addButton ( CardService . newTextButton () . setText ( "Open URL!" ) . setOpenLink ( CardService . newOpenLink (). setUrl ( "https://www.google.com" ))))) . build (); const cardWithId = CardService . newCardWithId (). setCardId ( "card one" ). setCard ( card ); const chatDataAction = AddOnsResponseService . newChatDataActionBuilder () . setUpdateInlinePreviewAction ( AddOnsResponseService . newUpdateInlinePreviewAction () . addCardWithId ( cardWithId )). build (); Return UpdateInlinePreviewAction — An empty UpdateInlinePreviewAction. newUpdateMessageAction() Creates a UpdateMessageAction . const card = CardService . newCardBuilder () . setHeader ( CardService . newCardHeader (). setTitle ( "Card Title" )) . addSection ( CardService . newCardSection () . addWidget ( CardService . newTextParagraph (). setText ( "Text paragraph" ))) . build (); const cardWithId = CardService . newCardWithId (). setCardId ( "card one" ). setCard ( card ); const message = AddOnsResponseService . newChatMessage (). addCardWithId ( cardWithId ); const chatDataAction = AddOnsResponseService . newChatDataActionBuilder () . setUpdateChatMessageAction ( AddOnsResponseService . newUpdateMessageAction () . setMessage ( message )) . build (); Return UpdateMessageAction — An empty UpdateMessageAction.

### "Class ChatDataActionsResponseBuilder \_|\_ Apps Script \_|\_ Google for\

- URL: [https://developers.google.com/apps-script/reference/add-ons-response-service/chat-data-actions-response-builder](https://developers.google.com/apps-script/reference/add-ons-response-service/chat-data-actions-response-builder)
- Source ID: `site-docs-reference-3`
- Final score: 99
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Available for Google Workspace add-ons that extend Google Chat. const card = CardService . newCardBuilder () . setHeader ( CardService . newCardHeader (). setTitle ( "Card Title" )) . addSection ( CardService . newCardSection () . addWidget ( CardService . newTextParagraph (). setText ( "Text paragraph" ))) . build () const cardWithId = CardService . newCardWithId (). setCardId ( "card one" ). setCard ( card ) const message = AddOnsResponseService . newChatMessage (). addCardWithId ( cardWithId ) const chatDataAction = AddOnsResponseService . newChatDataActionBuilder () . setCreateChatMessageAction ( AddOnsResponseService . newCreateMessageAction () . setMessage ( message )) . build () Methods Method Return type Brief description build() Data Actions Response Builds the current action response. set Create Chat Message Action(createMessageAction) Chat Data Actions Response Builder Sets the Create Message Action for this Data Actions Response . set Update Chat Message Action(updateMessageAction) Chat Data Actions Response Builder Sets the Update Message Action for this Data Actions Response . set Update Inline Preview Action(updateInlinePreviewAction) Chat Data Actions Response Builder Sets the Update Inline Preview Action for this Data Actions Response .
- Return ChatDataActionsResponseBuilder — This object, for chaining. setUpdateInlinePreviewAction(updateInlinePreviewAction) Sets the UpdateInlinePreviewAction for this DataActionsResponse . const card = CardService . newCardBuilder () . setHeader ( CardService . newCardHeader () . setTitle ( "Unfurl Card!" )) . addSection ( CardService . newCardSection () . addWidget ( CardService . newTextParagraph () . setText ( "url" )) . addWidget ( CardService . newButtonSet () . addButton ( CardService . newTextButton () . setText ( "Open URL!" ) . setOpenLink ( CardService . newOpenLink () . setUrl ( "https://www.google.com" ))))) . build (); const cardWithId = CardService . newCardWithId () . setCardId ( "card one" ) . setCard ( card ); const chatDataAction = AddOnsResponseService . newChatDataActionBuilder () . setUpdateInlinePreviewAction ( AddOnsResponseService . newUpdateInlinePreviewAction () . addCardWithId ( cardWithId )) . build (); Parameters Name Type Description update Inline Preview Action Update Inline Preview Action The update inline preview to use.
- Return ChatDataActionsResponseBuilder — This object, for chaining. setUpdateChatMessageAction(updateMessageAction) Sets the UpdateMessageAction for this DataActionsResponse . const card = CardService . newCardBuilder () . setHeader ( CardService . newCardHeader () . setTitle ( "Card Title" )) . addSection ( CardService . newCardSection () . addWidget ( CardService . newTextParagraph () . setText ( "Text paragraph" ))) . build () const cardWithId = CardService . newCardWithId () . setCardId ( "card one" ) . setCard ( card ) const message = AddOnsResponseService . newChatMessage () . addCardWithId ( cardWithId ) const chatDataAction = AddOnsResponseService . newChatDataActionBuilder () . setUpdateChatMessageAction ( AddOnsResponseService . newUpdateMessageAction () . setMessage ( message )) . build () Parameters Name Type Description update Message Action Update Message Action The update message action to use.
- Return DataActionsResponse — A DataActionResponse . setCreateChatMessageAction(createMessageAction) Sets the CreateMessageAction for this DataActionsResponse . const card = CardService . newCardBuilder () . setHeader ( CardService . newCardHeader () . setTitle ( "Card Title" )) . addSection ( CardService . newCardSection () . addWidget ( CardService . newTextParagraph () . setText ( "Text paragraph" ))) . build () const cardWithId = CardService . newCardWithId () . setCardId ( "card one" ) . setCard ( card ) const message = AddOnsResponseService . newChatMessage () . addCardWithId ( cardWithId ) const chatDataAction = AddOnsResponseService . newChatDataActionBuilder () . setCreateChatMessageAction ( AddOnsResponseService . newCreateMessageAction () . setMessage ( message )) . build () Parameters Name Type Description create Message Action Create Message Action The create message action to use.

