---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:29.705Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Reserved data attributes"
feature_slug: "reserved-data-attributes"
latest_feature_date: "2024-09-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/release-notes"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs"
keywords:
  - "reserved"
  - "attributes"
  - "let"
  - "sessions"
  - "be"
  - "tagged"
  - "as"
  - "verified"
---

# Reserved data attributes

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Reserved data attributes let sessions be tagged as Verified Customer, Bad Actor, or Repeat Customer and surfaced in the agent adapter.

## Extended Definition

Reserved data attributes let sessions be tagged as Verified Customer, Bad Actor, or Repeat Customer and surfaced in the agent adapter.

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
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Feature Reserved data attributes With reserved data attributes, you can tag sessions with one of the following labels: Verified Customer , Bad Actor , or Repeat Customer .
- Feature Performance overview dashboard The performance overview dashboard now includes the following tiles: Avg Queue Time : the average time a session (call or chat) spent in a queue until an agent accepted it or the end-user abandoned it Avg Queue Abandon Time : the average time that sessions (calls or chats) waited in a queue before being disconnected without an agent accepting them Sentiment Score : the average sentiment score for sessions (calls or chats) For more information, see Performance overview dashboard .
- The following table shows the affected classes: Affected classes Name API version UJETUtilsController 35.0 UJETUtilsControllerTests 35.0 UJETJWT 43.0 UJETJWTTests 43.0 UJETPageController 43.0 Required action To ensure compatibility with the Salesforce ICU update and prevent any operational impact, you must complete the following action before June 15th, 2025 : Install the v1.40 update .
- Fixed an issue where a single call was being reported as two separate calls after the following occurred: (1) A call was escalated from a virtual agent to a queue, (2) An agent clicked Answer in the agent adapter, and (3) The end-user hung up before the countdown was complete.

### "Get started with Contact Center AI Platform (CCAI Platform) \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started](https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started)
- Source ID: `site-docs-root`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- Instant web calls: Provide visitors with an estimated wait time and automatically initiate an outbound call to a site visitor when their place in the support queue is reached Scheduled calls: Allow site visitors to schedule a time to talk with your support team Queue deflection: Automatically route end users to a message or page on your site Chat support: Provide live chat support directly from your website Proactive triggers : Display a contact bubble for web calls and chats automatically based on visitor behavior.
- Billing depending on which of the following charging models is assigned to your instance: Concurrent agents : the maximum number of concurrent users with the agent role that are signed in during the month period Named agents : the maximum number of users in the instance that have the agent role during the month period Minutes used : the number of minutes that users with the agent role are signed in during the month period Note: Telephony charges are charged according to consumption.
- Detects calls to your main support number from the device's dialer and converts the call to a Mobile call Direct Access Points : Decide which queue, language, or channel an end-user should reach when the SDK is invoked in various parts of your app based on predefined contact details Working from home Contact Center AI Platform (CCAI Platform) is the perfect tool to empower agents to work from home.
- Check the version number of your instance You can check the version number of your instance and compare it with the version numbers of the updates and patches that Google announces in the CCAI Platform release notes .

### "CCaaS (CCAI Platform) \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs](https://docs.cloud.google.com/contact-center/ccai-platform/docs)
- Source ID: `site-docs-root`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- What's next Get started with CCAI Platform Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Contact Center AI Platform (CCAI Platform) is an AI-driven Contact Center as a Service platform that is built natively on Google Cloud and uses the other Gemini Enterprise for Customer Experience products at its core.
- In addition to CCAI Platform, Gemini Enterprise for CX contains the following products: Dialogflow CX : Lets you create advanced virtual agents to handle routine interactions.

