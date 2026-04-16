---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.586Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "DashboardPanel.add(widget)"
feature_slug: "dashboardpanel-add-widget"
latest_feature_date: "2016-03-25"
deprecation_date: "2016-03-25"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/dashboard"
  - "https://developers.google.com/apps-script/reference/add-ons-response-service/accessory-widget"
keywords:
  - "dashboardpanel"
  - "add"
  - "widget"
  - "added"
  - "uiapp"
  - "widgets"
  - "dashboard"
  - "panel"
---

# DashboardPanel.add(widget)

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

DashboardPanel.add(widget) added UiApp widgets to a dashboard panel; deprecated on 2016-03-25.

## Extended Definition

DashboardPanel.add(widget) added UiApp widgets to a dashboard panel; deprecated on 2016-03-25.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/dashboard](https://developers.google.com/apps-script/guides/dashboard)
- [https://developers.google.com/apps-script/reference/add-ons-response-service/accessory-widget](https://developers.google.com/apps-script/reference/add-ons-response-service/accessory-widget)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- March 25, 2016 Deprecated Deprecated the add(widget) method in the DashboardPanel class because it takes a UiApp.Widget argument, and UiApp was deprecated in 2014.
- FileIterator.getContinuationToken() FolderIterator.getContinuationToken() DriveApp.continueFileIterator(continuationToken) DriveApp.continueFolderIterator(continuationToken) Deprecated The UiApp widgets Hyperlink , InlineHyperlink , LayoutPanel , and RichTextArea have now been disabled, as announced on March 13, 2013 and documented in the Apps Script sunset schedule .
- Deprecated Deprecated UiApp widgets DeckPanel , DecoratedPopupPanel , DockLayoutPanel , DockPanel , StackLayoutPanel , and TabLayoutPanel , which had limited usability.
- Deprecated Deprecated the GUI Builder and the UIApp widgets Hyperlink , InlineHyperlink , LayoutPanel , RichTextArea , and SuggestBox , which had limited usability.

### The Google Apps Script Dashboard \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/dashboard](https://developers.google.com/apps-script/guides/dashboard)
- Source ID: `site-docs-root`
- Final score: 79
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Google Workspace Apps Script Guides Send feedback The Google Apps Script Dashboard Stay organized with collections Save and categorize content based on your preferences.
- Use the dashboard to: View and search for your existing Apps Script projects, including bound scripts attached to Google Workspace documents.
- The My Executions panel shows a log of all previous and running executions for projects for which you are an owner, editor or viewer.
- Manage executions Use the Apps Script dashboard to view and manage individual executions of Apps Script project functions.

### Class AccessoryWidget \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/reference/add-ons-response-service/accessory-widget](https://developers.google.com/apps-script/reference/add-ons-response-service/accessory-widget)
- Source ID: `site-docs-reference-3`
- Final score: 76
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Accessory widgets are interactive widgets that appear at the bottom of a message.
- PHONE ) . setOnClickAction ( CardService . newAction () . setFunctionName ( "phone" ))) . addButton ( CardService . newTextButton () . setText ( "Robot" ) . setIconUrl ( "https://developers.google.com/chat/images/quickstart-app-avatar.png" ) . setOnClickAction ( CardService . newAction () . setFunctionName ( "robot" ))); const accessoryWidget = AddOnsResponseService . newAccessoryWidget () . addWidget ( widget ); Methods Method Return type Brief description add Widget(widget) Accessory Widget Sets the widget for this action.
- Available for Google Workspace add-ons that extend Google Chat. const widget = CardService . newButtonSet () . addButton ( CardService . newImageButton () . setIcon ( CardService .
- Home Google Workspace Apps Script Reference Send feedback Class AccessoryWidget Stay organized with collections Save and categorize content based on your preferences.

