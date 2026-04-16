---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.012Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Email subject line editing"
feature_slug: "email-subject-line-editing"
latest_feature_date: "2026-02-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
keywords:
  - "email"
  - "subject"
  - "line"
  - "editing"
  - "agents"
  - "can"
  - "edit"
  - "lines"
---

# Email subject line editing

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Agents can edit email subject lines when replying to or forwarding messages while preserving the conversation thread.

## Extended Definition

Agents can edit email subject lines when replying to or forwarding messages while preserving the conversation thread.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)

## Supporting Pages

### "Queue and menu setup \_|\_ Google Cloud Contact Center as a Service \_|\_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- Source ID: `site-docs-reference`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Web SDK Once the Email option is selected, consumers have the ability to enable a simple rich text editor and bold, underline, or italicize their message, or add ordered and unordered lists.
- Emails will have the end-user's entered email address in the Reply-to Header field All emails will use this subject format: {Queue Name} [from: {email} ] Your CRM team should set up a rule that identifies the email address in the subject or body of the email and use the email address to identify the contact for the best experience Once enabled, the email form with the custom email per-queue shows at all times for the email channel, including: during operation hours, after operation hours, and for email deflection options CCAI Platform portal sends to the email address specified and then inbound emails are handled by your email provider.
- Mobile SDK All Mobile SDK functionality is the same as the Web SDK with these notable exceptions: Mobile SDK supports Picture and Video attachments up to 18MB Mobile SDK allows for multiple file types to be uploaded to the same message Mobile SDK supports uploading all file types (Text, Picture, Video) No rich text editor functionality Does not support reCAPTCHA Setting up and assigning agents to channels and queues: IVR, mobile, web Overview Channels are configurable and should be enabled and set up individually.
- Queue menus can be set to route to a specific group of agents, deflect to messages, other queues, phone numbers, or voicemail, and many features can be applied at the queue level for specific customization.

### "Chat Settings and Features \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- Source ID: `site-docs-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- App version and iOS/Android version are automatically inserted into the email body and the subject is "Support for [selected menu path]".
- Step 4: Launching and editing your trigger Click Go Live to launch the trigger and you'll see a confirmation once enabled.
- See Setting up and Assigning Agents to Channels and Queues: IVR, Mobile, Web for email form configuration options.
- The body contains message segments separated by dashed lines.

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- If you enable agents to decline direct inbound calls, and an agent in a deltacast queue declines a direct inbound call, the call goes to the next agent.
- CCAI Platform supports the following emergency and special services phone numbers: US emergency numbers Canada emergency numbers Canada special service numbers 911 - Emergency 911 - Emergency 211 - Public information and referral services 933 - Emergency test 311 - Non-emergency municipal government services 411 - Local directory assistance 511 - Weather and traveler information services 611 - Repair service 711 - Message relay service (MRS) 811 - Non-urgent health care telephone triage service 988 - Suicide and crisis lifeline Turn emergency calling on or off Turn on emergency calling to let authorized agents make and manage emergency and special services calls in the call adapter.
- To assign multiple direct phone numbers to an agent, follow the instructions in Bulk user management: Upload new or updated users while following these guidelines: Stay within the limitations for assigning direct phone numbers.
- Mobile SDK: default email app is launched with: - Email address in the \" To \" field . - Data like app version and device type call be added to the email body . - Subject \" Support for \ [ queue path \ ] \" .

