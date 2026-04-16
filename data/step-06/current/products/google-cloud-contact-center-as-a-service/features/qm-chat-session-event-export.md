---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.046Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "QM chat session event export"
feature_slug: "qm-chat-session-event-export"
latest_feature_date: "2025-05-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-session-data-feed"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide"
keywords:
  - "qm"
  - "chat"
  - "session"
  - "event"
  - "export"
  - "streams"
  - "events"
  - "real"
---

# QM chat session event export

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Streams chat session events in real time to an external quality management system.

## Extended Definition

Streams chat session events in real time to an external quality management system.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-session-data-feed](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-session-data-feed)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide)

## Supporting Pages

### "Chat Settings and Features \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- Source ID: `site-docs-reference`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- Sensitive data redaction You can configure Contact Center AI Platform (CCAI Platform) to redact sensitive data from chat sessions in real time in the agent adapter, in the web SDK widget, and in chat transcripts.
- Chat check-in events For information about configuring the web SDK to listen for chat check-in events, see Chat check-in .
- Auto Answer behavior combined with other features Deltacast Deltacast for Cascade / % Allocation Multicast Transferred chats Monitoring and reporting Monitoring Auto Answer can be monitored on the chat page, where admins see in real-time which chats are: Auto Answered Manually picked up Reporting The following reports identify which chats were Auto Answered and which chats were manually picked up: Agent Performance Report Agent Timeline Report Agent Summary Report Individual Chat History Report Please see Report Builder for more information about pulling reports.
- Real-time and Standard Reporting Real-time reports Dismissed chats are moved from Chats > Ongoing to Chats Previous The status for dismissed chats on the Previous Chats page is Dismissed - Inactive End user If that chat is restarted by the consumer sending a response, the chat is placed back in queue and will show in Chats > Future When an agent picks up a restarted chat, that chat will be moved to the Ongoing chat page Reporting The chat duration timer stops as soon as a chat has been placed into dismissed status.

### "Session data feed \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-session-data-feed](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-session-data-feed)
- Source ID: `site-docs-root`
- Final score: 149
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Captured VA session variables Chat ID: 3070 Menu: In-App Support (QUEUE qca02)/Support/PN/PN 1 Chatbot Platform: Virtual Agent PN Chatbot Workflow: Post Session Transfer - Chat Virtual Agent: Virtual Agent PN - Chat Intent: Captured At: July 5, 2024 at 3:08:39 PM GMT+7 Captured Variables agentHelpfulness: 4 issueResolution: yes agentComprehension: 5 openFeedback: nothing Co-browse session started Screen Share session was started by Agent Time of start: July 5, 2024 at 3:16:54 PM GMT+7 Co-browse session ended Screen Share session was ended by Agent Time of end: July 5, 2024 at 3:19:31 PM GMT+7 Co-browse remote control requested Screen Share remote control was requested Co-browse remote control accepted Screen Share remote control was accepted Co-browse remote control rejected Screen Share remote control was rejected Co-browse full device control requested Screen Share full device control was requested Co-browse full device control accepted Screen Share full device control was accepted Co-browse full device control rejected Screen Share full device control was rejected Session sentiment score Average sentiment score for the segment: 52 Customer email collected Customer email: 222larabrown@gmail.com Realtime Transcript Call ID: 6800 July 5, 2024 at 4:23:03 PM GMT+7 00:25 ---------------------------------------- [July 5, 2024 at 4:23:05 PM GMT+7 Virtual Agent PN - Voice] Hello, I am CX Agent Number 1.
- A session data feed captures the stream of data that is generated when events take place during a session.
- Session data feed events Here is a list of the events for which the session data feed captures data.
- How can I help you? ---------------------------------------- [July 5, 2024 at 4:23:10 PM GMT+7 Consumer] human agent ---------------------------------------- Live Translation was used Spanish (Spain) and English (US) were used for translation Data parameters passed to Virtual Agent Data parameters passed to Virtual Agent PN - Chat Data parameters passed: order: yes product: books queueId: 502 queueLanguage: en Pre-session SMS deflection Pre-session SMS deflection was offered in ORDERS RETURNS/PN/PN 1 Pre-session SMS deflection was accepted Dispositions Code: test001 Custom Code ID: 123 UJET Code ID: 3 Note: Okee List: Custom Custom List ID: 2222 UJET List ID: 3 Agent: Alex B CCAI Insight chat history uploaded GCS URL: gs://example-insights/oem/...

### "iOS SDK guide \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide)
- Source ID: `site-docs-reference`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- UJETEventEmailDidClick Queue Menu Data UJETEventEmailDidSubmit Queue Menu Data has attachment: (NSNumber) @YES, @NO UJETEventSessionViewDidAppear type: @"call", @"chat" timestamp: (NSString) ISO 8601 UJETEventSessionViewDidDisappear type: @"call", @"chat" timestamp: (NSString) ISO 8601 UJETEventSessionDidCreate Session Data UJETEventSessionDidEnd Session Data agent name: (NSString) null if agent didn't join duration: (NSNumber) only for call ended by: (NSString) type=call: @"agent", @"end user" type=chat: @"agent", @"end user", @"timeout", @"dismissed" UJETEventSdkDidTerminate UJETEventPostSessionOptInDidSelected opt in selected: (NSString) @"Yes", @"No" Event Data Metadata application: @"iOS" app id: (NSString) bundle identifier app version: (NSString) company: (NSString) subdomain device model: (NSString) device version: (NSString) sdk version: (NSString) timestamp: (NSString) ISO 8601 Queue Menu Data Metadata menu id: NSString menu key: NSString, nullable menu name: NSString menu path : NSString Session Data Queue Menu Data session id: NSString type: @"call", @"chat" end user identifier: NSString Setup Screen Share If you want to use Screen Share feature, then integrate UJETCobrowseKit.xcframework .
- Customize Flow Disconnect CCAI Platform for handling Host app events // CCAI Platform is connected ... // An event has come [ UJET disconnect : ^ { // Handle an event } ] ; Postpone CCAI Platform incoming call or chat Implement a delegate method for handling incoming events - ( BOOL ) shouldConnectUjetIncoming :( NSString ) identifier forType :( UjetIncomingType ) type { if ( weDoingSomething ) { // save identifier and type return NO ; // postpone } else { return YES ; } } Connect postponed event [ UJET connect : identifier forType : UjetIncomingTypeCall ] ; Setup Deep link This enables agents on PSTN calls to use smart actions by SMS for both when an end user has or does not have the app.
- Border width can be only 0 or 1 and if you don't want to differentiate the post session VA experience then you could set containerColor white and border to 0. func customizeChatTheme () throws { guard let file = Bundle.main.path ( forResource: "chat-theme-custom" , ofType: "json" ) else { return } let json = try String.init ( contentsOfFile: file, encoding: .utf8 ) let chatTheme = UJETChatTheme.init ( jsonString: json ) let postSessionVaTheme = UJETChatPostSessionVaTheme () postSessionVaTheme.containerColor = UJETColorRef ( assetName: "white color" ) let postSessionVaBorder = UJETBorderTheme () postSessionVaBorder.width = 0 postSessionVaBorder.color = UJETColorRef ( assetName: "white color" ) containerColor.border = postSessionVaBorder chatTheme?.postSessionVaTheme = postSessionVaTheme let globalTheme = UJETGlobalTheme () globalTheme.chatTheme = chatTheme UJET.setGlobalTheme ( globalTheme ) } Chat actions menu You can add customization for chat actions menu together with chat customization.
- Setting the following property to false bypasses all push notification dependencies and prevents push notifications from reaching end-users: @property ( nonatomic, assign ) BOOL allowsPushNotifications ; Ignore dark mode You can ignore the dark mode in CCAI Platform SDK specifically with this property: @property ( nonatomic, assign ) BOOL ignoreDarkMode ; Hide Status Bar You can control the visibility of the status bar with this property: @property ( nonatomic, assign ) BOOL hideStatusBar ; By default, the hideStatusBar is set to false and visible .

