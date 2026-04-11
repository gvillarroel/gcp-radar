---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:29.791Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "SIP phone number format support"
feature_slug: "sip-phone-number-format-support"
latest_feature_date: "2023-08-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/release-notes"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/localities"
keywords:
  - "sip"
  - "phone"
  - "number"
  - "format"
  - "dap"
  - "now"
  - "supports"
  - "incoming"
---

# SIP phone number format support

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

DAP now supports incoming SIP phone numbers in the sip:[number]@[domain] format.

## Extended Definition

DAP now supports incoming SIP phone numbers in the sip:[number]@[domain] format.

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
- Feature DAP: Additional format : Previously limited to E164 formatted numbers, we now support the input of SIP phone numbers in the incoming sip address format: sip:[number]@[domain].
- Feature Voice Virtual Agents now has the ability to transfer a call to a specific phone number or SIP endpoint, ensuring that the consumer is connected to the appropriate person or department.
- Fixed Fixed an issue where phone number DAPs weren't handled properly for inbound Telnyx SIP calls.
- Feature New variables for custom lookup URLs We've added the following five variables for custom lookup URLs: CUSTOMER PHONE NUMBER : the end-user's phone number SUPPORT PHONE NUMBER : your call center's phone number that an end-user calls in on OUTBOUND NUMBER : the phone number an agent uses when making an outbound call SESSION ID : the session ID CUSTOM AGENT ID : an optional agent ID For more information, see Custom lookup URL configuration .

### "Get started with Contact Center AI Platform (CCAI Platform) \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started](https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started)
- Source ID: `site-docs-root`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Granting Notification and Microphone Permissions. .
- Recommended headset features Binaural - Audio in both ears cuts down on background noise Noise-canceling microphone Noise-canceling headset USB connection Brands of headsets our customers use Jabra Logitech Plantronics Sennheiser What's next Configure a sample contact center Private Service Connect Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Billing depending on which of the following charging models is assigned to your instance: Concurrent agents : the maximum number of concurrent users with the agent role that are signed in during the month period Named agents : the maximum number of users in the instance that have the agent role during the month period Minutes used : the number of minutes that users with the agent role are signed in during the month period Note: Telephony charges are charged according to consumption.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

### "Locations \_|\_ Google Cloud Contact Center as a Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/localities](https://docs.cloud.google.com/contact-center/ccai-platform/docs/localities)
- Source ID: `site-docs-root`
- Final score: 40
- Re-rank relevance: N/A

Evidence snippets:
- Telephony The following two options for telephony service are available using CCAI Platform: CCAI Platform managed : Telephony service and phone numbers are provisioned and managed by Google Cloud.
- Bring your own carrier (BYOC) : You can use CCAI Platform with the phone numbers and telephony carrier of your choice.
- Cloud region Location CCaaS Advanced reporting WFM Americas northamerica-northeast1 (Montréal) ✔ ✔ ✔ Americas northamerica-northeast2 (Toronto) ✔ ✔ Americas us-central1 (Iowa) ✔ ✔ ✔ Americas us-east1 (South Carolina) ✔ ✔ ✔ Americas us-east4 (Virginia) ✔ ✔ Americas us-west1 (Oregon) ✔ ✔ ✔ Americas southamerica-east1 (Sao Paulo) ✔ ✔ Europe europe-west1 (Belgium) ✔ ✔ Europe europe-west2 (London) ✔ ✔ ✔ Europe europe-west3 (Frankfurt) ✔ ✔ Europe europe-west4 (Eemshaven) ✔ ✔ Europe europe-west6 (Zurich) ✔ ✔ Middle East me-west1 (Tel Aviv) ✔ ✔ Asia Pacific asia-northeast1 (Tokyo) ✔ ✔ ✔ Asia Pacific asia-northeast3 (Seoul) ✔ ✔ Asia Pacific asia-south1 (Mumbai) ✔ ✔ Asia Pacific asia-southeast1 (Singapore) ✔ ✔ Asia Pacific asia-southeast2 (Jakarta) ✔ ✔ Asia Pacific australia-southeast1 (Sydney) ✔ ✔ ✔ For more information about regions and multi-regions, see Geography and regions .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

