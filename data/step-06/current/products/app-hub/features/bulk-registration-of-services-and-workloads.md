---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:03:36.809Z"
product_name: "App Hub"
product_slug: "app-hub"
feature_name: "Bulk registration of services and workloads"
feature_slug: "bulk-registration-of-services-and-workloads"
latest_feature_date: "2025-12-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient"
  - "https://docs.cloud.google.com/app-hub/docs/monitor-applications"
keywords:
  - "bulk"
  - "registration"
  - "of"
  - "workloads"
  - "services"
  - "and"
  - "app"
  - "hub"
---

# Bulk registration of services and workloads

Product: App Hub
Coverage: LOW

## Step 02 Summary

App Hub enables registering multiple services and workloads at once, supporting up to 10 resources in a single operation.

## Extended Definition

App Hub enables registering multiple services and workloads at once, supporting up to 10 resources in a single operation.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources](https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient)
- [https://docs.cloud.google.com/app-hub/docs/monitor-applications](https://docs.cloud.google.com/app-hub/docs/monitor-applications)

## Supporting Pages

### Manage services and workloads \_|\_ App Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources](https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources)
- Source ID: `site-iam-reference`
- Final score: 256
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- List registered workloads in an application: gcloud apphub applications workloads list \ --application = APPLICATION NAME \ --project = PROJECT ID \ --location = LOCATION \ --filter = FILTER EXPRESSION The registration status of services and workloads in an application might change to detached if you move a project or folder out of your application management boundary or delete the underlying resource.
- View details of services and workloads Follow these steps to view details of services and workloads within your application management boundary, including the following: Location Registration status to an application Properties and attributes For more information about these details, see App Hub concepts and data model .
- Alternatively, view a list of all services and workloads with a registration status value of discovered or registered : Navigate to the Services and workloads page from App Hub: Go to Services and workloads The page displays a list of all discovered and registered services and workloads.
- The following examples update the criticality and environment attributes of services and workloads of a regional application: Update service attributes: resource "google apphub service" "example" { ... other arguments attributes { criticality { type = "HIGH" # Updated criticality } environment { type = "PRODUCTION" } ... other attributes } } Update workload attributes: resource "google apphub workload" "example" { ... other arguments attributes { criticality { type = "HIGH" # Updated criticality } environment { type = "PRODUCTION" } ... other attributes } } Unregister services and workloads Unregistering a service or workload removes it from an application.

### "Class AppHubClient (0.52.0) \_|\_ Java client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient)
- Source ID: `site-java-reference`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( AppHubClient appHubClient = AppHubClient . create ()) { ListDiscoveredServicesRequest request = ListDiscoveredServicesRequest . newBuilder () . setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . setFilter ( "filter-1274492040" ) . setOrderBy ( "orderBy-1207110587" ) . build (); ApiFuture<DiscoveredService> future = appHubClient . listDiscoveredServicesPagedCallable (). futureCall ( request ); // Do something. for ( DiscoveredService element : future . get (). iterateAll ()) { // doThingsWith(element); } } Returns Type Description UnaryCallable < ListDiscoveredServicesRequest , ListDiscoveredServicesPagedResponse > listDiscoveredWorkloads(ListDiscoveredWorkloadsRequest request) public final AppHubClient .
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( AppHubClient appHubClient = AppHubClient . create ()) { ListServicesRequest request = ListServicesRequest . newBuilder () . setParent ( ApplicationName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . setFilter ( "filter-1274492040" ) . setOrderBy ( "orderBy-1207110587" ) . build (); ApiFuture<Service> future = appHubClient . listServicesPagedCallable (). futureCall ( request ); // Do something. for ( Service element : future . get (). iterateAll ()) { // doThingsWith(element); } } Returns Type Description UnaryCallable < ListServicesRequest , ListServicesPagedResponse > listWorkloads(ApplicationName parent) public final AppHubClient .
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( AppHubClient appHubClient = AppHubClient . create ()) { ListWorkloadsRequest request = ListWorkloadsRequest . newBuilder () . setParent ( ApplicationName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . setFilter ( "filter-1274492040" ) . setOrderBy ( "orderBy-1207110587" ) . build (); ApiFuture<Workload> future = appHubClient . listWorkloadsPagedCallable (). futureCall ( request ); // Do something. for ( Workload element : future . get (). iterateAll ()) { // doThingsWith(element); } } Returns Type Description UnaryCallable < ListWorkloadsRequest , ListWorkloadsPagedResponse > lookupDiscoveredService(LocationName parent, String uri) public final LookupDiscoveredServiceResponse lookupDiscoveredService ( LocationName parent , String uri ) Lists a Discovered Service in a host project and location, with a given resource URI.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( AppHubClient appHubClient = AppHubClient . create ()) { ListServiceProjectAttachmentsRequest request = ListServiceProjectAttachmentsRequest . newBuilder () . setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . setFilter ( "filter-1274492040" ) . setOrderBy ( "orderBy-1207110587" ) . build (); ApiFuture<ServiceProjectAttachment> future = appHubClient . listServiceProjectAttachmentsPagedCallable (). futureCall ( request ); // Do something. for ( ServiceProjectAttachment element : future . get (). iterateAll ()) { // doThingsWith(element); } } Returns Type Description UnaryCallable < ListServiceProjectAttachmentsRequest , ListServiceProjectAttachmentsPagedResponse > listServices(ApplicationName parent) public final AppHubClient .

### "Monitor application health and performance \_|\_ App Hub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/app-hub/docs/monitor-applications](https://docs.cloud.google.com/app-hub/docs/monitor-applications)
- Source ID: `site-iam-reference`
- Final score: 212
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When you register infrastructure resources as services or workloads in an application, using either App Hub or Application Design Center, Application Monitoring automatically provides predefined dashboards that display key log, metric, and trace data in an application-centric context.
- Because Application Monitoring understands the logical grouping of your application's services and workloads, it automatically enriches all telemetry with application-specific labels .
- What's next Learn more about Application Monitoring Set up Google Cloud Observability for Application Monitoring View application telemetry View audit logs for App Hub Get additional health and performance information with Cloud Hub Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- You can get additional health and performance information in Cloud Hub, including deployment failures and deployments that can be updated, information about Google Cloud incidents that impact your applications, and services that are near their quota limits.

