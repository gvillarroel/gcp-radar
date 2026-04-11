---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:29.684Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Direct SMS numbers"
feature_slug: "direct-sms-numbers"
latest_feature_date: "2025-01-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/release-notes"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/localities"
keywords:
  - "direct"
  - "sms"
  - "numbers"
  - "agents"
  - "can"
  - "be"
  - "assigned"
  - "so"
---

# Direct SMS numbers

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Agents can be assigned direct SMS numbers so end users can send SMS chat messages directly to agents without going through a queue.

## Extended Definition

Agents can be assigned direct SMS numbers so end users can send SMS chat messages directly to agents without going through a queue.

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
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- Feature Direct SMS numbers and configuring SMS chat in the agent adapter You can assign direct SMS numbers to agents, allowing end-users to send SMS chat messages directly to agents without passing through a queue.
- Feature Direct inbound calling With direct inbound calling, you can create direct phone numbers and assign them to agents or queues.
- If a top-level queue has no available leaf queues or is incorrectly configured, the IVR fallback will redirect the caller to the previous queue (if human agents are available) or provide an error message before disconnecting (if the top-level queue has no available agents).To enable this feature: Enter the top-level queue ID in the Dialogflow destination (you can find parent queue IDs in the Virtual Agent queue menu settings).
- Feature Restrict auto-assignment for email queues You can now configure email queues so that incoming emails are auto-assigned only during queue operating hours or to agents who are signed in.

### "Get started with Contact Center AI Platform (CCAI Platform) \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started](https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Billing depending on which of the following charging models is assigned to your instance: Concurrent agents : the maximum number of concurrent users with the agent role that are signed in during the month period Named agents : the maximum number of users in the instance that have the agent role during the month period Minutes used : the number of minutes that users with the agent role are signed in during the month period Note: Telephony charges are charged according to consumption.
- Detects calls to your main support number from the device's dialer and converts the call to a Mobile call Direct Access Points : Decide which queue, language, or channel an end-user should reach when the SDK is invoked in various parts of your app based on predefined contact details Working from home Contact Center AI Platform (CCAI Platform) is the perfect tool to empower agents to work from home.
- Mobile Web Support : Customers on mobile devices can also access your Web SDK Direct Access Points : Decide which queue, language, or channel an end-user should reach when on a particular page or with predefined account details iOS SDK With the CCAI Platform iOS SDK, you can create seamless voice and chat support experiences for users of your iPhone and iPad apps.
- Check the version number of your instance You can check the version number of your instance and compare it with the version numbers of the updates and patches that Google announces in the CCAI Platform release notes .

### "Locations \_|\_ Google Cloud Contact Center as a Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/localities](https://docs.cloud.google.com/contact-center/ccai-platform/docs/localities)
- Source ID: `site-docs-root`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- CCAI Platform telephony is available in the following locations: Country Google Cloud managed Bring your own carrier (BYOC) Australia ✔ Austria ✔ ✔ Belgium ✔ ✔ Brazil ✔ Canada ✔ ✔ Colombia ✔ ✔ France ✔ ✔ Germany ✔ ✔ Indonesia ✔ Ireland ✔ ✔ Italy ✔ ✔ Japan ✔ ✔ Mexico ✔ ✔ Netherlands ✔ ✔ New Zealand ✔ Portugal ✔ ✔ South Korea ✔ Spain ✔ ✔ Sweden ✔ ✔ Switzerland ✔ ✔ Turkey ✔ United Kingdom ✔ ✔ United States ✔ ✔ Note: Additional regional services terms apply.
- Bring your own carrier (BYOC) : You can use CCAI Platform with the phone numbers and telephony carrier of your choice.
- Cloud region Location CCaaS Advanced reporting WFM Americas northamerica-northeast1 (Montréal) ✔ ✔ ✔ Americas northamerica-northeast2 (Toronto) ✔ ✔ Americas us-central1 (Iowa) ✔ ✔ ✔ Americas us-east1 (South Carolina) ✔ ✔ ✔ Americas us-east4 (Virginia) ✔ ✔ Americas us-west1 (Oregon) ✔ ✔ ✔ Americas southamerica-east1 (Sao Paulo) ✔ ✔ Europe europe-west1 (Belgium) ✔ ✔ Europe europe-west2 (London) ✔ ✔ ✔ Europe europe-west3 (Frankfurt) ✔ ✔ Europe europe-west4 (Eemshaven) ✔ ✔ Europe europe-west6 (Zurich) ✔ ✔ Middle East me-west1 (Tel Aviv) ✔ ✔ Asia Pacific asia-northeast1 (Tokyo) ✔ ✔ ✔ Asia Pacific asia-northeast3 (Seoul) ✔ ✔ Asia Pacific asia-south1 (Mumbai) ✔ ✔ Asia Pacific asia-southeast1 (Singapore) ✔ ✔ Asia Pacific asia-southeast2 (Jakarta) ✔ ✔ Asia Pacific australia-southeast1 (Sydney) ✔ ✔ ✔ For more information about regions and multi-regions, see Geography and regions .
- Telephony The following two options for telephony service are available using CCAI Platform: CCAI Platform managed : Telephony service and phone numbers are provisioned and managed by Google Cloud.

