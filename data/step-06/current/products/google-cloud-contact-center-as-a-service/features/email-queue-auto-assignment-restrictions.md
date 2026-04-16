---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.043Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Email queue auto-assignment restrictions"
feature_slug: "email-queue-auto-assignment-restrictions"
latest_feature_date: "2025-07-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages"
keywords:
  - "email"
  - "queue"
  - "auto"
  - "assignment"
  - "restrictions"
  - "queues"
  - "can"
  - "configured"
---

# Email queue auto-assignment restrictions

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Email queues can be configured to auto-assign incoming emails only during operating hours or to signed-in agents.

## Extended Definition

Email queues can be configured to auto-assign incoming emails only during operating hours or to signed-in agents.

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
- Final score: 221
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Queues can be configured to enable specific channels (email, call, chat), the assignment of Agents and Teams to each channel, and many features can be applied at the queue level for specific customization.
- Queues can be configured to enable specific channels (email, call, chat), the assignment of Agents and Teams to each channel, and many features can be applied at the queue level for specific customization.
- Priority order = Sub-queue Target > Top-level Queue Target > Global Target Examples: Targets Set Resulting Targets Global Target = 70% , Top-level Queue 1 = None , Queue 1a = None, Queue 1b = None, Queue 2a = None, Queue 2b = None, Top-level Queue 2 = None Global Target = 70% , Top-level Queue 1 = 70% (inherited from global) , Queue 1a = 70% (inherited from global), Queue 1b = 70% (inherited from global), Queue 2a = 70% (inherited from global), Queue 2b = 70% (inherited from global), Top-level Queue 2 = 70% (inherited from global) Global Target = 70% , Top-level Queue 1 = 65% , Queue 1a = None, Queue 1b = 75%, Queue 2a = 65%, Queue 2b = None, Top-level Queue 2 = None Global Target = 70% , Top-level Queue 1 = 65% , Queue 1a = 65% (inherited from Top-level), Queue 1b = 75%, Queue 2a = 65%, Queue 2b = 70% (inherited from global), Top-level Queue 2 = None Global Target = None , Top-level Queue 1 = 65% , Queue 1a = None, Queue 1b = None, Queue 2a = 60%, Queue 2b = 40%, Top-level Queue 2 = None Global Target = None , Top-level Queue 1 = 65% , Queue 1a = 65% (inherited from Top-level), Queue 1b = 65% (inherited from Top-level), Top-level Queue 2 = None , Queue 2a = 60%, Queue 2b = 40% Utilize set targets Call and chat dashboards When viewing the default view of the Call or Chat dashboard, the target displayed will be the globally configured target metric When viewing multiple queues (or a queue group), no target will be displayed Queue reports dashboard Available for interaction-based data model enabled environments The SL Target and Concurrency Target column will display each queue's target If a queue group consists of multiple queues with varying targets, then no value will be displayed in the Totals row Performance metrics dashboard Available for interaction-based data model enabled environments The SL Target column will display each queue's service level target.
- Example use cases: Show order details for a specific user via Mobile or Web queues Present your users with product offerings based on their locations by directing to a specialized web page based on user ID Mobile FAQ page landing can be personalized to show the right page for the user's membership tier based on the User ID Feature details If mobile or Web SDK passes User ID/identifier to CCAI Platform portal, it can be inserted as a session variable into your manual deflection webpage or FAQ link From the Admin Portal, an admin can add "@@USER ID@@" into the URL in Manual Deflection to Webpage field under Mobile or Web queues to dynamically retrieve and insert User ID From the Admin Portal, an admin can add "@@USER ID@@" into the URL for Mobile FAQ to dynamically retrieve and insert UID CCAI Platform portal configuration Automatic redirect Go to Settings > Queue > Mobile OR Web .

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 189
- Re-rank relevance: N/A

Evidence snippets:
- When enabled, configure the TSS or upload a custom greeting in Settings Languages & Messages Deflection to Voicemail option - Request Already Placed Message. - Limit consumer to 1 voicemail per queue: a consumer could leave a separate voicemail request on a separate queue. - Limit consumer to 1 voicemail request across all queues: voicemail option not available if an unattended voicemail is already left form the phone number.
- Emergency queues don't support the following: Virtual agents Overcapacity deflections Automatic redirections Target metrics Blended SMS Presession SMS deflections Call redaction Surveys CSAT ratings IVR payments Custom URLs Before you begin To configure an emergency service callback queue, you'll need a phone number that is dedicated to emergency or special services calls .
- Agents have options for specific outbound numbers based on their queue assignments, or can be configured to not have options at all and will always dial outbound from the phone number which is set by the administrator.
- Use callback fulfillment hours to automatically reschedule callbacks to the next business day when they fall outside of a configured window, rather than cancelling them when queue expiration is reached.

### "Real-time dashboards and monitoring pages \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)
- Source ID: `site-docs-reference`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- There are three pre-configured thresholds displayed by default: SLA >= 80 60 > SLA < 80 SLA <= 60 The metrics displayed are defined as follows: Queues See Data Dictionary Total SLA See Data Dictionary Volume Total interactions which qualify for SLA calculation.
- Use queues or teams to sort agents Want to see a certain list of agents based on Queue assignments but don't see a way to do it from the above options?
- Call Volume Count of inbound or outbound interactions offered, regardless of whether they were handled by an agent or not (includes abandons, failed contacts, etc) Handled Count of inbound or outbound interactions touched by an agent (excludes agent <> agent transfers) Transfer % SUM of finished or failed segments that are a transfer / SUM of all finished or failed segments Inbound Count of interactions created by a consumer and offered - regardless of whether it was handled by an agent (includes abandons, failed contacts, etc) Outbound Count of interactions created by an agent or auto-dialing system, regardless of whether the consumer answers the call Calls in Queue Count of inbound interactionscurrentlywaiting in queue AHT (average call duration + average wrap-up status associated with a Call ID) Chat Volume Count of interactions offered, regardless of whether they were handled by an agent or not (includes abandons, failed contacts, etc) Handled Count of interactions touched by an agent (excludes agent <> agent transfers) Transfer % Sum of finished or failed interactions that are a transfer / Sum of all finished or failed interactions Chat Concurrency The average concurrency of all ongoing chats (live metric) Avg Response Time Average time (seconds) that it takes for an agent to respond to a consumer Chats in Queue Count of inbound interactionscurrentlywaiting in queue AHT Average chat duration (no wrap-up status applied) SLA metrics The top of the SLA Metrics shows two charts for Call SLA and Chat SLA respectively.
- Note: If your company has requested a time zone override for all its users, then the requested time zone will be displayed instead Metric definitions Service Level SL / 30min Service Level within the past 30min SL / day Service Level for the current day SL Target Service Level Target set for the queue Live CIQ Consumers in Queue LCW / Sec Longest Call Waiting AQD / Sec Average Queue Duration (Waiting for an Agent) Live Number of calls currently in progress with an agent Productive Agents Number of agents with a productive status Live Agent Status Available Count of all available agents On-hold (Calls only)Count of agents who have placed a consumer on-hold Wrap-up Count of all agents in the wrap-up status Custom Count of all agents in custom statuses that are configured as productive Productive Agents Count of all agents in a productive status as configured in Settings > Queue Groups Today ABN % Abandon rate Volume Total offered interactions including failed/abandoned sessions.

