---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.825Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "DocumentApp HorizontalAlignment.JUSTIFY enum value"
feature_slug: "documentapp-horizontalalignment-justify-enum-value"
latest_feature_date: "2012-05-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/api/reference/rest/v1/NullValue"
  - "https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments"
keywords:
  - "horizontalalignment"
  - "justify"
  - "enumeration"
  - "documentapp"
  - "value"
  - "enum"
  - "now"
  - "the"
---

# DocumentApp HorizontalAlignment.JUSTIFY enum value

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

The DocumentApp.HorizontalAlignment enumeration now includes a JUSTIFY value for horizontal text alignment.

## Extended Definition

The DocumentApp.HorizontalAlignment enumeration now includes a JUSTIFY value for horizontal text alignment.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/api/reference/rest/v1/NullValue](https://developers.google.com/apps-script/api/reference/rest/v1/NullValue)
- [https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments](https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Feature Added a DocumentApp.HorizontalAlignment.JUSTIFY value to the DocumentApp.HorizontalAlignment enumeration.
- October 10, 2017 Feature The Calendar service has been extended with the following new methods: CalendarApp.createAllDayEvent(title, startDate, endDate) CalendarApp.createAllDayEvent(title, startDate, endDate, options) CalendarApp.getEventById(iCalId) Calendar.createAllDayEvent(title, startDate, endDate) Calendar.createAllDayEvent(title, startDate, endDate, options) Calendar.getEventById(iCalId) CalendarEvent.setAllDayDates(startDate, endDate) The Groups service has been extended with the following new methods: Group.getGroups() Group.hasGroup(group) Group.hasGroup(email) The Spreadsheet service has been extended with the following new methods and classes: AutoFillSeries enumeration Range.autoFill(destination, series) Range.autoFillToNeighbor(series) Sheet.moveColumns(columnSpec, destinationIndex) Sheet.moveRows(rowSpec, destinationIndex) October 06, 2017 Change Add-ons now require OAuth Client Verification prior to beginning the publication process.
- Feature The Maps.DirectionFinder.Mode enum now includes the TRANSIT value allowing for the retrieval of public transit routes in the Maps service .
- Deprecated Updated DocsList.getFilesByType() to accept values from the DocsList.FileType enumeration.

### NullValue \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/NullValue](https://developers.google.com/apps-script/api/reference/rest/v1/NullValue)
- Source ID: `site-api-reference`
- Final score: 92
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- NullValue is a singleton enumeration to represent the null value for the Value type union.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-10-31 UTC."],[],[]]
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Google Workspace Apps Script Reference Send feedback NullValue Stay organized with collections Save and categorize content based on your preferences.

### REST Resource: projects.deployments \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments](https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments)
- Source ID: `site-api-reference`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- Enums UNKNOWN ADDON TYPE Default value, unknown add-on type.
- Enums UNKNOWN EXECUTE AS Default value, should not be used.
- Enums UNKNOWN ACCESS Default value, should not be used.
- JSON representation { "addOnType" : enum ( AddOnType ) , "title" : string , "description" : string , "helpUrl" : string , "reportIssueUrl" : string , "postInstallTipUrl" : string } Fields addOnType enum ( AddOnType ) The add-on's required list of supported container types. title string The add-on's required title. description string The add-on's optional description. helpUrl string The add-on's optional help URL. reportIssueUrl string The add-on's optional report issue URL. postInstallTipUrl string The add-on's required post install tip URL.

