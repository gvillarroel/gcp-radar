---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.004Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "HubSpot mobile phone number lookup"
feature_slug: "hubspot-mobile-phone-number-lookup"
latest_feature_date: "2026-03-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide"
keywords:
  - "hubspot"
  - "mobile"
  - "phone"
  - "number"
  - "lookup"
  - "adds"
  - "integration"
  - "matching"
---

# HubSpot mobile phone number lookup

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Adds HubSpot integration support for matching contacts by mobile phone number during incoming voice or chat sessions.

## Extended Definition

Adds HubSpot integration support for matching contacts by mobile phone number during incoming voice or chat sessions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide)

## Supporting Pages

### "Salesforce integration guide \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- Source ID: `site-docs-reference`
- Final score: 200
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Sync button behavior Sync button works on the following types of Salesforce objects: Case page CCAI Platform finds the current lookup object - Contact, Account, Person Account, or Lead The phone number field is populated based on the default phone setting Contact or Account or PersonAccount or Lead page If the current object is the same object type as lookup object, the object is populated and the object's phone number field.
- Call and chat routing User segment DAP : CCAI Platform will search for a contact using phone number (IVR) or email address (Mobile) or custom field (Mobile) from Salesforce to match settings in the queue and directly route call or chat to the queue.
- Add phone numbers as lookup numbers in CCAI Platform portal All phone number types across every CRM object (Contact, Account, Lead, and so on) are available selections in the CCAI Platform portal.
- CCAI Platform looks for a match between the phone number of an incoming call and the phone number in this field (except for SDK-based sessions where SDK custom field matching is turned on).

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Agent UI CCAI Platform uses the caller's phone number or UID to lookup the matching Account and Record, presenting the Agent with any matching options.
- Requesting new phone numbers Contact Support and include the following information about your preferences: Number type: Toll-free, National, Mobile, Local Location of number Number preference details about number structure or patterns Set up emergency and special services calling (US and Canada only) With CCAI Platform, agents in the US and Canada can make calls to emergency and special services using phone numbers that you dedicate to these types of calls.
- In the case that you don't have phone numbers stored in your CRM, or prefer to use a Unique ID (UID) for this contact lookup instead, CCAI Platform can deliver the same seamless experience.
- Mobile and web SDK calls If the caller's phone number is not available, but User email or User ID is passed using the SDK, then the record drop-down is available.

### "iOS SDK guide \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide)
- Source ID: `site-docs-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- And the object of custom data is value of custom data key. { "iat" : 1537399656 , "exp" : 1537400256 , "custom data" : { "location" : { "label" : "Location" , "value" : "1000 Stockton St, San Francisco, CA, United States" , "type" : "string" }, "dashboard url" : { "label" : "Dashboard URL" , "value" : "http://(company name)/dashboard/device user ID" , "type" : "url" }, "contact date" : { "label" : "Contact Date" , "value" : 1537399655992 , "type" : "date" }, "membership number" : { "label" : "Membership Number" , "value" : 62303 , "type" : "number" }, "model" : { "label" : "Model" , "value" : "iPhone" , "type" : "string" }, "os version" : { "label" : "OS Version" , "value" : "12.0" , "type" : "string" }, "last transaction id" : { "label" : "Last Transaction ID" , "value" : "243324DE-01A1-4F71-BABC-3572B77AC487" , "type" : "string" }, "battery" : { "label" : "Battery" , "value" : "-100%" , "type" : "string" }, "bluetooth" : { "label" : "Bluetooth" , "value" : "Bluetooth not supported" , "type" : "string" }, "wifi" : { "label" : "Wi-Fi" , "value" : "Wi-Fi not connected" , "type" : "string" }, "ssn" : { "invisible to agent" : true , "label" : "Social Security Number" , "value" : "102-186-1837" , "type" : "string" } } } Each data is similar to JSON object format and should contain the key, value, type, and label.
- UJETGlobalOptions options = [ UJETGlobalOptions new ] ; options.fallbackPhoneNumber = @ "+18001112222" ; options.preferredLanguage = @ "en" ; [ UJET setGlobalOptions:options ] ; Show or hide the download transcript button You can configure the SDK to show or hide the download transcript button in the chat options menu and in the post-chat screen.
- The recommended format is + followed by country code and phone number. eg. +18001112222.
- We recommend setting your company IVR number in UJETGlobalOptions.fallbackPhoneNumber.

