---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.641Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "MimeType enum"
feature_slug: "mimetype-enum"
latest_feature_date: "2013-05-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/reference/content"
  - "https://developers.google.com/apps-script/reference/add-ons-response-service/basic-data-type"
keywords:
  - "mimetype"
  - "enum"
  - "was"
  - "added"
  - "provide"
  - "named"
  - "mime"
  - "type"
---

# MimeType enum

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

The MimeType enum was added to provide named MIME type declarations.

## Extended Definition

The MimeType enum was added to provide named MIME type declarations.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/reference/content](https://developers.google.com/apps-script/reference/content)
- [https://developers.google.com/apps-script/reference/add-ons-response-service/basic-data-type](https://developers.google.com/apps-script/reference/add-ons-response-service/basic-data-type)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- Added a MimeType enum , which provides access to MIME -type declarations without typing the strings explicitly.
- The Card service has been extended with the following classes and methods that provide new widgets and event responses: CalendarEventActionResponse CalendarEventActionResponseBuilder DatePicker DateTimePicker DisplayStyle DriveItemsSelectedActionResponse DriveItemsSelectedActionResponseBuilder FixedFooter SwitchControlType TimePicker CardBuilder.setDisplayStyle(displayStyle) CardBuilder.setFixedFooter(fixedFooter) CardBuilder.setPeekCardHeader(peekCardHeader) CardService.newCalendarEventActionResponseBuilder() CardService.newDatePicker() CardService.newDateTimePicker() CardService.newDriveItemsSelectedActionResponseBuilder() CardService.newFixedFooter() CardService.newTimePicker() Switch.setControlType(controlType) The Conference Data service has been added to Apps Script.
- Feature Added the following class, enum, and methods to the Spreadsheet service, to give precise control over protected sheets and ranges: Protection ProtectionType Range.canEdit() Range.isEndColumnBounded() Range.isEndRowBounded() Range.isStartColumnBounded() Range.isStartRowBounded() Range.protect() Sheet.getProtections(type) Sheet.protect() Spreadsheet.getProtections(type) Fixed Issue 4617 : HTML service pages that use the new IFRAME sandbox mode now render correctly in Firefox.
- Added several new ScriptApp methods, classes, and enums to support installable triggers in add-ons: AuthorizationInfo : An object used to determine whether the user needs to authorize this script to use one or more services, and to provide the URL for an authorization dialog.

### Content Service \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/reference/content](https://developers.google.com/apps-script/reference/content)
- Source ID: `site-docs-reference-3`
- Final score: 110
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- MimeType Properties Property Type Description CSV Enum CSV Mime Type ICAL Enum ICAL Mime Type JAVASCRIPT Enum JAVASCRIPT Mime Type JSON Enum JSON Mime Type TEXT Enum TEXT Mime Type VCARD Enum VCARD Mime Type TextOutput Methods Method Return type Brief description append(addedContent) Text Output Appends new content to the content that will be served. clear() Text Output Clears the current content. download As File(filename) Text Output Tells browsers to download rather than display this content. get Content() String Gets the content that will be served. get File Name() String Returns the file name to download this file as, or null if it should be displayed rather than downloaded. get Mime Type() Mime Type Get the mime type this content will be served with. set Content(content) Text Output Sets the content that will be served. set Mime Type(mimeType) Text Output Sets the mime type for content that will be served.
- The MimeType enum defines the various mime types that can be served from a script.
- Mime Type An enum for mime types that can be served from a script.
- ContentService Properties Property Type Description Mime Type Mime Type Methods Method Return type Brief description create Text Output() Text Output Create a new Text Output object. create Text Output(content) Text Output Create a new Text Output object that can serve the given content.

### Enum BasicDataType \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/reference/add-ons-response-service/basic-data-type](https://developers.google.com/apps-script/reference/add-ons-response-service/basic-data-type)
- Source ID: `site-docs-reference-3`
- Final score: 97
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Google Workspace Apps Script Reference Send feedback Enum BasicDataType Stay organized with collections Save and categorize content based on your preferences.
- GOOGLE USER Enum A user of the Google services, in the format of “users/encoded GAIA ID” FILE Enum A file type.
- Properties Property Type Description BASIC TYPE UNSPECIFIED Enum Default value.
- BasicDataType An enum that represents the basic generic data types.

