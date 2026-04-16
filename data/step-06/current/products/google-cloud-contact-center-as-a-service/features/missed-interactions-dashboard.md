---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.042Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Missed interactions dashboard"
feature_slug: "missed-interactions-dashboard"
latest_feature_date: "2025-08-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Interactions_Data_Sets"
keywords:
  - "missed"
  - "interactions"
  - "dashboard"
  - "provides"
  - "help"
  - "optimize"
  - "operations"
---

# Missed interactions dashboard

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

The dashboard provides data on missed interactions to help optimize operations.

## Extended Definition

The dashboard provides data on missed interactions to help optimize operations.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Interactions_Data_Sets](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Interactions_Data_Sets)

## Supporting Pages

### "Real-time dashboards and monitoring pages \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)
- Source ID: `site-docs-reference`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- Handled Total number of completed interactions ASA / Sec Average speed to answer AHT / Sec Average Handle Time Virtual agent chat dashboard This dashboard provides a range of status, session, and performance insights for Chat sessions attended by the Virtual Agents.
- Dashboard details Only inbound interactions are available in dashboards.
- Connected calls This dashboard displays all interactions in progress.
- Call Volume Count of inbound or outbound interactions offered, regardless of whether they were handled by an agent or not (includes abandons, failed contacts, etc) Handled Count of inbound or outbound interactions touched by an agent (excludes agent <> agent transfers) Transfer % SUM of finished or failed segments that are a transfer / SUM of all finished or failed segments Inbound Count of interactions created by a consumer and offered - regardless of whether it was handled by an agent (includes abandons, failed contacts, etc) Outbound Count of interactions created by an agent or auto-dialing system, regardless of whether the consumer answers the call Calls in Queue Count of inbound interactionscurrentlywaiting in queue AHT (average call duration + average wrap-up status associated with a Call ID) Chat Volume Count of interactions offered, regardless of whether they were handled by an agent or not (includes abandons, failed contacts, etc) Handled Count of interactions touched by an agent (excludes agent <> agent transfers) Transfer % Sum of finished or failed interactions that are a transfer / Sum of all finished or failed interactions Chat Concurrency The average concurrency of all ongoing chats (live metric) Avg Response Time Average time (seconds) that it takes for an agent to respond to a consumer Chats in Queue Count of inbound interactionscurrentlywaiting in queue AHT Average chat duration (no wrap-up status applied) SLA metrics The top of the SLA Metrics shows two charts for Call SLA and Chat SLA respectively.

### "Standard Reports: Interactions Data Sets \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Interactions_Data_Sets](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Interactions_Data_Sets)
- Source ID: `site-docs-reference`
- Final score: 100
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Handled Missed Calls/ Chats The total number of interactions that the agent has missed.
- The report includes the following information: Any interaction associated with the agent Date, time, and duration of the interaction Event status of the interaction If the interaction was barged Amount of time in seconds that the interaction remained in a queue Interactions that have associated scheduled calls The All Handled Interactions report can be found at Reports > Queues .
- Home Documentation AI and ML Google Cloud CCaaS User Guides Send feedback Standard Reports: Interactions Data Sets Stay organized with collections Save and categorize content based on your preferences.
- Missed Calls due to Network Quality Displays the total number of calls that were offered to the agent but were missed while the agent's network quality was poor or unusable.

### "iOS SDK guide \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide)
- Source ID: `site-docs-reference`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- Invoke the dismissed closure on click of the deny button. class CobrowseAlertProvider: NSObject, UJETCobrowseAlertProvider { func cobrowseSessionInitializationAlert ( consentStatus: @escaping ( Bool ) -> Void ) -> UIViewController? { let customAlertViewController = CustomAlertViewController () customAlertViewController.consentStatus = consentStatus return customAlertViewController } func cobrowseSessionRequestAlert ( consentStatus: @escaping ( Bool ) -> Void ) -> UIViewController? { // Same as cobrowseSessionInitializationAlert } func cobrowseRemoteRequestAlert ( consentStatus: @escaping ( Bool ) -> Void ) -> UIViewController? { // Same as cobrowseSessionInitializationAlert } func cobrowseFullDeviceRequestAlert ( dismissed: @escaping () -> Void ) -> UIViewController? { let customAlertViewController = CustomFullDeviceAlertViewController () cobrowseSessionAlertViewController.dismissed = dismissed return customAlertViewController } func cobrowseSessionEndAlert ( consentStatus: @escaping ( Bool ) -> Void ) -> UIViewController? { // Same as cobrowseSessionInitializationAlert } } The custom view controller should have a closure to pass the consent status to the SDK. class CustomAlertViewController: UIViewController { var consentStatus: (( Bool ) -> Void ) ? @IBAction func allowButtonClicked ( sender: Any ) { dismiss ( animated: true ) {[ weak self ] in self?.consentStatus? ( true ) } } @IBAction func denyButtonClicked ( sender: Any ) { dismiss ( animated: true ) {[ weak self ] in self?.consentStatus? ( false ) } } } The custom view controller for full device request alert should have RPSystemBroadcastPickerView and a closure to pass the dismiss status to the SDK. class CustomFullDeviceAlertViewController: UIViewController { var broadcastPickerView: RPSystemBroadcastPickerView! var dismissed: (() -> Void ) ? override func viewDidLoad () { super.viewDidLoad () let frame = CGRect ( x: x, y: y, width: 50 , height: 50 ) // Set your own value broadcastPickerView = RPSystemBroadcastPickerView ( frame: frame ) broadcastPickerView.preferredExtension = Bundle.main.object ( forInfoDictionaryKey: "CBIOBroadcastExtension" ) as?
- And the object of custom data is value of custom data key. { "iat" : 1537399656 , "exp" : 1537400256 , "custom data" : { "location" : { "label" : "Location" , "value" : "1000 Stockton St, San Francisco, CA, United States" , "type" : "string" }, "dashboard url" : { "label" : "Dashboard URL" , "value" : "http://(company name)/dashboard/device user ID" , "type" : "url" }, "contact date" : { "label" : "Contact Date" , "value" : 1537399655992 , "type" : "date" }, "membership number" : { "label" : "Membership Number" , "value" : 62303 , "type" : "number" }, "model" : { "label" : "Model" , "value" : "iPhone" , "type" : "string" }, "os version" : { "label" : "OS Version" , "value" : "12.0" , "type" : "string" }, "last transaction id" : { "label" : "Last Transaction ID" , "value" : "243324DE-01A1-4F71-BABC-3572B77AC487" , "type" : "string" }, "battery" : { "label" : "Battery" , "value" : "-100%" , "type" : "string" }, "bluetooth" : { "label" : "Bluetooth" , "value" : "Bluetooth not supported" , "type" : "string" }, "wifi" : { "label" : "Wi-Fi" , "value" : "Wi-Fi not connected" , "type" : "string" }, "ssn" : { "invisible to agent" : true , "label" : "Social Security Number" , "value" : "102-186-1837" , "type" : "string" } } } Each data is similar to JSON object format and should contain the key, value, type, and label.
- UJETCustomData customData = [ UJETCustomData new ] ; [ customData setExternalChatTransfer : jsonString ] ; UJETStartOptions options = [ UJETStartOptions new ] ; options . unsignedCustomData = customData ; [ UJET startWithOptions : options ] ; JSON format: greeting override: string agent: dictionary name: string avatar: string [url of agent avatar, optional] transcript: array sender: string ["end user" or "agent"] timestamp: string [ie "2021-03-15 12:00:00Z"] content: array type: string [one of text, media] text: string [required for text type] media: dictionary [required for media type] type: string [one of image, video] url: string [public url pointing at media file] JSON example: { "greeting override" : "Please hold while we connect you with a human agent." , "agent" : { "name" : "Name" , "avatar" : "avatar url" }, "transcript" : [ { "sender" : "agent" , "timestamp" : "2021-03-15 12:00:15Z" , "content" : [ { "type" : "text" , "text" : " Suggestions shown: \n\n Help with batch or delivery\n Help with metrics or order feedback\n Help with Instant Cashout" } ] }, { "sender" : "end user" , "timestamp" : "2021-03-15 12:00:16Z" , "content" : [ { "type" : "text" , "text" : "Help with batch or delivery" } ] } ] } You can use Markdown on the text type.
- UJETEventEmailDidClick Queue Menu Data UJETEventEmailDidSubmit Queue Menu Data has attachment: (NSNumber) @YES, @NO UJETEventSessionViewDidAppear type: @"call", @"chat" timestamp: (NSString) ISO 8601 UJETEventSessionViewDidDisappear type: @"call", @"chat" timestamp: (NSString) ISO 8601 UJETEventSessionDidCreate Session Data UJETEventSessionDidEnd Session Data agent name: (NSString) null if agent didn't join duration: (NSNumber) only for call ended by: (NSString) type=call: @"agent", @"end user" type=chat: @"agent", @"end user", @"timeout", @"dismissed" UJETEventSdkDidTerminate UJETEventPostSessionOptInDidSelected opt in selected: (NSString) @"Yes", @"No" Event Data Metadata application: @"iOS" app id: (NSString) bundle identifier app version: (NSString) company: (NSString) subdomain device model: (NSString) device version: (NSString) sdk version: (NSString) timestamp: (NSString) ISO 8601 Queue Menu Data Metadata menu id: NSString menu key: NSString, nullable menu name: NSString menu path : NSString Session Data Queue Menu Data session id: NSString type: @"call", @"chat" end user identifier: NSString Setup Screen Share If you want to use Screen Share feature, then integrate UJETCobrowseKit.xcframework .

