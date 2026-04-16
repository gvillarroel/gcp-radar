---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.097Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Custom caller ID using SIP headers"
feature_slug: "custom-caller-id-using-sip-headers"
latest_feature_date: "2023-12-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Supervisory_Monitoring_Data_Set"
keywords:
  - "custom"
  - "caller"
  - "id"
  - "sip"
  - "headers"
  - "administrators"
  - "can"
  - "set"
---

# Custom caller ID using SIP headers

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Administrators can set a custom caller ID from an incoming SIP header for call connecting and connected screens.

## Extended Definition

Administrators can set a custom caller ID from an incoming SIP header for call connecting and connected screens.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Supervisory_Monitoring_Data_Set](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Supervisory_Monitoring_Data_Set)

## Supporting Pages

### "Customizing languages, recordings, & messages \_|\_ Google Cloud Contact\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages)
- Source ID: `site-docs-reference-2`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- Custom Audio Files & Hold Music Details Overview Almost all messages that are played to callers can be customized with your audio recordings.
- Customer-facing languages currently include: Arabic Czech Chinese, Simplified Chinese, Traditional Danish Dutch English (Australian) English (Canada) English (UK) English (US) Finnish French (France) French (Canada) German Hungarian Italian Japanese Korean Norwegian Polish Portuguese (Brazil) Portuguese (Portugal) Spanish (Spain) Spanish (Mexico) Swedish Thai Turkish Vietnamese Note: Text-to-Speech (TTS) is not yet available for these languages.
- If you still need help, email support@yourcompany.com Chat : Shows once the chat option is selected with other queues available for selection below Example after hours chat screen: Sample variable attributes for customizing web and mobile messages The following variables can be inserted into Mobile and Web SDK messages and reference either information passed from the SDK or wait information.
- When selecting a Mobile App, the Channel drop-down automatically regulates all message configurations listed in both "Mobile & Web SDK" and "Audible Messages" sections for the selected mobile app, with the following exceptions: IVR Purchase Flow Messages All IVR messages customized for use within a mobile app can currently only be configured for English US.

### "Call and Chat Settings \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings)
- Source ID: `site-docs-reference`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- Voicemail : directs the caller to voicemail with an option to customize the voicemail greeting.
- Here is an example reserved data properties in a SIP header: se tt i n g : { redirec t io n : { op t io n : "sip" , sip : { uri : "Destination SIP URI" , da ta parame ters e na bled : true false , da ta parame ters : [ { f ield : "verified customer" , t ype : "dynamic" , source : "ujet metadata" , source f ield : "Incoming Field" }, { f ield : "bad actor" , t ype : "dynamic" , source : "ujet metadata" , source f ield : "Incoming Field" }, { f ield : "repeat customer" , t ype : "dynamic" , source : "ujet metadata" , source f ield : "Incoming Field" } ], da ta records : { i n me ta da ta : true false , i n crm record : true false } } } } Support for virtual agents If you have a virtual agent (a support agent or a virtual task assistant) that performs end-user verification, the virtual agent can pass the end-user verification information to CCAI Platform.
- Viewing live chat UI Agent : Name of Agent as entered on the Users and Teams page End User : Consumer name or unique ID if available Issue : Queue menu path View Case / Ticket : If your CRM is integrated with Contact Center AI Platform (CCAI Platform), click the link to view the CRM record associated with the chat session After Hour Deflection for Calls and Chats Overview Customize your consumer's experience by configuring specific deflection paths for when consumers try to contact you outside of your Hours of Operation are first configured, then deflection is enabled and configured at the global level in the Call Settings and Chat Settings pages.
- You can send reserved data properties to CCAI Platform in the following ways: Send reserved data properties using the SDKs Send reserved data properties using the Apps API Send reserved data properties using SIP headers Send reserved data properties using the SDKs You can send reserved data properties to CCAI Platform using the following SDKs: Web SDK Android SDK iOS SDK Send reserved data properties using the Apps API You can send reserved data properties to CCAI Platform using the Apps API, even after a session has begun.

### "Standard Reports: Supervisory Monitoring Data Set \_|\_ Google Cloud Contact\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Supervisory_Monitoring_Data_Set](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Supervisory_Monitoring_Data_Set)
- Source ID: `site-docs-reference`
- Final score: 84
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

