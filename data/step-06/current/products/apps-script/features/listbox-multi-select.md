---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.676Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "ListBox multi-select"
feature_slug: "listbox-multi-select"
latest_feature_date: "2011-03-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/slides/selecting"
  - "https://developers.google.com/apps-script/reference/add-ons-response-service/drive-items-selected-action-response-builder"
keywords:
  - "listbox"
  - "multi"
  - "select"
  - "supports"
  - "selecting"
  - "multiple"
  - "items"
---

# ListBox multi-select

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

ListBox supports selecting multiple items.

## Extended Definition

ListBox supports selecting multiple items.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/slides/selecting](https://developers.google.com/apps-script/guides/slides/selecting)
- [https://developers.google.com/apps-script/reference/add-ons-response-service/drive-items-selected-action-response-builder](https://developers.google.com/apps-script/reference/add-ons-response-service/drive-items-selected-action-response-builder)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- December 18, 2019 Feature The Spreadsheet service has been extended with the following class and new methods to support using color building and theme colors: Color ColorBuilder SpreadsheetTheme ThemeColor ThemeColorType SpreadsheetApp.newColor() Spreadsheet.getPredefinedSpreadsheetThemes() Spreadsheet.getSpreadsheetTheme() Spreadsheet.resetSpreadsheetTheme() Spreadsheet.setSpreadsheetTheme(theme) December 11, 2019 Feature The Data Studio service has been extended with the following class and new methods to support different response types and dynamic statuses: GetDataResponse GetSchemaResponse SetCredentialsResponse Checkbox.setIsDynamic(isDynamic) CommunityConnector.newGetDataResponse() CommunityConnector.newGetSchemaResponse() CommunityConnector.newSetCredentialsResponse() Config.setIsSteppedConfig(isSteppedConfig) SelectMultiple.setIsDynamic(isDynamic) SelectSingle.setIsDynamic(isDynamic) TextArea.setIsDynamic(isDynamic) TextInput.setIsDynamic(isDynamic) November 06, 2019 Feature The Spreadsheet service has been extended with the following class and new methods to support using slicers to filter ranges, charts, and pivot tables: Slicer Sheet.getSlicers() Sheet.insertSlicer(range, anchorRowPos, anchorColPos) Sheet.insertSlicer(range, anchorRowPos, anchorColPos, offsetX, offsetY) The Script service has been extended with the ScriptApp.getIdentityToken() method , which returns an identity token for the effective user.
- Enhanced ListBox to function as a multi-select ListBox .
- The Card service has been extended with the following classes and methods that provide new widgets and event responses: CalendarEventActionResponse CalendarEventActionResponseBuilder DatePicker DateTimePicker DisplayStyle DriveItemsSelectedActionResponse DriveItemsSelectedActionResponseBuilder FixedFooter SwitchControlType TimePicker CardBuilder.setDisplayStyle(displayStyle) CardBuilder.setFixedFooter(fixedFooter) CardBuilder.setPeekCardHeader(peekCardHeader) CardService.newCalendarEventActionResponseBuilder() CardService.newDatePicker() CardService.newDateTimePicker() CardService.newDriveItemsSelectedActionResponseBuilder() CardService.newFixedFooter() CardService.newTimePicker() Switch.setControlType(controlType) The Conference Data service has been added to Apps Script.
- Range.copyTo(destination, copyPasteType, transposed) January 19, 2018 Feature The UrlFetch service now has a fetchAll method that makes multiple fetch requests.

### Select items in a presentation \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/slides/selecting](https://developers.google.com/apps-script/guides/slides/selecting)
- Source ID: `site-docs-root-3`
- Final score: 127
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Select a current page The following example shows how to unselect any current selections on a page by setting that page as the current page. slides/selection/selection.gs View on GitHub // Unselect one or more page elements already selected. // // In case one or more page elements in the first slide are selected, setting the // same (or any other) slide page as the current page would do the unselect. // const slide = SlidesApp . getActivePresentation (). getSlides ()[ 0 ]; slide . selectAsCurrentPage (); Select a page element The following example shows how to unselect any current selections on a page by selecting one page element, thus removing all other items from the selection. slides/selection/selection.gs View on GitHub // Unselect one or more page elements already selected. // // In case one or more page elements in the first slide are selected, // selecting any pageElement in the first slide (or any other pageElement) would // do the unselect and select that pageElement. // const slide = SlidesApp . getActivePresentation (). getSlides ()[ 0 ]; slide . getPageElements ()[ 0 ]. select (); Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For example: slides/selection/selection.gs View on GitHub const slide = SlidesApp . getActivePresentation (). getSlides ()[ 0 ]; const pageElement = slide . getPageElements ()[ 0 ]; // Only select this page element and remove any previous selection. pageElement . select (); // State of selection // // selection.getSelectionType() = SlidesApp.SelectionType.PAGE ELEMENT // selection.getCurrentPage() = slide // selection.getPageElementRange().getPageElements()[0] = pageElement // Select multiple page elements To append additional page elements to the selection, use the PageElement.select(false) method.
- Home Google Workspace Apps Script Guides Send feedback Select items in a presentation Stay organized with collections Save and categorize content based on your preferences.
- Text within shapes or table cells can be selected, and unselecting can be achieved by selecting a page as the current page or selecting a specific page element.

### "Class DriveItemsSelectedActionResponseBuilder \_|\_ Apps Script \_|\_ Google\

- URL: [https://developers.google.com/apps-script/reference/add-ons-response-service/drive-items-selected-action-response-builder](https://developers.google.com/apps-script/reference/add-ons-response-service/drive-items-selected-action-response-builder)
- Source ID: `site-docs-reference-3`
- Final score: 102
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Methods Method Return type Brief description build() Drive Items Selected Action Response Builds the current Drive action response. request File Scope(itemId) Drive Items Selected Action Response Builder Specifies that the response requests file scope for the contextually-relevant item in Drive.
- Return DriveItemsSelectedActionResponse — A validated DriveItemsSelectedActionResponse . requestFileScope(itemId) Specifies that the response requests file scope for the contextually-relevant item in Drive.
- Home Google Workspace Apps Script Reference Send feedback Class DriveItemsSelectedActionResponseBuilder Stay organized with collections Save and categorize content based on your preferences.
- DriveItemsSelectedActionResponseBuilder A builder for DriveItemsSelectedActionResponse objects.

