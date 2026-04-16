---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.018Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Global push notification disablement"
feature_slug: "global-push-notification-disablement"
latest_feature_date: "2025-12-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide"
keywords:
  - "global"
  - "push"
  - "notification"
  - "disablement"
  - "android"
  - "ios"
  - "sdks"
  - "can"
---

# Global push notification disablement

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Android and iOS SDKs can be configured to turn off push notifications at the global level.

## Extended Definition

Android and iOS SDKs can be configured to turn off push notifications at the global level.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide)

## Supporting Pages

### "Android SDK guide \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide)
- Source ID: `site-docs-reference`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- 0 UjetOption.setBlockChatTerminationByEndUser Turn off push notifications at the global level Setting UjetOption.setPushNotificationsAllowed to false bypasses all push notification dependencies and prevents push notifications from reaching end-users.
- Caution: Make sure that Ujet.init() is called in Application.onCreate() because the Android SDK can be launched even if the host app is not running by the push notification and SMS link.
- Declare full screen intent permission used by the Android SDK USE FULL SCREEN INTENT permission is required to show incoming call push notification when device is locked.
- The following is an example of a push notification message: { "call id" : 12345 , "ujet noti type" : "connect call" , "noti type" : "connect call" , "call type" : "ScheduledCall" , "fail reason" : "none" , "fail details" : "none" } Handle FCM message public class YourFirebaseMessagingService extends FirebaseMessagingService { private UjetPushHandler ujetPushHandler ; @Override public void onCreate () { super.onCreate () ; this.ujetPushHandler = new UjetPushHandler ( this ) ; } @Override public void onMessageReceived ( RemoteMessage remoteMessage ) { if ( ujetPushHandler.handle ( remoteMessage )) { // Handled by CCAI Platform } else { // Handle your push notification message in here } } } Handle GCM message public class YourGcmListenerService extends GcmListenerService { private UjetPushHandler ujetPushHandler ; @Override public void onCreate () { super.onCreate () ; this.ujetPushHandler = new UjetPushHandler ( this ) ; } @Override public void onMessageReceived ( String s, Bundle bundle ) { if ( ujetPushHandler.handle ( bundle )) { // Handled by CCAI Platform } else { // Handle your message } } } Handle GCM message in GcmReceiver (Old way) public class YourGcmReceiver extends WakefulBroadcastReceiver { private UjetPushHandler ujetPushHandler ; @Override public void onReceive ( Context context, Intent intent ) { ujetPushHandler = new UjetPushHandler ( context ) ; if ( ujetPushHandler.handle ( intent.getExtras ())) { // Handled by CCAI Platform } else { // Handle your message } } } Start the application Note: All previous start methods are deprecated and replaced with Ujet.start(@NonNull UjetStartOptions) .

### "Chat Settings and Features \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- Source ID: `site-docs-reference`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- The notification message from the global setting will be used.
- Dismissed chat details Dismissal settings can be set globally or per-queue When chats have been dismissed, they do not accrue wait time For a chat to be dismissed, both the consumer and agent have to have sent at least one message The dismiss eligibility timer starts from the latest message from an agent Only inbound chats can be dismissed When chats are dismissed and later reactivated, a consumer has to send at least one message afterward before the chat is eligible to be dismissed again Dismissed chats are ultimately ended when the chat timeout duration is met When chats are dismissed, activities are added to the chat transcript Chat Flow CCAI Platform portal configuration Dismissing chats - global setting A global configuration for all chat channels can be configured in Chat Settings.
- Reply back to this message to begin a new chat." OR "ujet message chat dismissed": "Welcome Back!<br>Do you have the same issue or a new issue?" "ujet chat new": "New" "ujet chat same": "Same" Mobile SDKs The string file names for customizing this UI are broken down below: ujet chat footer view message dismissed: "Welcome back!\nWe have not heard from you in a while.\nDo you have the same issue or a new issue?" OR ujet chat footer view message timeout: "Your previous chat has ended, please click to start a new chat." ujet common same: "Same" ujet common new: "New" Configure rich messaging and file attachments You can configure CCAI Platform so that agents can use rich messaging, emojis, and file attachments in the chat adapter.
- When the target response time is met, chats will not end Chats end when: Agent manually clicks end chat The consumer: Closes the active tab Navigates away from the page the chat session started on Clicks x on the chat session When the chat timeout threshold is reached CCAI Platform portal configuration Enabling global target response time Go to Settings > Chat .

### "iOS SDK guide \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide)
- Source ID: `site-docs-reference`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- Turn off push notifications at the global level You can turn off push notifications at the global level.
- PKPushRegistry voipRegistry = [[ PKPushRegistry alloc ] initWithQueue : dispatch get main queue () ] ; voipRegistry . delegate = self ; voipRegistry . desiredPushTypes = [ NSSet setWithObject : PKPushTypeVoIP ] ; Add the following delegate methods in implementing UIApplicationDelegate protocol file: Please print your device token to test push notifications. // PKPushRegistryDelegate - ( void ) pushRegistry :( PKPushRegistry ) registry didUpdatePushCredentials :( PKPushCredentials ) credentials forType :( NSString ) type { [ UJET updatePushToken : credentials . token type : UjetPushTypeVoIP ] ; } - ( void ) pushRegistry :( PKPushRegistry ) registry didReceiveIncomingPushWithPayload :( PKPushPayload ) payload forType :( PKPushType ) type withCompletionHandler :( void ( ^ )( void )) completion { if ( payload . dictionaryPayload [ @ "ujet" ] ) { [ UjetreceivedNotification : payload . dictionaryPayload completion : completion ] ; } else { completion (); } } // UIApplicationDelegate - ( void ) application :( UIApplication ) application didRegisterForRemoteNotificationsWithDeviceToken :( NSData ) deviceToken { [ UjetupdatePushToken : deviceToken type : UjetPushTypeAPN ] ; } - ( void ) application :( UIApplication ) application didReceiveRemoteNotification :( NSDictionary ) userInfo fetchCompletionHandler :( void ( ^ )( UIBackgroundFetchResult )) completionHandler { if ( userInfo [ @ "ujet" ] ) { [ UJET receivedNotification : userInfo completion : nil ] ; } } // UserNotificationsDelegate overrides [UIApplicationDelegate didReceiveRemoteNotification:] - ( void ) userNotificationCenter :( UNUserNotificationCenter ) center willPresentNotification :( UNNotification ) notification withCompletionHandler :( void ( ^ )( UNNotificationPresentationOptions )) completionHandler { NSDictionary userInfo = notification . request . content . userInfo ; if ( userInfo [ @ "ujet" ] != nil ) { [ UJET receivedNotification : userInfo completion : nil ] ; } } - ( void ) userNotificationCenter :( UNUserNotificationCenter ) center didReceiveNotificationResponse :( UNNotificationResponse ) response withCompletionHandler :( void ( ^ )( void )) completionHandler { NSDictionary userInfo = response . notification . request . content . userInfo ; if ( userInfo [ @ "ujet" ] != nil ) { [ UJET receivedNotification : userInfo completion : nil ] ; } } Enable push notifications Select your target and open Capabilities tab.
- Swift func tokenFromData ( data : Data ) - > String { return data . map { String ( format : "%02x" , $0 ) }. joined () } func application ( application : UIApplication , didRegisterForRemoteNotificationsWithDeviceToken deviceToken : Data ) { print ( "apns token: " , tokenFromData ( data : deviceToken )) ... } func pushRegistry ( registry : PKPushRegistry , didUpdate credentials : PKPushCredentials , for type : PKPushType ) { print ( "voip token: " , tokenFromData ( data : credentials . token )) ... } Obj-C - ( NSString ) tokenFromData : ( NSData ) data { const char d = data . bytes ; NSMutableString token = [ NSMutableString string ]; for ( NSUInteger i = 0 ; i < data . length ; i ++ ) { [ token appendFormat : @ "%02.2hhX" , d [ i ]]; } return [[ token copy ] lowercaseString ]; } - ( void ) pushRegistry : ( PKPushRegistry ) registry didUpdatePushCredentials : ( PKPushCredentials ) credentials forType : ( PKPushType ) type { NSLog ( @ "voip token: %@" , [ self tokenFromData : credentials . token ]); ... } - ( void ) application : ( UIApplication ) application didRegisterForRemoteNotificationsWithDeviceToken : ( NSData ) deviceToken { NSLog ( @ "apns token: %@" , [ self tokenFromData : deviceToken ]); } Result Once you have entered the certificate PEM file and the device token, click the button.
- Check that your certificate is working with Apple's push notification server. openssl s client -connect gateway.push.apple.com:2195 -cert cert.pem -debug -showcerts When successful, it should return: --- New, TLSv1/SSLv3, Cipher is AES256-SHA Server public key is 2048 bit Secure Renegotiation IS supported Compression: NONE Expansion: NONE SSL-Session: Protocol : TLSv1 Cipher : AES256-SHA Session-ID: Session-ID-ctx: Master-Key: XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX Key-Arg : None Start Time: 1475785489 Timeout : 300 ( sec ) Verify return code: 0 ( ok ) --- Sign in to the CCAI Platform portal with administrator credentials, and go to Settings > Developer Settings > Mobile App .

