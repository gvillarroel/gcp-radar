---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.006Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Queue Performance - Chats dashboard"
feature_slug: "queue-performance-chats-dashboard"
latest_feature_date: "2026-03-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/user-roles-permissions"
keywords:
  - "queue"
  - "performance"
  - "chats"
  - "dashboard"
  - "provides"
  - "level"
  - "metrics"
  - "chat"
---

# Queue Performance - Chats dashboard

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

The Queue Performance - Chats dashboard provides queue-level performance metrics for chat sessions.

## Extended Definition

The Queue Performance - Chats dashboard provides queue-level performance metrics for chat sessions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/user-roles-permissions](https://docs.cloud.google.com/contact-center/ccai-platform/docs/user-roles-permissions)

## Supporting Pages

### "Real-time dashboards and monitoring pages \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)
- Source ID: `site-docs-reference`
- Final score: 234
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Calculation: (Total Sentiment Score of all call sessions / Total no of Virtual Agent messages) Performance metrics dashboard Overview The Performance Metrics dashboard gives you a high level overview of your support center for both calls and chats.
- Call Volume Count of inbound or outbound interactions offered, regardless of whether they were handled by an agent or not (includes abandons, failed contacts, etc) Handled Count of inbound or outbound interactions touched by an agent (excludes agent <> agent transfers) Transfer % SUM of finished or failed segments that are a transfer / SUM of all finished or failed segments Inbound Count of interactions created by a consumer and offered - regardless of whether it was handled by an agent (includes abandons, failed contacts, etc) Outbound Count of interactions created by an agent or auto-dialing system, regardless of whether the consumer answers the call Calls in Queue Count of inbound interactionscurrentlywaiting in queue AHT (average call duration + average wrap-up status associated with a Call ID) Chat Volume Count of interactions offered, regardless of whether they were handled by an agent or not (includes abandons, failed contacts, etc) Handled Count of interactions touched by an agent (excludes agent <> agent transfers) Transfer % Sum of finished or failed interactions that are a transfer / Sum of all finished or failed interactions Chat Concurrency The average concurrency of all ongoing chats (live metric) Avg Response Time Average time (seconds) that it takes for an agent to respond to a consumer Chats in Queue Count of inbound interactionscurrentlywaiting in queue AHT Average chat duration (no wrap-up status applied) SLA metrics The top of the SLA Metrics shows two charts for Call SLA and Chat SLA respectively.
- See Virtual Agent Platform statuses in Virtual Agent configuration Inactive: Virtual Agent is turned off Explorable metrics in real-time call and chat dashboards Overview Drill-down on explorable metrics in the Call and Chat Real time Dashboards to obtain additional insight into performance and details about the metric.
- Handled Total number of completed interactions ASA / Sec Average speed to answer AHT / Sec Average Handle Time Virtual agent chat dashboard This dashboard provides a range of status, session, and performance insights for Chat sessions attended by the Virtual Agents.

### "Queue and menu setup \_|\_ Google Cloud Contact Center as a Service \_|\_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- Source ID: `site-docs-reference`
- Final score: 220
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Priority order = Sub-queue Target > Top-level Queue Target > Global Target Examples: Targets Set Resulting Targets Global Target = 70% , Top-level Queue 1 = None , Queue 1a = None, Queue 1b = None, Queue 2a = None, Queue 2b = None, Top-level Queue 2 = None Global Target = 70% , Top-level Queue 1 = 70% (inherited from global) , Queue 1a = 70% (inherited from global), Queue 1b = 70% (inherited from global), Queue 2a = 70% (inherited from global), Queue 2b = 70% (inherited from global), Top-level Queue 2 = 70% (inherited from global) Global Target = 70% , Top-level Queue 1 = 65% , Queue 1a = None, Queue 1b = 75%, Queue 2a = 65%, Queue 2b = None, Top-level Queue 2 = None Global Target = 70% , Top-level Queue 1 = 65% , Queue 1a = 65% (inherited from Top-level), Queue 1b = 75%, Queue 2a = 65%, Queue 2b = 70% (inherited from global), Top-level Queue 2 = None Global Target = None , Top-level Queue 1 = 65% , Queue 1a = None, Queue 1b = None, Queue 2a = 60%, Queue 2b = 40%, Top-level Queue 2 = None Global Target = None , Top-level Queue 1 = 65% , Queue 1a = 65% (inherited from Top-level), Queue 1b = 65% (inherited from Top-level), Top-level Queue 2 = None , Queue 2a = 60%, Queue 2b = 40% Utilize set targets Call and chat dashboards When viewing the default view of the Call or Chat dashboard, the target displayed will be the globally configured target metric When viewing multiple queues (or a queue group), no target will be displayed Queue reports dashboard Available for interaction-based data model enabled environments The SL Target and Concurrency Target column will display each queue's target If a queue group consists of multiple queues with varying targets, then no value will be displayed in the Totals row Performance metrics dashboard Available for interaction-based data model enabled environments The SL Target column will display each queue's service level target.
- Timeout and expiration settings Global timeout settings for SMS chats are configured on the Settings Chat page but you can override them at the queue level.
- EWT for calls For calls, EWT is calculated based on the following formula: EWT = ((average duration in channel / active agents in channel) (agents in common / active agents in current queue) (queued calls - available agents)) + {EWT for callbacks, campaign calls, and scheduled calls} EWT for chats For chats, EWT is calculated based on the following formula: EWT = (average duration in channel / active agents in channel) (agents in common / active agents in current queue) (queued chats - available agents) Note: In chat channels, the value for active agents includes a multiplier based on the chat concurrency if the chat concurrency is >1.
- Queues can be configured to enable specific channels (email, call, chat), the assignment of Agents and Teams to each channel, and many features can be applied at the queue level for specific customization.

### "User roles and permissions \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/user-roles-permissions](https://docs.cloud.google.com/contact-center/ccai-platform/docs/user-roles-permissions)
- Source ID: `site-iam-reference`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CCAI Platform portal access Settings Queue Configuration Assign any agents or teams to queues Queue priorities Settings Configuration Agent & team: Full access Target Metrics (within Settings > Operation Management ) Data Monitoring Dashboard access (data for all teams) Calls Chats Agents: Full access Calls and chats (connected, queued, completed): Full access External Storage: Access to call recordings or chat transcripts when they are stored in external storage.
- No Access Call or chat adapter in the CCAI Platform portal or CRM Actions available Monitoring call and chat queues, only for queues in which their team members are assigned Downloading reports with data concerning agent performance, queue performance, call and chat volume - but only for their team's Creating and editing chat shortcuts Shuffling team and agent assignments between queues based on volume Assigning Agents and teams to queues Configuring priority levels of existing queues (when Priority Routing is enabled) Adding new users and assigning to teams or deactivating users Assigning existing users to teams Manager: Data Manager roles are for users assigned as the team manager to one or more teams and access is partially based on the user's assigned teams.
- CCAI Platform portal access Settings Queue configuration Add and edit queues with full access Settings configuration All settings access including Developer Settings Agent & team: Full access Agent Desktop ( Preview ) Global, queue, and team settings Data Monitoring Call and chat dashboard: Full access Agents: Full access Calls and chats (connected, queued, completed): Full access External storage: access to call recordings, chat transcripts, or both, when they are stored in external storage.
- Queue: Full access Reporting Report builder: Full access to all user data No access Agent adapter in the CCAI Platform portal and CRM Actions available Responsible for viewing or managing users on multiple teams, even when not assigned as the team manager Are responsible for monitoring call and chat queues for all queues Are responsible for downloading reports with data concerning agent performance, queue performance, call and chat volume for all users Configuring queues, redirects, and per-queue routing options Responsible for assigning agents to queues Shuffling team and agent assignments between queues based on volume Adding new users and assigning to teams or deactivating users Assigning existing users to teams Creating or editing queue structures for any language or channel Modifying environment wide settings to disable or enable channels, update how Agents are notified of new sessions, hours of operation, messages played to consumers or routing features like enabling Auto Answer or Priority routing Setting up technical integrations Don't see a role you want?

