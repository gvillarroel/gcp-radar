---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:45.376Z"
product_name: "Cloud Data Fusion"
product_slug: "cloud-data-fusion"
feature_name: "Cloud Data Fusion 6.11.0 high availability upgrades"
feature_slug: "cloud-data-fusion-6-11-0-high-availability-upgrades"
latest_feature_date: "2025-03-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/data-fusion/docs/concepts/available-upgrades"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListAvailableVersionsFixedSizeCollection"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListAvailableVersionsPage"
keywords:
  - "fusion"
  - "11"
  - "high"
  - "availability"
  - "upgrades"
  - "version"
  - "introduces"
  - "reduced"
---

# Cloud Data Fusion 6.11.0 high availability upgrades

Product: Cloud Data Fusion
Coverage: MEDIUM

## Step 02 Summary

Cloud Data Fusion version 6.11.0 introduces high availability with reduced downtime during upgrades.

## Extended Definition

Cloud Data Fusion version 6.11.0 introduces high availability with reduced downtime during upgrades.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/data-fusion/docs/concepts/available-upgrades](https://docs.cloud.google.com/data-fusion/docs/concepts/available-upgrades)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListAvailableVersionsFixedSizeCollection](https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListAvailableVersionsFixedSizeCollection)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListAvailableVersionsPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListAvailableVersionsPage)

## Supporting Pages

### Available upgrades \_|\_ Cloud Data Fusion \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/data-fusion/docs/concepts/available-upgrades](https://docs.cloud.google.com/data-fusion/docs/concepts/available-upgrades)
- Source ID: `site-iam-reference`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Data Fusion supports the following version upgrades: Your Cloud Data Fusion version Available upgrades 6.11.0 6.11.1 (latest) 6.10.1 6.11.1 6.10.0 6.10.1, 6.11.1 6.9.2 6.10.1, 6.11.1 6.9.1 6.9.2 6.8.3 6.9.2, 6.10.1, 6.11.1 6.8.2 6.8.3 6.8.1 6.8.3 6.8.0 6.8.3 6.7.3 6.9.2, 6.10.1, 6.11.1 6.7.2 6.7.3 6.7.1 6.7.3 6.7.0 6.7.3 6.6.0 6.9.2, 6.10.1, 6.11.1 6.5.1 6.9.2, 6.10.1, 6.11.1 6.5.0 6.5.1 6.4.1 6.9.2, 6.10.1, 6.11.1 6.4.0 6.4.1 6.3.1 6.9.2, 6.10.1, 6.11.1 6.3.0 6.3.1 6.2.3 6.9.2, 6.10.1, 6.11.1 6.2.2 6.2.3 6.2.1 6.2.3 6.2.0 6.2.3 6.1.4 6.9.2, 6.10.1, 6.11.1 6.1.3 6.1.4, 6.3.1 6.1.2 6.1.4 Available patch revisions When you upgrade an instance, use the latest revision of Cloud Data Fusion version, so that your instances have the necessary fixes.
- Available version upgrades for instances and pipelines When upgrading, use the latest version of Cloud Data Fusion so that your instances run in a supported environment as long as possible.
- This page describes the available version upgrades for Cloud Data Fusion instances and pipelines.
- Cloud Data Fusion supports the following patch revisions: Your Cloud Data Fusion version Latest patch revision 6.11.1 6.11.1.2 6.10.1 6.10.1.2 6.9.2 6.9.2.4 6.8.3 6.8.3.1 6.7.3 6.7.3.1 What's next Manage patch revisions for Cloud Data Fusion instances.

### "Class DataFusionClient.ListAvailableVersionsFixedSizeCollection (1.88.0)\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListAvailableVersionsFixedSizeCollection](https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListAvailableVersionsFixedSizeCollection)
- Source ID: `site-java-reference`
- Final score: 66
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
- Final score: 66
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ListAvailableVersionsPage > Inheritance java.lang.Object > AbstractPage > DataFusionClient.ListAvailableVersionsPage Inherited Members AbstractPage.createPage(PageContext<RequestT,ResponseT,ResourceT>,ResponseT) AbstractPage.createPageAsync(PageContext<RequestT,ResponseT,ResourceT>,ApiFuture<ResponseT>) AbstractPage.getNextPage() AbstractPage.getNextPage(int) AbstractPage.getNextPageAsync() AbstractPage.getNextPageToken() AbstractPage.getPageElementCount() AbstractPage.getRequest() AbstractPage.getResponse() AbstractPage.getValues() AbstractPage.hasNextPage() AbstractPage.iterateAll() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods createPage(PageContext<ListAvailableVersionsRequest,ListAvailableVersionsResponse,Version> context, ListAvailableVersionsResponse response) protected DataFusionClient .
- ListAvailableVersionsPage createPage ( PageContext<ListAvailableVersionsRequest , ListAvailableVersionsResponse , Version > context , ListAvailableVersionsResponse response ) Parameters Name Description context PageContext < ListAvailableVersionsRequest , ListAvailableVersionsResponse , Version > response ListAvailableVersionsResponse Returns Type Description DataFusionClient.ListAvailableVersionsPage Overrides AbstractPage<RequestT,ResponseT,ResourceT,PageT>.createPage(PageContext<RequestT,ResponseT,ResourceT> context, ResponseT response) createPageAsync(PageContext<ListAvailableVersionsRequest,ListAvailableVersionsResponse,Version> context, ApiFuture<ListAvailableVersionsResponse> futureResponse) public ApiFuture<DataFusionClient .
- Home Documentation Developer tools Java Client libraries Send feedback Class DataFusionClient.ListAvailableVersionsPage (1.88.0) Stay organized with collections Save and categorize content based on your preferences.
- ListAvailableVersionsPage extends AbstractPage<ListAvailableVersionsRequest , ListAvailableVersionsResponse , Version , DataFusionClient .

