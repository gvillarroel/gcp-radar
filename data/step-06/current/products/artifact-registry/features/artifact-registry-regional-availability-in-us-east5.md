---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T08:39:49.493Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Artifact Registry regional availability in us-east5"
feature_slug: "artifact-registry-regional-availability-in-us-east5"
latest_feature_date: "2022-05-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/reference/rest"
  - "https://docs.cloud.google.com/artifact-registry/docs/docker/authentication"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1.ArtifactRegistryClient"
keywords:
  - "east5"
  - "availability"
  - "regional"
  - "available"
  - "region"
---

# Artifact Registry regional availability in us-east5

Product: Artifact Registry
Coverage: MEDIUM

## Step 02 Summary

Artifact Registry is available in the us-east5 region (Columbus, United States).

## Extended Definition

Artifact Registry is available in the us-east5 region (Columbus, United States).

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/reference/rest](https://docs.cloud.google.com/artifact-registry/docs/reference/rest)
- [https://docs.cloud.google.com/artifact-registry/docs/docker/authentication](https://docs.cloud.google.com/artifact-registry/docs/docker/authentication)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1.ArtifactRegistryClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1.ArtifactRegistryClient)

## Supporting Pages

### Artifact Registry API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/reference/rest](https://docs.cloud.google.com/artifact-registry/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- Select a location to see its regional service endpoint for this service. global africa-south1 asia-east1 asia-east2 asia-northeast1 asia-northeast2 asia-northeast3 asia-south1 asia-south2 asia-southeast1 asia-southeast2 australia-southeast1 australia-southeast2 europe-central2 europe-north1 europe-southwest1 europe-west1 europe-west10 europe-west12 europe-west2 europe-west3 europe-west4 europe-west6 europe-west8 europe-west9 me-central1 me-west1 northamerica-northeast1 northamerica-northeast2 southamerica-east1 southamerica-west1 us-central1 us-east1 us-east4 us-east5 us-south1 us-west1 us-west2 us-west3 us-west4 me-central2 us-east7 us eu https://artifactregistry.googleapis.com REST Resource: v1.projects Methods getProjectSettings GET /v1/{name=projects/ /projectSettings} Retrieves the Settings for the Project. updateProjectSettings PATCH /v1/{projectSettings.name=projects/ /projectSettings} Updates the Settings for the Project.
- A service that is available in multiple regions might have multiple regional endpoints.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://artifactregistry.googleapis.com Regional service endpoint A regional service endpoint is a base URL that specifies the network address of an API service in a single region.

### "Class ArtifactRegistryClient (1.87.0) \_|\_ Java client libraries \_|\_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1.ArtifactRegistryClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1.ArtifactRegistryClient)
- Source ID: `site-java-reference`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- For example: To customize credentials: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library ArtifactRegistrySettings artifactRegistrySettings = ArtifactRegistrySettings . newBuilder () . setCredentialsProvider ( FixedCredentialsProvider . create ( myCredentials )) . build (); ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ( artifactRegistrySettings ); To customize the endpoint: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library ArtifactRegistrySettings artifactRegistrySettings = ArtifactRegistrySettings . newBuilder (). setEndpoint ( myEndpoint ). build (); ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ( artifactRegistrySettings ); To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over the wire: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library ArtifactRegistrySettings artifactRegistrySettings = ArtifactRegistrySettings . newHttpJsonBuilder (). build (); ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ( artifactRegistrySettings ); Please refer to the GitHub repository's samples for more quickstart code snippets.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) { BatchDeleteVersionsRequest request = BatchDeleteVersionsRequest . newBuilder () . setParent ( PackageName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[PACKAGE]" ). toString ()) . addAllNames ( new ArrayList<String> ()) . setValidateOnly ( true ) . build (); OperationFuture<Empty , BatchDeleteVersionsMetadata > future = artifactRegistryClient . batchDeleteVersionsOperationCallable (). futureCall ( request ); // Do something. future . get (); } Returns Type Description OperationCallable < BatchDeleteVersionsRequest , Empty , BatchDeleteVersionsMetadata > close() public final void close () createAttachmentAsync(CreateAttachmentRequest request) public final OperationFuture<Attachment , OperationMetadata > createAttachmentAsync ( CreateAttachmentRequest request ) Creates an attachment.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) { ListVersionsRequest request = ListVersionsRequest . newBuilder () . setParent ( "parent-995424086" ) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . setView ( VersionView . forNumber ( 0 )) . setOrderBy ( "orderBy-1207110587" ) . setFilter ( "filter-1274492040" ) . build (); ApiFuture<Version> future = artifactRegistryClient . listVersionsPagedCallable (). futureCall ( request ); // Do something. for ( Version element : future . get (). iterateAll ()) { // doThingsWith(element); } } Returns Type Description UnaryCallable < ListVersionsRequest , ListVersionsPagedResponse > setIamPolicy(SetIamPolicyRequest request) public final Policy setIamPolicy ( SetIamPolicyRequest request ) Updates the IAM policy for a given resource.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) { BatchDeleteVersionsRequest request = BatchDeleteVersionsRequest . newBuilder () . setParent ( PackageName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[PACKAGE]" ). toString ()) . addAllNames ( new ArrayList<String> ()) . setValidateOnly ( true ) . build (); ApiFuture<Operation> future = artifactRegistryClient . batchDeleteVersionsCallable (). futureCall ( request ); // Do something. future . get (); } Returns Type Description UnaryCallable < BatchDeleteVersionsRequest , Operation > batchDeleteVersionsOperationCallable() public final OperationCallable<BatchDeleteVersionsRequest , Empty , BatchDeleteVersionsMetadata > batchDeleteVersionsOperationCallable () Deletes multiple versions across a repository.

### "Configure authentication to Artifact Registry for Docker \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/docker/authentication](https://docs.cloud.google.com/artifact-registry/docs/docker/authentication)
- Source ID: `site-docs-root-2`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- Run the following command, replacing ACCOUNT with your service account email address and LOCATION with the regional or multi-regional location of the repository.
- LOCATION is the regional or multi-regional location of the repository where the image is stored.
- For example, to add the regions us-west1 and asia-northeast1 , run the command: docker-credential-gcr configure-docker --registries=us-west1-docker.pkg.dev,asia-northeast1-docker.pkg.dev The specified hostnames are added to the credential helper configuration.
- For example, to add the regions us-west1 and asia-northeast1 , run the command: gcloud auth configure-docker us-west1-docker.pkg.dev,asia-northeast1-docker.pkg.dev The specified hostnames are added to the credential helper configuration.

