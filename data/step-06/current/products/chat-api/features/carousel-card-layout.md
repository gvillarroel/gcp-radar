---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:27:57.175Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "Carousel card layout"
feature_slug: "carousel-card-layout"
latest_feature_date: "2025-09-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/cards"
  - "https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1"
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/cards-v1"
keywords:
  - "carousel"
  - "card"
  - "layout"
  - "chat"
  - "apps"
  - "can"
  - "present"
  - "cards"
---

# Carousel card layout

Product: Chat API
Coverage: MEDIUM

## Step 02 Summary

Chat apps can present cards in a carousel layout that rotates through multiple cards with previous and next navigation; Chat apps can present cards in a carousel layout that rotates through multiple cards with previous and next navigation.

## Extended Definition

Chat apps can present cards in a carousel layout that rotates through multiple cards with previous and next navigation; Chat apps can present cards in a carousel layout that rotates through multiple cards with previous and next navigation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/chat/api/reference/rest/v1/cards](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards)
- [https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1)
- [https://developers.google.com/workspace/chat/api/reference/rest/v1/cards-v1](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards-v1)

## Supporting Pages

### Cards v2 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/cards](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards)
- Source ID: `site-api-reference`
- Final score: 201
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, this is a JSON representation of a carousel that contains three text paragraph widgets. { "carouselCards": [ { "widgets": [ { "textParagraph": { "text": "First text paragraph in carousel", } } ] }, { "widgets": [ { "textParagraph": { "text": "Second text paragraph in carousel", } } ] }, { "widgets": [ { "textParagraph": { "text": "Third text paragraph in carousel", } } ] } ] } Available for Google Chat apps and unavailable for Google Workspace add-ons.
- Example: Card message for a Google Chat app To create the sample card message in Google Chat, use the following JSON: { "cardsV2": [ { "cardId": "unique-card-id", "card": { "header": { "title": "Sasha", "subtitle": "Software Engineer", "imageUrl": "https://developers.google.com/workspace/chat/images/quickstart-app-avatar.png", "imageType": "CIRCLE", "imageAltText": "Avatar for Sasha" }, "sections": [ { "header": "Contact Info", "collapsible": true, "uncollapsibleWidgetsCount": 1, "widgets": [ { "decoratedText": { "startIcon": { "knownIcon": "EMAIL" }, "text": "sasha@example.com" } }, { "decoratedText": { "startIcon": { "knownIcon": "PERSON" }, "text": "<font color=\"#80e27e\">Online</font>" } }, { "decoratedText": { "startIcon": { "knownIcon": "PHONE" }, "text": "+1 (555) 555-1234" } }, { "buttonList": { "buttons": [ { "text": "Share", "onClick": { "openLink": { "url": "https://example.com/share" } } }, { "text": "Edit", "onClick": { "action": { "function": "goToView", "parameters": [ { "key": "viewType", "value": "EDIT" } ] } } } ] } } ] } ] } } ] } JSON representation { "header" : { object ( CardHeader ) } , "sections" : [ { object ( Section ) } ] , "sectionDividerStyle" : enum ( DividerStyle ) , "cardActions" : [ { object ( CardAction ) } ] , "name" : string , "fixedFooter" : { object ( CardFixedFooter ) } , "displayStyle" : enum ( DisplayStyle ) , "peekCardHeader" : { object ( CardHeader ) } , "expressionData" : [ { object ( ExpressionData ) } ] } Fields header object ( CardHeader ) The header of the card.
- Google Workspace add-ons and Chat apps JSON representation { "horizontalSizeStyle" : enum ( HorizontalSizeStyle ) , "horizontalAlignment" : enum ( HorizontalAlignment ) , "verticalAlignment" : enum ( VerticalAlignment ) , "widgets" : [ { object ( Widgets ) } ] } Fields horizontalSizeStyle enum ( HorizontalSizeStyle ) Specifies how a column fills the width of the card. horizontalAlignment enum ( HorizontalAlignment ) Specifies whether widgets align to the left, right, or center of a column. verticalAlignment enum ( VerticalAlignment ) Specifies whether widgets align to the top, bottom, or center of a column. widgets[] object ( Widgets ) An array of widgets included in a column.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-25 UTC."],[],["Cards in Google Chat and Workspace add-ons are interactive UI elements built with structured layouts, multimedia, and action triggers.

### Package google.apps.card.v1 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1)
- Source ID: `site-docs-reference`
- Final score: 201
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, this is a JSON representation of a carousel that contains three text paragraph widgets. { "carouselCards": [ { "widgets": [ { "textParagraph": { "text": "First text paragraph in carousel", } } ] }, { "widgets": [ { "textParagraph": { "text": "Second text paragraph in carousel", } } ] }, { "widgets": [ { "textParagraph": { "text": "Third text paragraph in carousel", } } ] } ] } Available for Google Chat apps and unavailable for Google Workspace add-ons.
- Available for Google Workspace add-ons and unavailable for Google Chat apps. peek card header CardHeader When displaying contextual content, the peek card header acts as a placeholder so that the user can navigate forward between the homepage cards and the contextual cards.
- Widgets are fundamental building blocks of Google Chat cards, encompassing elements like text, images, buttons, and interactive controls for creating dynamic layouts.
- Open the Card Builder To learn how to build cards, see the following documentation: For Google Chat apps, see Design the components of a card or dialog .

### Cards v1 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/cards-v1](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards-v1)
- Source ID: `site-api-reference`
- Final score: 160
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Google Workspace Google Chat Reference Send feedback Cards v1 Stay organized with collections Save and categorize content based on your preferences.
- Cards support interactive elements like buttons that can trigger actions such as opening links or invoking Apps Script functions.
- Page Summary outlined flag Cards v1 is deprecated; use Cards v2 instead for creating interactive UI elements within Google Chat.
- Across all platforms, cards have a narrow fixed width, so there's currently no need for layout properties (for example, float).

