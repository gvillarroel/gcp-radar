---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.096Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Call history"
feature_slug: "call-history"
latest_feature_date: "2023-12-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages"
keywords:
  - "call"
  - "history"
  - "agents"
  - "can"
  - "view"
  - "completed"
  - "calls"
  - "related"
---

# Call history

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Agents can view completed calls and related metadata such as timestamps, call duration, and disposition notes.

## Extended Definition

Agents can view completed calls and related metadata such as timestamps, call duration, and disposition notes.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)

## Supporting Pages

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- If selected, agents will see a list of the calls completed in the last 30 days and associated metadata such as time stamps, call duration, and disposition notes in the Call Adapter.
- CCAI Platform supports the following emergency and special services phone numbers: US emergency numbers Canada emergency numbers Canada special service numbers 911 - Emergency 911 - Emergency 211 - Public information and referral services 933 - Emergency test 311 - Non-emergency municipal government services 411 - Local directory assistance 511 - Weather and traveler information services 611 - Repair service 711 - Message relay service (MRS) 811 - Non-urgent health care telephone triage service 988 - Suicide and crisis lifeline Turn emergency calling on or off Turn on emergency calling to let authorized agents make and manage emergency and special services calls in the call adapter.
- Requesting new phone numbers Contact Support and include the following information about your preferences: Number type: Toll-free, National, Mobile, Local Location of number Number preference details about number structure or patterns Set up emergency and special services calling (US and Canada only) With CCAI Platform, agents in the US and Canada can make calls to emergency and special services using phone numbers that you dedicate to these types of calls.
- Emergency queues don't support the following: Virtual agents Overcapacity deflections Automatic redirections Target metrics Blended SMS Presession SMS deflections Call redaction Surveys CSAT ratings IVR payments Custom URLs Before you begin To configure an emergency service callback queue, you'll need a phone number that is dedicated to emergency or special services calls .

### "Real-time dashboards and monitoring pages \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)
- Source ID: `site-docs-reference`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- Because outbound calls are not associated with a queue, they are not included on this dashboard Queue selection must be completed to show in the dashboard In-menu abandons are not represented in Dashboards currently Views From the top-left of the Queue Groups Dashboard page, you can toggle between two different views.
- View Agent Details launches a pop-up with any available information about the agent listed below: Total Calls : Total inbound and outbound completed calls the agent handled today.
- You can also click on certain tiles to see filtered views of the Connected, Queued, or Completed calls pages, as well as the Agent Monitoring page.
- Calls: connected, queued, completed Overview The Calls tab allows for a real-time view of queued, connected, and completed calls.

### "iOS SDK guide \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide)
- Source ID: `site-docs-reference`
- Final score: 168
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This can be accomplished either by using the JSON file (see form card property) or by using the UJETChatActionMenuTheme class. func customizeChatTheme () throws { guard let file = Bundle.main.path ( forResource: "chat-theme-custom" , ofType: "json" ) else { return } let json = try String.init ( contentsOfFile: file, encoding: .utf8 ) let chatTheme = UJETChatTheme.init ( jsonString: json ) let actionMenuTheme = UJETChatActionMenuTheme () let photoLibraryIcon = UJETChatUserInputIconTheme () photoLibraryIcon.visible = true photoLibraryIcon.image = UJETImageRef ( assetName: "library button asset" ) let cameraIcon = UJETChatUserInputIconTheme () cameraIcon.visible = true cameraIcon.image = UJETImageRef ( assetName: "camera button asset" ) let cobrowseIcon = UJETChatUserInputIconTheme () cobrowseIcon.visible = true cobrowseIcon.image = UJETImageRef ( assetName: "cobrowse button asset" ) actionMenuTheme.libraryIcon = photoLibraryIcon actionMenuTheme.cameraIcon = cameraIcon actionMenuTheme.cobrowseIcon = cobrowseIcon chatTheme?.actionMenu = actionMenuTheme let globalTheme = UJETGlobalTheme () globalTheme.chatTheme = chatTheme UJET.setGlobalTheme ( globalTheme ) } Other appearances You can customize other appearances such as font size and background color. theme.supportTitleLabelFontSize = 30 ; theme.supportDescriptionLabelFontSize = 20 ; theme.supportPickerViewFontSize = 30 ; theme.staticFontSizeInSupportPickerView = YES ; theme.backgroundColor = UIColor.darkGrayColor ; theme.backgroundColorForDarkMode = UIColor.lightGrayColor ; CallKit On iOS 10.0 and greater, CallKit is enabled for all calls.
- Customize Flow Disconnect CCAI Platform for handling Host app events // CCAI Platform is connected ... // An event has come [ UJET disconnect : ^ { // Handle an event } ] ; Postpone CCAI Platform incoming call or chat Implement a delegate method for handling incoming events - ( BOOL ) shouldConnectUjetIncoming :( NSString ) identifier forType :( UjetIncomingType ) type { if ( weDoingSomething ) { // save identifier and type return NO ; // postpone } else { return YES ; } } Connect postponed event [ UJET connect : identifier forType : UjetIncomingTypeCall ] ; Setup Deep link This enables agents on PSTN calls to use smart actions by SMS for both when an end user has or does not have the app.
- App submission on iTunes Connect Apple might ask the following question while in review process because of enabled Voice over IP background mode: Can users receive VoIP calls in your app?
- UJETEventEmailDidClick Queue Menu Data UJETEventEmailDidSubmit Queue Menu Data has attachment: (NSNumber) @YES, @NO UJETEventSessionViewDidAppear type: @"call", @"chat" timestamp: (NSString) ISO 8601 UJETEventSessionViewDidDisappear type: @"call", @"chat" timestamp: (NSString) ISO 8601 UJETEventSessionDidCreate Session Data UJETEventSessionDidEnd Session Data agent name: (NSString) null if agent didn't join duration: (NSNumber) only for call ended by: (NSString) type=call: @"agent", @"end user" type=chat: @"agent", @"end user", @"timeout", @"dismissed" UJETEventSdkDidTerminate UJETEventPostSessionOptInDidSelected opt in selected: (NSString) @"Yes", @"No" Event Data Metadata application: @"iOS" app id: (NSString) bundle identifier app version: (NSString) company: (NSString) subdomain device model: (NSString) device version: (NSString) sdk version: (NSString) timestamp: (NSString) ISO 8601 Queue Menu Data Metadata menu id: NSString menu key: NSString, nullable menu name: NSString menu path : NSString Session Data Queue Menu Data session id: NSString type: @"call", @"chat" end user identifier: NSString Setup Screen Share If you want to use Screen Share feature, then integrate UJETCobrowseKit.xcframework .

