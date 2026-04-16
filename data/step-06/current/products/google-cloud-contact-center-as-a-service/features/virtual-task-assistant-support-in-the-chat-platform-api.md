---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.026Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Virtual task assistant support in the chat platform API"
feature_slug: "virtual-task-assistant-support-in-the-chat-platform-api"
latest_feature_date: "2025-11-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/chat-platform-api-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide"
keywords:
  - "virtual"
  - "task"
  - "assistant"
  - "chat"
  - "platform"
  - "now"
  - "supports"
  - "transferring"
---

# Virtual task assistant support in the chat platform API

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

The chat platform API now supports transferring chats to virtual task assistants and exchanging messages and webhook content with them.

## Extended Definition

The chat platform API now supports transferring chats to virtual task assistants and exchanging messages and webhook content with them.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/chat-platform-api-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/chat-platform-api-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide)

## Supporting Pages

### "Call and Chat Settings \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings)
- Source ID: `site-docs-reference`
- Final score: 183
- Re-rank relevance: N/A

Evidence snippets:
- Here is an example reserved data properties in a SIP header: se tt i n g : { redirec t io n : { op t io n : "sip" , sip : { uri : "Destination SIP URI" , da ta parame ters e na bled : true false , da ta parame ters : [ { f ield : "verified customer" , t ype : "dynamic" , source : "ujet metadata" , source f ield : "Incoming Field" }, { f ield : "bad actor" , t ype : "dynamic" , source : "ujet metadata" , source f ield : "Incoming Field" }, { f ield : "repeat customer" , t ype : "dynamic" , source : "ujet metadata" , source f ield : "Incoming Field" } ], da ta records : { i n me ta da ta : true false , i n crm record : true false } } } } Support for virtual agents If you have a virtual agent (a support agent or a virtual task assistant) that performs end-user verification, the virtual agent can pass the end-user verification information to CCAI Platform.
- Configure a virtual task assistant to pass the Verified Customer parameter To configure a virtual task assistant to pass the Verified Customer parameter, follow these steps: In the CCAI Platform portal, click Settings > Virtual Agent .
- Settings recommendations Use a longer ringtone and/or more frequent notification if: Agents are often multitasking and not always waiting to take a call In an open office or louder environment Agents might listen to music from their computer Use a shorter ringtone if: Agents are always alert and waiting for calls Higher call frequency Call whisper: Use this when the queue selection and type of call highly impact the first communication from the agent Increase speed of whisper for decreased wait time impact For very low second count SLAs: Only use whisper and countdown if necessary as the duration of these messages contributes to the wait time for calls Send reserved data properties With reserved data properties, you can send information about an end-user to CCAI Platform when a chat or call session begins, or even after a session has begun.
- Go to the Virtual Agents pane and find the virtual task assistant that you want to configure.

### "Chat platform API Guide \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/chat-platform-api-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/chat-platform-api-guide)
- Source ID: `site-docs-reference`
- Final score: 181
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Creating chats with transcripts: The chat platform API supports creating a chat with a transcript of an existing conversation, for a scenario where a chat happens within a customer's platform, for example, with a chatbot, before being sent to Contact Center AI Platform.
- The queue selection virtual agent To streamline menu selection for API consumers, the chat platform API is designed to be used in conjunction with a Dialogflow virtual agent to aid in queue placement for new chats.
- Header will be in the format "primary=abcdefg12341234 secondary=qwertyuiop567890" if a tenant has both webhook secrets generated in Contact Center AI Platform, otherwise it will be in the format ""primary=abcdefg12341234" primary signature, secondary signature = signature header.scan ( /primary =( . ) \s secondary =( . ) / ) .flatten Optional: check age of request timestamp to protect against replays raise UnauthorizedException unless Time.now - timestamp header.to time < 1.minute String value of the request body JSON payload = request.body.read expected primary signature = Base64.strict encode64 ( OpenSSL::HMAC.digest ( OpenSSL::Digest::SHA256.new, primary secret, "#{timestamp header}#{payload}" )) expected secondary signature = Base64.strict encode64 ( OpenSSL::HMAC.digest ( OpenSSL::Digest::SHA256.new, secondary secret, "#{timestamp header}#{payload}" )) Only one signature needs to be valid, this allows for easier rotation of secrets in the Contact Center AI Platform developer portal if primary signature == expected primary signature primary signature == expected secondary signature secondary signature == expected primary signature secondary signature == expected secondary signature true else head :unauthorized end else head :bad request end end Overview In general, the basic flow of a chat platform API conversation should go as follows.
- When an end user selects this option, after the email is sent, The customer will need to mark the chat as deflected and ended by using the PATCH /chats/:id endpoint with the following params in the request body: "status": "finished" , "escalation id": &lt;id of escalation> , and "deflection channel": "email" Continue with virtual agent : This is technically a valid deflection option, however it doesn't make sense for using the queue selection VA as the VA would just try to escalate the chat again.

### "Android SDK guide \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide)
- Source ID: `site-docs-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- You can customize the chat header title text by using the following options: <item name = "ujet chatCustomHeaderTextColor" >@color/chatHeaderTextLightMode</item> <item name = "ujet chatCustomHeaderTextColowDark" >@color/chatHeaderTextDarkMode</item> <item name = "ujet chatCustomHeaderTextSize" >16sp</item> <item name = "ujet chatCustomHeaderTextStyle" >bold</item> You can customize Virtual Agent quick replies in the chat UI by using the following options: <item name = "ujet colorChatQuickReplyButtonBackground" >@color/chatQuickReplyButtonBackgroundLightMode</item> <item name = "ujet colorChatQuickReplyButtonBackgroundDark" >@color/chatQuickReplyButtonBackgroundDarkMode</item> <item name = "ujet colorChatQuickReplyButtonPressedBackground" >@color/chatQuickReplyButtonPressedBackgroundLightMode</item> <item name = "ujet colorChatQuickReplyButtonPressedBackgroundDark" >@color/chatQuickReplyButtonPressedBackgroundDarkMode</item> <item name = "ujet colorChatQuickReplyButtonText" >@color/chatQuickReplyButtonTextLightMode</item> <item name = "ujet colorChatQuickReplyButtonTextDark" >@color/chatQuickReplyButtonTextDarkMode</item> <item name = "ujet colorChatQuickReplyButtonPressedText" >@color/chatQuickReplyButtonPressedTextLightMode</item> <item name = "ujet colorChatQuickReplyButtonPressedTextDark" >@color/chatQuickReplyButtonPressedTextDarkMode</item> <item name = "ujet colorChatQuickReplyButtonStroke" >@color/chatQuickReplyButtonStrokeLightMode</item> <item name = "ujet colorChatQuickReplyButtonStrokeDark" >@color/chatQuickReplyButtonStrokeDarkMode</item> <item name = "ujet chatQuickReplyButtonTypeFace" >Kreon-Regular.ttf</item> <item name = "ujet chatQuickReplyButtonStrokeWidth" >3dp</item> <item name = "ujet chatQuickReplyButtonCornerRadius" >3dp</item> <item name = "ujet chatQuickReplyButtonVerticalMargin" >0dp</item> <item name = "ujet chatQuickReplyButtonHorizontalPadding" >10dp</item> <item name = "ujet chatQuickReplyButtonVerticalPadding" >1dp</item> <item name = "ujet chatQuickReplyButtonAlignment" >right</item> Content cards You can add customization for content cards along with chat customization.
- Installation Add the Android SDK repository to your Gradle setting for the root project. build.gradle (Project) allprojects { repositories { google () jcenter () maven { url "https://sdk.ujet.co/android/" } } } build.gradle (module: app) dependencies { // Replace x.y.z with latest version of CCAI Platform SDK def ujetSdkVersion = "x.y.z" implementation "co.ujet.android:ujet-android: $ujetSdkVersion " // CCAI Platform supports co-browse for Web SDK version 0 .46.0 or // higher. // To use co-browse, declare the following dependency. implementation "co.ujet.android:cobrowse: $ujetVersion " } Note: If you're using a Java version older than 11.0.2 and are unable to build our SDK, upgrade to 11.0.2+ to resolve the issue.
- Customizable background color is shown in the screenshot. <style name = "Ujet" > <!-- Don 't include the following tags if you don' t want to customize any of these keys and prefer to use the CCAI Platform default values instead. --> <!-- You can customize light mode theme background color by updating value here in hex. --> <item name = "ujet colorBackground" >@color/backgroundDefault</item> <!-- You can customize dark mode theme background color by updating value here in hex. --> <item name = "ujet colorBackgroundDark" >@color/backgroundDefaultDark</item> </style> Customize the chat header title There are options available to customize the chat header title text in chat in your UI.
- HashMap<String, Object> jsonData = new HashMap<> () ; // Convert json string into hashmap object and store it in jsonData UjetCustomData customData = new UjetCustomData () ; customData.putObject ( "external chat transfer" , jsonData ) ; // Use external chat transfer key to send chat transcript data UjetStartOptions ujetStartOptions = new UjetStartOptions.Builder () .setUnsignedCustomData ( customData ) .build () ; Ujet.start ( ujetStartOptions ) ; Using unsigned custom data to send external chat transcript You can send the external chat transcript to CCAI Platform using unsigned custom data when it's started.

