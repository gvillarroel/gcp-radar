---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.071Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "First in first out queue routing"
feature_slug: "first-in-first-out-queue-routing"
latest_feature_date: "2024-09-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Queue_Data_Sets"
keywords:
  - "first"
  - "out"
  - "queue"
  - "routing"
  - "lets"
  - "transferred"
  - "standard"
  - "calls"
---

# First in first out queue routing

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

First in first out queue routing lets transferred and standard calls and chats share equal priority in queue assignment.

## Extended Definition

First in first out queue routing lets transferred and standard calls and chats share equal priority in queue assignment.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Queue_Data_Sets](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Queue_Data_Sets)

## Supporting Pages

### "Queue and menu setup \_|\_ Google Cloud Contact Center as a Service \_|\_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- Source ID: `site-docs-reference`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- Feature details Only agents assigned to calls from or to queues that have been specifically enabled will see the option to redact calls Calls initiated from an enabled queue that are transferred to a queue without call redaction enabled will not have the call redaction feature available Agents need to manually initiate and end the redaction Agents will still be able to hear during the redacted section of the call while on the live call Admin portal configuration Enable call redaction for inbound calls Go to Settings > Queue .
- Restrict queue transfers CCAI Platform lets you restrict the queues and teams that can transfer a session, and the queues and teams that can receive a transferred session.
- This lets you control the ability of agents to transfer sessions and receive transferred sessions based on the queues or teams that they belong to.
- EWT for calls For calls, EWT is calculated based on the following formula: EWT = ((average duration in channel / active agents in channel) (agents in common / active agents in current queue) (queued calls - available agents)) + {EWT for callbacks, campaign calls, and scheduled calls} EWT for chats For chats, EWT is calculated based on the following formula: EWT = (average duration in channel / active agents in channel) (agents in common / active agents in current queue) (queued chats - available agents) Note: In chat channels, the value for active agents includes a multiplier based on the chat concurrency if the chat concurrency is >1.

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- When scheduled calls are enabled for queues with Cascade groups : If available, an agent from the highest level group will be assigned the calls first, then the next group in the standard routing order.
- Specific Interactive Voice Response (IVR) inbound routing If you have a line that is specific to a particular customer type or marketing promotion, Direct Access Points can be used to direct phone calls to that specific point in the queue.
- Unanswered Transferred Call Expiration Expires all unanswered transferred calls and unanswered deflected callbacks in queues when the wait duration in the queue reaches the time configured.
- Emergency queues are hidden from agents, and calls can't be transferred to an emergency queue.

### "Standard Reports: Queue Data Sets \_|\_ Google Cloud Contact Center as a\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Queue_Data_Sets](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Queue_Data_Sets)
- Source ID: `site-docs-reference`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Calculation: Count of calls In SLA / (Count of calls In SLA + count of calls Out SLA) Count In SLA = Count of calls where queued time is less than the SLA threshold Count Out SLA = count of calls where queued time is equal to or greater than the SLA threshold Handled The sum of interactions that were handled.
- Calculation: Count of calls In SLA / (Count of calls In SLA + count of calls Out SLA) Count In SLA = Count of calls where queued time is less than the SLA threshold Count Out SLA = count of calls where queued time is equal to or greater than the SLA threshold Handled The sum of interactions that were handled.
- Home Documentation AI and ML Google Cloud CCaaS User Guides Send feedback Standard Reports: Queue Data Sets Stay organized with collections Save and categorize content based on your preferences.
- This includes: the first time that the interaction entered a queue, and subsequent entries to a queue after the work was accepted by an agent.

