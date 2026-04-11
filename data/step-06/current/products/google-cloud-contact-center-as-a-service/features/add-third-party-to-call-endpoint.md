---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:29.618Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Add third party to call endpoint"
feature_slug: "add-third-party-to-call-endpoint"
latest_feature_date: "2026-02-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/release-notes"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs"
keywords:
  - "add"
  - "third"
  - "party"
  - "to"
  - "call"
  - "endpoint"
  - "the"
  - "apps"
---

# Add third party to call endpoint

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

The Apps API provides an endpoint to add a third party to an ongoing call by dialing their phone number.

## Extended Definition

The Apps API provides an endpoint to add a third party to an ongoing call by dialing their phone number.

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
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Feature Apps API: new endpoint for adding a third party to a call The apps API now includes an endpoint ( /calls/add/ CALL ID /dial ) to add a third party to an ongoing call.
- Feature New force logout endpoint in the Apps API You can now do a force logout on agents, using agent ID or IP address, by making a POST call to a new Apps API endpoint: POST /apps/api/v1/agent statuses/force logout .
- When you make a request to this endpoint, the system automatically dials the third-party's phone number, and the agent's call adapter displays the Calling screen.
- Feature Country code of the outbound phone number is included with the added party's phone number When an agent adds a party to a call, the country code from the outbound phone number is automatically included with the added party's phone number.

### "Get started with Contact Center AI Platform (CCAI Platform) \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started](https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Instant web calls: Provide visitors with an estimated wait time and automatically initiate an outbound call to a site visitor when their place in the support queue is reached Scheduled calls: Allow site visitors to schedule a time to talk with your support team Queue deflection: Automatically route end users to a message or page on your site Chat support: Provide live chat support directly from your website Proactive triggers : Display a contact bubble for web calls and chats automatically based on visitor behavior.
- Detects calls to your main support number from the device's dialer and converts the call to a Mobile call Direct Access Points : Decide which queue, language, or channel an end-user should reach when the SDK is invoked in various parts of your app based on predefined contact details Working from home Contact Center AI Platform (CCAI Platform) is the perfect tool to empower agents to work from home.
- Mobile Web Support : Customers on mobile devices can also access your Web SDK Direct Access Points : Decide which queue, language, or channel an end-user should reach when on a particular page or with predefined account details iOS SDK With the CCAI Platform iOS SDK, you can create seamless voice and chat support experiences for users of your iPhone and iPad apps.
- Direct queues to a visual message Direct Access Points : Decide which queue, language, or channel an end-user should reach when the SDK is invoked in various parts of your app based on predefined contact details Android SDK With the CCAI Platform Android SDK, you can create seamless voice and chat support experiences for users of your Android apps.

### "CCaaS (CCAI Platform) \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs](https://docs.cloud.google.com/contact-center/ccai-platform/docs)
- Source ID: `site-docs-root`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- Customer Experience Insights : Uses natural language processing to help contact center managers by identifying call drivers, sentiment, popular questions, and other information about customer interactions.
- In addition to CCAI Platform, Gemini Enterprise for CX contains the following products: Dialogflow CX : Lets you create advanced virtual agents to handle routine interactions.
- Agent Assist : Identifies your customers' intent and provides real-time, step-by-step assistance to employees during their calls and chats with customers.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

