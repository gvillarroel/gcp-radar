---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.050Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "SIP header parameters for contact list destinations"
feature_slug: "sip-header-parameters-for-contact-list-destinations"
latest_feature_date: "2025-04-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-session-data-feed"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide"
keywords:
  - "sip"
  - "header"
  - "parameters"
  - "contact"
  - "list"
  - "destinations"
  - "lets"
  - "destination"
---

# SIP header parameters for contact list destinations

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Lets a contact list destination pass data parameters to a SIP URI when an agent places or transfers an outbound call.

## Extended Definition

Lets a contact list destination pass data parameters to a SIP URI when an agent places or transfers an outbound call.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-session-data-feed](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-session-data-feed)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide)

## Supporting Pages

### "Call and Chat Settings \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings)
- Source ID: `site-docs-reference`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- Here is an example reserved data properties in a SIP header: se tt i n g : { redirec t io n : { op t io n : "sip" , sip : { uri : "Destination SIP URI" , da ta parame ters e na bled : true false , da ta parame ters : [ { f ield : "verified customer" , t ype : "dynamic" , source : "ujet metadata" , source f ield : "Incoming Field" }, { f ield : "bad actor" , t ype : "dynamic" , source : "ujet metadata" , source f ield : "Incoming Field" }, { f ield : "repeat customer" , t ype : "dynamic" , source : "ujet metadata" , source f ield : "Incoming Field" } ], da ta records : { i n me ta da ta : true false , i n crm record : true false } } } } Support for virtual agents If you have a virtual agent (a support agent or a virtual task assistant) that performs end-user verification, the virtual agent can pass the end-user verification information to CCAI Platform.
- Email : If after-hour deflection is enabled for email, a message will be presented to end-users after hours asking them to contact the email address listed.
- Email : If after-hour deflection is enabled for email, a message is presented to end-users after hours asking them to contact the email address listed.
- If after-hour deflection is enabled for email, a message will be presented to consumers after hours asking them to contact the email address listed.

### "Android SDK guide \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide)
- Source ID: `site-docs-reference`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- If Ujet.init() is not called and the Android SDK is launched, the Android SDK won't work properly and might cause a crash. public class ExampleApplication extends Application implements UjetRequestListener { @Override public void onCreate () { super.onCreate () ; Ujet.init ( this ) ; } // ... } End-user authentication The end user is the consumer who contacts your customer support team through the application.
- You can customize the chat header title text by using the following options: <item name = "ujet chatCustomHeaderTextColor" >@color/chatHeaderTextLightMode</item> <item name = "ujet chatCustomHeaderTextColowDark" >@color/chatHeaderTextDarkMode</item> <item name = "ujet chatCustomHeaderTextSize" >16sp</item> <item name = "ujet chatCustomHeaderTextStyle" >bold</item> You can customize Virtual Agent quick replies in the chat UI by using the following options: <item name = "ujet colorChatQuickReplyButtonBackground" >@color/chatQuickReplyButtonBackgroundLightMode</item> <item name = "ujet colorChatQuickReplyButtonBackgroundDark" >@color/chatQuickReplyButtonBackgroundDarkMode</item> <item name = "ujet colorChatQuickReplyButtonPressedBackground" >@color/chatQuickReplyButtonPressedBackgroundLightMode</item> <item name = "ujet colorChatQuickReplyButtonPressedBackgroundDark" >@color/chatQuickReplyButtonPressedBackgroundDarkMode</item> <item name = "ujet colorChatQuickReplyButtonText" >@color/chatQuickReplyButtonTextLightMode</item> <item name = "ujet colorChatQuickReplyButtonTextDark" >@color/chatQuickReplyButtonTextDarkMode</item> <item name = "ujet colorChatQuickReplyButtonPressedText" >@color/chatQuickReplyButtonPressedTextLightMode</item> <item name = "ujet colorChatQuickReplyButtonPressedTextDark" >@color/chatQuickReplyButtonPressedTextDarkMode</item> <item name = "ujet colorChatQuickReplyButtonStroke" >@color/chatQuickReplyButtonStrokeLightMode</item> <item name = "ujet colorChatQuickReplyButtonStrokeDark" >@color/chatQuickReplyButtonStrokeDarkMode</item> <item name = "ujet chatQuickReplyButtonTypeFace" >Kreon-Regular.ttf</item> <item name = "ujet chatQuickReplyButtonStrokeWidth" >3dp</item> <item name = "ujet chatQuickReplyButtonCornerRadius" >3dp</item> <item name = "ujet chatQuickReplyButtonVerticalMargin" >0dp</item> <item name = "ujet chatQuickReplyButtonHorizontalPadding" >10dp</item> <item name = "ujet chatQuickReplyButtonVerticalPadding" >1dp</item> <item name = "ujet chatQuickReplyButtonAlignment" >right</item> Content cards You can add customization for content cards along with chat customization.
- The following is an example of a push notification message: { "call id" : 12345 , "ujet noti type" : "connect call" , "noti type" : "connect call" , "call type" : "ScheduledCall" , "fail reason" : "none" , "fail details" : "none" } Handle FCM message public class YourFirebaseMessagingService extends FirebaseMessagingService { private UjetPushHandler ujetPushHandler ; @Override public void onCreate () { super.onCreate () ; this.ujetPushHandler = new UjetPushHandler ( this ) ; } @Override public void onMessageReceived ( RemoteMessage remoteMessage ) { if ( ujetPushHandler.handle ( remoteMessage )) { // Handled by CCAI Platform } else { // Handle your push notification message in here } } } Handle GCM message public class YourGcmListenerService extends GcmListenerService { private UjetPushHandler ujetPushHandler ; @Override public void onCreate () { super.onCreate () ; this.ujetPushHandler = new UjetPushHandler ( this ) ; } @Override public void onMessageReceived ( String s, Bundle bundle ) { if ( ujetPushHandler.handle ( bundle )) { // Handled by CCAI Platform } else { // Handle your message } } } Handle GCM message in GcmReceiver (Old way) public class YourGcmReceiver extends WakefulBroadcastReceiver { private UjetPushHandler ujetPushHandler ; @Override public void onReceive ( Context context, Intent intent ) { ujetPushHandler = new UjetPushHandler ( context ) ; if ( ujetPushHandler.handle ( intent.getExtras ())) { // Handled by CCAI Platform } else { // Handle your message } } } Start the application Note: All previous start methods are deprecated and replaced with Ujet.start(@NonNull UjetStartOptions) .
- The object of the custom data is the value of the custom data key. { "iat" : 1537399656 , "exp" : 1537400256 , "custom data" : { "location" : { "label" : "Location" , "value" : "1000 Stockton St, San Francisco, CA, United States" , "type" : "string" }, "dashboard url" : { "label" : "Dashboard URL" , "value" : "http://(company name)/dashboard/device user ID" , "type" : "url" }, "contact date" : { "label" : "Contact Date" , "value" : 1537399655992 , "type" : "date" }, "membership number" : { "label" : "Membership Number" , "value" : 62303 , "type" : "number" }, "model" : { "label" : "Model" , "value" : "iPhone" , "type" : "string" }, "os version" : { "label" : "OS Version" , "value" : "12.0" , "type" : "string" }, "last transaction id" : { "label" : "Last Transaction ID" , "value" : "243324DE-01A1-4F71-BABC-3572B77AC487" , "type" : "string" }, "battery" : { "label" : "Battery" , "value" : "-100%" , "type" : "string" }, "bluetooth" : { "label" : "Bluetooth" , "value" : "Bluetooth not supported" , "type" : "string" }, "wifi" : { "label" : "Wi-Fi" , "value" : "Wi-Fi not connected" , "type" : "string" }, "ssn" : { "invisible to agent" : true , "label" : "Social Security Number" , "value" : "102-186-1837" , "type" : "string" } } } The key is a unique identifier for the data.

### "Session data feed \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-session-data-feed](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-session-data-feed)
- Source ID: `site-docs-root`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- API DAP Response (Loanne: True) API Response key value list key: zulu priority: 1 user type: shopper API Response Json { "key": "zulu", "priority: 1, "user type": "shopper" } Request parameters passed to API DAP Request parameters passed: { "fixed parameter": "abcxyz", "abc": 1 } Verified Verified by Alex B Payment Data Product Name: sample product name Amount Charged: 10.00 USD Payment Status: Success Transaction ID: ch 3PYlfT Agent: Alex B Timestamp: July 4, 2024 at 4:09:32 PM GMT+7 Customer rating received Customer rating feedback received: 5 Customer text feedback received: very good Call Redacted Start: July 5, 2024 at 11:28:48 AM GMT+7 End: July 5, 2024 at 11:35:33 AM GMT+7 Duration: 06:45 Chat transcript uploaded Chat message history CRM link: https://example.com/attachments/token/...
- How can I help you? ---------------------------------------- [July 5, 2024 at 4:23:10 PM GMT+7 Consumer] human agent ---------------------------------------- Live Translation was used Spanish (Spain) and English (US) were used for translation Data parameters passed to Virtual Agent Data parameters passed to Virtual Agent PN - Chat Data parameters passed: order: yes product: books queueId: 502 queueLanguage: en Pre-session SMS deflection Pre-session SMS deflection was offered in ORDERS RETURNS/PN/PN 1 Pre-session SMS deflection was accepted Dispositions Code: test001 Custom Code ID: 123 UJET Code ID: 3 Note: Okee List: Custom Custom List ID: 2222 UJET List ID: 3 Agent: Alex B CCAI Insight chat history uploaded GCS URL: gs://example-insights/oem/...
- Content Card button was selected End User selected the button Primary with reply 1 from the Title 1 card Call transfer redirected to external SIP SIP destination: sip:returns@returns.onsip.com Data parameters passed: userName: Alex B Virtual Agent call recording Virtual Agent call recording is not available for consumer privacy reasons Virtual Agent transcript Virtual Agent call transcript is not available for consumer privacy reasons VA URL Links URL Links from Virtual Agent Returnsbot https://example.com/returns/...
- Inbound sip headers Data parameters passed: xTwilioAccountSid: AC78449ee33... xInboundVpsip: true xTwilioCallSid: CAe63b...

