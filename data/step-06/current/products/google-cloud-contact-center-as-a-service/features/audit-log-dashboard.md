---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.036Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Audit Log dashboard"
feature_slug: "audit-log-dashboard"
latest_feature_date: "2025-10-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide"
keywords:
  - "audit"
  - "log"
  - "dashboard"
  - "shows"
  - "configuration"
  - "changes"
  - "instance"
  - "including"
---

# Audit Log dashboard

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

A dashboard that shows configuration changes to an instance, including what changed, who changed it, and when.

## Extended Definition

A dashboard that shows configuration changes to an instance, including what changed, who changed it, and when.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide)

## Supporting Pages

### "Real-time dashboards and monitoring pages \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)
- Source ID: `site-docs-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- See Virtual Agent Platform statuses in Virtual Agent configuration Inactive: Virtual Agent is turned off Explorable metrics in real-time call and chat dashboards Overview Drill-down on explorable metrics in the Call and Chat Real time Dashboards to obtain additional insight into performance and details about the metric.
- The dashboard can be filtered for various configurations, and you can drill into data by clicking to see filtered pages of Connected, Queued, or Completed chats , or the Agent Monitoring page.
- Overview The Call dashboard shows both real-time and aggregated data related to your contact center calls.
- Up to 5 queues show at a time and the volume shows everything including abandoned interactions.

### "Salesforce integration guide \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- Source ID: `site-docs-reference`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- CRM sends agent status update When Agent is not Offline in CCAI Platform, CRM status changes will be made in CCAI Platform based on status mapping When Agent is in Offline in CCAI Platform, CRM status changes will be ignored When the CRM status changes while on an active session/call CCAI Platform treats this status change the same as the agent Next Status feature and when the session is complete, after Wrap-up, the next status is governed by the new CRM status If the agent has defined their Next Status and a CRM status change request is also received, the agent's next status will be set to the latest received status Salesforce Configuration Configure omni-channel If your org has already configured Omni-Channel, skip this section.
- V 1.16 - supporting sessions, transfers, actions, files URL: https://login.salesforce.com/packaging/installPackage.apexp?p0=04t4M000000syZQ&isdtp=p1 V 1.17 - added Email field in Account object (UJET Email c) URL: https://login.salesforce.com/packaging/installPackage.apexp?p0=04t4M000000kkWd&isdtp=p1 Salesforce configuration updates The following configuration changes are required in Salesforce.
- Required Salesforce permission sets configuration Account object and field permission changes are required.
- Sample UI of multiple CCAI Platform sessions related to a case CCAI Platform session object data hierarchy The session object is organized as follows: Session(s) related list: the list of session(s) related to a case or account object Session Detail : presents the core session object details Core session fields: lists any associated transfers and files File list: any files that have been uploaded or created as part of the session File detail: all details about a file, including access to file itself Actions: a list of actions that occurred during the session Action detail: additional info about a specific action Transfers: complete list of transfers that occurred during the session Transfer detail: displays all fields and data associated with a single transfer events CCAI Platform session overview After opening a session, the following view will be provided, listing all associated CCAI Platform session actions, attached files, and transfers.

### "iOS SDK guide \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide)
- Source ID: `site-docs-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Project configurations The following sections outline the changes needed to configure the project.
- Do this by either using the json file (see the form card property ) or by using the UJETChatFormCardTheme class. func customizeChatTheme () throws { guard let file = Bundle.main.path ( forResource: "chat-theme-custom" , ofType: "json" ) else { return } let json = try String.init ( contentsOfFile: file, encoding: .utf8 ) let chatTheme = UJETChatTheme.init ( jsonString: json ) let formCardTheme = UJETChatFormCardTheme () formCardTheme.backgroundColor = UJETColorRef ( assetName: "agent message background color" ) formCardTheme.cornerRadius = 16 let formCardFontTheme = UJETFontTheme () formCardFontTheme.family = "Arial Rounded MT Bold" formCardFontTheme.size = 18 formCardTheme.font = formCardFontTheme let formCardBorder = UJETBorderTheme () formCardBorder.width = 1 formCardBorder.color = UJETColorRef ( assetName: "agent message border color" ) formCardTheme.border = formCardBorder let titleFontTheme = UJETFontTheme () titleFontTheme.family = "Arial Rounded MT Bold" titleFontTheme.size = 18 formCardTheme.title = titleFontTheme // The font family is inherited from the formCardFontTheme let subtitleFontTheme = UJETFontTheme () subtitleFontTheme.size = 12 formCardTheme.subtitle = subtitleFontTheme chatTheme?.formCard = formCardTheme let globalTheme = UJETGlobalTheme () globalTheme.chatTheme = chatTheme globalTheme.defaultAgentImage = UIImage ( named: "agent avatar image" ) globalTheme.font = UIFont ( name: "Arial Rounded MT Bold" , size: 14 ) UJET.setGlobalTheme ( globalTheme ) } Web form configuration To configure the web form capability, implement the ujetWebFormDidReceive method of the UJETDelegate protocol.
- And the object of custom data is value of custom data key. { "iat" : 1537399656 , "exp" : 1537400256 , "custom data" : { "location" : { "label" : "Location" , "value" : "1000 Stockton St, San Francisco, CA, United States" , "type" : "string" }, "dashboard url" : { "label" : "Dashboard URL" , "value" : "http://(company name)/dashboard/device user ID" , "type" : "url" }, "contact date" : { "label" : "Contact Date" , "value" : 1537399655992 , "type" : "date" }, "membership number" : { "label" : "Membership Number" , "value" : 62303 , "type" : "number" }, "model" : { "label" : "Model" , "value" : "iPhone" , "type" : "string" }, "os version" : { "label" : "OS Version" , "value" : "12.0" , "type" : "string" }, "last transaction id" : { "label" : "Last Transaction ID" , "value" : "243324DE-01A1-4F71-BABC-3572B77AC487" , "type" : "string" }, "battery" : { "label" : "Battery" , "value" : "-100%" , "type" : "string" }, "bluetooth" : { "label" : "Bluetooth" , "value" : "Bluetooth not supported" , "type" : "string" }, "wifi" : { "label" : "Wi-Fi" , "value" : "Wi-Fi not connected" , "type" : "string" }, "ssn" : { "invisible to agent" : true , "label" : "Social Security Number" , "value" : "102-186-1837" , "type" : "string" } } } Each data is similar to JSON object format and should contain the key, value, type, and label.
- HTTPMethod = @ "POST" ; NSError error ; // Make client's custom data UJETCustomData customData = [[ UJETCustomData alloc ] init ] ; [ customData set : @ "name" label : @ "Name" stringValue : @ "USER NAME" ] ; [ customData set : @ "os version" label : @ "OS Version" stringValue : [[ UIDevice currentDevice ] systemVersion ]] ; [ customData set : @ "model" label : @ "Model number" numberValue : [ NSNumber numberWithInteger : 1234 ]] ; [ customData set : @ "temperature" label : @ "Temperature" numberValue : [ NSNumber numberWithFloat : 70.5 ]] ; [ customData set : @ "purchase date" label : @ "Purchase Date" dateValue : [ NSDate date ]] ; [ customData set : @ "dashboard url" label : @ "Dashboard" urlValue : [ NSURL URLWithString : @ "http://internal.dashboard.com/1234" ]] ; NSDictionary data = @ { @ "custom data" : [ customData getData ] }; mutableRequest .

