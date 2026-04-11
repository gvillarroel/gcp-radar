---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.824Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "File and Folder description methods"
feature_slug: "file-and-folder-description-methods"
latest_feature_date: "2012-05-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/triggers/events"
  - "https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments"
keywords:
  - "getdescription"
  - "description"
  - "objects"
  - "folder"
  - "gained"
  - "methods"
  - "file"
  - "and"
---

# File and Folder description methods

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

File and Folder objects gained getDescription() and setDescription() methods.

## Extended Definition

File and Folder objects gained getDescription() and setDescription() methods.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/triggers/events](https://developers.google.com/apps-script/guides/triggers/events)
- [https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments](https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Added getDescription() and setDescription() methods to File and Folder .
- August 31, 2021 Feature The Drive Service has added three new methods to the file and folder classes to manage the use of resource keys when sharing files and folders. getSecurityUpdateEligible() : Gets whether a file for folder is eligible to apply the security update that requires a resource key for access when it's shared using a link. getSecurityUpdateEnabled() : Gets whether a file or folder requires a resource key for access when it's shared using a link. setSecurityUpdateEnabled(enabled) : Sets whether the file or folder requires a resource key for access when it's shared using a link.
- October 08, 2013 Feature Added the following FormApp methods, which allow scripts to work with progress bars, custom closed-form messages, and YouTube videos. + Form.hasProgressBar() + Form.setProgressBar(enabled) + Form.getCustomClosedFormMessage() + Form.setCustomClosedFormMessage(message) + Form.addVideoItem() September 23, 2013 Feature Added the following DriveApp methods, which allow scripts to get the owner of a File or Folder.
- July 27, 2020 Deprecated The following Folder class methods have been deprecated : addFile(File) addFolder(Folder) removeFile(File) removeFolder(Folder) Announcement To help simplify Google Drive's folder structure and sharing models , new methods have been added to the Drive service and some existing methods have been deprecated.

### Event Objects \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/triggers/events](https://developers.google.com/apps-script/guides/triggers/events)
- Source ID: `site-docs-reference`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- Home Google Workspace Apps Script Reference Send feedback Event Objects Stay organized with collections Save and categorize content based on your preferences.
- FULL Google Chat app events To learn about event objects in Google Chat, see Receive and respond to interactions with your Google Chat app .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
- FULL namedValues An object containing the question names and values from the form submission. { 'First Name': ['Jane'], 'Timestamp': ['6/7/2015 20:54:13'], 'Last Name': ['Doe'] } range A Range object, representing the cell or range of cells that were edited.

### REST Resource: projects.deployments \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments](https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments)
- Source ID: `site-api-reference`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- DeploymentConfig defines how a deployment is configured, including the script ID, version number, manifest file name, and description.
- JSON representation { "scriptId" : string , "versionNumber" : integer , "manifestFileName" : string , "description" : string } Fields scriptId string The script project's Drive ID. versionNumber integer The version number on which this deployment is based. manifestFileName string The manifest file name for this deployment. description string The description for this deployment.
- The provided content also outlines methods for managing deployments, including creation, deletion, retrieval, listing, and updating.
- JSON representation { "addOnType" : enum ( AddOnType ) , "title" : string , "description" : string , "helpUrl" : string , "reportIssueUrl" : string , "postInstallTipUrl" : string } Fields addOnType enum ( AddOnType ) The add-on's required list of supported container types. title string The add-on's required title. description string The add-on's optional description. helpUrl string The add-on's optional help URL. reportIssueUrl string The add-on's optional report issue URL. postInstallTipUrl string The add-on's required post install tip URL.

