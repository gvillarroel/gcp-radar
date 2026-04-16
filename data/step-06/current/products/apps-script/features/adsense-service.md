---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.669Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "AdSense service"
feature_slug: "adsense-service"
latest_feature_date: "2011-12-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/advanced/adsense"
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/api/quickstart/go"
keywords:
  - "adsense"
  - "apps"
  - "script"
  - "includes"
  - "working"
---

# AdSense service

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Apps Script includes a service for working with AdSense.

## Extended Definition

Apps Script includes a service for working with AdSense.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/advanced/adsense](https://developers.google.com/apps-script/advanced/adsense)
- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/api/quickstart/go](https://developers.google.com/apps-script/api/quickstart/go)

## Supporting Pages

### AdSense Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/advanced/adsense](https://developers.google.com/apps-script/advanced/adsense)
- Source ID: `site-docs-reference`
- Final score: 114
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Page Summary outlined flag The AdSense service in Apps Script uses the AdSense Management API to allow users to access account structure information and run performance reports.
- Home Google Workspace Apps Script Reference Send feedback AdSense Service Stay organized with collections Save and categorize content based on your preferences.
- Like all advanced services in Apps Script, the AdSense service uses the same objects, methods, and parameters as the public API.
- The AdSense service lets you use the AdSense Management API in Google Apps Script.

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- This API includes and extends the original Apps Script API.
- This change includes published Apps Script web apps.
- Feature The Spreadsheet service has been extended with the following new classes and methods to support text styles and Rich Text cell formatting: RichTextValue RichTextValueBuilder TextStyle TextStyleBuilder Range.getRichTextValue() Range.getRichTextValues() Range.getTextStyle() Range.getTextStyles() Range.setRichTextValue(value) Range.setRichTextValues(values) Range.setTextStyle(style) Range.setTextStyles(styles) SpreadsheetApp.newRichTextValue() SpreadsheetApp.newTextStyle() The Data Studio service has been extended with the following new classes and methods that define and support authentication types for community connectors: GetAuthTypeResponse AuthType CommunityConnector,newAuthTypeResponse() January 04, 2019 Feature The Slides service has been extended with the following new classes and methods that support slide linking and text box insertion: SlideLinkingMode [ Layout.insertTextBox(text) }(https://developers.google.com/apps-script/reference/slides/layout#inserttextboxtext) Layout.insertTextBox(text, left, top, width, height) Master.insertTextBox(text) Master.insertTextBox(text, left, top, width, height) Page.insertTextBox(text) Page.insertTextBox(text, left, top, width, height) Presentation.appendSlide(slide, linkingMode) Presentation.insertSlide(insertionIndex, slide, linkingMode) Slide.getSlideLinkingMode() Slide.getSourcePresentationId() Slide.getSourceSlideObjectId() Slide.insertTextBox(text) Slide.insertTextBox(text, left, top, width, height) Slide.refreshSlide() Slide.unlink() The Data Studio service has been extended with the following new classes and methods that error displays: DebugError UserError CommunityConnector.newDebugError() CommunityConnector.newUserError() December 13, 2018 Deprecated The Fusion Tables advanced service has been deprecated and will shutdown fully on December 3rd, 2019.
- The Card service has been extended with the following classes and methods that provide new widgets and event responses: CalendarEventActionResponse CalendarEventActionResponseBuilder DatePicker DateTimePicker DisplayStyle DriveItemsSelectedActionResponse DriveItemsSelectedActionResponseBuilder FixedFooter SwitchControlType TimePicker CardBuilder.setDisplayStyle(displayStyle) CardBuilder.setFixedFooter(fixedFooter) CardBuilder.setPeekCardHeader(peekCardHeader) CardService.newCalendarEventActionResponseBuilder() CardService.newDatePicker() CardService.newDateTimePicker() CardService.newDriveItemsSelectedActionResponseBuilder() CardService.newFixedFooter() CardService.newTimePicker() Switch.setControlType(controlType) The Conference Data service has been added to Apps Script.

### Go quickstart \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/quickstart/go](https://developers.google.com/apps-script/api/quickstart/go)
- Source ID: `site-docs-root`
- Final score: 39
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Prepare the workspace Create a working directory: mkdir quickstart Change to the working directory: cd quickstart Initialize the new module: go mod init quickstart Get the Google Apps Script API Go client library and OAuth2.0 package: go get google.golang.org/api/script/v1 go get golang.org/x/oauth2/google Set up the sample In your working directory, create a file named quickstart.go .
- In the file, paste the following code: apps script/quickstart/quickstart.go View on GitHub package main import ( "context" "encoding/json" "fmt" "log" "net/http" "os" "golang.org/x/oauth2" "golang.org/x/oauth2/google" "google.golang.org/api/option" "google.golang.org/api/script/v1" ) // Retrieve a token, saves the token, then returns the generated client. func getClient ( config oauth2 .
- Next steps Try the Google Workspace APIs in the APIs explorer Apps Script API reference documentation google-api-go-client section of GitHub Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- File {{ Name: "hello", Type: "SERVER JS", Source: "function helloWorld() {\n console.log('Hello, world!');}", }, { Name: "appsscript", Type: "JSON", Source: "{\"timeZone\":\"America/New York\",\"exceptionLogging\":" + "\"CLOUD\"}", } }, } updateContentRes , err := srv .

