---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:03:36.827Z"
product_name: "App Hub"
product_slug: "app-hub"
feature_name: "App Hub metric charts from metadata labels"
feature_slug: "app-hub-metric-charts-from-metadata-labels"
latest_feature_date: "2024-10-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient"
  - "https://docs.cloud.google.com/app-hub/docs/release-notes"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListApplicationsFixedSizeCollection"
keywords:
  - "metric"
  - "charts"
  - "labels"
  - "from"
  - "metadata"
  - "now"
  - "app"
  - "hub"
---

# App Hub metric charts from metadata labels

Product: App Hub
Coverage: LOW

## Step 02 Summary

App Hub now allows users to create charts for specific metrics based on App Hub metadata labels.

## Extended Definition

App Hub now allows users to create charts for specific metrics based on App Hub metadata labels.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient)
- [https://docs.cloud.google.com/app-hub/docs/release-notes](https://docs.cloud.google.com/app-hub/docs/release-notes)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListApplicationsFixedSizeCollection](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListApplicationsFixedSizeCollection)

## Supporting Pages

### "Class AppHubClient (0.52.0) \_|\_ Java client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient)
- Source ID: `site-java-reference`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( AppHubClient appHubClient = AppHubClient . create ()) { DeleteServiceProjectAttachmentRequest request = DeleteServiceProjectAttachmentRequest . newBuilder () . setName ( ServiceProjectAttachmentName . of ( "[PROJECT]" , "[LOCATION]" , "[SERVICE PROJECT ATTACHMENT]" ) . toString ()) . setRequestId ( "requestId693933066" ) . build (); OperationFuture<Empty , OperationMetadata > future = appHubClient . deleteServiceProjectAttachmentOperationCallable (). futureCall ( request ); // Do something. future . get (); } Returns Type Description OperationCallable < DeleteServiceProjectAttachmentRequest , Empty , OperationMetadata > deleteWorkloadAsync(DeleteWorkloadRequest request) public final OperationFuture<Empty , OperationMetadata > deleteWorkloadAsync ( DeleteWorkloadRequest request ) Deletes a Workload from an Application.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( AppHubClient appHubClient = AppHubClient . create ()) { DeleteWorkloadRequest request = DeleteWorkloadRequest . newBuilder () . setName ( WorkloadName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" , "[WORKLOAD]" ) . toString ()) . setRequestId ( "requestId693933066" ) . build (); OperationFuture<Empty , OperationMetadata > future = appHubClient . deleteWorkloadOperationCallable (). futureCall ( request ); // Do something. future . get (); } Returns Type Description OperationCallable < DeleteWorkloadRequest , Empty , OperationMetadata > detachServiceProjectAttachment(DetachServiceProjectAttachmentRequest request) public final DetachServiceProjectAttachmentResponse detachServiceProjectAttachment ( DetachServiceProjectAttachmentRequest request ) Detaches a service project from a host project.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( AppHubClient appHubClient = AppHubClient . create ()) { DeleteApplicationRequest request = DeleteApplicationRequest . newBuilder () . setName ( ApplicationName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" ). toString ()) . setRequestId ( "requestId693933066" ) . build (); OperationFuture<Empty , OperationMetadata > future = appHubClient . deleteApplicationOperationCallable (). futureCall ( request ); // Do something. future . get (); } Returns Type Description OperationCallable < DeleteApplicationRequest , Empty , OperationMetadata > deleteServiceAsync(DeleteServiceRequest request) public final OperationFuture<Empty , OperationMetadata > deleteServiceAsync ( DeleteServiceRequest request ) Deletes a Service from an Application.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( AppHubClient appHubClient = AppHubClient . create ()) { DeleteWorkloadRequest request = DeleteWorkloadRequest . newBuilder () . setName ( WorkloadName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" , "[WORKLOAD]" ) . toString ()) . setRequestId ( "requestId693933066" ) . build (); ApiFuture<Operation> future = appHubClient . deleteWorkloadCallable (). futureCall ( request ); // Do something. future . get (); } Returns Type Description UnaryCallable < DeleteWorkloadRequest , Operation > deleteWorkloadOperationCallable() public final OperationCallable<DeleteWorkloadRequest , Empty , OperationMetadata > deleteWorkloadOperationCallable () Deletes a Workload from an Application.

### App Hub release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/release-notes](https://docs.cloud.google.com/app-hub/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- You can also create charts to monitor specific metrics using App Hub metadata labels .
- August 25, 2025 Feature App Hub supports resources from the following sources in Preview : Vertex AI Pipeline job Custom job Hyperparameter tuning job Index Index endpoint NAS job Model deployment monitoring job Compute Engine Autoscaler Commitment Disk Regional disk Instance template Regional instance template License Node group Image Resource policy Reservation Node template Router Snapshot Route Subnetwork Global public delegated prefix Public delegated prefix Dataflow Job Datastream Stream Cloud DNS Managed zone Policy July 30, 2025 Feature The following Vertex AI supported resources are now generally available ( GA ): Dataset items Featurestore containers MetadataStore instances Model resources July 08, 2025 Feature Dataproc Metastore services are now generally available ( GA ).
- June 25, 2025 Feature App Hub supports resources from the following sources in Preview : Dataproc Metastore Service Vertex AI Dataset Vertex AI Featurestore Vertex AI MetadataStore Vertex AI Model May 01, 2025 Feature App Hub supported resources are now generally available ( GA ).
- November 17, 2025 Feature App Hub now supports new metadata properties to provide deeper context and governance for your services and workloads: Functional type: Services and workloads now include the FunctionalType property, which is an output-only field that identifies the known function of a resource.

### "Class AppHubClient.ListApplicationsFixedSizeCollection (0.52.0) \_|\_ Java\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListApplicationsFixedSizeCollection](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient.ListApplicationsFixedSizeCollection)
- Source ID: `site-java-reference`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- ListApplicationsFixedSizeCollection > Inheritance java.lang.Object > AbstractFixedSizeCollection > AppHubClient.ListApplicationsFixedSizeCollection Inherited Members AbstractFixedSizeCollection.createCollection(List<PageT>,int) AbstractFixedSizeCollection.getCollectionSize() AbstractFixedSizeCollection.getNextCollection() AbstractFixedSizeCollection.getNextPageToken() AbstractFixedSizeCollection.getValues() AbstractFixedSizeCollection.hasNextCollection() Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Methods createCollection(List<AppHubClient.ListApplicationsPage> pages, int collectionSize) protected AppHubClient .
- ListApplicationsPage > pages , int collectionSize ) Parameters Name Description pages List < ListApplicationsPage > collectionSize int Returns Type Description AppHubClient.ListApplicationsFixedSizeCollection Overrides AbstractFixedSizeCollection<RequestT,ResponseT,ResourceT,PageT,CollectionT>.createCollection(List<PageT> pages, int collectionSize) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- 0.52.0 (latest) 0.51.0 0.49.0 0.47.0 0.46.0 0.45.0 0.44.0 0.42.0 0.40.0 0.39.0 0.38.0 0.37.0 0.36.0 0.34.0 0.32.0 0.31.0 0.28.0 0.27.0 0.26.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.0 0.1.0 public static class AppHubClient .
- Home Documentation Developer tools Java Client libraries Send feedback Class AppHubClient.ListApplicationsFixedSizeCollection (0.52.0) Stay organized with collections Save and categorize content based on your preferences.

