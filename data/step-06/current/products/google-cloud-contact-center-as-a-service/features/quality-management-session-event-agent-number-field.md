---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.077Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Quality management session event agent_number field"
feature_slug: "quality-management-session-event-agent-number-field"
latest_feature_date: "2024-08-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
keywords:
  - "quality"
  - "management"
  - "session"
  - "event"
  - "agent"
  - "number"
  - "field"
  - "call"
---

# Quality management session event agent_number field

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Call session event payloads now include the agent_number value for events with an agent participant.

## Extended Definition

Call session event payloads now include the agent_number value for events with an agent participant.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)

## Supporting Pages

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- Session types for reporting For reporting, calls to or from direct phone numbers generate the following session types: Voice Inbound (Direct) : an inbound call to a direct phone number Voice Outbound (Direct) : an outbound call from a direct phone number Voice Internal : an internal call to or from a direct phone number Estimated wait time announcement for calls Estimated Wait Time (EWT) Announcements use a calculation to predict the wait time until a caller is connected with an agent.
- Emergency queues don't support the following: Virtual agents Overcapacity deflections Automatic redirections Target metrics Blended SMS Presession SMS deflections Call redaction Surveys CSAT ratings IVR payments Custom URLs Before you begin To configure an emergency service callback queue, you'll need a phone number that is dedicated to emergency or special services calls .
- Restrict outbound calling for agents (new number) To restrict outbound calling for agents, follow these steps: Go to Settings > Call > Phone Number Management > Add Number and configure the number as a special service number.
- Prerequisites In order to enable the Pre-session Deflection, you must have the following: A valid CCAI Platform account with Admin role assigned A valid Legacy, Pro, Enterprise, or Digital License Package A valid subscription for CCAI Platform IVR Support with IVR enabled A valid subscription for CCAI Platform SMS Support enabled with a valid queue structure The SMS must be functional (agent assigned) Basic configuration Do the following procedures, in order: Enable pre-session SMS deflection Enable and save the pre-session SMS deflection offer and opted-in messages Enable and save the pre-session SMS deflection greeting message Configure pre-session SMS deflection for a specific queue Enable pre-session SMS deflection Go Settings > Call.

### "Standard Reports Agent and Teams Data Sets \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Agents_and_Teams_Data_Set)
- Source ID: `site-docs-reference`
- Final score: 200
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Date and Timestamp Agent Status Summary and Timeline Report Agent statuses, also known as Aux codes, are used to track time spent on different tasks, make agents available for calls or chats, and are used extensively for workforce management.
- Repeat Contact : # of callers that had multiple incoming sessions that finished in the same queue within the configured repeat contact timeframe set in Settings > Operation Management.
- Total Preset SMS Sent: Total number of preset SMS sent by Agents using SMS Blending features like In Call and Wait Time SMS.
- Total Deltacast Missed Call Status Count : (Calls only) Total number of times an Agent is placed in Missed Call status.

### "Agent Assist \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist](https://docs.cloud.google.com/contact-center/ccai-platform/docs/agent-assist)
- Source ID: `site-docs-reference`
- Final score: 199
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This lets you use Agent Assist with the following session types: Calls to direct phone numbers Calls to agent extension numbers Outbound calls where no queue is selected Chats transferred directly to another agent Note: When a chat is transferred, the originating agent sees Agent Assist as it's configured for the originating team or queue, and the receiving agent sees Agent Assist as it's configured for the receiving team or queue.
- Searching for articles : Agents can manually search for specific knowledge articles by entering keywords into the Knowledge base search field Search results appear as tiles, similar to automatic suggestions, and can be clicked to view the article Note: If a chat is transferred to another agent, the knowledge articles remain accessible to the new agent until the session ends or the transferring agent exits.
- Generative knowledge assist Note: If a call is transferred to another agent, the knowledge articles will remain accessible to the new agent until the session ends or the transferring agent exits.
- Interaction history Interaction history lets your agents view the end-user's interactions from previous call and chat sessions.

