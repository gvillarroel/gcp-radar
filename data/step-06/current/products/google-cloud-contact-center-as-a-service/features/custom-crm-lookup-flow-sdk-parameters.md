---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.061Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Custom CRM lookup flow SDK parameters"
feature_slug: "custom-crm-lookup-flow-sdk-parameters"
latest_feature_date: "2024-11-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/iva-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide"
keywords:
  - "custom"
  - "crm"
  - "lookup"
  - "flow"
  - "sdk"
  - "parameters"
  - "can"
  - "now"
---

# Custom CRM lookup flow SDK parameters

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

The CRM lookup flow can now use SDK data parameters.

## Extended Definition

The CRM lookup flow can now use SDK data parameters.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/iva-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/iva-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)

## Supporting Pages

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- Voicemail: Once the agent has listened to the voicemail, they will be given the option to call the consumer back, and the entered custom callback number will be used What happens when a consumer hangs up before completing the flow?
- Blocked or unknown caller behavior CCAI Platform checks for blocked numbers and automatically triggers the custom callback flow.
- Default messages There are 2 messages that are not customizable and will be played during the custom callback flow.
- When enabled, configure the TSS or upload a custom greeting in Settings Languages & Messages Deflection to Voicemail option - Request Already Placed Message. - Limit consumer to 1 voicemail per queue: a consumer could leave a separate voicemail request on a separate queue. - Limit consumer to 1 voicemail request across all queues: voicemail option not available if an unattended voicemail is already left form the phone number.

### "Interactive Virtual Assistant (IVA) guide \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/iva-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/iva-guide)
- Source ID: `site-docs-reference`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- You can define session parameters in this payload from the Dialogflow CX interaction to pass in custom headers using SIP by assigning key value pairs in sip parameters .
- The following is an sample custom payload: { "ujet" : { "type" : "action" , "action" : "deflection" , "deflection type" : "sip" "sip uri" : "sip:1-999-123-4567@voip-provider.example.net:5060" "sip refer" : true "sip parameters" : { "x-header" : "value" , "x-header" : "value" } } } In the example, "sip refer": true indicates that the call is transferred using the SIP REFER method.
- Virtual agent escalation using SIP integration This section explains how to create a Dialogflow CX custom payload for virtual agent escalations when you have the following requirements: The virtual agent needs to escalate to human agents on your own contact center using SIP.
- You get access to Dialogflow for natural language understanding, Customer Experience Insights for real-time interaction analysis, and Agent Assist summarization for generating summaries of conversations.

### "Salesforce integration guide \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- Source ID: `site-docs-reference`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- No Case: ability to connect the CCAI Platform Custom Session object directly to any Salesforce account object, bypassing the need to create a case This builds on two related features: Option to look-up end users in Person Account object (instead of Contact ( default )) Option to leverage our CCAI Platform Session Object which stores all assets and data related to a single session in optimized CCAI Platform Session object Configuration availability requirements The configuration options for Account Lookup and Session Data are only available if the following conditions are met: Account Lookup configuration To configure custom account lookup settings, the following is required: Logged in Agent - at least one agent needs to be logged into a CCAI Platform adapter in Salesforce.
- Salesforce flexible lookup permission changes For Flexible Account lookup, the Agent permission set needs to be adjusted in order to open up flexibility regarding how CCAI Platform manages Salesforce data and process flow.
- To configure a custom lookup field for sessions originating from the web SDK or the mobile SDKs, do the following: Select the Mobile / Web SDKs: lookup users by custom field for SDK sessions checkbox.
- When an incoming call arrives, the system attempts to find a match between the incoming phone number and the lookup field to identify the customer.

