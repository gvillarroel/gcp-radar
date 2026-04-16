---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T08:39:49.476Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Artifact Registry artifact export to Cloud Storage"
feature_slug: "artifact-registry-artifact-export-to-cloud-storage"
latest_feature_date: "2025-11-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1.ArtifactRegistryClient"
  - "https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.ArtifactRegistryAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.ArtifactRegistryClient"
keywords:
  - "exportartifact"
  - "bucket"
  - "storage"
  - "export"
  - "introduced"
  - "artifacts"
---

# Artifact Registry artifact export to Cloud Storage

Product: Artifact Registry
Coverage: MEDIUM

## Step 02 Summary

Artifact Registry introduced ExportArtifact() support to export artifacts to a Cloud Storage bucket.

## Extended Definition

Artifact Registry introduced ExportArtifact() support to export artifacts to a Cloud Storage bucket.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1.ArtifactRegistryClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1.ArtifactRegistryClient)
- [https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.ArtifactRegistryAsyncClient](https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.ArtifactRegistryAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.ArtifactRegistryClient](https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.ArtifactRegistryClient)

## Supporting Pages

### "Class ArtifactRegistryClient (1.87.0) \_|\_ Java client libraries \_|\_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1.ArtifactRegistryClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1.ArtifactRegistryClient)
- Source ID: `site-java-reference`
- Final score: 118
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) { DeleteVersionRequest request = DeleteVersionRequest . newBuilder (). setName ( "name3373707" ). setForce ( true ). build (); OperationFuture<Empty , OperationMetadata > future = artifactRegistryClient . deleteVersionOperationCallable (). futureCall ( request ); // Do something. future . get (); } Returns Type Description OperationCallable < DeleteVersionRequest , Empty , OperationMetadata > exportArtifactAsync(ExportArtifactRequest request) public final OperationFuture<ExportArtifactResponse , ExportArtifactMetadata > exportArtifactAsync ( ExportArtifactRequest request ) Exports an artifact to a Cloud Storage bucket.
- Request object method variants only take one parameter, a request object, which must be constructed before the call. deleteAttachmentAsync(DeleteAttachmentRequest request) Methods that return long-running operations have "Async" method variants that return OperationFuture , which is used to track polling of the service. deleteAttachmentAsync(AttachmentName name) deleteAttachmentAsync(String name) Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service. deleteAttachmentOperationCallable() deleteAttachmentCallable() ExportArtifact Exports an artifact to a Cloud Storage bucket.
- Operation response = future . get (); } Returns Type Description UnaryCallable < ExportArtifactRequest , Operation > exportArtifactOperationCallable() public final OperationCallable<ExportArtifactRequest , ExportArtifactResponse , ExportArtifactMetadata > exportArtifactOperationCallable () Exports an artifact to a Cloud Storage bucket.
- Returns Type Description OperationFuture < ExportArtifactResponse , ExportArtifactMetadata > exportArtifactCallable() public final UnaryCallable<ExportArtifactRequest , Operation > exportArtifactCallable () Exports an artifact to a Cloud Storage bucket.

### "Class ArtifactRegistryAsyncClient (1.20.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.ArtifactRegistryAsyncClient](https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.ArtifactRegistryAsyncClient)
- Source ID: `site-python-reference`
- Final score: 90
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- AsyncOperation Exports an artifact to a Cloud Storage bucket.
- ExportArtifactRequest ( source version="source version value", gcs path="gcs path value", repository="repository value", ) Make the request operation = client. export artifact (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.artifactregistry v1.types.ExportArtifactRequest , dict]] The request object.
- The result type for the operation will be ExportArtifactResponse The response for exporting an artifact to a destination. file path file path ( project : str , location : str , repository : str , file : str ) - > str Returns a fully-qualified file string. from service account file from service account file ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- ExportArtifactRequest , dict ] ] = None , , retry : typing .

### "Class ArtifactRegistryClient (1.20.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.ArtifactRegistryClient](https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.ArtifactRegistryClient)
- Source ID: `site-python-reference`
- Final score: 90
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Operation Exports an artifact to a Cloud Storage bucket.
- ExportArtifactRequest ( source version="source version value", gcs path="gcs path value", repository="repository value", ) Make the request operation = client. export artifact (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.artifactregistry v1.types.ExportArtifactRequest , dict] The request object.
- The result type for the operation will be ExportArtifactResponse The response for exporting an artifact to a destination. file path file path ( project : str , location : str , repository : str , file : str ) - > str Returns a fully-qualified file string. from service account file from service account file ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- ExportArtifactRequest , dict ] ] = None , , retry : typing .

