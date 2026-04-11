---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:26:07.599Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "Chat card overflow menu widget"
feature_slug: "chat-card-overflow-menu-widget"
latest_feature_date: "2024-10-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/cards"
  - "https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1"
  - "https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1"
keywords:
  - "overflow"
  - "menu"
  - "widget"
  - "adds"
  - "card"
  - "the"
  - "chat"
  - "for"
---

# Chat card overflow menu widget

Product: Chat API
Coverage: LOW

## Step 02 Summary

Adds the Overflow Menu widget for use in Chat card messages, homepages, and dialogs.

## Extended Definition

Adds the Overflow Menu widget for use in Chat card messages, homepages, and dialogs.

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
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- Example: Card message for a Google Chat app To create the sample card message in Google Chat, use the following JSON: { "cardsV2": [ { "cardId": "unique-card-id", "card": { "header": { "title": "Sasha", "subtitle": "Software Engineer", "imageUrl": "https://developers.google.com/workspace/chat/images/quickstart-app-avatar.png", "imageType": "CIRCLE", "imageAltText": "Avatar for Sasha" }, "sections": [ { "header": "Contact Info", "collapsible": true, "uncollapsibleWidgetsCount": 1, "widgets": [ { "decoratedText": { "startIcon": { "knownIcon": "EMAIL" }, "text": "sasha@example.com" } }, { "decoratedText": { "startIcon": { "knownIcon": "PERSON" }, "text": "<font color=\"#80e27e\">Online</font>" } }, { "decoratedText": { "startIcon": { "knownIcon": "PHONE" }, "text": "+1 (555) 555-1234" } }, { "buttonList": { "buttons": [ { "text": "Share", "onClick": { "openLink": { "url": "https://example.com/share" } } }, { "text": "Edit", "onClick": { "action": { "function": "goToView", "parameters": [ { "key": "viewType", "value": "EDIT" } ] } } } ] } } ] } ] } } ] } JSON representation { "header" : { object ( CardHeader ) } , "sections" : [ { object ( Section ) } ] , "sectionDividerStyle" : enum ( DividerStyle ) , "cardActions" : [ { object ( CardAction ) } ] , "name" : string , "fixedFooter" : { object ( CardFixedFooter ) } , "displayStyle" : enum ( DisplayStyle ) , "peekCardHeader" : { object ( CardHeader ) } , "expressionData" : [ { object ( ExpressionData ) } ] } Fields header object ( CardHeader ) The header of the card.
- For example, https://developers.google.com/workspace/chat/images/quickstart-app-avatar.png . start icon can be only one of the following: startIconUri string PlatformDataSource For a SelectionInput widget that uses a multiselect menu, a data source from Google Workspace.
- Google Workspace add-ons and Chat apps JSON representation { "horizontalSizeStyle" : enum ( HorizontalSizeStyle ) , "horizontalAlignment" : enum ( HorizontalAlignment ) , "verticalAlignment" : enum ( VerticalAlignment ) , "widgets" : [ { object ( Widgets ) } ] } Fields horizontalSizeStyle enum ( HorizontalSizeStyle ) Specifies how a column fills the width of the card. horizontalAlignment enum ( HorizontalAlignment ) Specifies whether widgets align to the left, right, or center of a column. verticalAlignment enum ( VerticalAlignment ) Specifies whether widgets align to the top, bottom, or center of a column. widgets[] object ( Widgets ) An array of widgets included in a column.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-25 UTC."],[],["Cards in Google Chat and Workspace add-ons are interactive UI elements built with structured layouts, multimedia, and action triggers.

### Package google.apps.card.v1 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1)
- Source ID: `site-docs-reference`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- Index Action (message) Action.ActionParameter (message) Action.Interaction (enum) Action.LoadIndicator (enum) BorderStyle (message) BorderStyle.BorderType (enum) Button (message) Button.Type (enum) ButtonList (message) Card (message) Card.CardAction (message) Card.CardFixedFooter (message) Card.CardHeader (message) Card.DisplayStyle (enum) Card.DividerStyle (enum) Card.NestedWidget (message) Card.Section (message) Card.Visibility (enum) Carousel (message) Carousel.CarouselCard (message) Chip (message) ChipList (message) ChipList.Layout (enum) CollapseControl (message) Columns (message) Columns.Column (message) Columns.Column.HorizontalSizeStyle (enum) Columns.Column.VerticalAlignment (enum) Columns.Column.Widgets (message) Condition (message) Condition.ExpressionDataCondition (message) Condition.ExpressionDataCondition.ConditionType (enum) DataSourceConfig (message) DateTimePicker (message) DateTimePicker.DateTimePickerType (enum) DecoratedText (message) DecoratedText.SwitchControl (message) DecoratedText.SwitchControl.ControlType (enum) Divider (message) EventAction (message) EventAction.CommonWidgetAction (message) EventAction.CommonWidgetAction.UpdateVisibilityAction (message) ExpressionData (message) Grid (message) Grid.GridItem (message) Grid.GridItem.GridItemLayout (enum) Icon (message) Image (message) ImageComponent (message) ImageCropStyle (message) ImageCropStyle.ImageCropType (enum) MaterialIcon (message) OnClick (message) OpenLink (message) OpenLink.OnClose (enum) OpenLink.OpenAs (enum) OverflowMenu (message) OverflowMenu.OverflowMenuItem (message) SelectionInput (message) SelectionInput.PlatformDataSource (message) SelectionInput.PlatformDataSource.CommonDataSource (enum) SelectionInput.SelectionItem (message) SelectionInput.SelectionType (enum) Suggestions (message) Suggestions.SuggestionItem (message) TextInput (message) TextInput.Type (enum) TextParagraph (message) TextParagraph.TextSyntax (enum) Trigger (message) Validation (message) Validation.InputType (enum) Widget (message) Widget.HorizontalAlignment (enum) Widget.ImageType (enum) Widget.VerticalAlignment (enum) Action An action that describes the behavior when the form is submitted.
- Example: Card message for a Google Chat app To create the sample card message in Google Chat, use the following JSON: { "cardsV2": [ { "cardId": "unique-card-id", "card": { "header": { "title": "Sasha", "subtitle": "Software Engineer", "imageUrl": "https://developers.google.com/workspace/chat/images/quickstart-app-avatar.png", "imageType": "CIRCLE", "imageAltText": "Avatar for Sasha" }, "sections": [ { "header": "Contact Info", "collapsible": true, "uncollapsibleWidgetsCount": 1, "widgets": [ { "decoratedText": { "startIcon": { "knownIcon": "EMAIL" }, "text": "sasha@example.com" } }, { "decoratedText": { "startIcon": { "knownIcon": "PERSON" }, "text": "<font color=\"#80e27e\">Online</font>" } }, { "decoratedText": { "startIcon": { "knownIcon": "PHONE" }, "text": "+1 (555) 555-1234" } }, { "buttonList": { "buttons": [ { "text": "Share", "onClick": { "openLink": { "url": "https://example.com/share" } } }, { "text": "Edit", "onClick": { "action": { "function": "goToView", "parameters": [ { "key": "viewType", "value": "EDIT" } ] } } } ] } } ] } ] } } ] } Fields header CardHeader The header of the card.
- For example, the following JSON creates a dropdown menu that lets users choose a size: "selectionInput": { "name": "size", "label": "Size" "type": "DROPDOWN", "items": [ { "text": "S", "value": "small", "selected": false }, { "text": "M", "value": "medium", "selected": true }, { "text": "L", "value": "large", "selected": false }, { "text": "XL", "value": "extra large", "selected": false } ] } date time picker DateTimePicker Displays a widget that lets users input a date, time, or date and time.
- For example, this is a JSON representation of a carousel that contains three text paragraph widgets. { "carouselCards": [ { "widgets": [ { "textParagraph": { "text": "First text paragraph in carousel", } } ] }, { "widgets": [ { "textParagraph": { "text": "Second text paragraph in carousel", } } ] }, { "widgets": [ { "textParagraph": { "text": "Third text paragraph in carousel", } } ] } ] } Available for Google Chat apps and unavailable for Google Workspace add-ons.

### Package google.chat.v1 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1)
- Source ID: `site-docs-reference`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- Index ChatService (interface) AccessoryWidget (message) ActionResponse (message) ActionResponse.ResponseType (enum) ActionResponse.SelectionItems (message) ActionResponse.UpdatedWidget (message) ActionStatus (message) Annotation (message) AnnotationType (enum) AppCommandMetadata (message) AppCommandMetadata.AppCommandType (enum) AttachedGif (message) Attachment (message) Attachment.Source (enum) AttachmentDataRef (message) CalendarEventLinkData (message) CardWithId (message) ChatSpaceLinkData (message) CompleteImportSpaceRequest (message) CompleteImportSpaceResponse (message) ContextualAddOnMarkup (message) ContextualAddOnMarkup.Card (message) ContextualAddOnMarkup.Card.CardAction (message) ContextualAddOnMarkup.Card.CardHeader (message) ContextualAddOnMarkup.Card.CardHeader.ImageStyle (enum) ContextualAddOnMarkup.Card.Section (message) CreateCustomEmojiRequest (message) CreateMembershipRequest (message) CreateMessageRequest (message) CreateMessageRequest.MessageReplyOption (enum) CreateReactionRequest (message) CreateSectionRequest (message) CreateSpaceRequest (message) CustomEmoji (message) CustomEmoji.CustomEmojiPayload (message) CustomEmojiMetadata (message) DeleteCustomEmojiRequest (message) DeleteMembershipRequest (message) DeleteMessageRequest (message) DeleteReactionRequest (message) DeleteSectionRequest (message) DeleteSpaceRequest (message) DeletionMetadata (message) DeletionMetadata.DeletionType (enum) Dialog (message) DialogAction (message) DriveDataRef (message) DriveLinkData (message) Emoji (message) EmojiReactionSummary (message) FindDirectMessageRequest (message) FindGroupChatsRequest (message) FindGroupChatsResponse (message) ForwardedMetadata (message) GetAttachmentRequest (message) GetCustomEmojiRequest (message) GetMembershipRequest (message) GetMessageRequest (message) GetSpaceEventRequest (message) GetSpaceNotificationSettingRequest (message) GetSpaceReadStateRequest (message) GetSpaceRequest (message) GetThreadReadStateRequest (message) Group (message) HistoryState (enum) ListCustomEmojisRequest (message) ListCustomEmojisResponse (message) ListMembershipsRequest (message) ListMembershipsResponse (message) ListMessagesRequest (message) ListMessagesResponse (message) ListReactionsRequest (message) ListReactionsResponse (message) ListSectionItemsRequest (message) ListSectionItemsResponse (message) ListSectionsRequest (message) ListSectionsResponse (message) ListSpaceEventsRequest (message) ListSpaceEventsResponse (message) ListSpacesRequest (message) ListSpacesResponse (message) MatchedUrl (message) MeetSpaceLinkData (message) MeetSpaceLinkData.HuddleStatus (enum) MeetSpaceLinkData.Type (enum) Membership (message) Membership.MembershipRole (enum) Membership.MembershipState (enum) MembershipBatchCreatedEventData (message) MembershipBatchDeletedEventData (message) MembershipBatchUpdatedEventData (message) MembershipCreatedEventData (message) MembershipDeletedEventData (message) MembershipUpdatedEventData (message) Message (message) MessageBatchCreatedEventData (message) MessageBatchDeletedEventData (message) MessageBatchUpdatedEventData (message) MessageCreatedEventData (message) MessageDeletedEventData (message) MessageUpdatedEventData (message) MoveSectionItemRequest (message) MoveSectionItemResponse (message) PositionSectionRequest (message) PositionSectionRequest.Position (enum) PositionSectionResponse (message) QuotedMessageMetadata (message) QuotedMessageMetadata.QuoteType (enum) QuotedMessageSnapshot (message) Reaction (message) ReactionBatchCreatedEventData (message) ReactionBatchDeletedEventData (message) ReactionCreatedEventData (message) ReactionDeletedEventData (message) ReplaceMessageCardsRequest (message) ReplaceMessageCardsResponse (message) RichLinkMetadata (message) RichLinkMetadata.RichLinkType (enum) SearchSpacesRequest (message) SearchSpacesResponse (message) Section (message) Section.SectionType (enum) SectionItem (message) SetUpSpaceRequest (message) SlashCommand (message) SlashCommandMetadata (message) SlashCommandMetadata.Type (enum) Space (message) Space.AccessSettings (message) Space.AccessSettings.AccessState (enum) Space.MembershipCount (message) Space.PermissionSetting (message) Space.PermissionSettings (message) Space.PredefinedPermissionSettings (enum) Space.SpaceDetails (message) Space.SpaceThreadingState (enum) Space.SpaceType (enum) Space.Type (enum) SpaceBatchUpdatedEventData (message) SpaceEvent (message) SpaceNotificationSetting (message) SpaceNotificationSetting.MuteSetting (enum) SpaceNotificationSetting.NotificationSetting (enum) SpaceReadState (message) SpaceUpdatedEventData (message) SpaceView (enum) Thread (message) ThreadReadState (message) UpdateMembershipRequest (message) UpdateMessageRequest (message) UpdateSectionRequest (message) UpdateSpaceNotificationSettingRequest (message) UpdateSpaceReadStateRequest (message) UpdateSpaceRequest (message) User (message) User.Type (enum) UserMentionMetadata (message) UserMentionMetadata.Type (enum) WidgetMarkup (message) WidgetMarkup.Button (message) WidgetMarkup.FormAction (message) WidgetMarkup.FormAction.ActionParameter (message) WidgetMarkup.Icon (enum) WidgetMarkup.Image (message) WidgetMarkup.ImageButton (message) WidgetMarkup.KeyValue (message) WidgetMarkup.OnClick (message) WidgetMarkup.OpenLink (message) WidgetMarkup.TextButton (message) WidgetMarkup.TextParagraph (message) ChatService Enables developers to build Chat apps and integrations on Google Chat Platform.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],["The Google Chat API provides a ChatService interface to build apps and integrations, managing spaces, memberships, messages, reactions, attachments, custom emojis, annotations, widgets, and more.
- To include this field in your request, you must call the Chat API using app authentication and omit the following: Attachments Accessory widgets For details, see Send a message privately . deletion metadata DeletionMetadata Output only.
- This information is echoed back to the Chat app as part of the card click event.

