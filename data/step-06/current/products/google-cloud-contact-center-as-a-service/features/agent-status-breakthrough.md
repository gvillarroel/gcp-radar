---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.103Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Agent Status Breakthrough"
feature_slug: "agent-status-breakthrough"
latest_feature_date: "2023-10-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_Routing"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set"
keywords:
  - "agent"
  - "status"
  - "breakthrough"
  - "incoming"
  - "calls"
  - "can"
  - "routed"
  - "agents"
---

# Agent Status Breakthrough

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Incoming calls can be routed to agents even when they are in statuses that normally do not accept calls.

## Extended Definition

Incoming calls can be routed to agents even when they are in statuses that normally do not accept calls.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_Routing](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_Routing)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set)

## Supporting Pages

### "Multicast and deltacast \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_Routing](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_Routing)
- Source ID: `site-docs-reference-required-8`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Deltacast routing logic for calls An incoming call is routed to the agent in status Available with the longest duration since they last ended a call.
- Calls are not projected to agents in Missed Call status; they are only routed to agents in Available or In-chat status.
- Deltacast routing logic for chat Basic routing: When a chat enters the queue, the chat is offered to a single, eligible agent (status Available or In-Chat), according to these rules: If multiple agents are in Available status, the chat is routed to the agent with the longest period of time since they were last in In-Chat status.
- It applies to all chat types and the following chat flows: Transfers Chats routed through Direct Access Points (DAPs) Queues with cascade groups enabled Queues with percent allocation groups enabled Eligible agents To receive a deltacast call, an agent must fulfill one of following requirements: Status is set to Available.

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- CCAI Platform supports the following emergency and special services phone numbers: US emergency numbers Canada emergency numbers Canada special service numbers 911 - Emergency 911 - Emergency 211 - Public information and referral services 933 - Emergency test 311 - Non-emergency municipal government services 411 - Local directory assistance 511 - Weather and traveler information services 611 - Repair service 711 - Message relay service (MRS) 811 - Non-urgent health care telephone triage service 988 - Suicide and crisis lifeline Turn emergency calling on or off Turn on emergency calling to let authorized agents make and manage emergency and special services calls in the call adapter.
- Requesting new phone numbers Contact Support and include the following information about your preferences: Number type: Toll-free, National, Mobile, Local Location of number Number preference details about number structure or patterns Set up emergency and special services calling (US and Canada only) With CCAI Platform, agents in the US and Canada can make calls to emergency and special services using phone numbers that you dedicate to these types of calls.
- Emergency queues don't support the following: Virtual agents Overcapacity deflections Automatic redirections Target metrics Blended SMS Presession SMS deflections Call redaction Surveys CSAT ratings IVR payments Custom URLs Before you begin To configure an emergency service callback queue, you'll need a phone number that is dedicated to emergency or special services calls .
- Deflections for agent to agent, end-user to agent, and direct calls When you set up agent to agent calling , end-user to agent calling or direct inbound calling , Google recommends configuring deflections or redirects for times when agents aren't available.

### "Standard Reports Agent and Teams Data Sets \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set)
- Source ID: `site-docs-reference`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Date and Timestamp Agent Status Summary and Timeline Report Agent statuses, also known as Aux codes, are used to track time spent on different tasks, make agents available for calls or chats, and are used extensively for workforce management.
- Occupancy : [Total time Agent status = In-Call or In-Chat or Wrap-up] / [Total time agent status = Available] Volume per Hour : Average volume of interactions per hour (per hour referenced as 24 hours in a day, regardless of hours of operation) Handle Time: Calls: average (call duration + hold time + default wrap-up status associated with a Call ID) Chats: average chat duration only (no wrap-up status applied) Longest Handle Time : Longest call/chat duration Calls: max(call duration + average default wrap-up status associated with an interaction ID) Chats: max chat duration only (no wrap-up status applied) Hold Time : Average duration (in seconds) that a consumer was placed on hold by an Agent.
- Total Deltacast Missed Call Status Count : (Calls only) Total number of times an Agent is placed in Missed Call status.
- Total Auto Answered Calls: Total number of interactions that were assigned to Agents via auto answer.

