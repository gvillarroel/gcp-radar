---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.059Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Agent authentication status marking"
feature_slug: "agent-authentication-status-marking"
latest_feature_date: "2024-11-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide"
keywords:
  - "agent"
  - "authentication"
  - "status"
  - "marking"
  - "agents"
  - "can"
  - "click"
  - "icon"
---

# Agent authentication status marking

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Agents can click the authentication icon in Agent Adapter to mark a customer as authenticated or unauthenticated.

## Extended Definition

Agents can click the authentication icon in Agent Adapter to mark a customer as authenticated or unauthenticated.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide)

## Supporting Pages

### "iOS SDK guide \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide)
- Source ID: `site-docs-reference`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- Invoke the dismissed closure on click of the deny button. class CobrowseAlertProvider: NSObject, UJETCobrowseAlertProvider { func cobrowseSessionInitializationAlert ( consentStatus: @escaping ( Bool ) -> Void ) -> UIViewController? { let customAlertViewController = CustomAlertViewController () customAlertViewController.consentStatus = consentStatus return customAlertViewController } func cobrowseSessionRequestAlert ( consentStatus: @escaping ( Bool ) -> Void ) -> UIViewController? { // Same as cobrowseSessionInitializationAlert } func cobrowseRemoteRequestAlert ( consentStatus: @escaping ( Bool ) -> Void ) -> UIViewController? { // Same as cobrowseSessionInitializationAlert } func cobrowseFullDeviceRequestAlert ( dismissed: @escaping () -> Void ) -> UIViewController? { let customAlertViewController = CustomFullDeviceAlertViewController () cobrowseSessionAlertViewController.dismissed = dismissed return customAlertViewController } func cobrowseSessionEndAlert ( consentStatus: @escaping ( Bool ) -> Void ) -> UIViewController? { // Same as cobrowseSessionInitializationAlert } } The custom view controller should have a closure to pass the consent status to the SDK. class CustomAlertViewController: UIViewController { var consentStatus: (( Bool ) -> Void ) ? @IBAction func allowButtonClicked ( sender: Any ) { dismiss ( animated: true ) {[ weak self ] in self?.consentStatus? ( true ) } } @IBAction func denyButtonClicked ( sender: Any ) { dismiss ( animated: true ) {[ weak self ] in self?.consentStatus? ( false ) } } } The custom view controller for full device request alert should have RPSystemBroadcastPickerView and a closure to pass the dismiss status to the SDK. class CustomFullDeviceAlertViewController: UIViewController { var broadcastPickerView: RPSystemBroadcastPickerView! var dismissed: (() -> Void ) ? override func viewDidLoad () { super.viewDidLoad () let frame = CGRect ( x: x, y: y, width: 50 , height: 50 ) // Set your own value broadcastPickerView = RPSystemBroadcastPickerView ( frame: frame ) broadcastPickerView.preferredExtension = Bundle.main.object ( forInfoDictionaryKey: "CBIOBroadcastExtension" ) as?
- UJETEventEmailDidClick Queue Menu Data UJETEventEmailDidSubmit Queue Menu Data has attachment: (NSNumber) @YES, @NO UJETEventSessionViewDidAppear type: @"call", @"chat" timestamp: (NSString) ISO 8601 UJETEventSessionViewDidDisappear type: @"call", @"chat" timestamp: (NSString) ISO 8601 UJETEventSessionDidCreate Session Data UJETEventSessionDidEnd Session Data agent name: (NSString) null if agent didn't join duration: (NSNumber) only for call ended by: (NSString) type=call: @"agent", @"end user" type=chat: @"agent", @"end user", @"timeout", @"dismissed" UJETEventSdkDidTerminate UJETEventPostSessionOptInDidSelected opt in selected: (NSString) @"Yes", @"No" Event Data Metadata application: @"iOS" app id: (NSString) bundle identifier app version: (NSString) company: (NSString) subdomain device model: (NSString) device version: (NSString) sdk version: (NSString) timestamp: (NSString) ISO 8601 Queue Menu Data Metadata menu id: NSString menu key: NSString, nullable menu name: NSString menu path : NSString Session Data Queue Menu Data session id: NSString type: @"call", @"chat" end user identifier: NSString Setup Screen Share If you want to use Screen Share feature, then integrate UJETCobrowseKit.xcframework .
- Customize Flow Disconnect CCAI Platform for handling Host app events // CCAI Platform is connected ... // An event has come [ UJET disconnect : ^ { // Handle an event } ] ; Postpone CCAI Platform incoming call or chat Implement a delegate method for handling incoming events - ( BOOL ) shouldConnectUjetIncoming :( NSString ) identifier forType :( UjetIncomingType ) type { if ( weDoingSomething ) { // save identifier and type return NO ; // postpone } else { return YES ; } } Connect postponed event [ UJET connect : identifier forType : UjetIncomingTypeCall ] ; Setup Deep link This enables agents on PSTN calls to use smart actions by SMS for both when an end user has or does not have the app.
- And set UJETGlobalOptions.cobrowseKey property. swift let options = UJETGlobal Options () options . cobrowseKey = cobrowseKey UJET . setGlobalOptions ( options ) Full device Screen Sharing (optional) Full device screen sharing allows your support agents to view screens from applications outside of your own.

### "Chat Settings and Features \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- Source ID: `site-docs-reference`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- Reply back to this message to begin a new chat." OR "ujet message chat dismissed": "Welcome Back!<br>Do you have the same issue or a new issue?" "ujet chat new": "New" "ujet chat same": "Same" Mobile SDKs The string file names for customizing this UI are broken down below: ujet chat footer view message dismissed: "Welcome back!\nWe have not heard from you in a while.\nDo you have the same issue or a new issue?" OR ujet chat footer view message timeout: "Your previous chat has ended, please click to start a new chat." ujet common same: "Same" ujet common new: "New" Configure rich messaging and file attachments You can configure CCAI Platform so that agents can use rich messaging, emojis, and file attachments in the chat adapter.
- Chat timeout timer restarts when: Chat is assigned to an agent After each message sent by the consumer If a reply isn't made to the chat within the set time frame, the chat will time out and end with one of the following chat statuses: Timeout Agent No Message Timeout End User No Message Timeout Agent Stopped End User Stopped Click Set Chat Details to save.
- Allowing agents to proactively prepare for the consumer's incoming queries by performing actions such as retrieving information from the customer's account or checking on the status of an order before the message is sent.
- Agent status and availability To prevent agents from receiving Auto Answer chats before they're ready, Admins can set an unavailable default status for agents who have just logged in.

### "Android SDK guide \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/android-sdk-guide)
- Source ID: `site-docs-reference`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- Boolean true UjetOption ujetOption = new UjetOption.Builder () .setLogLevel ( Log.INFO ) .setDefaultLanguage ( "en" ) .setFallbackPhoneNumber ( "+18001112222" ) .setUncaughtExceptionHandlerEnabled ( false ) .setNetworkSensitivity ( 0 ) .setDarkModeEnabled ( true ) .setShowSingleChannelEnabled ( true ) .setAutoMinimizeCallView ( true ) .setShowAgentIconBorderEnabled ( true ) .setStaticFontSizeInPickerView ( true ) .setHideMediaAttachmentInChat ( true ) .setIgnoreReadPhoneStatePermission ( true ) .setCobrowseLicenseKey ( "COBROWSE IO LICENSE KEY HERE" ) .setCobrowseURL ( "COBROWSE IO API URL HERE" ) .setCustomChatHeaderTitle ( "CHAT HEADER TITLE TEXT" ) .setUjetStylesOptions ( new UjetStylesOptions.Builder () .setChatQuickReplyButtonsStyle ( QuickReplyButtonsStyle.INDIVIDUAL ) .setChatStyles ( new ChatStyles ( ... )) // See Content Cards Theme item .build () ) .setBlockChatTerminationByEndUser ( true ) .setHideStatusBar ( true ) .setLoadingSpinnerDrawableRes ( R.drawable.RESOURCE NAME ) .setLandscapeOrientationDisabled ( true ) .setShowCsatSkipButton ( false ) .setHideDownloadChatTranscript ( 0 ) // 0 to 3 .
- Virtual agent quick replies are grouped together by default but if you want to display them individually, you can use this config option to set QuickReplyButtonsStyle.INDIVIDUAL UjetStylesOptions QuickReplyButtonsStyle.GROUPED Customize chat UI various attributes Config option to customize various attributes such as the font, background color, icon, etc.
- String ticketId = "TICKET ID" ; UjetStartOptions ujetStartOptions = new UjetStartOptions.Builder () .setTicketId ( ticketId ) .build () ; Ujet.start ( ujetStartOptions ) ; Send custom data to your CRM Custom data can be sent to support agents and will appear in the support ticket for the incoming call/chat.
- Boolean. false Agent Icon Border Enabled Config option to show or remove a circular border around the agent icon.

