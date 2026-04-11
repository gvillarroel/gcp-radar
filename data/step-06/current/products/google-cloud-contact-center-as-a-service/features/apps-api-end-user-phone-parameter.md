---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:29.619Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "Apps API end_user.phone parameter"
feature_slug: "apps-api-end-user-phone-parameter"
latest_feature_date: "2026-02-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/release-notes"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs"
keywords:
  - "apps"
  - "api"
  - "end"
  - "user"
  - "phone"
  - "parameter"
  - "the"
  - "accepts"
---

# Apps API end_user.phone parameter

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

The Apps API accepts an optional end_user.phone parameter during chat creation to enable CRM lookup by phone number and display the end user's name in the chat adapter.

## Extended Definition

The Apps API accepts an optional end_user.phone parameter during chat creation to enable CRM lookup by phone number and display the end user's name in the chat adapter.

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
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Feature Apps API: new end user.phone parameter The apps API accepts an optional end user.phone parameter during chat creation.
- This parameter enables CRM lookup using the end-user's phone number, which lets the chat adapter display the end-user's name.
- Feature New variables for custom lookup URLs We've added the following five variables for custom lookup URLs: CUSTOMER PHONE NUMBER : the end-user's phone number SUPPORT PHONE NUMBER : your call center's phone number that an end-user calls in on OUTBOUND NUMBER : the phone number an agent uses when making an outbound call SESSION ID : the session ID CUSTOM AGENT ID : an optional agent ID For more information, see Custom lookup URL configuration .
- Feature End co-browse sessions using the Apps API The Apps API has the following new endpoint that lets you end a co-browse session using an external session ID: POST /apps/api/v1/cobrowse sessions/{external session id}/end .

### "Get started with Contact Center AI Platform (CCAI Platform) \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started](https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Mobile Web Support : Customers on mobile devices can also access your Web SDK Direct Access Points : Decide which queue, language, or channel an end-user should reach when on a particular page or with predefined account details iOS SDK With the CCAI Platform iOS SDK, you can create seamless voice and chat support experiences for users of your iPhone and iPad apps.
- Direct queues to a visual message Direct Access Points : Decide which queue, language, or channel an end-user should reach when the SDK is invoked in various parts of your app based on predefined contact details Android SDK With the CCAI Platform Android SDK, you can create seamless voice and chat support experiences for users of your Android apps.
- Instant web calls: Provide visitors with an estimated wait time and automatically initiate an outbound call to a site visitor when their place in the support queue is reached Scheduled calls: Allow site visitors to schedule a time to talk with your support team Queue deflection: Automatically route end users to a message or page on your site Chat support: Provide live chat support directly from your website Proactive triggers : Display a contact bubble for web calls and chats automatically based on visitor behavior.
- Recommended headset features Binaural - Audio in both ears cuts down on background noise Noise-canceling microphone Noise-canceling headset USB connection Brands of headsets our customers use Jabra Logitech Plantronics Sennheiser What's next Configure a sample contact center Private Service Connect Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "CCaaS (CCAI Platform) \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs](https://docs.cloud.google.com/contact-center/ccai-platform/docs)
- Source ID: `site-docs-root`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- CCAI Platform: Provides organizations with modern, embeddable APIs that are optimized for the smartphone era.
- What's next Get started with CCAI Platform Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Provides smart device capabilities like photo and video sharing, channel blending, and convenient, on-device authentication.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

