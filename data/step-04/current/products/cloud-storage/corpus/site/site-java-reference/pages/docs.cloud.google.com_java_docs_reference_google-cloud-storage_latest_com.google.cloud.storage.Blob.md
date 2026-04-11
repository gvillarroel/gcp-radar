---
title: "Class Blob (2.64.0) \_|\_ Java client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage.Blob
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage.Blob
  title: "Class Blob (2.64.0) \_|\_ Java client libraries \_|\_ Google Cloud Documentation"
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
Class Blob (2.64.0)
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
public class Blob extends BlobInfo
An object in Google Cloud Storage. A Blob object includes the BlobId instance,
the set of properties inherited from the BlobInfo class and the Storage instance.
The class provides methods to perform operations on the object. Reading a property value does not
issue any RPC calls. The object content is not stored within the Blob instance.
Operations that access the content issue one or multiple RPC calls, depending on the content
size.
Objects of this class are immutable. Operations that modify the blob like #update and
#copyTo return a new object. Any changes to the object in Google Cloud Storage made after
creation of the Blob are not visible in the Blob . To get a Blob object
with the most recent information use #reload .
Example of getting the content of the object in Google Cloud Storage:
BlobId blobId = BlobId . of ( bucketName , blobName );
Blob blob = storage . get ( blobId );
long size = blob . getSize (); // no RPC call is required
byte [] content = blob . getContent (); // one or multiple RPC calls will be issued
Inheritance
Object >
BlobInfo >
Blob
Inherited Members
BlobInfo.equals(Object)
BlobInfo.getAcl()
BlobInfo.getBlobId()
BlobInfo.getBucket()
BlobInfo.getCacheControl()
BlobInfo.getComponentCount()
BlobInfo.getContentDisposition()
BlobInfo.getContentEncoding()
BlobInfo.getContentLanguage()
BlobInfo.getContentType()
BlobInfo.getContexts()
BlobInfo.getCrc32c()
BlobInfo.getCrc32cToHexString()
BlobInfo.getCreateTime()
BlobInfo.getCreateTimeOffsetDateTime()
BlobInfo.getCustomTime()
BlobInfo.getCustomTimeOffsetDateTime()
BlobInfo.getCustomerEncryption()
BlobInfo.getDeleteTime()
BlobInfo.getDeleteTimeOffsetDateTime()
BlobInfo.getEtag()
BlobInfo.getEventBasedHold()
BlobInfo.getGeneratedId()
BlobInfo.getGeneration()
BlobInfo.getHardDeleteTime()
BlobInfo.getKmsKeyName()
BlobInfo.getMd5()
BlobInfo.getMd5ToHexString()
BlobInfo.getMediaLink()
BlobInfo.getMetadata()
BlobInfo.getMetageneration()
BlobInfo.getName()
BlobInfo.getOwner()
BlobInfo.getRetention()
BlobInfo.getRetentionExpirationTime()
BlobInfo.getRetentionExpirationTimeOffsetDateTime()
BlobInfo.getSelfLink()
BlobInfo.getSize()
BlobInfo.getSoftDeleteTime()
BlobInfo.getStorageClass()
BlobInfo.getTemporaryHold()
BlobInfo.getTimeStorageClassUpdated()
BlobInfo.getTimeStorageClassUpdatedOffsetDateTime()
BlobInfo.getUpdateTime()
BlobInfo.getUpdateTimeOffsetDateTime()
BlobInfo.hashCode()
BlobInfo.isDirectory()
BlobInfo.newBuilder(BlobId)
BlobInfo.newBuilder(BucketInfo,String)
BlobInfo.newBuilder(BucketInfo,String,Long)
BlobInfo.newBuilder(String,String)
BlobInfo.newBuilder(String,String,Long)
BlobInfo.toBuilder()
BlobInfo.toString()
Object.clone()
Object.finalize()
Object.getClass()
Object.notify()
Object.notifyAll()
Object.wait()
Object.wait(long)
Object.wait(long,int)
Methods
asBlobInfo()
public BlobInfo asBlobInfo ()
Drop the held Storage instance.
Returns
Type
Description
BlobInfo
copyTo(BlobId targetBlob, Blob.BlobSourceOption[] options)
public CopyWriter copyTo ( BlobId targetBlob , Blob . BlobSourceOption [] options )
Sends a copy request for the current blob to the target blob. Possibly also some of the
metadata are copied (e.g. content-type).
Example of copying the blob to a different bucket with a different name.
String bucketName = "my_unique_bucket" ;
String blobName = "copy_blob_name" ;
CopyWriter copyWriter = blob . copyTo ( BlobId . of ( bucketName , blobName ));
Blob copiedBlob = copyWriter . getResult ();
Parameters
Name
Description
targetBlob
BlobId target blob's id
options
BlobSourceOption [] source blob options
Returns
Type
Description
CopyWriter
a CopyWriter object that can be used to get information on the newly created
blob or to complete the copy if more than one RPC request is needed
copyTo(String targetBucket, Blob.BlobSourceOption[] options)
public CopyWriter copyTo ( String targetBucket , Blob . BlobSourceOption [] options )
Sends a copy request for the current blob to the target bucket, preserving its name. Possibly
copying also some of the metadata (e.g. content-type).
Example of copying the blob to a different bucket, keeping the original name.
String bucketName = "my_unique_bucket" ;
CopyWriter copyWriter = blob . copyTo ( bucketName );
Blob copiedBlob = copyWriter . getResult ();
Parameters
Name
Description
targetBucket
String target bucket's name
options
BlobSourceOption [] source blob options
Returns
Type
Description
CopyWriter
a CopyWriter object that can be used to get information on the newly created
blob or to complete the copy if more than one RPC request is needed
copyTo(String targetBucket, String targetBlob, Blob.BlobSourceOption[] options)
public CopyWriter copyTo ( String targetBucket , String targetBlob , Blob . BlobSourceOption [] options )
Sends a copy request for the current blob to the target blob. Possibly also some of the
metadata are copied (e.g. content-type).
Example of copying the blob to a different bucket with a different name.
String bucketName = "my_unique_bucket" ;
String blobName = "copy_blob_name" ;
CopyWriter copyWriter = blob . copyTo ( bucketName , blobName );
Blob copiedBlob = copyWriter . getResult ();
Example of moving a blob to a different bucket with a different name.
String destBucket = "my_unique_bucket" ;
String destBlob = "move_blob_name" ;
CopyWriter copyWriter = blob . copyTo ( destBucket , destBlob );
Blob copiedBlob = copyWriter . getResult ();
boolean deleted = blob . delete ();
Parameters
Name
Description
targetBucket
String target bucket's name
targetBlob
String target blob's name
options
BlobSourceOption [] source blob options
Returns
Type
Description
CopyWriter
a CopyWriter object that can be used to get information on the newly created
blob or to complete the copy if more than one RPC request is needed
createAcl(Acl acl)
public Acl createAcl ( Acl acl )
Creates a new ACL entry on this blob.
Example of creating a new ACL entry.
Acl acl = blob . createAcl ( Acl . of ( User . ofAllAuthenticatedUsers (), Acl . Role . READER ));
Parameter
Name
Description
acl
Acl
Returns
Type
Description
Acl
delete(Blob.BlobSourceOption[] options)
public boolean delete ( Blob . BlobSourceOption [] options )
Deletes this blob.
Example of deleting the blob, if its generation matches the Blob#getGeneration()
value, otherwise a StorageException is thrown.
boolean deleted = blob . delete ( BlobSourceOption . generationMatch ());
if ( deleted ) {
// the blob was deleted
} else {
// the blob was not found
}
Parameter
Name
Description
options
BlobSourceOption [] blob delete options
Returns
Type
Description
boolean
true if blob was deleted, false if it was not found
deleteAcl(Acl.Entity entity)
public boolean deleteAcl ( Acl . Entity entity )
Deletes the ACL entry for the specified entity on this blob.
Example of deleting the ACL entry for an entity.
boolean deleted = blob . deleteAcl ( User . ofAllAuthenticatedUsers ());
if ( deleted ) {
// the acl entry was deleted
} else {
// the acl entry was not found
}
Parameter
Name
Description
entity
Acl.Entity
Returns
Type
Description
boolean
true if the ACL was deleted, false if it was not found
downloadTo(OutputStream outputStream, Blob.BlobSourceOption[] options)
public void downloadTo ( OutputStream outputStream , Blob . BlobSourceOption [] options )
Downloads this blob to the given output stream using specified blob read options.
See Also: Storage#downloadTo(BlobId, OutputStream, Storage.BlobSourceOption...)
Parameters
Name
Description
outputStream
OutputStream
options
BlobSourceOption []
downloadTo(Path path)
public void downloadTo ( Path path )
Downloads this blob to the given file path.
This method is replaced with #downloadTo(Path, BlobSourceOption...) , but is kept
here for binary compatibility with the older versions of the client library.
Parameter
Name
Description
path
Path destination
downloadTo(Path path, Blob.BlobSourceOption[] options)
public void downloadTo ( Path path , Blob . BlobSourceOption [] options )
Downloads this blob to the given file path using specified blob read options.
See Also: Storage#downloadTo(BlobId, Path, Storage.BlobSourceOption...)
Parameters
Name
Description
path
Path destination
options
BlobSourceOption [] blob read options
equals(Object obj)
public final boolean equals ( Object obj )
Returns true if obj instance Blob.toPb() metadata representation and
Blob.options instance of StorageOptions are both equal.
Parameter
Name
Description
obj
Object
Returns
Type
Description
boolean
Overrides
BlobInfo.equals(Object o)
exists(Blob.BlobSourceOption[] options)
public boolean exists ( Blob . BlobSourceOption [] options )
Checks if this blob exists.
Example of checking if the blob exists.
boolean exists = blob . exists ();
if ( exists ) {
// the blob exists
} else {
// the blob was not found
}
Parameter
Name
Description
options
BlobSourceOption [] blob read options
Returns
Type
Description
boolean
true if this blob exists, false otherwise
getAcl(Acl.Entity entity)
public Acl getAcl ( Acl . Entity entity )
Returns the ACL entry for the specified entity on this blob or null if not found.
Example of getting the ACL entry for an entity.
Acl acl = blob . getAcl ( User . ofAllAuthenticatedUsers ());
Parameter
Name
Description
entity
Acl.Entity
Returns
Type
Description
Acl
getContent(Blob.BlobSourceOption[] options)
public byte [] getContent ( Blob . BlobSourceOption [] options )
Returns this blob's content.
Example of reading all bytes of the blob, if its generation matches the Blob#getGeneration() value, otherwise a StorageException is thrown.
byte [] content = blob . getContent ( BlobSourceOption . generationMatch ());
Parameter
Name
Description
options
BlobSourceOption [] blob read options
Returns
Type
Description
byte []
getStorage()
public Storage getStorage ()
Returns the blob's Storage object used to issue requests.
Returns
Type
Description
Storage
hashCode()
public final int hashCode ()
Returns
Type
Description
int
Overrides
BlobInfo.hashCode()
listAcls()
public List<Acl> listAcls ()
Lists the ACL entries for this blob.
Example of listing the ACL entries.
List<Acl> acls = blob . listAcls ();
for ( Acl acl : acls ) {
// do something with ACL entry
}
Returns
Type
Description
List < Acl >
reader(Blob.BlobSourceOption[] options)
public ReadChannel reader ( Blob . BlobSourceOption [] options )
Returns a ReadChannel object for reading this blob's content.
Example of reading the blob's content through a reader.
try ( ReadChannel reader = blob . reader ()) {
ByteBuffer bytes = ByteBuffer . allocate ( 64 * 1024 );
while ( reader . read ( bytes ) > 0 ) {
bytes . flip ();
// do something with bytes
bytes . clear ();
}
}
Example of reading just a portion of the blob's content.
int start = 1 ;
int end = 8 ;
try ( ReadChannel reader = blob . reader ()) {
reader . seek ( start );
ByteBuffer bytes = ByteBuffer . allocate ( end - start );
reader . read ( bytes );
return bytes . array ();
}
Parameter
Name
Description
options
BlobSourceOption [] blob read options
Returns
Type
Description
com.google.cloud.ReadChannel
reload(Blob.BlobSourceOption[] options)
public Blob reload ( Blob . BlobSourceOption [] options )
Fetches the latest blob properties. Returns null if the blob no longer exists.
options parameter can contain the preconditions. For example, the user might want to
get the blob properties only if the content has not been updated externally.
StorageException with the code 412 is thrown if preconditions fail.
Example of retrieving the blob's latest information only if the content is not updated
externally:
Blob blob = storage . get ( BlobId . of ( bucketName , blobName ));
doSomething ();
try {
blob = blob . reload ( Blob . BlobSourceOption . generationMatch ());
} catch ( StorageException e ) {
if ( e . getCode () == 412 ) {
// the content was updated externally
} else {
throw e ;
}
}
Parameter
Name
Description
options
BlobSourceOption [] preconditions to use on reload, see https://cloud.google.com/storage/docs/json_api/v1/objects/get
for more information.
Returns
Type
Description
Blob
a Blob object with latest information or null if no longer exists.
signUrl(long duration, TimeUnit unit, Storage.SignUrlOption[] options)
public URL signUrl ( long duration , TimeUnit unit , Storage . SignUrlOption [] options )
Generates a signed URL for this blob. If you want to allow access for a fixed amount of time to
this blob, you can use this method to generate a URL that is only valid within a certain time
period. This is particularly useful if you don't want publicly accessible blobs, but also don't
want to require users to explicitly log in. Signing a URL requires a service account signer. If
an instance of com.google.auth.ServiceAccountSigner was passed to StorageOptions ' builder via setCredentials(Credentials) or the default credentials are
being used and the environment variable GOOGLE_APPLICATION_CREDENTIALS is set or your
application is running in App Engine, then signUrl will use that credentials to sign
the URL. If the credentials passed to StorageOptions do not implement ServiceAccountSigner (this is the case, for instance, for Compute Engine credentials and
Google Cloud SDK credentials) then signUrl will throw an IllegalStateException
unless an implementation of ServiceAccountSigner is passed using the SignUrlOption#signWith(ServiceAccountSigner) option.
A service account signer is looked for in the following order:
The signer passed with the option SignUrlOption#signWith(ServiceAccountSigner)
The credentials passed to StorageOptions
The default credentials, if no credentials were passed to StorageOptions
Example of creating a signed URL for the blob that is valid for 2 weeks, using the default
credentials for signing the URL:
URL signedUrl = blob . signUrl ( 14 , TimeUnit . DAYS );
Example of creating a signed URL for the blob passing the SignUrlOption#signWith(ServiceAccountSigner) option, that will be used to sign the URL:
String keyPath = "/path/to/key.json" ;
URL signedUrl = blob . signUrl ( 14 , TimeUnit . DAYS , SignUrlOption . signWith (
ServiceAccountCredentials . fromStream ( new FileInputStream ( keyPath ))));
Example of creating a signed URL for a blob generation:
URL signedUrl = blob . signUrl ( 1 , TimeUnit . HOURS ,
SignUrlOption . withQueryParams ( ImmutableMap . of ( "generation" , "1576656755290328" )));
See Also: Signed-URLs
Parameters
Name
Description
duration
long time until the signed URL expires, expressed in unit . The finer
granularity supported is 1 second, finer granularities will be truncated
unit
TimeUnit time unit of the duration parameter
options
SignUrlOption [] optional URL signing options
Returns
Type
Description
URL
a signed URL for this blob and the specified options
toBuilder()
public Blob . Builder toBuilder ()
Returns a builder for the current blob.
Returns
Type
Description
Blob.Builder
Overrides
BlobInfo.toBuilder()
update(Storage.BlobTargetOption[] options)
public Blob update ( Storage . BlobTargetOption [] options )
Updates the blob properties. The options parameter contains the preconditions for
applying the update. To update the properties call #toBuilder() , set the properties you
want to change, build the new Blob instance, and then call #update(BlobTargetOption...) .
The property update details are described in Storage#update(BlobInfo) . Storage#update(BlobInfo, BlobTargetOption...) describes how to specify preconditions.
Example of updating the content type:
BlobId blobId = BlobId . of ( bucketName , blobName );
Blob blob = storage . get ( blobId );
blob . toBuilder (). setContentType ( "text/plain" ). build (). update ();
See Also: https://cloud.google.com/storage/docs/json_api/v1/objects/update
Parameter
Name
Description
options
BlobTargetOption [] preconditions to apply the update
Returns
Type
Description
Blob
the updated Blob
updateAcl(Acl acl)
public Acl updateAcl ( Acl acl )
Updates an ACL entry on this blob.
Example of updating a new ACL entry.
Acl acl = blob . updateAcl ( Acl . of ( User . ofAllAuthenticatedUsers (), Acl . Role . OWNER ));
Parameter
Name
Description
acl
Acl
Returns
Type
Description
Acl
writer(Storage.BlobWriteOption[] options)
public WriteChannel writer ( Storage . BlobWriteOption [] options )
Returns a WriteChannel object for writing to this blob. By default any md5 and crc32c
values in the current blob are ignored unless requested via the
BlobWriteOption.md5Match and BlobWriteOption.crc32cMatch options.
Example of writing the blob's content through a writer.
byte [] content = "Hello, World!" . getBytes ( UTF_8 );
try ( WriteChannel writer = blob . writer ()) {
writer . write ( ByteBuffer . wrap ( content , 0 , content . length ));
} catch ( IOException ex ) {
// handle exception
}
blob = blob . reload ();
Parameter
Name
Description
options
BlobWriteOption [] target blob options
Returns
Type
Description
com.google.cloud.WriteChannel
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-14 UTC."],[],[]]
