---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:13:45.745Z"
product_name: "Dataform"
product_slug: "dataform"
feature_name: "Workforce identity federation"
feature_slug: "workforce-identity-federation"
latest_feature_date: "2023-10-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataform/docs/access-control"
  - "https://docs.cloud.google.com/dataform/reference/rest/Shared.Types/Binding"
  - "https://docs.cloud.google.com/dataform/docs/authentication"
  - "https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient"
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
Coverage: MEDIUM

## Step 02 Summary

Workforce identity federation lets external workforce identities access Dataform.

## Extended Definition

Workforce identity federation lets external workforce identities access Dataform.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control)
- [https://docs.cloud.google.com/dataform/reference/rest/Shared.Types/Binding](https://docs.cloud.google.com/dataform/reference/rest/Shared.Types/Binding)
- [https://docs.cloud.google.com/dataform/docs/authentication](https://docs.cloud.google.com/dataform/docs/authentication)
- [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient)

## Supporting Pages

### Control access with IAM \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control)
- Source ID: `site-docs-root-2`
- Final score: 279
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Workforce Identity Federation in Dataform Workforce Identity Federation lets you use an external identity provider (IdP) to authenticate and authorize users to Google Cloud services with IAM.
- To learn more about managing access to resources, see Manage access to projects, folders, and organizations To learn more about the key concepts of Workforce Identity Federation, see Workforce Identity Federation .
- Dataform supports Workforce Identity Federation with no known limitations.
- Enable the APIs Grant Dataform the required access This section shows you how to grant the Identity and Access Management (IAM) roles that Dataform service agents and custom service accounts require to run workflows in BigQuery.

### Binding \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/reference/rest/Shared.Types/Binding](https://docs.cloud.google.com/dataform/reference/rest/Shared.Types/Binding)
- Source ID: `site-api-reference`
- Final score: 127
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Does not include identities that come from external identity providers (IdPs) through identity federation. user:{emailid} : An email address that represents a specific Google account.
- For example, google.com or example.com . principal://iam.googleapis.com/locations/global/workforcePools/{pool id}/subject/{subject attribute value} : A single identity in a workforce identity pool. principalSet://iam.googleapis.com/locations/global/workforcePools/{pool id}/group/{groupId} : All workforce identities in a group. principalSet://iam.googleapis.com/locations/global/workforcePools/{pool id}/attribute.{attribute name}/{attribute value} : All workforce identities with a specific attribute value. principalSet://iam.googleapis.com/locations/global/workforcePools/{pool id}/ : All identities in a workforce identity pool. principal://iam.googleapis.com/projects/{projectNumber}/locations/global/workloadIdentityPools/{pool id}/subject/{subject attribute value} : A single identity in a workload identity pool. principalSet://iam.googleapis.com/projects/{projectNumber}/locations/global/workloadIdentityPools/{pool id}/group/{groupId} : A workload identity pool group. principalSet://iam.googleapis.com/projects/{projectNumber}/locations/global/workloadIdentityPools/{pool id}/attribute.{attribute name}/{attribute value} : All identities in a workload identity pool with a certain attribute. principalSet://iam.googleapis.com/projects/{projectNumber}/locations/global/workloadIdentityPools/{pool id}/ : All identities in a workload identity pool. deleted:user:{emailid}?uid={uniqueid} : An email address (plus unique identifier) representing a user that has been recently deleted.
- If the group is recovered, this value reverts to group:{emailid} and the recovered group retains the role in the binding. deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool id}/subject/{subject attribute value} : Deleted single identity in a workforce identity pool.
- For a list of the available pre-defined roles, see here . members[] string Specifies the principals requesting access for a Google Cloud resource. members can have the following values: allUsers : A special identifier that represents anyone who is on the internet; with or without a Google account. allAuthenticatedUsers : A special identifier that represents anyone who is authenticated with a Google account or a service account.

### Authenticate to Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/authentication](https://docs.cloud.google.com/dataform/docs/authentication)
- Source ID: `site-docs-root`
- Final score: 123
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Dataform uses Identity and Access Management (IAM) for authorization.
- After installation, initialize the Google Cloud CLI by running the following command: gcloud init If you're using an external identity provider (IdP), you must first sign in to the gcloud CLI with your federated identity .
- You can access the API in the following ways: Client libraries REST Client libraries The Dataform client libraries provide high-level language support for authenticating to Dataform programmatically.
- If an authentication error is returned, and you are using an external identity provider (IdP), confirm that you have signed in to the gcloud CLI with your federated identity .

### "Class DataformAsyncClient (0.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient)
- Source ID: `site-python-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description google.cloud.dataform v1.types.CommitWorkspaceChangesResponse CommitWorkspaceChanges response message. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. compilation result path compilation result path ( project : str , location : str , repository : str , compilation result : str ) - > str Returns a fully-qualified compilation result string. compute repository access token status compute repository access token status ( request : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataform v1 async def sample compute repository access token status(): Create a client client = dataform v1 .
- ComputeRepositoryAccessTokenStatusRequest ( name="name value", ) Make the request response = await client. compute repository access token status (request=request) Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.dataform v1.types.ComputeRepositoryAccessTokenStatusRequest , dict]] The request object.
- Returns Type Description google.cloud.dataform v1.types.ComputeRepositoryAccessTokenStatusResponse ComputeRepositoryAccessTokenStatus response message. config path config path ( project : str , location : str ) - > str Returns a fully-qualified config string. create compilation result create compilation result ( request : typing .

