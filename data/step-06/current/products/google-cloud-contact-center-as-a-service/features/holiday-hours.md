---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.128Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Holiday Hours"
feature_slug: "holiday-hours"
latest_feature_date: "2023-05-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Support_Center_Details"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup"
keywords:
  - "holiday"
  - "hours"
  - "lets"
  - "administrators"
  - "create"
  - "manage"
  - "group"
  - "custom"
---

# Holiday Hours

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Holiday Hours lets administrators create, manage, and group custom holidays with defined names, times, and dates.

## Extended Definition

Holiday Hours lets administrators create, manage, and group custom holidays with defined names, times, and dates.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Support_Center_Details](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Support_Center_Details)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)

## Supporting Pages

### "Hours of operation \_|\_ Google Cloud Contact Center as a Service \_|\_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Support_Center_Details](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Support_Center_Details)
- Source ID: `site-docs-reference-2`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- With holiday hours, you have the flexibility to create and manage your own set of holidays with complete control over the holiday name, dates, and time.
- Deflection data in the API can be found in the following location: https://{subdomain}.{domain}/manager/api/v1/calls Hours of operation settings Settings are available to configure default operation hours and individual settings that may be configured based on Queue, channel, language, time of day, days of the week, or selected holidays.
- Custom hours and queue settings For all other specific hours based on Language selected, Entry point used to access CCAI Platform, or even specific queues, a new custom Operation Hour will need to be created.
- If the hours for a particular entry point or queue are different, create a new custom setting by following these steps: In the CCAI Platform portal, click Settings > Support Center Details .

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Outside callback hours (rollover disabled) : Callbacks are still offered to customers but are cancelled immediately if they fall outside of the fulfillment window.
- Fill out the following information: Name Time zone Days and hours of operation Holidays to observe Click Save .
- Create an extension directory You can create an extension directory that lets end-users call agents .
- In the After Hours Deflection Messages section, customize your deflection messages.

### "Queue and menu setup \_|\_ Google Cloud Contact Center as a Service \_|\_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- Source ID: `site-docs-reference`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- Details and tips Due to the number of digits on a keypad, there's a 9 top-level queue menu limit If you need to more than 9 queues, nest more queues within a top-level queue All numbers assigned to your environment will default to the top of the queue unless otherwise assigned as Direct Access points (DAPs) If you are using multiple languages, numbers will default to the language selection message, then when the language is selected, will route to the top of the menu structure for the selected language If you want to hide a queue from a caller who dials into a number that goes to the top of the queue, toggle the Hide Selection From Menu option to Hide in the menu settings For internal transfers to teams or groups not available to callers, create one queue, hide the option from callers, and create all the necessary sub-queues for agents to pick from for transfers Once your queues are set up, you can see the numbers that the caller needs to select.
- Emails will have the end-user's entered email address in the Reply-to Header field All emails will use this subject format: {Queue Name} [from: {email} ] Your CRM team should set up a rule that identifies the email address in the subject or body of the email and use the email address to identify the contact for the best experience Once enabled, the email form with the custom email per-queue shows at all times for the email channel, including: during operation hours, after operation hours, and for email deflection options CCAI Platform portal sends to the email address specified and then inbound emails are handled by your email provider.
- Queue menus can be set to route to a specific group of agents, deflect to messages, other queues, phone numbers, or voicemail, and many features can be applied at the queue level for specific customization.
- To set these hours, go to Settings > Support Center Details > Add Custom Operation Hours.

