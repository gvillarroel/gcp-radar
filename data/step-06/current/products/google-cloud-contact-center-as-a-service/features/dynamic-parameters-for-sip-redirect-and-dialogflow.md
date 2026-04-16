---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.120Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Dynamic parameters for SIP Redirect and Dialogflow"
feature_slug: "dynamic-parameters-for-sip-redirect-and-dialogflow"
latest_feature_date: "2023-08-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/iva-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Voicemail_Details_Data_Set"
keywords:
  - "dynamic"
  - "parameters"
  - "sip"
  - "redirect"
  - "dialogflow"
  - "sessions"
  - "can"
  - "use"
---

# Dynamic parameters for SIP Redirect and Dialogflow

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

SIP Redirect and Dialogflow sessions can use new real-time dynamic parameters such as DNIS, latest agent details, queue language, and sentiment scores.

## Extended Definition

SIP Redirect and Dialogflow sessions can use new real-time dynamic parameters such as DNIS, latest agent details, queue language, and sentiment scores.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/iva-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/iva-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Voicemail_Details_Data_Set](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Voicemail_Details_Data_Set)

## Supporting Pages

### "Interactive Virtual Assistant (IVA) guide \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/iva-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/iva-guide)
- Source ID: `site-docs-reference`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- You can define session parameters in this payload from the Dialogflow CX interaction to pass in custom headers using SIP by assigning key value pairs in sip parameters .
- Note: If you need to send dynamic session parameters from the virtual agent interaction, consider using virtual agent deflection to external telephony.
- To pass data from your inbound SIP Headers to Dialogflow CX with the BYOC integration, you need to enable pass data parameters for your instance.
- The following is an sample custom payload: { "ujet" : { "type" : "action" , "action" : "deflection" , "deflection type" : "sip" "sip uri" : "sip:1-999-123-4567@voip-provider.example.net:5060" "sip refer" : true "sip parameters" : { "x-header" : "value" , "x-header" : "value" } } } In the example, "sip refer": true indicates that the call is transferred using the SIP REFER method.

### "Standard Reports: Voicemail Details Data Set \_|\_ Google Cloud Contact\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Voicemail_Details_Data_Set](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Voicemail_Details_Data_Set)
- Source ID: `site-docs-reference`
- Final score: 92
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "Call and Chat Settings \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings)
- Source ID: `site-docs-reference`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- Here is an example reserved data properties in a SIP header: se tt i n g : { redirec t io n : { op t io n : "sip" , sip : { uri : "Destination SIP URI" , da ta parame ters e na bled : true false , da ta parame ters : [ { f ield : "verified customer" , t ype : "dynamic" , source : "ujet metadata" , source f ield : "Incoming Field" }, { f ield : "bad actor" , t ype : "dynamic" , source : "ujet metadata" , source f ield : "Incoming Field" }, { f ield : "repeat customer" , t ype : "dynamic" , source : "ujet metadata" , source f ield : "Incoming Field" } ], da ta records : { i n me ta da ta : true false , i n crm record : true false } } } } Support for virtual agents If you have a virtual agent (a support agent or a virtual task assistant) that performs end-user verification, the virtual agent can pass the end-user verification information to CCAI Platform.
- In the Destination Field , enter a field name that your CRM will recognize, and that Dialogflow CX will use as a parameter.
- In the Destination Field , enter a field name that your CRM will recognize, and that Dialogflow CX will use as a parameter.
- You determine which reserved data parameters apply to an end-user based on your own systems and processes.

