---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.087Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Agent availability fields in status and wait time APIs"
feature_slug: "agent-availability-fields-in-status-and-wait-time-apis"
latest_feature_date: "2024-02-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features"
keywords:
  - "agent"
  - "availability"
  - "fields"
  - "status"
  - "wait"
  - "time"
  - "apis"
  - "current"
---

# Agent availability fields in status and wait time APIs

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

The current status and wait time APIs return additional fields for agent availability counts.

## Extended Definition

The current status and wait time APIs return additional fields for agent availability counts.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)

## Supporting Pages

### "Standard Reports Agent and Teams Data Sets \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set)
- Source ID: `site-docs-reference`
- Final score: 188
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Occupancy : [Total time Agent status = In-Call or In-Chat or Wrap-up] / [Total time agent status = Available] Volume per Hour : Average volume of interactions per hour (per hour referenced as 24 hours in a day, regardless of hours of operation) Handle Time: Calls: average (call duration + hold time + default wrap-up status associated with a Call ID) Chats: average chat duration only (no wrap-up status applied) Longest Handle Time : Longest call/chat duration Calls: max(call duration + average default wrap-up status associated with an interaction ID) Chats: max chat duration only (no wrap-up status applied) Hold Time : Average duration (in seconds) that a consumer was placed on hold by an Agent.
- Date and Timestamp Agent Status Summary and Timeline Report Agent statuses, also known as Aux codes, are used to track time spent on different tasks, make agents available for calls or chats, and are used extensively for workforce management.
- For a detailed timeline view of when and for how long an agent was in each status, as well as other detailed actions, pull the Agent Activity Timeline Report.
- Longest Hold Time : Max duration (in seconds) that a consumer was placed on hold by an Agent Wait Time : Average time a consumer spends in the queue.

### "Salesforce integration guide \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- Source ID: `site-docs-reference`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Agent transferred from: agent initiating the session transfer Agent transferred to: agent receiving the session transfer Created at: time transfer was created Fail reason: reason for failure of session transfer Menu transferred from: the originating queue menu from which transfer was initiated Menu transferred to: queue menu the session was transferred to Session: CCAI Platform session ID Status: status of transfer Transfer from materialized path: the materialized path transfer was originated from Transfer to materialized path: the materialized path the session was transferred to CCAI Platform agent experience in Salesforce Lightning Provide expected CCAI Platform behaviour in Salesforce Lightning to Admins and Agents, specifically when connecting to the Activity object rather than the CCAI Platform Session object.
- Feature details 1 to 1 Salesforce agent account to CCAI Platform agent account mapping is required This feature allows for 1-way sync from the CRM -> CCAI Platform If the status is changed in CCAI Platform, the CRM status will not be changed Status change behavior CCAI Platform statuses protected from real-time CRM changes If an agent is In-call, In-chat, or Wrap-up, the status inherited from the CRM will be applied once the call, chat, or wrap-up has ended.
- Session type: call or chat Call duration: duration of session from start to end Queued at: time session entered the queue Assigned at: time session was assigned to agent Wait: total wait duration in queue before being assigned to an agent for the session Hold Duration: length of hold time does not include wait time (calls only) Answer Type: indicates whether session was auto (0) or manually (1) answered Fail reason: reason why a session "failed" and details.
- Salesforce: Agent status inheritance The CCAI Platform agent status inheritance feature gives admins an ability to map CRM agent statuses to CCAI Platform agent status to be updated in real-time.

### "Chat Settings and Features \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- Source ID: `site-docs-reference`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- If After Hour Deflection is disabled, mark the checkbox Allow transfers to queues outside of operation for the following behavior: Agents will be able to see the following queues as options to transfer to in the Agent Adapter All queues within operating hours All queues that are outside of hours of operation with no deflection enabled and active, logged-in agents All queues that are after hours with an assigned virtual agent in 24-hour availability mode Agents will not be able to see the following types of queues: All queues that are after hours with after hour deflection enabled All queues that are outside of operating hours with an assigned virtual agent limited to queue hours of operation Enable over capacity deflection : Specify the estimated wait time threshold for the consumer to be deflected to the options set below.
- Dismissed chat details Dismissal settings can be set globally or per-queue When chats have been dismissed, they do not accrue wait time For a chat to be dismissed, both the consumer and agent have to have sent at least one message The dismiss eligibility timer starts from the latest message from an agent Only inbound chats can be dismissed When chats are dismissed and later reactivated, a consumer has to send at least one message afterward before the chat is eligible to be dismissed again Dismissed chats are ultimately ended when the chat timeout duration is met When chats are dismissed, activities are added to the chat transcript Chat Flow CCAI Platform portal configuration Dismissing chats - global setting A global configuration for all chat channels can be configured in Chat Settings.
- Real-time and Standard Reporting Real-time reports Dismissed chats are moved from Chats > Ongoing to Chats Previous The status for dismissed chats on the Previous Chats page is Dismissed - Inactive End user If that chat is restarted by the consumer sending a response, the chat is placed back in queue and will show in Chats > Future When an agent picks up a restarted chat, that chat will be moved to the Ongoing chat page Reporting The chat duration timer stops as soon as a chat has been placed into dismissed status.
- Feature benefits For Managers and Admins Automatically remind agents to respond promptly to conversations For Agents Visually shows which chat needs their attention first For end-users Less waiting time and quicker resolution time Feature details The response timer starts when the agent is assigned and the consumer has sent a message and applies even if an agent has not yet sent a message If the agent responds, the counter will not begin again until the consumer replies.

