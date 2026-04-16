---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:27:57.166Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "User-authenticated card messages on behalf of users"
feature_slug: "user-authenticated-card-messages-on-behalf-of-users"
latest_feature_date: "2026-03-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/chat/create-messages"
  - "https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1"
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages"
keywords:
  - "user"
  - "authenticated"
  - "card"
  - "messages"
  - "behalf"
  - "users"
  - "chat"
  - "apps"
---

# User-authenticated card messages on behalf of users

Product: Chat API
Coverage: MEDIUM

## Step 02 Summary

Chat apps can create card-based messages on behalf of users with user authentication and asynchronously update those cards without user interaction.

## Extended Definition

Chat apps can create card-based messages on behalf of users with user authentication and asynchronously update those cards without user interaction.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/chat/create-messages](https://developers.google.com/workspace/chat/create-messages)
- [https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1)
- [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages)

## Supporting Pages

### Send a message using the Google Chat API \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/create-messages](https://developers.google.com/workspace/chat/create-messages)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following code shows an example of how a Chat app can send a text message in a given space on behalf of an authenticated user: Node.js chat/client-libraries/cloud/create-message-user-cred.js View on GitHub import { createClientWithUserCredentials } from './authentication-utils.js' ; const USER AUTH OAUTH SCOPES = [ 'https://www.googleapis.com/auth/chat.messages.create' , ]; // This sample shows how to create message with user credential async function main () { // Create a client const chatClient = await createClientWithUserCredentials ( USER AUTH OAUTH SCOPES , ); // Initialize request argument(s) const request = { // Replace SPACE NAME here. parent : 'spaces/SPACE NAME' , message : { text : '👋🌎 Hello world!' + 'Text messages can contain things like:\n\n' + ' Hyperlinks 🔗\n' + ' Emojis 😄🎉\n' + ' Mentions of other Chat users @ \n\n' + 'For details, see the ' + '<https://developers.google.com/workspace/chat/format-messages' + ' Chat API developer documentation>.' , }, }; // Make the request const response = await chatClient . createMessage ( request ); // Handle the response console . log ( response ); } await main (); Python chat/client-libraries/cloud/create message user cred.py View on GitHub from authentication utils import create client with user credentials from google.apps import chat v1 as google chat SCOPES = [ "https://www.googleapis.com/auth/chat.messages.create" ] def create message with user cred (): Create a client client = create client with user credentials ( SCOPES ) Initialize request argument(s) request = google chat .
- The following code shows an example of how a Chat app can send a text message with an ID to a given space on behalf of an authenticated user: Node.js chat/client-libraries/cloud/create-message-user-cred-message-id.js View on GitHub import { createClientWithUserCredentials } from './authentication-utils.js' ; const USER AUTH OAUTH SCOPES = [ 'https://www.googleapis.com/auth/chat.messages.create' , ]; // This sample shows how to create a message with user credentials and a custom // message id async function main () { // Create a client const chatClient = await createClientWithUserCredentials ( USER AUTH OAUTH SCOPES , ); // Initialize request argument(s) const request = { // Replace SPACE NAME here. parent : 'spaces/SPACE NAME' , // Message id lets chat apps get, update or delete a message without needing // to store the system assigned ID in the message's resource name messageId : 'client-MESSAGE-ID' , message : { text : 'Hello with user credential!' }, }; // Make the request const response = await chatClient . createMessage ( request ); // Handle the response console . log ( response ); } await main (); Python chat/client-libraries/cloud/create message user cred message id.py View on GitHub from authentication utils import create client with user credentials from google.apps import chat v1 as google chat SCOPES = [ "https://www.googleapis.com/auth/chat.messages.create" ] This sample shows how to create message with user credential with message id def create message with user cred message id (): Create a client client = create client with user credentials ( SCOPES ) Initialize request argument(s) request = google chat .
- The following code shows an example of how a Chat app can send a text message that starts or replies to a given thread identified by key of a given space on behalf of an authenticated user: Node.js chat/client-libraries/cloud/create-message-user-cred-thread-key.js View on GitHub import { protos } from '@google-apps/chat' ; import { createClientWithUserCredentials } from './authentication-utils.js' ; const USER AUTH OAUTH SCOPES = [ 'https://www.googleapis.com/auth/chat.messages.create' , ]; // This sample shows how to create message with user credential with thread key async function main () { // Create a client const chatClient = await createClientWithUserCredentials ( USER AUTH OAUTH SCOPES , ); // Initialize request argument(s) const request = { // Replace SPACE NAME here. parent : 'spaces/SPACE NAME' , // Creates the message as a reply to the thread specified by thread key // If it fails, the message starts a new thread instead messageReplyOption : protos . google . chat . v1 .
- Builder request = CreateMessageRequest . newBuilder () // Replace SPACE NAME here. . setParent ( "spaces/SPACE NAME" ) . setMessage ( Message . newBuilder () . setText ( "👋🌎 Hello world!" + "Text messages can contain things like:\n\n" + " Hyperlinks 🔗\n" + " Emojis 😄🎉\n" + " Mentions of other Chat users @ \n\n" + "For details, see the " + "<https://developers.google.com/workspace/chat/format-messages" + " Chat API developer documentation>." )); Message response = chatServiceClient . createMessage ( request . build ()); System . out . println ( JsonFormat . printer (). print ( response )); } } } Apps Script chat/advanced-service/Main.gs View on GitHub / This sample shows how to create message with user credential It relies on the OAuth2 scope 'https://www.googleapis.com/auth/chat.messages.create' referenced in the manifest file (appsscript.json). / function createMessageUserCred () { // Initialize request argument(s) // TODO(developer): Replace SPACE NAME here. const parent = "spaces/SPACE NAME" ; const message = { text : "👋🌎 Hello world!" + "Text messages can contain things like:\n\n" + " Hyperlinks 🔗\n" + " Emojis 😄🎉\n" + " Mentions of other Chat users @ \n\n" + "For details, see the " + "<https://developers.google.com/workspace/chat/format-messages" + " Chat API developer documentation>." , }; // Make the request const response = Chat .

### Package google.apps.card.v1 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1)
- Source ID: `site-docs-reference`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- OPEN DIALOG Opens a dialog , a windowed, card-based interface that Chat apps use to interact with users.
- Available for Google Workspace add-ons and unavailable for Google Chat apps. peek card header CardHeader When displaying contextual content, the peek card header acts as a placeholder so that the user can navigate forward between the homepage cards and the contextual cards.
- Cards in Google Chat and Workspace add-ons can utilize data sources, like users or spaces, using PlatformDataSource and CommonDataSource components within selection inputs.
- Available for Google Chat apps and unavailable for Google Workspace add-ons. on click OnClick This action is triggered when users click topLabel or bottomLabel .

### REST Resource: spaces.messages \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages)
- Source ID: `site-docs-root-2`
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resource: Message JSON representation Card JSON representation CardHeader JSON representation ImageStyle Section JSON representation WidgetMarkup JSON representation TextParagraph JSON representation Image JSON representation OnClick JSON representation FormAction JSON representation ActionParameter JSON representation OpenLink JSON representation KeyValue JSON representation Icon Button JSON representation TextButton JSON representation ImageButton JSON representation CardAction JSON representation CardWithId JSON representation Card JSON representation CardHeader JSON representation ImageType Section JSON representation Widget JSON representation TextParagraph JSON representation TextSyntax Image JSON representation OnClick JSON representation Action JSON representation ActionParameter JSON representation LoadIndicator Interaction OpenLink JSON representation OpenAs OnClose OverflowMenu JSON representation OverflowMenuItem JSON representation Icon JSON representation MaterialIcon JSON representation DecoratedText JSON representation VerticalAlignment Button JSON representation Color JSON representation Type SwitchControl JSON representation ControlType ButtonList JSON representation TextInput JSON representation Type Suggestions JSON representation SuggestionItem JSON representation Validation JSON representation InputType HostAppDataSourceMarkup JSON representation ChatClientDataSourceMarkup JSON representation SpaceDataSource JSON representation WorkflowDataSourceMarkup JSON representation Type SelectionInput JSON representation SelectionType SelectionItem JSON representation PlatformDataSource JSON representation CommonDataSource DataSourceConfig JSON representation DateTimePicker JSON representation DateTimePickerType Divider Grid JSON representation GridItem JSON representation ImageComponent JSON representation ImageCropStyle JSON representation ImageCropType BorderStyle JSON representation BorderType GridItemLayout Columns JSON representation Column JSON representation HorizontalSizeStyle HorizontalAlignment VerticalAlignment Widgets JSON representation ChipList JSON representation Layout Chip JSON representation Carousel JSON representation CarouselCard JSON representation NestedWidget JSON representation Visibility EventAction JSON representation Trigger JSON representation CommonWidgetAction JSON representation UpdateVisibilityAction JSON representation CollapseControl JSON representation DividerStyle CardAction JSON representation CardFixedFooter JSON representation DisplayStyle ExpressionData JSON representation Condition JSON representation ExpressionDataCondition JSON representation ConditionType Annotation JSON representation AnnotationType UserMentionMetadata JSON representation Type SlashCommandMetadata JSON representation Type RichLinkMetadata JSON representation RichLinkType DriveLinkData JSON representation ChatSpaceLinkData JSON representation MeetSpaceLinkData JSON representation Type HuddleStatus CalendarEventLinkData JSON representation CustomEmojiMetadata JSON representation Thread JSON representation ActionResponse JSON representation ResponseType DialogAction JSON representation Dialog JSON representation ActionStatus JSON representation Code UpdatedWidget JSON representation SelectionItems JSON representation SlashCommand JSON representation MatchedUrl JSON representation EmojiReactionSummary JSON representation DeletionMetadata JSON representation DeletionType QuotedMessageMetadata JSON representation QuoteType QuotedMessageSnapshot JSON representation ForwardedMetadata JSON representation AttachedGif JSON representation AccessoryWidget JSON representation Methods Resource: Message A message in a Google Chat space.
- As part of the Developer Preview Program , if your Chat app authenticates as a user , it can create card messages.
- As part of the Developer Preview Program , if your Chat app authenticates as a user , it can create card messages.
- Users can delete messages sent by apps.

