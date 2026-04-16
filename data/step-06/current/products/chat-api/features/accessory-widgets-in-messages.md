---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:27:57.216Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "Accessory widgets in messages"
feature_slug: "accessory-widgets-in-messages"
latest_feature_date: "2024-03-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages"
  - "https://developers.google.com/workspace/chat/create-messages"
  - "https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1"
keywords:
  - "accessory"
  - "widgets"
  - "messages"
  - "chat"
  - "apps"
  - "can"
  - "add"
  - "interactive"
---

# Accessory widgets in messages

Product: Chat API
Coverage: MEDIUM

## Step 02 Summary

Google Chat apps can add interactive accessory widgets to the bottom of messages; Google Chat apps can add interactive accessory widgets to the bottom of messages.

## Extended Definition

Google Chat apps can add interactive accessory widgets to the bottom of messages; Google Chat apps can add interactive accessory widgets to the bottom of messages.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages)
- [https://developers.google.com/workspace/chat/create-messages](https://developers.google.com/workspace/chat/create-messages)
- [https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1)

## Supporting Pages

### REST Resource: spaces.messages \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages)
- Source ID: `site-docs-root-2`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- Resource: Message JSON representation Card JSON representation CardHeader JSON representation ImageStyle Section JSON representation WidgetMarkup JSON representation TextParagraph JSON representation Image JSON representation OnClick JSON representation FormAction JSON representation ActionParameter JSON representation OpenLink JSON representation KeyValue JSON representation Icon Button JSON representation TextButton JSON representation ImageButton JSON representation CardAction JSON representation CardWithId JSON representation Card JSON representation CardHeader JSON representation ImageType Section JSON representation Widget JSON representation TextParagraph JSON representation TextSyntax Image JSON representation OnClick JSON representation Action JSON representation ActionParameter JSON representation LoadIndicator Interaction OpenLink JSON representation OpenAs OnClose OverflowMenu JSON representation OverflowMenuItem JSON representation Icon JSON representation MaterialIcon JSON representation DecoratedText JSON representation VerticalAlignment Button JSON representation Color JSON representation Type SwitchControl JSON representation ControlType ButtonList JSON representation TextInput JSON representation Type Suggestions JSON representation SuggestionItem JSON representation Validation JSON representation InputType HostAppDataSourceMarkup JSON representation ChatClientDataSourceMarkup JSON representation SpaceDataSource JSON representation WorkflowDataSourceMarkup JSON representation Type SelectionInput JSON representation SelectionType SelectionItem JSON representation PlatformDataSource JSON representation CommonDataSource DataSourceConfig JSON representation DateTimePicker JSON representation DateTimePickerType Divider Grid JSON representation GridItem JSON representation ImageComponent JSON representation ImageCropStyle JSON representation ImageCropType BorderStyle JSON representation BorderType GridItemLayout Columns JSON representation Column JSON representation HorizontalSizeStyle HorizontalAlignment VerticalAlignment Widgets JSON representation ChipList JSON representation Layout Chip JSON representation Carousel JSON representation CarouselCard JSON representation NestedWidget JSON representation Visibility EventAction JSON representation Trigger JSON representation CommonWidgetAction JSON representation UpdateVisibilityAction JSON representation CollapseControl JSON representation DividerStyle CardAction JSON representation CardFixedFooter JSON representation DisplayStyle ExpressionData JSON representation Condition JSON representation ExpressionDataCondition JSON representation ConditionType Annotation JSON representation AnnotationType UserMentionMetadata JSON representation Type SlashCommandMetadata JSON representation Type RichLinkMetadata JSON representation RichLinkType DriveLinkData JSON representation ChatSpaceLinkData JSON representation MeetSpaceLinkData JSON representation Type HuddleStatus CalendarEventLinkData JSON representation CustomEmojiMetadata JSON representation Thread JSON representation ActionResponse JSON representation ResponseType DialogAction JSON representation Dialog JSON representation ActionStatus JSON representation Code UpdatedWidget JSON representation SelectionItems JSON representation SlashCommand JSON representation MatchedUrl JSON representation EmojiReactionSummary JSON representation DeletionMetadata JSON representation DeletionType QuotedMessageMetadata JSON representation QuoteType QuotedMessageSnapshot JSON representation ForwardedMetadata JSON representation AttachedGif JSON representation AccessoryWidget JSON representation Methods Resource: Message A message in a Google Chat space.
- To include this field in your request, you must call the Chat API using app authentication and omit the following: Attachments Accessory widgets For details, see Send a message privately . deletionMetadata object ( DeletionMetadata ) Output only.
- For example, if multiple Chat apps create a message using the same thread key, the messages are posted in different threads.
- Chat apps utilize ActionResponse to interact, potentially updating messages or presenting dialogs.

### Send a message using the Google Chat API \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/create-messages](https://developers.google.com/workspace/chat/create-messages)
- Source ID: `site-docs-root`
- Final score: 141
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- I created this message by calling ' + 'the Chat API \' s messages.create() method.' , "cards v2" : [{ "card" : { "header" : { "title" : 'About this message' , "image url" : 'https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/info/default/24px.svg' }, "sections" : [{ "header" : "Contents" , "widgets" : [{ "text paragraph" : { "text" : '🔡 <b>Text</b> which can include ' + 'hyperlinks 🔗, emojis 😄🎉, and @mentions 🗣️.' }}, { "text paragraph" : { "text" : '🖼️ A <b>card</b> to display visual elements' + 'and request information such as text 🔤, ' + 'dates and times 📅, and selections ☑️.' }}, { "text paragraph" : { "text" : '👉🔘 An <b>accessory widget</b> which adds ' + 'a button to the bottom of a message.' }} ]}, { "header" : "What's next" , "collapsible" : True , "widgets" : [{ "text paragraph" : { "text" : "❤️ <a href='https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.reactions/create'>Add a reaction</a>." }}, { "text paragraph" : { "text" : "🔄 <a href='https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages/patch'>Update</a> " + "or ❌ <a href='https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages/delete'>delete</a> " + "the message." } }] } ] }}], "accessory widgets" : [{ "button list" : { "buttons" : [{ "text" : 'View documentation' , "icon" : { "material icon" : { "name" : 'link' }}, "on click" : { "open link" : { "url" : 'https://developers.google.com/workspace/chat/create-messages' }} }]}}] } ) Make the request response = client . create message ( request ) Handle the response print ( response ) create message with app cred () Java chat/client-libraries/cloud/src/main/java/com/google/workspace/api/chat/samples/CreateMessageAppCred.java View on GitHub import com.google.apps.card.v1.Button ; import com.google.apps.card.v1.ButtonList ; import com.google.apps.card.v1.Card ; import com.google.apps.card.v1.Icon ; import com.google.apps.card.v1.MaterialIcon ; import com.google.apps.card.v1.OnClick ; import com.google.apps.card.v1.OpenLink ; import com.google.apps.card.v1.TextParagraph ; import com.google.apps.card.v1.Widget ; import com.google.apps.card.v1.Card.CardHeader ; import com.google.apps.card.v1.Card.Section ; import com.google.chat.v1.AccessoryWidget ; import com.google.chat.v1.CardWithId ; import com.google.chat.v1.ChatServiceClient ; import com.google.chat.v1.CreateMessageRequest ; import com.google.chat.v1.Message ; // This sample shows how to create message with app credential. public class CreateMessageAppCred { public static void main ( String [] args ) throws Exception { try ( ChatServiceClient chatServiceClient = AuthenticationUtils . createClientWithAppCredentials ()) { CreateMessageRequest .
- I created this message by calling " + "the Chat API\'s messages.create() method." ) . addCardsV2 ( CardWithId . newBuilder (). setCard ( Card . newBuilder () . setHeader ( CardHeader . newBuilder () . setTitle ( "About this message" ) . setImageUrl ( "https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/info/default/24px.svg" )) . addSections ( Section . newBuilder () . setHeader ( "Contents" ) . addWidgets ( Widget . newBuilder (). setTextParagraph ( TextParagraph . newBuilder (). setText ( "🔡 <b>Text</b> which can include " + "hyperlinks 🔗, emojis 😄🎉, and @mentions 🗣️." ))) . addWidgets ( Widget . newBuilder (). setTextParagraph ( TextParagraph . newBuilder (). setText ( "🖼️ A <b>card</b> to display visual elements " + "and request information such as text 🔤, " + "dates and times 📅, and selections ☑️." ))) . addWidgets ( Widget . newBuilder (). setTextParagraph ( TextParagraph . newBuilder (). setText ( "👉🔘 An <b>accessory widget</b> which adds " + "a button to the bottom of a message." )))) . addSections ( Section . newBuilder () . setHeader ( "What's next" ) . setCollapsible ( true ) . addWidgets ( Widget . newBuilder (). setTextParagraph ( TextParagraph . newBuilder (). setText ( "❤️ <a href='https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.reactions/create'>Add a reaction</a>." ))) . addWidgets ( Widget . newBuilder (). setTextParagraph ( TextParagraph . newBuilder (). setText ( "🔄 <a href='https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages/patch'>Update</a> " + "or ❌ <a href='https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages/delete'>delete</a> " + "the message." )))))) . addAccessoryWidgets ( AccessoryWidget . newBuilder () . setButtonList ( ButtonList . newBuilder () . addButtons ( Button . newBuilder () . setText ( "View documentation" ) . setIcon ( Icon . newBuilder () . setMaterialIcon ( MaterialIcon . newBuilder (). setName ( "link" ))) . setOnClick ( OnClick . newBuilder () . setOpenLink ( OpenLink . newBuilder () . setUrl ( "https://developers.google.com/workspace/chat/create-messages" ))))))); Message response = chatServiceClient . createMessage ( request . build ()); System . out . println ( JsonFormat . printer (). print ( response )); } } } Apps Script chat/advanced-service/Main.gs View on GitHub / This sample shows how to create message with app credential It relies on the OAuth2 scope 'https://www.googleapis.com/auth/chat.bot' used by service accounts. / function createMessageAppCred () { // Initialize request argument(s) // TODO(developer): Replace SPACE NAME here. const parent = "spaces/SPACE NAME" ; const message = { text : "👋🌎 Hello world!
- I created this message by calling ' + "the Chat API's messages.create() method." , cardsV2 : [ { card : { header : { title : 'About this message' , imageUrl : 'https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/info/default/24px.svg' , }, sections : [ { header : 'Contents' , widgets : [ { textParagraph : { text : '🔡 <b>Text</b> which can include ' + 'hyperlinks 🔗, emojis 😄🎉, and @mentions 🗣️.' , }, }, { textParagraph : { text : '🖼️ A <b>card</b> to display visual elements' + 'and request information such as text 🔤, ' + 'dates and times 📅, and selections ☑️.' , }, }, { textParagraph : { text : '👉🔘 An <b>accessory widget</b> which adds ' + 'a button to the bottom of a message.' , }, }, ], }, { header : "What's next" , collapsible : true , widgets : [ { textParagraph : { text : "❤️ <a href='https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.reactions/create'>Add a reaction</a>." , }, }, { textParagraph : { text : "🔄 <a href='https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages/patch'>Update</a> " + "or ❌ <a href='https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages/delete'>delete</a> " + 'the message.' , }, }, ], }, ], }, }, ], accessoryWidgets : [ { buttonList : { buttons : [ { text : 'View documentation' , icon : { materialIcon : { name : 'link' }}, onClick : { openLink : { url : 'https://developers.google.com/workspace/chat/create-messages' , }, }, }, ], }, }, ], }, }; // Make the request const response = await chatClient . createMessage ( request ); // Handle the response console . log ( response ); } await main (); Python chat/client-libraries/cloud/create message app cred.py View on GitHub from authentication utils import create client with app credentials from google.apps import chat v1 as google chat This sample shows how to create message with app credential def create message with app cred (): Create a client client = create client with app credentials () Initialize request argument(s) request = google chat .
- When a user clicks a button, the corresponding function (such as doUpvote ) processes the interaction: { text : "Rate your experience with this Chat app." , accessoryWidgets : [{ buttonList : { buttons : [{ icon : { material icon : { name : "thumb up" }}, color : { red : 0 , blue : 255 , green : 0 }, onClick : { action : { function : "doUpvote" }} }, { icon : { material icon : { name : "thumb down" }}, color : { red : 0 , blue : 255 , green : 0 }, onClick : { action : { function : "doDownvote" }} }]}}] } Send a message privately Chat apps can send messages privately so that the message is only visible to a specific user in the space.

### Package google.apps.card.v1 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1)
- Source ID: `site-docs-reference`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- For example, this is a JSON representation of a carousel that contains three text paragraph widgets. { "carouselCards": [ { "widgets": [ { "textParagraph": { "text": "First text paragraph in carousel", } } ] }, { "widgets": [ { "textParagraph": { "text": "Second text paragraph in carousel", } } ] }, { "widgets": [ { "textParagraph": { "text": "Third text paragraph in carousel", } } ] } ] } Available for Google Chat apps and unavailable for Google Workspace add-ons.
- Google Workspace add-ons and Chat apps Fields horizontal size style HorizontalSizeStyle Specifies how a column fills the width of the card. horizontal alignment HorizontalAlignment Specifies whether widgets align to the left, right, or center of a column. vertical alignment VerticalAlignment Specifies whether widgets align to the top, bottom, or center of a column. widgets[] Widgets An array of widgets included in a column.
- For more information about formatting text, see Formatting text in Google Chat apps and Formatting text in Google Workspace add-ons . widgets[] Widget All the widgets in the section.
- Widgets are fundamental building blocks of Google Chat cards, encompassing elements like text, images, buttons, and interactive controls for creating dynamic layouts.

