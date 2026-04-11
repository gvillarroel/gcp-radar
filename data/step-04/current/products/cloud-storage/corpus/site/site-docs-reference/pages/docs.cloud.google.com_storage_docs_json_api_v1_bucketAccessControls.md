---
title: "BucketAccessControls \_|\_ Cloud Storage \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/storage/docs/json_api/v1/bucketAccessControls
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/storage/docs/apis?hl=en
source_metadata:
  url: https://docs.cloud.google.com/storage/docs/json_api/v1/bucketAccessControls
  title: "BucketAccessControls \_|\_ Cloud Storage \_|\_ Google Cloud Documentation"
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
BucketAccessControls
Stay organized with collections
Save and categorize content based on your preferences.
The BucketAccessControls resource represents the Access Control Lists (ACLs) for buckets within Cloud Storage. ACLs let you specify who has access to your data and to what extent.
Important: The methods for this resource fail with a
400 Bad Request response for buckets with uniform bucket-level access enabled. Use
storage.buckets.getIamPolicy
and storage.buckets.setIamPolicy
to control access instead.
There are three roles that can be assigned to an entity:
READER s can get the bucket, though no acl property will be returned, and list the bucket's objects.
WRITER s are READER s, and they can insert objects into the bucket and delete the bucket's objects.
OWNER s are WRITER s, and they can get the acl property of a bucket , update a bucket, and call all BucketAccessControls methods on the bucket.
For more information, see Access Control , with the caveat that this API uses READER , WRITER , and OWNER instead of READ , WRITE , and FULL_CONTROL .
To try out the methods for this resource, see Methods .
Resource representations
{
"kind": "storage#bucketAccessControl",
"id": string ,
"selfLink": string ,
"bucket": string ,
"entity": string ,
"role": string ,
"email": string ,
"domain": string ,
"entityId": string ,
"etag": string ,
"projectTeam": {
"projectNumber": string ,
"team": string
}
}
Property name
Value
Description
Notes
bucket
string
The name of the bucket.
domain
string
The domain associated with the entity, if any.
email
string
The email address associated with the entity, if any.
entity
string
The entity holding the permission, in one of the following forms: user- email
group- groupId
group- email
domain- domain
project- team - projectId
allUsers
allAuthenticatedUsers
Examples: The user liz@example.com would be user-liz@example.com .
The group example@googlegroups.com would be group-example@googlegroups.com .
To refer to all members of the domain example.com , the entity would be domain-example.com .
writable
entityId
string
The ID for the entity, if any.
etag
string
HTTP 1.1 Entity tag for the access-control entry.
id
string
The ID of the access-control entry.
kind
string
The kind of item this is. For bucket access control entries, this is always storage#bucketAccessControl .
projectTeam
object
The project team associated with the entity, if any.
projectTeam.projectNumber
string
The project number.
projectTeam.team
string
The team.
Acceptable values are:
" editors "
" owners "
" viewers "
role
string
The access permission for the entity.
Acceptable values are:
" OWNER "
" READER "
" WRITER "
writable
selfLink
string
The link to this access-control entry.
Methods
The methods for working with a bucket's access controls are as follows:
delete
Permanently deletes the ACL entry for the specified entity on the specified bucket .
get
Returns the ACL entry for the specified entity on the specified bucket.
insert
Creates a new ACL entry on the specified bucket .
list
Retrieves ACL entries on a specified bucket .
patch
Updates an ACL entry on the specified bucket . This method supports patch semantics.
update
Updates an ACL entry on the specified bucket .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
