---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:27:57.170Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "Dynamic autocomplete drop-down menus"
feature_slug: "dynamic-autocomplete-drop-down-menus"
latest_feature_date: "2025-12-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1"
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/cards"
  - "https://developers.google.com/workspace/chat/debug-apps"
keywords:
  - "dynamic"
  - "autocomplete"
  - "drop"
  - "down"
  - "menus"
  - "chat"
  - "apps"
  - "can"
---

# Dynamic autocomplete drop-down menus

Product: Chat API
Coverage: MEDIUM

## Step 02 Summary

Google Chat apps can dynamically populate drop-down menus with autocomplete using Google Workspace or external data sources.

## Extended Definition

Google Chat apps can dynamically populate drop-down menus with autocomplete using Google Workspace or external data sources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1)
- [https://developers.google.com/workspace/chat/api/reference/rest/v1/cards](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards)
- [https://developers.google.com/workspace/chat/debug-apps](https://developers.google.com/workspace/chat/debug-apps)

## Supporting Pages

### Package google.apps.card.v1 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1)
- Source ID: `site-docs-reference`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- For examples of how to implement dropdown menus for Chat apps, see Add a dropdown menu and Dynamically populate drop-down menus .
- To dynamically populate items for a dropdown menu, use one of the following types of data sources: Google Workspace data: Items are populated using data from Google Workspace, such as Google Workspace users or Google Chat spaces.
- For the Dropdown widget in Google Chat apps, only one DataSourceConfig is supported.
- Available for the Dropdown widget in Google Chat apps.

### Cards v2 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/cards](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards)
- Source ID: `site-api-reference`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- For examples of how to implement dropdown menus for Chat apps, see Add a dropdown menu and Dynamically populate drop-down menus .
- To dynamically populate items for a dropdown menu, use one of the following types of data sources: Google Workspace data: Items are populated using data from Google Workspace, such as Google Workspace users or Google Chat spaces.
- For the Dropdown widget in Google Chat apps, only one DataSourceConfig is supported.
- Available for the Dropdown widget in Google Chat apps.

### Debug Google Chat apps \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/debug-apps](https://developers.google.com/workspace/chat/debug-apps)
- Source ID: `site-docs-root`
- Final score: 83
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["This guide details how to debug HTTP Google Chat apps using ngrok for local testing and SSH for remote debugging.
- Note: If your Chat app is built with Google Apps Script, use the following instead: Test a deployment Use the debugger and breakpoints Debug from local development environment In this section, you interact with your Chat app that executes in your local environment.
- Home Google Workspace Google Chat Guides Send feedback Debug Google Chat apps Stay organized with collections Save and categorize content based on your preferences.
- Debugging Chat apps can be done in many different ways depending on your app's architecture, what the app does, how your app is deployed, and your preferences.

