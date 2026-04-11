---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:26:07.611Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "Chat card widget: Collapsible Text Paragraph"
feature_slug: "chat-card-widget-collapsible-text-paragraph"
latest_feature_date: "2024-08-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/cards"
  - "https://developers.google.com/workspace/chat/add-text-image-card-dialog"
  - "https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1"
keywords:
  - "paragraph"
  - "collapsible"
  - "text"
  - "widget"
  - "cards"
  - "card"
  - "chat"
  - "now"
---

# Chat card widget: Collapsible Text Paragraph

Product: Chat API
Coverage: LOW

## Step 02 Summary

Chat cards now support a Collapsible Text Paragraph widget for card-based user interfaces.

## Extended Definition

Chat cards now support a Collapsible Text Paragraph widget for card-based user interfaces.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/chat/api/reference/rest/v1/cards](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards)
- [https://developers.google.com/workspace/chat/add-text-image-card-dialog](https://developers.google.com/workspace/chat/add-text-image-card-dialog)
- [https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1)

## Supporting Pages

### Cards v2 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/cards](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards)
- Source ID: `site-api-reference`
- Final score: 238
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Example: Card message for a Google Chat app To create the sample card message in Google Chat, use the following JSON: { "cardsV2": [ { "cardId": "unique-card-id", "card": { "header": { "title": "Sasha", "subtitle": "Software Engineer", "imageUrl": "https://developers.google.com/workspace/chat/images/quickstart-app-avatar.png", "imageType": "CIRCLE", "imageAltText": "Avatar for Sasha" }, "sections": [ { "header": "Contact Info", "collapsible": true, "uncollapsibleWidgetsCount": 1, "widgets": [ { "decoratedText": { "startIcon": { "knownIcon": "EMAIL" }, "text": "sasha@example.com" } }, { "decoratedText": { "startIcon": { "knownIcon": "PERSON" }, "text": "<font color=\"#80e27e\">Online</font>" } }, { "decoratedText": { "startIcon": { "knownIcon": "PHONE" }, "text": "+1 (555) 555-1234" } }, { "buttonList": { "buttons": [ { "text": "Share", "onClick": { "openLink": { "url": "https://example.com/share" } } }, { "text": "Edit", "onClick": { "action": { "function": "goToView", "parameters": [ { "key": "viewType", "value": "EDIT" } ] } } } ] } } ] } ] } } ] } JSON representation { "header" : { object ( CardHeader ) } , "sections" : [ { object ( Section ) } ] , "sectionDividerStyle" : enum ( DividerStyle ) , "cardActions" : [ { object ( CardAction ) } ] , "name" : string , "fixedFooter" : { object ( CardFixedFooter ) } , "displayStyle" : enum ( DisplayStyle ) , "peekCardHeader" : { object ( CardHeader ) } , "expressionData" : [ { object ( ExpressionData ) } ] } Fields header object ( CardHeader ) The header of the card.
- For example, this is a JSON representation of a carousel that contains three text paragraph widgets. { "carouselCards": [ { "widgets": [ { "textParagraph": { "text": "First text paragraph in carousel", } } ] }, { "widgets": [ { "textParagraph": { "text": "Second text paragraph in carousel", } } ] }, { "widgets": [ { "textParagraph": { "text": "Third text paragraph in carousel", } } ] } ] } Available for Google Chat apps and unavailable for Google Workspace add-ons.
- Developers can utilize various widgets like text paragraphs, images, buttons, and input fields to build rich and interactive cards.
- Google Workspace add-ons and Chat apps JSON representation { "textParagraph" : { object ( TextParagraph ) } , "image" : { object ( Image ) } , "decoratedText" : { object ( DecoratedText ) } , "buttonList" : { object ( ButtonList ) } , "textInput" : { object ( TextInput ) } , "selectionInput" : { object ( SelectionInput ) } , "dateTimePicker" : { object ( DateTimePicker ) } , "chipList" : { object ( ChipList ) } } Fields Union field data . data can be only one of the following: textParagraph object ( TextParagraph ) TextParagraph widget. image object ( Image ) Image widget. decoratedText object ( DecoratedText ) DecoratedText widget. buttonList object ( ButtonList ) ButtonList widget. textInput object ( TextInput ) TextInput widget. selectionInput object ( SelectionInput ) SelectionInput widget. dateTimePicker object ( DateTimePicker ) DateTimePicker widget. chipList object ( ChipList ) ChipList widget.

### Add text and images to cards \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/add-text-image-card-dialog](https://developers.google.com/workspace/chat/add-text-image-card-dialog)
- Source ID: `site-docs-root`
- Final score: 220
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following is a card consisting of two TextParagraph widgets used to display two paragraphs with simple HTML formatting: Add a collapsible text paragraph The collapsible text paragraphs let users reveal more information on demand.
- Learn how to use Image , imageComponent , Icon , TextParagraph , and DecoratedText widgets to build engaging cards.
- The following is a card consisting of a DecoratedText widget used to display contact details, such as email address, online status, phone number, and website: Troubleshoot When a Google Chat app or card returns an error, the Chat interface surfaces a message saying "Something went wrong." or "Unable to process your request." Sometimes the Chat UI doesn't display any error message, but the Chat app or card produces an unexpected result; for example, a card message might not appear.
- Home Google Workspace Google Chat Guides Send feedback Add text and images to cards Stay organized with collections Save and categorize content based on your preferences.

### Package google.apps.card.v1 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1)
- Source ID: `site-docs-reference`
- Final score: 218
- Re-rank relevance: N/A

Evidence snippets:
- Example: Card message for a Google Chat app To create the sample card message in Google Chat, use the following JSON: { "cardsV2": [ { "cardId": "unique-card-id", "card": { "header": { "title": "Sasha", "subtitle": "Software Engineer", "imageUrl": "https://developers.google.com/workspace/chat/images/quickstart-app-avatar.png", "imageType": "CIRCLE", "imageAltText": "Avatar for Sasha" }, "sections": [ { "header": "Contact Info", "collapsible": true, "uncollapsibleWidgetsCount": 1, "widgets": [ { "decoratedText": { "startIcon": { "knownIcon": "EMAIL" }, "text": "sasha@example.com" } }, { "decoratedText": { "startIcon": { "knownIcon": "PERSON" }, "text": "<font color=\"#80e27e\">Online</font>" } }, { "decoratedText": { "startIcon": { "knownIcon": "PHONE" }, "text": "+1 (555) 555-1234" } }, { "buttonList": { "buttons": [ { "text": "Share", "onClick": { "openLink": { "url": "https://example.com/share" } } }, { "text": "Edit", "onClick": { "action": { "function": "goToView", "parameters": [ { "key": "viewType", "value": "EDIT" } ] } } } ] } } ] } ] } } ] } Fields header CardHeader The header of the card.
- For example, this is a JSON representation of a carousel that contains three text paragraph widgets. { "carouselCards": [ { "widgets": [ { "textParagraph": { "text": "First text paragraph in carousel", } } ] }, { "widgets": [ { "textParagraph": { "text": "Second text paragraph in carousel", } } ] }, { "widgets": [ { "textParagraph": { "text": "Third text paragraph in carousel", } } ] } ] } Available for Google Chat apps and unavailable for Google Workspace add-ons.
- Widgets are fundamental building blocks of Google Chat cards, encompassing elements like text, images, buttons, and interactive controls for creating dynamic layouts.
- Index Action (message) Action.ActionParameter (message) Action.Interaction (enum) Action.LoadIndicator (enum) BorderStyle (message) BorderStyle.BorderType (enum) Button (message) Button.Type (enum) ButtonList (message) Card (message) Card.CardAction (message) Card.CardFixedFooter (message) Card.CardHeader (message) Card.DisplayStyle (enum) Card.DividerStyle (enum) Card.NestedWidget (message) Card.Section (message) Card.Visibility (enum) Carousel (message) Carousel.CarouselCard (message) Chip (message) ChipList (message) ChipList.Layout (enum) CollapseControl (message) Columns (message) Columns.Column (message) Columns.Column.HorizontalSizeStyle (enum) Columns.Column.VerticalAlignment (enum) Columns.Column.Widgets (message) Condition (message) Condition.ExpressionDataCondition (message) Condition.ExpressionDataCondition.ConditionType (enum) DataSourceConfig (message) DateTimePicker (message) DateTimePicker.DateTimePickerType (enum) DecoratedText (message) DecoratedText.SwitchControl (message) DecoratedText.SwitchControl.ControlType (enum) Divider (message) EventAction (message) EventAction.CommonWidgetAction (message) EventAction.CommonWidgetAction.UpdateVisibilityAction (message) ExpressionData (message) Grid (message) Grid.GridItem (message) Grid.GridItem.GridItemLayout (enum) Icon (message) Image (message) ImageComponent (message) ImageCropStyle (message) ImageCropStyle.ImageCropType (enum) MaterialIcon (message) OnClick (message) OpenLink (message) OpenLink.OnClose (enum) OpenLink.OpenAs (enum) OverflowMenu (message) OverflowMenu.OverflowMenuItem (message) SelectionInput (message) SelectionInput.PlatformDataSource (message) SelectionInput.PlatformDataSource.CommonDataSource (enum) SelectionInput.SelectionItem (message) SelectionInput.SelectionType (enum) Suggestions (message) Suggestions.SuggestionItem (message) TextInput (message) TextInput.Type (enum) TextParagraph (message) TextParagraph.TextSyntax (enum) Trigger (message) Validation (message) Validation.InputType (enum) Widget (message) Widget.HorizontalAlignment (enum) Widget.ImageType (enum) Widget.VerticalAlignment (enum) Action An action that describes the behavior when the form is submitted.

