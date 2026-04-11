---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:28:26.491Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Test without publishing"
feature_slug: "test-without-publishing"
latest_feature_date: "2022-12-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/listen-pub-sub-topic-send-email"
  - "https://docs.cloud.google.com/application-integration/docs/retrieve-api-payload-send-email"
  - "https://docs.cloud.google.com/application-integration/docs/release-notes"
keywords:
  - "validating"
  - "without"
  - "running"
  - "test"
  - "publishing"
  - "allows"
  - "an"
  - "and"
---

# Test without publishing

Product: Application Integration
Coverage: LOW

## Step 02 Summary

Test without publishing allows running and validating an integration before publishing by testing input variables and behavior.

## Extended Definition

Test without publishing allows running and validating an integration before publishing by testing input variables and behavior.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/listen-pub-sub-topic-send-email](https://docs.cloud.google.com/application-integration/docs/listen-pub-sub-topic-send-email)
- [https://docs.cloud.google.com/application-integration/docs/retrieve-api-payload-send-email](https://docs.cloud.google.com/application-integration/docs/retrieve-api-payload-send-email)
- [https://docs.cloud.google.com/application-integration/docs/release-notes](https://docs.cloud.google.com/application-integration/docs/release-notes)

## Supporting Pages

### "Listen to Cloud Pub/Sub topic and send an email \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/listen-pub-sub-topic-send-email](https://docs.cloud.google.com/application-integration/docs/listen-pub-sub-topic-send-email)
- Source ID: `site-docs-root`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Upon successfully publishing your integration, you can view and inspect the execution logs of the published integration.
- This quickstart tests the integration's ability to listen to the topic and perform tasks when triggered.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- Before you begin Assign the following Identity and Access Management (IAM) roles to the Application Integration Service Agent ( service- PROJECT NUMBER @gcp-sa-integrations.iam.gserviceaccount.com ) in your Google Cloud project: Pub/Sub Editor Application Integration Invoker For more information about assigning IAM roles, see IAM roles and permissions .

### "Retrieve API payload and send an email \_|\_ Application Integration \_\

- URL: [https://docs.cloud.google.com/application-integration/docs/retrieve-api-payload-send-email](https://docs.cloud.google.com/application-integration/docs/retrieve-api-payload-send-email)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For this quickstart, enter the name my-test-integration and the description Integration for quickstart .
- For more information about testing, see Test and publish integrations .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- The email sent by the integration should contain a body similar to the following: [{ "project": "en.wikipedia", "article": "Tree", "granularity": "monthly", "timestamp": "2020100100", "access": "desktop", "agent": "user", "views": 33828.0 }] In addition to verifying the contents of the email, you can inspect the logs to view the status and payload of a given integration.

### Application Integration release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/release-notes](https://docs.cloud.google.com/application-integration/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- December 26, 2022 Feature Test without publishing an integration You can now test your integration without the need to publish or create a new integration version.
- Feature Test cases ( Preview ) You can now test if your integration is working as intended by creating and running test cases on your complex integrations.
- Learn how to do the following: Create test cases Configure test cases Manage test cases Run test cases Upload and download test cases Feature Local logging in async mode ( Generally available (GA) ) By default, local logging for new integrations is now enabled in async mode.
- May 05, 2025 Change Cloud Function Task adds support for Cloud Functions v2 API The Cloud Function task in Application Integration now lets you create, link, and run the latest generation of serverless functions, called Cloud Run functions, using the Cloud Functions v2 API.

