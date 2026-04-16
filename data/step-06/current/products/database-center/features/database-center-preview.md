---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:13:35.141Z"
product_name: "Database Center"
product_slug: "database-center"
feature_name: "Database Center preview"
feature_slug: "database-center-preview"
latest_feature_date: "2024-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.pagers.QueryDatabaseResourceGroupsAsyncPager"
  - "https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterClient"
  - "https://docs.cloud.google.com/database-center/docs/analyze-database-using-gemini"
keywords:
  - "database"
  - "center"
  - "preview"
  - "became"
  - "available"
  - "in"
  - "as"
  - "part"
---

# Database Center preview

Product: Database Center
Coverage: MEDIUM

## Step 02 Summary

Database Center became available in Preview as part of Gemini in Databases with support for Cloud SQL and AlloyDB for PostgreSQL.

## Extended Definition

Database Center became available in Preview as part of Gemini in Databases with support for Cloud SQL and AlloyDB for PostgreSQL.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.pagers.QueryDatabaseResourceGroupsAsyncPager](https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.pagers.QueryDatabaseResourceGroupsAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterClient)
- [https://docs.cloud.google.com/database-center/docs/analyze-database-using-gemini](https://docs.cloud.google.com/database-center/docs/analyze-database-using-gemini)

## Supporting Pages

### "Class DatabaseCenterAsyncClient (0.7.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterAsyncClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterAsyncClient)
- Source ID: `site-python-reference`
- Final score: 326
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Returns Type Description google.cloud.databasecenter v1beta.types.AggregateIssueStatsResponse The response message containing one of more group of relevant health issues for database resources. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. from service account file from service account file ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import databasecenter v1beta async def sample query database resource groups(): Create a client client = databasecenter v1beta .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import databasecenter v1beta async def sample aggregate issue stats(): Create a client client = databasecenter v1beta .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import databasecenter v1beta async def sample aggregate fleet(): Create a client client = databasecenter v1beta .

### "Class QueryDatabaseResourceGroupsAsyncPager (0.7.0) \_|\_ Python client\

- URL: [https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.pagers.QueryDatabaseResourceGroupsAsyncPager](https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.pagers.QueryDatabaseResourceGroupsAsyncPager)
- Source ID: `site-python-reference`
- Final score: 306
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.databasecenter v1beta.types.QueryDatabaseResourceGroupsRequest The initial request object. response google.cloud.databasecenter v1beta.types.QueryDatabaseResourceGroupsResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- If there are more pages, the aiter method will make additional QueryDatabaseResourceGroups requests and continue to iterate through the resource groups field on the corresponding responses.
- This class thinly wraps an initial QueryDatabaseResourceGroupsResponse object, and provides an aiter method to iterate through its resource groups field.
- QueryDatabaseResourceGroupsResponse ], ], request : google . cloud . databasecenter v1beta . types . service .

### "Class DatabaseCenterClient (0.7.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterClient)
- Source ID: `site-python-reference`
- Final score: 302
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Returns Type Description google.cloud.databasecenter v1beta.types.AggregateIssueStatsResponse The response message containing one of more group of relevant health issues for database resources. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. from service account file from service account file ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import databasecenter v1beta def sample query database resource groups(): Create a client client = databasecenter v1beta .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import databasecenter v1beta def sample aggregate issue stats(): Create a client client = databasecenter v1beta .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import databasecenter v1beta def sample aggregate fleet(): Create a client client = databasecenter v1beta .

### "Analyze database fleet health using Gemini \_|\_ Database Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/database-center/docs/analyze-database-using-gemini](https://docs.cloud.google.com/database-center/docs/analyze-database-using-gemini)
- Source ID: `site-docs-root`
- Final score: 294
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can use Database Center to learn more about your database fleet health by prompting Gemini to answer questions about the following: Database fleet inventory information Database fleet health Database configuration best practices The following are example prompts to help you learn about your database fleet inventory data: "How many PostgreSQL instances do I have in Tokyo?" "How many of my database resources are not NIST 800-53 compliant?" "Why is it an issue that my database is exposed to ownership chaining?" "Why is it an issue that my database is not logging only DDL statements?" Note: Gemini provides query suggestions and health issues based on all instances and databases in your project.
- Home Documentation Databases Database Center Guides Send feedback Analyze database fleet health using Gemini Stay organized with collections Save and categorize content based on your preferences.
- Analyze your database fleet health In the Google Cloud console, go to the Database Center page.
- Before you begin Ensure that Database Center is set up for your organization .

