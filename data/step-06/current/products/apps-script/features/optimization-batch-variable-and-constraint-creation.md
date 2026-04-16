---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.541Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Optimization batch variable and constraint creation"
feature_slug: "optimization-batch-variable-and-constraint-creation"
latest_feature_date: "2019-05-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/reference/add-ons-response-service"
  - "https://developers.google.com/apps-script/guides/support/best-practices"
keywords:
  - "optimization"
  - "batch"
  - "variable"
  - "constraint"
  - "creation"
  - "apps"
  - "script"
  - "adds"
---

# Optimization batch variable and constraint creation

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Apps Script Optimization service adds batch methods for creating multiple constraints and variables at once.

## Extended Definition

Apps Script Optimization service adds batch methods for creating multiple constraints and variables at once.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/reference/add-ons-response-service](https://developers.google.com/apps-script/reference/add-ons-response-service)
- [https://developers.google.com/apps-script/guides/support/best-practices](https://developers.google.com/apps-script/guides/support/best-practices)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- The Optimization service has been updated with the following batch methods: LinearOptimizationEngine.addContraints(lowerBounds, upperBounds, variableNames, coefficients) LinearOptimizationEngine.addVariables(names, lowerBounds, upperBounds, types, objectiveCoeffients) May 03, 2019 Feature The Document service has been updated to add methods to get and set the language of a document: Document.getLanguage() Document.getSupportedLanguageCodes() Document.setLanguage(languageCode) April 19, 2019 Feature The Data Studio service has been updated to add a few values to FieldType enum : HYPERLINK IMAGE IMAGE LINK April 08, 2019 Change The behavior of the Google Cloud (GCP) projects used by scripts has been altered.
- Feature The Spreadsheet service has been extended with the following new classes and methods to support text styles and Rich Text cell formatting: RichTextValue RichTextValueBuilder TextStyle TextStyleBuilder Range.getRichTextValue() Range.getRichTextValues() Range.getTextStyle() Range.getTextStyles() Range.setRichTextValue(value) Range.setRichTextValues(values) Range.setTextStyle(style) Range.setTextStyles(styles) SpreadsheetApp.newRichTextValue() SpreadsheetApp.newTextStyle() The Data Studio service has been extended with the following new classes and methods that define and support authentication types for community connectors: GetAuthTypeResponse AuthType CommunityConnector,newAuthTypeResponse() January 04, 2019 Feature The Slides service has been extended with the following new classes and methods that support slide linking and text box insertion: SlideLinkingMode [ Layout.insertTextBox(text) }(https://developers.google.com/apps-script/reference/slides/layout#inserttextboxtext) Layout.insertTextBox(text, left, top, width, height) Master.insertTextBox(text) Master.insertTextBox(text, left, top, width, height) Page.insertTextBox(text) Page.insertTextBox(text, left, top, width, height) Presentation.appendSlide(slide, linkingMode) Presentation.insertSlide(insertionIndex, slide, linkingMode) Slide.getSlideLinkingMode() Slide.getSourcePresentationId() Slide.getSourceSlideObjectId() Slide.insertTextBox(text) Slide.insertTextBox(text, left, top, width, height) Slide.refreshSlide() Slide.unlink() The Data Studio service has been extended with the following new classes and methods that error displays: DebugError UserError CommunityConnector.newDebugError() CommunityConnector.newUserError() December 13, 2018 Deprecated The Fusion Tables advanced service has been deprecated and will shutdown fully on December 3rd, 2019.
- The Card service has been extended with the following classes and methods that provide new widgets and event responses: CalendarEventActionResponse CalendarEventActionResponseBuilder DatePicker DateTimePicker DisplayStyle DriveItemsSelectedActionResponse DriveItemsSelectedActionResponseBuilder FixedFooter SwitchControlType TimePicker CardBuilder.setDisplayStyle(displayStyle) CardBuilder.setFixedFooter(fixedFooter) CardBuilder.setPeekCardHeader(peekCardHeader) CardService.newCalendarEventActionResponseBuilder() CardService.newDatePicker() CardService.newDateTimePicker() CardService.newDriveItemsSelectedActionResponseBuilder() CardService.newFixedFooter() CardService.newTimePicker() Switch.setControlType(controlType) The Conference Data service has been added to Apps Script.
- The following new data source type has been added: LOOKER The following new classes have been added: LookerDataSourceSpec LookerDataSourceSpecBuilder The following new methods have been added to existing classes: DataSourceSpec.asLooker() DataSourceSpecBuilder.asLooker() August 15, 2024 Feature Generally Available : You can now create and organize tabs in Google Docs documents using Apps Script's Document service.

### AddOns Response Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/reference/add-ons-response-service](https://developers.google.com/apps-script/reference/add-ons-response-service)
- Source ID: `site-docs-reference-3`
- Final score: 52
- Re-rank relevance: N/A

Evidence snippets:
- VariableData Methods Method Return type Brief description add Boolean Value(value) Variable Data Adds a boolean value to the variable data. add Email Address(emailAddress) Variable Data Adds an email address to the variable data. add Float Value(value) Variable Data Adds a float value to the variable data. add Google User(googleUser) Variable Data Adds a google user to the variable data. add Integer Value(value) Variable Data Adds an integer value to the variable data. add Resource Data(resourceData) Variable Data Adds a Resource Data value to the variable data. add Resource Reference(resourceReference) Variable Data Adds a resource reference ID to the variable data. add String Value(value) Variable Data Adds a string value to the variable data. add Timestamp Value(value) Variable Data Adds a Time Stamp value to the variable data. add Workflow Text Format(workflowTextFormat) Variable Data Adds a Workflow Text Format value to the variable data.
- ValueMetadata Methods Method Return type Brief description add Castable Type(dataType) Value Metadata Adds a optional allowed types that can be dynamically casted for a variable data to this value metadata. add Enum Value(enumValue) Value Metadata Adds an optional string value to the allowed enum values of a variable, this field can only be set if the Data Type is set to String type. set Default Value(defaultValue) Value Metadata Sets the optional default value of the variable, example, if the variable type is boolean, defaultValue may be set to " true " or " false ".
- ReturnOutputVariablesAction Methods Method Return type Brief description add Variable Data(key, value) Return Output Variables Action Adds a variable data keyed by its variable name, a value is overwritten if the key already exists. set Log(log) Return Output Variables Action Sets the Log of the executed workflow action to the end user at Workflow's activity feed. set Variable Data Map(variables) Return Output Variables Action Sets the map of the variable data keyed by variable name, a value is overwritten if the key already exists.
- ResourceData Methods Method Return type Brief description add Variable Data(key, value) Resource Data Adds a Variable Data keyed by its variable name, a value is overwritten if the key already exists. set Variable Data Map(fields) Resource Data Sets the map of the variable data keyed by variable names.

### Best Practices \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/support/best-practices](https://developers.google.com/apps-script/guides/support/best-practices)
- Source ID: `site-docs-root-3`
- Final score: 49
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Apps Script uses built-in optimization like look-ahead and write caching.
- Anything you accomplish within Google Apps Script itself is faster than fetching data from Google's servers or an external server, such as requests to Sheets, Docs, Sites, Sites, Translate, and UrlFetch.
- If your script frequently crashes because it's exceeding the execution limit: Use batch operations : As mentioned in the Use batch operations section, minimize calls to spreadsheets and other services.
- Home Google Workspace Apps Script Support Send feedback Best Practices Stay organized with collections Save and categorize content based on your preferences.

