---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.043Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Web SDK accessibility"
feature_slug: "web-sdk-accessibility"
latest_feature_date: "2025-08-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-attachments-chat-api"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/mid-session-authentication-apps-api"
keywords:
  - "web"
  - "sdk"
  - "accessibility"
  - "version"
  - "37"
  - "improves"
  - "better"
  - "align"
---

# Web SDK accessibility

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Web SDK version 3.37 improves accessibility to better align with the European Accessibility Act.

## Extended Definition

Web SDK version 3.37 improves accessibility to better align with the European Accessibility Act.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-attachments-chat-api](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-attachments-chat-api)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/mid-session-authentication-apps-api](https://docs.cloud.google.com/contact-center/ccai-platform/docs/mid-session-authentication-apps-api)

## Supporting Pages

### "Agent file attachments with the chat platform API \_|\_ Google Cloud Contact\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-attachments-chat-api](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-attachments-chat-api)
- Source ID: `site-docs-reference`
- Final score: 62
- Re-rank relevance: N/A

### "Mid-Session authentication by API \_|\_ Google Cloud Contact Center as a\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/mid-session-authentication-apps-api](https://docs.cloud.google.com/contact-center/ccai-platform/docs/mid-session-authentication-apps-api)
- Source ID: `site-docs-reference-required-5`
- Final score: 60
- Re-rank relevance: N/A

### "iOS SDK guide \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide)
- Source ID: `site-docs-reference`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- For reference, see the example app and uncomment the customizeChatTheme method. func customizeChatTheme () throws { guard let file = Bundle . main . path ( forResource : "chat-theme-custom" , ofType : "json" ) else { return } let json = try String . init ( contentsOfFile : file , encoding : . utf8 ) let chatTheme = UJETChatTheme . init ( jsonString : json ) let quickReplyTheme = UJETChatQuickReplyButtonTheme () quickReplyTheme . style = . individual quickReplyTheme . alignment = . right quickReplyTheme . backgroundColor = UJETColorRef ( assetName : "white color" ) quickReplyTheme . backgroundColorForHighlightedState = UJETColorRef ( assetName : "quick reply color" ) quickReplyTheme . textColor = UJETColorRef ( assetName : "quick reply color" ) quickReplyTheme . textColorForHighlightedState = UJETColorRef ( assetName : "white color" ) let fontTheme = UJETFontTheme () fontTheme . family = "Arial Rounded MT Bold" fontTheme . size = 14 quickReplyTheme . font = fontTheme chatTheme ? . quickReplyButtonTheme = quickReplyTheme let globalTheme = UJETGlobalTheme () globalTheme . chatTheme = chatTheme globalTheme . defaultAgentImage = UIImage ( named : "agent avatar image" ) globalTheme . font = UIFont ( name : "Arial Rounded MT Bold" , size : 14 ) UJET . setGlobalTheme ( globalTheme ) } Content cards theme You can add customization for content cards together with chat customization.
- And the object of custom data is value of custom data key. { "iat" : 1537399656 , "exp" : 1537400256 , "custom data" : { "location" : { "label" : "Location" , "value" : "1000 Stockton St, San Francisco, CA, United States" , "type" : "string" }, "dashboard url" : { "label" : "Dashboard URL" , "value" : "http://(company name)/dashboard/device user ID" , "type" : "url" }, "contact date" : { "label" : "Contact Date" , "value" : 1537399655992 , "type" : "date" }, "membership number" : { "label" : "Membership Number" , "value" : 62303 , "type" : "number" }, "model" : { "label" : "Model" , "value" : "iPhone" , "type" : "string" }, "os version" : { "label" : "OS Version" , "value" : "12.0" , "type" : "string" }, "last transaction id" : { "label" : "Last Transaction ID" , "value" : "243324DE-01A1-4F71-BABC-3572B77AC487" , "type" : "string" }, "battery" : { "label" : "Battery" , "value" : "-100%" , "type" : "string" }, "bluetooth" : { "label" : "Bluetooth" , "value" : "Bluetooth not supported" , "type" : "string" }, "wifi" : { "label" : "Wi-Fi" , "value" : "Wi-Fi not connected" , "type" : "string" }, "ssn" : { "invisible to agent" : true , "label" : "Social Security Number" , "value" : "102-186-1837" , "type" : "string" } } } Each data is similar to JSON object format and should contain the key, value, type, and label.
- UJETEventEmailDidClick Queue Menu Data UJETEventEmailDidSubmit Queue Menu Data has attachment: (NSNumber) @YES, @NO UJETEventSessionViewDidAppear type: @"call", @"chat" timestamp: (NSString) ISO 8601 UJETEventSessionViewDidDisappear type: @"call", @"chat" timestamp: (NSString) ISO 8601 UJETEventSessionDidCreate Session Data UJETEventSessionDidEnd Session Data agent name: (NSString) null if agent didn't join duration: (NSNumber) only for call ended by: (NSString) type=call: @"agent", @"end user" type=chat: @"agent", @"end user", @"timeout", @"dismissed" UJETEventSdkDidTerminate UJETEventPostSessionOptInDidSelected opt in selected: (NSString) @"Yes", @"No" Event Data Metadata application: @"iOS" app id: (NSString) bundle identifier app version: (NSString) company: (NSString) subdomain device model: (NSString) device version: (NSString) sdk version: (NSString) timestamp: (NSString) ISO 8601 Queue Menu Data Metadata menu id: NSString menu key: NSString, nullable menu name: NSString menu path : NSString Session Data Queue Menu Data session id: NSString type: @"call", @"chat" end user identifier: NSString Setup Screen Share If you want to use Screen Share feature, then integrate UJETCobrowseKit.xcframework .
- HTTPMethod = @ "POST" ; NSError error ; // Make client's custom data UJETCustomData customData = [[ UJETCustomData alloc ] init ] ; [ customData set : @ "name" label : @ "Name" stringValue : @ "USER NAME" ] ; [ customData set : @ "os version" label : @ "OS Version" stringValue : [[ UIDevice currentDevice ] systemVersion ]] ; [ customData set : @ "model" label : @ "Model number" numberValue : [ NSNumber numberWithInteger : 1234 ]] ; [ customData set : @ "temperature" label : @ "Temperature" numberValue : [ NSNumber numberWithFloat : 70.5 ]] ; [ customData set : @ "purchase date" label : @ "Purchase Date" dateValue : [ NSDate date ]] ; [ customData set : @ "dashboard url" label : @ "Dashboard" urlValue : [ NSURL URLWithString : @ "http://internal.dashboard.com/1234" ]] ; NSDictionary data = @ { @ "custom data" : [ customData getData ] }; mutableRequest .

