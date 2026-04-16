---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:13:45.736Z"
product_name: "Dataform"
product_slug: "dataform"
feature_name: "Automatic processing location selection"
feature_slug: "automatic-processing-location-selection"
latest_feature_date: "2025-09-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataform/docs/configure-compilation"
  - "https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient"
  - "https://docs.cloud.google.com/dataform/docs/manage-repository"
keywords:
  - "automatic"
  - "processing"
  - "location"
  - "selection"
  - "chooses"
  - "dataform"
  - "based"
  - "on"
---

# Automatic processing location selection

Product: Dataform
Coverage: MEDIUM

## Step 02 Summary

Automatic processing location selection chooses a Dataform processing location based on datasets referenced in SQL queries.

## Extended Definition

Automatic processing location selection chooses a Dataform processing location based on datasets referenced in SQL queries.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataform/docs/configure-compilation](https://docs.cloud.google.com/dataform/docs/configure-compilation)
- [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient)
- [https://docs.cloud.google.com/dataform/docs/manage-repository](https://docs.cloud.google.com/dataform/docs/manage-repository)

## Supporting Pages

### Configure compilations \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/configure-compilation](https://docs.cloud.google.com/dataform/docs/configure-compilation)
- Source ID: `site-docs-root-2`
- Final score: 231
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following code sample shows a compilation result ID passed in a workflowInvocations.create request: { "compilationResult": "projects/my-project-name/locations/europe-west4/repositories/my-repository-name/compilationResults/7646b4ed-ac8e-447f-93cf-63c43249ff11" } Create a release configuration This section shows you how to create a release configuration in Dataform to configure templates of compilation settings, which you can run on a schedule.
- Set a workspace as a compilation result source In the compilationResults.create request, populate the workspace property with the path of a selected Dataform workspace in the following format: { "workspace": "projects/ PROJECT NAME /locations/ LOCATION /repositories/ REPOSITORY NAME /workspaces/ WORKSPACE NAME " } Replace the following: PROJECT NAME : the name of your Google Cloud project.
- You can select the following workflow actions to be run: All actions Selected actions Actions with selected tags Then, during a scheduled execution of your workflow configuration, Dataform deploys your selection of actions from the applied compilation result to BigQuery.
- Home Documentation Data analytics Dataform Guides Send feedback Configure compilations Stay organized with collections Save and categorize content based on your preferences.

### "Class DataformAsyncClient (0.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient)
- Source ID: `site-python-reference`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description google.cloud.dataform v1.types.CommitWorkspaceChangesResponse CommitWorkspaceChanges response message. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. compilation result path compilation result path ( project : str , location : str , repository : str , compilation result : str ) - > str Returns a fully-qualified compilation result string. compute repository access token status compute repository access token status ( request : typing .
- Returns Type Description google.cloud.dataform v1.types.WorkflowConfig Represents a Dataform workflow configuration. workflow config path workflow config path ( project : str , location : str , repository : str , workflow config : str ) - > str Returns a fully-qualified workflow config string. workflow invocation path workflow invocation path ( project : str , location : str , repository : str , workflow invocation : str ) - > str Returns a fully-qualified workflow invocation string. workspace path workspace path ( project : str , location : str , repository : str , workspace : str ) - > str Returns a fully-qualified workspace string. write file write file ( request : typing .
- Returns Type Description google.cloud.dataform v1.types.Workspace Represents a Dataform Git workspace. crypto key path crypto key path ( project : str , location : str , key ring : str , crypto key : str ) - > str Returns a fully-qualified crypto key string. crypto key version path crypto key version path ( project : str , location : str , key ring : str , crypto key : str , crypto key version : str ) - > str Returns a fully-qualified crypto key version string. delete folder delete folder ( request : typing .
- Iterating over this object will yield results and resolve additional pages automatically. folder path folder path ( project : str , location : str , folder : str ) - > str Returns a fully-qualified folder string. from service account file from service account file ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.

### "Class DataformClient (0.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient)
- Source ID: `site-python-reference`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description google.cloud.dataform v1.types.CommitWorkspaceChangesResponse CommitWorkspaceChanges response message. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. compilation result path compilation result path ( project : str , location : str , repository : str , compilation result : str ) - > str Returns a fully-qualified compilation result string. compute repository access token status compute repository access token status ( request : typing .
- Returns Type Description google.cloud.dataform v1.types.WorkflowConfig Represents a Dataform workflow configuration. workflow config path workflow config path ( project : str , location : str , repository : str , workflow config : str ) - > str Returns a fully-qualified workflow config string. workflow invocation path workflow invocation path ( project : str , location : str , repository : str , workflow invocation : str ) - > str Returns a fully-qualified workflow invocation string. workspace path workspace path ( project : str , location : str , repository : str , workspace : str ) - > str Returns a fully-qualified workspace string. write file write file ( request : typing .
- Returns Type Description google.cloud.dataform v1.types.Workspace Represents a Dataform Git workspace. crypto key path crypto key path ( project : str , location : str , key ring : str , crypto key : str ) - > str Returns a fully-qualified crypto key string. crypto key version path crypto key version path ( project : str , location : str , key ring : str , crypto key : str , crypto key version : str ) - > str Returns a fully-qualified crypto key version string. delete folder delete folder ( request : typing .
- Iterating over this object will yield results and resolve additional pages automatically. folder path folder path ( project : str , location : str , folder : str ) - > str Returns a fully-qualified folder string. from service account file from service account file ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.

### Manage a repository \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/manage-repository](https://docs.cloud.google.com/dataform/docs/manage-repository)
- Source ID: `site-docs-root-2`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Manage Dataform core package location When you initialize the first workspace in a repository, Dataform automatically sets Dataform core as a dependency package.
- If you don't set the defaultLocation parameter, Dataform determines the location based on the datasets that your SQL query references.
- If you don't set the defaultLocation parameter, Dataform determines the location based on the datasets that your SQL query references.
- If unset, Dataform determines the location based on the datasets that your SQL query references.

