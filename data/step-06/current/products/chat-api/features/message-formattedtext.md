---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:27:57.255Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "Message.formattedText"
feature_slug: "message-formattedtext"
latest_feature_date: "2023-09-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages"
  - "https://developers.google.com/workspace/chat/create-messages"
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/cards"
keywords:
  - "message"
  - "formattedtext"
  - "field"
  - "lets"
  - "developers"
  - "view"
  - "text"
  - "formatting"
---

# Message.formattedText

Product: Chat API
Coverage: MEDIUM

## Step 02 Summary

The formattedText field lets developers view the text formatting sent in a message.

## Extended Definition

The formattedText field lets developers view the text formatting sent in a message.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages)
- [https://developers.google.com/workspace/chat/create-messages](https://developers.google.com/workspace/chat/create-messages)
- [https://developers.google.com/workspace/chat/api/reference/rest/v1/cards](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards)

## Supporting Pages

### REST Resource: spaces.messages \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages)
- Source ID: `site-docs-root-2`
- Final score: 226
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "name" : string , "sender" : { object ( User ) } , "createTime" : string , "lastUpdateTime" : string , "deleteTime" : string , "text" : string , "formattedText" : string , "cards" : [ { object ( Card ) } ] , "cardsV2" : [ { object ( CardWithId ) } ] , "annotations" : [ { object ( Annotation ) } ] , "thread" : { object ( Thread ) } , "space" : { object ( Space ) } , "fallbackText" : string , "actionResponse" : { object ( ActionResponse ) } , "argumentText" : string , "slashCommand" : { object ( SlashCommand ) } , "attachment" : [ { object ( Attachment ) } ] , "matchedUrl" : { object ( MatchedUrl ) } , "threadReply" : boolean , "clientAssignedMessageId" : string , "emojiReactionSummaries" : [ { object ( EmojiReactionSummary ) } ] , "privateMessageViewer" : { object ( User ) } , "deletionMetadata" : { object ( DeletionMetadata ) } , "quotedMessageMetadata" : { object ( QuotedMessageMetadata ) } , "attachedGifs" : [ { object ( AttachedGif ) } ] , "accessoryWidgets" : [ { object ( AccessoryWidget ) } ] } Fields name string Identifier.
- QuotedMessageSnapshot Provides a snapshot of the content of the quoted message at the time of quoting or forwarding JSON representation { "sender" : string , "text" : string , "formattedText" : string , "annotations" : [ { object ( Annotation ) } ] , "attachments" : [ { object ( Attachment ) } ] } Fields sender string Output only.
- For more information, see View text formatting sent in a message cards[] (deprecated) object ( Card ) This item is deprecated!
- Example plain-text message body: Hello @FooBot how are you!" The corresponding annotations metadata: "annotations":[{ "type":"USER MENTION", "startIndex":6, "length":7, "userMention": { "user": { "name":"users/{user}", "displayName":"FooBot", "avatarUrl":"https://goo.gl/aeDtrS", "type":"BOT" }, "type":"MENTION" } }] JSON representation { "type" : enum ( AnnotationType ) , "length" : integer , "startIndex" : integer , "userMention" : { object ( UserMentionMetadata ) } , "slashCommand" : { object ( SlashCommandMetadata ) } , "richLinkMetadata" : { object ( RichLinkMetadata ) } , "customEmojiMetadata" : { object ( CustomEmojiMetadata ) } } Fields type enum ( AnnotationType ) The type of this annotation. length integer Length of the substring in the plain-text message body this annotation corresponds to.

### Send a message using the Google Chat API \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/create-messages](https://developers.google.com/workspace/chat/create-messages)
- Source ID: `site-docs-root`
- Final score: 189
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- I created this message by calling ' + 'the Chat API \' s messages.create() method.' , "cards v2" : [{ "card" : { "header" : { "title" : 'About this message' , "image url" : 'https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/info/default/24px.svg' }, "sections" : [{ "header" : "Contents" , "widgets" : [{ "text paragraph" : { "text" : '🔡 <b>Text</b> which can include ' + 'hyperlinks 🔗, emojis 😄🎉, and @mentions 🗣️.' }}, { "text paragraph" : { "text" : '🖼️ A <b>card</b> to display visual elements' + 'and request information such as text 🔤, ' + 'dates and times 📅, and selections ☑️.' }}, { "text paragraph" : { "text" : '👉🔘 An <b>accessory widget</b> which adds ' + 'a button to the bottom of a message.' }} ]}, { "header" : "What's next" , "collapsible" : True , "widgets" : [{ "text paragraph" : { "text" : "❤️ <a href='https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.reactions/create'>Add a reaction</a>." }}, { "text paragraph" : { "text" : "🔄 <a href='https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages/patch'>Update</a> " + "or ❌ <a href='https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages/delete'>delete</a> " + "the message." } }] } ] }}], "accessory widgets" : [{ "button list" : { "buttons" : [{ "text" : 'View documentation' , "icon" : { "material icon" : { "name" : 'link' }}, "on click" : { "open link" : { "url" : 'https://developers.google.com/workspace/chat/create-messages' }} }]}}] } ) Make the request response = client . create message ( request ) Handle the response print ( response ) create message with app cred () Java chat/client-libraries/cloud/src/main/java/com/google/workspace/api/chat/samples/CreateMessageAppCred.java View on GitHub import com.google.apps.card.v1.Button ; import com.google.apps.card.v1.ButtonList ; import com.google.apps.card.v1.Card ; import com.google.apps.card.v1.Icon ; import com.google.apps.card.v1.MaterialIcon ; import com.google.apps.card.v1.OnClick ; import com.google.apps.card.v1.OpenLink ; import com.google.apps.card.v1.TextParagraph ; import com.google.apps.card.v1.Widget ; import com.google.apps.card.v1.Card.CardHeader ; import com.google.apps.card.v1.Card.Section ; import com.google.chat.v1.AccessoryWidget ; import com.google.chat.v1.CardWithId ; import com.google.chat.v1.ChatServiceClient ; import com.google.chat.v1.CreateMessageRequest ; import com.google.chat.v1.Message ; // This sample shows how to create message with app credential. public class CreateMessageAppCred { public static void main ( String [] args ) throws Exception { try ( ChatServiceClient chatServiceClient = AuthenticationUtils . createClientWithAppCredentials ()) { CreateMessageRequest .
- I created this message by calling " + "the Chat API\'s messages.create() method." ) . addCardsV2 ( CardWithId . newBuilder (). setCard ( Card . newBuilder () . setHeader ( CardHeader . newBuilder () . setTitle ( "About this message" ) . setImageUrl ( "https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/info/default/24px.svg" )) . addSections ( Section . newBuilder () . setHeader ( "Contents" ) . addWidgets ( Widget . newBuilder (). setTextParagraph ( TextParagraph . newBuilder (). setText ( "🔡 <b>Text</b> which can include " + "hyperlinks 🔗, emojis 😄🎉, and @mentions 🗣️." ))) . addWidgets ( Widget . newBuilder (). setTextParagraph ( TextParagraph . newBuilder (). setText ( "🖼️ A <b>card</b> to display visual elements " + "and request information such as text 🔤, " + "dates and times 📅, and selections ☑️." ))) . addWidgets ( Widget . newBuilder (). setTextParagraph ( TextParagraph . newBuilder (). setText ( "👉🔘 An <b>accessory widget</b> which adds " + "a button to the bottom of a message." )))) . addSections ( Section . newBuilder () . setHeader ( "What's next" ) . setCollapsible ( true ) . addWidgets ( Widget . newBuilder (). setTextParagraph ( TextParagraph . newBuilder (). setText ( "❤️ <a href='https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.reactions/create'>Add a reaction</a>." ))) . addWidgets ( Widget . newBuilder (). setTextParagraph ( TextParagraph . newBuilder (). setText ( "🔄 <a href='https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages/patch'>Update</a> " + "or ❌ <a href='https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages/delete'>delete</a> " + "the message." )))))) . addAccessoryWidgets ( AccessoryWidget . newBuilder () . setButtonList ( ButtonList . newBuilder () . addButtons ( Button . newBuilder () . setText ( "View documentation" ) . setIcon ( Icon . newBuilder () . setMaterialIcon ( MaterialIcon . newBuilder (). setName ( "link" ))) . setOnClick ( OnClick . newBuilder () . setOpenLink ( OpenLink . newBuilder () . setUrl ( "https://developers.google.com/workspace/chat/create-messages" ))))))); Message response = chatServiceClient . createMessage ( request . build ()); System . out . println ( JsonFormat . printer (). print ( response )); } } } Apps Script chat/advanced-service/Main.gs View on GitHub / This sample shows how to create message with app credential It relies on the OAuth2 scope 'https://www.googleapis.com/auth/chat.bot' used by service accounts. / function createMessageAppCred () { // Initialize request argument(s) // TODO(developer): Replace SPACE NAME here. const parent = "spaces/SPACE NAME" ; const message = { text : "👋🌎 Hello world!
- I created this message by calling ' + "the Chat API's messages.create() method." , cardsV2 : [ { card : { header : { title : 'About this message' , imageUrl : 'https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/info/default/24px.svg' , }, sections : [ { header : 'Contents' , widgets : [ { textParagraph : { text : '🔡 <b>Text</b> which can include ' + 'hyperlinks 🔗, emojis 😄🎉, and @mentions 🗣️.' , }, }, { textParagraph : { text : '🖼️ A <b>card</b> to display visual elements' + 'and request information such as text 🔤, ' + 'dates and times 📅, and selections ☑️.' , }, }, { textParagraph : { text : '👉🔘 An <b>accessory widget</b> which adds ' + 'a button to the bottom of a message.' , }, }, ], }, { header : "What's next" , collapsible : true , widgets : [ { textParagraph : { text : "❤️ <a href='https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.reactions/create'>Add a reaction</a>." , }, }, { textParagraph : { text : "🔄 <a href='https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages/patch'>Update</a> " + "or ❌ <a href='https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages/delete'>delete</a> " + 'the message.' , }, }, ], }, ], }, }, ], accessoryWidgets : [ { buttonList : { buttons : [ { text : 'View documentation' , icon : { materialIcon : { name : 'link' }}, onClick : { openLink : { url : 'https://developers.google.com/workspace/chat/create-messages' , }, }, }, ], }, }, ], }, }; // Make the request const response = await chatClient . createMessage ( request ); // Handle the response console . log ( response ); } await main (); Python chat/client-libraries/cloud/create message app cred.py View on GitHub from authentication utils import create client with app credentials from google.apps import chat v1 as google chat This sample shows how to create message with app credential def create message with app cred (): Create a client client = create client with app credentials () Initialize request argument(s) request = google chat .
- The following code shows an example of how a Chat app can send a text message with an ID to a given space on behalf of an authenticated user: Node.js chat/client-libraries/cloud/create-message-user-cred-message-id.js View on GitHub import { createClientWithUserCredentials } from './authentication-utils.js' ; const USER AUTH OAUTH SCOPES = [ 'https://www.googleapis.com/auth/chat.messages.create' , ]; // This sample shows how to create a message with user credentials and a custom // message id async function main () { // Create a client const chatClient = await createClientWithUserCredentials ( USER AUTH OAUTH SCOPES , ); // Initialize request argument(s) const request = { // Replace SPACE NAME here. parent : 'spaces/SPACE NAME' , // Message id lets chat apps get, update or delete a message without needing // to store the system assigned ID in the message's resource name messageId : 'client-MESSAGE-ID' , message : { text : 'Hello with user credential!' }, }; // Make the request const response = await chatClient . createMessage ( request ); // Handle the response console . log ( response ); } await main (); Python chat/client-libraries/cloud/create message user cred message id.py View on GitHub from authentication utils import create client with user credentials from google.apps import chat v1 as google chat SCOPES = [ "https://www.googleapis.com/auth/chat.messages.create" ] This sample shows how to create message with user credential with message id def create message with user cred message id (): Create a client client = create client with user credentials ( SCOPES ) Initialize request argument(s) request = google chat .

### Cards v2 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/cards](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards)
- Source ID: `site-api-reference`
- Final score: 179
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example: Card message for a Google Chat app To create the sample card message in Google Chat, use the following JSON: { "cardsV2": [ { "cardId": "unique-card-id", "card": { "header": { "title": "Sasha", "subtitle": "Software Engineer", "imageUrl": "https://developers.google.com/workspace/chat/images/quickstart-app-avatar.png", "imageType": "CIRCLE", "imageAltText": "Avatar for Sasha" }, "sections": [ { "header": "Contact Info", "collapsible": true, "uncollapsibleWidgetsCount": 1, "widgets": [ { "decoratedText": { "startIcon": { "knownIcon": "EMAIL" }, "text": "sasha@example.com" } }, { "decoratedText": { "startIcon": { "knownIcon": "PERSON" }, "text": "<font color=\"#80e27e\">Online</font>" } }, { "decoratedText": { "startIcon": { "knownIcon": "PHONE" }, "text": "+1 (555) 555-1234" } }, { "buttonList": { "buttons": [ { "text": "Share", "onClick": { "openLink": { "url": "https://example.com/share" } } }, { "text": "Edit", "onClick": { "action": { "function": "goToView", "parameters": [ { "key": "viewType", "value": "EDIT" } ] } } } ] } } ] } ] } } ] } JSON representation { "header" : { object ( CardHeader ) } , "sections" : [ { object ( Section ) } ] , "sectionDividerStyle" : enum ( DividerStyle ) , "cardActions" : [ { object ( CardAction ) } ] , "name" : string , "fixedFooter" : { object ( CardFixedFooter ) } , "displayStyle" : enum ( DisplayStyle ) , "peekCardHeader" : { object ( CardHeader ) } , "expressionData" : [ { object ( ExpressionData ) } ] } Fields header object ( CardHeader ) The header of the card.
- Developers can utilize various widgets like text paragraphs, images, buttons, and input fields to build rich and interactive cards.
- For example, the following JSON creates a 2 column grid with a single item: "grid": { "title": "A fine collection of items", "columnCount": 2, "borderStyle": { "type": "STROKE", "cornerRadius": 4 }, "items": [ { "image": { "imageUri": "https://www.example.com/image.png", "cropStyle": { "type": "SQUARE" }, "borderStyle": { "type": "STROKE" } }, "title": "An item", "textAlignment": "CENTER" } ], "onClick": { "openLink": { "url": "https://www.example.com" } } } JSON representation { "title" : string , "items" : [ { object ( GridItem ) } ] , "borderStyle" : { object ( BorderStyle ) } , "columnCount" : integer , "onClick" : { object ( OnClick ) } } Fields title string The text that displays in the grid header. items[] object ( GridItem ) The items to display in the grid. borderStyle object ( BorderStyle ) The border style to apply to each grid item. columnCount integer The number of columns to display in the grid.
- Google Workspace add-ons and Chat apps JSON representation { "textParagraph" : { object ( TextParagraph ) } , "image" : { object ( Image ) } , "decoratedText" : { object ( DecoratedText ) } , "buttonList" : { object ( ButtonList ) } , "textInput" : { object ( TextInput ) } , "selectionInput" : { object ( SelectionInput ) } , "dateTimePicker" : { object ( DateTimePicker ) } , "chipList" : { object ( ChipList ) } } Fields Union field data . data can be only one of the following: textParagraph object ( TextParagraph ) TextParagraph widget. image object ( Image ) Image widget. decoratedText object ( DecoratedText ) DecoratedText widget. buttonList object ( ButtonList ) ButtonList widget. textInput object ( TextInput ) TextInput widget. selectionInput object ( SelectionInput ) SelectionInput widget. dateTimePicker object ( DateTimePicker ) DateTimePicker widget. chipList object ( ChipList ) ChipList widget.

