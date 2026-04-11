---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:03:36.820Z"
product_name: "App Hub"
product_slug: "app-hub"
feature_name: "App Hub support for Cloud Run jobs"
feature_slug: "app-hub-support-for-cloud-run-jobs"
latest_feature_date: "2025-03-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListApplicationsFixedSizeCollection"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListApplicationsPage"
keywords:
  - "jobs"
  - "run"
  - "includes"
  - "for"
  - "now"
  - "app"
  - "hub"
  - "as"
---

# App Hub support for Cloud Run jobs

Product: App Hub
Coverage: LOW

## Step 02 Summary

App Hub now includes Cloud Run jobs as a supported resource type in Preview.

## Extended Definition

App Hub now includes Cloud Run jobs as a supported resource type in Preview.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListApplicationsFixedSizeCollection](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListApplicationsFixedSizeCollection)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListApplicationsPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListApplicationsPage)

## Supporting Pages

### "Class AppHubClient (0.52.0) \_|\_ Java client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient)
- Source ID: `site-java-reference`
- Final score: 220
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example: To customize credentials: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library AppHubSettings appHubSettings = AppHubSettings . newBuilder () . setCredentialsProvider ( FixedCredentialsProvider . create ( myCredentials )) . build (); AppHubClient appHubClient = AppHubClient . create ( appHubSettings ); To customize the endpoint: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library AppHubSettings appHubSettings = AppHubSettings . newBuilder (). setEndpoint ( myEndpoint ). build (); AppHubClient appHubClient = AppHubClient . create ( appHubSettings ); To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over the wire: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library AppHubSettings appHubSettings = AppHubSettings . newHttpJsonBuilder (). build (); AppHubClient appHubClient = AppHubClient . create ( appHubSettings ); Please refer to the GitHub repository's samples for more quickstart code snippets.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( AppHubClient appHubClient = AppHubClient . create ()) { ListWorkloadsRequest request = ListWorkloadsRequest . newBuilder () . setParent ( ApplicationName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . setFilter ( "filter-1274492040" ) . setOrderBy ( "orderBy-1207110587" ) . build (); ApiFuture<Workload> future = appHubClient . listWorkloadsPagedCallable (). futureCall ( request ); // Do something. for ( Workload element : future . get (). iterateAll ()) { // doThingsWith(element); } } Returns Type Description UnaryCallable < ListWorkloadsRequest , ListWorkloadsPagedResponse > lookupDiscoveredService(LocationName parent, String uri) public final LookupDiscoveredServiceResponse lookupDiscoveredService ( LocationName parent , String uri ) Lists a Discovered Service in a host project and location, with a given resource URI.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( AppHubClient appHubClient = AppHubClient . create ()) { DeleteServiceProjectAttachmentRequest request = DeleteServiceProjectAttachmentRequest . newBuilder () . setName ( ServiceProjectAttachmentName . of ( "[PROJECT]" , "[LOCATION]" , "[SERVICE PROJECT ATTACHMENT]" ) . toString ()) . setRequestId ( "requestId693933066" ) . build (); OperationFuture<Empty , OperationMetadata > future = appHubClient . deleteServiceProjectAttachmentOperationCallable (). futureCall ( request ); // Do something. future . get (); } Returns Type Description OperationCallable < DeleteServiceProjectAttachmentRequest , Empty , OperationMetadata > deleteWorkloadAsync(DeleteWorkloadRequest request) public final OperationFuture<Empty , OperationMetadata > deleteWorkloadAsync ( DeleteWorkloadRequest request ) Deletes a Workload from an Application.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( AppHubClient appHubClient = AppHubClient . create ()) { ListServiceProjectAttachmentsRequest request = ListServiceProjectAttachmentsRequest . newBuilder () . setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . setFilter ( "filter-1274492040" ) . setOrderBy ( "orderBy-1207110587" ) . build (); ApiFuture<ServiceProjectAttachment> future = appHubClient . listServiceProjectAttachmentsPagedCallable (). futureCall ( request ); // Do something. for ( ServiceProjectAttachment element : future . get (). iterateAll ()) { // doThingsWith(element); } } Returns Type Description UnaryCallable < ListServiceProjectAttachmentsRequest , ListServiceProjectAttachmentsPagedResponse > listServices(ApplicationName parent) public final AppHubClient .

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

