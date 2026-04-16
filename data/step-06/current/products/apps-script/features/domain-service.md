---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.669Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Domain service"
feature_slug: "domain-service"
latest_feature_date: "2011-12-14"
deprecation_date: "2014-12-11"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/advanced/tables"
  - "https://developers.google.com/apps-script/api/reference/rest/v1/projects"
keywords:
  - "domain"
  - "exposed"
  - "apps"
  - "administration"
  - "functionality"
  - "script"
  - "deprecated"
  - "2014"
---

# Domain service

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

The Domain service exposed Google Apps domain administration functionality in Apps Script; The Domain service exposed Google Apps domain administration functionality in Apps Script; deprecated on 2014-12-11.

## Extended Definition

The Domain service exposed Google Apps domain administration functionality in Apps Script; The Domain service exposed Google Apps domain administration functionality in Apps Script; deprecated on 2014-12-11.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/advanced/tables](https://developers.google.com/apps-script/advanced/tables)
- [https://developers.google.com/apps-script/api/reference/rest/v1/projects](https://developers.google.com/apps-script/api/reference/rest/v1/projects)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- May 15, 2014 Deprecated Deprecated both ScriptDB and the Domain service .
- Feature The Spreadsheet service has been extended with the following new classes and methods to support text styles and Rich Text cell formatting: RichTextValue RichTextValueBuilder TextStyle TextStyleBuilder Range.getRichTextValue() Range.getRichTextValues() Range.getTextStyle() Range.getTextStyles() Range.setRichTextValue(value) Range.setRichTextValues(values) Range.setTextStyle(style) Range.setTextStyles(styles) SpreadsheetApp.newRichTextValue() SpreadsheetApp.newTextStyle() The Data Studio service has been extended with the following new classes and methods that define and support authentication types for community connectors: GetAuthTypeResponse AuthType CommunityConnector,newAuthTypeResponse() January 04, 2019 Feature The Slides service has been extended with the following new classes and methods that support slide linking and text box insertion: SlideLinkingMode [ Layout.insertTextBox(text) }(https://developers.google.com/apps-script/reference/slides/layout#inserttextboxtext) Layout.insertTextBox(text, left, top, width, height) Master.insertTextBox(text) Master.insertTextBox(text, left, top, width, height) Page.insertTextBox(text) Page.insertTextBox(text, left, top, width, height) Presentation.appendSlide(slide, linkingMode) Presentation.insertSlide(insertionIndex, slide, linkingMode) Slide.getSlideLinkingMode() Slide.getSourcePresentationId() Slide.getSourceSlideObjectId() Slide.insertTextBox(text) Slide.insertTextBox(text, left, top, width, height) Slide.refreshSlide() Slide.unlink() The Data Studio service has been extended with the following new classes and methods that error displays: DebugError UserError CommunityConnector.newDebugError() CommunityConnector.newUserError() December 13, 2018 Deprecated The Fusion Tables advanced service has been deprecated and will shutdown fully on December 3rd, 2019.
- The gallery also features the following new samples: Build a Google Chat app with an ADK AI agent Build a Chat app with an Agent2Agent agent Analyze and label Gmail messages with Gemini and Vertex AI June 04, 2025 Deprecated Google Analytics 4 has replaced Universal Analytics , which means the Apps Script Advanced Service for Google Analytics Management API and Reporting API is deprecated.
- FileIterator.getContinuationToken() FolderIterator.getContinuationToken() DriveApp.continueFileIterator(continuationToken) DriveApp.continueFolderIterator(continuationToken) Deprecated The UiApp widgets Hyperlink , InlineHyperlink , LayoutPanel , and RichTextArea have now been disabled, as announced on March 13, 2013 and documented in the Apps Script sunset schedule .

### Apps Script Sunset Schedule \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/tables](https://developers.google.com/apps-script/advanced/tables)
- Source ID: `site-docs-reference`
- Final score: 84
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Page Summary outlined flag Apps Script features are marked as deprecated before they are shut down, allowing time for migration to supported alternatives.
- Once a sunset date for an Apps Script feature is announced, the feature is considered deprecated, but is available for use until the sunset date.
- The table above lists deprecated Apps Script features, their deprecation and sunset dates, and the expected behavior after sunset.
- Feature Deprecated Sunset Behavior after sunset date setAuthentication(clientId, signingKey) March 03, 2026 June 01, 2026 This method is unavailable and existing scripts fail when using this method.

### REST Resource: projects \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/projects](https://developers.google.com/apps-script/api/reference/rest/v1/projects)
- Source ID: `site-api-reference`
- Final score: 51
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" . creator object ( User ) User who originally created the script. lastModifyUser object ( User ) User who last modified the script.
- Home Google Workspace Apps Script Reference Send feedback REST Resource: projects Stay organized with collections Save and categorize content based on your preferences.
- Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" . updateTime string ( Timestamp format) When the script was last updated.
- Methods create Creates a new, empty script project with no script files and a base manifest file. get Gets a script project's metadata. getContent Gets the content of the script project, including the code source and metadata for each script file. getMetrics Get metrics data for scripts, such as number of executions and active users. updateContent Updates the content of the specified script project.

