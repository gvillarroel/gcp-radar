---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:03:36.816Z"
product_name: "App Hub"
product_slug: "app-hub"
feature_name: "Dataproc Metastore services generally available in App Hub"
feature_slug: "dataproc-metastore-services-generally-available-in-app-hub"
latest_feature_date: "2025-07-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListDiscoveredServicesFixedSizeCollection"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListDiscoveredServicesPage"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListDiscoveredServicesPagedResponse"
keywords:
  - "metastore"
  - "dataproc"
  - "generally"
  - "available"
  - "services"
  - "app"
  - "hub"
  - "in"
---

# Dataproc Metastore services generally available in App Hub

Product: App Hub
Coverage: LOW

## Step 02 Summary

Dataproc Metastore services are now generally available as supported resources in App Hub.

## Extended Definition

Dataproc Metastore services are now generally available as supported resources in App Hub.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListDiscoveredServicesFixedSizeCollection](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListDiscoveredServicesFixedSizeCollection)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListDiscoveredServicesPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListDiscoveredServicesPage)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListDiscoveredServicesPagedResponse](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListDiscoveredServicesPagedResponse)

## Supporting Pages

### "Class AppHubClient.ListDiscoveredServicesFixedSizeCollection (0.52.0) \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListDiscoveredServicesFixedSizeCollection](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListDiscoveredServicesFixedSizeCollection)
- Source ID: `site-java-reference`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- ListDiscoveredServicesFixedSizeCollection > Inheritance java.lang.Object > AbstractFixedSizeCollection > AppHubClient.ListDiscoveredServicesFixedSizeCollection Inherited Members AbstractFixedSizeCollection.createCollection(List<PageT>,int) AbstractFixedSizeCollection.getCollectionSize() AbstractFixedSizeCollection.getNextCollection() AbstractFixedSizeCollection.getNextPageToken() AbstractFixedSizeCollection.getValues() AbstractFixedSizeCollection.hasNextCollection() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods createCollection(List<AppHubClient.ListDiscoveredServicesPage> pages, int collectionSize) protected AppHubClient .
- ListDiscoveredServicesPage > pages , int collectionSize ) Parameters Name Description pages List < ListDiscoveredServicesPage > collectionSize int Returns Type Description AppHubClient.ListDiscoveredServicesFixedSizeCollection Overrides AbstractFixedSizeCollection<RequestT,ResponseT,ResourceT,PageT,CollectionT>.createCollection(List<PageT> pages, int collectionSize) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Developer tools Java Client libraries Send feedback Class AppHubClient.ListDiscoveredServicesFixedSizeCollection (0.52.0) Stay organized with collections Save and categorize content based on your preferences.
- ListDiscoveredServicesFixedSizeCollection extends AbstractFixedSizeCollection<ListDiscoveredServicesRequest , ListDiscoveredServicesResponse , DiscoveredService , AppHubClient .

### "Class AppHubClient.ListDiscoveredServicesPage (0.52.0) \_|\_ Java client\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListDiscoveredServicesPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListDiscoveredServicesPage)
- Source ID: `site-java-reference`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- ListDiscoveredServicesPage > Inheritance java.lang.Object > AbstractPage > AppHubClient.ListDiscoveredServicesPage Inherited Members AbstractPage.createPage(PageContext<RequestT,ResponseT,ResourceT>,ResponseT) AbstractPage.createPageAsync(PageContext<RequestT,ResponseT,ResourceT>,ApiFuture<ResponseT>) AbstractPage.getNextPage() AbstractPage.getNextPage(int) AbstractPage.getNextPageAsync() AbstractPage.getNextPageToken() AbstractPage.getPageElementCount() AbstractPage.getRequest() AbstractPage.getResponse() AbstractPage.getValues() AbstractPage.hasNextPage() AbstractPage.iterateAll() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods createPage(PageContext<ListDiscoveredServicesRequest,ListDiscoveredServicesResponse,DiscoveredService> context, ListDiscoveredServicesResponse response) protected AppHubClient .
- ListDiscoveredServicesPage createPage ( PageContext<ListDiscoveredServicesRequest , ListDiscoveredServicesResponse , DiscoveredService > context , ListDiscoveredServicesResponse response ) Parameters Name Description context PageContext < ListDiscoveredServicesRequest , ListDiscoveredServicesResponse , DiscoveredService > response ListDiscoveredServicesResponse Returns Type Description AppHubClient.ListDiscoveredServicesPage Overrides AbstractPage<RequestT,ResponseT,ResourceT,PageT>.createPage(PageContext<RequestT,ResponseT,ResourceT> context, ResponseT response) createPageAsync(PageContext<ListDiscoveredServicesRequest,ListDiscoveredServicesResponse,DiscoveredService> context, ApiFuture<ListDiscoveredServicesResponse> futureResponse) public ApiFuture<AppHubClient .
- Home Documentation Developer tools Java Client libraries Send feedback Class AppHubClient.ListDiscoveredServicesPage (0.52.0) Stay organized with collections Save and categorize content based on your preferences.
- ListDiscoveredServicesPage extends AbstractPage<ListDiscoveredServicesRequest , ListDiscoveredServicesResponse , DiscoveredService , AppHubClient .

### "Class AppHubClient.ListDiscoveredServicesPagedResponse (0.52.0) \_|\_ Java\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListDiscoveredServicesPagedResponse](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListDiscoveredServicesPagedResponse)
- Source ID: `site-java-reference`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- ListDiscoveredServicesFixedSizeCollection > Inheritance java.lang.Object > AbstractPagedListResponse > AppHubClient.ListDiscoveredServicesPagedResponse Inherited Members AbstractPagedListResponse.expandToFixedSizeCollection(int) AbstractPagedListResponse.getNextPageToken() AbstractPagedListResponse.getPage() AbstractPagedListResponse.iterateAll() AbstractPagedListResponse.iterateFixedSizeCollections(int) AbstractPagedListResponse.iteratePages() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Static Methods createAsync(PageContext<ListDiscoveredServicesRequest,ListDiscoveredServicesResponse,DiscoveredService> context, ApiFuture<ListDiscoveredServicesResponse> futureResponse) public static ApiFuture<AppHubClient .
- Home Documentation Developer tools Java Client libraries Send feedback Class AppHubClient.ListDiscoveredServicesPagedResponse (0.52.0) Stay organized with collections Save and categorize content based on your preferences.
- ListDiscoveredServicesPagedResponse extends AbstractPagedListResponse<ListDiscoveredServicesRequest , ListDiscoveredServicesResponse , DiscoveredService , AppHubClient .
- ListDiscoveredServicesPage , AppHubClient .

