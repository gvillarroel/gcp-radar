---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.512Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Card Service Action.setPersistValues"
feature_slug: "card-service-action-setpersistvalues"
latest_feature_date: "2023-12-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/reference/add-ons-response-service/chat-data-actions-response-builder"
  - "https://developers.google.com/apps-script/reference/add-ons-response-service"
keywords:
  - "card"
  - "action"
  - "setpersistvalues"
  - "lets"
  - "actions"
  - "control"
  - "whether"
  - "updated"
---

# Card Service Action.setPersistValues

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Action.setPersistValues lets Card Service actions control whether updated form values come from the client or the server.

## Extended Definition

Action.setPersistValues lets Card Service actions control whether updated form values come from the client or the server.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/reference/add-ons-response-service/chat-data-actions-response-builder](https://developers.google.com/apps-script/reference/add-ons-response-service/chat-data-actions-response-builder)
- [https://developers.google.com/apps-script/reference/add-ons-response-service](https://developers.google.com/apps-script/reference/add-ons-response-service)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- The following methods have been added to the Group , Image , Line , PageElement , Shape , SheetsChart , Table , Video , and WordArt classes: bringForward() bringToFront() sendBackward() sendToBack() setDescription(description) setTitle(title) The Spreadsheet service has been extended with the following new classes and methods that let you add and search for metadata strings attached to rows, columns, sheets, or spreadsheets: DeveloperMetadata DeveloperMetadataFinder DeveloperMetadataLocation DeveloperMetadataLocationType DeveloperMetadataVisibility Range.addDeveloperMetadata(key) Range.addDeveloperMetadata(key, visibility) Range.addDeveloperMetadata(key, value) Range.addDeveloperMetadata(key, value, visibility) Range.createDeveloperMetadataFinder() Range.getDeveloperMetadata() Sheet.addDeveloperMetadata(key) Sheet.addDeveloperMetadata(key, visibility) Sheet.addDeveloperMetadata(key, value) Sheet.addDeveloperMetadata(key, value, visibility) Sheet.createDeveloperMetadataFinder() Sheet.getDeveloperMetadata() Spreadsheet.addDeveloperMetadata(key) Spreadsheet.addDeveloperMetadata(key, visibility) Spreadsheet.addDeveloperMetadata(key, value) Spreadsheet.addDeveloperMetadata(key, value, visibility) Spreadsheet.createDeveloperMetadataFinder() Spreadsheet.getDeveloperMetadata() October 30, 2018 Feature The Spreadsheet service has been extended with the following new classes and methods: OverGridImage Sheet.getImages() Sheet.isColumnHiddenByUser(columnPosition) Sheet.isRowHiddenByFilter(rowPosition) Sheet.isRowHiddenByUser(rowPosition) Spreadsheet.getImages() Spreadsheet.isColumnHiddenByUser(columnPosition) Spreadsheet.isRowHiddenByFilter(rowPosition) Spreadsheet.isRowHiddenByUser(rowPosition) The following methods have been added to existing services: console service console.error() console.info() console.warn() DataStudio service Field.isHidden() Field.setIsHidden() Gmail service GmailAttachment.getHash() GmailMessage.getAttachments(options) Change The following methods in the Spreadsheet service now return an OverGridImage object instead of void: Sheet.insertImage(blobSource, column, row) Sheet.insertImage(blobSource, column, row, offsetX, offsetY) Sheet.insertImage(url, column, row) Sheet.insertImage(url, column, row, offsetX, offsetY) October 18, 2018 Feature The Card service has been extended with the following classes and methods to support Gmail add-on compose actions : CardService.UpdateDraftActionResponse CardService.UpdateDraftActionResponseBuilder CardService.UpdateDraftBodyAction CardService.ContentType CardService.UpdateDraftBodyType CardService.newUpdateDraftActionResponseBuilder() CardService.newUpdateDraftBodyAction() September 27, 2018 Announcement The Data Studio service is now available.
- The Card service has been extended with the following classes and methods that provide new widgets and event responses: CalendarEventActionResponse CalendarEventActionResponseBuilder DatePicker DateTimePicker DisplayStyle DriveItemsSelectedActionResponse DriveItemsSelectedActionResponseBuilder FixedFooter SwitchControlType TimePicker CardBuilder.setDisplayStyle(displayStyle) CardBuilder.setFixedFooter(fixedFooter) CardBuilder.setPeekCardHeader(peekCardHeader) CardService.newCalendarEventActionResponseBuilder() CardService.newDatePicker() CardService.newDateTimePicker() CardService.newDriveItemsSelectedActionResponseBuilder() CardService.newFixedFooter() CardService.newTimePicker() Switch.setControlType(controlType) The Conference Data service has been added to Apps Script.
- This means that you can now indicate whether form values are determined by the client's values or the server's values after an action response updates a form's card.
- December 13, 2023 Feature ( Generally available ): The setPersistValues(persistValues) method has been added to the Action class of the Card service .

### "Class ChatDataActionsResponseBuilder \_|\_ Apps Script \_|\_ Google for\

- URL: [https://developers.google.com/apps-script/reference/add-ons-response-service/chat-data-actions-response-builder](https://developers.google.com/apps-script/reference/add-ons-response-service/chat-data-actions-response-builder)
- Source ID: `site-docs-reference-3`
- Final score: 145
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Available for Google Workspace add-ons that extend Google Chat. const card = CardService . newCardBuilder () . setHeader ( CardService . newCardHeader (). setTitle ( "Card Title" )) . addSection ( CardService . newCardSection () . addWidget ( CardService . newTextParagraph (). setText ( "Text paragraph" ))) . build () const cardWithId = CardService . newCardWithId (). setCardId ( "card one" ). setCard ( card ) const message = AddOnsResponseService . newChatMessage (). addCardWithId ( cardWithId ) const chatDataAction = AddOnsResponseService . newChatDataActionBuilder () . setCreateChatMessageAction ( AddOnsResponseService . newCreateMessageAction () . setMessage ( message )) . build () Methods Method Return type Brief description build() Data Actions Response Builds the current action response. set Create Chat Message Action(createMessageAction) Chat Data Actions Response Builder Sets the Create Message Action for this Data Actions Response . set Update Chat Message Action(updateMessageAction) Chat Data Actions Response Builder Sets the Update Message Action for this Data Actions Response . set Update Inline Preview Action(updateInlinePreviewAction) Chat Data Actions Response Builder Sets the Update Inline Preview Action for this Data Actions Response .
- Return ChatDataActionsResponseBuilder — This object, for chaining. setUpdateInlinePreviewAction(updateInlinePreviewAction) Sets the UpdateInlinePreviewAction for this DataActionsResponse . const card = CardService . newCardBuilder () . setHeader ( CardService . newCardHeader () . setTitle ( "Unfurl Card!" )) . addSection ( CardService . newCardSection () . addWidget ( CardService . newTextParagraph () . setText ( "url" )) . addWidget ( CardService . newButtonSet () . addButton ( CardService . newTextButton () . setText ( "Open URL!" ) . setOpenLink ( CardService . newOpenLink () . setUrl ( "https://www.google.com" ))))) . build (); const cardWithId = CardService . newCardWithId () . setCardId ( "card one" ) . setCard ( card ); const chatDataAction = AddOnsResponseService . newChatDataActionBuilder () . setUpdateInlinePreviewAction ( AddOnsResponseService . newUpdateInlinePreviewAction () . addCardWithId ( cardWithId )) . build (); Parameters Name Type Description update Inline Preview Action Update Inline Preview Action The update inline preview to use.
- Return ChatDataActionsResponseBuilder — This object, for chaining. setUpdateChatMessageAction(updateMessageAction) Sets the UpdateMessageAction for this DataActionsResponse . const card = CardService . newCardBuilder () . setHeader ( CardService . newCardHeader () . setTitle ( "Card Title" )) . addSection ( CardService . newCardSection () . addWidget ( CardService . newTextParagraph () . setText ( "Text paragraph" ))) . build () const cardWithId = CardService . newCardWithId () . setCardId ( "card one" ) . setCard ( card ) const message = AddOnsResponseService . newChatMessage () . addCardWithId ( cardWithId ) const chatDataAction = AddOnsResponseService . newChatDataActionBuilder () . setUpdateChatMessageAction ( AddOnsResponseService . newUpdateMessageAction () . setMessage ( message )) . build () Parameters Name Type Description update Message Action Update Message Action The update message action to use.
- Return DataActionsResponse — A DataActionResponse . setCreateChatMessageAction(createMessageAction) Sets the CreateMessageAction for this DataActionsResponse . const card = CardService . newCardBuilder () . setHeader ( CardService . newCardHeader () . setTitle ( "Card Title" )) . addSection ( CardService . newCardSection () . addWidget ( CardService . newTextParagraph () . setText ( "Text paragraph" ))) . build () const cardWithId = CardService . newCardWithId () . setCardId ( "card one" ) . setCard ( card ) const message = AddOnsResponseService . newChatMessage () . addCardWithId ( cardWithId ) const chatDataAction = AddOnsResponseService . newChatDataActionBuilder () . setCreateChatMessageAction ( AddOnsResponseService . newCreateMessageAction () . setMessage ( message )) . build () Parameters Name Type Description create Message Action Create Message Action The create message action to use.

### AddOns Response Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/reference/add-ons-response-service](https://developers.google.com/apps-script/reference/add-ons-response-service)
- Source ID: `site-docs-reference-3`
- Final score: 123
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- UpdateDraftActionResponseBuilder Methods Method Return type Brief description build() Update Draft Action Response Builds the current update draft action response and validates it. set Send Status(sendStatus) Update Draft Action Response Builder Sets the enum field that determines whether or not the email sends after the update action. set Update Draft Bcc Recipients Action(updateDraftBccRecipientsAction) Update Draft Action Response Builder Sets an action that updates the email Bcc recipients of a draft. set Update Draft Body Action(updateDraftBodyAction) Update Draft Action Response Builder Set an action that updates the email body of a draft. set Update Draft Cc Recipients Action(updateDraftCcRecipientsAction) Update Draft Action Response Builder Sets an action that updates the Cc recipients of a draft. set Update Draft Subject Action(updateDraftSubjectAction) Update Draft Action Response Builder Sets an action that updates the subject line of a draft. set Update Draft To Recipients Action(updateDraftToRecipientsAction) Update Draft Action Response Builder Sets an action that updates the To recipients of a draft.
- Action Response The actions that add-ons can use in cards or the host application.
- Methods Method Return type Brief description new Accessory Widget() Accessory Widget Creates a new Accessory Widget . new Action() Action Creates a new Action . new Action Response Builder() Action Response Builder Creates a Action Response Builder . new Addon Compose Ui Action Response Builder() Addon Compose Ui Action Response Builder Creates a Addon Compose Ui Action Response Builder . new Attachment() Attachment Creates a Attachment . new Calendar Event Action Response Builder() Calendar Event Action Response Builder Creates a Calendar Event Action Response Builder . new Chat Data Action Builder() Chat Data Actions Response Builder Creates a Chat Data Actions Response Builder . new Chat Message() Chat Message Creates a Chat Message . new Compose Action Response Builder() Compose Action Response Builder Creates a Compose Action Response Builder . new Create Message Action() Create Message Action Creates a Create Message Action . new Drive Items Selected Action Response Builder() Drive Items Selected Action Response Builder Creates a Drive Items Selected Action Response Builder . new Editor File Scope Action Response Builder() Editor File Scope Action Response Builder Creates a Editor File Scope Action Response Builder . new Link Preview() Link Preview Creates a Link Preview . new Navigation() Navigation Creates a Navigation . new Notification() Notification Creates a Notification . new Open Link() Open Link Creates a Open Link . new Render Action Builder() Render Action Builder Creates a new Render Action Builder . new Universal Action Response Builder() Universal Action Response Builder Creates a Universal Action Response Builder . new Update Draft Action Response Builder() Update Draft Action Response Builder Creates a Update Draft Action Response Builder . new Update Draft Bcc Recipients Action() Update Draft Bcc Recipients Action Creates a Update Draft Bcc Recipients Action ; new Update Draft Body Action() Update Draft Body Action Creates a Update Draft Body Action . new Update Draft Cc Recipients Action() Update Draft Cc Recipients Action Creates a Update Draft Cc Recipients Action . new Update Draft Subject Action() Update Draft Subject Action Creates a Update Draft Subject Action . new Update Draft To Recipients Action() Update Draft To Recipients Action Creates a Update Draft To Recipients Action . new Update Inline Preview Action() Update Inline Preview Action Creates a Update Inline Preview Action . new Update Message Action() Update Message Action Creates a Update Message Action .
- Navigation Methods Method Return type Brief description pop Card() Navigation Developer Preview: Available as part of the Google Workspace Developer Preview Program , which grants early access to certain features. pop To Named Card(cardName) Navigation Developer Preview: Available as part of the Google Workspace Developer Preview Program , which grants early access to certain features. pop To Root() Navigation Developer Preview: Available as part of the Google Workspace Developer Preview Program , which grants early access to certain features. print Json() String Prints the JSON representation of this object. push Card(card) Navigation Pushes the given card onto the stack. set End Navigation(endNavigation) Navigation Sets the end navigation action. update Card(card) Navigation Does an in-place replacement of the current card.

