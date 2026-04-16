---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.049Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Completed Chats transcript viewing"
feature_slug: "completed-chats-transcript-viewing"
latest_feature_date: "2025-04-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/user-roles-permissions"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide"
keywords:
  - "completed"
  - "chats"
  - "transcript"
  - "viewing"
  - "lets"
  - "users"
  - "view"
  - "saved"
---

# Completed Chats transcript viewing

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Lets users view saved chat transcripts from the Completed Chats dashboard.

## Extended Definition

Lets users view saved chat transcripts from the Completed Chats dashboard.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/user-roles-permissions](https://docs.cloud.google.com/contact-center/ccai-platform/docs/user-roles-permissions)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)

## Supporting Pages

### "Real-time dashboards and monitoring pages \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)
- Source ID: `site-docs-reference`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- View transcripts for completed chats Chat transcripts are available directly within the Contact Center AI Platform portal on the Chats > Completed monitoring dashboard.
- Users with access to this page can also perform important actions like viewing Agent's assignment details, daily stats, changing the agent's status, and logging agents out.
- The 3 views are Queued, Connected, and Completed, separating the chats based on waiting in-queue, connected to an agent, or finished.
- Chats: connected, queued, and completed Overview The Chats menu covers all the real-time views for your chat operation.

### "User roles and permissions \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/user-roles-permissions](https://docs.cloud.google.com/contact-center/ccai-platform/docs/user-roles-permissions)
- Source ID: `site-iam-reference`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CCAI Platform portal access Settings Queue configuration Add and edit queues with full access Settings configuration All settings access including Developer Settings Agent & team: Full access Agent Desktop ( Preview ) Global, queue, and team settings Data Monitoring Call and chat dashboard: Full access Agents: Full access Calls and chats (connected, queued, completed): Full access External storage: access to call recordings, chat transcripts, or both, when they are stored in external storage.
- Queue: Full access Reporting Report builder: Full access to all user data No access Agent adapter in the CCAI Platform portal and CRM Actions available Responsible for viewing or managing users on multiple teams, even when not assigned as the team manager Are responsible for monitoring call and chat queues for all queues Are responsible for downloading reports with data concerning agent performance, queue performance, call and chat volume for all users Configuring queues, redirects, and per-queue routing options Responsible for assigning agents to queues Shuffling team and agent assignments between queues based on volume Adding new users and assigning to teams or deactivating users Assigning existing users to teams Creating or editing queue structures for any language or channel Modifying environment wide settings to disable or enable channels, update how Agents are notified of new sessions, hours of operation, messages played to consumers or routing features like enabling Auto Answer or Priority routing Setting up technical integrations Don't see a role you want?
- CCAI Platform portal access Settings Queue Configuration Assign any agents or teams to queues Queue priorities Settings Configuration Agent & team: Full access Target Metrics (within Settings > Operation Management ) Data Monitoring Dashboard access (data for all teams) Calls Chats Agents: Full access Calls and chats (connected, queued, completed): Full access External Storage: Access to call recordings or chat transcripts when they are stored in external storage.
- The ability to perform actions within the CCAI Platform portal (including viewing content, editing content, and changing configuration) is governed by permissions.

### "Salesforce integration guide \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide](https://docs.cloud.google.com/contact-center/ccai-platform/docs/salesforce-integration-guide)
- Source ID: `site-docs-reference`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- Outbound click to call When viewing a Contact in Salesforce you can click on the Contact's Phone Number to start an Outbound Call.
- This option lets an agent dial out to a number not saved to the contact while still associating the case with the contact.
- Sample UI of multiple CCAI Platform sessions related to a case CCAI Platform session object data hierarchy The session object is organized as follows: Session(s) related list: the list of session(s) related to a case or account object Session Detail : presents the core session object details Core session fields: lists any associated transfers and files File list: any files that have been uploaded or created as part of the session File detail: all details about a file, including access to file itself Actions: a list of actions that occurred during the session Action detail: additional info about a specific action Transfers: complete list of transfers that occurred during the session Transfer detail: displays all fields and data associated with a single transfer events CCAI Platform session overview After opening a session, the following view will be provided, listing all associated CCAI Platform session actions, attached files, and transfers.
- No Case: ability to connect the CCAI Platform Custom Session object directly to any Salesforce account object, bypassing the need to create a case This builds on two related features: Option to look-up end users in Person Account object (instead of Contact ( default )) Option to leverage our CCAI Platform Session Object which stores all assets and data related to a single session in optimized CCAI Platform Session object Configuration availability requirements The configuration options for Account Lookup and Session Data are only available if the following conditions are met: Account Lookup configuration To configure custom account lookup settings, the following is required: Logged in Agent - at least one agent needs to be logged into a CCAI Platform adapter in Salesforce.

