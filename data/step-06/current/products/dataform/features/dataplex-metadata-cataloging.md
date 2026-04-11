---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T06:18:40.379Z"
product_name: "Dataform"
product_slug: "dataform"
feature_name: "Dataplex metadata cataloging"
feature_slug: "dataplex-metadata-cataloging"
latest_feature_date: "2025-07-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.pagers.FetchRepositoryHistoryAsyncPager"
  - "https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.pagers.FetchRepositoryHistoryPager"
  - "https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient"
keywords:
  - "dataplex"
  - "metadata"
  - "cataloging"
  - "automatically"
  - "catalogs"
  - "dataform"
  - "to"
  - "improve"
---

# Dataplex metadata cataloging

Product: Dataform
Coverage: LOW

## Step 02 Summary

Dataplex metadata cataloging automatically catalogs Dataform metadata to improve near real-time management and search of repository metadata.

## Extended Definition

Dataplex metadata cataloging automatically catalogs Dataform metadata to improve near real-time management and search of repository metadata.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.pagers.FetchRepositoryHistoryAsyncPager](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.pagers.FetchRepositoryHistoryAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.pagers.FetchRepositoryHistoryPager](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.pagers.FetchRepositoryHistoryPager)
- [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient)

## Supporting Pages

### "Class FetchRepositoryHistoryAsyncPager (0.10.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.pagers.FetchRepositoryHistoryAsyncPager](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.pagers.FetchRepositoryHistoryAsyncPager)
- Source ID: `site-python-reference`
- Final score: 142
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.dataform v1.types.FetchRepositoryHistoryRequest The initial request object. response google.cloud.dataform v1.types.FetchRepositoryHistoryResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- FetchRepositoryHistoryResponse ], ], request : google . cloud . dataform v1 . types . dataform .
- FetchRepositoryHistoryResponse ], ], request : google . cloud . dataform v1 . types . dataform .
- FetchRepositoryHistoryRequest , response : google . cloud . dataform v1 . types . dataform .

### "Class FetchRepositoryHistoryPager (0.10.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.pagers.FetchRepositoryHistoryPager](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.pagers.FetchRepositoryHistoryPager)
- Source ID: `site-python-reference`
- Final score: 142
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.dataform v1.types.FetchRepositoryHistoryRequest The initial request object. response google.cloud.dataform v1.types.FetchRepositoryHistoryResponse The initial response object. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- FetchRepositoryHistoryResponse ], request : google . cloud . dataform v1 . types . dataform .
- FetchRepositoryHistoryResponse ], request : google . cloud . dataform v1 . types . dataform .
- FetchRepositoryHistoryRequest , response : google . cloud . dataform v1 . types . dataform .

### "Class DataformAsyncClient (0.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient)
- Source ID: `site-python-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- CommitRepositoryChangesRequest ( name="name value", commit metadata=commit metadata, ) Make the request response = await client. commit repository changes (request=request) Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.dataform v1.types.CommitRepositoryChangesRequest , dict]] The request object.
- Returns Type Description google.cloud.dataform v1.types.CommitWorkspaceChangesResponse CommitWorkspaceChanges response message. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. compilation result path compilation result path ( project : str , location : str , repository : str , compilation result : str ) - > str Returns a fully-qualified compilation result string. compute repository access token status compute repository access token status ( request : typing .
- Returns Type Description google.cloud.dataform v1.types.WorkflowConfig Represents a Dataform workflow configuration. workflow config path workflow config path ( project : str , location : str , repository : str , workflow config : str ) - > str Returns a fully-qualified workflow config string. workflow invocation path workflow invocation path ( project : str , location : str , repository : str , workflow invocation : str ) - > str Returns a fully-qualified workflow invocation string. workspace path workspace path ( project : str , location : str , repository : str , workspace : str ) - > str Returns a fully-qualified workspace string. write file write file ( request : typing .
- Can be in the format of: "" to move into the root User folder, projects/ /locations/ /folders/ , projects//locations/ /teamFolders/ This corresponds to the destination containing folder field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

