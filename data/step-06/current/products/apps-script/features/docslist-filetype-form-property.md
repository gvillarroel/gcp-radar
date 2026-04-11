---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:29:46.805Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "DocsList.FileType.FORM property"
feature_slug: "docslist-filetype-form-property"
latest_feature_date: "2013-03-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments"
  - "https://developers.google.com/apps-script/samples/custom-functions/fact-check"
keywords:
  - "filetype"
  - "property"
  - "docslist"
  - "access"
  - "form"
  - "added"
  - "so"
  - "can"
---

# DocsList.FileType.FORM property

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Added DocsList.FileType.FORM so DocsList can access Google Forms.

## Extended Definition

Added DocsList.FileType.FORM so DocsList can access Google Forms.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments](https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments)
- [https://developers.google.com/apps-script/samples/custom-functions/fact-check](https://developers.google.com/apps-script/samples/custom-functions/fact-check)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- Added the property DocsList.FileType.FORM to let DocsList access new Google Forms.
- Bookmark NamedRange RangeBuilder Document.addBookmark(position) Document.addNamedRange(name, range) Document.getBookmark(id) Document.getBookmarks() Document.getNamedRangeById(id) Document.getNamedRanges() Document.getNamedRanges(name) Document.newPosition(element, offset) Document.newRange() Document.setCursor(position) Document.setSelection(range) Position.insertBookmark() Added the following ScriptApp class and methods, which allow scripts to create state tokens that can be used in callback APIs (like OAuth flows), as well as to retrieve the script's own OAuth 2.0 access token.
- April 30, 2024 Feature The cancelDataRefresh() method has been added to the following classes of the Spreadsheet service: DataSourceChart DataSourceFormula DataSourcePivotTable DataSourceSheet DataSourceTable The cancelDataRefresh() method cancels the data refresh associated with the object it's called on if the refresh is currently running.
- Feature Added a source property to the event parameter for form triggers .

### REST Resource: projects.deployments \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments](https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments)
- Source ID: `site-api-reference`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-10-31 UTC."],[],[]]
- Resource: Deployment JSON representation DeploymentConfig JSON representation EntryPoint JSON representation EntryPointType WebAppEntryPoint JSON representation WebAppConfig JSON representation Access ExecuteAs ExecutionApiEntryPoint JSON representation ExecutionApiConfig JSON representation AddOnEntryPoint JSON representation AddOnType Methods Resource: Deployment Representation of a single script deployment.
- JSON representation { "entryPointType" : enum ( EntryPointType ) , // Union field properties can be only one of the following: "webApp" : { object ( WebAppEntryPoint ) } , "executionApi" : { object ( ExecutionApiEntryPoint ) } , "addOn" : { object ( AddOnEntryPoint ) } // End of list of possible types for union field properties . } Fields entryPointType enum ( EntryPointType ) The type of the entry point.
- JSON representation { "deploymentId" : string , "deploymentConfig" : { object ( DeploymentConfig ) } , "updateTime" : string , "entryPoints" : [ { object ( EntryPoint ) } ] } Fields deploymentId string The deployment ID for this deployment. deploymentConfig object ( DeploymentConfig ) The deployment configuration. updateTime string ( Timestamp format) Last modified date time stamp.

### "Fact-check statements with an ADK AI agent and Gemini model \_|\_ Apps Script\

- URL: [https://developers.google.com/apps-script/samples/custom-functions/fact-check](https://developers.google.com/apps-script/samples/custom-functions/fact-check)
- Source ID: `site-docs-root`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
- Enable the Vertex AI API with the gcloud services enable command: gcloud services enable aiplatform.googleapis.com Create a service account in Google Cloud console Create a new service account with the role Vertex AI User by following these steps: Google Cloud console In the Google Cloud console, go to Menu menu IAM & Admin Service Accounts .
- The Google Cloud console navigates to the Dashboard page and your project is created within a few minutes. gcloud CLI In one of the following development environments, access the Google Cloud CLI ( gcloud ): Cloud Shell : To use an online terminal with the gcloud CLI already set up, activate Cloud Shell.
- Make a note of the email address for the service account. gcloud CLI Create the service account: gcloud iam service-accounts create SERVICE ACCOUNT NAME \ --display-name=" SERVICE ACCOUNT NAME " Optional: Assign roles to your service account to grant access to your Google Cloud project's resources.

