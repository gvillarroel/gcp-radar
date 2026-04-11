---
title: "Interface BackupOrBuilder (1.89.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.BackupOrBuilder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-filestore/latest/com.google.cloud.filestore.v1.BackupOrBuilder
  title: "Interface BackupOrBuilder (1.89.0) \_|\_ Java client libraries \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Java
Client libraries
Send feedback
Interface BackupOrBuilder (1.89.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.89.0 (latest)
1.88.0
1.86.0
1.84.0
1.83.0
1.82.0
1.81.0
1.79.0
1.77.0
1.76.0
1.75.0
1.74.0
1.73.0
1.71.0
1.69.0
1.68.0
1.65.0
1.64.0
1.63.0
1.61.0
1.60.0
1.59.0
1.58.0
1.57.0
1.56.0
1.55.0
1.54.0
1.53.0
1.52.0
1.50.0
1.49.0
1.48.0
1.47.0
1.46.0
1.45.0
1.44.0
1.43.0
1.42.0
1.41.0
1.40.0
1.38.0
1.37.0
1.36.0
1.35.0
1.34.0
1.33.0
1.32.0
1.31.0
1.30.0
1.29.0
1.28.0
1.25.0
1.24.0
1.23.0
1.22.0
1.21.0
1.20.0
1.19.0
1.18.0
1.17.0
1.16.0
1.15.0
1.14.0
1.13.0
1.12.0
1.10.0
1.9.0
1.8.0
1.7.0
1.6.0
1.5.0
1.2.0
public interface BackupOrBuilder extends MessageOrBuilder
Implements
MessageOrBuilder
Methods
containsLabels(String key)
public abstract boolean containsLabels ( String key )
Resource labels to represent user provided metadata.
map<string, string> labels = 5;
Parameter
Name
Description
key
String
Returns
Type
Description
boolean
containsTags(String key)
public abstract boolean containsTags ( String key )
Optional. Input only. Immutable. Tag key-value pairs bound to this
resource. Each key must be a namespaced name and each value a short name.
Example:
"123456789012/environment" : "production",
"123456789013/costCenter" : "marketing"
See the documentation for more information:
Namespaced name:
https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing#retrieving_tag_key
Short name:
https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing#retrieving_tag_value
map<string, string> tags = 15 [(.google.api.field_behavior) = INPUT_ONLY, (.google.api.field_behavior) = IMMUTABLE, (.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
key
String
Returns
Type
Description
boolean
getCapacityGb()
public abstract long getCapacityGb ()
Output only. Capacity of the source file share when the backup was created.
int64 capacity_gb = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
long
The capacityGb.
getCreateTime()
public abstract Timestamp getCreateTime ()
Output only. The time when the backup was created.
.google.protobuf.Timestamp create_time = 4 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
Timestamp
The createTime.
getCreateTimeOrBuilder()
public abstract TimestampOrBuilder getCreateTimeOrBuilder ()
Output only. The time when the backup was created.
.google.protobuf.Timestamp create_time = 4 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
TimestampOrBuilder
getDescription()
public abstract String getDescription ()
A description of the backup with 2048 characters or less.
Requests with longer descriptions will be rejected.
string description = 2;
Returns
Type
Description
String
The description.
getDescriptionBytes()
public abstract ByteString getDescriptionBytes ()
A description of the backup with 2048 characters or less.
Requests with longer descriptions will be rejected.
string description = 2;
Returns
Type
Description
ByteString
The bytes for description.
getDownloadBytes()
public abstract long getDownloadBytes ()
Output only. Amount of bytes that will be downloaded if the backup is
restored. This may be different than storage bytes, since sequential
backups of the same disk will share storage.
int64 download_bytes = 11 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
long
The downloadBytes.
getFileSystemProtocol()
public abstract Instance . FileProtocol getFileSystemProtocol ()
Output only. The file system protocol of the source Filestore instance that
this backup is created from.
.google.cloud.filestore.v1.Instance.FileProtocol file_system_protocol = 16 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
Instance.FileProtocol
The fileSystemProtocol.
getFileSystemProtocolValue()
public abstract int getFileSystemProtocolValue ()
Output only. The file system protocol of the source Filestore instance that
this backup is created from.
.google.cloud.filestore.v1.Instance.FileProtocol file_system_protocol = 16 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
int
The enum numeric value on the wire for fileSystemProtocol.
getKmsKey()
public abstract String getKmsKey ()
Immutable. KMS key name used for data encryption.
string kms_key = 13 [(.google.api.field_behavior) = IMMUTABLE];
Returns
Type
Description
String
The kmsKey.
getKmsKeyBytes()
public abstract ByteString getKmsKeyBytes ()
Immutable. KMS key name used for data encryption.
string kms_key = 13 [(.google.api.field_behavior) = IMMUTABLE];
Returns
Type
Description
ByteString
The bytes for kmsKey.
getLabels() (deprecated)
public abstract Map<String , String > getLabels ()
Use #getLabelsMap() instead.
Returns
Type
Description
Map < String , String >
getLabelsCount()
public abstract int getLabelsCount ()
Resource labels to represent user provided metadata.
map<string, string> labels = 5;
Returns
Type
Description
int
getLabelsMap()
public abstract Map<String , String > getLabelsMap ()
Resource labels to represent user provided metadata.
map<string, string> labels = 5;
Returns
Type
Description
Map < String , String >
getLabelsOrDefault(String key, String defaultValue)
public abstract String getLabelsOrDefault ( String key , String defaultValue )
Resource labels to represent user provided metadata.
map<string, string> labels = 5;
Parameters
Name
Description
key
String
defaultValue
String
Returns
Type
Description
String
getLabelsOrThrow(String key)
public abstract String getLabelsOrThrow ( String key )
Resource labels to represent user provided metadata.
map<string, string> labels = 5;
Parameter
Name
Description
key
String
Returns
Type
Description
String
getName()
public abstract String getName ()
Output only. The resource name of the backup, in the format
projects/{project_number}/locations/{location_id}/backups/{backup_id} .
string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
String
The name.
getNameBytes()
public abstract ByteString getNameBytes ()
Output only. The resource name of the backup, in the format
projects/{project_number}/locations/{location_id}/backups/{backup_id} .
string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
ByteString
The bytes for name.
getSatisfiesPzi()
public abstract boolean getSatisfiesPzi ()
Output only. Reserved for future use.
bool satisfies_pzi = 14 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
boolean
The satisfiesPzi.
getSatisfiesPzs()
public abstract BoolValue getSatisfiesPzs ()
Output only. Reserved for future use.
.google.protobuf.BoolValue satisfies_pzs = 12 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
BoolValue
The satisfiesPzs.
getSatisfiesPzsOrBuilder()
public abstract BoolValueOrBuilder getSatisfiesPzsOrBuilder ()
Output only. Reserved for future use.
.google.protobuf.BoolValue satisfies_pzs = 12 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
BoolValueOrBuilder
getSourceFileShare()
public abstract String getSourceFileShare ()
Name of the file share in the source Filestore instance that the
backup is created from.
string source_file_share = 9;
Returns
Type
Description
String
The sourceFileShare.
getSourceFileShareBytes()
public abstract ByteString getSourceFileShareBytes ()
Name of the file share in the source Filestore instance that the
backup is created from.
string source_file_share = 9;
Returns
Type
Description
ByteString
The bytes for sourceFileShare.
getSourceInstance()
public abstract String getSourceInstance ()
The resource name of the source Filestore instance, in the format
projects/{project_number}/locations/{location_id}/instances/{instance_id} ,
used to create this backup.
string source_instance = 8 [(.google.api.resource_reference) = { ... }
Returns
Type
Description
String
The sourceInstance.
getSourceInstanceBytes()
public abstract ByteString getSourceInstanceBytes ()
The resource name of the source Filestore instance, in the format
projects/{project_number}/locations/{location_id}/instances/{instance_id} ,
used to create this backup.
string source_instance = 8 [(.google.api.resource_reference) = { ... }
Returns
Type
Description
ByteString
The bytes for sourceInstance.
getSourceInstanceTier()
public abstract Instance . Tier getSourceInstanceTier ()
Output only. The service tier of the source Filestore instance that this
backup is created from.
.google.cloud.filestore.v1.Instance.Tier source_instance_tier = 10 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
Instance.Tier
The sourceInstanceTier.
getSourceInstanceTierValue()
public abstract int getSourceInstanceTierValue ()
Output only. The service tier of the source Filestore instance that this
backup is created from.
.google.cloud.filestore.v1.Instance.Tier source_instance_tier = 10 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
int
The enum numeric value on the wire for sourceInstanceTier.
getState()
public abstract Backup . State getState ()
Output only. The backup state.
.google.cloud.filestore.v1.Backup.State state = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
Backup.State
The state.
getStateValue()
public abstract int getStateValue ()
Output only. The backup state.
.google.cloud.filestore.v1.Backup.State state = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
int
The enum numeric value on the wire for state.
getStorageBytes()
public abstract long getStorageBytes ()
Output only. The size of the storage used by the backup. As backups share
storage, this number is expected to change with backup creation/deletion.
int64 storage_bytes = 7 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
long
The storageBytes.
getTags() (deprecated)
public abstract Map<String , String > getTags ()
Use #getTagsMap() instead.
Returns
Type
Description
Map < String , String >
getTagsCount()
public abstract int getTagsCount ()
Optional. Input only. Immutable. Tag key-value pairs bound to this
resource. Each key must be a namespaced name and each value a short name.
Example:
"123456789012/environment" : "production",
"123456789013/costCenter" : "marketing"
See the documentation for more information:
Namespaced name:
https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing#retrieving_tag_key
Short name:
https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing#retrieving_tag_value
map<string, string> tags = 15 [(.google.api.field_behavior) = INPUT_ONLY, (.google.api.field_behavior) = IMMUTABLE, (.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
int
getTagsMap()
public abstract Map<String , String > getTagsMap ()
Optional. Input only. Immutable. Tag key-value pairs bound to this
resource. Each key must be a namespaced name and each value a short name.
Example:
"123456789012/environment" : "production",
"123456789013/costCenter" : "marketing"
See the documentation for more information:
Namespaced name:
https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing#retrieving_tag_key
Short name:
https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing#retrieving_tag_value
map<string, string> tags = 15 [(.google.api.field_behavior) = INPUT_ONLY, (.google.api.field_behavior) = IMMUTABLE, (.google.api.field_behavior) = OPTIONAL];
Returns
Type
Description
Map < String , String >
getTagsOrDefault(String key, String defaultValue)
public abstract String getTagsOrDefault ( String key , String defaultValue )
Optional. Input only. Immutable. Tag key-value pairs bound to this
resource. Each key must be a namespaced name and each value a short name.
Example:
"123456789012/environment" : "production",
"123456789013/costCenter" : "marketing"
See the documentation for more information:
Namespaced name:
https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing#retrieving_tag_key
Short name:
https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing#retrieving_tag_value
map<string, string> tags = 15 [(.google.api.field_behavior) = INPUT_ONLY, (.google.api.field_behavior) = IMMUTABLE, (.google.api.field_behavior) = OPTIONAL];
Parameters
Name
Description
key
String
defaultValue
String
Returns
Type
Description
String
getTagsOrThrow(String key)
public abstract String getTagsOrThrow ( String key )
Optional. Input only. Immutable. Tag key-value pairs bound to this
resource. Each key must be a namespaced name and each value a short name.
Example:
"123456789012/environment" : "production",
"123456789013/costCenter" : "marketing"
See the documentation for more information:
Namespaced name:
https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing#retrieving_tag_key
Short name:
https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing#retrieving_tag_value
map<string, string> tags = 15 [(.google.api.field_behavior) = INPUT_ONLY, (.google.api.field_behavior) = IMMUTABLE, (.google.api.field_behavior) = OPTIONAL];
Parameter
Name
Description
key
String
Returns
Type
Description
String
hasCreateTime()
public abstract boolean hasCreateTime ()
Output only. The time when the backup was created.
.google.protobuf.Timestamp create_time = 4 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
boolean
Whether the createTime field is set.
hasSatisfiesPzs()
public abstract boolean hasSatisfiesPzs ()
Output only. Reserved for future use.
.google.protobuf.BoolValue satisfies_pzs = 12 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
boolean
Whether the satisfiesPzs field is set.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
