---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.046Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Outbound-only sender email for auto-response emails"
feature_slug: "outbound-only-sender-email-for-auto-response-emails"
latest_feature_date: "2025-05-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages"
keywords:
  - "outbound"
  - "only"
  - "sender"
  - "email"
  - "auto"
  - "response"
  - "emails"
  - "allows"
---

# Outbound-only sender email for auto-response emails

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Allows auto-response emails to use an outbound-only sender address that prevents replies.

## Extended Definition

Allows auto-response emails to use an outbound-only sender address that prevents replies.

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
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- Any pre-existing auto-responses should apply, based on your email provider's settings Example email Email Form Submitted by: Sarah Johnson <sarah@company.com> // Name Field Input, Email Field Input Reply-to Header: <sarah@company.com> Menu Path: Order Cancellation/ Issue with my order/ Refund Custom Instructional Message: Enter order number, merchant name and date of transaction.
- This will automatically save the email address that you entered. (optional) Enter any Instructions for the Message field to appear just above the Message field. (optional) Check the Enable reCAPTCHA box to help prevent spam emails.
- Emails will have the end-user's entered email address in the Reply-to Header field All emails will use this subject format: {Queue Name} [from: {email} ] Your CRM team should set up a rule that identifies the email address in the subject or body of the email and use the email address to identify the contact for the best experience Once enabled, the email form with the custom email per-queue shows at all times for the email channel, including: during operation hours, after operation hours, and for email deflection options CCAI Platform portal sends to the email address specified and then inbound emails are handled by your email provider.
- Keep the following in mind: Incoming SMS phone numbers can be assigned to only one queue (a queue can have multiple incoming numbers as long as they are not used for any other queue.) Outbound SMS phone numbers can be assigned to any number of queues and a queue can have any number of outbound phone numbers.

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 189
- Re-rank relevance: N/A

Evidence snippets:
- Voicemail History Allows agents to see a list of voicemails that they have already listened to.
- Voicemail Forwarding Allows agents to forward voicemails to other agents or queues.
- This will place a new Outbound Call and set the status of the original Voicemail call to 'Voicemail Read.' Scheduled call recovery If a consumer scheduled a call using the Web or Mobile SDK, then doesn't pick up the call at the scheduled time, a Callback option presented to Agent which will create a new Outbound call.
- The Assigned Queues / Agents column only displays queues or agents for the following types of numbers: IVR (outbound) SMS (inbound) SMS (outbound) WhatsApp Assigned queue (only for direct numbers) Assigned agent (only for direct numbers) Click Add Number .

### "Real-time dashboards and monitoring pages \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Real-time_Dashboards_and_Monitoring_Pages)
- Source ID: `site-docs-reference`
- Final score: 181
- Re-rank relevance: N/A

Evidence snippets:
- Call Volume Count of inbound or outbound interactions offered, regardless of whether they were handled by an agent or not (includes abandons, failed contacts, etc) Handled Count of inbound or outbound interactions touched by an agent (excludes agent <> agent transfers) Transfer % SUM of finished or failed segments that are a transfer / SUM of all finished or failed segments Inbound Count of interactions created by a consumer and offered - regardless of whether it was handled by an agent (includes abandons, failed contacts, etc) Outbound Count of interactions created by an agent or auto-dialing system, regardless of whether the consumer answers the call Calls in Queue Count of inbound interactionscurrentlywaiting in queue AHT (average call duration + average wrap-up status associated with a Call ID) Chat Volume Count of interactions offered, regardless of whether they were handled by an agent or not (includes abandons, failed contacts, etc) Handled Count of interactions touched by an agent (excludes agent <> agent transfers) Transfer % Sum of finished or failed interactions that are a transfer / Sum of all finished or failed interactions Chat Concurrency The average concurrency of all ongoing chats (live metric) Avg Response Time Average time (seconds) that it takes for an agent to respond to a consumer Chats in Queue Count of inbound interactionscurrentlywaiting in queue AHT Average chat duration (no wrap-up status applied) SLA metrics The top of the SLA Metrics shows two charts for Call SLA and Chat SLA respectively.
- Only voicemails listened via the Agent Adapter will be marked as read and not counted in this metric.
- Total Calls (Calls) Count of the number of completed inbound and outbound calls the agent has taken in the Today timeframe Call count on the Agent monitoring page counts sessions not interactions Call sessions are attributed to the last agent who handled the session Outbound and inbound calls are included Due to some date/time matching differences, this column should only be used as a guide - use downloadable reports for specific call interaction counts per agent Total Chats (Chats) Completed chat sessions handled today Last End Time The end time of the last completed session Last time offered Shows the last time the agent was offered a call/chat notification.
- Chats dashboard only Volume Incoming and Volume Outbound SMS Click the tile to see the number of SMS inbound and Outbound.

