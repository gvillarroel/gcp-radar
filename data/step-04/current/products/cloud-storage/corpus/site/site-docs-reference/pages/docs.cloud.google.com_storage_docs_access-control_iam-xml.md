---
title: "IAM permissions for XML requests \_|\_ Cloud Storage \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/storage/docs/access-control/iam-xml
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/storage/docs/apis?hl=en
source_metadata:
  url: https://docs.cloud.google.com/storage/docs/access-control/iam-xml
  title: "IAM permissions for XML requests \_|\_ Cloud Storage \_|\_ Google Cloud\
    \ Documentation"
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
IAM permissions for XML requests
Stay organized with collections
Save and categorize content based on your preferences.
The following table lists the Identity and Access Management (IAM) permissions
required to run each Cloud Storage XML method on a given resource.
Note: IAM policies cannot be managed using the XML API. See
Using IAM Permissions for available management options.
Method
Resource
Subresource
Required IAM Permissions 1
DELETE
bucket
storage.buckets.delete
DELETE
object
storage.objects.delete
DELETE
object
uploadId
storage.multipartUploads.abort
GET
storage.buckets.list
GET
bucket
storage.objects.list
GET
bucket
acls 3
storage.buckets.get
storage.buckets.getIamPolicy
GET
bucket
Non-ACL metadata
storage.buckets.get
GET
bucket
uploads
storage.multipartUploads.list
GET
object
storage.objects.get
GET
object
acls 3
storage.objects.get
storage.objects.getIamPolicy
GET
object
encryption
storage.objects.get
GET
object
retention
storage.objects.get
GET
object
uploadId
storage.multipartUploads.listParts
HEAD
bucket
storage.buckets.get
HEAD
object
storage.objects.get
POST
object
storage.objects.create
storage.objects.delete 4
storage.objects.setRetention 5
POST
object
uploadId
storage.multipartUploads.create
storage.objects.create
storage.objects.delete 4
POST
object
uploads
storage.multipartUploads.create
storage.objects.create
storage.objects.setRetention 5
PUT
bucket
storage.buckets.create
storage.buckets.enableObjectRetention 6
PUT
bucket
acls 3
storage.buckets.get
storage.buckets.getIamPolicy
storage.buckets.setIamPolicy
storage.buckets.update
PUT
bucket
Non-ACL metadata
storage.buckets.update
PUT 7
object
storage.objects.create
storage.objects.get 2
storage.objects.delete 4
storage.objects.setRetention 5
PUT
object
acls 3
storage.objects.get
storage.objects.getIamPolicy
storage.objects.setIamPolicy
storage.objects.update
PUT
object
compose
storage.objects.create
storage.objects.get
storage.objects.delete 4
storage.objects.setRetention 5
PUT
object
retention
storage.objects.setRetention
storage.objects.update
storage.objects.overrideUnlockedRetention 8
PUT
object
uploadId
storage.multipartUploads.create
storage.objects.create
GET
Projects.hmacKeys
storage.hmacKeys.get
POST
Projects.hmacKeys
storage.hmacKeys.create
storage.hmacKeys.update
storage.hmacKeys.delete
1 If you use the x-goog-user-project header or
userProject query string parameter in your request, you must have
serviceusage.services.use permission for the project ID that you specify,
in addition to the normal IAM permissions required to make the
request.
2 This permission is required for the source bucket when the request
includes the x-goog-copy-source header .
3 This subresource does not apply to buckets with
uniform bucket-level access enabled.
4 This permission is only required when the inserted object
has the same name as an object that already exists in the bucket.
5 This permission is only required when the request includes the
x-goog-object-lock-mode and x-goog-object-lock-retain-until-date
headers.
6 This permission is only required when the request includes a
x-goog-bucket-object-lock-enabled header set to true .
7 No permissions are required to make PUT requests associated with
a resumable upload .
8 This permission is only required when the request includes a
x-goog-bypass-governance-retention header set to true .
What's next
For a list of roles and the permissions they contain, see
IAM Roles for Cloud Storage .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
