---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:03:36.821Z"
product_name: "App Hub"
product_slug: "app-hub"
feature_name: "App Hub support for GKE workload resources"
feature_slug: "app-hub-support-for-gke-workload-resources"
latest_feature_date: "2025-03-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListDiscoveredWorkloadsFixedSizeCollection"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListDiscoveredWorkloadsPage"
keywords:
  - "workload"
  - "gke"
  - "resources"
  - "includes"
  - "for"
  - "now"
  - "app"
  - "hub"
---

# App Hub support for GKE workload resources

Product: App Hub
Coverage: LOW

## Step 02 Summary

App Hub now includes Google Kubernetes Engine (GKE) workloads as supported resources in Preview.

## Extended Definition

App Hub now includes Google Kubernetes Engine (GKE) workloads as supported resources in Preview.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListDiscoveredWorkloadsFixedSizeCollection](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListDiscoveredWorkloadsFixedSizeCollection)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListDiscoveredWorkloadsPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListDiscoveredWorkloadsPage)

## Supporting Pages

### "Class AppHubClient (0.52.0) \_|\_ Java client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient)
- Source ID: `site-java-reference`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( AppHubClient appHubClient = AppHubClient . create ()) { ListWorkloadsRequest request = ListWorkloadsRequest . newBuilder () . setParent ( ApplicationName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . setFilter ( "filter-1274492040" ) . setOrderBy ( "orderBy-1207110587" ) . build (); ApiFuture<Workload> future = appHubClient . listWorkloadsPagedCallable (). futureCall ( request ); // Do something. for ( Workload element : future . get (). iterateAll ()) { // doThingsWith(element); } } Returns Type Description UnaryCallable < ListWorkloadsRequest , ListWorkloadsPagedResponse > lookupDiscoveredService(LocationName parent, String uri) public final LookupDiscoveredServiceResponse lookupDiscoveredService ( LocationName parent , String uri ) Lists a Discovered Service in a host project and location, with a given resource URI.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( AppHubClient appHubClient = AppHubClient . create ()) { DeleteServiceProjectAttachmentRequest request = DeleteServiceProjectAttachmentRequest . newBuilder () . setName ( ServiceProjectAttachmentName . of ( "[PROJECT]" , "[LOCATION]" , "[SERVICE PROJECT ATTACHMENT]" ) . toString ()) . setRequestId ( "requestId693933066" ) . build (); OperationFuture<Empty , OperationMetadata > future = appHubClient . deleteServiceProjectAttachmentOperationCallable (). futureCall ( request ); // Do something. future . get (); } Returns Type Description OperationCallable < DeleteServiceProjectAttachmentRequest , Empty , OperationMetadata > deleteWorkloadAsync(DeleteWorkloadRequest request) public final OperationFuture<Empty , OperationMetadata > deleteWorkloadAsync ( DeleteWorkloadRequest request ) Deletes a Workload from an Application.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( AppHubClient appHubClient = AppHubClient . create ()) { ListDiscoveredServicesRequest request = ListDiscoveredServicesRequest . newBuilder () . setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . setFilter ( "filter-1274492040" ) . setOrderBy ( "orderBy-1207110587" ) . build (); ApiFuture<DiscoveredService> future = appHubClient . listDiscoveredServicesPagedCallable (). futureCall ( request ); // Do something. for ( DiscoveredService element : future . get (). iterateAll ()) { // doThingsWith(element); } } Returns Type Description UnaryCallable < ListDiscoveredServicesRequest , ListDiscoveredServicesPagedResponse > listDiscoveredWorkloads(ListDiscoveredWorkloadsRequest request) public final AppHubClient .
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( AppHubClient appHubClient = AppHubClient . create ()) { DeleteWorkloadRequest request = DeleteWorkloadRequest . newBuilder () . setName ( WorkloadName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" , "[WORKLOAD]" ) . toString ()) . setRequestId ( "requestId693933066" ) . build (); OperationFuture<Empty , OperationMetadata > future = appHubClient . deleteWorkloadOperationCallable (). futureCall ( request ); // Do something. future . get (); } Returns Type Description OperationCallable < DeleteWorkloadRequest , Empty , OperationMetadata > detachServiceProjectAttachment(DetachServiceProjectAttachmentRequest request) public final DetachServiceProjectAttachmentResponse detachServiceProjectAttachment ( DetachServiceProjectAttachmentRequest request ) Detaches a service project from a host project.

### "Class AppHubClient.ListDiscoveredWorkloadsFixedSizeCollection (0.52.0) \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListDiscoveredWorkloadsFixedSizeCollection](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListDiscoveredWorkloadsFixedSizeCollection)
- Source ID: `site-java-reference`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- ListDiscoveredWorkloadsFixedSizeCollection > Inheritance java.lang.Object > AbstractFixedSizeCollection > AppHubClient.ListDiscoveredWorkloadsFixedSizeCollection Inherited Members AbstractFixedSizeCollection.createCollection(List<PageT>,int) AbstractFixedSizeCollection.getCollectionSize() AbstractFixedSizeCollection.getNextCollection() AbstractFixedSizeCollection.getNextPageToken() AbstractFixedSizeCollection.getValues() AbstractFixedSizeCollection.hasNextCollection() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods createCollection(List<AppHubClient.ListDiscoveredWorkloadsPage> pages, int collectionSize) protected AppHubClient .
- ListDiscoveredWorkloadsPage > pages , int collectionSize ) Parameters Name Description pages List < ListDiscoveredWorkloadsPage > collectionSize int Returns Type Description AppHubClient.ListDiscoveredWorkloadsFixedSizeCollection Overrides AbstractFixedSizeCollection<RequestT,ResponseT,ResourceT,PageT,CollectionT>.createCollection(List<PageT> pages, int collectionSize) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Developer tools Java Client libraries Send feedback Class AppHubClient.ListDiscoveredWorkloadsFixedSizeCollection (0.52.0) Stay organized with collections Save and categorize content based on your preferences.
- ListDiscoveredWorkloadsFixedSizeCollection extends AbstractFixedSizeCollection<ListDiscoveredWorkloadsRequest , ListDiscoveredWorkloadsResponse , DiscoveredWorkload , AppHubClient .

### "Class AppHubClient.ListDiscoveredWorkloadsPage (0.52.0) \_|\_ Java client\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListDiscoveredWorkloadsPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListDiscoveredWorkloadsPage)
- Source ID: `site-java-reference`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- ListDiscoveredWorkloadsPage > Inheritance java.lang.Object > AbstractPage > AppHubClient.ListDiscoveredWorkloadsPage Inherited Members AbstractPage.createPage(PageContext<RequestT,ResponseT,ResourceT>,ResponseT) AbstractPage.createPageAsync(PageContext<RequestT,ResponseT,ResourceT>,ApiFuture<ResponseT>) AbstractPage.getNextPage() AbstractPage.getNextPage(int) AbstractPage.getNextPageAsync() AbstractPage.getNextPageToken() AbstractPage.getPageElementCount() AbstractPage.getRequest() AbstractPage.getResponse() AbstractPage.getValues() AbstractPage.hasNextPage() AbstractPage.iterateAll() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods createPage(PageContext<ListDiscoveredWorkloadsRequest,ListDiscoveredWorkloadsResponse,DiscoveredWorkload> context, ListDiscoveredWorkloadsResponse response) protected AppHubClient .
- ListDiscoveredWorkloadsPage createPage ( PageContext<ListDiscoveredWorkloadsRequest , ListDiscoveredWorkloadsResponse , DiscoveredWorkload > context , ListDiscoveredWorkloadsResponse response ) Parameters Name Description context PageContext < ListDiscoveredWorkloadsRequest , ListDiscoveredWorkloadsResponse , DiscoveredWorkload > response ListDiscoveredWorkloadsResponse Returns Type Description AppHubClient.ListDiscoveredWorkloadsPage Overrides AbstractPage<RequestT,ResponseT,ResourceT,PageT>.createPage(PageContext<RequestT,ResponseT,ResourceT> context, ResponseT response) createPageAsync(PageContext<ListDiscoveredWorkloadsRequest,ListDiscoveredWorkloadsResponse,DiscoveredWorkload> context, ApiFuture<ListDiscoveredWorkloadsResponse> futureResponse) public ApiFuture<AppHubClient .
- Home Documentation Developer tools Java Client libraries Send feedback Class AppHubClient.ListDiscoveredWorkloadsPage (0.52.0) Stay organized with collections Save and categorize content based on your preferences.
- ListDiscoveredWorkloadsPage extends AbstractPage<ListDiscoveredWorkloadsRequest , ListDiscoveredWorkloadsResponse , DiscoveredWorkload , AppHubClient .

