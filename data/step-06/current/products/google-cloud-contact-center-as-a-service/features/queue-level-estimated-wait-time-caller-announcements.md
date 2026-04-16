---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.094Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Queue-level estimated wait time caller announcements"
feature_slug: "queue-level-estimated-wait-time-caller-announcements"
latest_feature_date: "2024-01-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages"
keywords:
  - "queue"
  - "level"
  - "estimated"
  - "wait"
  - "time"
  - "caller"
  - "announcements"
  - "administrators"
---

# Queue-level estimated wait time caller announcements

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Administrators can configure estimated wait time announcements at the queue level.

## Extended Definition

Administrators can configure estimated wait time announcements at the queue level.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages)

## Supporting Pages

### "Queue and menu setup \_|\_ Google Cloud Contact Center as a Service \_|\_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- Source ID: `site-docs-reference`
- Final score: 209
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Overcapacity deflection per-queue Overview Overcapacity deflection is triggered when a session is initiated, but the estimated wait time is larger than the set threshold in Settings Call or Settings > Chat .
- Details and tips Due to the number of digits on a keypad, there's a 9 top-level queue menu limit If you need to more than 9 queues, nest more queues within a top-level queue All numbers assigned to your environment will default to the top of the queue unless otherwise assigned as Direct Access points (DAPs) If you are using multiple languages, numbers will default to the language selection message, then when the language is selected, will route to the top of the menu structure for the selected language If you want to hide a queue from a caller who dials into a number that goes to the top of the queue, toggle the Hide Selection From Menu option to Hide in the menu settings For internal transfers to teams or groups not available to callers, create one queue, hide the option from callers, and create all the necessary sub-queues for agents to pick from for transfers Once your queues are set up, you can see the numbers that the caller needs to select.
- Estimated wait time prediction calculation Estimated wait time (EWT) is used in determining when to launch overcapacity deflection and for In-Web and In-App UIs, which show wait time to end-users.
- Queue-level wrap-up settings Queue-level wrap-up settings allow you to customize the communication of wrap-up times for different queues within a contact center.

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 197
- Re-rank relevance: N/A

Evidence snippets:
- This feature is configured at the IVR queue level and can be offered to callers conditionally based on the estimated wait times.
- Session types for reporting For reporting, calls to or from direct phone numbers generate the following session types: Voice Inbound (Direct) : an inbound call to a direct phone number Voice Outbound (Direct) : an outbound call from a direct phone number Voice Internal : an internal call to or from a direct phone number Estimated wait time announcement for calls Estimated Wait Time (EWT) Announcements use a calculation to predict the wait time until a caller is connected with an agent.
- Configure estimated wait time announcements Estimated Wait Time (EWT) caller announcements are used in voice systems to inform callers about their expected wait times and manage their expectations.
- Configure queue-level EWT caller announcements Queue-level announcements allow for more personalized interactions with end-users while they wait in different queues.

### "Customizing languages, recordings, & messages \_|\_ Google Cloud Contact\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Customizing_Languages__Recordings____Messages)
- Source ID: `site-docs-reference-2`
- Final score: 181
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Messages can be created at Settings > Languages and Messages > IVR-specific Messages . @{ESTIMATED WAIT TIME IN MINUTES} Description: the numerical value for minutes and / or hours for the current estimated queue wait time is inserted.
- We open {NEXT REOPEN HOUR} . @{ESTIMATED WAIT TIME IN MINUTES} Description: The numerical value for minutes or hours for the current estimated queue wait time is inserted.
- The current estimated wait is @{ESTIMATED WAIT TIME IN MINUTES}. @{QUEUE} Description: this is the name of queue the consumer selected.
- Variables for dynamic consumer messages Variables are dynamic content tags that allow you to personalize messaging configuration in order to manage secure payments, configure greeting and after-hours messaging, and inform customers of their wait time and place in queue.

