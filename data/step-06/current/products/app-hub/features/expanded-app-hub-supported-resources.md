---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:03:36.814Z"
product_name: "App Hub"
product_slug: "app-hub"
feature_name: "Expanded App Hub supported resources"
feature_slug: "expanded-app-hub-supported-resources"
latest_feature_date: "2025-11-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient"
  - "https://docs.cloud.google.com/app-hub/docs/register-resources"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListApplicationsFixedSizeCollection"
keywords:
  - "expanded"
  - "adds"
  - "additional"
  - "supported"
  - "resources"
  - "for"
  - "app"
  - "hub"
---

# Expanded App Hub supported resources

Product: App Hub
Coverage: LOW

## Step 02 Summary

App Hub adds support for additional Google Cloud products and services as registerable resources, including preview-capable integrations.

## Extended Definition

App Hub adds support for additional Google Cloud products and services as registerable resources, including preview-capable integrations.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient)
- [https://docs.cloud.google.com/app-hub/docs/register-resources](https://docs.cloud.google.com/app-hub/docs/register-resources)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListApplicationsFixedSizeCollection](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListApplicationsFixedSizeCollection)

## Supporting Pages

### "Class AppHubClient (0.52.0) \_|\_ Java client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient)
- Source ID: `site-java-reference`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- Sample code to get started: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( AppHubClient appHubClient = AppHubClient . create ()) { LocationName name = LocationName . of ( "[PROJECT]" , "[LOCATION]" ); LookupServiceProjectAttachmentResponse response = appHubClient . lookupServiceProjectAttachment ( name ); } Note: close() needs to be called on the AppHubClient object to clean up resources such as threads.
- Returns Type Description AppHubClient.ListLocationsPagedResponse listLocationsCallable() public final UnaryCallable<ListLocationsRequest , ListLocationsResponse > listLocationsCallable () Lists information about the supported locations for this service.
- For example: To customize credentials: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library AppHubSettings appHubSettings = AppHubSettings . newBuilder () . setCredentialsProvider ( FixedCredentialsProvider . create ( myCredentials )) . build (); AppHubClient appHubClient = AppHubClient . create ( appHubSettings ); To customize the endpoint: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library AppHubSettings appHubSettings = AppHubSettings . newBuilder (). setEndpoint ( myEndpoint ). build (); AppHubClient appHubClient = AppHubClient . create ( appHubSettings ); To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over the wire: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library AppHubSettings appHubSettings = AppHubSettings . newHttpJsonBuilder (). build (); AppHubClient appHubClient = AppHubClient . create ( appHubSettings ); Please refer to the GitHub repository's samples for more quickstart code snippets.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( AppHubClient appHubClient = AppHubClient . create ()) { ListWorkloadsRequest request = ListWorkloadsRequest . newBuilder () . setParent ( ApplicationName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . setFilter ( "filter-1274492040" ) . setOrderBy ( "orderBy-1207110587" ) . build (); ApiFuture<Workload> future = appHubClient . listWorkloadsPagedCallable (). futureCall ( request ); // Do something. for ( Workload element : future . get (). iterateAll ()) { // doThingsWith(element); } } Returns Type Description UnaryCallable < ListWorkloadsRequest , ListWorkloadsPagedResponse > lookupDiscoveredService(LocationName parent, String uri) public final LookupDiscoveredServiceResponse lookupDiscoveredService ( LocationName parent , String uri ) Lists a Discovered Service in a host project and location, with a given resource URI.

### "Register existing resources to an application \_|\_ App Hub \_|\_ Google\

- URL: [https://docs.cloud.google.com/app-hub/docs/register-resources](https://docs.cloud.google.com/app-hub/docs/register-resources)
- Source ID: `site-iam-reference`
- Final score: 192
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following example creates a regional application in us-central1 with defined criticality, environment, and owner attributes: resource "google apphub application" "example" { project = "my-project-id" location = "us-central1" application id = "my-application" display name = "My Application" description = "This application represents our platform." scope { type = "REGIONAL" } attributes { criticality { type = "MISSION CRITICAL" } environment { type = "PRODUCTION" } business owners { display name = "Alice" email = "alice@example.com" } developer owners { display name = "Bob" email = "bob@example.com" } operator owners { display name = "Charlie" email = "charlie@example.com" } } } Register services and workloads App Hub lets you select supported resources located within your application management boundary to register them as services and workloads.
- List the registered workloads in your application: gcloud apphub applications workloads list \ --application = APPLICATION NAME --project = PROJECT ID \ --location = REGION You must obtain an output similar to the following for each registered workload: ID DISPLAY NAME WORKLOAD REFERENCE CREATE TIME WORKLOAD NAME WORKLOAD DISPLAY NAME { 'uri' : '//compute.googleapis.com/projects/ PROJECT NUMBER /regions/ REGION /instanceGroups/mig-name' } 2023 -11-01T21:38:08 Terraform To use Terraform to register Google Cloud resources within your application management boundary as services or workloads in an application, use the google apphub discovered service and google apphub discovered workload data sources to dynamically retrieve information about the resources you want to register.
- The Services and workloads tab displays all the registered services and workloads of the application. gcloud App Hub lets you select supported resources located within your application management boundary as services or workloads.
- Create an application Create an application in App Hub to act as a logical container for your existing Google Cloud resources: Console In the Google Cloud console, use the project picker to select your management project.

### "Class AppHubClient.ListApplicationsFixedSizeCollection (0.52.0) \_|\_ Java\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListApplicationsFixedSizeCollection](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListApplicationsFixedSizeCollection)
- Source ID: `site-java-reference`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- ListApplicationsFixedSizeCollection > Inheritance java.lang.Object > AbstractFixedSizeCollection > AppHubClient.ListApplicationsFixedSizeCollection Inherited Members AbstractFixedSizeCollection.createCollection(List<PageT>,int) AbstractFixedSizeCollection.getCollectionSize() AbstractFixedSizeCollection.getNextCollection() AbstractFixedSizeCollection.getNextPageToken() AbstractFixedSizeCollection.getValues() AbstractFixedSizeCollection.hasNextCollection() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods createCollection(List<AppHubClient.ListApplicationsPage> pages, int collectionSize) protected AppHubClient .
- ListApplicationsPage > pages , int collectionSize ) Parameters Name Description pages List < ListApplicationsPage > collectionSize int Returns Type Description AppHubClient.ListApplicationsFixedSizeCollection Overrides AbstractFixedSizeCollection<RequestT,ResponseT,ResourceT,PageT,CollectionT>.createCollection(List<PageT> pages, int collectionSize) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- 0.52.0 (latest) 0.51.0 0.49.0 0.47.0 0.46.0 0.45.0 0.44.0 0.42.0 0.40.0 0.39.0 0.38.0 0.37.0 0.36.0 0.34.0 0.32.0 0.31.0 0.28.0 0.27.0 0.26.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.0 0.1.0 public static class AppHubClient .
- Home Documentation Developer tools Java Client libraries Send feedback Class AppHubClient.ListApplicationsFixedSizeCollection (0.52.0) Stay organized with collections Save and categorize content based on your preferences.

