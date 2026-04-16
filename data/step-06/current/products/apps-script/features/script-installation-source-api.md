---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.591Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Script installation source API"
feature_slug: "script-installation-source-api"
latest_feature_date: "2015-05-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/api/reference/rest/v1/projects"
  - "https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments"
  - "https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions"
keywords:
  - "script"
  - "installation"
  - "source"
  - "can"
  - "identify"
  - "project"
  - "key"
---

# Script installation source API

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

The Script service can identify a script's installation source and project key.

## Extended Definition

The Script service can identify a script's installation source and project key.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/api/reference/rest/v1/projects](https://developers.google.com/apps-script/api/reference/rest/v1/projects)
- [https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments](https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments)
- [https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions](https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions)

## Supporting Pages

### REST Resource: projects \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/projects](https://developers.google.com/apps-script/api/reference/rest/v1/projects)
- Source ID: `site-api-reference`
- Final score: 103
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Methods create Creates a new, empty script project with no script files and a base manifest file. get Gets a script project's metadata. getContent Gets the content of the script project, including the code source and metadata for each script file. getMetrics Get metrics data for scripts, such as number of executions and active users. updateContent Updates the content of the specified script project.
- Page Summary outlined flag The Project resource represents a script project and includes fields like scriptId , title , parentId , createTime , updateTime , creator , and lastModifyUser .
- Home Google Workspace Apps Script Reference Send feedback REST Resource: projects Stay organized with collections Save and categorize content based on your preferences.
- Resource: Project JSON representation User JSON representation Methods Resource: Project The script project resource.

### REST Resource: projects.deployments \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments](https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments)
- Source ID: `site-api-reference`
- Final score: 102
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Google Workspace Apps Script Reference Send feedback REST Resource: projects.deployments Stay organized with collections Save and categorize content based on your preferences.
- Resource: Deployment JSON representation DeploymentConfig JSON representation EntryPoint JSON representation EntryPointType WebAppEntryPoint JSON representation WebAppConfig JSON representation Access ExecuteAs ExecutionApiEntryPoint JSON representation ExecutionApiConfig JSON representation AddOnEntryPoint JSON representation AddOnType Methods Resource: Deployment Representation of a single script deployment.
- JSON representation { "scriptId" : string , "versionNumber" : integer , "manifestFileName" : string , "description" : string } Fields scriptId string The script project's Drive ID. versionNumber integer The version number on which this deployment is based. manifestFileName string The manifest file name for this deployment. description string The description for this deployment.
- Methods create Creates a deployment of an Apps Script project. delete Deletes a deployment of an Apps Script project. get Gets a deployment of an Apps Script project. list Lists the deployments of an Apps Script project. update Updates a deployment of an Apps Script project.

### REST Resource: projects.versions \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions](https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions)
- Source ID: `site-api-reference`
- Final score: 95
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Google Workspace Apps Script Reference Send feedback REST Resource: projects.versions Stay organized with collections Save and categorize content based on your preferences.
- Resource: Version JSON representation Methods Resource: Version A resource representing a script project version.
- JSON representation { "scriptId" : string , "versionNumber" : integer , "description" : string , "createTime" : string } Fields scriptId string The script project's Drive ID. versionNumber integer The incremental ID that is created by Apps Script when a version is created.
- Methods create Creates a new immutable version using the current code, with a unique version number. get Gets a version of a script project. list List the versions of a script project.

