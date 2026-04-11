---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:29.783Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Alvaria data exporter queue naming"
feature_slug: "alvaria-data-exporter-queue-naming"
latest_feature_date: "2023-08-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/release-notes"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/localities"
keywords:
  - "alvaria"
  - "exporter"
  - "queue"
  - "naming"
  - "names"
  - "exported"
  - "to"
  - "can"
---

# Alvaria data exporter queue naming

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Queue names exported to Alvaria can include the language code and queue ID so repeated names remain distinguishable across queue paths.

## Extended Definition

Queue names exported to Alvaria can include the language code and queue ID so repeated names remain distinguishable across queue paths.

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
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Feature Distinct queue names for the Alvaria data exporter : You now have the ability to repeat names across multiple different queue-paths.
- Administrators: You can find the settings for configuring automatic redaction in the following locations: To add a redaction platform: Settings > Developer Settings Redaction Platform To configure automatic redaction at the global level: Settings Chat > Automatic Redaction To configure automatic redaction at the queue level: Settings > Queue > Web > Edit / View > SELECT QUEUE Automatic Redaction For more information, see Sensitive data redaction .
- If a top-level queue has no available leaf queues or is incorrectly configured, the IVR fallback will redirect the caller to the previous queue (if human agents are available) or provide an error message before disconnecting (if the top-level queue has no available agents).To enable this feature: Enter the top-level queue ID in the Dialogflow destination (you can find parent queue IDs in the Virtual Agent queue menu settings).
- Feature Support for multiple data parameters in API requests to the DAPs for your IVR queues You can capture data in the headers of incoming Session Initiation Protocol (SIP) calls and pass them in API requests to the Direct Access Points (DAPs) for your Interactive Voice Response (IVR) queues.

### "Get started with Contact Center AI Platform (CCAI Platform) \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started](https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started)
- Source ID: `site-docs-root`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- Mobile Web Support : Customers on mobile devices can also access your Web SDK Direct Access Points : Decide which queue, language, or channel an end-user should reach when on a particular page or with predefined account details iOS SDK With the CCAI Platform iOS SDK, you can create seamless voice and chat support experiences for users of your iPhone and iPad apps.
- Direct queues to a visual message Direct Access Points : Decide which queue, language, or channel an end-user should reach when the SDK is invoked in various parts of your app based on predefined contact details Android SDK With the CCAI Platform Android SDK, you can create seamless voice and chat support experiences for users of your Android apps.
- Assigning Agents to queues so they can receive calls/chats.
- Instant web calls: Provide visitors with an estimated wait time and automatically initiate an outbound call to a site visitor when their place in the support queue is reached Scheduled calls: Allow site visitors to schedule a time to talk with your support team Queue deflection: Automatically route end users to a message or page on your site Chat support: Provide live chat support directly from your website Proactive triggers : Display a contact bubble for web calls and chats automatically based on visitor behavior.

### "Locations \_|\_ Google Cloud Contact Center as a Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/localities](https://docs.cloud.google.com/contact-center/ccai-platform/docs/localities)
- Source ID: `site-docs-root`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- Cloud region Location CCaaS Advanced reporting WFM Americas northamerica-northeast1 (Montréal) ✔ ✔ ✔ Americas northamerica-northeast2 (Toronto) ✔ ✔ Americas us-central1 (Iowa) ✔ ✔ ✔ Americas us-east1 (South Carolina) ✔ ✔ ✔ Americas us-east4 (Virginia) ✔ ✔ Americas us-west1 (Oregon) ✔ ✔ ✔ Americas southamerica-east1 (Sao Paulo) ✔ ✔ Europe europe-west1 (Belgium) ✔ ✔ Europe europe-west2 (London) ✔ ✔ ✔ Europe europe-west3 (Frankfurt) ✔ ✔ Europe europe-west4 (Eemshaven) ✔ ✔ Europe europe-west6 (Zurich) ✔ ✔ Middle East me-west1 (Tel Aviv) ✔ ✔ Asia Pacific asia-northeast1 (Tokyo) ✔ ✔ ✔ Asia Pacific asia-northeast3 (Seoul) ✔ ✔ Asia Pacific asia-south1 (Mumbai) ✔ ✔ Asia Pacific asia-southeast1 (Singapore) ✔ ✔ Asia Pacific asia-southeast2 (Jakarta) ✔ ✔ Asia Pacific australia-southeast1 (Sydney) ✔ ✔ ✔ For more information about regions and multi-regions, see Geography and regions .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- CCAI Platform telephony is available in the following locations: Country Google Cloud managed Bring your own carrier (BYOC) Australia ✔ Austria ✔ ✔ Belgium ✔ ✔ Brazil ✔ Canada ✔ ✔ Colombia ✔ ✔ France ✔ ✔ Germany ✔ ✔ Indonesia ✔ Ireland ✔ ✔ Italy ✔ ✔ Japan ✔ ✔ Mexico ✔ ✔ Netherlands ✔ ✔ New Zealand ✔ Portugal ✔ ✔ South Korea ✔ Spain ✔ ✔ Sweden ✔ ✔ Switzerland ✔ ✔ Turkey ✔ United Kingdom ✔ ✔ United States ✔ ✔ Note: Additional regional services terms apply.
- Contact Center AI Platform (CCAI Platform) is available worldwide except for some locations that are not supported for regulatory reasons.

