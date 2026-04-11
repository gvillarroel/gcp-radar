---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:26:07.654Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "Card section divider control"
feature_slug: "card-section-divider-control"
latest_feature_date: "2023-07-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1"
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/cards"
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/cards-v1"
keywords:
  - "divider"
  - "layouts"
  - "control"
  - "section"
  - "card"
  - "chat"
  - "can"
  - "now"
---

# Card section divider control

Product: Chat API
Coverage: LOW

## Step 02 Summary

Chat card layouts can now omit dividers between card sections.

## Extended Definition

Chat card layouts can now omit dividers between card sections.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1)
- [https://developers.google.com/workspace/chat/api/reference/rest/v1/cards](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards)
- [https://developers.google.com/workspace/chat/api/reference/rest/v1/cards-v1](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards-v1)

## Supporting Pages

### Package google.apps.card.v1 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1)
- Source ID: `site-docs-reference`
- Final score: 218
- Re-rank relevance: N/A

Evidence snippets:
- Index Action (message) Action.ActionParameter (message) Action.Interaction (enum) Action.LoadIndicator (enum) BorderStyle (message) BorderStyle.BorderType (enum) Button (message) Button.Type (enum) ButtonList (message) Card (message) Card.CardAction (message) Card.CardFixedFooter (message) Card.CardHeader (message) Card.DisplayStyle (enum) Card.DividerStyle (enum) Card.NestedWidget (message) Card.Section (message) Card.Visibility (enum) Carousel (message) Carousel.CarouselCard (message) Chip (message) ChipList (message) ChipList.Layout (enum) CollapseControl (message) Columns (message) Columns.Column (message) Columns.Column.HorizontalSizeStyle (enum) Columns.Column.VerticalAlignment (enum) Columns.Column.Widgets (message) Condition (message) Condition.ExpressionDataCondition (message) Condition.ExpressionDataCondition.ConditionType (enum) DataSourceConfig (message) DateTimePicker (message) DateTimePicker.DateTimePickerType (enum) DecoratedText (message) DecoratedText.SwitchControl (message) DecoratedText.SwitchControl.ControlType (enum) Divider (message) EventAction (message) EventAction.CommonWidgetAction (message) EventAction.CommonWidgetAction.UpdateVisibilityAction (message) ExpressionData (message) Grid (message) Grid.GridItem (message) Grid.GridItem.GridItemLayout (enum) Icon (message) Image (message) ImageComponent (message) ImageCropStyle (message) ImageCropStyle.ImageCropType (enum) MaterialIcon (message) OnClick (message) OpenLink (message) OpenLink.OnClose (enum) OpenLink.OpenAs (enum) OverflowMenu (message) OverflowMenu.OverflowMenuItem (message) SelectionInput (message) SelectionInput.PlatformDataSource (message) SelectionInput.PlatformDataSource.CommonDataSource (enum) SelectionInput.SelectionItem (message) SelectionInput.SelectionType (enum) Suggestions (message) Suggestions.SuggestionItem (message) TextInput (message) TextInput.Type (enum) TextParagraph (message) TextParagraph.TextSyntax (enum) Trigger (message) Validation (message) Validation.InputType (enum) Widget (message) Widget.HorizontalAlignment (enum) Widget.ImageType (enum) Widget.VerticalAlignment (enum) Action An action that describes the behavior when the form is submitted.
- Example: Card message for a Google Chat app To create the sample card message in Google Chat, use the following JSON: { "cardsV2": [ { "cardId": "unique-card-id", "card": { "header": { "title": "Sasha", "subtitle": "Software Engineer", "imageUrl": "https://developers.google.com/workspace/chat/images/quickstart-app-avatar.png", "imageType": "CIRCLE", "imageAltText": "Avatar for Sasha" }, "sections": [ { "header": "Contact Info", "collapsible": true, "uncollapsibleWidgetsCount": 1, "widgets": [ { "decoratedText": { "startIcon": { "knownIcon": "EMAIL" }, "text": "sasha@example.com" } }, { "decoratedText": { "startIcon": { "knownIcon": "PERSON" }, "text": "<font color=\"#80e27e\">Online</font>" } }, { "decoratedText": { "startIcon": { "knownIcon": "PHONE" }, "text": "+1 (555) 555-1234" } }, { "buttonList": { "buttons": [ { "text": "Share", "onClick": { "openLink": { "url": "https://example.com/share" } } }, { "text": "Edit", "onClick": { "action": { "function": "goToView", "parameters": [ { "key": "viewType", "value": "EDIT" } ] } } } ] } } ] } ] } } ] } Fields header CardHeader The header of the card.
- For an example in Google Chat apps, see Define a section of a card . section divider style DividerStyle The divider style between the header, sections and footer. card actions[] CardAction The card's actions.
- Widgets are fundamental building blocks of Google Chat cards, encompassing elements like text, images, buttons, and interactive controls for creating dynamic layouts.

### Cards v2 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/cards](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards)
- Source ID: `site-api-reference`
- Final score: 214
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Example: Card message for a Google Chat app To create the sample card message in Google Chat, use the following JSON: { "cardsV2": [ { "cardId": "unique-card-id", "card": { "header": { "title": "Sasha", "subtitle": "Software Engineer", "imageUrl": "https://developers.google.com/workspace/chat/images/quickstart-app-avatar.png", "imageType": "CIRCLE", "imageAltText": "Avatar for Sasha" }, "sections": [ { "header": "Contact Info", "collapsible": true, "uncollapsibleWidgetsCount": 1, "widgets": [ { "decoratedText": { "startIcon": { "knownIcon": "EMAIL" }, "text": "sasha@example.com" } }, { "decoratedText": { "startIcon": { "knownIcon": "PERSON" }, "text": "<font color=\"#80e27e\">Online</font>" } }, { "decoratedText": { "startIcon": { "knownIcon": "PHONE" }, "text": "+1 (555) 555-1234" } }, { "buttonList": { "buttons": [ { "text": "Share", "onClick": { "openLink": { "url": "https://example.com/share" } } }, { "text": "Edit", "onClick": { "action": { "function": "goToView", "parameters": [ { "key": "viewType", "value": "EDIT" } ] } } } ] } } ] } ] } } ] } JSON representation { "header" : { object ( CardHeader ) } , "sections" : [ { object ( Section ) } ] , "sectionDividerStyle" : enum ( DividerStyle ) , "cardActions" : [ { object ( CardAction ) } ] , "name" : string , "fixedFooter" : { object ( CardFixedFooter ) } , "displayStyle" : enum ( DisplayStyle ) , "peekCardHeader" : { object ( CardHeader ) } , "expressionData" : [ { object ( ExpressionData ) } ] } Fields header object ( CardHeader ) The header of the card.
- For an example in Google Chat apps, see Define a section of a card . sectionDividerStyle enum ( DividerStyle ) The divider style between the header, sections and footer. cardActions[] object ( CardAction ) The card's actions.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-25 UTC."],[],["Cards in Google Chat and Workspace add-ons are interactive UI elements built with structured layouts, multimedia, and action triggers.
- Available for Google Workspace add-ons and unavailable for Google Chat apps. peekCardHeader object ( CardHeader ) When displaying contextual content, the peek card header acts as a placeholder so that the user can navigate forward between the homepage cards and the contextual cards.

### Cards v1 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/cards-v1](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards-v1)
- Source ID: `site-api-reference`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- A header usually contains a title and an image. sections[] object ( Section ) Sections are separated by a line divider. cardActions[] object ( CardAction ) The actions of this card. name string Name of the card.
- Cards are UI elements that can contain widgets like text, images, and buttons, arranged within sections and headers.
- At least one of icons, top label and bottom label must be defined. icons can be only one of the following: icon enum ( Icon ) An enum value that's replaced by the Chat API with the corresponding icon image. iconUrl string The icon specified by a URL.
- The icon can be specified by an Icon enum or a URL. icons can be only one of the following: icon enum ( Icon ) The icon specified by an enum that indices to an icon provided by Chat API. iconUrl string The icon specified by a URL.

