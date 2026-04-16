---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:27:57.185Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "Markdown formatting"
feature_slug: "markdown-formatting"
latest_feature_date: "2025-06-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1"
  - "https://developers.google.com/workspace/chat/add-text-image-card-dialog"
  - "https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1"
keywords:
  - "markdown"
  - "formatting"
  - "chat"
  - "apps"
  - "can"
  - "format"
  - "text"
  - "including"
---

# Markdown formatting

Product: Chat API
Coverage: MEDIUM

## Step 02 Summary

Chat apps can format text with Markdown, including lists and code blocks.

## Extended Definition

Chat apps can format text with Markdown, including lists and code blocks.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1)
- [https://developers.google.com/workspace/chat/add-text-image-card-dialog](https://developers.google.com/workspace/chat/add-text-image-card-dialog)
- [https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1)

## Supporting Pages

### Package google.apps.card.v1 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.apps.card.v1)
- Source ID: `site-docs-reference`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- For more information about formatting text, see Formatting text in Google Chat apps and Formatting text in Google Workspace add-ons . content text TextParagraph TextParagraph equivalent of text .
- For more information about formatting text, see Formatting text in Google Chat apps and Formatting text in Google Workspace add-ons . widgets[] Widget All the widgets in the section.
- For more information about formatting text, see Formatting text in Google Chat apps and Formatting text in Google Workspace add-ons .
- For more information about formatting text, see Formatting text in Google Chat apps and Formatting text in Google Workspace add-ons .

### Add text and images to cards \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/add-text-image-card-dialog](https://developers.google.com/workspace/chat/add-text-image-card-dialog)
- Source ID: `site-docs-root`
- Final score: 119
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Page Summary outlined flag This page guides you on adding and formatting text and images within Google Chat cards to enhance their visual appeal and interactivity.
- The following is a card consisting of two TextParagraph widgets used to display two paragraphs with simple HTML formatting: Add a collapsible text paragraph The collapsible text paragraphs let users reveal more information on demand.
- For example, the following formatting is available for paragraph text: Display bold, underlined, or italicized text with HTML <b> , <u> , <i> tags.
- Add a paragraph of formatted text The TextParagraph widget displays a paragraph of text with optional HTML formatting.

### Package google.chat.v1 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1)
- Source ID: `site-docs-reference`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- For more information about formatting text, see Formatting text in Google Chat apps and Formatting text in Google Workspace Add-ons . content multiline bool If the content should be multiline. bottom label string The text of the bottom label.
- For more information about formatting text, see Formatting text in Google Chat apps and Formatting text in Google Workspace Add-ons . widgets[] WidgetMarkup A section must contain at least one widget.
- For more information about formatting text, see Formatting text in Google Chat apps and Formatting text in Google Workspace Add-ons . content string The text of the content.
- For more information about formatting text, see Formatting text in Google Chat apps and Formatting text in Google Workspace Add-ons . on click OnClick The onclick action.

