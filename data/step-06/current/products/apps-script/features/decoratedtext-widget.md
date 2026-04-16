---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.525Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "DecoratedText widget"
feature_slug: "decoratedtext-widget"
latest_feature_date: "2020-08-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/reference/add-ons-response-service/link-preview"
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/reference/add-ons-response-service/insert-widget"
keywords:
  - "decoratedtext"
  - "widget"
  - "apps"
  - "script"
  - "card"
  - "adds"
  - "displaying"
  - "text"
---

# DecoratedText widget

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Apps Script Card Service adds the DecoratedText widget for displaying text with optional decorations.

## Extended Definition

Apps Script Card Service adds the DecoratedText widget for displaying text with optional decorations.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/reference/add-ons-response-service/link-preview](https://developers.google.com/apps-script/reference/add-ons-response-service/link-preview)
- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/reference/add-ons-response-service/insert-widget](https://developers.google.com/apps-script/reference/add-ons-response-service/insert-widget)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- The Card service has been extended with the following classes and methods that provide new widgets and event responses: CalendarEventActionResponse CalendarEventActionResponseBuilder DatePicker DateTimePicker DisplayStyle DriveItemsSelectedActionResponse DriveItemsSelectedActionResponseBuilder FixedFooter SwitchControlType TimePicker CardBuilder.setDisplayStyle(displayStyle) CardBuilder.setFixedFooter(fixedFooter) CardBuilder.setPeekCardHeader(peekCardHeader) CardService.newCalendarEventActionResponseBuilder() CardService.newDatePicker() CardService.newDateTimePicker() CardService.newDriveItemsSelectedActionResponseBuilder() CardService.newFixedFooter() CardService.newTimePicker() Switch.setControlType(controlType) The Conference Data service has been added to Apps Script.
- FileIterator.getContinuationToken() FolderIterator.getContinuationToken() DriveApp.continueFileIterator(continuationToken) DriveApp.continueFolderIterator(continuationToken) Deprecated The UiApp widgets Hyperlink , InlineHyperlink , LayoutPanel , and RichTextArea have now been disabled, as announced on March 13, 2013 and documented in the Apps Script sunset schedule .
- March 15, 2024 Change The default property for the TextButtonStyle enum in the Apps Script Card Service has been renamed from TEXT to OUTLINED to align with the Google Material 3 design system .
- Feature The Spreadsheet service has been extended with the following new classes and methods to support text styles and Rich Text cell formatting: RichTextValue RichTextValueBuilder TextStyle TextStyleBuilder Range.getRichTextValue() Range.getRichTextValues() Range.getTextStyle() Range.getTextStyles() Range.setRichTextValue(value) Range.setRichTextValues(values) Range.setTextStyle(style) Range.setTextStyles(styles) SpreadsheetApp.newRichTextValue() SpreadsheetApp.newTextStyle() The Data Studio service has been extended with the following new classes and methods that define and support authentication types for community connectors: GetAuthTypeResponse AuthType CommunityConnector,newAuthTypeResponse() January 04, 2019 Feature The Slides service has been extended with the following new classes and methods that support slide linking and text box insertion: SlideLinkingMode [ Layout.insertTextBox(text) }(https://developers.google.com/apps-script/reference/slides/layout#inserttextboxtext) Layout.insertTextBox(text, left, top, width, height) Master.insertTextBox(text) Master.insertTextBox(text, left, top, width, height) Page.insertTextBox(text) Page.insertTextBox(text, left, top, width, height) Presentation.appendSlide(slide, linkingMode) Presentation.insertSlide(insertionIndex, slide, linkingMode) Slide.getSlideLinkingMode() Slide.getSourcePresentationId() Slide.getSourceSlideObjectId() Slide.insertTextBox(text) Slide.insertTextBox(text, left, top, width, height) Slide.refreshSlide() Slide.unlink() The Data Studio service has been extended with the following new classes and methods that error displays: DebugError UserError CommunityConnector.newDebugError() CommunityConnector.newUserError() December 13, 2018 Deprecated The Fusion Tables advanced service has been deprecated and will shutdown fully on December 3rd, 2019.

### Class InsertWidget \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/reference/add-ons-response-service/insert-widget](https://developers.google.com/apps-script/reference/add-ons-response-service/insert-widget)
- Source ID: `site-docs-reference-3`
- Final score: 98
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Sample usage: const newWidget = CardService . newDecoratedText (). setText ( 'New Widget' ); const insertWidget = AddOnsResponseService . newInsertWidget () . insertAboveWidget ( 'sample id' ) . setWidget ( newWidget ); const modifyCard = AddOnsResponseService . newModifyCard (). setInsertWidget ( insertWidget ); Methods Method Return type Brief description insert Above Widget(widgetId) Insert Widget Sets the widget ID, and the new widget is inserted above the widget with the given ID. insert Below Widget(widgetId) Insert Widget Sets the widget ID, and the new widget is inserted below the widget with the given ID. set Widget(widget) Insert Widget Sets the Widget to be inserted.
- Home Google Workspace Apps Script Reference Send feedback Class InsertWidget Stay organized with collections Save and categorize content based on your preferences.
- Developers cans insert a widget into a card by passing a InsertWidget to ModifyCard Only available for Google Workspace add-ons that extend Google Workspace Studio.
- Parameters Name Type Description widget Id String The ID of the widget to insert above.

### Class LinkPreview \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/reference/add-ons-response-service/link-preview](https://developers.google.com/apps-script/reference/add-ons-response-service/link-preview)
- Source ID: `site-docs-reference-3`
- Final score: 96
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, refer to Preview links with smart chips . const decoratedText = CardService . newDecoratedText (). setTopLabel ( 'Hello' ). setText ( 'Hi!' ); const cardSection = CardService . newCardSection (). addWidget ( decoratedText ); const card = CardService . newCardBuilder (). addSection ( cardSection ). build (); const linkPreview = AddOnsResponseService . newLinkPreview (). setPreviewCard ( card ). setTitle ( 'Smart chip title' ); Methods Method Return type Brief description print Json() String Prints the JSON representation of this object. set Link Preview Title(title) Link Preview Sets the title that displays in the link preview above the preview card. set Preview Card(previewCard) Link Preview Sets the card that displays information about a link from a third-party or non-Google service. set Title(title) Link Preview Sets the title that displays in the smart chip for the link preview.
- Return LinkPreview — This object, for chaining. setPreviewCard(previewCard) Sets the card that displays information about a link from a third-party or non-Google service. const decoratedText = CardService . newDecoratedText (). setTopLabel ( 'Hello' ). setText ( 'Hi!' ); const cardSection = CardService . newCardSection (). addWidget ( decoratedText ); const card = CardService . newCardBuilder (). addSection ( cardSection ). build (); const linkPreview = AddOnsResponseService . newLinkPreview (). setPreviewCard ( card ). setTitle ( 'Smart chip title' ); Parameters Name Type Description preview Card Card The preview card.
- If unset, the link preview displays the header of the PreviewCard . const linkPreview = AddOnsResponseService . newLinkPreview (). setLinkPreviewTitle ( 'Link preview title' , ); Parameters Name Type Description title String The title of the link preview.
- If unset, the smart chip displays the header of the PreviewCard . const linkPreview = AddOnsResponseService . newLinkPreview (). setTitle ( 'Smart chip title' ); Parameters Name Type Description title String The title of the smart chip.

