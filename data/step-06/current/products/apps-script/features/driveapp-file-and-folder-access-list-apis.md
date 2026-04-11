---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.787Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "DriveApp file and folder access list APIs"
feature_slug: "driveapp-file-and-folder-access-list-apis"
latest_feature_date: "2013-09-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/samples/custom-functions/fact-check"
  - "https://developers.google.com/apps-script/api/reference/rest/v1/processes/list"
keywords:
  - "driveapp"
  - "list"
  - "folder"
  - "access"
  - "file"
  - "added"
  - "apis"
  - "and"
---

# DriveApp file and folder access list APIs

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Added File.getViewers(), File.getEditors(), Folder.getViewers(), and Folder.getEditors() to retrieve users with view or edit access.

## Extended Definition

Added File.getViewers(), File.getEditors(), Folder.getViewers(), and Folder.getEditors() to retrieve users with view or edit access.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/samples/custom-functions/fact-check](https://developers.google.com/apps-script/samples/custom-functions/fact-check)
- [https://developers.google.com/apps-script/api/reference/rest/v1/processes/list](https://developers.google.com/apps-script/api/reference/rest/v1/processes/list)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Added the DriveApp methods File.getViewers() , File.getEditors() , Folder.getViewers() , and Folder.getEditors() , which return an array of Users with view or edit access.
- August 31, 2021 Feature The Drive Service has added three new methods to the file and folder classes to manage the use of resource keys when sharing files and folders. getSecurityUpdateEligible() : Gets whether a file for folder is eligible to apply the security update that requires a resource key for access when it's shared using a link. getSecurityUpdateEnabled() : Gets whether a file or folder requires a resource key for access when it's shared using a link. setSecurityUpdateEnabled(enabled) : Sets whether the file or folder requires a resource key for access when it's shared using a link.
- October 08, 2013 Feature Added the following FormApp methods, which allow scripts to work with progress bars, custom closed-form messages, and YouTube videos. + Form.hasProgressBar() + Form.setProgressBar(enabled) + Form.getCustomClosedFormMessage() + Form.setCustomClosedFormMessage(message) + Form.addVideoItem() September 23, 2013 Feature Added the following DriveApp methods, which allow scripts to get the owner of a File or Folder.
- August 19, 2013 Feature Added the DriveApp methods File.makeCopy(destination) and File.makeCopy(name, destination) , which allow scripts to specify a folder to which a file should be copied.

### "Fact-check statements with an ADK AI agent and Gemini model \_|\_ Apps Script\

- URL: [https://developers.google.com/apps-script/samples/custom-functions/fact-check](https://developers.google.com/apps-script/samples/custom-functions/fact-check)
- Source ID: `site-docs-root`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- Next steps Plan travels with an AI agent accessible across Google Workspace Build Gemini Enterprise agents that are tightly integrated with Workspace data stores, APIs, and add ons Build Vertex AI agents that are tightly integrated with Workspace data stores, APIs, and add ons Custom functions in Sheets Extending Sheets Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Download this GitHub repository: Download In your preferred local development environment, extract the downloaded archive file and open the adk-samples/python/agents/llm-auditor directory. unzip adk-samples-main.zip cd adk-samples-main/python/agents/llm-auditor Create a new Cloud Storage bucket dedicated to the ADK agent. gcloud storage buckets create gs:// CLOUD STORAGE BUCKET NAME --project = PROJECT ID --location = PROJECT LOCATION Replace the following: CLOUD STORAGE BUCKET NAME with a unique bucket name you want to use.
- Install and deploy ADK agent from virtual environment. python3 -m venv myenv source myenv/bin/activate poetry install --with deployment python3 deployment/deploy.py --create Retrieve the agent ID, you'll need it later to configure the custom function. python3 deployment/deploy.py --list Review the sample code Optionally, before creating the new spreadsheet, take a moment to review and familiarize yourself with the sample code hosted on GitHub.
- Enable the Vertex AI API with the gcloud services enable command: gcloud services enable aiplatform.googleapis.com Create a service account in Google Cloud console Create a new service account with the role Vertex AI User by following these steps: Google Cloud console In the Google Cloud console, go to Menu menu IAM & Admin Service Accounts .

### Method: processes.list \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/processes/list](https://developers.google.com/apps-script/api/reference/rest/v1/processes/list)
- Source ID: `site-api-reference`
- Final score: 110
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The ListUserProcessesFilter object allows for detailed filtering based on criteria like script ID, deployment ID, project name, function name, time range, process types, statuses, and user access levels.
- Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" . types[] enum ( ProcessType ) Optional field used to limit returned processes to those having one of the specified process types. statuses[] enum ( ProcessStatus ) Optional field used to limit returned processes to those having one of the specified process statuses. userAccessLevels[] enum ( UserAccessLevel ) Optional field used to limit returned processes to those having one of the specified user access levels.
- Home Google Workspace Apps Script Reference Send feedback Method: processes.list Stay organized with collections Save and categorize content based on your preferences.
- Page Summary outlined flag This document details how to list processes made by or on behalf of a user, including information like process type and current status.

