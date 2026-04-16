---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.137Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Virtual Task Assistant data parameters"
feature_slug: "virtual-task-assistant-data-parameters"
latest_feature_date: "2023-03-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/iva-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide"
keywords:
  - "virtual"
  - "task"
  - "assistant"
  - "parameters"
  - "lets"
  - "admins"
  - "define"
  - "can"
---

# Virtual Task Assistant data parameters

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Lets admins define parameters that Virtual Task Assistant can collect and send, with support for multiple languages and a dedicated settings panel.

## Extended Definition

Lets admins define parameters that Virtual Task Assistant can collect and send, with support for multiple languages and a dedicated settings panel.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/iva-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/iva-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide)

## Supporting Pages

### "Call and Chat Settings \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings)
- Source ID: `site-docs-reference`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- Here is an example reserved data properties in a SIP header: se tt i n g : { redirec t io n : { op t io n : "sip" , sip : { uri : "Destination SIP URI" , da ta parame ters e na bled : true false , da ta parame ters : [ { f ield : "verified customer" , t ype : "dynamic" , source : "ujet metadata" , source f ield : "Incoming Field" }, { f ield : "bad actor" , t ype : "dynamic" , source : "ujet metadata" , source f ield : "Incoming Field" }, { f ield : "repeat customer" , t ype : "dynamic" , source : "ujet metadata" , source f ield : "Incoming Field" } ], da ta records : { i n me ta da ta : true false , i n crm record : true false } } } } Support for virtual agents If you have a virtual agent (a support agent or a virtual task assistant) that performs end-user verification, the virtual agent can pass the end-user verification information to CCAI Platform.
- Configure a virtual task assistant to pass the Verified Customer parameter To configure a virtual task assistant to pass the Verified Customer parameter, follow these steps: In the CCAI Platform portal, click Settings > Virtual Agent .
- Go to the Virtual Agents pane and find the virtual task assistant that you want to configure.
- For more information, see Create a virtual task assistant .

### "Interactive Virtual Assistant (IVA) guide \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/iva-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/iva-guide)
- Source ID: `site-docs-reference`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation AI and ML Google Cloud CCaaS User Guides Send feedback Interactive Virtual Assistant (IVA) guide Stay organized with collections Save and categorize content based on your preferences.
- You can define session parameters in this payload from the Dialogflow CX interaction to pass in custom headers using SIP by assigning key value pairs in sip parameters .
- Note: If you need to send dynamic session parameters from the virtual agent interaction, consider using virtual agent deflection to external telephony.
- The following is an sample custom payload: { "ujet" : { "type" : "action" , "action" : "deflection" , "deflection type" : "sip" "sip uri" : "sip:1-999-123-4567@voip-provider.example.net:5060" "sip refer" : true "sip parameters" : { "x-header" : "value" , "x-header" : "value" } } } In the example, "sip refer": true indicates that the call is transferred using the SIP REFER method.

### "Android SDK guide \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide)
- Source ID: `site-docs-reference`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- You can customize the chat header title text by using the following options: <item name = "ujet chatCustomHeaderTextColor" >@color/chatHeaderTextLightMode</item> <item name = "ujet chatCustomHeaderTextColowDark" >@color/chatHeaderTextDarkMode</item> <item name = "ujet chatCustomHeaderTextSize" >16sp</item> <item name = "ujet chatCustomHeaderTextStyle" >bold</item> You can customize Virtual Agent quick replies in the chat UI by using the following options: <item name = "ujet colorChatQuickReplyButtonBackground" >@color/chatQuickReplyButtonBackgroundLightMode</item> <item name = "ujet colorChatQuickReplyButtonBackgroundDark" >@color/chatQuickReplyButtonBackgroundDarkMode</item> <item name = "ujet colorChatQuickReplyButtonPressedBackground" >@color/chatQuickReplyButtonPressedBackgroundLightMode</item> <item name = "ujet colorChatQuickReplyButtonPressedBackgroundDark" >@color/chatQuickReplyButtonPressedBackgroundDarkMode</item> <item name = "ujet colorChatQuickReplyButtonText" >@color/chatQuickReplyButtonTextLightMode</item> <item name = "ujet colorChatQuickReplyButtonTextDark" >@color/chatQuickReplyButtonTextDarkMode</item> <item name = "ujet colorChatQuickReplyButtonPressedText" >@color/chatQuickReplyButtonPressedTextLightMode</item> <item name = "ujet colorChatQuickReplyButtonPressedTextDark" >@color/chatQuickReplyButtonPressedTextDarkMode</item> <item name = "ujet colorChatQuickReplyButtonStroke" >@color/chatQuickReplyButtonStrokeLightMode</item> <item name = "ujet colorChatQuickReplyButtonStrokeDark" >@color/chatQuickReplyButtonStrokeDarkMode</item> <item name = "ujet chatQuickReplyButtonTypeFace" >Kreon-Regular.ttf</item> <item name = "ujet chatQuickReplyButtonStrokeWidth" >3dp</item> <item name = "ujet chatQuickReplyButtonCornerRadius" >3dp</item> <item name = "ujet chatQuickReplyButtonVerticalMargin" >0dp</item> <item name = "ujet chatQuickReplyButtonHorizontalPadding" >10dp</item> <item name = "ujet chatQuickReplyButtonVerticalPadding" >1dp</item> <item name = "ujet chatQuickReplyButtonAlignment" >right</item> Content cards You can add customization for content cards along with chat customization.
- You will need to add an intent filter that contains the deep link in your manifest. <activity android:name = "co.ujet.android.activity.UjetActivity" > <intent-filter> <action android:name = "android.intent.action.VIEW" /> <category android:name = "android.intent.category.DEFAULT" /> <category android:name = "android.intent.category.BROWSABLE" /> <data android:host = "<package name>" android:scheme = "ujet" android:path = "/smartchannel" /> </intent-filter> </activity> Preferred channel The Preferred Channel parameter lets you to route consumers directly to a specific channel.
- UjetRequestListener.onRequestPushToken should return the FCM/GCM token. public class YourApplication extends Application implements UjetRequestListener { / Return your FCM/GCM token / @Override public String onRequestPushToken () { return yourToken () ; // As shown in the previous step, you can get your token using FirebaseMessaging.getInstance () .getToken () .addOnCompleteListener ( task -> { }) } } Handle the push notification.
- Get the FCM token using the following code: FirebaseMessaging.getInstance () .getToken () .addOnCompleteListener ( task -> { if ( !task.isSuccessful () task.getResult () == null ) { Log.w ( "FCM" , "Couldn't get FCM token" ) ; return ; } String token = task.getResult () ; Log.i ( "FCM" , "FCM token: " + token ) ; }) ; FirebaseMessagingService is called, which is registered in Manifest if the token is refreshed.

