---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:29.655Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Connecting message playback skip setting"
feature_slug: "connecting-message-playback-skip-setting"
latest_feature_date: "2025-08-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/release-notes"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started"
keywords:
  - "connecting"
  - "message"
  - "playback"
  - "skip"
  - "setting"
  - "administrators"
  - "can"
  - "configure"
---

# Connecting message playback skip setting

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Administrators can configure an instance to skip playback of the connecting message when calls connect to agents.

## Extended Definition

Administrators can configure an instance to skip playback of the connecting message when calls connect to agents.

## Evidence Summary

Fast-mode lexical matching selected 2 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/release-notes](https://docs.cloud.google.com/contact-center/ccai-platform/docs/release-notes)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started](https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started)

## Supporting Pages

### "Contact Center AI Platform release notes \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/release-notes](https://docs.cloud.google.com/contact-center/ccai-platform/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Feature Skip the connecting message playback You can now configure your instance to skip playback of the connecting message when calls are connected to agents.
- Administrators: The Settings > Call > Call Details pane contains a new Skip the Connecting Message playback checkbox.
- If a top-level queue has no available leaf queues or is incorrectly configured, the IVR fallback will redirect the caller to the previous queue (if human agents are available) or provide an error message before disconnecting (if the top-level queue has no available agents).To enable this feature: Enter the top-level queue ID in the Dialogflow destination (you can find parent queue IDs in the Virtual Agent queue menu settings).
- Administrators: You can find the settings for configuring automatic redaction in the following locations: To add a redaction platform: Settings > Developer Settings Redaction Platform To configure automatic redaction at the global level: Settings Chat > Automatic Redaction To configure automatic redaction at the queue level: Settings > Queue > Web > Edit / View > SELECT QUEUE Automatic Redaction For more information, see Sensitive data redaction .

### "Get started with Contact Center AI Platform (CCAI Platform) \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started](https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started)
- Source ID: `site-docs-root`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- Recommended headset features Binaural - Audio in both ears cuts down on background noise Noise-canceling microphone Noise-canceling headset USB connection Brands of headsets our customers use Jabra Logitech Plantronics Sennheiser What's next Configure a sample contact center Private Service Connect Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Direct queues to a visual message Direct Access Points : Decide which queue, language, or channel an end-user should reach when the SDK is invoked in various parts of your app based on predefined contact details Android SDK With the CCAI Platform Android SDK, you can create seamless voice and chat support experiences for users of your Android apps.
- Configure settings for handling chats Enable chat, create proactive web triggers, establish chat channel settings like chat threshold for agents and timeout settings at Settings > Chat Create chat shortcuts for agents to use.
- Important: If you configure private access ( Preview ), you restrict public access to your CCAI Platform instance from the internet (end-users can still contact your contact center as they normally would).

