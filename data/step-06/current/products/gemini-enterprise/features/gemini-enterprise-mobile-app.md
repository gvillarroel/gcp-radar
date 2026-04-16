---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:13.669Z"
product_name: "Gemini Enterprise"
product_slug: "gemini-enterprise"
feature_name: "Gemini Enterprise mobile app"
feature_slug: "gemini-enterprise-mobile-app"
latest_feature_date: "2026-02-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/enterprise/docs/configure-mobile-app"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/quickstart-gemini-enterprise"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/configure-ui-results"
keywords:
  - "gemini"
  - "enterprise"
  - "mobile"
  - "app"
  - "the"
  - "is"
  - "available"
  - "for"
---

# Gemini Enterprise mobile app

Product: Gemini Enterprise
Coverage: MEDIUM

## Step 02 Summary

The Gemini Enterprise mobile app is available for Standard and Plus editions with allowlist access.

## Extended Definition

The Gemini Enterprise mobile app is available for Standard and Plus editions with allowlist access.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/enterprise/docs/configure-mobile-app](https://docs.cloud.google.com/gemini/enterprise/docs/configure-mobile-app)
- [https://docs.cloud.google.com/gemini/enterprise/docs/quickstart-gemini-enterprise](https://docs.cloud.google.com/gemini/enterprise/docs/quickstart-gemini-enterprise)
- [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores)
- [https://docs.cloud.google.com/gemini/enterprise/docs/configure-ui-results](https://docs.cloud.google.com/gemini/enterprise/docs/configure-ui-results)

## Supporting Pages

### Configure the mobile app \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-mobile-app](https://docs.cloud.google.com/gemini/enterprise/docs/configure-mobile-app)
- Source ID: `site-docs-root`
- Final score: 378
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, the following XML is used to configure an iOS application in GEM: <dict> <key>config id</key> <string>123</string> <key>location</key> <string>global</string> </dict> Microsoft Entra ID If your Gemini Enterprise uses Microsoft Entra ID as an identity provider, the mobile deeplink looks like this: https://vertexaisearch.cloud.google.com/mobile?cid=123 &cid location=global &idp=locations/global/workforcePools/PROJECT/providers/entra &tenant id=111 &client id=222 &project id=ge-project Extract the parameters from the deeplink URL, and use them to fill in the app configuration in your MDM administrator console: Deeplink parameter MDM configuration key MDM configuration name Example value cid config id Configuration ID 123 cid location location Location global idp identity provider Identity Provider locations/global/workforcePools/PROJECT/providers/entra tenant id tenant id Entra tenant ID 111 client id client id Entra client ID 222 project id project id Project ID ge-project Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Google Identity If your Gemini Enterprise uses Google as an identity provider, the mobile deeplink looks like this: https://vertexaisearch.cloud.google.com/mobile?cid=123&cid location=global Extract the parameters from the deeplink URL, and use them to fill in the app configuration in your MDM administrator console: Deeplink parameter MDM configuration key MDM configuration name Example value cid config id Configuration ID 123 cid location location Location global Leave all other fields empty.
- This page explains how to configure the Gemini Enterprise mobile app on devices managed by a mobile device management (MDM) solution, such as Google Endpoint Management (GEM) or Microsoft Intune.
- Home Documentation AI and ML Gemini Enterprise Send feedback Configure the mobile app Stay organized with collections Save and categorize content based on your preferences.

### Get started with Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/quickstart-gemini-enterprise](https://docs.cloud.google.com/gemini/enterprise/docs/quickstart-gemini-enterprise)
- Source ID: `site-docs-root`
- Final score: 302
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Get started with Gemini Enterprise To see an example of how to get started with Gemini Enterprise, run the "Intro to Gemini Enterprise" notebook in one of the following environments: Open in Colab View on GitHub Gemini Enterprise brings together the power of deep information retrieval, state-of-the-art natural language processing, and the latest in large language processing to understand user intent and return the most relevant results for the user.
- Preview your app Note: Because it takes a few minutes for the data stores to index and sync with the app, the preview isn't available immediately.
- View the search web app To view your Gemini Enterprise web app, do the following: In the navigation menu, click Integration .
- For information about the Business edition, see the Gemini Enterprise - Business edition Help Center .

### About apps and data stores \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores)
- Source ID: `site-docs-root`
- Final score: 289
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For information about the Business edition, see the Gemini Enterprise - Business edition Help Center .
- Note: This documentation applies to the Standard, Plus, and Frontline editions of Gemini Enterprise.
- Data stores and apps In Gemini Enterprise, there are various kinds of data stores.
- Only the following fields can be added or updated in a serving config: boostControlIds displayName filterControlIds genericConfig : contentSearchSpec name solutionType synonymsControlIds CRUD operations on the following controls are supported for blended search apps: boostAction synonymAction filterAction There is a limit of 50 data stores per search app.

### "Configure results for the UI \_|\_ Gemini Enterprise \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-ui-results](https://docs.cloud.google.com/gemini/enterprise/docs/configure-ui-results)
- Source ID: `site-docs-root`
- Final score: 288
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configure search results for unstructured or website data The UI for unstructured and website data offers the following search customizations: Search (single-turn) Search with an answer (single-turn search with summarization) Search with follow-ups (multi-turn search) To configure how the UI displays search results for unstructured data: In the Google Cloud console, go to the Gemini Enterprise page.
- Home Documentation AI and ML Gemini Enterprise Send feedback Configure results for the UI Stay organized with collections Save and categorize content based on your preferences.
- To configure how the UI displays search results for structured data: In the Google Cloud console, go to the Gemini Enterprise page.
- For information about the Business edition, see the Gemini Enterprise - Business edition Help Center .

