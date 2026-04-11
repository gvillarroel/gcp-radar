---
title: "TransferOptions \_|\_ Storage Transfer Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferOptions
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/storage-transfer/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferOptions
  title: "TransferOptions \_|\_ Storage Transfer Service \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Storage Transfer Service
Reference
Send feedback
TransferOptions
Stay organized with collections
Save and categorize content based on your preferences.
TransferOptions define the actions to be performed on objects in a transfer.
JSON representation
{
"overwriteObjectsAlreadyExistingInSink" : boolean ,
"deleteObjectsUniqueInSink" : boolean ,
"deleteObjectsFromSourceAfterTransfer" : boolean ,
"overwriteWhen" : enum ( OverwriteWhen ) ,
"metadataOptions" : {
object ( MetadataOptions )
}
}
Fields
overwriteObjectsAlreadyExistingInSink
boolean
When to overwrite objects that already exist in the sink. The default is that only objects that are different from the source are overwritten. If true, all objects in the sink whose name matches an object in the source are overwritten with the source object.
deleteObjectsUniqueInSink
boolean
Whether objects that exist only in the sink should be deleted.
Note: This option and deleteObjectsFromSourceAfterTransfer are mutually exclusive.
deleteObjectsFromSourceAfterTransfer
boolean
Whether objects should be deleted from the source after they are transferred to the sink.
Note: This option and deleteObjectsUniqueInSink are mutually exclusive.
overwriteWhen
enum ( OverwriteWhen )
When to overwrite objects that already exist in the sink. If not set, overwrite behavior is determined by overwriteObjectsAlreadyExistingInSink .
metadataOptions
object ( MetadataOptions )
Represents the selected metadata options for a transfer job.
OverwriteWhen
Specifies when to overwrite an object in the sink when an object with matching name is found in the source.
Enums
OVERWRITE_WHEN_UNSPECIFIED
Overwrite behavior is unspecified.
DIFFERENT
Overwrites destination objects with the source objects, only if the objects have the same name but different HTTP ETags or checksum values.
NEVER
Never overwrites a destination object if a source object has the same name. In this case, the source object is not transferred.
ALWAYS
Always overwrite the destination object with the source object, even if the HTTP Etags or checksum values are the same.
MetadataOptions
Specifies the metadata options for running a transfer.
JSON representation
{
"symlink" : enum ( Symlink ) ,
"mode" : enum ( Mode ) ,
"gid" : enum ( GID ) ,
"uid" : enum ( UID ) ,
"acl" : enum ( Acl ) ,
"storageClass" : enum ( StorageClass ) ,
"temporaryHold" : enum ( TemporaryHold ) ,
"kmsKey" : enum ( KmsKey ) ,
"timeCreated" : enum ( TimeCreated )
}
Fields
symlink
enum ( Symlink )
Specifies how symlinks should be handled by the transfer. By default, symlinks are not preserved. Only applicable to transfers involving POSIX file systems, and ignored for other transfers.
mode
enum ( Mode )
Specifies how each file's mode attribute should be handled by the transfer. By default, mode is not preserved. Only applicable to transfers involving POSIX file systems, and ignored for other transfers.
gid
enum ( GID )
Specifies how each file's POSIX group ID (GID) attribute should be handled by the transfer. By default, GID is not preserved. Only applicable to transfers involving POSIX file systems, and ignored for other transfers.
uid
enum ( UID )
Specifies how each file's POSIX user ID (UID) attribute should be handled by the transfer. By default, UID is not preserved. Only applicable to transfers involving POSIX file systems, and ignored for other transfers.
acl
enum ( Acl )
Specifies how each object's ACLs should be preserved for transfers between Google Cloud Storage buckets. If unspecified, the default behavior is the same as ACL_DESTINATION_BUCKET_DEFAULT.
storageClass
enum ( StorageClass )
Specifies the storage class to set on objects being transferred to Google Cloud Storage buckets. If unspecified, the default behavior is the same as STORAGE_CLASS_DESTINATION_BUCKET_DEFAULT .
temporaryHold
enum ( TemporaryHold )
Specifies how each object's temporary hold status should be preserved for transfers between Google Cloud Storage buckets. If unspecified, the default behavior is the same as TEMPORARY_HOLD_PRESERVE .
kmsKey
enum ( KmsKey )
Specifies how each object's Cloud KMS customer-managed encryption key (CMEK) is preserved for transfers between Google Cloud Storage buckets. If unspecified, the default behavior is the same as KMS_KEY_DESTINATION_BUCKET_DEFAULT .
timeCreated
enum ( TimeCreated )
Specifies how each object's timeCreated metadata is preserved for transfers. If unspecified, the default behavior is the same as TIME_CREATED_SKIP . This behavior is supported for transfers to Cloud Storage buckets from Cloud Storage, Amazon S3, S3-compatible storage, and Azure sources.
Symlink
Whether symlinks should be skipped or preserved during a transfer job.
Enums
SYMLINK_UNSPECIFIED
Symlink behavior is unspecified.
SYMLINK_SKIP
Do not preserve symlinks during a transfer job.
SYMLINK_PRESERVE
Preserve symlinks during a transfer job.
Mode
Options for handling file mode attribute.
Enums
MODE_UNSPECIFIED
Mode behavior is unspecified.
MODE_SKIP
Do not preserve mode during a transfer job.
MODE_PRESERVE
Preserve mode during a transfer job.
GID
Options for handling file GID attribute.
Enums
GID_UNSPECIFIED
GID behavior is unspecified.
GID_SKIP
Do not preserve GID during a transfer job.
GID_NUMBER
Preserve GID during a transfer job.
UID
Options for handling file UID attribute.
Enums
UID_UNSPECIFIED
UID behavior is unspecified.
UID_SKIP
Do not preserve UID during a transfer job.
UID_NUMBER
Preserve UID during a transfer job.
Acl
Options for handling Cloud Storage object ACLs.
Enums
ACL_UNSPECIFIED
ACL behavior is unspecified.
ACL_DESTINATION_BUCKET_DEFAULT
Use the destination bucket's default object ACLS, if applicable.
ACL_PRESERVE
Preserve the object's original ACLs. This requires the service account to have storage.objects.getIamPolicy permission for the source object. Uniform bucket-level access must not be enabled on either the source or destination buckets.
StorageClass
Options for handling Google Cloud Storage object storage class.
Enums
STORAGE_CLASS_UNSPECIFIED
Storage class behavior is unspecified.
STORAGE_CLASS_DESTINATION_BUCKET_DEFAULT
Use the destination bucket's default storage class.
STORAGE_CLASS_PRESERVE
Preserve the object's original storage class. This is only supported for transfers from Google Cloud Storage buckets. REGIONAL and MULTI_REGIONAL storage classes will be mapped to STANDARD to ensure they can be written to the destination bucket.
STORAGE_CLASS_STANDARD
Set the storage class to STANDARD.
STORAGE_CLASS_NEARLINE
Set the storage class to NEARLINE.
STORAGE_CLASS_COLDLINE
Set the storage class to COLDLINE.
STORAGE_CLASS_ARCHIVE
Set the storage class to ARCHIVE.
TemporaryHold
Options for handling temporary holds for Google Cloud Storage objects.
Enums
TEMPORARY_HOLD_UNSPECIFIED
Temporary hold behavior is unspecified.
TEMPORARY_HOLD_SKIP
Do not set a temporary hold on the destination object.
TEMPORARY_HOLD_PRESERVE
Preserve the object's original temporary hold status.
KmsKey
Options for handling the KmsKey setting for Google Cloud Storage objects.
Enums
KMS_KEY_UNSPECIFIED
KmsKey behavior is unspecified.
KMS_KEY_DESTINATION_BUCKET_DEFAULT
Use the destination bucket's default encryption settings.
KMS_KEY_PRESERVE
Preserve the object's original Cloud KMS customer-managed encryption key (CMEK) if present. Objects that do not use a Cloud KMS encryption key will be encrypted using the destination bucket's encryption settings.
TimeCreated
Options for handling timeCreated metadata for Google Cloud Storage objects.
Enums
TIME_CREATED_UNSPECIFIED
TimeCreated behavior is unspecified.
TIME_CREATED_SKIP
Do not preserve the timeCreated metadata from the source object.
TIME_CREATED_PRESERVE_AS_CUSTOM_TIME
Preserves the source object's timeCreated or lastModified metadata in the customTime field in the destination object. Note that any value stored in the source object's customTime field will not be propagated to the destination object.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-09 UTC."],[],[]]
