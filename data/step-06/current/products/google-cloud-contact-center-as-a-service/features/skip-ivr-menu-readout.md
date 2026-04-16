---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.031Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Skip IVR menu readout"
feature_slug: "skip-ivr-menu-readout"
latest_feature_date: "2025-11-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_Routing"
keywords:
  - "skip"
  - "ivr"
  - "menu"
  - "readout"
  - "call"
  - "flows"
  - "can"
  - "route"
---

# Skip IVR menu readout

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Call flows can skip the IVR menu readout and route callers directly to the default queue.

## Extended Definition

Call flows can skip the IVR menu readout and route callers directly to the default queue.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_Routing](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_Routing)

## Supporting Pages

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- IVR - End User Dial '0' Behavior Choose routing when 0 is dialed: Dialing '0' moves user back up one level in IVR : If there are multiple menu levels, the caller will be routed to the queue one level back.
- Select a specific menu : The caller will be routed to the menu of your choosing.
- Overcapacity deflection message (if enabled) Estimated wait time announcement (if enabled) Connecting Message Record a Call Message (if enabled) Pre-Call Notification of CSAT survey (if enabled) Any other messages (if applicable) Wait Time SMS consent voice readout (if enabled and "keep waiting" is selected) Configure call settings This section explains configuration options in CCAI Platform.
- Call experience flows Call Flow experience for different call types Overcapacity Deflection IVR Mobile Afterhours Deflection IVR Mobile Recording Per Queue Option Temporary Redirect per IVR Queue Credit Card Over IVR Scheduled calls Rather than waiting in queue for an agent, give consumers the option to select a time that works for them to receive a call from an agent.

### "Customizing languages, recordings, & messages \_|\_ Google Cloud Contact\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages)
- Source ID: `site-docs-reference-2`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- To skip the IVR queue menu readout, do the following.
- In the text field, enter the IVR queue menu readout message—for example, Press one for product issues, press two for order status, press three for billing information. .
- In the Settings pane, for IVR Queue Menu Readout , do one of the following: To configure a text-to-speech message, do the following: Select Text-to-speech .
- IVR message types The following message types are available: IVR Greeting : the initial message played before the queue menu readout .

### "Multicast and deltacast \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_Routing](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_Routing)
- Source ID: `site-docs-reference-required-8`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- It applies to all chat types and the following chat flows: Transfers Chats routed through Direct Access Points (DAPs) Queues with cascade groups enabled Queues with percent allocation groups enabled Eligible agents To receive a deltacast call, an agent must fulfill one of following requirements: Status is set to Available.
- Optional: Skip cascade group timer The skip cascade group timer capabilities let you bypass the cascade timer settings and route a call or chat to the next available agent, regardless of your cascade group.
- If the deltacast attempt count has run out, the call is routed using multicast to the rest of the agents assigned to that queue menu option.
- Deltacast for calls If enabled, deltacast extends to the following: Transfers Scheduled calls Calls routed using Direct Access Points (DAPs) Queues with cascade groups enabled Queues with percent allocation groups This section outlines deltacast routing logic and describes how to enable this feature.

