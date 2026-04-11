---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:03:36.825Z"
product_name: "App Hub"
product_slug: "app-hub"
feature_name: "App Hub support for Cloud Run services"
feature_slug: "app-hub-support-for-cloud-run-services"
latest_feature_date: "2024-12-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListDiscoveredServicesFixedSizeCollection"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListDiscoveredServicesPage"
keywords:
  - "run"
  - "supports"
  - "services"
  - "for"
  - "now"
  - "app"
  - "hub"
  - "as"
---

# App Hub support for Cloud Run services

Product: App Hub
Coverage: LOW

## Step 02 Summary

App Hub now supports Cloud Run services as a resource type in Preview.

## Extended Definition

App Hub now supports Cloud Run services as a resource type in Preview.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListDiscoveredServicesFixedSizeCollection](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListDiscoveredServicesFixedSizeCollection)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListDiscoveredServicesPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListDiscoveredServicesPage)

## Supporting Pages

### "Class AppHubClient (0.52.0) \_|\_ Java client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient)
- Source ID: `site-java-reference`
- Final score: 236
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( AppHubClient appHubClient = AppHubClient . create ()) { ListServiceProjectAttachmentsRequest request = ListServiceProjectAttachmentsRequest . newBuilder () . setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . setFilter ( "filter-1274492040" ) . setOrderBy ( "orderBy-1207110587" ) . build (); ApiFuture<ServiceProjectAttachment> future = appHubClient . listServiceProjectAttachmentsPagedCallable (). futureCall ( request ); // Do something. for ( ServiceProjectAttachment element : future . get (). iterateAll ()) { // doThingsWith(element); } } Returns Type Description UnaryCallable < ListServiceProjectAttachmentsRequest , ListServiceProjectAttachmentsPagedResponse > listServices(ApplicationName parent) public final AppHubClient .
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( AppHubClient appHubClient = AppHubClient . create ()) { ListDiscoveredServicesRequest request = ListDiscoveredServicesRequest . newBuilder () . setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . setFilter ( "filter-1274492040" ) . setOrderBy ( "orderBy-1207110587" ) . build (); ApiFuture<DiscoveredService> future = appHubClient . listDiscoveredServicesPagedCallable (). futureCall ( request ); // Do something. for ( DiscoveredService element : future . get (). iterateAll ()) { // doThingsWith(element); } } Returns Type Description UnaryCallable < ListDiscoveredServicesRequest , ListDiscoveredServicesPagedResponse > listDiscoveredWorkloads(ListDiscoveredWorkloadsRequest request) public final AppHubClient .
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( AppHubClient appHubClient = AppHubClient . create ()) { ListApplicationsRequest request = ListApplicationsRequest . newBuilder () . setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . setFilter ( "filter-1274492040" ) . setOrderBy ( "orderBy-1207110587" ) . build (); ApiFuture<Application> future = appHubClient . listApplicationsPagedCallable (). futureCall ( request ); // Do something. for ( Application element : future . get (). iterateAll ()) { // doThingsWith(element); } } Returns Type Description UnaryCallable < ListApplicationsRequest , ListApplicationsPagedResponse > listDiscoveredServices(ListDiscoveredServicesRequest request) public final AppHubClient .
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( AppHubClient appHubClient = AppHubClient . create ()) { ListServicesRequest request = ListServicesRequest . newBuilder () . setParent ( ApplicationName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . setFilter ( "filter-1274492040" ) . setOrderBy ( "orderBy-1207110587" ) . build (); ApiFuture<Service> future = appHubClient . listServicesPagedCallable (). futureCall ( request ); // Do something. for ( Service element : future . get (). iterateAll ()) { // doThingsWith(element); } } Returns Type Description UnaryCallable < ListServicesRequest , ListServicesPagedResponse > listWorkloads(ApplicationName parent) public final AppHubClient .

### "Class AppHubClient.ListDiscoveredServicesFixedSizeCollection (0.52.0) \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListDiscoveredServicesFixedSizeCollection](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListDiscoveredServicesFixedSizeCollection)
- Source ID: `site-java-reference`
- Final score: 232
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- ListDiscoveredServicesFixedSizeCollection > Inheritance java.lang.Object > AbstractFixedSizeCollection > AppHubClient.ListDiscoveredServicesFixedSizeCollection Inherited Members AbstractFixedSizeCollection.createCollection(List<PageT>,int) AbstractFixedSizeCollection.getCollectionSize() AbstractFixedSizeCollection.getNextCollection() AbstractFixedSizeCollection.getNextPageToken() AbstractFixedSizeCollection.getValues() AbstractFixedSizeCollection.hasNextCollection() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods createCollection(List<AppHubClient.ListDiscoveredServicesPage> pages, int collectionSize) protected AppHubClient .
- ListDiscoveredServicesPage > pages , int collectionSize ) Parameters Name Description pages List < ListDiscoveredServicesPage > collectionSize int Returns Type Description AppHubClient.ListDiscoveredServicesFixedSizeCollection Overrides AbstractFixedSizeCollection<RequestT,ResponseT,ResourceT,PageT,CollectionT>.createCollection(List<PageT> pages, int collectionSize) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Developer tools Java Client libraries Send feedback Class AppHubClient.ListDiscoveredServicesFixedSizeCollection (0.52.0) Stay organized with collections Save and categorize content based on your preferences.
- 0.52.0 (latest) 0.51.0 0.49.0 0.47.0 0.46.0 0.45.0 0.44.0 0.42.0 0.40.0 0.39.0 0.38.0 0.37.0 0.36.0 0.34.0 0.32.0 0.31.0 0.28.0 0.27.0 0.26.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.0 0.1.0 public static class AppHubClient .

### "Class AppHubClient.ListDiscoveredServicesPage (0.52.0) \_|\_ Java client\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListDiscoveredServicesPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListDiscoveredServicesPage)
- Source ID: `site-java-reference`
- Final score: 232
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- ListDiscoveredServicesPage > Inheritance java.lang.Object > AbstractPage > AppHubClient.ListDiscoveredServicesPage Inherited Members AbstractPage.createPage(PageContext<RequestT,ResponseT,ResourceT>,ResponseT) AbstractPage.createPageAsync(PageContext<RequestT,ResponseT,ResourceT>,ApiFuture<ResponseT>) AbstractPage.getNextPage() AbstractPage.getNextPage(int) AbstractPage.getNextPageAsync() AbstractPage.getNextPageToken() AbstractPage.getPageElementCount() AbstractPage.getRequest() AbstractPage.getResponse() AbstractPage.getValues() AbstractPage.hasNextPage() AbstractPage.iterateAll() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods createPage(PageContext<ListDiscoveredServicesRequest,ListDiscoveredServicesResponse,DiscoveredService> context, ListDiscoveredServicesResponse response) protected AppHubClient .
- ListDiscoveredServicesPage createPage ( PageContext<ListDiscoveredServicesRequest , ListDiscoveredServicesResponse , DiscoveredService > context , ListDiscoveredServicesResponse response ) Parameters Name Description context PageContext < ListDiscoveredServicesRequest , ListDiscoveredServicesResponse , DiscoveredService > response ListDiscoveredServicesResponse Returns Type Description AppHubClient.ListDiscoveredServicesPage Overrides AbstractPage<RequestT,ResponseT,ResourceT,PageT>.createPage(PageContext<RequestT,ResponseT,ResourceT> context, ResponseT response) createPageAsync(PageContext<ListDiscoveredServicesRequest,ListDiscoveredServicesResponse,DiscoveredService> context, ApiFuture<ListDiscoveredServicesResponse> futureResponse) public ApiFuture<AppHubClient .
- Home Documentation Developer tools Java Client libraries Send feedback Class AppHubClient.ListDiscoveredServicesPage (0.52.0) Stay organized with collections Save and categorize content based on your preferences.
- 0.52.0 (latest) 0.51.0 0.49.0 0.47.0 0.46.0 0.45.0 0.44.0 0.42.0 0.40.0 0.39.0 0.38.0 0.37.0 0.36.0 0.34.0 0.32.0 0.31.0 0.28.0 0.27.0 0.26.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.0 0.1.0 public static class AppHubClient .

