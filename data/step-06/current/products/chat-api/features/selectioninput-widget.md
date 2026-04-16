---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:27:57.259Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "SelectionInput widget"
feature_slug: "selectioninput-widget"
latest_feature_date: "2023-03-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1"
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/cards"
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/Event"
keywords:
  - "selectioninput"
  - "widget"
  - "chat"
  - "apps"
  - "can"
  - "use"
  - "present"
  - "checkboxes"
---

# SelectionInput widget

Product: Chat API
Coverage: MEDIUM

## Step 02 Summary

Chat apps can use the SelectionInput widget to present checkboxes, radio buttons, switches, and dropdown menus.

## Extended Definition

Chat apps can use the SelectionInput widget to present checkboxes, radio buttons, switches, and dropdown menus.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1)
- [https://developers.google.com/workspace/chat/api/reference/rest/v1/cards](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards)
- [https://developers.google.com/workspace/chat/api/reference/rest/v1/Event](https://developers.google.com/workspace/chat/api/reference/rest/v1/Event)

## Supporting Pages

### Package google.apps.card.v1 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1)
- Source ID: `site-docs-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- For example, this is a JSON representation of a carousel that contains three text paragraph widgets. { "carouselCards": [ { "widgets": [ { "textParagraph": { "text": "First text paragraph in carousel", } } ] }, { "widgets": [ { "textParagraph": { "text": "Second text paragraph in carousel", } } ] }, { "widgets": [ { "textParagraph": { "text": "Third text paragraph in carousel", } } ] } ] } Available for Google Chat apps and unavailable for Google Workspace add-ons.
- Google Workspace add-ons and Chat apps Fields Union field data . data can be only one of the following: text paragraph TextParagraph TextParagraph widget. image Image Image widget. decorated text DecoratedText DecoratedText widget. button list ButtonList ButtonList widget. text input TextInput TextInput widget. selection input SelectionInput SelectionInput widget. date time picker DateTimePicker DateTimePicker widget. chip list ChipList ChipList widget.
- Google Workspace add-ons and Chat apps Fields horizontal size style HorizontalSizeStyle Specifies how a column fills the width of the card. horizontal alignment HorizontalAlignment Specifies whether widgets align to the left, right, or center of a column. vertical alignment VerticalAlignment Specifies whether widgets align to the top, bottom, or center of a column. widgets[] Widgets An array of widgets included in a column.
- For more information about formatting text, see Formatting text in Google Chat apps and Formatting text in Google Workspace add-ons . widgets[] Widget All the widgets in the section.

### Cards v2 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/cards](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards)
- Source ID: `site-api-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Google Workspace add-ons and Chat apps JSON representation { "textParagraph" : { object ( TextParagraph ) } , "image" : { object ( Image ) } , "decoratedText" : { object ( DecoratedText ) } , "buttonList" : { object ( ButtonList ) } , "textInput" : { object ( TextInput ) } , "selectionInput" : { object ( SelectionInput ) } , "dateTimePicker" : { object ( DateTimePicker ) } , "chipList" : { object ( ChipList ) } } Fields Union field data . data can be only one of the following: textParagraph object ( TextParagraph ) TextParagraph widget. image object ( Image ) Image widget. decoratedText object ( DecoratedText ) DecoratedText widget. buttonList object ( ButtonList ) ButtonList widget. textInput object ( TextInput ) TextInput widget. selectionInput object ( SelectionInput ) SelectionInput widget. dateTimePicker object ( DateTimePicker ) DateTimePicker widget. chipList object ( ChipList ) ChipList widget.
- Google Workspace add-ons and Chat apps JSON representation { "horizontalSizeStyle" : enum ( HorizontalSizeStyle ) , "horizontalAlignment" : enum ( HorizontalAlignment ) , "verticalAlignment" : enum ( VerticalAlignment ) , "widgets" : [ { object ( Widgets ) } ] } Fields horizontalSizeStyle enum ( HorizontalSizeStyle ) Specifies how a column fills the width of the card. horizontalAlignment enum ( HorizontalAlignment ) Specifies whether widgets align to the left, right, or center of a column. verticalAlignment enum ( VerticalAlignment ) Specifies whether widgets align to the top, bottom, or center of a column. widgets[] object ( Widgets ) An array of widgets included in a column.
- For example, this is a JSON representation of a carousel that contains three text paragraph widgets. { "carouselCards": [ { "widgets": [ { "textParagraph": { "text": "First text paragraph in carousel", } } ] }, { "widgets": [ { "textParagraph": { "text": "Second text paragraph in carousel", } } ] }, { "widgets": [ { "textParagraph": { "text": "Third text paragraph in carousel", } } ] } ] } Available for Google Chat apps and unavailable for Google Workspace add-ons.
- Example: Card message for a Google Chat app To create the sample card message in Google Chat, use the following JSON: { "cardsV2": [ { "cardId": "unique-card-id", "card": { "header": { "title": "Sasha", "subtitle": "Software Engineer", "imageUrl": "https://developers.google.com/workspace/chat/images/quickstart-app-avatar.png", "imageType": "CIRCLE", "imageAltText": "Avatar for Sasha" }, "sections": [ { "header": "Contact Info", "collapsible": true, "uncollapsibleWidgetsCount": 1, "widgets": [ { "decoratedText": { "startIcon": { "knownIcon": "EMAIL" }, "text": "sasha@example.com" } }, { "decoratedText": { "startIcon": { "knownIcon": "PERSON" }, "text": "<font color=\"#80e27e\">Online</font>" } }, { "decoratedText": { "startIcon": { "knownIcon": "PHONE" }, "text": "+1 (555) 555-1234" } }, { "buttonList": { "buttons": [ { "text": "Share", "onClick": { "openLink": { "url": "https://example.com/share" } } }, { "text": "Edit", "onClick": { "action": { "function": "goToView", "parameters": [ { "key": "viewType", "value": "EDIT" } ] } } } ] } } ] } ] } } ] } JSON representation { "header" : { object ( CardHeader ) } , "sections" : [ { object ( Section ) } ] , "sectionDividerStyle" : enum ( DividerStyle ) , "cardActions" : [ { object ( CardAction ) } ] , "name" : string , "fixedFooter" : { object ( CardFixedFooter ) } , "displayStyle" : enum ( DisplayStyle ) , "peekCardHeader" : { object ( CardHeader ) } , "expressionData" : [ { object ( ExpressionData ) } ] } Fields header object ( CardHeader ) The header of the card.

### Event \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/Event](https://developers.google.com/workspace/chat/api/reference/rest/v1/Event)
- Source ID: `site-api-reference`
- Final score: 104
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "type" : enum ( EventType ) , "eventTime" : string , "token" : string , "threadKey" : string , "message" : { object ( Message ) } , "user" : { object ( User ) } , "thread" : { object ( Thread ) } , "space" : { object ( Space ) } , "action" : { object ( FormAction ) } , "configCompleteRedirectUrl" : string , "isDialogEvent" : boolean , "dialogEventType" : enum ( DialogEventType ) , "common" : { object ( CommonEventObject ) } , "appCommandMetadata" : { object ( AppCommandMetadata ) } } Fields type enum ( EventType ) The type of user interaction with the Chat app, such as MESSAGE or ADDED TO SPACE . eventTime string ( Timestamp format) The timestamp indicating when the interaction event occurred. token string A secret value that legacy Chat apps can use to verify if a request is from Google.
- If the widget accepts multiple values, such as a SelectionInput widget of checkboxes, the list contains a string object for each value that the user inputs or selects. dateTimeInput object ( DateTimeInput ) Date and time input values from a DateTimePicker widget that accepts both a date and time. dateInput object ( DateInput ) Date input values from a DateTimePicker widget that only accepts date values. timeInput object ( TimeInput ) Time input values from a DateTimePicker widget that only accepts time values.
- For Chat apps, the name of the function that the user invoked when interacting with a widget.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-24 UTC."],[],["This document outlines how Google Chat apps receive and process user interactions and space events.

