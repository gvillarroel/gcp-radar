---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.130Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Session Type V2"
feature_slug: "session-type-v2"
latest_feature_date: "2023-05-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
keywords:
  - "session"
  - "type"
  - "v2"
  - "adds"
  - "fields"
  - "variables"
  - "distinguish"
  - "inbound"
---

# Session Type V2

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Session Type V2 adds new fields and variables that distinguish inbound SMS, outbound SMS, and outbound SMS via API.

## Extended Definition

Session Type V2 adds new fields and variables that distinguish inbound SMS, outbound SMS, and outbound SMS via API.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)

## Supporting Pages

### "Salesforce integration guide \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- Source ID: `site-docs-reference`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- Session details The available dataset for sessions includes the following fields: Call/Chat ID: CCAI Platform call or chat ID Created at: when the call, chat was created Ended at: when the call, chat was ended Channel: call or chat type (for example, Mobile, Web).
- Sample UI of multiple CCAI Platform sessions related to a case CCAI Platform session object data hierarchy The session object is organized as follows: Session(s) related list: the list of session(s) related to a case or account object Session Detail : presents the core session object details Core session fields: lists any associated transfers and files File list: any files that have been uploaded or created as part of the session File detail: all details about a file, including access to file itself Actions: a list of actions that occurred during the session Action detail: additional info about a specific action Transfers: complete list of transfers that occurred during the session Transfer detail: displays all fields and data associated with a single transfer events CCAI Platform session overview After opening a session, the following view will be provided, listing all associated CCAI Platform session actions, attached files, and transfers.
- Session type: call or chat Call duration: duration of session from start to end Queued at: time session entered the queue Assigned at: time session was assigned to agent Wait: total wait duration in queue before being assigned to an agent for the session Hold Duration: length of hold time does not include wait time (calls only) Answer Type: indicates whether session was auto (0) or manually (1) answered Fail reason: reason why a session "failed" and details.
- Call adapter display fields : Select the field types that appear in the call adapter when multiple accounts or records are matched.

### "Chat Settings and Features \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- Source ID: `site-docs-reference`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- The following variables are available: Customer Attributes : First Name : the end-user's first name Last Name : the end-user's last name Full Name : the end-user's full name Agent Attributes : First Name : the agent's first name Last Name : the agent's last name Full Name : the agent's full name Alias : the agent's alias ID : the agent's ID Session Attributes : Queue : the assigned queue Repeat this step to add more attributes.
- If After Hour Deflection is disabled, mark the checkbox Allow transfers to queues outside of operation for the following behavior: Agents will be able to see the following queues as options to transfer to in the Agent Adapter All queues within operating hours All queues that are outside of hours of operation with no deflection enabled and active, logged-in agents All queues that are after hours with an assigned virtual agent in 24-hour availability mode Agents will not be able to see the following types of queues: All queues that are after hours with after hour deflection enabled All queues that are outside of operating hours with an assigned virtual agent limited to queue hours of operation Enable over capacity deflection : Specify the estimated wait time threshold for the consumer to be deflected to the options set below.
- Dismissed chat details Dismissal settings can be set globally or per-queue When chats have been dismissed, they do not accrue wait time For a chat to be dismissed, both the consumer and agent have to have sent at least one message The dismiss eligibility timer starts from the latest message from an agent Only inbound chats can be dismissed When chats are dismissed and later reactivated, a consumer has to send at least one message afterward before the chat is eligible to be dismissed again Dismissed chats are ultimately ended when the chat timeout duration is met When chats are dismissed, activities are added to the chat transcript Chat Flow CCAI Platform portal configuration Dismissing chats - global setting A global configuration for all chat channels can be configured in Chat Settings.
- When the target response time is met, chats will not end Chats end when: Agent manually clicks end chat The consumer: Closes the active tab Navigates away from the page the chat session started on Clicks x on the chat session When the chat timeout threshold is reached CCAI Platform portal configuration Enabling global target response time Go to Settings > Chat .

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Session types for reporting For reporting, calls to or from direct phone numbers generate the following session types: Voice Inbound (Direct) : an inbound call to a direct phone number Voice Outbound (Direct) : an outbound call from a direct phone number Voice Internal : an internal call to or from a direct phone number Estimated wait time announcement for calls Estimated Wait Time (EWT) Announcements use a calculation to predict the wait time until a caller is connected with an agent.
- Available session types This flexible inbound call handling UI will show when the call session is one of the following types: Voice Inbound (IVR), Voice Callback (Web), Voice Scheduled (Web), Voice Inbound (Mobile), Voice Inbound (IVR using Mobile), Voice Scheduled (Mobile), & Voice Inbound (API).
- A call to a direct phone number generates a Voice Inbound (Direct) session type, while a call to a DAP generates a Voice Inbound (IVR) session type.
- The Assigned Queues / Agents column only displays queues or agents for the following types of numbers: IVR (outbound) SMS (inbound) SMS (outbound) WhatsApp Assigned queue (only for direct numbers) Assigned agent (only for direct numbers) Click Add Number .

