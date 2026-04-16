---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.549Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "UiApp service"
feature_slug: "uiapp-service"
latest_feature_date: "2019-01-22"
deprecation_date: "July 15th, 2019"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/advanced/tables"
  - "https://developers.google.com/apps-script/guides/standalone"
keywords:
  - "uiapp"
  - "apps"
  - "script"
  - "deprecated"
  - "shutdown"
  - "will"
  - "no"
  - "longer"
---

# UiApp service

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Apps Script UiApp service is deprecated for shutdown and will no longer function after the announced date; deprecated on July 15th, 2019.

## Extended Definition

Apps Script UiApp service is deprecated for shutdown and will no longer function after the announced date; deprecated on July 15th, 2019.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/advanced/tables](https://developers.google.com/apps-script/advanced/tables)
- [https://developers.google.com/apps-script/guides/standalone](https://developers.google.com/apps-script/guides/standalone)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Feature The Spreadsheet service has been extended with the following new classes and methods to support text styles and Rich Text cell formatting: RichTextValue RichTextValueBuilder TextStyle TextStyleBuilder Range.getRichTextValue() Range.getRichTextValues() Range.getTextStyle() Range.getTextStyles() Range.setRichTextValue(value) Range.setRichTextValues(values) Range.setTextStyle(style) Range.setTextStyles(styles) SpreadsheetApp.newRichTextValue() SpreadsheetApp.newTextStyle() The Data Studio service has been extended with the following new classes and methods that define and support authentication types for community connectors: GetAuthTypeResponse AuthType CommunityConnector,newAuthTypeResponse() January 04, 2019 Feature The Slides service has been extended with the following new classes and methods that support slide linking and text box insertion: SlideLinkingMode [ Layout.insertTextBox(text) }(https://developers.google.com/apps-script/reference/slides/layout#inserttextboxtext) Layout.insertTextBox(text, left, top, width, height) Master.insertTextBox(text) Master.insertTextBox(text, left, top, width, height) Page.insertTextBox(text) Page.insertTextBox(text, left, top, width, height) Presentation.appendSlide(slide, linkingMode) Presentation.insertSlide(insertionIndex, slide, linkingMode) Slide.getSlideLinkingMode() Slide.getSourcePresentationId() Slide.getSourceSlideObjectId() Slide.insertTextBox(text) Slide.insertTextBox(text, left, top, width, height) Slide.refreshSlide() Slide.unlink() The Data Studio service has been extended with the following new classes and methods that error displays: DebugError UserError CommunityConnector.newDebugError() CommunityConnector.newUserError() December 13, 2018 Deprecated The Fusion Tables advanced service has been deprecated and will shutdown fully on December 3rd, 2019.
- February 26, 2019 Feature The Spreadsheet service has been extended with the following new classes and methods to support BigQuery data connectors in Sheets : BigQueryDataSourceSpec BigQueryDataSourceSpecBuilder DataExecutionErrorCode DataExecutionState DataExecutionStatus DataSourceParameterType DataSourceParameter DataSourceSpecBuilder DataSourceSpec DataSourceTable DataSourceType DataSource Range.getDataSourceTables() Sheet.getDataSourceTables() SpreadsheetApp.enableAllDataSourcesExecution() SpreadsheetApp.enableBigQueryExecution() SpreadsheetApp.newDataSourceSpec() Spreadsheet.getDataSourceTables() Spreadsheet.insertSheetWithDataSourceTable(spec) The Data Studio service has been extended with the following new methods involving reaggregation settings: Field.getIsReaggregatable() Field.setIsReaggregatable(isReaggregatable) January 22, 2019 Deprecated The deprecated UiApp service will be officially shutdown on July 15th, 2019.
- FileIterator.getContinuationToken() FolderIterator.getContinuationToken() DriveApp.continueFileIterator(continuationToken) DriveApp.continueFolderIterator(continuationToken) Deprecated The UiApp widgets Hyperlink , InlineHyperlink , LayoutPanel , and RichTextArea have now been disabled, as announced on March 13, 2013 and documented in the Apps Script sunset schedule .
- July 08, 2022 Deprecated Apps Script has deprecated the following methods: getChatThreads() getChatThreads(start, max) These methods will become unavailable later this year once Google switches all users from Classic Hangouts to Google Chat.

### Apps Script Sunset Schedule \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/tables](https://developers.google.com/apps-script/advanced/tables)
- Source ID: `site-docs-reference`
- Final score: 63
- Re-rank relevance: N/A

Evidence snippets:
- Page Summary outlined flag Apps Script features are marked as deprecated before they are shut down, allowing time for migration to supported alternatives.
- Once a sunset date for an Apps Script feature is announced, the feature is considered deprecated, but is available for use until the sunset date.
- The table above lists deprecated Apps Script features, their deprecation and sunset dates, and the expected behavior after sunset.
- UI service June 30, 2015 Service will no longer appear in autocomplete, although existing scripts should still function.

### Standalone Scripts \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/standalone](https://developers.google.com/apps-script/guides/standalone)
- Source ID: `site-docs-root-3`
- Final score: 56
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Google Workspace Apps Script Guides Send feedback Standalone Scripts Stay organized with collections Save and categorize content based on your preferences.
- Apps Script standalone scripts are suitable for lightweight add-on development for you, your team, or your organization.
- Standalone scripts are often used as utility scripts or can be deployed as web apps or triggered automatically.
- For larger projects, consider alternative development environments instead of Apps Script standalone scripts.

