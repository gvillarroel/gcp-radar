---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:27:57.257Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "Email address user references"
feature_slug: "email-address-user-references"
latest_feature_date: "2023-07-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1"
  - "https://developers.google.com/workspace/chat/authenticate-authorize-chat-user"
  - "https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1"
keywords:
  - "email"
  - "address"
  - "user"
  - "references"
  - "authenticated"
  - "chat"
  - "apps"
  - "can"
---

# Email address user references

Product: Chat API
Coverage: MEDIUM

## Step 02 Summary

User-authenticated Chat apps can reference users by email address in supported Chat API methods and mentions.

## Extended Definition

User-authenticated Chat apps can reference users by email address in supported Chat API methods and mentions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1)
- [https://developers.google.com/workspace/chat/authenticate-authorize-chat-user](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user)
- [https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1)

## Supporting Pages

### Authenticate and authorize as a Google Chat user \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/authenticate-authorize-chat-user](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Authenticating and authorizing with user credentials lets Chat apps access user data and perform operations on the authenticated user's behalf.
- Please return to the console.' ); server . destroy (); const { tokens } = await oauth2Client . getToken ( qs . get ( 'code' )); oauth2Client . credentials = tokens ; resolve ( oauth2Client ); } catch ( e ) { reject ( e ); } }) . listen ( 3000 , () = > { // Open the browser to the authorize URL to start the workflow. opn ( authorizeUrl , { wait : false }). then ( cp = > cp . unref ()); }); destroyer ( server ); }); } / Authenticates with Chat API via user credentials, then creates a Chat space. / async function createSpace () { // Create the Chat API client and authenticate with the authorized user. const chatClient = await chat . chat ({ version : 'v1' , auth : oauth2Client }); // Call the Chat API to create a space. const result = await chatClient . spaces . create ({ // Details about the space to create. requestBody : { // To create a named space, set spaceType to SPACE. 'spaceType' : 'SPACE' , // The user-visible name of the space. 'displayName' : 'API-made' } }); return result ; } // Authenticate the user, execute the function, // then print details about the created space. authenticate ( scopes ) . then ( createSpace ) . then ( console . log ); Apps Script In the Apps Script editor, edit the file appsscript.json and add the OAuth scope necessary to call the API: "oauthScopes" : [ "https://www.googleapis.com/auth/chat.spaces.create" ] Save the following code in a file named ChatSpaceCreateNamed.gs in your Apps Script project: / Authenticates with Chat API via user credentials, then creates a Chat space. / function createSpace () { try { // Details about the space to create. // To create a named space, set spaceType to SPACE. // The user-visible name of the space is displayName. const space = { 'displayName' : 'API-made' , 'spaceType' : 'SPACE' }; // Call Chat API with user credentials to create the space. const result = Chat .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-03 UTC."],[],["Chat apps utilize OAuth 2.0 for user authentication, enabling actions like creating spaces, adding users, and accessing other Workspace APIs.
- For more information, see Using OAuth 2.0 Best Practices Guide and the User Authorization app sample: Java User Authorization app sample Python User Authorization app sample Node.js User Authorization app sample The Apps Script integration with Google Chat handles user tokens automatically.

### Package google.apps.card.v1 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1)
- Source ID: `site-docs-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- For example, the following JSON creates a text input for an email address: "textInput": { "name": "mailing address", "label": "Mailing Address" } As another example, the following JSON creates a text input for a programming language with static suggestions: "textInput": { "name": "preferred programing language", "label": "Preferred Language", "initialSuggestions": { "items": [ { "text": "C++" }, { "text": "Java" }, { "text": "JavaScript" }, { "text": "Python" } ] } } selection input SelectionInput Displays a selection control that lets users select items.
- Available for Google Workspace add-ons and unavailable for Google Chat apps. peek card header CardHeader When displaying contextual content, the peek card header acts as a placeholder so that the user can navigate forward between the homepage cards and the contextual cards.
- Home Google Workspace Google Chat Reference Send feedback Package google.apps.card.v1 Stay organized with collections Save and categorize content based on your preferences.
- Available for Google Chat apps and unavailable for Google Workspace add-ons. on click OnClick This action is triggered when users click topLabel or bottomLabel .

### Package google.chat.v1 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1)
- Source ID: `site-docs-reference`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- For example, users/123456789 in Chat API represents the same person as the 123456789 Person profile ID in People API. the id for a user in the Admin SDK Directory API. the user's email address can be used as an alias for {user} in API requests.
- Index ChatService (interface) AccessoryWidget (message) ActionResponse (message) ActionResponse.ResponseType (enum) ActionResponse.SelectionItems (message) ActionResponse.UpdatedWidget (message) ActionStatus (message) Annotation (message) AnnotationType (enum) AppCommandMetadata (message) AppCommandMetadata.AppCommandType (enum) AttachedGif (message) Attachment (message) Attachment.Source (enum) AttachmentDataRef (message) CalendarEventLinkData (message) CardWithId (message) ChatSpaceLinkData (message) CompleteImportSpaceRequest (message) CompleteImportSpaceResponse (message) ContextualAddOnMarkup (message) ContextualAddOnMarkup.Card (message) ContextualAddOnMarkup.Card.CardAction (message) ContextualAddOnMarkup.Card.CardHeader (message) ContextualAddOnMarkup.Card.CardHeader.ImageStyle (enum) ContextualAddOnMarkup.Card.Section (message) CreateCustomEmojiRequest (message) CreateMembershipRequest (message) CreateMessageRequest (message) CreateMessageRequest.MessageReplyOption (enum) CreateReactionRequest (message) CreateSectionRequest (message) CreateSpaceRequest (message) CustomEmoji (message) CustomEmoji.CustomEmojiPayload (message) CustomEmojiMetadata (message) DeleteCustomEmojiRequest (message) DeleteMembershipRequest (message) DeleteMessageRequest (message) DeleteReactionRequest (message) DeleteSectionRequest (message) DeleteSpaceRequest (message) DeletionMetadata (message) DeletionMetadata.DeletionType (enum) Dialog (message) DialogAction (message) DriveDataRef (message) DriveLinkData (message) Emoji (message) EmojiReactionSummary (message) FindDirectMessageRequest (message) FindGroupChatsRequest (message) FindGroupChatsResponse (message) ForwardedMetadata (message) GetAttachmentRequest (message) GetCustomEmojiRequest (message) GetMembershipRequest (message) GetMessageRequest (message) GetSpaceEventRequest (message) GetSpaceNotificationSettingRequest (message) GetSpaceReadStateRequest (message) GetSpaceRequest (message) GetThreadReadStateRequest (message) Group (message) HistoryState (enum) ListCustomEmojisRequest (message) ListCustomEmojisResponse (message) ListMembershipsRequest (message) ListMembershipsResponse (message) ListMessagesRequest (message) ListMessagesResponse (message) ListReactionsRequest (message) ListReactionsResponse (message) ListSectionItemsRequest (message) ListSectionItemsResponse (message) ListSectionsRequest (message) ListSectionsResponse (message) ListSpaceEventsRequest (message) ListSpaceEventsResponse (message) ListSpacesRequest (message) ListSpacesResponse (message) MatchedUrl (message) MeetSpaceLinkData (message) MeetSpaceLinkData.HuddleStatus (enum) MeetSpaceLinkData.Type (enum) Membership (message) Membership.MembershipRole (enum) Membership.MembershipState (enum) MembershipBatchCreatedEventData (message) MembershipBatchDeletedEventData (message) MembershipBatchUpdatedEventData (message) MembershipCreatedEventData (message) MembershipDeletedEventData (message) MembershipUpdatedEventData (message) Message (message) MessageBatchCreatedEventData (message) MessageBatchDeletedEventData (message) MessageBatchUpdatedEventData (message) MessageCreatedEventData (message) MessageDeletedEventData (message) MessageUpdatedEventData (message) MoveSectionItemRequest (message) MoveSectionItemResponse (message) PositionSectionRequest (message) PositionSectionRequest.Position (enum) PositionSectionResponse (message) QuotedMessageMetadata (message) QuotedMessageMetadata.QuoteType (enum) QuotedMessageSnapshot (message) Reaction (message) ReactionBatchCreatedEventData (message) ReactionBatchDeletedEventData (message) ReactionCreatedEventData (message) ReactionDeletedEventData (message) ReplaceMessageCardsRequest (message) ReplaceMessageCardsResponse (message) RichLinkMetadata (message) RichLinkMetadata.RichLinkType (enum) SearchSpacesRequest (message) SearchSpacesResponse (message) Section (message) Section.SectionType (enum) SectionItem (message) SetUpSpaceRequest (message) SlashCommand (message) SlashCommandMetadata (message) SlashCommandMetadata.Type (enum) Space (message) Space.AccessSettings (message) Space.AccessSettings.AccessState (enum) Space.MembershipCount (message) Space.PermissionSetting (message) Space.PermissionSettings (message) Space.PredefinedPermissionSettings (enum) Space.SpaceDetails (message) Space.SpaceThreadingState (enum) Space.SpaceType (enum) Space.Type (enum) SpaceBatchUpdatedEventData (message) SpaceEvent (message) SpaceNotificationSetting (message) SpaceNotificationSetting.MuteSetting (enum) SpaceNotificationSetting.NotificationSetting (enum) SpaceReadState (message) SpaceUpdatedEventData (message) SpaceView (enum) Thread (message) ThreadReadState (message) UpdateMembershipRequest (message) UpdateMessageRequest (message) UpdateSectionRequest (message) UpdateSpaceNotificationSettingRequest (message) UpdateSpaceReadStateRequest (message) UpdateSpaceRequest (message) User (message) User.Type (enum) UserMentionMetadata (message) UserMentionMetadata.Type (enum) WidgetMarkup (message) WidgetMarkup.Button (message) WidgetMarkup.FormAction (message) WidgetMarkup.FormAction.ActionParameter (message) WidgetMarkup.Icon (enum) WidgetMarkup.Image (message) WidgetMarkup.ImageButton (message) WidgetMarkup.KeyValue (message) WidgetMarkup.OnClick (message) WidgetMarkup.OpenLink (message) WidgetMarkup.TextButton (message) WidgetMarkup.TextParagraph (message) ChatService Enables developers to build Chat apps and integrations on Google Chat Platform.
- Supports the following types of authentication with an authorization scope appropriate for reading the requested data: App authentication with administrator approval with one of the following authorization scopes: https://www.googleapis.com/auth/chat.app.spaces https://www.googleapis.com/auth/chat.app.spaces.readonly https://www.googleapis.com/auth/chat.app.messages.readonly https://www.googleapis.com/auth/chat.app.memberships https://www.googleapis.com/auth/chat.app.memberships.readonly User authentication with one of the following authorization scopes: https://www.googleapis.com/auth/chat.spaces.readonly https://www.googleapis.com/auth/chat.spaces https://www.googleapis.com/auth/chat.messages.readonly https://www.googleapis.com/auth/chat.messages https://www.googleapis.com/auth/chat.messages.reactions.readonly https://www.googleapis.com/auth/chat.messages.reactions https://www.googleapis.com/auth/chat.memberships.readonly https://www.googleapis.com/auth/chat.memberships To get an event, the authenticated caller must be a member of the space.
- Supports the following types of authentication with an authorization scope appropriate for reading the requested data: App authentication with administrator approval with one of the following authorization scopes: https://www.googleapis.com/auth/chat.app.spaces https://www.googleapis.com/auth/chat.app.spaces.readonly https://www.googleapis.com/auth/chat.app.messages.readonly https://www.googleapis.com/auth/chat.app.memberships https://www.googleapis.com/auth/chat.app.memberships.readonly User authentication with one of the following authorization scopes: https://www.googleapis.com/auth/chat.spaces.readonly https://www.googleapis.com/auth/chat.spaces https://www.googleapis.com/auth/chat.messages.readonly https://www.googleapis.com/auth/chat.messages https://www.googleapis.com/auth/chat.messages.reactions.readonly https://www.googleapis.com/auth/chat.messages.reactions https://www.googleapis.com/auth/chat.memberships.readonly https://www.googleapis.com/auth/chat.memberships To list events, the authenticated caller must be a member of the space.

