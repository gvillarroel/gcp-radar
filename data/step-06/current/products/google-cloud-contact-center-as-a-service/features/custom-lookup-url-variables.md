---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.033Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Custom lookup URL variables"
feature_slug: "custom-lookup-url-variables"
latest_feature_date: "2025-10-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-configure-widgets"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide"
keywords:
  - "custom"
  - "lookup"
  - "url"
  - "variables"
  - "urls"
  - "now"
  - "five"
  - "additional"
---

# Custom lookup URL variables

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Custom lookup URLs now support five additional variables for caller, agent, session, and outbound phone number data.

## Extended Definition

Custom lookup URLs now support five additional variables for caller, agent, session, and outbound phone number data.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-configure-widgets](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-configure-widgets)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)

## Supporting Pages

### "Configure custom panels \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-configure-widgets](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-desktop-configure-widgets)
- Source ID: `site-docs-reference`
- Final score: 107
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- End-user variables {UJET ID} : the end-user ID {ANI} : the end-user's phone number {DEVICE TYPE} : the device type of the end-user Session variables {SESSION TYPE} : the session type {PHONE NUMBER} : the end-user's phone number {SESSION ID} : the call ID or chat ID {MENU PATH} : the URL path to the menu {QUEUE NAME} : the name of the queue {QUEUE ID} : the internal queue ID {LANGUAGE} : the queue language {OUTBOUND PHONE NUMBER} : the outbound phone number {SUPPORT PHONE NUMBER} : the support phone number the end-user is calling Functions You can include functions from the following table in URLs and HTTP header field values.
- Agent variables {AGENT ID} : the agent ID {AGENT CUSTOM ID} : the agent's custom ID {AGENT EMAIL} : the agent's email {AGENT ALIAS} : the agent's alias {AGENT LOCATION LANGUAGE} : the language code for the language of the agent's assigned location—for example, en-US .
- Variables You can include the following variables in URLs and HTTP header field values.
- A custom panel displays one or more URLs for external resources.

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- Emergency queues don't support the following: Virtual agents Overcapacity deflections Automatic redirections Target metrics Blended SMS Presession SMS deflections Call redaction Surveys CSAT ratings IVR payments Custom URLs Before you begin To configure an emergency service callback queue, you'll need a phone number that is dedicated to emergency or special services calls .
- When enabled, configure the TSS or upload a custom greeting in Settings Languages & Messages Deflection to Voicemail option - Request Already Placed Message. - Limit consumer to 1 voicemail per queue: a consumer could leave a separate voicemail request on a separate queue. - Limit consumer to 1 voicemail request across all queues: voicemail option not available if an unattended voicemail is already left form the phone number.
- Customize announcement By default the estimated wait announcement will be announced using a TTS voice: "Thank you for calling, your estimated wait time is @{ESTIMATED WAIT TIME IN MINUTES}." To customize the message follow these steps: Record a custom audio file that leaves room at the end for the system to fill in the variable for what the estimated wait time will be announced as.
- When enabled, configure the TSS or upload a custom greeting in Settings > Languages & Messages Overcapacity deflection callback option - Request Already Placed message. - Limit consumer to 1 callback request per queue: a consumer could leave a separate callback request on a different queue than the first request. - Limit consumer to 1 callback request across all queues.

### "Salesforce integration guide \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- Source ID: `site-docs-reference`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- No Case: ability to connect the CCAI Platform Custom Session object directly to any Salesforce account object, bypassing the need to create a case This builds on two related features: Option to look-up end users in Person Account object (instead of Contact ( default )) Option to leverage our CCAI Platform Session Object which stores all assets and data related to a single session in optimized CCAI Platform Session object Configuration availability requirements The configuration options for Account Lookup and Session Data are only available if the following conditions are met: Account Lookup configuration To configure custom account lookup settings, the following is required: Logged in Agent - at least one agent needs to be logged into a CCAI Platform adapter in Salesforce.
- To configure a custom lookup field for sessions originating from the web SDK or the mobile SDKs, do the following: Select the Mobile / Web SDKs: lookup users by custom field for SDK sessions checkbox.
- When an incoming call arrives, the system attempts to find a match between the incoming phone number and the lookup field to identify the customer.
- Mark the SDK Custom Lookup field to activate the option to pass a custom user identifier (UID) to CCAI Platform for end user lookup.

