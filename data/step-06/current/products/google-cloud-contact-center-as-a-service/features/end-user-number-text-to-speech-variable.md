---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:29.623Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "END_USER_NUMBER text-to-speech variable"
feature_slug: "end-user-number-text-to-speech-variable"
latest_feature_date: "2026-02-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/release-notes"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs"
keywords:
  - "end"
  - "user"
  - "number"
  - "text"
  - "to"
  - "speech"
  - "variable"
  - "the"
---

# END_USER_NUMBER text-to-speech variable

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

The @{END_USER_NUMBER} variable can read out the end user's phone number in voicemail and callback prompts.

## Extended Definition

The @{END_USER_NUMBER} variable can read out the end user's phone number in voicemail and callback prompts.

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
- To use this capability, add the @{END USER NUMBER} variable to the Callback - Request Phone Number and Voicemail - Request Phone Number text-to-speech message fields.
- Feature New variables for custom lookup URLs We've added the following five variables for custom lookup URLs: CUSTOMER PHONE NUMBER : the end-user's phone number SUPPORT PHONE NUMBER : your call center's phone number that an end-user calls in on OUTBOUND NUMBER : the phone number an agent uses when making an outbound call SESSION ID : the session ID CUSTOM AGENT ID : an optional agent ID For more information, see Custom lookup URL configuration .
- Feature New @{END USER NUMBER} variable You can use the new @{END USER NUMBER} variable to read out the end-user's phone number in a message to leave a voicemail or request a callback.
- Feature Update to the Virtual agent dashboard for wait-time virtual agent metrics The Virtual agent dashboard includes the following new tiles to measure the activity of wait-time virtual agents while end-users wait in queue: Total VA In-Queue Interactions (calls only): the number of calls where wait-time virtual agents were active while end-users were in a queue Total VA In-Queue Time (calls only): the total time that wait-time virtual agents were active while end-users were in a queue Avg VA In-Queue Time (calls only): the average time that wait-time virtual agents were active while end-users were in a queue For more information, see Virtual agent dashboards .

### "Get started with Contact Center AI Platform (CCAI Platform) \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started](https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started)
- Source ID: `site-docs-root`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Billing depending on which of the following charging models is assigned to your instance: Concurrent agents : the maximum number of concurrent users with the agent role that are signed in during the month period Named agents : the maximum number of users in the instance that have the agent role during the month period Minutes used : the number of minutes that users with the agent role are signed in during the month period Note: Telephony charges are charged according to consumption.
- Detects calls to your main support number from the device's dialer and converts the call to a Mobile call Direct Access Points : Decide which queue, language, or channel an end-user should reach when the SDK is invoked in various parts of your app based on predefined contact details Working from home Contact Center AI Platform (CCAI Platform) is the perfect tool to empower agents to work from home.
- Instant web calls: Provide visitors with an estimated wait time and automatically initiate an outbound call to a site visitor when their place in the support queue is reached Scheduled calls: Allow site visitors to schedule a time to talk with your support team Queue deflection: Automatically route end users to a message or page on your site Chat support: Provide live chat support directly from your website Proactive triggers : Display a contact bubble for web calls and chats automatically based on visitor behavior.
- Mobile Web Support : Customers on mobile devices can also access your Web SDK Direct Access Points : Decide which queue, language, or channel an end-user should reach when on a particular page or with predefined account details iOS SDK With the CCAI Platform iOS SDK, you can create seamless voice and chat support experiences for users of your iPhone and iPad apps.

### "CCaaS (CCAI Platform) \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs](https://docs.cloud.google.com/contact-center/ccai-platform/docs)
- Source ID: `site-docs-root`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- Provides smart device capabilities like photo and video sharing, channel blending, and convenient, on-device authentication.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- What's next Get started with CCAI Platform Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Contact Center AI Platform (CCAI Platform) is an AI-driven Contact Center as a Service platform that is built natively on Google Cloud and uses the other Gemini Enterprise for Customer Experience products at its core.

