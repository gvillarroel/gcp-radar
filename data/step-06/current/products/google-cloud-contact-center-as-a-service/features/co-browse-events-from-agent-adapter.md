---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.080Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Co-browse events from agent adapter"
feature_slug: "co-browse-events-from-agent-adapter"
latest_feature_date: "2024-05-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features"
keywords:
  - "co"
  - "browse"
  - "events"
  - "agent"
  - "adapter"
  - "now"
  - "generates"
  - "during"
---

# Co-browse events from agent adapter

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

The agent adapter now generates events during co-browse sessions.

## Extended Definition

The agent adapter now generates events during co-browse sessions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)

## Supporting Pages

### "Agent Assist \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist)
- Source ID: `site-docs-reference`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- A ( -- ) displays when no score is available. last sentiment score for the last consumer response (updates in real-time) session current average sentiment score (updates in real-time) prev. leg average sentiment score of the previous segment There are three sentiments types (neutral, happy, and negative) in the Real-Time Sentiment Analysis and scores displayed fall into the following ranges: Over 63 = Happy Between 38 and 63 = Neutral Below 38 = Negative During the session, the Real-Time Sentiment Analysis scores are sent the to the Agent Adapter.
- There are three sentiments types (neutral, happy, and negative) in the Real-Time Sentiment Analysis and scores displayed fall into the following ranges: 40-75 = Neutral Over 75 = Happy Below 30 = Negative During the session, the Real-Time Sentiment Analysis scores are sent the to the Agent Adapter.
- For Voice : The Sentiment feature panel displays on the Agent Adapter during a live session.
- If you select the Spelling and Grammar Check checkbox, then the following two checkboxes appear: Allow agents to turn on/off automatic checks : Select this checkbox to let agents turn on and off spelling and grammar check in the chat adapter.

### "iOS SDK guide \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide)
- Source ID: `site-docs-reference`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- UJETEventEmailDidClick Queue Menu Data UJETEventEmailDidSubmit Queue Menu Data has attachment: (NSNumber) @YES, @NO UJETEventSessionViewDidAppear type: @"call", @"chat" timestamp: (NSString) ISO 8601 UJETEventSessionViewDidDisappear type: @"call", @"chat" timestamp: (NSString) ISO 8601 UJETEventSessionDidCreate Session Data UJETEventSessionDidEnd Session Data agent name: (NSString) null if agent didn't join duration: (NSNumber) only for call ended by: (NSString) type=call: @"agent", @"end user" type=chat: @"agent", @"end user", @"timeout", @"dismissed" UJETEventSdkDidTerminate UJETEventPostSessionOptInDidSelected opt in selected: (NSString) @"Yes", @"No" Event Data Metadata application: @"iOS" app id: (NSString) bundle identifier app version: (NSString) company: (NSString) subdomain device model: (NSString) device version: (NSString) sdk version: (NSString) timestamp: (NSString) ISO 8601 Queue Menu Data Metadata menu id: NSString menu key: NSString, nullable menu name: NSString menu path : NSString Session Data Queue Menu Data session id: NSString type: @"call", @"chat" end user identifier: NSString Setup Screen Share If you want to use Screen Share feature, then integrate UJETCobrowseKit.xcframework .
- Customize Flow Disconnect CCAI Platform for handling Host app events // CCAI Platform is connected ... // An event has come [ UJET disconnect : ^ { // Handle an event } ] ; Postpone CCAI Platform incoming call or chat Implement a delegate method for handling incoming events - ( BOOL ) shouldConnectUjetIncoming :( NSString ) identifier forType :( UjetIncomingType ) type { if ( weDoingSomething ) { // save identifier and type return NO ; // postpone } else { return YES ; } } Connect postponed event [ UJET connect : identifier forType : UjetIncomingTypeCall ] ; Setup Deep link This enables agents on PSTN calls to use smart actions by SMS for both when an end user has or does not have the app.
- Device OS Version [ customData set:@ "os version" label:@ "OS Version" stringValue: [[ UIDevice currentDevice ] systemVersion ]] ; Prevent the display of custom data You can use the invisible to agent property with a custom data object to prevent signed or unsigned custom data from being displayed in the agent adapter.
- And set UJETGlobalOptions.cobrowseKey property. swift let options = UJETGlobal Options () options . cobrowseKey = cobrowseKey UJET . setGlobalOptions ( options ) Full device Screen Sharing (optional) Full device screen sharing allows your support agents to view screens from applications outside of your own.

### "Chat Settings and Features \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- Source ID: `site-docs-reference`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- If After Hour Deflection is disabled, mark the checkbox Allow transfers to queues outside of operation for the following behavior: Agents will be able to see the following queues as options to transfer to in the Agent Adapter All queues within operating hours All queues that are outside of hours of operation with no deflection enabled and active, logged-in agents All queues that are after hours with an assigned virtual agent in 24-hour availability mode Agents will not be able to see the following types of queues: All queues that are after hours with after hour deflection enabled All queues that are outside of operating hours with an assigned virtual agent limited to queue hours of operation Enable over capacity deflection : Specify the estimated wait time threshold for the consumer to be deflected to the options set below.
- Reply back to this message to begin a new chat." OR "ujet message chat dismissed": "Welcome Back!<br>Do you have the same issue or a new issue?" "ujet chat new": "New" "ujet chat same": "Same" Mobile SDKs The string file names for customizing this UI are broken down below: ujet chat footer view message dismissed: "Welcome back!\nWe have not heard from you in a while.\nDo you have the same issue or a new issue?" OR ujet chat footer view message timeout: "Your previous chat has ended, please click to start a new chat." ujet common same: "Same" ujet common new: "New" Configure rich messaging and file attachments You can configure CCAI Platform so that agents can use rich messaging, emojis, and file attachments in the chat adapter.
- Here's an example of a transfer limit field: "transfer limit" : { "enabled" : true , "limit count" : 10 , "limit reached" : "true" }, Agent experience If you select Disable all transfer options when configuring the transfer limit, the Chat Transfer button in the agent adapter is inactive when the transfer limit is reached for a chat session.
- For When the transfer count exceeds the limit , select one of the following: Disable all transfer options : when the limit is reached, this prevents an agent from making additional transfers Allow one final transfer to the queue : when the limit is reached, this lets an agent do a final transfer to a queue that you specify.

