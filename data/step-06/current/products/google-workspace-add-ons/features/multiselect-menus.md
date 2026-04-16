---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:23.673Z"
product_name: "Google Workspace add-ons"
product_slug: "google-workspace-add-ons"
feature_name: "Multiselect menus"
feature_slug: "multiselect-menus"
latest_feature_date: "2024-07-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.card.v1"
  - "https://developers.google.com/workspace/add-ons/guides/editor-style"
  - "https://developers.google.com/workspace/add-ons/reference/rpc/apps.extensions.markup"
  - "https://developers.google.com/workspace/add-ons/guides/using-addons"
keywords:
  - "multiselect"
  - "menus"
  - "adds"
  - "menu"
  - "to"
  - "workspace"
  - "add"
  - "ons"
---

# Multiselect menus

Product: Google Workspace add-ons
Coverage: MEDIUM

## Step 02 Summary

Adds multiselect menu support to Google Workspace Add-ons; Adds multiselect menu support to Google Workspace Add-ons.

## Extended Definition

Adds multiselect menu support to Google Workspace Add-ons; Adds multiselect menu support to Google Workspace Add-ons.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.card.v1)
- [https://developers.google.com/workspace/add-ons/guides/editor-style](https://developers.google.com/workspace/add-ons/guides/editor-style)
- [https://developers.google.com/workspace/add-ons/reference/rpc/apps.extensions.markup](https://developers.google.com/workspace/add-ons/reference/rpc/apps.extensions.markup)
- [https://developers.google.com/workspace/add-ons/guides/using-addons](https://developers.google.com/workspace/add-ons/guides/using-addons)

## Supporting Pages

### "Package google.apps.card.v1 \_|\_ Google Workspace add-ons \_|\_ Google\

- URL: [https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.card.v1](https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.card.v1)
- Source ID: `site-api-reference`
- Final score: 268
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If the selection input only accepts one value (such as for radio buttons or a dropdown menu), only set this field for one item. bottomText string For multiselect menus, a text description or label that's displayed below the item's text field.
- For examples of how to implement multiselect menus for Chat apps, see Add a multiselect menu .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-25 UTC."],[],["This content outlines UI components for Google Chat apps and Workspace add-ons, structured within cards.
- Google Workspace add-ons and Chat apps Fields Union field data . data can be only one of the following: textParagraph TextParagraph TextParagraph widget. image Image Image widget. decoratedText DecoratedText DecoratedText widget. buttonList ButtonList ButtonList widget. textInput TextInput TextInput widget. selectionInput SelectionInput SelectionInput widget. dateTimePicker DateTimePicker DateTimePicker widget. chipList ChipList ChipList widget.

### "UI style guide for Editor add-ons \_|\_ Google Workspace add-ons \_|\_ Google\

- URL: [https://developers.google.com/workspace/add-ons/guides/editor-style](https://developers.google.com/workspace/add-ons/guides/editor-style)
- Source ID: `site-docs-root`
- Final score: 267
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Editor add-ons build user interfaces (menus, sidebars, and dialogs) using Apps Script's HTML service .
- Home Google Workspace Add-ons Send feedback UI style guide for Editor add-ons Stay organized with collections Save and categorize content based on your preferences.
- Don't Do Menu items Unlike regular Apps Script projects, add-ons don't appear in the script editor or script manager; users cannot run add-on scripts directly.
- Custom user interfaces Some Editor add-ons can be controlled entirely by their menu, but most display a sidebar or dialog with custom content.

### "Package apps.extensions.markup \_|\_ Google Workspace add-ons \_|\_ Google\

- URL: [https://developers.google.com/workspace/add-ons/reference/rpc/apps.extensions.markup](https://developers.google.com/workspace/add-ons/reference/rpc/apps.extensions.markup)
- Source ID: `site-api-reference`
- Final score: 243
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Third-party conferencing add-ons can only be built in Apps Script . addAttachmentsActionMarkup AddAttachmentsActionMarkup An action that adds attachments to the Google Calendar event. createConferenceDataActionMarkup CreateConferenceDataActionMarkup An action that shows conference data when create a Google Calendar event. createConferenceSettingUrlActionMarkup CreateConferenceSettingUrlActionMarkup An action that generates generate createconference setting url. calendarSubscriptionActionMarkup CalendarSubscriptionActionMarkup An action that manages a calendar subscription.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-05 UTC."],[],["The document details markup structures for various Google Workspace add-on actions.
- The structure and fields within each markup element provide a standardized way to define add-on behavior and data interactions, streamlining development across different Google Workspace applications.
- Page Summary outlined flag Google Workspace Add-ons utilize markup elements to define actions and data sources for interactions within various host applications like Gmail, Calendar, Drive, and Chat.

### "Open and use installed add-ons \_|\_ Google Workspace add-ons \_|\_ Google\

- URL: [https://developers.google.com/workspace/add-ons/guides/using-addons](https://developers.google.com/workspace/add-ons/guides/using-addons)
- Source ID: `site-docs-root`
- Final score: 238
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For Google Workspace add-ons that extend the Gmail with compose actions , the add-on icons appear in the compose view's top-right menu.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-03 UTC."],[],["Installed Google Workspace add-ons are accessible via icons in the host application's interface.
- Start a Google Workspace add-on Google Workspace add-ons that you have installed automatically appear in the host application interface as a column of icons (under icons for Google products like Calendar, Keep, and Tasks).
- Selecting one of the add-on menu items causes some functionality of that add-on to start; often add-ons use menu items to open the main sidebar or dialog that represents the primary add-on interface.

