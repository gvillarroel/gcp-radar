---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:26:07.627Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "Google Chat Apps Script Card Service support"
feature_slug: "google-chat-apps-script-card-service-support"
latest_feature_date: "2024-04-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/chat/quickstart/apps-script-app"
  - "https://developers.google.com/workspace/chat/create-update-interactive-cards"
  - "https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1"
keywords:
  - "script"
  - "adds"
  - "card"
  - "apps"
  - "chat"
  - "for"
  - "to"
  - "in"
---

# Google Chat Apps Script Card Service support

Product: Chat API
Coverage: LOW

## Step 02 Summary

Adds support for Apps Script's Card Service in Google Chat apps to build UI components like card messages and dialogs; Adds support for Apps Script's Card Service in Google Chat apps to build UI components like card messages and dialogs.

## Extended Definition

Adds support for Apps Script's Card Service in Google Chat apps to build UI components like card messages and dialogs; Adds support for Apps Script's Card Service in Google Chat apps to build UI components like card messages and dialogs.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/chat/quickstart/apps-script-app](https://developers.google.com/workspace/chat/quickstart/apps-script-app)
- [https://developers.google.com/workspace/chat/create-update-interactive-cards](https://developers.google.com/workspace/chat/create-update-interactive-cards)
- [https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1)

## Supporting Pages

### Build a Google Chat app with Google Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/quickstart/apps-script-app](https://developers.google.com/workspace/chat/quickstart/apps-script-app)
- Source ID: `site-docs-root`
- Final score: 232
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following diagram shows the architecture and messaging pattern: In the preceding diagram, a user interacting with an Apps Script Chat app has the following flow of information: A user sends a message to a Chat app, either in a direct message or in a Chat space.
- Although an error message might not display in the Chat UI, descriptive error messages and log data are available to help you fix errors when error logging for Chat apps is turned on.
- Troubleshoot When a Google Chat app or card returns an error, the Chat interface surfaces a message saying "Something went wrong." or "Unable to process your request." Sometimes the Chat UI doesn't display any error message, but the Chat app or card produces an unexpected result; for example, a card message might not appear.
- Key actions include: setting up a Google Cloud environment and enabling the Chat API; configuring the OAuth consent screen; creating an Apps Script project from a template and linking it to the Cloud project; publishing the app with a deployment ID; and testing the app by sending a direct message.

### Create and update interactive cards \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/create-update-interactive-cards](https://developers.google.com/workspace/chat/create-update-interactive-cards)
- Source ID: `site-docs-root`
- Final score: 232
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following example shows how to create a message with a card on behalf of a user: Node.js / This sample shows how to create a message with a card on behalf of a user. / const { google } = require ( 'googleapis' ); const { auth } = require ( 'google-auth-library' ); async function main () { // Create a client const authClient = await auth . getClient ({ scopes : [ 'https://www.googleapis.com/auth/chat.messages.create' ] }); google . options ({ auth : authClient }); // Initialize the Chat API with Developer Preview labels const chat = await google . discoverAPI ( 'https://chat.googleapis.com/$discovery/rest?version=v1&labels=DEVELOPER PREVIEW&key=API KEY' ); // The space to create the message in. const parent = 'spaces/SPACE NAME' ; // Create the request const request = { parent : parent , requestBody : { text : 'Here is a card created on my behalf:' , cardsV2 : [{ cardId : 'unique-card-id' , card : { header : { title : 'Card Title' , subtitle : 'Card Subtitle' }, sections : [{ widgets : [{ textParagraph : { text : 'This card is attached to a user message.' } }] }] } }] } }; // Call the API const response = await chat . spaces . messages . create ( request ); // Handle the response console . log ( response . data ); } main (). catch ( console . error ); Python """ This sample shows how to create a message with a card on behalf of a user. """ from google.oauth2 import service account from googleapiclient.discovery import build import google.auth def create message with card (): Create a client scopes = [ "https://www.googleapis.com/auth/chat.messages.create" ] credentials , = google . auth . default ( scopes = scopes ) Build the service endpoint for Chat API with Developer Preview labels. service = build ( 'chat' , 'v1' , credentials = credentials , discoveryServiceUrl = 'https://chat.googleapis.com/$discovery/rest?version=v1&labels=DEVELOPER PREVIEW&key=API KEY' ) The space to create the message in. parent = "spaces/SPACE NAME" Create the request result = service . spaces () . messages () . create ( parent = parent , body = { 'text' : 'Here is a card created on my behalf:' , 'cardsV2' : [{ 'cardId' : 'unique-card-id' , 'card' : { 'header' : { 'title' : 'Card Title' , 'subtitle' : 'Card Subtitle' }, 'sections' : [{ 'widgets' : [{ 'textParagraph' : { 'text' : 'This card is attached to a user message.' } }] }] } }] } ) . execute () print ( result ) if name == " main " : create message with card () Java / This sample shows how to create a message with a card on behalf of a user. / import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport ; import com.google.api.client.http.GenericUrl ; import com.google.api.client.http.HttpRequest ; import com.google.api.client.http.HttpRequestFactory ; import com.google.api.client.http.HttpTransport ; import com.google.api.client.http.json.JsonHttpContent ; import com.google.api.client.json.gson.GsonFactory ; import com.google.auth.http.HttpCredentialsAdapter ; import com.google.auth.oauth2.GoogleCredentials ; import java.util.Arrays ; import java.util.Collections ; import java.util.HashMap ; import java.util.Map ; public class CreateMessageWithCard { public static void main ( String [] args ) throws Exception { HttpTransport transport = GoogleNetHttpTransport . newTrustedTransport (); GsonFactory jsonFactory = GsonFactory . getDefaultInstance (); GoogleCredentials credentials = GoogleCredentials . getApplicationDefault () . createScoped ( Arrays . asList ( "https://www.googleapis.com/auth/chat.messages.create" )); HttpRequestFactory requestFactory = transport . createRequestFactory ( new HttpCredentialsAdapter ( credentials )); String parent = "spaces/SPACE NAME" ; GenericUrl url = new GenericUrl ( "https://chat.googleapis.com/v1/" + parent + "/messages" ); // Construct the message body Map<String , Object > message = new HashMap <> (); message . put ( "text" , "Here is a card created on my behalf:" ); Map<String , Object > header = new HashMap <> (); header . put ( "title" , "Card Title" ); header . put ( "subtitle" , "Card Subtitle" ); Map<String , Object > textParagraph = new HashMap <> (); textParagraph . put ( "text" , "This card is attached to a user message." ); Map<String , Object > widget = new HashMap <> (); widget . put ( "textParagraph" , textParagraph ); Map<String , Object > section = new HashMap <> (); section . put ( "widgets" , Collections . singletonList ( widget )); Map<String , Object > card = new HashMap <> (); card . put ( "header" , header ); card . put ( "sections" , Collections . singletonList ( section )); Map<String , Object > cardWithId = new HashMap <> (); cardWithId . put ( "cardId" , "unique-card-id" ); cardWithId . put ( "card" , card ); message . put ( "cardsV2" , Collections . singletonList ( cardWithId )); HttpRequest request = requestFactory . buildPostRequest ( url , new JsonHttpContent ( jsonFactory , message )); System . out . println ( request . execute (). parseAsString ()); } } Apps Script / This sample shows how to create a message with a card on behalf of a user. / function createMessageWithCard () { const parent = 'spaces/SPACE NAME' ; const url = https://chat.googleapis.com/v1/ ${ parent } /messages ; const message = { text : 'Here is a card created on my behalf:' , cardsV2 : [{ cardId : 'unique-card-id' , card : { header : { title : 'Card Title' , subtitle : 'Card Subtitle' }, sections : [{ widgets : [{ textParagraph : { text : 'This card is attached to a user message.' } }] }] } }] }; const options = { method : 'post' , headers : { Authorization : 'Bearer ' + ScriptApp . getOAuthToken () }, contentType : 'application/json' , payload : JSON . stringify ( message ), muteHttpExceptions : true }; try { const response = UrlFetchApp . fetch ( url , options ); console . log ( response . getContentText ()); } catch ( err ) { console . log ( 'Failed to create message: ' + err . message ); } } Update cards asynchronously After creating a message with cards, you can update the cards asynchronously using app authentication .
- The following example shows how to update the cards of a message: Node.js / This sample shows how to update cards on a message. / const { google } = require ( 'googleapis' ); const { auth } = require ( 'google-auth-library' ); async function main () { // Create a client with app credentials const authClient = await auth . getClient ({ scopes : [ 'https://www.googleapis.com/auth/chat.bot' ] }); google . options ({ auth : authClient }); // Initialize the Chat API with Developer Preview labels const chat = await google . discoverAPI ( 'https://chat.googleapis.com/$discovery/rest?version=v1&labels=DEVELOPER PREVIEW&key=API KEY' ); // The message to update. const messageName = 'spaces/SPACE NAME/messages/MESSAGE ID' ; // Create the request const request = { name : messageName , requestBody : { cardsV2 : [{ cardId : 'unique-card-id' , card : { header : { title : 'Updated Card Title' , subtitle : 'Updated Card Subtitle' }, sections : [{ widgets : [{ textParagraph : { text : 'The card content has been updated asynchronously.' } }] }] } }] } }; // Call the API await chat . spaces . messages . replaceCards ( request ); console . log ( 'Cards updated.' ); } main (). catch ( console . error ); Python """ This sample shows how to update cards on a message. """ from google.oauth2 import service account from googleapiclient.discovery import build import google.auth def replace message cards (): Create a client with app credentials scopes = [ "https://www.googleapis.com/auth/chat.bot" ] credentials , = google . auth . default ( scopes = scopes ) Build the service endpoint for Chat API with Developer Preview labels. service = build ( 'chat' , 'v1' , credentials = credentials , discoveryServiceUrl = 'https://chat.googleapis.com/$discovery/rest?version=v1&labels=DEVELOPER PREVIEW&key=API KEY' ) The message to update. message name = "spaces/SPACE NAME/messages/MESSAGE ID" Create the request result = service . spaces () . messages () . replaceCards ( name = message name , body = { 'cardsV2' : [{ 'cardId' : 'unique-card-id' , 'card' : { 'header' : { 'title' : 'Updated Card Title' , 'subtitle' : 'Updated Card Subtitle' }, 'sections' : [{ 'widgets' : [{ 'textParagraph' : { 'text' : 'The card content has been updated asynchronously.' } }] }] } }] } ) . execute () print ( "Cards updated." ) if name == " main " : replace message cards () Java / This sample shows how to update cards on a message. / import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport ; import com.google.api.client.http.GenericUrl ; import com.google.api.client.http.HttpRequest ; import com.google.api.client.http.HttpRequestFactory ; import com.google.api.client.http.HttpTransport ; import com.google.api.client.http.json.JsonHttpContent ; import com.google.api.client.json.gson.GsonFactory ; import com.google.auth.http.HttpCredentialsAdapter ; import com.google.auth.oauth2.GoogleCredentials ; import java.util.Arrays ; import java.util.Collections ; import java.util.HashMap ; import java.util.Map ; public class ReplaceMessageCards { public static void main ( String [] args ) throws Exception { HttpTransport transport = GoogleNetHttpTransport . newTrustedTransport (); GsonFactory jsonFactory = GsonFactory . getDefaultInstance (); GoogleCredentials credentials = GoogleCredentials . getApplicationDefault () . createScoped ( Arrays . asList ( "https://www.googleapis.com/auth/chat.bot" )); HttpRequestFactory requestFactory = transport . createRequestFactory ( new HttpCredentialsAdapter ( credentials )); String messageName = "spaces/SPACE NAME/messages/MESSAGE ID" ; GenericUrl url = new GenericUrl ( "https://chat.googleapis.com/v1/" + messageName + ":replaceCards" ); // Construct the body Map<String , Object > header = new HashMap <> (); header . put ( "title" , "Updated Card Title" ); header . put ( "subtitle" , "Updated Card Subtitle" ); Map<String , Object > textParagraph = new HashMap <> (); textParagraph . put ( "text" , "The card content has been updated asynchronously." ); Map<String , Object > widget = new HashMap <> (); widget . put ( "textParagraph" , textParagraph ); Map<String , Object > section = new HashMap <> (); section . put ( "widgets" , Collections . singletonList ( widget )); Map<String , Object > card = new HashMap <> (); card . put ( "header" , header ); card . put ( "sections" , Collections . singletonList ( section )); Map<String , Object > cardWithId = new HashMap <> (); cardWithId . put ( "cardId" , "unique-card-id" ); cardWithId . put ( "card" , card ); Map<String , Object > body = new HashMap <> (); body . put ( "cardsV2" , Collections . singletonList ( cardWithId )); HttpRequest request = requestFactory . buildPostRequest ( url , new JsonHttpContent ( jsonFactory , body )); request . execute (); System . out . println ( "Cards updated." ); } } Apps Script / This sample shows how to update cards on a message. / function replaceMessageCards () { const messageName = 'spaces/SPACE NAME/messages/MESSAGE ID' ; const url = https://chat.googleapis.com/v1/ ${ messageName } :replaceCards ; const request = { cardsV2 : [{ cardId : 'unique-card-id' , card : { header : { title : 'Updated Card Title' , subtitle : 'Updated Card Subtitle' }, sections : [{ widgets : [{ textParagraph : { text : 'The card content has been updated asynchronously.' } }] }] } }] }; const options = { method : 'post' , headers : { Authorization : 'Bearer ' + ScriptApp . getOAuthToken () }, contentType : 'application/json' , payload : JSON . stringify ( request ), muteHttpExceptions : true }; try { const response = UrlFetchApp . fetch ( url , options ); console . log ( 'Cards updated.' ); } catch ( err ) { console . log ( 'Failed to update cards: ' + err . message ); } } Limitations When creating messages with cards on behalf of a user or updating cards, the Chat app must be a member of the space.
- Apps Script A Business or Enterprise Google Workspace account with access to Google Chat .
- This guide explains how to use the Google Chat API to create messages that contain interactive cards on behalf of users, and how to update those cards asynchronously.

### Package google.apps.card.v1 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1)
- Source ID: `site-docs-reference`
- Final score: 232
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For card messages in Chat apps, you must also set the action's ResponseType to UPDATE MESSAGE and use the same card id from the card that contained the action.
- Available for Google Workspace add-ons and unavailable for Google Chat apps. card Card A new card is pushed to the card stack after clicking if specified.
- Open the Card Builder To learn how to build cards, see the following documentation: For Google Chat apps, see Design the components of a card or dialog .
- Example: Card message for a Google Chat app To create the sample card message in Google Chat, use the following JSON: { "cardsV2": [ { "cardId": "unique-card-id", "card": { "header": { "title": "Sasha", "subtitle": "Software Engineer", "imageUrl": "https://developers.google.com/workspace/chat/images/quickstart-app-avatar.png", "imageType": "CIRCLE", "imageAltText": "Avatar for Sasha" }, "sections": [ { "header": "Contact Info", "collapsible": true, "uncollapsibleWidgetsCount": 1, "widgets": [ { "decoratedText": { "startIcon": { "knownIcon": "EMAIL" }, "text": "sasha@example.com" } }, { "decoratedText": { "startIcon": { "knownIcon": "PERSON" }, "text": "<font color=\"#80e27e\">Online</font>" } }, { "decoratedText": { "startIcon": { "knownIcon": "PHONE" }, "text": "+1 (555) 555-1234" } }, { "buttonList": { "buttons": [ { "text": "Share", "onClick": { "openLink": { "url": "https://example.com/share" } } }, { "text": "Edit", "onClick": { "action": { "function": "goToView", "parameters": [ { "key": "viewType", "value": "EDIT" } ] } } } ] } } ] } ] } } ] } Fields header CardHeader The header of the card.

