---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:27:57.174Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "Increased per-space write quotas"
feature_slug: "increased-per-space-write-quotas"
latest_feature_date: "2025-09-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages"
  - "https://developers.google.com/workspace/chat/create-spaces"
  - "https://developers.google.com/workspace/chat/quickstart/gcf-app"
keywords:
  - "increased"
  - "per"
  - "space"
  - "write"
  - "quotas"
  - "chat"
  - "provides"
  - "higher"
---

# Increased per-space write quotas

Product: Chat API
Coverage: MEDIUM

## Step 02 Summary

The Chat API provides higher per-space quota limits for writing messages during imports and for creating reactions.

## Extended Definition

The Chat API provides higher per-space quota limits for writing messages during imports and for creating reactions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages)
- [https://developers.google.com/workspace/chat/create-spaces](https://developers.google.com/workspace/chat/create-spaces)
- [https://developers.google.com/workspace/chat/quickstart/gcf-app](https://developers.google.com/workspace/chat/quickstart/gcf-app)

## Supporting Pages

### REST Resource: spaces.messages \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages)
- Source ID: `site-docs-root-2`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- Resource: Message JSON representation Card JSON representation CardHeader JSON representation ImageStyle Section JSON representation WidgetMarkup JSON representation TextParagraph JSON representation Image JSON representation OnClick JSON representation FormAction JSON representation ActionParameter JSON representation OpenLink JSON representation KeyValue JSON representation Icon Button JSON representation TextButton JSON representation ImageButton JSON representation CardAction JSON representation CardWithId JSON representation Card JSON representation CardHeader JSON representation ImageType Section JSON representation Widget JSON representation TextParagraph JSON representation TextSyntax Image JSON representation OnClick JSON representation Action JSON representation ActionParameter JSON representation LoadIndicator Interaction OpenLink JSON representation OpenAs OnClose OverflowMenu JSON representation OverflowMenuItem JSON representation Icon JSON representation MaterialIcon JSON representation DecoratedText JSON representation VerticalAlignment Button JSON representation Color JSON representation Type SwitchControl JSON representation ControlType ButtonList JSON representation TextInput JSON representation Type Suggestions JSON representation SuggestionItem JSON representation Validation JSON representation InputType HostAppDataSourceMarkup JSON representation ChatClientDataSourceMarkup JSON representation SpaceDataSource JSON representation WorkflowDataSourceMarkup JSON representation Type SelectionInput JSON representation SelectionType SelectionItem JSON representation PlatformDataSource JSON representation CommonDataSource DataSourceConfig JSON representation DateTimePicker JSON representation DateTimePickerType Divider Grid JSON representation GridItem JSON representation ImageComponent JSON representation ImageCropStyle JSON representation ImageCropType BorderStyle JSON representation BorderType GridItemLayout Columns JSON representation Column JSON representation HorizontalSizeStyle HorizontalAlignment VerticalAlignment Widgets JSON representation ChipList JSON representation Layout Chip JSON representation Carousel JSON representation CarouselCard JSON representation NestedWidget JSON representation Visibility EventAction JSON representation Trigger JSON representation CommonWidgetAction JSON representation UpdateVisibilityAction JSON representation CollapseControl JSON representation DividerStyle CardAction JSON representation CardFixedFooter JSON representation DisplayStyle ExpressionData JSON representation Condition JSON representation ExpressionDataCondition JSON representation ConditionType Annotation JSON representation AnnotationType UserMentionMetadata JSON representation Type SlashCommandMetadata JSON representation Type RichLinkMetadata JSON representation RichLinkType DriveLinkData JSON representation ChatSpaceLinkData JSON representation MeetSpaceLinkData JSON representation Type HuddleStatus CalendarEventLinkData JSON representation CustomEmojiMetadata JSON representation Thread JSON representation ActionResponse JSON representation ResponseType DialogAction JSON representation Dialog JSON representation ActionStatus JSON representation Code UpdatedWidget JSON representation SelectionItems JSON representation SlashCommand JSON representation MatchedUrl JSON representation EmojiReactionSummary JSON representation DeletionMetadata JSON representation DeletionType QuotedMessageMetadata JSON representation QuoteType QuotedMessageSnapshot JSON representation ForwardedMetadata JSON representation AttachedGif JSON representation AccessoryWidget JSON representation Methods Resource: Message A message in a Google Chat space.
- Methods create Creates a message in a Google Chat space. delete Deletes a message. get Returns details about a message. list Lists messages in a space that the caller is a member of, including messages from blocked members and spaces. patch Updates a message. replaceCards Developer Preview: Available as part of the Google Workspace Developer Preview Program , which grants early access to certain features.
- JSON representation { "uri" : string , "richLinkType" : enum ( RichLinkType ) , "driveLinkData" : { object ( DriveLinkData ) } , "chatSpaceLinkData" : { object ( ChatSpaceLinkData ) } , "meetSpaceLinkData" : { object ( MeetSpaceLinkData ) } , "calendarEventLinkData" : { object ( CalendarEventLinkData ) } } Fields uri string The URI of this link. richLinkType enum ( RichLinkType ) The rich link type.
- Data for the linked resource. data can be only one of the following: driveLinkData object ( DriveLinkData ) Data for a drive link. chatSpaceLinkData object ( ChatSpaceLinkData ) Data for a chat space link. meetSpaceLinkData object ( MeetSpaceLinkData ) Data for a Meet space link. calendarEventLinkData object ( CalendarEventLinkData ) Data for a Calendar event link.

### Create a named space in Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/create-spaces](https://developers.google.com/workspace/chat/create-spaces)
- Source ID: `site-docs-root`
- Final score: 89
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Write a script that calls Chat API Here's how to create a named space: Note: The following sample uses the REST API interface with the Google API client libraries instead of the gRPC API interface.
- Here's how to create a named space: Node.js chat/client-libraries/cloud/create-space-user-cred.js View on GitHub import { createClientWithUserCredentials } from './authentication-utils.js' ; const USER AUTH OAUTH SCOPES = [ 'https://www.googleapis.com/auth/chat.spaces.create' , ]; // This sample shows how to create a named space with user credential async function main () { // Create a client const chatClient = await createClientWithUserCredentials ( USER AUTH OAUTH SCOPES , ); // Initialize request argument(s) const request = { space : { spaceType : 'SPACE' , // Replace DISPLAY NAME here. displayName : 'DISPLAY NAME' , }, }; // Make the request const response = await chatClient . createSpace ( request ); // Handle the response console . log ( response ); } await main (); Python chat/client-libraries/cloud/create space user cred.py View on GitHub from authentication utils import create client with user credentials from google.apps import chat v1 as google chat SCOPES = [ "https://www.googleapis.com/auth/chat.spaces.create" ] def create space with user cred (): Create a client client = create client with user credentials ( SCOPES ) Initialize request argument(s) request = google chat .
- CreateSpaceRequest ( space = { "space type" : 'SPACE' , Replace DISPLAY NAME here. "display name" : 'DISPLAY NAME' } ) Make the request response = client . create space ( request ) Handle the response print ( response ) create space with user cred () Java chat/client-libraries/cloud/src/main/java/com/google/workspace/api/chat/samples/CreateSpaceUserCred.java View on GitHub import com.google.chat.v1.ChatServiceClient ; import com.google.chat.v1.CreateSpaceRequest ; import com.google.chat.v1.Space ; // This sample shows how to create space with user credential. public class CreateSpaceUserCred { private static final String SCOPE = "https://www.googleapis.com/auth/chat.spaces.create" ; public static void main ( String [] args ) throws Exception { try ( ChatServiceClient chatServiceClient = AuthenticationUtils . createClientWithUserCredentials ( ImmutableList . of ( SCOPE ))) { CreateSpaceRequest .
- Credentials . from service account file ( 'credentials.json' ) . with scopes ( SCOPES ) ) Build a service endpoint for Chat API. chat = build ( 'chat' , 'v1' , credentials = creds ) Use the service endpoint to call Chat API. result = chat . spaces () . create ( Details about the space to create. body = { To create a named space, set spaceType to SPACE. 'spaceType' : 'SPACE' , The user-visible name of the space. 'displayName' : 'API-made' , The customer ID of the Workspace domain. 'customer' : ' CUSTOMER ' } ) . execute () Prints details about the created space. print ( result ) if name == ' main ' : main () In the code, replace the following: CUSTOMER : the customer ID of the domain of the space in the format customer/{customer} where {customer} is the ID from the Admin SDK customer resource .

### Build an HTTP Google Chat app \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/quickstart/gcf-app](https://developers.google.com/workspace/chat/quickstart/gcf-app)
- Source ID: `site-docs-root`
- Final score: 83
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Replace the contents of AvatarApp.java with the following code: java/avatar-app/src/main/java/AvatarApp.java View on GitHub import com.google.api.services.chat.v1.model.CardWithId ; import com.google.api.services.chat.v1.model.GoogleAppsCardV1Card ; import com.google.api.services.chat.v1.model.GoogleAppsCardV1CardHeader ; import com.google.api.services.chat.v1.model.GoogleAppsCardV1Image ; import com.google.api.services.chat.v1.model.GoogleAppsCardV1Section ; import com.google.api.services.chat.v1.model.GoogleAppsCardV1TextParagraph ; import com.google.api.services.chat.v1.model.GoogleAppsCardV1Widget ; import com.google.api.services.chat.v1.model.Message ; import com.google.api.services.chat.v1.model.User ; import com.google.cloud.functions.HttpFunction ; import com.google.cloud.functions.HttpRequest ; import com.google.cloud.functions.HttpResponse ; import com.google.gson.Gson ; import com.google.gson.JsonObject ; import java.util.List ; public class AvatarApp implements HttpFunction { private static final Gson gson = new Gson (); // Command IDs (configure these in Google Chat API) private static final int ABOUT COMMAND ID = 1 ; // ID for the "/about" slash command private static final int HELP COMMAND ID = 2 ; // ID for the "Help" quick command @Override public void service ( HttpRequest request , HttpResponse response ) throws Exception { JsonObject event = gson . fromJson ( request . getReader (), JsonObject . class ); if ( event . has ( "appCommandMetadata" )) { handleAppCommands ( event , response ); } else { handleRegularMessage ( event , response ); } } / Handles slash and quick commands. @param event The Google Chat event. @param response The HTTP response object. / private void handleAppCommands ( JsonObject event , HttpResponse response ) throws Exception { int appCommandId = event . getAsJsonObject ( "appCommandMetadata" ). get ( "appCommandId" ). getAsInt (); switch ( appCommandId ) { case ABOUT COMMAND ID : Message aboutMessage = new Message (); aboutMessage . setText ( "The Avatar app replies to Google Chat messages." ); aboutMessage . setPrivateMessageViewer ( new User () . setName ( event . getAsJsonObject ( "user" ). get ( "name" ). getAsString ())); response . getWriter (). write ( gson . toJson ( aboutMessage )); return ; case HELP COMMAND ID : Message helpMessage = new Message (); helpMessage . setText ( "The Avatar app replies to Google Chat messages." ); helpMessage . setPrivateMessageViewer ( new User () . setName ( event . getAsJsonObject ( "user" ). get ( "name" ). getAsString ())); response . getWriter (). write ( gson . toJson ( helpMessage )); return ; } } / Handles regular messages (not commands). @param event The Google Chat event. @param response The HTTP response object. / private void handleRegularMessage ( JsonObject event , HttpResponse response ) throws Exception { if ( ! event . has ( "user" )) { response . getWriter (). write ( "Invalid request." ); return ; } JsonObject user = event . getAsJsonObject ( "user" ); String displayName = user . has ( "displayName" ) ? user . get ( "displayName" ). getAsString () : "" ; String avatarUrl = user . has ( "avatarUrl" ) ? user . get ( "avatarUrl" ). getAsString () : "" ; Message message = createMessage ( displayName , avatarUrl ); response . getWriter (). write ( gson . toJson ( message )); } / Creates a card message with the user's avatar. @param displayName The user's display name. @param avatarUrl The URL of the user's avatar. @return The card message object. / private Message createMessage ( String displayName , String avatarUrl ) { return new Message () . setText ( "Here's your avatar" ) . setCardsV2 ( List . of ( new CardWithId () . setCardId ( "avatarCard" ) . setCard ( new GoogleAppsCardV1Card () . setName ( "Avatar Card" ) . setHeader ( new GoogleAppsCardV1CardHeader () . setTitle ( String . format ( "Hello %s!" , displayName ))) . setSections ( List . of ( new GoogleAppsCardV1Section (). setWidgets ( List . of ( new GoogleAppsCardV1Widget () . setTextParagraph ( new GoogleAppsCardV1TextParagraph () . setText ( "Your avatar picture:" )), new GoogleAppsCardV1Widget () . setImage ( new GoogleAppsCardV1Image (). setImageUrl ( avatarUrl ))))))))); } } Replace the contents of pom.xml with the following code: java/avatar-app/pom.xml View on GitHub <project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4 0 0.xsd"> <modelVersion>4.0.0</modelVersion> <groupId>gcfv2</groupId> <artifactId>avatar-app</artifactId> <version>0.0.1</version> <name>Avatar App</name> <properties> <maven.compiler.release>21</maven.compiler.release> </properties> <dependencies> <dependency> <groupId>com.google.cloud.functions</groupId> <artifactId>functions-framework-api</artifactId> <version>1.1.4</version> </dependency> <!-- https://mvnrepository.com/artifact/com.google.code.gson/gson --> <dependency> <groupId>com.google.code.gson</groupId> <artifactId>gson</artifactId> <version>2.12.1</version> </dependency> <!-- https://mvnrepository.com/artifact/com.google.apis/google-api-services-chat --> <dependency> <groupId>com.google.apis</groupId> <artifactId>google-api-services-chat</artifactId> <version>v1-rev20250116-2.0.0</version> </dependency> </dependencies> </project> Click Save and redeploy .
- With this architecture, you configure Chat to integrate with Google Cloud or an on-premises server by using HTTP, as shown in the following diagram: In the preceding diagram, a user interacting with an HTTP Chat app has the following flow of information: A user sends a message in Chat to a Chat app, either in a direct message or in a Chat space.
- Optionally, the Chat app logic can integrate with Google Workspace services (like Calendar and Sheets), other Google services (like Maps, YouTube, and Vertex AI), or other web services (like a project management system or ticketing tool).
- Test your Chat app To test your Chat app, open a direct message space with the Chat app and send a message: Open Google Chat using the Google Workspace account that you provided when you added yourself as a trusted tester.

