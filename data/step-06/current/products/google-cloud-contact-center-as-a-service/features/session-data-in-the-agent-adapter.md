---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:29.703Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Session data in the agent adapter"
feature_slug: "session-data-in-the-agent-adapter"
latest_feature_date: "2024-09-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/release-notes"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/localities"
keywords:
  - "session"
  - "in"
  - "the"
  - "agent"
  - "adapter"
  - "can"
  - "be"
  - "displayed"
---

# Session data in the agent adapter

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

Session data can be displayed in the agent adapter, including virtual agent session variables and custom data from web and mobile SDK sessions.

## Extended Definition

Session data can be displayed in the agent adapter, including virtual agent session variables and custom data from web and mobile SDK sessions.

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
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- Feature New post events for virtual task assistants The following new virtual task assistant post events are available: Virtual task assistant joined Virtual task assistant left Virtual task assistant session variables received The agent adapter can use the browser's postMessage() method to send events to the parent iFrame to trigger various actions in your custom CRM application.
- Here's how the ordering controls work: Virtual agents : When you configure session variables, you can use the new display order in adapter property to specify the order that the session variables appear in the agent adapter and in CRM records.
- Feature Direct SMS numbers and configuring SMS chat in the agent adapter You can assign direct SMS numbers to agents, allowing end-users to send SMS chat messages directly to agents without passing through a queue.
- Feature Greater control over custom data You have greater control over the types of SDK custom data that is sent to session metadata files and CRM records and that is displayed in the agent adapter.

### "Get started with Contact Center AI Platform (CCAI Platform) \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started](https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- Billing depending on which of the following charging models is assigned to your instance: Concurrent agents : the maximum number of concurrent users with the agent role that are signed in during the month period Named agents : the maximum number of users in the instance that have the agent role during the month period Minutes used : the number of minutes that users with the agent role are signed in during the month period Note: Telephony charges are charged according to consumption.
- Detects calls to your main support number from the device's dialer and converts the call to a Mobile call Direct Access Points : Decide which queue, language, or channel an end-user should reach when the SDK is invoked in various parts of your app based on predefined contact details Working from home Contact Center AI Platform (CCAI Platform) is the perfect tool to empower agents to work from home.
- Check the version number of your instance You can check the version number of your instance and compare it with the version numbers of the updates and patches that Google announces in the CCAI Platform release notes .
- Ideally, agents will be using the same laptops that they used in the office which retain control over allow-listing or deny listing and applications the device uses such as AdBlock, mic permissions, etc.

### "Locations \_|\_ Google Cloud Contact Center as a Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/localities](https://docs.cloud.google.com/contact-center/ccai-platform/docs/localities)
- Source ID: `site-docs-root`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- CCAI Platform telephony is available in the following locations: Country Google Cloud managed Bring your own carrier (BYOC) Australia ✔ Austria ✔ ✔ Belgium ✔ ✔ Brazil ✔ Canada ✔ ✔ Colombia ✔ ✔ France ✔ ✔ Germany ✔ ✔ Indonesia ✔ Ireland ✔ ✔ Italy ✔ ✔ Japan ✔ ✔ Mexico ✔ ✔ Netherlands ✔ ✔ New Zealand ✔ Portugal ✔ ✔ South Korea ✔ Spain ✔ ✔ Sweden ✔ ✔ Switzerland ✔ ✔ Turkey ✔ United Kingdom ✔ ✔ United States ✔ ✔ Note: Additional regional services terms apply.
- Bring your own carrier (BYOC) : You can use CCAI Platform with the phone numbers and telephony carrier of your choice.
- Google Cloud regions CCAI Platform can be deployed in the following Google Cloud regions.
- Cloud region Location CCaaS Advanced reporting WFM Americas northamerica-northeast1 (Montréal) ✔ ✔ ✔ Americas northamerica-northeast2 (Toronto) ✔ ✔ Americas us-central1 (Iowa) ✔ ✔ ✔ Americas us-east1 (South Carolina) ✔ ✔ ✔ Americas us-east4 (Virginia) ✔ ✔ Americas us-west1 (Oregon) ✔ ✔ ✔ Americas southamerica-east1 (Sao Paulo) ✔ ✔ Europe europe-west1 (Belgium) ✔ ✔ Europe europe-west2 (London) ✔ ✔ ✔ Europe europe-west3 (Frankfurt) ✔ ✔ Europe europe-west4 (Eemshaven) ✔ ✔ Europe europe-west6 (Zurich) ✔ ✔ Middle East me-west1 (Tel Aviv) ✔ ✔ Asia Pacific asia-northeast1 (Tokyo) ✔ ✔ ✔ Asia Pacific asia-northeast3 (Seoul) ✔ ✔ Asia Pacific asia-south1 (Mumbai) ✔ ✔ Asia Pacific asia-southeast1 (Singapore) ✔ ✔ Asia Pacific asia-southeast2 (Jakarta) ✔ ✔ Asia Pacific australia-southeast1 (Sydney) ✔ ✔ ✔ For more information about regions and multi-regions, see Geography and regions .

