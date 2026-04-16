---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:45.387Z"
product_name: "Cloud Data Fusion"
product_slug: "cloud-data-fusion"
feature_name: "Cloud Data Fusion version 6.8 support deprecation"
feature_slug: "cloud-data-fusion-version-6-8-support-deprecation"
latest_feature_date: "2024-09-01"
deprecation_date: "2024-09-01"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListAvailableVersionsFixedSizeCollection"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListAvailableVersionsPage"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListAvailableVersionsPagedResponse"
keywords:
  - "fusion"
  - "version"
  - "deprecation"
  - "has"
  - "been"
  - "discontinued"
  - "users"
  - "advised"
---

# Cloud Data Fusion version 6.8 support deprecation

Product: Cloud Data Fusion
Coverage: MEDIUM

## Step 02 Summary

Support for Cloud Data Fusion version 6.8 has been discontinued, and users are advised to upgrade to supported versions; deprecated on 2024-09-01.

## Extended Definition

Support for Cloud Data Fusion version 6.8 has been discontinued, and users are advised to upgrade to supported versions; deprecated on 2024-09-01.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListAvailableVersionsFixedSizeCollection](https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListAvailableVersionsFixedSizeCollection)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListAvailableVersionsPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListAvailableVersionsPage)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListAvailableVersionsPagedResponse](https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListAvailableVersionsPagedResponse)

## Supporting Pages

### "Class DataFusionClient.ListAvailableVersionsFixedSizeCollection (1.88.0)\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListAvailableVersionsFixedSizeCollection](https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListAvailableVersionsFixedSizeCollection)
- Source ID: `site-java-reference`
- Final score: 69
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ListAvailableVersionsFixedSizeCollection > Inheritance java.lang.Object > AbstractFixedSizeCollection > DataFusionClient.ListAvailableVersionsFixedSizeCollection Inherited Members AbstractFixedSizeCollection.createCollection(List<PageT>,int) AbstractFixedSizeCollection.getCollectionSize() AbstractFixedSizeCollection.getNextCollection() AbstractFixedSizeCollection.getNextPageToken() AbstractFixedSizeCollection.getValues() AbstractFixedSizeCollection.hasNextCollection() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods createCollection(List<DataFusionClient.ListAvailableVersionsPage> pages, int collectionSize) protected DataFusionClient .
- ListAvailableVersionsPage > pages , int collectionSize ) Parameters Name Description pages List < ListAvailableVersionsPage > collectionSize int Returns Type Description DataFusionClient.ListAvailableVersionsFixedSizeCollection Overrides AbstractFixedSizeCollection<RequestT,ResponseT,ResourceT,PageT,CollectionT>.createCollection(List<PageT> pages, int collectionSize) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Developer tools Java Client libraries Send feedback Class DataFusionClient.ListAvailableVersionsFixedSizeCollection (1.88.0) Stay organized with collections Save and categorize content based on your preferences.
- ListAvailableVersionsFixedSizeCollection extends AbstractFixedSizeCollection<ListAvailableVersionsRequest , ListAvailableVersionsResponse , Version , DataFusionClient .

### "Class DataFusionClient.ListAvailableVersionsPage (1.88.0) \_|\_ Java client\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListAvailableVersionsPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListAvailableVersionsPage)
- Source ID: `site-java-reference`
- Final score: 69
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ListAvailableVersionsPage > Inheritance java.lang.Object > AbstractPage > DataFusionClient.ListAvailableVersionsPage Inherited Members AbstractPage.createPage(PageContext<RequestT,ResponseT,ResourceT>,ResponseT) AbstractPage.createPageAsync(PageContext<RequestT,ResponseT,ResourceT>,ApiFuture<ResponseT>) AbstractPage.getNextPage() AbstractPage.getNextPage(int) AbstractPage.getNextPageAsync() AbstractPage.getNextPageToken() AbstractPage.getPageElementCount() AbstractPage.getRequest() AbstractPage.getResponse() AbstractPage.getValues() AbstractPage.hasNextPage() AbstractPage.iterateAll() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods createPage(PageContext<ListAvailableVersionsRequest,ListAvailableVersionsResponse,Version> context, ListAvailableVersionsResponse response) protected DataFusionClient .
- ListAvailableVersionsPage createPage ( PageContext<ListAvailableVersionsRequest , ListAvailableVersionsResponse , Version > context , ListAvailableVersionsResponse response ) Parameters Name Description context PageContext < ListAvailableVersionsRequest , ListAvailableVersionsResponse , Version > response ListAvailableVersionsResponse Returns Type Description DataFusionClient.ListAvailableVersionsPage Overrides AbstractPage<RequestT,ResponseT,ResourceT,PageT>.createPage(PageContext<RequestT,ResponseT,ResourceT> context, ResponseT response) createPageAsync(PageContext<ListAvailableVersionsRequest,ListAvailableVersionsResponse,Version> context, ApiFuture<ListAvailableVersionsResponse> futureResponse) public ApiFuture<DataFusionClient .
- Home Documentation Developer tools Java Client libraries Send feedback Class DataFusionClient.ListAvailableVersionsPage (1.88.0) Stay organized with collections Save and categorize content based on your preferences.
- ListAvailableVersionsPage extends AbstractPage<ListAvailableVersionsRequest , ListAvailableVersionsResponse , Version , DataFusionClient .

### "Class DataFusionClient.ListAvailableVersionsPagedResponse (1.88.0) \_|\_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListAvailableVersionsPagedResponse](https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListAvailableVersionsPagedResponse)
- Source ID: `site-java-reference`
- Final score: 69
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ListAvailableVersionsFixedSizeCollection > Inheritance java.lang.Object > AbstractPagedListResponse > DataFusionClient.ListAvailableVersionsPagedResponse Inherited Members AbstractPagedListResponse.expandToFixedSizeCollection(int) AbstractPagedListResponse.getNextPageToken() AbstractPagedListResponse.getPage() AbstractPagedListResponse.iterateAll() AbstractPagedListResponse.iterateFixedSizeCollections(int) AbstractPagedListResponse.iteratePages() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Static Methods createAsync(PageContext<ListAvailableVersionsRequest,ListAvailableVersionsResponse,Version> context, ApiFuture<ListAvailableVersionsResponse> futureResponse) public static ApiFuture<DataFusionClient .
- Home Documentation Developer tools Java Client libraries Send feedback Class DataFusionClient.ListAvailableVersionsPagedResponse (1.88.0) Stay organized with collections Save and categorize content based on your preferences.
- ListAvailableVersionsPagedResponse extends AbstractPagedListResponse<ListAvailableVersionsRequest , ListAvailableVersionsResponse , Version , DataFusionClient .
- ListAvailableVersionsPage , DataFusionClient .

