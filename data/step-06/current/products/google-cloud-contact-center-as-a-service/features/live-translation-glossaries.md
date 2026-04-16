---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.082Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Live translation glossaries"
feature_slug: "live-translation-glossaries"
latest_feature_date: "2024-04-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages"
keywords:
  - "live"
  - "translation"
  - "glossaries"
  - "now"
  - "supports"
  - "help"
  - "ensure"
  - "specific"
---

# Live translation glossaries

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Live translation now supports glossaries to help ensure specific terms are translated appropriately.

## Extended Definition

Live translation now supports glossaries to help ensure specific terms are translated appropriately.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages)

## Supporting Pages

### "Chat Settings and Features \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- Source ID: `site-docs-reference`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- Before you begin Before you can set up live translation, you need to enable the Cloud Translation API, create a service account, grant the cloudtranslate.admin role to the service account, and create a service account key.
- The message would say "Looks like you are trying to figure out the specifics of Product 1, would you like to connect with an agent who can help?" Select the Queue Language associated with the trigger.
- Turn off live translation for a queue To turn off live translation for a queue, follow these steps: In the CCAI Platform portal, click menu Menu , and then click Settings > Queue .
- To turn off live translation globally, follow these steps: In the CCAI Platform portal, click menu Menu , and then click Settings > Operation Management .

### "Customizing languages, recordings, & messages \_|\_ Google Cloud Contact\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages)
- Source ID: `site-docs-reference-2`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- If you still need help, email support@yourcompany.com Chat : Shows once the chat option is selected with other queues available for selection below Example after hours chat screen: Sample variable attributes for customizing web and mobile messages The following variables can be inserted into Mobile and Web SDK messages and reference either information passed from the SDK or wait information.
- Note: This if for SMS and Social only , for IVR and Chat use @{QUEUE} Sample input We're assigning a representative to help you with @{QUEUE NAME} @{TIME UNTIL DISMISSAL} Description: this variable contains the remaining time until the chat is dismissed.
- Enabling multiple languages for IVR, mobile, and web channels Adding languages creates a new queue structure for each channel, enabling all queue settings and assignments, messages, and all queue-specific settings to be set per language.
- Messages can be created at Settings > Languages and Messages > IVR-specific Messages . @{ESTIMATED WAIT TIME IN MINUTES} Description: the numerical value for minutes and / or hours for the current estimated queue wait time is inserted.

### "Android SDK guide \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide)
- Source ID: `site-docs-reference`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- Use UjetCustomData.putObject("external chat transfer", hashMapObject) to set the transcript data in JSON format as follows: HashMap<String, Object> jsonData = new HashMap<> () ; // Convert json string into hashmap object and store it in jsonData UjetCustomData customData = new UjetCustomData () ; customData.putObject ( "external chat transfer" , jsonData ) ; // Use external chat transfer key to send chat transcript data UjetStartOptions ujetStartOptions = new UjetStartOptions.Builder () .setUnsignedCustomData ( customData ) .build () ; Ujet.start ( ujetStartOptions ) ; JSON format: greeting override : string agent : dictionary name : string avatar : string [url of agent avatar, optional] transcript : array sender : string ["end user" or "agent"] timestamp : string [ie "2021-03-15 12:00:00Z"] content : array type : string [one of text, media] text : string [required for text type] media : dictionary [required for media type] type : string [one of image, video] url : string [public URL pointing at media file] JSON example: { "greeting override" : "Please hold while we connect you with a human agent." , "agent" : { "name" : "Name" , "avatar" : "avatar url" }, "transcript" : [ { "sender" : "agent" , "timestamp" : "2021-03-15 12:00:15Z" , "content" : [ { "type" : "text" , "text" : " Suggestions shown: \n\n Help with batch or delivery\n Help with metrics or order feedback\n Help with Instant Cashout" } ] }, { "sender" : "end user" , "timestamp" : "2021-03-15 12:00:16Z" , "content" : [ { "type" : "text" , "text" : "Help with batch or delivery" } ] } ] } You can use Markdown on the text type.
- Twilio SDK upgrade requirements Requires Twilio SDK to be following specific versions if the Android SDK is integrated using our package directly, otherwise this can be ignored. // Twilio VoIP SDK api 'com.twilio:voice-android:6.1.1' // Twilio Conversations SDK api 'com.twilio:conversations-android:3.1.0' In addition, Proguard rules are already included in the Android SDK to ensure that the Twilio Programmable Voice library is not removed by ProGuard and can be used to troubleshoot in case ProGuard accidentally removes the library. -keep class com.twilio. { ; } -keep class tvo.webrtc. { ; } -dontwarn tvo.webrtc. -keep class com.twilio.voice. { ; } -keepattributes InnerClasses To support latest Twilio versions, starting with the Android SDK version 0.34.0, SDK is no longer binary compatible with applications that target Java 7.
- Installation Add the Android SDK repository to your Gradle setting for the root project. build.gradle (Project) allprojects { repositories { google () jcenter () maven { url "https://sdk.ujet.co/android/" } } } build.gradle (module: app) dependencies { // Replace x.y.z with latest version of CCAI Platform SDK def ujetSdkVersion = "x.y.z" implementation "co.ujet.android:ujet-android: $ujetSdkVersion " // CCAI Platform supports co-browse for Web SDK version 0 .46.0 or // higher. // To use co-browse, declare the following dependency. implementation "co.ujet.android:cobrowse: $ujetVersion " } Note: If you're using a Java version older than 11.0.2 and are unable to build our SDK, upgrade to 11.0.2+ to resolve the issue.
- You will need to add an intent filter that contains the deep link in your manifest. <activity android:name = "co.ujet.android.activity.UjetActivity" > <intent-filter> <action android:name = "android.intent.action.VIEW" /> <category android:name = "android.intent.category.DEFAULT" /> <category android:name = "android.intent.category.BROWSABLE" /> <data android:host = "<package name>" android:scheme = "ujet" android:path = "/smartchannel" /> </intent-filter> </activity> Preferred channel The Preferred Channel parameter lets you to route consumers directly to a specific channel.

