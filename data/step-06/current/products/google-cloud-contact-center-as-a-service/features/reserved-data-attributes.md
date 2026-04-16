---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.074Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Reserved data attributes"
feature_slug: "reserved-data-attributes"
latest_feature_date: "2024-09-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-call"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide"
keywords:
  - "reserved"
  - "attributes"
  - "let"
  - "sessions"
  - "tagged"
  - "verified"
  - "customer"
  - "bad"
---

# Reserved data attributes

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Reserved data attributes let sessions be tagged as Verified Customer, Bad Actor, or Repeat Customer and surfaced in the agent adapter.

## Extended Definition

Reserved data attributes let sessions be tagged as Verified Customer, Bad Actor, or Repeat Customer and surfaced in the agent adapter.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-call](https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-call)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide)

## Supporting Pages

### "Call and Chat Settings \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings)
- Source ID: `site-docs-reference`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- Here is an example reserved data properties in a SIP header: se tt i n g : { redirec t io n : { op t io n : "sip" , sip : { uri : "Destination SIP URI" , da ta parame ters e na bled : true false , da ta parame ters : [ { f ield : "verified customer" , t ype : "dynamic" , source : "ujet metadata" , source f ield : "Incoming Field" }, { f ield : "bad actor" , t ype : "dynamic" , source : "ujet metadata" , source f ield : "Incoming Field" }, { f ield : "repeat customer" , t ype : "dynamic" , source : "ujet metadata" , source f ield : "Incoming Field" } ], da ta records : { i n me ta da ta : true false , i n crm record : true false } } } } Support for virtual agents If you have a virtual agent (a support agent or a virtual task assistant) that performs end-user verification, the virtual agent can pass the end-user verification information to CCAI Platform.
- Here are the reserved data properties that you can send to CCAI Platform: reserved verified customer : indicates that you consider this end-user to be a legitimate customer. reserved bad actor : indicates that you consider this end-user to potentially be a bad actor.
- Configure a virtual task assistant to pass the Verified Customer parameter To configure a virtual task assistant to pass the Verified Customer parameter, follow these steps: In the CCAI Platform portal, click Settings > Virtual Agent .
- To send reserved data attributes during a chat or call session, see the following: Update reserved data attributes during a call Update reserved data attributes during a chat You can also get reserved data properties during a call.

### "Call endpoints \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-call](https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-call)
- Source ID: `site-docs-reference-required-7`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- Request URL variables Key Value Description id integer (Required) Response { "verified customer" : "boolean" , "bad actor" : "boolean" , "repeat customer" : "boolean" } Status code 0 Update reserved data attributes during a call Endpoint Method: PATCH Type: RAW URL: https:// { subdomain } . { domain } /apps/api/v1/calls/:id/customer flag URL variables Key Value Description id integer (Required) Body { "verified customer" : "boolean" , "bad actor" : "boolean" , "repeat customers" : "boolean" } Pass data parameters to virtual agents mid-session To use the apps API to pass data parameters to virtual agents in the middle of a call session, see Pass data parameters to virtual agents mid-session .
- The following are the call API endpoints: Outbound call - end user number Outbound call - ticket id Incoming call Scheduled call Update reserved data attributes during a call Get reserved data attributes during a call Pass data parameters to virtual agents mid-session Call object The following is an example of the call object: [ { "id" : 0 , "parent id" : 0 , "lang" : "en" , "call type" : "Voice Scheduled (API)" , "status" : "scheduled" , "created at" : "2018-06-07T19:49:52.896Z" , "queued at" : "2018-06-07T19:49:52.896Z" , "assigned at" : "2018-06-07T19:49:52.896Z" , "connected at" : "2018-06-07T19:49:52.896Z" , "ends at" : "2018-06-07T19:49:52.896Z" , "scheduled at" : "2018-06-07T19:49:52.896Z" , "wait duration" : 0 , "call duration" : 0 , "hold duration" : 0 , "rating" : 0 , "has feedback" : true , "voip provider" : "voip provider twilio" , "out ticket id" : "string" , "out ticket url" : "string" , "verified" : true , "recording url" : "string" , "recording permission" : "not asked" , "voicemail reason" : "not voicemail" , "deflection" : "no deflection" , "disconnected by" : "disconnected by unknown" , "fail details" : "string" , "fail reason" : "nothing" , "support number" : "string" , "selected menu" : { "id" : 0 , "name" : "string" , "parent id" : 0 , "position" : 0 , "deleted" : true , "hidden" : "string" , "menu type" : "ivr menu" , "output msg" : "string" }, "menu path" : { "items count" : 0 , "name" : "string" , "materialized path" : "string" }, "agent info" : { "id" : 0 , "name" : "string" , "last name" : "string" , "first name" : "string" , "agent number" : "string" , "avatar url" : "string" }, "end user" : { "id" : 0 , "identifier" : "string" , "out contact id" : "string" }, "photos" : [ { "id" : 0 , "photo type" : "photo" , "url" : "string" } ], "videos" : [ { "id" : 0 , "url" : "string" } ], "transfers" : [ { "id" : 0 , "status" : "transferring" , "fail reason" : "nothing" , "created at" : "2018-06-07T19:49:52.896Z" , "from menu" : { "items count" : 0 , "name" : "string" , "materialized path" : "string" }, "to menu" : { "items count" : 0 , "name" : "string" , "materialized path" : "string" }, "from agent" : { "id" : 0 , "name" : "string" , "last name" : "string" , "first name" : "string" , "agent number" : "string" , "avatar url" : "string" }, "to agent" : { "id" : 0 , "name" : "string" , "last name" : "string" , "first name" : "string" , "agent number" : "string" , "avatar url" : "string" } } ], "participants" : [ { "id" : 0 , "type" : "end user" , "status" : "waiting" , "call id" : 0 , "user id" : 0 , "end user id" : 0 , "call duration" : 0 , "hold duration" : 0 , "connected at" : "2018-06-07T19:49:52.896Z" , "ended at" : "2018-06-07T19:49:52.896Z" , "fail reason" : "nothing" } ] } ] Call status definitions The status field can be in any of the following states: Call Status Description Selecting State that occurs when an end user has called into the contact center, but is still navigating the menu options prior to being placed in a leaf menu.
- Request Headers: Key Value Description Content-Type application/json Body: { "call type" : "Voice Scheduled (API)" , "lang" : "en" , "menu id" : 9 , "end user number" : "+1 859-657-9625" , "recording permission" : "recording permission granted" } Response: Error : scheduled at is required { "message" : "scheduled at is required" } Status Code: 400 Get reserved data attributes during a call Endpoint Method: GET Type: RAW URL: https:// { subdomain } . { domain } /apps/api/v1/calls/:id/customer flag Example request and responses This section contains an example request and response for the endpoint.
- Request Headers: Key Value Description Content-Type application/json Body: { "call type" : "Voice Outbound (API)" , "agent email" : "admin@somedomain.com" , "ticket id" : "71450" , "outbound number" : "+1 339-219-5276" , "lang" : "en" } Response: Create an outbound call with ticket id { "id" : 398 , "lang" : "en" , "call type" : "Voice Outbound (API)" , "status" : "assigned" , "created at" : "2019-06-07T01:28:47.955Z" , "queued at" : null , "assigned at" : "2019-06-07T01:28:47.971Z" , "connected at" : null , "ends at" : null , "scheduled at" : null , "wait duration" : 0 , "call duration" : 0 , "hold duration" : 0 , "rating" : null , "has feedback" : false , "voip provider" : "voip provider twilio" , "out ticket id" : "71450" , "out ticket url" : null , "verified" : false , "recording url" : null , "recording permission" : "not asked" , "voicemail reason" : "not voicemail" , "deflection" : "no deflection" , "disconnected by" : "disconnected by unknown" , "fail reason" : "nothing" , "fail details" : null , "support number" : null , "selected menu" : null , "menu path" : null , "agent info" : { "id" : 1 , "agent number" : null , "name" : "Admin UJET" , "last name" : "UJET" , "first name" : "Admin" , "avatar url" : "https://somedomain.com/default-profile.png" }, "end user" : { "id" : 67 , "identifier" : null , "out contact id" : "381630957514" }, "photos" : [], "videos" : [], "transfers" : [], "deflection details" : [], "participants" : [ { "id" : 612 , "type" : "agent" , "status" : "waiting" , "call id" : 398 , "user id" : 1 , "end user id" : null , "call duration" : null , "hold duration" : null , "connected at" : null , "ended at" : null , "fail reason" : "nothing" }, { "id" : 613 , "type" : "end user" , "status" : "waiting" , "call id" : 398 , "user id" : null , "end user id" : 67 , "call duration" : null , "hold duration" : null , "connected at" : null , "ended at" : null , "fail reason" : "nothing" } ], "offer type" : null , "offer events" : [], "answer type" : "manual" , "outbound number" : "+1 339-219-5276" } Status Code: 201 Accepted : Need to choose an outbound number In this example we show the scenario where an outbound call request is created with the need to choose an outbound number and then is accepted.

### "Android SDK guide \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide)
- Source ID: `site-docs-reference`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- The following is an example of reserved data properties in custom data: { "custom data": { "reserved verified customer": { "label": "Verified Customer", "value": " VERIFIED CUSTOMER BOOLEAN ": , "type": "boolean" }, "reserved bad actor": { "label": "Bad Actor", "value": " VERIFIED BAD ACTOR BOOLEAN ": , "type": "boolean" }, "reserved repeat customer": { "label": "Repeat Customer", "value": " REPEAT CUSTOMER BOOLEAN ": , "type": "boolean" } } } Replace the following: VERIFIED CUSTOMER BOOLEAN : True if you consider this end-user to be a legitimate customer.
- 0 = Show everywhere, 1 = Hide from the options menu, 2 = Hide from the post chat screen, 3 = Hide from both the options menu and the post chat screen. .setPushNotificationsAllowed ( true ) .build () ; //The following customizes various attributes in chat UI ChatStyles chatStyles = new ChatStyles () ; chatStyles.setBackButton ( new BackButtonStyle ( false, "ujet agent sample" )) ; //customizes back button styles chatStyles.setHeader ( ... ) ; //customizes chat header styles chatStyles.setAgentMessageBubbles ( ... ) ; //customizes agent messages styles chatStyles.setConsumerMessageBubbles ( ... ) ; //customizes consumer messages styles chatStyles.setSystemMessages ( ... ) ; //customizes system messages styles chatStyles.setEndChatButton ( ... ) ; //customizes end chat button styles chatStyles.setTimeStamps ( ... ) ; //customizes timestamp styles chatStyles.setUserInputBar ( ... ) ; //customizes user input bar styles UjetOption ujetOption = new UjetOption.Builder () .setUjetStylesOptions ( new UjetStylesOptions.Builder () .setChatStyles ( chatStyles ) .build () ) //The following customizes various attributes in chat UI using json file.
- Add some data from app, and add more sensitive data from server and sign it. / UjetCustomData appCustomData = new UjetCustomData () ; appCustomData.put ( "model" , "Model" , "MODEL1234" ) ; appCustomData.put ( "customer id" , "Customer ID" , 12345 ) ; appCustomData.put ( "temperature" , "Temperature" , 70 .5f ) ; appCustomData.put ( "purchase date" , "Purchase Date" , new Date ()) ; appCustomData.put ( "battery" , "Battery" , "52%" ) ; appCustomData.put ( "location" , "Location" , "San Francisco, CA, United States" ) ; appCustomData.putURL ( "dashboard url" , "Dashboard URL" , "https://internal.dashboard.com/12345" ) ; payload.put ( "custom data" , appCustomData.getData ()) ; tokenCallback.onToken ( APIManager.getHttpManager () .getSignedCustomData ( payload )) ; } // ... } } Using unsigned method to send custom data Caution: This method is not recommended, as it creates a potential vulnerability which could open your application to a man-in-the-middle attack.
- Twilio SDK upgrade requirements Requires Twilio SDK to be following specific versions if the Android SDK is integrated using our package directly, otherwise this can be ignored. // Twilio VoIP SDK api 'com.twilio:voice-android:6.1.1' // Twilio Conversations SDK api 'com.twilio:conversations-android:3.1.0' In addition, Proguard rules are already included in the Android SDK to ensure that the Twilio Programmable Voice library is not removed by ProGuard and can be used to troubleshoot in case ProGuard accidentally removes the library. -keep class com.twilio. { ; } -keep class tvo.webrtc. { ; } -dontwarn tvo.webrtc. -keep class com.twilio.voice. { ; } -keepattributes InnerClasses To support latest Twilio versions, starting with the Android SDK version 0.34.0, SDK is no longer binary compatible with applications that target Java 7.

