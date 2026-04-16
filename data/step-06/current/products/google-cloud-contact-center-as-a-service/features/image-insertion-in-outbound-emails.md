---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.045Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Image insertion in outbound emails"
feature_slug: "image-insertion-in-outbound-emails"
latest_feature_date: "2025-05-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup"
keywords:
  - "image"
  - "insertion"
  - "outbound"
  - "emails"
  - "allows"
  - "images"
  - "included"
  - "agent"
---

# Image insertion in outbound emails

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Allows images to be included in outbound agent emails and auto-response emails.

## Extended Definition

Allows images to be included in outbound agent emails and auto-response emails.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)

## Supporting Pages

### "Real-time dashboards and monitoring pages \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)
- Source ID: `site-docs-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- Total Calls (Calls) Count of the number of completed inbound and outbound calls the agent has taken in the Today timeframe Call count on the Agent monitoring page counts sessions not interactions Call sessions are attributed to the last agent who handled the session Outbound and inbound calls are included Due to some date/time matching differences, this column should only be used as a guide - use downloadable reports for specific call interaction counts per agent Total Chats (Chats) Completed chat sessions handled today Last End Time The end time of the last completed session Last time offered Shows the last time the agent was offered a call/chat notification.
- Call Volume Count of inbound or outbound interactions offered, regardless of whether they were handled by an agent or not (includes abandons, failed contacts, etc) Handled Count of inbound or outbound interactions touched by an agent (excludes agent <> agent transfers) Transfer % SUM of finished or failed segments that are a transfer / SUM of all finished or failed segments Inbound Count of interactions created by a consumer and offered - regardless of whether it was handled by an agent (includes abandons, failed contacts, etc) Outbound Count of interactions created by an agent or auto-dialing system, regardless of whether the consumer answers the call Calls in Queue Count of inbound interactionscurrentlywaiting in queue AHT (average call duration + average wrap-up status associated with a Call ID) Chat Volume Count of interactions offered, regardless of whether they were handled by an agent or not (includes abandons, failed contacts, etc) Handled Count of interactions touched by an agent (excludes agent <> agent transfers) Transfer % Sum of finished or failed interactions that are a transfer / Sum of all finished or failed interactions Chat Concurrency The average concurrency of all ongoing chats (live metric) Avg Response Time Average time (seconds) that it takes for an agent to respond to a consumer Chats in Queue Count of inbound interactionscurrentlywaiting in queue AHT Average chat duration (no wrap-up status applied) SLA metrics The top of the SLA Metrics shows two charts for Call SLA and Chat SLA respectively.
- Because outbound calls are not associated with a queue, they are not included on this dashboard Queue selection must be completed to show in the dashboard In-menu abandons are not represented in Dashboards currently Views From the top-left of the Queue Groups Dashboard page, you can toggle between two different views.
- View Agent Details launches a pop-up with any available information about the agent listed below: Total Calls : Total inbound and outbound completed calls the agent handled today.

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Voicemail History Allows agents to see a list of voicemails that they have already listened to.
- Voicemail Forwarding Allows agents to forward voicemails to other agents or queues.
- Session types for reporting For reporting, calls to or from direct phone numbers generate the following session types: Voice Inbound (Direct) : an inbound call to a direct phone number Voice Outbound (Direct) : an outbound call from a direct phone number Voice Internal : an internal call to or from a direct phone number Estimated wait time announcement for calls Estimated Wait Time (EWT) Announcements use a calculation to predict the wait time until a caller is connected with an agent.
- For more information, see the following: Salesforce : Outbound click to call Kustomer : Kustomer click to call ServiceNow : Add Click to Call to the top of the form Show the dial pad screen If you have a CRM configured for click-to-call, you can configure your instance to display the dial pad screen after an agent clicks a phone number in the CRM but before a call starts.

### "Queue and menu setup \_|\_ Google Cloud Contact Center as a Service \_|\_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- Source ID: `site-docs-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Mobile SDK All Mobile SDK functionality is the same as the Web SDK with these notable exceptions: Mobile SDK supports Picture and Video attachments up to 18MB Mobile SDK allows for multiple file types to be uploaded to the same message Mobile SDK supports uploading all file types (Text, Picture, Video) No rich text editor functionality Does not support reCAPTCHA Setting up and assigning agents to channels and queues: IVR, mobile, web Overview Channels are configurable and should be enabled and set up individually.
- Wrap-up settings Wrap-up exceeded This setting allows you to transition agents into a Wrap-up Exceeded status after they have gone beyond a wrap-up threshold time and have cleared all ongoing sessions.
- Record agent-initiated outbound calls Enables calls recording for Agent initiated calls: Dialed outbound calls Short call callbacks - For more information see Call recovery features .
- Any agents assigned to the queue can use any of the outbound phone numbers; therefore, If you want an agent to have their own number, they must have their own leaf queue.

