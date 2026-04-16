---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.024Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Queue email signatures"
feature_slug: "queue-email-signatures"
latest_feature_date: "2025-11-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Voicemail_Details_Data_Set"
keywords:
  - "queue"
  - "email"
  - "signatures"
  - "administrators"
  - "can"
  - "define"
  - "standardized"
  - "all"
---

# Queue email signatures

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Administrators can define standardized email signatures for all outgoing emails sent from a queue.

## Extended Definition

Administrators can define standardized email signatures for all outgoing emails sent from a queue.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Voicemail_Details_Data_Set](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Voicemail_Details_Data_Set)

## Supporting Pages

### "Queue and menu setup \_|\_ Google Cloud Contact Center as a Service \_|\_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- Source ID: `site-docs-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Emails will have the end-user's entered email address in the Reply-to Header field All emails will use this subject format: {Queue Name} [from: {email} ] Your CRM team should set up a rule that identifies the email address in the subject or body of the email and use the email address to identify the contact for the best experience Once enabled, the email form with the custom email per-queue shows at all times for the email channel, including: during operation hours, after operation hours, and for email deflection options CCAI Platform portal sends to the email address specified and then inbound emails are handled by your email provider.
- Key features End-user entry fields: name, email address, and message box Apply text formatting to the message Attach media files Display message content instructions for users Admin Configuration Options Customizable destination email address per queue Customizable instruction message per queue Security option to include a hidden reCAPTCHA for the Web SDK Configuration considerations When email enhancement is enabled, the email will go out from no-reply@company.com email.
- Queue menus can be set to route to a specific group of agents, deflect to messages, other queues, phone numbers, or voicemail, and many features can be applied at the queue level for specific customization.
- Queues can be configured to enable specific channels (email, call, chat), the assignment of Agents and Teams to each channel, and many features can be applied at the queue level for specific customization.

### "Standard Reports: Voicemail Details Data Set \_|\_ Google Cloud Contact\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Voicemail_Details_Data_Set](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Standard_Reports_Voicemail_Details_Data_Set)
- Source ID: `site-docs-reference`
- Final score: 96
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This report includes the name of the queue, timestamps, the duration of the voicemail along with the URL link to the voicemail recording.
- The Voicemail Details report can be found at Reports > Queues .
- Home Documentation AI and ML Google Cloud CCaaS User Guides Send feedback Standard Reports: Voicemail Details Data Set Stay organized with collections Save and categorize content based on your preferences.
- The metrics included in this report are as follows: Metric Name Definition Queue Name The name of the queue including the full path names if the queue is a sub queue - where the interaction came into.

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- When enabled, configure the TSS or upload a custom greeting in Settings Languages & Messages Deflection to Voicemail option - Request Already Placed Message. - Limit consumer to 1 voicemail per queue: a consumer could leave a separate voicemail request on a separate queue. - Limit consumer to 1 voicemail request across all queues: voicemail option not available if an unattended voicemail is already left form the phone number.
- Mobile SDK: default email app is launched with: - Email address in the \" To \" field . - Data like app version and device type call be added to the email body . - Subject \" Support for \ [ queue path \ ] \" .
- You can also optionally allow agents to forward voicemails back to the same queue by checking the box that appears when voicemail forwarding is enabled.
- The settings are inherited by all queues globally by default, unless they are overridden (redefined) at the queue level or at the parent queue level.

