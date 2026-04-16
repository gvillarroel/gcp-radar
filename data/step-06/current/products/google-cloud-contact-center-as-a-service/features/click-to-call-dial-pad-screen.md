---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.020Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Click-to-call dial pad screen"
feature_slug: "click-to-call-dial-pad-screen"
latest_feature_date: "2025-11-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-adapter-agent-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings"
keywords:
  - "click"
  - "call"
  - "dial"
  - "pad"
  - "screen"
  - "instances"
  - "crm"
  - "can"
---

# Click-to-call dial pad screen

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Instances with CRM click-to-call can show a dial pad screen before a call starts so agents can adjust call details.

## Extended Definition

Instances with CRM click-to-call can show a dial pad screen before a call starts so agents can adjust call details.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-adapter-agent-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-adapter-agent-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings)

## Supporting Pages

### "Receive and make calls \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-adapter-agent-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-adapter-agent-guide)
- Source ID: `site-docs-reference-required-8`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you have a Salesforce or Zendesk customer relationship management (CRM) app, click the phone number that you want to dial, paste a phone number into the call adapter, or dial the number.
- To make an outbound call using flexible outbound dialing, follow these steps: In the call adapter, click Start call .
- If auto-answer is enabled, an Incoming call screen appears in the call adapter and the target pick-up time a After you answer the call, the following sequence begins in the call adapter: A new screen appears that displays caller information, queue information, and the support phone number that the caller used.
- Optional: If you have a CRM app and there is no account ID for the phone number that you are calling, click the open in new open icon next to Account ID to open your CRM app and create an account.

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see the following: Salesforce : Outbound click to call Kustomer : Kustomer click to call ServiceNow : Add Click to Call to the top of the form Show the dial pad screen If you have a CRM configured for click-to-call, you can configure your instance to display the dial pad screen after an agent clicks a phone number in the CRM but before a call starts.
- To show the dial pad screen for click-to-call, follow these steps: In the CCAI Platform portal, click Settings > Operation Management .
- The number of dialed, failed, and completed calls are reported for the following types of calls: Calls to emergency services Conference calls with emergency services Calls to special services Conference calls with special services Configure global call settings You can configure global call settings on the Settings > Call page of CCAI Platform.
- For more information about setting up flexible outbound dialing, see: Flexible outbound dialing (for Salesforce) Flexible outbound dialing (for Zendesk) For more information about using flexible outbound dialing, see Make an outbound call using flexible outbound dialing .

### "Call and Chat Settings \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings)
- Source ID: `site-docs-reference`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- Viewing live chat UI Agent : Name of Agent as entered on the Users and Teams page End User : Consumer name or unique ID if available Issue : Queue menu path View Case / Ticket : If your CRM is integrated with Contact Center AI Platform (CCAI Platform), click the link to view the CRM record associated with the chat session After Hour Deflection for Calls and Chats Overview Customize your consumer's experience by configuring specific deflection paths for when consumers try to contact you outside of your Hours of Operation are first configured, then deflection is enabled and configured at the global level in the Call Settings and Chat Settings pages.
- Available Monitoring Pages to end a Call or Chat: Call Monitoring Page ( Calls > Connected , Calls > Queued ) Chat Monitoring Page ( Chats > Connected , Chat > Queued ) Go to call or chat row that you want to end and click on the dots under the Actions column.
- Use countdown for calls : Plays an audible message to the agent counting down seconds until the caller is live on the phone: "You're up - call starting in 3,2,1." Incoming call notification : Click on each option to hear the tone.
- Process Note : Since this prompts the caller to take and send a screenshot of the current page, guide them to the part of the app that you would want to view a screenshot of before initiating the screenshot request.

