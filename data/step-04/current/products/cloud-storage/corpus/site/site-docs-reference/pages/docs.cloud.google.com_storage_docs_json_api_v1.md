---
title: "Overview of resources and methods for the JSON API \_|\_ Cloud Storage \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/storage/docs/json_api/v1
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/storage/docs/apis?hl=en
source_metadata:
  url: https://docs.cloud.google.com/storage/docs/json_api/v1
  title: "Overview of resources and methods for the JSON API \_|\_ Cloud Storage \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Cloud Storage
Reference
Send feedback
Overview of resources and methods for the JSON API
Stay organized with collections
Save and categorize content based on your preferences.
This guide contains technical reference information for the Cloud Storage
JSON API. Like the XML API , it is RESTful, but it has slightly different
URI endpoints and request syntax, and is specifically intended to be used with
the Google Cloud Client Libraries .
This API reference is organized by resource type. Each resource type has one or
more data representations and one or more methods.
URIs are relative to https://storage.googleapis.com/storage/v1 , unless otherwise noted.
Resource types
AnywhereCache
BucketAccessControls
Buckets
DefaultObjectAccessControls
Folders
ManagedFolders
Notifications
ObjectAccessControls
Objects
Operations
Projects.hmacKeys
Projects.serviceAccount
AnywhereCache
For AnywhereCache Resource details, see the
resource representation
page.
Method
HTTP request
Description
create
POST /b/ BUCKET /anywhereCaches/ ANYWHERE_CACHE_ID
Creates a cache instance in a specified bucket.
disable
POST /b/ BUCKET /anywhereCaches/ ANYWHERE_CACHE_ID /disable
Disables a cache instance in a specified bucket.
get
GET /b/ BUCKET /anywhereCaches/ ANYWHERE_CACHE_ID
Retrieves a cache instance for a specified bucket.
list
LIST /b/ BUCKET /anywhereCaches
Retrieves a list of cache instances for a specified bucket.
resume
POST /b/ BUCKET /anywhereCaches/ ANYWHERE_CACHE_ID /resume
Resumes a cache instance in a specified bucket from being disabled.
update
PUT /b/ BUCKET /anywhereCaches/ ANYWHERE_CACHE_ID
Updates a cache instance in a specified bucket. Only caches in the RUNNING state can be updated.
BucketAccessControls
For BucketAccessControls Resource details, see the
resource representation
page.
Method
HTTP request
Description
delete
DELETE /b/ BUCKET /acl/ ENTITY
Permanently deletes the ACL entry for the specified entity on the specified bucket .
get
GET /b/ BUCKET /acl/ ENTITY
Returns the ACL entry for the specified entity on the specified bucket.
insert
POST /b/ BUCKET /acl
Creates a new ACL entry on the specified bucket .
list
GET /b/ BUCKET /acl
Retrieves ACL entries on a specified bucket .
patch
PATCH /b/ BUCKET /acl/ ENTITY
Updates an ACL entry on the specified bucket . This method supports patch semantics.
update
PUT /b/ BUCKET /acl/ ENTITY
Updates an ACL entry on the specified bucket .
Buckets
For Buckets Resource details, see the resource representation page.
Method
HTTP request
Description
delete
DELETE /b/ BUCKET
Permanently deletes an empty bucket.
get
GET /b/ BUCKET
Returns metadata for the specified bucket.
getIamPolicy
GET /b/ BUCKET /iam
Returns an IAM policy for the specified bucket.
insert
POST /b
Creates a new bucket. Required query parameters: project
list
GET /b
Retrieves a list of buckets for a given project. Required query parameters: project
lockRetentionPolicy
POST /b/ BUCKET /lockRetentionPolicy
Irreversibly sets the retention policy on a bucket. Required query parameters: ifMetagenerationMatch
patch
PATCH /b/ BUCKET
Updates a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate. This method supports patch semantics.
relocate
POST /b/ BUCKET /relocate
Initiates the dry run or the initiate bucket relocation step of a bucket relocation operation .
restore
POST /b/ BUCKET /restore
Restores a soft-deleted bucket.
setIamPolicy
PUT /b/ BUCKET /iam
Updates an IAM policy for the specified bucket.
testIamPermissions
GET /b/ BUCKET /iam/testPermissions
Tests a set of permissions on the given bucket to see which, if any, are held by the caller. Required query parameters: permissions
update
PUT /b/ BUCKET
Updates a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate. This method sets the complete metadata of a bucket. If you want to change some of a bucket's metadata while leaving other parts unaffected, use the PATCH method instead.
DefaultObjectAccessControls
For DefaultObjectAccessControls Resource details, see the
resource representation
page.
Method
HTTP request
Description
delete
DELETE /b/ BUCKET /defaultObjectAcl/ ENTITY
Permanently deletes the default object ACL entry for the specified entity on the specified bucket .
get
GET /b/ BUCKET /defaultObjectAcl/ ENTITY
Returns the default object ACL entry for the specified entity on the specified bucket .
insert
POST /b/ BUCKET /defaultObjectAcl
Creates a new default object ACL entry on the specified bucket .
list
GET /b/ BUCKET /defaultObjectAcl
Retrieves default object ACL entries on the specified bucket .
patch
PATCH /b/ BUCKET /defaultObjectAcl/ ENTITY
Updates a default object ACL entry on the specified bucket . This method supports patch semantics.
update
PUT /b/ BUCKET /defaultObjectAcl/ ENTITY
Updates a default object ACL entry on the specified bucket .
Folders
For Folders Resource details, see the resource representation page.
Method
HTTP request
Description
delete
DELETE /b/ BUCKET /folders/ FOLDER
Permanently deletes an empty folder.
get
GET /b/ BUCKET /folders/ FOLDER
Returns metadata for the specified folder.
insert
POST /b/ BUCKET /folders
Creates a new folder.
list
GET /b/ BUCKET /folders
Retrieves a list of folders in a given bucket.
rename
POST /b/ BUCKET /folders/SOURCE_FOLDER/renameTo/folders/DESTINATION_FOLDER
Renames a folder in a given bucket.
ManagedFolders
For ManagedFolders Resource details, see the resource representation page.
Method
HTTP request
Description
delete
DELETE /b/ BUCKET /managedFolders/ MANAGED_FOLDER
Permanently deletes a managed folder.
get
GET /b/ BUCKET /managedFolders/ MANAGED_FOLDER
Returns metadata for the specified managed folder.
getIamPolicy
GET /b/ BUCKET /managedFolders/ MANAGED_FOLDER /iam
Returns an IAM policy for the specified managed folder.
insert
POST /b/ BUCKET /managedFolders
Creates a new managed folder.
list
GET /b/ BUCKET /managedFolders
Retrieves a list of managed folders in a given bucket.
setIamPolicy
PUT /b/ BUCKET /managedFolders/ MANAGED_FOLDER /iam
Updates an IAM policy for the specified managed folder.
testIamPermissions
GET /b/ BUCKET /managedFolders/ MANAGED_FOLDER /iam/testPermissions
Tests a set of permissions on the given managed folder. to see which, if any, are held by the caller.
Notifications
For Notifications Resource details, see the
resource representation
page.
Method
HTTP request
Description
delete
DELETE /b/ BUCKET /notificationConfigs/ NOTIFICATION
Permanently deletes a notification subscription.
get
GET /b/ BUCKET /notificationConfigs/ NOTIFICATION
View a notification configuration.
insert
POST /b/ BUCKET /notificationConfigs
Creates a notification subscription for a given bucket.
list
GET /b/ BUCKET /notificationConfigs
Retrieves a list of notification subscriptions for a given bucket.
ObjectAccessControls
For ObjectAccessControls Resource details, see the
resource representation
page.
Method
HTTP request
Description
delete
DELETE /b/ BUCKET /o/ OBJECT /acl/ ENTITY
Permanently deletes the ACL entry for the specified entity on the specified object .
get
GET /b/ BUCKET /o/ OBJECT /acl/ ENTITY
Returns the ACL entry for the specified entity on the specified object .
insert
POST /b/ BUCKET /o/ OBJECT /acl
Creates a new ACL entry on the specified object .
list
GET /b/ BUCKET /o/ OBJECT /acl
Retrieves ACL entries on the specified object .
patch
PATCH /b/ BUCKET /o/ OBJECT /acl/ ENTITY
Updates an ACL entry on the specified object . This method supports patch semantics.
update
PUT /b/ BUCKET /o/ OBJECT /acl/ ENTITY
Updates an ACL entry on the specified object .
Objects
For Objects Resource details, see the
resource representation page.
Method
HTTP request
Description
compose
POST /b/ BUCKET /o / DESTINATION_OBJECT /compose
Concatenates a list of existing objects into a new object in the same bucket.
copy
POST /b/ SOURCE_BUCKET /o/ SOURCE_OBJECT /copyTo /b/ DESTINATION_BUCKET /o/ DESTINATION_OBJECT
Copies a source object to a destination object. Optionally overrides metadata.
delete
DELETE /b/ BUCKET /o/ OBJECT
Deletes an object and its metadata. Deletions are permanent if versioning is not enabled for the bucket, or if the generation parameter is used.
get
GET /b/ BUCKET /o/ OBJECT
Retrieves an object or its metadata.
insert
POST https://storage.googleapis.com/upload/storage/v1/b/ BUCKET /o and POST /b/ BUCKET /o
Stores a new object and metadata. This method supports simple , multipart , and resumable upload types. For more information, see Uploads and downloads .
list
GET /b/ BUCKET /o
Retrieves a list of objects matching the criteria.
patch
PATCH /b/ BUCKET /o/ OBJECT
Updates a data blob's associated metadata. This method supports patch semantics.
rewrite
POST /b/ SOURCE_BUCKET /o/ SOURCE_OBJECT /rewriteTo /b/ DESTINATION_BUCKET /o/ DESTINATION_OBJECT
Rewrites a source object to a destination object. Optionally overrides metadata.
update
PUT /b/ BUCKET /o/ OBJECT
Updates an object's metadata.
Operations
For Operations Resource details, see the
resource representation
page.
Method
HTTP request
Description
cancel
POST /b/ BUCKET /operations/ OPERATION_ID /cancel
Cancels a long-running operation.
get
GET /b/ BUCKET /operations/ OPERATION_ID
Gets a long-running operation.
list
GET /b/ BUCKET /operations
Lists long-running operations.
advanceRelocateBucket
POST /b/ BUCKET /operations/ OPERATION_ID /advanceRelocateBucket
Initiates the final synchronization step of a bucket relocation operation
Projects.hmacKeys
For Projects.hmacKeys Resource details, see the
resource representation
page.
Method
HTTP request
Description
create
POST /projects/ PROJECT_IDENTIFIER /hmacKeys
Creates a new HMAC key for the specified service account. Required query parameters: serviceAccountEmail
delete
DELETE /projects/ PROJECT_IDENTIFIER /hmacKeys/ ACCESS_ID
Deletes an HMAC key.
get
GET /projects/ PROJECT_IDENTIFIER /hmacKeys/ ACCESS_ID
Retrieves an HMAC key's metadata.
list
GET /projects/ PROJECT_IDENTIFIER /hmacKeys
Retrieves a list of HMAC keys matching the criteria.
update
PUT /projects/ PROJECT_IDENTIFIER /hmacKeys/ ACCESS_ID
Updates the state of an HMAC key.
Projects.serviceAccount
For Projects.serviceAccount Resource details, see the
resource representation
page.
Method
HTTP request
Description
get
GET /projects/ PROJECT_IDENTIFIER /serviceAccount
Get the email address of this project's Cloud Storage service agent .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
