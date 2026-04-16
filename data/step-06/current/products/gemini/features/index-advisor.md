---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:09.671Z"
product_name: "Gemini"
product_slug: "gemini"
feature_name: "Index advisor"
feature_slug: "index-advisor"
latest_feature_date: "2024-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.codeRepositoryIndexes.repositoryGroups"
  - "https://docs.cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.codeRepositoryIndexes.repositoryGroups/create"
  - "https://docs.cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.codeRepositoryIndexes.repositoryGroups/delete"
  - "https://docs.cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.codeRepositoryIndexes.repositoryGroups/get"
keywords:
  - "index"
  - "advisor"
  - "tracks"
  - "regularly"
  - "handled"
  - "queries"
  - "to"
  - "recommend"
---

# Index advisor

Product: Gemini
Coverage: MEDIUM

## Step 02 Summary

Index advisor tracks regularly handled queries to recommend useful indexes; Index advisor tracks regularly handled queries to recommend useful indexes.

## Extended Definition

Index advisor tracks regularly handled queries to recommend useful indexes; Index advisor tracks regularly handled queries to recommend useful indexes.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.codeRepositoryIndexes.repositoryGroups](https://docs.cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.codeRepositoryIndexes.repositoryGroups)
- [https://docs.cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.codeRepositoryIndexes.repositoryGroups/create](https://docs.cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.codeRepositoryIndexes.repositoryGroups/create)
- [https://docs.cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.codeRepositoryIndexes.repositoryGroups/delete](https://docs.cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.codeRepositoryIndexes.repositoryGroups/delete)
- [https://docs.cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.codeRepositoryIndexes.repositoryGroups/get](https://docs.cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.codeRepositoryIndexes.repositoryGroups/get)

## Supporting Pages

### "REST Resource: projects.locations.codeRepositoryIndexes.repositoryGroups\

- URL: [https://docs.cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.codeRepositoryIndexes.repositoryGroups](https://docs.cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.codeRepositoryIndexes.repositoryGroups)
- Source ID: `site-api-reference`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation AI and ML Gemini for Google Cloud API and references Send feedback REST Resource: projects.locations.codeRepositoryIndexes.repositoryGroups Stay organized with collections Save and categorize content based on your preferences.
- List of repositories to group Repository Repository contains RAG indexing settings for the provided Git repository JSON representation { "resource" : string , "branchPattern" : string } Fields resource string Required.
- The DeveloperConnect repository full resource name, relative resource name or resource URL to be indexed. branchPattern string Required.
- Methods create Creates a new RepositoryGroup in a given project and location. delete Deletes a single RepositoryGroup. get Gets details of a single RepositoryGroup. getIamPolicy Gets the access control policy for a resource. list Lists RepositoryGroups in a given project and location. patch Updates the parameters of a single RepositoryGroup. setIamPolicy Sets the access control policy on the specified resource. testIamPermissions Returns permissions that a caller has on the specified resource.

### "Method: projects.locations.codeRepositoryIndexes.repositoryGroups.create\

- URL: [https://docs.cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.codeRepositoryIndexes.repositoryGroups/create](https://docs.cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.codeRepositoryIndexes.repositoryGroups/create)
- Source ID: `site-api-reference`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation AI and ML Gemini for Google Cloud API and references Send feedback Method: projects.locations.codeRepositoryIndexes.repositoryGroups.create Stay organized with collections Save and categorize content based on your preferences.
- HTTP request POST https://cloudaicompanion.googleapis.com/v1/{parent=projects/ /locations/ /codeRepositoryIndexes/ }/repositoryGroups The URL uses gRPC Transcoding syntax.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-30 UTC."],[],[]]
- HTTP request Path parameters Query parameters Request body Response body Authorization scopes IAM Permissions Creates a new RepositoryGroup in a given project and location.

### "Method: projects.locations.codeRepositoryIndexes.repositoryGroups.delete\

- URL: [https://docs.cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.codeRepositoryIndexes.repositoryGroups/delete](https://docs.cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.codeRepositoryIndexes.repositoryGroups/delete)
- Source ID: `site-api-reference`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation AI and ML Gemini for Google Cloud API and references Send feedback Method: projects.locations.codeRepositoryIndexes.repositoryGroups.delete Stay organized with collections Save and categorize content based on your preferences.
- HTTP request DELETE https://cloudaicompanion.googleapis.com/v1/{name=projects/ /locations/ /codeRepositoryIndexes/ /repositoryGroups/ } The URL uses gRPC Transcoding syntax.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-30 UTC."],[],[]]
- IAM Permissions Requires the following IAM permission on the name resource: cloudaicompanion.repositoryGroups.delete For more information, see the IAM documentation .

### "Method: projects.locations.codeRepositoryIndexes.repositoryGroups.get \_\

- URL: [https://docs.cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.codeRepositoryIndexes.repositoryGroups/get](https://docs.cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.codeRepositoryIndexes.repositoryGroups/get)
- Source ID: `site-api-reference`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation AI and ML Gemini for Google Cloud API and references Send feedback Method: projects.locations.codeRepositoryIndexes.repositoryGroups.get Stay organized with collections Save and categorize content based on your preferences.
- HTTP request GET https://cloudaicompanion.googleapis.com/v1/{name=projects/ /locations/ /codeRepositoryIndexes/ /repositoryGroups/ } The URL uses gRPC Transcoding syntax.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-30 UTC."],[],[]]
- IAM Permissions Requires the following IAM permission on the name resource: cloudaicompanion.repositoryGroups.get For more information, see the IAM documentation .

