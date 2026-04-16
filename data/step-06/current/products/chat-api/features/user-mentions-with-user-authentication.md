---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:27:57.189Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "User mentions with user authentication"
feature_slug: "user-mentions-with-user-authentication"
latest_feature_date: "2025-03-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/DriveDataRef"
  - "https://developers.google.com/workspace/chat/api/reference"
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/cards-v1"
keywords:
  - "user"
  - "mentions"
  - "authentication"
  - "chat"
  - "supports"
  - "mentioning"
  - "users"
  - "messages"
---

# User mentions with user authentication

Product: Chat API
Coverage: LOW

## Step 02 Summary

The Chat API supports mentioning users in messages sent with user authentication, including users who have not joined a space or are in import-mode spaces.

## Extended Definition

The Chat API supports mentioning users in messages sent with user authentication, including users who have not joined a space or are in import-mode spaces.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/chat/api/reference/rest/v1/DriveDataRef](https://developers.google.com/workspace/chat/api/reference/rest/v1/DriveDataRef)
- [https://developers.google.com/workspace/chat/api/reference](https://developers.google.com/workspace/chat/api/reference)
- [https://developers.google.com/workspace/chat/api/reference/rest/v1/cards-v1](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards-v1)

## Supporting Pages

### DriveDataRef \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/DriveDataRef](https://developers.google.com/workspace/chat/api/reference/rest/v1/DriveDataRef)
- Source ID: `site-api-reference`
- Final score: 58
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Google Workspace Google Chat Reference Send feedback DriveDataRef Stay organized with collections Save and categorize content based on your preferences.

### Cards v1 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/cards-v1](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards-v1)
- Source ID: `site-api-reference`
- Final score: 48
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- At least one of icons, top label and bottom label must be defined. icons can be only one of the following: icon enum ( Icon ) An enum value that's replaced by the Chat API with the corresponding icon image. iconUrl string The icon specified by a URL.
- For more information about formatting text, see Formatting text in Google Chat apps and Formatting text in Google Workspace Add-ons . contentMultiline boolean If the content should be multiline. bottomLabel string The text of the bottom label.
- The icon can be specified by an Icon enum or a URL. icons can be only one of the following: icon enum ( Icon ) The icon specified by an enum that indices to an icon provided by Chat API. iconUrl string The icon specified by a URL.
- For more information about formatting text, see Formatting text in Google Chat apps and Formatting text in Google Workspace Add-ons . widgets[] object ( WidgetMarkup ) A section must contain at least one widget.

### Google Chat API overview \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference](https://developers.google.com/workspace/chat/api/reference)
- Source ID: `site-api-reference`
- Final score: 48
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["The Google Chat API offers gRPC and REST interfaces, with corresponding client libraries or the option to create custom ones.
- Type, method, and field names Depending on whether you're using client libraries, gRPC, or REST, the type, method, and field names for the Google Chat API vary somewhat: Cloud Client Libraries are arranged by gRPC services and their methods.
- Related topics Call the Google Chat API Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Client libraries The recommended way for most developers to call the Google Chat API is with our officially supported Cloud Client Libraries for your preferred language, like Python, Java, or Node.js.

