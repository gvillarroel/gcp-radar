---
title: "Transfer Cloud Storage managed folders \_|\_ Storage Transfer Service \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/storage-transfer/docs/managed-folders
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/storage-transfer/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/storage-transfer/docs/managed-folders
  title: "Transfer Cloud Storage managed folders \_|\_ Storage Transfer Service \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Storage Transfer Service
Send feedback
Transfer Cloud Storage managed folders
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Storage managed folders provide
fine-grained access control to objects in Cloud Storage buckets. Permissions
can be set at a folder level within buckets that use universal bucket-level
access. When transferring objects between Cloud Storage buckets with
Storage Transfer Service, these managed folder permissions can be retained.
Limitations
The following limitations apply to transfers of managed folders:
The destination bucket must use uniform bucket-level access .
Managed folder transfers do not support the deleteObjectsUniqueInSink
or deleteObjectsFromSourceAfterTransfer options.
There must be no IAM Conditions on the
destination bucket or its project that
use the bucket resource type ( storage.googleapis.com/Bucket ) or the
object resource type ( storage.googleapis.com/Object ). If any bucket within
a project has an IAM Condition that uses either of these resource types,
managed folders cannot be transferred to any of the buckets within that
project, even if the condition is later removed.
Event-driven transfers are not supported.
Manifest transfers are not supported.
IAM permissions
The following Google Cloud Identity and Access Management (IAM)
permissions are required by the Google-managed service account.
For both the source and the destination, permissions can be set at the bucket
level, or can be
set on the managed folder .
To set permissions on a destination managed folder, that folder must already
exist.
We do not recommend setting managed folder permissions at a project level;
see Security considerations for additional info.
On the source bucket or managed folder:
storage.managedFolders.getIamPolicy
storage.managedFolders.list
storage.managedFolders.get
On the destination bucket or managed folder:
storage.managedFolders.setIamPolicy
storage.managedFolders.list
storage.managedFolders.create
These are in addition to the standard permissions required by Storage Transfer Service:
Configure access to a source: Cloud Storage
Configure access to a sink: Cloud Storage
To grant the required managed folder permissions,
create a custom role with only the
permissions required.
Create a managed folder transfer
To create a transfer containing a managed folder, specify
managedFolderTransferEnabled: true in your transferSpec . You can optionally
specify a path value to transfer only a specific managed folder.
POST h tt ps : //storagetransfer.googleapis.com/v1/transferJobs
{
"name" : "transferjobs/ NAME " ,
"projectId" : " PROJECT_ID " ,
"transferSpec" : {
"gcsDataSource" : {
"bucketName" : " SOURCE_BUCKET " ,
"path" : " SOURCE_PATH " ,
"managedFolderTransferEnabled" : true
},
"gcsDataSink" : {
"bucketName" : " DESTINATION_BUCKET " ,
"path" : " DESTINATION_PATH " ,
}
},
"status" : "ENABLED"
}
If the correct managed transfer permissions are not set at the source and the
destination, the transfer fails.
See Create transfers
for details on creating a transfer using the REST API, or refer to the
transferJobs.create reference .
Security considerations
Granting managed folder permissions to a Google-managed service account enables
the account to modify IAM policies on destination folders, or on all folders
if the role is granted at the project level. This poses a security risk:
a user with job edit permissions could exploit this to grant privileges to a
malicious actor. To mitigate this risk, consider isolating managed folder
transfers within a dedicated Google Cloud project.
Cloud Logging
Managed folder actions are logged by Cloud Logging. See
Cloud Logging for Storage Transfer Service
for details.
Troubleshooting
For help creating and managing managed folders, refer to the
Troubleshooting page.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
