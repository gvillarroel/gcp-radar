---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T06:18:40.387Z"
product_name: "Dataform"
product_slug: "dataform"
feature_name: "Workspace file tabs"
feature_slug: "workspace-file-tabs"
latest_feature_date: "2023-12-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient"
  - "https://docs.cloud.google.com/dataform/docs/create-workspace"
keywords:
  - "workspace"
  - "file"
  - "tabs"
  - "display"
  - "files"
  - "as"
  - "within"
  - "dataform"
---

# Workspace file tabs

Product: Dataform
Coverage: LOW

## Step 02 Summary

Workspace file tabs display files as tabs within a Dataform workspace.

## Extended Definition

Workspace file tabs display files as tabs within a Dataform workspace.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient)
- [https://docs.cloud.google.com/dataform/docs/create-workspace](https://docs.cloud.google.com/dataform/docs/create-workspace)

## Supporting Pages

### "Class DataformAsyncClient (0.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient)
- Source ID: `site-python-reference`
- Final score: 232
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- SearchFilesRequest ( workspace="workspace value", ) Make the request page result = client. search files (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.dataform v1.types.SearchFilesRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataform v1 async def sample search files(): Create a client client = dataform v1 .
- Returns Type Description google.cloud.dataform v1.types.ResetWorkspaceChangesResponse ResetWorkspaceChanges response message. search files search files ( request : typing .
- Returns Type Description google.cloud.dataform v1.services.dataform.pagers.SearchFilesAsyncPager Client-facing representation of a file search response.

### "Class DataformClient (0.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient)
- Source ID: `site-python-reference`
- Final score: 208
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataform v1 def sample search files(): Create a client client = dataform v1 .
- SearchFilesRequest ( workspace="workspace value", ) Make the request page result = client. search files (request=request) Handle the response for response in page result: print(response) Parameters Name Description request Union[ google.cloud.dataform v1.types.SearchFilesRequest , dict] The request object.
- Returns Type Description google.cloud.dataform v1.types.ResetWorkspaceChangesResponse ResetWorkspaceChanges response message. search files search files ( request : typing .
- Returns Type Description google.cloud.dataform v1.types.WorkflowConfig Represents a Dataform workflow configuration. workflow config path workflow config path ( project : str , location : str , repository : str , workflow config : str ) - > str Returns a fully-qualified workflow config string. workflow invocation path workflow invocation path ( project : str , location : str , repository : str , workflow invocation : str ) - > str Returns a fully-qualified workflow invocation string. workspace path workspace path ( project : str , location : str , repository : str , workspace : str ) - > str Returns a fully-qualified workspace string. write file write file ( request : typing .

### Create a development workspace \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/create-workspace](https://docs.cloud.google.com/dataform/docs/create-workspace)
- Source ID: `site-docs-root-2`
- Final score: 186
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- An initialized development workspace contains the following directories and files: definitions/ : a directory for asset definitions, in Dataform core or JavaScript. includes/ : an empty directory for scripts and variables that you can reuse across the repository. workflow settings.yaml : the default Dataform configuration file containing the Google Cloud project ID and BigQuery schema to publish assets in.
- Create a Dataform development workspace When you create a development workspace in a new repository for the first time, Dataform prompts you to initialize the development workspace with a set of configuration files that are required for Dataform to work.
- Edits you make to files in your workspace start off as uncommitted local changes that you can commit and then push to your repository so that they become available to all repository users.
- The tab contains the following components that let you develop workflows: Files pane: displays the file structure of your workspace and autosaves your edits to the file structure.

