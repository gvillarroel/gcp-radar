---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.131Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Manager API calls endpoint fields"
feature_slug: "manager-api-calls-endpoint-fields"
latest_feature_date: "2023-04-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages"
keywords:
  - "manager"
  - "calls"
  - "endpoint"
  - "fields"
  - "v1"
  - "includes"
  - "machine"
  - "detected"
---

# Manager API calls endpoint fields

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

The /manager/api/v1/calls endpoint includes Machine Detected and Skipped fields for campaign call status analysis.

## Extended Definition

The /manager/api/v1/calls endpoint includes Machine Detected and Skipped fields for campaign call status analysis.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)

## Supporting Pages

### "Salesforce integration guide \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- Source ID: `site-docs-reference`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- Session details The available dataset for sessions includes the following fields: Call/Chat ID: CCAI Platform call or chat ID Created at: when the call, chat was created Ended at: when the call, chat was ended Channel: call or chat type (for example, Mobile, Web).
- CCAI Platform session data set fields The available dataset for sessions includes the following fields.
- Sample UI of multiple CCAI Platform sessions related to a case CCAI Platform session object data hierarchy The session object is organized as follows: Session(s) related list: the list of session(s) related to a case or account object Session Detail : presents the core session object details Core session fields: lists any associated transfers and files File list: any files that have been uploaded or created as part of the session File detail: all details about a file, including access to file itself Actions: a list of actions that occurred during the session Action detail: additional info about a specific action Transfers: complete list of transfers that occurred during the session Transfer detail: displays all fields and data associated with a single transfer events CCAI Platform session overview After opening a session, the following view will be provided, listing all associated CCAI Platform session actions, attached files, and transfers.
- Case owner and assignment After the default administrator is enabled, the default administrator is used as the owner for the following: Ticket/case and contact creation when a new chat is initiated before an agent is assigned to the chat Voicemail tickets/cases before receiving a callback call Call ticket/cases for abandoned calls (if enabled) Note: If the default user is not configured, CCAI Platform uses a random Agent When a call/chat is transferred: CCAI Platform assigns the case to the agent who the call is transferred to.

### "Chat Settings and Features \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- Source ID: `site-docs-reference`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- Feature benefits For Managers and Admins Automatically remind agents to respond promptly to conversations For Agents Visually shows which chat needs their attention first For end-users Less waiting time and quicker resolution time Feature details The response timer starts when the agent is assigned and the consumer has sent a message and applies even if an agent has not yet sent a message If the agent responds, the counter will not begin again until the consumer replies.
- For a custom CRM with a generic API, the chat transcript can be added as a file attachment if the Upload a file endpoint is configured, or posted as a comment if the Comment endpoint has been configured.
- New calls while on a chat : If an agent is assigned to both call and chat queues, enabling this setting will allow the agent to be assigned new calls when they are on a chat.
- Further information displayed includes: if the link is enabled (On/Off), configuration details (display name, url, icon) as well as assigned queues.

### "Real-time dashboards and monitoring pages \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)
- Source ID: `site-docs-reference`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- Call Volume Count of inbound or outbound interactions offered, regardless of whether they were handled by an agent or not (includes abandons, failed contacts, etc) Handled Count of inbound or outbound interactions touched by an agent (excludes agent <> agent transfers) Transfer % SUM of finished or failed segments that are a transfer / SUM of all finished or failed segments Inbound Count of interactions created by a consumer and offered - regardless of whether it was handled by an agent (includes abandons, failed contacts, etc) Outbound Count of interactions created by an agent or auto-dialing system, regardless of whether the consumer answers the call Calls in Queue Count of inbound interactionscurrentlywaiting in queue AHT (average call duration + average wrap-up status associated with a Call ID) Chat Volume Count of interactions offered, regardless of whether they were handled by an agent or not (includes abandons, failed contacts, etc) Handled Count of interactions touched by an agent (excludes agent <> agent transfers) Transfer % Sum of finished or failed interactions that are a transfer / Sum of all finished or failed interactions Chat Concurrency The average concurrency of all ongoing chats (live metric) Avg Response Time Average time (seconds) that it takes for an agent to respond to a consumer Chats in Queue Count of inbound interactionscurrentlywaiting in queue AHT Average chat duration (no wrap-up status applied) SLA metrics The top of the SLA Metrics shows two charts for Call SLA and Chat SLA respectively.
- Agent Agents selected by specific name Supervisor Agents who are members of one or more teams the selected Supervisor is assigned as Team Manager On-hold Current Agents who have calls on hold (by pressing the hold option).
- Historical report data generally includes short-abandoned calls, whereas the dashboard may not include this data based on settings in Settings > Operation Management .
- Call: Includes hold and wrap-up time Chat: includes chat duration Average Wrap-up (Calls) Average duration agent is in wrap-up status after call sessions.

