---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:13:35.140Z"
product_name: "Database Center"
product_slug: "database-center"
feature_name: "Additional resource metadata"
feature_slug: "additional-resource-metadata"
latest_feature_date: "2024-07-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterClient"
  - "https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.pagers.QueryDatabaseResourceGroupsAsyncPager"
  - "https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.pagers.QueryDatabaseResourceGroupsPager"
keywords:
  - "additional"
  - "resource"
  - "metadata"
  - "database"
  - "center"
  - "displays"
  - "machine"
  - "configuration"
---

# Additional resource metadata

Product: Database Center
Coverage: MEDIUM

## Step 02 Summary

Database Center displays machine configuration and utilization metrics as additional metadata for database resources.

## Extended Definition

Database Center displays machine configuration and utilization metrics as additional metadata for database resources.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterClient)
- [https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.pagers.QueryDatabaseResourceGroupsAsyncPager](https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.pagers.QueryDatabaseResourceGroupsAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.pagers.QueryDatabaseResourceGroupsPager](https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.pagers.QueryDatabaseResourceGroupsPager)

## Supporting Pages

### "Class DatabaseCenterAsyncClient (0.7.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterAsyncClient)
- Source ID: `site-python-reference`
- Final score: 255
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Returns Type Description google.cloud.databasecenter v1beta.types.AggregateIssueStatsResponse The response message containing one of more group of relevant health issues for database resources. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. from service account file from service account file ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import databasecenter v1beta async def sample query database resource groups(): Create a client client = databasecenter v1beta .
- QueryDatabaseResourceGroupsRequest ( parent="parent value", ) Make the request page result = client. query database resource groups (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.databasecenter v1beta.types.QueryDatabaseResourceGroupsRequest , dict]] The request object.
- QueryDatabaseResourceGroupsRequest is the request to get a list of database groups. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

### "Class DatabaseCenterClient (0.7.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterClient)
- Source ID: `site-python-reference`
- Final score: 255
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Returns Type Description google.cloud.databasecenter v1beta.types.AggregateIssueStatsResponse The response message containing one of more group of relevant health issues for database resources. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. from service account file from service account file ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import databasecenter v1beta def sample query database resource groups(): Create a client client = databasecenter v1beta .
- QueryDatabaseResourceGroupsRequest ( parent="parent value", ) Make the request page result = client. query database resource groups (request=request) Handle the response for response in page result: print(response) Parameters Name Description request Union[ google.cloud.databasecenter v1beta.types.QueryDatabaseResourceGroupsRequest , dict] The request object.
- QueryDatabaseResourceGroupsRequest is the request to get a list of database groups. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

### "Class QueryDatabaseResourceGroupsAsyncPager (0.7.0) \_|\_ Python client\

- URL: [https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.pagers.QueryDatabaseResourceGroupsAsyncPager](https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.pagers.QueryDatabaseResourceGroupsAsyncPager)
- Source ID: `site-python-reference`
- Final score: 245
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.databasecenter v1beta.types.QueryDatabaseResourceGroupsRequest The initial request object. response google.cloud.databasecenter v1beta.types.QueryDatabaseResourceGroupsResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- If there are more pages, the aiter method will make additional QueryDatabaseResourceGroups requests and continue to iterate through the resource groups field on the corresponding responses.
- QueryDatabaseResourceGroupsResponse ], ], request : google . cloud . databasecenter v1beta . types . service .
- QueryDatabaseResourceGroupsResponse ], ], request : google . cloud . databasecenter v1beta . types . service .

### "Class QueryDatabaseResourceGroupsPager (0.7.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.pagers.QueryDatabaseResourceGroupsPager](https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.pagers.QueryDatabaseResourceGroupsPager)
- Source ID: `site-python-reference`
- Final score: 245
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.databasecenter v1beta.types.QueryDatabaseResourceGroupsRequest The initial request object. response google.cloud.databasecenter v1beta.types.QueryDatabaseResourceGroupsResponse The initial response object. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- If there are more pages, the iter method will make additional QueryDatabaseResourceGroups requests and continue to iterate through the resource groups field on the corresponding responses.
- QueryDatabaseResourceGroupsResponse , ], request : google . cloud . databasecenter v1beta . types . service .
- QueryDatabaseResourceGroupsResponse , ], request : google . cloud . databasecenter v1beta . types . service .

