---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:26:07.597Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "Chat card collapsible text paragraph widget"
feature_slug: "chat-card-collapsible-text-paragraph-widget"
latest_feature_date: "2024-10-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/chat/add-text-image-card-dialog"
  - "https://developers.google.com/workspace/chat/create-messages"
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/cards"
keywords:
  - "paragraph"
  - "collapsible"
  - "text"
  - "widget"
  - "adds"
  - "card"
  - "the"
  - "chat"
---

# Chat card collapsible text paragraph widget

Product: Chat API
Coverage: LOW

## Step 02 Summary

Adds the Collapsible Text paragraph widget for interactive Chat card-based interfaces.

## Extended Definition

Adds the Collapsible Text paragraph widget for interactive Chat card-based interfaces.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/chat/add-text-image-card-dialog](https://developers.google.com/workspace/chat/add-text-image-card-dialog)
- [https://developers.google.com/workspace/chat/create-messages](https://developers.google.com/workspace/chat/create-messages)
- [https://developers.google.com/workspace/chat/api/reference/rest/v1/cards](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards)

## Supporting Pages

### Add text and images to cards \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/add-text-image-card-dialog](https://developers.google.com/workspace/chat/add-text-image-card-dialog)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following is a card consisting of two TextParagraph widgets used to display two paragraphs with simple HTML formatting: Add a collapsible text paragraph The collapsible text paragraphs let users reveal more information on demand.
- The following is a card consisting of a DecoratedText widget used to display contact details, such as email address, online status, phone number, and website: Troubleshoot When a Google Chat app or card returns an error, the Chat interface surfaces a message saying "Something went wrong." or "Unable to process your request." Sometimes the Chat UI doesn't display any error message, but the Chat app or card produces an unexpected result; for example, a card message might not appear.
- Page Summary outlined flag This page guides you on adding and formatting text and images within Google Chat cards to enhance their visual appeal and interactivity.
- Add a paragraph of formatted text The TextParagraph widget displays a paragraph of text with optional HTML formatting.

### Send a message using the Google Chat API \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/create-messages](https://developers.google.com/workspace/chat/create-messages)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- I created this message by calling ' + 'the Chat API \' s messages.create() method.' , "cards v2" : [{ "card" : { "header" : { "title" : 'About this message' , "image url" : 'https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/info/default/24px.svg' }, "sections" : [{ "header" : "Contents" , "widgets" : [{ "text paragraph" : { "text" : '🔡 <b>Text</b> which can include ' + 'hyperlinks 🔗, emojis 😄🎉, and @mentions 🗣️.' }}, { "text paragraph" : { "text" : '🖼️ A <b>card</b> to display visual elements' + 'and request information such as text 🔤, ' + 'dates and times 📅, and selections ☑️.' }}, { "text paragraph" : { "text" : '👉🔘 An <b>accessory widget</b> which adds ' + 'a button to the bottom of a message.' }} ]}, { "header" : "What's next" , "collapsible" : True , "widgets" : [{ "text paragraph" : { "text" : "❤️ <a href='https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.reactions/create'>Add a reaction</a>." }}, { "text paragraph" : { "text" : "🔄 <a href='https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages/patch'>Update</a> " + "or ❌ <a href='https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages/delete'>delete</a> " + "the message." } }] } ] }}], "accessory widgets" : [{ "button list" : { "buttons" : [{ "text" : 'View documentation' , "icon" : { "material icon" : { "name" : 'link' }}, "on click" : { "open link" : { "url" : 'https://developers.google.com/workspace/chat/create-messages' }} }]}}] } ) Make the request response = client . create message ( request ) Handle the response print ( response ) create message with app cred () Java chat/client-libraries/cloud/src/main/java/com/google/workspace/api/chat/samples/CreateMessageAppCred.java View on GitHub import com.google.apps.card.v1.Button ; import com.google.apps.card.v1.ButtonList ; import com.google.apps.card.v1.Card ; import com.google.apps.card.v1.Icon ; import com.google.apps.card.v1.MaterialIcon ; import com.google.apps.card.v1.OnClick ; import com.google.apps.card.v1.OpenLink ; import com.google.apps.card.v1.TextParagraph ; import com.google.apps.card.v1.Widget ; import com.google.apps.card.v1.Card.CardHeader ; import com.google.apps.card.v1.Card.Section ; import com.google.chat.v1.AccessoryWidget ; import com.google.chat.v1.CardWithId ; import com.google.chat.v1.ChatServiceClient ; import com.google.chat.v1.CreateMessageRequest ; import com.google.chat.v1.Message ; // This sample shows how to create message with app credential. public class CreateMessageAppCred { public static void main ( String [] args ) throws Exception { try ( ChatServiceClient chatServiceClient = AuthenticationUtils . createClientWithAppCredentials ()) { CreateMessageRequest .
- I created this message by calling " + "the Chat API\'s messages.create() method." ) . addCardsV2 ( CardWithId . newBuilder (). setCard ( Card . newBuilder () . setHeader ( CardHeader . newBuilder () . setTitle ( "About this message" ) . setImageUrl ( "https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/info/default/24px.svg" )) . addSections ( Section . newBuilder () . setHeader ( "Contents" ) . addWidgets ( Widget . newBuilder (). setTextParagraph ( TextParagraph . newBuilder (). setText ( "🔡 <b>Text</b> which can include " + "hyperlinks 🔗, emojis 😄🎉, and @mentions 🗣️." ))) . addWidgets ( Widget . newBuilder (). setTextParagraph ( TextParagraph . newBuilder (). setText ( "🖼️ A <b>card</b> to display visual elements " + "and request information such as text 🔤, " + "dates and times 📅, and selections ☑️." ))) . addWidgets ( Widget . newBuilder (). setTextParagraph ( TextParagraph . newBuilder (). setText ( "👉🔘 An <b>accessory widget</b> which adds " + "a button to the bottom of a message." )))) . addSections ( Section . newBuilder () . setHeader ( "What's next" ) . setCollapsible ( true ) . addWidgets ( Widget . newBuilder (). setTextParagraph ( TextParagraph . newBuilder (). setText ( "❤️ <a href='https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.reactions/create'>Add a reaction</a>." ))) . addWidgets ( Widget . newBuilder (). setTextParagraph ( TextParagraph . newBuilder (). setText ( "🔄 <a href='https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages/patch'>Update</a> " + "or ❌ <a href='https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages/delete'>delete</a> " + "the message." )))))) . addAccessoryWidgets ( AccessoryWidget . newBuilder () . setButtonList ( ButtonList . newBuilder () . addButtons ( Button . newBuilder () . setText ( "View documentation" ) . setIcon ( Icon . newBuilder () . setMaterialIcon ( MaterialIcon . newBuilder (). setName ( "link" ))) . setOnClick ( OnClick . newBuilder () . setOpenLink ( OpenLink . newBuilder () . setUrl ( "https://developers.google.com/workspace/chat/create-messages" ))))))); Message response = chatServiceClient . createMessage ( request . build ()); System . out . println ( JsonFormat . printer (). print ( response )); } } } Apps Script chat/advanced-service/Main.gs View on GitHub / This sample shows how to create message with app credential It relies on the OAuth2 scope 'https://www.googleapis.com/auth/chat.bot' used by service accounts. / function createMessageAppCred () { // Initialize request argument(s) // TODO(developer): Replace SPACE NAME here. const parent = "spaces/SPACE NAME" ; const message = { text : "👋🌎 Hello world!
- I created this message by calling ' + "the Chat API's messages.create() method." , cardsV2 : [ { card : { header : { title : 'About this message' , imageUrl : 'https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/info/default/24px.svg' , }, sections : [ { header : 'Contents' , widgets : [ { textParagraph : { text : '🔡 <b>Text</b> which can include ' + 'hyperlinks 🔗, emojis 😄🎉, and @mentions 🗣️.' , }, }, { textParagraph : { text : '🖼️ A <b>card</b> to display visual elements' + 'and request information such as text 🔤, ' + 'dates and times 📅, and selections ☑️.' , }, }, { textParagraph : { text : '👉🔘 An <b>accessory widget</b> which adds ' + 'a button to the bottom of a message.' , }, }, ], }, { header : "What's next" , collapsible : true , widgets : [ { textParagraph : { text : "❤️ <a href='https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.reactions/create'>Add a reaction</a>." , }, }, { textParagraph : { text : "🔄 <a href='https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages/patch'>Update</a> " + "or ❌ <a href='https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages/delete'>delete</a> " + 'the message.' , }, }, ], }, ], }, }, ], accessoryWidgets : [ { buttonList : { buttons : [ { text : 'View documentation' , icon : { materialIcon : { name : 'link' }}, onClick : { openLink : { url : 'https://developers.google.com/workspace/chat/create-messages' , }, }, }, ], }, }, ], }, }; // Make the request const response = await chatClient . createMessage ( request ); // Handle the response console . log ( response ); } await main (); Python chat/client-libraries/cloud/create message app cred.py View on GitHub from authentication utils import create client with app credentials from google.apps import chat v1 as google chat This sample shows how to create message with app credential def create message with app cred (): Create a client client = create client with app credentials () Initialize request argument(s) request = google chat .
- I created this message by calling " + "the Chat API's messages.create() method." , cardsV2 : [ { card : { header : { title : "About this message" , imageUrl : "https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/info/default/24px.svg" , }, sections : [ { header : "Contents" , widgets : [ { textParagraph : { text : "🔡 <b>Text</b> which can include " + "hyperlinks 🔗, emojis 😄🎉, and @mentions 🗣️." , }, }, { textParagraph : { text : "🖼️ A <b>card</b> to display visual elements" + "and request information such as text 🔤, " + "dates and times 📅, and selections ☑️." , }, }, { textParagraph : { text : "👉🔘 An <b>accessory widget</b> which adds " + "a button to the bottom of a message." , }, }, ], }, { header : "What's next" , collapsible : true , widgets : [ { textParagraph : { text : "❤️ <a href='https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.reactions/create'>Add a reaction</a>." , }, }, { textParagraph : { text : "🔄 <a href='https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages/patch'>Update</a> " + "or ❌ <a href='https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages/delete'>delete</a> " + "the message." , }, }, ], }, ], }, }, ], accessoryWidgets : [ { buttonList : { buttons : [ { text : "View documentation" , icon : { materialIcon : { name : "link" } }, onClick : { openLink : { url : "https://developers.google.com/workspace/chat/create-messages" , }, }, }, ], }, }, ], }; const parameters = {}; // Make the request const response = Chat .

### Cards v2 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/cards](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards)
- Source ID: `site-api-reference`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- Example: Card message for a Google Chat app To create the sample card message in Google Chat, use the following JSON: { "cardsV2": [ { "cardId": "unique-card-id", "card": { "header": { "title": "Sasha", "subtitle": "Software Engineer", "imageUrl": "https://developers.google.com/workspace/chat/images/quickstart-app-avatar.png", "imageType": "CIRCLE", "imageAltText": "Avatar for Sasha" }, "sections": [ { "header": "Contact Info", "collapsible": true, "uncollapsibleWidgetsCount": 1, "widgets": [ { "decoratedText": { "startIcon": { "knownIcon": "EMAIL" }, "text": "sasha@example.com" } }, { "decoratedText": { "startIcon": { "knownIcon": "PERSON" }, "text": "<font color=\"#80e27e\">Online</font>" } }, { "decoratedText": { "startIcon": { "knownIcon": "PHONE" }, "text": "+1 (555) 555-1234" } }, { "buttonList": { "buttons": [ { "text": "Share", "onClick": { "openLink": { "url": "https://example.com/share" } } }, { "text": "Edit", "onClick": { "action": { "function": "goToView", "parameters": [ { "key": "viewType", "value": "EDIT" } ] } } } ] } } ] } ] } } ] } JSON representation { "header" : { object ( CardHeader ) } , "sections" : [ { object ( Section ) } ] , "sectionDividerStyle" : enum ( DividerStyle ) , "cardActions" : [ { object ( CardAction ) } ] , "name" : string , "fixedFooter" : { object ( CardFixedFooter ) } , "displayStyle" : enum ( DisplayStyle ) , "peekCardHeader" : { object ( CardHeader ) } , "expressionData" : [ { object ( ExpressionData ) } ] } Fields header object ( CardHeader ) The header of the card.
- Google Workspace add-ons and Chat apps JSON representation { "textParagraph" : { object ( TextParagraph ) } , "image" : { object ( Image ) } , "decoratedText" : { object ( DecoratedText ) } , "buttonList" : { object ( ButtonList ) } , "textInput" : { object ( TextInput ) } , "selectionInput" : { object ( SelectionInput ) } , "dateTimePicker" : { object ( DateTimePicker ) } , "chipList" : { object ( ChipList ) } } Fields Union field data . data can be only one of the following: textParagraph object ( TextParagraph ) TextParagraph widget. image object ( Image ) Image widget. decoratedText object ( DecoratedText ) DecoratedText widget. buttonList object ( ButtonList ) ButtonList widget. textInput object ( TextInput ) TextInput widget. selectionInput object ( SelectionInput ) SelectionInput widget. dateTimePicker object ( DateTimePicker ) DateTimePicker widget. chipList object ( ChipList ) ChipList widget.
- For example, this is a JSON representation of a carousel that contains three text paragraph widgets. { "carouselCards": [ { "widgets": [ { "textParagraph": { "text": "First text paragraph in carousel", } } ] }, { "widgets": [ { "textParagraph": { "text": "Second text paragraph in carousel", } } ] }, { "widgets": [ { "textParagraph": { "text": "Third text paragraph in carousel", } } ] } ] } Available for Google Chat apps and unavailable for Google Workspace add-ons.
- JSON representation { "horizontalAlignment" : enum ( HorizontalAlignment ) , "id" : string , "visibility" : enum ( Visibility ) , "eventActions" : [ { object ( EventAction ) } ] , "textParagraph" : { object ( TextParagraph ) } , "image" : { object ( Image ) } , "decoratedText" : { object ( DecoratedText ) } , "buttonList" : { object ( ButtonList ) } , "textInput" : { object ( TextInput ) } , "selectionInput" : { object ( SelectionInput ) } , "dateTimePicker" : { object ( DateTimePicker ) } , "divider" : { object ( Divider ) } , "grid" : { object ( Grid ) } , "columns" : { object ( Columns ) } , "carousel" : { object ( Carousel ) } , "chipList" : { object ( ChipList ) } } Fields horizontalAlignment enum ( HorizontalAlignment ) Specifies whether widgets align to the left, right, or center of a column. id string A unique ID assigned to the widget that's used to identify the widget to be mutated.

