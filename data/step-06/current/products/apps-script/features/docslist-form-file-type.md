---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.646Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "DocsList FORM file type"
feature_slug: "docslist-form-file-type"
latest_feature_date: "2013-03-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/api/reference/rest/v1/File"
  - "https://developers.google.com/apps-script/reference/add-ons-response-service/basic-data-type"
keywords:
  - "docslist"
  - "form"
  - "file"
  - "type"
  - "filetype"
  - "now"
  - "includes"
  - "accessing"
---

# DocsList FORM file type

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

DocsList.FileType now includes FORM for accessing Google Forms files.

## Extended Definition

DocsList.FileType now includes FORM for accessing Google Forms files.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/api/reference/rest/v1/File](https://developers.google.com/apps-script/api/reference/rest/v1/File)
- [https://developers.google.com/apps-script/reference/add-ons-response-service/basic-data-type](https://developers.google.com/apps-script/reference/add-ons-response-service/basic-data-type)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Added the property DocsList.FileType.FORM to let DocsList access new Google Forms.
- Deprecated Deprecated the DocsList methods find(query, start, max) , getAllFiles(start, max) , getAllFolders(start, max) , getFiles(start, max) , getFilesByType(fileType, start, max) , and getFolders(start, max) .
- Deprecated Updated DocsList.getFilesByType() to accept values from the DocsList.FileType enumeration.
- Fixed Issue 2916 : HTML files inserted into a new Apps Script project using the Google Drive SDK are no longer created with the server js filetype.

### File \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/File](https://developers.google.com/apps-script/api/reference/rest/v1/File)
- Source ID: `site-api-reference`
- Final score: 125
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "name" : string , "type" : enum ( FileType ) , "source" : string , "lastModifyUser" : { object ( User ) } , "createTime" : string , "updateTime" : string , "functionSet" : { object ( FunctionSet ) } } Fields name string The name of the file.
- The file extension is not part of the file name, which can be identified from the type field. type enum ( FileType ) The type of the file. source string The file content. lastModifyUser object ( User ) The user who modified the file most recently.
- JSON representation FileType FunctionSet JSON representation Function JSON representation An individual file within a script project.
- FileType An enumeration of different types of files.

### Enum BasicDataType \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/reference/add-ons-response-service/basic-data-type](https://developers.google.com/apps-script/reference/add-ons-response-service/basic-data-type)
- Source ID: `site-docs-reference-3`
- Final score: 95
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- GOOGLE USER Enum A user of the Google services, in the format of “users/encoded GAIA ID” FILE Enum A file type.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
- Home Google Workspace Apps Script Reference Send feedback Enum BasicDataType Stay organized with collections Save and categorize content based on your preferences.
- Properties Property Type Description BASIC TYPE UNSPECIFIED Enum Default value.

