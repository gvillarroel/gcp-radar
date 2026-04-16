---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:47.133Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Queue-level wrap-up settings"
feature_slug: "queue-level-wrap-up-settings"
latest_feature_date: "2023-04-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features"
keywords:
  - "queue"
  - "level"
  - "wrap"
  - "up"
  - "settings"
  - "lets"
  - "admins"
  - "set"
---

# Queue-level wrap-up settings

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Lets admins set different wrap-up times per queue so agents have time to finish work before taking another interaction.

## Extended Definition

Lets admins set different wrap-up times per queue so agents have time to finish work before taking another interaction.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)

## Supporting Pages

### "Queue and menu setup \_|\_ Google Cloud Contact Center as a Service \_|\_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Queue_and_Menu_Setup)
- Source ID: `site-docs-reference`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- Define wrap-up queue level settings Wrap-up settings are inherited by all queues globally by default, unless they are overridden (redefined) at the queue level or at the parent queue level.
- Redefined indicates that the wrap-up settings for that specific queue have been customized and are different from the default settings inherited from the global or parent queue level.
- Reset to the Global The button Reset to the Global is available when the queue wrap-up settings are redefined at the queue level and are not inherited from a parent queue.
- Queue-level wrap-up settings Queue-level wrap-up settings allow you to customize the communication of wrap-up times for different queues within a contact center.

### "Call settings \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings](https://docs.cloud.google.com/contact-center/ccai-platform/docs/call-settings)
- Source ID: `site-docs-reference-required-8`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- Read out the end-user's phone number at the queue level To read out the end-user's phone number at the queue level, follow these steps: In the CCAI Platform portal, click Settings > Queue .
- Enable overcapacity deflection at the queue level To enable overcapacity deflection at the queue level, follow these steps: In the CCAI Platform portal, click Settings > Queue .
- Note: If the outbound numbers are set for a Top-level queue, all sub-queues will acquire the same number setting unless specific settings for the sub-queue are made.
- For this step, you must use a leaf-queue (the lowest level queue) so that Pre-session SMS Deflection is available as a settings option on the right-side panel.

### "Chat Settings and Features \_|\_ Google Cloud Contact Center as a Service\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features](https://docs.cloud.google.com/contact-center/ccai-platform/docs/Chat_Settings_and_Features)
- Source ID: `site-docs-reference`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Configure automatic redaction settings at the queue level To configure automatic redaction settings at the queue level, follow these steps: In the CCAI Platform portal, click Settings > Queue .
- Configure chat check-in at the queue level To configure chat check-in at the queue level, follow these steps: In the CCAI Platform portal, click Settings > Queue .
- For more information, see Configure automatic redaction settings at the global level and Configure automatic redaction settings at the queue level .
- The default notification timer will be set to 5 min and this default timer can be overridden in the queue-level settings described below.

