---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.090Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Email channel Chrome push notifications"
feature_slug: "email-channel-chrome-push-notifications"
latest_feature_date: "2024-01-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started"
keywords:
  - "email"
  - "channel"
  - "chrome"
  - "push"
  - "notifications"
  - "agents"
  - "can"
  - "receive"
---

# Email channel Chrome push notifications

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Agents can receive Chrome push notifications when new emails are assigned.

## Extended Definition

Agents can receive Chrome push notifications when new emails are assigned.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started](https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started)

## Supporting Pages

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- You can also optionally allow agents to forward voicemails back to the same queue by checking the box that appears when voicemail forwarding is enabled.
- Clear voicemails from queues If your agents listen to voicemails using your CRM instead of the agent adapter, voicemails can accumulate in queues.
- If the caller does not enter a valid number, the call will end as there is no number to dial to reach them after the voicemail is received.
- If no agents are available during the 15 minutes, the call will expire and the consumer who scheduled the call won't receive a call.

### "Android SDK guide \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide)
- Source ID: `site-docs-reference`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- UjetStartOptions.preferredChannel Ujet.start ( new ) UjetStartOptions.Builder () .setPreferredChannel ( UjetPreferredChannel.UjetPreferredChannelChat ) .build ()) ; Event Notifications You can optionally set UjetEventListener to receive application event notifications.
- Add a service account key You need to add a service account key to your mobile app to receive push notifications.
- The following is an example of a push notification message: { "call id" : 12345 , "ujet noti type" : "connect call" , "noti type" : "connect call" , "call type" : "ScheduledCall" , "fail reason" : "none" , "fail details" : "none" } Handle FCM message public class YourFirebaseMessagingService extends FirebaseMessagingService { private UjetPushHandler ujetPushHandler ; @Override public void onCreate () { super.onCreate () ; this.ujetPushHandler = new UjetPushHandler ( this ) ; } @Override public void onMessageReceived ( RemoteMessage remoteMessage ) { if ( ujetPushHandler.handle ( remoteMessage )) { // Handled by CCAI Platform } else { // Handle your push notification message in here } } } Handle GCM message public class YourGcmListenerService extends GcmListenerService { private UjetPushHandler ujetPushHandler ; @Override public void onCreate () { super.onCreate () ; this.ujetPushHandler = new UjetPushHandler ( this ) ; } @Override public void onMessageReceived ( String s, Bundle bundle ) { if ( ujetPushHandler.handle ( bundle )) { // Handled by CCAI Platform } else { // Handle your message } } } Handle GCM message in GcmReceiver (Old way) public class YourGcmReceiver extends WakefulBroadcastReceiver { private UjetPushHandler ujetPushHandler ; @Override public void onReceive ( Context context, Intent intent ) { ujetPushHandler = new UjetPushHandler ( context ) ; if ( ujetPushHandler.handle ( intent.getExtras ())) { // Handled by CCAI Platform } else { // Handle your message } } } Start the application Note: All previous start methods are deprecated and replaced with Ujet.start(@NonNull UjetStartOptions) .
- 0 = Show everywhere, 1 = Hide from the options menu, 2 = Hide from the post chat screen, 3 = Hide from both the options menu and the post chat screen. .setPushNotificationsAllowed ( true ) .build () ; //The following customizes various attributes in chat UI ChatStyles chatStyles = new ChatStyles () ; chatStyles.setBackButton ( new BackButtonStyle ( false, "ujet agent sample" )) ; //customizes back button styles chatStyles.setHeader ( ... ) ; //customizes chat header styles chatStyles.setAgentMessageBubbles ( ... ) ; //customizes agent messages styles chatStyles.setConsumerMessageBubbles ( ... ) ; //customizes consumer messages styles chatStyles.setSystemMessages ( ... ) ; //customizes system messages styles chatStyles.setEndChatButton ( ... ) ; //customizes end chat button styles chatStyles.setTimeStamps ( ... ) ; //customizes timestamp styles chatStyles.setUserInputBar ( ... ) ; //customizes user input bar styles UjetOption ujetOption = new UjetOption.Builder () .setUjetStylesOptions ( new UjetStylesOptions.Builder () .setChatStyles ( chatStyles ) .build () ) //The following customizes various attributes in chat UI using json file.

### "Get started with Contact Center AI Platform (CCAI Platform) \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started](https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started)
- Source ID: `site-docs-reference-2`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Detects calls to your main support number from the device's dialer and converts the call to a Mobile call Direct Access Points : Decide which queue, language, or channel an end-user should reach when the SDK is invoked in various parts of your app based on predefined contact details Working from home Contact Center AI Platform (CCAI Platform) is the perfect tool to empower agents to work from home.
- Configure settings for handling chats Enable chat, create proactive web triggers, establish chat channel settings like chat threshold for agents and timeout settings at Settings > Chat Create chat shortcuts for agents to use.
- Agents use email addresses and passwords specific to this instance.
- Assigning Agents to queues so they can receive calls/chats.

