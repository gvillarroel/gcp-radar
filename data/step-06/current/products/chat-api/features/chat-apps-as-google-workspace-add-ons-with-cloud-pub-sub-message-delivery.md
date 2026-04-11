---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:26:07.565Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "Chat apps as Google Workspace add-ons with Cloud Pub/Sub message delivery"
feature_slug: "chat-apps-as-google-workspace-add-ons-with-cloud-pub-sub-message-delivery"
latest_feature_date: "2026-02-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/chat/quickstart/pub-sub"
  - "https://developers.google.com/workspace/chat/quickstart/apps-script-app"
  - "https://developers.google.com/workspace/chat/debug-apps"
keywords:
  - "pub"
  - "ons"
  - "workspace"
  - "add"
  - "as"
  - "with"
  - "apps"
  - "chat"
---

# Chat apps as Google Workspace add-ons with Cloud Pub/Sub message delivery

Product: Chat API
Coverage: LOW

## Step 02 Summary

Developers can build Chat apps as Google Workspace add-ons that receive messages through Cloud Pub/Sub, improving deployment for apps behind firewalls.

## Extended Definition

Developers can build Chat apps as Google Workspace add-ons that receive messages through Cloud Pub/Sub, improving deployment for apps behind firewalls.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/chat/quickstart/pub-sub](https://developers.google.com/workspace/chat/quickstart/pub-sub)
- [https://developers.google.com/workspace/chat/quickstart/apps-script-app](https://developers.google.com/workspace/chat/quickstart/apps-script-app)
- [https://developers.google.com/workspace/chat/debug-apps](https://developers.google.com/workspace/chat/debug-apps)

## Supporting Pages

### "Build a Google Chat app behind a firewall with Pub/Sub \_|\_ Google for\

- URL: [https://developers.google.com/workspace/chat/quickstart/pub-sub](https://developers.google.com/workspace/chat/quickstart/pub-sub)
- Source ID: `site-docs-root`
- Final score: 238
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- CREDENTIALS PATH ENV PROPERTY ); // Developer code for Google Chat API scope. private static final String GOOGLE CHAT API SCOPE = "https://www.googleapis.com/auth/chat.bot" ; private static final String ADDED RESPONSE = "Thank you for adding me!" ; ChatServiceClient chatServiceClient ; EchoApp () throws Exception { GoogleCredentials credential = GoogleCredentials . fromStream ( new FileInputStream ( SERVICE ACCOUNT KEY PATH )) . createScoped ( Collections . singleton ( GOOGLE CHAT API SCOPE )); // Create the ChatServiceSettings with the app credentials ChatServiceSettings chatServiceSettings = ChatServiceSettings . newBuilder () . setCredentialsProvider ( FixedCredentialsProvider . create ( credential )). build (); // Set the Chat service client chatServiceClient = ChatServiceClient . create ( chatServiceSettings ); } // Called when a message is received by the subscriber. @Override public void receiveMessage ( PubsubMessage pubsubMessage , AckReplyConsumer consumer ) { System . out . println ( "Id : " + pubsubMessage . getMessageId ()); // Handle incoming message, then ack/nack the received message try { ObjectMapper mapper = new ObjectMapper (); JsonNode dataJson = mapper . readTree ( pubsubMessage . getData (). toStringUtf8 ()); System . out . println ( "Data : " + dataJson . toString ()); handle ( dataJson ); consumer . ack (); } catch ( Exception e ) { System . out . println ( e ); consumer . nack (); } } // Send message to Google Chat based on the type of event. public void handle ( JsonNode eventJson ) throws Exception { CreateMessageRequest createMessageRequest ; switch ( eventJson . get ( "type" ). asText ()) { case "ADDED TO SPACE" : // An app can also be added to a space by @mentioning it in a message.
- Page Summary outlined flag Build a Google Chat app that uses Pub/Sub for asynchronous communication, ideal for scenarios with firewall restrictions or when utilizing the Google Workspace Events API.
- Home Google Workspace Google Chat Guides Send feedback Build a Google Chat app behind a firewall with Pub/Sub Stay organized with collections Save and categorize content based on your preferences.
- SUBSCRIPTION ID ) const subscription = new PubSub () . subscription ( subscriptionPath ); // Handle incoming message, then ack/nack the received message const messageHandler = message = > { console . log ( Id : ${ message . id } ); const event = JSON . parse ( message . data ); console . log ( Data : ${ JSON . stringify ( event ) } ); // Post the response to Google Chat. const request = formatRequest ( event ); if ( request != null ) { chat . createMessage ( request ); } // Ack the message. message . ack (); } subscription . on ( 'message' , messageHandler ); console . log ( Listening for messages on ${ subscriptionPath } ); // Keep main thread from exiting while waiting for messages setTimeout (() = > { subscription . removeListener ( 'message' , messageHandler ); console . log ( Stopped listening for messages. ); }, 60 1000 ); } // Send message to Google Chat based on the type of event function formatRequest ( event ) { const spaceName = event . space . name ; const eventType = event . type ; // If the app was removed, we don't respond. if ( event . type == 'REMOVED FROM SPACE' ) { console . log ( App removed rom space ${ spaceName } ); return null ; } else if ( eventType == 'ADDED TO SPACE' && ! eventType . message ) { // An app can also be added to a space by @mentioning it in a // message.

### Build a Google Chat app with Google Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/quickstart/apps-script-app](https://developers.google.com/workspace/chat/quickstart/apps-script-app)
- Source ID: `site-docs-root`
- Final score: 234
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Google Workspace Google Chat Guides Send feedback Build a Google Chat app with Google Apps Script Stay organized with collections Save and categorize content based on your preferences.
- Key actions include: setting up a Google Cloud environment and enabling the Chat API; configuring the OAuth consent screen; creating an Apps Script project from a template and linking it to the Cloud project; publishing the app with a deployment ID; and testing the app by sending a direct message.
- Test the Chat app To test your Chat app, open a direct message space with the Chat app and send a message: Open Google Chat using the Google Workspace account that you provided when you added yourself as a trusted tester.
- The following diagram shows the architecture and messaging pattern: In the preceding diagram, a user interacting with an Apps Script Chat app has the following flow of information: A user sends a message to a Chat app, either in a direct message or in a Chat space.

### Debug Google Chat apps \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/debug-apps](https://developers.google.com/workspace/chat/debug-apps)
- Source ID: `site-docs-root`
- Final score: 224
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Google Workspace Google Chat Guides Send feedback Debug Google Chat apps Stay organized with collections Save and categorize content based on your preferences.
- Create a new virtual environment for Python env and activate it: virtualenv env source env/bin/activate Install all project dependencies using pip in the virtual environment: pip install -r requirements.txt Create the file .vscode/launch.json in the root directory and configure a launch named Debug Watch that triggers the application from the module functions-framework on port 9000 in debug mode on the virtual environment env : { "version" : "0.2.0" , "configurations" : [{ "type" : "python" , "request" : "launch" , "name" : "Debug Watch" , "python" : "${workspaceFolder}/env/bin/python3" , "module" : "functions framework" , "args" : [ "--target" , "avatar app" , "--port" , "9000" , "--debug" ] }] } Add a breakpoint that pauses the HTTP request processing in the main.py file, and start running and debugging with the Debug Watch configuration added before.
- Configure the application for auto-reload debug by adding two scripts in the package.json file: { ... "scripts" : { ... "debug" : "node --inspect index.js" , "debug-watch" : "nodemon --watch ./ --exec npm run debug" } ... } From the root directory, install the application: npm install Create and configure a launch named Debug Watch that triggers the script debug-watch by creating the file .vscode/launch.json in the root directory: { "version" : "0.2.0" , "configurations" : [{ "type" : "node" , "request" : "launch" , "name" : "Debug Watch" , "cwd" : "${workspaceRoot}" , "runtimeExecutable" : "npm" , "runtimeArgs" : [ "run-script" , "debug-watch" ] }] } Add a breakpoint that pauses the HTTP request processing in the index.js file, and start running and debugging with the Debug Watch configuration added before.
- Key actions include: setting up ngrok with a static domain to expose localhost, configuring the Chat app's HTTP endpoint URL to the ngrok address, and using IDE breakpoints for debugging.

