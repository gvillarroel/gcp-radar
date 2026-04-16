---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:27:57.263Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "Material Design cards"
feature_slug: "material-design-cards"
latest_feature_date: "2022-06-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/cards"
  - "https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1"
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages"
keywords:
  - "material"
  - "design"
  - "cards"
  - "chat"
  - "web"
  - "match"
  - "improved"
  - "usability"
---

# Material Design cards

Product: Chat API
Coverage: MEDIUM

## Step 02 Summary

Google Chat cards on the web match Google Material Design for improved usability and faster rendering; Google Chat cards on mobile devices match Google Material Design for improved usability and faster rendering.

## Extended Definition

Google Chat cards on the web match Google Material Design for improved usability and faster rendering; Google Chat cards on mobile devices match Google Material Design for improved usability and faster rendering.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/chat/api/reference/rest/v1/cards](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards)
- [https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1)
- [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages)

## Supporting Pages

### Cards v2 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/cards](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards)
- Source ID: `site-api-reference`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- Open the Card Builder To learn how to build cards, see the following documentation: For Google Chat apps, see Design the components of a card or dialog .
- Example: Card message for a Google Chat app To create the sample card message in Google Chat, use the following JSON: { "cardsV2": [ { "cardId": "unique-card-id", "card": { "header": { "title": "Sasha", "subtitle": "Software Engineer", "imageUrl": "https://developers.google.com/workspace/chat/images/quickstart-app-avatar.png", "imageType": "CIRCLE", "imageAltText": "Avatar for Sasha" }, "sections": [ { "header": "Contact Info", "collapsible": true, "uncollapsibleWidgetsCount": 1, "widgets": [ { "decoratedText": { "startIcon": { "knownIcon": "EMAIL" }, "text": "sasha@example.com" } }, { "decoratedText": { "startIcon": { "knownIcon": "PERSON" }, "text": "<font color=\"#80e27e\">Online</font>" } }, { "decoratedText": { "startIcon": { "knownIcon": "PHONE" }, "text": "+1 (555) 555-1234" } }, { "buttonList": { "buttons": [ { "text": "Share", "onClick": { "openLink": { "url": "https://example.com/share" } } }, { "text": "Edit", "onClick": { "action": { "function": "goToView", "parameters": [ { "key": "viewType", "value": "EDIT" } ] } } } ] } } ] } ] } } ] } JSON representation { "header" : { object ( CardHeader ) } , "sections" : [ { object ( Section ) } ] , "sectionDividerStyle" : enum ( DividerStyle ) , "cardActions" : [ { object ( CardAction ) } ] , "name" : string , "fixedFooter" : { object ( CardFixedFooter ) } , "displayStyle" : enum ( DisplayStyle ) , "peekCardHeader" : { object ( CardHeader ) } , "expressionData" : [ { object ( ExpressionData ) } ] } Fields header object ( CardHeader ) The header of the card.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-25 UTC."],[],["Cards in Google Chat and Workspace add-ons are interactive UI elements built with structured layouts, multimedia, and action triggers.
- For example, this is a JSON representation of a carousel that contains three text paragraph widgets. { "carouselCards": [ { "widgets": [ { "textParagraph": { "text": "First text paragraph in carousel", } } ] }, { "widgets": [ { "textParagraph": { "text": "Second text paragraph in carousel", } } ] }, { "widgets": [ { "textParagraph": { "text": "Third text paragraph in carousel", } } ] } ] } Available for Google Chat apps and unavailable for Google Workspace add-ons.

### Package google.apps.card.v1 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1)
- Source ID: `site-docs-reference`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- Open the Card Builder To learn how to build cards, see the following documentation: For Google Chat apps, see Design the components of a card or dialog .
- Example: Card message for a Google Chat app To create the sample card message in Google Chat, use the following JSON: { "cardsV2": [ { "cardId": "unique-card-id", "card": { "header": { "title": "Sasha", "subtitle": "Software Engineer", "imageUrl": "https://developers.google.com/workspace/chat/images/quickstart-app-avatar.png", "imageType": "CIRCLE", "imageAltText": "Avatar for Sasha" }, "sections": [ { "header": "Contact Info", "collapsible": true, "uncollapsibleWidgetsCount": 1, "widgets": [ { "decoratedText": { "startIcon": { "knownIcon": "EMAIL" }, "text": "sasha@example.com" } }, { "decoratedText": { "startIcon": { "knownIcon": "PERSON" }, "text": "<font color=\"#80e27e\">Online</font>" } }, { "decoratedText": { "startIcon": { "knownIcon": "PHONE" }, "text": "+1 (555) 555-1234" } }, { "buttonList": { "buttons": [ { "text": "Share", "onClick": { "openLink": { "url": "https://example.com/share" } } }, { "text": "Edit", "onClick": { "action": { "function": "goToView", "parameters": [ { "key": "viewType", "value": "EDIT" } ] } } } ] } } ] } ] } } ] } Fields header CardHeader The header of the card.
- For example, this is a JSON representation of a carousel that contains three text paragraph widgets. { "carouselCards": [ { "widgets": [ { "textParagraph": { "text": "First text paragraph in carousel", } } ] }, { "widgets": [ { "textParagraph": { "text": "Second text paragraph in carousel", } } ] }, { "widgets": [ { "textParagraph": { "text": "Third text paragraph in carousel", } } ] } ] } Available for Google Chat apps and unavailable for Google Workspace add-ons.
- Available for Google Workspace add-ons and unavailable for Google Chat apps. peek card header CardHeader When displaying contextual content, the peek card header acts as a placeholder so that the user can navigate forward between the homepage cards and the contextual cards.

### REST Resource: spaces.messages \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages)
- Source ID: `site-docs-root-2`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- Resource: Message JSON representation Card JSON representation CardHeader JSON representation ImageStyle Section JSON representation WidgetMarkup JSON representation TextParagraph JSON representation Image JSON representation OnClick JSON representation FormAction JSON representation ActionParameter JSON representation OpenLink JSON representation KeyValue JSON representation Icon Button JSON representation TextButton JSON representation ImageButton JSON representation CardAction JSON representation CardWithId JSON representation Card JSON representation CardHeader JSON representation ImageType Section JSON representation Widget JSON representation TextParagraph JSON representation TextSyntax Image JSON representation OnClick JSON representation Action JSON representation ActionParameter JSON representation LoadIndicator Interaction OpenLink JSON representation OpenAs OnClose OverflowMenu JSON representation OverflowMenuItem JSON representation Icon JSON representation MaterialIcon JSON representation DecoratedText JSON representation VerticalAlignment Button JSON representation Color JSON representation Type SwitchControl JSON representation ControlType ButtonList JSON representation TextInput JSON representation Type Suggestions JSON representation SuggestionItem JSON representation Validation JSON representation InputType HostAppDataSourceMarkup JSON representation ChatClientDataSourceMarkup JSON representation SpaceDataSource JSON representation WorkflowDataSourceMarkup JSON representation Type SelectionInput JSON representation SelectionType SelectionItem JSON representation PlatformDataSource JSON representation CommonDataSource DataSourceConfig JSON representation DateTimePicker JSON representation DateTimePickerType Divider Grid JSON representation GridItem JSON representation ImageComponent JSON representation ImageCropStyle JSON representation ImageCropType BorderStyle JSON representation BorderType GridItemLayout Columns JSON representation Column JSON representation HorizontalSizeStyle HorizontalAlignment VerticalAlignment Widgets JSON representation ChipList JSON representation Layout Chip JSON representation Carousel JSON representation CarouselCard JSON representation NestedWidget JSON representation Visibility EventAction JSON representation Trigger JSON representation CommonWidgetAction JSON representation UpdateVisibilityAction JSON representation CollapseControl JSON representation DividerStyle CardAction JSON representation CardFixedFooter JSON representation DisplayStyle ExpressionData JSON representation Condition JSON representation ExpressionDataCondition JSON representation ConditionType Annotation JSON representation AnnotationType UserMentionMetadata JSON representation Type SlashCommandMetadata JSON representation Type RichLinkMetadata JSON representation RichLinkType DriveLinkData JSON representation ChatSpaceLinkData JSON representation MeetSpaceLinkData JSON representation Type HuddleStatus CalendarEventLinkData JSON representation CustomEmojiMetadata JSON representation Thread JSON representation ActionResponse JSON representation ResponseType DialogAction JSON representation Dialog JSON representation ActionStatus JSON representation Code UpdatedWidget JSON representation SelectionItems JSON representation SlashCommand JSON representation MatchedUrl JSON representation EmojiReactionSummary JSON representation DeletionMetadata JSON representation DeletionType QuotedMessageMetadata JSON representation QuoteType QuotedMessageSnapshot JSON representation ForwardedMetadata JSON representation AttachedGif JSON representation AccessoryWidget JSON representation Methods Resource: Message A message in a Google Chat space.
- JSON representation { "name" : string , "sender" : { object ( User ) } , "createTime" : string , "lastUpdateTime" : string , "deleteTime" : string , "text" : string , "formattedText" : string , "cards" : [ { object ( Card ) } ] , "cardsV2" : [ { object ( CardWithId ) } ] , "annotations" : [ { object ( Annotation ) } ] , "thread" : { object ( Thread ) } , "space" : { object ( Space ) } , "fallbackText" : string , "actionResponse" : { object ( ActionResponse ) } , "argumentText" : string , "slashCommand" : { object ( SlashCommand ) } , "attachment" : [ { object ( Attachment ) } ] , "matchedUrl" : { object ( MatchedUrl ) } , "threadReply" : boolean , "clientAssignedMessageId" : string , "emojiReactionSummaries" : [ { object ( EmojiReactionSummary ) } ] , "privateMessageViewer" : { object ( User ) } , "deletionMetadata" : { object ( DeletionMetadata ) } , "quotedMessageMetadata" : { object ( QuotedMessageMetadata ) } , "attachedGifs" : [ { object ( AttachedGif ) } ] , "accessoryWidgets" : [ { object ( AccessoryWidget ) } ] } Fields name string Identifier.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-20 UTC."],[],["Google Chat messages, represented by the Message resource, contain various components like text, cards, and annotations.
- Methods create Creates a message in a Google Chat space. delete Deletes a message. get Returns details about a message. list Lists messages in a space that the caller is a member of, including messages from blocked members and spaces. patch Updates a message. replaceCards Developer Preview: Available as part of the Google Workspace Developer Preview Program , which grants early access to certain features.

