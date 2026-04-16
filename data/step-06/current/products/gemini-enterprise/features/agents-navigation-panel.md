---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:13.698Z"
product_name: "Gemini Enterprise"
product_slug: "gemini-enterprise"
feature_name: "Agents navigation panel"
feature_slug: "agents-navigation-panel"
latest_feature_date: "2025-07-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/enterprise/docs/app-home-page"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/configure-mobile-app"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery"
keywords:
  - "agents"
  - "navigation"
  - "panel"
  - "the"
  - "app"
  - "adds"
  - "for"
  - "accessing"
---

# Agents navigation panel

Product: Gemini Enterprise
Coverage: MEDIUM

## Step 02 Summary

The app adds a navigation panel for accessing agents.

## Extended Definition

The app adds a navigation panel for accessing agents.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/enterprise/docs/app-home-page](https://docs.cloud.google.com/gemini/enterprise/docs/app-home-page)
- [https://docs.cloud.google.com/gemini/enterprise/docs/configure-mobile-app](https://docs.cloud.google.com/gemini/enterprise/docs/configure-mobile-app)
- [https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview](https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview)
- [https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery](https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery)

## Supporting Pages

### Configure the app home page \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/app-home-page](https://docs.cloud.google.com/gemini/enterprise/docs/app-home-page)
- Source ID: `site-docs-root`
- Final score: 151
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The home page serves as the central hub for accessing key features and information within your app.
- It provides navigation to important areas of the app and enhances user productivity by offering quick access to commonly used resources.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Create and manage shortcuts Shortcuts in the app provide users with quick access to commonly accessed links, such as internal document sites, knowledge bases, or frequently used tools.

### Configure the mobile app \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-mobile-app](https://docs.cloud.google.com/gemini/enterprise/docs/configure-mobile-app)
- Source ID: `site-docs-root`
- Final score: 135
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, the following XML is used to configure an iOS application in GEM: <dict> <key>config id</key> <string>123</string> <key>location</key> <string>global</string> </dict> Microsoft Entra ID If your Gemini Enterprise uses Microsoft Entra ID as an identity provider, the mobile deeplink looks like this: https://vertexaisearch.cloud.google.com/mobile?cid=123 &cid location=global &idp=locations/global/workforcePools/PROJECT/providers/entra &tenant id=111 &client id=222 &project id=ge-project Extract the parameters from the deeplink URL, and use them to fill in the app configuration in your MDM administrator console: Deeplink parameter MDM configuration key MDM configuration name Example value cid config id Configuration ID 123 cid location location Location global idp identity provider Identity Provider locations/global/workforcePools/PROJECT/providers/entra tenant id tenant id Entra tenant ID 111 client id client id Entra client ID 222 project id project id Project ID ge-project Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Overview The Gemini Enterprise administrator panel provides a deeplink URL that contains parameters required to configure the mobile app in your MDM solution.
- Note: When you configure the Android app in Google Endpoint Management (GEM), use the MDM configuration name in the managed configuration form.
- Google Identity If your Gemini Enterprise uses Google as an identity provider, the mobile deeplink looks like this: https://vertexaisearch.cloud.google.com/mobile?cid=123&cid location=global Extract the parameters from the deeplink URL, and use them to fill in the app configuration in your MDM administrator console: Deeplink parameter MDM configuration key MDM configuration name Example value cid config id Configuration ID 123 cid location location Location global Leave all other fields empty.

### Agents overview \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview](https://docs.cloud.google.com/gemini/enterprise/docs/agents-overview)
- Source ID: `site-docs-root`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- Agent type Gemini Enterprise tool Description Employee-made agents from your organization Agent Designer This interactive, no-code, low-code tool lets users in your organization create, launch, and manage single and multi-step agents on the Gemini Enterprise web app.
- Custom agents from your organization ADK agents hosted on Vertex AI Agent Engine Gemini Enterprise admins can register custom agents built by your organization and hosted on Vertex AI Agent Engine, making them available to users on the Gemini Enterprise web app.
- Manage agents A Gemini Enterprise admin can manage the lifecycle of the available agents from the Agents page in the Gemini Enterprise console and can perform the following tasks: Task Description Update an agent You can update the details of an agent.
- Agent types The following table details the different types of agents available in Gemini Enterprise, the Gemini Enterprise tools that are used to create the agent, and the admin configurations required to view and manage them on the web app.

### "Browse agents with Agent Gallery \_|\_ Gemini Enterprise \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery](https://docs.cloud.google.com/gemini/enterprise/docs/agent-gallery)
- Source ID: `site-docs-root`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- To access the gallery, go to your Gemini Enterprise app and click Agents in the app navigation menu.
- Note: In the Gemini Enterprise Frontline edition, access to agents added by your organization is limited to agents that have been provisioned for you by your administrator.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- The gallery displays all available agents, organized into three categories: Made by Google: ready-to-use agents that serve a specific function, such as Deep Research .

