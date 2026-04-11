---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:26:07.634Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "Bulleted list formatting in message formattedText"
feature_slug: "bulleted-list-formatting-in-message-formattedtext"
latest_feature_date: "2024-03-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages"
  - "https://developers.google.com/workspace/chat/create-messages"
  - "https://developers.google.com/workspace/chat/authenticate-authorize-chat-user"
keywords:
  - "bulleted"
  - "formattedtext"
  - "formatting"
  - "enables"
  - "list"
  - "message"
  - "the"
  - "in"
---

# Bulleted list formatting in message formattedText

Product: Chat API
Coverage: LOW

## Step 02 Summary

Enables the Message resource formattedText field to include markup for bulleted list text formatting.

## Extended Definition

Enables the Message resource formattedText field to include markup for bulleted list text formatting.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages)
- [https://developers.google.com/workspace/chat/create-messages](https://developers.google.com/workspace/chat/create-messages)
- [https://developers.google.com/workspace/chat/authenticate-authorize-chat-user](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user)

## Supporting Pages

### REST Resource: spaces.messages \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages)
- Source ID: `site-docs-root-2`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- This field might not capture all formatting visible in the UI, but includes the following: Markup syntax for bold, italic, strikethrough, monospace, monospace block, bulleted list, and block quote.
- Methods create Creates a message in a Google Chat space. delete Deletes a message. get Returns details about a message. list Lists messages in a space that the caller is a member of, including messages from blocked members and spaces. patch Updates a message. replaceCards Developer Preview: Available as part of the Google Workspace Developer Preview Program , which grants early access to certain features.
- QuotedMessageSnapshot Provides a snapshot of the content of the quoted message at the time of quoting or forwarding JSON representation { "sender" : string , "text" : string , "formattedText" : string , "annotations" : [ { object ( Annotation ) } ] , "attachments" : [ { object ( Attachment ) } ] } Fields sender string Output only.
- Contains the quoted message text with markups added to support rich formatting like hyperlinks,custom emojis, markup, etc.

### Send a message using the Google Chat API \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/create-messages](https://developers.google.com/workspace/chat/create-messages)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- I created this message by calling ' + 'the Chat API \' s messages.create() method.' , "cards v2" : [{ "card" : { "header" : { "title" : 'About this message' , "image url" : 'https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/info/default/24px.svg' }, "sections" : [{ "header" : "Contents" , "widgets" : [{ "text paragraph" : { "text" : '🔡 <b>Text</b> which can include ' + 'hyperlinks 🔗, emojis 😄🎉, and @mentions 🗣️.' }}, { "text paragraph" : { "text" : '🖼️ A <b>card</b> to display visual elements' + 'and request information such as text 🔤, ' + 'dates and times 📅, and selections ☑️.' }}, { "text paragraph" : { "text" : '👉🔘 An <b>accessory widget</b> which adds ' + 'a button to the bottom of a message.' }} ]}, { "header" : "What's next" , "collapsible" : True , "widgets" : [{ "text paragraph" : { "text" : "❤️ <a href='https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.reactions/create'>Add a reaction</a>." }}, { "text paragraph" : { "text" : "🔄 <a href='https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages/patch'>Update</a> " + "or ❌ <a href='https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages/delete'>delete</a> " + "the message." } }] } ] }}], "accessory widgets" : [{ "button list" : { "buttons" : [{ "text" : 'View documentation' , "icon" : { "material icon" : { "name" : 'link' }}, "on click" : { "open link" : { "url" : 'https://developers.google.com/workspace/chat/create-messages' }} }]}}] } ) Make the request response = client . create message ( request ) Handle the response print ( response ) create message with app cred () Java chat/client-libraries/cloud/src/main/java/com/google/workspace/api/chat/samples/CreateMessageAppCred.java View on GitHub import com.google.apps.card.v1.Button ; import com.google.apps.card.v1.ButtonList ; import com.google.apps.card.v1.Card ; import com.google.apps.card.v1.Icon ; import com.google.apps.card.v1.MaterialIcon ; import com.google.apps.card.v1.OnClick ; import com.google.apps.card.v1.OpenLink ; import com.google.apps.card.v1.TextParagraph ; import com.google.apps.card.v1.Widget ; import com.google.apps.card.v1.Card.CardHeader ; import com.google.apps.card.v1.Card.Section ; import com.google.chat.v1.AccessoryWidget ; import com.google.chat.v1.CardWithId ; import com.google.chat.v1.ChatServiceClient ; import com.google.chat.v1.CreateMessageRequest ; import com.google.chat.v1.Message ; // This sample shows how to create message with app credential. public class CreateMessageAppCred { public static void main ( String [] args ) throws Exception { try ( ChatServiceClient chatServiceClient = AuthenticationUtils . createClientWithAppCredentials ()) { CreateMessageRequest .
- I created this message by calling " + "the Chat API\'s messages.create() method." ) . addCardsV2 ( CardWithId . newBuilder (). setCard ( Card . newBuilder () . setHeader ( CardHeader . newBuilder () . setTitle ( "About this message" ) . setImageUrl ( "https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/info/default/24px.svg" )) . addSections ( Section . newBuilder () . setHeader ( "Contents" ) . addWidgets ( Widget . newBuilder (). setTextParagraph ( TextParagraph . newBuilder (). setText ( "🔡 <b>Text</b> which can include " + "hyperlinks 🔗, emojis 😄🎉, and @mentions 🗣️." ))) . addWidgets ( Widget . newBuilder (). setTextParagraph ( TextParagraph . newBuilder (). setText ( "🖼️ A <b>card</b> to display visual elements " + "and request information such as text 🔤, " + "dates and times 📅, and selections ☑️." ))) . addWidgets ( Widget . newBuilder (). setTextParagraph ( TextParagraph . newBuilder (). setText ( "👉🔘 An <b>accessory widget</b> which adds " + "a button to the bottom of a message." )))) . addSections ( Section . newBuilder () . setHeader ( "What's next" ) . setCollapsible ( true ) . addWidgets ( Widget . newBuilder (). setTextParagraph ( TextParagraph . newBuilder (). setText ( "❤️ <a href='https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.reactions/create'>Add a reaction</a>." ))) . addWidgets ( Widget . newBuilder (). setTextParagraph ( TextParagraph . newBuilder (). setText ( "🔄 <a href='https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages/patch'>Update</a> " + "or ❌ <a href='https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages/delete'>delete</a> " + "the message." )))))) . addAccessoryWidgets ( AccessoryWidget . newBuilder () . setButtonList ( ButtonList . newBuilder () . addButtons ( Button . newBuilder () . setText ( "View documentation" ) . setIcon ( Icon . newBuilder () . setMaterialIcon ( MaterialIcon . newBuilder (). setName ( "link" ))) . setOnClick ( OnClick . newBuilder () . setOpenLink ( OpenLink . newBuilder () . setUrl ( "https://developers.google.com/workspace/chat/create-messages" ))))))); Message response = chatServiceClient . createMessage ( request . build ()); System . out . println ( JsonFormat . printer (). print ( response )); } } } Apps Script chat/advanced-service/Main.gs View on GitHub / This sample shows how to create message with app credential It relies on the OAuth2 scope 'https://www.googleapis.com/auth/chat.bot' used by service accounts. / function createMessageAppCred () { // Initialize request argument(s) // TODO(developer): Replace SPACE NAME here. const parent = "spaces/SPACE NAME" ; const message = { text : "👋🌎 Hello world!
- I created this message by calling ' + "the Chat API's messages.create() method." , cardsV2 : [ { card : { header : { title : 'About this message' , imageUrl : 'https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/info/default/24px.svg' , }, sections : [ { header : 'Contents' , widgets : [ { textParagraph : { text : '🔡 <b>Text</b> which can include ' + 'hyperlinks 🔗, emojis 😄🎉, and @mentions 🗣️.' , }, }, { textParagraph : { text : '🖼️ A <b>card</b> to display visual elements' + 'and request information such as text 🔤, ' + 'dates and times 📅, and selections ☑️.' , }, }, { textParagraph : { text : '👉🔘 An <b>accessory widget</b> which adds ' + 'a button to the bottom of a message.' , }, }, ], }, { header : "What's next" , collapsible : true , widgets : [ { textParagraph : { text : "❤️ <a href='https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.reactions/create'>Add a reaction</a>." , }, }, { textParagraph : { text : "🔄 <a href='https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages/patch'>Update</a> " + "or ❌ <a href='https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages/delete'>delete</a> " + 'the message.' , }, }, ], }, ], }, }, ], accessoryWidgets : [ { buttonList : { buttons : [ { text : 'View documentation' , icon : { materialIcon : { name : 'link' }}, onClick : { openLink : { url : 'https://developers.google.com/workspace/chat/create-messages' , }, }, }, ], }, }, ], }, }; // Make the request const response = await chatClient . createMessage ( request ); // Handle the response console . log ( response ); } await main (); Python chat/client-libraries/cloud/create message app cred.py View on GitHub from authentication utils import create client with app credentials from google.apps import chat v1 as google chat This sample shows how to create message with app credential def create message with app cred (): Create a client client = create client with app credentials () Initialize request argument(s) request = google chat .
- I created this message by calling " + "the Chat API's messages.create() method." , cardsV2 : [ { card : { header : { title : "About this message" , imageUrl : "https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/info/default/24px.svg" , }, sections : [ { header : "Contents" , widgets : [ { textParagraph : { text : "🔡 <b>Text</b> which can include " + "hyperlinks 🔗, emojis 😄🎉, and @mentions 🗣️." , }, }, { textParagraph : { text : "🖼️ A <b>card</b> to display visual elements" + "and request information such as text 🔤, " + "dates and times 📅, and selections ☑️." , }, }, { textParagraph : { text : "👉🔘 An <b>accessory widget</b> which adds " + "a button to the bottom of a message." , }, }, ], }, { header : "What's next" , collapsible : true , widgets : [ { textParagraph : { text : "❤️ <a href='https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.reactions/create'>Add a reaction</a>." , }, }, { textParagraph : { text : "🔄 <a href='https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages/patch'>Update</a> " + "or ❌ <a href='https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages/delete'>delete</a> " + "the message." , }, }, ], }, ], }, }, ], accessoryWidgets : [ { buttonList : { buttons : [ { text : "View documentation" , icon : { materialIcon : { name : "link" } }, onClick : { openLink : { url : "https://developers.google.com/workspace/chat/create-messages" , }, }, }, ], }, }, ], }; const parameters = {}; // Make the request const response = Chat .

### Authenticate and authorize as a Google Chat user \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/authenticate-authorize-chat-user](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Please return to the console.' ); server . destroy (); const { tokens } = await oauth2Client . getToken ( qs . get ( 'code' )); oauth2Client . credentials = tokens ; resolve ( oauth2Client ); } catch ( e ) { reject ( e ); } }) . listen ( 3000 , () = > { // Open the browser to the authorize URL to start the workflow. opn ( authorizeUrl , { wait : false }). then ( cp = > cp . unref ()); }); destroyer ( server ); }); } / Authenticates with Chat API via user credentials, then creates a Chat space. / async function createSpace () { // Create the Chat API client and authenticate with the authorized user. const chatClient = await chat . chat ({ version : 'v1' , auth : oauth2Client }); // Call the Chat API to create a space. const result = await chatClient . spaces . create ({ // Details about the space to create. requestBody : { // To create a named space, set spaceType to SPACE. 'spaceType' : 'SPACE' , // The user-visible name of the space. 'displayName' : 'API-made' } }); return result ; } // Authenticate the user, execute the function, // then print details about the created space. authenticate ( scopes ) . then ( createSpace ) . then ( console . log ); Apps Script In the Apps Script editor, edit the file appsscript.json and add the OAuth scope necessary to call the API: "oauthScopes" : [ "https://www.googleapis.com/auth/chat.spaces.create" ] Save the following code in a file named ChatSpaceCreateNamed.gs in your Apps Script project: / Authenticates with Chat API via user credentials, then creates a Chat space. / function createSpace () { try { // Details about the space to create. // To create a named space, set spaceType to SPACE. // The user-visible name of the space is displayName. const space = { 'displayName' : 'API-made' , 'spaceType' : 'SPACE' }; // Call Chat API with user credentials to create the space. const result = Chat .
- Spaces . create ( space ); // Log details about the created space. console . log ( result ); } catch ( err ) { // TODO (developer) - Handle exception console . log ( 'Failed to create space with error %s' , err . message ); } } Step 5: Run the example script To run the example, from the command line, navigate to the directory that holds your project files, then execute the following command: Java mvn compile assembly:single java -jar target/auth-sample-app-1.0-SNAPSHOT-jar-with-dependencies.jar Python python3 chat space create named.py Node.js node chat space create named.js Apps Script Open the file ChatSpaceCreateNamed.gs in the Apps Script Editor and click Run .
- In this simple example, the only request to our webserver is to /?code=<code>. / async function authenticate ( scopes ) { const opn = ( await import ( 'open' )). default ; return new Promise (( resolve , reject ) = > { // Generate the URL for authorization. const authorizeUrl = oauth2Client . generateAuthUrl ({ access type : 'offline' , scope : scopes . join ( ' ' ), }); // Start the HTTP server to listen for the callback. const server = http . createServer ( async ( req , res ) = > { try { const qs = new url .
- Troubleshoot the example When running chat space create named.py , you might receive an error that says: Expected a JSON object with a single property for a "web" or "installed" application This error message means that the credentials.json file that you downloaded from the Google API Console doesn't begin with the "web" or "installed" property.

