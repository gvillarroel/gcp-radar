---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:29.738Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Support phone number display on incoming calls"
feature_slug: "support-phone-number-display-on-incoming-calls"
latest_feature_date: "2024-03-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/release-notes"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/localities"
keywords:
  - "phone"
  - "number"
  - "display"
  - "on"
  - "incoming"
  - "calls"
  - "the"
  - "call"
---

# Support phone number display on incoming calls

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

The incoming call screen shows the support phone number that the end user dialed.

## Extended Definition

The incoming call screen shows the support phone number that the end user dialed.

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
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- Feature Support phone number is included for incoming calls The incoming call screen shows the support phone number that the end-user used to call your support center.
- Feature New variables for custom lookup URLs We've added the following five variables for custom lookup URLs: CUSTOMER PHONE NUMBER : the end-user's phone number SUPPORT PHONE NUMBER : your call center's phone number that an end-user calls in on OUTBOUND NUMBER : the phone number an agent uses when making an outbound call SESSION ID : the session ID CUSTOM AGENT ID : an optional agent ID For more information, see Custom lookup URL configuration .
- Fixed an issue where the Consumer Phone Number field was missing from the following dashboards: Agent Activity Failed Sessions - Calls Missed Interactions - Calls Abandons - Calls CSAT - Calls We also renamed the Customer ANI field to Consumer Phone Number .
- Fixed the experience for filtering on the consumer phone number for the following dashboards: All Interactions - Calls Real-time Calls - Calls Connected Abandons - Calls Fixed an issue on the All Interactions - Calls dashboard where widgets weren't loading.

### "Get started with Contact Center AI Platform (CCAI Platform) \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started](https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Instant web calls: Provide visitors with an estimated wait time and automatically initiate an outbound call to a site visitor when their place in the support queue is reached Scheduled calls: Allow site visitors to schedule a time to talk with your support team Queue deflection: Automatically route end users to a message or page on your site Chat support: Provide live chat support directly from your website Proactive triggers : Display a contact bubble for web calls and chats automatically based on visitor behavior.
- Detects calls to your main support number from the device's dialer and converts the call to a Mobile call Direct Access Points : Decide which queue, language, or channel an end-user should reach when the SDK is invoked in various parts of your app based on predefined contact details Working from home Contact Center AI Platform (CCAI Platform) is the perfect tool to empower agents to work from home.
- PSTN Fallback calls : When the end-user doesn't have a strong enough data connection for a VoIP call, CCAI Platform will fallback to a PSTN call while still sending the important custom data packet to your CRM record.
- PSTN Fallback calls : When the end-user doesn't have a strong enough data connection for a VoIP call, CCAI Platform will fallback to a PSTN call while still sending the important custom data packet to your CRM record.

### "Locations \_|\_ Google Cloud Contact Center as a Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/localities](https://docs.cloud.google.com/contact-center/ccai-platform/docs/localities)
- Source ID: `site-docs-root`
- Final score: 106
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Telephony The following two options for telephony service are available using CCAI Platform: CCAI Platform managed : Telephony service and phone numbers are provisioned and managed by Google Cloud.
- Bring your own carrier (BYOC) : You can use CCAI Platform with the phone numbers and telephony carrier of your choice.
- Cloud region Location CCaaS Advanced reporting WFM Americas northamerica-northeast1 (Montréal) ✔ ✔ ✔ Americas northamerica-northeast2 (Toronto) ✔ ✔ Americas us-central1 (Iowa) ✔ ✔ ✔ Americas us-east1 (South Carolina) ✔ ✔ ✔ Americas us-east4 (Virginia) ✔ ✔ Americas us-west1 (Oregon) ✔ ✔ ✔ Americas southamerica-east1 (Sao Paulo) ✔ ✔ Europe europe-west1 (Belgium) ✔ ✔ Europe europe-west2 (London) ✔ ✔ ✔ Europe europe-west3 (Frankfurt) ✔ ✔ Europe europe-west4 (Eemshaven) ✔ ✔ Europe europe-west6 (Zurich) ✔ ✔ Middle East me-west1 (Tel Aviv) ✔ ✔ Asia Pacific asia-northeast1 (Tokyo) ✔ ✔ ✔ Asia Pacific asia-northeast3 (Seoul) ✔ ✔ Asia Pacific asia-south1 (Mumbai) ✔ ✔ Asia Pacific asia-southeast1 (Singapore) ✔ ✔ Asia Pacific asia-southeast2 (Jakarta) ✔ ✔ Asia Pacific australia-southeast1 (Sydney) ✔ ✔ ✔ For more information about regions and multi-regions, see Geography and regions .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

