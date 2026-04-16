---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.064Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Queue transfer restrictions"
feature_slug: "queue-transfer-restrictions"
latest_feature_date: "2024-11-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages"
keywords:
  - "queue"
  - "transfer"
  - "restrictions"
  - "agents"
  - "can"
  - "restricted"
  - "transferring"
  - "sessions"
---

# Queue transfer restrictions

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Agents can be restricted to transferring sessions only to approved queues or teams.

## Extended Definition

Agents can be restricted to transferring sessions only to approved queues or teams.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)

## Supporting Pages

### "Queue and menu setup \_|\_ Google Cloud Contact Center as a Service \_|\_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- Source ID: `site-docs-reference`
- Final score: 193
- Re-rank relevance: N/A

Evidence snippets:
- This lets you control the ability of agents to transfer sessions and receive transferred sessions based on the queues or teams that they belong to.
- Configure queue transfer restrictions You can configure transfer restrictions based on the queues that agents belong to.
- Details and tips Due to the number of digits on a keypad, there's a 9 top-level queue menu limit If you need to more than 9 queues, nest more queues within a top-level queue All numbers assigned to your environment will default to the top of the queue unless otherwise assigned as Direct Access points (DAPs) If you are using multiple languages, numbers will default to the language selection message, then when the language is selected, will route to the top of the menu structure for the selected language If you want to hide a queue from a caller who dials into a number that goes to the top of the queue, toggle the Hide Selection From Menu option to Hide in the menu settings For internal transfers to teams or groups not available to callers, create one queue, hide the option from callers, and create all the necessary sub-queues for agents to pick from for transfers Once your queues are set up, you can see the numbers that the caller needs to select.
- Feature details Only agents assigned to calls from or to queues that have been specifically enabled will see the option to redact calls Calls initiated from an enabled queue that are transferred to a queue without call redaction enabled will not have the call redaction feature available Agents need to manually initiate and end the redaction Agents will still be able to hear during the redacted section of the call while on the live call Admin portal configuration Enable call redaction for inbound calls Go to Settings > Queue .

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- Queue selection is limited by the following restrictions: Agents can only select queues that they are assigned to.
- Emergency queues are hidden from agents, and calls can't be transferred to an emergency queue.
- Emergency queues don't support the following: Virtual agents Overcapacity deflections Automatic redirections Target metrics Blended SMS Presession SMS deflections Call redaction Surveys CSAT ratings IVR payments Custom URLs Before you begin To configure an emergency service callback queue, you'll need a phone number that is dedicated to emergency or special services calls .
- The Assigned Queues / Agents column only displays queues or agents for the following types of numbers: IVR (outbound) SMS (inbound) SMS (outbound) WhatsApp Assigned queue (only for direct numbers) Assigned agent (only for direct numbers) Click Add Number .

### "Real-time dashboards and monitoring pages \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)
- Source ID: `site-docs-reference`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- Note: If your company has requested a time zone override for all its users, then the requested time zone will be displayed instead Metric definitions Service Level SL / 30min Service Level within the past 30min SL / day Service Level for the current day SL Target Service Level Target set for the queue Live CIQ Consumers in Queue LCW / Sec Longest Call Waiting AQD / Sec Average Queue Duration (Waiting for an Agent) Live Number of calls currently in progress with an agent Productive Agents Number of agents with a productive status Live Agent Status Available Count of all available agents On-hold (Calls only)Count of agents who have placed a consumer on-hold Wrap-up Count of all agents in the wrap-up status Custom Count of all agents in custom statuses that are configured as productive Productive Agents Count of all agents in a productive status as configured in Settings > Queue Groups Today ABN % Abandon rate Volume Total offered interactions including failed/abandoned sessions.
- Users Repeating/Returning: Total number of consumers who returned to interact with the same Virtual Agent within 24 hours of a previous session "Did not Understand" Rate: The % of Virtual Agent chat messages sent where a Virtual Agent states that they did not understand the consumer (No. of default fallback responses / Total no. of VA responses) 100 Current status Top queues : Top 5 chat queues in order of the highest to lowest total Virtual Agent sessions Top Virtual Agents: Top 5 Virtual Agents in order of the highest success rates Virtual Agent status Online: Enabled and functioning Virtual Agents Offline: Enabled but unreachable.
- Dashboard tiles and definitions Virtual agent sessions Consumer Initiated : The total chat sessions initiated by the consumers and handled by Virtual Agents Transferred from Human Agent : The total of chat sessions that are answered by a human agent and then transferred to a Virtual Agent Total Messages Exchanged : The total number of individual messages exchanged between a Virtual Agent and a consumer during a chat session Avg.
- StatusBreakdown: Percentage of calls per Call Status (Completed, Queued, Transferring, etc).

