---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:26:07.626Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "Google Chat app home card messages"
feature_slug: "google-chat-app-home-card-messages"
latest_feature_date: "2024-04-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1"
  - "https://developers.google.com/workspace/chat/quickstart/apps-script-app"
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/cards"
keywords:
  - "home"
  - "enables"
  - "messages"
  - "card"
  - "apps"
  - "app"
  - "chat"
  - "to"
---

# Google Chat app home card messages

Product: Chat API
Coverage: LOW

## Step 02 Summary

Enables Chat apps to send customizable home card messages to users in direct messages.

## Extended Definition

Enables Chat apps to send customizable home card messages to users in direct messages.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1)
- [https://developers.google.com/workspace/chat/quickstart/apps-script-app](https://developers.google.com/workspace/chat/quickstart/apps-script-app)
- [https://developers.google.com/workspace/chat/api/reference/rest/v1/cards](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards)

## Supporting Pages

### Package google.apps.card.v1 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1)
- Source ID: `site-docs-reference`
- Final score: 230
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For card messages in Chat apps, you must also set the action's ResponseType to UPDATE MESSAGE and use the same card id from the card that contained the action.
- This limit applies to both card messages and dialogs in Google Chat apps, and to cards in Google Workspace add-ons.
- Only supported by Chat apps in response to button-clicks on card messages.
- Google Workspace add-ons and Chat apps Fields horizontal size style HorizontalSizeStyle Specifies how a column fills the width of the card. horizontal alignment HorizontalAlignment Specifies whether widgets align to the left, right, or center of a column. vertical alignment VerticalAlignment Specifies whether widgets align to the top, bottom, or center of a column. widgets[] Widgets An array of widgets included in a column.

### Build a Google Chat app with Google Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/quickstart/apps-script-app](https://developers.google.com/workspace/chat/quickstart/apps-script-app)
- Source ID: `site-docs-root`
- Final score: 228
- Re-rank relevance: N/A

Evidence snippets:
- Although an error message might not display in the Chat UI, descriptive error messages and log data are available to help you fix errors when error logging for Chat apps is turned on.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["This guide details how to create a Google Chat app that echoes messages.
- Troubleshoot When a Google Chat app or card returns an error, the Chat interface surfaces a message saying "Something went wrong." or "Unable to process your request." Sometimes the Chat UI doesn't display any error message, but the Chat app or card produces an unexpected result; for example, a card message might not appear.
- Key actions include: setting up a Google Cloud environment and enabling the Chat API; configuring the OAuth consent screen; creating an Apps Script project from a template and linking it to the Cloud project; publishing the app with a deployment ID; and testing the app by sending a direct message.

### Cards v2 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/cards](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards)
- Source ID: `site-api-reference`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- For card messages in Chat apps, you must also set the action's ResponseType to UPDATE MESSAGE and use the same cardId from the card that contained the action.
- This limit applies to both card messages and dialogs in Google Chat apps, and to cards in Google Workspace add-ons.
- Only supported by Chat apps in response to button-clicks on card messages.
- Google Workspace add-ons and Chat apps JSON representation { "horizontalSizeStyle" : enum ( HorizontalSizeStyle ) , "horizontalAlignment" : enum ( HorizontalAlignment ) , "verticalAlignment" : enum ( VerticalAlignment ) , "widgets" : [ { object ( Widgets ) } ] } Fields horizontalSizeStyle enum ( HorizontalSizeStyle ) Specifies how a column fills the width of the card. horizontalAlignment enum ( HorizontalAlignment ) Specifies whether widgets align to the left, right, or center of a column. verticalAlignment enum ( VerticalAlignment ) Specifies whether widgets align to the top, bottom, or center of a column. widgets[] object ( Widgets ) An array of widgets included in a column.

