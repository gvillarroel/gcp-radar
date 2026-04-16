---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:13:34.796Z"
product_name: "Data Catalog"
product_slug: "data-catalog"
feature_name: "Data Catalog v1 API and interfaces"
feature_slug: "data-catalog-v1-api-and-interfaces"
latest_feature_date: "2020-04-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-datacatalog/latest/com.google.cloud.datacatalog.v1"
  - "https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.DataCatalogAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.DataCatalogClient"
  - "https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.pagers.SearchCatalogAsyncPager"
keywords:
  - "catalog"
  - "v1"
  - "api"
  - "and"
  - "interfaces"
  - "the"
  - "gcloud"
  - "commands"
---

# Data Catalog v1 API and interfaces

Product: Data Catalog
Coverage: MEDIUM

## Step 02 Summary

The Data Catalog v1 API, gcloud commands, and UI are available.

## Extended Definition

The Data Catalog v1 API, gcloud commands, and UI are available.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-datacatalog/latest/com.google.cloud.datacatalog.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-datacatalog/latest/com.google.cloud.datacatalog.v1)
- [https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.DataCatalogAsyncClient](https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.DataCatalogAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.DataCatalogClient](https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.DataCatalogClient)
- [https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.pagers.SearchCatalogAsyncPager](https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.pagers.SearchCatalogAsyncPager)

## Supporting Pages

### "Package com.google.cloud.datacatalog.v1 (1.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-datacatalog/latest/com.google.cloud.datacatalog.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-datacatalog/latest/com.google.cloud.datacatalog.v1)
- Source ID: `site-java-reference`
- Final score: 226
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Managing System This enum describes all the systems that manage Taxonomy and PolicyTag resources in DataCatalog. com. google. cloud. datacatalog. v1.
- Data Catalog API service allows you to discover, understand, and manage your data. com. google. cloud. datacatalog. v1.
- Data Catalog API service allows you to discover, understand, and manage your data. com. google. cloud. datacatalog. v1.
- Tag Field Contains the value and additional information on a field within a Tag . com. google. cloud. datacatalog. v1.

### "Class DataCatalogAsyncClient (3.29.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.DataCatalogAsyncClient](https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.DataCatalogAsyncClient)
- Source ID: `site-python-reference`
- Final score: 219
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import datacatalog v1 from google.iam.v1 import iam policy pb2 # type: ignore async def sample test iam permissions(): Create a client client = datacatalog v1 .
- DataCatalogAsyncClient () Initialize request argument(s) request = iam policy pb2.TestIamPermissionsRequest( resource="resource value", permissions=['permissions value1', 'permissions value2'], ) Make the request response = await client. test iam permissions (request=request) Handle the response print(response) Parameters Name Description request Optional[Union[ google.iam.v1.iam policy pb2.TestIamPermissionsRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import datacatalog v1 from google.iam.v1 import iam policy pb2 # type: ignore async def sample get iam policy(): Create a client client = datacatalog v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import datacatalog v1 from google.iam.v1 import iam policy pb2 # type: ignore async def sample set iam policy(): Create a client client = datacatalog v1 .

### "Class DataCatalogClient (3.29.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.DataCatalogClient](https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.DataCatalogClient)
- Source ID: `site-python-reference`
- Final score: 219
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import datacatalog v1 from google.iam.v1 import iam policy pb2 # type: ignore def sample test iam permissions(): Create a client client = datacatalog v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import datacatalog v1 from google.iam.v1 import iam policy pb2 # type: ignore def sample get iam policy(): Create a client client = datacatalog v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import datacatalog v1 from google.iam.v1 import iam policy pb2 # type: ignore def sample set iam policy(): Create a client client = datacatalog v1 .
- DataCatalogClient () Initialize request argument(s) request = iam policy pb2.TestIamPermissionsRequest( resource="resource value", permissions=['permissions value1', 'permissions value2'], ) Make the request response = client. test iam permissions (request=request) Handle the response print(response) Parameters Name Description request Union[ google.iam.v1.iam policy pb2.TestIamPermissionsRequest , dict] The request object.

### "Class SearchCatalogAsyncPager (3.29.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.pagers.SearchCatalogAsyncPager](https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.pagers.SearchCatalogAsyncPager)
- Source ID: `site-python-reference`
- Final score: 215
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.datacatalog v1.types.SearchCatalogRequest The initial request object. response google.cloud.datacatalog v1.types.SearchCatalogResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- If there are more pages, the aiter method will make additional SearchCatalog requests and continue to iterate through the results field on the corresponding responses.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
- Home Documentation Developer tools Python Client libraries Send feedback Class SearchCatalogAsyncPager (3.29.0) Stay organized with collections Save and categorize content based on your preferences.

