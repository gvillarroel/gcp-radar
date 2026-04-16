---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.039Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Mid-session authentication"
feature_slug: "mid-session-authentication"
latest_feature_date: "2025-10-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/mid-session-authentication-apps-api"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide"
keywords:
  - "mid"
  - "session"
  - "authentication"
  - "all"
  - "crm"
  - "types"
---

# Mid-session authentication

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Mid-session authentication is supported for all CRM types.

## Extended Definition

Mid-session authentication is supported for all CRM types.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/mid-session-authentication-apps-api](https://docs.cloud.google.com/contact-center/ccai-platform/docs/mid-session-authentication-apps-api)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide)

## Supporting Pages

### "Mid-Session authentication by API \_|\_ Google Cloud Contact Center as a\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/mid-session-authentication-apps-api](https://docs.cloud.google.com/contact-center/ccai-platform/docs/mid-session-authentication-apps-api)
- Source ID: `site-docs-reference-required-5`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Google Cloud CCaaS User Guides Send feedback Mid-Session authentication by API Stay organized with collections Save and categorize content based on your preferences.
- Upon successful authentication, you can update the end user identifier to link the session to the verified end-user.
- This page explains how to use call and chat API endpoints for mid-session authentication in your SDK channels.
- 123-456-7890 API samples Sample API response Success response sample: 202 Accepted { "message" : "accepted" } Failure response samples Missing Parameters 400 { "message" : "param is missing or the value is empty: comm type" } 400 { "message" : "param is missing or the value is empty: identifier" } Referencing a comm type other than call or chat 404 { "message" : "Not Found" } Session not active 400 { "message" : "Call is already ended" } 400 { "message" : "Chat is already ended" } Unsupported CRM request 400 { "message" : "Unsupported CRM request" } Duplicate request 400 { "message" : "Duplicate request: Please wait for the interval to expire" } API request sample Call Comm Type POST https://<subdomain>.<domain>/apps/api/v1/calls/:call id/end user Content-Type: application/json Authorization: Bearer <your access token> { "identifier" : "unique external id" , "name" : "John Doe" , "email" : "johndoe@example.com" , "phone" : "123-456-7890" } Chat Comm Type POST https://<subdomain>.<domain>/apps/api/v1/chats/:chat id/end user Content-Type: application/json Authorization: Bearer <your access token> { "identifier" : "unique external id" , "name" : "Jane Smith" , "email" : "janesmith@example.com" , "phone" : "098-765-4321" } Apps API Documentation For additional apps API endpoints, see Apps API Publication .

### "Android SDK guide \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide)
- Source ID: `site-docs-reference`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- If Ujet.init() is not called and the Android SDK is launched, the Android SDK won't work properly and might cause a crash. public class ExampleApplication extends Application implements UjetRequestListener { @Override public void onCreate () { super.onCreate () ; Ujet.init ( this ) ; } // ... } End-user authentication The end user is the consumer who contacts your customer support team through the application.
- Ujet.disconnect ( new UjetResponseCallback () { @Override public void onFinished () { // onFinished () is triggered after CCAI Platform disconnects the session. finish () ; // Finishes the activity. } }) ; Clear end user data from cache You are responsible for clearing the cache when end user related data has been updated or changed from your app.
- AuthToken , new UjetTokenCallback () { @Override public void onSuccess ( @Nullable final String authToken ) { tokenCallback . onToken ( authToken ); } @Override public void onFailure ( @Nullable final String authToken ) { tokenCallback . onError (); } }); } } } For more information, see end user authentication .
- Declare foreground services used by the Android SDK Google introduced foreground service types in Android 14 and mandated it to specify while starting foreground services, according to https://developer.android.com/about/versions/14/changes/fgs-types-required#remote-messaging.

### "iOS SDK guide \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide)
- Source ID: `site-docs-reference`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- Note: This error isn't triggered when the network isn't available during a chat or call session or a rate screen. authenticationError 100 An unexpected error occurred during authentication. authenticationJwtError 101 An unexpected error occurred during JWT validation—for example, a parsing error. voipConnectionError 1000 Failed to establish a connection to the VoIP provider.
- PKPushRegistry voipRegistry = [[ PKPushRegistry alloc ] initWithQueue : dispatch get main queue () ] ; voipRegistry . delegate = self ; voipRegistry . desiredPushTypes = [ NSSet setWithObject : PKPushTypeVoIP ] ; Add the following delegate methods in implementing UIApplicationDelegate protocol file: Please print your device token to test push notifications. // PKPushRegistryDelegate - ( void ) pushRegistry :( PKPushRegistry ) registry didUpdatePushCredentials :( PKPushCredentials ) credentials forType :( NSString ) type { [ UJET updatePushToken : credentials . token type : UjetPushTypeVoIP ] ; } - ( void ) pushRegistry :( PKPushRegistry ) registry didReceiveIncomingPushWithPayload :( PKPushPayload ) payload forType :( PKPushType ) type withCompletionHandler :( void ( ^ )( void )) completion { if ( payload . dictionaryPayload [ @ "ujet" ] ) { [ UjetreceivedNotification : payload . dictionaryPayload completion : completion ] ; } else { completion (); } } // UIApplicationDelegate - ( void ) application :( UIApplication ) application didRegisterForRemoteNotificationsWithDeviceToken :( NSData ) deviceToken { [ UjetupdatePushToken : deviceToken type : UjetPushTypeAPN ] ; } - ( void ) application :( UIApplication ) application didReceiveRemoteNotification :( NSDictionary ) userInfo fetchCompletionHandler :( void ( ^ )( UIBackgroundFetchResult )) completionHandler { if ( userInfo [ @ "ujet" ] ) { [ UJET receivedNotification : userInfo completion : nil ] ; } } // UserNotificationsDelegate overrides [UIApplicationDelegate didReceiveRemoteNotification:] - ( void ) userNotificationCenter :( UNUserNotificationCenter ) center willPresentNotification :( UNNotification ) notification withCompletionHandler :( void ( ^ )( UNNotificationPresentationOptions )) completionHandler { NSDictionary userInfo = notification . request . content . userInfo ; if ( userInfo [ @ "ujet" ] != nil ) { [ UJET receivedNotification : userInfo completion : nil ] ; } } - ( void ) userNotificationCenter :( UNUserNotificationCenter ) center didReceiveNotificationResponse :( UNNotificationResponse ) response withCompletionHandler :( void ( ^ )( void )) completionHandler { NSDictionary userInfo = response . notification . request . content . userInfo ; if ( userInfo [ @ "ujet" ] != nil ) { [ UJET receivedNotification : userInfo completion : nil ] ; } } Enable push notifications Select your target and open Capabilities tab.
- Invoke the dismissed closure on click of the deny button. class CobrowseAlertProvider: NSObject, UJETCobrowseAlertProvider { func cobrowseSessionInitializationAlert ( consentStatus: @escaping ( Bool ) -> Void ) -> UIViewController? { let customAlertViewController = CustomAlertViewController () customAlertViewController.consentStatus = consentStatus return customAlertViewController } func cobrowseSessionRequestAlert ( consentStatus: @escaping ( Bool ) -> Void ) -> UIViewController? { // Same as cobrowseSessionInitializationAlert } func cobrowseRemoteRequestAlert ( consentStatus: @escaping ( Bool ) -> Void ) -> UIViewController? { // Same as cobrowseSessionInitializationAlert } func cobrowseFullDeviceRequestAlert ( dismissed: @escaping () -> Void ) -> UIViewController? { let customAlertViewController = CustomFullDeviceAlertViewController () cobrowseSessionAlertViewController.dismissed = dismissed return customAlertViewController } func cobrowseSessionEndAlert ( consentStatus: @escaping ( Bool ) -> Void ) -> UIViewController? { // Same as cobrowseSessionInitializationAlert } } The custom view controller should have a closure to pass the consent status to the SDK. class CustomAlertViewController: UIViewController { var consentStatus: (( Bool ) -> Void ) ? @IBAction func allowButtonClicked ( sender: Any ) { dismiss ( animated: true ) {[ weak self ] in self?.consentStatus? ( true ) } } @IBAction func denyButtonClicked ( sender: Any ) { dismiss ( animated: true ) {[ weak self ] in self?.consentStatus? ( false ) } } } The custom view controller for full device request alert should have RPSystemBroadcastPickerView and a closure to pass the dismiss status to the SDK. class CustomFullDeviceAlertViewController: UIViewController { var broadcastPickerView: RPSystemBroadcastPickerView! var dismissed: (() -> Void ) ? override func viewDidLoad () { super.viewDidLoad () let frame = CGRect ( x: x, y: y, width: 50 , height: 50 ) // Set your own value broadcastPickerView = RPSystemBroadcastPickerView ( frame: frame ) broadcastPickerView.preferredExtension = Bundle.main.object ( forInfoDictionaryKey: "CBIOBroadcastExtension" ) as?
- In the delegate method, make sure to only call [UJET start] when the URL paths and parameters in the universal link or custom URL are specific for CCAI Platform. - ( BOOL ) application :( UIApplication ) app continueUserActivity :( nonnull NSUserActivity ) userActivity restorationHandler :( nonnull void ( ^ )( NSArray Nullable )) restorationHandler { ... if ( [ NSUserActivityTypeBrowsingWeb isEqualToString : userActivity . activityType ] ) { NSURL url = userActivity . webpageURL ; NSArray availableSchema = @ [ @ "your-company" , // custom URL scheme @ "https" // universal link ] ; NSArray availableHostAndPath = @ [ @ "ujet" , // custom URL scheme @ "your-comany.com/ujet" // universal link ] ; if ( ![ availableSchema containsObject : url . scheme ] ) { return NO ; } NSString hostAndPath = [ NSString stringWithFormat : @ "%@%@" , url . host , url . path ] ; if ( ![ availableHostAndPath containsObject : hostAndPath ] ) { return NO ; } // your-company://ujet?call id={call id}&nonce={nonce} // https://your-company.com/ujet?call id={call id}&nonce={nonce} NSURLComponents urlComponents = [ NSURLComponents componentsWithURL : url resolvingAgainstBaseURL : NO ] ; NSArray queryItems = urlComponents . queryItems ; NSString callId = [ self valueForKey : @ "call id" fromQueryItems : queryItems ] ; // validate call id if ( ![ self isValidCallId : callId ] ) { return NO ; } NSString nonce = [ self valueForKey : @ "nonce" fromQueryItems : queryItems ] ; UJETStartOptions options = [[ UJETStartOptions alloc ] initWithCallId : callId nonce : nonce ] ; [ UJET startWithOptions : options ] ; } ... } If your app adopts UIWindowSceneDelegate , then add this code snippet: class SceneDelegate: UIResponder, UIWindowSceneDelegate { var window: UIWindow? func scene ( scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions ) { //if app is called with universal Link and started from cold if connectionOptions.urlContexts.first ! = nil { self.scene ( scene, openURLContexts: connectionOptions.urlContexts ) } guard let = ( scene as?

