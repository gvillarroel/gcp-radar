---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:13:45.753Z"
product_name: "Dataform"
product_slug: "dataform"
feature_name: "Workspace navigation tabs"
feature_slug: "workspace-navigation-tabs"
latest_feature_date: "2023-01-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataform/docs/create-workspace"
  - "https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient"
  - "https://docs.cloud.google.com/dataform/docs/configure-additional-actions"
keywords:
  - "workspace"
  - "navigation"
  - "tabs"
  - "add"
  - "tabbed"
  - "within"
  - "dataform"
---

# Workspace navigation tabs

Product: Dataform
Coverage: MEDIUM

## Step 02 Summary

Workspace navigation tabs add tabbed navigation within a Dataform workspace.

## Extended Definition

Workspace navigation tabs add tabbed navigation within a Dataform workspace.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataform/docs/create-workspace](https://docs.cloud.google.com/dataform/docs/create-workspace)
- [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient)
- [https://docs.cloud.google.com/dataform/docs/configure-additional-actions](https://docs.cloud.google.com/dataform/docs/configure-additional-actions)

## Supporting Pages

### Create a development workspace \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/create-workspace](https://docs.cloud.google.com/dataform/docs/create-workspace)
- Source ID: `site-docs-root-2`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Components of a development workspace A Dataform development workspace consists of the tabs described in the following sections.
- An initialized development workspace contains the following directories and files: definitions/ : a directory for asset definitions, in Dataform core or JavaScript. includes/ : an empty directory for scripts and variables that you can reuse across the repository. workflow settings.yaml : the default Dataform configuration file containing the Google Cloud project ID and BigQuery schema to publish assets in.
- Create a Dataform development workspace When you create a development workspace in a new repository for the first time, Dataform prompts you to initialize the development workspace with a set of configuration files that are required for Dataform to work.
- Note: If you enhance security by setting the enable private workspace field (Preview) to true in the projects.locations.updateConfig Dataform API method , only the workspace creator can read and write code in that Dataform workspace.

### "Class DataformAsyncClient (0.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient)
- Source ID: `site-python-reference`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description google.cloud.dataform v1.types.CommitWorkspaceChangesResponse CommitWorkspaceChanges response message. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. compilation result path compilation result path ( project : str , location : str , repository : str , compilation result : str ) - > str Returns a fully-qualified compilation result string. compute repository access token status compute repository access token status ( request : typing .
- Returns Type Description google.cloud.dataform v1.types.WorkflowConfig Represents a Dataform workflow configuration. workflow config path workflow config path ( project : str , location : str , repository : str , workflow config : str ) - > str Returns a fully-qualified workflow config string. workflow invocation path workflow invocation path ( project : str , location : str , repository : str , workflow invocation : str ) - > str Returns a fully-qualified workflow invocation string. workspace path workspace path ( project : str , location : str , repository : str , workspace : str ) - > str Returns a fully-qualified workspace string. write file write file ( request : typing .
- Returns Type Description google.cloud.dataform v1.types.Workspace Represents a Dataform Git workspace. crypto key path crypto key path ( project : str , location : str , key ring : str , crypto key : str ) - > str Returns a fully-qualified crypto key string. crypto key version path crypto key version path ( project : str , location : str , key ring : str , crypto key : str , crypto key version : str ) - > str Returns a fully-qualified crypto key version string. delete folder delete folder ( request : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataform v1 async def sample commit workspace changes(): Create a client client = dataform v1 .

### "Class DataformClient (0.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient)
- Source ID: `site-python-reference`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description google.cloud.dataform v1.types.CommitWorkspaceChangesResponse CommitWorkspaceChanges response message. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. compilation result path compilation result path ( project : str , location : str , repository : str , compilation result : str ) - > str Returns a fully-qualified compilation result string. compute repository access token status compute repository access token status ( request : typing .
- Returns Type Description google.cloud.dataform v1.types.WorkflowConfig Represents a Dataform workflow configuration. workflow config path workflow config path ( project : str , location : str , repository : str , workflow config : str ) - > str Returns a fully-qualified workflow config string. workflow invocation path workflow invocation path ( project : str , location : str , repository : str , workflow invocation : str ) - > str Returns a fully-qualified workflow invocation string. workspace path workspace path ( project : str , location : str , repository : str , workspace : str ) - > str Returns a fully-qualified workspace string. write file write file ( request : typing .
- Returns Type Description google.cloud.dataform v1.types.Workspace Represents a Dataform Git workspace. crypto key path crypto key path ( project : str , location : str , key ring : str , crypto key : str ) - > str Returns a fully-qualified crypto key string. crypto key version path crypto key version path ( project : str , location : str , key ring : str , crypto key : str , crypto key version : str ) - > str Returns a fully-qualified crypto key version string. delete folder delete folder ( request : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataform v1 def sample commit workspace changes(): Create a client client = dataform v1 .

### Configure additional actions \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/configure-additional-actions](https://docs.cloud.google.com/dataform/docs/configure-additional-actions)
- Source ID: `site-docs-root-2`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following code sample shows a pre operations statement that creates a temporary function that can be used in the select statement: pre operations { CREATE TEMP FUNCTION AddFourAndDivide(x INT64, y INT64) RETURNS FLOAT64 AS ((x + 4) / y); } Define a SQL statement to be run after table creation You can configure Dataform to run one or more SQL statements after creating a selected table in BigQuery.
- Define a SQLX file of any of the following types: type: table type: view type: incremental type: assertion type: operations Required roles To get the permissions that you need to complete the tasks in this document, ask your administrator to grant you the Dataform Editor ( roles/dataform.editor ) IAM role on workspaces.
- The following code sample shows a disabled table: config { type: "table", disabled: true } select from ${ref("source data")} Add execution tags This section shows you how to add tags to Dataform core SQLX files to categorize your workflow.
- Home Documentation Data analytics Dataform Guides Send feedback Configure additional actions Stay organized with collections Save and categorize content based on your preferences.

