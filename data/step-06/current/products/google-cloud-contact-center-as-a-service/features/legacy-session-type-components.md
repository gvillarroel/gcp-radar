---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.128Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Legacy session type components"
feature_slug: "legacy-session-type-components"
latest_feature_date: "2023-05-12"
deprecation_date: "2023-10-06"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide"
keywords:
  - "legacy"
  - "session"
  - "type"
  - "components"
  - "no"
  - "longer"
  - "updated"
  - "functionality"
---

# Legacy session type components

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Legacy session type components are no longer updated with new functionality and are deprecated; deprecated on 2023-10-06.

## Extended Definition

Legacy session type components are no longer updated with new functionality and are deprecated; deprecated on 2023-10-06.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)

## Supporting Pages

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- Prerequisites In order to enable the Pre-session Deflection, you must have the following: A valid CCAI Platform account with Admin role assigned A valid Legacy, Pro, Enterprise, or Digital License Package A valid subscription for CCAI Platform IVR Support with IVR enabled A valid subscription for CCAI Platform SMS Support enabled with a valid queue structure The SMS must be functional (agent assigned) Basic configuration Do the following procedures, in order: Enable pre-session SMS deflection Enable and save the pre-session SMS deflection offer and opted-in messages Enable and save the pre-session SMS deflection greeting message Configure pre-session SMS deflection for a specific queue Enable pre-session SMS deflection Go Settings > Call.
- Session types for reporting For reporting, calls to or from direct phone numbers generate the following session types: Voice Inbound (Direct) : an inbound call to a direct phone number Voice Outbound (Direct) : an outbound call from a direct phone number Voice Internal : an internal call to or from a direct phone number Estimated wait time announcement for calls Estimated Wait Time (EWT) Announcements use a calculation to predict the wait time until a caller is connected with an agent.
- Available session types This flexible inbound call handling UI will show when the call session is one of the following types: Voice Inbound (IVR), Voice Callback (Web), Voice Scheduled (Web), Voice Inbound (Mobile), Voice Inbound (IVR using Mobile), Voice Scheduled (Mobile), & Voice Inbound (API).
- A call to a direct phone number generates a Voice Inbound (Direct) session type, while a call to a DAP generates a Voice Inbound (IVR) session type.

### "iOS SDK guide \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide)
- Source ID: `site-docs-reference`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- In the delegate method, make sure to only call [UJET start] when the URL paths and parameters in the universal link or custom URL are specific for CCAI Platform. - ( BOOL ) application :( UIApplication ) app continueUserActivity :( nonnull NSUserActivity ) userActivity restorationHandler :( nonnull void ( ^ )( NSArray Nullable )) restorationHandler { ... if ( [ NSUserActivityTypeBrowsingWeb isEqualToString : userActivity . activityType ] ) { NSURL url = userActivity . webpageURL ; NSArray availableSchema = @ [ @ "your-company" , // custom URL scheme @ "https" // universal link ] ; NSArray availableHostAndPath = @ [ @ "ujet" , // custom URL scheme @ "your-comany.com/ujet" // universal link ] ; if ( ![ availableSchema containsObject : url . scheme ] ) { return NO ; } NSString hostAndPath = [ NSString stringWithFormat : @ "%@%@" , url . host , url . path ] ; if ( ![ availableHostAndPath containsObject : hostAndPath ] ) { return NO ; } // your-company://ujet?call id={call id}&nonce={nonce} // https://your-company.com/ujet?call id={call id}&nonce={nonce} NSURLComponents urlComponents = [ NSURLComponents componentsWithURL : url resolvingAgainstBaseURL : NO ] ; NSArray queryItems = urlComponents . queryItems ; NSString callId = [ self valueForKey : @ "call id" fromQueryItems : queryItems ] ; // validate call id if ( ![ self isValidCallId : callId ] ) { return NO ; } NSString nonce = [ self valueForKey : @ "nonce" fromQueryItems : queryItems ] ; UJETStartOptions options = [[ UJETStartOptions alloc ] initWithCallId : callId nonce : nonce ] ; [ UJET startWithOptions : options ] ; } ... } If your app adopts UIWindowSceneDelegate , then add this code snippet: class SceneDelegate: UIResponder, UIWindowSceneDelegate { var window: UIWindow? func scene ( scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions ) { //if app is called with universal Link and started from cold if connectionOptions.urlContexts.first ! = nil { self.scene ( scene, openURLContexts: connectionOptions.urlContexts ) } guard let = ( scene as?
- UJETEventEmailDidClick Queue Menu Data UJETEventEmailDidSubmit Queue Menu Data has attachment: (NSNumber) @YES, @NO UJETEventSessionViewDidAppear type: @"call", @"chat" timestamp: (NSString) ISO 8601 UJETEventSessionViewDidDisappear type: @"call", @"chat" timestamp: (NSString) ISO 8601 UJETEventSessionDidCreate Session Data UJETEventSessionDidEnd Session Data agent name: (NSString) null if agent didn't join duration: (NSNumber) only for call ended by: (NSString) type=call: @"agent", @"end user" type=chat: @"agent", @"end user", @"timeout", @"dismissed" UJETEventSdkDidTerminate UJETEventPostSessionOptInDidSelected opt in selected: (NSString) @"Yes", @"No" Event Data Metadata application: @"iOS" app id: (NSString) bundle identifier app version: (NSString) company: (NSString) subdomain device model: (NSString) device version: (NSString) sdk version: (NSString) timestamp: (NSString) ISO 8601 Queue Menu Data Metadata menu id: NSString menu key: NSString, nullable menu name: NSString menu path : NSString Session Data Queue Menu Data session id: NSString type: @"call", @"chat" end user identifier: NSString Setup Screen Share If you want to use Screen Share feature, then integrate UJETCobrowseKit.xcframework .
- Border width can be only 0 or 1 and if you don't want to differentiate the post session VA experience then you could set containerColor white and border to 0. func customizeChatTheme () throws { guard let file = Bundle.main.path ( forResource: "chat-theme-custom" , ofType: "json" ) else { return } let json = try String.init ( contentsOfFile: file, encoding: .utf8 ) let chatTheme = UJETChatTheme.init ( jsonString: json ) let postSessionVaTheme = UJETChatPostSessionVaTheme () postSessionVaTheme.containerColor = UJETColorRef ( assetName: "white color" ) let postSessionVaBorder = UJETBorderTheme () postSessionVaBorder.width = 0 postSessionVaBorder.color = UJETColorRef ( assetName: "white color" ) containerColor.border = postSessionVaBorder chatTheme?.postSessionVaTheme = postSessionVaTheme let globalTheme = UJETGlobalTheme () globalTheme.chatTheme = chatTheme UJET.setGlobalTheme ( globalTheme ) } Chat actions menu You can add customization for chat actions menu together with chat customization.
- To start a new CCAI Platform support session from call history, add the following block to your AppDelegate.m: AppDelegate.m: - ( BOOL ) application: ( UIApplication ) app continueUserActivity: ( nonnull NSUserActivity ) userActivity restorationHandler: ( nonnull void ( ^ )( NSArray Nullable )) restorationHandler { if ([ userActivity.activityType isEqualToString:@ "INStartAudioCallIntent" ]) { // Open app from Call history [ UJET startWithOptions:nil ] ; } return YES ; } CallKit allows a 40x40 icon to be displayed on the lock screen when receiving a call while the device is locked.

### "Salesforce integration guide \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- Source ID: `site-docs-reference`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- Session type: call or chat Call duration: duration of session from start to end Queued at: time session entered the queue Assigned at: time session was assigned to agent Wait: total wait duration in queue before being assigned to an agent for the session Hold Duration: length of hold time does not include wait time (calls only) Answer Type: indicates whether session was auto (0) or manually (1) answered Fail reason: reason why a session "failed" and details.
- Once enabled and configured, there are 3 ways an agent status can be updated Agent updates status in the Adapter: existing agent status behavior Agent selects next status during a live session: existing agent feature, described in Allow agents to set their next status while on a call or chat.
- Session details The available dataset for sessions includes the following fields: Call/Chat ID: CCAI Platform call or chat ID Created at: when the call, chat was created Ended at: when the call, chat was ended Channel: call or chat type (for example, Mobile, Web).
- Step 3: Update Case or Account Object Page Layout To see the CCAI Platform Session object, the Case or Account object Page Layout needs to be updated.

