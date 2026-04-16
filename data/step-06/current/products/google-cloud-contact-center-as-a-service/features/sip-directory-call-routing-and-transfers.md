---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.128Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "SIP Directory call routing and transfers"
feature_slug: "sip-directory-call-routing-and-transfers"
latest_feature_date: "2023-05-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_Routing"
keywords:
  - "sip"
  - "directory"
  - "call"
  - "routing"
  - "transfers"
  - "can"
  - "used"
  - "configure"
---

# SIP Directory call routing and transfers

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

The SIP Directory can be used to configure SIP call routing and transfers in IVR queue settings.

## Extended Definition

The SIP Directory can be used to configure SIP call routing and transfers in IVR queue settings.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_Routing](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_Routing)

## Supporting Pages

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- Specific Interactive Voice Response (IVR) inbound routing If you have a line that is specific to a particular customer type or marketing promotion, Direct Access Points can be used to direct phone calls to that specific point in the queue.
- Depending on how you configure your instance, an end-user can directly call an agent in one of two ways: enter the agent's extension number at the beginning of a call, or call the agent from the agent directory.
- Configure estimated wait time announcements Estimated Wait Time (EWT) caller announcements are used in voice systems to inform callers about their expected wait times and manage their expectations.
- Prerequisites In order to enable the Pre-session Deflection, you must have the following: A valid CCAI Platform account with Admin role assigned A valid Legacy, Pro, Enterprise, or Digital License Package A valid subscription for CCAI Platform IVR Support with IVR enabled A valid subscription for CCAI Platform SMS Support enabled with a valid queue structure The SMS must be functional (agent assigned) Basic configuration Do the following procedures, in order: Enable pre-session SMS deflection Enable and save the pre-session SMS deflection offer and opted-in messages Enable and save the pre-session SMS deflection greeting message Configure pre-session SMS deflection for a specific queue Enable pre-session SMS deflection Go Settings > Call.

### "Chat Settings and Features \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- To configure the redaction settings, do the following: To redact sensitive data from all incoming messages, select the Automatically redact all incoming messages to agents checkbox.
- To configure the redaction settings, do the following: To redact sensitive data from all incoming messages, select the Automatically redact all incoming messages to agents checkbox.
- When the limit is reached for a session, you can configure whether no additional transfers are allowed, or whether one final transfer to a specified queue is allowed.
- Chat Routing - Auto Answer Overview Auto Answer connects chats automatically to agents, decreasing wait time and maximizing agent productivity.

### "Multicast and deltacast \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_Routing](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_Routing)
- Source ID: `site-docs-reference-required-8`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Deltacast for calls If enabled, deltacast extends to the following: Transfers Scheduled calls Calls routed using Direct Access Points (DAPs) Queues with cascade groups enabled Queues with percent allocation groups This section outlines deltacast routing logic and describes how to enable this feature.
- It applies to all chat types and the following chat flows: Transfers Chats routed through Direct Access Points (DAPs) Queues with cascade groups enabled Queues with percent allocation groups enabled Eligible agents To receive a deltacast call, an agent must fulfill one of following requirements: Status is set to Available.
- If cascade groups are also being used If a deltacast call is routed to an agent and the agent does not answer within the time set in the deltacast timeout setting: When deltacast attempt counts remain for the call, it's routed to an available agent with the next longest duration.
- The following diagram shows the deltacast routing flow: Turn on deltacast for calls globally This section shows you how to switch from the default multicast routing to deltacast routing.

