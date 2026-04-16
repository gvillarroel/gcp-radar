---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.103Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "External Storage permission for recordings and transcripts"
feature_slug: "external-storage-permission-for-recordings-and-transcripts"
latest_feature_date: "2023-10-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/user-roles-permissions"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages"
keywords:
  - "external"
  - "storage"
  - "permission"
  - "recordings"
  - "transcripts"
  - "controls"
  - "access"
  - "call"
---

# External Storage permission for recordings and transcripts

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

A new permission controls access to call recordings and chat transcripts stored in external storage without a CRM.

## Extended Definition

A new permission controls access to call recordings and chat transcripts stored in external storage without a CRM.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/user-roles-permissions](https://docs.cloud.google.com/contact-center/ccai-platform/docs/user-roles-permissions)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)

## Supporting Pages

### "User roles and permissions \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/user-roles-permissions](https://docs.cloud.google.com/contact-center/ccai-platform/docs/user-roles-permissions)
- Source ID: `site-iam-reference`
- Final score: 225
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CCAI Platform portal access Settings Queue configuration Add and edit queues with full access Settings configuration All settings access including Developer Settings Agent & team: Full access Agent Desktop ( Preview ) Global, queue, and team settings Data Monitoring Call and chat dashboard: Full access Agents: Full access Calls and chats (connected, queued, completed): Full access External storage: access to call recordings, chat transcripts, or both, when they are stored in external storage.
- CCAI Platform portal access Settings Queue Configuration Assign any agents or teams to queues Queue priorities Settings Configuration Agent & team: Full access Target Metrics (within Settings > Operation Management ) Data Monitoring Dashboard access (data for all teams) Calls Chats Agents: Full access Calls and chats (connected, queued, completed): Full access External Storage: Access to call recordings or chat transcripts when they are stored in external storage.
- External Storage: Access to call recordings and chat transcripts when they are stored in external storage.
- External Storage: Access to call recordings or chat transcripts when they are stored in external storage.

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- To record calls, you must configure external storage to store the recordings.
- To record calls, you must configure external storage to store the recordings.
- Overcapacity Deflection When enabled, the "Overcapacity Deflection" and "Overcapacity Deflection Options" messages will play, as well as specific recordings for options like "Overcapacity Deflection Callback Option." When you add or remove options, be sure to update the message that lists the options callers have, otherwise, callers won't know the new options exist.
- Specific Interactive Voice Response (IVR) inbound routing If you have a line that is specific to a particular customer type or marketing promotion, Direct Access Points can be used to direct phone calls to that specific point in the queue.

### "Real-time dashboards and monitoring pages \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)
- Source ID: `site-docs-reference`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- The transcripts displayed are from completed chats, and are stored and retrieved from your configured external storage.
- Call dashboard For the Agents Logged In tile, agent information will not appear until the following: Agents have to have taken a call or chat to show up in the dashboard as logged in agent Agents have to be assigned the default Agent role even if the Custom role they have assigned contains Agent permissions.
- Agents information will not appear until the following: Agents have to have taken a call or chat to show up in the dashboard as logged in agent Agents have to be assigned the default Agent role even if the custom role they have assigned contains Agent permissions.
- Troubleshooting A transcript might not be available in the following situations: The transcript is not stored in external storage.

