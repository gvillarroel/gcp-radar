---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.517Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Alphabetical file sorting in new IDE"
feature_slug: "alphabetical-file-sorting-in-new-ide"
latest_feature_date: "2022-04-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/guides/collaborating"
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/api/reference/rest/v1/File"
keywords:
  - "alphabetical"
  - "file"
  - "sorting"
  - "ide"
  - "apps"
  - "script"
  - "lets"
  - "developers"
---

# Alphabetical file sorting in new IDE

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

The new Apps Script IDE lets developers sort project files alphabetically in the editor.

## Extended Definition

The new Apps Script IDE lets developers sort project files alphabetically in the editor.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/guides/collaborating](https://developers.google.com/apps-script/guides/collaborating)
- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/api/reference/rest/v1/File](https://developers.google.com/apps-script/api/reference/rest/v1/File)

## Supporting Pages

### Collaborate with other developers \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/collaborating](https://developers.google.com/apps-script/guides/collaborating)
- Source ID: `site-docs-root`
- Final score: 117
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Collaboration requires all developers to have editor access to the Apps Script project file and its container if it's a bound script.
- Collaboration basics In order to collaborate on a project, you and your collaborators must all have editor access to the Apps Script project file (and its container, if it is a bound script ).
- Home Google Workspace Apps Script Guides Send feedback Collaborate with other developers Stay organized with collections Save and categorize content based on your preferences.
- When you use shared drives to collaborate on Apps Script projects: Collaborators with editor access to a shared drive can create or move new files into the shared drive.

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- Feature The Spreadsheet service has been extended with the following new classes and methods to support text styles and Rich Text cell formatting: RichTextValue RichTextValueBuilder TextStyle TextStyleBuilder Range.getRichTextValue() Range.getRichTextValues() Range.getTextStyle() Range.getTextStyles() Range.setRichTextValue(value) Range.setRichTextValues(values) Range.setTextStyle(style) Range.setTextStyles(styles) SpreadsheetApp.newRichTextValue() SpreadsheetApp.newTextStyle() The Data Studio service has been extended with the following new classes and methods that define and support authentication types for community connectors: GetAuthTypeResponse AuthType CommunityConnector,newAuthTypeResponse() January 04, 2019 Feature The Slides service has been extended with the following new classes and methods that support slide linking and text box insertion: SlideLinkingMode [ Layout.insertTextBox(text) }(https://developers.google.com/apps-script/reference/slides/layout#inserttextboxtext) Layout.insertTextBox(text, left, top, width, height) Master.insertTextBox(text) Master.insertTextBox(text, left, top, width, height) Page.insertTextBox(text) Page.insertTextBox(text, left, top, width, height) Presentation.appendSlide(slide, linkingMode) Presentation.insertSlide(insertionIndex, slide, linkingMode) Slide.getSlideLinkingMode() Slide.getSourcePresentationId() Slide.getSourceSlideObjectId() Slide.insertTextBox(text) Slide.insertTextBox(text, left, top, width, height) Slide.refreshSlide() Slide.unlink() The Data Studio service has been extended with the following new classes and methods that error displays: DebugError UserError CommunityConnector.newDebugError() CommunityConnector.newUserError() December 13, 2018 Deprecated The Fusion Tables advanced service has been deprecated and will shutdown fully on December 3rd, 2019.
- FileIterator.getContinuationToken() FolderIterator.getContinuationToken() DriveApp.continueFileIterator(continuationToken) DriveApp.continueFolderIterator(continuationToken) Deprecated The UiApp widgets Hyperlink , InlineHyperlink , LayoutPanel , and RichTextArea have now been disabled, as announced on March 13, 2013 and documented in the Apps Script sunset schedule .
- Feature Generally Available : To complement the release of the granular consent flow in Apps Script IDE executions, the following methods have been added to the ScriptApp and AuthorizationInfo classes to let Apps Script developers programmatically interact with the scopes granted for a script.
- To get the latest product updates delivered to you, add the URL of this page to your feed reader , or add the feed URL directly: https://developers.google.com/feeds/apps-script-release-notes.xml .

### File \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/File](https://developers.google.com/apps-script/api/reference/rest/v1/File)
- Source ID: `site-api-reference`
- Final score: 102
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Page Summary outlined flag A file within a script project is third-party source code created by developers, which can be server-side JS, HTML, or a configuration file.
- Home Google Workspace Apps Script Reference Send feedback File Stay organized with collections Save and categorize content based on your preferences.
- SERVER JS An Apps Script server-side code file.
- Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" . functionSet object ( FunctionSet ) The defined set of functions in the script file, if any.

