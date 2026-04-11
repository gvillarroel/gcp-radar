---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:29.786Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Fallback IVR navigation settings"
feature_slug: "fallback-ivr-navigation-settings"
latest_feature_date: "2023-08-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/release-notes"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started"
keywords:
  - "fallback"
  - "ivr"
  - "navigation"
  - "settings"
  - "administrators"
  - "can"
  - "configure"
  - "global"
---

# Fallback IVR navigation settings

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Administrators can configure global and queue-level fallback routing when an end user does not select a queue in IVR navigation.

## Extended Definition

Administrators can configure global and queue-level fallback routing when an end user does not select a queue in IVR navigation.

## Evidence Summary

Fast-mode lexical matching selected 2 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/release-notes](https://docs.cloud.google.com/contact-center/ccai-platform/docs/release-notes)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started](https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started)

## Supporting Pages

### "Contact Center AI Platform release notes \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/release-notes](https://docs.cloud.google.com/contact-center/ccai-platform/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Administrators: The new Disable Multicast fallback after all Deltacast attempts checkbox appears in the following places: Settings > Operation Management > Routing Call Routing Settings > Operation Management > Routing Chat Routing Settings > Queue > IVR or Mobile or Web Edit / View > QUEUE NAME > Routing Configure > Call Routing Settings > Queue > IVR or Mobile or Web Edit / View > QUEUE NAME > Routing Configure > Chat Routing For more information, see Turn on deltacast for calls globally and Turn on deltacast for calls at the queue level .
- Administrators: You can find the settings for configuring automatic redaction in the following locations: To add a redaction platform: Settings > Developer Settings Redaction Platform To configure automatic redaction at the global level: Settings Chat > Automatic Redaction To configure automatic redaction at the queue level: Settings > Queue > Web > Edit / View > SELECT QUEUE Automatic Redaction For more information, see Sensitive data redaction .
- If a top-level queue has no available leaf queues or is incorrectly configured, the IVR fallback will redirect the caller to the previous queue (if human agents are available) or provide an error message before disconnecting (if the top-level queue has no available agents).To enable this feature: Enter the top-level queue ID in the Dialogflow destination (you can find parent queue IDs in the Virtual Agent queue menu settings).
- May 16, 2023 Feature SIP URI Directory - Call Routing : With this release, you can now use the SIP Directory to configure SIP call routing and transfers in IVR queue settings.

### "Get started with Contact Center AI Platform (CCAI Platform) \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started](https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- Recommended headset features Binaural - Audio in both ears cuts down on background noise Noise-canceling microphone Noise-canceling headset USB connection Brands of headsets our customers use Jabra Logitech Plantronics Sennheiser What's next Configure a sample contact center Private Service Connect Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Configure settings for handling chats Enable chat, create proactive web triggers, establish chat channel settings like chat threshold for agents and timeout settings at Settings > Chat Create chat shortcuts for agents to use.
- Important: If you configure private access ( Preview ), you restrict public access to your CCAI Platform instance from the internet (end-users can still contact your contact center as they normally would).
- Configure settings for handling calls Call recording, call timers and displays, and default call routing settings: Settings > Calls > Call Details .

