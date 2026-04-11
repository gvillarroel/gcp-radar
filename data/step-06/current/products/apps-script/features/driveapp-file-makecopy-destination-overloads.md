---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.789Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "DriveApp File.makeCopy destination overloads"
feature_slug: "driveapp-file-makecopy-destination-overloads"
latest_feature_date: "2013-08-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/api/reference/rest/v1/File"
  - "https://developers.google.com/apps-script/samples/custom-functions/fact-check"
keywords:
  - "overloads"
  - "makecopy"
  - "destination"
  - "name"
  - "driveapp"
  - "file"
  - "added"
  - "and"
---

# DriveApp File.makeCopy destination overloads

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Added File.makeCopy(destination) and File.makeCopy(name, destination) so scripts can copy files to a specific folder.

## Extended Definition

Added File.makeCopy(destination) and File.makeCopy(name, destination) so scripts can copy files to a specific folder.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/api/reference/rest/v1/File](https://developers.google.com/apps-script/api/reference/rest/v1/File)
- [https://developers.google.com/apps-script/samples/custom-functions/fact-check](https://developers.google.com/apps-script/samples/custom-functions/fact-check)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- August 19, 2013 Feature Added the DriveApp methods File.makeCopy(destination) and File.makeCopy(name, destination) , which allow scripts to specify a folder to which a file should be copied.
- October 08, 2013 Feature Added the following FormApp methods, which allow scripts to work with progress bars, custom closed-form messages, and YouTube videos. + Form.hasProgressBar() + Form.setProgressBar(enabled) + Form.getCustomClosedFormMessage() + Form.setCustomClosedFormMessage(message) + Form.addVideoItem() September 23, 2013 Feature Added the following DriveApp methods, which allow scripts to get the owner of a File or Folder.
- September 03, 2013 Feature Added the DriveApp methods DriveApp.getFoldersByName(name) and DriveApp.searchFolders(params) , which return a FolderIterator with the requested results.
- Added the DriveApp methods File.getViewers() , File.getEditors() , Folder.getViewers() , and Folder.getEditors() , which return an array of Users with view or edit access.

### File \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/File](https://developers.google.com/apps-script/api/reference/rest/v1/File)
- Source ID: `site-api-reference`
- Final score: 100
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Each file has properties including its name, type, source content, last modifying user, creation time, update time, and a set of defined functions.
- JSON representation { "name" : string , "type" : enum ( FileType ) , "source" : string , "lastModifyUser" : { object ( User ) } , "createTime" : string , "updateTime" : string , "functionSet" : { object ( FunctionSet ) } } Fields name string The name of the file.
- The file extension is not part of the file name, which can be identified from the type field. type enum ( FileType ) The type of the file. source string The file content. lastModifyUser object ( User ) The user who modified the file most recently.
- Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" . functionSet object ( FunctionSet ) The defined set of functions in the script file, if any.

### "Fact-check statements with an ADK AI agent and Gemini model \_|\_ Apps Script\

- URL: [https://developers.google.com/apps-script/samples/custom-functions/fact-check](https://developers.google.com/apps-script/samples/custom-functions/fact-check)
- Source ID: `site-docs-root`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- Download this GitHub repository: Download In your preferred local development environment, extract the downloaded archive file and open the adk-samples/python/agents/llm-auditor directory. unzip adk-samples-main.zip cd adk-samples-main/python/agents/llm-auditor Create a new Cloud Storage bucket dedicated to the ADK agent. gcloud storage buckets create gs:// CLOUD STORAGE BUCKET NAME --project = PROJECT ID --location = PROJECT LOCATION Replace the following: CLOUD STORAGE BUCKET NAME with a unique bucket name you want to use.
- The custom function, named FACT CHECK , analyzes statements using a Vertex AI agent for reasoning and a Gemini model for output formatting.
- About this solution The Sheets custom function is named FACT CHECK and it operates as an end-to-end solution.
- Your new public/private key pair is generated and downloaded to your machine as a new file.

