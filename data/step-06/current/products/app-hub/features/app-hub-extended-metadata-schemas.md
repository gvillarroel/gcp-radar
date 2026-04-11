---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:03:36.808Z"
product_name: "App Hub"
product_slug: "app-hub"
feature_name: "App Hub extended metadata schemas"
feature_slug: "app-hub-extended-metadata-schemas"
latest_feature_date: "2025-12-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/app-hub/docs/metadata-schemas"
  - "https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient"
keywords:
  - "extended"
  - "displays"
  - "schemas"
  - "so"
  - "metadata"
  - "now"
  - "app"
  - "hub"
---

# App Hub extended metadata schemas

Product: App Hub
Coverage: LOW

## Step 02 Summary

App Hub now displays extended metadata schemas so users can view rich, structured, schema-driven information about resources.

## Extended Definition

App Hub now displays extended metadata schemas so users can view rich, structured, schema-driven information about resources.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/app-hub/docs/metadata-schemas](https://docs.cloud.google.com/app-hub/docs/metadata-schemas)
- [https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources](https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient)

## Supporting Pages

### Extended metadata schemas \_|\_ App Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/metadata-schemas](https://docs.cloud.google.com/app-hub/docs/metadata-schemas)
- Source ID: `site-docs-reference`
- Final score: 224
- Re-rank relevance: N/A

Evidence snippets:
- To learn how to visualize this metadata, see View extended metadata schemas . apphub.googleapis.com/AgentProperties This schema is used to describe the properties of an AI agent, letting other systems find and understand it.
- Home Documentation Application development App Hub Reference Send feedback Extended metadata schemas Stay organized with collections Save and categorize content based on your preferences.
- Schema definition The following is the schema for this metadata type in JSON format. { "$schema" : "http://json-schema.org/draft-07/schema#" , "title" : "apphub.googleapis.com/AgentProperties" , "description" : "The schema for apphub.googleapis.com/AgentProperties.
- Extended metadata adds rich, structured data to App Hub application components, providing context for governance, operations, and integration with other systems.

### Manage services and workloads \_|\_ App Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources](https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources)
- Source ID: `site-iam-reference`
- Final score: 222
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For a list of the supported metadata types and their schemas, see Extended metadata schemas . gcloud List all available extended metadata schemas in a project and location: gcloud alpha apphub extended-metadata-schemas list \ --project = PROJECT ID \ --location = LOCATION \ Replace the following: PROJECT ID : the ID of your management project.
- View the details of a specific schema: gcloud alpha apphub extended-metadata-schemas describe SCHEMA NAME \ --project = PROJECT ID \ --location = LOCATION \ Replace SCHEMA NAME with the full name of the schema, for example, apphub.googleapis.com/AgentProperties .
- The following example lets you view the details of the apphub.googleapis.com/AgentProperties schema for a workload with the AGENT functional type in the my-project-id project at the us-central1 location. data "google apphub extended metadata schema" "agent properties" { project = "my-project-id" location = "us-central1" name = "apphub.googleapis.com/AgentProperties" } Update service and workload attributes To modify the attributes of services and workloads that are registered in an application, follow these steps: Note: You cannot modify attributes for shared services .
- You can search for the available metadata schemas and view their definitions using the App Hub API.

### "Class AppHubClient (0.52.0) \_|\_ Java client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-apphub/latest/com.google.cloud.apphub.v1.AppHubClient)
- Source ID: `site-java-reference`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( AppHubClient appHubClient = AppHubClient . create ()) { DeleteServiceProjectAttachmentRequest request = DeleteServiceProjectAttachmentRequest . newBuilder () . setName ( ServiceProjectAttachmentName . of ( "[PROJECT]" , "[LOCATION]" , "[SERVICE PROJECT ATTACHMENT]" ) . toString ()) . setRequestId ( "requestId693933066" ) . build (); OperationFuture<Empty , OperationMetadata > future = appHubClient . deleteServiceProjectAttachmentOperationCallable (). futureCall ( request ); // Do something. future . get (); } Returns Type Description OperationCallable < DeleteServiceProjectAttachmentRequest , Empty , OperationMetadata > deleteWorkloadAsync(DeleteWorkloadRequest request) public final OperationFuture<Empty , OperationMetadata > deleteWorkloadAsync ( DeleteWorkloadRequest request ) Deletes a Workload from an Application.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( AppHubClient appHubClient = AppHubClient . create ()) { DeleteServiceProjectAttachmentRequest request = DeleteServiceProjectAttachmentRequest . newBuilder () . setName ( ServiceProjectAttachmentName . of ( "[PROJECT]" , "[LOCATION]" , "[SERVICE PROJECT ATTACHMENT]" ) . toString ()) . setRequestId ( "requestId693933066" ) . build (); ApiFuture<Operation> future = appHubClient . deleteServiceProjectAttachmentCallable (). futureCall ( request ); // Do something. future . get (); } Returns Type Description UnaryCallable < DeleteServiceProjectAttachmentRequest , Operation > deleteServiceProjectAttachmentOperationCallable() public final OperationCallable<DeleteServiceProjectAttachmentRequest , Empty , OperationMetadata > deleteServiceProjectAttachmentOperationCallable () Deletes a service project attachment.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( AppHubClient appHubClient = AppHubClient . create ()) { DeleteWorkloadRequest request = DeleteWorkloadRequest . newBuilder () . setName ( WorkloadName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" , "[WORKLOAD]" ) . toString ()) . setRequestId ( "requestId693933066" ) . build (); OperationFuture<Empty , OperationMetadata > future = appHubClient . deleteWorkloadOperationCallable (). futureCall ( request ); // Do something. future . get (); } Returns Type Description OperationCallable < DeleteWorkloadRequest , Empty , OperationMetadata > detachServiceProjectAttachment(DetachServiceProjectAttachmentRequest request) public final DetachServiceProjectAttachmentResponse detachServiceProjectAttachment ( DetachServiceProjectAttachmentRequest request ) Detaches a service project from a host project.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( AppHubClient appHubClient = AppHubClient . create ()) { DeleteServiceRequest request = DeleteServiceRequest . newBuilder () . setName ( ServiceName . of ( "[PROJECT]" , "[LOCATION]" , "[APPLICATION]" , "[SERVICE]" ) . toString ()) . setRequestId ( "requestId693933066" ) . build (); OperationFuture<Empty , OperationMetadata > future = appHubClient . deleteServiceOperationCallable (). futureCall ( request ); // Do something. future . get (); } Returns Type Description OperationCallable < DeleteServiceRequest , Empty , OperationMetadata > deleteServiceProjectAttachmentAsync(DeleteServiceProjectAttachmentRequest request) public final OperationFuture<Empty , OperationMetadata > deleteServiceProjectAttachmentAsync ( DeleteServiceProjectAttachmentRequest request ) Deletes a service project attachment.

