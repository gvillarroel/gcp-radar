---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.052Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Apps API user configuration data retrieval"
feature_slug: "apps-api-user-configuration-data-retrieval"
latest_feature_date: "2025-02-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Developer_Resources"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide"
keywords:
  - "apps"
  - "user"
  - "configuration"
  - "retrieval"
  - "can"
  - "now"
  - "used"
  - "retrieve"
---

# Apps API user configuration data retrieval

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

The Apps API can now be used to retrieve user configuration data.

## Extended Definition

The Apps API can now be used to retrieve user configuration data.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Developer_Resources](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Developer_Resources)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide)

## Supporting Pages

### "Developer Resources \_|\_ Google Cloud Contact Center as a Service \_|\_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Developer_Resources](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Developer_Resources)
- Source ID: `site-docs-reference`
- Final score: 127
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example Request URL: http://{​{subdomain}​}.{​{domain}​}/apps/api/v1/wait times Parameters ID Field Name Type Required Description Values Notes 1 menu id id No Response will filter all menus (queues) in that menu's sub-menu, including that menu Root Menu (default) Specific menu If nothing is passed, will return whole queue structure 2 channel type enum No Returns menus of a specific channel voice call chat Optional param 3 menu type enum No Returns menus of specific types ivr menu mobile menu web menu All (default) optional 4 wait[from] int No Returns records if they have a wait greater than the value Validation:Positive Int only 5 wait[to] int No Returns records if they have a wait less than the value Validation:Positive Int only 6 lang enum Yes Queue structure to retrieve the ewt Ex: "en" "es" "fr" "de" "it" "ja" "ko" "pt" "pt-BR" "sv" Responses ID Field Name Type Required Description 1 menu id id yes Foreign key to the /menus manager api endpoint 2 wait INT yes Wait time in minutes 3 Materialized path String Yes Materialized path as found in the /menus api Example http://{​{subdomain}​}.{​{domain}​}apps/api/v1/wait times?lang=en&menu id=10 [ { "menu id" : 10 , "menu type" : "ivr menu" , "voice call" : 120 , "materialized path" : "Subscription" , "logged in agents" : 3 , "available agents" : 0 , "breakthrough agents" : 1 } ] Status Code: 200 Menu ID 10 estimated wait time is 120 seconds (or two minutes) Multiple Mobile Apps (MMA) Overview Allow the mobile (Pro) SDK to be integrated into multiple, distinct mobile apps.
- This can be used for custom support channel EWT displays on web pages or mobile apps outside of the Contact Center AI Platform (CCAI Platform) SDK, or for custom notifications or triggers.
- Important: If you don't need to update your existing app configuration or if you support multiple mobile apps, Google recommends against updating your mobile app configuration.
- At least one identifier (OS or Android) needs to be defined The same identifier can be used for both iOS and Android The same identifier can not be the same across mobile apps.

### "Salesforce integration guide \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- Source ID: `site-docs-reference`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- No Case: ability to connect the CCAI Platform Custom Session object directly to any Salesforce account object, bypassing the need to create a case This builds on two related features: Option to look-up end users in Person Account object (instead of Contact ( default )) Option to leverage our CCAI Platform Session Object which stores all assets and data related to a single session in optimized CCAI Platform Session object Configuration availability requirements The configuration options for Account Lookup and Session Data are only available if the following conditions are met: Account Lookup configuration To configure custom account lookup settings, the following is required: Logged in Agent - at least one agent needs to be logged into a CCAI Platform adapter in Salesforce.
- Case owner and assignment After the default administrator is enabled, the default administrator is used as the owner for the following: Ticket/case and contact creation when a new chat is initiated before an agent is assigned to the chat Voicemail tickets/cases before receiving a callback call Call ticket/cases for abandoned calls (if enabled) Note: If the default user is not configured, CCAI Platform uses a random Agent When a call/chat is transferred: CCAI Platform assigns the case to the agent who the call is transferred to.
- Installation and configuration requirements Salesforce and CCAI Platform access required CCAI Platform: Ask your internal CCAI Platform contact or administrator for a CCAI Platform user account with both adminstrator and agent roles assigned The Admin role gives you access to developer settings The Agent role gives you access to the agent adapter to utilize and test the agent status capability.
- The following configuration options are available: Account Lookup: ability to perform account lookup against any Salesforce end-user based account object Session Data Location : map session data to an Account object (Contact, Person Account, Account, Lead, or Task rather than a Case.

### "iOS SDK guide \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide)
- Source ID: `site-docs-reference`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- For example, if the user selected Spanish Cuba as the language in the device and the app does not support Spanish Cuba but supports parent dialect Spanish, then Spanish language will be used.
- PKPushRegistry voipRegistry = [[ PKPushRegistry alloc ] initWithQueue : dispatch get main queue () ] ; voipRegistry . delegate = self ; voipRegistry . desiredPushTypes = [ NSSet setWithObject : PKPushTypeVoIP ] ; Add the following delegate methods in implementing UIApplicationDelegate protocol file: Please print your device token to test push notifications. // PKPushRegistryDelegate - ( void ) pushRegistry :( PKPushRegistry ) registry didUpdatePushCredentials :( PKPushCredentials ) credentials forType :( NSString ) type { [ UJET updatePushToken : credentials . token type : UjetPushTypeVoIP ] ; } - ( void ) pushRegistry :( PKPushRegistry ) registry didReceiveIncomingPushWithPayload :( PKPushPayload ) payload forType :( PKPushType ) type withCompletionHandler :( void ( ^ )( void )) completion { if ( payload . dictionaryPayload [ @ "ujet" ] ) { [ UjetreceivedNotification : payload . dictionaryPayload completion : completion ] ; } else { completion (); } } // UIApplicationDelegate - ( void ) application :( UIApplication ) application didRegisterForRemoteNotificationsWithDeviceToken :( NSData ) deviceToken { [ UjetupdatePushToken : deviceToken type : UjetPushTypeAPN ] ; } - ( void ) application :( UIApplication ) application didReceiveRemoteNotification :( NSDictionary ) userInfo fetchCompletionHandler :( void ( ^ )( UIBackgroundFetchResult )) completionHandler { if ( userInfo [ @ "ujet" ] ) { [ UJET receivedNotification : userInfo completion : nil ] ; } } // UserNotificationsDelegate overrides [UIApplicationDelegate didReceiveRemoteNotification:] - ( void ) userNotificationCenter :( UNUserNotificationCenter ) center willPresentNotification :( UNNotification ) notification withCompletionHandler :( void ( ^ )( UNNotificationPresentationOptions )) completionHandler { NSDictionary userInfo = notification . request . content . userInfo ; if ( userInfo [ @ "ujet" ] != nil ) { [ UJET receivedNotification : userInfo completion : nil ] ; } } - ( void ) userNotificationCenter :( UNUserNotificationCenter ) center didReceiveNotificationResponse :( UNNotificationResponse ) response withCompletionHandler :( void ( ^ )( void )) completionHandler { NSDictionary userInfo = response . notification . request . content . userInfo ; if ( userInfo [ @ "ujet" ] != nil ) { [ UJET receivedNotification : userInfo completion : nil ] ; } } Enable push notifications Select your target and open Capabilities tab.
- In the delegate method, make sure to only call [UJET start] when the URL paths and parameters in the universal link or custom URL are specific for CCAI Platform. - ( BOOL ) application :( UIApplication ) app continueUserActivity :( nonnull NSUserActivity ) userActivity restorationHandler :( nonnull void ( ^ )( NSArray Nullable )) restorationHandler { ... if ( [ NSUserActivityTypeBrowsingWeb isEqualToString : userActivity . activityType ] ) { NSURL url = userActivity . webpageURL ; NSArray availableSchema = @ [ @ "your-company" , // custom URL scheme @ "https" // universal link ] ; NSArray availableHostAndPath = @ [ @ "ujet" , // custom URL scheme @ "your-comany.com/ujet" // universal link ] ; if ( ![ availableSchema containsObject : url . scheme ] ) { return NO ; } NSString hostAndPath = [ NSString stringWithFormat : @ "%@%@" , url . host , url . path ] ; if ( ![ availableHostAndPath containsObject : hostAndPath ] ) { return NO ; } // your-company://ujet?call id={call id}&nonce={nonce} // https://your-company.com/ujet?call id={call id}&nonce={nonce} NSURLComponents urlComponents = [ NSURLComponents componentsWithURL : url resolvingAgainstBaseURL : NO ] ; NSArray queryItems = urlComponents . queryItems ; NSString callId = [ self valueForKey : @ "call id" fromQueryItems : queryItems ] ; // validate call id if ( ![ self isValidCallId : callId ] ) { return NO ; } NSString nonce = [ self valueForKey : @ "nonce" fromQueryItems : queryItems ] ; UJETStartOptions options = [[ UJETStartOptions alloc ] initWithCallId : callId nonce : nonce ] ; [ UJET startWithOptions : options ] ; } ... } If your app adopts UIWindowSceneDelegate , then add this code snippet: class SceneDelegate: UIResponder, UIWindowSceneDelegate { var window: UIWindow? func scene ( scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions ) { //if app is called with universal Link and started from cold if connectionOptions.urlContexts.first ! = nil { self.scene ( scene, openURLContexts: connectionOptions.urlContexts ) } guard let = ( scene as?
- In UJETObject.h from example project: @import UJETKit ; @interface UJETObject : NSObject <UJETDelegate> Implement signPayload : payloadType : success: failure: delegate method. - ( void ) signPayload: ( NSDictionary ) payload payloadType: ( UjetPayloadType ) payloadType success: ( void ( ^ )( NSString )) success failure: ( void ( ^ )( NSError )) failure { if ( payloadType == UjetPayloadAuthToken ) { [ self signAuthTokenInLocal:payload success:success failure:failure ] ; } } - ( void ) signAuthTokenInLocal: ( NSDictionary ) payload success: ( void ( ^ )( NSString )) success failure: ( void ( ^ )( NSError )) failure { NSMutableDictionary payloadData = [ payload mutableCopy ] ; NSDictionary userData = [[ NSUserDefaults standardUserDefaults ] objectForKey:@ "user-data" ] ; [ payloadData addEntriesFromDictionary:userData ] ; payloadData [ @ "iat" ] = [ NSNumber numberWithDouble: [[ NSDate date ] timeIntervalSince1970 ]] ; // required payloadData [ @ "exp" ] = [ NSNumber numberWithDouble: ([[ NSDate date ] timeIntervalSince1970 ] + 600 )] ; // required NSString signedToken = [ self encodeJWT:payloadData ] ; if ( signedToken.length > 0 ) { success ( signedToken ) ; } else { NSDictionary userInfo = @ { NSLocalizedDescriptionKey: @ "Failed to sign token" } ; NSError error = [ NSError errorWithDomain:@ "ExampleApp" code:0 userInfo:userInfo ] ; failure ( error ) ; } } - ( NSString ) encodeJWT: ( NSDictionary ) payload { id<JWTAlgorithm> algorithm = [ JWTAlgorithmHSBase algorithm384 ] ; NSString secret = NSBundle.mainBundle.infoDictionary [ @ "UJETCompanySecret" ] ; return [ JWTBuilder encodePayload:payload ] .secret () .algorithm ( algorithm ) .encode ; } We strongly recommend signing the payload from your application server, not in the client.

