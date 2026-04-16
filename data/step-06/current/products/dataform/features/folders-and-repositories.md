---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:13:45.732Z"
product_name: "Dataform"
product_slug: "dataform"
feature_name: "Folders and repositories"
feature_slug: "folders-and-repositories"
latest_feature_date: "2026-04-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient"
  - "https://docs.cloud.google.com/dataform/docs/quickstart-create-workflow"
  - "https://docs.cloud.google.com/dataform/docs/manage-repository"
keywords:
  - "folders"
  - "and"
  - "repositories"
  - "let"
  - "you"
  - "organize"
  - "dataform"
  - "code"
---

# Folders and repositories

Product: Dataform
Coverage: MEDIUM

## Step 02 Summary

Folders and repositories let you organize Dataform code assets into a hierarchical structure with IAM policy inheritance; Folders and repositories let you organize Dataform code assets into a hierarchical structure using the Dataform API.

## Extended Definition

Folders and repositories let you organize Dataform code assets into a hierarchical structure with IAM policy inheritance; Folders and repositories let you organize Dataform code assets into a hierarchical structure using the Dataform API.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient)
- [https://docs.cloud.google.com/dataform/docs/quickstart-create-workflow](https://docs.cloud.google.com/dataform/docs/quickstart-create-workflow)
- [https://docs.cloud.google.com/dataform/docs/manage-repository](https://docs.cloud.google.com/dataform/docs/manage-repository)

## Supporting Pages

### "Class DataformAsyncClient (0.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient)
- Source ID: `site-python-reference`
- Final score: 277
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Developer tools Python Client libraries Send feedback Class DataformAsyncClient (0.10.0) Stay organized with collections Save and categorize content based on your preferences.
- This is a resource that sits at the project level and is used to organize Repositories and Folders with hierarchical access controls.
- This is a resource that sits at the project level and is used to organize Repositories and Folders with hierarchical access controls.
- This is a resource that sits at the project level and is used to organize Repositories and Folders with hierarchical access controls.

### "Class DataformClient (0.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient)
- Source ID: `site-python-reference`
- Final score: 277
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Developer tools Python Client libraries Send feedback Class DataformClient (0.10.0) Stay organized with collections Save and categorize content based on your preferences.
- This is a resource that sits at the project level and is used to organize Repositories and Folders with hierarchical access controls.
- This is a resource that sits at the project level and is used to organize Repositories and Folders with hierarchical access controls.
- This is a resource that sits at the project level and is used to organize Repositories and Folders with hierarchical access controls.

### "Quickstart: Create and run a workflow \_|\_ Dataform \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataform/docs/quickstart-create-workflow](https://docs.cloud.google.com/dataform/docs/quickstart-create-workflow)
- Source ID: `site-docs-root`
- Final score: 231
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Run the API request with the following information: Endpoint : POST https://dataform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /repositories/ REPOSITORY ID /workspaces Query parameter : workspaceId= WORKSPACE ID curl command: curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -d "{}" \ "https://dataform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /repositories/ REPOSITORY ID /workspaces?workspaceId= WORKSPACE ID " To initialize your workspace with the necessary configuration, create a local file named workflow settings.yaml and paste the following configuration: defaultProject : PROJECT ID defaultDataset : dataform dataformCoreVersion : CORE VERSION In your terminal, run the following command to encode the file content into a single continuous string: base64 -w 0 workflow settings.yaml Copy the resulting output string to use in the SETTINGS DEFINITION field in your JSON request body.
- Run the API request with the following information: Endpoint : POST https://dataform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /repositories/ REPOSITORY ID /workspaces/ WORKSPACE ID :writeFile JSON payload ( write table.json ): { "path" : "definitions/quickstart-table.sqlx" , "contents" : " TABLE DEFINITION " } curl command: curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -d @write table.json \ "https://dataform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /repositories/ REPOSITORY ID /workspaces/ WORKSPACE ID :writeFile" Replace the following: LOCATION : the Google Cloud region for your repository, for example, europe-west4 .
- Run the API request with the following information: Endpoint : POST https://dataform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /repositories/ REPOSITORY ID /workspaces/ WORKSPACE ID :writeFile JSON payload ( write view.json ): { "path" : "definitions/quickstart-source.sqlx" , "contents" : " VIEW DEFINITION " } curl command: curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -d @write view.json \ "https://dataform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /repositories/ REPOSITORY ID /workspaces/ WORKSPACE ID :writeFile" Replace the following: LOCATION : the Google Cloud region for your repository, for example, europe-west4 .
- Run the API request with the following information: Endpoint : POST https://dataform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /repositories/ REPOSITORY ID /workflowInvocations curl command: curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -d '{ "compilationResult": "projects/ PROJECT ID /locations/ LOCATION /repositories/ REPOSITORY ID /compilationResults/ COMPILATION ID " }' \ "https://dataform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /repositories/ REPOSITORY ID /workflowInvocations" Replace the following: COMPILATION ID : the unique identifier for your compilation result.

### Manage a repository \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/manage-repository](https://docs.cloud.google.com/dataform/docs/manage-repository)
- Source ID: `site-docs-root-2`
- Final score: 231
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following code sample shows a workflow settings.yaml file with workflow-level defaults for BigLake Iceberg tables in BigQuery: defaultProject : "defaultProject" defaultDataset : "defaultDataset" defaultLocation : "us-central1" defaultIcebergConfig : bucketName : "wsDefaultBucketName" tableFolderRoot : "wsDefaultTableFolderRoot" tableFolderSubpath : "wsDefaultTableFolderSubpath" You can access these fields in your Dataform code as properties of the ProjectConfig object: dataform.ProjectConfig.defaultIcebergConfig.bucketName dataform.ProjectConfig.defaultIcebergConfig.tableFolderRoot dataform.ProjectConfig.defaultIcebergConfig.tableFolderSubpath For more information, see Create BigLake tables for Apache Iceberg in BigQuery and the iceberg block properties .
- Move Dataform core to workflow settings.yaml For repositories created with versions of Dataform core earlier than 3.0.0 , if you don't have dependency packages other than Dataform core, then you should move the Dataform core package from the package.json file to the workflow settings.yaml file, and delete the redundant package.json file.
- Required roles To get the permissions that you need to complete the tasks in this document, ask your administrator to grant you the following IAM roles: Configure Dataform settings and manage the location of the Dataform core package: Dataform Admin ( roles/dataform.admin ) on repositories.
- VARIABLE === " SET VALUE ", " CONDITION ")} Replace the following: VARIABLE : the name of your variable—for example executionSetting SET VALUE : a value for the variable—for example, staging CONDITION : a condition for execution of the table The following code sample shows a table definition SQLX file with a when clause and the executionSetting variable that executes 10% of data in the staging execution setting: select from ${ref("data")} ${when( dataform.projectConfig.vars.executionSetting === "staging", "where mod(farm fingerprint(id) / 10) = 0", )} The following code sample shows a view definition SQLX file with a when clause and the myVariableName variable: config { type: "view" } SELECT ${when( dataform.projectConfig.vars.myVariableName === "myVariableValue", "myVariableName is set to myVariableValue!", "myVariableName is not set to myVariableValue!" )} Configure workflow-level defaults for Iceberg tables You can provide workflow-level defaults for BigLake tables for Apache Iceberg in BigQuery in the workflow settings.yaml file.

