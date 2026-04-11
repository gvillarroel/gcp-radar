---
title: "Class BlobInfo (2.64.0) \_|\_ Java client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage.BlobInfo
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage.BlobInfo
  title: "Class BlobInfo (2.64.0) \_|\_ Java client libraries \_|\_ Google Cloud Documentation"
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
Class BlobInfo (2.64.0)
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
public class BlobInfo implements Serializable
Information about an object in Google Cloud Storage. A BlobInfo object includes the
BlobId instance and the set of properties, such as the blob's access control
configuration, user provided metadata, the CRC32C checksum, etc. Instances of this class are used
to create a new object in Google Cloud Storage or update the properties of an existing object. To
deal with existing Storage objects the API includes the Blob class which extends
BlobInfo and declares methods to perform operations on the object. Neither BlobInfo nor
Blob instances keep the object content, just the object properties.
Example of usage BlobInfo to create an object in Google Cloud Storage:
BlobId blobId = BlobId . of ( bucketName , blobName );
BlobInfo blobInfo = BlobInfo . newBuilder ( blobId ). setContentType ( "text/plain" ). build ();
Blob blob = storage . create ( blobInfo , "Hello, world" . getBytes ( StandardCharsets . UTF_8 ));
See Also: Concepts and Terminology
Inheritance
Object >
BlobInfo
Implements
Serializable
Inherited Members
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
Static Methods
newBuilder(BlobId blobId)
public static BlobInfo . Builder newBuilder ( BlobId blobId )
Returns a BlobInfo builder where blob identity is set using the provided value.
Parameter
Name
Description
blobId
BlobId
Returns
Type
Description
BlobInfo.Builder
newBuilder(BucketInfo bucketInfo, String name)
public static BlobInfo . Builder newBuilder ( BucketInfo bucketInfo , String name )
Returns a BlobInfo builder where blob identity is set using the provided values.
Parameters
Name
Description
bucketInfo
BucketInfo
name
String
Returns
Type
Description
BlobInfo.Builder
newBuilder(BucketInfo bucketInfo, String name, Long generation)
public static BlobInfo . Builder newBuilder ( BucketInfo bucketInfo , String name , Long generation )
Returns a BlobInfo builder where blob identity is set using the provided values.
Parameters
Name
Description
bucketInfo
BucketInfo
name
String
generation
Long
Returns
Type
Description
BlobInfo.Builder
newBuilder(String bucket, String name)
public static BlobInfo . Builder newBuilder ( String bucket , String name )
Returns a BlobInfo builder where blob identity is set using the provided values.
Parameters
Name
Description
bucket
String
name
String
Returns
Type
Description
BlobInfo.Builder
newBuilder(String bucket, String name, Long generation)
public static BlobInfo . Builder newBuilder ( String bucket , String name , Long generation )
Returns a BlobInfo builder where blob identity is set using the provided values.
Parameters
Name
Description
bucket
String
name
String
generation
Long
Returns
Type
Description
BlobInfo.Builder
Methods
equals(Object o)
public boolean equals ( Object o )
Parameter
Name
Description
o
Object
Returns
Type
Description
boolean
Overrides
Object.equals(Object)
getAcl()
public List<Acl> getAcl ()
Returns the blob's access control configuration.
See Also: About Access Control Lists
Returns
Type
Description
List < Acl >
getBlobId()
public BlobId getBlobId ()
Returns the blob's identity.
Returns
Type
Description
BlobId
getBucket()
public String getBucket ()
Returns the name of the containing bucket.
Returns
Type
Description
String
getCacheControl()
public String getCacheControl ()
Returns the blob's data cache control.
See Also: Cache-Control
Returns
Type
Description
String
getComponentCount()
public Integer getComponentCount ()
Returns the number of components that make up this blob. Components are accumulated through the
Storage#compose(Storage.ComposeRequest) operation and are limited to a count of 1024,
counting 1 for each non-composite component blob and componentCount for each composite
component blob. This value is set only for composite blobs.
See Also: Component Count Property
Returns
Type
Description
Integer
getContentDisposition()
public String getContentDisposition ()
Returns the blob's data content disposition.
See Also: Content-Disposition
Returns
Type
Description
String
getContentEncoding()
public String getContentEncoding ()
Returns the blob's data content encoding.
See Also: Content-Encoding
Returns
Type
Description
String
getContentLanguage()
public String getContentLanguage ()
Returns the blob's data content language.
See Also: Content-Language
Returns
Type
Description
String
getContentType()
public String getContentType ()
Returns the blob's data content type.
See Also: Content-Type
Returns
Type
Description
String
getContexts()
public BlobInfo . ObjectContexts getContexts ()
Returns
Type
Description
BlobInfo.ObjectContexts
getCrc32c()
public String getCrc32c ()
Returns the CRC32C checksum of blob's data as described in RFC 4960, Appendix B; encoded in
base64 in big-endian order.
See Also: Hashes and ETags: Best Practices
Returns
Type
Description
String
getCrc32cToHexString()
public String getCrc32cToHexString ()
Returns the CRC32C checksum of blob's data as described in RFC 4960, Appendix B; decoded to
string.
See Also: Hashes and ETags: Best Practices
Returns
Type
Description
String
getCreateTime() (deprecated)
public Long getCreateTime ()
Deprecated. Use #getCreateTimeOffsetDateTime()
Returns the creation time of the blob expressed as the number of milliseconds since the Unix
epoch.
Returns
Type
Description
Long
getCreateTimeOffsetDateTime()
public OffsetDateTime getCreateTimeOffsetDateTime ()
Returns the creation time of the blob.
Returns
Type
Description
OffsetDateTime
getCustomTime() (deprecated)
public Long getCustomTime ()
Deprecated. Use #getCustomTimeOffsetDateTime()
Returns the custom time specified by the user for an object.
Returns
Type
Description
Long
getCustomTimeOffsetDateTime()
public OffsetDateTime getCustomTimeOffsetDateTime ()
Returns the custom time specified by the user for an object.
Returns
Type
Description
OffsetDateTime
getCustomerEncryption()
public BlobInfo . CustomerEncryption getCustomerEncryption ()
Returns information on the customer-supplied encryption key, if the blob is encrypted using
such a key.
Returns
Type
Description
BlobInfo.CustomerEncryption
getDeleteTime() (deprecated)
public Long getDeleteTime ()
Deprecated. Use #getDeleteTimeOffsetDateTime()
Returns the deletion time of the blob expressed as the number of milliseconds since the Unix
epoch.
Returns
Type
Description
Long
getDeleteTimeOffsetDateTime()
public OffsetDateTime getDeleteTimeOffsetDateTime ()
Returns the deletion time of the blob.
Returns
Type
Description
OffsetDateTime
getEtag()
public String getEtag ()
Returns HTTP 1.1 Entity tag for the blob.
See Also: Entity Tags
Returns
Type
Description
String
getEventBasedHold()
public Boolean getEventBasedHold ()
Beta
This feature is covered by the Pre-GA Offerings Terms of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the launch stage descriptions.
Returns a Boolean with either true , null and in certain cases
false .
Case 1: true the field com.google.cloud.storage.Storage.BlobField#EVENT_BASED_HOLD is selected in a Storage#get(BlobId, Storage.BlobGetOption...) and event-based hold for the blob is enabled.
Case 2.1: null the field com.google.cloud.storage.Storage.BlobField#EVENT_BASED_HOLD is selected in a Storage#get(BlobId, Storage.BlobGetOption...) , but event-based hold for the blob is not
enabled. This case can be considered implicitly false .
Case 2.2: null the field com.google.cloud.storage.Storage.BlobField#EVENT_BASED_HOLD is not selected in a Storage#get(BlobId, Storage.BlobGetOption...) , and the state for this field is unknown.
Case 3: false event-based hold is explicitly set to false using in a Builder#setEventBasedHold(Boolean) client side for a follow-up request e.g. Storage#update(BlobInfo, Storage.BlobTargetOption...) in which case the value of event-based
hold will remain false for the given instance.
Returns
Type
Description
Boolean
getGeneratedId()
public String getGeneratedId ()
Returns the service-generated for the blob.
Returns
Type
Description
String
getGeneration()
public Long getGeneration ()
Returns blob's data generation. Used for blob versioning.
Returns
Type
Description
Long
getHardDeleteTime()
public OffsetDateTime getHardDeleteTime ()
If this object has been soft-deleted, returns the time at which it will be permanently deleted.
Returns
Type
Description
OffsetDateTime
getKmsKeyName()
public String getKmsKeyName ()
Returns the Cloud KMS key used to encrypt the blob, if any.
Returns
Type
Description
String
getMd5()
public String getMd5 ()
Returns the MD5 hash of blob's data encoded in base64.
See Also: Hashes and ETags: Best Practices
Returns
Type
Description
String
getMd5ToHexString()
public String getMd5ToHexString ()
Returns the MD5 hash of blob's data decoded to string.
See Also: Hashes and ETags: Best Practices
Returns
Type
Description
String
getMediaLink()
public String getMediaLink ()
Returns the blob's media download link.
Returns
Type
Description
String
getMetadata()
public @Nullable Map < @NonNull String , @Nullable String > getMetadata ()
Returns blob's user provided metadata.
Returns
Type
Description
@org.checkerframework.checker.nullness.qual.Nullable java.util.Map < @org.checkerframework.checker.nullness.qual.NonNull java.lang.String , @org.checkerframework.checker.nullness.qual.Nullable java.lang.String >
getMetageneration()
public Long getMetageneration ()
Returns blob's metageneration. Used for preconditions and for detecting changes in metadata. A
metageneration number is only meaningful in the context of a particular generation of a
particular blob.
Returns
Type
Description
Long
getName()
public String getName ()
Returns the blob's name.
Returns
Type
Description
String
getOwner()
public Acl . Entity getOwner ()
Returns the blob's owner. This will always be the uploader of the blob.
Returns
Type
Description
Acl.Entity
getRetention()
public BlobInfo . Retention getRetention ()
Returns the object's Retention policy.
Returns
Type
Description
BlobInfo.Retention
getRetentionExpirationTime() (deprecated)
public Long getRetentionExpirationTime ()
Beta
This feature is covered by the Pre-GA Offerings Terms of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the launch stage descriptions.
Deprecated. Use #getRetentionExpirationTimeOffsetDateTime()
Returns the retention expiration time of the blob as Long , if a retention period is
defined. If retention period is not defined this value returns null
Returns
Type
Description
Long
getRetentionExpirationTimeOffsetDateTime()
public OffsetDateTime getRetentionExpirationTimeOffsetDateTime ()
Beta
This feature is covered by the Pre-GA Offerings Terms of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the launch stage descriptions.
Returns the retention expiration time of the blob, if a retention period is defined. If
retention period is not defined this value returns null
Returns
Type
Description
OffsetDateTime
getSelfLink()
public String getSelfLink ()
Returns the URI of this blob as a string.
Returns
Type
Description
String
getSize()
public Long getSize ()
Returns the content length of the data in bytes.
See Also: Content-Length
Returns
Type
Description
Long
getSoftDeleteTime()
public OffsetDateTime getSoftDeleteTime ()
If this object has been soft-deleted, returns the time it was soft-deleted.
Returns
Type
Description
OffsetDateTime
getStorageClass()
public StorageClass getStorageClass ()
Returns the storage class of the blob.
Returns
Type
Description
StorageClass
getTemporaryHold()
public Boolean getTemporaryHold ()
Beta
This feature is covered by the Pre-GA Offerings Terms of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the launch stage descriptions.
Returns a Boolean with either true , null and in certain cases
false .
Case 1: true the field com.google.cloud.storage.Storage.BlobField#TEMPORARY_HOLD is selected in a Storage#get(BlobId, Storage.BlobGetOption...) and temporary hold for the blob is enabled.
Case 2.1: null the field com.google.cloud.storage.Storage.BlobField#TEMPORARY_HOLD is selected in a Storage#get(BlobId, Storage.BlobGetOption...) , but temporary hold for the blob is not enabled.
This case can be considered implicitly false .
Case 2.2: null the field com.google.cloud.storage.Storage.BlobField#TEMPORARY_HOLD is not selected in a Storage#get(BlobId, Storage.BlobGetOption...) , and the state for this field is unknown.
Case 3: false event-based hold is explicitly set to false using in a Builder#setEventBasedHold(Boolean) client side for a follow-up request e.g. Storage#update(BlobInfo, Storage.BlobTargetOption...) in which case the value of temporary
hold will remain false for the given instance.
Returns
Type
Description
Boolean
getTimeStorageClassUpdated() (deprecated)
public Long getTimeStorageClassUpdated ()
Deprecated. Use #getTimeStorageClassUpdatedOffsetDateTime()
Returns the time that the object's storage class was last changed or the time of the object
creation.
Returns
Type
Description
Long
getTimeStorageClassUpdatedOffsetDateTime()
public OffsetDateTime getTimeStorageClassUpdatedOffsetDateTime ()
Returns the time that the object's storage class was last changed or the time of the object
creation.
Returns
Type
Description
OffsetDateTime
getUpdateTime() (deprecated)
public Long getUpdateTime ()
Deprecated. Use #getUpdateTimeOffsetDateTime()
Returns the last modification time of the blob's metadata expressed as the number of
milliseconds since the Unix epoch.
Returns
Type
Description
Long
getUpdateTimeOffsetDateTime()
public OffsetDateTime getUpdateTimeOffsetDateTime ()
Returns the last modification time of the blob's metadata.
Returns
Type
Description
OffsetDateTime
hashCode()
public int hashCode ()
Returns
Type
Description
int
Overrides
Object.hashCode()
isDirectory()
public boolean isDirectory ()
Returns true if the current blob represents a directory. This can only happen if the
blob is returned by Storage#list(String, Storage.BlobListOption...) when the Storage.BlobListOption#currentDirectory() option is used. When this is the case only #getBlobId() and #getSize() are set for the current blob: BlobId#getName()
ends with the '/' character, BlobId#getGeneration() returns null and #getSize() is 0 .
Returns
Type
Description
boolean
toBuilder()
public BlobInfo . Builder toBuilder ()
Returns a builder for the current blob.
Returns
Type
Description
BlobInfo.Builder
toString()
public String toString ()
Returns
Type
Description
String
Overrides
Object.toString()
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-14 UTC."],[],[]]
