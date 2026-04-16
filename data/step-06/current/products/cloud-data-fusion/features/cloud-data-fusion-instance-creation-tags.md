---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:45.374Z"
product_name: "Cloud Data Fusion"
product_slug: "cloud-data-fusion"
feature_name: "Cloud Data Fusion instance creation tags"
feature_slug: "cloud-data-fusion-instance-creation-tags"
latest_feature_date: "2025-07-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/data-fusion/docs/how-to/create-instance"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListInstancesFixedSizeCollection"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListInstancesPage"
keywords:
  - "fusion"
  - "instance"
  - "creation"
  - "tags"
  - "now"
  - "allows"
  - "attaching"
  - "instances"
---

# Cloud Data Fusion instance creation tags

Product: Cloud Data Fusion
Coverage: MEDIUM

## Step 02 Summary

Cloud Data Fusion now allows attaching tags to instances during instance creation for immediate metadata, organization, and policy automation.

## Extended Definition

Cloud Data Fusion now allows attaching tags to instances during instance creation for immediate metadata, organization, and policy automation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/data-fusion/docs/how-to/create-instance](https://docs.cloud.google.com/data-fusion/docs/how-to/create-instance)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListInstancesFixedSizeCollection](https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListInstancesFixedSizeCollection)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListInstancesPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListInstancesPage)

## Supporting Pages

### Create a public instance \_|\_ Cloud Data Fusion \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/data-fusion/docs/how-to/create-instance](https://docs.cloud.google.com/data-fusion/docs/how-to/create-instance)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- API Create an instance: To create a Cloud Data Fusion instance with the Cloud Data Fusion REST API , construct an instances.create API request, filling in the Instance resource with your configuration information.
- Console If the API is enabled , the Cloud Data Fusion section in the Google Cloud console shows an Instances page, where you can create and manage your Cloud Data Fusion instances.
- While Cloud Data Fusion creates your instance, a progress wheel displays next to the instance name on the Instances page.
- The following permission is required to create Cloud Data Fusion instances: instances.create .

### "Class DataFusionClient.ListInstancesFixedSizeCollection (1.88.0) \_|\_ Java\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListInstancesFixedSizeCollection](https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListInstancesFixedSizeCollection)
- Source ID: `site-java-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- ListInstancesFixedSizeCollection > Inheritance java.lang.Object > AbstractFixedSizeCollection > DataFusionClient.ListInstancesFixedSizeCollection Inherited Members AbstractFixedSizeCollection.createCollection(List<PageT>,int) AbstractFixedSizeCollection.getCollectionSize() AbstractFixedSizeCollection.getNextCollection() AbstractFixedSizeCollection.getNextPageToken() AbstractFixedSizeCollection.getValues() AbstractFixedSizeCollection.hasNextCollection() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods createCollection(List<DataFusionClient.ListInstancesPage> pages, int collectionSize) protected DataFusionClient .
- ListInstancesPage > pages , int collectionSize ) Parameters Name Description pages List < ListInstancesPage > collectionSize int Returns Type Description DataFusionClient.ListInstancesFixedSizeCollection Overrides AbstractFixedSizeCollection<RequestT,ResponseT,ResourceT,PageT,CollectionT>.createCollection(List<PageT> pages, int collectionSize) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Developer tools Java Client libraries Send feedback Class DataFusionClient.ListInstancesFixedSizeCollection (1.88.0) Stay organized with collections Save and categorize content based on your preferences.
- ListInstancesFixedSizeCollection extends AbstractFixedSizeCollection<ListInstancesRequest , ListInstancesResponse , Instance , DataFusionClient .

### "Class DataFusionClient.ListInstancesPage (1.88.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListInstancesPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-data-fusion/latest/com.google.cloud.datafusion.v1.DataFusionClient.ListInstancesPage)
- Source ID: `site-java-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- ListInstancesPage > Inheritance java.lang.Object > AbstractPage > DataFusionClient.ListInstancesPage Inherited Members AbstractPage.createPage(PageContext<RequestT,ResponseT,ResourceT>,ResponseT) AbstractPage.createPageAsync(PageContext<RequestT,ResponseT,ResourceT>,ApiFuture<ResponseT>) AbstractPage.getNextPage() AbstractPage.getNextPage(int) AbstractPage.getNextPageAsync() AbstractPage.getNextPageToken() AbstractPage.getPageElementCount() AbstractPage.getRequest() AbstractPage.getResponse() AbstractPage.getValues() AbstractPage.hasNextPage() AbstractPage.iterateAll() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods createPage(PageContext<ListInstancesRequest,ListInstancesResponse,Instance> context, ListInstancesResponse response) protected DataFusionClient .
- ListInstancesPage createPage ( PageContext<ListInstancesRequest , ListInstancesResponse , Instance > context , ListInstancesResponse response ) Parameters Name Description context PageContext < ListInstancesRequest , ListInstancesResponse , Instance > response ListInstancesResponse Returns Type Description DataFusionClient.ListInstancesPage Overrides AbstractPage<RequestT,ResponseT,ResourceT,PageT>.createPage(PageContext<RequestT,ResponseT,ResourceT> context, ResponseT response) createPageAsync(PageContext<ListInstancesRequest,ListInstancesResponse,Instance> context, ApiFuture<ListInstancesResponse> futureResponse) public ApiFuture<DataFusionClient .
- Home Documentation Developer tools Java Client libraries Send feedback Class DataFusionClient.ListInstancesPage (1.88.0) Stay organized with collections Save and categorize content based on your preferences.
- ListInstancesPage extends AbstractPage<ListInstancesRequest , ListInstancesResponse , Instance , DataFusionClient .

