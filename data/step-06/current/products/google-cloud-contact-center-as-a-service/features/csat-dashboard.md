---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.041Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "CSAT dashboard"
feature_slug: "csat-dashboard"
latest_feature_date: "2025-08-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/conversational-insights"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide"
keywords:
  - "csat"
  - "dashboard"
  - "provides"
  - "insight"
  - "into"
  - "customer"
  - "satisfaction"
  - "ratings"
---

# CSAT dashboard

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

The dashboard provides insight into customer satisfaction ratings for agent sessions.

## Extended Definition

The dashboard provides insight into customer satisfaction ratings for agent sessions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/conversational-insights](https://docs.cloud.google.com/contact-center/ccai-platform/docs/conversational-insights)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide)

## Supporting Pages

### "Real-time dashboards and monitoring pages \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)
- Source ID: `site-docs-reference`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- See SLA in Data Dictionary for more details Handled See Data Dictionary Abandoned % See Data Dictionary Incoming SLA See Data Dictionary Transfer SLA See Data Dictionary Call and chat average handle time (AHT) The final section on this dashboard will give you insight into AHT (Average Handle Time) for your highest volume queues.
- See Virtual Agent Platform statuses in Virtual Agent configuration Inactive: Virtual Agent is turned off Explorable metrics in real-time call and chat dashboards Overview Drill-down on explorable metrics in the Call and Chat Real time Dashboards to obtain additional insight into performance and details about the metric.
- Handled Total number of completed interactions ASA / Sec Average speed to answer AHT / Sec Average Handle Time Virtual agent chat dashboard This dashboard provides a range of status, session, and performance insights for Chat sessions attended by the Virtual Agents.
- Voice virtual agent dashboard Overview The dashboard displays metrics such as sentiment ratings, resolution rates, CSAT, and other performance data for virtual agents.

### "Customer Experience Insights and Quality AI \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/conversational-insights](https://docs.cloud.google.com/contact-center/ccai-platform/docs/conversational-insights)
- Source ID: `site-docs-reference`
- Final score: 106
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Google Cloud CCaaS User Guides Send feedback Customer Experience Insights and Quality AI Stay organized with collections Save and categorize content based on your preferences.
- Understanding conversational data drives business value, improves operational efficiency, and provides a voice for customer feedback.
- Customer Experience Insights helps you detect and visualize patterns in your contact center data.
- The provided labels are imported: Metadata key Calls Chats Description hold duration ✔ Duration that the end-user was put on hold for in seconds. customer phone number ✔ The phone number of the end-user. outbound number ✔ The phone number that the outbound call was placed from (outbound calls only). transfers ✔ ✔ The number of times the call was transferred. has feedback ✔ ✔ Whether the conversation had a feedback response. fail reason ✔ ✔ The reason for the failure of the conversation. out ticket id ✔ ✔ The ticket ID of the conversation. agent assist conversation id X ✔ ✔ The Agent Assist conversation ID of the conversation. dialogflow conversation id X ✔ ✔ The Dialogflow CX conversation ID of the conversation. queue priority level ✔ ✔ The priority level of the conversation. answer type ✔ ✔ The type of the answer. session type v2 ✔ ✔ The type of the session. menu ✔ ✔ The menu of the conversation.

### "iOS SDK guide \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/ios-sdk-guide)
- Source ID: `site-docs-reference`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- And the object of custom data is value of custom data key. { "iat" : 1537399656 , "exp" : 1537400256 , "custom data" : { "location" : { "label" : "Location" , "value" : "1000 Stockton St, San Francisco, CA, United States" , "type" : "string" }, "dashboard url" : { "label" : "Dashboard URL" , "value" : "http://(company name)/dashboard/device user ID" , "type" : "url" }, "contact date" : { "label" : "Contact Date" , "value" : 1537399655992 , "type" : "date" }, "membership number" : { "label" : "Membership Number" , "value" : 62303 , "type" : "number" }, "model" : { "label" : "Model" , "value" : "iPhone" , "type" : "string" }, "os version" : { "label" : "OS Version" , "value" : "12.0" , "type" : "string" }, "last transaction id" : { "label" : "Last Transaction ID" , "value" : "243324DE-01A1-4F71-BABC-3572B77AC487" , "type" : "string" }, "battery" : { "label" : "Battery" , "value" : "-100%" , "type" : "string" }, "bluetooth" : { "label" : "Bluetooth" , "value" : "Bluetooth not supported" , "type" : "string" }, "wifi" : { "label" : "Wi-Fi" , "value" : "Wi-Fi not connected" , "type" : "string" }, "ssn" : { "invisible to agent" : true , "label" : "Social Security Number" , "value" : "102-186-1837" , "type" : "string" } } } Each data is similar to JSON object format and should contain the key, value, type, and label.
- HTTPMethod = @ "POST" ; NSError error ; // Make client's custom data UJETCustomData customData = [[ UJETCustomData alloc ] init ] ; [ customData set : @ "name" label : @ "Name" stringValue : @ "USER NAME" ] ; [ customData set : @ "os version" label : @ "OS Version" stringValue : [[ UIDevice currentDevice ] systemVersion ]] ; [ customData set : @ "model" label : @ "Model number" numberValue : [ NSNumber numberWithInteger : 1234 ]] ; [ customData set : @ "temperature" label : @ "Temperature" numberValue : [ NSNumber numberWithFloat : 70.5 ]] ; [ customData set : @ "purchase date" label : @ "Purchase Date" dateValue : [ NSDate date ]] ; [ customData set : @ "dashboard url" label : @ "Dashboard" urlValue : [ NSURL URLWithString : @ "http://internal.dashboard.com/1234" ]] ; NSDictionary data = @ { @ "custom data" : [ customData getData ] }; mutableRequest .
- The following is an example of reserved data properties in custom data: { "custom data": { "reserved verified customer": { "label": "Verified Customer", "value": " VERIFIED CUSTOMER BOOLEAN ": , "type": "boolean" }, "reserved bad actor": { "label": "Bad Actor", "value": " VERIFIED BAD ACTOR BOOLEAN ": , "type": "boolean" }, "reserved repeat customer": { "label": "Repeat Customer", "value": " REPEAT CUSTOMER BOOLEAN ": , "type": "boolean" } } } Replace the following: VERIFIED CUSTOMER BOOLEAN : True if you consider this end-user to be a legitimate customer.
- Configure external deflection link icons You can customize the icon in the external deflection link channel by uploading icon into asset catalog of your app and ensure to use the same icon name while creating external deflection link in Settings > Chat > External Deflection Links > View links > Add Deflection Link in the Admin Portal.

