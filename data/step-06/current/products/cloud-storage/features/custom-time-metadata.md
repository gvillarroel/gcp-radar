---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T01:16:26.825Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Custom time metadata"
feature_slug: "custom-time-metadata"
latest_feature_date: "2020-09-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/storage/docs/release-notes"
  - "https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists"
  - "https://docs.cloud.google.com/storage/docs/hosting-static-website"
keywords:
  - "custom"
  - "time"
  - "metadata"
  - "lets"
  - "users"
  - "assign"
  - "an"
  - "arbitrary"
---

# Custom time metadata

Product: Cloud Storage
Coverage: LOW

## Step 02 Summary

Custom time metadata lets users assign an arbitrary date and time to Cloud Storage objects.

## Extended Definition

Custom time metadata lets users assign an arbitrary date and time to Cloud Storage objects.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/storage/docs/release-notes](https://docs.cloud.google.com/storage/docs/release-notes)
- [https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists](https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists)
- [https://docs.cloud.google.com/storage/docs/hosting-static-website](https://docs.cloud.google.com/storage/docs/hosting-static-website)

## Supporting Pages

### Cloud Storage release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/release-notes](https://docs.cloud.google.com/storage/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Custom time metadata allows you to associate an arbitrary date and time with objects.
- The default checksum strategy for uploads has changed from None to "auto" ( #1383 ) The default checksum strategy for downloads has changed from "md5" to "auto" ( #1383 ) Deprecated positional argument "num retries" has been removed ( #1377 ) Deprecated argument "text mode" has been removed ( #1379 ) Blob.download to filename() now deletes the empty destination file on a 404 ( #1394 ) Media operations now use the same retry backoff, timeout and custom predicate system as non-media operations, which may slightly impact default retry behavior ( #1385 ) Retries are now enabled by default for uploads, blob deletes and blob metadata updates ( #1400 ) Features Add "auto" checksum option and make default ( #1383 ) ( 5375fa0 ) Blob.download to filename() deletes the empty destination file on a 404 ( #1394 ) ( 066be2d ) Enable custom predicates for media operations ( #1385 ) ( f3517bf ) Integrate google-resumable-media ( #1283 ) ( bd917b4 ) Retry by default for uploads, blob deletes, metadata updates ( #1400 ) ( 0426005 ) Bug Fixes Cancel upload when BlobWriter exits with exception ( #1243 ) ( df107d2 ) Changed name of methods Blob.from string() and Bucket.from string() to from uri() ( #1335 ) ( 58c1d03 ) Correctly calculate starting offset for retries of ranged reads ( #1376 ) ( 7b6c9a0 ) Filter download kwargs in BlobReader ( #1411 ) ( 0c21210 ) Remove deprecated num retries argument ( #1377 ) ( 58b5040 ) Remove deprecated text mode argument ( #1379 ) ( 4d20a8e ) Documentation Correct formatting and update README.rst ( #1427 ) ( 2945853 ) Fix issue with exceptions.py documentation ( #1328 ) ( 22b8c30 ) January 31, 2025 Feature You can now enable client-side traces with OpenTelemetry when you use Cloud Storage client libraries.
- November 10, 2025 Libraries Python 3.5.0 (2025-11-05) Features Ensure that Python in FIPS mode can fetch MD5 implementation ( #1522 ) ( 961536c ) Provide option to update user agent ( #1596 ) ( 02f1451 ) Bug Fixes Deprecate credentials file argument ( 74415a2 ) Flaky system tests for resumable media ( #1592 ) ( 7fee3dd ) Make download ranges compatible with asyncio.create task(..) ( #1591 ) ( faf8b83 ) Make download ranges compatible with asyncio.create task(..) ( #1591 ) ( faf8b83 ) Redact sensitive data from OTEL traces and fix env var parsing ( #1553 ) ( a38ca19 ) Redact sensitive data from OTEL traces and fix env var parsing ( #1553 ) ( a38ca19 ) Use separate header object for each upload in Transfer Manager MPU ( #1595 ) ( 0d867bd ) Java 2.60.0 (2025-11-07) Features Add preview MultipartUploadClient#abortMultipartUpload https://github.com/googleapis/java-storage/pull/3361 ( 160fa9a ) Add preview MultipartUploadClient#completeMultipartUpload https://github.com/googleapis/java-storage/pull/3372 ( 160fa9a ) Add preview MultipartUploadClient#createMultipartUpload https://github.com/googleapis/java-storage/pull/3356 ( 160fa9a ) Add preview MultipartUploadClient#listParts https://github.com/googleapis/java-storage/pull/3359 ( 160fa9a ) Add preview MultipartUploadClient#uploadPart https://github.com/googleapis/java-storage/pull/3375 ( 160fa9a ) Add preview MultipartUploadSettings ( 160fa9a ) Bug Fixes Add new system property (com.google.cloud.storage.grpc.bound token) to allow disabling bound token use with grpc ( #3365 ) ( ebf5e6d ) Call response.disconnect() after resolving resumable upload url ( #3385 ) ( ac3be4b ) deps: Update the Java code generator (gapic-generator-java) to 2.63.0 ( c1a8968 ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.54.1 ( #3381 ) ( e3d3700 ) November 03, 2025 Libraries Go 1.57.1 (2025-10-28) Bug Fixes storage: Takeover idempotence. ( #13230 ) ( cc5d2a1 ) storage: Copy metadata when using Copier with grpc ( #12919 ) ( 57a2e80 ) storage: Fix takeover response handling. ( #13239 ) ( 26d75bc ) storage: Remove default timeout for gRPC operations ( #13022 ) ( b94c3ba ) storage: Skip download of file outside of target dir ( #12945 ) ( 6259aee ) storage: Upgrade gRPC service registration func ( 8fffca2 ) October 27, 2025 Libraries Java 2.59.0 (2025-10-21) Features Add per-message checksum validation for gRPC ReadObject operations ( #3336 ) ( 6eef1b0 ) Bug Fixes Add case insensitive check for X-Goog-Content-SHA256 in SignatureInfo ( #3337 ) ( 54bc2c1 ) Migrate away from GoogleCredentials.fromStream() usages ( #3339 ) ( 7e42c2f ) Update BlobReadSession channels to not implicitly close once EOF is observed ( #3344 ) ( 9f0a93e ) Update grpc single-shot uploads to attach the callers stracktrace as suppressed exception if an error happens in the background ( #3330 ) ( 64e2b2e ) Update retry logic for grpc start resumable upload to properly handle client side deadline exceeded ( #3354 ) ( 6eb3331 ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.53.0 ( #3351 ) ( e64565a ) October 23, 2025 Feature You can now use Storage batch operations to create and manage retention configurations for objects in bulk using the PutMetadata transformation.
- Java Changes for google-cloud-storage 2.46.0 (2024-12-13) Features Introduce java.time methods and variables ( #2826 ) ( baf30ee ) Bug Fixes Update retry lifecycle when attempting to decompress a gzip object ( #2840 ) ( 7dba13c ) Dependencies Update dependency com.google.apis:google-api-services-storage to v1-rev20241113-2.0.0 ( #2823 ) ( 503e518 ) Update dependency com.google.apis:google-api-services-storage to v1-rev20241206-2.0.0 ( #2839 ) ( 8f3cdd3 ) Update gcr.io/cloud-devrel-public-resources/storage-testbench docker tag to v0.50.0 ( #2825 ) ( 9aa68a6 ) Update sdk-platform-java dependencies ( #2841 ) ( 2a70481 ) Documentation Add samples for soft delete (objects) ( #2754 ) ( 41bc807 ) Python Changes for google-cloud-storage 3.0.0rc1 (2024-12-12) ⚠ BREAKING CHANGES The default checksum strategy for uploads has changed from None to "auto" ( #1383 ) (5375fa0) The default checksum strategy for downloads has changed from "md5" to "auto" ( #1383 ) (5375fa0) Deprecated positional argument "num retries" has been removed ( #1377 ) (58b5040) Deprecated argument "text mode" has been removed ( #1379 ) (4d20a8e) Media operation retries now work identically to other retries, which may impact default retry settings ( #1385 ) (f3517bf) Blob.download to filename() deletes the empty destination file on a 404 Features Add "auto" checksum option and make default ( #1383 ) ( 5375fa0 ) Blob.download to filename() deletes the empty destination file on a 404 ( 066be2d ) Deprecated argument "text mode" has been removed ( #1379 ) (4d20a8e) ( 4e9a382 ) Deprecated positional argument "num retries" has been removed ( #1377 ) (58b5040) ( 4e9a382 ) Enable custom predicates for media operations ( #1385 ) ( f3517bf ) Integrate google-resumable-media ( #1283 ) ( bd917b4 ) Media operation retries now work identically to other retries, which may impact default retry settings ( #1385 ) (f3517bf) ( 4e9a382 ) The default checksum strategy for downloads has changed from "md5" to "auto" ( #1383 ) (5375fa0) ( 4e9a382 ) The default checksum strategy for uploads has changed from None to "auto" ( #1383 ) (5375fa0) ( 4e9a382 ) Bug Fixes Cancel upload when BlobWriter exits with exception ( #1243 ) ( df107d2 ) Changed name of methods Blob.from string() and Bucket.from string() to from uri() ( #1335 ) ( 58c1d03 ) Correctly calculate starting offset for retries of ranged reads ( #1376 ) ( 7b6c9a0 ) Remove deprecated num retries argument ( #1377 ) ( 58b5040 ) Remove deprecated text mode argument ( #1379 ) ( 4d20a8e ) Documentation Fix issue with exceptions.py documentation ( #1328 ) ( 22b8c30 ) December 09, 2024 Libraries A weekly digest of client library updates from across the Cloud SDK .

### "Create and manage access control lists (ACLs) \_|\_ Cloud Storage \_|\_\

- URL: [https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists](https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists)
- Source ID: `site-iam-reference`
- Final score: 140
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Apply a predefined ACL Rather than specifying the entire ACL one entry at a time as shown previously, you can use a predefined ACL , which will automatically apply a number of entries customized to a specific scenario.
- The following example shows different bucket ACL entries: <?xml version="1.0" encoding="UTF-8"?> <AccessControlList> <Owner> <ID>00b4903a9721...</ID> </Owner> <Entries> <Entry> <Scope type="GroupById"> <ID>00b4903a9722...</ID> </Scope> <Permission>FULL CONTROL</Permission> </Entry> <Entry> <Scope type="GroupByDomain"> <Domain>example.com</Domain> </Scope> <Permission>READ</Permission> </Entry> <Entry> <Scope type="GroupByEmail"> <EmailAddress>gs-announce@googlegroups.com</EmailAddress> </Scope> <Permission>READ</Permission> </Entry> <Entry> <Scope type="UserByEmail"> <EmailAddress>jeffersonloveshiking@gmail.com</EmailAddress> <Name>Jefferson</Name> </Scope> <Permission>FULL CONTROL</Permission> </Entry> <Entry> <Scope type="AllUsers"/> <Permission>READ</Permission> </Entry> <Entry> <Scope type="AllAuthenticatedUsers"/> <Permission>READ</Permission> </Entry> </Entries> </AccessControlList> Set the Name element in ACL XML When you retrieve an ACL from a bucket or object, you might notice an additional <Name> element appended to some of your entries.
- You can use // addAllUsers(), addDomain(), addProject(), addGroup(), and // addAllAuthenticatedUsers() to grant access to different types of entities. // You can also use "readers" and "writers" to grant different roles. await storage . bucket ( bucketName ). acl . default . owners . addUser ( userEmail ); console . log ( Added user ${ userEmail } as an owner on bucket ${ bucketName } . ); } addBucketDefaultOwner (). catch ( console . error ); The following sample deletes a default object ACL from a bucket: / TODO(developer): Uncomment the following lines before running the sample. / // The ID of your GCS bucket // const bucketName = 'your-unique-bucket-name'; // The email address of the user to remove // const userEmail = 'user-email-to-remove'; // Imports the Google Cloud client library const { Storage } = require ( ' @google-cloud/storage ' ); // Creates a client const storage = new Storage (); async function removeBucketDefaultOwner () { // Removes the user from the access control list of the bucket.
- CreateObjectAcl ( bucket name , object name , entity , gcs :: ObjectAccessControl :: ROLE OWNER ()); if ( ! patched acl ) throw std :: move ( patched acl ). status (); std :: cout << "ACL entry for " << patched acl - > entity () << " in object " << patched acl - > object () << " in bucket " << patched acl - > bucket () << " is now " << patched acl << " \n " ; } The following sample removes an ACL from an object: namespace gcs = :: google :: cloud :: storage ; using :: google :: cloud :: StatusOr ; []( gcs :: Client client , std :: string const & bucket name , std :: string const & object name , std :: string const & entity ) { StatusOr<gcs :: ObjectMetadata > original metadata = client .

### Host a static website \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/hosting-static-website](https://docs.cloud.google.com/storage/docs/hosting-static-website)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information, see Set up authentication for client libraries . def set bucket public iam bucket name : The ID of your GCS bucket bucket name = "your-unique-bucket-name" require "google/cloud/storage" storage = Google :: Cloud :: Storage . new bucket = storage . bucket bucket name bucket . policy do p p . add "roles/storage.objectViewer" , "allUsers" end puts "Bucket #{ bucket name } is now publicly readable" end Terraform Make bucket public by granting allUsers storage.objectViewer access resource "google storage bucket iam member" "public rule" { bucket = google storage bucket.static website.name role = "roles/storage.objectViewer" member = "allUsers" } REST APIs JSON API Have gcloud CLI installed and initialized , which lets you generate an access token for the Authorization header.
- Assigning either is optional, but if you don't assign an index page suffix and upload the corresponding index page, users who access your top-level site are served an XML document tree containing a list of the public objects in your bucket.
- Recommended: assign specialty pages You can assign an index page suffix and a custom error page, which are known as specialty pages.
- For more information, see Set up authentication for client libraries . def upload file bucket name :, local file path :, file name : nil The ID of your GCS bucket bucket name = "your-unique-bucket-name" The path to your file to upload local file path = "/local/path/to/file.txt" The ID of your GCS object file name = "your-file-name" require "google/cloud/storage" storage = Google :: Cloud :: Storage . new bucket = storage . bucket bucket name , skip lookup : true file = bucket . create file local file path , file name puts "Uploaded #{ local file path } as #{ file . name } in bucket #{ bucket name } " end Terraform Upload a simple index.html page to the bucket resource "google storage bucket object" "indexpage" { name = "index.html" content = "<html><body>Hello World!</body></html>" content type = "text/html" bucket = google storage bucket.static website.id } Upload a simple 404 / error page to the bucket resource "google storage bucket object" "errorpage" { name = "404.html" content = "<html><body>404!</body></html>" content type = "text/html" bucket = google storage bucket.static website.id } REST APIs JSON API Have gcloud CLI installed and initialized , which lets you generate an access token for the Authorization header.

