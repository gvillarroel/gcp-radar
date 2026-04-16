---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.045Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Screen Share recordings storage"
feature_slug: "screen-share-recordings-storage"
latest_feature_date: "2025-07-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/user-roles-permissions"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
keywords:
  - "screen"
  - "share"
  - "recordings"
  - "storage"
  - "administrators"
  - "can"
  - "configure"
  - "retention"
---

# Screen Share recordings storage

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Administrators can configure retention for Screen Share recordings in external storage and store recordings from the Screen Share adapter.

## Extended Definition

Administrators can configure retention for Screen Share recordings in external storage and store recordings from the Screen Share adapter.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/user-roles-permissions](https://docs.cloud.google.com/contact-center/ccai-platform/docs/user-roles-permissions)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)

## Supporting Pages

### "User roles and permissions \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/user-roles-permissions](https://docs.cloud.google.com/contact-center/ccai-platform/docs/user-roles-permissions)
- Source ID: `site-iam-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- CCAI Platform portal access Settings Queue configuration Add and edit queues with full access Settings configuration All settings access including Developer Settings Agent & team: Full access Agent Desktop ( Preview ) Global, queue, and team settings Data Monitoring Call and chat dashboard: Full access Agents: Full access Calls and chats (connected, queued, completed): Full access External storage: access to call recordings, chat transcripts, or both, when they are stored in external storage.
- CCAI Platform portal access Settings Queue Configuration Assign any agents or teams to queues Queue priorities Settings Configuration Agent & team: Full access Target Metrics (within Settings > Operation Management ) Data Monitoring Dashboard access (data for all teams) Calls Chats Agents: Full access Calls and chats (connected, queued, completed): Full access External Storage: Access to call recordings or chat transcripts when they are stored in external storage.
- License types Within CCAI Platform there are various user license types for billing purposes which include agent, Screen Share agent, manager, and administrator.
- External Storage: Access to call recordings and chat transcripts when they are stored in external storage.

### "Call and Chat Settings \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Call_and_Chat_Settings)
- Source ID: `site-docs-reference`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- SmartActions Overview Consumers calling or initiating a chat can share photos, videos, and screenshots with agents to get on the same page fast.
- Viewing live chat UI Agent : Name of Agent as entered on the Users and Teams page End User : Consumer name or unique ID if available Issue : Queue menu path View Case / Ticket : If your CRM is integrated with Contact Center AI Platform (CCAI Platform), click the link to view the CRM record associated with the chat session After Hour Deflection for Calls and Chats Overview Customize your consumer's experience by configuring specific deflection paths for when consumers try to contact you outside of your Hours of Operation are first configured, then deflection is enabled and configured at the global level in the Call Settings and Chat Settings pages.
- Note: If the end user clears their local storage, their unique visitor ID will not be recognized and a new contact will be created for this ticket Mobile: Unauthenticated Consumers Since no identifying information is passed to your CRM without the user logging in, they will be recognized anonymously as a Mobile User .
- Under General , configure the following settings: Use whisper for calls : Once a call is assigned to the Agent, they will hear an audible message stating the call type and queue: "{Call Type} from {Queue Name}." Whisper read speed : Increase or decrease the speed at which the whisper message is read.

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- To record calls, you must configure external storage to store the recordings.
- To record calls, you must configure external storage to store the recordings.
- For more information, see the following: Salesforce : Outbound click to call Kustomer : Kustomer click to call ServiceNow : Add Click to Call to the top of the form Show the dial pad screen If you have a CRM configured for click-to-call, you can configure your instance to display the dial pad screen after an agent clicks a phone number in the CRM but before a call starts.
- Prerequisites In order to enable the Pre-session Deflection, you must have the following: A valid CCAI Platform account with Admin role assigned A valid Legacy, Pro, Enterprise, or Digital License Package A valid subscription for CCAI Platform IVR Support with IVR enabled A valid subscription for CCAI Platform SMS Support enabled with a valid queue structure The SMS must be functional (agent assigned) Basic configuration Do the following procedures, in order: Enable pre-session SMS deflection Enable and save the pre-session SMS deflection offer and opted-in messages Enable and save the pre-session SMS deflection greeting message Configure pre-session SMS deflection for a specific queue Enable pre-session SMS deflection Go Settings > Call.

