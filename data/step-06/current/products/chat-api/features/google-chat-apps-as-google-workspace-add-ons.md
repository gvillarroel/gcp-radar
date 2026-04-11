---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:26:07.583Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "Google Chat apps as Google Workspace add-ons"
feature_slug: "google-chat-apps-as-google-workspace-add-ons"
latest_feature_date: "2025-07-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1"
  - "https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1"
  - "https://developers.google.com/workspace/chat/authenticate-authorize-chat-user"
keywords:
  - "developers"
  - "ons"
  - "workspace"
  - "add"
  - "as"
  - "apps"
  - "chat"
  - "can"
---

# Google Chat apps as Google Workspace add-ons

Product: Chat API
Coverage: LOW

## Step 02 Summary

Developers can now build Google Chat apps that run as Google Workspace add-ons.

## Extended Definition

Developers can now build Google Chat apps that run as Google Workspace add-ons.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1)
- [https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1)
- [https://developers.google.com/workspace/chat/authenticate-authorize-chat-user](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user)

## Supporting Pages

### Package google.apps.card.v1 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1)
- Source ID: `site-docs-reference`
- Final score: 248
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Available for Google Chat apps and unavailable for Google Workspace add-ons. multi select data source can be only one of the following: external data source Action An external data source, such as a relational database. platform data source PlatformDataSource A data source from Google Workspace.
- Available for Google Workspace add-ons and unavailable for Google Chat apps. peek card header CardHeader When displaying contextual content, the peek card header acts as a placeholder so that the user can navigate forward between the homepage cards and the contextual cards.
- Google Workspace add-ons and Chat apps Fields Union field data . data can be only one of the following: text paragraph TextParagraph TextParagraph widget. image Image Image widget. decorated text DecoratedText DecoratedText widget. button list ButtonList ButtonList widget. text input TextInput TextInput widget. selection input SelectionInput SelectionInput widget. date time picker DateTimePicker DateTimePicker widget. chip list ChipList ChipList widget.
- Cards in Google Chat and Workspace add-ons can utilize data sources, like users or spaces, using PlatformDataSource and CommonDataSource components within selection inputs.

### Package google.chat.v1 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1)
- Source ID: `site-docs-reference`
- Final score: 246
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Index ChatService (interface) AccessoryWidget (message) ActionResponse (message) ActionResponse.ResponseType (enum) ActionResponse.SelectionItems (message) ActionResponse.UpdatedWidget (message) ActionStatus (message) Annotation (message) AnnotationType (enum) AppCommandMetadata (message) AppCommandMetadata.AppCommandType (enum) AttachedGif (message) Attachment (message) Attachment.Source (enum) AttachmentDataRef (message) CalendarEventLinkData (message) CardWithId (message) ChatSpaceLinkData (message) CompleteImportSpaceRequest (message) CompleteImportSpaceResponse (message) ContextualAddOnMarkup (message) ContextualAddOnMarkup.Card (message) ContextualAddOnMarkup.Card.CardAction (message) ContextualAddOnMarkup.Card.CardHeader (message) ContextualAddOnMarkup.Card.CardHeader.ImageStyle (enum) ContextualAddOnMarkup.Card.Section (message) CreateCustomEmojiRequest (message) CreateMembershipRequest (message) CreateMessageRequest (message) CreateMessageRequest.MessageReplyOption (enum) CreateReactionRequest (message) CreateSectionRequest (message) CreateSpaceRequest (message) CustomEmoji (message) CustomEmoji.CustomEmojiPayload (message) CustomEmojiMetadata (message) DeleteCustomEmojiRequest (message) DeleteMembershipRequest (message) DeleteMessageRequest (message) DeleteReactionRequest (message) DeleteSectionRequest (message) DeleteSpaceRequest (message) DeletionMetadata (message) DeletionMetadata.DeletionType (enum) Dialog (message) DialogAction (message) DriveDataRef (message) DriveLinkData (message) Emoji (message) EmojiReactionSummary (message) FindDirectMessageRequest (message) FindGroupChatsRequest (message) FindGroupChatsResponse (message) ForwardedMetadata (message) GetAttachmentRequest (message) GetCustomEmojiRequest (message) GetMembershipRequest (message) GetMessageRequest (message) GetSpaceEventRequest (message) GetSpaceNotificationSettingRequest (message) GetSpaceReadStateRequest (message) GetSpaceRequest (message) GetThreadReadStateRequest (message) Group (message) HistoryState (enum) ListCustomEmojisRequest (message) ListCustomEmojisResponse (message) ListMembershipsRequest (message) ListMembershipsResponse (message) ListMessagesRequest (message) ListMessagesResponse (message) ListReactionsRequest (message) ListReactionsResponse (message) ListSectionItemsRequest (message) ListSectionItemsResponse (message) ListSectionsRequest (message) ListSectionsResponse (message) ListSpaceEventsRequest (message) ListSpaceEventsResponse (message) ListSpacesRequest (message) ListSpacesResponse (message) MatchedUrl (message) MeetSpaceLinkData (message) MeetSpaceLinkData.HuddleStatus (enum) MeetSpaceLinkData.Type (enum) Membership (message) Membership.MembershipRole (enum) Membership.MembershipState (enum) MembershipBatchCreatedEventData (message) MembershipBatchDeletedEventData (message) MembershipBatchUpdatedEventData (message) MembershipCreatedEventData (message) MembershipDeletedEventData (message) MembershipUpdatedEventData (message) Message (message) MessageBatchCreatedEventData (message) MessageBatchDeletedEventData (message) MessageBatchUpdatedEventData (message) MessageCreatedEventData (message) MessageDeletedEventData (message) MessageUpdatedEventData (message) MoveSectionItemRequest (message) MoveSectionItemResponse (message) PositionSectionRequest (message) PositionSectionRequest.Position (enum) PositionSectionResponse (message) QuotedMessageMetadata (message) QuotedMessageMetadata.QuoteType (enum) QuotedMessageSnapshot (message) Reaction (message) ReactionBatchCreatedEventData (message) ReactionBatchDeletedEventData (message) ReactionCreatedEventData (message) ReactionDeletedEventData (message) ReplaceMessageCardsRequest (message) ReplaceMessageCardsResponse (message) RichLinkMetadata (message) RichLinkMetadata.RichLinkType (enum) SearchSpacesRequest (message) SearchSpacesResponse (message) Section (message) Section.SectionType (enum) SectionItem (message) SetUpSpaceRequest (message) SlashCommand (message) SlashCommandMetadata (message) SlashCommandMetadata.Type (enum) Space (message) Space.AccessSettings (message) Space.AccessSettings.AccessState (enum) Space.MembershipCount (message) Space.PermissionSetting (message) Space.PermissionSettings (message) Space.PredefinedPermissionSettings (enum) Space.SpaceDetails (message) Space.SpaceThreadingState (enum) Space.SpaceType (enum) Space.Type (enum) SpaceBatchUpdatedEventData (message) SpaceEvent (message) SpaceNotificationSetting (message) SpaceNotificationSetting.MuteSetting (enum) SpaceNotificationSetting.NotificationSetting (enum) SpaceReadState (message) SpaceUpdatedEventData (message) SpaceView (enum) Thread (message) ThreadReadState (message) UpdateMembershipRequest (message) UpdateMessageRequest (message) UpdateSectionRequest (message) UpdateSpaceNotificationSettingRequest (message) UpdateSpaceReadStateRequest (message) UpdateSpaceRequest (message) User (message) User.Type (enum) UserMentionMetadata (message) UserMentionMetadata.Type (enum) WidgetMarkup (message) WidgetMarkup.Button (message) WidgetMarkup.FormAction (message) WidgetMarkup.FormAction.ActionParameter (message) WidgetMarkup.Icon (enum) WidgetMarkup.Image (message) WidgetMarkup.ImageButton (message) WidgetMarkup.KeyValue (message) WidgetMarkup.OnClick (message) WidgetMarkup.OpenLink (message) WidgetMarkup.TextButton (message) WidgetMarkup.TextParagraph (message) ChatService Enables developers to build Chat apps and integrations on Google Chat Platform.
- For more information about formatting text, see Formatting text in Google Chat apps and Formatting text in Google Workspace Add-ons . widgets[] WidgetMarkup A section must contain at least one widget.
- For more information about formatting text, see Formatting text in Google Chat apps and Formatting text in Google Workspace Add-ons . content multiline bool If the content should be multiline. bottom label string The text of the bottom label.
- For more information about formatting text, see Formatting text in Google Chat apps and Formatting text in Google Workspace Add-ons . content string The text of the content.

### Authenticate and authorize as a Google Chat user \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/authenticate-authorize-chat-user](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user)
- Source ID: `site-docs-root`
- Final score: 240
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-03 UTC."],[],["Chat apps utilize OAuth 2.0 for user authentication, enabling actions like creating spaces, adding users, and accessing other Workspace APIs.
- Please return to the console.' ); server . destroy (); const { tokens } = await oauth2Client . getToken ( qs . get ( 'code' )); oauth2Client . credentials = tokens ; resolve ( oauth2Client ); } catch ( e ) { reject ( e ); } }) . listen ( 3000 , () = > { // Open the browser to the authorize URL to start the workflow. opn ( authorizeUrl , { wait : false }). then ( cp = > cp . unref ()); }); destroyer ( server ); }); } / Authenticates with Chat API via user credentials, then creates a Chat space. / async function createSpace () { // Create the Chat API client and authenticate with the authorized user. const chatClient = await chat . chat ({ version : 'v1' , auth : oauth2Client }); // Call the Chat API to create a space. const result = await chatClient . spaces . create ({ // Details about the space to create. requestBody : { // To create a named space, set spaceType to SPACE. 'spaceType' : 'SPACE' , // The user-visible name of the space. 'displayName' : 'API-made' } }); return result ; } // Authenticate the user, execute the function, // then print details about the created space. authenticate ( scopes ) . then ( createSpace ) . then ( console . log ); Apps Script In the Apps Script editor, edit the file appsscript.json and add the OAuth scope necessary to call the API: "oauthScopes" : [ "https://www.googleapis.com/auth/chat.spaces.create" ] Save the following code in a file named ChatSpaceCreateNamed.gs in your Apps Script project: / Authenticates with Chat API via user credentials, then creates a Chat space. / function createSpace () { try { // Details about the space to create. // To create a named space, set spaceType to SPACE. // The user-visible name of the space is displayName. const space = { 'displayName' : 'API-made' , 'spaceType' : 'SPACE' }; // Call Chat API with user credentials to create the space. const result = Chat .
- Authenticate and authorize as a Google Workspace administrator This section explains how Google Workspace workspace administrators can manage Google Chat apps and spaces across their organization with user authentication.
- To configure Maven to include the client secrets file in the project package, edit the file pom.xml in your project's directory and add the following configuration to the <build> section: <build> <!-- ... existing configurations ... --> <resources> <resource> <directory>resources</directory> </resource> </resources> </build> To configure Maven to include the dependencies in the project package and to execute your application's main class, edit the file pom.xml in your project's directory and add the following configuration to the <plugins> section: <plugins> <!-- ... existing configurations ... --> <plugin> <artifactId>maven-assembly-plugin</artifactId> <configuration> <archive> <manifest> <mainClass>com.google.chat.app.authsample.App</mainClass> </manifest> </archive> <descriptorRefs> <descriptorRef>jar-with-dependencies</descriptorRef> </descriptorRefs> </configuration> </plugin> </plugins> Python Save the following code in a file named chat space create named.py in the same directory that holds credentials.json : from google auth oauthlib.flow import InstalledAppFlow from googleapiclient.discovery import build Define your app's authorization scopes.

