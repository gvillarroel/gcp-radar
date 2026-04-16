---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:13:35.140Z"
product_name: "Database Center"
product_slug: "database-center"
feature_name: "All Resources page"
feature_slug: "all-resources-page"
latest_feature_date: "2024-07-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterClient"
  - "https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterAsyncClient"
  - "https://docs.cloud.google.com/database-center/docs/view-filter-database-fleet-health-information"
  - "https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.pagers.QueryDatabaseResourceGroupsAsyncPager"
keywords:
  - "all"
  - "resources"
  - "page"
  - "database"
  - "center"
  - "provides"
  - "dedicated"
  - "for"
---

# All Resources page

Product: Database Center
Coverage: MEDIUM

## Step 02 Summary

Database Center provides a dedicated All Resources page for database resources with additional metadata columns.

## Extended Definition

Database Center provides a dedicated All Resources page for database resources with additional metadata columns.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterClient)
- [https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterAsyncClient)
- [https://docs.cloud.google.com/database-center/docs/view-filter-database-fleet-health-information](https://docs.cloud.google.com/database-center/docs/view-filter-database-fleet-health-information)
- [https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.pagers.QueryDatabaseResourceGroupsAsyncPager](https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.pagers.QueryDatabaseResourceGroupsAsyncPager)

## Supporting Pages

### "Class DatabaseCenterClient (0.7.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterClient)
- Source ID: `site-python-reference`
- Final score: 303
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- QueryProductsPager ) QueryProducts provides a list of all possible products which can be used to filter database resources.
- Returns Type Description google.cloud.databasecenter v1beta.types.AggregateIssueStatsResponse The response message containing one of more group of relevant health issues for database resources. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. from service account file from service account file ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- QueryDatabaseResourceGroupsRequest ( parent="parent value", ) Make the request page result = client. query database resource groups (request=request) Handle the response for response in page result: print(response) Parameters Name Description request Union[ google.cloud.databasecenter v1beta.types.QueryDatabaseResourceGroupsRequest , dict] The request object.
- AggregateFleetRequest ( parent="parent value", ) Make the request page result = client. aggregate fleet (request=request) Handle the response for response in page result: print(response) Parameters Name Description request Union[ google.cloud.databasecenter v1beta.types.AggregateFleetRequest , dict] The request object.

### "Class DatabaseCenterAsyncClient (0.7.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterAsyncClient)
- Source ID: `site-python-reference`
- Final score: 299
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- QueryProductsAsyncPager ) QueryProducts provides a list of all possible products which can be used to filter database resources.
- Returns Type Description google.cloud.databasecenter v1beta.types.AggregateIssueStatsResponse The response message containing one of more group of relevant health issues for database resources. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. from service account file from service account file ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- QueryDatabaseResourceGroupsRequest ( parent="parent value", ) Make the request page result = client. query database resource groups (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.databasecenter v1beta.types.QueryDatabaseResourceGroupsRequest , dict]] The request object.
- AggregateFleetRequest ( parent="parent value", ) Make the request page result = client. aggregate fleet (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.databasecenter v1beta.types.AggregateFleetRequest , dict]] The request object.

### "View and filter database fleet health information \_|\_ Database Center\

- URL: [https://docs.cloud.google.com/database-center/docs/view-filter-database-fleet-health-information](https://docs.cloud.google.com/database-center/docs/view-filter-database-fleet-health-information)
- Source ID: `site-docs-root`
- Final score: 285
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Your filtering choices apply to the Overview and All Resources pages on the Database Center dashboard.
- To view the number of database resources added to your database fleet in the last seven days, follow these steps: Go to the Database Center page in the Google Cloud console.
- This page shows you how to view and filter database fleet inventory and health issue information on your Database Center dashboard.
- To filter your database resources, follow these steps: In the Google Cloud console, go to the Database Center Overview page.

### "Class QueryDatabaseResourceGroupsAsyncPager (0.7.0) \_|\_ Python client\

- URL: [https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.pagers.QueryDatabaseResourceGroupsAsyncPager](https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.pagers.QueryDatabaseResourceGroupsAsyncPager)
- Source ID: `site-python-reference`
- Final score: 274
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.databasecenter v1beta.types.QueryDatabaseResourceGroupsRequest The initial request object. response google.cloud.databasecenter v1beta.types.QueryDatabaseResourceGroupsResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Union [ str , bytes ]]] = () ) A pager for iterating through query database resource groups requests.
- All the usual QueryDatabaseResourceGroupsResponse attributes are available on the pager.
- Home Documentation Developer tools Python Client libraries Send feedback Class QueryDatabaseResourceGroupsAsyncPager (0.7.0) Stay organized with collections Save and categorize content based on your preferences.

