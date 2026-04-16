---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.011Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Disable multicast for call routing"
feature_slug: "disable-multicast-for-call-routing"
latest_feature_date: "2026-02-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_Routing"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features"
keywords:
  - "disable"
  - "multicast"
  - "call"
  - "routing"
  - "can"
  - "configured"
  - "so"
  - "calls"
---

# Disable multicast for call routing

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Call routing can be configured to disable multicast so calls are offered to one agent at a time through deltacast.

## Extended Definition

Call routing can be configured to disable multicast so calls are offered to one agent at a time through deltacast.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_Routing](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_Routing)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)

## Supporting Pages

### "Multicast and deltacast \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_Routing](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_Routing)
- Source ID: `site-docs-reference-required-8`
- Final score: 207
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following diagram shows the deltacast routing flow: Turn on deltacast for calls globally This section shows you how to switch from the default multicast routing to deltacast routing.
- Deltacast for calls If enabled, deltacast extends to the following: Transfers Scheduled calls Calls routed using Direct Access Points (DAPs) Queues with cascade groups enabled Queues with percent allocation groups This section outlines deltacast routing logic and describes how to enable this feature.
- Deltacast is an intelligent routing system unique to CCAI Platform that uses logic to disperse calls to individual agents, rather than giving agents the same opportunity to answer.
- View deltacast and multicast call data All notifications offered, pickup attempts, and successfully answered calls are logged and can be viewed in reports and reporting APIs.

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 175
- Re-rank relevance: N/A

Evidence snippets:
- Specific Interactive Voice Response (IVR) inbound routing If you have a line that is specific to a particular customer type or marketing promotion, Direct Access Points can be used to direct phone calls to that specific point in the queue.
- When scheduled calls are enabled for queues with Cascade groups : If available, an agent from the highest level group will be assigned the calls first, then the next group in the standard routing order.
- Unanswered Transferred Call Expiration Expires all unanswered transferred calls and unanswered deflected callbacks in queues when the wait duration in the queue reaches the time configured.
- If all agents decline the call, the call switches to a multicast projection, where agents cannot decline calls.

### "Chat Settings and Features \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- Source ID: `site-docs-reference`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- When disabled, agents will no longer receive new calls when on a chat.
- Please see Chat Routing: Multicast and Deltacast for all routing logic details Agent experience When the chat is assigned to an agent, and is approximately three seconds from being connected, the agent receives a browser notification, New Chat Picked Up.
- New calls while on a chat : If an agent is assigned to both call and chat queues, enabling this setting will allow the agent to be assigned new calls when they are on a chat.
- Chat Routing - Auto Answer Overview Auto Answer connects chats automatically to agents, decreasing wait time and maximizing agent productivity.

