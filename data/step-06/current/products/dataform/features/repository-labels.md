---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T06:18:40.395Z"
product_name: "Dataform"
product_slug: "dataform"
feature_name: "Repository labels"
feature_slug: "repository-labels"
latest_feature_date: "2023-08-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataform/docs/create-repository"
  - "https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.pagers.FetchRepositoryHistoryAsyncPager"
  - "https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.pagers.FetchRepositoryHistoryPager"
keywords:
  - "repository"
  - "labels"
  - "add"
  - "label"
  - "to"
  - "the"
  - "dataform"
  - "resource"
---

# Repository labels

Product: Dataform
Coverage: LOW

## Step 02 Summary

Repository labels add label support to the Dataform Repository resource.

## Extended Definition

Repository labels add label support to the Dataform Repository resource.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataform/docs/create-repository](https://docs.cloud.google.com/dataform/docs/create-repository)
- [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.pagers.FetchRepositoryHistoryAsyncPager](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.pagers.FetchRepositoryHistoryAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.pagers.FetchRepositoryHistoryPager](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.pagers.FetchRepositoryHistoryPager)

## Supporting Pages

### Create a repository \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/create-repository](https://docs.cloud.google.com/dataform/docs/create-repository)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Important: To create a Dataform repository connected to a remote Git repository that is not allow-listed in the dataform.restrictGitRemotes policy, first add the remote Git repository to the allowedValues list in the policy, and then create a new Dataform repository and connect it to the remote repository.
- For more information, see Restrict remote repositories Required roles To get the permissions that you need to create and delete a repository, ask your administrator to grant you the following IAM roles on repositories: Dataform Admin ( roles/dataform.admin ) - the project Service Account User ( roles/iam.serviceAccountUser ) - the custom service account For more information about granting roles, see Manage access to projects, folders, and organizations .
- To let Dataform use your custom service account, the default Dataform service agent must have the following roles on the custom service account resource: Service Account Token Creator ( roles/iam.serviceAccountTokenCreator ) Service Account User ( roles/iam.serviceAccountUser ) To grant these roles, follow these steps: In the Google Cloud console, go to the IAM page.
- By default, Dataform uses a service agent or service account derived from your project number in the following format: service- PROJECT NUMBER @gcp-sa-dataform.iam.gserviceaccount.com You must use a custom service account to run workflows in your repository, but the default Dataform service agent is still used for all other repository operations.

### "Class FetchRepositoryHistoryAsyncPager (0.10.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.pagers.FetchRepositoryHistoryAsyncPager](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.pagers.FetchRepositoryHistoryAsyncPager)
- Source ID: `site-python-reference`
- Final score: 192
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.dataform v1.types.FetchRepositoryHistoryRequest The initial request object. response google.cloud.dataform v1.types.FetchRepositoryHistoryResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- If there are more pages, the aiter method will make additional FetchRepositoryHistory requests and continue to iterate through the commits field on the corresponding responses.
- FetchRepositoryHistoryResponse ], ], request : google . cloud . dataform v1 . types . dataform .
- FetchRepositoryHistoryResponse ], ], request : google . cloud . dataform v1 . types . dataform .

### "Class FetchRepositoryHistoryPager (0.10.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.pagers.FetchRepositoryHistoryPager](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.pagers.FetchRepositoryHistoryPager)
- Source ID: `site-python-reference`
- Final score: 192
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.dataform v1.types.FetchRepositoryHistoryRequest The initial request object. response google.cloud.dataform v1.types.FetchRepositoryHistoryResponse The initial response object. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- If there are more pages, the iter method will make additional FetchRepositoryHistory requests and continue to iterate through the commits field on the corresponding responses.
- FetchRepositoryHistoryResponse ], request : google . cloud . dataform v1 . types . dataform .
- FetchRepositoryHistoryResponse ], request : google . cloud . dataform v1 . types . dataform .

