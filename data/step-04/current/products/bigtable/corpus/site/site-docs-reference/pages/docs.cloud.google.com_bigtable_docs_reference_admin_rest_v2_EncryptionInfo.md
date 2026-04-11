---
title: "EncryptionInfo \_|\_ Bigtable \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigtable/docs/reference/admin/rest/v2/EncryptionInfo
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/bigtable/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/bigtable/docs/reference/admin/rest/v2/EncryptionInfo
  title: "EncryptionInfo \_|\_ Bigtable \_|\_ Google Cloud Documentation"
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
EncryptionInfo
Stay organized with collections
Save and categorize content based on your preferences.
Encryption information for a given resource. If this resource is protected with customer managed encryption, the in-use Cloud Key Management Service (Cloud KMS) key version is specified along with its status.
JSON representation
{
"encryptionType" : enum ( EncryptionType ) ,
"encryptionStatus" : {
object ( Status )
} ,
"kmsKeyVersion" : string
}
Fields
encryptionType
enum ( EncryptionType )
Output only. The type of encryption used to protect this resource.
encryptionStatus
object ( Status )
Output only. The status of encrypt/decrypt calls on underlying data for this resource. Regardless of status, the existing data is always encrypted at rest.
kmsKeyVersion
string
Output only. The version of the Cloud KMS key specified in the parent cluster that is in use for the data underlying this table.
EncryptionType
Possible encryption types for a resource.
Enums
ENCRYPTION_TYPE_UNSPECIFIED
Encryption type was not specified, though data at rest remains encrypted.
GOOGLE_DEFAULT_ENCRYPTION
The data backing this resource is encrypted at rest with a key that is fully managed by Google. No key version or status will be populated. This is the default state.
CUSTOMER_MANAGED_ENCRYPTION
The data backing this resource is encrypted at rest with a key that is managed by the customer. The in-use version of the key and its status are populated for CMEK-protected tables. CMEK-protected backups are pinned to the key version that was in use at the time the backup was taken. This key version is populated but its status is not tracked and is reported as UNKNOWN .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-03 UTC."],[],[]]
