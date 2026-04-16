---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.048Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Bulk agent status import notifications"
feature_slug: "bulk-agent-status-import-notifications"
latest_feature_date: "2025-04-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-alias"
keywords:
  - "bulk"
  - "agent"
  - "status"
  - "import"
  - "notifications"
  - "adds"
  - "upload"
  - "completion"
---

# Bulk agent status import notifications

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Adds upload completion status and confirmation email notifications for bulk agent status imports.

## Extended Definition

Adds upload completion status and confirmation email notifications for bulk agent status imports.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-alias](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-alias)

## Supporting Pages

### "iOS SDK guide \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide)
- Source ID: `site-docs-reference`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- PKPushRegistry voipRegistry = [[ PKPushRegistry alloc ] initWithQueue : dispatch get main queue () ] ; voipRegistry . delegate = self ; voipRegistry . desiredPushTypes = [ NSSet setWithObject : PKPushTypeVoIP ] ; Add the following delegate methods in implementing UIApplicationDelegate protocol file: Please print your device token to test push notifications. // PKPushRegistryDelegate - ( void ) pushRegistry :( PKPushRegistry ) registry didUpdatePushCredentials :( PKPushCredentials ) credentials forType :( NSString ) type { [ UJET updatePushToken : credentials . token type : UjetPushTypeVoIP ] ; } - ( void ) pushRegistry :( PKPushRegistry ) registry didReceiveIncomingPushWithPayload :( PKPushPayload ) payload forType :( PKPushType ) type withCompletionHandler :( void ( ^ )( void )) completion { if ( payload . dictionaryPayload [ @ "ujet" ] ) { [ UjetreceivedNotification : payload . dictionaryPayload completion : completion ] ; } else { completion (); } } // UIApplicationDelegate - ( void ) application :( UIApplication ) application didRegisterForRemoteNotificationsWithDeviceToken :( NSData ) deviceToken { [ UjetupdatePushToken : deviceToken type : UjetPushTypeAPN ] ; } - ( void ) application :( UIApplication ) application didReceiveRemoteNotification :( NSDictionary ) userInfo fetchCompletionHandler :( void ( ^ )( UIBackgroundFetchResult )) completionHandler { if ( userInfo [ @ "ujet" ] ) { [ UJET receivedNotification : userInfo completion : nil ] ; } } // UserNotificationsDelegate overrides [UIApplicationDelegate didReceiveRemoteNotification:] - ( void ) userNotificationCenter :( UNUserNotificationCenter ) center willPresentNotification :( UNNotification ) notification withCompletionHandler :( void ( ^ )( UNNotificationPresentationOptions )) completionHandler { NSDictionary userInfo = notification . request . content . userInfo ; if ( userInfo [ @ "ujet" ] != nil ) { [ UJET receivedNotification : userInfo completion : nil ] ; } } - ( void ) userNotificationCenter :( UNUserNotificationCenter ) center didReceiveNotificationResponse :( UNNotificationResponse ) response withCompletionHandler :( void ( ^ )( void )) completionHandler { NSDictionary userInfo = response . notification . request . content . userInfo ; if ( userInfo [ @ "ujet" ] != nil ) { [ UJET receivedNotification : userInfo completion : nil ] ; } } Enable push notifications Select your target and open Capabilities tab.
- Setting the following property to false bypasses all push notification dependencies and prevents push notifications from reaching end-users: @property ( nonatomic, assign ) BOOL allowsPushNotifications ; Ignore dark mode You can ignore the dark mode in CCAI Platform SDK specifically with this property: @property ( nonatomic, assign ) BOOL ignoreDarkMode ; Hide Status Bar You can control the visibility of the status bar with this property: @property ( nonatomic, assign ) BOOL hideStatusBar ; By default, the hideStatusBar is set to false and visible .
- This is especially important when the userId has changed. [ UJET getStatus ] ; If there is an existing session, we should prompt the user to resume the session or cancel the action: if ([ UJET getStatus ] ! = UjetStatusNone ) { // Display alert to cancel login or resume existing session } Customize There are several options for the SDK theme listed in UJETGlobalTheme.h .
- Integrating push notification In AppDelegate.m : @import PushKit ; @interface AppDelegate () < PKPushRegistryDelegate > In application : didFinishLaunchingWithOptions : method : // Initialize CCAI Platform [ UJET ] initialize : UJET COMPANY KEY subdomain : UJET SUBDOMAIN delegate : self ] ; // Register for VoIP notifications on launch.

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- To assign multiple direct phone numbers to an agent, follow the instructions in Bulk user management: Upload new or updated users while following these guidelines: Stay within the limitations for assigning direct phone numbers.
- This will place a new Outbound Call and set the status of the original Voicemail call to 'Voicemail Read.' Scheduled call recovery If a consumer scheduled a call using the Web or Mobile SDK, then doesn't pick up the call at the scheduled time, a Callback option presented to Agent which will create a new Outbound call.
- Agent call messages and notifications You have flexibility based on your individual contact center environment to change how often the agent hears call alerts, what the alert sounds like, and also options for more detailed audible call announcements.
- For Missed Call Threshold , set the number of consecutive calls that an agent can miss (that is, not pick up within the timeout threshold) before they are placed in missed call status .

### "Agent aliases \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-alias](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-alias)
- Source ID: `site-docs-reference`
- Final score: 129
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Do a bulk import of agent aliases To do a bulk import of agent aliases, follow these steps: Click menu Menu , and then click Settings > Users and teams .
- Administrators can configure agent aliases manually or with a bulk upload.
- For more information, see Bulk user management templates Let agents create their own aliases You can grant agents permissions to create their own aliases.
- In the Import users pane, browse for bulk user manage template.csv on your computer or drag the file into the pane.

