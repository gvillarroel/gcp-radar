---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.127Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "ServiceNow native CRM integration"
feature_slug: "servicenow-native-crm-integration"
latest_feature_date: "2023-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features"
keywords:
  - "servicenow"
  - "native"
  - "crm"
  - "integration"
  - "available"
  - "fully"
  - "integrated"
  - "embedded"
---

# ServiceNow native CRM integration

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

ServiceNow is available as a native fully integrated CRM with embedded agent adapters.

## Extended Definition

ServiceNow is available as a native fully integrated CRM with embedded agent adapters.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)

## Supporting Pages

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- When enabled, configure the TSS or upload a custom greeting in Settings Languages & Messages Deflection to Voicemail option - Request Already Placed Message. - Limit consumer to 1 voicemail per queue: a consumer could leave a separate voicemail request on a separate queue. - Limit consumer to 1 voicemail request across all queues: voicemail option not available if an unattended voicemail is already left form the phone number.
- For more information, see the following: Salesforce : Outbound click to call Kustomer : Kustomer click to call ServiceNow : Add Click to Call to the top of the form Show the dial pad screen If you have a CRM configured for click-to-call, you can configure your instance to display the dial pad screen after an agent clicks a phone number in the CRM but before a call starts.
- Skip the connecting message playback A connecting message is the message that an end-user hears while the system is connecting their call to an agent—for example, "Please wait while we connect your call to the next available agent." For more information about connecting messages, see Configuring IVR messages .
- Available session types This flexible inbound call handling UI will show when the call session is one of the following types: Voice Inbound (IVR), Voice Callback (Web), Voice Scheduled (Web), Voice Inbound (Mobile), Voice Inbound (IVR using Mobile), Voice Scheduled (Mobile), & Voice Inbound (API).

### "iOS SDK guide \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide)
- Source ID: `site-docs-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- In the delegate method, make sure to only call [UJET start] when the URL paths and parameters in the universal link or custom URL are specific for CCAI Platform. - ( BOOL ) application :( UIApplication ) app continueUserActivity :( nonnull NSUserActivity ) userActivity restorationHandler :( nonnull void ( ^ )( NSArray Nullable )) restorationHandler { ... if ( [ NSUserActivityTypeBrowsingWeb isEqualToString : userActivity . activityType ] ) { NSURL url = userActivity . webpageURL ; NSArray availableSchema = @ [ @ "your-company" , // custom URL scheme @ "https" // universal link ] ; NSArray availableHostAndPath = @ [ @ "ujet" , // custom URL scheme @ "your-comany.com/ujet" // universal link ] ; if ( ![ availableSchema containsObject : url . scheme ] ) { return NO ; } NSString hostAndPath = [ NSString stringWithFormat : @ "%@%@" , url . host , url . path ] ; if ( ![ availableHostAndPath containsObject : hostAndPath ] ) { return NO ; } // your-company://ujet?call id={call id}&nonce={nonce} // https://your-company.com/ujet?call id={call id}&nonce={nonce} NSURLComponents urlComponents = [ NSURLComponents componentsWithURL : url resolvingAgainstBaseURL : NO ] ; NSArray queryItems = urlComponents . queryItems ; NSString callId = [ self valueForKey : @ "call id" fromQueryItems : queryItems ] ; // validate call id if ( ![ self isValidCallId : callId ] ) { return NO ; } NSString nonce = [ self valueForKey : @ "nonce" fromQueryItems : queryItems ] ; UJETStartOptions options = [[ UJETStartOptions alloc ] initWithCallId : callId nonce : nonce ] ; [ UJET startWithOptions : options ] ; } ... } If your app adopts UIWindowSceneDelegate , then add this code snippet: class SceneDelegate: UIResponder, UIWindowSceneDelegate { var window: UIWindow? func scene ( scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions ) { //if app is called with universal Link and started from cold if connectionOptions.urlContexts.first ! = nil { self.scene ( scene, openURLContexts: connectionOptions.urlContexts ) } guard let = ( scene as?
- To do this, add the following lines: binary "https://sdk.ujet.co/ios/UJETKit.json binary "https://sdk.ujet.co/ios/UJETFoundationKit.json binary https://raw.githubusercontent.com/twilio/twilio-voice-ios/Releases/twilio-voice-ios.json Manual integration This is not supported: https://github.com/twilio/conversations-ios/issues/12. binary https://raw.githubusercontent.com/twilio/conversations-ios/master/twilio-convo-ios.json Run carthage bootstrap --use-xcframeworks (or carthage update --use-xcframeworks ( if you're updating dependencies) .
- Note: This error isn't triggered when the network isn't available during a chat or call session or a rate screen. authenticationError 100 An unexpected error occurred during authentication. authenticationJwtError 101 An unexpected error occurred during JWT validation—for example, a parsing error. voipConnectionError 1000 Failed to establish a connection to the VoIP provider.
- Navigate to the folder and install dependencies using CocoaPods: $ pod install --project-directory = ExampleApp To quickly configure project settings, run a shell script: $ ./setup.sh Alternatively, you can manually edit project settings by following these steps: Open ExampleApp.xcworkspace .

### "Chat Settings and Features \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- Source ID: `site-docs-reference`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- Example of how to select Agent Activity reports in Reports > Users & Teams: Available in Agent Activity Summary report ( Reports > Users & Teams > Agent Activity - Summary Report) as "Agent exceeded target chat response time." Available in Agent Timeline report ( Reports > Users & Teams > Agent Activity - Timeline Report) as "Agent exceeded target chat response time." When chats are dismissed, chat status will show as Dismissed - inactive end-user .
- The following variables are available: Customer Attributes : First Name : the end-user's first name Last Name : the end-user's last name Full Name : the end-user's full name Agent Attributes : First Name : the agent's first name Last Name : the agent's last name Full Name : the agent's full name Alias : the agent's alias ID : the agent's ID Session Attributes : Queue : the assigned queue Repeat this step to add more attributes.
- When there are less than five alternatives , the Web SDK displays external deflection links as follows: When there are more than five alternatives , the Web SDK displays external deflection links as follows: Visiting an External Deflection Link When the consumer clicks on the external deflection link, the configured URL opens within a new tab in the user's active browser window.
- Consumer UI examples after chat is dismissed but not timed-out Web: Mobile: When Same is selected, the consumer is placed back in the same chat window waiting for the chat to be re-assigned to the next available agent: If the consumer selects New , they are brought back to the start of the queue menu selection screen.

