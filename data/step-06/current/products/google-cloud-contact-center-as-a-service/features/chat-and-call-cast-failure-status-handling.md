---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.106Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Chat and call cast failure status handling"
feature_slug: "chat-and-call-cast-failure-status-handling"
latest_feature_date: "2023-09-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_Routing"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide"
keywords:
  - "chat"
  - "call"
  - "cast"
  - "failure"
  - "status"
  - "handling"
  - "if"
  - "fails"
---

# Chat and call cast failure status handling

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

If a chat or call cast fails or is not picked up, the agent status now changes to Unresponsive or Missed Chat as appropriate.

## Extended Definition

If a chat or call cast fails or is not picked up, the agent status now changes to Unresponsive or Missed Chat as appropriate.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_Routing](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_Routing)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide)

## Supporting Pages

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- This will place a new Outbound Call and set the status of the original Voicemail call to 'Voicemail Read.' Scheduled call recovery If a consumer scheduled a call using the Web or Mobile SDK, then doesn't pick up the call at the scheduled time, a Callback option presented to Agent which will create a new Outbound call.
- Available session types This flexible inbound call handling UI will show when the call session is one of the following types: Voice Inbound (IVR), Voice Callback (Web), Voice Scheduled (Web), Voice Inbound (Mobile), Voice Inbound (IVR using Mobile), Voice Scheduled (Mobile), & Voice Inbound (API).
- Short call recovery If Automatic Wrap up is enabled and the call connects but is ended within 10 seconds of connecting, the call adapter appears with a message "The call was too short" and provides an option to either Call back , or go Back to Available , placing them back in Available status.
- Default selection and available options If Append call or chat session to the latest open case in the same leaf queue option in Case Creation Details is enabled, the latest open record in the same leaf queue is preloaded.

### "Multicast and deltacast \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_Routing](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_Routing)
- Source ID: `site-docs-reference-required-8`
- Final score: 165
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It applies to all chat types and the following chat flows: Transfers Chats routed through Direct Access Points (DAPs) Queues with cascade groups enabled Queues with percent allocation groups enabled Eligible agents To receive a deltacast call, an agent must fulfill one of following requirements: Status is set to Available.
- Deltacast routing logic for chat Basic routing: When a chat enters the queue, the chat is offered to a single, eligible agent (status Available or In-Chat), according to these rules: If multiple agents are in Available status, the chat is routed to the agent with the longest period of time since they were last in In-Chat status.
- If the deltacast attempt count has run out, then the chat is offered using multicast to all agents in Cascade Group A, both in Available and In-chat statuses, including the original agent routed the chat (if they did not reach the Missed Chat threshold).
- If no agents pick up the chat and the cascade group timer expires: The chat is offered using multicast to all agents in Cascade Group A in either Available and In-Chat status, including the original agent routed the chat.

### "iOS SDK guide \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide)
- Source ID: `site-docs-reference`
- Final score: 155
- Re-rank relevance: N/A

Evidence snippets:
- In this case, signPayload delegate for UJETPayloadCustomData should just call success(nil);. - ( void ) signPayload :( NSDictionary ) payload payloadType :( UjetPayloadType ) payloadType success :( void ( ^ )( NSString )) success failure :( void ( ^ )( NSError )) failure { if ( payloadType == UjetPayloadCustomData ) { success ( nil ); } } UJETStartOptions options = [ UJETStartOptions new ] ; options . unsignedCustomData = customData ; [ UJET startWithOptions : options ] ; Using unsigned custom data to send external chat transcript You can send the chat transcript to the SDK when it's started with unsigned custom data by calling setExternalChatTransfer: or setExternalChatTransferWithDictionary: method to set JSON data with NSString or NSDictionary, respectively.
- Customize Flow Disconnect CCAI Platform for handling Host app events // CCAI Platform is connected ... // An event has come [ UJET disconnect : ^ { // Handle an event } ] ; Postpone CCAI Platform incoming call or chat Implement a delegate method for handling incoming events - ( BOOL ) shouldConnectUjetIncoming :( NSString ) identifier forType :( UjetIncomingType ) type { if ( weDoingSomething ) { // save identifier and type return NO ; // postpone } else { return YES ; } } Connect postponed event [ UJET connect : identifier forType : UjetIncomingTypeCall ] ; Setup Deep link This enables agents on PSTN calls to use smart actions by SMS for both when an end user has or does not have the app.
- Invoke the dismissed closure on click of the deny button. class CobrowseAlertProvider: NSObject, UJETCobrowseAlertProvider { func cobrowseSessionInitializationAlert ( consentStatus: @escaping ( Bool ) -> Void ) -> UIViewController? { let customAlertViewController = CustomAlertViewController () customAlertViewController.consentStatus = consentStatus return customAlertViewController } func cobrowseSessionRequestAlert ( consentStatus: @escaping ( Bool ) -> Void ) -> UIViewController? { // Same as cobrowseSessionInitializationAlert } func cobrowseRemoteRequestAlert ( consentStatus: @escaping ( Bool ) -> Void ) -> UIViewController? { // Same as cobrowseSessionInitializationAlert } func cobrowseFullDeviceRequestAlert ( dismissed: @escaping () -> Void ) -> UIViewController? { let customAlertViewController = CustomFullDeviceAlertViewController () cobrowseSessionAlertViewController.dismissed = dismissed return customAlertViewController } func cobrowseSessionEndAlert ( consentStatus: @escaping ( Bool ) -> Void ) -> UIViewController? { // Same as cobrowseSessionInitializationAlert } } The custom view controller should have a closure to pass the consent status to the SDK. class CustomAlertViewController: UIViewController { var consentStatus: (( Bool ) -> Void ) ? @IBAction func allowButtonClicked ( sender: Any ) { dismiss ( animated: true ) {[ weak self ] in self?.consentStatus? ( true ) } } @IBAction func denyButtonClicked ( sender: Any ) { dismiss ( animated: true ) {[ weak self ] in self?.consentStatus? ( false ) } } } The custom view controller for full device request alert should have RPSystemBroadcastPickerView and a closure to pass the dismiss status to the SDK. class CustomFullDeviceAlertViewController: UIViewController { var broadcastPickerView: RPSystemBroadcastPickerView! var dismissed: (() -> Void ) ? override func viewDidLoad () { super.viewDidLoad () let frame = CGRect ( x: x, y: y, width: 50 , height: 50 ) // Set your own value broadcastPickerView = RPSystemBroadcastPickerView ( frame: frame ) broadcastPickerView.preferredExtension = Bundle.main.object ( forInfoDictionaryKey: "CBIOBroadcastExtension" ) as?
- This can be accomplished either by using the JSON file (see form card property) or by using the UJETChatActionMenuTheme class. func customizeChatTheme () throws { guard let file = Bundle.main.path ( forResource: "chat-theme-custom" , ofType: "json" ) else { return } let json = try String.init ( contentsOfFile: file, encoding: .utf8 ) let chatTheme = UJETChatTheme.init ( jsonString: json ) let actionMenuTheme = UJETChatActionMenuTheme () let photoLibraryIcon = UJETChatUserInputIconTheme () photoLibraryIcon.visible = true photoLibraryIcon.image = UJETImageRef ( assetName: "library button asset" ) let cameraIcon = UJETChatUserInputIconTheme () cameraIcon.visible = true cameraIcon.image = UJETImageRef ( assetName: "camera button asset" ) let cobrowseIcon = UJETChatUserInputIconTheme () cobrowseIcon.visible = true cobrowseIcon.image = UJETImageRef ( assetName: "cobrowse button asset" ) actionMenuTheme.libraryIcon = photoLibraryIcon actionMenuTheme.cameraIcon = cameraIcon actionMenuTheme.cobrowseIcon = cobrowseIcon chatTheme?.actionMenu = actionMenuTheme let globalTheme = UJETGlobalTheme () globalTheme.chatTheme = chatTheme UJET.setGlobalTheme ( globalTheme ) } Other appearances You can customize other appearances such as font size and background color. theme.supportTitleLabelFontSize = 30 ; theme.supportDescriptionLabelFontSize = 20 ; theme.supportPickerViewFontSize = 30 ; theme.staticFontSizeInSupportPickerView = YES ; theme.backgroundColor = UIColor.darkGrayColor ; theme.backgroundColorForDarkMode = UIColor.lightGrayColor ; CallKit On iOS 10.0 and greater, CallKit is enabled for all calls.

