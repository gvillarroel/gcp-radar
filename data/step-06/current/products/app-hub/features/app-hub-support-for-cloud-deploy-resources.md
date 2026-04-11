---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:03:36.819Z"
product_name: "App Hub"
product_slug: "app-hub"
feature_name: "App Hub support for Cloud Deploy resources"
feature_slug: "app-hub-support-for-cloud-deploy-resources"
latest_feature_date: "2025-03-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListApplicationsFixedSizeCollection"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListApplicationsPage"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListApplicationsPagedResponse"
keywords:
  - "deploy"
  - "resources"
  - "includes"
  - "for"
  - "now"
  - "app"
  - "hub"
  - "as"
---

# App Hub support for Cloud Deploy resources

Product: App Hub
Coverage: LOW

## Step 02 Summary

App Hub now includes Cloud Deploy as a supported resource type in Preview.

## Extended Definition

App Hub now includes Cloud Deploy as a supported resource type in Preview.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListApplicationsFixedSizeCollection](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListApplicationsFixedSizeCollection)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListApplicationsPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListApplicationsPage)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListApplicationsPagedResponse](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListApplicationsPagedResponse)

## Supporting Pages

### "Class AppHubClient.ListApplicationsFixedSizeCollection (0.52.0) \_|\_ Java\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListApplicationsFixedSizeCollection](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListApplicationsFixedSizeCollection)
- Source ID: `site-java-reference`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- ListApplicationsFixedSizeCollection > Inheritance java.lang.Object > AbstractFixedSizeCollection > AppHubClient.ListApplicationsFixedSizeCollection Inherited Members AbstractFixedSizeCollection.createCollection(List<PageT>,int) AbstractFixedSizeCollection.getCollectionSize() AbstractFixedSizeCollection.getNextCollection() AbstractFixedSizeCollection.getNextPageToken() AbstractFixedSizeCollection.getValues() AbstractFixedSizeCollection.hasNextCollection() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods createCollection(List<AppHubClient.ListApplicationsPage> pages, int collectionSize) protected AppHubClient .
- ListApplicationsPage > pages , int collectionSize ) Parameters Name Description pages List < ListApplicationsPage > collectionSize int Returns Type Description AppHubClient.ListApplicationsFixedSizeCollection Overrides AbstractFixedSizeCollection<RequestT,ResponseT,ResourceT,PageT,CollectionT>.createCollection(List<PageT> pages, int collectionSize) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- 0.52.0 (latest) 0.51.0 0.49.0 0.47.0 0.46.0 0.45.0 0.44.0 0.42.0 0.40.0 0.39.0 0.38.0 0.37.0 0.36.0 0.34.0 0.32.0 0.31.0 0.28.0 0.27.0 0.26.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.0 0.1.0 public static class AppHubClient .
- Home Documentation Developer tools Java Client libraries Send feedback Class AppHubClient.ListApplicationsFixedSizeCollection (0.52.0) Stay organized with collections Save and categorize content based on your preferences.

### "Class AppHubClient.ListApplicationsPage (0.52.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListApplicationsPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListApplicationsPage)
- Source ID: `site-java-reference`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- ListApplicationsPage > Inheritance java.lang.Object > AbstractPage > AppHubClient.ListApplicationsPage Inherited Members AbstractPage.createPage(PageContext<RequestT,ResponseT,ResourceT>,ResponseT) AbstractPage.createPageAsync(PageContext<RequestT,ResponseT,ResourceT>,ApiFuture<ResponseT>) AbstractPage.getNextPage() AbstractPage.getNextPage(int) AbstractPage.getNextPageAsync() AbstractPage.getNextPageToken() AbstractPage.getPageElementCount() AbstractPage.getRequest() AbstractPage.getResponse() AbstractPage.getValues() AbstractPage.hasNextPage() AbstractPage.iterateAll() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods createPage(PageContext<ListApplicationsRequest,ListApplicationsResponse,Application> context, ListApplicationsResponse response) protected AppHubClient .
- ListApplicationsPage createPage ( PageContext<ListApplicationsRequest , ListApplicationsResponse , Application > context , ListApplicationsResponse response ) Parameters Name Description context PageContext < ListApplicationsRequest , ListApplicationsResponse , Application > response ListApplicationsResponse Returns Type Description AppHubClient.ListApplicationsPage Overrides AbstractPage<RequestT,ResponseT,ResourceT,PageT>.createPage(PageContext<RequestT,ResponseT,ResourceT> context, ResponseT response) createPageAsync(PageContext<ListApplicationsRequest,ListApplicationsResponse,Application> context, ApiFuture<ListApplicationsResponse> futureResponse) public ApiFuture<AppHubClient .
- 0.52.0 (latest) 0.51.0 0.49.0 0.47.0 0.46.0 0.45.0 0.44.0 0.42.0 0.40.0 0.39.0 0.38.0 0.37.0 0.36.0 0.34.0 0.32.0 0.31.0 0.28.0 0.27.0 0.26.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.0 0.1.0 public static class AppHubClient .
- Home Documentation Developer tools Java Client libraries Send feedback Class AppHubClient.ListApplicationsPage (0.52.0) Stay organized with collections Save and categorize content based on your preferences.

### "Class AppHubClient.ListApplicationsPagedResponse (0.52.0) \_|\_ Java client\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListApplicationsPagedResponse](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListApplicationsPagedResponse)
- Source ID: `site-java-reference`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- ListApplicationsFixedSizeCollection > Inheritance java.lang.Object > AbstractPagedListResponse > AppHubClient.ListApplicationsPagedResponse Inherited Members AbstractPagedListResponse.expandToFixedSizeCollection(int) AbstractPagedListResponse.getNextPageToken() AbstractPagedListResponse.getPage() AbstractPagedListResponse.iterateAll() AbstractPagedListResponse.iterateFixedSizeCollections(int) AbstractPagedListResponse.iteratePages() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Static Methods createAsync(PageContext<ListApplicationsRequest,ListApplicationsResponse,Application> context, ApiFuture<ListApplicationsResponse> futureResponse) public static ApiFuture<AppHubClient .
- 0.52.0 (latest) 0.51.0 0.49.0 0.47.0 0.46.0 0.45.0 0.44.0 0.42.0 0.40.0 0.39.0 0.38.0 0.37.0 0.36.0 0.34.0 0.32.0 0.31.0 0.28.0 0.27.0 0.26.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.0 0.1.0 public static class AppHubClient .
- Home Documentation Developer tools Java Client libraries Send feedback Class AppHubClient.ListApplicationsPagedResponse (0.52.0) Stay organized with collections Save and categorize content based on your preferences.
- ListApplicationsPagedResponse > createAsync ( PageContext<ListApplicationsRequest , ListApplicationsResponse , Application > context , ApiFuture<ListApplicationsResponse> futureResponse ) Parameters Name Description context PageContext < ListApplicationsRequest , ListApplicationsResponse , Application > futureResponse ApiFuture < ListApplicationsResponse > Returns Type Description ApiFuture < ListApplicationsPagedResponse > Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

