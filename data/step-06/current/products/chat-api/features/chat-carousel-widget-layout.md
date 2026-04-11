---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:26:07.592Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "Chat carousel widget layout"
feature_slug: "chat-carousel-widget-layout"
latest_feature_date: "2024-12-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/cards"
  - "https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1"
  - "https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1"
keywords:
  - "display"
  - "carousel"
  - "layout"
  - "introduces"
  - "widget"
  - "that"
  - "chat"
  - "can"
---

# Chat carousel widget layout

Product: Chat API
Coverage: LOW

## Step 02 Summary

Introduces a carousel layout that can display a rotating sequence of cards with previous/next navigation.

## Extended Definition

Introduces a carousel layout that can display a rotating sequence of cards with previous/next navigation.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/chat/api/reference/rest/v1/cards](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards)
- [https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1)
- [https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1)

## Supporting Pages

### Cards v2 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/cards](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards)
- Source ID: `site-api-reference`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- NestedWidget A list of widgets that can be displayed in a containing layout, such as a CarouselCard .
- For example, this is a JSON representation of a carousel that contains three text paragraph widgets. { "carouselCards": [ { "widgets": [ { "textParagraph": { "text": "First text paragraph in carousel", } } ] }, { "widgets": [ { "textParagraph": { "text": "Second text paragraph in carousel", } } ] }, { "widgets": [ { "textParagraph": { "text": "Third text paragraph in carousel", } } ] } ] } Available for Google Chat apps and unavailable for Google Workspace add-ons.
- A button, switch, checkbox, or image that appears to the right-hand side of text in the decoratedText widget. control can be only one of the following: button object ( Button ) A button that a user can click to trigger an action. switchControl object ( SwitchControl ) A switch widget that a user can click to change its state and trigger an action. endIcon object ( Icon ) An icon displayed after the text.
- The Google Workspace application that populates available items for a widget. data source can be only one of the following: chatDataSource object ( ChatClientDataSourceMarkup ) A data source from Google Chat. workflowDataSource object ( WorkflowDataSourceMarkup ) A data source from Google Workflow.

### Package google.apps.card.v1 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1)
- Source ID: `site-docs-reference`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- NestedWidget A list of widgets that can be displayed in a containing layout, such as a CarouselCard .
- Index Action (message) Action.ActionParameter (message) Action.Interaction (enum) Action.LoadIndicator (enum) BorderStyle (message) BorderStyle.BorderType (enum) Button (message) Button.Type (enum) ButtonList (message) Card (message) Card.CardAction (message) Card.CardFixedFooter (message) Card.CardHeader (message) Card.DisplayStyle (enum) Card.DividerStyle (enum) Card.NestedWidget (message) Card.Section (message) Card.Visibility (enum) Carousel (message) Carousel.CarouselCard (message) Chip (message) ChipList (message) ChipList.Layout (enum) CollapseControl (message) Columns (message) Columns.Column (message) Columns.Column.HorizontalSizeStyle (enum) Columns.Column.VerticalAlignment (enum) Columns.Column.Widgets (message) Condition (message) Condition.ExpressionDataCondition (message) Condition.ExpressionDataCondition.ConditionType (enum) DataSourceConfig (message) DateTimePicker (message) DateTimePicker.DateTimePickerType (enum) DecoratedText (message) DecoratedText.SwitchControl (message) DecoratedText.SwitchControl.ControlType (enum) Divider (message) EventAction (message) EventAction.CommonWidgetAction (message) EventAction.CommonWidgetAction.UpdateVisibilityAction (message) ExpressionData (message) Grid (message) Grid.GridItem (message) Grid.GridItem.GridItemLayout (enum) Icon (message) Image (message) ImageComponent (message) ImageCropStyle (message) ImageCropStyle.ImageCropType (enum) MaterialIcon (message) OnClick (message) OpenLink (message) OpenLink.OnClose (enum) OpenLink.OpenAs (enum) OverflowMenu (message) OverflowMenu.OverflowMenuItem (message) SelectionInput (message) SelectionInput.PlatformDataSource (message) SelectionInput.PlatformDataSource.CommonDataSource (enum) SelectionInput.SelectionItem (message) SelectionInput.SelectionType (enum) Suggestions (message) Suggestions.SuggestionItem (message) TextInput (message) TextInput.Type (enum) TextParagraph (message) TextParagraph.TextSyntax (enum) Trigger (message) Validation (message) Validation.InputType (enum) Widget (message) Widget.HorizontalAlignment (enum) Widget.ImageType (enum) Widget.VerticalAlignment (enum) Action An action that describes the behavior when the form is submitted.
- For example, this is a JSON representation of a carousel that contains three text paragraph widgets. { "carouselCards": [ { "widgets": [ { "textParagraph": { "text": "First text paragraph in carousel", } } ] }, { "widgets": [ { "textParagraph": { "text": "Second text paragraph in carousel", } } ] }, { "widgets": [ { "textParagraph": { "text": "Third text paragraph in carousel", } } ] } ] } Available for Google Chat apps and unavailable for Google Workspace add-ons.
- A button, switch, checkbox, or image that appears to the right-hand side of text in the decoratedText widget. control can be only one of the following: button Button A button that a user can click to trigger an action. switch control SwitchControl A switch widget that a user can click to change its state and trigger an action. end icon Icon An icon displayed after the text.

### Package google.chat.v1 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1)
- Source ID: `site-docs-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- You can use multiple WidgetMarkup fields to display more items. data can be only one of the following: text paragraph TextParagraph Display a text paragraph in this widget. image Image Display an image in this widget. key value KeyValue Display a key value item in this widget.
- At least one of icons, top label and bottom label must be defined. icons can be only one of the following: icon Icon An enum value that's replaced by the Chat API with the corresponding icon image. icon url string The icon specified by a URL.
- The icon can be specified by an Icon enum or a URL. icons can be only one of the following: icon Icon The icon specified by an enum that indices to an icon provided by Chat API. icon url string The icon specified by a URL.
- You can set either button or switch widget , but not both. control can be only one of the following: button Button A button that can be clicked to trigger an action.

