---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.077Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Partial response cancellation for virtual agents"
feature_slug: "partial-response-cancellation-for-virtual-agents"
latest_feature_date: "2024-08-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages"
keywords:
  - "partial"
  - "response"
  - "cancellation"
  - "virtual"
  - "agents"
  - "can"
  - "cancel"
  - "playback"
---

# Partial response cancellation for virtual agents

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Virtual agents can cancel partial-response playback when a final fulfillment arrives.

## Extended Definition

Virtual agents can cancel partial-response playback when a final fulfillment arrives.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)

## Supporting Pages

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- Automatic cancellation : Rolled-over callbacks are cancelled if the queue is deleted, human agents are no longer assigned to the queue on the next business day, or the fulfillment hours are deleted.
- Emergency queues don't support the following: Virtual agents Overcapacity deflections Automatic redirections Target metrics Blended SMS Presession SMS deflections Call redaction Surveys CSAT ratings IVR payments Custom URLs Before you begin To configure an emergency service callback queue, you'll need a phone number that is dedicated to emergency or special services calls .
- Virtual agents cannot be assigned to an emergency queue.
- CCAI Platform supports the following emergency and special services phone numbers: US emergency numbers Canada emergency numbers Canada special service numbers 911 - Emergency 911 - Emergency 211 - Public information and referral services 933 - Emergency test 311 - Non-emergency municipal government services 411 - Local directory assistance 511 - Weather and traveler information services 611 - Repair service 711 - Message relay service (MRS) 811 - Non-urgent health care telephone triage service 988 - Suicide and crisis lifeline Turn emergency calling on or off Turn on emergency calling to let authorized agents make and manage emergency and special services calls in the call adapter.

### "Real-time dashboards and monitoring pages \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)
- Source ID: `site-docs-reference`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- Users Repeating/Returning: Total number of consumers who returned to interact with the same Virtual Agent within 24 hours of a previous session "Did not Understand" Rate: The % of Virtual Agent chat messages sent where a Virtual Agent states that they did not understand the consumer (No. of default fallback responses / Total no. of VA responses) 100 Current status Top queues : Top 5 chat queues in order of the highest to lowest total Virtual Agent sessions Top Virtual Agents: Top 5 Virtual Agents in order of the highest success rates Virtual Agent status Online: Enabled and functioning Virtual Agents Offline: Enabled but unreachable.
- Dashboard tiles and definitions Virtual agent sessions Consumer Initiated : The total chat sessions initiated by the consumers and handled by Virtual Agents Transferred from Human Agent : The total of chat sessions that are answered by a human agent and then transferred to a Virtual Agent Total Messages Exchanged : The total number of individual messages exchanged between a Virtual Agent and a consumer during a chat session Avg.
- Handled Total number of completed interactions ASA / Sec Average speed to answer AHT / Sec Average Handle Time Virtual agent chat dashboard This dashboard provides a range of status, session, and performance insights for Chat sessions attended by the Virtual Agents.
- Voice virtual agent dashboard Overview The dashboard displays metrics such as sentiment ratings, resolution rates, CSAT, and other performance data for virtual agents.

### "Chat Settings and Features \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- Source ID: `site-docs-reference`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- If After Hour Deflection is disabled, mark the checkbox Allow transfers to queues outside of operation for the following behavior: Agents will be able to see the following queues as options to transfer to in the Agent Adapter All queues within operating hours All queues that are outside of hours of operation with no deflection enabled and active, logged-in agents All queues that are after hours with an assigned virtual agent in 24-hour availability mode Agents will not be able to see the following types of queues: All queues that are after hours with after hour deflection enabled All queues that are outside of operating hours with an assigned virtual agent limited to queue hours of operation Enable over capacity deflection : Specify the estimated wait time threshold for the consumer to be deflected to the options set below.
- Feature benefits For Managers and Admins Automatically remind agents to respond promptly to conversations For Agents Visually shows which chat needs their attention first For end-users Less waiting time and quicker resolution time Feature details The response timer starts when the agent is assigned and the consumer has sent a message and applies even if an agent has not yet sent a message If the agent responds, the counter will not begin again until the consumer replies.
- Overcapacity gives alternative contact options in times of high volume, chat dismissal and timeout settings help fine-tune how chats are handled by the system, and shortcuts help agents access quick responses.
- To complete your configuration, do the following: Select the Include transfer by virtual agent in total transfer count checkbox if you want transfers by virtual agents to be counted.

