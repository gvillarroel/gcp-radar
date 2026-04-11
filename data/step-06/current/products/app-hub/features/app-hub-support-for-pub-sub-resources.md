---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:03:36.824Z"
product_name: "App Hub"
product_slug: "app-hub"
feature_name: "App Hub support for Pub/Sub resources"
feature_slug: "app-hub-support-for-pub-sub-resources"
latest_feature_date: "2025-02-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient"
  - "https://docs.cloud.google.com/app-hub/docs/quickstart-create-application"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListApplicationsPage"
keywords:
  - "pub"
  - "sub"
  - "resources"
  - "includes"
  - "for"
  - "now"
  - "app"
  - "hub"
---

# App Hub support for Pub/Sub resources

Product: App Hub
Coverage: LOW

## Step 02 Summary

App Hub now includes Pub/Sub as a supported resource type in Preview.

## Extended Definition

App Hub now includes Pub/Sub as a supported resource type in Preview.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient)
- [https://docs.cloud.google.com/app-hub/docs/quickstart-create-application](https://docs.cloud.google.com/app-hub/docs/quickstart-create-application)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListApplicationsPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListApplicationsPage)

## Supporting Pages

### "Class AppHubClient (0.52.0) \_|\_ Java client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient)
- Source ID: `site-java-reference`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( AppHubClient appHubClient = AppHubClient . create ()) { ListWorkloadsRequest request = ListWorkloadsRequest . newBuilder () . setParent ( ApplicationName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . setFilter ( "filter-1274492040" ) . setOrderBy ( "orderBy-1207110587" ) . build (); ApiFuture<Workload> future = appHubClient . listWorkloadsPagedCallable (). futureCall ( request ); // Do something. for ( Workload element : future . get (). iterateAll ()) { // doThingsWith(element); } } Returns Type Description UnaryCallable < ListWorkloadsRequest , ListWorkloadsPagedResponse > lookupDiscoveredService(LocationName parent, String uri) public final LookupDiscoveredServiceResponse lookupDiscoveredService ( LocationName parent , String uri ) Lists a Discovered Service in a host project and location, with a given resource URI.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( AppHubClient appHubClient = AppHubClient . create ()) { DeleteServiceProjectAttachmentRequest request = DeleteServiceProjectAttachmentRequest . newBuilder () . setName ( ServiceProjectAttachmentName . of ( "[PROJECT]" , "[LOCATION]" , "[SERVICE PROJECT ATTACHMENT]" ) . toString ()) . setRequestId ( "requestId693933066" ) . build (); OperationFuture<Empty , OperationMetadata > future = appHubClient . deleteServiceProjectAttachmentOperationCallable (). futureCall ( request ); // Do something. future . get (); } Returns Type Description OperationCallable < DeleteServiceProjectAttachmentRequest , Empty , OperationMetadata > deleteWorkloadAsync(DeleteWorkloadRequest request) public final OperationFuture<Empty , OperationMetadata > deleteWorkloadAsync ( DeleteWorkloadRequest request ) Deletes a Workload from an Application.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( AppHubClient appHubClient = AppHubClient . create ()) { ListServiceProjectAttachmentsRequest request = ListServiceProjectAttachmentsRequest . newBuilder () . setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . setFilter ( "filter-1274492040" ) . setOrderBy ( "orderBy-1207110587" ) . build (); ApiFuture<ServiceProjectAttachment> future = appHubClient . listServiceProjectAttachmentsPagedCallable (). futureCall ( request ); // Do something. for ( ServiceProjectAttachment element : future . get (). iterateAll ()) { // doThingsWith(element); } } Returns Type Description UnaryCallable < ListServiceProjectAttachmentsRequest , ListServiceProjectAttachmentsPagedResponse > listServices(ApplicationName parent) public final AppHubClient .
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( AppHubClient appHubClient = AppHubClient . create ()) { DeleteServiceProjectAttachmentRequest request = DeleteServiceProjectAttachmentRequest . newBuilder () . setName ( ServiceProjectAttachmentName . of ( "[PROJECT]" , "[LOCATION]" , "[SERVICE PROJECT ATTACHMENT]" ) . toString ()) . setRequestId ( "requestId693933066" ) . build (); ApiFuture<Operation> future = appHubClient . deleteServiceProjectAttachmentCallable (). futureCall ( request ); // Do something. future . get (); } Returns Type Description UnaryCallable < DeleteServiceProjectAttachmentRequest , Operation > deleteServiceProjectAttachmentOperationCallable() public final OperationCallable<DeleteServiceProjectAttachmentRequest , Empty , OperationMetadata > deleteServiceProjectAttachmentOperationCallable () Deletes a service project attachment.

### "Quickstart: Create an application from existing resources \_|\_ App Hub\

- URL: [https://docs.cloud.google.com/app-hub/docs/quickstart-create-application](https://docs.cloud.google.com/app-hub/docs/quickstart-create-application)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- Add the following code to application.tf to register the discovered resources: Register the forwarding rule as a service in the application resource "google apphub service" "frontend" { project = " PROJECT ID " location = "global" application id = google apphub application.my global app.application id service id = "frontend-service" display name = "Frontend Service (LB)" discovered service = data.google apphub discovered service.frontend service.name } Register the Cloud Run service as a service in the application resource "google apphub service" "backend" { project = " PROJECT ID " location = "global" application id = google apphub application.my global app.application id service id = "backend-service" display name = "Backend Service (Cloud Run)" discovered service = data.google apphub discovered service.backend service.name } The google apphub service resources formally register the discovered resources in your application as services.
- Compute Engine API ( compute.googleapis.com ) Infrastructure Manager API ( config.googleapis.com ) Enable APIs Required roles To get the permissions that you need to enable required APIs and create a sample application from existing resources, ask your administrator to grant you the following IAM roles on the management project: To enable required APIs: Service Usage Admin ( roles/serviceusage.serviceUsageAdmin ) To get full access to required services: App Hub Admin ( roles/apphub.admin ) Cloud Run Admin ( roles/run.admin ) Compute Admin ( roles/compute.admin ) Cloud Infrastructure Manager Admin ( roles/config.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- When the application is created, the Applications page displays its details, including the resources you registered as services. gcloud Create the application: gcloud apphub applications create my-global-app \ --location = global \ --display-name = "My Global Application" \ --project = ${ PROJECT ID } Discover the IDs for the forwarding rule and the Cloud Run service in the appropriate region: gcloud apphub discovered-services list \ --location = global \ --project = ${ PROJECT ID } gcloud apphub discovered-services list \ --location = ${ REGION } \ --project = ${ PROJECT ID } Note the ID of the forwarding rule and the Cloud Run service.
- Add the following code to application.tf to discover your deployed resources: Discover the forwarding rule data "google apphub discovered service" "frontend service" { location = "global" service uri = "//compute.googleapis.com/${google compute global forwarding rule.default.id}" } Discover the Cloud Run service data "google apphub discovered service" "backend service" { location = " REGION " service uri = "//run.googleapis.com/${google cloud run v2 service.default.id}" } The google apphub discovered service data sources find the resource names of your existing infrastructure based on their URIs.

### "Class AppHubClient.ListApplicationsPage (0.52.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListApplicationsPage](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListApplicationsPage)
- Source ID: `site-java-reference`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- ListApplicationsPage createPage ( PageContext<ListApplicationsRequest , ListApplicationsResponse , Application > context , ListApplicationsResponse response ) Parameters Name Description context PageContext < ListApplicationsRequest , ListApplicationsResponse , Application > response ListApplicationsResponse Returns Type Description AppHubClient.ListApplicationsPage Overrides AbstractPage<RequestT,ResponseT,ResourceT,PageT>.createPage(PageContext<RequestT,ResponseT,ResourceT> context, ResponseT response) createPageAsync(PageContext<ListApplicationsRequest,ListApplicationsResponse,Application> context, ApiFuture<ListApplicationsResponse> futureResponse) public ApiFuture<AppHubClient .
- 0.52.0 (latest) 0.51.0 0.49.0 0.47.0 0.46.0 0.45.0 0.44.0 0.42.0 0.40.0 0.39.0 0.38.0 0.37.0 0.36.0 0.34.0 0.32.0 0.31.0 0.28.0 0.27.0 0.26.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.0 0.1.0 public static class AppHubClient .
- ListApplicationsPage > Inheritance java.lang.Object > AbstractPage > AppHubClient.ListApplicationsPage Inherited Members AbstractPage.createPage(PageContext<RequestT,ResponseT,ResourceT>,ResponseT) AbstractPage.createPageAsync(PageContext<RequestT,ResponseT,ResourceT>,ApiFuture<ResponseT>) AbstractPage.getNextPage() AbstractPage.getNextPage(int) AbstractPage.getNextPageAsync() AbstractPage.getNextPageToken() AbstractPage.getPageElementCount() AbstractPage.getRequest() AbstractPage.getResponse() AbstractPage.getValues() AbstractPage.hasNextPage() AbstractPage.iterateAll() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods createPage(PageContext<ListApplicationsRequest,ListApplicationsResponse,Application> context, ListApplicationsResponse response) protected AppHubClient .
- Home Documentation Developer tools Java Client libraries Send feedback Class AppHubClient.ListApplicationsPage (0.52.0) Stay organized with collections Save and categorize content based on your preferences.

