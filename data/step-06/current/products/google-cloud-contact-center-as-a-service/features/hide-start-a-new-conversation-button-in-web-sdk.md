---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.034Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Hide Start a new conversation button in Web SDK"
feature_slug: "hide-start-a-new-conversation-button-in-web-sdk"
latest_feature_date: "2025-10-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide"
keywords:
  - "hide"
  - "start"
  - "conversation"
  - "button"
  - "web"
  - "sdk"
  - "can"
  - "after"
---

# Hide Start a new conversation button in Web SDK

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

The web SDK can hide the Start a new conversation button after a chat session ends.

## Extended Definition

The web SDK can hide the Start a new conversation button after a chat session ends.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide)

## Supporting Pages

### "Chat Settings and Features \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- Source ID: `site-docs-reference`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- Dismissed chat details Dismissal settings can be set globally or per-queue When chats have been dismissed, they do not accrue wait time For a chat to be dismissed, both the consumer and agent have to have sent at least one message The dismiss eligibility timer starts from the latest message from an agent Only inbound chats can be dismissed When chats are dismissed and later reactivated, a consumer has to send at least one message afterward before the chat is eligible to be dismissed again Dismissed chats are ultimately ended when the chat timeout duration is met When chats are dismissed, activities are added to the chat transcript Chat Flow CCAI Platform portal configuration Dismissing chats - global setting A global configuration for all chat channels can be configured in Chat Settings.
- Feature benefits For Managers and Admins Automatically remind agents to respond promptly to conversations For Agents Visually shows which chat needs their attention first For end-users Less waiting time and quicker resolution time Feature details The response timer starts when the agent is assigned and the consumer has sent a message and applies even if an agent has not yet sent a message If the agent responds, the counter will not begin again until the consumer replies.
- Chat timeout timer restarts when: Chat is assigned to an agent After each message sent by the consumer If a reply isn't made to the chat within the set time frame, the chat will time out and end with one of the following chat statuses: Timeout Agent No Message Timeout End User No Message Timeout Agent Stopped End User Stopped Click Set Chat Details to save.
- Consumer UI examples after chat is dismissed but not timed-out Web: Mobile: When Same is selected, the consumer is placed back in the same chat window waiting for the chat to be re-assigned to the next available agent: If the consumer selects New , they are brought back to the start of the queue menu selection screen.

### "iOS SDK guide \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide)
- Source ID: `site-docs-reference`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- The following code shows how to configure the download transcript button: typedef NS OPTIONS ( NSUInteger, UJETChatDownloadTranscriptVisibilityOptions ) { UJETChatDownloadTranscriptVisibilityOptionsShowAll = 0 , UJETChatDownloadTranscriptVisibilityOptionsHideFromOptionsMenu = 1 << 0 , UJETChatDownloadTranscriptVisibilityOptionsHideFromPostChatScreen = 1 << 1 , UJETChatDownloadTranscriptVisibilityOptionsHideAll = UJETChatDownloadTranscriptVisibilityOptionsHideFromOptionsMenu UJETChatDownloadTranscriptVisibilityOptionsHideFromPostChatScreen } ; @property ( nonatomic, assign ) UJETChatDownloadTranscriptVisibilityOptions transcriptVisibilityOptions ; PSTN Fallback We provide PSTN fallback for several situations: Mobile network is offline.
- UJETGlobalOptions options = [ UJETGlobalOptions new ] ; options.fallbackPhoneNumber = @ "+18001112222" ; options.preferredLanguage = @ "en" ; [ UJET setGlobalOptions:options ] ; Show or hide the download transcript button You can configure the SDK to show or hide the download transcript button in the chat options menu and in the post-chat screen.
- Invoke the dismissed closure on click of the deny button. class CobrowseAlertProvider: NSObject, UJETCobrowseAlertProvider { func cobrowseSessionInitializationAlert ( consentStatus: @escaping ( Bool ) -> Void ) -> UIViewController? { let customAlertViewController = CustomAlertViewController () customAlertViewController.consentStatus = consentStatus return customAlertViewController } func cobrowseSessionRequestAlert ( consentStatus: @escaping ( Bool ) -> Void ) -> UIViewController? { // Same as cobrowseSessionInitializationAlert } func cobrowseRemoteRequestAlert ( consentStatus: @escaping ( Bool ) -> Void ) -> UIViewController? { // Same as cobrowseSessionInitializationAlert } func cobrowseFullDeviceRequestAlert ( dismissed: @escaping () -> Void ) -> UIViewController? { let customAlertViewController = CustomFullDeviceAlertViewController () cobrowseSessionAlertViewController.dismissed = dismissed return customAlertViewController } func cobrowseSessionEndAlert ( consentStatus: @escaping ( Bool ) -> Void ) -> UIViewController? { // Same as cobrowseSessionInitializationAlert } } The custom view controller should have a closure to pass the consent status to the SDK. class CustomAlertViewController: UIViewController { var consentStatus: (( Bool ) -> Void ) ? @IBAction func allowButtonClicked ( sender: Any ) { dismiss ( animated: true ) {[ weak self ] in self?.consentStatus? ( true ) } } @IBAction func denyButtonClicked ( sender: Any ) { dismiss ( animated: true ) {[ weak self ] in self?.consentStatus? ( false ) } } } The custom view controller for full device request alert should have RPSystemBroadcastPickerView and a closure to pass the dismiss status to the SDK. class CustomFullDeviceAlertViewController: UIViewController { var broadcastPickerView: RPSystemBroadcastPickerView! var dismissed: (() -> Void ) ? override func viewDidLoad () { super.viewDidLoad () let frame = CGRect ( x: x, y: y, width: 50 , height: 50 ) // Set your own value broadcastPickerView = RPSystemBroadcastPickerView ( frame: frame ) broadcastPickerView.preferredExtension = Bundle.main.object ( forInfoDictionaryKey: "CBIOBroadcastExtension" ) as?
- In the delegate method, make sure to only call [UJET start] when the URL paths and parameters in the universal link or custom URL are specific for CCAI Platform. - ( BOOL ) application :( UIApplication ) app continueUserActivity :( nonnull NSUserActivity ) userActivity restorationHandler :( nonnull void ( ^ )( NSArray Nullable )) restorationHandler { ... if ( [ NSUserActivityTypeBrowsingWeb isEqualToString : userActivity . activityType ] ) { NSURL url = userActivity . webpageURL ; NSArray availableSchema = @ [ @ "your-company" , // custom URL scheme @ "https" // universal link ] ; NSArray availableHostAndPath = @ [ @ "ujet" , // custom URL scheme @ "your-comany.com/ujet" // universal link ] ; if ( ![ availableSchema containsObject : url . scheme ] ) { return NO ; } NSString hostAndPath = [ NSString stringWithFormat : @ "%@%@" , url . host , url . path ] ; if ( ![ availableHostAndPath containsObject : hostAndPath ] ) { return NO ; } // your-company://ujet?call id={call id}&nonce={nonce} // https://your-company.com/ujet?call id={call id}&nonce={nonce} NSURLComponents urlComponents = [ NSURLComponents componentsWithURL : url resolvingAgainstBaseURL : NO ] ; NSArray queryItems = urlComponents . queryItems ; NSString callId = [ self valueForKey : @ "call id" fromQueryItems : queryItems ] ; // validate call id if ( ![ self isValidCallId : callId ] ) { return NO ; } NSString nonce = [ self valueForKey : @ "nonce" fromQueryItems : queryItems ] ; UJETStartOptions options = [[ UJETStartOptions alloc ] initWithCallId : callId nonce : nonce ] ; [ UJET startWithOptions : options ] ; } ... } If your app adopts UIWindowSceneDelegate , then add this code snippet: class SceneDelegate: UIResponder, UIWindowSceneDelegate { var window: UIWindow? func scene ( scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions ) { //if app is called with universal Link and started from cold if connectionOptions.urlContexts.first ! = nil { self.scene ( scene, openURLContexts: connectionOptions.urlContexts ) } guard let = ( scene as?

### "Android SDK guide \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide)
- Source ID: `site-docs-reference`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- Boolean false Hide start new conversation inline button in chat Config option to show or hide the start new conversation inline button in the chat UI.
- 0 = Show everywhere, 1 = Hide from the options menu, 2 = Hide from the post chat screen, 3 = Hide from both the options menu and the post chat screen. .setPushNotificationsAllowed ( true ) .build () ; //The following customizes various attributes in chat UI ChatStyles chatStyles = new ChatStyles () ; chatStyles.setBackButton ( new BackButtonStyle ( false, "ujet agent sample" )) ; //customizes back button styles chatStyles.setHeader ( ... ) ; //customizes chat header styles chatStyles.setAgentMessageBubbles ( ... ) ; //customizes agent messages styles chatStyles.setConsumerMessageBubbles ( ... ) ; //customizes consumer messages styles chatStyles.setSystemMessages ( ... ) ; //customizes system messages styles chatStyles.setEndChatButton ( ... ) ; //customizes end chat button styles chatStyles.setTimeStamps ( ... ) ; //customizes timestamp styles chatStyles.setUserInputBar ( ... ) ; //customizes user input bar styles UjetOption ujetOption = new UjetOption.Builder () .setUjetStylesOptions ( new UjetStylesOptions.Builder () .setChatStyles ( chatStyles ) .build () ) //The following customizes various attributes in chat UI using json file.
- Boolean true UjetOption ujetOption = new UjetOption.Builder () .setLogLevel ( Log.INFO ) .setDefaultLanguage ( "en" ) .setFallbackPhoneNumber ( "+18001112222" ) .setUncaughtExceptionHandlerEnabled ( false ) .setNetworkSensitivity ( 0 ) .setDarkModeEnabled ( true ) .setShowSingleChannelEnabled ( true ) .setAutoMinimizeCallView ( true ) .setShowAgentIconBorderEnabled ( true ) .setStaticFontSizeInPickerView ( true ) .setHideMediaAttachmentInChat ( true ) .setIgnoreReadPhoneStatePermission ( true ) .setCobrowseLicenseKey ( "COBROWSE IO LICENSE KEY HERE" ) .setCobrowseURL ( "COBROWSE IO API URL HERE" ) .setCustomChatHeaderTitle ( "CHAT HEADER TITLE TEXT" ) .setUjetStylesOptions ( new UjetStylesOptions.Builder () .setChatQuickReplyButtonsStyle ( QuickReplyButtonsStyle.INDIVIDUAL ) .setChatStyles ( new ChatStyles ( ... )) // See Content Cards Theme item .build () ) .setBlockChatTerminationByEndUser ( true ) .setHideStatusBar ( true ) .setLoadingSpinnerDrawableRes ( R.drawable.RESOURCE NAME ) .setLandscapeOrientationDisabled ( true ) .setShowCsatSkipButton ( false ) .setHideDownloadChatTranscript ( 0 ) // 0 to 3 .
- Twilio SDK upgrade requirements Requires Twilio SDK to be following specific versions if the Android SDK is integrated using our package directly, otherwise this can be ignored. // Twilio VoIP SDK api 'com.twilio:voice-android:6.1.1' // Twilio Conversations SDK api 'com.twilio:conversations-android:3.1.0' In addition, Proguard rules are already included in the Android SDK to ensure that the Twilio Programmable Voice library is not removed by ProGuard and can be used to troubleshoot in case ProGuard accidentally removes the library. -keep class com.twilio. { ; } -keep class tvo.webrtc. { ; } -dontwarn tvo.webrtc. -keep class com.twilio.voice. { ; } -keepattributes InnerClasses To support latest Twilio versions, starting with the Android SDK version 0.34.0, SDK is no longer binary compatible with applications that target Java 7.

