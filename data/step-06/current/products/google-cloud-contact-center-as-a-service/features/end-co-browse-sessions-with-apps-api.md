---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:29.727Z"
product_name: "Google Cloud Contact Center as a Service"
product_slug: "google-cloud-contact-center-as-a-service"
feature_name: "End co-browse sessions with Apps API"
feature_slug: "end-co-browse-sessions-with-apps-api"
latest_feature_date: "2024-05-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/release-notes"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started"
  - "https://docs.cloud.google.com/contact-center/ccai-platform/docs"
keywords:
  - "end"
  - "co"
  - "browse"
  - "sessions"
  - "with"
  - "apps"
  - "api"
  - "the"
---

# End co-browse sessions with Apps API

Product: Google Cloud Contact Center as a Service
Coverage: MEDIUM

## Step 02 Summary

The Apps API now provides an endpoint to end a co-browse session by external session ID.

## Extended Definition

The Apps API now provides an endpoint to end a co-browse session by external session ID.

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
- Final score: 214
- Re-rank relevance: N/A

Evidence snippets:
- Feature End co-browse sessions using the Apps API The Apps API has the following new endpoint that lets you end a co-browse session using an external session ID: POST /apps/api/v1/cobrowse sessions/{external session id}/end .
- Feature Performance overview dashboard The performance overview dashboard now includes the following tiles: Avg Queue Time : the average time a session (call or chat) spent in a queue until an agent accepted it or the end-user abandoned it Avg Queue Abandon Time : the average time that sessions (calls or chats) waited in a queue before being disconnected without an agent accepting them Sentiment Score : the average sentiment score for sessions (calls or chats) For more information, see Performance overview dashboard .
- You must enter the following information to enable the NICE QM data export: NICE API Endpoint API Authentication credentials Feature Call Adapter: Improved error codes and messages : We have improved our Call Adapter's error messages with more detailed content, including error codes and explanations.
- Depending on configuration the DNC list can block direct, manual, and outbound calls as well as outbound and scheduled calls created by the Apps API.

### "Get started with Contact Center AI Platform (CCAI Platform) \_|\_ Google\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started](https://docs.cloud.google.com/contact-center/ccai-platform/docs/get-started)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Mobile Web Support : Customers on mobile devices can also access your Web SDK Direct Access Points : Decide which queue, language, or channel an end-user should reach when on a particular page or with predefined account details iOS SDK With the CCAI Platform iOS SDK, you can create seamless voice and chat support experiences for users of your iPhone and iPad apps.
- Direct queues to a visual message Direct Access Points : Decide which queue, language, or channel an end-user should reach when the SDK is invoked in various parts of your app based on predefined contact details Android SDK With the CCAI Platform Android SDK, you can create seamless voice and chat support experiences for users of your Android apps.
- Instant web calls: Provide visitors with an estimated wait time and automatically initiate an outbound call to a site visitor when their place in the support queue is reached Scheduled calls: Allow site visitors to schedule a time to talk with your support team Queue deflection: Automatically route end users to a message or page on your site Chat support: Provide live chat support directly from your website Proactive triggers : Display a contact bubble for web calls and chats automatically based on visitor behavior.
- Billing depending on which of the following charging models is assigned to your instance: Concurrent agents : the maximum number of concurrent users with the agent role that are signed in during the month period Named agents : the maximum number of users in the instance that have the agent role during the month period Minutes used : the number of minutes that users with the agent role are signed in during the month period Note: Telephony charges are charged according to consumption.

### "CCaaS (CCAI Platform) \_|\_ Google Cloud Contact Center as a Service \_\

- URL: [https://docs.cloud.google.com/contact-center/ccai-platform/docs](https://docs.cloud.google.com/contact-center/ccai-platform/docs)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- What's next Get started with CCAI Platform Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- CCAI Platform is a unified contact center platform that accelerates the organization's ability to leverage and deploy Gemini Enterprise for CX without relying on multiple technology providers.
- Home Documentation AI and ML Google Cloud CCaaS Send feedback CCaaS (CCAI Platform) Stay organized with collections Save and categorize content based on your preferences.
- It provides a turnkey implementation of an omni-channel contact center that is built to integrate with Google's other contact center AI products.

