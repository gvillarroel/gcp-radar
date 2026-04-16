---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:13:45.737Z"
product_name: "Dataform"
product_slug: "dataform"
feature_name: "Dataplex repository management"
feature_slug: "dataplex-repository-management"
latest_feature_date: "2024-12-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataform/docs/cmek"
  - "https://docs.cloud.google.com/dataform/docs/manage-repository"
  - "https://docs.cloud.google.com/dataform/docs/overview"
  - "https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient"
keywords:
  - "dataplex"
  - "repository"
  - "management"
  - "lets"
  - "you"
  - "manage"
  - "dataform"
  - "repositories"
---

# Dataplex repository management

Product: Dataform
Coverage: MEDIUM

## Step 02 Summary

Dataplex repository management lets you manage Dataform repositories in Dataplex with metadata available automatically.

## Extended Definition

Dataplex repository management lets you manage Dataform repositories in Dataplex with metadata available automatically.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataform/docs/cmek](https://docs.cloud.google.com/dataform/docs/cmek)
- [https://docs.cloud.google.com/dataform/docs/manage-repository](https://docs.cloud.google.com/dataform/docs/manage-repository)
- [https://docs.cloud.google.com/dataform/docs/overview](https://docs.cloud.google.com/dataform/docs/overview)
- [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient)

## Supporting Pages

### Use customer-managed encryption keys \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/cmek](https://docs.cloud.google.com/dataform/docs/cmek)
- Source ID: `site-docs-root-2`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This integration lets you specify the following encryption compliance requirements for Dataform repositories in your organization: Require CMEKs for all new Dataform repositories Restrict Cloud KMS keys for a Dataform project Considerations when applying organization policies Before applying any CMEK organization policies, you should be aware of the following.
- Your default Dataform service agent ID is in the following format: service- YOUR PROJECT NUMBER @gcp-sa-dataform.iam.gserviceaccount.com To grant the CryptoKey Encrypter/Decrypter role to the default Dataform service agent, follow these steps: Console Open the Key Management page in the Google Cloud console.
- CMEK encryption of repository data When you apply CMEK encryption to a Dataform repository, all Dataform-managed customer data in that repository is encrypted at rest using the CMEK protection key set for the repository.
- Set a default Dataform CMEK key Setting a default Dataform CMEK key for your Google Cloud project lets you encrypt multiple repositories with the same CMEK key.

### Manage a repository \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/manage-repository](https://docs.cloud.google.com/dataform/docs/manage-repository)
- Source ID: `site-docs-root-2`
- Final score: 213
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Required roles To get the permissions that you need to complete the tasks in this document, ask your administrator to grant you the following IAM roles: Configure Dataform settings and manage the location of the Dataform core package: Dataform Admin ( roles/dataform.admin ) on repositories.
- Home Documentation Data analytics Dataform Guides Send feedback Manage a repository Stay organized with collections Save and categorize content based on your preferences.
- Manage Dataform core package location When you initialize the first workspace in a repository, Dataform automatically sets Dataform core as a dependency package.
- The following code sample shows workflow settings defined in a dataform.json file: { "warehouse" : "bigquery" , "defaultDatabase" : "dataform-demos" , "defaultLocation" : "US" , "defaultSchema" : "dataform" , "assertionSchema" : "dataform assertions" "vars" : { "environmentName" : "development" } } The following code sample shows the preceding dataform.json file converted to workflow settings.yaml : defaultProject : dataform-demos defaultLocation : US defaultDataset : dataform defaultAssertionDataset : dataform assertions vars : environmentName : "development" Manage the Dataform core package This section shows you how to manage the Dataform core framework dependency package and update it to the latest version.

### Dataform overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/overview](https://docs.cloud.google.com/dataform/docs/overview)
- Source ID: `site-docs-root`
- Final score: 208
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Dataform lets you create repositories to manage your code In a Dataform repository , you use Dataform core , an extension of SQL, to write SQLX files in which you define your workflow.
- Data transformation processes in Dataform The data transformation workflow for Dataform is as follows: Dataform lets you create repositories to manage your code.
- The following code sample shows you how to reference a table in a SQLX file with the ref function. config { type : "table" } SELECT order date AS date , order id AS order id , order status AS order status , SUM ( item count ) AS item count , SUM ( amount ) AS revenue FROM ${ ref ( "store clean" ) } GROUP BY 1 , 2 , 3 The output is similar to the following: CREATE OR REPLACE TABLE Dataform . orders AS SELECT order date AS date , order id AS order id , order status AS order status , SUM ( item count ) AS item count , SUM ( amount ) AS revenue FROM Dataform stg . store clean GROUP BY 1 , 2 , 3 For more information on additional dependency management, for example, executing code conditionally, using other Dataform core built-in functions, see the Dataform core reference .
- In a Dataform workspace, you can develop the following workflow actions: Source data declarations Tables and views Incremental tables Table partitions and clusters Dependencies between actions Documentation of tables Custom SQL operations BigQuery labels BigQuery policy tags Dataform tags Data quality tests, called assertions You can use JavaScript to reuse your Dataform workflow code in the following ways: Across a file with code encapsulation Across a repository with includes Across repositories with packages Dataform compiles the workflow code in your workspace in real-time.

### "Class DataformAsyncClient (0.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient)
- Source ID: `site-python-reference`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description google.cloud.dataform v1.types.CommitWorkspaceChangesResponse CommitWorkspaceChanges response message. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. compilation result path compilation result path ( project : str , location : str , repository : str , compilation result : str ) - > str Returns a fully-qualified compilation result string. compute repository access token status compute repository access token status ( request : typing .
- Returns Type Description google.cloud.dataform v1.types.WorkflowConfig Represents a Dataform workflow configuration. workflow config path workflow config path ( project : str , location : str , repository : str , workflow config : str ) - > str Returns a fully-qualified workflow config string. workflow invocation path workflow invocation path ( project : str , location : str , repository : str , workflow invocation : str ) - > str Returns a fully-qualified workflow invocation string. workspace path workspace path ( project : str , location : str , repository : str , workspace : str ) - > str Returns a fully-qualified workspace string. write file write file ( request : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataform v1 async def sample compute repository access token status(): Create a client client = dataform v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataform v1 async def sample query repository directory contents(): Create a client client = dataform v1 .

