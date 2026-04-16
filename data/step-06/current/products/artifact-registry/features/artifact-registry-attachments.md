---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T08:39:49.477Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Artifact Registry attachments"
feature_slug: "artifact-registry-attachments"
latest_feature_date: "2025-04-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/repositories"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1.ArtifactRegistryClient"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1"
keywords:
  - "attachments"
  - "introduced"
  - "across"
  - "repository"
  - "preview"
---

# Artifact Registry attachments

Product: Artifact Registry
Coverage: MEDIUM

## Step 02 Summary

Artifact Registry introduced preview support for attachments across all repository formats to store metadata related to artifacts.

## Extended Definition

Artifact Registry introduced preview support for attachments across all repository formats to store metadata related to artifacts.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/repositories](https://docs.cloud.google.com/artifact-registry/docs/repositories)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1.ArtifactRegistryClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1.ArtifactRegistryClient)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1)

## Supporting Pages

### Repository overview \_|\_ Artifact Registry \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/repositories](https://docs.cloud.google.com/artifact-registry/docs/repositories)
- Source ID: `site-docs-root`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- This approach can be more effective when a single person or team handles repository administration and repository access across your organization.
- For example, given a repository containing the following artifacts: IMAGE: us-west1-docker.pkg.dev/my-project/release-xyz-v1 DIGEST: sha256:1b0a26bd07a3d17473d8d8468bea84015e27f87124b2831234581bce13f61370 TAGS: CREATE TIME: 2023 -06-19T18:59:09 UPDATE TIME: 2023 -06-19T18:59:10 IMAGE: us-west1-docker.pkg.dev/my-project/release-xyz-v2 DIGEST: sha256:6e494387c901caf429c1bf77bd92fb82b33a68c0e19f123456a3ac8d27a7049d TAGS: latest CREATE TIME: 2023 -06-19T18:59:09 UPDATE TIME: 2023 -06-19T18:59:09 IMAGE: us-west1-docker.pkg.dev/my-project/release-v2 DIGEST: sha256:6e494387c901caf429c1bf77bd92fb82b33a68c0e19f123456a3ac8d27a7049d TAGS: latest CREATE TIME: 2023 -06-19T18:59:09 UPDATE TIME: 2023 -06-19T18:59:09 If your Keep most recent versions policy is set to keep 3 versions of packages matching the Package prefixes : {release-xyz} , only release-xyz-v1 , and release-xyz-v2 are kept.
- Restricting repository locations If you need to comply with regulations or policies that require you to store data in specific regions, you can include a resource locations constraint in your Google Cloud organization policy that only allows repository creation in compliant regions.
- For example, if you developers team in Australia need to download artifacts from Artifact Registry to their local workstations, a repository in an Australian region will reduce latency and incur lower egress charges than a repository located on another continent.

### "Class ArtifactRegistryClient (1.87.0) \_|\_ Java client libraries \_|\_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1.ArtifactRegistryClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1.ArtifactRegistryClient)
- Source ID: `site-java-reference`
- Final score: 77
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) { BatchDeleteVersionsRequest request = BatchDeleteVersionsRequest . newBuilder () . setParent ( PackageName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" , "[PACKAGE]" ). toString ()) . addAllNames ( new ArrayList<String> ()) . setValidateOnly ( true ) . build (); ApiFuture<Operation> future = artifactRegistryClient . batchDeleteVersionsCallable (). futureCall ( request ); // Do something. future . get (); } Returns Type Description UnaryCallable < BatchDeleteVersionsRequest , Operation > batchDeleteVersionsOperationCallable() public final OperationCallable<BatchDeleteVersionsRequest , Empty , BatchDeleteVersionsMetadata > batchDeleteVersionsOperationCallable () Deletes multiple versions across a repository.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) { ListAttachmentsRequest request = ListAttachmentsRequest . newBuilder () . setParent ( RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" ). toString ()) . setFilter ( "filter-1274492040" ) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . build (); ApiFuture<Attachment> future = artifactRegistryClient . listAttachmentsPagedCallable (). futureCall ( request ); // Do something. for ( Attachment element : future . get (). iterateAll ()) { // doThingsWith(element); } } Returns Type Description UnaryCallable < ListAttachmentsRequest , ListAttachmentsPagedResponse > listDockerImages(ListDockerImagesRequest request) public final ArtifactRegistryClient .
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) { ListAttachmentsRequest request = ListAttachmentsRequest . newBuilder () . setParent ( RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" ). toString ()) . setFilter ( "filter-1274492040" ) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . build (); while ( true ) { ListAttachmentsResponse response = artifactRegistryClient . listAttachmentsCallable (). call ( request ); for ( Attachment element : response . getAttachmentsList ()) { // doThingsWith(element); } String nextPageToken = response . getNextPageToken (); if ( !
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( ArtifactRegistryClient artifactRegistryClient = ArtifactRegistryClient . create ()) { ListAttachmentsRequest request = ListAttachmentsRequest . newBuilder () . setParent ( RepositoryName . of ( "[PROJECT]" , "[LOCATION]" , "[REPOSITORY]" ). toString ()) . setFilter ( "filter-1274492040" ) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . build (); for ( Attachment element : artifactRegistryClient . listAttachments ( request ). iterateAll ()) { // doThingsWith(element); } } Parameter Name Description request ListAttachmentsRequest The request object containing all of the parameters for the API call.

### "Package com.google.devtools.artifactregistry.v1 (1.87.0) \_|\_ Java client\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1)
- Source ID: `site-java-reference`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- Builder Builder for projects/{project}/locations/{location}/repositories/{repository}/attachments/{attachment}. com. google. devtools. artifactregistry. v1.
- Batch Delete Versions Request The request to delete multiple versions across a repository. com. google. devtools. artifactregistry. v1.
- Builder The request to delete multiple versions across a repository. com. google. devtools. artifactregistry. v1.
- 1.87.0 (latest) 1.86.0 1.84.0 1.82.0 1.81.0 1.80.0 1.79.0 1.77.0 1.75.0 1.74.0 1.73.0 1.72.0 1.71.0 1.69.0 1.67.0 1.66.0 1.63.0 1.62.0 1.61.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.50.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.10.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.9 1.1.1 0.5.0 0.4.0 GitHub Repository RPC Documentation REST Documentation Client Classes Client classes are the main entry point to using a package.

