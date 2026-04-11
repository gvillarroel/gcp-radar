---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:26:07.567Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "Dynamic card dropdown autocomplete in Chat apps"
feature_slug: "dynamic-card-dropdown-autocomplete-in-chat-apps"
latest_feature_date: "2025-12-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1"
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/cards"
  - "https://developers.google.com/workspace/chat/create-update-interactive-cards"
keywords:
  - "autocomplete"
  - "dropdown"
  - "dynamic"
  - "card"
  - "apps"
  - "chat"
  - "can"
  - "in"
---

# Dynamic card dropdown autocomplete in Chat apps

Product: Chat API
Coverage: LOW

## Step 02 Summary

Chat apps can dynamically populate dropdown menu items from Google Workspace or external data sources with autocomplete behavior.

## Extended Definition

Chat apps can dynamically populate dropdown menu items from Google Workspace or external data sources with autocomplete behavior.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1)
- [https://developers.google.com/workspace/chat/api/reference/rest/v1/cards](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards)
- [https://developers.google.com/workspace/chat/create-update-interactive-cards](https://developers.google.com/workspace/chat/create-update-interactive-cards)

## Supporting Pages

### Package google.apps.card.v1 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1)
- Source ID: `site-docs-reference`
- Final score: 226
- Re-rank relevance: N/A

Evidence snippets:
- Available for Google Workspace add-ons and unavailable for Google Chat apps. peek card header CardHeader When displaying contextual content, the peek card header acts as a placeholder so that the user can navigate forward between the homepage cards and the contextual cards.
- For Google Chat apps, you can also populate items using a dynamic data source and autosuggest items as users type in the menu.
- For Google Chat apps, you can populate items using a dynamic data source and autosuggest items as users type in the menu.
- For Chat apps, you can use fixed footers in dialogs , but not card messages .

### Cards v2 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/cards](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards)
- Source ID: `site-api-reference`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- Available for Google Workspace add-ons and unavailable for Google Chat apps. peekCardHeader object ( CardHeader ) When displaying contextual content, the peek card header acts as a placeholder so that the user can navigate forward between the homepage cards and the contextual cards.
- Available for Google Chat apps and Google Workspace add-ons. navigations: { updateCard: CARD } Fields Union field navigate action . navigate action can be only one of the following: pushCard Card Pushes a card onto the card stack.
- For Google Chat apps, you can also populate items using a dynamic data source and autosuggest items as users type in the menu.
- For Google Chat apps, you can populate items using a dynamic data source and autosuggest items as users type in the menu.

### Create and update interactive cards \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/create-update-interactive-cards](https://developers.google.com/workspace/chat/create-update-interactive-cards)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- The following example shows how to create a message with a card on behalf of a user: Node.js / This sample shows how to create a message with a card on behalf of a user. / const { google } = require ( 'googleapis' ); const { auth } = require ( 'google-auth-library' ); async function main () { // Create a client const authClient = await auth . getClient ({ scopes : [ 'https://www.googleapis.com/auth/chat.messages.create' ] }); google . options ({ auth : authClient }); // Initialize the Chat API with Developer Preview labels const chat = await google . discoverAPI ( 'https://chat.googleapis.com/$discovery/rest?version=v1&labels=DEVELOPER PREVIEW&key=API KEY' ); // The space to create the message in. const parent = 'spaces/SPACE NAME' ; // Create the request const request = { parent : parent , requestBody : { text : 'Here is a card created on my behalf:' , cardsV2 : [{ cardId : 'unique-card-id' , card : { header : { title : 'Card Title' , subtitle : 'Card Subtitle' }, sections : [{ widgets : [{ textParagraph : { text : 'This card is attached to a user message.' } }] }] } }] } }; // Call the API const response = await chat . spaces . messages . create ( request ); // Handle the response console . log ( response . data ); } main (). catch ( console . error ); Python """ This sample shows how to create a message with a card on behalf of a user. """ from google.oauth2 import service account from googleapiclient.discovery import build import google.auth def create message with card (): Create a client scopes = [ "https://www.googleapis.com/auth/chat.messages.create" ] credentials , = google . auth . default ( scopes = scopes ) Build the service endpoint for Chat API with Developer Preview labels. service = build ( 'chat' , 'v1' , credentials = credentials , discoveryServiceUrl = 'https://chat.googleapis.com/$discovery/rest?version=v1&labels=DEVELOPER PREVIEW&key=API KEY' ) The space to create the message in. parent = "spaces/SPACE NAME" Create the request result = service . spaces () . messages () . create ( parent = parent , body = { 'text' : 'Here is a card created on my behalf:' , 'cardsV2' : [{ 'cardId' : 'unique-card-id' , 'card' : { 'header' : { 'title' : 'Card Title' , 'subtitle' : 'Card Subtitle' }, 'sections' : [{ 'widgets' : [{ 'textParagraph' : { 'text' : 'This card is attached to a user message.' } }] }] } }] } ) . execute () print ( result ) if name == " main " : create message with card () Java / This sample shows how to create a message with a card on behalf of a user. / import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport ; import com.google.api.client.http.GenericUrl ; import com.google.api.client.http.HttpRequest ; import com.google.api.client.http.HttpRequestFactory ; import com.google.api.client.http.HttpTransport ; import com.google.api.client.http.json.JsonHttpContent ; import com.google.api.client.json.gson.GsonFactory ; import com.google.auth.http.HttpCredentialsAdapter ; import com.google.auth.oauth2.GoogleCredentials ; import java.util.Arrays ; import java.util.Collections ; import java.util.HashMap ; import java.util.Map ; public class CreateMessageWithCard { public static void main ( String [] args ) throws Exception { HttpTransport transport = GoogleNetHttpTransport . newTrustedTransport (); GsonFactory jsonFactory = GsonFactory . getDefaultInstance (); GoogleCredentials credentials = GoogleCredentials . getApplicationDefault () . createScoped ( Arrays . asList ( "https://www.googleapis.com/auth/chat.messages.create" )); HttpRequestFactory requestFactory = transport . createRequestFactory ( new HttpCredentialsAdapter ( credentials )); String parent = "spaces/SPACE NAME" ; GenericUrl url = new GenericUrl ( "https://chat.googleapis.com/v1/" + parent + "/messages" ); // Construct the message body Map<String , Object > message = new HashMap <> (); message . put ( "text" , "Here is a card created on my behalf:" ); Map<String , Object > header = new HashMap <> (); header . put ( "title" , "Card Title" ); header . put ( "subtitle" , "Card Subtitle" ); Map<String , Object > textParagraph = new HashMap <> (); textParagraph . put ( "text" , "This card is attached to a user message." ); Map<String , Object > widget = new HashMap <> (); widget . put ( "textParagraph" , textParagraph ); Map<String , Object > section = new HashMap <> (); section . put ( "widgets" , Collections . singletonList ( widget )); Map<String , Object > card = new HashMap <> (); card . put ( "header" , header ); card . put ( "sections" , Collections . singletonList ( section )); Map<String , Object > cardWithId = new HashMap <> (); cardWithId . put ( "cardId" , "unique-card-id" ); cardWithId . put ( "card" , card ); message . put ( "cardsV2" , Collections . singletonList ( cardWithId )); HttpRequest request = requestFactory . buildPostRequest ( url , new JsonHttpContent ( jsonFactory , message )); System . out . println ( request . execute (). parseAsString ()); } } Apps Script / This sample shows how to create a message with a card on behalf of a user. / function createMessageWithCard () { const parent = 'spaces/SPACE NAME' ; const url = https://chat.googleapis.com/v1/ ${ parent } /messages ; const message = { text : 'Here is a card created on my behalf:' , cardsV2 : [{ cardId : 'unique-card-id' , card : { header : { title : 'Card Title' , subtitle : 'Card Subtitle' }, sections : [{ widgets : [{ textParagraph : { text : 'This card is attached to a user message.' } }] }] } }] }; const options = { method : 'post' , headers : { Authorization : 'Bearer ' + ScriptApp . getOAuthToken () }, contentType : 'application/json' , payload : JSON . stringify ( message ), muteHttpExceptions : true }; try { const response = UrlFetchApp . fetch ( url , options ); console . log ( response . getContentText ()); } catch ( err ) { console . log ( 'Failed to create message: ' + err . message ); } } Update cards asynchronously After creating a message with cards, you can update the cards asynchronously using app authentication .
- The following example shows how to update the cards of a message: Node.js / This sample shows how to update cards on a message. / const { google } = require ( 'googleapis' ); const { auth } = require ( 'google-auth-library' ); async function main () { // Create a client with app credentials const authClient = await auth . getClient ({ scopes : [ 'https://www.googleapis.com/auth/chat.bot' ] }); google . options ({ auth : authClient }); // Initialize the Chat API with Developer Preview labels const chat = await google . discoverAPI ( 'https://chat.googleapis.com/$discovery/rest?version=v1&labels=DEVELOPER PREVIEW&key=API KEY' ); // The message to update. const messageName = 'spaces/SPACE NAME/messages/MESSAGE ID' ; // Create the request const request = { name : messageName , requestBody : { cardsV2 : [{ cardId : 'unique-card-id' , card : { header : { title : 'Updated Card Title' , subtitle : 'Updated Card Subtitle' }, sections : [{ widgets : [{ textParagraph : { text : 'The card content has been updated asynchronously.' } }] }] } }] } }; // Call the API await chat . spaces . messages . replaceCards ( request ); console . log ( 'Cards updated.' ); } main (). catch ( console . error ); Python """ This sample shows how to update cards on a message. """ from google.oauth2 import service account from googleapiclient.discovery import build import google.auth def replace message cards (): Create a client with app credentials scopes = [ "https://www.googleapis.com/auth/chat.bot" ] credentials , = google . auth . default ( scopes = scopes ) Build the service endpoint for Chat API with Developer Preview labels. service = build ( 'chat' , 'v1' , credentials = credentials , discoveryServiceUrl = 'https://chat.googleapis.com/$discovery/rest?version=v1&labels=DEVELOPER PREVIEW&key=API KEY' ) The message to update. message name = "spaces/SPACE NAME/messages/MESSAGE ID" Create the request result = service . spaces () . messages () . replaceCards ( name = message name , body = { 'cardsV2' : [{ 'cardId' : 'unique-card-id' , 'card' : { 'header' : { 'title' : 'Updated Card Title' , 'subtitle' : 'Updated Card Subtitle' }, 'sections' : [{ 'widgets' : [{ 'textParagraph' : { 'text' : 'The card content has been updated asynchronously.' } }] }] } }] } ) . execute () print ( "Cards updated." ) if name == " main " : replace message cards () Java / This sample shows how to update cards on a message. / import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport ; import com.google.api.client.http.GenericUrl ; import com.google.api.client.http.HttpRequest ; import com.google.api.client.http.HttpRequestFactory ; import com.google.api.client.http.HttpTransport ; import com.google.api.client.http.json.JsonHttpContent ; import com.google.api.client.json.gson.GsonFactory ; import com.google.auth.http.HttpCredentialsAdapter ; import com.google.auth.oauth2.GoogleCredentials ; import java.util.Arrays ; import java.util.Collections ; import java.util.HashMap ; import java.util.Map ; public class ReplaceMessageCards { public static void main ( String [] args ) throws Exception { HttpTransport transport = GoogleNetHttpTransport . newTrustedTransport (); GsonFactory jsonFactory = GsonFactory . getDefaultInstance (); GoogleCredentials credentials = GoogleCredentials . getApplicationDefault () . createScoped ( Arrays . asList ( "https://www.googleapis.com/auth/chat.bot" )); HttpRequestFactory requestFactory = transport . createRequestFactory ( new HttpCredentialsAdapter ( credentials )); String messageName = "spaces/SPACE NAME/messages/MESSAGE ID" ; GenericUrl url = new GenericUrl ( "https://chat.googleapis.com/v1/" + messageName + ":replaceCards" ); // Construct the body Map<String , Object > header = new HashMap <> (); header . put ( "title" , "Updated Card Title" ); header . put ( "subtitle" , "Updated Card Subtitle" ); Map<String , Object > textParagraph = new HashMap <> (); textParagraph . put ( "text" , "The card content has been updated asynchronously." ); Map<String , Object > widget = new HashMap <> (); widget . put ( "textParagraph" , textParagraph ); Map<String , Object > section = new HashMap <> (); section . put ( "widgets" , Collections . singletonList ( widget )); Map<String , Object > card = new HashMap <> (); card . put ( "header" , header ); card . put ( "sections" , Collections . singletonList ( section )); Map<String , Object > cardWithId = new HashMap <> (); cardWithId . put ( "cardId" , "unique-card-id" ); cardWithId . put ( "card" , card ); Map<String , Object > body = new HashMap <> (); body . put ( "cardsV2" , Collections . singletonList ( cardWithId )); HttpRequest request = requestFactory . buildPostRequest ( url , new JsonHttpContent ( jsonFactory , body )); request . execute (); System . out . println ( "Cards updated." ); } } Apps Script / This sample shows how to update cards on a message. / function replaceMessageCards () { const messageName = 'spaces/SPACE NAME/messages/MESSAGE ID' ; const url = https://chat.googleapis.com/v1/ ${ messageName } :replaceCards ; const request = { cardsV2 : [{ cardId : 'unique-card-id' , card : { header : { title : 'Updated Card Title' , subtitle : 'Updated Card Subtitle' }, sections : [{ widgets : [{ textParagraph : { text : 'The card content has been updated asynchronously.' } }] }] } }] }; const options = { method : 'post' , headers : { Authorization : 'Bearer ' + ScriptApp . getOAuthToken () }, contentType : 'application/json' , payload : JSON . stringify ( request ), muteHttpExceptions : true }; try { const response = UrlFetchApp . fetch ( url , options ); console . log ( 'Cards updated.' ); } catch ( err ) { console . log ( 'Failed to update cards: ' + err . message ); } } Limitations When creating messages with cards on behalf of a user or updating cards, the Chat app must be a member of the space.
- The Chat app can only replace cards that it attached to a message, not cards that other Chat apps attached.
- The replaceCards method supports card replacement and removal, and you can add additional cards while replacing them, but you can't add cards to a message that doesn't already have cards.

