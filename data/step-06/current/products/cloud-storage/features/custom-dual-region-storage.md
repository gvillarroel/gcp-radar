---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T01:16:26.795Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Custom dual-region storage"
feature_slug: "custom-dual-region-storage"
latest_feature_date: "2022-04-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/storage/docs/release-notes"
  - "https://docs.cloud.google.com/storage/docs/creating-buckets"
  - "https://docs.cloud.google.com/storage/docs/hosting-static-website"
keywords:
  - "custom"
  - "dual"
  - "region"
  - "storage"
  - "lets"
  - "users"
  - "choose"
  - "two"
---

# Custom dual-region storage

Product: Cloud Storage
Coverage: LOW

## Step 02 Summary

Custom dual-region storage lets users choose two regions within the same continent for a dual-region configuration.

## Extended Definition

Custom dual-region storage lets users choose two regions within the same continent for a dual-region configuration.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/storage/docs/release-notes](https://docs.cloud.google.com/storage/docs/release-notes)
- [https://docs.cloud.google.com/storage/docs/creating-buckets](https://docs.cloud.google.com/storage/docs/creating-buckets)
- [https://docs.cloud.google.com/storage/docs/hosting-static-website](https://docs.cloud.google.com/storage/docs/hosting-static-website)

## Supporting Pages

### Cloud Storage release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/release-notes](https://docs.cloud.google.com/storage/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- April 05, 2022 Feature With dual-region storage , users can now specify two regions within the same continent to create a dual-region of their choosing.
- Node.js Changes for @google-cloud/storage 7.10.2 (2024-04-26) Bug Fixes Use correct indices for file.from and fix tests to verify names ( #2449 ) ( d4240fa ) 7.10.1 (2024-04-22) Bug Fixes Change copyoptions type ( #2439 ) ( 2ebd7ac ) Expand types of custom metadata within FileMetadata ( #2442 ) ( 1d434a9 ) April 23, 2024 Change Default replication monitoring for multi-region and dual-region buckets in the Google Cloud console is now available for the following graphs: Percent of minutes out of RPO Percent of objects out of target Meeting RPO April 22, 2024 Libraries A weekly digest of client library updates from across the Cloud SDK .
- March 17, 2025 Libraries Go 1.51.0 (2025-03-12) Features storage/append: Support appends in w1r3. ( #11483 ) ( 48bb391 ) storage: Benchmark with experimental MRD. ( #11501 ) ( 7b49152 ) storage: Implement RetryChunkDeadline for grpc writes ( #11476 ) ( 03575d7 ) storage: Specify benchmark integrity check. ( #11465 ) ( da18845 ) storage: Use ReadHandle for faster re-connect ( #11510 ) ( cac52f7 ) storage: Wrap NotFound errors for buckets and objects ( #11519 ) ( 0dd7d3d ) Bug Fixes storage/append: Report progress for appends. ( #11503 ) ( 96dbb6c ) storage: Add a safety check for readhandle ( #11549 ) ( c9edb37 ) storage: Add universe domain to defaultSignBytesFunc ( #11521 ) ( 511608b ) storage: Clone the defaultRetry to avoid modifying it directly ( #11533 ) ( 7f8d69d ) storage: Fix adding multiple range on stream with same read id ( #11584 ) ( 0bb3434 ) storage: Modify the callback of mrd to return length of data read instead of limit. ( #11687 ) ( 9e359f0 ) storage: Propagate ctx from invoke to grpc upload reqs ( #11475 ) ( 9ad9d76 ) storage: Remove duplicate routing header ( #11534 ) ( 8eeb59c ) storage: Return sentinel ErrObjectNotExist for copy and compose ( #11369 ) ( 74d0c10 ), refs #10760 storage: Wait for XML read req to finish to avoid data races ( #11527 ) ( 782e12a ) Java 2.50.0 (2025-03-14) Features Next release from main branch is 2.50.0 ( #2968 ) ( 4a69fcc ) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.54.0 ( 22e7e3d ) deps: Update the Java code generator (gapic-generator-java) to 2.55.1 ( 81c8c61 ) Improve 503 handling for json resumable uploads ( #2987 ) ( 9bc2b14 ) Update usages of String.format to explicitly pass Locale.US ( #2974 ) ( 8bcb2de ), closes #2972 Dependencies Update dependency com.google.apis:google-api-services-storage to v1-rev20250224-2.0.0 ( #2969 ) ( 80a40c4 ) Update googleapis/sdk-platform-java action to v2.55.1 ( #2985 ) ( e22a2de ) Update sdk-platform-java dependencies ( #2983 ) ( 9eeb82a ) Update sdk-platform-java dependencies ( #2986 ) ( 10b922a ) Feature Cloud Storage now offers the DE configurable dual-region code, which can be used when creating a dual-region bucket in europe-west3 (Frankfurt) and europe-west10 (Berlin).
- Go Changes for storage/internal/apiv2 1.44.0 (2024-10-03) Features storage/dataflux: Add dataflux interface ( #10748 ) ( cb7b0a1 ) storage/dataflux: Add range splitter #10748 ( #10899 ) ( d49da26 ) storage/dataflux: Add worksteal algorithm to fast-listing ( #10913 ) ( 015b52c ) storage/internal: Add managed folder to testIamPermissions method ( 2f0aec8 ) storage/transfermanager: Add option to StripPrefix on directory download ( #10894 ) ( 607534c ) storage/transfermanager: Add SkipIfExists option ( #10893 ) ( 7daa1bd ) storage/transfermanager: Checksum full object downloads ( #10569 ) ( c366c90 ) storage: Add direct google access side-effect imports by default ( #10757 ) ( 9ad8324 ) storage: Add full object checksum to reader.Attrs ( #10538 ) ( 245d2ea ) storage: Add support for Go 1.23 iterators ( 84461c0 ) storage: Add update time in bucketAttrs ( #10710 ) ( 5f06ae1 ), refs #9361 storage: GA gRPC client ( #10859 ) ( c7a55a2 ) storage: Introduce gRPC client-side metrics ( #10639 ) ( 437bcb1 ) storage: Support IncludeFoldersAsPrefixes for gRPC ( #10767 ) ( 65bcc59 ) Bug Fixes storage/transfermanager: Correct Attrs.StartOffset for sharded downloads ( #10512 ) ( 01a5cbb ) storage: Add retryalways policy to encryption test ( #10644 ) ( 59cfd12 ), refs #10567 storage: Add unknown host to retriable errors ( #10619 ) ( 4ec0452 ) storage: Bump dependencies ( 2ddeb15 ) storage: Bump google.golang.org/grpc@v1.64.1 ( 8ecc4e9 ) storage: Check for grpc NotFound error in HMAC test ( #10645 ) ( 3c8e88a ) storage: Disable grpc metrics using emulator ( #10870 ) ( 35ad73d ) storage: Retry gRPC DEADLINE EXCEEDED errors ( #10635 ) ( 0018415 ) storage: Update dependencies ( 257c40b ) storage: Update google.golang.org/api to v0.191.0 ( 5b32644 ) Performance Improvements storage: GRPC zerocopy codec ( #10888 ) ( aeba28f ) Documentation storage/internal: Clarify possible objectAccessControl roles ( 2f0aec8 ) storage/internal: Update dual-region bucket link ( 2f0aec8 ) September 30, 2024 Libraries A weekly digest of client library updates from across the Cloud SDK .

### Create a bucket \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/creating-buckets](https://docs.cloud.google.com/storage/docs/creating-buckets)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Create new storage bucket in the US multi-region with coldline storage resource "random id" "bucket prefix" { byte length = 8 } resource "google storage bucket" "static" { name = "${random id.bucket prefix.hex}-new-bucket" location = "US" storage class = "COLDLINE" uniform bucket level access = true } REST APIs JSON API Have gcloud CLI installed and initialized , which lets you generate an access token for the Authorization header.
- Note: When creating a configurable dual-region , you must set the <LocationConstraint> element to be the location code associated with the underlying regions, and you must also include a <CustomPlacementConfig> element.
- Note: When creating a configurable dual-region , you must set the location parameter to be the location code associated with the underlying regions, and you must also include a customPlacementConfig parameter.
- If you select the dual-region location type, you can also choose to enable turbo replication by using the relevant checkbox.

### Host a static website \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/hosting-static-website](https://docs.cloud.google.com/storage/docs/hosting-static-website)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information, see Set up authentication for client libraries . def set bucket public iam bucket name : The ID of your GCS bucket bucket name = "your-unique-bucket-name" require "google/cloud/storage" storage = Google :: Cloud :: Storage . new bucket = storage . bucket bucket name bucket . policy do p p . add "roles/storage.objectViewer" , "allUsers" end puts "Bucket #{ bucket name } is now publicly readable" end Terraform Make bucket public by granting allUsers storage.objectViewer access resource "google storage bucket iam member" "public rule" { bucket = google storage bucket.static website.name role = "roles/storage.objectViewer" member = "allUsers" } REST APIs JSON API Have gcloud CLI installed and initialized , which lets you generate an access token for the Authorization header.
- For more information, see Set up authentication for client libraries . def upload file bucket name :, local file path :, file name : nil The ID of your GCS bucket bucket name = "your-unique-bucket-name" The path to your file to upload local file path = "/local/path/to/file.txt" The ID of your GCS object file name = "your-file-name" require "google/cloud/storage" storage = Google :: Cloud :: Storage . new bucket = storage . bucket bucket name , skip lookup : true file = bucket . create file local file path , file name puts "Uploaded #{ local file path } as #{ file . name } in bucket #{ bucket name } " end Terraform Upload a simple index.html page to the bucket resource "google storage bucket object" "indexpage" { name = "index.html" content = "<html><body>Hello World!</body></html>" content type = "text/html" bucket = google storage bucket.static website.id } Upload a simple 404 / error page to the bucket resource "google storage bucket object" "errorpage" { name = "404.html" content = "<html><body>404!</body></html>" content type = "text/html" bucket = google storage bucket.static website.id } REST APIs JSON API Have gcloud CLI installed and initialized , which lets you generate an access token for the Authorization header.
- For more information, see Set up authentication for client libraries . def define bucket website configuration bucket name :, main page suffix :, not found page : The ID of your static website bucket bucket name = "www.example.com" The index page for a static website bucket main page suffix = "index.html" The 404 page for a static website bucket not found page = "404.html" require "google/cloud/storage" storage = Google :: Cloud :: Storage . new bucket = storage . bucket bucket name bucket . update do b b . website main = main page suffix b . website 404 = not found page end puts "Static website bucket #{ bucket name } is set up to use #{ main page suffix } as the index page and " \ " #{ not found page } as the 404 page" end REST APIs JSON API Have gcloud CLI installed and initialized , which lets you generate an access token for the Authorization header.
- For more information, see Set up authentication for client libraries . use Google\Cloud\Storage\StorageClient; / Update the specified bucket's IAM configuration to make it publicly accessible. @param string $bucketName The name of your Cloud Storage bucket. (e.g. 'my-bucket') / function set bucket public iam(string $bucketName): void { $storage = new StorageClient(); $bucket = $storage->bucket($bucketName); $policy = $bucket->iam()->policy(['requestedPolicyVersion' => 3]); $policy['version'] = 3; $role = 'roles/storage.objectViewer'; $members = ['allUsers']; $policy['bindings'][] = [ 'role' => $role, 'members' => $members ]; $bucket->iam()->setPolicy($policy); printf('Bucket %s is now public', $bucketName); } Python For more information, see the Cloud Storage Python API reference documentation .

