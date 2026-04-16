---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.941Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "List Objects V2"
feature_slug: "list-objects-v2"
latest_feature_date: "2021-11-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists"
  - "https://docs.cloud.google.com/storage/docs/uploading-objects"
  - "https://docs.cloud.google.com/storage/docs/access-control/iam"
  - "https://docs.cloud.google.com/storage/docs/access-control/using-iam-for-managed-folders"
keywords:
  - "list"
  - "objects"
  - "v2"
  - "provides"
  - "an"
  - "updated"
  - "object"
  - "listing"
---

# List Objects V2

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

List Objects V2 provides an updated object listing capability for Cloud Storage.

## Extended Definition

List Objects V2 provides an updated object listing capability for Cloud Storage.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists](https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists)
- [https://docs.cloud.google.com/storage/docs/uploading-objects](https://docs.cloud.google.com/storage/docs/uploading-objects)
- [https://docs.cloud.google.com/storage/docs/access-control/iam](https://docs.cloud.google.com/storage/docs/access-control/iam)
- [https://docs.cloud.google.com/storage/docs/access-control/using-iam-for-managed-folders](https://docs.cloud.google.com/storage/docs/access-control/using-iam-for-managed-folders)

## Supporting Pages

### "Create and manage access control lists (ACLs) \_|\_ Cloud Storage \_|\_\

- URL: [https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists](https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists)
- Source ID: `site-iam-reference`
- Final score: 210
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions storage.buckets.get storage.buckets.list This permission is only required for using the Google Cloud console to perform the tasks on this page. storage.buckets.setIamPolicy storage.buckets.update storage.objects.get storage.objects.getIamPolicy storage.objects.setIamPolicy storage.objects.update You can also get these permissions with custom roles .
- In order to make sure that new objects created in the bucket get the updated default object ACL, you should wait at least 30 seconds between changing the default object ACL and creating new objects.
- Overview This page describes how to control access to buckets and objects using Access Control Lists (ACLs).
- Command line In the following example, the project ID is "123412341234"; your project ID will be different. defaultObjectAcl: – entity: project-owners-123412341234 etag: CAE= kind: storage#objectAccessControl projectTeam: projectNumber: '123412341234' team: owners role: OWNER – entity: project-editors-123412341234 etag: CAE= kind: storage#objectAccessControl projectTeam: projectNumber: '123412341234' team: editors role: OWNER – entity: project-viewers-123412341234 etag: CAE= kind: storage#objectAccessControl projectTeam: projectNumber: '123412341234' team: viewers role: READER REST APIs JSON API In the following example, the project ID is "123412341234"; your project ID will be different. "defaultObjectAcl": [ { "kind": "storage#objectAccessControl", "entity": "project-owners-123412341234", "role": "OWNER", "projectTeam": { "projectNumber": "123412341234", "team": "owners" } }, { "kind": "storage#objectAccessControl", "entity": "project-editors-123412341234", "role": "OWNER", "projectTeam": { "projectNumber": "123412341234", "team": "editors" } }, { "kind": "storage#objectAccessControl", "entity": "project-viewers-123412341234", "role": "READER", "projectTeam": { "projectNumber": "123412341234", "team": "viewers" } } ] XML API In the following example, the project role IDs start with "00b4903a97..."; your project IDs will be different. <?xml version='1.0' encoding='UTF-8'?> <AccessControlList> <Entries> <Entry> <Scope type='GroupById'> <ID>00b4903a9721...</ID> </Scope> <Permission>FULL CONTROL</Permission> </Entry> <Entry> <Scope type='GroupById'> <ID>00b4903a9722...</ID> </Scope> <Permission>FULL CONTROL</Permission> </Entry> <Entry> <Scope type='GroupById'> <ID>00b4903a9723...</ID> </Scope> <Permission>READ</Permission> </Entry> </Entries> </AccessControlList> Note that the default object ACL for a newly created bucket is equivalent to the predefined projectPrivate ACL.

### "Upload objects from a file system \_|\_ Cloud Storage \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage/docs/uploading-objects](https://docs.cloud.google.com/storage/docs/uploading-objects)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Threads can be used instead of processes by passing worker type=transfer manager.THREAD. workers=8 from google.cloud.storage import Client , transfer manager storage client = Client () bucket = storage client . bucket ( bucket name ) results = transfer manager . upload many from filenames ( bucket , filenames , source directory = source directory , max workers = workers ) for name , result in zip ( filenames , results ): The results list is either None or an exception for each filename in the input list, in order. if isinstance ( result , Exception ): print ( "Failed to upload {} due to exception: {} " . format ( name , result )) else : print ( "Uploaded {} to {} ." . format ( name , bucket . name )) The following sample uploads all objects with a common prefix concurrently: def upload directory with transfer manager ( bucket name , source directory , workers = 8 ): """Upload every file in a directory, including all files in subdirectories.
- UploadResult ; import java.io.IOException ; import java.nio.file.Path ; import java.util.List ; class UploadMany { public static void uploadManyFiles ( String bucketName , List<Path> files ) throws IOException { TransferManager transferManager = TransferManagerConfig . newBuilder (). build (). getService (); ParallelUploadConfig parallelUploadConfig = ParallelUploadConfig . newBuilder (). setBucketName ( bucketName ). build (); List<UploadResult> results = transferManager . uploadFiles ( files , parallelUploadConfig ). getUploadResults (); for ( UploadResult result : results ) { System . out . println ( "Upload for " + result . getInput (). getName () + " completed with status " + result . getStatus ()); } } } The following sample uploads all objects with a common prefix concurrently: import com.google.cloud.storage.transfermanager.
- If the destination object already exists in your bucket, set instead a generation-match precondition using its generation number. generation match precondition = 0 blob . upload from filename ( source file name , if generation match = generation match precondition ) print ( f "File { source file name } uploaded to { destination blob name } ." ) The following sample uploads multiple objects concurrently: def upload many blobs with transfer manager ( bucket name , filenames , source directory = "" , workers = 8 ): """Upload every file in a list to a bucket, concurrently in a process pool.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions storage.objects.create storage.objects.delete This permission is only required for uploads that overwrite an existing object. storage.objects.get This permission is only required if you plan on using the Google Cloud CLI to perform the tasks on this page. storage.objects.list This permission is only required if you plan on using the Google Cloud CLI to perform the tasks on this page.

### Identity and Access Management \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/access-control/iam](https://docs.cloud.google.com/storage/docs/access-control/iam)
- Source ID: `site-iam-reference`
- Final score: 176
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Since the storage.objects.list permission is granted at the bucket level, you cannot use the resource.name condition attribute to restrict object listing access to a subset of objects in the bucket.
- Relation to ACLs In addition to IAM, your buckets and objects can use a legacy access control system called access control lists (ACLs) if the uniform bucket-level access feature is not enabled for your bucket.
- Usage This page provides an overview of Identity and Access Management (IAM) and its use with controlling access to the buckets, managed folders, and objects resources in Cloud Storage.
- For example, the Storage Object Viewer ( roles/storage.objectViewer ) role contains the permissions storage.objects.get and storage.objects.list .

### "Set and manage IAM policies on managed folders \_|\_ Cloud Storage \_|\_\

- URL: [https://docs.cloud.google.com/storage/docs/access-control/using-iam-for-managed-folders](https://docs.cloud.google.com/storage/docs/access-control/using-iam-for-managed-folders)
- Source ID: `site-iam-reference`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- For an alternative way to control access to individual objects in your buckets, see Access Control Lists .
- If you're looking for other methods of access control, see the following resources: To learn about how to control access to whole buckets and the objects within them, see Set and manage IAM policies on buckets .
- This page describes how to set Identity and Access Management (IAM) policies on managed folders , so you can get fine-grained access control over specific groups of objects within a bucket.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

