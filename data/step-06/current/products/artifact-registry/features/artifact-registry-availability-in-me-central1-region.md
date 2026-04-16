---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T08:39:49.489Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Artifact Registry availability in me-central1 region"
feature_slug: "artifact-registry-availability-in-me-central1-region"
latest_feature_date: "2023-03-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1.ArtifactRegistryClient"
  - "https://docs.cloud.google.com/artifact-registry/docs/docker/pushing-and-pulling"
  - "https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr"
keywords:
  - "central1"
  - "became"
  - "availability"
  - "available"
  - "region"
---

# Artifact Registry availability in me-central1 region

Product: Artifact Registry
Coverage: MEDIUM

## Step 02 Summary

Artifact Registry became available in the me-central1 (Doha) region.

## Extended Definition

Artifact Registry became available in the me-central1 (Doha) region.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1.ArtifactRegistryClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1.ArtifactRegistryClient)
- [https://docs.cloud.google.com/artifact-registry/docs/docker/pushing-and-pulling](https://docs.cloud.google.com/artifact-registry/docs/docker/pushing-and-pulling)
- [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr)

## Supporting Pages

### "Class ArtifactRegistryClient (1.87.0) \_|\_ Java client libraries \_|\_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1.ArtifactRegistryClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1.ArtifactRegistryClient)
- Source ID: `site-java-reference`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- The maximum number of versions deleted per batch is determined by the service and is dependent on the available resources in the region.
- The maximum number of versions deleted per batch is determined by the service and is dependent on the available resources in the region.
- For example: To customize credentials: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library ArtifactRegistrySettings artifactRegistrySettings = ArtifactRegistrySettings . newBuilder () . setCredentialsProvider ( FixedCredentialsProvider . create ( myCredentials )) . build (); ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ( artifactRegistrySettings ); To customize the endpoint: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library ArtifactRegistrySettings artifactRegistrySettings = ArtifactRegistrySettings . newBuilder (). setEndpoint ( myEndpoint ). build (); ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ( artifactRegistrySettings ); To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over the wire: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library ArtifactRegistrySettings artifactRegistrySettings = ArtifactRegistrySettings . newHttpJsonBuilder (). build (); ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ( artifactRegistrySettings ); Please refer to the GitHub repository's samples for more quickstart code snippets.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) { BatchDeleteVersionsRequest request = BatchDeleteVersionsRequest . newBuilder () . setParent ( PackageName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[PACKAGE]" ). toString ()) . addAllNames ( new ArrayList<String> ()) . setValidateOnly ( true ) . build (); OperationFuture<Empty , BatchDeleteVersionsMetadata > future = artifactRegistryClient . batchDeleteVersionsOperationCallable (). futureCall ( request ); // Do something. future . get (); } Returns Type Description OperationCallable < BatchDeleteVersionsRequest , Empty , BatchDeleteVersionsMetadata > close() public final void close () createAttachmentAsync(CreateAttachmentRequest request) public final OperationFuture<Attachment , OperationMetadata > createAttachmentAsync ( CreateAttachmentRequest request ) Creates an attachment.

### Push and pull images \_|\_ Artifact Registry \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/docker/pushing-and-pulling](https://docs.cloud.google.com/artifact-registry/docs/docker/pushing-and-pulling)
- Source ID: `site-docs-root-2`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- The following example shows some hosts configured for the gcloud CLI credential helper. "credHelpers" : { "asia.gcr.io" : "gcloud" , "eu.gcr.io" : "gcloud" , "gcr.io" : "gcloud" , "marketplace.gcr.io" : "gcloud" , "northamerica-northeast1-docker.pkg.dev" : "gcloud" , "us-central1-docker.pkg.dev" : "gcloud" , "us-east1-docker.pkg.dev" : "gcloud" , "us.gcr.io" : "gcloud" } If a host you want to use is not in the list, run the credential helper again to add the host.
- To pull from a repository, use the command: docker pull LOCATION -docker.pkg.dev/ PROJECT-ID / REPOSITORY / IMAGE : TAG or docker pull LOCATION -docker.pkg.dev/ PROJECT-ID / REPOSITORY / IMAGE @ IMAGE-DIGEST Replace the following values: LOCATION is the regional or multi-regional location of the repository where the image is stored.
- Since they both have the same priority value, Artifact Registry can choose to serve an image from either repository if the version is available in both of them. test-repo has is lowest priority value and will serve a stored artifact if none of the other upstream repositories has it.
- The format of a full image name is: LOCATION -docker.pkg.dev/ PROJECT-ID / REPOSITORY / IMAGE Replace the following values: LOCATION is the regional or multi-regional location of the repository where the image is stored.

### "Transition from Container Registry \_|\_ Artifact Registry \_|\_ Google\

- URL: [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr)
- Source ID: `site-docs-root`
- Final score: 59
- Re-rank relevance: N/A

Evidence snippets:
- Since registry hosts are only available in multi-regions, data transfer costs include deploying images to Google Cloud Artifact Registry has its own pricing , based on storage and network data transfer.
- Registry location Only four multi-regional registry hosts are available in a Google Cloud project.
- Effective March 18, 2025, Container Registry is shut down and writing images to Container Registry is unavailable. gcr.io URLs hosted on Artifact Registry, including Google-owned images with gcr.io URLs, are not affected by the Container Registry shutdown.
- Cloud Run source deployment Unavailable Source deployment lets you use a single gcloud CLI command to build a container image from your source code, store the image in Artifact Registry, and deploy it to Cloud Run.

