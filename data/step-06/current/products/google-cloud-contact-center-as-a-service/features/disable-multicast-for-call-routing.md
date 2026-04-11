---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:29.622Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Disable multicast for call routing"
feature_slug: "disable-multicast-for-call-routing"
latest_feature_date: "2026-02-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/release-notes"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs"
keywords:
  - "disable"
  - "multicast"
  - "for"
  - "call"
  - "routing"
  - "can"
  - "be"
  - "configured"
---

# Disable multicast for call routing

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Call routing can be configured to disable multicast so calls are offered to one agent at a time through deltacast.

## Extended Definition

Call routing can be configured to disable multicast so calls are offered to one agent at a time through deltacast.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/release-notes](https://docs.cloud.google.com/contact-center/ccai-platform/docs/release-notes)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started](https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started)
- [https://docs.cloud.google.com/contact-center/ccai-platform/docs](https://docs.cloud.google.com/contact-center/ccai-platform/docs)

## Supporting Pages

### "Contact Center AI Platform release notes \_|\_ Google Cloud Contact Center\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/release-notes](https://docs.cloud.google.com/contact-center/ccai-platform/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- Feature Disable multicast for call routing You can now disable multicast to ensure that the system offers calls to only one agent at a time through deltacast.
- Administrators: The new Disable Multicast fallback after all Deltacast attempts checkbox appears in the following places: Settings > Operation Management > Routing Call Routing Settings > Operation Management > Routing Chat Routing Settings > Queue > IVR or Mobile or Web Edit / View > QUEUE NAME > Routing Configure > Call Routing Settings > Queue > IVR or Mobile or Web Edit / View > QUEUE NAME > Routing Configure > Chat Routing For more information, see Turn on deltacast for calls globally and Turn on deltacast for calls at the queue level .
- If a top-level queue has no available leaf queues or is incorrectly configured, the IVR fallback will redirect the caller to the previous queue (if human agents are available) or provide an error message before disconnecting (if the top-level queue has no available agents).To enable this feature: Enter the top-level queue ID in the Dialogflow destination (you can find parent queue IDs in the Virtual Agent queue menu settings).
- Feature Click-to-call: show the dial pad screen If you have a CRM configured for click-to-call, you can configure your instance to display the dial pad screen after an agent clicks a phone number in the CRM but before a call starts.

### "Get started with Contact Center AI Platform (CCAI Platform) \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started](https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Instant web calls: Provide visitors with an estimated wait time and automatically initiate an outbound call to a site visitor when their place in the support queue is reached Scheduled calls: Allow site visitors to schedule a time to talk with your support team Queue deflection: Automatically route end users to a message or page on your site Chat support: Provide live chat support directly from your website Proactive triggers : Display a contact bubble for web calls and chats automatically based on visitor behavior.
- Detects calls to your main support number from the device's dialer and converts the call to a Mobile call Direct Access Points : Decide which queue, language, or channel an end-user should reach when the SDK is invoked in various parts of your app based on predefined contact details Working from home Contact Center AI Platform (CCAI Platform) is the perfect tool to empower agents to work from home.
- Check the version number of your instance You can check the version number of your instance and compare it with the version numbers of the updates and patches that Google announces in the CCAI Platform release notes .
- Configure settings for handling calls Call recording, call timers and displays, and default call routing settings: Settings > Calls > Call Details .

### "CCaaS (CCAI Platform) \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs](https://docs.cloud.google.com/contact-center/ccai-platform/docs)
- Source ID: `site-docs-root`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- Customer Experience Insights : Uses natural language processing to help contact center managers by identifying call drivers, sentiment, popular questions, and other information about customer interactions.
- CCAI Platform is a full-stack contact center platform for queuing and routing customer interactions across voice and digital channels.
- CCAI Platform: Provides organizations with modern, embeddable APIs that are optimized for the smartphone era.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

