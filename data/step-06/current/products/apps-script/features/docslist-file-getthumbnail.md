---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.818Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "DocsList File.getThumbnail"
feature_slug: "docslist-file-getthumbnail"
latest_feature_date: "2012-08-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/api/reference/rest/v1/File"
  - "https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments/create"
keywords:
  - "getthumbnail"
  - "docslist"
  - "gained"
  - "method"
  - "file"
  - "class"
  - "the"
---

# DocsList File.getThumbnail

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

The DocsList File class gained a getThumbnail() method.

## Extended Definition

The DocsList File class gained a getThumbnail() method.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/api/reference/rest/v1/File](https://developers.google.com/apps-script/api/reference/rest/v1/File)
- [https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments/create](https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments/create)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- Feature Added a getThumbnail() method to the DocsList service's File class .
- Several new methods were added to the DocsList class ( getFilesForPaging, etc.) that use continuation tokens as described in the documentation.
- August 31, 2021 Feature The Drive Service has added three new methods to the file and folder classes to manage the use of resource keys when sharing files and folders. getSecurityUpdateEligible() : Gets whether a file for folder is eligible to apply the security update that requires a resource key for access when it's shared using a link. getSecurityUpdateEnabled() : Gets whether a file or folder requires a resource key for access when it's shared using a link. setSecurityUpdateEnabled(enabled) : Sets whether the file or folder requires a resource key for access when it's shared using a link.
- PageProtection Spreadsheet.getSheetProtection() Spreadsheet.setSheetProtection(permissions) Sheet.getSheetProtection() Sheet.setSheetProtection(permissions) Replaced the method SpreadsheetApp.open(file) , which takes a File object from the deprecated DocsList service as a parameter, with a version that takes a File object from the Drive service instead.

### File \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/File](https://developers.google.com/apps-script/api/reference/rest/v1/File)
- Source ID: `site-api-reference`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "name" : string , "type" : enum ( FileType ) , "source" : string , "lastModifyUser" : { object ( User ) } , "createTime" : string , "updateTime" : string , "functionSet" : { object ( FunctionSet ) } } Fields name string The name of the file.
- The file extension is not part of the file name, which can be identified from the type field. type enum ( FileType ) The type of the file. source string The file content. lastModifyUser object ( User ) The user who modified the file most recently.
- The details visible in this object are controlled by the profile visibility settings of the last modifying user. createTime string ( Timestamp format) Creation date timestamp.
- Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" . functionSet object ( FunctionSet ) The defined set of functions in the script file, if any.

### Method: projects.deployments.create \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments/create](https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments/create)
- Source ID: `site-api-reference`
- Final score: 67
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Request body The request body contains data with the following structure: JSON representation { "versionNumber" : integer , "manifestFileName" : string , "description" : string } Fields versionNumber integer The version number on which this deployment is based. manifestFileName string The manifest file name for this deployment. description string The description for this deployment.
- The request body is a JSON object containing optional fields for versionNumber , manifestFileName , and description .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-10-31 UTC."],[],[]]
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

