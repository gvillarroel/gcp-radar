---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:27:57.164Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "Block quote formatting"
feature_slug: "block-quote-formatting"
latest_feature_date: "2026-03-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages"
  - "https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1"
  - "https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1"
keywords:
  - "block"
  - "quote"
  - "formatting"
  - "chat"
  - "apps"
  - "can"
  - "format"
  - "message"
---

# Block quote formatting

Product: Chat API
Coverage: MEDIUM

## Step 02 Summary

Chat apps can format message text with block quotes.

## Extended Definition

Chat apps can format message text with block quotes.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages)
- [https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1)
- [https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1)

## Supporting Pages

### REST Resource: spaces.messages \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages)
- Source ID: `site-docs-root-2`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- This field might not capture all formatting visible in the UI, but includes the following: Markup syntax for bold, italic, strikethrough, monospace, monospace block, bulleted list, and block quote.
- Contains the quoted message text with markups added to support rich formatting like hyperlinks,custom emojis, markup, etc.
- Resource: Message JSON representation Card JSON representation CardHeader JSON representation ImageStyle Section JSON representation WidgetMarkup JSON representation TextParagraph JSON representation Image JSON representation OnClick JSON representation FormAction JSON representation ActionParameter JSON representation OpenLink JSON representation KeyValue JSON representation Icon Button JSON representation TextButton JSON representation ImageButton JSON representation CardAction JSON representation CardWithId JSON representation Card JSON representation CardHeader JSON representation ImageType Section JSON representation Widget JSON representation TextParagraph JSON representation TextSyntax Image JSON representation OnClick JSON representation Action JSON representation ActionParameter JSON representation LoadIndicator Interaction OpenLink JSON representation OpenAs OnClose OverflowMenu JSON representation OverflowMenuItem JSON representation Icon JSON representation MaterialIcon JSON representation DecoratedText JSON representation VerticalAlignment Button JSON representation Color JSON representation Type SwitchControl JSON representation ControlType ButtonList JSON representation TextInput JSON representation Type Suggestions JSON representation SuggestionItem JSON representation Validation JSON representation InputType HostAppDataSourceMarkup JSON representation ChatClientDataSourceMarkup JSON representation SpaceDataSource JSON representation WorkflowDataSourceMarkup JSON representation Type SelectionInput JSON representation SelectionType SelectionItem JSON representation PlatformDataSource JSON representation CommonDataSource DataSourceConfig JSON representation DateTimePicker JSON representation DateTimePickerType Divider Grid JSON representation GridItem JSON representation ImageComponent JSON representation ImageCropStyle JSON representation ImageCropType BorderStyle JSON representation BorderType GridItemLayout Columns JSON representation Column JSON representation HorizontalSizeStyle HorizontalAlignment VerticalAlignment Widgets JSON representation ChipList JSON representation Layout Chip JSON representation Carousel JSON representation CarouselCard JSON representation NestedWidget JSON representation Visibility EventAction JSON representation Trigger JSON representation CommonWidgetAction JSON representation UpdateVisibilityAction JSON representation CollapseControl JSON representation DividerStyle CardAction JSON representation CardFixedFooter JSON representation DisplayStyle ExpressionData JSON representation Condition JSON representation ExpressionDataCondition JSON representation ConditionType Annotation JSON representation AnnotationType UserMentionMetadata JSON representation Type SlashCommandMetadata JSON representation Type RichLinkMetadata JSON representation RichLinkType DriveLinkData JSON representation ChatSpaceLinkData JSON representation MeetSpaceLinkData JSON representation Type HuddleStatus CalendarEventLinkData JSON representation CustomEmojiMetadata JSON representation Thread JSON representation ActionResponse JSON representation ResponseType DialogAction JSON representation Dialog JSON representation ActionStatus JSON representation Code UpdatedWidget JSON representation SelectionItems JSON representation SlashCommand JSON representation MatchedUrl JSON representation EmojiReactionSummary JSON representation DeletionMetadata JSON representation DeletionType QuotedMessageMetadata JSON representation QuoteType QuotedMessageSnapshot JSON representation ForwardedMetadata JSON representation AttachedGif JSON representation AccessoryWidget JSON representation Methods Resource: Message A message in a Google Chat space.
- JSON representation { "name" : string , "sender" : { object ( User ) } , "createTime" : string , "lastUpdateTime" : string , "deleteTime" : string , "text" : string , "formattedText" : string , "cards" : [ { object ( Card ) } ] , "cardsV2" : [ { object ( CardWithId ) } ] , "annotations" : [ { object ( Annotation ) } ] , "thread" : { object ( Thread ) } , "space" : { object ( Space ) } , "fallbackText" : string , "actionResponse" : { object ( ActionResponse ) } , "argumentText" : string , "slashCommand" : { object ( SlashCommand ) } , "attachment" : [ { object ( Attachment ) } ] , "matchedUrl" : { object ( MatchedUrl ) } , "threadReply" : boolean , "clientAssignedMessageId" : string , "emojiReactionSummaries" : [ { object ( EmojiReactionSummary ) } ] , "privateMessageViewer" : { object ( User ) } , "deletionMetadata" : { object ( DeletionMetadata ) } , "quotedMessageMetadata" : { object ( QuotedMessageMetadata ) } , "attachedGifs" : [ { object ( AttachedGif ) } ] , "accessoryWidgets" : [ { object ( AccessoryWidget ) } ] } Fields name string Identifier.

### Package google.apps.card.v1 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- For more information about formatting text, see Formatting text in Google Chat apps and Formatting text in Google Workspace add-ons . content text TextParagraph TextParagraph equivalent of text .
- For more information about formatting text, see Formatting text in Google Chat apps and Formatting text in Google Workspace add-ons . widgets[] Widget All the widgets in the section.
- For more information about formatting text, see Formatting text in Google Chat apps and Formatting text in Google Workspace add-ons .
- For more information about formatting text, see Formatting text in Google Chat apps and Formatting text in Google Workspace add-ons .

### Package google.chat.v1 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1)
- Source ID: `site-docs-reference`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- Index ChatService (interface) AccessoryWidget (message) ActionResponse (message) ActionResponse.ResponseType (enum) ActionResponse.SelectionItems (message) ActionResponse.UpdatedWidget (message) ActionStatus (message) Annotation (message) AnnotationType (enum) AppCommandMetadata (message) AppCommandMetadata.AppCommandType (enum) AttachedGif (message) Attachment (message) Attachment.Source (enum) AttachmentDataRef (message) CalendarEventLinkData (message) CardWithId (message) ChatSpaceLinkData (message) CompleteImportSpaceRequest (message) CompleteImportSpaceResponse (message) ContextualAddOnMarkup (message) ContextualAddOnMarkup.Card (message) ContextualAddOnMarkup.Card.CardAction (message) ContextualAddOnMarkup.Card.CardHeader (message) ContextualAddOnMarkup.Card.CardHeader.ImageStyle (enum) ContextualAddOnMarkup.Card.Section (message) CreateCustomEmojiRequest (message) CreateMembershipRequest (message) CreateMessageRequest (message) CreateMessageRequest.MessageReplyOption (enum) CreateReactionRequest (message) CreateSectionRequest (message) CreateSpaceRequest (message) CustomEmoji (message) CustomEmoji.CustomEmojiPayload (message) CustomEmojiMetadata (message) DeleteCustomEmojiRequest (message) DeleteMembershipRequest (message) DeleteMessageRequest (message) DeleteReactionRequest (message) DeleteSectionRequest (message) DeleteSpaceRequest (message) DeletionMetadata (message) DeletionMetadata.DeletionType (enum) Dialog (message) DialogAction (message) DriveDataRef (message) DriveLinkData (message) Emoji (message) EmojiReactionSummary (message) FindDirectMessageRequest (message) FindGroupChatsRequest (message) FindGroupChatsResponse (message) ForwardedMetadata (message) GetAttachmentRequest (message) GetCustomEmojiRequest (message) GetMembershipRequest (message) GetMessageRequest (message) GetSpaceEventRequest (message) GetSpaceNotificationSettingRequest (message) GetSpaceReadStateRequest (message) GetSpaceRequest (message) GetThreadReadStateRequest (message) Group (message) HistoryState (enum) ListCustomEmojisRequest (message) ListCustomEmojisResponse (message) ListMembershipsRequest (message) ListMembershipsResponse (message) ListMessagesRequest (message) ListMessagesResponse (message) ListReactionsRequest (message) ListReactionsResponse (message) ListSectionItemsRequest (message) ListSectionItemsResponse (message) ListSectionsRequest (message) ListSectionsResponse (message) ListSpaceEventsRequest (message) ListSpaceEventsResponse (message) ListSpacesRequest (message) ListSpacesResponse (message) MatchedUrl (message) MeetSpaceLinkData (message) MeetSpaceLinkData.HuddleStatus (enum) MeetSpaceLinkData.Type (enum) Membership (message) Membership.MembershipRole (enum) Membership.MembershipState (enum) MembershipBatchCreatedEventData (message) MembershipBatchDeletedEventData (message) MembershipBatchUpdatedEventData (message) MembershipCreatedEventData (message) MembershipDeletedEventData (message) MembershipUpdatedEventData (message) Message (message) MessageBatchCreatedEventData (message) MessageBatchDeletedEventData (message) MessageBatchUpdatedEventData (message) MessageCreatedEventData (message) MessageDeletedEventData (message) MessageUpdatedEventData (message) MoveSectionItemRequest (message) MoveSectionItemResponse (message) PositionSectionRequest (message) PositionSectionRequest.Position (enum) PositionSectionResponse (message) QuotedMessageMetadata (message) QuotedMessageMetadata.QuoteType (enum) QuotedMessageSnapshot (message) Reaction (message) ReactionBatchCreatedEventData (message) ReactionBatchDeletedEventData (message) ReactionCreatedEventData (message) ReactionDeletedEventData (message) ReplaceMessageCardsRequest (message) ReplaceMessageCardsResponse (message) RichLinkMetadata (message) RichLinkMetadata.RichLinkType (enum) SearchSpacesRequest (message) SearchSpacesResponse (message) Section (message) Section.SectionType (enum) SectionItem (message) SetUpSpaceRequest (message) SlashCommand (message) SlashCommandMetadata (message) SlashCommandMetadata.Type (enum) Space (message) Space.AccessSettings (message) Space.AccessSettings.AccessState (enum) Space.MembershipCount (message) Space.PermissionSetting (message) Space.PermissionSettings (message) Space.PredefinedPermissionSettings (enum) Space.SpaceDetails (message) Space.SpaceThreadingState (enum) Space.SpaceType (enum) Space.Type (enum) SpaceBatchUpdatedEventData (message) SpaceEvent (message) SpaceNotificationSetting (message) SpaceNotificationSetting.MuteSetting (enum) SpaceNotificationSetting.NotificationSetting (enum) SpaceReadState (message) SpaceUpdatedEventData (message) SpaceView (enum) Thread (message) ThreadReadState (message) UpdateMembershipRequest (message) UpdateMessageRequest (message) UpdateSectionRequest (message) UpdateSpaceNotificationSettingRequest (message) UpdateSpaceReadStateRequest (message) UpdateSpaceRequest (message) User (message) User.Type (enum) UserMentionMetadata (message) UserMentionMetadata.Type (enum) WidgetMarkup (message) WidgetMarkup.Button (message) WidgetMarkup.FormAction (message) WidgetMarkup.FormAction.ActionParameter (message) WidgetMarkup.Icon (enum) WidgetMarkup.Image (message) WidgetMarkup.ImageButton (message) WidgetMarkup.KeyValue (message) WidgetMarkup.OnClick (message) WidgetMarkup.OpenLink (message) WidgetMarkup.TextButton (message) WidgetMarkup.TextParagraph (message) ChatService Enables developers to build Chat apps and integrations on Google Chat Platform.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],["The Google Chat API provides a ChatService interface to build apps and integrations, managing spaces, memberships, messages, reactions, attachments, custom emojis, annotations, widgets, and more.
- For more information about formatting text, see Formatting text in Google Chat apps and Formatting text in Google Workspace Add-ons . content multiline bool If the content should be multiline. bottom label string The text of the bottom label.
- For more information about formatting text, see Formatting text in Google Chat apps and Formatting text in Google Workspace Add-ons . widgets[] WidgetMarkup A section must contain at least one widget.

