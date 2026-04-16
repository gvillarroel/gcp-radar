---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.049Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Conditional overcapacity deflections"
feature_slug: "conditional-overcapacity-deflections"
latest_feature_date: "2025-04-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages"
keywords:
  - "conditional"
  - "overcapacity"
  - "deflections"
  - "lets"
  - "calls"
  - "use"
  - "wait"
  - "time"
---

# Conditional overcapacity deflections

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Lets calls use wait-time or time-of-day conditions to trigger distinct overcapacity deflection messages.

## Extended Definition

Lets calls use wait-time or time-of-day conditions to trigger distinct overcapacity deflection messages.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)

## Supporting Pages

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 181
- Re-rank relevance: N/A

Evidence snippets:
- Call experience flows Call Flow experience for different call types Overcapacity Deflection IVR Mobile Afterhours Deflection IVR Mobile Recording Per Queue Option Temporary Redirect per IVR Queue Credit Card Over IVR Scheduled calls Rather than waiting in queue for an agent, give consumers the option to select a time that works for them to receive a call from an agent.
- Overcapacity deflection Overcapacity deflection occurs when a call enters a queue and is not answered within amount of time that you set ("Deflect calls in a particular queue if wait time in the queue is > set duration") AND the estimated wait time (EWT) is greater than the amount of time that you set.
- For Enable conditional overcapacity deflection , select either Estimated Wait Time or Time of the Day , depending on the deflection criteria that you want.
- For Overcapacity Deflection Criteria , set the amount of time that calls wait in a queue before being deflected.

### "Real-time dashboards and monitoring pages \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)
- Source ID: `site-docs-reference`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- Call Volume Count of inbound or outbound interactions offered, regardless of whether they were handled by an agent or not (includes abandons, failed contacts, etc) Handled Count of inbound or outbound interactions touched by an agent (excludes agent <> agent transfers) Transfer % SUM of finished or failed segments that are a transfer / SUM of all finished or failed segments Inbound Count of interactions created by a consumer and offered - regardless of whether it was handled by an agent (includes abandons, failed contacts, etc) Outbound Count of interactions created by an agent or auto-dialing system, regardless of whether the consumer answers the call Calls in Queue Count of inbound interactionscurrentlywaiting in queue AHT (average call duration + average wrap-up status associated with a Call ID) Chat Volume Count of interactions offered, regardless of whether they were handled by an agent or not (includes abandons, failed contacts, etc) Handled Count of interactions touched by an agent (excludes agent <> agent transfers) Transfer % Sum of finished or failed interactions that are a transfer / Sum of all finished or failed interactions Chat Concurrency The average concurrency of all ongoing chats (live metric) Avg Response Time Average time (seconds) that it takes for an agent to respond to a consumer Chats in Queue Count of inbound interactionscurrentlywaiting in queue AHT Average chat duration (no wrap-up status applied) SLA metrics The top of the SLA Metrics shows two charts for Call SLA and Chat SLA respectively.
- Note: If your company has requested a time zone override for all its users, then the requested time zone will be displayed instead Metric definitions Service Level SL / 30min Service Level within the past 30min SL / day Service Level for the current day SL Target Service Level Target set for the queue Live CIQ Consumers in Queue LCW / Sec Longest Call Waiting AQD / Sec Average Queue Duration (Waiting for an Agent) Live Number of calls currently in progress with an agent Productive Agents Number of agents with a productive status Live Agent Status Available Count of all available agents On-hold (Calls only)Count of agents who have placed a consumer on-hold Wrap-up Count of all agents in the wrap-up status Custom Count of all agents in custom statuses that are configured as productive Productive Agents Count of all agents in a productive status as configured in Settings > Queue Groups Today ABN % Abandon rate Volume Total offered interactions including failed/abandoned sessions.
- Total Calls (Calls) Count of the number of completed inbound and outbound calls the agent has taken in the Today timeframe Call count on the Agent monitoring page counts sessions not interactions Call sessions are attributed to the last agent who handled the session Outbound and inbound calls are included Due to some date/time matching differences, this column should only be used as a guide - use downloadable reports for specific call interaction counts per agent Total Chats (Chats) Completed chat sessions handled today Last End Time The end time of the last completed session Last time offered Shows the last time the agent was offered a call/chat notification.
- Example notification rules Exceeding 15 minutes in Break status for an agent or team of agents in an 8-hour time frame A queue exceeds an average wait time of 5 minutes The average CSAT for your operation is 4 or lower in a 4-hour timeframe Create new notification rules Click on the bell icon , then click on View all Notification Rules .

### "Queue and menu setup \_|\_ Google Cloud Contact Center as a Service \_|\_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- Source ID: `site-docs-reference`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- Overcapacity deflection per-queue Overview Overcapacity deflection is triggered when a session is initiated, but the estimated wait time is larger than the set threshold in Settings Call or Settings > Chat .
- Estimated wait time prediction calculation Estimated wait time (EWT) is used in determining when to launch overcapacity deflection and for In-Web and In-App UIs, which show wait time to end-users.
- Record callback outbound calls When the Callback overcapacity option is enabled, this setting will enable Callback and scheduled call recordings.
- To provide consumers with an estimated wait time as part of your greeting message, use the dynamic variable, @{EWT minutes}.

