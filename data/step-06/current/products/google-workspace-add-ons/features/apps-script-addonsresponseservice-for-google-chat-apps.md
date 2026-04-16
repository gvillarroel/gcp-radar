---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:23.664Z"
product_name: "Google Workspace add-ons"
product_slug: "google-workspace-add-ons"
feature_name: "Apps Script AddOnsResponseService for Google Chat apps"
feature_slug: "apps-script-addonsresponseservice-for-google-chat-apps"
latest_feature_date: "2026-01-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/add-ons/chat/quickstart-apps-script"
  - "https://developers.google.com/workspace/add-ons/chat"
  - "https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.card.v1"
  - "https://developers.google.com/workspace/add-ons/chat/quickstart-pubsub"
keywords:
  - "apps"
  - "script"
  - "addonsresponseservice"
  - "for"
  - "chat"
  - "lets"
  - "developers"
  - "build"
---

# Apps Script AddOnsResponseService for Google Chat apps

Product: Google Workspace add-ons
Coverage: MEDIUM

## Step 02 Summary

Apps Script's AddOnsResponseService lets developers build Google Chat apps for Google Workspace add-ons.

## Extended Definition

Apps Script's AddOnsResponseService lets developers build Google Chat apps for Google Workspace add-ons.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/add-ons/chat/quickstart-apps-script](https://developers.google.com/workspace/add-ons/chat/quickstart-apps-script)
- [https://developers.google.com/workspace/add-ons/chat](https://developers.google.com/workspace/add-ons/chat)
- [https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.card.v1)
- [https://developers.google.com/workspace/add-ons/chat/quickstart-pubsub](https://developers.google.com/workspace/add-ons/chat/quickstart-pubsub)

## Supporting Pages

### "Build a Google Chat app with Google Apps Script \_|\_ Google Workspace add-ons\

- URL: [https://developers.google.com/workspace/add-ons/chat/quickstart-apps-script](https://developers.google.com/workspace/add-ons/chat/quickstart-apps-script)
- Source ID: `site-docs-root`
- Final score: 246
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-03 UTC."],[],["This content guides you through creating a Google Chat app using Google Apps Script.
- The following diagram shows the architecture and messaging pattern: In the preceding diagram, a user interacting with an Apps Script Chat app has the following flow of information: A user sends a message to a Chat app, either in a direct message or in a Chat space.
- Page Summary outlined flag This guide explains how to build a Google Workspace add-on that functions as a Google Chat app using Google Apps Script, enabling direct messaging and message echoing.
- The architecture involves user interaction triggering Apps Script logic in Google Cloud, potentially integrating with other Google services, before sending a response back to the user via Chat.

### Extend Google Chat \_|\_ Google Workspace add-ons \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/add-ons/chat](https://developers.google.com/workspace/add-ons/chat)
- Source ID: `site-docs-reference`
- Final score: 210
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To build a Chat add-on, developers can utilize Apps Script or HTTP services, configure the app through the Chat API, and design interfaces using triggers and actions.
- Get started To start building Google Workspace add-ons that work in Chat, see the following documentation: Try a quickstart to build a basic Chat app using Google Apps Script or an HTTP service .
- Instead, build the Chat app using an HTTP service , Apps Script , Dialogflow ES or Dialogflow CX , or Pub/Sub .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-03 UTC."],[],["Google Workspace add-ons in Chat function as Chat apps, allowing users to preview links, automate tasks, and receive alerts.

### "Package google.apps.card.v1 \_|\_ Google Workspace add-ons \_|\_ Google\

- URL: [https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.card.v1)
- Source ID: `site-api-reference`
- Final score: 206
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Open the Card Builder To learn how to build cards, see the following documentation: For Google Chat apps, see Design the components of a card or dialog .
- Example: Card message for a Google Chat app To create the sample card message in Google Chat, use the following JSON: { "cardsV2": [ { "cardId": "unique-card-id", "card": { "header": { "title": "Sasha", "subtitle": "Software Engineer", "imageUrl": "https://developers.google.com/workspace/chat/images/quickstart-app-avatar.png", "imageType": "CIRCLE", "imageAltText": "Avatar for Sasha" }, "sections": [ { "header": "Contact Info", "collapsible": true, "uncollapsibleWidgetsCount": 1, "widgets": [ { "decoratedText": { "startIcon": { "knownIcon": "EMAIL" }, "text": "sasha@example.com" } }, { "decoratedText": { "startIcon": { "knownIcon": "PERSON" }, "text": "<font color=\"#80e27e\">Online</font>" } }, { "decoratedText": { "startIcon": { "knownIcon": "PHONE" }, "text": "+1 (555) 555-1234" } }, { "buttonList": { "buttons": [ { "text": "Share", "onClick": { "openLink": { "url": "https://example.com/share" } } }, { "text": "Edit", "onClick": { "action": { "function": "goToView", "parameters": [ { "key": "viewType", "value": "EDIT" } ] } } } ] } } ] } ] } } ] } Fields header CardHeader The header of the card.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-25 UTC."],[],["This content outlines UI components for Google Chat apps and Workspace add-ons, structured within cards.
- For example, the following JSON creates a text input for an email address: "textInput": { "name": "mailing address", "label": "Mailing Address" } As another example, the following JSON creates a text input for a programming language with static suggestions: "textInput": { "name": "preferred programing language", "label": "Preferred Language", "initialSuggestions": { "items": [ { "text": "C++" }, { "text": "Java" }, { "text": "JavaScript" }, { "text": "Python" } ] } } selectionInput SelectionInput Displays a selection control that lets users select items.

### "Build a Google Chat app that uses Pub/Sub \_|\_ Google Workspace add-ons\

- URL: [https://developers.google.com/workspace/add-ons/chat/quickstart-pubsub](https://developers.google.com/workspace/add-ons/chat/quickstart-pubsub)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the pom.xml file, paste the following code: <project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd"> <modelVersion>4.0.0</modelVersion> <groupId>com.google.chat.addon</groupId> <artifactId>pubsub-addon-chat-app</artifactId> <version>0.1.0</version> <name>pubsub-addon-chat-app-java</name> <properties> <maven.compiler.release>11</maven.compiler.release> <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding> </properties> <dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>libraries-bom</artifactId> <version>26.41.0</version> <!-- Use a recent BOM version --> <type>pom</type> <scope>import</scope> </dependency> </dependencies> </dependencyManagement> <dependencies> <!-- Google Chat GAPIC library --> <dependency> <groupId>com.google.cloud</groupId> <artifactId>google-cloud-chat</artifactId> </dependency> <!-- Google Cloud Pub/Sub library --> <dependency> <groupId>com.google.cloud</groupId> <artifactId>google-cloud-pubsub</artifactId> </dependency> <!-- Google Apps Add-ons Event Object --> <dependency> <groupId>com.google.apps.addons.v1</groupId> <artifactId>google-apps-addons-v1-java</artifactId> <version>0.2.0</version> <!-- Check for latest version --> </dependency> <!-- Protobuf JSON utility --> <dependency> <groupId>com.google.protobuf</groupId> <artifactId>protobuf-java-util</artifactId> </dependency> <!-- Google Auth Library --> <dependency> <groupId>com.google.auth</groupId> <artifactId>google-auth-library-oauth2-http</artifactId> </dependency> <dependency> <groupId>com.google.api</groupId> <artifactId>gax</artifactId> </dependency> <!-- JSON utilities for PubSub message (if needed, though protobuf-java-util is primary for EventObject) --> <dependency> <groupId>com.fasterxml.jackson.core</groupId> <artifactId>jackson-databind</artifactId> <version>2.14.2</version> </dependency> <dependency> <groupId>org.slf4j</groupId> <artifactId>slf4j-jdk14</artifactId> <version>1.7.36</version> <scope>runtime</scope> </dependency> </dependencies> <build> <plugins> <plugin> <groupId>org.apache.maven.plugins</groupId> <artifactId>maven-compiler-plugin</artifactId> <version>3.13.0</version> <configuration> <source>11</source> <target>11</target> </configuration> </plugin> <plugin> <groupId>org.codehaus.mojo</groupId> <artifactId>exec-maven-plugin</artifactId> <version>3.3.0</version> <configuration> <mainClass>Main</mainClass> </configuration> </plugin> </plugins> </build> </project> In your working directory, create the directory structure src/main/java .
- In the package.json file, paste the following code: { "name" : "pub-sub-app" , "version" : "1.0.0" , "description" : "Google Chat App that listens for messages via Cloud Pub/Sub" , "main" : "index.js" , "scripts" : { "start" : "node index.js" , "test" : "echo \"Error: no test specified\" && exit 1" }, "dependencies" : { "@google-apps/chat" : "^0.4.0" , "@google-cloud/pubsub" : "^4.5.0" }, "license" : "Apache-2.0" } In your working directory, create a file named index.js .
- Although an error message might not display in the Chat UI, descriptive error messages and log data are available to help you fix errors when error logging for Chat apps is turned on.
- CREDENTIALS PATH ENV PROPERTY ); // Developer code for Google Chat API scope. private static final String GOOGLE CHAT API SCOPE = "https://www.googleapis.com/auth/chat.bot" ; private static final String ADDED RESPONSE = "Thank you for adding me!" ; ChatServiceClient chatServiceClient ; EchoApp () throws Exception { GoogleCredentials credential = GoogleCredentials . fromStream ( new FileInputStream ( SERVICE ACCOUNT KEY PATH )) . createScoped ( Collections . singleton ( GOOGLE CHAT API SCOPE )); // Create the ChatServiceSettings with the app credentials ChatServiceSettings chatServiceSettings = ChatServiceSettings . newBuilder () . setCredentialsProvider ( FixedCredentialsProvider . create ( credential )) . build (); // Set the Chat service client chatServiceClient = ChatServiceClient . create ( chatServiceSettings ); } // Called when a message is received by the subscriber. @Override public void receiveMessage ( PubsubMessage pubsubMessage , AckReplyConsumer consumer ) { System . out . println ( "Id : " + pubsubMessage . getMessageId ()); // Handle incoming message, then acknowledge the received message try { ObjectMapper mapper = new ObjectMapper (); JsonNode dataJson = mapper . readTree ( pubsubMessage . getData (). toStringUtf8 ()); System . out . println ( "Data : " + dataJson . toString ()); handle ( dataJson ); consumer . ack (); } catch ( Exception e ) { System . out . println ( e ); // Negative acknowledgement makes Pub/Sub redeliver the message. consumer . nack (); } } // Send message to Google Chat based on the type of event. public void handle ( JsonNode eventJson ) throws Exception { // Google Chat events for add-ons are wrapped in a 'chat' object. if ( ! eventJson . has ( "chat" )) { System . out . println ( "Ignored: Not a Chat event (missing 'chat' field)." ); return ; } JsonNode chatNode = eventJson . get ( "chat" ); CreateMessageRequest createMessageRequest = null ; if ( chatNode . has ( "messagePayload" )) { // HANDLE MESSAGE JsonNode messagePayload = chatNode . get ( "messagePayload" ); JsonNode message = messagePayload . get ( "message" ); JsonNode space = messagePayload . get ( "space" ); String spaceName = space . get ( "name" ). asText (); String userText = message . has ( "text" ) ? message . get ( "text" ). asText () : "" ; String threadName = message . has ( "thread" ) ? message . get ( "thread" ). get ( "name" ). asText () : "" ; System . out . println ( "Received message in " + spaceName + ": " + userText ); createMessageRequest = CreateMessageRequest . newBuilder () . setParent ( spaceName ) . setMessageReplyOption ( MessageReplyOption .

