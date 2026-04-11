---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T06:18:40.390Z"
product_name: "Dataform"
product_slug: "dataform"
feature_name: "Workforce identity federation"
feature_slug: "workforce-identity-federation"
latest_feature_date: "2023-10-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataform/docs/access-control"
  - "https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient"
keywords:
  - "workforce"
  - "identity"
  - "federation"
  - "lets"
  - "external"
  - "identities"
  - "access"
  - "dataform"
---

# Workforce identity federation

Product: Dataform
Coverage: LOW

## Step 02 Summary

Workforce identity federation lets external workforce identities access Dataform.

## Extended Definition

Workforce identity federation lets external workforce identities access Dataform.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control)
- [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient)

## Supporting Pages

### Control access with IAM \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control)
- Source ID: `site-docs-root-2`
- Final score: 200
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Workforce Identity Federation in Dataform Workforce Identity Federation lets you use an external identity provider (IdP) to authenticate and authorize users to Google Cloud services with IAM.
- To learn more about managing access to resources, see Manage access to projects, folders, and organizations To learn more about the key concepts of Workforce Identity Federation, see Workforce Identity Federation .
- Dataform supports Workforce Identity Federation with no known limitations.
- Enable the APIs Grant Dataform the required access This section shows you how to grant the Identity and Access Management (IAM) roles that Dataform service agents and custom service accounts require to run workflows in BigQuery.

### "Class DataformAsyncClient (0.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient)
- Source ID: `site-python-reference`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description google.cloud.dataform v1.types.CommitWorkspaceChangesResponse CommitWorkspaceChanges response message. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. compilation result path compilation result path ( project : str , location : str , repository : str , compilation result : str ) - > str Returns a fully-qualified compilation result string. compute repository access token status compute repository access token status ( request : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataform v1 async def sample compute repository access token status(): Create a client client = dataform v1 .
- ComputeRepositoryAccessTokenStatusRequest ( name="name value", ) Make the request response = await client. compute repository access token status (request=request) Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.dataform v1.types.ComputeRepositoryAccessTokenStatusRequest , dict]] The request object.
- Returns Type Description google.cloud.dataform v1.types.ComputeRepositoryAccessTokenStatusResponse ComputeRepositoryAccessTokenStatus response message. config path config path ( project : str , location : str ) - > str Returns a fully-qualified config string. create compilation result create compilation result ( request : typing .

### "Class DataformClient (0.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient)
- Source ID: `site-python-reference`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description google.cloud.dataform v1.types.CommitWorkspaceChangesResponse CommitWorkspaceChanges response message. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. compilation result path compilation result path ( project : str , location : str , repository : str , compilation result : str ) - > str Returns a fully-qualified compilation result string. compute repository access token status compute repository access token status ( request : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataform v1 def sample compute repository access token status(): Create a client client = dataform v1 .
- ComputeRepositoryAccessTokenStatusRequest ( name="name value", ) Make the request response = client. compute repository access token status (request=request) Handle the response print(response) Parameters Name Description request Union[ google.cloud.dataform v1.types.ComputeRepositoryAccessTokenStatusRequest , dict] The request object.
- Returns Type Description google.cloud.dataform v1.types.ComputeRepositoryAccessTokenStatusResponse ComputeRepositoryAccessTokenStatus response message. config path config path ( project : str , location : str ) - > str Returns a fully-qualified config string. create compilation result create compilation result ( request : typing .

