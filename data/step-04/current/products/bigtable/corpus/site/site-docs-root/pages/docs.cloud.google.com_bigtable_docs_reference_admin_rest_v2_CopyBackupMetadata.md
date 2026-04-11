---
title: "CopyBackupMetadata \_|\_ Bigtable \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigtable/docs/reference/admin/rest/v2/CopyBackupMetadata
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/bigtable/docs
source_metadata:
  url: https://docs.cloud.google.com/bigtable/docs/reference/admin/rest/v2/CopyBackupMetadata
  title: "CopyBackupMetadata \_|\_ Bigtable \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Bigtable
Reference
Send feedback
CopyBackupMetadata
Stay organized with collections
Save and categorize content based on your preferences.
Metadata type for the google.longrunning.Operation returned by backups.copy .
JSON representation
{
"name" : string ,
"sourceBackupInfo" : {
object ( BackupInfo )
} ,
"progress" : {
object ( OperationProgress )
}
}
Fields
name
string
The name of the backup being created through the copy operation. Values are of the form projects/<project>/instances/<instance>/clusters/<cluster>/backups/<backup> .
sourceBackupInfo
object ( BackupInfo )
Information about the source backup that is being copied from.
progress
object ( OperationProgress )
The progress of the backups.copy operation.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-03 UTC."],[],[]]
