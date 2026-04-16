---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.945Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "List Objects V2 for XML API"
feature_slug: "list-objects-v2-for-xml-api"
latest_feature_date: "2021-07-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage/docs/xml-api/overview"
  - "https://docs.cloud.google.com/storage/docs/json_api/v1"
  - "https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists"
  - "https://docs.cloud.google.com/storage/docs/access-control/lists"
keywords:
  - "list"
  - "objects"
  - "v2"
  - "for"
  - "xml"
  - "api"
  - "the"
  - "improves"
---

# List Objects V2 for XML API

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

List Objects V2 for the XML API improves interoperability with Amazon S3 tools and libraries.

## Extended Definition

List Objects V2 for the XML API improves interoperability with Amazon S3 tools and libraries.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage/docs/xml-api/overview](https://docs.cloud.google.com/storage/docs/xml-api/overview)
- [https://docs.cloud.google.com/storage/docs/json_api/v1](https://docs.cloud.google.com/storage/docs/json_api/v1)
- [https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists](https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists)
- [https://docs.cloud.google.com/storage/docs/access-control/lists](https://docs.cloud.google.com/storage/docs/access-control/lists)

## Supporting Pages

### XML API overview \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/xml-api/overview](https://docs.cloud.google.com/storage/docs/xml-api/overview)
- Source ID: `site-docs-root`
- Final score: 229
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Most Cloud Storage XML API requests use the following URI for accessing buckets and objects: storage.googleapis.com You can scope this further by adding a bucket and object to the URI.
- Required for creating buckets or listing buckets except when you are using the XML API for interoperability, such as for compatibility with Amazon S3.
- For a list of status codes used by the XML API, see HTTP Status and Error Codes .
- For a list of operations available in the XML API, see XML API Request Methods .

### "Overview of resources and methods for the JSON API \_|\_ Cloud Storage \_\

- URL: [https://docs.cloud.google.com/storage/docs/json_api/v1](https://docs.cloud.google.com/storage/docs/json_api/v1)
- Source ID: `site-docs-reference`
- Final score: 219
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Uploads and downloads . list GET /b/ BUCKET /o Retrieves a list of objects matching the criteria. patch PATCH /b/ BUCKET /o/ OBJECT Updates a data blob's associated metadata.
- Method HTTP request Description delete DELETE /b/ BUCKET /managedFolders/ MANAGED FOLDER Permanently deletes a managed folder. get GET /b/ BUCKET /managedFolders/ MANAGED FOLDER Returns metadata for the specified managed folder. getIamPolicy GET /b/ BUCKET /managedFolders/ MANAGED FOLDER /iam Returns an IAM policy for the specified managed folder. insert POST /b/ BUCKET /managedFolders Creates a new managed folder. list GET /b/ BUCKET /managedFolders Retrieves a list of managed folders in a given bucket. setIamPolicy PUT /b/ BUCKET /managedFolders/ MANAGED FOLDER /iam Updates an IAM policy for the specified managed folder. testIamPermissions GET /b/ BUCKET /managedFolders/ MANAGED FOLDER /iam/testPermissions Tests a set of permissions on the given managed folder. to see which, if any, are held by the caller.
- Method HTTP request Description delete DELETE /b/ BUCKET /defaultObjectAcl/ ENTITY Permanently deletes the default object ACL entry for the specified entity on the specified bucket . get GET /b/ BUCKET /defaultObjectAcl/ ENTITY Returns the default object ACL entry for the specified entity on the specified bucket . insert POST /b/ BUCKET /defaultObjectAcl Creates a new default object ACL entry on the specified bucket . list GET /b/ BUCKET /defaultObjectAcl Retrieves default object ACL entries on the specified bucket . patch PATCH /b/ BUCKET /defaultObjectAcl/ ENTITY Updates a default object ACL entry on the specified bucket .
- Method HTTP request Description delete DELETE /b/ BUCKET /o/ OBJECT /acl/ ENTITY Permanently deletes the ACL entry for the specified entity on the specified object . get GET /b/ BUCKET /o/ OBJECT /acl/ ENTITY Returns the ACL entry for the specified entity on the specified object . insert POST /b/ BUCKET /o/ OBJECT /acl Creates a new ACL entry on the specified object . list GET /b/ BUCKET /o/ OBJECT /acl Retrieves ACL entries on the specified object . patch PATCH /b/ BUCKET /o/ OBJECT /acl/ ENTITY Updates an ACL entry on the specified object .

### "Create and manage access control lists (ACLs) \_|\_ Cloud Storage \_|\_\

- URL: [https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists](https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists)
- Source ID: `site-iam-reference`
- Final score: 201
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Command line In the following example, the project ID is "123412341234"; your project ID will be different. defaultObjectAcl: – entity: project-owners-123412341234 etag: CAE= kind: storage#objectAccessControl projectTeam: projectNumber: '123412341234' team: owners role: OWNER – entity: project-editors-123412341234 etag: CAE= kind: storage#objectAccessControl projectTeam: projectNumber: '123412341234' team: editors role: OWNER – entity: project-viewers-123412341234 etag: CAE= kind: storage#objectAccessControl projectTeam: projectNumber: '123412341234' team: viewers role: READER REST APIs JSON API In the following example, the project ID is "123412341234"; your project ID will be different. "defaultObjectAcl": [ { "kind": "storage#objectAccessControl", "entity": "project-owners-123412341234", "role": "OWNER", "projectTeam": { "projectNumber": "123412341234", "team": "owners" } }, { "kind": "storage#objectAccessControl", "entity": "project-editors-123412341234", "role": "OWNER", "projectTeam": { "projectNumber": "123412341234", "team": "editors" } }, { "kind": "storage#objectAccessControl", "entity": "project-viewers-123412341234", "role": "READER", "projectTeam": { "projectNumber": "123412341234", "team": "viewers" } } ] XML API In the following example, the project role IDs start with "00b4903a97..."; your project IDs will be different. <?xml version='1.0' encoding='UTF-8'?> <AccessControlList> <Entries> <Entry> <Scope type='GroupById'> <ID>00b4903a9721...</ID> </Scope> <Permission>FULL CONTROL</Permission> </Entry> <Entry> <Scope type='GroupById'> <ID>00b4903a9722...</ID> </Scope> <Permission>FULL CONTROL</Permission> </Entry> <Entry> <Scope type='GroupById'> <ID>00b4903a9723...</ID> </Scope> <Permission>READ</Permission> </Entry> </Entries> </AccessControlList> Note that the default object ACL for a newly created bucket is equivalent to the predefined projectPrivate ACL.
- For example, to return the ACL for the object paris.jpg in the bucket example-travel-maps : curl -X GET -H "Authorization: Bearer $(gcloud auth print-access-token)" \ https://storage.googleapis.com/example-travel-maps/paris.jpg?acl You should see a response that looks like: <?xml version="1.0" encoding="UTF-8"?> <AccessControlList> <Owner> <ID>84fac329bceSAMPLE777d5d22b8SAMPLE77d85ac2SAMPLE2dfcf7c4adf34da46</ID> <Name>Owner Name</Name> </Owner> <Entries> <Entry> <Scope type="UserById"> <ID>84fac329bceSAMPLE777d5d22b8SAMPLE77d85ac2SAMPLE2dfcf7c4adf34da46</ID> <Name>Name</Name> </Scope> <Permission>FULL CONTROL</Permission> </Entry> <Entry> <Scope type="UserByEmail"> <EmailAddress>jeffersonloveshiking@gmail.com</EmailAddress> <Name>Jefferson</Name> </Scope> <Permission>FULL CONTROL</Permission> </Entry> <Entry> <Scope type="GroupByEmail"> <EmailAddress>gs-announce@googlegroups.com</EmailAddress> </Scope> <Permission>READ</Permission> </Entry> </Entries> </AccessControlList> You can also use the JSON GET method of the ObjectAccessControls resource to return a specific ACL entry.
- For example: curl -X PUT --data-binary @acls.xml -H "Authorization: Bearer $(gcloud auth print-access-token)" \ http://storage.googleapis.com/ BUCKET NAME ?defaultObjectAcl An example of acls.xml : <AccessControlList> <Entries> <Entry> <Permission> FULL CONTROL </Permission> <Scope type="UserByEmail"> <EmailAddress>jeffersonloveshiking@gmail.com</EmailAddress> </Scope> </Entry> </Entries> </AccessControlList> The syntax of ACLs is discussed in Setting ACLs .
- For example, the following curl command applies an XML payload from the document acls.xml to an object named paris.jpg in the bucket example-travel-maps : curl -X PUT --data-binary @acls.xml \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ https://storage.googleapis.com/example-travel-maps/paris.jpg?acl Use the following ACL syntax for the XML document: Element Description AccessControlList Container for Entries and Owner elements.

### Access control lists (ACLs) \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/access-control/lists](https://docs.cloud.google.com/storage/docs/access-control/lists)
- Source ID: `site-iam-reference`
- Final score: 199
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON API/ gcloud storage XML API Description private private Gives the bucket or object owner OWNER permission for a bucket or object. bucketOwnerRead bucket-owner-read Gives the object owner OWNER permission, and gives the bucket owner READER permission.
- Cloud Storage lets you assign the following concentric permissions for your buckets and objects, as shown in the following table: Buckets Objects READER Allows a user to list a bucket's contents.
- This is also the default ACL for newly created objects unless the default object ACL for that bucket has been changed. authenticatedRead authenticated-read Gives the bucket or object owner OWNER permission, and gives all authenticated user account holders READER permission. publicRead public-read Gives the bucket or object owner OWNER permission, and gives all users, both authenticated and anonymous, READER permission.
- Based on how objects are uploaded, object ACLs are applied accordingly: Authenticated Uploads If you make an authenticated request to upload an object and do not specify any object ACLs when you upload it, then you are listed as the owner of the object and the predefined projectPrivate ACL is applied to the object by default.

