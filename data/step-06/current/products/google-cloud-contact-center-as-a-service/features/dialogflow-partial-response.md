---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.089Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Dialogflow partial response"
feature_slug: "dialogflow-partial-response"
latest_feature_date: "2024-02-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide"
keywords:
  - "dialogflow"
  - "partial"
  - "response"
  - "can"
  - "send"
  - "initial"
  - "fulfillment"
  - "message"
---

# Dialogflow partial response

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Dialogflow can send an initial fulfillment message before a webhook finishes running.

## Extended Definition

Dialogflow can send an initial fulfillment message before a webhook finishes running.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide)

## Supporting Pages

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- Extension directory messages The following extension directory messages are available: Directory Greeting : the initial message that plays when the end-user accesses the extension directory.
- No confirmation input : a message played when the system expects a response from the end-user.
- Prerequisites In order to enable the Pre-session Deflection, you must have the following: A valid CCAI Platform account with Admin role assigned A valid Legacy, Pro, Enterprise, or Digital License Package A valid subscription for CCAI Platform IVR Support with IVR enabled A valid subscription for CCAI Platform SMS Support enabled with a valid queue structure The SMS must be functional (agent assigned) Basic configuration Do the following procedures, in order: Enable pre-session SMS deflection Enable and save the pre-session SMS deflection offer and opted-in messages Enable and save the pre-session SMS deflection greeting message Configure pre-session SMS deflection for a specific queue Enable pre-session SMS deflection Go Settings > Call.
- CCAI Platform supports the following emergency and special services phone numbers: US emergency numbers Canada emergency numbers Canada special service numbers 911 - Emergency 911 - Emergency 211 - Public information and referral services 933 - Emergency test 311 - Non-emergency municipal government services 411 - Local directory assistance 511 - Weather and traveler information services 611 - Repair service 711 - Message relay service (MRS) 811 - Non-urgent health care telephone triage service 988 - Suicide and crisis lifeline Turn emergency calling on or off Turn on emergency calling to let authorized agents make and manage emergency and special services calls in the call adapter.

### "Customizing languages, recordings, & messages \_|\_ Google Cloud Contact\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages)
- Source ID: `site-docs-reference-2`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation AI and ML Google Cloud CCaaS User Guides Send feedback Customizing languages, recordings, & messages Stay organized with collections Save and categorize content based on your preferences.
- IVR message types The following message types are available: IVR Greeting : the initial message played before the queue menu readout .
- If you still need help, email support@yourcompany.com Chat : Shows once the chat option is selected with other queues available for selection below Example after hours chat screen: Sample variable attributes for customizing web and mobile messages The following variables can be inserted into Mobile and Web SDK messages and reference either information passed from the SDK or wait information.
- Operation Hours The following variable can be used to automatically display opening time based on operation hours. @{NEXT REOPEN HOUR} Description: include this variable to automatically display opening time based on operation hours. display opening time based on operation hours set globally or per-queue (operation hours that apply to the queue the message is sent in).

### "iOS SDK guide \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide)
- Source ID: `site-docs-reference`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- Invoke the dismissed closure on click of the deny button. class CobrowseAlertProvider: NSObject, UJETCobrowseAlertProvider { func cobrowseSessionInitializationAlert ( consentStatus: @escaping ( Bool ) -> Void ) -> UIViewController? { let customAlertViewController = CustomAlertViewController () customAlertViewController.consentStatus = consentStatus return customAlertViewController } func cobrowseSessionRequestAlert ( consentStatus: @escaping ( Bool ) -> Void ) -> UIViewController? { // Same as cobrowseSessionInitializationAlert } func cobrowseRemoteRequestAlert ( consentStatus: @escaping ( Bool ) -> Void ) -> UIViewController? { // Same as cobrowseSessionInitializationAlert } func cobrowseFullDeviceRequestAlert ( dismissed: @escaping () -> Void ) -> UIViewController? { let customAlertViewController = CustomFullDeviceAlertViewController () cobrowseSessionAlertViewController.dismissed = dismissed return customAlertViewController } func cobrowseSessionEndAlert ( consentStatus: @escaping ( Bool ) -> Void ) -> UIViewController? { // Same as cobrowseSessionInitializationAlert } } The custom view controller should have a closure to pass the consent status to the SDK. class CustomAlertViewController: UIViewController { var consentStatus: (( Bool ) -> Void ) ? @IBAction func allowButtonClicked ( sender: Any ) { dismiss ( animated: true ) {[ weak self ] in self?.consentStatus? ( true ) } } @IBAction func denyButtonClicked ( sender: Any ) { dismiss ( animated: true ) {[ weak self ] in self?.consentStatus? ( false ) } } } The custom view controller for full device request alert should have RPSystemBroadcastPickerView and a closure to pass the dismiss status to the SDK. class CustomFullDeviceAlertViewController: UIViewController { var broadcastPickerView: RPSystemBroadcastPickerView! var dismissed: (() -> Void ) ? override func viewDidLoad () { super.viewDidLoad () let frame = CGRect ( x: x, y: y, width: 50 , height: 50 ) // Set your own value broadcastPickerView = RPSystemBroadcastPickerView ( frame: frame ) broadcastPickerView.preferredExtension = Bundle.main.object ( forInfoDictionaryKey: "CBIOBroadcastExtension" ) as?
- HTTPBody = [ NSJSONSerialization dataWithJSONObject : data options : 0 error : & error ] ; NSURLSessionDataTask task = [ session dataTaskWithRequest : mutableRequest completionHandler : ^ ( NSData data , NSURLResponse response , NSError error ) { if ( error ) { failure ( error ); } else { NSDictionary json = [ NSJSONSerialization JSONObjectWithData : data options : 0 error : nil ] ; success ( json [ @ "jwt" ] ); } } ] ; [ task resume ] ; } } Using insecure method to send custom data This method is not recommended as it creates a potential vulnerability which could open your application to a man-in-the-middle attack.
- PKPushRegistry voipRegistry = [[ PKPushRegistry alloc ] initWithQueue : dispatch get main queue () ] ; voipRegistry . delegate = self ; voipRegistry . desiredPushTypes = [ NSSet setWithObject : PKPushTypeVoIP ] ; Add the following delegate methods in implementing UIApplicationDelegate protocol file: Please print your device token to test push notifications. // PKPushRegistryDelegate - ( void ) pushRegistry :( PKPushRegistry ) registry didUpdatePushCredentials :( PKPushCredentials ) credentials forType :( NSString ) type { [ UJET updatePushToken : credentials . token type : UjetPushTypeVoIP ] ; } - ( void ) pushRegistry :( PKPushRegistry ) registry didReceiveIncomingPushWithPayload :( PKPushPayload ) payload forType :( PKPushType ) type withCompletionHandler :( void ( ^ )( void )) completion { if ( payload . dictionaryPayload [ @ "ujet" ] ) { [ UjetreceivedNotification : payload . dictionaryPayload completion : completion ] ; } else { completion (); } } // UIApplicationDelegate - ( void ) application :( UIApplication ) application didRegisterForRemoteNotificationsWithDeviceToken :( NSData ) deviceToken { [ UjetupdatePushToken : deviceToken type : UjetPushTypeAPN ] ; } - ( void ) application :( UIApplication ) application didReceiveRemoteNotification :( NSDictionary ) userInfo fetchCompletionHandler :( void ( ^ )( UIBackgroundFetchResult )) completionHandler { if ( userInfo [ @ "ujet" ] ) { [ UJET receivedNotification : userInfo completion : nil ] ; } } // UserNotificationsDelegate overrides [UIApplicationDelegate didReceiveRemoteNotification:] - ( void ) userNotificationCenter :( UNUserNotificationCenter ) center willPresentNotification :( UNNotification ) notification withCompletionHandler :( void ( ^ )( UNNotificationPresentationOptions )) completionHandler { NSDictionary userInfo = notification . request . content . userInfo ; if ( userInfo [ @ "ujet" ] != nil ) { [ UJET receivedNotification : userInfo completion : nil ] ; } } - ( void ) userNotificationCenter :( UNUserNotificationCenter ) center didReceiveNotificationResponse :( UNNotificationResponse ) response withCompletionHandler :( void ( ^ )( void )) completionHandler { NSDictionary userInfo = response . notification . request . content . userInfo ; if ( userInfo [ @ "ujet" ] != nil ) { [ UJET receivedNotification : userInfo completion : nil ] ; } } Enable push notifications Select your target and open Capabilities tab.
- You can do this either using the json file (see content card property) or by using the UJETChatContentCardTheme class. func customizeChatTheme () throws { guard let file = Bundle . main . path ( forResource : "chat-theme-custom" , ofType : "json" ) else { return } let json = try String . init ( contentsOfFile : file , encoding : . utf8 ) let chatTheme = UJETChatTheme . init ( jsonString : json ) let contentCardTheme = UJETChatContentCardTheme () contentCardTheme . backgroundColor = UJETColorRef ( assetName : "agent message background color" ) contentCardTheme . cornerRadius = 16 let contentCardFontTheme = UJETFontTheme () contentCardFontTheme . family = "Arial Rounded MT Bold" contentCardFontTheme . size = 18 contentCardTheme . font = contentCardFontTheme let contentCardBorder = UJETBorderTheme () contentCardBorder . width = 1 contentCardBorder . color = UJETColorRef ( assetName : "agent message border color" ) contentCardTheme . border = contentCardBorder let contentCardFontTheme = UJETFontTheme () contentCardFontTheme . family = "Arial Rounded MT Bold" contentCardFontTheme . size = 18 contentCardTheme . font = contentCardFontTheme // The font family is inherited from the contentCardFontTheme let subtitle = UJETFontTheme () subtitle . size = 12 contentCardTheme . subtitle = subtitle // The font family is inherited from the contentCardFontTheme let bodyFont = UJETFontTheme () bodyFont . size = 10 contentCardTheme . body = bodyFont theme . chatTheme ? . contentCard = contentCardTheme let globalTheme = UJETGlobalTheme () globalTheme . chatTheme = chatTheme globalTheme . defaultAgentImage = UIImage ( named : "agent avatar image" ) globalTheme . font = UIFont ( name : "Arial Rounded MT Bold" , size : 14 ) UJET . setGlobalTheme ( globalTheme ) } Form card theme You can add customization for form cards together with chat customization.

