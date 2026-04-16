---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:27:57.169Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "Convert Chat apps to Google Workspace add-ons"
feature_slug: "convert-chat-apps-to-google-workspace-add-ons"
latest_feature_date: "2026-01-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1"
  - "https://developers.google.com/workspace/chat/quickstart/apps-script-app"
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/EventType"
keywords:
  - "convert"
  - "chat"
  - "apps"
  - "workspace"
  - "add"
  - "ons"
  - "interactive"
  - "event"
---

# Convert Chat apps to Google Workspace add-ons

Product: Chat API
Coverage: MEDIUM

## Step 02 Summary

Interactive event-driven Chat apps can be converted into Google Workspace add-ons that extend Chat and other Google Workspace applications.

## Extended Definition

Interactive event-driven Chat apps can be converted into Google Workspace add-ons that extend Chat and other Google Workspace applications.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1)
- [https://developers.google.com/workspace/chat/quickstart/apps-script-app](https://developers.google.com/workspace/chat/quickstart/apps-script-app)
- [https://developers.google.com/workspace/chat/api/reference/rest/v1/EventType](https://developers.google.com/workspace/chat/api/reference/rest/v1/EventType)

## Supporting Pages

### Package google.apps.card.v1 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1)
- Source ID: `site-docs-reference`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- For example, this is a JSON representation of a carousel that contains three text paragraph widgets. { "carouselCards": [ { "widgets": [ { "textParagraph": { "text": "First text paragraph in carousel", } } ] }, { "widgets": [ { "textParagraph": { "text": "Second text paragraph in carousel", } } ] }, { "widgets": [ { "textParagraph": { "text": "Third text paragraph in carousel", } } ] } ] } Available for Google Chat apps and unavailable for Google Workspace add-ons.
- Google Workspace add-ons and Chat apps Fields Union field data . data can be only one of the following: text paragraph TextParagraph TextParagraph widget. image Image Image widget. decorated text DecoratedText DecoratedText widget. button list ButtonList ButtonList widget. text input TextInput TextInput widget. selection input SelectionInput SelectionInput widget. date time picker DateTimePicker DateTimePicker widget. chip list ChipList ChipList widget.
- Google Workspace add-ons and Chat apps Fields horizontal size style HorizontalSizeStyle Specifies how a column fills the width of the card. horizontal alignment HorizontalAlignment Specifies whether widgets align to the left, right, or center of a column. vertical alignment VerticalAlignment Specifies whether widgets align to the top, bottom, or center of a column. widgets[] Widgets An array of widgets included in a column.
- Available for Google Chat apps and unavailable for Google Workspace add-ons. multi select data source can be only one of the following: external data source Action An external data source, such as a relational database. platform data source PlatformDataSource A data source from Google Workspace.

### Build a Google Chat app with Google Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/quickstart/apps-script-app](https://developers.google.com/workspace/chat/quickstart/apps-script-app)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Google Workspace Google Chat Guides Send feedback Build a Google Chat app with Google Apps Script Stay organized with collections Save and categorize content based on your preferences.
- To add trusted testers and learn more about testing interactive features, see Test interactive features for Google Chat apps .
- Note: This guide explains how to build an interactive Chat app using Chat API interaction events .
- Key actions include: setting up a Google Cloud environment and enabling the Chat API; configuring the OAuth consent screen; creating an Apps Script project from a template and linking it to the Cloud project; publishing the app with a deployment ID; and testing the app by sending a direct message.

### EventType \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/EventType](https://developers.google.com/workspace/chat/api/reference/rest/v1/EventType)
- Source ID: `site-api-reference`
- Final score: 130
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-11 UTC."],[],["Google Chat apps can receive various interaction events.
- APP HOME and SUBMIT FORM events allow for interactions specific to apps that utilize the app home feature for a more integrated experience within Google Chat.
- Home Google Workspace Google Chat Reference Send feedback EventType Stay organized with collections Save and categorize content based on your preferences.
- To learn about Chat apps installed by administrators, see Google Workspace Admin Help's documentation, Install Marketplace apps in your domain .

