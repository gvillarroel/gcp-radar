---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:29.740Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Dialogflow partial response"
feature_slug: "dialogflow-partial-response"
latest_feature_date: "2024-02-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/release-notes"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/localities"
keywords:
  - "dialogflow"
  - "partial"
  - "response"
  - "can"
  - "send"
  - "an"
  - "initial"
  - "fulfillment"
---

# Dialogflow partial response

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Dialogflow can send an initial fulfillment message before a webhook finishes running.

## Extended Definition

Dialogflow can send an initial fulfillment message before a webhook finishes running.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/release-notes](https://docs.cloud.google.com/contact-center/ccai-platform/docs/release-notes)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started](https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/localities](https://docs.cloud.google.com/contact-center/ccai-platform/docs/localities)

## Supporting Pages

### "Contact Center AI Platform release notes \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/release-notes](https://docs.cloud.google.com/contact-center/ccai-platform/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- With partial response enabled, Dialogflow can immediately send an initial fulfillment message to the end-user, such as, "One moment while I look that up." This way, while the webhook runs and the final fulfillment message is generated, the end-user expects a short wait instead of assuming that there is a problem.
- Feature Cancel partial responses for virtual agents You can now configure virtual agents (VAs) to enable cancellation of the playback of partial-responses fulfillment when the final fulfillment is returned.
- If the final fulfillment is sent by Dialogflow to CCAI Platform while the partial-responses fulfillment is still being played, it is possible to interrupt this playback and play the final fulfillment.
- For example, if a webhook is called by the VA and partial responses is enabled, the fulfillment is returned to CCAI Platform and it starts playing the message to the end-user.

### "Get started with Contact Center AI Platform (CCAI Platform) \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started](https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started)
- Source ID: `site-docs-root`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- Recommended headset features Binaural - Audio in both ears cuts down on background noise Noise-canceling microphone Noise-canceling headset USB connection Brands of headsets our customers use Jabra Logitech Plantronics Sennheiser What's next Configure a sample contact center Private Service Connect Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Mobile Web Support : Customers on mobile devices can also access your Web SDK Direct Access Points : Decide which queue, language, or channel an end-user should reach when on a particular page or with predefined account details iOS SDK With the CCAI Platform iOS SDK, you can create seamless voice and chat support experiences for users of your iPhone and iPad apps.
- Direct queues to a visual message Direct Access Points : Decide which queue, language, or channel an end-user should reach when the SDK is invoked in various parts of your app based on predefined contact details Android SDK With the CCAI Platform Android SDK, you can create seamless voice and chat support experiences for users of your Android apps.
- Home Documentation AI and ML Google Cloud CCaaS User Guides Send feedback Get started with Contact Center AI Platform (CCAI Platform) Stay organized with collections Save and categorize content based on your preferences.

### "Locations \_|\_ Google Cloud Contact Center as a Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/localities](https://docs.cloud.google.com/contact-center/ccai-platform/docs/localities)
- Source ID: `site-docs-root`
- Final score: 43
- Re-rank relevance: N/A

Evidence snippets:
- CCAI Platform telephony is available in the following locations: Country Google Cloud managed Bring your own carrier (BYOC) Australia ✔ Austria ✔ ✔ Belgium ✔ ✔ Brazil ✔ Canada ✔ ✔ Colombia ✔ ✔ France ✔ ✔ Germany ✔ ✔ Indonesia ✔ Ireland ✔ ✔ Italy ✔ ✔ Japan ✔ ✔ Mexico ✔ ✔ Netherlands ✔ ✔ New Zealand ✔ Portugal ✔ ✔ South Korea ✔ Spain ✔ ✔ Sweden ✔ ✔ Switzerland ✔ ✔ Turkey ✔ United Kingdom ✔ ✔ United States ✔ ✔ Note: Additional regional services terms apply.
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation AI and ML Google Cloud CCaaS Resources Send feedback Locations Stay organized with collections Save and categorize content based on your preferences.
- Bring your own carrier (BYOC) : You can use CCAI Platform with the phone numbers and telephony carrier of your choice.

