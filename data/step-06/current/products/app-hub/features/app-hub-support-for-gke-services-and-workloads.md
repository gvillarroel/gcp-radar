---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:03:36.825Z"
product_name: "App Hub"
product_slug: "app-hub"
feature_name: "App Hub support for GKE services and workloads"
feature_slug: "app-hub-support-for-gke-services-and-workloads"
latest_feature_date: "2025-01-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources"
  - "https://docs.cloud.google.com/app-hub/docs/monitor-applications"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient"
keywords:
  - "gke"
  - "workloads"
  - "services"
  - "and"
  - "for"
  - "now"
  - "app"
  - "hub"
---

# App Hub support for GKE services and workloads

Product: App Hub
Coverage: LOW

## Step 02 Summary

App Hub now supports Google Kubernetes Engine (GKE) services and workloads in Preview.

## Extended Definition

App Hub now supports Google Kubernetes Engine (GKE) services and workloads in Preview.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources](https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources)
- [https://docs.cloud.google.com/app-hub/docs/monitor-applications](https://docs.cloud.google.com/app-hub/docs/monitor-applications)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient)

## Supporting Pages

### Manage services and workloads \_|\_ App Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources](https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources)
- Source ID: `site-iam-reference`
- Final score: 236
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following example lets you view the details of the apphub.googleapis.com/AgentProperties schema for a workload with the AGENT functional type in the my-project-id project at the us-central1 location. data "google apphub extended metadata schema" "agent properties" { project = "my-project-id" location = "us-central1" name = "apphub.googleapis.com/AgentProperties" } Update service and workload attributes To modify the attributes of services and workloads that are registered in an application, follow these steps: Note: You cannot modify attributes for shared services .
- Required roles To get the permissions that you need to manage services and workloads in App Hub, ask your administrator to grant you the following IAM roles on the management project that defines your application management boundary : Update and unregister services and workloads: App Hub Editor ( roles/apphub.editor ) View services, workloads, and their details: App Hub Viewer ( roles/apphub.viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- View details of services and workloads Follow these steps to view details of services and workloads within your application management boundary, including the following: Location Registration status to an application Properties and attributes For more information about these details, see App Hub concepts and data model .
- Go to Application Design Center For applications created by registering existing resources in App Hub : Manage applications, services, and workloads directly within App Hub.

### "Monitor application health and performance \_|\_ App Hub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/app-hub/docs/monitor-applications](https://docs.cloud.google.com/app-hub/docs/monitor-applications)
- Source ID: `site-iam-reference`
- Final score: 226
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When you register infrastructure resources as services or workloads in an application, using either App Hub or Application Design Center, Application Monitoring automatically provides predefined dashboards that display key log, metric, and trace data in an application-centric context.
- You can get additional health and performance information in Cloud Hub, including deployment failures and deployments that can be updated, information about Google Cloud incidents that impact your applications, and services that are near their quota limits.
- For infrastructure supported by Application Monitoring , the registered services and workloads provide the telemetry needed for the predefined dashboards.
- What's next Learn more about Application Monitoring Set up Google Cloud Observability for Application Monitoring View application telemetry View audit logs for App Hub Get additional health and performance information with Cloud Hub Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Class AppHubClient (0.52.0) \_|\_ Java client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient)
- Source ID: `site-java-reference`
- Final score: 220
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( AppHubClient appHubClient = AppHubClient . create ()) { ListDiscoveredServicesRequest request = ListDiscoveredServicesRequest . newBuilder () . setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . setFilter ( "filter-1274492040" ) . setOrderBy ( "orderBy-1207110587" ) . build (); ApiFuture<DiscoveredService> future = appHubClient . listDiscoveredServicesPagedCallable (). futureCall ( request ); // Do something. for ( DiscoveredService element : future . get (). iterateAll ()) { // doThingsWith(element); } } Returns Type Description UnaryCallable < ListDiscoveredServicesRequest , ListDiscoveredServicesPagedResponse > listDiscoveredWorkloads(ListDiscoveredWorkloadsRequest request) public final AppHubClient .
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( AppHubClient appHubClient = AppHubClient . create ()) { ListServicesRequest request = ListServicesRequest . newBuilder () . setParent ( ApplicationName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . setFilter ( "filter-1274492040" ) . setOrderBy ( "orderBy-1207110587" ) . build (); ApiFuture<Service> future = appHubClient . listServicesPagedCallable (). futureCall ( request ); // Do something. for ( Service element : future . get (). iterateAll ()) { // doThingsWith(element); } } Returns Type Description UnaryCallable < ListServicesRequest , ListServicesPagedResponse > listWorkloads(ApplicationName parent) public final AppHubClient .
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( AppHubClient appHubClient = AppHubClient . create ()) { ListWorkloadsRequest request = ListWorkloadsRequest . newBuilder () . setParent ( ApplicationName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . setFilter ( "filter-1274492040" ) . setOrderBy ( "orderBy-1207110587" ) . build (); ApiFuture<Workload> future = appHubClient . listWorkloadsPagedCallable (). futureCall ( request ); // Do something. for ( Workload element : future . get (). iterateAll ()) { // doThingsWith(element); } } Returns Type Description UnaryCallable < ListWorkloadsRequest , ListWorkloadsPagedResponse > lookupDiscoveredService(LocationName parent, String uri) public final LookupDiscoveredServiceResponse lookupDiscoveredService ( LocationName parent , String uri ) Lists a Discovered Service in a host project and location, with a given resource URI.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( AppHubClient appHubClient = AppHubClient . create ()) { ListServiceProjectAttachmentsRequest request = ListServiceProjectAttachmentsRequest . newBuilder () . setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . setFilter ( "filter-1274492040" ) . setOrderBy ( "orderBy-1207110587" ) . build (); ApiFuture<ServiceProjectAttachment> future = appHubClient . listServiceProjectAttachmentsPagedCallable (). futureCall ( request ); // Do something. for ( ServiceProjectAttachment element : future . get (). iterateAll ()) { // doThingsWith(element); } } Returns Type Description UnaryCallable < ListServiceProjectAttachmentsRequest , ListServiceProjectAttachmentsPagedResponse > listServices(ApplicationName parent) public final AppHubClient .

