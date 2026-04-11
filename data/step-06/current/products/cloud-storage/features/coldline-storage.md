---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T01:16:26.880Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Coldline Storage"
feature_slug: "coldline-storage"
latest_feature_date: "2016-10-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/storage/docs/storage-classes"
  - "https://docs.cloud.google.com/storage/docs/autoclass"
  - "https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists"
keywords:
  - "coldline"
  - "storage"
  - "is"
  - "an"
  - "archival"
  - "class"
  - "for"
  - "low"
---

# Coldline Storage

Product: Cloud Storage
Coverage: LOW

## Step 02 Summary

Coldline Storage is an archival storage class for low-cost, immediately accessible data used for backup, archival, and disaster recovery.

## Extended Definition

Coldline Storage is an archival storage class for low-cost, immediately accessible data used for backup, archival, and disaster recovery.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/storage/docs/storage-classes](https://docs.cloud.google.com/storage/docs/storage-classes)
- [https://docs.cloud.google.com/storage/docs/autoclass](https://docs.cloud.google.com/storage/docs/autoclass)
- [https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists](https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists)

## Supporting Pages

### Storage classes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/storage-classes](https://docs.cloud.google.com/storage/docs/storage-classes)
- Source ID: `site-docs-root`
- Final score: 224
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Storage Class Name for APIs and CLIs Minimum storage duration Retrieval fees Typical monthly availability 1 Rapid storage 2 RAPID None None 99.95% in zones Standard storage STANDARD None None 99.99% in multi-regions and dual-regions 99.99% in regions Nearline storage NEARLINE 30 days Yes 99.95% in multi-regions and dual-regions 99.9% in regions Coldline storage COLDLINE 90 days Yes 99.95% in multi-regions and dual-regions 99.9% in regions Archive storage ARCHIVE 365 days Yes 99.95% in multi-regions and dual-regions 99.9% in regions 1 See the class descriptions for the availability SLA for each storage class.
- Coldline storage is a better choice than Standard storage or Nearline storage in scenarios where slightly lower availability, a 90-day minimum storage duration, and higher costs for data access are acceptable trade-offs for lowered at-rest storage costs .
- Nearline storage is a better choice than Standard storage in scenarios where slightly lower availability, a 30-day minimum storage duration, and costs for data access are acceptable trade-offs for lowered at-rest storage costs .
- For example, objects in your bucket other than soft-deleted objects transition to Standard storage when Autoclass is enabled, and this includes objects stored in legacy classes.

### Autoclass \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/autoclass](https://docs.cloud.google.com/storage/docs/autoclass)
- Source ID: `site-iam-reference`
- Final score: 214
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If the bucket is configured to use Archive storage as the terminal storage class, objects continue to transition to colder storage classes as follows: Any object that isn't accessed for 90 days transitions to Coldline storage.
- When you change the terminal storage class in your Autoclass configuration, the following occurs: If you change the terminal storage class from Archive storage to Nearline storage, objects in Archive storage and Coldline storage at the time of your change transition to Nearline storage.
- Once an object becomes eligible to transition between storage classes, Cloud Storage performs the transition asynchronously, so there can be a lag between when an object is eligible for transition and when the transition actually occurs.
- Overview When enabled, Autoclass manages all aspects of storage classes for a bucket: All objects added to the bucket begin in Standard storage, even if a different storage class is specified in the request.

### "Create and manage access control lists (ACLs) \_|\_ Cloud Storage \_|\_\

- URL: [https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists](https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists)
- Source ID: `site-iam-reference`
- Final score: 212
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Command line In the following example, the project ID is "123412341234"; your project ID will be different. defaultObjectAcl: – entity: project-owners-123412341234 etag: CAE= kind: storage#objectAccessControl projectTeam: projectNumber: '123412341234' team: owners role: OWNER – entity: project-editors-123412341234 etag: CAE= kind: storage#objectAccessControl projectTeam: projectNumber: '123412341234' team: editors role: OWNER – entity: project-viewers-123412341234 etag: CAE= kind: storage#objectAccessControl projectTeam: projectNumber: '123412341234' team: viewers role: READER REST APIs JSON API In the following example, the project ID is "123412341234"; your project ID will be different. "defaultObjectAcl": [ { "kind": "storage#objectAccessControl", "entity": "project-owners-123412341234", "role": "OWNER", "projectTeam": { "projectNumber": "123412341234", "team": "owners" } }, { "kind": "storage#objectAccessControl", "entity": "project-editors-123412341234", "role": "OWNER", "projectTeam": { "projectNumber": "123412341234", "team": "editors" } }, { "kind": "storage#objectAccessControl", "entity": "project-viewers-123412341234", "role": "READER", "projectTeam": { "projectNumber": "123412341234", "team": "viewers" } } ] XML API In the following example, the project role IDs start with "00b4903a97..."; your project IDs will be different. <?xml version='1.0' encoding='UTF-8'?> <AccessControlList> <Entries> <Entry> <Scope type='GroupById'> <ID>00b4903a9721...</ID> </Scope> <Permission>FULL CONTROL</Permission> </Entry> <Entry> <Scope type='GroupById'> <ID>00b4903a9722...</ID> </Scope> <Permission>FULL CONTROL</Permission> </Entry> <Entry> <Scope type='GroupById'> <ID>00b4903a9723...</ID> </Scope> <Permission>READ</Permission> </Entry> </Entries> </AccessControlList> Note that the default object ACL for a newly created bucket is equivalent to the predefined projectPrivate ACL.
- The following sample adds an ACL to an object: / TODO(developer): Uncomment the following lines before running the sample. / // The ID of your GCS bucket // const bucketName = 'your-unique-bucket-name'; // The name of the file to access // const fileName = 'file.txt'; // The email address of the user to add // const userEmail = 'user-email-to-add'; // Imports the Google Cloud client library const { Storage } = require ( ' @google-cloud/storage ' ); // Creates a client const storage = new Storage (); async function addFileOwner () { await storage . bucket ( bucketName ) . file ( fileName ) . acl . owners . addUser ( userEmail ); console . log ( Added user ${ userEmail } as an owner on file ${ fileName } . ); } addFileOwner (). catch ( console . error ); The following sample removes an ACL from an object: / TODO(developer): Uncomment the following lines before running the sample. / // The ID of your GCS bucket // const bucketName = 'your-unique-bucket-name'; // The ID of your GCS file // const fileName = 'your-file-name'; // The email address of the user to remove // const userEmail = 'user-email-to-remove'; // Imports the Google Cloud client library const { Storage } = require ( ' @google-cloud/storage ' ); // Creates a client const storage = new Storage (); async function removeFileOwner () { // Removes the user from the access control list of the file.
- StorageOptions ; public class RemoveBlobOwner { public static void removeBlobOwner ( String projectId , String bucketName , String userEmail , String blobName ) { // The ID of your GCP project // String projectId = "your-project-id"; // The ID of your GCS bucket // String bucketName = "your-unique-bucket-name"; // Email of the user you wish to remove as a file owner // String userEmail = "someuser@domain.com" // The name of the blob/file that you wish to modify permissions on // String blobName = "your-blob-name"; Storage storage = StorageOptions . newBuilder (). setProjectId ( projectId ). build (). getService (); Blob blob = storage . get ( BlobId . of ( bucketName , blobName )); User ownerToRemove = new User ( userEmail ); boolean success = blob . deleteAcl ( ownerToRemove ); if ( success ) { System . out . println ( "Removed user " + userEmail + " as an owner on file " + blobName + " in bucket " + bucketName ); } else { System . out . println ( "User " + userEmail + " was not found" ); } } } Node.js For more information, see the Cloud Storage Node.js API reference documentation .
- The following sample adds an ACL to an object: The ID of your GCS bucket bucket name = "your-unique-bucket-name" file name = "Name of a file in the Storage bucket" email = "Google Cloud Storage ACL Entity email" require "google/cloud/storage" storage = Google :: Cloud :: Storage . new bucket = storage . bucket bucket name file = bucket . file file name file . acl . add owner email puts "Added OWNER permission for #{ email } to #{ file name } " The following sample removes an ACL from an object: The ID of your GCS bucket bucket name = "your-unique-bucket-name" file name = "Name of a file in the Storage bucket" email = "Google Cloud Storage ACL Entity email" require "google/cloud/storage" storage = Google :: Cloud :: Storage . new bucket = storage . bucket bucket name file = bucket . file file name file . acl . delete email puts "Removed ACL permissions for #{ email } from #{ file name } " REST APIs JSON API When creating an object, you can specify the acl[] property in the request body or the predefinedAcl query parameter in an insert request.

