---
title: "Class Blob.Builder (2.64.0) \_|\_ Java client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage.Blob.Builder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage.Blob.Builder
  title: "Class Blob.Builder (2.64.0) \_|\_ Java client libraries \_|\_ Google Cloud\
    \ Documentation"
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
Class Blob.Builder (2.64.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.64.0 (latest)
2.63.0
2.62.1
2.60.0
2.59.0
2.58.1
2.57.0
2.56.0
2.55.0
2.54.0
2.53.3
2.52.3
2.50.0
2.49.0
2.48.2
2.47.0
2.46.0
2.45.0
2.44.1
2.43.2
2.42.0
2.41.0
2.40.1
2.39.0
2.38.0
2.37.0
2.36.1
2.34.0
2.33.0
2.32.1
2.30.1
2.29.1
2.28.0
2.27.1
2.24.0
2.23.0
2.22.6
2.21.0
2.20.2
2.19.0
2.18.0
2.17.2
2.16.0
2.15.1
2.14.0
2.13.1
2.12.0
2.11.3
2.10.0
2.9.3
2.8.1
2.7.1
2.6.1
2.5.1
2.4.5
2.3.0
2.2.3
2.1.10
public static class Blob . Builder extends BlobInfo . Builder
Builder for Blob .
Inheritance
java.lang.Object >
BlobInfo.Builder >
Blob.Builder
Inherited Members
BlobInfo.Builder.build()
BlobInfo.Builder.setAcl(List<Acl>)
BlobInfo.Builder.setBlobId(BlobId)
BlobInfo.Builder.setCacheControl(String)
BlobInfo.Builder.setContentDisposition(String)
BlobInfo.Builder.setContentEncoding(String)
BlobInfo.Builder.setContentLanguage(String)
BlobInfo.Builder.setContentType(String)
BlobInfo.Builder.setContexts(BlobInfo.ObjectContexts)
BlobInfo.Builder.setCrc32c(String)
BlobInfo.Builder.setCrc32cFromHexString(String)
BlobInfo.Builder.setCustomTime(Long)
BlobInfo.Builder.setCustomTimeOffsetDateTime(OffsetDateTime)
BlobInfo.Builder.setEventBasedHold(Boolean)
BlobInfo.Builder.setMd5(String)
BlobInfo.Builder.setMd5FromHexString(String)
BlobInfo.Builder.setMetadata(@Nullable Map<@NonNull String,@Nullable String>)
BlobInfo.Builder.setRetention(BlobInfo.Retention)
BlobInfo.Builder.setStorageClass(StorageClass)
BlobInfo.Builder.setTemporaryHold(Boolean)
BlobInfo.Builder.setTimeStorageClassUpdated(Long)
BlobInfo.Builder.setTimeStorageClassUpdatedOffsetDateTime(OffsetDateTime)
Object.clone()
Object.equals(Object)
Object.finalize()
Object.getClass()
Object.hashCode()
Object.notify()
Object.notifyAll()
Object.toString()
Object.wait()
Object.wait(long)
Object.wait(long,int)
Methods
build()
public Blob build ()
Creates a BlobInfo object.
Returns
Type
Description
Blob
Overrides
BlobInfo.Builder.build()
setAcl(List<Acl> acl)
public Blob . Builder setAcl ( List<Acl> acl )
Sets the blob's access control configuration.
Parameter
Name
Description
acl
List < Acl >
Returns
Type
Description
Blob.Builder
Overrides
BlobInfo.Builder.setAcl(List<Acl> acl)
setBlobId(BlobId blobId)
public Blob . Builder setBlobId ( BlobId blobId )
Sets the blob identity.
Parameter
Name
Description
blobId
BlobId
Returns
Type
Description
Blob.Builder
Overrides
BlobInfo.Builder.setBlobId(BlobId blobId)
setCacheControl(String cacheControl)
public Blob . Builder setCacheControl ( String cacheControl )
Sets the blob's data cache control.
Parameter
Name
Description
cacheControl
String
Returns
Type
Description
Blob.Builder
Overrides
BlobInfo.Builder.setCacheControl(String cacheControl)
setContentDisposition(String contentDisposition)
public Blob . Builder setContentDisposition ( String contentDisposition )
Sets the blob's data content disposition.
Parameter
Name
Description
contentDisposition
String
Returns
Type
Description
Blob.Builder
Overrides
BlobInfo.Builder.setContentDisposition(String contentDisposition)
setContentEncoding(String contentEncoding)
public Blob . Builder setContentEncoding ( String contentEncoding )
Sets the blob's data content encoding.
Parameter
Name
Description
contentEncoding
String
Returns
Type
Description
Blob.Builder
Overrides
BlobInfo.Builder.setContentEncoding(String contentEncoding)
setContentLanguage(String contentLanguage)
public Blob . Builder setContentLanguage ( String contentLanguage )
Sets the blob's data content language.
Parameter
Name
Description
contentLanguage
String
Returns
Type
Description
Blob.Builder
Overrides
BlobInfo.Builder.setContentLanguage(String contentLanguage)
setContentType(String contentType)
public Blob . Builder setContentType ( String contentType )
Sets the blob's data content type.
Parameter
Name
Description
contentType
String
Returns
Type
Description
Blob.Builder
Overrides
BlobInfo.Builder.setContentType(String contentType)
setContexts(BlobInfo.ObjectContexts contexts)
public Blob . Builder setContexts ( BlobInfo . ObjectContexts contexts )
Parameter
Name
Description
contexts
BlobInfo.ObjectContexts
Returns
Type
Description
Blob.Builder
Overrides
BlobInfo.Builder.setContexts(BlobInfo.ObjectContexts contexts)
setCrc32c(String crc32c)
public Blob . Builder setCrc32c ( String crc32c )
Sets the CRC32C checksum of blob's data as described in RFC 4960, Appendix B; encoded in
base64 in big-endian order.
Parameter
Name
Description
crc32c
String
Returns
Type
Description
Blob.Builder
Overrides
BlobInfo.Builder.setCrc32c(String crc32c)
setCrc32cFromHexString(String crc32cHexString)
public Blob . Builder setCrc32cFromHexString ( String crc32cHexString )
Sets the CRC32C checksum of blob's data as described in RFC 4960, Appendix B; from hex
string.
Parameter
Name
Description
crc32cHexString
String
Returns
Type
Description
Blob.Builder
Overrides
BlobInfo.Builder.setCrc32cFromHexString(String crc32cHexString)
setCustomTime(Long customTime) (deprecated)
public Blob . Builder setCustomTime ( Long customTime )
Deprecated. Use #setCustomTimeOffsetDateTime(OffsetDateTime)
Sets the custom time for an object. Once set it can't be unset and only changed to a custom
datetime in the future. To unset the custom time, you must either perform a rewrite operation
or upload the data again.
Example of setting the custom time.
String bucketName = "my-unique-bucket" ;
String blobName = "my-blob-name" ;
long customTime = 1598423868301L ;
BlobInfo blob = BlobInfo . newBuilder ( bucketName , blobName ). setCustomTime ( customTime ). build ();
Parameter
Name
Description
customTime
Long
Returns
Type
Description
Blob.Builder
Overrides
BlobInfo.Builder.setCustomTime(Long customTime)
setCustomTimeOffsetDateTime(OffsetDateTime customTime)
public BlobInfo . Builder setCustomTimeOffsetDateTime ( OffsetDateTime customTime )
Sets the custom time for an object. Once set it can't be unset and only changed to a custom
datetime in the future. To unset the custom time, you must either perform a rewrite operation
or upload the data again.
Example of setting the custom time.
String bucketName = "my-unique-bucket" ;
String blobName = "my-blob-name" ;
OffsetDateTime customTime = Instant . ofEpochMilli ( 1598423868301L ). atOffset ( 0 ); // UTC
BlobInfo blob = BlobInfo . newBuilder ( bucketName , blobName ). setCustomTime ( customTime ). build ();
Parameter
Name
Description
customTime
OffsetDateTime
Returns
Type
Description
BlobInfo.Builder
Overrides
BlobInfo.Builder.setCustomTimeOffsetDateTime(OffsetDateTime customTime)
setEventBasedHold(Boolean eventBasedHold)
public Blob . Builder setEventBasedHold ( Boolean eventBasedHold )
Sets the blob's event-based hold.
Parameter
Name
Description
eventBasedHold
Boolean
Returns
Type
Description
Blob.Builder
Overrides
BlobInfo.Builder.setEventBasedHold(Boolean eventBasedHold)
setMd5(String md5)
public Blob . Builder setMd5 ( String md5 )
Sets the MD5 hash of blob's data. MD5 value must be encoded in base64.
Parameter
Name
Description
md5
String
Returns
Type
Description
Blob.Builder
Overrides
BlobInfo.Builder.setMd5(String md5)
setMd5FromHexString(String md5HexString)
public Blob . Builder setMd5FromHexString ( String md5HexString )
Sets the MD5 hash of blob's data from hex string.
Parameter
Name
Description
md5HexString
String
Returns
Type
Description
Blob.Builder
Overrides
BlobInfo.Builder.setMd5FromHexString(String md5HexString)
setMetadata(Map<String,String> metadata)
public Blob . Builder setMetadata ( Map<String , String > metadata )
Sets the blob's user provided metadata.
Parameter
Name
Description
metadata
Map < String , String >
Returns
Type
Description
Blob.Builder
Overrides
BlobInfo.Builder.setMetadata(@Nullable Map<@NonNull String,@Nullable String> metadata)
setRetention(BlobInfo.Retention retention)
public Blob . Builder setRetention ( BlobInfo . Retention retention )
Parameter
Name
Description
retention
BlobInfo.Retention
Returns
Type
Description
Blob.Builder
Overrides
BlobInfo.Builder.setRetention(BlobInfo.Retention retention)
setStorageClass(StorageClass storageClass)
public Blob . Builder setStorageClass ( StorageClass storageClass )
Sets the blob's storage class.
Parameter
Name
Description
storageClass
StorageClass
Returns
Type
Description
Blob.Builder
Overrides
BlobInfo.Builder.setStorageClass(StorageClass storageClass)
setTemporaryHold(Boolean temporaryHold)
public Blob . Builder setTemporaryHold ( Boolean temporaryHold )
Sets the blob's temporary hold.
Parameter
Name
Description
temporaryHold
Boolean
Returns
Type
Description
Blob.Builder
Overrides
BlobInfo.Builder.setTemporaryHold(Boolean temporaryHold)
setTimeStorageClassUpdated(Long timeStorageClassUpdated) (deprecated)
public Blob . Builder setTimeStorageClassUpdated ( Long timeStorageClassUpdated )
Deprecated. Use #setTimeStorageClassUpdatedOffsetDateTime(OffsetDateTime)
Sets the modification time of an object's storage class. Once set it can't be unset directly,
the only way is to rewrite the object with the desired storage class.
Parameter
Name
Description
timeStorageClassUpdated
Long
Returns
Type
Description
Blob.Builder
Overrides
BlobInfo.Builder.setTimeStorageClassUpdated(Long timeStorageClassUpdated)
setTimeStorageClassUpdatedOffsetDateTime(OffsetDateTime timeStorageClassUpdated)
public BlobInfo . Builder setTimeStorageClassUpdatedOffsetDateTime ( OffsetDateTime timeStorageClassUpdated )
Parameter
Name
Description
timeStorageClassUpdated
OffsetDateTime
Returns
Type
Description
BlobInfo.Builder
Overrides
BlobInfo.Builder.setTimeStorageClassUpdatedOffsetDateTime(OffsetDateTime timeStorageClassUpdated)
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-14 UTC."],[],[]]
